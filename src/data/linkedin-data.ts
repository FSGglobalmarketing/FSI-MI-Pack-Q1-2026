// ═══════════════════════════════════════════════════════════════════════
// LinkedIn data derived from content export: fssa-investment-managers
// Source: Q1 2026 (Jan–Mar). Covers organic activity — FSSA did not run
// sponsored campaigns during this period.
// ═══════════════════════════════════════════════════════════════════════

export interface LinkedInMonthly {
  month: string;        // "MMM YY"
  organic: number;      // impressions
  sponsored: number;    // impressions
  clicks: number;
  reactions: number;
  comments: number;
  shares: number;
  engagementRate: number; // decimal (e.g. 0.05 = 5%)
}

// Includes Q4 2025 for comparison (approximate organic-only baseline).
export const linkedInMonthlyData: LinkedInMonthly[] = [
  { month: "Oct 25", organic: 2100,  sponsored: 0, clicks: 180, reactions: 40,  comments: 2, shares: 5,  engagementRate: 0.086 },
  { month: "Nov 25", organic: 2550,  sponsored: 0, clicks: 210, reactions: 52,  comments: 1, shares: 4,  engagementRate: 0.082 },
  { month: "Dec 25", organic: 1860,  sponsored: 0, clicks: 145, reactions: 38,  comments: 1, shares: 3,  engagementRate: 0.078 },
  { month: "Jan 26", organic: 2388,  sponsored: 0, clicks: 206, reactions: 43,  comments: 1, shares: 5,  engagementRate: 0.086 },
  { month: "Feb 26", organic: 3761,  sponsored: 0, clicks: 408, reactions: 58,  comments: 2, shares: 7,  engagementRate: 0.108 },
  { month: "Mar 26", organic: 8023,  sponsored: 0, clicks: 1333, reactions: 182, comments: 4, shares: 14, engagementRate: 0.166 },
];

export interface LinkedInQuarterly {
  quarter: string;
  organic: number;
  sponsored: number;
}

export const linkedInQuarterlyData: LinkedInQuarterly[] = [
  { quarter: "Q4 '25", organic: 6510,  sponsored: 0 },
  { quarter: "Q1 '26", organic: 14172, sponsored: 0 },
];

// ── Content mix categories (manual curation of Q1 2026 posts) ──
// Based on title/content keywords in the LinkedIn content export.
export interface ContentCategory {
  category: string;
  posts: number;
  avgCtr: number;        // decimal
  avgEngagement: number; // decimal
  avgImpressions: number;
}

export const contentMixData: ContentCategory[] = [
  { category: "Event",    posts: 3, avgCtr: 0.0870, avgEngagement: 0.1398, avgImpressions: 662  },
  { category: "Strategy", posts: 5, avgCtr: 0.1501, avgEngagement: 0.1844, avgImpressions: 835  },
  { category: "Asset",    posts: 1, avgCtr: 0.0764, avgEngagement: 0.0996, avgImpressions: 1977 },
  { category: "Press",    posts: 1, avgCtr: 0.2524, avgEngagement: 0.2782, avgImpressions: 1046 },
];

// ── Top 10 posts this quarter (ranked by CTR) ──
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

export const topPostsQ1: TopPost[] = [
  {
    title: "Martin Lau luncheon — Hong Kong client roundtable with Morningstar",
    category: "Event",
    date: "10/03/2026",
    impressions: 2779,
    clicks: 737,
    ctr: 0.2652,
    engagementRate: 0.2864,
    link: "https://www.linkedin.com/company/fssa-investment-managers/",
  },
  {
    title: "Genium Investment Partners awards FSSA Recommended rating — GEM",
    category: "Press",
    date: "24/02/2026",
    impressions: 1046,
    clicks: 264,
    ctr: 0.2524,
    engagementRate: 0.2782,
    link: "https://www.linkedin.com/company/fssa-investment-managers/",
  },
  {
    title: "FSSA Asia Pacific Leaders webinar — Martin Lau & Rizi Mohanty",
    category: "Strategy",
    date: "09/03/2026",
    impressions: 1062,
    clicks: 250,
    ctr: 0.2354,
    engagementRate: 0.2759,
    link: "https://www.linkedin.com/company/fssa-investment-managers/",
  },
  {
    title: "FONDS Professionell Kongress — Qimin Fei on Asian equities (DE)",
    category: "Event",
    date: "28/01/2026",
    impressions: 718,
    clicks: 138,
    ctr: 0.1922,
    engagementRate: 0.2340,
    link: "https://www.linkedin.com/company/fssa-investment-managers/",
  },
  {
    title: "AI reshaping China's investment landscape — Asia quality update",
    category: "Strategy",
    date: "16/03/2026",
    impressions: 998,
    clicks: 167,
    ctr: 0.1673,
    engagementRate: 0.2024,
    link: "https://www.linkedin.com/company/fssa-investment-managers/",
  },
  {
    title: "Post-Cold War order fading — Asia strategy note",
    category: "Strategy",
    date: "02/03/2026",
    impressions: 1207,
    clicks: 145,
    ctr: 0.1201,
    engagementRate: 0.1574,
    link: "https://www.linkedin.com/company/fssa-investment-managers/",
  },
  {
    title: "China's innovation heritage — video on Chinese ingenuity reshaping markets",
    category: "Asset",
    date: "23/02/2026",
    impressions: 1977,
    clicks: 151,
    ctr: 0.0764,
    engagementRate: 0.0996,
    link: "https://www.linkedin.com/company/fssa-investment-managers/",
  },
  {
    title: "Institutional Money Kongress Frankfurt — meet Qimin Fei (DE)",
    category: "Event",
    date: "23/03/2026",
    impressions: 120,
    clicks: 5,
    ctr: 0.0417,
    engagementRate: 0.1417,
    link: "https://www.linkedin.com/company/fssa-investment-managers/",
  },
  {
    title: "Stewart Investors transition update — FSSA philosophy preserved (DE)",
    category: "Strategy",
    date: "16/03/2026",
    impressions: 196,
    clicks: 6,
    ctr: 0.0306,
    engagementRate: 0.0867,
    link: "https://www.linkedin.com/company/fssa-investment-managers/",
  },
  {
    title: "FONDS Kongress Day 1 — session preview (DE)",
    category: "Event",
    date: "20/01/2026",
    impressions: 1148,
    clicks: 31,
    ctr: 0.0270,
    engagementRate: 0.0436,
    link: "https://www.linkedin.com/company/fssa-investment-managers/",
  },
];

// ── Quarter-over-quarter headline metrics ──
export const linkedInHeadline = {
  q1: { impressions: 14172, clicks: 1947, reactions: 283, posts: 10, avgCtr: 0.1374, avgEngagement: 0.1636 },
  q4: { impressions:  6510, clicks:  535, reactions: 130, posts:  7, avgCtr: 0.0822, avgEngagement: 0.1145 },
};

// ── Deprecated heatmap data retained for compatibility only ──
// The component no longer imports this; it's left here so older code paths
// don't break during transitions.
export interface DailyEngagement { date: string; rate: number; }
export const q4DailyEngagement: DailyEngagement[] = [];
