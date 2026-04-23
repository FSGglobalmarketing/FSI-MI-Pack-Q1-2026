// ═══════════════════════════════════════════════════════════════════════
// LEGACY — FSSA-era Asia Pacific Leaders webinar data. No FSI equivalent
// export was provided for Q1 2026, so this file is retained only for type
// compatibility with the WebinarAnalytics component (currently not rendered
// from pages/Index.tsx).
// Source: Attendees_Asia Pacific Leaders_Webinar_Post_Webinar_Report.xlsx
// ═══════════════════════════════════════════════════════════════════════

export interface WebinarKpi { value: string; label: string; sub?: string; }

export const webinarKpis: WebinarKpi[] = [
  { value: "68",  label: "Unique attendees",     sub: "35 live · 11 on-demand · 22 registered" },
  { value: "52%", label: "Live attendance rate", sub: "Benchmark: ~30% typical for B2B webinars" },
  { value: "9%",  label: "Asked a question",     sub: "6 attendees submitted questions" },
  { value: "4",   label: "Opportunity matches",  sub: "Live pipeline firms also attended" },
];

// Attendance mode split (for a pie/donut)
export const attendanceMix = [
  { mode: "Joined Live",   count: 35, color: "#e22e2c" },
  { mode: "On-Demand",     count: 11, color: "#3699c9" },
  { mode: "Registered only", count: 22, color: "#8FB9AA" },
];

// Geographic split (inferred from email TLDs; .com grouped as "Other/Global")
export const attendeesByCountry = [
  { country: "United Kingdom", count: 36 },
  { country: "Other / Global", count: 19 },
  { country: "Sweden",         count:  6 },
  { country: "Germany",        count:  2 },
  { country: "Ireland",        count:  2 },
  { country: "Other",          count:  3 },
];

// Top attending firms (2+ attendees)
export const topAttendingFirms = [
  { firm: "RBC Brewin Dolphin",        count: 6 },
  { firm: "Brooks Macdonald",          count: 3 },
  { firm: "Mediolanum International",  count: 2 },
  { firm: "Investing Ethically Ltd",   count: 2 },
  { firm: "Cambourne Financial Plg",   count: 2 },
  { firm: "Apoteket AB Pensionsstift.",count: 2 },
];

// Matches against live Salesforce opportunities (manually verified)
export interface OppMatch {
  attendee: string;          // firm from webinar roster
  person: string;            // who attended
  crmInstitution: string;    // canonical CRM name
  stage: string;
  strategy: string;
  role: string;
}

export const opportunityMatches: OppMatch[] = [
  {
    attendee: "Mediolanum International",
    person: "Niall Solomon",
    crmInstitution: "Mediolanum International Fund",
    stage: "1-Initiated Dialogue / 7-Account Funded",
    strategy: "Multi-strategy",
    role: "EMEA Wholesale",
  },
  {
    attendee: "Hawksmoor Investment Mgmt",
    person: "Hawksmoor (via Ascot Lloyd)",
    crmInstitution: "Hawksmoor Investment Management Ltd",
    stage: "2-Active Engagement",
    strategy: "GEM Focus Fund",
    role: "EMEA Wholesale",
  },
  {
    attendee: "Titan Square Mile",
    person: "Attended as Titan Square Mile",
    crmInstitution: "Square Mile Asset Management Ltd – London",
    stage: "2-Active Engagement",
    strategy: "GEM Focus Fund",
    role: "EMEA Wholesale",
  },
  {
    attendee: "JM Finn",
    person: "Registered via JM Finn",
    crmInstitution: "JM Finn & Co. Ltd – London",
    stage: "1-Initiated Dialogue",
    strategy: "Greater China Leaders",
    role: "EMEA Wholesale",
  },
];

// Questions asked during the live session
export interface WebinarQuestion { attendee: string; firm: string; question: string; }

export const webinarQuestions: WebinarQuestion[] = [
  {
    attendee: "Edward Kenny",
    firm: "Rathbones Investment Management",
    question: "Now 'the West' look less aligned and potentially stretched defensively regarding Ukraine and Israel/Iran, does this play into China's hands with regards to Taiwan?",
  },
  {
    attendee: "Graham O'Neill",
    firm: "RSMR",
    question: "Discuss — have funds been moved in line with FSSA portfolio exposure to Asian tech hardware, China consumer, Philippines, and India?",
  },
  {
    attendee: "James Barber",
    firm: "Brewin Dolphin",
    question: "Why is the fund not being merged into one of the existing FSSA funds?",
  },
  {
    attendee: "Mark Smith",
    firm: "Maunby",
    question: "I have invested in the Stewart Asia Leaders / All-Cap strategy for 20 years — keen to understand how the funds will be managed and when/if assets will be merged into the FSSA funds.",
  },
  {
    attendee: "Max Chan",
    firm: "Attendee",
    question: "What impact do you foresee from a renewal in US dollar strength on the strategy?",
  },
  {
    attendee: "Niall Solomon",
    firm: "Mediolanum",
    question: "With the recent sell-off in the Indian economy based on Iran war / oil fears, are you seeing a better environment for buying opportunities?",
  },
];
