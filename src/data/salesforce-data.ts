// ═══════════════════════════════════════════════════════════════════════
// SOURCE: Raw Data/Email/*.xlsx — per-campaign Pardot exports.
// Each xlsx = one email send with sheets sent / opens / clicks /
// bounces / optouts. We count rows per sheet (recipient = 1 row).
// Q4 = Oct–Dec 2025 sends (20 files, 2,699 emails).
// Q1 = Jan–Mar 2026 sends ( 6 files, 1,302 emails — all GLIS).
// FSI brand only; Igneo / FSSA / Stewart / AlbaCore / SOSCOT decks
// report separately.
// ═══════════════════════════════════════════════════════════════════════

// ── Headline KPI grid (2x2 top of section) ──
// Engagements = opens + clicks + bounces + opt-outs.
// Q1: 280 + 76 + 8 + 2 = 366    Q4: 652 + 96 + 11 + 5 = 764
// Peak month: Jan (5 of 6 Q1 sends; 340 engagement events).
// CTOR = clicks / opens. Q1: 76/280 = 27.1%   Q4: 96/652 = 14.7%
export const clientEngagementHeadlineKpis = [
  { value: "366",   label: "Total engagements (Q1)", comparison: "-52% vs Q4 (764)" },
  { value: "1,302", label: "Emails sent (Q1)",       comparison: "-52% vs Q4 (2,699)" },
  { value: "Jan",   label: "Peak month",             comparison: "340 engagement events" },
  { value: "27.1%", label: "CTOR",                   comparison: "+12.4pp vs Q4 (14.7%)" },
];

// ── 5-metric funnel strip (dark band) ──
export interface FunnelMetric {
  key: string;
  label: string;
  q1: number;
  q4: number;
  delta: string;          // "+45% vs Q4 (7,914)" style
  deltaPositive: boolean; // whether the delta should render as green vs red
}

export const emailFunnelStrip: FunnelMetric[] = [
  { key: "sent",    label: "Sent",     q1: 1302, q4: 2699, delta: "-52% vs Q4 (2,699)", deltaPositive: false },
  { key: "opens",   label: "Opens",    q1:  280, q4:  652, delta: "-57% vs Q4 (652)",   deltaPositive: false },
  { key: "clicks",  label: "Clicks",   q1:   76, q4:   96, delta: "-21% vs Q4 (96)",    deltaPositive: false },
  { key: "bounces", label: "Bounces",  q1:    8, q4:   11, delta: "-27% vs Q4 (11)",    deltaPositive: true  },
  { key: "optouts", label: "Opt-outs", q1:    2, q4:    5, delta: "-60% vs Q4 (5)",     deltaPositive: true  },
];

// ── Email tab — 4 KPI cards ──
export const emailTabKpis = [
  { label: "Sent",          value: "1,302", delta: "-52% vs Q4",   q4: "Q4: 2,699", deltaPositive: false },
  { label: "Unique opens",  value: "280",   delta: "-57% vs Q4",   q4: "Q4: 652",   deltaPositive: false },
  { label: "Open rate",     value: "21.5%", delta: "-2.7pp vs Q4", q4: "Q4: 24.2%", deltaPositive: false },
  { label: "CTOR",          value: "27.1%", delta: "+12.4pp vs Q4",q4: "Q4: 14.7%", deltaPositive: true  },
];

// ── Email tab — Q1 vs Q4 full email funnel (paired bars) ──
export interface FunnelRow { metric: string; q1: number; q4: number; }
export const emailFunnelQ1VsQ4: FunnelRow[] = [
  { metric: "Sent",     q1: 1302, q4: 2699 },
  { metric: "Opens",    q1:  280, q4:  652 },
  { metric: "Clicks",   q1:   76, q4:   96 },
  { metric: "Bounces",  q1:    8, q4:   11 },
  { metric: "Opt-outs", q1:    2, q4:    5 },
];

// ── Companies tab — top 15 by Q1 engagement (opens + clicks + bounces + opt-outs).
// Internal / test rows (First Sentier Investors entities, "test", "Test version",
// "Inactive Internal Contacts") are filtered out.
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

// ── Strategies tab — Q1 inferred from filename.
// Q1 sends were 100% GLIS (5 EMEA Q4 updates + 1 US income story).
// We keep Q4 strategies in the table below for context (ANZ fixed-income
// roundtable invites + UK insto networking ran in Q4 only).
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
  { strategy: "Global Listed Infrastructure",   sent: 2299, opens: 513, clicks: 85, bounces: 9, optouts: 3 },
  { strategy: "Asian / Fixed Income (ANZ)",     sent:  204, opens: 111, clicks:  5, bounces: 1, optouts: 0 },
  { strategy: "Institutional / UK Insto",       sent:   17, opens:  12, clicks:  7, bounces: 0, optouts: 0 },
  { strategy: "Global Listed Infrastructure (US)", sent: 196, opens: 28, clicks: 6, bounces: 1, optouts: 2 },
];

// ── Campaigns tab — one row per Q1 send. Campaign name = filename. ──
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

// ── Legacy + back-compat exports ──
// The old SalesforceSection consumed `salesforceMarketingKpis`, `topCampaigns`,
// `engagementByRegion`, `q1VsQ4`. Re-point the names to the new data so any
// stale import (or AlwaysOnSection / hooks) doesn't break.
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
