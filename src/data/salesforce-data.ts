// ═══════════════════════════════════════════════════════════════════════
// SOURCE: Raw Data/CRM/Salesforce Activity.xlsx (Pardot prospect activity)
//         Scope: Q1 2026 (Jan–Mar). FSI brand-wide.
// ═══════════════════════════════════════════════════════════════════════

// ── Headline KPI grid (top of section) ──
// Spreadsheet KPI framework, Conversion / Email-Pardot row:
//   17.7k Opens · 6.0k Clicks · +5% opens vs Q4
export const clientEngagementHeadlineKpis = [
  { value: "17.7k", label: "Opens",  comparison: "+5% opens vs Q4 (16.8k)" },
  { value: "6.0k",  label: "Clicks", comparison: "+2% clicks vs Q4 (5.9k)" },
];

// ── 5-metric strip on a light background ──
export interface FunnelMetric {
  key: string;
  label: string;
  value: number;
  delta: string;
  deltaPositive: boolean;
}

export const emailFunnelStrip: FunnelMetric[] = [
  { key: "engagements", label: "Total engagements", value: 29049, delta: "+4% vs Q4 (27,960)", deltaPositive: true  },
  { key: "opens",       label: "Opens",             value: 17667, delta: "+5% vs Q4 (16,781)", deltaPositive: true  },
  { key: "clicks",      label: "Clicks",            value:  6013, delta: "+2% vs Q4 (5,870)",  deltaPositive: true  },
  { key: "visits",      label: "Website visits",    value:  2081, delta: "−6% vs Q4 (2,215)",  deltaPositive: false },
  { key: "forms",       label: "Form submissions",  value:   363, delta: "−39% vs Q4 (596)",   deltaPositive: false },
];

// ── Email tab KPI cards ──
export const emailTabKpis = [
  { label: "Opens",   value: "17.7k", delta: "+5% vs Q4",       q4: "Q4: 16.8k",       deltaPositive: true },
  { label: "Clicks",  value: "6.0k",  delta: "+2% vs Q4",       q4: "Q4: 5.9k",        deltaPositive: true },
  { label: "Visits",  value: "2.1k",  delta: "−6% vs Q4",       q4: "Q4: 2.2k",        deltaPositive: false },
  { label: "Forms",   value: "363",   delta: "−39% vs Q4",      q4: "Q4: 596",         deltaPositive: false },
];

// ── Email tab — quarter-over-quarter funnel ──
export interface FunnelRow { metric: string; q1: number; q4: number; }
export const emailFunnelQ1VsQ4: FunnelRow[] = [
  { metric: "Opens",   q1: 17667, q4: 16781 },
  { metric: "Clicks",  q1:  6013, q4:  5870 },
  { metric: "Visits",  q1:  2081, q4:  2215 },
  { metric: "Forms",   q1:   363, q4:   596 },
];

// ── Companies tab — top 15 accounts by Q1 engagement ──
export interface CompanyRow {
  company: string;
  sent: number;   // not directly available — used as universe placeholder
  opens: number;  // email opens
  clicks: number; // email clicks + tracked URL clicks
  bounces: number;
  optouts: number;
}

export const topCompaniesQ1: CompanyRow[] = [
  { company: "DBS Bank Singapore",                          sent: 0, opens: 183, clicks: 422, bounces: 0, optouts: 0 },
  { company: "China Construction Bank (Asia)",              sent: 0, opens:  77, clicks: 364, bounces: 0, optouts: 0 },
  { company: "Bank of China (Hong Kong)",                   sent: 0, opens: 115, clicks: 264, bounces: 0, optouts: 0 },
  { company: "DBS Bank (Hong Kong)",                        sent: 0, opens:  73, clicks: 302, bounces: 0, optouts: 0 },
  { company: "Mercer Investments (Australia)",              sent: 0, opens: 136, clicks: 239, bounces: 0, optouts: 0 },
  { company: "Tokio Marine Asset Management",               sent: 0, opens: 265, clicks:   9, bounces: 0, optouts: 0 },
  { company: "HSBC Private Bank (HK)",                      sent: 0, opens:  84, clicks: 176, bounces: 0, optouts: 0 },
  { company: "Team Super (AU)",                             sent: 0, opens: 228, clicks:  15, bounces: 0, optouts: 0 },
  { company: "iFAST Financial (HK)",                        sent: 0, opens: 217, clicks:  14, bounces: 0, optouts: 0 },
  { company: "Feri AG",                                     sent: 0, opens: 209, clicks:   5, bounces: 0, optouts: 0 },
  { company: "Construction & Building Unions Super (CBUS)", sent: 0, opens: 165, clicks:   8, bounces: 0, optouts: 0 },
  { company: "Harrison Street",                             sent: 0, opens: 111, clicks:  53, bounces: 0, optouts: 0 },
  { company: "Shanghai Commercial Bank",                    sent: 0, opens:  34, clicks: 130, bounces: 0, optouts: 0 },
  { company: "Mercer (Singapore)",                          sent: 0, opens:  51, clicks: 111, bounces: 0, optouts: 0 },
  { company: "Wing Lung Bank",                              sent: 0, opens:  15, clicks:  96, bounces: 0, optouts: 0 },
];

// ── Strategies tab — Q1 engagement by strategy ──
// Channels: Opens / Clicks / Visits / Forms (Pardot activity types).
export interface StrategyRow {
  strategy: string;
  opens: number;
  clicks: number;
  visits: number;
  forms: number;
}

export const topStrategiesQ1: StrategyRow[] = [
  { strategy: "Brand / Outlook",                     opens: 3291, clicks: 1427, visits: 1023, forms:   4 },
  { strategy: "Australian Equities",                 opens: 2139, clicks:  444, visits:   21, forms: 106 },
  { strategy: "Asian Fixed Income",                  opens:  788, clicks: 1064, visits:   29, forms:   0 },
  { strategy: "Regional retail / wholesale",         opens:   33, clicks: 1193, visits:   88, forms:  60 },
  { strategy: "Global Listed Infrastructure",        opens:  649, clicks:  298, visits:   20, forms:   2 },
  { strategy: "Cash",                                opens:   18, clicks:    1, visits:    3, forms:   0 },
];

// ── Campaigns tab — top 10 Q1 campaigns ──
export interface CampaignRow {
  campaign: string;
  opens: number;
  clicks: number;
  visits: number;
  forms: number;
}

export const topCampaignsQ1: CampaignRow[] = [
  { campaign: "Institutional (house-level)",                          opens: 2798, clicks:  713, visits:  19, forms:   2 },
  { campaign: "AEQ Growth post-reporting season podcast",             opens: 2099, clicks:  424, visits:   0, forms:   0 },
  { campaign: "ANZ Campaigns (rollup)",                               opens: 1546, clicks:  598, visits:   3, forms: 165 },
  { campaign: "APAC Tracker domain campaign",                         opens:    0, clicks:    0, visits: 961, forms:   0 },
  { campaign: "Hong Kong (English) retail",                           opens:   30, clicks:  539, visits:   1, forms:   0 },
  { campaign: "Asia HK wholesale — Asian Fixed Income + GLIS (Jan)",  opens:  129, clicks:  356, visits:   1, forms:   0 },
  { campaign: "Asia (rollup)",                                        opens:   96, clicks:  103, visits:  88, forms: 138 },
  { campaign: "Asia HK wholesale — Asian Fixed Income + GLIS (Feb)",  opens:  116, clicks:  300, visits:   2, forms:   0 },
  { campaign: "Singapore (English) retail",                           opens:    0, clicks:  320, visits:   2, forms:  60 },
  { campaign: "Asia Singapore wholesale — FSG 2026 Outlook (Jan)",    opens:  198, clicks:  163, visits:   6, forms:   0 },
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
