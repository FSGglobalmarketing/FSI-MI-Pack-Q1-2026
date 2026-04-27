/* ── Sentiment & Social Listening Data ── */
/* Source: Raw Data/Social listening/sentiment_analysis_Q1.xlsx */
/* Scope: Q1 2026 (Jan-Mar). Tracker = "First Sentier Investors". */

export interface SentimentMention {
  title: string;
  source: string;
  channel: "Web" | "Twitter" | "Linkedin" | "Youtube" | "Bluesky" | "Reddit";
  category: string;
  sentiment: "positive" | "neutral" | "negative";
  country: string;
  date: string;
  link: string;
  engagement?: number;
  followers?: number;
  domainRank?: number;
  snippet?: string;
  author?: string;
}

/* ── Headline KPIs (full tracker, unfiltered) ── */
export const sentimentKpis = {
  totalMentions: 1224,
  positiveRate: "34%",
  countriesReached: 35,
  topChannel: "Web — 95%",
};

/* ── Sentiment split ── */
export const sentimentBreakdown = {
  positive: 410,
  neutral: 796,
  negative: 16,
};

/* ── Monthly timeline ── */
export const mentionsByMonth: {
  month: string;
  positive: number;
  neutral: number;
  negative: number;
  total: number;
}[] = [
  { month: "Jan 26", positive: 153, neutral: 317, negative: 7, total: 477 },
  { month: "Feb 26", positive: 178, neutral: 313, negative: 5, total: 496 },
  { month: "Mar 26", positive:  79, neutral: 166, negative: 4, total: 249 },
];

/* ── Channel breakdown ── */
export const channelBreakdown: {
  channel: string;
  mentions: number;
  positive: number;
  neutral: number;
  negative: number;
}[] = [
  { channel: "Web",      mentions: 1162, positive: 389, neutral: 757, negative: 14 },
  { channel: "Linkedin", mentions:   33, positive:  12, neutral:  20, negative:  1 },
  { channel: "Twitter",  mentions:   18, positive:   5, neutral:  12, negative:  1 },
  { channel: "Youtube",  mentions:    6, positive:   3, neutral:   3, negative:  0 },
  { channel: "Bluesky",  mentions:    3, positive:   1, neutral:   2, negative:  0 },
  { channel: "Reddit",   mentions:    2, positive:   0, neutral:   2, negative:  0 },
];

/* ── Country breakdown (top reported; 341 mentions unmapped / unattributed) ── */
export const countryBreakdown: { country: string; mentions: number }[] = [
  { country: "United States",  mentions: 301 },
  { country: "United Kingdom", mentions: 196 },
  { country: "Germany",        mentions: 115 },
  { country: "Ireland",        mentions:  31 },
  { country: "Australia",      mentions:  30 },
  { country: "France",         mentions:  28 },
  { country: "India",          mentions:  16 },
  { country: "Austria",        mentions:  15 },
  { country: "Italy",          mentions:  15 },
  { country: "Other / Unmapped", mentions: 477 },
];

/* ── Curated Q1 2026 highlights — credible finance/investment coverage ── */
export const recentHighlights: SentimentMention[] = [
  { title: "AlbaCore, MUFG launch European infrastructure debt platform targeting €10bn", source: "ipe.com", channel: "Web", category: "News", sentiment: "positive", country: "US", date: "2026-03-05", link: "https://www.ipe.com/news/albacore-mufg-launch-infra-debt-platform-targeting-10bn-in-europe/" },
  { title: "First Sentier affiliate MUFG join forces on infrastructure debt platform", source: "financialnewswire.com.au", channel: "Web", category: "News", sentiment: "positive", country: "AU", date: "2026-03-08", link: "https://financialnewswire.com.au/" },
  { title: "First Sentier Group $137bn — AlbaCore launches UK & European Infrastructure Debt Platform with MUFG", source: "caproasia.com", channel: "Web", category: "News", sentiment: "positive", country: "HK", date: "2026-03-07", link: "https://www.caproasia.com/" },
  { title: "Igneo acquires UK smart meter provider OnStream from Macquarie", source: "ipe.com", channel: "Web", category: "News", sentiment: "positive", country: "US", date: "2026-03-25", link: "https://www.ipe.com/news/igneo-acquires-uk-smart-meter-provider-onstream-from-macquarie/" },
  { title: "Far From Normal: What drove equity markets in 2025?", source: "firstsentierinvestors.com.au", channel: "Web", category: "Insight", sentiment: "positive", country: "AU", date: "2026-03-26", link: "https://www.firstsentierinvestors.com.au/au/en/adviser/our-insights.html" },
  { title: "Don't forget the yield", source: "firstsentierinvestors.com.au", channel: "Web", category: "Insight", sentiment: "positive", country: "AU", date: "2026-03-04", link: "https://www.firstsentierinvestors.com.au/au/en/adviser/our-insights.html" },
  { title: "Is a new Quant Winter coming?", source: "firstsentierinvestors.com", channel: "Web", category: "Insight", sentiment: "positive", country: "GB", date: "2026-03-31", link: "https://www.firstsentierinvestors.com/" },
  { title: "Top investment teams built on diverse views, transparency", source: "financialstandard.com.au", channel: "Web", category: "News", sentiment: "positive", country: "AU", date: "2026-03-09", link: "https://www.financialstandard.com.au/" },
  { title: "Mitsubishi UFJ exits substantial holder position in Bega Cheese", source: "tipranks.com", channel: "Web", category: "News", sentiment: "positive", country: "US", date: "2026-03-11", link: "https://www.tipranks.com/" },
  { title: "Stewart Investors: Global, Emerging Markets and Sustainable equities", source: "firstsentierinvestors.com", channel: "Web", category: "Fund listing", sentiment: "positive", country: "GB", date: "2026-03-31", link: "https://www.firstsentierinvestors.com/stewart-investors/" },
  { title: "Spotlight on sustainability: WEG", source: "stewartinvestors.com", channel: "Web", category: "Insight", sentiment: "positive", country: "GB", date: "2026-03-29", link: "https://www.stewartinvestors.com/" },
  { title: "Stewart Investors Asia Pacific Leaders Fund Class I (Acc) EUR", source: "stewartinvestors.com", channel: "Web", category: "Fund listing", sentiment: "positive", country: "GB", date: "2026-03-10", link: "https://www.stewartinvestors.com/" },
  { title: "Structural forces driving infrastructure returns", source: "chelseafs.co.uk", channel: "Web", category: "News", sentiment: "positive", country: "GB", date: "2026-01-30", link: "https://www.chelseafs.co.uk/" },
  { title: "US Signal acquires Aurora data center in AI-fueled expansion", source: "crainsgrandrapids.com", channel: "Web", category: "News", sentiment: "positive", country: "US", date: "2026-01-30", link: "https://crainsgrandrapids.com/" },
  { title: "Rathbones — Marcus Blyth | Selector Spotlight", source: "asset.tv", channel: "Web", category: "Video", sentiment: "positive", country: "TV", date: "2026-01-30", link: "https://www.asset.tv/" },
  { title: "US Signal expands data center footprint with acquisition of new facility in Aurora", source: "prnewswire.com", channel: "Web", category: "Press release", sentiment: "positive", country: "US", date: "2026-01-30", link: "https://www.prnewswire.com/" },
  { title: "Malaysia $3.3bn Military Pension Fund (LTAT) to allocate 20% to foreign assets", source: "caproasia.com", channel: "Web", category: "News", sentiment: "positive", country: "HK", date: "2026-03-27", link: "https://www.caproasia.com/" },
  { title: "First Sentier Investors — LinkedIn posts (Q1)", source: "linkedin.com", channel: "Linkedin", category: "Linkedin Posts", sentiment: "positive", country: "US", date: "2026-03-20", link: "https://www.linkedin.com/company/first-sentier-investors/" },
];
