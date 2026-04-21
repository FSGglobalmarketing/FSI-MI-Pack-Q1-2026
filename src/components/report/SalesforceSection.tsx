import { useState } from "react";
import {
  BarChart, Bar, XAxis, YAxis, CartesianGrid, Tooltip,
  ResponsiveContainer, Legend,
} from "recharts";
import KpiRow from "./KpiRow";
import {
  salesforceMarketingKpis, activityBreakdown, monthlyTrend,
  engagementByCompany, interactionsByStrategy, interactionsByFssaStrategy,
  topCampaigns,
} from "@/data/salesforce-data";

const TABS = ["Activity", "Engagement", "Strategies", "Campaigns"] as const;
type Tab = (typeof TABS)[number];

// FSSA palette — no black; inner card is a slightly lighter navy so it
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
const BAR_Q1 = "hsl(var(--primary))";                // FSSA red
const BAR_Q4 = "rgba(255,255,255,0.22)";
const BAR_CHANNEL_EMAIL = "#e22e2c"; // FSSA red
const BAR_CHANNEL_WEB   = "#3699c9"; // FSSA light blue
const BAR_CHANNEL_FORM  = "#8FB9AA"; // muted teal
const BAR_CHANNEL_LINK  = "#B8A0D9"; // muted lilac

export default function SalesforceSection() {
  const [activeTab, setActiveTab] = useState<Tab>("Activity");

  return (
    <section
      id="salesforce"
      className="py-16 sm:py-20 border-t border-border"
      style={{ backgroundColor: SECTION_BG, color: "hsl(0 0% 100%)" }}
    >
      <div className="max-w-[1400px] mx-auto px-4 sm:px-6 lg:px-8">
        <div className="flex flex-wrap items-center gap-3 mb-2">
          <h2 className="text-2xl sm:text-3xl font-bold text-white">Salesforce Engagement</h2>
          <span className="stage-badge self-center">Marketing Funnel</span>
        </div>

        {/* Two-column: narrative left, KPI 2×2 right */}
        <div className="grid lg:grid-cols-2 gap-8 mb-6 items-start">
          <p className="text-white/70 leading-relaxed">
            Q1 engagement was led by our Asia wholesale partners —{" "}
            <span className="text-white font-semibold">DBS Singapore</span>,{" "}
            <span className="text-white font-semibold">Bank of China (Hong Kong)</span>,{" "}
            <span className="text-white font-semibold">China Construction Bank (Asia)</span> and{" "}
            <span className="text-white font-semibold">DBS Hong Kong</span> topped the table, each
            interacting well over 200 times with our content. Email was the main way they engaged,
            and the <span className="text-white font-semibold">HK and SG wholesale FSSA China
            client updates</span> and our <span className="text-white font-semibold">EMEA GEM
            webinar</span> drove the big March spike. On strategy, <span className="text-white
            font-semibold">GEM</span> and <span className="text-white font-semibold">China All Cap
            / Leaders</span> attracted the most attention. <span className="text-white
            font-semibold">Indian Subcontinent</span> and <span className="text-white
            font-semibold">Asia Equity Leaders</span> were quieter this quarter, so Q2 is a chance
            to bring those back into focus.
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
                  <span className="text-xl sm:text-2xl font-extrabold text-white tabular-nums">
                    {kpi.value}
                  </span>
                </div>
                <div className="text-[11px] font-semibold text-white mt-1">{kpi.label}</div>
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
                  ? "bg-primary text-primary-foreground"
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
          {activeTab === "Activity" && <ActivityTab />}
          {activeTab === "Engagement" && <EngagementTab />}
          {activeTab === "Strategies" && <StrategiesTab />}
          {activeTab === "Campaigns" && <CampaignsTab />}
        </div>
      </div>
    </section>
  );
}

function ActivityTab() {
  return (
    <div className="space-y-8">
      <div>
        <h3 className="text-lg font-semibold mb-1 text-white">Interaction types — Q1 vs Q4</h3>
        <p className="text-xs text-white/50 mb-4">
          Every recorded email, web visit, form submission and tracked link-click on FSSA-tagged
          assets and campaigns.
        </p>
        <ResponsiveContainer width="100%" height={280}>
          <BarChart data={activityBreakdown} margin={{ left: 0, right: 30, top: 5, bottom: 5 }}>
            <CartesianGrid strokeDasharray="3 3" stroke={CHART_GRID} />
            <XAxis dataKey="type" tick={{ fontSize: 11, fill: CHART_TICK_LIGHT }} />
            <YAxis tick={{ fontSize: 12, fill: CHART_TICK_DIM }} />
            <Tooltip contentStyle={CHART_TOOLTIP} cursor={CHART_CURSOR} />
            <Legend wrapperStyle={{ color: "rgba(255,255,255,0.7)" }} />
            <Bar dataKey="q1" name="Q1 2026" fill={BAR_Q1} radius={[6, 6, 0, 0]} barSize={28} />
            <Bar dataKey="q4" name="Q4 2025" fill={BAR_Q4} radius={[6, 6, 0, 0]} barSize={28} />
          </BarChart>
        </ResponsiveContainer>
      </div>

      <div>
        <h3 className="text-lg font-semibold mb-1 text-white">Monthly interaction volume</h3>
        <p className="text-xs text-white/50 mb-4">March spiked with EMEA webinar traffic, ANZ podcast follow-ups and HK client-update eDMs.</p>
        <ResponsiveContainer width="100%" height={200}>
          <BarChart data={monthlyTrend} margin={{ left: 0, right: 30, top: 5, bottom: 5 }}>
            <CartesianGrid strokeDasharray="3 3" stroke={CHART_GRID} />
            <XAxis dataKey="month" tick={{ fontSize: 12, fill: CHART_TICK_LIGHT }} />
            <YAxis tick={{ fontSize: 12, fill: CHART_TICK_DIM }} />
            <Tooltip contentStyle={CHART_TOOLTIP} cursor={CHART_CURSOR} />
            <Bar dataKey="interactions" name="Interactions" fill={BAR_Q1} radius={[6, 6, 0, 0]} barSize={40} />
          </BarChart>
        </ResponsiveContainer>
      </div>
    </div>
  );
}

function EngagementTab() {
  return (
    <div className="space-y-8">
      <div>
        <h3 className="text-lg font-semibold mb-1 text-white">Engagement by company × channel</h3>
        <p className="text-xs text-white/50 mb-4">
          Top 15 accounts by total Q1 FSSA-tagged interactions, split by channel (email opens +
          clicks, tracked custom-URL clicks, form/file activity, website visits).
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
              <th className="text-right p-3 font-medium text-white/60">Email</th>
              <th className="text-right p-3 font-medium text-white/60">Link</th>
              <th className="text-right p-3 font-medium text-white/60">Form/File</th>
              <th className="text-right p-3 font-medium text-white/60">Web</th>
              <th className="text-right p-3 font-medium text-white/60">Total</th>
            </tr>
          </thead>
          <tbody>
            {engagementByCompany.map((row) => (
              <tr key={row.account} className="border-t" style={{ borderColor: "rgba(255,255,255,0.06)" }}>
                <td className="p-3 font-medium text-white">{row.account}</td>
                <td className="p-3 text-right tabular-nums text-white">{row.email.toLocaleString()}</td>
                <td className="p-3 text-right tabular-nums text-white">{row.link.toLocaleString()}</td>
                <td className="p-3 text-right tabular-nums text-white">{row.form.toLocaleString()}</td>
                <td className="p-3 text-right tabular-nums text-white">{row.web.toLocaleString()}</td>
                <td className="p-3 text-right tabular-nums font-bold text-primary">{row.total.toLocaleString()}</td>
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
        <h3 className="text-lg font-semibold mb-1 text-white">Interactions by strategy</h3>
        <p className="text-xs text-white/50 mb-4">
          Q1 FSSA-tagged interactions classified by campaign-name keywords. "Brand / General"
          covers FSSA always-on and cross-strategy eDMs (e.g. institutional FSSA, country retail
          always-on).
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
        <h3 className="text-lg font-semibold mb-1 text-white">FSSA-strategy activity only</h3>
        <p className="text-xs text-white/50 mb-4">
          The same Q1 data with FSSA brand/always-on campaigns stripped out — this is what landed
          on strategy-specific FSSA content.
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
      <h3 className="text-lg font-semibold mb-1 text-white">Top campaigns driving activity</h3>
      <p className="text-xs text-white/50 mb-4">
        Ranked by total Q1 interactions on FSSA-tagged campaigns. The September 2025 EMEA GEM
        Webinar continued to drive engagement through Q1, followed by the HK and SG wholesale
        FSSA China client-update eDMs.
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
