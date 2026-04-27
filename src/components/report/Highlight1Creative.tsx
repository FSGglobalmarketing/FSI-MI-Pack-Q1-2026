import { useState } from "react";
import { Youtube, Linkedin, Globe, ExternalLink, ThumbsUp, ArrowUpRight } from "lucide-react";

/* ────────────────────────────────────────────────────────────────
 * Reporting Season — creative for Highlight 1
 * Tabs: YouTube · LinkedIn · Website (matching the pill style used
 * across the rest of the report — bg-accent active, white/10 inactive).
 * ──────────────────────────────────────────────────────────────── */

const TABS = ["YouTube", "LinkedIn", "Website"] as const;
type Tab = (typeof TABS)[number];

/* ── LinkedIn reactions on the post (urn:li:activity:7438016500038545408) ──
 * Filtered to remove anyone whose profile lists First Sentier / FSSA /
 * Igneo / RQI / Stewart as their employer (per user direction). What
 * remains is external industry connections + uncategorised firms. */
type ReactionGroup = "client_prospect" | "other";
interface Reaction {
  name: string;
  role: string;
  group: ReactionGroup;
  company?: string;
}

const REACTIONS: Reaction[] = [
  // Client / prospect — industry peers in target sectors
  { name: "Blake Dowsett",       role: "Director, Equity Research — Insurance & Diversified Financials", company: "Jarden",                        group: "client_prospect" },
  { name: "James Hetherington",  role: "Director, Global Equity Sales",                                   company: "Bank of America Merrill Lynch", group: "client_prospect" },
  { name: "Brendan Sproules",    role: "Executive Director, Australian Banks Research",                  company: "Goldman Sachs",                 group: "client_prospect" },
  { name: "Julian Braganza",     role: "Executive Director, Insurance & Diversified Financials",         company: "Goldman Sachs",                 group: "client_prospect" },
  { name: "Steve Leung",         role: "Investor Relations",                                              company: "QBE",                           group: "client_prospect" },
  // Other professional connections (firm not stated in their headline)
  { name: "Johan Mackenzie",     role: "Global Head of Marketing",                                                                                  group: "other" },
  { name: "Phoebe Reardon",      role: "B2B Marketing Strategist — Financial Services",                                                              group: "other" },
  { name: "Dilhara C.",          role: "Risk and Compliance specialist",                                                                             group: "other" },
  { name: "Chris Shannon",       role: "Director, Strategic Partnerships",                                                                           group: "other" },
  { name: "Nick Wappett",        role: "Funds management distribution — Private Wealth & Wholesale",                                                 group: "other" },
  { name: "David Allen",         role: "Asset Management Industry Leader",                                                                           group: "other" },
  { name: "Branko Ceran",        role: "Enterprise CIO — Transformation Executive",                                                                  group: "other" },
  { name: "Jordan H.",           role: "Business Development Manager (NSW & ACT)",                                                                   group: "other" },
  { name: "Ashley Conn",         role: "Chief Financial and Strategy Officer, Executive Director",                                                   group: "other" },
];

const clientProspectCount = REACTIONS.filter((r) => r.group === "client_prospect").length;
const otherCount = REACTIONS.filter((r) => r.group === "other").length;

/* ── Constants ── */
const YOUTUBE_LINK = "https://youtu.be/11BJjjdcfuY?si=-1neviFI2shA5y45";
const YOUTUBE_EMBED = "https://www.youtube.com/embed/11BJjjdcfuY";
const LENOS_LINK = "https://www.lenostube.com/en/youtube-video-analytics-checker/?share=e27e95b365cee019";
const LINKEDIN_LINK = "https://www.linkedin.com/feed/update/urn:li:activity:7438016500038545408/";
const LINKEDIN_IMAGE = `${import.meta.env.BASE_URL}highlights/reporting-season-linkedin.jpg`;
const WEBSITE_PATH = "/au/en/adviser/insights/podcast-asx-reporting-season-big-beats-big-misses-bigger-moves.html";
const WEBSITE_LINK = `https://www.firstsentierinvestors.com.au${WEBSITE_PATH}`;

/* ── LinkedIn post stats (Mar 13 2026 — row 5 in All Posts export) ── */
const LI_POST = {
  date: "13 March 2026",
  impressions: 1473,
  clicks: 48,
  ctrPct: 3.26,            // 0.03258656
  reactions: 33,
  engagementPct: 5.63,     // 0.05634759
};
// Q1 averages computed across 13 organic posts in the export
const LI_Q1_AVG = {
  ctrPct: 7.67,
  engagementPct: 9.17,
};

/* ── Helpers ── */
function deltaPct(value: number, baseline: number) {
  if (baseline === 0) return 0;
  return ((value - baseline) / baseline) * 100;
}
function fmtDelta(d: number) {
  const sign = d > 0 ? "+" : "";
  return `${sign}${d.toFixed(0)}%`;
}

function StatTile({ label, value, sub, deltaText, negative }: { label: string; value: string; sub?: string; deltaText?: string; negative?: boolean }) {
  return (
    <div className="rounded p-3 bg-white/5 border border-white/10">
      <div className="text-[10px] tracking-wide text-foreground/55 mb-1">{label}</div>
      <div className="text-xl font-medium text-foreground tabular-nums">{value}</div>
      {sub && <div className="text-[10px] text-foreground/55 mt-1">{sub}</div>}
      {deltaText && (
        <div
          className={`text-[10px] font-medium tabular-nums mt-1 ${
            negative ? "text-destructive" : "text-accent"
          }`}
        >
          {deltaText}
        </div>
      )}
    </div>
  );
}

function ReactionRow({ r }: { r: Reaction }) {
  const initials = r.name.split(" ").map((p) => p[0]).filter(Boolean).slice(0, 2).join("").toUpperCase();
  const dotColor = r.group === "client_prospect" ? "bg-accent" : "bg-foreground/25";
  return (
    <li className="flex items-start gap-3 py-2 border-b border-white/5 last:border-b-0">
      <span className="shrink-0 w-7 h-7 rounded-full bg-white/10 text-foreground/80 text-[10px] font-medium flex items-center justify-center mt-0.5">
        {initials}
      </span>
      <div className="flex-1 min-w-0">
        <div className="text-xs text-foreground font-medium leading-tight truncate">{r.name}</div>
        <div className="text-[11px] text-foreground/65 leading-snug">
          {r.role}
          {r.company && <span className="text-foreground/50"> · {r.company}</span>}
        </div>
      </div>
      <span className={`shrink-0 w-1.5 h-1.5 rounded-full mt-2 ${dotColor}`} />
    </li>
  );
}

export default function Highlight1Creative() {
  const [tab, setTab] = useState<Tab>("YouTube");

  const orderedReactions = [
    ...REACTIONS.filter((r) => r.group === "client_prospect"),
    ...REACTIONS.filter((r) => r.group === "other"),
  ];

  const ctrDelta = deltaPct(LI_POST.ctrPct, LI_Q1_AVG.ctrPct);
  const engDelta = deltaPct(LI_POST.engagementPct, LI_Q1_AVG.engagementPct);

  return (
    <div className="w-full">
      {/* Pill tabs — matching the rest of the report */}
      <div className="flex gap-2 mb-4 overflow-x-auto">
        {TABS.map((t) => {
          const Icon = t === "YouTube" ? Youtube : t === "LinkedIn" ? Linkedin : Globe;
          const active = tab === t;
          return (
            <button
              key={t}
              onClick={() => setTab(t)}
              className={`inline-flex items-center gap-1.5 px-4 py-2 rounded-full text-sm font-medium whitespace-nowrap transition-colors ${
                active
                  ? "bg-accent text-accent-foreground"
                  : "bg-white/10 text-white/70 hover:bg-white/20"
              }`}
            >
              <Icon className="w-3.5 h-3.5" /> {t}
            </button>
          );
        })}
      </div>

      {/* ── YouTube ── */}
      {tab === "YouTube" && (
        <div className="space-y-4">
          <div className="rounded overflow-hidden border border-white/10 aspect-video bg-black">
            <iframe
              src={YOUTUBE_EMBED}
              title="Buy Hold Sell — Livewire Markets"
              className="w-full h-full"
              allow="accelerometer; autoplay; clipboard-write; encrypted-media; gyroscope; picture-in-picture; web-share"
              allowFullScreen
            />
          </div>

          <div className="rounded p-4 bg-white/5 border border-white/10">
            <div className="flex items-center justify-between mb-2">
              <div>
                <div className="text-[10px] tracking-wide text-foreground/55 mb-0.5">Channel</div>
                <a
                  href="https://www.youtube.com/@livewiremarkets"
                  target="_blank"
                  rel="noreferrer"
                  className="text-sm font-medium text-foreground hover:text-accent inline-flex items-center gap-1"
                >
                  Livewire Markets <ExternalLink className="w-3 h-3" />
                </a>
                <div className="text-[11px] text-foreground/55">
                  62.8k subscribers · 12.2M total views · 3,646 videos · since Sep 2013
                </div>
              </div>
              <a
                href={YOUTUBE_LINK}
                target="_blank"
                rel="noreferrer"
                className="text-[11px] tracking-wide text-foreground/60 hover:text-accent inline-flex items-center gap-1 shrink-0"
              >
                Open on YouTube <ArrowUpRight className="w-3 h-3" />
              </a>
            </div>
            <div className="text-xs text-foreground/70">
              <span className="text-foreground/50">Episode:</span>{" "}
              "Buy Hold Sell: 12 key stocks and the defining insights from a historic reporting season" — published 26 Feb 2026, 28m 02s.
            </div>
          </div>

          <div className="grid grid-cols-3 gap-2">
            <StatTile label="Views"       value="10,111" sub="171 / day avg" />
            <StatTile label="Likes"       value="186"    sub="3 / day avg · 1.84% engagement" />
            <StatTile label="Comments"    value="11"     sub="0.11% engagement" />
          </div>
          <div className="grid grid-cols-3 gap-2">
            <StatTile label="Channel reach" value="62.8k"  sub="Subscribers" />
            <StatTile label="Days live"     value="59"     sub="Since 26 Feb 2026" />
            <StatTile label="Source"        value="Lenos"  sub="Lenostube analytics" />
          </div>
          <div className="text-[10px] text-foreground/45">
            <a href={LENOS_LINK} target="_blank" rel="noreferrer" className="hover:text-accent underline-offset-2 hover:underline">
              View full Lenos report
            </a>
          </div>
        </div>
      )}

      {/* ── LinkedIn ── */}
      {tab === "LinkedIn" && (
        <div className="space-y-4">
          <a
            href={LINKEDIN_LINK}
            target="_blank"
            rel="noreferrer"
            className="block rounded overflow-hidden border border-white/10 bg-white/5 hover:bg-white/8 transition-colors"
          >
            <img
              src={LINKEDIN_IMAGE}
              alt="Reporting season — David Wilson and Christian Guerra"
              className="w-full aspect-[16/9] object-cover"
            />
            <div className="p-4">
              <div className="flex items-center gap-2 mb-2">
                <Linkedin className="w-4 h-4 text-accent" />
                <span className="text-[10px] tracking-wide text-foreground/55">FSI on LinkedIn — {LI_POST.date}</span>
              </div>
              <p className="text-sm text-foreground leading-snug mb-2">
                February's reporting season delivered strong earnings against a backdrop of sharp volatility. David Wilson and Christian Guerra break down the sector-by-sector reactions and highlight where solid fundamentals and exaggerated price moves are creating opportunities for active investors.
              </p>
              <span className="text-[11px] text-accent inline-flex items-center gap-1">
                Open post <ExternalLink className="w-3 h-3" />
              </span>
            </div>
          </a>

          <div className="grid grid-cols-3 gap-2">
            <StatTile
              label="Impressions"
              value={LI_POST.impressions.toLocaleString()}
              sub={`${LI_POST.clicks} clicks`}
            />
            <StatTile
              label="CTR"
              value={`${LI_POST.ctrPct.toFixed(2)}%`}
              sub={`Q1 avg ${LI_Q1_AVG.ctrPct.toFixed(2)}%`}
              deltaText={`${fmtDelta(ctrDelta)} vs avg`}
              negative={ctrDelta < 0}
            />
            <StatTile
              label="Engagement rate"
              value={`${LI_POST.engagementPct.toFixed(2)}%`}
              sub={`Q1 avg ${LI_Q1_AVG.engagementPct.toFixed(2)}%`}
              deltaText={`${fmtDelta(engDelta)} vs avg`}
              negative={engDelta < 0}
            />
          </div>

          <div>
            <div className="flex items-center gap-2 mb-2">
              <ThumbsUp className="w-3.5 h-3.5 text-accent" />
              <h4 className="text-xs font-medium text-foreground tracking-wide">
                Who reacted ({REACTIONS.length} non-FSI of {LI_POST.reactions} total)
              </h4>
            </div>
            <div className="flex flex-wrap items-center gap-x-4 gap-y-1 mb-3 text-[10px] text-foreground/55">
              <span className="inline-flex items-center gap-1.5">
                <span className="w-1.5 h-1.5 rounded-full bg-accent" /> Client / prospect ({clientProspectCount})
              </span>
              <span className="inline-flex items-center gap-1.5">
                <span className="w-1.5 h-1.5 rounded-full bg-foreground/25" /> Other ({otherCount})
              </span>
            </div>
            <ul className="rounded border border-white/10 bg-white/5 px-4 py-1 max-h-[420px] overflow-y-auto">
              {orderedReactions.map((r) => (
                <ReactionRow key={r.name} r={r} />
              ))}
            </ul>
            <div className="text-[10px] text-foreground/45 mt-2">
              First Sentier / FSSA / Igneo / RQI / Stewart staff filtered out per request.
            </div>
          </div>
        </div>
      )}

      {/* ── Website ── */}
      {tab === "Website" && (
        <div className="space-y-4">
          <div className="rounded overflow-hidden border border-white/10 aspect-video bg-black">
            <iframe
              src="//players.brightcove.net/1143621127001/default_default/index.html?videoId=6391105068112"
              title="Reporting season — Big beats, big misses, bigger moves"
              className="w-full h-full"
              allow="accelerometer; autoplay; clipboard-write; encrypted-media; gyroscope; picture-in-picture; web-share"
              allowFullScreen
              frameBorder={0}
            />
          </div>

          <a
            href={WEBSITE_LINK}
            target="_blank"
            rel="noreferrer"
            className="block rounded p-4 bg-white/5 border border-white/10 hover:bg-white/8 transition-colors"
          >
            <div className="flex items-center gap-2 mb-1">
              <Globe className="w-3.5 h-3.5 text-accent" />
              <span className="text-[10px] tracking-wide text-foreground/55">firstsentierinvestors.com.au</span>
            </div>
            <div className="text-sm font-medium text-foreground leading-snug">
              Big beats, big misses, bigger moves — ASX reporting season podcast
            </div>
            <div className="text-[11px] text-foreground/55 mt-1 truncate">
              {WEBSITE_PATH}
            </div>
            <span className="text-[11px] text-accent inline-flex items-center gap-1 mt-2">
              Open page <ExternalLink className="w-3 h-3" />
            </span>
          </a>

          <div className="grid grid-cols-3 gap-2">
            <StatTile label="Views"        value="67"   sub="Q1 page views" />
            <StatTile label="Active users" value="36"   sub="Unique visitors" />
            <StatTile label="Views / user" value="1.86" sub="Avg per user" />
          </div>
          <div className="grid grid-cols-3 gap-2">
            <StatTile label="Avg engagement" value="23s"  sub="Per active user" />
            <StatTile label="Event count"    value="137"  sub="Including Video Engagement" />
            <StatTile label="Source"         value="GA4"  sub="Pages & screens (filtered)" />
          </div>
        </div>
      )}
    </div>
  );
}
