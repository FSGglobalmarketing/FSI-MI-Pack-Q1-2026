import { useState, useMemo } from "react";
import { reportData, type EventItem } from "@/data/igneo-report";
import EventsLeafletMap from "./EventsLeafletMap";
import EventsFilterBar from "./EventsFilterBar";
import EventsKPIs from "./EventsKPIs";
import EventDetailModal from "./EventDetailModal";

type FilterState = {
  category: string[];
  region: string[];
  quarter: string[];
  status: string[];
};

export default function EventsSection() {
  const e = reportData.events;
  // Default to Q1 only — user can toggle Q2 etc. on if needed.
  const [filters, setFilters] = useState<FilterState>({
    category: [],
    region: [],
    quarter: ["Q1"],
    status: [],
  });
  const [selectedEvent, setSelectedEvent] = useState<EventItem | null>(null);

  const toggleFilter = (type: keyof FilterState, value: string) => {
    setFilters((prev) => {
      const arr = prev[type];
      return {
        ...prev,
        [type]: arr.includes(value) ? arr.filter((v) => v !== value) : [...arr, value],
      };
    });
  };

  const clearAll = () => setFilters({ category: [], region: [], quarter: [], status: [] });

  // Pre-filter to FSI brand AND only Q1 events that are committed or
  // distribution-owned (i.e. confirmed delivered events for the period).
  const fsiEvents = useMemo(
    () => e.list.filter((ev) =>
      ev.brand === "FSI"
      && ev.quarter === "Q1"
      && (ev.status === "committed" || ev.status === "distribution-owned")
    ),
    [e.list],
  );

  const filteredEvents = useMemo(() => {
    return fsiEvents.filter((ev) => {
      if (filters.category.length && !filters.category.includes(ev.category)) return false;
      if (filters.region.length && !filters.region.includes(ev.region)) return false;
      if (filters.quarter.length && !filters.quarter.includes(ev.quarter)) return false;
      if (filters.status.length && !filters.status.includes(ev.status)) return false;
      return true;
    });
  }, [fsiEvents, filters]);

  return (
    <section id="events" className="section-dark py-24 flow-section-dark relative">
      <div className="max-w-[1400px] mx-auto px-4 sm:px-6 lg:px-8 relative z-[1]">
        <div className="mb-3">
          <span className="stage-badge">{e.stage}</span>
        </div>
        <h2 className="text-3xl sm:text-4xl font-medium leading-tight mb-6 text-foreground">{e.title}</h2>

        <EventsFilterBar
          events={fsiEvents}
          activeFilters={filters}
          onToggleFilter={toggleFilter}
          onClearAll={clearAll}
        />

        <EventsKPIs events={filteredEvents} />

        <EventsLeafletMap filteredEvents={filteredEvents} />

        {/* Events table */}
        <div className="glass-card-dark flow-corner-br overflow-x-auto mt-8">
          <table className="w-full text-sm">
            <thead>
              <tr className="border-b border-foreground/10">
                <th className="text-left py-3 px-4 text-foreground font-medium">Event</th>
                <th className="text-left py-3 px-4 text-foreground font-medium">Team</th>
                <th className="text-left py-3 px-4 text-foreground font-medium">Format</th>
                <th className="text-left py-3 px-4 text-foreground font-medium">Audience</th>
                <th className="text-left py-3 px-4 text-foreground font-medium">Region</th>
              </tr>
            </thead>
            <tbody>
              {filteredEvents.map((ev) => (
                <tr
                  key={`${ev.name}-${ev.city}`}
                  onClick={() => setSelectedEvent(ev)}
                  className="border-b border-foreground/5 hover:bg-foreground/5 transition-colors cursor-pointer"
                >
                  <td className="py-3 px-4 font-medium text-foreground">
                    <div>{ev.name}</div>
                    <div className="text-[10px] text-foreground/40">{ev.city} · {ev.quarter}</div>
                  </td>
                  <td className="py-3 px-4">
                    <div className="flex -space-x-2">
                      {(() => {
                        const people: string[] = [];
                        if (ev.speaker) ev.speaker.split(",").map(s => s.trim()).forEach(s => people.push(s));
                        if (ev.marketingLead && !people.includes(ev.marketingLead)) people.push(ev.marketingLead);
                        if (ev.distributionLead) ev.distributionLead.split("/").map(s => s.trim()).forEach(s => { if (!people.includes(s)) people.push(s); });
                        if (people.length === 0) return <span className="text-foreground/30 text-xs">—</span>;
                        const colors = ["#61bdb1", "#CCB296", "#EF785B", "#D5B700", "#3FBAD5"];
                        return people.slice(0, 3).map((name, i) => {
                          const initials = name.split(" ").map(w => w[0]).join("").slice(0, 2).toUpperCase();
                          return (
                            <div key={i} className="w-7 h-7 rounded-full flex items-center justify-center text-[9px] font-medium text-white border-2 border-background" style={{ backgroundColor: colors[i % colors.length] }} title={name}>
                              {initials}
                            </div>
                          );
                        });
                      })()}
                      {(() => {
                        const people: string[] = [];
                        if (ev.speaker) ev.speaker.split(",").map(s => s.trim()).forEach(s => people.push(s));
                        if (ev.marketingLead) people.push(ev.marketingLead);
                        if (ev.distributionLead) ev.distributionLead.split("/").map(s => s.trim()).forEach(s => people.push(s));
                        return people.length > 3 ? <div className="w-7 h-7 rounded-full flex items-center justify-center text-[9px] font-medium text-foreground bg-foreground/10 border-2 border-background">+{people.length - 3}</div> : null;
                      })()}
                    </div>
                  </td>
                  <td className="py-3 px-4 text-foreground/70">{ev.format}</td>
                  <td className="py-3 px-4 text-foreground/70">{ev.audience}</td>
                  <td className="py-3 px-4 text-foreground/70">{ev.region}</td>
                </tr>
              ))}
            </tbody>
          </table>
        </div>
      </div>

      {selectedEvent && (
        <EventDetailModal event={selectedEvent} onClose={() => setSelectedEvent(null)} />
      )}
    </section>
  );
}
