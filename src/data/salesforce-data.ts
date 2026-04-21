// ═══════════════════════════════════════════════════════════════════════
// SOURCE: Salesforce Marketing Contact Activity.xlsx (Pardot prospect
// activity) + FSSA CRM Opportunities Report.xlsx
// Scope: Q1 2026 (Jan–Mar). FILTERED to rows where the Asset Name OR
// Campaign Name contains "FSSA" (case-insensitive). Sibling-brand and
// generic house-level campaigns are excluded.
// ═══════════════════════════════════════════════════════════════════════

export const salesforceMarketingKpis = [
  { value: "6,314", label: "FSSA-tagged interactions (Q1)", comparison: "+26% vs Q4 (5,001)" },
  { value: "77%", label: "Email share of mix", comparison: "List + automated emails" },
  { value: "Mar", label: "Peak month", comparison: "4,640 · +212% vs Feb" },
  { value: "5", label: "Accounts >100 each", comparison: "DBS SG leads at 426" },
];

// Activity type mix — Q1 vs Q4, FSSA-only
export const activityBreakdown = [
  { type: "Email Opens", q1: 3091, q4: 2953 },
  { type: "Email Clicks", q1: 1850, q4: 1746 },
  { type: "Custom URL Clicks", q1: 713, q4: 12 },
  { type: "Website Visits", q1: 508, q4: 244 },
  { type: "Form / File Views", q1: 119, q4: 29 },
  { type: "Form Submissions", q1: 33, q4: 17 },
];

// 6-month trend — FSSA-only
export const monthlyTrend = [
  { month: "Oct 25", interactions: 3074 },
  { month: "Nov 25", interactions: 1812 },
  { month: "Dec 25", interactions: 115 },
  { month: "Jan 26", interactions: 185 },
  { month: "Feb 26", interactions: 1489 },
  { month: "Mar 26", interactions: 4640 },
];

// Engagement by company × channel (Q1 2026, FSSA-tagged only, top 15)
// Channels: Email (opens+clicks on List Email / Automated Email),
// Web (website visits), Form/File (form views + file views + submissions),
// Link (tracked custom-URL clicks from eDMs).
export interface CompanyChannelRow {
  account: string;
  email: number;
  web: number;
  form: number;
  link: number;
  total: number;
}

export const engagementByCompany: CompanyChannelRow[] = [
  { account: "DBS Bank Singapore",                email: 322, web: 0,  form: 0, link: 104, total: 426 },
  { account: "Bank of China (Hong Kong)",         email: 265, web: 1,  form: 6, link: 123, total: 395 },
  { account: "China Construction Bank (Asia)",    email: 180, web: 0,  form: 0, link:  74, total: 254 },
  { account: "DBS Bank (Hong Kong)",              email: 148, web: 1,  form: 4, link:  88, total: 241 },
  { account: "Sun Hung Kai Investment Services",  email:  69, web: 1,  form: 0, link:  45, total: 115 },
  { account: "HSBC Private Bank (HK)",            email:  75, web: 1,  form: 4, link:  29, total: 109 },
  { account: "Mercer (Singapore)",                email:  72, web: 1,  form: 0, link:  24, total:  97 },
  { account: "iFAST Financial (HK)",              email:  81, web: 1,  form: 0, link:   5, total:  87 },
  { account: "Canaccord Genuity Wealth Guernsey", email:  84, web: 1,  form: 0, link:   0, total:  85 },
  { account: "WWK Allgemeine Versicherung AG",    email:  75, web: 0,  form: 0, link:   0, total:  75 },
  { account: "M&G Investment Management London",  email:  66, web: 0,  form: 0, link:   0, total:  66 },
  { account: "Shanghai Commercial Bank",          email:  48, web: 0,  form: 0, link:  16, total:  64 },
  { account: "Alder Investment Management",       email:  53, web: 0,  form: 0, link:   0, total:  53 },
  { account: "Isio (London)",                     email:   0, web: 47, form: 0, link:   1, total:  48 },
  { account: "Feri AG",                           email:  46, web: 0,  form: 0, link:   0, total:  46 },
];

// Interactions by strategy (Q1 2026 FSSA-only)
export interface StrategyRow { strategy: string; interactions: number; }

export const interactionsByStrategy: StrategyRow[] = [
  { strategy: "Brand / General",         interactions: 2605 },
  { strategy: "GEM / Emerging Markets",  interactions: 2106 },
  { strategy: "China All Cap / Leaders", interactions: 1593 },
  { strategy: "LinkedIn / Social",       interactions:    5 },
  { strategy: "Indian Subcontinent",     interactions:    5 },
];

// FSSA-only strategy split (excludes brand/house for a clearer view of
// which strategy content actually pulled engagement).
export const interactionsByFssaStrategy: StrategyRow[] = [
  { strategy: "GEM / Emerging Markets",  interactions: 2106 },
  { strategy: "China All Cap / Leaders", interactions: 1593 },
  { strategy: "LinkedIn / Social",       interactions:    5 },
  { strategy: "Indian Subcontinent",     interactions:    5 },
];

// Top Q1 FSSA campaigns
export const topCampaigns = [
  { campaign: "EMEA 2025-09 FSSA GEM Webinar",                interactions: 1396 },
  { campaign: "Institutional FSSA (always-on)",               interactions: 1168 },
  { campaign: "2026-03 HK Wholesale FSSA China client update eDM", interactions: 789 },
  { campaign: "2026-03 SG Wholesale FSSA China client update eDM", interactions: 491 },
  { campaign: "FSSA (house-level)",                           interactions: 442 },
  { campaign: "Hong Kong (English) Retail FSSA",              interactions: 283 },
  { campaign: "Hong Kong (Chinese) Retail FSSA",              interactions: 229 },
  { campaign: "2026-02 SG Wholesale FSSA GEM client update eDM", interactions: 225 },
  { campaign: "2026-02 HK Wholesale FSSA GEM client update eDM", interactions: 205 },
  { campaign: "Singapore (English) Retail FSSA",              interactions: 165 },
];

// Targeting — job title breakdown (inferred / sample)
export const jobTitleBreakdown = [
  { title: "Portfolio Manager", count: 312 },
  { title: "Investment Analyst", count: 281 },
  { title: "Fund Selector / Research", count: 247 },
  { title: "Financial Adviser", count: 198 },
  { title: "Managing Director", count: 164 },
  { title: "Chief Investment Officer", count: 112 },
  { title: "Head of Research", count: 91 },
  { title: "Wealth Manager", count: 84 },
  { title: "Senior Associate", count: 76 },
  { title: "Partner", count: 58 },
];

// Legacy exports kept for compatibility
export const topEngagedAccounts: { account: string; interactions: number; isOpp: boolean }[] = [];
export const oppAccountMatches: { account: string; interactions: number; stage: string }[] = [];
export const pipelineStages: { stage: string; count: number; q1New: number }[] = [];
export const pipelineByRole: { role: string; count: number }[] = [];
export const topStrategies: { strategy: string; count: number }[] = [];
export const q1NewByStrategy: { strategy: string; count: number }[] = [];
