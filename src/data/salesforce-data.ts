// ═══════════════════════════════════════════════════════════════════════
// SOURCE: Raw Data/Email/*.xlsx — per-campaign Pardot exports.
// Each xlsx is one email send with sheets: sent / opens / clicks /
// bounces / optouts. Q4 = Oct–Dec 2025 sends; Q1 = Jan–Mar 2026 sends.
// FSI brand-wide. Sub-brands (Igneo, FSSA, Stewart, AlbaCore, SOSCOT)
// have their own decks and are not included.
// ═══════════════════════════════════════════════════════════════════════

// ── Headline KPIs (Q1 vs Q4) ──
// Q4: 20 sends · 2,699 sent · 652 opens (24.2%) · 96 clicks (3.6%) · 11 bounces · 5 opt-outs
// Q1:  6 sends · 1,302 sent · 280 opens (21.5%) · 76 clicks (5.8%) ·  8 bounces · 2 opt-outs
export const salesforceMarketingKpis = [
  { value: "1,302", label: "Emails sent (Q1)",    comparison: "-52% vs Q4 (2,699)" },
  { value: "280",   label: "Opens (Q1)",          comparison: "-57% vs Q4 (652)" },
  { value: "21.5%", label: "Open rate",           comparison: "-2.7pp vs Q4 (24.2%)" },
  { value: "5.8%",  label: "Click-through rate",  comparison: "+2.2pp vs Q4 (3.6%)" },
];

// ── Per-campaign breakdown (Q1 2026 sends only) ──
// All six Q1 sends were GLIS quarterly updates across EMEA + a US follow-up.
export interface CampaignEngagementRow {
  campaign: string;
  sent: number;
  opens: number;
  clicks: number;
  bounces: number;
  optouts: number;
}

export const topCampaigns: CampaignEngagementRow[] = [
  { campaign: "2026-01 EMEA UKW — GLIS Q4 update",            sent: 754, opens: 130, clicks: 22, bounces: 3, optouts: 1 },
  { campaign: "2026-01 EMEA DE — GLIS Q4 update",             sent: 205, opens:  64, clicks: 18, bounces: 2, optouts: 1 },
  { campaign: "2026-01 EMEA exUK — GLIS Q4 update",           sent: 138, opens:  39, clicks: 23, bounces: 1, optouts: 0 },
  { campaign: "2026-03 US — GLIS Don't forget the yield",     sent: 112, opens:  23, clicks:  1, bounces: 2, optouts: 0 },
  { campaign: "2026-01 EMEA UKI&C — GLIS Q4 update",          sent:  52, opens:  13, clicks:  6, bounces: 0, optouts: 0 },
  { campaign: "2026-01 EMEA FR — GLIS Q4 update",             sent:  41, opens:  11, clicks:  6, bounces: 0, optouts: 0 },
];

// ── Aggregated by region (Q1 2026) ──
export interface RegionEngagementRow {
  region: string;
  sent: number;
  opens: number;
  clicks: number;
  bounces: number;
  optouts: number;
}

export const engagementByRegion: RegionEngagementRow[] = [
  { region: "EMEA", sent: 1190, opens: 257, clicks: 75, bounces: 6, optouts: 2 },
  { region: "US",   sent:  112, opens:  23, clicks:  1, bounces: 2, optouts: 0 },
];

// ── Q1 vs Q4 quarter-on-quarter comparison ──
export interface PeriodComparisonRow {
  metric: string;
  q4: number;
  q1: number;
}

export const q1VsQ4: PeriodComparisonRow[] = [
  { metric: "Opens",     q4: 652, q1: 280 },
  { metric: "Clicks",    q4:  96, q1:  76 },
  { metric: "Bounces",   q4:  11, q1:   8 },
  { metric: "Opt-outs",  q4:   5, q1:   2 },
];

// ── Legacy exports kept for back-compat with components that may still
// import them. Wired to safe empty / derived values so a stale import
// never crashes the build. ──
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

export interface StrategyRow { strategy: string; interactions: number; }
export const interactionsByStrategy: StrategyRow[] = [];
export const interactionsByFssaStrategy: StrategyRow[] = [];

export const activityBreakdown: { type: string; q1: number; q4: number }[] = [];
export const monthlyTrend: { month: string; interactions: number }[] = [];
export const jobTitleBreakdown: { title: string; count: number }[] = [];
export const pipelineStages: { stage: string; count: number; q1New: number }[] = [];
export const pipelineByRole: { role: string; count: number }[] = [];
export const topStrategies: { strategy: string; count: number }[] = [];
export const topEngagedAccounts: { account: string; interactions: number; isOpp: boolean }[] = [];
export const oppAccountMatches: { account: string; interactions: number; stage: string }[] = [];
export const q1NewByStrategy: { strategy: string; count: number }[] = [];
