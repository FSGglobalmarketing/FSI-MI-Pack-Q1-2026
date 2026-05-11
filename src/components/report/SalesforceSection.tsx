import { useState } from "react";
import {
  BarChart, Bar, XAxis, YAxis, CartesianGrid, Tooltip,
  ResponsiveContainer, Legend,
} from "recharts";
import {
  salesforceMarketingKpis,
  topCampaigns,
  engagementByRegion,
  q1VsQ4,
} from "@/data/salesforce-data";

const TABS = ["Q1 vs Q4", "By campaign", "By region"] as const;
type Tab = (typeof TABS)[number];

// FSI palette
const SECTION_BG = "hsl(var(--cream))";  // section background
const INNER_BG   = "hsl(31 33% 95%)";    // inner card surface
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

// Channel palette — Opens / Clicks / Bounces / Opt-outs
const BAR_OPENS    = "#61bdb1";  // FSI Green
const BAR_CLICKS   = "#EF785B";  // FSI Orange
const BAR_BOUNCES  = "#D5B700";  // FSI Mustard
const BAR_OPTOUTS  = "#3FBAD5";  // FSI Light Blue

// Q1 vs Q4 paired-bar palette
const BAR_Q4 = "#CCB296";  // FSI Tan (muted, reference quarter)
const BAR_Q1 = "#61bdb1";  // FSI Green (current quarter highlight)

export default function SalesforceSection() {
  const [activeTab, setActiveTab] = useState<Tab>("Q1 vs Q4");

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

        {/* Two-column: narrative left, KPI 2×2 right */}
        <div className="grid lg:grid-cols-2 gap-8 mb-6 items-start">
          <p className="text-secondary-foreground/75 leading-relaxed">
            Q1 was a low-volume quarter for direct FSI email — only{" "}
            <span className="text-secondary-foreground font-medium">six sends</span>,
            all <span className="text-secondary-foreground font-medium">GLIS quarterly updates</span>{" "}
            into EMEA plus one US follow-up. Volume halved vs Q4 (1,302 vs 2,699), and opens fell with it
            — but the recipients we did reach engaged harder.{" "}
            <span className="text-secondary-foreground font-medium">Click-through rate climbed from 3.6% to 5.8%</span>{" "}
            and click-to-open rate jumped from 14.7% to 27.1%. The standout was the{" "}
            <span className="text-secondary-foreground font-medium">EMEA exUK Q4 update</span> —
            <span className="text-secondary-foreground font-medium"> 23 clicks on 138 sent</span> (16.7% CTR).
          </p>
          <div className="grid grid-cols-2 gap-3">
            {salesforceMarketingKpis.map((kpi) => (
              <div
                key={kpi.label}
                className="rounded-lg px-4 py-3"
                style={{
                  background: "hsl(0 0% 100%)",
                  border: "1px solid rgba(0,0,0,0.08)",
                }}
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
          {activeTab === "Q1 vs Q4"    && <QuarterTab />}
          {activeTab === "By campaign" && <CampaignsTab />}
          {activeTab === "By region"   && <RegionTab />}
        </div>
      </div>
    </section>
  );
}

function QuarterTab() {
  return (
    <div>
      <h3 className="text-lg font-medium mb-1 text-secondary-foreground">Q1 vs Q4 — engagement events</h3>
      <p className="text-xs text-secondary-foreground/55 mb-4">
        Direct comparison of email outcomes between Q4 2025 (20 sends, 2,699 emails) and Q1 2026
        (6 sends, 1,302 emails). Volume was lower in Q1, but quality of engagement — clicks per
        send and clicks per open — both rose.
      </p>
      <ResponsiveContainer width="100%" height={340}>
        <BarChart data={q1VsQ4} margin={{ left: 10, right: 20, top: 10, bottom: 5 }}>
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
  );
}

function CampaignsTab() {
  return (
    <div className="space-y-8">
      <div>
        <h3 className="text-lg font-medium mb-1 text-secondary-foreground">Q1 sends by engagement</h3>
        <p className="text-xs text-secondary-foreground/55 mb-4">
          All six Q1 2026 email sends, stacked by recipient outcome: Opens, Clicks, Bounces and
          Opt-outs. Bars are ordered by total engagement; sent volume is shown in the table below.
        </p>
        <ResponsiveContainer width="100%" height={360}>
          <BarChart data={topCampaigns} layout="vertical" margin={{ left: 10, right: 30, top: 5, bottom: 5 }}>
            <CartesianGrid strokeDasharray="3 3" horizontal={false} stroke={CHART_GRID} />
            <XAxis type="number" tick={{ fontSize: 11, fill: CHART_TICK_DIM }} />
            <YAxis
              type="category"
              dataKey="campaign"
              width={300}
              tick={{ fontSize: 11, fill: CHART_TICK_LIGHT }}
            />
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
            {topCampaigns.map((row) => {
              const openRate = row.sent ? (row.opens / row.sent) * 100 : 0;
              const ctr      = row.sent ? (row.clicks / row.sent) * 100 : 0;
              return (
                <tr key={row.campaign} className="border-t" style={{ borderColor: "rgba(0,0,0,0.06)" }}>
                  <td className="p-3 font-medium text-secondary-foreground">{row.campaign}</td>
                  <td className="p-3 text-center tabular-nums text-secondary-foreground">{row.sent.toLocaleString()}</td>
                  <td className="p-3 text-center tabular-nums text-secondary-foreground">{row.opens.toLocaleString()}</td>
                  <td className="p-3 text-center tabular-nums text-secondary-foreground">{row.clicks.toLocaleString()}</td>
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

function RegionTab() {
  return (
    <div className="space-y-8">
      <div>
        <h3 className="text-lg font-medium mb-1 text-secondary-foreground">Q1 engagement by region</h3>
        <p className="text-xs text-secondary-foreground/55 mb-4">
          Q1 2026 direct-email outcomes aggregated by recipient region. EMEA carried five of the
          six Q1 sends (all GLIS quarterly updates); the US contributed one send. ANZ did not run
          a Q1 direct-email campaign — its seven Q4 fixed-income roundtable invitations were the
          last cycle.
        </p>
        <ResponsiveContainer width="100%" height={260}>
          <BarChart data={engagementByRegion} layout="vertical" margin={{ left: 10, right: 30, top: 5, bottom: 5 }}>
            <CartesianGrid strokeDasharray="3 3" horizontal={false} stroke={CHART_GRID} />
            <XAxis type="number" tick={{ fontSize: 11, fill: CHART_TICK_DIM }} />
            <YAxis type="category" dataKey="region" width={80} tick={{ fontSize: 12, fill: CHART_TICK_LIGHT }} />
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
              <th className="text-left p-3 font-medium text-secondary-foreground/55">Region</th>
              <th className="text-center p-3 font-medium text-secondary-foreground/55">Sent</th>
              <th className="text-center p-3 font-medium text-secondary-foreground/55">Opens</th>
              <th className="text-center p-3 font-medium text-secondary-foreground/55">Clicks</th>
              <th className="text-center p-3 font-medium text-secondary-foreground/55">Open rate</th>
              <th className="text-center p-3 font-medium text-secondary-foreground/55">CTR</th>
            </tr>
          </thead>
          <tbody>
            {engagementByRegion.map((row) => {
              const openRate = row.sent ? (row.opens / row.sent) * 100 : 0;
              const ctr      = row.sent ? (row.clicks / row.sent) * 100 : 0;
              return (
                <tr key={row.region} className="border-t" style={{ borderColor: "rgba(0,0,0,0.06)" }}>
                  <td className="p-3 font-medium text-secondary-foreground">{row.region}</td>
                  <td className="p-3 text-center tabular-nums text-secondary-foreground">{row.sent.toLocaleString()}</td>
                  <td className="p-3 text-center tabular-nums text-secondary-foreground">{row.opens.toLocaleString()}</td>
                  <td className="p-3 text-center tabular-nums text-secondary-foreground">{row.clicks.toLocaleString()}</td>
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
