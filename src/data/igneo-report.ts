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
  brand: "FSSA",
  brandFull: "FSSA Investment Managers",
  quarter: "Q1 2026",
  title: "Global marketing impact report",
  subtitle: "A quarterly review of global marketing activities and performance.",
  tagline: "Long-term. Responsible. Asia-focused.",
  dataPeriod: "1st Jan – 31st March 2026",
  dataSources: ["Salesforce", "Google Analytics", "LinkedIn", "Apple Music", "Spotify", "Brightedge"],

  globalFocus: [
    {
      number: "01",
      title: "Client Communication & Performance Transparency",
      description: "Maintaining clear, regular communication with clients on investment performance to reinforce confidence. Delivered through client letters (GEM & China), Asia and GEM monthly fund updates, and the \"Against the current\" insight series.",
    },
    {
      number: "02",
      title: "Retention-focused activities",
      description: "Proactive engagement of at-risk clients through targeted outreach and relationship management to support retention. Headlined by the Asia Pacific Leaders webinar on 3rd March with Morningstar and Martin Lau.",
    },
    {
      number: "03",
      title: "Building Relationships Through Global Events & Podcasts",
      description: "Ongoing client and prospect engagement through a series of global events and luncheons, including HK client luncheons, FONDS Professionell Kongress, Institutional Money Kongress (IMK), Stockwaves, and the LCP Investment Uncut podcast featuring Martin Lau and Ziqi Deng.",
    },
  ],

  performanceResults: {
    awareness: [
      { channel: "Search engine marketing", metrics: ["12.5k Paid views", "N/A CTR"], comparison: "+61% vs Q4", status: "good" as const },
      { channel: "Search engine optimisation", metrics: ["253 Keywords ranked", "5 countries tracked"], comparison: "+93% vs Mar 25", status: "good" as const },
      { channel: "Display ads", metrics: ["N/A"], comparison: "No Q1 activity", status: "inactive" as const },
      { channel: "Podcast", metrics: ["N/A Streams"], comparison: "1 LCP Investment Uncut ep", status: "inactive" as const },
      { channel: "LinkedIn Paid", metrics: ["N/A"], comparison: "No sponsored in Q1", status: "inactive" as const },
    ],
    consideration: [
      { channel: "LinkedIn Organic", metrics: ["13.7% Avg CTR", "14.2k Impressions"], comparison: "+118% impressions vs Q4", status: "good" as const },
      { channel: "Website", metrics: ["37.0k Active users", "48.1k Views"], comparison: "+42% users vs Q4", status: "good" as const },
    ],
    conversion: [
      { channel: "Webinars", metrics: ["68 Attendees", "52% Live rate"], comparison: "APAC Leaders — 4 live opps", status: "good" as const },
      { channel: "Events", metrics: ["8 Q1 events", "3 with speaking slots"], comparison: "FONDS · IMK · Stockwaves", status: "good" as const },
      { channel: "Email", metrics: ["N/A CTOR", "N/A Open rate"], comparison: "Awaiting Q1 export", status: "inactive" as const },
    ],
    serviceLoyalty: [
      { channel: "Data capture", metrics: ["N/A"], comparison: "No Q1 capture data", status: "inactive" as const },
    ],
  },

  searchVisibility: {
    description: "Global keyword coverage for fssaim.com has grown from 131 to 253 ranked keywords over the last 12 months (+93%), with the biggest gains in Australia and the UK. Germany remains lightly indexed, highlighting a priority to build on APAC brand and non-brand terms and capture more consultant and allocator queries.",
    goal: "Higher ranking for broader asset class terms globally, with a focus on \"quality investing\", \"bottom-up EM\" and \"EM Governance\".",
    marketingActivities: [
      "Insight series: \"Against the current\"",
      "Global webinar (Asia Pacific Leaders)",
      "LCP Investment Uncut podcast",
    ],
    kpis: [
      { value: "253", label: "Ranking keywords globally", comparison: "+93% vs Mar 25" },
      { value: "5", label: "Countries tracked", comparison: "AU, UK, US, DE, SG" },
    ],
    chartDataByCountry: {
      Global: [
        { month: "Mar 25", FSSA: 131, "Matthews Asia": 561, "Ninety One": 1627, Jupiter: 2297, Artemis: 2056, Quilter: 1069, GAM: 612, Liontrust: 2763, "M&G": 6039, "Janus Henderson": 8908, Lazard: 4503, Aberdeen: 103, Schroders: 10586, Invesco: 11658 },
        { month: "Apr 25", FSSA: 149, "Matthews Asia": 590, "Ninety One": 1581, Jupiter: 2134, Artemis: 2092, Quilter: 1080, GAM: 658, Liontrust: 2725, "M&G": 6269, "Janus Henderson": 8876, Lazard: 4259, Aberdeen: 6401, Schroders: 11018, Invesco: 11517 },
        { month: "May 25", FSSA: 142, "Matthews Asia": 576, "Ninety One": 1567, Jupiter: 2117, Artemis: 2168, Quilter: 1126, GAM: 824, Liontrust: 2750, "M&G": 6401, "Janus Henderson": 8758, Lazard: 4228, Aberdeen: 8313, Schroders: 9319, Invesco: 11318 },
        { month: "Jun 25", FSSA: 140, "Matthews Asia": 565, "Ninety One": 1679, Jupiter: 2142, Artemis: 2199, Quilter: 1192, GAM: 754, Liontrust: 2756, "M&G": 6631, "Janus Henderson": 8879, Lazard: 4086, Aberdeen: 9559, Schroders: 9898, Invesco: 11378 },
        { month: "Jul 25", FSSA: 149, "Matthews Asia": 552, "Ninety One": 1689, Jupiter: 2196, Artemis: 2263, Quilter: 1222, GAM: 891, Liontrust: 2787, "M&G": 6308, "Janus Henderson": 8978, Lazard: 3676, Aberdeen: 8256, Schroders: 9334, Invesco: 12071 },
        { month: "Aug 25", FSSA: 175, "Matthews Asia": 549, "Ninety One": 1651, Jupiter: 2356, Artemis: 2446, Quilter: 1241, GAM: 1039, Liontrust: 2337, "M&G": 6269, "Janus Henderson": 9098, Lazard: 3161, Aberdeen: 7669, Schroders: 10107, Invesco: 12487 },
        { month: "Sep 25", FSSA: 183, "Matthews Asia": 555, "Ninety One": 1695, Jupiter: 2427, Artemis: 2548, Quilter: 1292, GAM: 1129, Liontrust: 2209, "M&G": 6476, "Janus Henderson": 9310, Lazard: 3212, Aberdeen: 7946, Schroders: 10627, Invesco: 12915 },
        { month: "Oct 25", FSSA: 192, "Matthews Asia": 575, "Ninety One": 1645, Jupiter: 2454, Artemis: 2617, Quilter: 1356, GAM: 1117, Liontrust: 1937, "M&G": 6639, "Janus Henderson": 9354, Lazard: 3242, Aberdeen: 7989, Schroders: 11062, Invesco: 13273 },
        { month: "Nov 25", FSSA: 202, "Matthews Asia": 591, "Ninety One": 1592, Jupiter: 2462, Artemis: 2534, Quilter: 1393, GAM: 1085, Liontrust: 1660, "M&G": 6889, "Janus Henderson": 9436, Lazard: 3222, Aberdeen: 7452, Schroders: 12364, Invesco: 13897 },
        { month: "Dec 25", FSSA: 238, "Matthews Asia": 584, "Ninety One": 1572, Jupiter: 2428, Artemis: 2238, Quilter: 1463, GAM: 1090, Liontrust: 1512, "M&G": 7092, "Janus Henderson": 9504, Lazard: 3325, Aberdeen: 7304, Schroders: 13323, Invesco: 14737 },
        { month: "Jan 26", FSSA: 246, "Matthews Asia": 588, "Ninety One": 1595, Jupiter: 2461, Artemis: 2201, Quilter: 1535, GAM: 1150, Liontrust: 1498, "M&G": 7549, "Janus Henderson": 9708, Lazard: 3374, Aberdeen: 7780, Schroders: 14053, Invesco: 15622 },
        { month: "Feb 26", FSSA: 251, "Matthews Asia": 555, "Ninety One": 1597, Jupiter: 2449, Artemis: 2063, Quilter: 1562, GAM: 1321, Liontrust: 1433, "M&G": 7921, "Janus Henderson": 9774, Lazard: 3152, Aberdeen: 8595, Schroders: 15417, Invesco: 17332 },
        { month: "Mar 26", FSSA: 253, "Matthews Asia": 551, "Ninety One": 1603, Jupiter: 2427, Artemis: 2006, Quilter: 1537, GAM: 1370, Liontrust: 1377, "M&G": 7731, "Janus Henderson": 9670, Lazard: 3025, Aberdeen: 8755, Schroders: 15359, Invesco: 17343 },
      ],
      AU: [
        { month: "Mar 25", FSSA: 6, "Matthews Asia": 18, "Ninety One": 91, Jupiter: 10, Artemis: 13, Quilter: 22, GAM: 15, Liontrust: 10, "M&G": 158, "Janus Henderson": 202, Lazard: 384, Aberdeen: 0, Schroders: 850, Invesco: 276 },
        { month: "Apr 25", FSSA: 6, "Matthews Asia": 16, "Ninety One": 96, Jupiter: 10, Artemis: 10, Quilter: 21, GAM: 16, Liontrust: 10, "M&G": 160, "Janus Henderson": 209, Lazard: 375, Aberdeen: 152, Schroders: 872, Invesco: 280 },
        { month: "May 25", FSSA: 6, "Matthews Asia": 12, "Ninety One": 89, Jupiter: 9, Artemis: 6, Quilter: 23, GAM: 25, Liontrust: 11, "M&G": 167, "Janus Henderson": 210, Lazard: 374, Aberdeen: 214, Schroders: 753, Invesco: 293 },
        { month: "Jun 25", FSSA: 7, "Matthews Asia": 14, "Ninety One": 96, Jupiter: 9, Artemis: 11, Quilter: 26, GAM: 18, Liontrust: 12, "M&G": 164, "Janus Henderson": 209, Lazard: 362, Aberdeen: 251, Schroders: 788, Invesco: 313 },
        { month: "Jul 25", FSSA: 7, "Matthews Asia": 13, "Ninety One": 100, Jupiter: 9, Artemis: 7, Quilter: 29, GAM: 23, Liontrust: 11, "M&G": 152, "Janus Henderson": 214, Lazard: 310, Aberdeen: 209, Schroders: 775, Invesco: 323 },
        { month: "Aug 25", FSSA: 7, "Matthews Asia": 19, "Ninety One": 95, Jupiter: 9, Artemis: 7, Quilter: 25, GAM: 35, Liontrust: 12, "M&G": 149, "Janus Henderson": 224, Lazard: 267, Aberdeen: 204, Schroders: 856, Invesco: 333 },
        { month: "Sep 25", FSSA: 7, "Matthews Asia": 19, "Ninety One": 96, Jupiter: 9, Artemis: 7, Quilter: 26, GAM: 37, Liontrust: 12, "M&G": 150, "Janus Henderson": 231, Lazard: 275, Aberdeen: 214, Schroders: 889, Invesco: 340 },
        { month: "Oct 25", FSSA: 8, "Matthews Asia": 19, "Ninety One": 90, Jupiter: 8, Artemis: 7, Quilter: 25, GAM: 37, Liontrust: 12, "M&G": 153, "Janus Henderson": 228, Lazard: 280, Aberdeen: 212, Schroders: 904, Invesco: 347 },
        { month: "Nov 25", FSSA: 11, "Matthews Asia": 18, "Ninety One": 90, Jupiter: 10, Artemis: 7, Quilter: 28, GAM: 36, Liontrust: 11, "M&G": 149, "Janus Henderson": 226, Lazard: 272, Aberdeen: 200, Schroders: 979, Invesco: 355 },
        { month: "Dec 25", FSSA: 21, "Matthews Asia": 17, "Ninety One": 89, Jupiter: 10, Artemis: 6, Quilter: 29, GAM: 37, Liontrust: 11, "M&G": 147, "Janus Henderson": 225, Lazard: 279, Aberdeen: 186, Schroders: 1019, Invesco: 355 },
        { month: "Jan 26", FSSA: 20, "Matthews Asia": 17, "Ninety One": 91, Jupiter: 9, Artemis: 6, Quilter: 30, GAM: 38, Liontrust: 11, "M&G": 151, "Janus Henderson": 235, Lazard: 283, Aberdeen: 194, Schroders: 1099, Invesco: 384 },
        { month: "Feb 26", FSSA: 20, "Matthews Asia": 17, "Ninety One": 90, Jupiter: 9, Artemis: 7, Quilter: 31, GAM: 54, Liontrust: 11, "M&G": 149, "Janus Henderson": 234, Lazard: 277, Aberdeen: 208, Schroders: 1151, Invesco: 380 },
        { month: "Mar 26", FSSA: 23, "Matthews Asia": 17, "Ninety One": 87, Jupiter: 9, Artemis: 7, Quilter: 27, GAM: 64, Liontrust: 10, "M&G": 151, "Janus Henderson": 235, Lazard: 262, Aberdeen: 201, Schroders: 1174, Invesco: 399 },
      ],
      UK: [
        { month: "Mar 25", FSSA: 31, "Matthews Asia": 203, "Ninety One": 496, Jupiter: 2141, Artemis: 1907, Quilter: 774, GAM: 320, Liontrust: 2639, "M&G": 4062, "Janus Henderson": 6109, Lazard: 1189, Aberdeen: 102, Schroders: 4227, Invesco: 2376 },
        { month: "Apr 25", FSSA: 40, "Matthews Asia": 234, "Ninety One": 514, Jupiter: 1989, Artemis: 1947, Quilter: 795, GAM: 358, Liontrust: 2611, "M&G": 4223, "Janus Henderson": 6179, Lazard: 1156, Aberdeen: 4415, Schroders: 4582, Invesco: 2365 },
        { month: "May 25", FSSA: 30, "Matthews Asia": 204, "Ninety One": 522, Jupiter: 1977, Artemis: 2041, Quilter: 840, GAM: 460, Liontrust: 2628, "M&G": 4314, "Janus Henderson": 6231, Lazard: 1140, Aberdeen: 5631, Schroders: 3770, Invesco: 2408 },
        { month: "Jun 25", FSSA: 31, "Matthews Asia": 212, "Ninety One": 585, Jupiter: 2003, Artemis: 2072, Quilter: 889, GAM: 433, Liontrust: 2634, "M&G": 4480, "Janus Henderson": 6341, Lazard: 1061, Aberdeen: 6415, Schroders: 4126, Invesco: 2466 },
        { month: "Jul 25", FSSA: 33, "Matthews Asia": 205, "Ninety One": 602, Jupiter: 2057, Artemis: 2153, Quilter: 914, GAM: 514, Liontrust: 2666, "M&G": 4281, "Janus Henderson": 6448, Lazard: 905, Aberdeen: 5446, Schroders: 3951, Invesco: 2691 },
        { month: "Aug 25", FSSA: 52, "Matthews Asia": 218, "Ninety One": 576, Jupiter: 2214, Artemis: 2328, Quilter: 945, GAM: 606, Liontrust: 2224, "M&G": 4294, "Janus Henderson": 6520, Lazard: 749, Aberdeen: 5075, Schroders: 4370, Invesco: 2829 },
        { month: "Sep 25", FSSA: 54, "Matthews Asia": 221, "Ninety One": 597, Jupiter: 2287, Artemis: 2430, Quilter: 993, GAM: 639, Liontrust: 2098, "M&G": 4462, "Janus Henderson": 6672, Lazard: 768, Aberdeen: 5280, Schroders: 4608, Invesco: 2943 },
        { month: "Oct 25", FSSA: 56, "Matthews Asia": 222, "Ninety One": 585, Jupiter: 2319, Artemis: 2502, Quilter: 1059, GAM: 614, Liontrust: 1830, "M&G": 4584, "Janus Henderson": 6707, Lazard: 777, Aberdeen: 5378, Schroders: 4773, Invesco: 2980 },
        { month: "Nov 25", FSSA: 58, "Matthews Asia": 228, "Ninety One": 565, Jupiter: 2321, Artemis: 2421, Quilter: 1095, GAM: 597, Liontrust: 1564, "M&G": 4776, "Janus Henderson": 6806, Lazard: 780, Aberdeen: 5249, Schroders: 5245, Invesco: 3010 },
        { month: "Dec 25", FSSA: 73, "Matthews Asia": 212, "Ninety One": 559, Jupiter: 2284, Artemis: 2143, Quilter: 1158, GAM: 565, Liontrust: 1425, "M&G": 4950, "Janus Henderson": 6879, Lazard: 817, Aberdeen: 5204, Schroders: 5642, Invesco: 3187 },
        { month: "Jan 26", FSSA: 74, "Matthews Asia": 216, "Ninety One": 565, Jupiter: 2318, Artemis: 2111, Quilter: 1224, GAM: 591, Liontrust: 1411, "M&G": 5341, "Janus Henderson": 6970, Lazard: 828, Aberdeen: 5572, Schroders: 5985, Invesco: 3308 },
        { month: "Feb 26", FSSA: 87, "Matthews Asia": 208, "Ninety One": 594, Jupiter: 2317, Artemis: 2003, Quilter: 1235, GAM: 621, Liontrust: 1375, "M&G": 5525, "Janus Henderson": 7019, Lazard: 835, Aberdeen: 6093, Schroders: 6190, Invesco: 3419 },
        { month: "Mar 26", FSSA: 90, "Matthews Asia": 209, "Ninety One": 602, Jupiter: 2292, Artemis: 1945, Quilter: 1221, GAM: 613, Liontrust: 1320, "M&G": 5387, "Janus Henderson": 6897, Lazard: 818, Aberdeen: 6120, Schroders: 6171, Invesco: 3478 },
      ],
      US: [
        { month: "Mar 25", FSSA: 56, "Matthews Asia": 265, "Ninety One": 939, Jupiter: 88, Artemis: 118, Quilter: 254, GAM: 202, Liontrust: 89, "M&G": 1480, "Janus Henderson": 2322, Lazard: 2452, Aberdeen: 1, Schroders: 4513, Invesco: 8269 },
        { month: "Apr 25", FSSA: 62, "Matthews Asia": 264, "Ninety One": 871, Jupiter: 79, Artemis: 117, Quilter: 246, GAM: 210, Liontrust: 79, "M&G": 1531, "Janus Henderson": 2217, Lazard: 2260, Aberdeen: 1700, Schroders: 4556, Invesco: 8147 },
        { month: "May 25", FSSA: 66, "Matthews Asia": 285, "Ninety One": 861, Jupiter: 75, Artemis: 104, Quilter: 244, GAM: 258, Liontrust: 86, "M&G": 1564, "Janus Henderson": 2043, Lazard: 2250, Aberdeen: 2284, Schroders: 3848, Invesco: 7878 },
        { month: "Jun 25", FSSA: 66, "Matthews Asia": 265, "Ninety One": 894, Jupiter: 74, Artemis: 101, Quilter: 257, GAM: 223, Liontrust: 87, "M&G": 1622, "Janus Henderson": 2055, Lazard: 2199, Aberdeen: 2676, Schroders: 4023, Invesco: 7867 },
        { month: "Jul 25", FSSA: 70, "Matthews Asia": 263, "Ninety One": 877, Jupiter: 74, Artemis: 88, Quilter: 258, GAM: 275, Liontrust: 86, "M&G": 1520, "Janus Henderson": 2049, Lazard: 2002, Aberdeen: 2408, Schroders: 3659, Invesco: 8310 },
        { month: "Aug 25", FSSA: 76, "Matthews Asia": 242, "Ninety One": 873, Jupiter: 78, Artemis: 96, Quilter: 250, GAM: 317, Liontrust: 78, "M&G": 1461, "Janus Henderson": 2083, Lazard: 1707, Aberdeen: 2185, Schroders: 3883, Invesco: 8578 },
        { month: "Sep 25", FSSA: 79, "Matthews Asia": 244, "Ninety One": 894, Jupiter: 76, Artemis: 96, Quilter: 249, GAM: 367, Liontrust: 76, "M&G": 1489, "Janus Henderson": 2133, Lazard: 1720, Aberdeen: 2227, Schroders: 4086, Invesco: 8870 },
        { month: "Oct 25", FSSA: 82, "Matthews Asia": 260, "Ninety One": 860, Jupiter: 74, Artemis: 93, Quilter: 249, GAM: 380, Liontrust: 72, "M&G": 1521, "Janus Henderson": 2151, Lazard: 1739, Aberdeen: 2170, Schroders: 4329, Invesco: 9177 },
        { month: "Nov 25", FSSA: 89, "Matthews Asia": 272, "Ninety One": 833, Jupiter: 78, Artemis: 91, Quilter: 248, GAM: 374, Liontrust: 62, "M&G": 1578, "Janus Henderson": 2139, Lazard: 1722, Aberdeen: 1781, Schroders: 5050, Invesco: 9761 },
        { month: "Dec 25", FSSA: 97, "Matthews Asia": 278, "Ninety One": 816, Jupiter: 80, Artemis: 74, Quilter: 253, GAM: 406, Liontrust: 55, "M&G": 1614, "Janus Henderson": 2130, Lazard: 1779, Aberdeen: 1707, Schroders: 5549, Invesco: 10412 },
        { month: "Jan 26", FSSA: 102, "Matthews Asia": 278, "Ninety One": 827, Jupiter: 81, Artemis: 71, Quilter: 259, GAM: 437, Liontrust: 55, "M&G": 1667, "Janus Henderson": 2233, Lazard: 1815, Aberdeen: 1804, Schroders: 5811, Invesco: 11118 },
        { month: "Feb 26", FSSA: 96, "Matthews Asia": 258, "Ninety One": 796, Jupiter: 74, Artemis: 40, Quilter: 272, GAM: 557, Liontrust: 27, "M&G": 1841, "Janus Henderson": 2256, Lazard: 1593, Aberdeen: 2023, Schroders: 6797, Invesco: 12709 },
        { month: "Mar 26", FSSA: 90, "Matthews Asia": 252, "Ninety One": 799, Jupiter: 78, Artemis: 40, Quilter: 265, GAM: 594, Liontrust: 27, "M&G": 1789, "Janus Henderson": 2274, Lazard: 1513, Aberdeen: 2161, Schroders: 6726, Invesco: 12648 },
      ],
      DE: [
        { month: "Mar 25", FSSA: 4, "Matthews Asia": 5, "Ninety One": 26, Jupiter: 28, Artemis: 9, Quilter: 5, GAM: 45, Liontrust: 5, "M&G": 115, "Janus Henderson": 63, Lazard: 148, Aberdeen: 0, Schroders: 269, Invesco: 323 },
        { month: "Apr 25", FSSA: 4, "Matthews Asia": 5, "Ninety One": 27, Jupiter: 27, Artemis: 9, Quilter: 5, GAM: 45, Liontrust: 5, "M&G": 125, "Janus Henderson": 58, Lazard: 149, Aberdeen: 99, Schroders: 279, Invesco: 312 },
        { month: "May 25", FSSA: 4, "Matthews Asia": 5, "Ninety One": 22, Jupiter: 27, Artemis: 9, Quilter: 5, GAM: 50, Liontrust: 5, "M&G": 125, "Janus Henderson": 63, Lazard: 144, Aberdeen: 142, Schroders: 244, Invesco: 320 },
        { month: "Jun 25", FSSA: 4, "Matthews Asia": 5, "Ninety One": 24, Jupiter: 27, Artemis: 8, Quilter: 6, GAM: 49, Liontrust: 5, "M&G": 135, "Janus Henderson": 62, Lazard: 145, Aberdeen: 158, Schroders: 253, Invesco: 318 },
        { month: "Jul 25", FSSA: 4, "Matthews Asia": 4, "Ninety One": 30, Jupiter: 26, Artemis: 7, Quilter: 7, GAM: 49, Liontrust: 6, "M&G": 123, "Janus Henderson": 60, Lazard: 141, Aberdeen: 141, Schroders: 246, Invesco: 328 },
        { month: "Aug 25", FSSA: 3, "Matthews Asia": 4, "Ninety One": 29, Jupiter: 27, Artemis: 7, Quilter: 6, GAM: 49, Liontrust: 5, "M&G": 118, "Janus Henderson": 62, Lazard: 123, Aberdeen: 138, Schroders: 263, Invesco: 317 },
        { month: "Sep 25", FSSA: 3, "Matthews Asia": 4, "Ninety One": 29, Jupiter: 27, Artemis: 7, Quilter: 6, GAM: 51, Liontrust: 5, "M&G": 118, "Janus Henderson": 62, Lazard: 131, Aberdeen: 149, Schroders: 279, Invesco: 321 },
        { month: "Oct 25", FSSA: 4, "Matthews Asia": 4, "Ninety One": 29, Jupiter: 26, Artemis: 7, Quilter: 6, GAM: 52, Liontrust: 5, "M&G": 117, "Janus Henderson": 62, Lazard: 132, Aberdeen: 149, Schroders: 284, Invesco: 325 },
        { month: "Nov 25", FSSA: 2, "Matthews Asia": 4, "Ninety One": 25, Jupiter: 25, Artemis: 7, Quilter: 6, GAM: 48, Liontrust: 5, "M&G": 116, "Janus Henderson": 64, Lazard: 136, Aberdeen: 137, Schroders: 306, Invesco: 323 },
        { month: "Dec 25", FSSA: 5, "Matthews Asia": 5, "Ninety One": 25, Jupiter: 25, Artemis: 7, Quilter: 6, GAM: 50, Liontrust: 5, "M&G": 116, "Janus Henderson": 67, Lazard: 138, Aberdeen: 132, Schroders: 306, Invesco: 333 },
        { month: "Jan 26", FSSA: 5, "Matthews Asia": 5, "Ninety One": 28, Jupiter: 25, Artemis: 6, Quilter: 5, GAM: 52, Liontrust: 5, "M&G": 124, "Janus Henderson": 66, Lazard: 138, Aberdeen: 133, Schroders: 343, Invesco: 354 },
        { month: "Feb 26", FSSA: 5, "Matthews Asia": 5, "Ninety One": 28, Jupiter: 24, Artemis: 6, Quilter: 7, GAM: 53, Liontrust: 5, "M&G": 126, "Janus Henderson": 67, Lazard: 136, Aberdeen: 152, Schroders: 359, Invesco: 352 },
        { month: "Mar 26", FSSA: 5, "Matthews Asia": 5, "Ninety One": 26, Jupiter: 25, Artemis: 6, Quilter: 6, GAM: 52, Liontrust: 5, "M&G": 121, "Janus Henderson": 68, Lazard: 129, Aberdeen: 156, Schroders: 363, Invesco: 348 },
      ],
      SG: [
        { month: "Mar 25", FSSA: 34, "Matthews Asia": 70, "Ninety One": 75, Jupiter: 30, Artemis: 9, Quilter: 14, GAM: 30, Liontrust: 20, "M&G": 224, "Janus Henderson": 212, Lazard: 330, Aberdeen: 0, Schroders: 727, Invesco: 414 },
        { month: "Apr 25", FSSA: 37, "Matthews Asia": 71, "Ninety One": 73, Jupiter: 29, Artemis: 9, Quilter: 13, GAM: 29, Liontrust: 20, "M&G": 230, "Janus Henderson": 213, Lazard: 319, Aberdeen: 35, Schroders: 729, Invesco: 413 },
        { month: "May 25", FSSA: 36, "Matthews Asia": 70, "Ninety One": 73, Jupiter: 29, Artemis: 8, Quilter: 14, GAM: 31, Liontrust: 20, "M&G": 231, "Janus Henderson": 211, Lazard: 320, Aberdeen: 42, Schroders: 704, Invesco: 419 },
        { month: "Jun 25", FSSA: 32, "Matthews Asia": 69, "Ninety One": 80, Jupiter: 29, Artemis: 7, Quilter: 14, GAM: 31, Liontrust: 18, "M&G": 230, "Janus Henderson": 212, Lazard: 319, Aberdeen: 59, Schroders: 708, Invesco: 414 },
        { month: "Jul 25", FSSA: 35, "Matthews Asia": 67, "Ninety One": 80, Jupiter: 30, Artemis: 8, Quilter: 14, GAM: 30, Liontrust: 18, "M&G": 232, "Janus Henderson": 207, Lazard: 318, Aberdeen: 52, Schroders: 703, Invesco: 419 },
        { month: "Aug 25", FSSA: 37, "Matthews Asia": 66, "Ninety One": 78, Jupiter: 28, Artemis: 8, Quilter: 15, GAM: 32, Liontrust: 18, "M&G": 247, "Janus Henderson": 209, Lazard: 315, Aberdeen: 67, Schroders: 735, Invesco: 430 },
        { month: "Sep 25", FSSA: 40, "Matthews Asia": 67, "Ninety One": 79, Jupiter: 28, Artemis: 8, Quilter: 18, GAM: 35, Liontrust: 18, "M&G": 257, "Janus Henderson": 212, Lazard: 318, Aberdeen: 76, Schroders: 765, Invesco: 441 },
        { month: "Oct 25", FSSA: 42, "Matthews Asia": 70, "Ninety One": 81, Jupiter: 27, Artemis: 8, Quilter: 17, GAM: 34, Liontrust: 18, "M&G": 264, "Janus Henderson": 206, Lazard: 314, Aberdeen: 80, Schroders: 772, Invesco: 444 },
        { month: "Nov 25", FSSA: 42, "Matthews Asia": 69, "Ninety One": 79, Jupiter: 28, Artemis: 8, Quilter: 16, GAM: 30, Liontrust: 18, "M&G": 270, "Janus Henderson": 201, Lazard: 312, Aberdeen: 85, Schroders: 784, Invesco: 448 },
        { month: "Dec 25", FSSA: 42, "Matthews Asia": 72, "Ninety One": 83, Jupiter: 29, Artemis: 8, Quilter: 17, GAM: 32, Liontrust: 16, "M&G": 265, "Janus Henderson": 203, Lazard: 312, Aberdeen: 75, Schroders: 807, Invesco: 450 },
        { month: "Jan 26", FSSA: 45, "Matthews Asia": 72, "Ninety One": 84, Jupiter: 28, Artemis: 7, Quilter: 17, GAM: 32, Liontrust: 16, "M&G": 266, "Janus Henderson": 204, Lazard: 310, Aberdeen: 77, Schroders: 815, Invesco: 458 },
        { month: "Feb 26", FSSA: 43, "Matthews Asia": 67, "Ninety One": 89, Jupiter: 25, Artemis: 7, Quilter: 17, GAM: 36, Liontrust: 15, "M&G": 280, "Janus Henderson": 198, Lazard: 311, Aberdeen: 119, Schroders: 920, Invesco: 472 },
        { month: "Mar 26", FSSA: 45, "Matthews Asia": 68, "Ninety One": 89, Jupiter: 23, Artemis: 8, Quilter: 18, GAM: 47, Liontrust: 15, "M&G": 283, "Janus Henderson": 196, Lazard: 303, Aberdeen: 117, Schroders: 925, Invesco: 470 },
      ],
    },
    focusAreas: [
      "Build share of voice in APAC brand and non-brand terms",
      "Start tracking terms around \"quality investing\", \"bottom-up EM\" and \"EM Governance\"",
      "Support global insight distribution via owned channels",
    ],
    nextQuarter: [
      "Expand competitor benchmarking across EM-focused peers",
      "Broaden keyword coverage into consultant & allocator terms",
    ],
  },

  campaigns: {
    northAmerica: {
      title: "Client luncheon with Martin & Morningstar",
      stage: "Highlight 1",
      subtitle: "Achieving 100% attendance rate, the luncheon strengthened client confidence in China and Asia equities, with positive feedback from attendees",
      description: "The luncheon brought together 30 clients from 20 companies for a focused discussion on navigating investment opportunities across China and Asia. Martin shared how to capitalise on investment opportunities within China and Asia's evolving landscape, and Morningstar's research team joined to provide an independent, in-depth perspective on why clients and allocators should remain invested in quality businesses over the long term — particularly in Asia and China.",
      goals: [
        "Client retention / hand-holding — Martin's insights on China and Asia supported asset retention and reinforced long-term positioning.",
        "Consultant endorsement — Morningstar's third-party research reinforced our quality-growth proposition.",
        "Client engagement — deepened relationships with 30 guests from 20 companies through in-person dialogue.",
      ],
      formats: ["In-person luncheon (Hong Kong)", "Follow-up email", "Post-event LinkedIn (Organic)"],
      keyResults: [
        { value: "100%", label: "Attendance rate", comparison: "30 clients, 20 companies" },
        { value: "20", label: "Companies represented", comparison: "Institutional & wholesale" },
      ],
      searchAppearances: { value: "389", label: "Search appearances per month", comparison: "+28% vs pre-campaign" },
      pageRankKPIs: [
        { value: "6", label: "Page 1 ranks", comparison: "+500% vs pre-campaign" },
        { value: "134", label: "Page 1-3 ranks", comparison: "+36% vs pre-campaign" },
      ],
      chartData: [
        { month: "Jan", page1: 30, page2: 40, page3: 35, page4: 50 },
        { month: "Feb", page1: 35, page2: 45, page3: 38, page4: 55 },
        { month: "Mar", page1: 40, page2: 50, page3: 40, page4: 60 },
        { month: "Apr", page1: 45, page2: 55, page3: 42, page4: 80 },
        { month: "May", page1: 50, page2: 58, page3: 40, page4: 100 },
        { month: "Jun", page1: 55, page2: 60, page3: 38, page4: 160 },
        { month: "Jul", page1: 70, page2: 55, page3: 40, page4: 180 },
        { month: "Aug", page1: 80, page2: 50, page3: 42, page4: 170 },
        { month: "Sep", page1: 90, page2: 48, page3: 40, page4: 150 },
        { month: "Oct", page1: 100, page2: 45, page3: 38, page4: 140 },
        { month: "Nov", page1: 110, page2: 42, page3: 36, page4: 130 },
        { month: "Dec", page1: 135, page2: 40, page3: 35, page4: 120 },
      ],
    },
    dach: {
      title: "Asia Pacific Leaders: Strategy Update & Portfolio Positioning",
      stage: "Highlight 2",
      subtitle: "Reassuring Stewart investors and introducing Martin Lau & Rizi Mohanty with conviction",
      description: "We were pleased with the results of our second client webinar. The session focused on presenting clear metrics that demonstrate portfolio improvement and stability — shifting the investor mindset from uncertainty to optimism. Engagement was notable, with 6 questions from the floor ranging from macro events to fund-merger clarity. We also beat industry benchmarks for live attendance rates — another signal that there's genuine audience demand, at least in EMEA.",
      goals: [
        "Ease the transition — reassure Stewart investors that the move to FSSA preserves the investment philosophy and quality standards.",
        "Introduce Martin Lau & Rizi Mohanty with conviction — turn unfamiliarity into confidence.",
        "Evidence portfolio progress — present clear metrics demonstrating improvement and stability since integration.",
      ],
      formats: ["Webinar (Open Exchange)", "Email", "Social", "Distribution OFTs"],
      keyResults: [
        { value: "EMEA", label: "Audience", comparison: "Institutional + Wholesale" },
        { value: "UK", label: "Majority", comparison: "Wholesale focus" },
        { value: "Global", label: "Recording reach", comparison: "Replay to be tracked in Q2" },
      ],
      audienceData: {
        countries: [
          { name: "Germany", percentage: 66 },
          { name: "Switzerland", percentage: 29 },
          { name: "France", percentage: 3 },
          { name: "Other", percentage: 2 },
        ],
        topCompanies: [
          { company: "Mercedes-Benz AG", sector: "Manufacturing", views: 4143 },
          { company: "Volkswagen", sector: "Manufacturing", views: 2110 },
          { company: "Allianz", sector: "Finance", views: 1556 },
          { company: "Porsche AG", sector: "Manufacturing", views: 1376 },
          { company: "Sparkasse", sector: "Finance", views: 955 },
        ],
      },
    },
    ukNordics: {
      title: "UK & Nordics Campaign",
      stage: "Awareness",
      subtitle: "Encouraging performance with clear signal that users are more engaged with video capabilities",
      description: "We were very pleased with the results. The data shows that with the same spend, users interacted with our video content 23% more than static ads. In both formats users were 16% more likely to click if the copy contained \"European Infrastructure\".",
      goals: ["Promote brand positioning in UK, Nordics", "Drive traffic to European assets on the website"],
      formats: ["4 x LinkedIn Ads", "215,229 Ad impressions"],
      keyResults: [
        { value: "9,274", label: "Clicks to website", comparison: "+15% vs pre-campaign" },
        { value: "4.31%", label: "Av CTR", comparison: "+85% vs industry" },
      ],
      keyLearnings: [
        "Video ads were more than 20% more clicked than static ads.",
        "CTR was 16% higher when \"European Infrastructure\" was included in the ad.",
        "Recommend carousel format in Q1 to gather learnings.",
      ],
      adPerformance: [
        { name: "Explore Igneo's European capabilities", type: "Static", impressions: 55000, clicks: 2100, ctr: 3.8 },
        { name: "Middle-market. Maximum impact.", type: "Static", impressions: 50000, clicks: 1800, ctr: 3.6 },
        { name: "Investing in European Infrastructure", type: "Video", impressions: 60000, clicks: 3200, ctr: 5.3 },
        { name: "Middle-market. Maximum impact. (Video)", type: "Video", impressions: 50229, clicks: 2174, ctr: 4.3 },
      ],
    },
  },

  website: {
    title: "Always on: Website",
    stage: "Consideration",
    subtitle: "Strong start driven by fund pages and paid search campaigns",
    description: "Q1 2026 delivered 48,123 page views and 36,970 active users — a +39% and +42% lift vs Q4 2025. Users were also +47% more engaged, thanks in large part to the Singapore and Hong Kong redesigned fund pages. Paid search (Google CPC) contributed 12,525 views, up +61% on Q4.",
    kpis: [
      { value: "48.1k", label: "Views (Q1)", comparison: "+39% vs Q4 (34.7k)" },
      { value: "37.0k", label: "Active users (Q1)", comparison: "+42% vs Q4 (26.0k)" },
      { value: "191.7k", label: "Engagement events", comparison: "+47% vs Q4 (130.1k)" },
      { value: "22.5k", label: "Key events", comparison: "+321% vs Q4 (5.4k)" },
    ],
    gaMonthly: [
      { month: "Oct 25", users: 10294, sessions: 14445, pageViews: 14445, bounceRate: 0, avgDuration: 0 },
      { month: "Nov 25", users: 9306, sessions: 12573, pageViews: 12573, bounceRate: 0, avgDuration: 0 },
      { month: "Dec 25", users: 6375, sessions: 7651, pageViews: 7651, bounceRate: 0, avgDuration: 0 },
      { month: "Jan 26", users: 11837, sessions: 15036, pageViews: 15036, bounceRate: 0, avgDuration: 0 },
      { month: "Feb 26", users: 12040, sessions: 15258, pageViews: 15258, bounceRate: 0, avgDuration: 0 },
      { month: "Mar 26", users: 13093, sessions: 17829, pageViews: 17829, bounceRate: 0, avgDuration: 0 },
    ],
    topPages: [
      { page: "/hk/zh/retail/our-funds/china.html", views: 2149, change: "Q1 top" },
      { page: "/hk/zh/retail.html", views: 1614, change: "Q1 top" },
      { page: "/hk/zh/retail/performance-documents/price-performance.html", views: 1504, change: "Q1 top" },
      { page: "/ (home)", views: 1242, change: "+29% vs Q4" },
      { page: "/sg/en/retail/our-funds/asia-pacific.html", views: 1043, change: "New in Q1" },
      { page: "/hk/en/retail/our-funds/asia-pacific.html", views: 1017, change: "Q1 top" },
      { page: "/hk/en/retail.html", views: 963, change: "+28% vs Q4 (751)" },
      { page: "/hk/en/retail/our-funds/china.html", views: 962, change: "+169% vs Q4 (358)" },
    ],
    trafficSources: [
      { source: "Direct / (none)", percentage: 50 },
      { source: "Google CPC", percentage: 28 },
      { source: "Google Organic", percentage: 16 },
      { source: "Bing Organic", percentage: 2 },
      { source: "Pardot Email", percentage: 1 },
      { source: "Other referral", percentage: 3 },
    ],
    focusQ4: [
      "Decommissioned legacy Ceros pages across retail sites",
      "Ran /UK and /DE paid landing-page campaigns (8.1k combined views)",
      "Singapore fund page workstream kicked off",
    ],
    focusQ1: [
      "EMEA (English) fund pages — April go-live",
      "Australian fund pages — April go-live",
      "New Zealand adviser site — GEM strategy focused",
    ],
  },

  linkedin: {
    title: "Always on: LinkedIn",
    stage: "Consideration",
    subtitle: "Thematic focus on AI, FONDS Kongress in native German, and client updates",
    description: "Content this quarter leaned into AI as an investment theme across Asia, with German-language posts produced for FONDS KONGRESS and regular client updates reinforcing long-term positioning.",
    goals: ["Increase our share of voice and support Sales in-region"],
    activities: ["AI thematic posts", "Native German posts for FONDS KONGRESS", "Client updates", "23 x posts globally"],
    kpis: [
      { value: "0.7%", label: "Engagement rate", comparison: "+36% against competitors" },
      { value: "23", label: "Total posts", comparison: "-52% against competitors" },
    ],
    focusQ4: [
      "Production of multiple posts in native German.",
      "Supported the paid social live campaigns.",
      "Increased brand awareness with different target audiences.",
    ],
    focusQ1: [
      "Maintain AI thematic content cadence across Asia.",
      "Expand German-language coverage around FONDS Kongress and IMK.",
      "Align content pipeline with global events and client-update cadence.",
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
      // ─── Q1 2026 ───
      { name: "Income Agency Kick Off Event", format: "Booth", audience: "Wholesale", region: "ASIA", quarter: "Q1", status: "distribution-owned" as const, category: "Networking", city: "Singapore", lat: 1.3521, lng: 103.8198, startDate: "2026-01-16", brand: "FSSA", host: "Income", distributionLead: "Crystal Yong, Claudia Then" },
      { name: "FONDS Professionell Kongress", format: "Conference", audience: "Wholesale", region: "CE", quarter: "Q1", status: "committed" as const, category: "Conference", city: "Mannheim", lat: 49.4875, lng: 8.4660, startDate: "2026-01-28", endDate: "2026-01-29", brand: "FSSA", host: "FONDS Professionell", hasSpeakingSlot: true, speaker: "Michael Stapleton", assetClass: "GEM", marketingLead: "Mandy Ashmore", distributionLead: "Emmanuel Litique", description: "Our flagship German wholesale conference. FSSA returned to Mannheim with an on-stand presence supported by native-German social and email campaigns. Michael Stapleton delivered the GEM-focused speaking slot and the team ran back-to-back client meetings at the stand.", images: ["events/fonds-kongress/fk-1.jpg","events/fonds-kongress/fk-2.jpg","events/fonds-kongress/fk-3.jpg"] },
      { name: "Zurich x IPP luncheon", format: "Luncheon", audience: "Wholesale", region: "ASIA", quarter: "Q1", status: "distribution-owned" as const, category: "Luncheon", city: "Hong Kong", lat: 22.3193, lng: 114.1694, startDate: "2026-02-04", brand: "FSSA", host: "Zurich / IPP" },
      { name: "Asia / China Roundtable (Martin & Morningstar)", format: "Luncheon", audience: "Wholesale", region: "ASIA", quarter: "Q1", status: "proprietary" as const, category: "Luncheon", city: "Hong Kong", lat: 22.3193, lng: 114.1694, startDate: "2026-03-03", brand: "FSSA", hasSpeakingSlot: true, speaker: "Martin Lau", assetClass: "Asia / China", description: "30 clients from 20 institutional and wholesale firms in Hong Kong. Martin shared insights on China and Asia opportunities; Morningstar's research team joined to provide independent perspective.", images: ["events/luncheon/luncheon-1.jpg","events/luncheon/luncheon-2.jpg","events/luncheon/luncheon-3.jpg","events/luncheon/luncheon-4.jpg","events/luncheon/luncheon-5.jpg","events/luncheon/luncheon-6.jpg","events/luncheon/luncheon-7.jpg","events/luncheon/luncheon-8.jpg","events/luncheon/luncheon-9.jpg","events/luncheon/luncheon-10.jpg"], comments: "100% attendance. Highlight campaign of Q1." },
      { name: "RSMR in the City", format: "Conference", audience: "Wholesale", region: "UKI", quarter: "Q1", status: "committed" as const, category: "Conference", city: "London", lat: 51.5074, lng: -0.1278, startDate: "2026-03-11", brand: "FSSA" },
      { name: "Stockwaves Hannover", format: "Conference", audience: "Wholesale", region: "CE", quarter: "Q1", status: "committed" as const, category: "Conference", city: "Hannover", lat: 52.3759, lng: 9.7320, startDate: "2026-03-23", brand: "FSSA", host: "Fonds Professionell" },
      { name: "Stockwaves Bremen", format: "Conference", audience: "Wholesale", region: "CE", quarter: "Q1", status: "committed" as const, category: "Conference", city: "Bremen", lat: 53.0793, lng: 8.8017, startDate: "2026-03-24", brand: "FSSA", host: "Fonds Professionell" },
      { name: "Institutional Money Kongress", format: "Conference", audience: "Institutional", region: "CE", quarter: "Q1", status: "committed" as const, category: "Conference", city: "Frankfurt", lat: 50.1109, lng: 8.6821, startDate: "2026-03-24", endDate: "2026-03-25", brand: "FSSA", host: "Institutional Money", marketingLead: "Mandy Ashmore", description: "FSSA's key German institutional event, bringing Qimin Fei in front of Frankfurt-based allocators with a 2026 outlook on Asian equities. Campaign supported by native-German LinkedIn posts, email signatures and pre/post-event creative.", images: ["events/imk/imk-1.jpg","events/imk/imk-2.jpg","events/imk/imk-3.jpg","events/imk/imk-4.jpg"] },

      // ─── Q2 2026 ───
      { name: "Stockwaves Vienna", format: "Roundtable", audience: "Wholesale", region: "CE", quarter: "Q2", status: "committed" as const, category: "Roundtable", city: "Vienna", lat: 48.2082, lng: 16.3738, startDate: "2026-04-13", brand: "FSSA", host: "Fonds Professionell" },
      { name: "Stockwaves Salzburg", format: "Roundtable", audience: "Wholesale", region: "CE", quarter: "Q2", status: "committed" as const, category: "Roundtable", city: "Salzburg", lat: 47.8095, lng: 13.0550, startDate: "2026-04-14", brand: "FSSA", host: "Fonds Professionell" },
      { name: "Raymond James Conference 2026", format: "Conference", audience: "Wholesale", region: "UKI", quarter: "Q2", status: "committed" as const, category: "Conference", city: "London", lat: 51.5074, lng: -0.1278, startDate: "2026-06-22", brand: "FSSA", host: "Raymond James" },

      // ─── Q3 2026 ───
      { name: "GEM / India Roundtable (HK)", format: "Luncheon", audience: "Wholesale", region: "ASIA", quarter: "Q3", status: "proprietary" as const, category: "Luncheon", city: "Hong Kong", lat: 22.3193, lng: 114.1694, startDate: "2026-08-01", brand: "FSSA", assetClass: "GEM / India" },
      { name: "GEM / India Roundtable (SG)", format: "Luncheon", audience: "Wholesale", region: "ASIA", quarter: "Q3", status: "proprietary" as const, category: "Luncheon", city: "Singapore", lat: 1.3521, lng: 103.8198, startDate: "2026-08-01", brand: "FSSA", assetClass: "GEM / India" },
      { name: "Taiwan GEM / India Roadshow with Cathay", format: "Luncheon", audience: "Wholesale", region: "ASIA", quarter: "Q3", status: "proprietary" as const, category: "Luncheon", city: "Taipei", lat: 25.0330, lng: 121.5654, startDate: "2026-08-01", brand: "FSSA", host: "Cathay", assetClass: "GEM / India" },
      { name: "Asia / China Roundtable (Singapore)", format: "Luncheon", audience: "Wholesale", region: "ASIA", quarter: "Q3", status: "proposed" as const, category: "Luncheon", city: "Singapore", lat: 1.3521, lng: 103.8198, startDate: "2026-09-01", brand: "FSSA" },

      // ─── Q4 2026 ───
      { name: "Client Forum – Hong Kong", format: "Forum", audience: "Wholesale / Institutional", region: "ASIA", quarter: "Q4", status: "proprietary" as const, category: "Forum", city: "Hong Kong", lat: 22.3193, lng: 114.1694, startDate: "2026-10-01", brand: "FSSA" },
      { name: "Client Forum – Singapore", format: "Forum", audience: "Wholesale / Institutional", region: "ASIA", quarter: "Q4", status: "proprietary" as const, category: "Forum", city: "Singapore", lat: 1.3521, lng: 103.8198, startDate: "2026-10-01", brand: "FSSA" },
    ] as EventItem[],
  },
};
