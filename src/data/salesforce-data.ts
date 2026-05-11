// ═══════════════════════════════════════════════════════════════════════
// SOURCE: Raw Data/CRM/Salesforce Activity.xlsx (Pardot prospect activity)
//         + Raw Data/CRM/FSI Opportunities Report.xlsx
// Scope: Q1 2026 (Jan–Mar). Brand-wide FSI — all investment teams.
// ═══════════════════════════════════════════════════════════════════════

export const salesforceMarketingKpis = [
  { value: "29,049", label: "Total engagements (Q1)", comparison: "+4% vs Q4 (27,960)" },
  { value: "17,667", label: "Email opens (Q1)",       comparison: "+5% vs Q4 (16,781)" },
  { value: "Mar",    label: "Peak month",             comparison: "13,737 · +63% vs Feb" },
  { value: "DBS SG", label: "Top engaged account",    comparison: "855 interactions · 5 accounts >100" },
];

// Activity type mix — Q1 vs Q4, all FSI
export const activityBreakdown = [
  { type: "Email Opens",      q1: 17667, q4: 16781 },
  { type: "Email Clicks",     q1:  6013, q4:  5870 },
  { type: "Website Visits",   q1:  2081, q4:  2215 },
  { type: "Custom URL Clicks",q1:  1865, q4:  1162 },
  { type: "Form / File Views",q1:  1060, q4:  1336 },
  { type: "Form Submissions", q1:   363, q4:   596 },
];

// 6-month interaction trend
export const monthlyTrend = [
  { month: "Oct 25", interactions: 11346 },
  { month: "Nov 25", interactions:  9954 },
  { month: "Dec 25", interactions:  6660 },
  { month: "Jan 26", interactions:  6909 },
  { month: "Feb 26", interactions:  8403 },
  { month: "Mar 26", interactions: 13737 },
];

// Engagement by company — Q1 2026 top 15
export interface CompanyChannelRow {
  account: string;
  email: number;
  web: number;
  form: number;
  link: number;
  total: number;
}

// Account-level totals from Q1 activity export (aggregated without channel
// breakdown — all activities roll into total; per-channel split not available
// in this export).
// Opens = "Open" activity rows in Pardot. Clicks = "Email Click" rows.
// Re-aggregated from Raw Data/CRM/Salesforce Activity.xlsx for Q1 2026,
// filtered to each target account. `total` = opens + clicks (the chart
// stacks just these two; Sent is the universe size and excluded so the
// bars reflect audience response only).
export const engagementByCompany: CompanyChannelRow[] = [
  { account: "DBS Bank Singapore",                          email: 183, link: 422, web: 0, form: 0, total: 605 },
  { account: "China Construction Bank (Asia)",              email:  77, link: 364, web: 0, form: 0, total: 441 },
  { account: "Bank of China (Hong Kong)",                   email: 115, link: 264, web: 0, form: 0, total: 379 },
  { account: "DBS Bank (Hong Kong)",                        email:  73, link: 302, web: 0, form: 0, total: 375 },
  { account: "Mercer Investments (Australia)",              email: 136, link: 239, web: 0, form: 0, total: 375 },
  { account: "Tokio Marine Asset Management",               email: 265, link:   9, web: 0, form: 0, total: 274 },
  { account: "HSBC Private Bank (HK)",                      email:  84, link: 176, web: 0, form: 0, total: 260 },
  { account: "Team Super (AU)",                             email: 228, link:  15, web: 0, form: 0, total: 243 },
  { account: "iFAST Financial (HK)",                        email: 217, link:  14, web: 0, form: 0, total: 231 },
  { account: "Feri AG",                                     email: 209, link:   5, web: 0, form: 0, total: 214 },
  { account: "Construction & Building Unions Super (CBUS)", email: 165, link:   8, web: 0, form: 0, total: 173 },
  { account: "Harrison Street",                             email: 111, link:  53, web: 0, form: 0, total: 164 },
  { account: "Shanghai Commercial Bank",                    email:  34, link: 130, web: 0, form: 0, total: 164 },
  { account: "Mercer (Singapore)",                          email:  51, link: 111, web: 0, form: 0, total: 162 },
  { account: "Wing Lung Bank",                              email:  15, link:  96, web: 0, form: 0, total: 111 },
];

// Q1 2026 prospect engagement by strategy. Strategy is inferred from
// campaign-name keywords in Salesforce Activity.xlsx, filtered to FSI-only
// campaigns (Igneo / FSSA / Stewart / AlbaCore / SOSCOT excluded). The
// channels reflect the four activity types Pardot logs: Open (email open),
// Click (Email Click + Custom URL Click combined), Visit (tracked
// website visit) and Form (Form Views + Form Submissions). Pardot doesn't
// record Bounce or Unsubscribe rows in this export.
export interface StrategyEngagementRow {
  strategy: string;
  opens: number;
  clicks: number;
  visits: number;
  forms: number;
}

export const engagementByStrategy: StrategyEngagementRow[] = [
  { strategy: "Brand / Outlook",                       opens: 3291, clicks: 1427, visits: 1023, forms:   4 },
  { strategy: "Australian Equities (AEQ)",             opens: 2139, clicks:  444, visits:   21, forms: 106 },
  { strategy: "Asian Fixed Income",                    opens:  788, clicks: 1064, visits:   29, forms:   0 },
  { strategy: "Regional retail / wholesale",           opens:   33, clicks: 1193, visits:   88, forms:  60 },
  { strategy: "Global Listed Infrastructure (GLIS)",   opens:  649, clicks:  298, visits:   20, forms:   2 },
  { strategy: "Cash",                                  opens:   18, clicks:    1, visits:    3, forms:   0 },
];

// Legacy single-metric exports kept for back-compat with older imports.
export interface StrategyRow { strategy: string; interactions: number; }
export const interactionsByStrategy: StrategyRow[] = engagementByStrategy.map(
  (r) => ({ strategy: r.strategy, interactions: r.opens + r.clicks + r.visits + r.forms })
);
export const interactionsByFssaStrategy: StrategyRow[] = interactionsByStrategy;

// Top Q1 2026 campaigns by prospect activity — FSI-only. Same channel
// split as `engagementByStrategy`. Igneo / FSSA / Stewart / AlbaCore /
// SOSCOT campaigns are filtered out (separate brand decks).
export interface CampaignEngagementRow {
  campaign: string;
  opens: number;
  clicks: number;
  visits: number;
  forms: number;
}

export const topCampaigns: CampaignEngagementRow[] = [
  { campaign: "Institutional (house-level)",                             opens: 2798, clicks:  713, visits:  19, forms:   2 },
  { campaign: "2026-03 ANZ WS AEQ Growth Post-reporting Season podcast", opens: 2099, clicks:  424, visits:   0, forms:   0 },
  { campaign: "ANZ Campaigns (rollup)",                                  opens: 1546, clicks:  598, visits:   3, forms: 165 },
  { campaign: "2024 APAC Tracker Domain Campaign for FSI",               opens:    0, clicks:    0, visits: 961, forms:   0 },
  { campaign: "Hong Kong (English) Retail",                              opens:   30, clicks:  539, visits:   1, forms:   0 },
  { campaign: "2026-01 Asia HK WS — Asian Fixed Income + GLIS",          opens:  129, clicks:  356, visits:   1, forms:   0 },
  { campaign: "Asia (rollup)",                                           opens:   96, clicks:  103, visits:  88, forms: 138 },
  { campaign: "2026-02 Asia HK WS — Asian Fixed Income + GLIS",          opens:  116, clicks:  300, visits:   2, forms:   0 },
  { campaign: "Singapore (English) Retail",                              opens:    0, clicks:  320, visits:   2, forms:  60 },
  { campaign: "2026-01 Asia SG WS — FSG 2026 Outlook",                   opens:  198, clicks:  163, visits:   6, forms:   0 },
];

// Targeting — job title breakdown (placeholder; Pardot job-title field not
// populated consistently in this export)
export const jobTitleBreakdown = [
  { title: "Portfolio Manager",            count: 312 },
  { title: "Investment Analyst",           count: 281 },
  { title: "Fund Selector / Research",     count: 247 },
  { title: "Financial Adviser",            count: 198 },
  { title: "Managing Director",            count: 164 },
  { title: "Chief Investment Officer",     count: 112 },
  { title: "Head of Research",             count:  91 },
  { title: "Wealth Manager",               count:  84 },
  { title: "Senior Associate",             count:  76 },
  { title: "Partner",                      count:  58 },
];

// ── Pipeline (from FSI Opportunities Report, 2,207 total) ──
export const pipelineStages: { stage: string; count: number; q1New: number }[] = [
  { stage: "1-Initiated Dialogue",          count: 210, q1New: 0 },
  { stage: "2-Active Engagement",           count: 188, q1New: 0 },
  { stage: "3-Formalised DD — Long List",   count: 113, q1New: 0 },
  { stage: "4-Formalised DD — Short List",  count:  13, q1New: 0 },
  { stage: "5-Won — Commitment to Proceed", count:  54, q1New: 0 },
  { stage: "6-Onboarding in Process",       count:   6, q1New: 0 },
  { stage: "7-Account Funded",              count: 527, q1New: 0 },
  { stage: "Lost",                          count: 1091, q1New: 0 },
];

// Institution types represented across the opportunity book
export const pipelineByRole: { role: string; count: number }[] = [
  { role: "ANZ Wholesale",      count: 869 },
  { role: "ANZ Institutional",  count: 260 },
  { role: "EMEA Institutional", count: 201 },
  { role: "EMEA Wholesale",     count: 132 },
  { role: "US Institutional",   count:  66 },
  { role: "ASIA Institutional", count:  49 },
  { role: "ASIA Wholesale",     count:  27 },
  { role: "Global Management",  count:  27 },
];

// Top strategies by opportunity count
export const topStrategies: { strategy: string; count: number }[] = [
  { strategy: "(ANZ) Class A Geared Australian Share",        count: 211 },
  { strategy: "EX-20 Australian Share",                       count: 150 },
  { strategy: "FSI Global Listed Infrastructure Fund",        count: 134 },
  { strategy: "(ANZ) Class A First Sentier Cash",             count:  90 },
  { strategy: "Global Credit Income — Wholesale",             count:  69 },
  { strategy: "(ANZ) Class A Small Companies Long Short",     count:  69 },
  { strategy: "Investment Mandate",                           count:  42 },
  { strategy: "(ANZ) Class A Concentrated Australian Share",  count:  40 },
  { strategy: "FSI Responsible Listed Infrastructure Fund",   count:  35 },
  { strategy: "Global Listed Infrastructure — Wholesale",     count:  32 },
];

// Legacy exports kept for compatibility
export const topEngagedAccounts: { account: string; interactions: number; isOpp: boolean }[] = [];
export const oppAccountMatches: { account: string; interactions: number; stage: string }[] = [];
export const q1NewByStrategy: { strategy: string; count: number }[] = [];
