import { useState } from "react";
import { reportData } from "@/data/igneo-report";
import {
  linkedInMonthlyData, linkedInQuarterlyData,
  contentMixData, topPostsQ1, linkedInHeadline,
} from "@/data/linkedin-data";
import {
  AreaChart, Area, BarChart, Bar, XAxis, YAxis, CartesianGrid, Tooltip,
  ResponsiveContainer, Legend, RadarChart, Radar, PolarGrid, PolarAngleAxis,
  PolarRadiusAxis,
} from "recharts";
import { ExternalLink } from "lucide-react";
import KpiRow from "./KpiRow";

const TABS = ["Timeline", "Content Mix", "Org vs Spn", "Top Posts"] as const;
type Tab = typeof TABS[number];

const CHART_GRID = "rgba(255,255,255,0.06)";
const CHART_TICK = "hsl(0 0% 60%)";
const CHART_TOOLTIP = {
  background: "hsl(214 60% 18%)",
  border: "1px solid rgba(255,255,255,0.1)",
  borderRadius: 12,
  fontSize: 12,
  color: "#fff",
};
const COLOR_ORGANIC = "hsl(172 41% 56%)";   // FSI Green
const COLOR_SPONSORED = "hsl(214 96% 17%)"; // FSI Dark Blue

function formatK(v: number) {
  if (v >= 1_000_000) return `${(v / 1_000_000).toFixed(1)}M`;
  if (v >= 1000) return `${(v / 1000).toFixed(1)}k`;
  return String(v);
}

/* ── Timeline ── */
function TimelineChart() {
  return (
    <ResponsiveContainer width="100%" height={420}>
      <AreaChart data={linkedInMonthlyData} margin={{ top: 20, right: 16, left: -6, bottom: 0 }}>
        <CartesianGrid strokeDasharray="3 3" stroke={CHART_GRID} />
        <XAxis dataKey="month" tick={{ fontSize: 11, fill: CHART_TICK }} />
        <YAxis tick={{ fontSize: 11, fill: CHART_TICK }} tickFormatter={formatK} />
        <Tooltip
          contentStyle={CHART_TOOLTIP}
          formatter={(value: number, name: string) => [
            formatK(value),
            name === "sponsored" ? "Sponsored" : "Organic",
          ]}
        />
        <Legend
          iconType="circle"
          wrapperStyle={{ fontSize: 11, paddingTop: 8 }}
          formatter={(v: string) => (
            <span style={{ color: CHART_TICK }}>
              {v === "sponsored" ? "Sponsored" : "Organic"}
            </span>
          )}
        />
        <Area
          type="monotone"
          dataKey="sponsored"
          stackId="1"
          fill={COLOR_SPONSORED}
          stroke={COLOR_SPONSORED}
          strokeWidth={1}
          fillOpacity={0.4}
        />
        <Area
          type="monotone"
          dataKey="organic"
          stackId="1"
          fill={COLOR_ORGANIC}
          stroke={COLOR_ORGANIC}
          strokeWidth={2}
          fillOpacity={0.5}
        />
      </AreaChart>
    </ResponsiveContainer>
  );
}

/* ── Content Mix (radar + card strip) ── */
function ContentMixChart() {
  // Normalise metrics to 0..100 for radar readability.
  const maxImp = Math.max(...contentMixData.map((d) => d.avgImpressions));
  const maxCtr = Math.max(...contentMixData.map((d) => d.avgCtr));
  const maxEng = Math.max(...contentMixData.map((d) => d.avgEngagement));
  const radarData = contentMixData.map((d) => ({
    category: d.category,
    Engagement: Math.round((d.avgEngagement / maxEng) * 100),
    CTR: Math.round((d.avgCtr / maxCtr) * 100),
    Impressions: Math.round((d.avgImpressions / maxImp) * 100),
  }));

  return (
    <div className="space-y-4">
      <p className="text-[11px] text-muted-foreground">
        Relative performance by content category (normalised).
      </p>
      <ResponsiveContainer width="100%" height={280}>
        <RadarChart data={radarData} outerRadius="75%">
          <PolarGrid stroke={CHART_GRID} />
          <PolarAngleAxis dataKey="category" tick={{ fontSize: 12, fill: "hsl(0 0% 85%)" }} />
          <PolarRadiusAxis angle={90} tick={false} axisLine={false} />
          <Radar
            name="Avg Engagement %"
            dataKey="Engagement"
            stroke={COLOR_ORGANIC}
            fill={COLOR_ORGANIC}
            fillOpacity={0.35}
          />
          <Radar
            name="Avg CTR %"
            dataKey="CTR"
            stroke={COLOR_SPONSORED}
            fill={COLOR_SPONSORED}
            fillOpacity={0.2}
          />
          <Radar
            name="Avg Impressions"
            dataKey="Impressions"
            stroke="#8FB9AA"
            fill="#8FB9AA"
            fillOpacity={0.15}
          />
          <Legend iconType="circle" wrapperStyle={{ fontSize: 11 }} />
          <Tooltip contentStyle={CHART_TOOLTIP} />
        </RadarChart>
      </ResponsiveContainer>

      <div className="grid grid-cols-2 md:grid-cols-4 gap-3">
        {contentMixData.map((c, i) => {
          const dot = [COLOR_ORGANIC, "#999", "#bbb", "#888"][i];
          return (
            <div key={c.category} className="rounded-lg p-3" style={{ background: "rgba(255,255,255,0.04)", border: "1px solid rgba(255,255,255,0.06)" }}>
              <div className="flex items-center gap-1.5 mb-2 text-xs font-semibold text-foreground">
                <span className="w-2 h-2 rounded-full" style={{ background: dot }} />
                {c.category}
              </div>
              <p className="text-lg font-bold text-foreground">{c.posts}</p>
              <p className="text-[10px] uppercase tracking-wider text-muted-foreground">posts</p>
              <p className="text-[11px] text-muted-foreground mt-1">
                Avg CTR: <span className="text-foreground font-semibold">{(c.avgCtr * 100).toFixed(2)}%</span>
              </p>
              <p className="text-[11px] text-muted-foreground">
                Avg Eng: <span className="text-foreground font-semibold">{(c.avgEngagement * 100).toFixed(2)}%</span>
              </p>
            </div>
          );
        })}
      </div>
    </div>
  );
}

/* ── Org vs Spn ── */
function OrgVsSpnChart() {
  return (
    <ResponsiveContainer width="100%" height={400}>
      <BarChart data={linkedInQuarterlyData} margin={{ top: 20, right: 16, left: -6, bottom: 0 }}>
        <CartesianGrid strokeDasharray="3 3" stroke={CHART_GRID} />
        <XAxis dataKey="quarter" tick={{ fontSize: 12, fill: CHART_TICK }} />
        <YAxis tick={{ fontSize: 11, fill: CHART_TICK }} tickFormatter={formatK} />
        <Tooltip contentStyle={CHART_TOOLTIP} formatter={(v: number) => formatK(v)} />
        <Legend iconType="circle" wrapperStyle={{ fontSize: 11, paddingTop: 8 }} />
        <Bar dataKey="organic" name="Organic" stackId="a" fill={COLOR_ORGANIC} radius={[0, 0, 0, 0]} />
        <Bar dataKey="sponsored" name="Sponsored" stackId="a" fill={COLOR_SPONSORED} radius={[6, 6, 0, 0]} />
      </BarChart>
    </ResponsiveContainer>
  );
}

/* ── Top Posts table ── */
function TopPostsTable() {
  return (
    <div>
      <p className="text-[11px] text-muted-foreground mb-3">
        Top {topPostsQ1.length} Q1 posts ranked by click-through rate.
      </p>
      <div className="overflow-hidden rounded-xl border" style={{ borderColor: "rgba(255,255,255,0.08)" }}>
        <table className="w-full text-xs">
          <thead>
            <tr style={{ background: "rgba(255,255,255,0.04)" }}>
              <th className="text-left p-3 font-semibold text-white/60">Post</th>
              <th className="text-left p-3 font-semibold text-white/60">Category</th>
              <th className="text-right p-3 font-semibold text-white/60">CTR</th>
              <th className="text-right p-3 font-semibold text-white/60">Impressions</th>
              <th className="text-right p-3 font-semibold text-white/60">Clicks</th>
              <th className="text-right p-3 font-semibold text-white/60">Eng Rate</th>
              <th className="text-center p-3 font-semibold text-white/60">Link</th>
            </tr>
          </thead>
          <tbody>
            {topPostsQ1.map((post, i) => {
              const catDot = post.category === "Event" ? COLOR_ORGANIC
                : post.category === "Press" ? "#FFCC00"
                : post.category === "Strategy" ? "#8FB9AA"
                : "#B8A0D9";
              return (
                <tr key={i} className="border-t" style={{ borderColor: "rgba(255,255,255,0.06)" }}>
                  <td className="p-3 text-white max-w-[240px]">
                    <div className="font-medium leading-snug">{post.title}</div>
                    <div className="text-[10px] text-white/40 mt-1">{post.date}</div>
                  </td>
                  <td className="p-3">
                    <span className="inline-flex items-center gap-1.5 px-2 py-0.5 rounded-full text-[10px] font-semibold" style={{ background: "rgba(255,255,255,0.06)", color: "hsl(0 0% 85%)" }}>
                      <span className="w-1.5 h-1.5 rounded-full" style={{ background: catDot }} />
                      {post.category}
                    </span>
                  </td>
                  <td className="p-3 text-right tabular-nums text-foreground font-bold">
                    {(post.ctr * 100).toFixed(2)}%
                  </td>
                  <td className="p-3 text-right tabular-nums text-white">{post.impressions.toLocaleString()}</td>
                  <td className="p-3 text-right tabular-nums text-white">{post.clicks.toLocaleString()}</td>
                  <td className="p-3 text-right tabular-nums text-white">{(post.engagementRate * 100).toFixed(2)}%</td>
                  <td className="p-3 text-center">
                    <a
                      href={post.link}
                      target="_blank"
                      rel="noopener noreferrer"
                      className="inline-flex w-6 h-6 rounded-full items-center justify-center"
                      style={{ background: "rgba(255,255,255,0.06)", color: "hsl(0 0% 80%)" }}
                      aria-label="Open post"
                    >
                      <ExternalLink className="w-3 h-3" />
                    </a>
                  </td>
                </tr>
              );
            })}
          </tbody>
        </table>
      </div>
    </div>
  );
}

/* ── Main section ── */
export default function LinkedInSection() {
  const d = reportData.linkedin;
  const [tab, setTab] = useState<Tab>("Timeline");

  const q1 = linkedInHeadline.q1;
  const q4 = linkedInHeadline.q4;
  const pct = (a: number, b: number) => (b === 0 ? "—" : `${a >= b ? "+" : ""}${Math.round(((a - b) / b) * 100)}%`);

  const kpis = [
    { value: formatK(q1.impressions),      label: "Impressions (Q1)", comparison: `${pct(q1.impressions, q4.impressions)} vs Q4` },
    { value: q1.clicks.toLocaleString(),   label: "Clicks (Q1)",      comparison: `${pct(q1.clicks, q4.clicks)} vs Q4` },
    { value: `${(q1.avgCtr * 100).toFixed(1)}%`, label: "Avg CTR",    comparison: `${pct(q1.avgCtr * 100, q4.avgCtr * 100)} vs Q4` },
    { value: String(q1.posts),             label: "Posts",            comparison: `${q1.posts - q4.posts >= 0 ? "+" : ""}${q1.posts - q4.posts} vs Q4 (${q4.posts})` },
  ];

  return (
    <section id="linkedin" className="section-dark py-24 flow-section-dark relative">
      <div className="max-w-[1400px] mx-auto px-4 sm:px-6 lg:px-8 relative z-[1]">
        <div className="flex flex-wrap items-center gap-3 mb-2">
          <h2 className="text-3xl sm:text-4xl font-extrabold text-foreground">{d.title}</h2>
          <span className="stage-badge text-xs">{d.stage}</span>
        </div>
        <p className="text-muted-foreground mb-8">{d.subtitle}</p>

        <div className="grid lg:grid-cols-2 gap-10">
          {/* Left — info */}
          <div className="space-y-6">
            <p className="text-sm leading-relaxed text-muted-foreground">
              Q1 was a two-speed quarter on LinkedIn. Paid spend{" "}
              <strong className="text-foreground font-semibold">more than doubled</strong> —
              sponsored impressions rose from <strong className="text-foreground font-semibold">235.1k in Q4</strong> to{" "}
              <strong className="text-foreground font-semibold">486.5k in Q1</strong> (+107%) — while organic output stayed
              deliberately selective at <strong className="text-foreground font-semibold">10 posts</strong> across AI
              thematic content, FONDS Professionell Kongress (DE) and Institutional Money Kongress (DE). Organic
              impressions came in at <strong className="text-foreground font-semibold">35.9k</strong> (
              <strong className="text-foreground font-semibold">-19% vs Q4's 44.6k</strong>). The top organic post was the{" "}
              <strong className="text-foreground font-semibold">Martin Lau client roundtable</strong> at a{" "}
              <strong className="text-foreground font-semibold">26.5% CTR</strong> (2,779 impressions, 737 clicks),
              followed by the <strong className="text-foreground font-semibold">Genium Recommended</strong> rating and the{" "}
              <strong className="text-foreground font-semibold">Chinese ingenuity</strong> strategy piece.
              Event- and client-led posts outperformed product content, steering the Q2 calendar.
            </p>

            <div>
              <h4 className="text-sm font-bold mb-4 text-foreground">Key Results</h4>
              <div className="space-y-3">
                {kpis.map((k) => (
                  <KpiRow key={k.label} value={k.value} label={k.label} comparison={k.comparison} />
                ))}
              </div>
            </div>

            {d.activities && (
              <div>
                <h4 className="text-sm font-bold mb-3 text-foreground">Activities</h4>
                <div className="flex flex-wrap gap-2">
                  {d.activities.map((a) => (
                    <span key={a} className="glass-pill-dark">{a}</span>
                  ))}
                </div>
              </div>
            )}

            <div className="grid grid-cols-2 gap-4">
              <div className="glass-card-dark flow-corner-bl">
                <h4 className="text-sm font-bold mb-3 text-foreground">Focus in Q1</h4>
                <ul className="space-y-2">
                  {d.focusQ4.map((f) => (
                    <li key={f} className="text-sm flex items-start gap-2 text-muted-foreground">
                      <svg className="w-4 h-4 text-[hsl(142_60%_45%)] shrink-0 mt-0.5" fill="currentColor" viewBox="0 0 20 20">
                        <path fillRule="evenodd" d="M16.707 5.293a1 1 0 010 1.414l-8 8a1 1 0 01-1.414 0l-4-4a1 1 0 011.414-1.414L8 12.586l7.293-7.293a1 1 0 011.414 0z" clipRule="evenodd" />
                      </svg>
                      {f}
                    </li>
                  ))}
                </ul>
              </div>
              <div className="glass-card-dark flow-corner-tr">
                <h4 className="text-sm font-bold mb-3 text-foreground">Focus in Q2</h4>
                <ul className="space-y-2">
                  {d.focusQ1.map((f) => (
                    <li key={f} className="text-sm flex items-start gap-2 text-muted-foreground">
                      <span className="text-primary mt-0.5 shrink-0">+</span>{f}
                    </li>
                  ))}
                </ul>
              </div>
            </div>
          </div>

          {/* Right — charts */}
          <div className="glass-card-dark flow-corner-br min-h-[540px] flex flex-col">
            <div className="flex gap-1 mb-4 overflow-x-auto">
              {TABS.map((t) => (
                <button
                  key={t}
                  onClick={() => setTab(t)}
                  className={`px-3 py-1.5 rounded-full text-xs font-semibold transition-all whitespace-nowrap ${
                    tab === t
                      ? "bg-primary text-primary-foreground"
                      : "text-muted-foreground hover:text-foreground"
                  }`}
                >
                  {t}
                </button>
              ))}
            </div>

            {tab === "Timeline" && (
              <div className="flex-1 flex flex-col">
                <p className="text-xs text-muted-foreground mb-3">Impressions by month — Q4 2025 vs Q1 2026 (organic + sponsored)</p>
                <div className="flex-1 min-h-0">
                  <TimelineChart />
                </div>
              </div>
            )}

            {tab === "Content Mix" && (
              <div>
                <p className="text-xs text-muted-foreground mb-3">Post performance by content category — engagement rate vs CTR vs reach</p>
                <ContentMixChart />
              </div>
            )}

            {tab === "Org vs Spn" && (
              <div>
                <p className="text-xs text-muted-foreground mb-3">Quarterly impressions split: organic vs sponsored</p>
                <OrgVsSpnChart />
              </div>
            )}

            {tab === "Top Posts" && <TopPostsTable />}
          </div>
        </div>
      </div>
    </section>
  );
}
