/* ── Sentiment & Social Listening Data ── */
/* Source: FSSA-Q1-social-listening.xlsx (Brandwatch export, Jan–Mar 2026) */
/* Curated to FSSA Investment Managers (filtered out namesake noise — */
/*   Flying Scot Sailing Association, Indiana FSSA, Florida Seminoles etc.) */

export interface SentimentMention {
  title: string;
  source: string;
  channel: "Web" | "Twitter" | "Linkedin";
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

/* ── Headline KPIs (relevant FSSA mentions only) ── */
export const sentimentKpis = {
  totalMentions: 43,
  positiveRate: "37%",
  countriesReached: 6,
  topChannel: "Web — 98%",
};

/* ── Sentiment split ── */
export const sentimentBreakdown = {
  positive: 16,
  neutral: 27,
  negative: 0,
};

/* ── Monthly timeline (relevant-only) ── */
export const mentionsByMonth: {
  month: string;
  positive: number;
  neutral: number;
  negative: number;
  total: number;
}[] = [
  { month: "Jan 26", positive: 3, neutral: 12, negative: 0, total: 15 },
  { month: "Feb 26", positive: 6, neutral: 10, negative: 0, total: 16 },
  { month: "Mar 26", positive: 7, neutral: 5, negative: 0, total: 12 },
];

/* ── Channel breakdown ── */
export const channelBreakdown: {
  channel: string;
  mentions: number;
  positive: number;
  neutral: number;
  negative: number;
}[] = [
  { channel: "Web", mentions: 42, positive: 15, neutral: 27, negative: 0 },
  { channel: "Linkedin", mentions: 1, positive: 1, neutral: 0, negative: 0 },
];

/* ── Country breakdown (relevant FSSA mentions) ── */
export const countryBreakdown: { country: string; mentions: number }[] = [
  { country: "United Kingdom", mentions: 23 },
  { country: "Germany", mentions: 9 },
  { country: "United States", mentions: 5 },
  { country: "Hong Kong", mentions: 3 },
  { country: "France", mentions: 2 },
  { country: "Other", mentions: 1 },
];

/* ── Curated list of relevant FSSA mentions ── */
export const recentHighlights: SentimentMention[] = [
  /* ─── LinkedIn / FSSA-owned ─── */
  { title: "FSSA Global Emerging Markets Focus Fund", source: "linkedin.com", channel: "Linkedin", category: "Linkedin Posts", sentiment: "positive", country: "US", date: "2026-03-04", link: "https://www.linkedin.com/posts/fssa-investment-managers_fssa-global-emerging-markets-focus-fund-activity-7431928193827168256-QDjL" },

  /* ─── Positive: fund listings & research pages ─── */
  { title: "FSSA Asia Focus Accumulation Fund — Research & Insight", source: "hl.co.uk", channel: "Web", category: "Fund listing", sentiment: "positive", country: "GB", date: "2026-03-11", link: "https://www.hl.co.uk/funds/fund-discounts,-prices--and--factsheets/search-results/f/fssa-asia-focus-accumulation/research" },
  { title: "Invest In The FSSA Indian Subcontinent All-Cap Fund (E)", source: "hl.co.uk", channel: "Web", category: "Fund listing", sentiment: "positive", country: "GB", date: "2026-02-18", link: "https://www.hl.co.uk/funds/fund-discounts,-prices--and--factsheets/search-results/f/fssa-indian-subcontinent-all-cap-fund-e-accumulation/invest" },
  { title: "FSSA Asia Focus Fund Class B (Accumulation) GBP — Dividends", source: "fidelity.co.uk", channel: "Web", category: "Fund listing", sentiment: "positive", country: "GB", date: "2026-02-21", link: "https://www.fidelity.co.uk/factsheet-data/factsheet/GB00BWNGXJ86-fssa-asia-focus-b-acc/dividends" },
  { title: "FSSA Asia Pacific Equity — Latest stock news and headlines", source: "yahoo.com", channel: "Web", category: "News", sentiment: "positive", country: "HK", date: "2026-02-24", link: "https://hk.finance.yahoo.com/quote/0P0000W8XM/news/" },

  /* ─── Neutral: factsheets, adviser-hub, database pages ─── */
  { title: "Powering transition: critical minerals are central to the next era", source: "adviser-hub.co.uk", channel: "Web", category: "News", sentiment: "neutral", country: "GB", date: "2026-03-30", link: "https://www.adviser-hub.co.uk/powering-transition-critical-minerals-are-central-to-the-next-era/" },
  { title: "Emerging Markets, AI build and commodities", source: "adviser-hub.co.uk", channel: "Web", category: "News", sentiment: "neutral", country: "GB", date: "2026-03-29", link: "https://www.adviser-hub.co.uk/emerging-markets-ai-build-and-commodities/" },
  { title: "Global updates: Investors look beyond the US", source: "adviser-hub.co.uk", channel: "Web", category: "News", sentiment: "neutral", country: "GB", date: "2026-03-26", link: "https://www.adviser-hub.co.uk/global-updates-investors-look-beyond-the-us/" },
  { title: "First Sentier Group $20bn RQI Investors launches Global Value Fund", source: "caproasia.com", channel: "Web", category: "News", sentiment: "neutral", country: "HK", date: "2026-03-27", link: "https://www.caproasia.com/2026/03/27/australia-asset-manager-first-sentier-group-20-billion-quantitative-equities-investor-rqi-investors-partners-launched-rqi-global-value-fund/" },
  { title: "FSSA Greater China Growth Fund Class A (Acc) GBP — Portfolio Overview", source: "fidelity.co.uk", channel: "Web", category: "Fund listing", sentiment: "neutral", country: "GB", date: "2026-03-01", link: "https://www.fidelity.co.uk/factsheet-data/factsheet/GB0033874107-fssa-greater-china-growth-a-acc/portfolio" },
  { title: "FSSA Asia Focus Fund Class B — Risk and Rating", source: "fidelity.co.uk", channel: "Web", category: "Fund listing", sentiment: "neutral", country: "GB", date: "2026-03-01", link: "https://www.fidelity.co.uk/factsheet-data/factsheet/GB00BWNGXJ86-fssa-asia-focus-b-acc" },
  { title: "Stewart Investors Asia Pacific All Cap Fund Class B — Management Info", source: "fidelity.co.uk", channel: "Web", category: "Fund listing", sentiment: "neutral", country: "GB", date: "2026-03-01", link: "https://www.fidelity.co.uk/factsheet-data/factsheet/GB00B0TY6V50-stewart-inv-asia-pacific-all-cap-b-acc" },
  { title: "FSSA Greater China Growth Fund – aktueller Kurs", source: "wallstreet-online.de", channel: "Web", category: "Fund listing", sentiment: "neutral", country: "DE", date: "2026-02-15", link: "https://www.wallstreet-online.de/fonds/first-sentier-investors-global-umbrella-fund-fssa-greater-china-growth-fund-iii-usd-aktie" },
  { title: "FSSA Global Emerging Markets Focus Fund — performance & price chart", source: "onvista.de", channel: "Web", category: "Fund listing", sentiment: "neutral", country: "DE", date: "2026-02-12", link: "https://www.onvista.de/fonds/chart/F-Sent-Inv-Gl-U-FSSA-Gl-EM-Fo-Reg-Shs-E-GBP-Acc-oN-Fonds-IE000C5AFK35" },
  { title: "FSSA Greater China Growth Fund Class A | aktueller Kurs", source: "finanzen.net", channel: "Web", category: "Fund listing", sentiment: "neutral", country: "DE", date: "2026-02-10", link: "https://www.finanzen.net/fonds/fssa-greater-china-growth-fund-class-a-gb0033874107" },
  { title: "Escorts Kubota schedules investor meeting with FSSA Investment Managers", source: "tipranks.com", channel: "Web", category: "News", sentiment: "neutral", country: "US", date: "2026-02-06", link: "https://www.tipranks.com/news/company-announcements/escorts-kubota-schedules-investor-meeting-with-fssa-investment-managers" },
  { title: "Stewart Investors Global Emerging Markets All Cap Fund Class I (Acc) SGD", source: "stewartinvestors.com", channel: "Web", category: "Fund listing", sentiment: "neutral", country: "SG", date: "2026-03-20", link: "https://www.stewartinvestors.com/uk/en/institutional/our-strategies/our-funds/IE000P5M9KF7.html" },
  { title: "Pensions: the regulatory runway", source: "adviser-hub.co.uk", channel: "Web", category: "News", sentiment: "neutral", country: "GB", date: "2026-03-23", link: "https://www.adviser-hub.co.uk/pensions-the-regulatory-runway/" },
  { title: "Ninety One | Oil shock: when geopolitics shuts the taps", source: "adviser-hub.co.uk", channel: "Web", category: "News", sentiment: "neutral", country: "GB", date: "2026-03-23", link: "https://www.adviser-hub.co.uk/ninety-one-oil-shock-when-geopolitics-shuts-the-taps/" },
  { title: "Five things to know about bonds amid current geopolitical volatility", source: "adviser-hub.co.uk", channel: "Web", category: "News", sentiment: "neutral", country: "GB", date: "2026-03-22", link: "https://www.adviser-hub.co.uk/five-things-to-know-about-bonds-amid-current-geopolitical-volatility/" },
  { title: "Capital Group | Inside the AI supply chain", source: "adviser-hub.co.uk", channel: "Web", category: "News", sentiment: "neutral", country: "GB", date: "2026-03-23", link: "https://www.adviser-hub.co.uk/capital-group-inside-the-ai-supply-chain/" },
];
