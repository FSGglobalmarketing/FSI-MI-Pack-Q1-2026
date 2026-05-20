// ═══════════════════════════════════════════════════════════════════════
// SOURCE: Raw Data/Email/*.xlsx — per-campaign Pardot exports.
//   Each xlsx = one email send; sheets sent / opens / clicks / bounces /
//   optouts each list a recipient per row. Counts here are
//   unique-recipient totals.
//   Scope: Q1 2026 (Jan–Mar) only, FSI brand only — sub-brand sends
//   (RQI, Igneo, FSSA, Stewart, AlbaCore) are excluded.
//   21 campaigns aggregated; some Q1 sends lacked a "sent" sheet in
//   the export so universe size = 0 for those rows (responses are
//   still recorded).
// Strategy = inferred from filename keywords.
// ═══════════════════════════════════════════════════════════════════════

// ── Headline KPI grid (top of section) ──
export const clientEngagementHeadlineKpis = [
  { value: "21",    label: "Campaigns",  comparison: "FSI Q1 sends" },
  { value: "2,985", label: "Opens",      comparison: "Unique recipients" },
  { value: "385",   label: "Clicks",     comparison: "12.9% CTOR" },
  { value: "93",    label: "Bounces + opt-outs", comparison: "67 bounces · 26 opt-outs" },
];

// ── 5-metric funnel strip (light band) ──
export interface FunnelMetric {
  key: string;
  label: string;
  value: number;
  delta: string;
  deltaPositive: boolean;
}

export const emailFunnelStrip: FunnelMetric[] = [
  { key: "sent",    label: "Sent",     value: 7817, delta: "21 FSI Q1 campaigns",  deltaPositive: true  },
  { key: "opens",   label: "Opens",    value: 2985, delta: "38.2% open rate",       deltaPositive: true  },
  { key: "clicks",  label: "Clicks",   value:  385, delta: "12.9% CTOR",            deltaPositive: true  },
  { key: "bounces", label: "Bounces",  value:   67, delta: "0.9% of sent",          deltaPositive: false },
  { key: "optouts", label: "Opt-outs", value:   26, delta: "0.3% of sent",          deltaPositive: false },
];

// ── Email tab — 4 KPI cards ──
export const emailTabKpis = [
  { label: "Sent",       value: "7,817", delta: "21 Q1 campaigns",   q4: "FSI brand only",  deltaPositive: true  },
  { label: "Opens",      value: "2,985", delta: "38.2% open rate",   q4: "Unique recipients", deltaPositive: true  },
  { label: "Clicks",     value: "385",   delta: "12.9% CTOR",         q4: "Click-to-open ratio", deltaPositive: true },
  { label: "Bounces",    value: "67",    delta: "0.9% of sent",       q4: "26 opt-outs",      deltaPositive: false },
];

// ── Email tab — Q1 totals as a single-bar funnel ──
export interface FunnelRow { metric: string; q1: number; q4: number; }
export const emailFunnelQ1VsQ4: FunnelRow[] = [
  { metric: "Sent",     q1: 7817, q4: 0 },
  { metric: "Opens",    q1: 2985, q4: 0 },
  { metric: "Clicks",   q1:  385, q4: 0 },
  { metric: "Bounces",  q1:   67, q4: 0 },
  { metric: "Opt-outs", q1:   26, q4: 0 },
];

// ── Companies tab — top 15 by Q1 response (opens + clicks + bounces + opt-outs).
// Internal / test rows filtered out (First Sentier entities etc.).
export interface CompanyRow {
  company: string;
  sent: number;
  opens: number;
  clicks: number;
  bounces: number;
  optouts: number;
}

export const topCompaniesQ1: CompanyRow[] = [
  { company: "Bell Potter Securities — Melbourne",        sent: 0, opens: 68, clicks: 4, bounces: 0, optouts: 0 },
  { company: "Shaw and Partners — Perth",                 sent: 0, opens: 34, clicks: 0, bounces: 1, optouts: 0 },
  { company: "Ord Minnett — Melbourne",                   sent: 0, opens: 29, clicks: 1, bounces: 0, optouts: 0 },
  { company: "Lonsec",                                    sent: 0, opens: 24, clicks: 0, bounces: 0, optouts: 0 },
  { company: "Shaw and Partners — Melbourne",             sent: 0, opens: 23, clicks: 0, bounces: 0, optouts: 0 },
  { company: "Shaw and Partners — Sydney",                sent: 0, opens: 18, clicks: 1, bounces: 2, optouts: 0 },
  { company: "Accounting & You Financial Services",       sent: 0, opens: 11, clicks: 6, bounces: 0, optouts: 0 },
  { company: "Alpha Portfolio Advisors GmbH",             sent: 0, opens:  8, clicks: 8, bounces: 0, optouts: 0 },
  { company: "Bell Potter Securities — Perth",            sent: 0, opens: 15, clicks: 0, bounces: 0, optouts: 0 },
  { company: "Zenith Investment Partners",                sent: 0, opens: 15, clicks: 0, bounces: 0, optouts: 0 },
  { company: "Amundi Asset Management — France",          sent: 0, opens:  7, clicks: 7, bounces: 0, optouts: 0 },
  { company: "RSM Financial Services Australia — Perth",  sent: 0, opens: 14, clicks: 0, bounces: 0, optouts: 0 },
  { company: "Harrison Street",                           sent: 0, opens: 10, clicks: 3, bounces: 0, optouts: 0 },
  { company: "Evans and Partners — Melbourne",            sent: 0, opens: 11, clicks: 1, bounces: 0, optouts: 0 },
  { company: "Perron Investments",                        sent: 0, opens:  7, clicks: 3, bounces: 0, optouts: 0 },
];

// ── Strategies tab — Q1 totals by strategy. ──
export interface StrategyRow {
  strategy: string;
  sent: number;
  opens: number;
  clicks: number;
  bounces: number;
  optouts: number;
}

export const topStrategiesQ1: StrategyRow[] = [
  { strategy: "Australian Equities",          sent: 6209, opens: 2224, clicks: 174, bounces: 58, optouts: 19 },
  { strategy: "Global Listed Infrastructure", sent: 1302, opens:  417, clicks:  96, bounces:  9, optouts:  7 },
  { strategy: "Global Diversified Income",    sent:    0, opens:  274, clicks: 112, bounces:  0, optouts:  0 },
  { strategy: "ANZ Wholesale events",         sent:  306, opens:   70, clicks:   3, bounces:  0, optouts:  0 },
];

// ── Campaigns tab — every Q1 send, ordered by total response ──
export interface CampaignRow {
  campaign: string;
  opens: number;
  clicks: number;
  bounces: number;
  optouts: number;
  sent?: number;
}

export const topCampaignsQ1: CampaignRow[] = [
  { campaign: "AEQ Reporting Season Podcast",                        sent: 1737, opens: 600, clicks: 47, bounces: 10, optouts:  0 },
  { campaign: "AEQ Reporting Season Podcast — resend",               sent: 1711, opens: 600, clicks: 14, bounces:  0, optouts:  0 },
  { campaign: "AEQ Reporting Season Podcast — NSW resend",           sent: 1711, opens: 600, clicks: 47, bounces:  0, optouts:  0 },
  { campaign: "AEQ Reporting Season Podcast — NSW",                  sent:  812, opens: 214, clicks: 21, bounces:  9, optouts: 10 },
  { campaign: "EX-20 launch (Count APL)",                            sent:    0, opens: 159, clicks: 34, bounces: 34, optouts:  8 },
  { campaign: "GDIF Webcast — invitation",                           sent:    0, opens: 158, clicks: 82, bounces:  0, optouts:  0 },
  { campaign: "GLIS Q4 update — AU Wholesale",                       sent:    0, opens: 137, clicks: 20, bounces:  1, optouts:  5 },
  { campaign: "EMEA GLIS Q4 update — UK Wholesale",                  sent:  754, opens: 130, clicks: 22, bounces:  3, optouts:  1 },
  { campaign: "GDIF Webcast — final reminder",                       sent:    0, opens: 116, clicks: 30, bounces:  0, optouts:  0 },
  { campaign: "ANZ Wholesale — Glades Gold Club breakfast",          sent:  306, opens:  70, clicks:  3, bounces:  0, optouts:  0 },
  { campaign: "EMEA GLIS Q4 update — Germany",                       sent:  205, opens:  64, clicks: 18, bounces:  2, optouts:  1 },
  { campaign: "EMEA GLIS Q4 update — rest of Europe",                sent:  138, opens:  39, clicks: 23, bounces:  1, optouts:  0 },
  { campaign: "AEQ Roundtable — Adelaide / Perth / QLD",             sent:   40, opens:  24, clicks:  0, bounces:  0, optouts:  0 },
  { campaign: "US GLIS — Don't forget the yield",                    sent:  112, opens:  23, clicks:  1, bounces:  2, optouts:  0 },
  { campaign: "AEQ Growth Reporting Season Roundtable — Townsville", sent:   63, opens:  21, clicks:  2, bounces:  2, optouts:  0 },
  { campaign: "Reporting Season Update — Toowoomba reminder",       sent:   50, opens:  18, clicks:  4, bounces:  0, optouts:  1 },
  { campaign: "Reporting Season Update — Cairns invitation",        sent:   51, opens:  16, clicks:  1, bounces:  2, optouts:  0 },
  { campaign: "EMEA GLIS Q4 update — UK Insto & Consultant",         sent:   52, opens:  13, clicks:  6, bounces:  0, optouts:  0 },
  { campaign: "EMEA GLIS Q4 update — France",                        sent:   41, opens:  11, clicks:  6, bounces:  0, optouts:  0 },
  { campaign: "AEQ Roundtable — Growth Brokers (CPD)",               sent:   14, opens:   8, clicks:  0, bounces:  0, optouts:  0 },
  { campaign: "AEQ Roundtable — LGT (CPD)",                          sent:   20, opens:   4, clicks:  0, bounces:  1, optouts:  0 },
];

// ── Legacy / back-compat exports ──
export const salesforceMarketingKpis = clientEngagementHeadlineKpis;
export const topCampaigns = topCampaignsQ1;
export const q1VsQ4 = emailFunnelQ1VsQ4;
export const engagementByCompany: { account: string; email: number; web: number; form: number; link: number; total: number }[] = [];
export const engagementByStrategy: StrategyRow[] = topStrategiesQ1;
export const engagementByRegion: { region: string; sent: number; opens: number; clicks: number; bounces: number; optouts: number }[] = [];
export const topStrategiesQ4: StrategyRow[] = [];
export const anzPreviewCampaignsQ1: { campaign: string; sentDate: string; sent: number }[] = [];

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
