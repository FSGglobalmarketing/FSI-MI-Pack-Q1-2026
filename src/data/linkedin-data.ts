// ═══════════════════════════════════════════════════════════════════════
// LinkedIn data — First Sentier Investors organic + sponsored activity
// Source: Raw Data/Linkedin/organic_linkedin_q4_vs_q1.xls
// Scope: Oct 2025 – Mar 2026 daily metrics; all posts captured in Q1 2026.
// ═══════════════════════════════════════════════════════════════════════

export interface LinkedInMonthly {
  month: string;        // "MMM YY"
  organic: number;      // impressions
  sponsored: number;    // impressions
  clicks: number;
  reactions: number;
  comments: number;
  shares: number;
  engagementRate: number; // decimal (reactions + comments + reposts) / organic impressions
}

// Monthly totals aggregated from daily metrics export.
export const linkedInMonthlyData: LinkedInMonthly[] = [
  { month: "Oct 25", organic: 10720, sponsored: 118009, clicks:  491, reactions: 117, comments: 1, shares: 0, engagementRate: 0.0110 },
  { month: "Nov 25", organic: 16681, sponsored: 117111, clicks: 1845, reactions: 251, comments: 2, shares: 3, engagementRate: 0.0153 },
  { month: "Dec 25", organic: 17180, sponsored:      0, clicks: 3894, reactions: 280, comments: 0, shares: 4, engagementRate: 0.0165 },
  { month: "Jan 26", organic: 11984, sponsored: 367524, clicks: 2177, reactions: 204, comments: 2, shares: 2, engagementRate: 0.0173 },
  { month: "Feb 26", organic:  7079, sponsored:  55968, clicks:  446, reactions:  61, comments: 1, shares: 1, engagementRate: 0.0089 },
  { month: "Mar 26", organic: 16860, sponsored:  63006, clicks:  815, reactions: 154, comments: 0, shares: 3, engagementRate: 0.0093 },
];

export interface LinkedInQuarterly {
  quarter: string;
  organic: number;
  sponsored: number;
}

export const linkedInQuarterlyData: LinkedInQuarterly[] = [
  { quarter: "Q4 '25", organic: 44581, sponsored: 235120 },
  { quarter: "Q1 '26", organic: 35923, sponsored: 486498 },
];

// ── Content mix categories (Q1 2026 posts, 13 total) ──
// Re-categorised from the actual Q1 2026 post export (organic_linkedin_q4_vs_q1.xls
// "All posts" sheet, rows 3-15). FSSA-era categories from earlier exports
// removed; categories now reflect FSI Q1 content themes.
export interface ContentCategory {
  category: string;
  posts: number;
  avgCtr: number;        // decimal
  avgEngagement: number; // decimal
  avgImpressions: number;
}

export const contentMixData: ContentCategory[] = [
  { category: "Strategy / Outlook", posts: 7, avgCtr: 0.0879, avgEngagement: 0.1095, avgImpressions: 2117 },
  { category: "Asset / Insight",    posts: 3, avgCtr: 0.0479, avgEngagement: 0.0623, avgImpressions: 3091 },
  { category: "Event / Roadshow",   posts: 2, avgCtr: 0.0290, avgEngagement: 0.0454, avgImpressions: 2347 },
  { category: "Brand / Corporate",  posts: 1, avgCtr: 0.0359, avgEngagement: 0.0586, avgImpressions: 1979 },
];

// ── Q1 2026 posts (ranked by CTR) ──
export interface TopPost {
  title: string;
  category: "Event" | "Strategy" | "Asset" | "Press";
  date: string;       // dd/mm/yyyy
  impressions: number;
  clicks: number;
  ctr: number;         // decimal
  engagementRate: number; // decimal
  link: string;
}

// Q1 2026 posts sorted by CTR — sourced directly from rows 3-15 of the
// LinkedIn "All posts" export. Post categories are inferred from copy.
export const topPostsQ1: TopPost[] = [
  {
    title: "2026: What's next for global markets? — FSG outlook (institutional)",
    category: "Strategy",
    date: "05/01/2026",
    impressions: 1594,
    clicks: 495,
    ctr: 0.3105,
    engagementRate: 0.3250,
    link: "https://www.linkedin.com/feed/update/urn:li:activity:7413798853897846785",
  },
  {
    title: "First Sentier Australian Small Companies Fund has retained its 'Gold' rating from Morningstar",
    category: "Asset",
    date: "19/01/2026",
    impressions: 4789,
    clicks: 1257,
    ctr: 0.2625,
    engagementRate: 0.2798,
    link: "https://www.linkedin.com/feed/update/urn:li:activity:7418876156008980480",
  },
  {
    title: "Nigel Foo — Asian Fixed Income outlook video",
    category: "Strategy",
    date: "28/01/2026",
    impressions: 3494,
    clicks: 270,
    ctr: 0.0773,
    engagementRate: 0.0950,
    link: "https://www.linkedin.com/feed/update/urn:li:activity:7422129078335553536",
  },
  {
    title: "\"Trust that you deserve to be in the room\" — IWD / culture",
    category: "Asset",
    date: "09/03/2026",
    impressions: 4731,
    clicks: 291,
    ctr: 0.0615,
    engagementRate: 0.0723,
    link: "https://www.linkedin.com/feed/update/urn:li:activity:7436896868359536640",
  },
  {
    title: "Xcel Energy CFO on AI and data centres — with Rebecca Sherlock",
    category: "Asset",
    date: "31/03/2026",
    impressions: 4231,
    clicks: 212,
    ctr: 0.0501,
    engagementRate: 0.0598,
    link: "https://www.linkedin.com/feed/update/urn:li:activity:7444584563739373569",
  },
  {
    title: "Global Listed Infrastructure — shareholder income theme",
    category: "Strategy",
    date: "10/03/2026",
    impressions: 2219,
    clicks: 84,
    ctr: 0.0379,
    engagementRate: 0.0527,
    link: "https://www.linkedin.com/feed/update/urn:li:activity:7437283368561483777",
  },
  {
    title: "First Sentier Group — inaugural Climate and Nature Report",
    category: "Press",
    date: "15/01/2026",
    impressions: 1979,
    clicks: 71,
    ctr: 0.0359,
    engagementRate: 0.0586,
    link: "https://www.linkedin.com/feed/update/urn:li:activity:7417374433788522496",
  },
  {
    title: "Value-driven consumer + AI fears — sector opportunities",
    category: "Strategy",
    date: "27/02/2026",
    impressions: 2143,
    clicks: 71,
    ctr: 0.0331,
    engagementRate: 0.0443,
    link: "https://www.linkedin.com/feed/update/urn:li:activity:7433031547701669889",
  },
  {
    title: "Reporting season — David Wilson + Christian Guerra (AEQ Growth)",
    category: "Strategy",
    date: "13/03/2026",
    impressions: 1473,
    clicks: 48,
    ctr: 0.0326,
    engagementRate: 0.0563,
    link: "https://www.linkedin.com/feed/update/urn:li:activity:7438016500038545408",
  },
  {
    title: "Why Japan's volatility signals opportunity? (v2)",
    category: "Strategy",
    date: "26/02/2026",
    impressions: 513,
    clicks: 15,
    ctr: 0.0292,
    engagementRate: 0.0585,
    link: "https://www.linkedin.com/feed/update/urn:li:activity:7432701887323385856",
  },
];

// ── Quarter-over-quarter headline metrics ──
// Impressions use the daily Metrics sheet (page-level organic) so they
// match the narrative + KPI framework figure of 35.9k Q1 / 44.6k Q4.
// Clicks / reactions / avgCtr / posts remain post-level aggregates
// (rows 3-15 in the export for Q1, 16-32 for Q4) — what each post
// individually delivered.
export const linkedInHeadline = {
  q1: { impressions: 35900, clicks: 2896, reactions: 398, posts: 13, avgCtr: 0.0935, avgEngagement: 0.0129 },
  q4: { impressions: 44600, clicks: 6120, reactions: 610, posts: 17, avgCtr: 0.1523, avgEngagement: 0.0152 },
};

// ── Deprecated heatmap data retained for compatibility only ──
export interface DailyEngagement { date: string; rate: number; }
export const q4DailyEngagement: DailyEngagement[] = [];
