// ═══════════════════════════════════════════════════════════════════════
// SOURCES:
//   - Salesforce → Reports → List Email Statistics export
//     (screenshots supplied 2026-05-11). 84 sends across the period —
//     mixes FSI brand with sub-brand activity (RQI, Igneo, FSSA,
//     Altacore) pending a clean brand-split data refresh tomorrow.
//   - Raw Data/Email/*.xlsx — per-campaign Pardot exports (FSI brand,
//     EMEA + US only). 26 sends: 20 in Q4 2025, 6 in Q1 2026 (all GLIS
//     quarterly updates). Used for the breakdown tabs.
//
// Numbers in the headline KPIs and 5-metric strip reflect the broader
// Salesforce universe (84 sends, mixed brand). Breakdown tabs
// (Companies / Strategies / Campaigns) still surface the FSI EMEA
// Pardot subset and are labelled as such — they refresh with the full
// data pull tomorrow.
// ═══════════════════════════════════════════════════════════════════════

// ── Headline KPI grid (2x2 top of section) ──
// From Salesforce List Email Statistics totals (Q4 2025 + Q1 2026 to date):
//   84 sends · 18,819 emails delivered · 6,666 unique opens (35.82%) ·
//   1,247 unique clicks (6.70%) · 18.71% CTOR · 209 bounces · 129 opt-outs
export const clientEngagementHeadlineKpis = [
  { value: "84",     label: "Campaign sends",        comparison: "Q4 2025 + Q1 2026 to date" },
  { value: "18,819", label: "Emails delivered",      comparison: "Across all FSI Salesforce sends" },
  { value: "35.82%", label: "Open rate (unique)",    comparison: "6,666 / 18,819" },
  { value: "18.71%", label: "Click-to-open",         comparison: "1,247 unique clicks / 6,666 opens" },
];

// ── 5-metric funnel strip (dark band) ──
// Salesforce universe figures. Q4 vs Q1 split not in the screenshot
// totals; will be split out with tomorrow's data pull.
export interface FunnelMetric {
  key: string;
  label: string;
  q1: number;
  q4: number;
  delta: string;
  deltaPositive: boolean;
}

export const emailFunnelStrip: FunnelMetric[] = [
  { key: "sent",    label: "Sent",         q1: 18819, q4: 0, delta: "84 sends across the period",       deltaPositive: true },
  { key: "opens",   label: "Unique opens", q1:  6666, q4: 0, delta: "12,693 total opens",               deltaPositive: true },
  { key: "clicks",  label: "Unique clicks",q1:  1247, q4: 0, delta: "2,985 total clicks",               deltaPositive: true },
  { key: "bounces", label: "Bounces",      q1:   209, q4: 0, delta: "182 hard · 27 soft",               deltaPositive: false },
  { key: "optouts", label: "Opt-outs",     q1:   129, q4: 0, delta: "0.69% of sends",                   deltaPositive: false },
];

// ── Email tab — 4 KPI cards ──
export const emailTabKpis = [
  { label: "Sent",          value: "18,819", delta: "84 sends",            q4: "Q4 2025 + Q1 2026",   deltaPositive: true  },
  { label: "Unique opens",  value: "6,666",  delta: "35.82% open rate",    q4: "12,693 total opens",  deltaPositive: true  },
  { label: "Unique clicks", value: "1,247",  delta: "6.70% click rate",    q4: "2,985 total clicks",  deltaPositive: true  },
  { label: "CTOR",          value: "18.71%", delta: "1,247 / 6,666",       q4: "Click-to-open ratio", deltaPositive: true  },
];

// ── Email tab — full funnel single-series (paired Q1 vs Q4 split
// returns once the brand- and quarter-split data lands tomorrow) ──
export interface FunnelRow { metric: string; q1: number; q4: number; }
export const emailFunnelQ1VsQ4: FunnelRow[] = [
  { metric: "Sent",          q1: 18819, q4: 0 },
  { metric: "Unique opens",  q1:  6666, q4: 0 },
  { metric: "Unique clicks", q1:  1247, q4: 0 },
  { metric: "Bounces",       q1:   209, q4: 0 },
  { metric: "Opt-outs",      q1:   129, q4: 0 },
];

// ── Companies tab — top 15 firms by Q1 engagement.
// FSI EMEA Pardot subset only (6 Q1 sends). Refresh pending.
export interface CompanyRow {
  company: string;
  sent: number;
  opens: number;
  clicks: number;
  bounces: number;
  optouts: number;
}

export const topCompaniesQ1: CompanyRow[] = [
  { company: "Alpha Portfolio Advisors GmbH",                sent: 8, opens: 8, clicks: 8, bounces: 0, optouts: 0 },
  { company: "Amundi Asset Management — France",             sent: 7, opens: 7, clicks: 7, bounces: 0, optouts: 0 },
  { company: "Social Protection Fund",                       sent: 4, opens: 4, clicks: 4, bounces: 0, optouts: 0 },
  { company: "Alan Steel (Asset Management) Ltd",            sent: 5, opens: 4, clicks: 0, bounces: 0, optouts: 0 },
  { company: "Tier One",                                     sent: 3, opens: 3, clicks: 1, bounces: 0, optouts: 0 },
  { company: "Castlefield Investment Partners LLP",          sent: 4, opens: 3, clicks: 1, bounces: 0, optouts: 0 },
  { company: "German Client Advisor / IFA / Others",         sent: 7, opens: 4, clicks: 0, bounces: 0, optouts: 0 },
  { company: "LCL Banque Privée",                            sent: 2, opens: 2, clicks: 2, bounces: 0, optouts: 0 },
  { company: "Michael Pintarelli Finanzdienstleistungen AG", sent: 2, opens: 2, clicks: 2, bounces: 0, optouts: 0 },
  { company: "Gallagher Ltd",                                sent: 6, opens: 2, clicks: 2, bounces: 0, optouts: 0 },
  { company: "Sabadell Asset Management",                    sent: 2, opens: 2, clicks: 2, bounces: 0, optouts: 0 },
  { company: "SPF Private Clients Ltd",                      sent: 2, opens: 2, clicks: 2, bounces: 0, optouts: 0 },
  { company: "Amundi Asset Management — Ireland",            sent: 2, opens: 2, clicks: 2, bounces: 0, optouts: 0 },
  { company: "Kempen Capital Management",                    sent: 3, opens: 2, clicks: 1, bounces: 0, optouts: 0 },
  { company: "M & G Wealth Investments LLP — London",        sent: 2, opens: 2, clicks: 1, bounces: 0, optouts: 0 },
];

// ── Strategies tab — Q1 (FSI EMEA Pardot subset) + Q4 (FSI Pardot
// subset incl. ANZ Fixed Income roundtables + UK Insto networking). ──
export interface StrategyRow {
  strategy: string;
  sent: number;
  opens: number;
  clicks: number;
  bounces: number;
  optouts: number;
}

export const topStrategiesQ1: StrategyRow[] = [
  { strategy: "Global Listed Infrastructure",   sent: 1302, opens: 280, clicks: 76, bounces: 8, optouts: 2 },
];

export const topStrategiesQ4: StrategyRow[] = [
  { strategy: "Global Listed Infrastructure",      sent: 2299, opens: 513, clicks: 85, bounces: 9, optouts: 3 },
  { strategy: "Asian / Fixed Income (ANZ)",        sent:  204, opens: 111, clicks:  5, bounces: 1, optouts: 0 },
  { strategy: "Institutional / UK Insto",          sent:   17, opens:  12, clicks:  7, bounces: 0, optouts: 0 },
  { strategy: "Global Listed Infrastructure (US)", sent:  196, opens:  28, clicks:  6, bounces: 1, optouts: 2 },
];

// ── Campaigns tab — one row per Q1 send (FSI EMEA Pardot subset). ──
export interface CampaignRow {
  campaign: string;
  sent: number;
  opens: number;
  clicks: number;
  bounces: number;
  optouts: number;
}

export const topCampaignsQ1: CampaignRow[] = [
  { campaign: "2026-01 EMEA UKW — GLIS Q4 update",           sent: 754, opens: 130, clicks: 22, bounces: 3, optouts: 1 },
  { campaign: "2026-01 EMEA DE — GLIS Q4 update",            sent: 205, opens:  64, clicks: 18, bounces: 2, optouts: 1 },
  { campaign: "2026-01 EMEA exUK — GLIS Q4 update",          sent: 138, opens:  39, clicks: 23, bounces: 1, optouts: 0 },
  { campaign: "2026-03 US — GLIS Don't forget the yield",    sent: 112, opens:  23, clicks:  1, bounces: 2, optouts: 0 },
  { campaign: "2026-01 EMEA UKI&C — GLIS Q4 update",         sent:  52, opens:  13, clicks:  6, bounces: 0, optouts: 0 },
  { campaign: "2026-01 EMEA FR — GLIS Q4 update",            sent:  41, opens:  11, clicks:  6, bounces: 0, optouts: 0 },
];

// ── A few of the high-volume ANZ Q1 campaigns surfaced in the new
// Salesforce export but not yet split out by recipient. Surfaced here
// as a "what's coming" preview — opens / clicks columns will populate
// with the next data refresh. ──
export const anzPreviewCampaignsQ1: { campaign: string; sentDate: string; sent: number }[] = [
  { campaign: "ANZ Reporting Season Podcast",             sentDate: "12 Mar 2026", sent: 1717 },
  { campaign: "ANZ Reporting Season Podcast — source",    sentDate: "13 Mar 2026", sent: 1711 },
  { campaign: "ANZ Reporting Season Podcast — NSW",       sentDate: "12 Mar 2026", sent:  817 },
  { campaign: "ANZ Reporting Season Podcast — Insto",     sentDate: "13 Mar 2026", sent:  763 },
  { campaign: "ANZ — GDP Anti-Inflation Whitepaper",      sentDate: "27 Feb 2026", sent:  458 },
  { campaign: "ANZ WS Glades Gold Club breakfast",        sentDate: "16 Mar 2026", sent:  209 },
  { campaign: "ANZ WS Reporting Season Update — Sun Cst", sentDate: "24 Jan 2026", sent:  138 },
  { campaign: "ANZ FSI WS — Adelaide / Perth / QLD CPD",  sentDate: "27 Jan 2026", sent:  109 },
  { campaign: "ANZ WS AEQ Roundtable — Adel/Perth/QLD",   sentDate: "25 Mar 2026", sent:   65 },
  { campaign: "ANZ WS Reporting Season — Cairns",         sentDate: "24 Jan 2026", sent:   51 },
  { campaign: "ANZ WS Reporting Season — Toowoomba",      sentDate: "24 Jan 2026", sent:   50 },
];

// ── Legacy + back-compat exports ──
export const salesforceMarketingKpis = clientEngagementHeadlineKpis;
export const topCampaigns = topCampaignsQ1;
export const q1VsQ4 = emailFunnelQ1VsQ4;

export interface CompanyChannelRow {
  account: string;
  email: number;
  web: number;
  form: number;
  link: number;
  total: number;
}
export const engagementByCompany: CompanyChannelRow[] = [];

export interface StrategyEngagementRow {
  strategy: string;
  opens: number;
  clicks: number;
  visits: number;
  forms: number;
}
export const engagementByStrategy: StrategyEngagementRow[] = [];

export interface RegionEngagementRow {
  region: string;
  sent: number;
  opens: number;
  clicks: number;
  bounces: number;
  optouts: number;
}
export const engagementByRegion: RegionEngagementRow[] = [];

export interface StrategyRowLegacy { strategy: string; interactions: number; }
export const interactionsByStrategy: StrategyRowLegacy[] = [];
export const interactionsByFssaStrategy: StrategyRowLegacy[] = [];

export const activityBreakdown: { type: string; q1: number; q4: number }[] = [];
export const monthlyTrend: { month: string; interactions: number }[] = [];
export const jobTitleBreakdown: { title: string; count: number }[] = [];
export const pipelineStages: { stage: string; count: number; q1New: number }[] = [];
export const pipelineByRole: { role: string; count: number }[] = [];
export const topStrategies: { strategy: string; count: number }[] = [];
export const topEngagedAccounts: { account: string; interactions: number; isOpp: boolean }[] = [];
export const oppAccountMatches: { account: string; interactions: number; stage: string }[] = [];
export const q1NewByStrategy: { strategy: string; count: number }[] = [];
