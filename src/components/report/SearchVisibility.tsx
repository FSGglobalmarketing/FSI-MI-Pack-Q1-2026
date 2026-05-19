import { reportData } from "@/data/igneo-report";
import { LineChart, Line, XAxis, YAxis, CartesianGrid, Tooltip, Legend, ResponsiveContainer, ReferenceArea } from "recharts";
import { useState, useCallback, useRef, useEffect, useMemo } from "react";
import { Switch } from "@/components/ui/switch";
import KpiRow from "./KpiRow";
import Summary from "./Summary";
import { Megaphone, Plus } from "lucide-react";
import { renderInline } from "./inlineMarkdown";
import Summary from "./Summary";

// FSI palette pool used to colour each competitor line. FSI is always
// pulled out first and rendered in accent green. Remaining competitors
// cycle through the palette in the order they appear in the data.
const FSI_COLOR = "#61bdb1";
const PEER_PALETTE = [
  "#EF785B",  // FSI Orange
  "#00727D",  // FSI Teal
  "#CCB296",  // FSI Tan
  "#D5B700",  // FSI Mustard
  "#3FBAD5",  // FSI Light Blue
  "#888888",  // Grey
  "#999999",  // Light grey
  "#aaaaaa",
  "#bbbbbb",
];

// Friendly display name for each competitor data-key.
const KEY_LABEL: Record<string, string> = {
  FSI: "FSI",
  Vanguard: "Vanguard",
  Perpetual: "Perpetual",
  BetaShares: "BetaShares",
  BlackRock: "BlackRock",
  Schroders: "Schroders",
  Fidelity: "Fidelity",
  Pendal: "Pendal",
  Ausbil: "Ausbil",
  Yarra: "Yarra",
  Bennelong: "Bennelong",
  ClearBridge: "ClearBridge",
  MapleBrown: "Maple-Brown Abbott",
  Russell: "Russell",
  AtlasInfra: "Atlas Infra",
  UBS: "UBS",
  OCFunds: "OC Funds",
};

function CustomTooltip({ active, payload, label }: any) {
  if (!active || !payload?.length) return null;
  const sorted = [...payload].sort((a: any, b: any) => {
    if (a.dataKey === "FSI") return -1;
    if (b.dataKey === "FSI") return 1;
    return (b.value ?? 0) - (a.value ?? 0);
  });

  return (
    <div className="bg-background rounded-[10px] px-4 py-3 min-w-[320px] max-w-[420px] border border-foreground/12">
      <p className="text-accent font-medium text-[13px] mb-2">{label}</p>
      <div className="grid grid-cols-2 gap-x-6 gap-y-1">
        {sorted.map((entry: any) => (
          <div key={entry.dataKey} className="flex justify-between gap-3">
            <span className={`text-[11px] ${entry.dataKey === "FSI" ? "text-accent font-medium" : "text-foreground/60"}`}>
              {KEY_LABEL[entry.dataKey] ?? entry.dataKey}
            </span>
            <span className={`text-[11px] tabular-nums ${entry.dataKey === "FSI" ? "text-accent font-medium" : "text-foreground/85"}`}>
              {entry.value}
            </span>
          </div>
        ))}
      </div>
    </div>
  );
}

function ChartScrollContainer({ children, onWheelHandler }: { children: React.ReactNode; onWheelHandler: (e: React.WheelEvent) => void }) {
  const ref = useRef<HTMLDivElement>(null);
  useEffect(() => {
    const el = ref.current;
    if (!el) return;
    const handler = (e: WheelEvent) => { e.preventDefault(); e.stopPropagation(); };
    el.addEventListener("wheel", handler, { passive: false });
    return () => el.removeEventListener("wheel", handler);
  }, []);
  return <div ref={ref} onWheel={onWheelHandler} className="select-none">{children}</div>;
}

const STRATEGY_LABELS: Record<string, string> = {
  "AEQ Growth":      "Australian Equities Growth",
  "GLIS":            "Global Listed Infrastructure",
  "GPS":             "Global Property Securities",
  "STI":             "Short Term Investments",
  "Small & Mid Caps":"Small & Mid Caps",
};

export default function SearchVisibility() {
  const s = reportData.searchVisibility;
  const chartData = (s as any).chartDataByStrategy as Record<string, any[]>;
  const STRATEGIES = useMemo(() => Object.keys(chartData), [chartData]);

  const [strategy, setStrategy] = useState<string>(STRATEGIES[0]);
  const [hiddenLines, setHiddenLines] = useState<Set<string>>(new Set());
  const [showPeers, setShowPeers] = useState(true);

  const allData = chartData[strategy] ?? [];

  // Derive line lineup from the first row of the active strategy. FSI is
  // only included if it appears in the data (e.g. Small & Mid Caps has
  // no FSI track in the rankings export).
  const lineConfig = useMemo(() => {
    if (!allData.length) return [] as { key: string; color: string; width: number; opacity: number }[];
    const keys = Object.keys(allData[0]).filter((k) => k !== "month");
    const hasFSI = keys.includes("FSI");
    const ordered = hasFSI
      ? ["FSI", ...keys.filter((k) => k !== "FSI")]
      : keys;
    let peerIdx = 0;
    return ordered.map((key) => {
      if (key === "FSI") {
        return { key, color: FSI_COLOR, width: 3, opacity: 1 };
      }
      const cfg = {
        key,
        color: PEER_PALETTE[peerIdx % PEER_PALETTE.length],
        width: 1.2,
        opacity: Math.max(0.45, 0.85 - peerIdx * 0.05),
      };
      peerIdx++;
      return cfg;
    });
  }, [allData]);

  const DATA_KEYS = lineConfig.map((l) => l.key);

  const [left, setLeft] = useState(0);
  const [right, setRight] = useState(allData.length - 1);
  const [refAreaLeft, setRefAreaLeft] = useState<number | null>(null);
  const [refAreaRight, setRefAreaRight] = useState<number | null>(null);
  const dragging = useRef(false);

  // When the strategy changes, reset zoom + hidden lines so the new
  // competitor lineup is visible end-to-end.
  useEffect(() => {
    setLeft(0);
    setRight(allData.length - 1);
    setHiddenLines(new Set());
  }, [strategy, allData.length]);

  const visibleData = allData.slice(left, right + 1);
  const visibleKeys = DATA_KEYS.filter((k) => !hiddenLines.has(k) && (k === "FSI" || showPeers));
  let yMax = 0;
  visibleData.forEach((d: any) => {
    visibleKeys.forEach((k) => { if (d[k] > yMax) yMax = d[k]; });
  });
  yMax = Math.ceil(yMax * 1.1);

  const handleLegendClick = useCallback((e: any) => {
    const key = e.dataKey || e.value;
    if (!key) return;
    setHiddenLines((prev) => {
      const next = new Set(prev);
      if (next.has(key)) next.delete(key); else next.add(key);
      return next;
    });
  }, []);

  const handleWheel = useCallback((e: React.WheelEvent) => {
    e.preventDefault();
    const zoomIn = e.deltaY < 0;
    setLeft((l) => {
      setRight((r) => {
        const range = r - l;
        if (zoomIn && range <= 3) return r;
        const step = zoomIn ? 1 : -1;
        const newL = Math.max(0, l + step);
        const newR = Math.min(allData.length - 1, r - step);
        if (newL >= newR) return r;
        setLeft(newL);
        return newR;
      });
      return l;
    });
  }, [allData.length]);

  const onMouseDown = useCallback((e: any) => {
    if (e?.activeLabel) {
      setRefAreaLeft(allData.findIndex((d) => d.month === e.activeLabel));
      dragging.current = true;
    }
  }, [allData]);

  const onMouseMove = useCallback((e: any) => {
    if (dragging.current && e?.activeLabel) {
      setRefAreaRight(allData.findIndex((d) => d.month === e.activeLabel));
    }
  }, [allData]);

  const onMouseUp = useCallback(() => {
    if (refAreaLeft !== null && refAreaRight !== null) {
      const l = Math.min(refAreaLeft, refAreaRight);
      const r = Math.max(refAreaLeft, refAreaRight);
      if (r - l >= 2) { setLeft(l); setRight(r); }
    }
    setRefAreaLeft(null); setRefAreaRight(null); dragging.current = false;
  }, [refAreaLeft, refAreaRight]);

  const resetZoom = useCallback(() => { setLeft(0); setRight(allData.length - 1); }, [allData.length]);
  const isZoomed = left !== 0 || right !== allData.length - 1;

  return (
    <section id="search-visibility" className="section-dark py-24 flow-section-dark relative">
      <div className="max-w-[1400px] mx-auto px-4 sm:px-6 lg:px-8 relative z-[1]">
        {/* Header */}
        <div className="mb-3">
          <span className="stage-badge">Awareness</span>
        </div>
        <h2 className="text-3xl sm:text-4xl font-medium leading-tight mb-2 text-foreground">
          Search engine visibility
        </h2>
        <Summary text={s.description} variant="dark" className="mb-8" />

        <div className="grid lg:grid-cols-2 gap-10">
          {/* Left column */}
          <div className="space-y-6">
            {/* Goals — numbered list */}
            {s.goals && s.goals.length > 0 && (
              <div>
                <h4 className="text-sm font-medium mb-3 text-foreground">Goals</h4>
                <ol className="space-y-2">
                  {s.goals.map((g, i) => (
                    <li key={g} className="text-sm flex items-start gap-3 text-foreground/80">
                      <span className="shrink-0 text-accent font-medium tabular-nums">{String(i + 1).padStart(2, "0")}</span>
                      <span>{renderInline(g, "text-foreground font-medium")}</span>
                    </li>
                  ))}
                </ol>
              </div>
            )}

            {/* Marketing Activities — icon per item */}
            <div>
              <h4 className="text-sm font-medium mb-3 text-foreground">Marketing activities</h4>
              <ul className="space-y-2">
                {s.marketingActivities.map((a) => (
                  <li key={a} className="text-sm flex items-start gap-2.5 text-foreground/80">
                    <Megaphone className="w-4 h-4 shrink-0 mt-0.5 text-accent" />
                    <span>{renderInline(a, "text-foreground font-medium")}</span>
                  </li>
                ))}
              </ul>
            </div>

            {/* Key Results */}
            <div>
              <h4 className="text-sm font-medium mb-4 text-foreground">Key results</h4>
              <div className="space-y-3">
                {s.kpis.map((kpi) => (
                  <KpiRow key={kpi.label} value={kpi.value} label={kpi.label} comparison={kpi.comparison} variant="dark" />
                ))}
              </div>
            </div>
            <div className="grid grid-cols-2 gap-4">
              <div className="glass-card-dark flow-corner-bl">
                <h4 className="text-sm font-medium mb-3 text-foreground">Focus in Q1</h4>
                <ul className="space-y-2">
                  {s.focusAreas.map((item) => (
                    <li key={item} className="text-sm flex items-start gap-2.5 text-foreground/80">
                      <svg className="w-4 h-4 text-accent shrink-0 mt-0.5" fill="currentColor" viewBox="0 0 20 20"><path fillRule="evenodd" d="M16.707 5.293a1 1 0 010 1.414l-8 8a1 1 0 01-1.414 0l-4-4a1 1 0 011.414-1.414L8 12.586l7.293-7.293a1 1 0 011.414 0z" clipRule="evenodd" /></svg>
                      <span>{renderInline(item, "text-foreground font-medium")}</span>
                    </li>
                  ))}
                </ul>
              </div>
              <div className="glass-card-dark flow-corner-tr">
                <h4 className="text-sm font-medium mb-3 text-foreground">Focus in Q2</h4>
                <ul className="space-y-2">
                  {s.nextQuarter.map((item) => (
                    <li key={item} className="text-sm flex items-start gap-2.5 text-foreground/80">
                      <Plus className="w-4 h-4 shrink-0 mt-0.5 text-accent" />
                      <span>{renderInline(item, "text-foreground font-medium")}</span>
                    </li>
                  ))}
                </ul>
              </div>
            </div>
          </div>

          {/* Right column — chart */}
          <div className="glass-card-dark flow-corner-br min-h-[540px] flex flex-col">
            <div className="flex items-start justify-between mb-1">
              <div>
                <h4 className="text-sm font-medium text-foreground mb-1">Keywords ranked — {STRATEGY_LABELS[strategy] ?? strategy}</h4>
                <p className="text-xs text-foreground/60 mb-4">
                  Ranked-keyword count for firstsentierinvestors.com.au and competitor domains tracked
                  in this strategy. Switch the dropdown to view a different strategy and its
                  competitor set.
                </p>
              </div>
              {isZoomed && (
                <button onClick={resetZoom} className="text-xs font-medium text-accent hover:underline shrink-0">Reset zoom</button>
              )}
            </div>
            <div className="flex items-center justify-between flex-wrap gap-3 mb-4">
              <div className="flex items-center gap-2">
                <Switch checked={showPeers} onCheckedChange={setShowPeers} className="scale-75" />
                <span className="text-xs text-foreground/60">Show peers</span>
              </div>
              <div className="flex items-center gap-1 bg-foreground/5 rounded-full p-1 flex-wrap">
                {STRATEGIES.map((st) => (
                  <button
                    key={st}
                    onClick={() => setStrategy(st)}
                    className={`px-3 py-1 rounded-full text-[11px] font-medium transition-colors ${
                      strategy === st
                        ? "bg-accent text-accent-foreground"
                        : "text-foreground/60 hover:text-foreground"
                    }`}
                  >
                    {st}
                  </button>
                ))}
              </div>
            </div>
            <ChartScrollContainer onWheelHandler={handleWheel}>
              <ResponsiveContainer width="100%" height={500}>
                <LineChart data={visibleData} onMouseDown={onMouseDown} onMouseMove={onMouseMove} onMouseUp={onMouseUp}>
                  <CartesianGrid strokeDasharray="3 3" stroke="rgba(255,255,255,0.06)" />
                  <XAxis dataKey="month" tick={{ fontSize: 10, fill: "hsl(0 0% 60%)" }} />
                  <YAxis tick={{ fontSize: 10, fill: "hsl(0 0% 60%)" }} domain={[0, yMax]} />
                  <Tooltip content={<CustomTooltip />} />
                  <Legend
                    wrapperStyle={{ fontSize: 10, cursor: "pointer" }}
                    onClick={handleLegendClick}
                    content={({ payload }) => {
                      if (!payload?.length) return null;
                      const lastDataPoint = visibleData[visibleData.length - 1] || {};
                      const sorted = [...payload].sort((a: any, b: any) => {
                        if (a.dataKey === "FSI") return -1;
                        if (b.dataKey === "FSI") return 1;
                        return (lastDataPoint[b.dataKey as string] ?? 0) - (lastDataPoint[a.dataKey as string] ?? 0);
                      });
                      return (
                        <div className="flex flex-wrap justify-center gap-x-3 gap-y-1 pt-2 text-[10px]">
                          {sorted.map((entry: any) => {
                            const isHidden = hiddenLines.has(entry.dataKey) || (entry.dataKey !== "FSI" && !showPeers);
                            return (
                              <span
                                key={entry.dataKey}
                                onClick={() => handleLegendClick(entry)}
                                className="cursor-pointer"
                                style={{
                                  color: isHidden ? "#ccc" : entry.color,
                                  textDecoration: isHidden ? "line-through" : undefined,
                                }}
                              >
                                ● {KEY_LABEL[entry.dataKey] ?? entry.dataKey}
                              </span>
                            );
                          })}
                        </div>
                      );
                    }}
                  />
                  {lineConfig.map(({ key, color, width, opacity }) => {
                    const isHidden = hiddenLines.has(key) || (key !== "FSI" && !showPeers);
                    return (
                      <Line key={key} type="monotone" dataKey={key} stroke={color} strokeWidth={width} dot={false} strokeOpacity={isHidden ? 0 : opacity} animationDuration={800} hide={isHidden} />
                    );
                  })}
                  {refAreaLeft !== null && refAreaRight !== null && (
                    <ReferenceArea x1={allData[Math.min(refAreaLeft, refAreaRight)]?.month} x2={allData[Math.max(refAreaLeft, refAreaRight)]?.month} strokeOpacity={0.3} fill="rgba(15,154,255,0.1)" />
                  )}
                </LineChart>
              </ResponsiveContainer>
            </ChartScrollContainer>
            <p className="text-[10px] text-foreground/40 mt-2 text-center">Scroll to zoom · Drag to select range · Click legend to toggle</p>
          </div>
        </div>
      </div>
    </section>
  );
}
