import { useState } from "react";
import {
  BarChart, Bar, XAxis, YAxis, CartesianGrid, Tooltip,
  ResponsiveContainer, Legend,
} from "recharts";
import { AlertCircle } from "lucide-react";
import {
  clientEngagementHeadlineKpis,
  emailFunnelStrip,
  emailTabKpis,
  emailFunnelQ1VsQ4,
  topCompaniesQ1,
  topStrategiesQ1,
  topStrategiesQ4,
  topCampaignsQ1,
  anzPreviewCampaignsQ1,
} from "@/data/salesforce-data";

const TABS = ["Email", "Companies", "Strategies", "Campaigns"] as const;
type Tab = (typeof TABS)[number];

// FSI palette
const SECTION_BG = "hsl(var(--cream))";
const INNER_BG   = "hsl(31 33% 95%)";
const STRIP_BG   = "hsl(213 96% 17%)";
const CHART_GRID = "rgba(0,0,0,0.06)";
const CHART_TICK_LIGHT = "hsl(213 96% 17%)";
const CHART_TICK_DIM   = "hsl(213 13% 43%)";
const CHART_TOOLTIP = {
  background: "hsl(0 0% 100%)",
  border: "1px solid rgba(0,0,0,0.12)",
  borderRadius: 12,
  fontSize: 12,
  color: "hsl(213 96% 17%)",
};
const CHART_CURSOR = { fill: "rgba(0,0,0,0.04)" };

// Funnel-strip metric colors (on dark navy strip)
const STRIP_COLORS: Record<string, string> = {
  sent:    "hsl(0 0% 70%)",
  opens:   "#3FBAD5",
  clicks:  "#61bdb1",
  bounces: "#EF785B",
  optouts: "#D5B700",
};

const BAR_OPENS    = "#61bdb1";
const BAR_CLICKS   = "#EF785B";
const BAR_BOUNCES  = "#D5B700";
const BAR_OPTOUTS  = "#3FBAD5";
const BAR_TOTAL    = "#61bdb1";

export default function SalesforceSection() {
  const [activeTab, setActiveTab] = useState<Tab>("Email");

  return (
    <section
      id="salesforce"
      className="py-16 sm:py-20 border-t border-border"
      style={{ backgroundColor: SECTION_BG, color: "hsl(213 96% 17%)" }}
    >
      <div className="max-w-[1400px] mx-auto px-4 sm:px-6 lg:px-8">
        <div className="mb-3">
          <span className="stage-badge">Marketing funnel</span>
        </div>
        <h2 className="text-2xl sm:text-3xl font-medium leading-tight mb-2 text-secondary-foreground">
          Client engagement
        </h2>
        <p className="text-sm text-secondary-foreground/65 mb-6">
          Tracking client interactions across marketing emails.
        </p>

        {/* Data refresh banner */}
        <div
          className="rounded-xl px-4 py-3 mb-8 flex items-start gap-3"
          style={{ background: "hsl(40 80% 92%)", border: "1px solid hsl(40 60% 75%)" }}
        >
          <AlertCircle className="w-4 h-4 mt-0.5 shrink-0" style={{ color: "hsl(31 70% 38%)" }} />
          <div className="text-xs text-secondary-foreground/85 leading-relaxed">
            <span className="font-medium text-secondary-foreground">Data refresh in progress.</span>{" "}
            Salesforce's List Email Statistics report surfaces <span className="font-medium">84 campaign sends</span>{" "}
            across Q4 2025 + Q1 2026 to date — totals below reflect that full universe. The
            breakdown tabs (Companies, Strategies, Campaigns) currently show only the FSI EMEA
            Pardot subset (6 Q1 sends, 1,302 emails). A clean FSI-only, brand-split, Q4-vs-Q1
            breakdown lands with tomorrow's data pull.
          </div>
        </div>

        {/* Narrative + 2x2 headline KPI grid */}
        <div className="grid lg:grid-cols-2 gap-8 mb-6 items-start">
          <div className="text-secondary-foreground/75 leading-relaxed space-y-3">
            <p>
              Across the visible period, FSI's marketing engine delivered{" "}
              <span className="text-secondary-foreground font-medium">18,819 emails</span> across{" "}
              <span className="text-secondary-foreground font-medium">84 campaign sends</span>, generating{" "}
              <span className="text-secondary-foreground font-medium">6,666 unique opens (35.82%)</span>,{" "}
              <span className="text-secondary-foreground font-medium">1,247 unique clicks (6.70%)</span>{" "}
              and a click-to-open ratio of{" "}
              <span className="text-secondary-foreground font-medium">18.71%</span>.
            </p>
            <p>
              The biggest Q1 push by volume was the{" "}
              <span className="text-secondary-foreground font-medium">ANZ AEQ Reporting Season Podcast</span>{" "}
              campaign cluster — four sends in mid-March totalling{" "}
              <span className="text-secondary-foreground font-medium">~5,000 recipients</span> across
              wholesale, institutional and regional NSW lists. This sits alongside the EMEA GLIS Q4
              quarterly-update cycle (5 sends, 1,190 emails) which we already report in detail below.
            </p>
            <p>
              Sub-brand activity (RQI, Igneo, FSSA, Altacore) is mixed into the Salesforce universe
              numbers above. Tomorrow's refresh will split brand-by-brand and quarter-by-quarter so we
              can compare like-for-like.
            </p>
            <p>
              The <span className="text-secondary-foreground font-medium">Companies / Strategies / Campaigns</span>{" "}
              tabs below currently surface the FSI EMEA subset only — these numbers are accurate
              within their scope but represent only ~7% of the total send volume revealed by the
              Salesforce export.
            </p>
          </div>

          <div className="grid grid-cols-2 gap-3">
            {clientEngagementHeadlineKpis.map((kpi) => (
              <div
                key={kpi.label}
                className="rounded-lg px-4 py-3"
                style={{ background: "hsl(0 0% 100%)", border: "1px solid rgba(0,0,0,0.08)" }}
              >
                <div className="flex items-baseline gap-2">
                  <span className="text-primary text-sm">+</span>
                  <span className="text-xl sm:text-2xl font-medium text-secondary-foreground tabular-nums">
                    {kpi.value}
                  </span>
                </div>
                <div className="text-[11px] font-medium text-secondary-foreground mt-1">{kpi.label}</div>
                <div className="text-[10px] text-secondary-foreground/55">{kpi.comparison}</div>
              </div>
            ))}
          </div>
        </div>

        {/* Dark funnel strip */}
        <div
          className="rounded-xl px-6 py-5 mb-6 grid grid-cols-2 sm:grid-cols-5 gap-4"
          style={{ background: STRIP_BG, color: "hsl(0 0% 100%)" }}
        >
          {emailFunnelStrip.map((m) => (
            <div key={m.key} className="text-center">
              <div className="text-[10px] uppercase tracking-wider text-white/55 mb-1">{m.label}</div>
              <div className="text-2xl sm:text-3xl font-medium tabular-nums" style={{ color: STRIP_COLORS[m.key] }}>
                {m.q1.toLocaleString()}
              </div>
              <div className={`text-[10px] mt-1 ${m.deltaPositive ? "text-white/65" : "text-white/65"}`}>
                {m.delta}
              </div>
            </div>
          ))}
        </div>

        {/* Tabs */}
        <div className="flex gap-2 mb-4 overflow-x-auto">
          {TABS.map((tab) => (
            <button
              key={tab}
              onClick={() => setActiveTab(tab)}
              className={`px-4 py-2 rounded-full text-sm font-medium whitespace-nowrap transition-colors ${
                activeTab === tab
                  ? "bg-accent text-accent-foreground"
                  : "bg-secondary-foreground/10 text-secondary-foreground/75 hover:bg-secondary-foreground/20"
              }`}
            >
              {tab}
            </button>
          ))}
        </div>

        <div
          className="rounded-2xl p-6 overflow-hidden"
          style={{ backgroundColor: INNER_BG, border: "1px solid rgba(0,0,0,0.08)" }}
        >
          {activeTab === "Email"      && <EmailTab />}
          {activeTab === "Companies"  && <CompaniesTab />}
          {activeTab === "Strategies" && <StrategiesTab />}
          {activeTab === "Campaigns"  && <CampaignsTab />}
        </div>
      </div>
    </section>
  );
}

// ─────────────────────────────────────────────────────────────────────────
// Email tab — Salesforce universe view
// ─────────────────────────────────────────────────────────────────────────
function EmailTab() {
  return (
    <div className="space-y-8">
      <div className="grid grid-cols-2 lg:grid-cols-4 gap-3">
        {emailTabKpis.map((k) => (
          <div
            key={k.label}
            className="rounded-lg px-4 py-3"
            style={{ background: "hsl(0 0% 100%)", border: "1px solid rgba(0,0,0,0.08)" }}
          >
            <div className="text-[10px] uppercase tracking-wider text-secondary-foreground/55 mb-1">{k.label}</div>
            <div className="text-2xl font-medium text-secondary-foreground tabular-nums">{k.value}</div>
            <div className="text-[11px] text-secondary-foreground/70">{k.delta}</div>
            <div className="text-[10px] text-secondary-foreground/55 mt-0.5">{k.q4}</div>
          </div>
        ))}
      </div>

      <div>
        <h3 className="text-lg font-medium mb-1 text-secondary-foreground">Email funnel — period total</h3>
        <p className="text-xs text-secondary-foreground/55 mb-4">
          Salesforce universe view: every campaign send across Q4 2025 + Q1 2026 to date, all
          brands. Quarter-by-quarter split returns once the brand-clean data pull lands tomorrow.
        </p>
        <ResponsiveContainer width="100%" height={340}>
          <BarChart data={emailFunnelQ1VsQ4} margin={{ left: 10, right: 20, top: 10, bottom: 5 }}>
            <CartesianGrid strokeDasharray="3 3" vertical={false} stroke={CHART_GRID} />
            <XAxis dataKey="metric" tick={{ fontSize: 12, fill: CHART_TICK_LIGHT }} />
            <YAxis tick={{ fontSize: 11, fill: CHART_TICK_DIM }} />
            <Tooltip contentStyle={CHART_TOOLTIP} cursor={CHART_CURSOR} />
            <Legend wrapperStyle={{ color: "hsl(213 13% 43%)", paddingTop: 4 }} />
            <Bar dataKey="q1" name="Q4 2025 + Q1 2026" fill={BAR_TOTAL} radius={[6, 6, 0, 0]} />
          </BarChart>
        </ResponsiveContainer>
      </div>
    </div>
  );
}

// ─────────────────────────────────────────────────────────────────────────
// Companies tab — FSI EMEA Pardot subset
// ─────────────────────────────────────────────────────────────────────────
function CompaniesTab() {
  return (
    <div className="space-y-8">
      <SubsetNote scope="FSI EMEA Pardot subset · 6 Q1 sends · 1,302 emails" />
      <div>
        <h3 className="text-lg font-medium mb-1 text-secondary-foreground">Top companies by Q1 engagement</h3>
        <p className="text-xs text-secondary-foreground/55 mb-4">
          Top 15 firms by total response (opens + clicks + bounces + opt-outs) across the FSI EMEA
          Q1 Pardot sends. ANZ + sub-brand companies will appear once tomorrow's full data pull
          lands.
        </p>
        <ResponsiveContainer width="100%" height={520}>
          <BarChart data={topCompaniesQ1} layout="vertical" margin={{ left: 20, right: 30, top: 5, bottom: 5 }}>
            <CartesianGrid strokeDasharray="3 3" horizontal={false} stroke={CHART_GRID} />
            <XAxis type="number" tick={{ fontSize: 11, fill: CHART_TICK_DIM }} />
            <YAxis type="category" dataKey="company" width={280} tick={{ fontSize: 11, fill: CHART_TICK_LIGHT }} />
            <Tooltip contentStyle={CHART_TOOLTIP} cursor={CHART_CURSOR} />
            <Legend wrapperStyle={{ color: "hsl(213 13% 43%)", paddingTop: 4 }} />
            <Bar dataKey="opens"    name="Opens"    stackId="a" fill={BAR_OPENS} />
            <Bar dataKey="clicks"   name="Clicks"   stackId="a" fill={BAR_CLICKS} />
            <Bar dataKey="bounces"  name="Bounces"  stackId="a" fill={BAR_BOUNCES} />
            <Bar dataKey="optouts"  name="Opt-outs" stackId="a" fill={BAR_OPTOUTS} radius={[0, 6, 6, 0]} />
          </BarChart>
        </ResponsiveContainer>
      </div>

      <div className="overflow-hidden rounded-xl border" style={{ borderColor: "rgba(0,0,0,0.1)" }}>
        <table className="w-full text-sm">
          <thead>
            <tr style={{ background: "hsl(0 0% 100%)" }}>
              <th className="text-left p-3 font-medium text-secondary-foreground/55">Company</th>
              <th className="text-center p-3 font-medium text-secondary-foreground/55">Sent</th>
              <th className="text-center p-3 font-medium text-secondary-foreground/55">Opens</th>
              <th className="text-center p-3 font-medium text-secondary-foreground/55">Clicks</th>
              <th className="text-center p-3 font-medium text-secondary-foreground/55">Bounces</th>
              <th className="text-center p-3 font-medium text-secondary-foreground/55">Opt-outs</th>
            </tr>
          </thead>
          <tbody>
            {topCompaniesQ1.map((row) => (
              <tr key={row.company} className="border-t" style={{ borderColor: "rgba(0,0,0,0.06)" }}>
                <td className="p-3 font-medium text-secondary-foreground">{row.company}</td>
                <td className="p-3 text-center tabular-nums text-secondary-foreground">{row.sent}</td>
                <td className="p-3 text-center tabular-nums text-secondary-foreground">{row.opens}</td>
                <td className="p-3 text-center tabular-nums font-medium text-accent">{row.clicks}</td>
                <td className="p-3 text-center tabular-nums text-secondary-foreground">{row.bounces}</td>
                <td className="p-3 text-center tabular-nums text-secondary-foreground">{row.optouts}</td>
              </tr>
            ))}
          </tbody>
        </table>
      </div>
    </div>
  );
}

// ─────────────────────────────────────────────────────────────────────────
// Strategies tab
// ─────────────────────────────────────────────────────────────────────────
function StrategiesTab() {
  return (
    <div className="space-y-8">
      <SubsetNote scope="FSI Pardot subset · 26 sends · 4,001 emails" />
      <div>
        <h3 className="text-lg font-medium mb-1 text-secondary-foreground">Q1 sends by strategy</h3>
        <p className="text-xs text-secondary-foreground/55 mb-4">
          Strategy inferred from each campaign's filename. Q1 sends in the FSI Pardot subset were
          100% Global Listed Infrastructure. Tomorrow's pull will add the ANZ Reporting Season
          Podcast, Cash Economic and Fixed Income roundtable strategies.
        </p>
        <ResponsiveContainer width="100%" height={140}>
          <BarChart data={topStrategiesQ1} layout="vertical" margin={{ left: 10, right: 30, top: 5, bottom: 5 }}>
            <CartesianGrid strokeDasharray="3 3" horizontal={false} stroke={CHART_GRID} />
            <XAxis type="number" tick={{ fontSize: 11, fill: CHART_TICK_DIM }} />
            <YAxis type="category" dataKey="strategy" width={260} tick={{ fontSize: 11, fill: CHART_TICK_LIGHT }} />
            <Tooltip contentStyle={CHART_TOOLTIP} cursor={CHART_CURSOR} />
            <Legend wrapperStyle={{ color: "hsl(213 13% 43%)", paddingTop: 4 }} />
            <Bar dataKey="opens"    name="Opens"    stackId="a" fill={BAR_OPENS} />
            <Bar dataKey="clicks"   name="Clicks"   stackId="a" fill={BAR_CLICKS} />
            <Bar dataKey="bounces"  name="Bounces"  stackId="a" fill={BAR_BOUNCES} />
            <Bar dataKey="optouts"  name="Opt-outs" stackId="a" fill={BAR_OPTOUTS} radius={[0, 6, 6, 0]} />
          </BarChart>
        </ResponsiveContainer>
      </div>

      <div>
        <h4 className="text-sm font-medium text-secondary-foreground/70 mb-2">Q4 strategies (reference)</h4>
        <ResponsiveContainer width="100%" height={240}>
          <BarChart data={topStrategiesQ4} layout="vertical" margin={{ left: 10, right: 30, top: 5, bottom: 5 }}>
            <CartesianGrid strokeDasharray="3 3" horizontal={false} stroke={CHART_GRID} />
            <XAxis type="number" tick={{ fontSize: 11, fill: CHART_TICK_DIM }} />
            <YAxis type="category" dataKey="strategy" width={260} tick={{ fontSize: 11, fill: CHART_TICK_LIGHT }} />
            <Tooltip contentStyle={CHART_TOOLTIP} cursor={CHART_CURSOR} />
            <Legend wrapperStyle={{ color: "hsl(213 13% 43%)", paddingTop: 4 }} />
            <Bar dataKey="opens"    name="Opens"    stackId="a" fill={BAR_OPENS} />
            <Bar dataKey="clicks"   name="Clicks"   stackId="a" fill={BAR_CLICKS} />
            <Bar dataKey="bounces"  name="Bounces"  stackId="a" fill={BAR_BOUNCES} />
            <Bar dataKey="optouts"  name="Opt-outs" stackId="a" fill={BAR_OPTOUTS} radius={[0, 6, 6, 0]} />
          </BarChart>
        </ResponsiveContainer>
      </div>
    </div>
  );
}

// ─────────────────────────────────────────────────────────────────────────
// Campaigns tab — Pardot subset + ANZ preview
// ─────────────────────────────────────────────────────────────────────────
function CampaignsTab() {
  return (
    <div className="space-y-8">
      <SubsetNote scope="FSI EMEA Pardot subset · 6 Q1 sends" />
      <div>
        <h3 className="text-lg font-medium mb-1 text-secondary-foreground">Q1 EMEA GLIS sends — full breakdown</h3>
        <p className="text-xs text-secondary-foreground/55 mb-4">
          Each bar is one Q1 EMEA / US email send, ordered by total response. Stack: Opens /
          Clicks / Bounces / Opt-outs. Sent volume in the table.
        </p>
        <ResponsiveContainer width="100%" height={360}>
          <BarChart data={topCampaignsQ1} layout="vertical" margin={{ left: 10, right: 30, top: 5, bottom: 5 }}>
            <CartesianGrid strokeDasharray="3 3" horizontal={false} stroke={CHART_GRID} />
            <XAxis type="number" tick={{ fontSize: 11, fill: CHART_TICK_DIM }} />
            <YAxis type="category" dataKey="campaign" width={300} tick={{ fontSize: 11, fill: CHART_TICK_LIGHT }} />
            <Tooltip contentStyle={CHART_TOOLTIP} cursor={CHART_CURSOR} />
            <Legend wrapperStyle={{ color: "hsl(213 13% 43%)", paddingTop: 4 }} />
            <Bar dataKey="opens"    name="Opens"    stackId="a" fill={BAR_OPENS} />
            <Bar dataKey="clicks"   name="Clicks"   stackId="a" fill={BAR_CLICKS} />
            <Bar dataKey="bounces"  name="Bounces"  stackId="a" fill={BAR_BOUNCES} />
            <Bar dataKey="optouts"  name="Opt-outs" stackId="a" fill={BAR_OPTOUTS} radius={[0, 6, 6, 0]} />
          </BarChart>
        </ResponsiveContainer>
      </div>

      <div className="overflow-hidden rounded-xl border" style={{ borderColor: "rgba(0,0,0,0.1)" }}>
        <table className="w-full text-sm">
          <thead>
            <tr style={{ background: "hsl(0 0% 100%)" }}>
              <th className="text-left p-3 font-medium text-secondary-foreground/55">Campaign</th>
              <th className="text-center p-3 font-medium text-secondary-foreground/55">Sent</th>
              <th className="text-center p-3 font-medium text-secondary-foreground/55">Opens</th>
              <th className="text-center p-3 font-medium text-secondary-foreground/55">Clicks</th>
              <th className="text-center p-3 font-medium text-secondary-foreground/55">Open rate</th>
              <th className="text-center p-3 font-medium text-secondary-foreground/55">CTR</th>
            </tr>
          </thead>
          <tbody>
            {topCampaignsQ1.map((row) => {
              const openRate = row.sent ? (row.opens / row.sent) * 100 : 0;
              const ctr      = row.sent ? (row.clicks / row.sent) * 100 : 0;
              return (
                <tr key={row.campaign} className="border-t" style={{ borderColor: "rgba(0,0,0,0.06)" }}>
                  <td className="p-3 font-medium text-secondary-foreground">{row.campaign}</td>
                  <td className="p-3 text-center tabular-nums text-secondary-foreground">{row.sent.toLocaleString()}</td>
                  <td className="p-3 text-center tabular-nums text-secondary-foreground">{row.opens}</td>
                  <td className="p-3 text-center tabular-nums text-secondary-foreground">{row.clicks}</td>
                  <td className="p-3 text-center tabular-nums text-secondary-foreground">{openRate.toFixed(1)}%</td>
                  <td className="p-3 text-center tabular-nums font-medium text-accent">{ctr.toFixed(1)}%</td>
                </tr>
              );
            })}
          </tbody>
        </table>
      </div>

      {/* ANZ preview — sent counts only, opens/clicks pending refresh */}
      <div>
        <h3 className="text-lg font-medium mb-1 text-secondary-foreground">ANZ Q1 sends — preview (sent volumes only)</h3>
        <p className="text-xs text-secondary-foreground/55 mb-4">
          Largest ANZ-originated Q1 2026 campaigns visible in the new Salesforce export. Open and
          click columns refresh tomorrow when the full recipient-level pull lands. The four
          Reporting Season Podcast sends alone reached ~5,000 recipients.
        </p>
        <div className="overflow-hidden rounded-xl border" style={{ borderColor: "rgba(0,0,0,0.1)" }}>
          <table className="w-full text-sm">
            <thead>
              <tr style={{ background: "hsl(0 0% 100%)" }}>
                <th className="text-left p-3 font-medium text-secondary-foreground/55">Campaign</th>
                <th className="text-left p-3 font-medium text-secondary-foreground/55">Sent date</th>
                <th className="text-center p-3 font-medium text-secondary-foreground/55">Sent</th>
                <th className="text-center p-3 font-medium text-secondary-foreground/55">Opens / Clicks</th>
              </tr>
            </thead>
            <tbody>
              {anzPreviewCampaignsQ1.map((row) => (
                <tr key={row.campaign} className="border-t" style={{ borderColor: "rgba(0,0,0,0.06)" }}>
                  <td className="p-3 font-medium text-secondary-foreground">{row.campaign}</td>
                  <td className="p-3 text-secondary-foreground/65">{row.sentDate}</td>
                  <td className="p-3 text-center tabular-nums text-secondary-foreground">{row.sent.toLocaleString()}</td>
                  <td className="p-3 text-center text-secondary-foreground/50 italic">refreshing</td>
                </tr>
              ))}
            </tbody>
          </table>
        </div>
      </div>
    </div>
  );
}

function SubsetNote({ scope }: { scope: string }) {
  return (
    <div
      className="rounded-lg px-3 py-2 inline-flex items-center gap-2 text-[11px]"
      style={{ background: "hsl(40 80% 92%)", border: "1px solid hsl(40 60% 75%)" }}
    >
      <AlertCircle className="w-3 h-3 shrink-0" style={{ color: "hsl(31 70% 38%)" }} />
      <span className="text-secondary-foreground/75">
        Showing <span className="font-medium text-secondary-foreground">{scope}</span> — full Salesforce universe lands tomorrow.
      </span>
    </div>
  );
}
