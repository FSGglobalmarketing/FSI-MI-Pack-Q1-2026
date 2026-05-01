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
const SECTION_BG = "hsl(var(--background))";        // #0f2d52 navy
const INNER_BG   = "hsl(214 60% 23%)";              // card navy (brand-consistent)
const CHART_GRID = "rgba(255,255,255,0.07)";
const CHART_TICK_LIGHT = "rgba(255,255,255,0.9)";
const CHART_TICK_DIM   = "rgba(255,255,255,0.55)";
const CHART_TOOLTIP = {
  background: "hsl(214 60% 18%)",
  border: "1px solid rgba(255,255,255,0.12)",
  borderRadius: 12,
  fontSize: 12,
  color: "#fff",
};
// Darker-navy highlight for hovered bar/point (replaces default white cursor)
const CHART_CURSOR = { fill: "hsl(214 68% 14%)" };
const BAR_Q1 = "hsl(var(--accent))";                 // FSI Green (highlight on dark)
const BAR_Q4 = "rgba(255,255,255,0.22)";
const BAR_CHANNEL_EMAIL = "#61bdb1"; // FSI Green
const BAR_CHANNEL_WEB   = "#3FBAD5"; // FSI Light Blue
const BAR_CHANNEL_FORM  = "#8FB9AA"; // muted teal
const BAR_CHANNEL_LINK  = "#B8A0D9"; // muted lilac

export default function SalesforceSection() {
  const [activeTab, setActiveTab] = useState<Tab>("Companies");

  return (
    <section
      id="salesforce"
      className="py-16 sm:py-20 border-t border-border"
      style={{ backgroundColor: SECTION_BG, color: "hsl(0 0% 100%)" }}
    >
      <div className="max-w-[1400px] mx-auto px-4 sm:px-6 lg:px-8">
        <div className="mb-3">
          <span className="stage-badge">Marketing funnel</span>
        </div>
        <h2 className="text-2xl sm:text-3xl font-medium leading-tight mb-2 text-white">Client engagement</h2>

        {/* Two-column: narrative left, KPI 2×2 right */}
        <div className="grid lg:grid-cols-2 gap-8 mb-6 items-start">
          <p className="text-white/70 leading-relaxed">
            Q1 engagement was led by our Asia wholesale partners —{" "}
            <span className="text-white font-medium">DBS Singapore</span>,{" "}
            <span className="text-white font-medium">China Construction Bank (Asia)</span>,{" "}
            <span className="text-white font-medium">DBS Hong Kong</span> and{" "}
            <span className="text-white font-medium">Bank of China (Hong Kong)</span> topped the
            table, each logging between 550 and 855 interactions in Q1. Email was the dominant
            channel (61% of the mix) and March was the peak month — the{" "}
            <span className="text-white font-medium">ANZ AEQ Growth post-reporting podcast</span>,{" "}
            <span className="text-white font-medium">EMEA Igneo AIM</span> and the{" "}
            <span className="text-white font-medium">HK / SG wholesale FSSA China client
            updates</span> drove the spike. On investment team, <span className="text-white
            font-medium">Listed Infrastructure</span> and <span className="text-white
            font-medium">Fixed Income</span> led the opportunity book, with{" "}
            <span className="text-white font-medium">AEQ Growth</span> close behind. 584
            opportunities are live out of 2,207 total in the FSI pipeline.
          </p>
          <div className="grid grid-cols-2 gap-3">
            {salesforceMarketingKpis.map((kpi) => (
              <div
                key={kpi.label}
                className="rounded-lg px-4 py-3"
                style={{
                  background: "rgba(255,255,255,0.04)",
                  border: "1px solid rgba(255,255,255,0.08)",
                }}
              >
                <div className="flex items-baseline gap-2">
                  <span className="text-primary text-sm">+</span>
                  <span className="text-xl sm:text-2xl font-medium text-white tabular-nums">
                    {kpi.value}
                  </span>
                </div>
                <div className="text-[11px] font-medium text-white mt-1">{kpi.label}</div>
                <div className="text-[10px] text-white/55">{kpi.comparison}</div>
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
                  : "bg-white/10 text-white/70 hover:bg-white/20"
              }`}
            >
              {tab}
            </button>
          ))}
        </div>

        <div
          className="rounded-2xl p-6 overflow-hidden"
          style={{ backgroundColor: INNER_BG, border: "1px solid rgba(255,255,255,0.08)" }}
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
        <h3 className="text-lg font-medium mb-1 text-white">Engagement by company × channel</h3>
        <p className="text-xs text-white/50 mb-4">
          Top 15 accounts by total Q1 FSI prospect activity — all recorded email opens + clicks,
          website visits, form submissions and tracked custom-URL clicks.
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
            <Legend wrapperStyle={{ color: "rgba(255,255,255,0.75)", paddingTop: 4 }} />
            <Bar dataKey="email" name="Email" stackId="a" fill={BAR_CHANNEL_EMAIL} />
            <Bar dataKey="link"  name="Link click" stackId="a" fill={BAR_CHANNEL_LINK} />
            <Bar dataKey="form"  name="Form / File" stackId="a" fill={BAR_CHANNEL_FORM} />
            <Bar dataKey="web"   name="Web"   stackId="a" fill={BAR_CHANNEL_WEB} radius={[0, 6, 6, 0]} />
          </BarChart>
        </ResponsiveContainer>
      </div>

      <div className="overflow-hidden rounded-xl border" style={{ borderColor: "rgba(255,255,255,0.1)" }}>
        <table className="w-full text-sm">
          <thead>
            <tr style={{ background: "rgba(255,255,255,0.04)" }}>
              <th className="text-left p-3 font-medium text-white/60">Account</th>
              <th className="text-center p-3 font-medium text-white/60">Email</th>
              <th className="text-center p-3 font-medium text-white/60">Link</th>
              <th className="text-center p-3 font-medium text-white/60">Form / File</th>
              <th className="text-center p-3 font-medium text-white/60">Web</th>
              <th className="text-center p-3 font-medium text-white/60">Total</th>
            </tr>
          </thead>
          <tbody>
            {engagementByCompany.map((row) => (
              <tr key={row.account} className="border-t" style={{ borderColor: "rgba(255,255,255,0.06)" }}>
                <td className="p-3 font-medium text-white">{row.account}</td>
                <td className="p-3 text-center tabular-nums text-white">{row.email.toLocaleString()}</td>
                <td className="p-3 text-center tabular-nums text-white">{row.link.toLocaleString()}</td>
                <td className="p-3 text-center tabular-nums text-white">{row.form.toLocaleString()}</td>
                <td className="p-3 text-center tabular-nums text-white">{row.web.toLocaleString()}</td>
                <td className="p-3 text-center tabular-nums font-medium text-accent">{row.total.toLocaleString()}</td>
              </tr>
            ))}
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
        <h3 className="text-lg font-medium mb-1 text-white">Opportunities by investment team</h3>
        <p className="text-xs text-white/50 mb-4">
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
        <h3 className="text-lg font-medium mb-1 text-white">Investment teams (brand stripped)</h3>
        <p className="text-xs text-white/50 mb-4">
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
      <h3 className="text-lg font-medium mb-1 text-white">Top campaigns driving activity</h3>
      <p className="text-xs text-white/50 mb-4">
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
