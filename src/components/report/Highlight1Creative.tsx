import { Tabs, TabsList, TabsTrigger, TabsContent } from "@/components/ui/tabs";
import { Youtube, Linkedin, Globe, ExternalLink, ThumbsUp, Users, ArrowUpRight } from "lucide-react";

/* ── LinkedIn reactions captured from the post (urn:li:activity:7438016500038545408) ── */
type ReactionGroup = "client_prospect" | "internal" | "other";

interface Reaction {
  name: string;
  role: string;
  group: ReactionGroup;
  company?: string;       // explicit company tag where stated
}

const REACTIONS: Reaction[] = [
  // ── External — clients / prospects (industry peers in target sectors) ──
  { name: "Blake Dowsett",       role: "Director, Equity Research — Insurance & Diversified Financials", company: "Jarden",                              group: "client_prospect" },
  { name: "James Hetherington",  role: "Director, Global Equity Sales",                                   company: "Bank of America Merrill Lynch",       group: "client_prospect" },
  { name: "Brendan Sproules",    role: "Executive Director, Australian Banks Research",                  company: "Goldman Sachs",                       group: "client_prospect" },
  { name: "Julian Braganza",     role: "Executive Director, Insurance & Diversified Financials",         company: "Goldman Sachs",                       group: "client_prospect" },
  { name: "Steve Leung",         role: "Investor Relations",                                              company: "QBE",                                 group: "client_prospect" },

  // ── Internal — FSI / Stewart / Igneo / RQI ──
  { name: "Daniel B Evans",      role: "Senior Marketing Associate",                                      company: "First Sentier Group",                 group: "internal" },
  { name: "Sam Adams",           role: "Business Development Manager",                                    company: "First Sentier Group",                 group: "internal" },
  { name: "Karyn Arthur",        role: "Senior Marketing Manager, ANZ",                                   company: "First Sentier Group",                 group: "internal" },
  { name: "Olivia Brennan",      role: "ESG Analyst & Investment Specialist",                             company: "First Sentier Investors",             group: "internal" },
  { name: "Christian Guerra",    role: "Head of Research",                                                company: "First Sentier Investors",             group: "internal" },
  { name: "Peter Heine",         role: "Head of Institutional Business",                                  company: "First Sentier Group",                 group: "internal" },
  { name: "Alison Thai",         role: "Portfolio Manager",                                               company: "First Sentier Investors",             group: "internal" },
  { name: "Jamie Downing",       role: "Head of Distribution, EMEA",                                      company: "First Sentier Investors",             group: "internal" },
  { name: "Andrew Francis",      role: "Chief Executive",                                                 company: "RQI Investors",                       group: "internal" },
  { name: "Emerson Bloom, CIMA", role: "Key Account Manager | Distribution",                              company: "First Sentier Group",                 group: "internal" },
  { name: "Nick Everitt",        role: "Key Account Manager — Wholesale Investment",                      company: "First Sentier Investors",             group: "internal" },
  { name: "Dimitri P.",          role: "Business Development Associate",                                  company: "First Sentier Group",                 group: "internal" },
  { name: "Edward Tang",         role: "Asia Channel Marketing Lead",                                     company: "First Sentier Investors",             group: "internal" },
  { name: "Quin Smith",          role: "Head of Distribution, Australia & New Zealand",                   company: "First Sentier Investors",             group: "internal" },
  { name: "Megan Hartung",       role: "Marketing Manager",                                               company: "First Sentier Investors",             group: "internal" },
  { name: "Kate Bradshaw",       role: "Global Asset Management — Infrastructure Treasury & Operations",  company: "Igneo Infrastructure Partners",       group: "internal" },
  { name: "Samuel Green, CFA",   role: "Consultant Relations",                                            company: "First Sentier Investors",             group: "internal" },
  { name: "James W.",            role: "Small Caps Research Analyst",                                     company: "First Sentier Investors",             group: "internal" },
  { name: "Caitlin Higgins",     role: "Executive Assistant to CEO",                                      company: "First Sentier Group",                 group: "internal" },

  // ── Other professional connections (industry / unmapped) ──
  { name: "Johan Mackenzie",     role: "Global Head of Marketing",                                                                                        group: "other" },
  { name: "Phoebe Reardon",      role: "B2B Marketing Strategist — Financial Services",                                                                    group: "other" },
  { name: "Dilhara C.",          role: "Risk and Compliance specialist",                                                                                   group: "other" },
  { name: "Chris Shannon",       role: "Director, Strategic Partnerships",                                                                                 group: "other" },
  { name: "Nick Wappett",        role: "Funds management distribution — Private Wealth & Wholesale",                                                       group: "other" },
  { name: "David Allen",         role: "Asset Management Industry Leader",                                                                                 group: "other" },
  { name: "Branko Ceran MAICD MACS", role: "Enterprise CIO — Transformation Executive",                                                                    group: "other" },
  { name: "Jordan H.",           role: "Business Development Manager (NSW & ACT)",                                                                         group: "other" },
  { name: "Ashley Conn",         role: "Chief Financial and Strategy Officer, Executive Director",                                                         group: "other" },
];

const clientProspectCount = REACTIONS.filter((r) => r.group === "client_prospect").length;
const internalCount = REACTIONS.filter((r) => r.group === "internal").length;
const otherCount = REACTIONS.filter((r) => r.group === "other").length;

const YOUTUBE_LINK = "https://youtu.be/11BJjjdcfuY?si=-1neviFI2shA5y45";
const YOUTUBE_EMBED = "https://www.youtube.com/embed/11BJjjdcfuY";
const LINKEDIN_LINK = "https://www.linkedin.com/feed/update/urn:li:activity:7438016500038545408/";

function StatBlock({ label, value, sub }: { label: string; value: string; sub?: string }) {
  return (
    <div className="rounded p-3 bg-white/5 border border-white/10">
      <div className="text-[10px] tracking-wide text-foreground/55 mb-1">{label}</div>
      <div className="text-xl font-medium text-foreground tabular-nums">{value}</div>
      {sub && <div className="text-[10px] text-foreground/50 mt-1">{sub}</div>}
    </div>
  );
}

function ReactionRow({ r }: { r: Reaction }) {
  const initials = r.name.split(" ").map((p) => p[0]).filter(Boolean).slice(0, 2).join("").toUpperCase();
  const dotColor =
    r.group === "client_prospect" ? "bg-accent"
    : r.group === "internal"      ? "bg-foreground/40"
    :                                "bg-foreground/20";
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
  const ordered = [
    ...REACTIONS.filter((r) => r.group === "client_prospect"),
    ...REACTIONS.filter((r) => r.group === "internal"),
    ...REACTIONS.filter((r) => r.group === "other"),
  ];

  return (
    <Tabs defaultValue="youtube" className="w-full">
      <TabsList className="grid w-full grid-cols-3 bg-white/5 border border-white/10 h-auto p-1">
        <TabsTrigger
          value="youtube"
          className="flex items-center gap-1.5 text-xs data-[state=active]:bg-accent data-[state=active]:text-accent-foreground text-foreground/70"
        >
          <Youtube className="w-3.5 h-3.5" /> YouTube
        </TabsTrigger>
        <TabsTrigger
          value="linkedin"
          className="flex items-center gap-1.5 text-xs data-[state=active]:bg-accent data-[state=active]:text-accent-foreground text-foreground/70"
        >
          <Linkedin className="w-3.5 h-3.5" /> LinkedIn
        </TabsTrigger>
        <TabsTrigger
          value="website"
          className="flex items-center gap-1.5 text-xs data-[state=active]:bg-accent data-[state=active]:text-accent-foreground text-foreground/70"
        >
          <Globe className="w-3.5 h-3.5" /> Website
        </TabsTrigger>
      </TabsList>

      {/* ── YouTube ── */}
      <TabsContent value="youtube" className="space-y-4 mt-4">
        <div className="rounded overflow-hidden border border-white/10 aspect-video bg-black">
          <iframe
            src={YOUTUBE_EMBED}
            title="Livewire Markets — Buy Hold Sell"
            className="w-full h-full"
            allow="accelerometer; autoplay; clipboard-write; encrypted-media; gyroscope; picture-in-picture; web-share"
            allowFullScreen
          />
        </div>
        <div className="flex items-center justify-between">
          <div>
            <div className="text-xs text-foreground/55">Channel</div>
            <a
              href={YOUTUBE_LINK}
              target="_blank"
              rel="noreferrer"
              className="text-sm font-medium text-foreground hover:text-accent inline-flex items-center gap-1"
            >
              Livewire Markets <ExternalLink className="w-3 h-3" />
            </a>
          </div>
          <a
            href={YOUTUBE_LINK}
            target="_blank"
            rel="noreferrer"
            className="text-[11px] tracking-wide text-foreground/60 hover:text-accent inline-flex items-center gap-1"
          >
            Open on YouTube <ArrowUpRight className="w-3 h-3" />
          </a>
        </div>
        <div className="grid grid-cols-3 gap-2">
          <StatBlock label="Channel reach" value="62.8k" sub="Subscribers" />
          <StatBlock label="Likes"          value="186"   sub="On the episode" />
          <StatBlock label="Source"         value="Lenos" sub="YouTube analytics" />
        </div>
      </TabsContent>

      {/* ── LinkedIn ── */}
      <TabsContent value="linkedin" className="space-y-4 mt-4">
        <a
          href={LINKEDIN_LINK}
          target="_blank"
          rel="noreferrer"
          className="block rounded overflow-hidden border border-white/10 bg-white/5 hover:bg-white/8 transition-colors p-5"
        >
          <div className="flex items-center gap-2 mb-2">
            <Linkedin className="w-4 h-4 text-accent" />
            <span className="text-[10px] tracking-wide text-foreground/55">FSI on LinkedIn — Mar 16, 2026</span>
          </div>
          <p className="text-sm text-foreground leading-snug mb-2">
            FOMO is beating fundamentals — high-quality companies are being overlooked amid the AI boom and a resurgence in cyclical stocks. In our latest update, we explore the reasons why and the opportunities these trends are creating.
          </p>
          <span className="text-[11px] text-accent inline-flex items-center gap-1">
            Open post <ExternalLink className="w-3 h-3" />
          </span>
        </a>

        <div className="grid grid-cols-3 gap-2">
          <StatBlock label="Reactions"    value="33" sub="Total likes" />
          <StatBlock label="Client / prospect" value={String(clientProspectCount)} sub="External finance peers" />
          <StatBlock label="Internal"     value={String(internalCount)} sub="FSI ecosystem" />
        </div>

        <div>
          <div className="flex items-center gap-2 mb-2">
            <ThumbsUp className="w-3.5 h-3.5 text-accent" />
            <h4 className="text-xs font-medium text-foreground tracking-wide">Who reacted</h4>
          </div>
          <div className="flex flex-wrap items-center gap-x-4 gap-y-1 mb-3 text-[10px] text-foreground/55">
            <span className="inline-flex items-center gap-1.5">
              <span className="w-1.5 h-1.5 rounded-full bg-accent" /> Client / prospect ({clientProspectCount})
            </span>
            <span className="inline-flex items-center gap-1.5">
              <span className="w-1.5 h-1.5 rounded-full bg-foreground/40" /> Internal FSI ({internalCount})
            </span>
            <span className="inline-flex items-center gap-1.5">
              <span className="w-1.5 h-1.5 rounded-full bg-foreground/20" /> Other ({otherCount})
            </span>
          </div>
          <ul className="rounded border border-white/10 bg-white/5 px-4 py-1 max-h-[420px] overflow-y-auto">
            {ordered.map((r) => (
              <ReactionRow key={r.name} r={r} />
            ))}
          </ul>
        </div>
      </TabsContent>

      {/* ── Website ── */}
      <TabsContent value="website" className="mt-4">
        <div className="rounded border border-white/10 bg-white/5 px-6 py-12 text-center">
          <Globe className="w-6 h-6 text-foreground/40 mx-auto mb-3" />
          <div className="text-sm text-foreground/70 font-medium mb-1">Website data — coming</div>
          <div className="text-xs text-foreground/50">
            Reporting-season landing page traffic and engagement to be added.
          </div>
        </div>
        <div className="grid grid-cols-3 gap-2 mt-4">
          <StatBlock label="Page views"  value="—"   sub="Awaiting data" />
          <StatBlock label="Engagement"  value="—"   sub="Avg time / scroll" />
          <StatBlock label="Conversions" value="—"   sub="Form / fund-page" />
        </div>
      </TabsContent>
    </Tabs>
  );
}
