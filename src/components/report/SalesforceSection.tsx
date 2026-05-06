import { useState } from "react";
import {
  BarChart, Bar, XAxis, YAxis, CartesianGrid, Tooltip,
  ResponsiveContainer, Legend,
} from "recharts";
import KpiRow from "./KpiRow";
import {
  salesforceMarketingKpis,
  engagementByCompany, interactionsByStrategy, interactionsByFssaStrategy,
  topCampaigns,
} from "@/data/salesforce-data";

const TABS = ["Companies", "Strategies", "Campaigns"] as const;
type Tab = (typeof TABS)[number];

// FSI palette — no black; inner card is a slightly lighter navy so it
// reads as a layer on top of the section background.
const SECTION_BG = "hsl(var(--cream))";  // White section
const INNER_BG   = "hsl(31 33% 95%)";  // Cream-tan card surface
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
// Darker-navy highlight for hovered bar/point (replaces default white cursor)
const CHART_CURSOR = { fill: "rgba(0,0,0,0.04)" };
const BAR_Q1 = "hsl(var(--accent))";                 // FSI Green (highlight on dark)
const BAR_Q4 = "rgba(2,40,86,0.22)";
const BAR_CHANNEL_EMAIL = "#61bdb1"; // FSI Green
const BAR_CHANNEL_WEB   = "#3FBAD5"; // FSI Light Blue
const BAR_CHANNEL_FORM  = "#3FBAD5"; // muted teal
const BAR_CHANNEL_LINK  = "#00727D"; // muted lilac

export default function SalesforceSection() {
  const [activeTab, setActiveTab] = useState<Tab>("Companies");

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
        <h2 className="text-2xl sm:text-3xl font-medium leading-tight mb-2 text-secondary-foreground">Client engagement</h2>

        {/* Two-column: narrative left, KPI 2×2 right */}
        <div className="grid lg:grid-cols-2 gap-8 mb-6 items-start">
          <p className="text-secondary-foreground/75 leading-relaxed">
            Q1 email engagement was led by our Asia wholesale partners —{" "}
            <span className="text-secondary-foreground font-medium">DBS Singapore</span>,{" "}
            <span className="text-secondary-foreground font-medium">China Construction Bank (Asia)</span>,{" "}
            <span className="text-secondary-foreground font-medium">DBS Hong Kong</span> and{" "}
            <span className="text-secondary-foreground font-medium">Bank of China (Hong Kong)</span> topped the
            table, each logging between 550 and 855 opens + clicks across Q1. Email opens were{" "}
            <span className="text-secondary-foreground font-medium">+5% on Q4</span> and March was the
            peak month — the{" "}
            <span className="text-secondary-foreground font-medium">ANZ AEQ Growth post-reporting podcast</span>,{" "}
            <span className="text-secondary-foreground font-medium">EMEA Igneo AIM</span> and the{" "}
            <span className="text-secondary-foreground font-medium">HK / SG wholesale FSSA China client
            updates</span> drove the spike. The Marketing Team will keep refining how strategies and
            campaigns are tagged so this view sharpens over the year.
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
          {activeTab === "Companies" && <CompaniesTab />}
          {activeTab === "Strategies" && <StrategiesTab />}
          {activeTab === "Campaigns" && <CampaignsTab />}
        </div>
      </div>
    </section>
  );
}

function CompaniesTab() {
  return (
    <div className="space-y-8">
      <div>
        <h3 className="text-lg font-medium mb-1 text-secondary-foreground">Engagement by company — opens + clicks</h3>
        <p className="text-xs text-secondary-foreground/55 mb-4">
          Top 15 accounts by total Q1 FSI email engagement. Stacked bars show
          opens + tracked link clicks; sent volume is the universe size and
          excluded from the bar so the chart reflects audience response only.
        </p>
        <ResponsiveContainer width="100%" height={520}>
          <BarChart data={engagementByCompany} layout="vertical" margin={{ left: 20, right: 30, top: 5, bottom: 5 }}>
            <CartesianGrid strokeDasharray="3 3" horizontal={false} stroke={CHART_GRID} />
            <XAxis type="number" tick={{ fontSize: 11, fill: CHART_TICK_DIM }} />
            <YAxis
              type="category"
              dataKey="account"
              width={220}
              tick={{ fontSize: 11, fill: CHART_TICK_LIGHT }}
            />
            <Tooltip contentStyle={CHART_TOOLTIP} cursor={CHART_CURSOR} />
            <Legend wrapperStyle={{ color: "hsl(213 13% 43%)", paddingTop: 4 }} />
            <Bar dataKey="email" name="Opens" stackId="a" fill={BAR_CHANNEL_EMAIL} />
            <Bar dataKey="link"  name="Clicks" stackId="a" fill={BAR_CHANNEL_LINK} radius={[0, 6, 6, 0]} />
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
            {engagementByCompany.map((row) => {
              const total = row.email + row.link;
              return (
                <tr key={row.account} className="border-t" style={{ borderColor: "rgba(0,0,0,0.06)" }}>
                  <td className="p-3 font-medium text-secondary-foreground">{row.account}</td>
                  <td className="p-3 text-center tabular-nums text-secondary-foreground">{row.email.toLocaleString()}</td>
                  <td className="p-3 text-center tabular-nums text-secondary-foreground">{row.link.toLocaleString()}</td>
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

function StrategiesTab() {
  return (
    <div className="space-y-8">
      <div>
        <h3 className="text-lg font-medium mb-1 text-secondary-foreground">Opportunities by investment team</h3>
        <p className="text-xs text-secondary-foreground/55 mb-4">
          Live and historical opportunities in the FSI pipeline by investment team. Listed
          Infrastructure and Fixed Income lead with ~700 each, followed by AEQ Growth at 507.
        </p>
        <ResponsiveContainer width="100%" height={340}>
          <BarChart data={interactionsByStrategy} layout="vertical" margin={{ left: 20, right: 30, top: 5, bottom: 5 }}>
            <CartesianGrid strokeDasharray="3 3" horizontal={false} stroke={CHART_GRID} />
            <XAxis type="number" tick={{ fontSize: 11, fill: CHART_TICK_DIM }} />
            <YAxis type="category" dataKey="strategy" width={200} tick={{ fontSize: 11, fill: CHART_TICK_LIGHT }} />
            <Tooltip contentStyle={CHART_TOOLTIP} cursor={CHART_CURSOR} />
            <Bar dataKey="interactions" name="Interactions" fill={BAR_Q1} radius={[0, 6, 6, 0]} barSize={18} />
          </BarChart>
        </ResponsiveContainer>
      </div>

      <div>
        <h3 className="text-lg font-medium mb-1 text-secondary-foreground">Investment teams (brand stripped)</h3>
        <p className="text-xs text-secondary-foreground/55 mb-4">
          The same pipeline with the cross-brand "First Sentier" catch-all removed — this is pure
          investment-team attribution of opportunities.
        </p>
        <ResponsiveContainer width="100%" height={280}>
          <BarChart data={interactionsByFssaStrategy} layout="vertical" margin={{ left: 20, right: 30, top: 5, bottom: 5 }}>
            <CartesianGrid strokeDasharray="3 3" horizontal={false} stroke={CHART_GRID} />
            <XAxis type="number" tick={{ fontSize: 11, fill: CHART_TICK_DIM }} />
            <YAxis type="category" dataKey="strategy" width={200} tick={{ fontSize: 11, fill: CHART_TICK_LIGHT }} />
            <Tooltip contentStyle={CHART_TOOLTIP} cursor={CHART_CURSOR} />
            <Bar dataKey="interactions" name="Interactions" fill={BAR_CHANNEL_WEB} radius={[0, 6, 6, 0]} barSize={18} />
          </BarChart>
        </ResponsiveContainer>
      </div>
    </div>
  );
}

function CampaignsTab() {
  return (
    <div>
      <h3 className="text-lg font-medium mb-1 text-secondary-foreground">Top campaigns driving activity</h3>
      <p className="text-xs text-secondary-foreground/55 mb-4">
        Ranked by total Q1 prospect activity across the FSI estate. The EMEA Igneo AIM campaign
        (3.8k interactions) and the ANZ AEQ Growth post-reporting podcast (2.5k) led, followed by
        US Igneo NADIF institutional and the FSSA China client-update eDMs in HK and SG.
      </p>
      <ResponsiveContainer width="100%" height={320}>
        <BarChart data={topCampaigns} layout="vertical" margin={{ left: 10, right: 30, top: 5, bottom: 5 }}>
          <CartesianGrid strokeDasharray="3 3" horizontal={false} stroke={CHART_GRID} />
          <XAxis type="number" tick={{ fontSize: 12, fill: CHART_TICK_DIM }} />
          <YAxis
            type="category"
            dataKey="campaign"
            width={260}
            tick={{ fontSize: 11, fill: CHART_TICK_LIGHT }}
          />
          <Tooltip contentStyle={CHART_TOOLTIP} cursor={CHART_CURSOR} />
          <Bar dataKey="interactions" name="Interactions" fill={BAR_Q1} radius={[0, 6, 6, 0]} barSize={18} />
        </BarChart>
      </ResponsiveContainer>
    </div>
  );
}
