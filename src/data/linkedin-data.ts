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

// ── Content mix categories (Q1 2026 posts, 10 total) ──
export interface ContentCategory {
  category: string;
  posts: number;
  avgCtr: number;        // decimal
  avgEngagement: number; // decimal
  avgImpressions: number;
}

export const contentMixData: ContentCategory[] = [
  { category: "Event",    posts: 5, avgCtr: 0.1113, avgEngagement: 0.1585, avgImpressions:  992 },
  { category: "Strategy", posts: 3, avgCtr: 0.1743, avgEngagement: 0.2119, avgImpressions: 1089 },
  { category: "Press",    posts: 1, avgCtr: 0.2524, avgEngagement: 0.2782, avgImpressions: 1046 },
  { category: "Asset",    posts: 1, avgCtr: 0.0764, avgEngagement: 0.0996, avgImpressions: 1977 },
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

export const topPostsQ1: TopPost[] = [
  {
    title: "Martin Lau client roundtable — capitalising on China & Asia",
    category: "Event",
    date: "10/03/2026",
    impressions: 2779,
    clicks: 737,
    ctr: 0.2652,
    engagementRate: 0.2864,
    link: "https://www.linkedin.com/company/first-sentier-investors/",
  },
  {
    title: "Genium Investment Partners initiates coverage of FSSA GEM Focus Fund — Recommended",
    category: "Press",
    date: "24/02/2026",
    impressions: 1046,
    clicks: 264,
    ctr: 0.2524,
    engagementRate: 0.2782,
    link: "https://www.linkedin.com/company/first-sentier-investors/",
  },
  {
    title: "Chinese ingenuity — AI and next-generation technology across sectors",
    category: "Strategy",
    date: "09/03/2026",
    impressions: 1062,
    clicks: 250,
    ctr: 0.2354,
    engagementRate: 0.2759,
    link: "https://www.linkedin.com/company/first-sentier-investors/",
  },
  {
    title: "FONDS Professionell Kongress Mannheim — meet Qimin Fei at Stand 85 (DE)",
    category: "Event",
    date: "28/01/2026",
    impressions: 718,
    clicks: 138,
    ctr: 0.1922,
    engagementRate: 0.2340,
    link: "https://www.linkedin.com/company/first-sentier-investors/",
  },
  {
    title: "FOMO beating fundamentals — high-quality companies overlooked amid the AI boom",
    category: "Strategy",
    date: "16/03/2026",
    impressions: 998,
    clicks: 167,
    ctr: 0.1673,
    engagementRate: 0.2024,
    link: "https://www.linkedin.com/company/first-sentier-investors/",
  },
  {
    title: "Post-Cold War order fading — quality, resilience, and our defence exclusions",
    category: "Strategy",
    date: "02/03/2026",
    impressions: 1207,
    clicks: 145,
    ctr: 0.1201,
    engagementRate: 0.1574,
    link: "https://www.linkedin.com/company/first-sentier-investors/",
  },
  {
    title: "China's economic growth — AI, semiconductors & medical equipment (video)",
    category: "Asset",
    date: "23/02/2026",
    impressions: 1977,
    clicks: 151,
    ctr: 0.0764,
    engagementRate: 0.0996,
    link: "https://www.linkedin.com/company/first-sentier-investors/",
  },
  {
    title: "Institutional Money Kongress Frankfurt — meet Qimin Fei (DE)",
    category: "Event",
    date: "23/03/2026",
    impressions: 120,
    clicks: 5,
    ctr: 0.0417,
    engagementRate: 0.1417,
    link: "https://www.linkedin.com/company/first-sentier-investors/",
  },
  {
    title: "Institutional Money Kongress — Asian equities outlook 2026 (DE)",
    category: "Event",
    date: "16/03/2026",
    impressions: 196,
    clicks: 6,
    ctr: 0.0306,
    engagementRate: 0.0867,
    link: "https://www.linkedin.com/company/first-sentier-investors/",
  },
  {
    title: "FONDS Kongress 2026 Mannheim — 'Emerging Markets: the quiet recovery'",
    category: "Event",
    date: "20/01/2026",
    impressions: 1148,
    clicks: 31,
    ctr: 0.0270,
    engagementRate: 0.0436,
    link: "https://www.linkedin.com/company/first-sentier-investors/",
  },
];

// ── Quarter-over-quarter headline metrics ──
// Q4 post count and engagement-derived metrics are unavailable in the current
// export (only Q1 posts were exported); monthly totals above give the full
// daily picture for both quarters.
export const linkedInHeadline = {
  q1: { impressions: 35923, clicks: 3438, reactions: 419, posts: 10, avgCtr: 0.0957, avgEngagement: 0.0122 },
  q4: { impressions: 44581, clicks: 6230, reactions: 648, posts:  0, avgCtr: 0.1397, avgEngagement: 0.0146 },
};

// ── Deprecated heatmap data retained for compatibility only ──
export interface DailyEngagement { date: string; rate: number; }
export const q4DailyEngagement: DailyEngagement[] = [];
