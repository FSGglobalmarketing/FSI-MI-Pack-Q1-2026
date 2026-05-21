export interface HighlightSectionData {
  id: string;
  navLabel: string;
  stage: string;            // "Highlight 1" etc.
  title: string;
  subtitle?: string;
  description?: string;
  goals: string[];
  marketingActivities: string[];
  keyResults?: string[];     // optional — e.g. "518,000 impressions"
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
      title: "Taiwan media roundtable",
      description: "Participating in a media roundtable in Taipei, we continue to focus on strengthening GLIS awareness and visibility in the Taiwan market.",
    },
  ],

  performanceResults: {
    // ── KPI framework ─────────────────────────────────────────────
    // Strict comparison format: "+X% vs industry" / "+X% vs peers" /
    // "+X% vs Q4" only. Channels without a quantitative baseline carry
    // an empty comparison string.
    awareness: [
      { channel: "Search engine optimisation", metrics: ["216 Keywords ranked", "37 Page-1 keywords"], comparison: "+14% vs Q4", status: "good" as const },
      { channel: "Display ads (Blis)",         metrics: ["40.0k Display visits", "8.7% of Q1 traffic"], comparison: "",            status: "good" as const },
      { channel: "LinkedIn Paid",              metrics: ["486.5k Sponsored impressions"],               comparison: "+107% vs Q4", status: "good" as const },
      { channel: "Search engine marketing",    metrics: ["18.2k Paid views"],                           comparison: "",            status: "good" as const },
      { channel: "Podcast",                    metrics: ["N/A Streams"],                                comparison: "",            status: "inactive" as const },
    ],
    consideration: [
      { channel: "LinkedIn Organic", metrics: ["35.9k Impressions", "1.2% Engagement rate"],     comparison: "-19% vs Q4", status: "good" as const },
      { channel: "Website",          metrics: ["199.9k Views (ex-RQI)", "187.5k Active users"], comparison: "+47% vs Q4", status: "good" as const },
    ],
    conversion: [
      { channel: "Events",         metrics: ["8 Q1 events", "15 Q1-Q2 roundtables"], comparison: "",          status: "good" as const },
      { channel: "Email / Pardot", metrics: ["2.7k Opens", "273 Clicks"],            comparison: "",          status: "good" as const },
      { channel: "Webinars",       metrics: ["N/A"],                                  comparison: "",          status: "inactive" as const },
    ],
    serviceLoyalty: [],
  },

  searchVisibility: {
    description: "Global keyword coverage for firstsentierinvestors.com **grew from 190 to 216** ranked keywords over the quarter (+14%). Page 1 coverage increased from **34 to 37 keywords**, and estimated organic traffic from these terms **rose by 43%**.\n\nBiggest gainers this quarter: 'investment management firms' +50%, 'active security group' +48% and 'investors' +41%. This comes from our paid search campaigns and top-of-funnel activities in places like LinkedIn and Display ads.",
    goals: [
      "Analyse competitor activities and incorporate them into our website",
      "Position our brand to be included in more AI search results as technology pivots",
    ],
    marketingActivities: [
      "Paid Search Ads focusing on branded and ETF-related terms",
      "Cross-promotions on LinkedIn with Duke and Xcel",
      "Paid LinkedIn campaign on ETFs",
      "Featured on Livewire's Buy Hold Sell",
      "Display advertising on XX20",
    ],
    competitors: [
      "Vanguard", "Perpetual", "BetaShares", "BlackRock", "Schroders", "Fidelity",
      "Pendal", "Ausbil", "Yarra", "Bennelong", "ClearBridge", "Maple-Brown Abbott",
      "Russell", "Atlas Infrastructure", "UBS",
    ],
    kpis: [
      { value: "216", label: "Keywords ranked", comparison: "+14% vs Q4 (190)" },
      { value: "37",  label: "Page-1 keywords", comparison: "+9% vs Q4 (34)" },
    ],
    // Source: Raw Data/SEO/*.xlsx — per-strategy keyword-count tracking
    // (Apr 2025 – Apr 2026) of firstsentierinvestors.com.au vs AU peer
    // domains. Each strategy carries its own competitor lineup; the
    // chart's strategy dropdown swaps both the data and the competitor
    // set in view.
    chartDataByStrategy: {
      "AEQ Growth": [
        { month: "Apr 25", BetaShares: 16, FSI: 10, Yarra: 3,  Bennelong: 1, Perpetual: 32, Schroders: 15, Fidelity: 11, Pendal:  9, Ausbil:  5 },
        { month: "May 25", BetaShares: 17, FSI: 14, Yarra: 3,  Bennelong: 1, Perpetual: 29, Schroders: 14, Fidelity: 10, Pendal:  9, Ausbil:  7 },
        { month: "Jun 25", BetaShares: 17, FSI: 15, Yarra: 3,  Bennelong: 1, Perpetual: 32, Schroders: 15, Fidelity:  8, Pendal:  8, Ausbil:  5 },
        { month: "Jul 25", BetaShares: 20, FSI: 14, Yarra: 3,  Bennelong: 2, Perpetual: 35, Schroders: 15, Fidelity:  8, Pendal:  9, Ausbil:  5 },
        { month: "Aug 25", BetaShares: 17, FSI: 15, Yarra: 2,  Bennelong: 2, Perpetual: 35, Schroders: 14, Fidelity:  8, Pendal:  8, Ausbil:  5 },
        { month: "Sep 25", BetaShares: 19, FSI: 16, Yarra: 3,  Bennelong: 2, Perpetual: 37, Schroders: 15, Fidelity:  9, Pendal: 11, Ausbil:  7 },
        { month: "Oct 25", BetaShares: 20, FSI: 15, Yarra: 3,  Bennelong: 2, Perpetual: 38, Schroders: 16, Fidelity:  9, Pendal: 12, Ausbil:  6 },
        { month: "Nov 25", BetaShares: 22, FSI: 14, Yarra: 4,  Bennelong: 1, Perpetual: 38, Schroders: 15, Fidelity: 11, Pendal: 16, Ausbil:  8 },
        { month: "Dec 25", BetaShares: 22, FSI: 11, Yarra: 4,  Bennelong: 1, Perpetual: 35, Schroders: 15, Fidelity: 11, Pendal: 17, Ausbil:  7 },
        { month: "Jan 26", BetaShares: 22, FSI: 12, Yarra: 4,  Bennelong: 1, Perpetual: 35, Schroders: 15, Fidelity: 11, Pendal: 18, Ausbil:  6 },
        { month: "Feb 26", BetaShares: 23, FSI: 11, Yarra: 4,  Bennelong: 2, Perpetual: 36, Schroders: 15, Fidelity: 10, Pendal: 17, Ausbil:  5 },
        { month: "Mar 26", BetaShares: 21, FSI: 20, Yarra: 9,  Bennelong: 6, Perpetual: 44, Schroders: 24, Fidelity: 11, Pendal: 15, Ausbil: 10 },
        { month: "Apr 26", BetaShares: 21, FSI: 20, Yarra: 10, Bennelong: 6, Perpetual: 46, Schroders: 25, Fidelity: 12, Pendal: 11, Ausbil: 11 },
      ],
      "GLIS": [
        { month: "Apr 25", Vanguard: 12, FSI: 29, BlackRock:  8, UBS: 4, BetaShares: 1, MapleBrown: 17, ClearBridge: 18, Russell: 12, AtlasInfra:  6 },
        { month: "May 25", Vanguard: 13, FSI: 27, BlackRock:  8, UBS: 5, BetaShares: 1, MapleBrown: 18, ClearBridge: 17, Russell: 11, AtlasInfra:  8 },
        { month: "Jun 25", Vanguard: 11, FSI: 28, BlackRock:  9, UBS: 3, BetaShares: 2, MapleBrown: 14, ClearBridge: 19, Russell: 12, AtlasInfra:  7 },
        { month: "Jul 25", Vanguard: 12, FSI: 26, BlackRock: 10, UBS: 4, BetaShares: 2, MapleBrown: 15, ClearBridge: 23, Russell: 11, AtlasInfra:  8 },
        { month: "Aug 25", Vanguard: 13, FSI: 29, BlackRock: 11, UBS: 2, BetaShares: 2, MapleBrown: 13, ClearBridge: 28, Russell: 14, AtlasInfra:  6 },
        { month: "Sep 25", Vanguard: 14, FSI: 30, BlackRock: 10, UBS: 2, BetaShares: 3, MapleBrown: 14, ClearBridge: 33, Russell: 14, AtlasInfra:  6 },
        { month: "Oct 25", Vanguard: 17, FSI: 31, BlackRock: 10, UBS: 3, BetaShares: 4, MapleBrown: 16, ClearBridge: 35, Russell: 16, AtlasInfra:  8 },
        { month: "Nov 25", Vanguard: 18, FSI: 30, BlackRock: 10, UBS: 4, BetaShares: 4, MapleBrown: 17, ClearBridge: 35, Russell: 18, AtlasInfra: 10 },
        { month: "Dec 25", Vanguard: 18, FSI: 32, BlackRock: 11, UBS: 4, BetaShares: 4, MapleBrown: 18, ClearBridge: 36, Russell: 17, AtlasInfra:  9 },
        { month: "Jan 26", Vanguard: 19, FSI: 34, BlackRock: 13, UBS: 4, BetaShares: 6, MapleBrown: 19, ClearBridge: 40, Russell: 17, AtlasInfra:  8 },
        { month: "Feb 26", Vanguard: 17, FSI: 32, BlackRock: 13, UBS: 4, BetaShares: 6, MapleBrown: 19, ClearBridge: 42, Russell: 16, AtlasInfra:  8 },
        { month: "Mar 26", Vanguard: 21, FSI: 32, BlackRock: 16, UBS: 4, BetaShares: 6, MapleBrown: 19, ClearBridge: 46, Russell: 17, AtlasInfra:  6 },
        { month: "Apr 26", Vanguard: 21, FSI: 28, BlackRock: 15, UBS: 4, BetaShares: 8, MapleBrown: 16, ClearBridge: 43, Russell: 17, AtlasInfra:  7 },
      ],
      "GPS": [
        { month: "Apr 25", Vanguard:  7, FSI:  6, BlackRock: 6 },
        { month: "May 25", Vanguard:  7, FSI:  6, BlackRock: 6 },
        { month: "Jun 25", Vanguard:  7, FSI:  6, BlackRock: 6 },
        { month: "Jul 25", Vanguard:  7, FSI:  6, BlackRock: 6 },
        { month: "Aug 25", Vanguard: 10, FSI:  8, BlackRock: 7 },
        { month: "Sep 25", Vanguard: 11, FSI:  8, BlackRock: 7 },
        { month: "Oct 25", Vanguard: 13, FSI: 10, BlackRock: 7 },
        { month: "Nov 25", Vanguard: 12, FSI:  8, BlackRock: 6 },
        { month: "Dec 25", Vanguard: 11, FSI:  7, BlackRock: 5 },
        { month: "Jan 26", Vanguard: 12, FSI:  7, BlackRock: 5 },
        { month: "Feb 26", Vanguard: 14, FSI:  7, BlackRock: 5 },
        { month: "Mar 26", Vanguard: 16, FSI:  9, BlackRock: 5 },
        { month: "Apr 26", Vanguard: 15, FSI:  9, BlackRock: 6 },
      ],
      "STI": [
        { month: "Apr 25", Vanguard:  95, BetaShares:  46, BlackRock: 44, FSI: 49, UBS: 5 },
        { month: "May 25", Vanguard:  94, BetaShares:  49, BlackRock: 44, FSI: 50, UBS: 3 },
        { month: "Jun 25", Vanguard:  99, BetaShares:  49, BlackRock: 49, FSI: 48, UBS: 4 },
        { month: "Jul 25", Vanguard: 118, BetaShares:  54, BlackRock: 51, FSI: 49, UBS: 4 },
        { month: "Aug 25", Vanguard: 140, BetaShares:  69, BlackRock: 53, FSI: 69, UBS: 5 },
        { month: "Sep 25", Vanguard: 143, BetaShares:  72, BlackRock: 56, FSI: 68, UBS: 5 },
        { month: "Oct 25", Vanguard: 147, BetaShares:  73, BlackRock: 59, FSI: 69, UBS: 5 },
        { month: "Nov 25", Vanguard: 152, BetaShares:  75, BlackRock: 60, FSI: 76, UBS: 5 },
        { month: "Dec 25", Vanguard: 150, BetaShares:  89, BlackRock: 65, FSI: 79, UBS: 6 },
        { month: "Jan 26", Vanguard: 154, BetaShares:  95, BlackRock: 69, FSI: 78, UBS: 5 },
        { month: "Feb 26", Vanguard: 161, BetaShares:  93, BlackRock: 70, FSI: 76, UBS: 4 },
        { month: "Mar 26", Vanguard: 163, BetaShares: 100, BlackRock: 72, FSI: 70, UBS: 6 },
        { month: "Apr 26", Vanguard: 162, BetaShares:  90, BlackRock: 67, FSI: 60, UBS: 5 },
      ],
      "Small & Mid Caps": [
        { month: "Apr 25", Vanguard: 33, BetaShares: 17, Perpetual: 18, Fidelity: 10, Schroders:  5, Pendal:  1, Ausbil:  2, OCFunds: 0, FSI:  5 },
        { month: "May 25", Vanguard: 36, BetaShares: 18, Perpetual: 17, Fidelity: 11, Schroders:  4, Pendal:  2, Ausbil:  2, OCFunds: 0, FSI:  6 },
        { month: "Jun 25", Vanguard: 38, BetaShares: 18, Perpetual: 19, Fidelity: 13, Schroders:  4, Pendal:  1, Ausbil:  0, OCFunds: 0, FSI:  5 },
        { month: "Jul 25", Vanguard: 44, BetaShares: 22, Perpetual: 19, Fidelity: 13, Schroders:  6, Pendal:  4, Ausbil:  3, OCFunds: 1, FSI: 10 },
        { month: "Aug 25", Vanguard: 48, BetaShares: 28, Perpetual: 24, Fidelity: 16, Schroders: 10, Pendal:  2, Ausbil:  8, OCFunds: 1, FSI: 13 },
        { month: "Sep 25", Vanguard: 51, BetaShares: 32, Perpetual: 28, Fidelity: 19, Schroders: 12, Pendal:  2, Ausbil: 11, OCFunds: 2, FSI: 17 },
        { month: "Oct 25", Vanguard: 51, BetaShares: 32, Perpetual: 28, Fidelity: 20, Schroders: 12, Pendal:  2, Ausbil:  9, OCFunds: 2, FSI: 17 },
        { month: "Nov 25", Vanguard: 51, BetaShares: 38, Perpetual: 28, Fidelity: 21, Schroders: 12, Pendal:  3, Ausbil: 11, OCFunds: 2, FSI: 18 },
        { month: "Dec 25", Vanguard: 49, BetaShares: 40, Perpetual: 26, Fidelity: 18, Schroders: 11, Pendal:  4, Ausbil: 12, OCFunds: 2, FSI: 18 },
        { month: "Jan 26", Vanguard: 51, BetaShares: 37, Perpetual: 27, Fidelity: 18, Schroders: 11, Pendal:  4, Ausbil: 11, OCFunds: 2, FSI: 17 },
        { month: "Feb 26", Vanguard: 52, BetaShares: 36, Perpetual: 28, Fidelity: 17, Schroders: 11, Pendal:  5, Ausbil: 12, OCFunds: 2, FSI: 17 },
        { month: "Mar 26", Vanguard: 55, BetaShares: 38, Perpetual: 27, Fidelity: 20, Schroders: 11, Pendal:  4, Ausbil: 14, OCFunds: 2, FSI: 17 },
        { month: "Apr 26", Vanguard: 51, BetaShares: 36, Perpetual: 28, Fidelity: 19, Schroders: 11, Pendal:  4, Ausbil: 13, OCFunds: 2, FSI: 14 },
      ],
    },
    focusAreas: [
      "Gather and structure search engine data across established strategies like GLIS and GPS",
      "Defend and maintain share of voice on property and real estate searches",
    ],
    nextQuarter: [
      "Build data model on the ETF landscape with competitor positions",
      "Analyse and find improvements we can learn from competitors",
      "Understand how we rank for AI searches across all products",
    ],
  },

  highlights: [
    {
      id: "highlight-aeq-reporting",
      navLabel: "Reporting season",
      stage: "Highlight 1",
      title: "Australian Equities Growth — reporting season",
      subtitle: "Activities at every stage of the marketing funnel.",
      description: "We kicked off the year with bespoke events across five ANZ cities, broad media presence on Livewire Markets, LinkedIn and our Podcast. This was supported by paid LinkedIn and search engine campaigns and **74 investors** attending one of our **eight roundtable events** across Australia.",
      goals: [
        "Leverage reporting season to profile the investment team",
        "Use content to promote the LEVR and XX20 strategies",
        "Position the AEQ Growth team",
      ],
      marketingActivities: [
        "Reporting season roundtables in Sydney, Melbourne, Perth, Adelaide, Brisbane",
        "Livewire Markets' Buy Hold Sell with Dushko on the special reporting-season episode",
        "Reporting Season podcast featuring David Wilson and Christian Guerra on sector-by-sector reactions",
        "Always-on paid search and paid LinkedIn supporting AEQ adviser pages",
      ],
      targetAudience: ["Institutional", "Wholesale adviser", "Broker / LGT Wealth"],
      dataSources: ["Social listening (Brandwatch)", "Ptarmigan", "Transistor"],
      variant: "dark",
    },
    {
      id: "highlight-ex20-phase-2",
      navLabel: "XX20 Phase II",
      stage: "Highlight 2",
      title: "XX20 campaign — Phase II",
      subtitle: "EX-20 continues to build momentum in the market.",
      description: "Phase II builds on the Phase I launch with more ad placements, distribution-led roundtables across five ANZ cities, and an always-on search + social mix designed to drive advisers to the XX20 fund page.",
      goals: [
        "More placement and focused effort to drive market penetration",
        "Increase brand awareness of First Sentier as a leader in active ETFs",
      ],
      marketingActivities: [
        "Roundtables in Sydney, Melbourne, Perth, Adelaide, Brisbane",
        "Post-reporting season / EX-20 launch / LGT Crestone event in Melbourne",
        "Always-on search campaigns with a mix of branded and non-branded search terms",
        "Paid LinkedIn",
      ],
      keyResults: [
        "**518,000 impressions** across outdoor and digital channels",
        "**3,400 clicks** to the strategy page",
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
      navLabel: "ASX: FSCF",
      stage: "Highlight 3",
      title: "ASX: FSCF — Cash ETF Planning",
      subtitle: "Establishing position in the market leveraging our size, rating and experience.",
      description: "Planning and preparation for the Q2 launch of the **ASX: FSCF — Cash ETF** with a campaign designed to make our value proposition clear, on a platform of scale, experience, stability and liquidity.\n\nThe campaign is built using the BrandIntelligence report conducted by Agile Market Intelligence in December and focuses activity towards the top of the customer journey using our broadest channels.",
      goals: [
        "Establish positioning in the market answering the question: 'why cash in the portfolio?'",
        "Use the data and findings in the BrandIntelligence report to inform our targeting and ad placement",
        "Establish a visual identity and advertising slogans",
      ],
      marketingActivities: [],
      targetAudience: ["Wholesale adviser (ANZ)", "Ptarmigan ad audiences"],
      dataSources: [
        "Ptarmigan (paid ads)",
        "BrandIntelligence (Agile Market Intelligence)",
        "Web (GA4 landing pages — Q2 onwards)",
        "Always-on search",
        "Paid + organic social",
      ],
      variant: "dark",
    },
    {
      id: "highlight-taiwan-glis",
      navLabel: "Taiwan roundtable",
      stage: "Highlight 4",
      title: "Taiwan media roundtable",
      subtitle: "Building awareness of GLIS and strengthening visibility in the Taiwanese market.",
      description: "Edmund Leung participated in a media roundtable in Taipei (Cathay / GLIS, 31 Mar), aiming to strengthen GLIS awareness and visibility in the Taiwan market.",
      goals: [
        "Building the case for global listed infrastructure — and why now?",
        "Establish our positioning — highlighting our competitive edge and why FSI GLIS",
      ],
      marketingActivities: [
        "Media roundtable — Cathay / GLIS, Taipei (31 Mar)",
      ],
      targetAudience: ["Wholesale and institutional (Asia)", "Asian financial press"],
      dataSources: [
        "Cathay (event partner)",
        "Web (GA4 — GLIS pages)",
        "Paid + organic social",
      ],
      variant: "cream",
    },
    {
      id: "always-on-glis",
      navLabel: "GLIS update",
      stage: "Always on",
      title: "GLIS update",
      subtitle: "Quarterly look at the marketing performance of GLIS content globally.",
      description: "Content centred around Rebecca's interview with Brian Savoy, CFO at Duke Energy Corporation, and Brian Van Abel, CFO at Xcel Energy. Themes focused on delivering growth alongside affordability as data centres continue to reshape electricity demand.",
      goals: [
        "Recorded new content with Rebecca Sherlock — Xcel Energy and Duke Energy interviews",
        "Rolled out globally across websites and social",
      ],
      marketingActivities: [
        "2 x bespoke videos",
        "LinkedIn posts",
        "Insight articles",
      ],
      targetAudience: ["Wholesale and institutional (global)"],
      dataSources: [
        "Web (GA4 — GLIS pages)",
        "Paid + organic social",
        "Insight articles published on firstsentierinvestors.com",
      ],
      variant: "dark",
    },
  ] as HighlightSectionData[],

  website: {
    title: "Always on: Website",
    stage: "Consideration",
    subtitle: "More traffic, deeper engagement, with insights and strategy pages leading the way.",
    description: "More people came to firstsentierinvestors.com in Q1. **Page views grew +47%** vs Q4 2025 to **180.7k**, and **engagement actions on the site rose +45%**.\n\nThe two highlights were a new **Singapore performance landing page** (over **8k views** from a standing start) and growing momentum behind our AEQ team's adviser pages, especially the **EX-20 Share Fund (+32% on Q4)**.",
    kpis: [
      { value: "180.7k", label: "Page views",         comparison: "+47% vs Q4 2025" },
      { value: "+45%",   label: "Engagement actions", comparison: "vs Q4 2025" },
    ],
    gaMonthly: [
      { month: "Oct 25", users: 39878, sessions: 50871, pageViews: 50871, bounceRate: 0, avgDuration: 0 },
      { month: "Nov 25", users: 39411, sessions: 50389, pageViews: 50389, bounceRate: 0, avgDuration: 0 },
      { month: "Dec 25", users: 38731, sessions: 48063, pageViews: 48063, bounceRate: 0, avgDuration: 0 },
      { month: "Jan 26", users: 73514, sessions: 90923, pageViews: 90923, bounceRate: 0, avgDuration: 0 },
      { month: "Feb 26", users: 59835, sessions: 72100, pageViews: 72100, bounceRate: 0, avgDuration: 0 },
      { month: "Mar 26", users: 54171, sessions: 67325, pageViews: 67325, bounceRate: 0, avgDuration: 0 },
    ],
    // Top FSI house pages — insights / strategy / home / brand pages.
    // Performance / price-and-performance pages excluded so this view tracks
    // editorial and product-discovery traffic rather than self-service price
    // checks.
    // `change` = friendly row label. `vsQ4` = page-level Q1 vs Q4 delta,
    // computed from Raw Data/Website/Compare_date.csv (GA4 compare-date
    // export). "—" = no Q4 baseline (page new in Q1).
    topPages: [
      { page: "/ (home)",                                                                                              views: 38464, change: "Home (FSI.com)",          vsQ4: "-10% vs Q4" },
      { page: "/au/en/adviser/our-funds/australian-equities/australian-equities-growth.html",                          views:  8026, change: "AEQ Growth fund hub",     vsQ4: "-14% vs Q4" },
      { page: "/au/en/adviser/our-funds/australian-equities/australian-equities-growth/ex-20-australian-share-fund.html", views:  6457, change: "EX-20 Share Fund",     vsQ4: "+32% vs Q4" },
      { page: "/au/en/adviser/our-funds/australian-equities/australian-equities-growth/geared-australian-share-fund.html", views: 5993, change: "Geared AU Share Fund", vsQ4: "-57% vs Q4" },
      { page: "/hk/en/retail/home.html",                                                                               views:  5213, change: "HK retail home",         vsQ4: "-5% vs Q4"  },
      { page: "/sg/en/retail/home.html",                                                                               views:  3705, change: "SG retail home",         vsQ4: "new in Q1"  },
      { page: "/au/en/adviser/who-we-are.html",                                                                        views:  3071, change: "Who we are (AU)",        vsQ4: "+7% vs Q4"  },
      { page: "/au/en/individual/home.html",                                                                           views:  2688, change: "AU individual home",     vsQ4: "-11% vs Q4" },
      { page: "/au/en/adviser/insights/the-curious-podcast.html",                                                      views:  1923, change: "Insights — Curious Podcast", vsQ4: "-33% vs Q4" },
      { page: "/au/en/adviser/our-funds/infrastructure-real-estate/global-listed-infrastructure.html",                 views:  1265, change: "GLIS fund hub",          vsQ4: "+15% vs Q4" },
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
      "Prepare the ASX Cash page and optimise for search engines",
      "Refresh the homepage to funnel traffic to campaign landing pages",
    ],
    focusQ1: [
      "Continue optimising key campaign pages for better search engine rankings",
    ],
  },

  linkedin: {
    title: "Always on: LinkedIn",
    stage: "Consideration",
    subtitle: "Paid scaled hard; organic carried a steady cadence.",
    description: "Sponsored reach on LinkedIn more than doubled in Q1. **Sponsored impressions hit 486.5k**, **up 107% versus Q4 2025**. Organic impressions softened to 35.9k across the quarter (down 19% vs Q4), with an average engagement rate of 1.2%.\n\nThe strongest organic moments were Alison Thai's International Women's Day reflection with **4.7k impressions**, as well as Rebecca Sherlock's Xcel Energy CFO interview on AI and data centres.\n\nEdmund Leung's Global Listed Infrastructure shareholder-income piece reached **2.2k views**, and the Reporting Season podcast post with David Wilson and Christian Guerra carried **1.5k views**.",
    goals: ["Scale paid reach in priority markets while keeping organic quality high"],
    activities: ["Martin Lau luncheon content", "IMK + FONDS Kongress (DE)", "AI thematic strategy posts", "10 organic posts / quarter"],
    kpis: [
      { value: "486.5k", label: "Sponsored impressions", comparison: "+107% vs Q4 (235.1k)" },
      { value: "35.9k",  label: "Impressions",            comparison: "-19% vs Q4 (44.6k)" },
      { value: "1.2%",   label: "Avg engagement rate",    comparison: "Q1 2026" },
    ],
    focusQ4: [
      "Execute the two sponsored campaigns and analyse the data",
      "Grow the channel and leverage for campaign support",
    ],
    focusQ1: [
      "Continue scaling sponsored reach while publishing 3-4 organic posts per month",
      "German-language coverage through IMK and FONDS Kongress",
    ],
  },

  podcast: {
    title: "Podcasts",
    stage: "Awareness",
    subtitle: "Reduced output as we prepare to shift to a modern format.",
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
      { name: "Cathay / GLIS media roundtable", format: "Roundtable", audience: "Wholesale & Institutional", region: "ASIA", quarter: "Q1", status: "committed" as const, category: "Roundtable", city: "Taipei", lat: 25.0330, lng: 121.5654, startDate: "2026-03-31", brand: "FSI", host: "FSI", assetClass: "GLIS", marketingLead: "Judi Chung", distributionLead: "Nelson Ng", images: ["highlights/taiwan/taiwan-1.jpg", "highlights/taiwan/taiwan-2.jpg"] },

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
