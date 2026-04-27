export interface HighlightSectionData {
  id: string;
  navLabel: string;
  stage: string;            // "Highlight 1" etc.
  title: string;
  subtitle?: string;
  description?: string;
  goals: string[];
  marketingActivities: string[];
  targetAudience: string[];
  dataSources?: string[];
  variant: "dark" | "cream";
}

export interface EventTeamMember {
  name: string;
  role: string;
  avatar?: string;
}

export interface EventItem {
  name: string;
  format: string;
  audience: string;
  region: string;
  quarter: string;
  status: "committed" | "proposed" | "proprietary" | "distribution-owned";
  category: string;
  city: string;
  lat: number;
  lng: number;
  startDate?: string;
  endDate?: string;
  brand?: string;
  host?: string;
  speaker?: string;
  hasSpeakingSlot?: boolean;
  assetClass?: string;
  marketingLead?: string;
  distributionLead?: string;
  sponsorshipCost?: number;
  currency?: string;
  description?: string;
  eventUrl?: string;
  images?: string[];
  team?: EventTeamMember[];
  comments?: string;
}

export const reportData = {
  brand: "FSI",
  brandFull: "First Sentier Investors",
  quarter: "Q1 2026",
  title: "Global marketing impact report",
  subtitle: "A quarterly review of global marketing activities and performance.",
  tagline: "By paving new ways, we see things differently.",
  dataPeriod: "1st Jan – 31st March 2026",
  dataSources: ["Salesforce", "Google Analytics", "LinkedIn", "Brandwatch", "BrightEdge"],

  globalFocus: [
    {
      number: "01",
      title: "Continuation of the EX-20 launch and reporting season",
      description: "We kicked off the year with a dedicated campaign timed to reporting season — bespoke events, broad media presence and key advertising activities across digital channels.",
    },
    {
      number: "02",
      title: "Build momentum towards the Q2 Cash ETF launch",
      description: "Brand survey, client value proposition, filmed launch videos, bespoke flyers, web copy, and a full communications + advertising plan and schedule now complete.",
    },
    {
      number: "03",
      title: "Develop the GLIS ETF strategy",
      description: "Starting to build awareness in Asia with client meetings in Hong Kong and a media roundtable in Taiwan.",
    },
  ],

  performanceResults: {
    awareness: [
      { channel: "Search engine optimisation", metrics: ["216 Keywords ranked", "+43% est. traffic"], comparison: "+14% keywords vs Dec '25", status: "good" as const },
      { channel: "Display ads (Blis)", metrics: ["40.0k Display visits", "8.7% of Q1 traffic"], comparison: "Programmatic display live across HK / AU", status: "good" as const },
      { channel: "LinkedIn Paid", metrics: ["486.5k Sponsored impressions"], comparison: "+107% vs Q4 (235.1k)", status: "good" as const },
      { channel: "Search engine marketing", metrics: ["18.2k Paid views"], comparison: "4.1% of Q1 traffic", status: "good" as const },
      { channel: "Podcast", metrics: ["N/A Streams"], comparison: "No Q1 episode data", status: "inactive" as const },
    ],
    consideration: [
      { channel: "LinkedIn Organic", metrics: ["35.9k Impressions", "1.2% Avg engagement rate"], comparison: "-19% impressions vs Q4", status: "good" as const },
      { channel: "Website",          metrics: ["199.9k Views (ex-RQI)", "187.5k Active users"], comparison: "+47% views vs Q4 (136.4k)", status: "good" as const },
    ],
    conversion: [
      { channel: "Events",     metrics: ["8 Q1 events", "15 Q1-Q2 roundtables"], comparison: "AEQ reporting · EX-20 launch · Civitas", status: "good" as const },
      { channel: "Email / Pardot", metrics: ["17.7k Opens", "6.0k Clicks"],     comparison: "+5% opens vs Q4",  status: "good" as const },
      { channel: "Webinars",   metrics: ["N/A"],                                 comparison: "No Q1 webinar in export", status: "inactive" as const },
    ],
    serviceLoyalty: [
      { channel: "Pipeline", metrics: ["584 Live opportunities", "74 advancing (DD)"], comparison: "From 2,207 total — Listed Infra leads", status: "good" as const },
    ],
  },

  searchVisibility: {
    description: "firstsentierinvestors.com ranked for 216 keywords in Mar '26 (up from 190 in Dec '25, +14%). 37 terms now sit on page 1 (up from 34), and estimated organic traffic from these terms grew ~43% over the quarter. The biggest gainers were \"mufg forms\" (+59 positions), \"investment management firms\" (+50), \"active security group\" (+48) and \"investors\" (+41 — now ranking #13).",
    goal: "Defend share of voice in Property and Real Estate Investing searches, grow share of voice in ETF searches, and gather user-behaviour data to spot changing trends.",
    marketingActivities: [
      "Always-on search (branded) plus always-on ETF terms",
      "Paid LinkedIn in support of the EX-20 launch and reporting-season push",
      "Featured on Livewire Markets' Buy Hold Sell",
    ],
    competitors: [
      "Fidelity", "Pendal", "Perpetual", "Vanguard", "UBS", "BetaShares", "iShares",
      "Bennelong", "CFS Geared Share", "Ausbil", "Magellan", "ClearBridge",
      "Resolution Capital", "Hyperion",
    ],
    kpis: [
      { value: "216", label: "Ranking keywords (firstsentierinvestors.com)", comparison: "+14% vs Dec '25 (190)" },
      { value: "37",  label: "Page-1 keywords", comparison: "+9% vs Dec '25 (34)" },
      { value: "+43%", label: "Est. organic traffic", comparison: "vs Dec '25" },
      { value: "49",  label: "AU ranking keywords", comparison: "firstsentierinvestors.com.au, Mar '26" },
    ],
    chartDataByCountry: {
      // Source: Raw Data/SEO/SEO_Rankings_over_time.xlsx — AU-only tracking of
      // firstsentierinvestors.com.au vs AU competitor peers (Mar '25 – Mar '26).
      // Other regions are not in the current rankings export.
      AU: [
        { month: "Mar 25", FSI: 38, Vanguard: 30, Perpetual: 22, Pendal: 4, CFS: 10, Bennelong: 4, BetaShares: 5, UBS: 3, Magellan: 35, Ausbil: 3 },
        { month: "Apr 25", FSI: 39, Vanguard: 28, Perpetual: 27, Pendal: 4, CFS: 11, Bennelong: 3, BetaShares: 5, UBS: 4, Magellan: 37, Ausbil: 4 },
        { month: "May 25", FSI: 37, Vanguard: 29, Perpetual: 26, Pendal: 4, CFS: 13, Bennelong: 3, BetaShares: 4, UBS: 3, Magellan: 38, Ausbil: 6 },
        { month: "Jun 25", FSI: 39, Vanguard: 29, Perpetual: 29, Pendal: 4, CFS: 13, Bennelong: 2, BetaShares: 5, UBS: 2, Magellan: 39, Ausbil: 3 },
        { month: "Jul 25", FSI: 40, Vanguard: 31, Perpetual: 32, Pendal: 3, CFS: 15, Bennelong: 3, BetaShares: 5, UBS: 3, Magellan: 39, Ausbil: 3 },
        { month: "Aug 25", FSI: 49, Vanguard: 35, Perpetual: 36, Pendal: 3, CFS: 16, Bennelong: 4, BetaShares: 4, UBS: 2, Magellan: 39, Ausbil: 3 },
        { month: "Sep 25", FSI: 52, Vanguard: 37, Perpetual: 38, Pendal: 3, CFS: 17, Bennelong: 3, BetaShares: 5, UBS: 2, Magellan: 38, Ausbil: 3 },
        { month: "Oct 25", FSI: 54, Vanguard: 42, Perpetual: 41, Pendal: 3, CFS: 22, Bennelong: 3, BetaShares: 6, UBS: 2, Magellan: 32, Ausbil: 3 },
        { month: "Nov 25", FSI: 51, Vanguard: 43, Perpetual: 43, Pendal: 3, CFS: 21, Bennelong: 4, BetaShares: 5, UBS: 2, Magellan: 30, Ausbil: 3 },
        { month: "Dec 25", FSI: 51, Vanguard: 41, Perpetual: 43, Pendal: 3, CFS: 20, Bennelong: 4, BetaShares: 5, UBS: 2, Magellan: 24, Ausbil: 5 },
        { month: "Jan 26", FSI: 52, Vanguard: 41, Perpetual: 43, Pendal: 3, CFS: 23, Bennelong: 4, BetaShares: 7, UBS: 2, Magellan: 24, Ausbil: 6 },
        { month: "Feb 26", FSI: 49, Vanguard: 42, Perpetual: 44, Pendal: 2, CFS: 27, Bennelong: 4, BetaShares: 7, UBS: 2, Magellan: 23, Ausbil: 6 },
        { month: "Mar 26", FSI: 49, Vanguard: 44, Perpetual: 44, Pendal: 2, CFS: 27, Bennelong: 4, BetaShares: 7, UBS: 2, Magellan: 21, Ausbil: 12 },
      ],
    },
    focusAreas: [
      "Push firstsentierinvestors.com.au page-1 presence vs Vanguard / Perpetual / Magellan",
      "Track generic category terms — 'global listed infrastructure', 'quantitative equities', 'quality investing'",
      "Expand keyword coverage across FSI boutiques (Igneo, Stewart Investors, AlbaCore)",
    ],
    nextQuarter: [
      "Re-instrument UK / SG / DE / US tracking when rankings data becomes available",
      "Benchmark vs peer-group by region, not just Australian peers",
    ],
  },

  highlights: [
    {
      id: "highlight-aeq-reporting",
      navLabel: "Reporting season",
      stage: "Highlight 1",
      title: "Australian Equities Growth — reporting season",
      subtitle: "Sector-by-sector reactions and where active investors found opportunity",
      description: "We kicked off the year with a dedicated campaign timed to ASX reporting season — bespoke events across five ANZ cities, broad media presence (Livewire Markets' Buy Hold Sell with Dushko; David Wilson and Christian Guerra on the Reporting Season podcast), and supporting digital activity across paid LinkedIn, search and the AEQ adviser hub.",
      goals: [
        "Defend share of voice across reporting-season commentary in AU media",
        "Convert reporting-season attention into AEQ adviser-hub traffic",
        "Position FSI's AEQ team as the active-investing voice on quality vs. price-action",
      ],
      marketingActivities: [
        "AEQ Reporting season roundtables — Sydney, Melbourne, Perth, Adelaide, Brisbane",
        "Livewire Markets' Buy Hold Sell — Dushko on the special reporting-season episode",
        "Reporting Season podcast — David Wilson and Christian Guerra on sector-by-sector reactions",
        "Always-on paid search and paid LinkedIn supporting AEQ adviser pages",
      ],
      targetAudience: ["Institutional", "Wholesale adviser", "Broker / LGT Wealth"],
      dataSources: ["Social listening (Brandwatch)", "Ptarmigan", "Transistor"],
      variant: "dark",
    },
    {
      id: "highlight-ex20-phase-2",
      navLabel: "EX-20 Phase II",
      stage: "Highlight 2",
      title: "EX-20 campaign — Phase II",
      subtitle: "Continuing the EX-20 Share Fund push with deeper market penetration",
      description: "Phase II builds on the Phase I launch with more ad placements, distribution-led roundtables across five ANZ cities, and an always-on search + social mix designed to drive advisers to the EX-20 fund page (which lifted +32% vs Q4 even before this Phase II push).",
      goals: [
        "More ad placements and a focused effort to drive market penetration",
        "Distribution-led event across the five ANZ cities (LGT Crestone, post-reporting season)",
      ],
      marketingActivities: [
        "EX-20 launch roundtables — Sydney, Melbourne, Perth, Adelaide, Brisbane",
        "Post-reporting season / EX-20 launch / LGT Crestone event in Melbourne (Mar 4-5)",
        "Always-on search (branded + EX-20 terms)",
        "Paid LinkedIn driving to /au/en/adviser/our-funds/.../ex-20-australian-share-fund.html",
      ],
      targetAudience: ["Wholesale adviser (ANZ)", "Ptarmigan ad audiences"],
      dataSources: [
        "Ptarmigan (paid ads)",
        "Livewire + Morningstar first-link tracking",
        "Web (GA4 — EX-20 fund page)",
        "Always-on search performance",
        "Paid + organic social",
      ],
      variant: "cream",
    },
    {
      id: "highlight-cash-etf",
      navLabel: "Cash ETF",
      stage: "Highlight 3",
      title: "Cash ETF — launch planning",
      subtitle: "Brand, positioning and creative ready for Q2 launch",
      description: "Q1 was the planning quarter for the Cash ETF. We completed the brand survey, signed off the client value proposition, filmed launch videos, finalised flyers and web copy, and locked in a full communications and advertising plan and schedule. The launch lands in Q2.",
      goals: [
        "Establish positioning in market — why cash in the portfolio?",
        "Identify why clients would invest in this fund rather than peers (fear and greed)",
        "Brand concepts (visual identity), advertising slogans, tone and straplines signed off",
      ],
      marketingActivities: [
        "Brand survey complete",
        "Client value proposition complete",
        "Filmed launch videos in production",
        "Bespoke flyers and web copy ready",
        "Communications + advertising plan and schedule signed off",
      ],
      targetAudience: ["Wholesale adviser (ANZ)", "Ptarmigan ad audiences"],
      dataSources: [
        "Ptarmigan (paid ads)",
        "Livewire + Morningstar first-link tracking",
        "Web (GA4 landing pages — Q2 onwards)",
        "Always-on search",
        "Paid + organic social",
      ],
      variant: "dark",
    },
    {
      id: "highlight-glis",
      navLabel: "GLIS update",
      stage: "Highlight 4",
      title: "GLIS ETF strategy — Asia awareness build",
      subtitle: "Building GLIS awareness in Asia ahead of the ETF strategy roll-out",
      description: "Starting to build awareness in Asia for the GLIS ETF strategy — client meetings in Hong Kong, a media roundtable in Taipei (Cathay / GLIS, 31 Mar) and supporting always-on search / social across the region.",
      goals: [
        "Establish positioning in Asia — why global listed infrastructure now?",
        "Identify why clients would invest in this fund rather than peers",
        "Build brand concepts and visual identity for the Asia push",
      ],
      marketingActivities: [
        "Client meetings — Hong Kong",
        "Media roundtable — Cathay / GLIS, Taipei (31 Mar)",
        "Always-on search and paid LinkedIn across Asia",
      ],
      targetAudience: ["Wholesale and institutional (Asia)", "Asian financial press"],
      dataSources: [
        "Ptarmigan (paid ads)",
        "Livewire + Morningstar first-link tracking",
        "Web (GA4 — GLIS pages)",
        "Always-on search",
        "Paid + organic social",
      ],
      variant: "cream",
    },
  ] as HighlightSectionData[],

  website: {
    title: "Always on: Website",
    stage: "Consideration",
    subtitle: "Strong lift in Q1 driven by SG performance data and AEQ / EX-20 momentum",
    description: "Q1 2026 delivered 199.9k page views across firstsentierinvestors.com (excluding RQI Investors pages, which sit in a separate deck) — a +47% lift vs Q4 2025 (136.4k). Engagement events reached 947k (+50%) and key-event conversions reached 20.4k (+43%). Standout drivers were the new Singapore performance data landing page (new in Q1, 8.1k views), steady AEQ / EX-20 Share Fund traction in Australia, and the AU performance and literature hubs.",
    kpis: [
      { value: "199.9k", label: "Views (Q1, ex-RQI)",   comparison: "+47% vs Q4 (136.4k)" },
      { value: "187.5k", label: "Active users (Q1)",    comparison: "+59% vs Q4 (118.0k)" },
      { value: "946.9k", label: "Engagement events",    comparison: "+50% vs Q4 (629.1k)" },
      { value: "20.4k",  label: "Key events",           comparison: "+43% vs Q4 (14.3k)" },
    ],
    gaMonthly: [
      { month: "Oct 25", users: 39878, sessions: 50871, pageViews: 50871, bounceRate: 0, avgDuration: 0 },
      { month: "Nov 25", users: 39411, sessions: 50389, pageViews: 50389, bounceRate: 0, avgDuration: 0 },
      { month: "Dec 25", users: 38731, sessions: 48063, pageViews: 48063, bounceRate: 0, avgDuration: 0 },
      { month: "Jan 26", users: 73514, sessions: 90923, pageViews: 90923, bounceRate: 0, avgDuration: 0 },
      { month: "Feb 26", users: 59835, sessions: 72100, pageViews: 72100, bounceRate: 0, avgDuration: 0 },
      { month: "Mar 26", users: 54171, sessions: 67325, pageViews: 67325, bounceRate: 0, avgDuration: 0 },
    ],
    topPages: [
      { page: "/ (home)", views: 18455, change: "-10% vs Q4" },
      { page: "/sg/en/retail/performance/price-and-performance-sut.html", views: 8148, change: "New in Q1" },
      { page: "/hk/zh/retail/performance/price-and-performance.html", views: 6186, change: "-8% vs Q4" },
      { page: "/hk/en/retail/performance/price-and-performance.html", views: 5117, change: "-13% vs Q4" },
      { page: "/au/en/adviser/our-funds/australian-equities/australian-equities-growth.html", views: 3797, change: "-14% vs Q4" },
      { page: "/au/en/adviser/our-funds/australian-equities/australian-equities-growth/ex-20-australian-share-fund.html", views: 3674, change: "+32% vs Q4" },
      { page: "/au/en/adviser/performance/literature.html", views: 2931, change: "+6% vs Q4" },
      { page: "/au/en/adviser/performance/price-and-performance.html", views: 2817, change: "+49% vs Q4" },
      { page: "/hk/en/retail/home.html", views: 2571, change: "-5% vs Q4" },
      { page: "/de/de/professionelle-anleger/our-funds/stewart-investors.html", views: 1862, change: "-15% vs Q4" },
    ],
    trafficSources: [
      { source: "Direct / (none)",      percentage: 59 },
      { source: "Google Organic",       percentage: 17 },
      { source: "Blis / Display",       percentage:  9 },
      { source: "Google CPC",           percentage:  4 },
      { source: "Bing Organic",         percentage:  2 },
      { source: "firstsentier referrals", percentage: 3 },
      { source: "LinkedIn / Social",    percentage:  1 },
      { source: "Other",                percentage:  5 },
    ],
    focusQ4: [
      "Singapore performance SUT data page — new in Q1",
      "AU AEQ and EX-20 Share Fund coverage",
      "Decommissioned legacy Ceros pages across retail sites",
    ],
    focusQ1: [
      "Expand Blis / programmatic display into additional markets",
      "Rebuild SG / HK performance pages to reduce bounce",
      "Audit bounced (-10–15%) pages to recover Q4 traffic",
    ],
  },

  linkedin: {
    title: "Always on: LinkedIn",
    stage: "Consideration",
    subtitle: "Heavy sponsored push (+107%) with selective organic content",
    description: "Q1 paid spend more than doubled (486.5k sponsored impressions vs 235.1k in Q4) while organic output stayed selective — 10 posts across AI thematic, FONDS Kongress (DE) and Institutional Money Kongress (DE). The top organic post was the Martin Lau client roundtable (26.5% CTR, 737 clicks).",
    goals: ["Scale paid reach in priority markets while keeping organic quality high"],
    activities: ["Martin Lau luncheon content", "IMK + FONDS Kongress (DE)", "AI thematic strategy posts", "10 organic posts / quarter"],
    kpis: [
      { value: "486.5k", label: "Sponsored impressions (Q1)", comparison: "+107% vs Q4 (235.1k)" },
      { value: "35.9k", label: "Organic impressions (Q1)",   comparison: "-19% vs Q4 (44.6k)" },
      { value: "10",    label: "Organic posts in Q1",        comparison: "Avg CTR 9.6%" },
    ],
    focusQ4: [
      "Two sponsored campaigns driving Q4 impressions (~235k).",
      "Selective organic cadence maintained across FSI boutiques (FSSA, Igneo, Stewart).",
      "German-language posts for early 2026 events.",
    ],
    focusQ1: [
      "Continue scaling sponsored reach while publishing 3-4 organic per month.",
      "German-language coverage through IMK and FONDS Kongress.",
      "Replicate Martin Lau-style client-led organic posts in Q2.",
    ],
  },

  podcast: {
    title: "Podcasts",
    stage: "Awareness",
    subtitle: "Reduced output as we prepare to shift to a modern format",
    description: "We published one episode of the Keeping the Real Asset podcast in Q4. For 2026 we are focused on working with the Investment team to develop a content strategy. Marketing data suggests video content performs well.",
    kpis: [
      { value: "305", label: "Streams", comparison: "-13% vs Q3" },
      { value: "1", label: "Episodes released", comparison: "0% vs Q3" },
    ],
  },

  email: {
    kpis: [
      { value: "22%", label: "CTOR", comparison: "+80% vs industry" },
      { value: "44%", label: "Open rates", comparison: "+84% vs industry" },
    ],
  },

  events: {
    title: "Events & Sponsorships 2026",
    stage: "Conversion",
    list: [
      // ─── Q1 2026 (Source: 2026 Events.xlsx) ───
      // AEQ Reporting season roundtables × 5 ANZ cities
      { name: "AEQ Reporting season roundtable", format: "Roundtable Lunch", audience: "Broker / LGT Wealth", region: "ANZ", quarter: "Q1", status: "committed" as const, category: "Roundtable", city: "Sydney",    lat: -33.8688, lng: 151.2093, startDate: "2026-03-01", brand: "FSI", host: "FSI", hasSpeakingSlot: true, speaker: "Dushko / David", assetClass: "AEQ", marketingLead: "Karyn Arthur", distributionLead: "Emerson", comments: "Date TBC" },
      { name: "AEQ Reporting season roundtable", format: "Roundtable Lunch", audience: "Broker / LGT Wealth", region: "ANZ", quarter: "Q1", status: "committed" as const, category: "Roundtable", city: "Melbourne", lat: -37.8136, lng: 144.9631, startDate: "2026-03-01", brand: "FSI", host: "FSI", hasSpeakingSlot: true, speaker: "Dushko / David", assetClass: "AEQ", marketingLead: "Karyn Arthur", distributionLead: "Emerson", comments: "Date TBC" },
      { name: "AEQ Reporting season roundtable", format: "Roundtable Lunch", audience: "Broker / LGT Wealth", region: "ANZ", quarter: "Q1", status: "committed" as const, category: "Roundtable", city: "Perth",     lat: -31.9505, lng: 115.8605, startDate: "2026-03-01", brand: "FSI", host: "FSI", hasSpeakingSlot: true, speaker: "Dushko / David", assetClass: "AEQ", marketingLead: "Karyn Arthur", distributionLead: "Emerson", comments: "Date TBC" },
      { name: "AEQ Reporting season roundtable", format: "Roundtable Lunch", audience: "Broker / LGT Wealth", region: "ANZ", quarter: "Q1", status: "committed" as const, category: "Roundtable", city: "Adelaide",  lat: -34.9285, lng: 138.6007, startDate: "2026-03-01", brand: "FSI", host: "FSI", hasSpeakingSlot: true, speaker: "Dushko / David", assetClass: "AEQ", marketingLead: "Karyn Arthur", distributionLead: "Emerson", comments: "Date TBC" },
      { name: "AEQ Reporting season roundtable", format: "Roundtable Lunch", audience: "Broker / LGT Wealth", region: "ANZ", quarter: "Q1", status: "committed" as const, category: "Roundtable", city: "Brisbane",  lat: -27.4698, lng: 153.0251, startDate: "2026-03-01", brand: "FSI", host: "FSI", hasSpeakingSlot: true, speaker: "Dushko / David", assetClass: "AEQ", marketingLead: "Karyn Arthur", distributionLead: "Emerson", comments: "Date TBC" },

      // EX20 launch roundtables × 5 ANZ cities
      { name: "EX20 launch roundtable", format: "Roundtable Lunch", audience: "Wholesale adviser", region: "ANZ", quarter: "Q1", status: "committed" as const, category: "Roundtable", city: "Sydney",    lat: -33.8688, lng: 151.2093, startDate: "2026-03-01", brand: "FSI", host: "FSI", hasSpeakingSlot: true, speaker: "Dushko / David", assetClass: "AEQ", marketingLead: "Karyn Arthur", distributionLead: "Nathan", comments: "Date TBC" },
      { name: "EX20 launch roundtable", format: "Roundtable Lunch", audience: "Wholesale adviser", region: "ANZ", quarter: "Q1", status: "committed" as const, category: "Roundtable", city: "Melbourne", lat: -37.8136, lng: 144.9631, startDate: "2026-03-01", brand: "FSI", host: "FSI", hasSpeakingSlot: true, speaker: "Dushko / David", assetClass: "AEQ", marketingLead: "Karyn Arthur", distributionLead: "Nathan", comments: "Date TBC" },
      { name: "EX20 launch roundtable", format: "Roundtable Lunch", audience: "Wholesale adviser", region: "ANZ", quarter: "Q1", status: "committed" as const, category: "Roundtable", city: "Perth",     lat: -31.9505, lng: 115.8605, startDate: "2026-03-01", brand: "FSI", host: "FSI", hasSpeakingSlot: true, speaker: "Dushko / David", assetClass: "AEQ", marketingLead: "Karyn Arthur", distributionLead: "Nathan", comments: "Date TBC" },
      { name: "EX20 launch roundtable", format: "Roundtable Lunch", audience: "Wholesale adviser", region: "ANZ", quarter: "Q1", status: "committed" as const, category: "Roundtable", city: "Adelaide",  lat: -34.9285, lng: 138.6007, startDate: "2026-03-01", brand: "FSI", host: "FSI", hasSpeakingSlot: true, speaker: "Dushko / David", assetClass: "AEQ", marketingLead: "Karyn Arthur", distributionLead: "Nathan", comments: "Date TBC" },
      { name: "EX20 launch roundtable", format: "Roundtable Lunch", audience: "Wholesale adviser", region: "ANZ", quarter: "Q1", status: "committed" as const, category: "Roundtable", city: "Brisbane",  lat: -27.4698, lng: 153.0251, startDate: "2026-03-01", brand: "FSI", host: "FSI", hasSpeakingSlot: true, speaker: "Dushko / David", assetClass: "AEQ", marketingLead: "Karyn Arthur", distributionLead: "Nathan", comments: "Date TBC" },

      // Other ANZ Q1 events
      { name: "Post reporting season / XX20 launch / LGT Crestone", format: "Conference", audience: "Wholesale adviser", region: "ANZ", quarter: "Q1", status: "distribution-owned" as const, category: "Conference", city: "Melbourne", lat: -37.8136, lng: 144.9631, startDate: "2026-03-04", endDate: "2026-03-05", brand: "FSI", hasSpeakingSlot: true, speaker: "Dushko / David / Chris", assetClass: "AEQ", distributionLead: "Nick" },
      { name: "Civitas Services Conference", format: "Conference", audience: "Wholesale adviser", region: "ANZ", quarter: "Q1", status: "distribution-owned" as const, category: "Conference", city: "Port Douglas", lat: -16.4837, lng: 145.4682, startDate: "2026-03-10", endDate: "2026-03-13", brand: "FSI", host: "Civitas Services", hasSpeakingSlot: true, speaker: "David Wilson", assetClass: "AEQ Growth, GLIS, FSSA GEM", marketingLead: "Josie Haynes", distributionLead: "Nick" },
      { name: "Adelaide roundtable", format: "Roundtable Lunch", audience: "Wholesale adviser", region: "ANZ", quarter: "Q1", status: "committed" as const, category: "Roundtable", city: "Adelaide", lat: -34.9285, lng: 138.6007, startDate: "2026-03-10", brand: "FSI", host: "FSI", hasSpeakingSlot: true, speaker: "Dushko / David", assetClass: "AEQ", marketingLead: "Karyn Arthur", distributionLead: "Nathan", currency: "AUD" },
      { name: "Perth roundtable lunch", format: "Roundtable Lunch", audience: "Wholesale adviser", region: "ANZ", quarter: "Q1", status: "committed" as const, category: "Roundtable", city: "Perth", lat: -31.9505, lng: 115.8605, startDate: "2026-03-11", brand: "FSI", host: "FSI", hasSpeakingSlot: true, speaker: "Dushko / David", assetClass: "AEQ", marketingLead: "Karyn Arthur", distributionLead: "Nathan", currency: "AUD" },

      // Asia Q1
      { name: "Cathay / GLIS media roundtable", format: "Roundtable", audience: "Wholesale & Institutional", region: "ASIA", quarter: "Q1", status: "committed" as const, category: "Roundtable", city: "Taipei", lat: 25.0330, lng: 121.5654, startDate: "2026-03-31", brand: "FSI", host: "FSI", assetClass: "GLIS", marketingLead: "Judi Chung", distributionLead: "Nelson Ng" },

      // ─── Q2 2026 ───
      { name: "Asia Fixed Income client roundtable", format: "Roundtable Lunch", audience: "Wholesale", region: "ASIA", quarter: "Q2", status: "proprietary" as const, category: "Roundtable", city: "Singapore", lat: 1.3521, lng: 103.8198, startDate: "2026-05-01", brand: "FSI", marketingLead: "Edward Tang", distributionLead: "Claudia Then" },
      { name: "Asia Fixed Income client roundtable", format: "Roundtable Lunch", audience: "Wholesale", region: "ASIA", quarter: "Q2", status: "proprietary" as const, category: "Roundtable", city: "Hong Kong", lat: 22.3193, lng: 114.1694, startDate: "2026-05-01", brand: "FSI", marketingLead: "Edward Tang", distributionLead: "Nelson Ng" },
      { name: "Cash ETF launch roundtable", format: "Roundtable Lunch", audience: "Wholesale adviser", region: "ANZ", quarter: "Q2", status: "committed" as const, category: "Roundtable", city: "Sydney",    lat: -33.8688, lng: 151.2093, startDate: "2026-05-01", brand: "FSI", host: "FSI", hasSpeakingSlot: true, speaker: "Tony / Ben", assetClass: "CASH", marketingLead: "Karyn Arthur", distributionLead: "Nathan", comments: "Date TBC — pending ETF launch" },
      { name: "Cash ETF launch roundtable", format: "Roundtable Lunch", audience: "Wholesale adviser", region: "ANZ", quarter: "Q2", status: "committed" as const, category: "Roundtable", city: "Melbourne", lat: -37.8136, lng: 144.9631, startDate: "2026-05-01", brand: "FSI", host: "FSI", hasSpeakingSlot: true, speaker: "Tony / Ben", assetClass: "CASH", marketingLead: "Karyn Arthur", distributionLead: "Nathan", comments: "Date TBC — pending ETF launch" },
      { name: "Cash ETF launch roundtable", format: "Roundtable Lunch", audience: "Wholesale adviser", region: "ANZ", quarter: "Q2", status: "committed" as const, category: "Roundtable", city: "Brisbane",  lat: -27.4698, lng: 153.0251, startDate: "2026-05-01", brand: "FSI", host: "FSI", hasSpeakingSlot: true, speaker: "Tony / Ben", assetClass: "CASH", marketingLead: "Karyn Arthur", distributionLead: "Nathan", comments: "Date TBC — pending ETF launch" },
      { name: "Cash ETF launch roundtable", format: "Roundtable Lunch", audience: "Wholesale adviser", region: "ANZ", quarter: "Q2", status: "committed" as const, category: "Roundtable", city: "Adelaide",  lat: -34.9285, lng: 138.6007, startDate: "2026-05-01", brand: "FSI", host: "FSI", hasSpeakingSlot: true, speaker: "Tony / Ben", assetClass: "CASH", marketingLead: "Karyn Arthur", distributionLead: "Nathan", comments: "Date TBC — pending ETF launch" },
      { name: "Cash ETF launch roundtable", format: "Roundtable Lunch", audience: "Wholesale adviser", region: "ANZ", quarter: "Q2", status: "committed" as const, category: "Roundtable", city: "Perth",     lat: -31.9505, lng: 115.8605, startDate: "2026-05-01", brand: "FSI", host: "FSI", hasSpeakingSlot: true, speaker: "Tony / Ben", assetClass: "CASH", marketingLead: "Karyn Arthur", distributionLead: "Nathan", comments: "Date TBC — pending ETF launch" },
    ] as EventItem[],
  },
};
