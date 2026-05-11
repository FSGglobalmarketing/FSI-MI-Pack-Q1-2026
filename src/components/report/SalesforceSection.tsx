import { useState } from "react";
import {
  BarChart, Bar, XAxis, YAxis, CartesianGrid, Tooltip,
  ResponsiveContainer, Legend,
} from "recharts";
import {
  clientEngagementHeadlineKpis,
  emailFunnelStrip,
  emailTabKpis,
  emailFunnelQ1VsQ4,
  topCompaniesQ1,
  topStrategiesQ1,
  topStrategiesQ4,
  topCampaignsQ1,
} from "@/data/salesforce-data";

const TABS = ["Email", "Companies", "Strategies", "Campaigns"] as const;
type Tab = (typeof TABS)[number];

// FSI palette
const SECTION_BG = "hsl(var(--cream))";  // section background (alternation)
const INNER_BG   = "hsl(31 33% 95%)";    // light tan inner card
const STRIP_BG   = "hsl(213 96% 17%)";   // FSI dark blue strip
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

// Funnel-strip metric colors (sit on the dark navy strip)
const STRIP_COLORS: Record<string, string> = {
  sent:    "hsl(0 0% 70%)",   // muted grey-white
  opens:   "#3FBAD5",         // FSI Light Blue
  clicks:  "#61bdb1",         // FSI Green
  bounces: "#EF785B",         // FSI Orange
  optouts: "#D5B700",         // FSI Mustard
};

// Bar stack palette (opens / clicks / bounces / opt-outs)
const BAR_OPENS    = "#61bdb1";
const BAR_CLICKS   = "#EF785B";
const BAR_BOUNCES  = "#D5B700";
const BAR_OPTOUTS  = "#3FBAD5";

// Q1 vs Q4 paired-bar palette
const BAR_Q4 = "#CCB296";
const BAR_Q1 = "#61bdb1";

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
        <p className="text-sm text-secondary-foreground/65 mb-8">
          Tracking client interactions across marketing emails.
        </p>

        {/* Narrative + 2x2 headline KPI grid */}
        <div className="grid lg:grid-cols-2 gap-8 mb-6 items-start">
          <div className="text-secondary-foreground/75 leading-relaxed space-y-3">
            <p>
              Q1 saw <span className="text-secondary-foreground font-medium">six FSI email sends</span> versus 20 in Q4 — total sends and unique
              opens both fell roughly <span className="text-secondary-foreground font-medium">-52% to -57%</span>, reflecting a deliberately narrower
              calendar focused on the <span className="text-secondary-foreground font-medium">GLIS Q4 update</span>.
            </p>
            <p>
              Quality of engagement rose. <span className="text-secondary-foreground font-medium">Click-through rate climbed 3.6% → 5.8%</span>, and
              <span className="text-secondary-foreground font-medium"> click-to-open jumped 14.7% → 27.1%</span>. The EMEA exUK Q4 update was the
              standout — <span className="text-secondary-foreground font-medium">23 clicks on 138 sent (16.7% CTR)</span>.
            </p>
            <p>
              Top engaged firms were European wholesale partners — <span className="text-secondary-foreground font-medium">Alpha Portfolio Advisors</span>,
              <span className="text-secondary-foreground font-medium"> Amundi (France)</span> and the <span className="text-secondary-foreground font-medium">Social Protection Fund</span> opened
              and clicked every send they received.
            </p>
            <p>
              By <span className="text-secondary-foreground font-medium">strategy</span>, Q1 was 100% GLIS. ANZ fixed-income roundtables and UK
              institutional networking sat in Q4 only — captured in the strategy view below for context.
            </p>
          </div>

          <div className="grid grid-cols-2 gap-3">
            {clientEngagementHeadlineKpis.map((kpi) => {
              const positive = kpi.comparison.startsWith("+") && !kpi.comparison.startsWith("+0");
              const muted    = !kpi.comparison.startsWith("+") && !kpi.comparison.startsWith("-");
              return (
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
                  <div className={`text-[10px] ${muted ? "text-secondary-foreground/55" : positive ? "text-success" : "text-destructive"}`}>
                    {kpi.comparison}
                  </div>
                </div>
              );
            })}
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
              <div className={`text-[10px] mt-1 ${m.deltaPositive ? "text-success" : "text-destructive"}`}>
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
// Email tab
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
            <div className={`text-[11px] ${k.deltaPositive ? "text-success" : "text-destructive"}`}>{k.delta}</div>
            <div className="text-[10px] text-secondary-foreground/55 mt-0.5">{k.q4}</div>
          </div>
        ))}
      </div>

      <div>
        <h3 className="text-lg font-medium mb-1 text-secondary-foreground">Q1 vs Q4 — full email funnel</h3>
        <p className="text-xs text-secondary-foreground/55 mb-4">
          Sent, unique opens, unique clicks, bounces and opt-outs across all FSI Q1 sends, compared with Q4.
        </p>
        <ResponsiveContainer width="100%" height={340}>
          <BarChart data={emailFunnelQ1VsQ4} margin={{ left: 10, right: 20, top: 10, bottom: 5 }}>
            <CartesianGrid strokeDasharray="3 3" vertical={false} stroke={CHART_GRID} />
            <XAxis dataKey="metric" tick={{ fontSize: 12, fill: CHART_TICK_LIGHT }} />
            <YAxis tick={{ fontSize: 11, fill: CHART_TICK_DIM }} />
            <Tooltip contentStyle={CHART_TOOLTIP} cursor={CHART_CURSOR} />
            <Legend wrapperStyle={{ color: "hsl(213 13% 43%)", paddingTop: 4 }} />
            <Bar dataKey="q4" name="Q4 2025" fill={BAR_Q4} radius={[6, 6, 0, 0]} />
            <Bar dataKey="q1" name="Q1 2026" fill={BAR_Q1} radius={[6, 6, 0, 0]} />
          </BarChart>
        </ResponsiveContainer>
      </div>
    </div>
  );
}

// ─────────────────────────────────────────────────────────────────────────
// Companies tab
// ─────────────────────────────────────────────────────────────────────────
function CompaniesTab() {
  return (
    <div className="space-y-8">
      <div>
        <h3 className="text-lg font-medium mb-1 text-secondary-foreground">Top companies by Q1 engagement</h3>
        <p className="text-xs text-secondary-foreground/55 mb-4">
          Top 15 firms by total response (opens + clicks + bounces + opt-outs) across Q1 sends.
          Bars stack the four response channels; sent volume is in the table below as the universe size.
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
// Strategies tab — strategy inferred from filename
// ─────────────────────────────────────────────────────────────────────────
function StrategiesTab() {
  return (
    <div className="space-y-8">
      <div>
        <h3 className="text-lg font-medium mb-1 text-secondary-foreground">Q1 sends by strategy</h3>
        <p className="text-xs text-secondary-foreground/55 mb-4">
          Strategy inferred from each campaign's filename. Q1 sends were 100% Global Listed
          Infrastructure — five EMEA quarterly updates and one US income story. Q4 strategies
          (below) are shown for context.
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
// Campaigns tab — campaign = email filename
// ─────────────────────────────────────────────────────────────────────────
function CampaignsTab() {
  return (
    <div className="space-y-8">
      <div>
        <h3 className="text-lg font-medium mb-1 text-secondary-foreground">Q1 sends by campaign</h3>
        <p className="text-xs text-secondary-foreground/55 mb-4">
          Each bar is one Q1 email send, ordered by total response. Stack: Opens / Clicks /
          Bounces / Opt-outs. Sent volume is in the table.
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
    </div>
  );
}
