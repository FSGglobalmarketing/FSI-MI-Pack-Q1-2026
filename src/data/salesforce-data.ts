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
export const engagementByCompany: CompanyChannelRow[] = [
  { account: "DBS Bank Singapore",                          email: 0, web: 0, form: 0, link: 0, total: 855 },
  { account: "China Construction Bank (Asia)",              email: 0, web: 0, form: 0, link: 0, total: 706 },
  { account: "DBS Bank (Hong Kong)",                        email: 0, web: 0, form: 0, link: 0, total: 660 },
  { account: "Bank of China (Hong Kong)",                   email: 0, web: 0, form: 0, link: 0, total: 556 },
  { account: "Mercer Investments (Australia)",              email: 0, web: 0, form: 0, link: 0, total: 422 },
  { account: "HSBC Private Bank (HK)",                      email: 0, web: 0, form: 0, link: 0, total: 402 },
  { account: "Tokio Marine Asset Management",               email: 0, web: 0, form: 0, link: 0, total: 292 },
  { account: "iFAST Financial (HK)",                        email: 0, web: 0, form: 0, link: 0, total: 274 },
  { account: "Mercer (Singapore)",                          email: 0, web: 0, form: 0, link: 0, total: 262 },
  { account: "Shanghai Commercial Bank",                    email: 0, web: 0, form: 0, link: 0, total: 262 },
  { account: "Team Super (AU)",                             email: 0, web: 0, form: 0, link: 0, total: 257 },
  { account: "Feri AG",                                     email: 0, web: 0, form: 0, link: 0, total: 214 },
  { account: "Wing Lung Bank",                              email: 0, web: 0, form: 0, link: 0, total: 183 },
  { account: "Construction & Building Unions Super (CBUS)", email: 0, web: 0, form: 0, link: 0, total: 178 },
  { account: "Harrison Street",                             email: 0, web: 0, form: 0, link: 0, total: 164 },
];

// Interactions by investment strategy — derived from Opportunities Report
// (Investment Team field, 2,207 total opportunities)
export interface StrategyRow { strategy: string; interactions: number; }

export const interactionsByStrategy: StrategyRow[] = [
  { strategy: "Listed Infrastructure",    interactions: 739 },
  { strategy: "Fixed Income",             interactions: 681 },
  { strategy: "AEQ Growth",               interactions: 507 },
  { strategy: "Property Securities",      interactions: 139 },
  { strategy: "AEQ Smalls / Mids",        interactions: 127 },
  { strategy: "First Sentier (Brand)",    interactions:   9 },
];

// FSI-strategy-only breakdown (for the chart variant that hides house/brand rows)
export const interactionsByFssaStrategy: StrategyRow[] = [
  { strategy: "Listed Infrastructure",    interactions: 739 },
  { strategy: "Fixed Income",             interactions: 681 },
  { strategy: "AEQ Growth",               interactions: 507 },
  { strategy: "Property Securities",      interactions: 139 },
  { strategy: "AEQ Smalls / Mids",        interactions: 127 },
];

// Top Q1 2026 campaigns by prospect activity
export const topCampaigns = [
  { campaign: "EMEA 2025-11 Igneo AIM",                                      interactions: 3841 },
  { campaign: "Institutional (house-level)",                                 interactions: 3532 },
  { campaign: "2026-03 ANZ WS AEQ Growth Post-reporting Podcast",            interactions: 2523 },
  { campaign: "ANZ Campaigns (rollup)",                                      interactions: 2312 },
  { campaign: "US Igneo NADIF Institutional",                                interactions: 1130 },
  { campaign: "2024 APAC Tracker Domain Campaign for FSI",                   interactions:  961 },
  { campaign: "Master Subscription — SOSCOT",                                interactions:  901 },
  { campaign: "2026-03 HK Wholesale FSSA China client update eDM",           interactions:  788 },
  { campaign: "EMEA 2025-09 FSSA GEM Webinar",                               interactions:  721 },
  { campaign: "Hong Kong (English) Retail",                                  interactions:  570 },
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
