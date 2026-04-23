import {
  PieChart, Pie, Cell, BarChart, Bar, XAxis, YAxis, CartesianGrid, Tooltip,
  ResponsiveContainer,
} from "recharts";
import { Users, MessageCircle, CheckCircle2 } from "lucide-react";
import {
  webinarKpis, attendanceMix, attendeesByCountry, topAttendingFirms,
  opportunityMatches,
} from "@/data/webinar-data";

// FSSA cream-section palette
const NAVY       = "#0f2d52";
const NAVY_SOFT  = "#475966";
const NAVY_MUTED = "rgba(15,45,82,0.55)";
const BORDER     = "rgba(15,45,82,0.12)";
const BORDER_SOFT = "rgba(15,45,82,0.06)";
const FILL_SOFT  = "rgba(15,45,82,0.04)";
const RED        = "#e22e2c";
const LIGHT_BLUE = "#3699c9";

const TOOLTIP = {
  background: "#ffffff",
  border: `1px solid ${BORDER}`,
  borderRadius: 10,
  fontSize: 12,
  color: NAVY,
};

export default function WebinarAnalytics() {
  return (
    <div
      className="rounded-xl p-6 space-y-6 w-full"
      style={{
        backgroundColor: "#ffffff",
        border: `1px solid ${BORDER}`,
      }}
    >
      <div>
        <h3 className="text-sm font-extrabold tracking-wide mb-1" style={{ color: NAVY }}>
          Attendee analytics
        </h3>
        <p className="text-xs" style={{ color: NAVY_MUTED }}>
          68 unique attendees across 60 firms · Mar 2026 session + on-demand window.
        </p>
      </div>

      {/* KPI grid */}
      <div className="grid grid-cols-2 gap-2">
        {webinarKpis.map((kpi) => (
          <div
            key={kpi.label}
            className="rounded-lg p-3"
            style={{ background: FILL_SOFT, border: `1px solid ${BORDER_SOFT}` }}
          >
            <div className="text-[10px] tracking-wide" style={{ color: NAVY_MUTED }}>{kpi.label}</div>
            <div className="text-2xl font-extrabold" style={{ color: NAVY }}>{kpi.value}</div>
            {kpi.sub && <div className="text-[10px] mt-0.5" style={{ color: NAVY_MUTED }}>{kpi.sub}</div>}
          </div>
        ))}
      </div>

      {/* Attendance mode donut */}
      <div>
        <h4 className="text-[11px] tracking-wide mb-2 font-semibold" style={{ color: NAVY_MUTED }}>
          Attendance mode
        </h4>
        <div className="flex items-center gap-4">
          <div className="w-32 h-32 shrink-0">
            <ResponsiveContainer width="100%" height="100%">
              <PieChart>
                <Pie
                  data={attendanceMix}
                  dataKey="count"
                  nameKey="mode"
                  innerRadius={32}
                  outerRadius={52}
                  paddingAngle={2}
                  stroke="none"
                >
                  {attendanceMix.map((d) => (
                    <Cell key={d.mode} fill={d.color} />
                  ))}
                </Pie>
                <Tooltip contentStyle={TOOLTIP} />
              </PieChart>
            </ResponsiveContainer>
          </div>
          <div className="flex flex-col gap-1.5 flex-1">
            {attendanceMix.map((d) => (
              <div key={d.mode} className="flex items-center justify-between text-xs">
                <div className="flex items-center gap-2">
                  <span className="w-2.5 h-2.5 rounded-sm" style={{ background: d.color }} />
                  <span style={{ color: NAVY_SOFT }}>{d.mode}</span>
                </div>
                <span className="font-bold tabular-nums" style={{ color: NAVY }}>{d.count}</span>
              </div>
            ))}
          </div>
        </div>
      </div>

      {/* Countries */}
      <div>
        <h4 className="text-[11px] tracking-wide mb-2 font-semibold" style={{ color: NAVY_MUTED }}>
          Attendees by region
        </h4>
        <ResponsiveContainer width="100%" height={140}>
          <BarChart data={attendeesByCountry} layout="vertical" margin={{ left: 10, right: 16, top: 0, bottom: 0 }}>
            <CartesianGrid strokeDasharray="3 3" horizontal={false} stroke={BORDER} />
            <XAxis type="number" tick={{ fontSize: 10, fill: NAVY_MUTED }} />
            <YAxis
              type="category"
              dataKey="country"
              width={110}
              tick={{ fontSize: 11, fill: NAVY }}
            />
            <Tooltip contentStyle={TOOLTIP} />
            <Bar dataKey="count" fill={LIGHT_BLUE} radius={[0, 4, 4, 0]} barSize={14} />
          </BarChart>
        </ResponsiveContainer>
      </div>

      {/* Top firms */}
      <div>
        <h4 className="text-[11px] tracking-wide mb-2 font-semibold" style={{ color: NAVY_MUTED }}>
          Top attending firms (2+)
        </h4>
        <div className="space-y-1.5">
          {topAttendingFirms.map((f) => (
            <div key={f.firm} className="flex items-center justify-between text-xs">
              <div className="flex items-center gap-2" style={{ color: NAVY }}>
                <Users className="w-3 h-3" style={{ color: NAVY_MUTED }} />
                <span>{f.firm}</span>
              </div>
              <span className="font-bold tabular-nums" style={{ color: RED }}>{f.count}</span>
            </div>
          ))}
        </div>
      </div>

      {/* Salesforce opp crossover */}
      <div>
        <div className="flex items-center gap-2 mb-2">
          <CheckCircle2 className="w-4 h-4" style={{ color: RED }} />
          <h4 className="text-[11px] tracking-wide font-semibold" style={{ color: NAVY_MUTED }}>
            Live Salesforce opportunities in the room
          </h4>
        </div>
        <p className="text-[11px] mb-3 leading-relaxed" style={{ color: NAVY_SOFT }}>
          Four webinar attendees' firms are also live (non-lost) opportunities in the CRM,
          giving distribution a warm follow-up hook.
        </p>
        <div className="rounded-lg overflow-hidden border" style={{ borderColor: BORDER }}>
          <table className="w-full text-[11px]">
            <thead>
              <tr style={{ background: FILL_SOFT }}>
                <th className="text-left p-2 font-semibold" style={{ color: NAVY_MUTED }}>Firm</th>
                <th className="text-left p-2 font-semibold" style={{ color: NAVY_MUTED }}>Stage</th>
                <th className="text-left p-2 font-semibold" style={{ color: NAVY_MUTED }}>Strategy</th>
              </tr>
            </thead>
            <tbody>
              {opportunityMatches.map((m) => (
                <tr key={m.attendee} className="border-t" style={{ borderColor: BORDER_SOFT }}>
                  <td className="p-2 font-medium" style={{ color: NAVY }}>{m.attendee}</td>
                  <td className="p-2">
                    <span
                      className="inline-block px-2 py-0.5 rounded-full text-[10px] font-semibold"
                      style={{
                        background:
                          m.stage.match(/Active Engagement/) ? "rgba(54,153,201,0.15)" :
                          m.stage.match(/Won|Funded/) ? "rgba(226,46,44,0.15)" :
                          "rgba(143,185,170,0.2)",
                        color:
                          m.stage.match(/Active Engagement/) ? "#1d6a8f" :
                          m.stage.match(/Won|Funded/) ? "#b02421" :
                          "#4a7f71",
                      }}
                    >
                      {m.stage.replace(/^\d+-/, "").replace(/\/.*$/, "").trim()}
                    </span>
                  </td>
                  <td className="p-2" style={{ color: NAVY_SOFT }}>{m.strategy}</td>
                </tr>
              ))}
            </tbody>
          </table>
        </div>
      </div>

      {/* Question count callout */}
      <div
        className="rounded-lg p-3 flex items-start gap-2.5"
        style={{ background: "rgba(226,46,44,0.06)", border: "1px solid rgba(226,46,44,0.2)" }}
      >
        <MessageCircle className="w-4 h-4 shrink-0 mt-0.5" style={{ color: RED }} />
        <div className="text-xs leading-relaxed" style={{ color: NAVY }}>
          <span className="font-bold">6 attendees asked substantive questions live</span> — spanning
          geopolitics (Taiwan/Iran), Stewart→FSSA fund merger clarity, CATL ownership and USD-strength
          impact. Full transcript in the recording.
        </div>
      </div>
    </div>
  );
}
