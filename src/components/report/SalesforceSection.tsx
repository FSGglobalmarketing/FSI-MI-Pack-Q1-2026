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
  topCampaignsQ1,
} from "@/data/salesforce-data";
import Summary from "./Summary";

const TABS = ["Email", "Companies", "Strategies", "Campaigns"] as const;
type Tab = (typeof TABS)[number];

// FSI palette
const SECTION_BG = "hsl(var(--cream))";
const INNER_BG   = "hsl(31 33% 95%)";
const STRIP_BG   = "hsl(0 0% 100%)";   // light strip
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

// Bar stack palette (opens / clicks / visits / forms)
const BAR_OPENS  = "#61bdb1";  // FSI Green
const BAR_CLICKS = "#EF785B";  // FSI Orange
const BAR_VISITS = "#3FBAD5";  // FSI Light Blue
const BAR_FORMS  = "#D5B700";  // FSI Mustard

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
          <span className="stage-badge">Conversion</span>
        </div>
        <h2 className="text-2xl sm:text-3xl font-medium leading-tight mb-2 text-secondary-foreground">
          Client engagement
        </h2>
        <p className="text-sm text-secondary-foreground/65 mb-8">
          Tracking client interactions across marketing emails.
        </p>

        {/* Narrative + headline KPI grid */}
        <div className="grid lg:grid-cols-2 gap-8 mb-6 items-start">
          <Summary
            variant="cream"
            text={
              "FSI ran **19 email campaigns** in Q1, reaching **7,817 recipients** with **2,711 opens** (34.7% open rate) and **273 clicks** at a **click-to-open rate of 10.1%**. Bounces stayed low at **67** (0.9% of sent) and **26 recipients** opted out across the quarter.\n\n" +
              "Activity was led by the **Australian Equities Reporting Season Podcast** push, which drove roughly two-thirds of total response across four March sends. **GLIS** picked up the rest — five EMEA quarterly updates plus a US income-thesis send. Top responding firms were Australian wholesale brokers — **Bell Potter Securities (Melbourne)**, **Shaw and Partners (Perth, Melbourne, Sydney)** and **Ord Minnett (Melbourne)** led on opens, while **Alpha Portfolio Advisors** and **Amundi France** delivered the strongest click-through behaviour."
            }
          />

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

        {/* Light funnel strip */}
        <div
          className="rounded-xl px-6 py-5 mb-6 grid grid-cols-2 sm:grid-cols-5 gap-4"
          style={{ background: STRIP_BG, border: "1px solid rgba(0,0,0,0.08)" }}
        >
          {emailFunnelStrip.map((m) => (
            <div key={m.key} className="text-center">
              <div className="text-[10px] uppercase tracking-wider text-secondary-foreground/55 mb-1">{m.label}</div>
              <div className="text-2xl sm:text-3xl font-medium tabular-nums text-secondary-foreground">
                {m.value.toLocaleString()}
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
        <h3 className="text-lg font-medium mb-1 text-secondary-foreground">Q1 email funnel</h3>
        <p className="text-xs text-secondary-foreground/55 mb-4">
          Total recipients, opens, clicks, bounces and opt-outs across all 19 FSI Q1 sends.
        </p>
        <ResponsiveContainer width="100%" height={340}>
          <BarChart data={emailFunnelQ1VsQ4} margin={{ left: 10, right: 20, top: 10, bottom: 5 }}>
            <CartesianGrid strokeDasharray="3 3" vertical={false} stroke={CHART_GRID} />
            <XAxis dataKey="metric" tick={{ fontSize: 12, fill: CHART_TICK_LIGHT }} />
            <YAxis tick={{ fontSize: 11, fill: CHART_TICK_DIM }} />
            <Tooltip contentStyle={CHART_TOOLTIP} cursor={CHART_CURSOR} />
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
          Top 15 accounts by total Q1 email engagement. Bars stack opens and clicks.
        </p>
        <ResponsiveContainer width="100%" height={520}>
          <BarChart data={topCompaniesQ1} layout="vertical" margin={{ left: 20, right: 30, top: 5, bottom: 5 }}>
            <CartesianGrid strokeDasharray="3 3" horizontal={false} stroke={CHART_GRID} />
            <XAxis type="number" tick={{ fontSize: 11, fill: CHART_TICK_DIM }} />
            <YAxis type="category" dataKey="company" width={260} tick={{ fontSize: 11, fill: CHART_TICK_LIGHT }} />
            <Tooltip contentStyle={CHART_TOOLTIP} cursor={CHART_CURSOR} />
            <Legend wrapperStyle={{ color: "hsl(213 13% 43%)", paddingTop: 4 }} />
            <Bar dataKey="opens"  name="Opens"  stackId="a" fill={BAR_OPENS} />
            <Bar dataKey="clicks" name="Clicks" stackId="a" fill={BAR_CLICKS} radius={[0, 6, 6, 0]} />
          </BarChart>
        </ResponsiveContainer>
      </div>

      <div className="overflow-hidden rounded-xl border" style={{ borderColor: "rgba(0,0,0,0.1)" }}>
        <table className="w-full text-sm">
          <thead>
            <tr style={{ background: "hsl(0 0% 100%)" }}>
              <th className="text-left p-3 font-medium text-secondary-foreground/55">Account</th>
              <th className="text-center p-3 font-medium text-secondary-foreground/55">Opens</th>
              <th className="text-center p-3 font-medium text-secondary-foreground/55">Clicks</th>
              <th className="text-center p-3 font-medium text-secondary-foreground/55">Total engagement</th>
            </tr>
          </thead>
          <tbody>
            {topCompaniesQ1.map((row) => {
              const total = row.opens + row.clicks;
              return (
                <tr key={row.company} className="border-t" style={{ borderColor: "rgba(0,0,0,0.06)" }}>
                  <td className="p-3 font-medium text-secondary-foreground">{row.company}</td>
                  <td className="p-3 text-center tabular-nums text-secondary-foreground">{row.opens.toLocaleString()}</td>
                  <td className="p-3 text-center tabular-nums text-secondary-foreground">{row.clicks.toLocaleString()}</td>
                  <td className="p-3 text-center tabular-nums font-medium text-accent">{total.toLocaleString()}</td>
                </tr>
              );
            })}
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
    <div>
      <h3 className="text-lg font-medium mb-1 text-secondary-foreground">Q1 engagement by strategy</h3>
      <p className="text-xs text-secondary-foreground/55 mb-4">
        Q1 client activity bucketed by strategy, inferred from FSI campaign names. Each bar stacks opens, clicks,
        website visits and form submissions.
      </p>
      <ResponsiveContainer width="100%" height={380}>
        <BarChart data={topStrategiesQ1} layout="vertical" margin={{ left: 20, right: 30, top: 5, bottom: 5 }}>
          <CartesianGrid strokeDasharray="3 3" horizontal={false} stroke={CHART_GRID} />
          <XAxis type="number" tick={{ fontSize: 11, fill: CHART_TICK_DIM }} />
          <YAxis type="category" dataKey="strategy" width={240} tick={{ fontSize: 11, fill: CHART_TICK_LIGHT }} />
          <Tooltip contentStyle={CHART_TOOLTIP} cursor={CHART_CURSOR} />
          <Legend wrapperStyle={{ color: "hsl(213 13% 43%)", paddingTop: 4 }} />
          <Bar dataKey="opens"  name="Opens"  stackId="a" fill={BAR_OPENS} />
          <Bar dataKey="clicks" name="Clicks" stackId="a" fill={BAR_CLICKS} />
          <Bar dataKey="visits" name="Visits" stackId="a" fill={BAR_VISITS} />
          <Bar dataKey="forms"  name="Forms"  stackId="a" fill={BAR_FORMS} radius={[0, 6, 6, 0]} />
        </BarChart>
      </ResponsiveContainer>
    </div>
  );
}

// ─────────────────────────────────────────────────────────────────────────
// Campaigns tab
// ─────────────────────────────────────────────────────────────────────────
function CampaignsTab() {
  return (
    <div>
      <h3 className="text-lg font-medium mb-1 text-secondary-foreground">Top campaigns by Q1 engagement</h3>
      <p className="text-xs text-secondary-foreground/55 mb-4">
        Top 10 Q1 campaigns by total client activity, stacked by channel (opens, clicks, website visits and form
        submissions).
      </p>
      <ResponsiveContainer width="100%" height={420}>
        <BarChart data={topCampaignsQ1} layout="vertical" margin={{ left: 10, right: 30, top: 5, bottom: 5 }}>
          <CartesianGrid strokeDasharray="3 3" horizontal={false} stroke={CHART_GRID} />
          <XAxis type="number" tick={{ fontSize: 12, fill: CHART_TICK_DIM }} />
          <YAxis type="category" dataKey="campaign" width={260} tick={{ fontSize: 11, fill: CHART_TICK_LIGHT }} />
          <Tooltip contentStyle={CHART_TOOLTIP} cursor={CHART_CURSOR} />
          <Legend wrapperStyle={{ color: "hsl(213 13% 43%)", paddingTop: 4 }} />
          <Bar dataKey="opens"  name="Opens"  stackId="a" fill={BAR_OPENS} />
          <Bar dataKey="clicks" name="Clicks" stackId="a" fill={BAR_CLICKS} />
          <Bar dataKey="visits" name="Visits" stackId="a" fill={BAR_VISITS} />
          <Bar dataKey="forms"  name="Forms"  stackId="a" fill={BAR_FORMS} radius={[0, 6, 6, 0]} />
        </BarChart>
      </ResponsiveContainer>
    </div>
  );
}
