import { Link } from "react-router";
import { IMAGES } from "../components/images";
import { ArrowRight, ChevronDown, ChevronUp } from "lucide-react";
import { useState, useEffect } from "react";

/* ───────── Real Stats ───────── */
const stats = [
  { number: "850+", label: "Sessions" },
  { number: "4,400", label: "Musicians" },
  { number: "375+", label: "Screenings" },
  { number: "450", label: "Brand Activations" },
  { number: "6", label: "LinkedIn Articles Published" },
  { number: "1", label: "Book Signing" },
];

/* ───────── Real Quotes from Session Recaps ───────── */
/* ───────── SXSW 2026 Color Palette ───────── */
const C = {
  black: "#000000",
  mint: "#A8F5C8",
  pink: "#FFB6D0",
  yellow: "#FFC700",
  lime: "#D4ED37",
  coral: "#F0B898",
  cyan: "#A8E8E8",
  lavender: "#C0A8F0",
  purple: "#7B61FF",
  darkGray: "#1A1A1A",
  gray: "#6B6B6B",
  lightBg: "#F0FFF4",
  border: "#E0E0E0",
};

const heroQuotes = [
  {
    text: "We're entering the era of super companies. Super companies will be the only companies, in my opinion, that survive.",
    speaker: "Greg Shove, CEO of Section AI",
    session: "Lose Your Mind to AI",
    bg: C.black,
  },
  {
    text: "Yes. We're failing at AI. But it's not because the tools aren't good enough. We're failing because we're designing for a system that's already obsolete.",
    speaker: "Ian Beacraft, CEO of Signal and Cipher",
    session: "How to Design a Company That AI Can't Outpace",
    bg: C.purple,
  },
  {
    text: "Are we living through a 1929 moment and don't know it yet?",
    speaker: "Andrew Ross Sorkin",
    session: "A 1929 Warning for the AI Age",
    bg: C.darkGray,
  },
];

const secondaryQuotes = [
  {
    text: "75% of you will be passengers. 25% will be drivers. I think this is default best case. It's not good.",
    speaker: "Greg Shove, CEO of Section AI",
    session: "Lose Your Mind to AI",
    bg: C.darkGray,
  },
  {
    text: "I build these things because I want them to exist.",
    speaker: "Tom Sachs",
    session: "Sympathetic Magic, Plywood, and the Power of Believing",
    bg: C.black,
  },
  {
    text: "Nobody is coming to save you. If you want agency, you have to take action.",
    speaker: "Amy Webb, Founder & CEO of Future Today Institute",
    session: "Convergence Outlook: From Trend Reports to Systems Thinking",
    bg: C.purple,
  },
];

const additionalQuotes = [
  {
    text: "People who understand people always win.",
    speaker: "Rohit Bhargava, Founder of Non-Obvious Company",
    session: "5 Non-Obvious Secrets of Human Connection",
    bg: C.black,
  },
  {
    text: "We are about to witness the highest failure rate for a single cohort of startups in the history of tech.",
    speaker: "Mark Roberge, Former CRO of HubSpot",
    session: "The Science of Scaling",
    bg: C.purple,
  },
  {
    text: "The most underestimated skill in business is the ability to tell a compelling story.",
    speaker: "Serena Williams, Founder of Serena Ventures",
    session: "Health Equity Meets Founder-Led Innovation",
    bg: C.darkGray,
  },
];

/* ───────── My SXSW Footprint ───────── */
const timeline = [
  { title: "Workshop", subtitle: "Artistic Disruption for Business Innovation", desc: "A three-hour executive session deploying Futurist, Surrealist, and Situationist methodologies to unlock innovation that analytical frameworks miss. Sold out at 64 attendees." },
  { title: "Braindate", subtitle: "Why Your AI Strategy Needs an Artist", desc: "A provocation: the missing layer in enterprise AI strategy is not more engineers — it's creative practitioners who can see what data cannot." },
  { title: "Book Signing", subtitle: "Gamification for Product Excellence", desc: "Signed copies and conversations about gamification as an adoption framework, not just engagement." },
  { title: "LinkedIn Series", subtitle: "6-Part SXSW Coverage", desc: "Daily dispatches synthesizing the most important signals from the festival." },
];

/* ───────── Go Deeper Navigation ───────── */
const navCards = [
  { title: "Trend Report", desc: "Signals and patterns across 850+ sessions", path: "/trends" },
  { title: "Session Library", desc: "Searchable archive of every session I attended", path: "/sessions" },
  { title: "Workshop Recap", desc: "Artistic Disruption for Business Innovation", path: "/workshop" },
  { title: "Roundtable Recap", desc: "Why Your AI Strategy Needs an Artist", path: "/roundtable" },
  { title: "Photo Journal", desc: "Visual field notes from 7 days in Austin", path: "/photos" },
];

/* ───────── Festival Overview Theme Nav ───────── */
const overviewThemeNav = [
  { id: "ai-saturation", label: "AI Saturation" },
  { id: "creative-reckoning", label: "Creative Reckoning" },
  { id: "health-track", label: "Health Track" },
  { id: "festival-logistics", label: "Festival Logistics" },
  { id: "film-music-art", label: "Film, Music & Art" },
  { id: "critical-consensus", label: "Critical Consensus" },
  { id: "five-forces", label: "Five Forces" },
];

/* ───────── Quote Card Component ───────── */
function QuoteCard({ text, speaker, session, bg }: { text: string; speaker: string; session: string; bg: string }) {
  return (
    <div className="rounded-lg p-8 relative overflow-hidden" style={{ backgroundColor: bg, borderRadius: 8 }}>
      <span className="absolute top-2 left-4 text-white select-none" style={{ fontSize: 72, opacity: 0.3, lineHeight: 1, fontWeight: 900 }}>&ldquo;</span>
      <p className="text-white relative z-10 mt-10 mb-6" style={{ fontSize: 20, fontStyle: "italic", lineHeight: 1.6 }}>{text}</p>
      <hr className="border-white/30 mb-3" />
      <p className="text-white" style={{ fontSize: 14, fontWeight: 600 }}>{speaker}</p>
      <p className="text-white" style={{ fontSize: 13, opacity: 0.7 }}>{session}</p>
    </div>
  );
}

/* ───────── Inline Pull Quote ───────── */
function InlinePullQuote({ text, speaker, session, color = "#7B61FF" }: { text: string; speaker: string; session: string; color?: string }) {
  return (
    <blockquote className="my-8 pl-6 py-4" style={{ borderLeft: `4px solid ${color}` }}>
      <p style={{ fontSize: 18, fontStyle: "italic", lineHeight: 1.7, color: C.darkGray }}>&ldquo;{text}&rdquo;</p>
      <footer className="mt-3">
        <span style={{ fontSize: 14, fontWeight: 600, color }}>{speaker}</span>
        <span style={{ fontSize: 13, color: C.gray }}> &mdash; {session}</span>
      </footer>
    </blockquote>
  );
}

/* ───────── Expandable Section Component ───────── */
function ExpandableSection({ id, title, defaultOpen = false, children }: { id: string; title: string; defaultOpen?: boolean; children: React.ReactNode }) {
  const [open, setOpen] = useState(defaultOpen);

  return (
    <div id={id} className="border-b" style={{ borderColor: C.border }}>
      <button
        onClick={() => setOpen(!open)}
        className="w-full flex items-center justify-between py-6 text-left group cursor-pointer"
      >
        <h3 style={{ fontSize: 24, fontWeight: 700, color: C.darkGray }} className="group-hover:text-[#7B61FF] transition-colors pr-4">{title}</h3>
        <span className="flex-shrink-0" style={{ color: C.mint }}>
          {open ? <ChevronUp size={24} /> : <ChevronDown size={24} />}
        </span>
      </button>
      <div
        className="overflow-hidden transition-all duration-300"
        style={{ maxHeight: open ? "none" : 0, opacity: open ? 1 : 0, paddingBottom: open ? 32 : 0 }}
      >
        {children}
      </div>
    </div>
  );
}

/* ───────── Suggested Media Placeholder ───────── */
function MediaPlaceholder({ type, caption }: { type: "image" | "video"; caption: string }) {
  return (
    <div className="my-8 rounded-lg overflow-hidden" style={{ backgroundColor: "#E8E5DF", border: "1px dashed #C0BDB7" }}>
      <div className="flex items-center justify-center py-16">
        <div className="text-center">
          <p style={{ fontSize: 14, color: C.gray, textTransform: "uppercase", letterSpacing: "0.05em" }}>
            {type === "video" ? "Video Embed Point" : "Image Placement"}
          </p>
          <p style={{ fontSize: 13, color: "#999", marginTop: 4 }}>{caption}</p>
        </div>
      </div>
    </div>
  );
}

/* ───────── Stat Callout ───────── */
function StatCallout({ value, label }: { value: string; label: string }) {
  return (
    <div className="bg-white rounded-lg shadow-sm p-5 text-center" style={{ borderTop: `3px solid ${C.mint}` }}>
      <p style={{ fontSize: 36, fontWeight: 700, color: C.mint, lineHeight: 1 }}>{value}</p>
      <p style={{ fontSize: 13, color: C.gray, marginTop: 4 }}>{label}</p>
    </div>
  );
}

/* ═══════════════════════════════════════════════════════════ */
/*                       HOME PAGE                            */
/* ═══════════════════════════════════════════════════════════ */

export function Home() {
  const [activeTheme, setActiveTheme] = useState("");

  useEffect(() => {
    const observer = new IntersectionObserver(
      (entries) => {
        for (const entry of entries) {
          if (entry.isIntersecting) {
            setActiveTheme(entry.target.id);
          }
        }
      },
      { rootMargin: "-20% 0px -60% 0px" }
    );
    overviewThemeNav.forEach(({ id }) => {
      const el = document.getElementById(id);
      if (el) observer.observe(el);
    });
    return () => observer.disconnect();
  }, []);

  return (
    <div>
      {/* ───────── Hero ───────── */}
      <section style={{ backgroundColor: C.black, minHeight: "80vh" }} className="relative flex items-center overflow-hidden">
        <div className="max-w-[1200px] mx-auto px-6 py-20 flex flex-col lg:flex-row items-center gap-12 w-full relative z-10">
          <div className="flex-1">
            <h1 className="text-white mb-4" style={{ fontSize: "clamp(36px, 5vw, 64px)", fontWeight: 900, lineHeight: 1.1 }}>
              SXSW 2026:<br />All Together Now
            </h1>
            <p style={{ color: C.gray, fontSize: 16 }} className="mb-6">
              March 12–18 | Austin, TX | Innovation · Music · Film &amp; TV
            </p>
            <p className="text-white max-w-xl" style={{ fontSize: 18, lineHeight: 1.7 }}>
              SXSW 2026 was neither a celebration nor a collapse — it was a reckoning. The 40th-anniversary edition arrived at an inflection point: the Austin Convention Center demolished, attendance down 26% from pre-pandemic peaks, longtime leadership purged, and the festival's identity more uncertain than at any point in its history. Yet the programming was substantively stronger than in recent years.
            </p>
          </div>
          <div className="flex-shrink-0">
            <img src={IMAGES.hero} alt="SXSW 2026" className="rounded-lg object-cover" style={{ width: 400, height: 500 }} />
          </div>
        </div>
        <div className="absolute bottom-0 left-0 right-0 h-32" style={{ background: `linear-gradient(to bottom, transparent, ${C.lightBg})` }} />
      </section>

      {/* ───────── By the Numbers ───────── */}
      <section style={{ backgroundColor: C.lightBg }} className="py-20">
        <div className="max-w-[1200px] mx-auto px-6">
          <h2 style={{ fontSize: 32, fontWeight: 700, color: C.darkGray }} className="mb-10">By the Numbers</h2>
          <div className="grid grid-cols-2 md:grid-cols-3 lg:grid-cols-6 gap-6">
            {stats.map((s) => (
              <div key={s.label} className="bg-white rounded-lg shadow-sm p-6" style={{ borderTop: `3px solid ${C.mint}`, borderRadius: 8 }}>
                <p style={{ fontSize: 48, fontWeight: 700, color: C.mint, lineHeight: 1.1 }}>{s.number}</p>
                <p style={{ fontSize: 14, color: C.gray }} className="mt-2">{s.label}</p>
              </div>
            ))}
          </div>
        </div>
      </section>

      {/* ───────── Signals Worth Repeating — Row 1 ───────── */}
      <section style={{ backgroundColor: C.lightBg }} className="pb-12">
        <div className="max-w-[1200px] mx-auto px-6">
          <h2 style={{ fontSize: 32, fontWeight: 700, color: C.darkGray }} className="mb-10">Signals Worth Repeating</h2>
          <div className="grid md:grid-cols-3 gap-6">
            {heroQuotes.map((q, i) => (
              <QuoteCard key={i} {...q} />
            ))}
          </div>
        </div>
      </section>

      {/* ───────── Signals Worth Repeating — Row 2 ───────── */}
      <section style={{ backgroundColor: C.lightBg }} className="pb-12">
        <div className="max-w-[1200px] mx-auto px-6">
          <div className="grid md:grid-cols-3 gap-6">
            {secondaryQuotes.map((q, i) => (
              <QuoteCard key={i} {...q} />
            ))}
          </div>
        </div>
      </section>

      {/* ───────── Signals Worth Repeating — Row 3 ───────── */}
      <section style={{ backgroundColor: C.lightBg }} className="pb-20">
        <div className="max-w-[1200px] mx-auto px-6">
          <div className="grid md:grid-cols-3 gap-6">
            {additionalQuotes.map((q, i) => (
              <QuoteCard key={i} {...q} />
            ))}
          </div>
        </div>
      </section>

      {/* ───────── My SXSW Footprint ───────── */}
      <section style={{ backgroundColor: C.lightBg }} className="pb-20">
        <div className="max-w-[1200px] mx-auto px-6">
          <h2 style={{ fontSize: 32, fontWeight: 700, color: C.darkGray }} className="mb-10">What I Did at SXSW</h2>
          <div className="relative flex flex-col md:flex-row items-start justify-between gap-8">
            <div className="hidden md:block absolute top-6 left-6 right-6 h-0.5" style={{ backgroundColor: C.purple }} />
            {timeline.map((t, i) => (
              <div key={i} className="flex-1 relative z-10 cursor-pointer group">
                <div className="w-12 h-12 rounded-full flex items-center justify-center text-white mb-4 group-hover:scale-110 transition-transform" style={{ backgroundColor: C.purple, fontSize: 16, fontWeight: 700 }}>
                  {i + 1}
                </div>
                <p style={{ fontSize: 16, fontWeight: 700, color: C.darkGray }}>{t.title}</p>
                <p style={{ fontSize: 14, color: C.gray }} className="mb-2">{t.subtitle}</p>
                <p style={{ fontSize: 14, color: C.darkGray, lineHeight: 1.6 }}>{t.desc}</p>
              </div>
            ))}
          </div>
        </div>
      </section>

      {/* ═══════════════════════════════════════════════════════ */}
      {/*          FESTIVAL OVERVIEW — RICH INTERACTIVE          */}
      {/* ═══════════════════════════════════════════════════════ */}

      <section style={{ backgroundColor: C.black }} className="py-16">
        <div className="max-w-[1200px] mx-auto px-6">
          <p style={{ color: C.mint, fontSize: 12, textTransform: "uppercase", letterSpacing: "0.1em", fontWeight: 600 }} className="mb-3">Festival Deep Dive</p>
          <h2 className="text-white mb-4" style={{ fontSize: "clamp(28px, 4vw, 48px)", fontWeight: 700, lineHeight: 1.15 }}>A Festival Reckoning: The 40th Anniversary as a Case Study in Creative Destruction</h2>
          <p style={{ color: C.gray, fontSize: 18, lineHeight: 1.7, maxWidth: 800 }}>
            SXSW 2026 arrived at an inflection point: the Austin Convention Center demolished and under $1.6 billion renovation, attendance at ~309,000 (down from 417,400 pre-pandemic), compressed from ten days to seven, scattered across eight hotels and dozens of venues, all three tracks running simultaneously for the first time.
          </p>
          <div className="grid grid-cols-2 md:grid-cols-4 gap-4 mt-10">
            <StatCallout value="~309K" label="Attendees" />
            <StatCallout value="7" label="Days (down from 10)" />
            <StatCallout value="3" label="Concurrent Tracks" />
            <StatCallout value="8" label="Hotel Venues" />
          </div>
        </div>
      </section>

      {/* ───────── Theme Navigation ───────── */}
      <div className="sticky top-14 z-40 border-b" style={{ borderColor: C.border, backgroundColor: C.lightBg }}>
        <div className="max-w-[1200px] mx-auto px-6">
          <div className="flex gap-1 overflow-x-auto py-3 -mx-2 px-2" style={{ scrollbarWidth: "none" }}>
            {overviewThemeNav.map((t) => (
              <button
                key={t.id}
                onClick={(e) => {
                  e.preventDefault();
                  const el = document.getElementById(t.id);
                  if (el) el.scrollIntoView({ behavior: "smooth", block: "start" });
                }}
                className="flex-shrink-0 px-4 py-2 rounded-full text-sm transition-colors whitespace-nowrap cursor-pointer"
                style={{
                  fontSize: 13,
                  fontWeight: 600,
                  backgroundColor: activeTheme === t.id ? "#7B61FF" : "white",
                  color: activeTheme === t.id ? "white" : "#1A1A1A",
                  border: activeTheme === t.id ? "none" : "1px solid #E0E0E0",
                }}
              >
                {t.label}
              </button>
            ))}
          </div>
        </div>
      </div>

      {/* ───────── Overview Content ───────── */}
      <section style={{ backgroundColor: C.lightBg }} className="py-12">
        <div className="max-w-[1200px] mx-auto px-6">

          {/* ── Part 1: AI Saturation ── */}
          <ExpandableSection id="ai-saturation" title="The Dominant Narrative: AI Saturation and the Shift from 'What Can It Do?' to 'What Are We Losing?'" defaultOpen>
            <p style={{ fontSize: 16, lineHeight: 1.8, color: C.darkGray }} className="mb-6">
              Nearly one-third of all PanelPicker proposals touched on artificial intelligence. The renamed Tech &amp; AI track (sponsored by IBM) accounted for roughly a third of the festival's featured talks. But the mood was not hype. SXSW 2026 marked a decisive shift from "what AI can do" to harder, less glamorous questions: who controls it, what it costs, and whether humans are losing something irreplaceable in the trade.
            </p>

            <h4 style={{ fontSize: 18, fontWeight: 700, color: C.darkGray }} className="mb-4">AI Safety &amp; Governance</h4>
            <p style={{ fontSize: 16, lineHeight: 1.8, color: C.darkGray }} className="mb-4">
              Tristan Harris (Center for Humane Technology) and Anthony Aguirre (Future of Life Institute) mapped four specific mechanisms through which humanity could be sidelined: opaque incentives, design flaws, fundamental misalignment between AI goals and human values, and power concentration that sidelines democratic governance.
            </p>

            <InlinePullQuote
              text="Yes. We're failing at AI. But it's not because the tools aren't good enough. We're failing because we're designing for a system that's already obsolete."
              speaker="Ian Beacraft, CEO of Signal and Cipher"
              session="How to Design a Company That AI Can't Outpace"
              color={C.yellow}
            />

            <h4 style={{ fontSize: 18, fontWeight: 700, color: C.darkGray }} className="mb-4">Cognitive Consequences</h4>
            <p style={{ fontSize: 16, lineHeight: 1.8, color: C.darkGray }} className="mb-4">
              Sanjay Sarma (MIT) issued a stark warning — "We are flirting with brain atrophy" — arguing that by delegating increasing cognitive tasks to AI, society risks weakening the very organ that enabled human evolution. His student co-panelist Olivia Joseph provided evidence: ChatGPT had transformed university life from initial excitement to wholesale dependence within weeks. Students were solving programming exercises without writing a single line of code.
            </p>

            <InlinePullQuote
              text="75% of you will be passengers. 25% will be drivers. I think this is default best case. It's not good."
              speaker="Greg Shove, CEO of Section AI"
              session="Lose Your Mind to AI"
            />

            <h4 style={{ fontSize: 18, fontWeight: 700, color: C.darkGray }} className="mb-4">Power Concentration</h4>
            <p style={{ fontSize: 16, lineHeight: 1.8, color: C.darkGray }} className="mb-4">
              Timnit Gebru (DAIR), Karen Hao (author of Empire of AI), and John Palfrey (MacArthur Foundation) dismantled the prevailing dual narrative — AI utopia versus AI apocalypse — calling both framings strategic distractions that serve to concentrate wealth and power within a few corporations. They exposed the invisible human labor behind AI systems and argued the real question is not what AI can do but who defines its purpose.
            </p>

            <InlinePullQuote
              text="I don't want to build one model for everything. I want to build many models for many different kinds of people in the world, because there's no one way of being human."
              speaker="Timnit Gebru, Founder of DAIR Institute"
              session="Reclaiming Our Humanity"
              color={C.yellow}
            />

            <h4 style={{ fontSize: 18, fontWeight: 700, color: C.darkGray }} className="mb-4">The Internet After Search</h4>
            <p style={{ fontSize: 16, lineHeight: 1.8, color: C.darkGray }} className="mb-4">
              Matthew Prince (Cloudflare co-founder and CEO) delivered what multiple commentators called the single most important session for anyone in digital media. His argument: AI fundamentally breaks the internet's core business model. By 2027, bot traffic will exceed human traffic in search. News organizations expect search-referral traffic to decline by 43% over three years, with some anticipating losses exceeding 75%.
            </p>

            <img src={IMAGES.matthewPrince} alt="Matthew Prince, Cloudflare CEO, at SXSW 2026" className="my-8 w-full rounded-lg object-cover" style={{ maxHeight: 480 }} />

            <h4 style={{ fontSize: 18, fontWeight: 700, color: C.darkGray }} className="mb-4">Amy Webb's Funeral for Trends</h4>
            <p style={{ fontSize: 16, lineHeight: 1.8, color: C.darkGray }} className="mb-4">
              Amy Webb delivered the week's most theatrical keynote on March 14. Attendees received tissue paper at the door. The Hilton Grand Ballroom was decorated with candles, flowers, and wreaths. Webb entered in black as funeral music played. Midway through, the University of Texas marching band stormed the stage to herald her replacement framework: the Convergence Outlook.
            </p>
            <p style={{ fontSize: 16, lineHeight: 1.8, color: C.darkGray }} className="mb-4">
              Webb's argument — that isolated "trends" are obsolete when multiple forces converge simultaneously to create irreversible new realities — resonated powerfully at a festival experiencing its own creative destruction. She identified ten convergences including Compute Shock, Emotional Outsourcing, Human Augmentation, Autonomous Care, and Programmable Biology.
            </p>

            <InlinePullQuote
              text="Nobody is coming to save you. If you want agency, you have to take action."
              speaker="Amy Webb, Founder & CEO of Future Today Institute"
              session="Convergence Outlook"
            />

            <div className="my-8 grid md:grid-cols-2 gap-4">
              <img src={IMAGES.amyWebb} alt="Amy Webb delivering the Convergence Outlook keynote at SXSW 2026" className="w-full rounded-lg object-cover" style={{ maxHeight: 400 }} />
              <img src={IMAGES.amyWebbBand} alt="UT Austin marching band storms the stage during Amy Webb's keynote" className="w-full rounded-lg object-cover" style={{ maxHeight: 400 }} />
            </div>
          </ExpandableSection>

          {/* ── Part 2: Creative Reckoning ── */}
          <ExpandableSection id="creative-reckoning" title="The Creative Industries' Reckoning: Human Creativity as Irreplaceable Asset">
            <p style={{ fontSize: 16, lineHeight: 1.8, color: C.darkGray }} className="mb-6">
              SXSW 2026 was defined by a single, urgent question: what happens to human creativity when AI can generate anything? The answer that emerged was not binary but textured — a festival-wide reckoning with the idea that storytelling, empathy, and lived human experience are becoming more valuable precisely because AI threatens to commoditize creative output.
            </p>

            <h4 style={{ fontSize: 18, fontWeight: 700, color: C.darkGray }} className="mb-4">Spielberg Draws the Line</h4>
            <p style={{ fontSize: 16, lineHeight: 1.8, color: C.darkGray }} className="mb-4">
              Steven Spielberg delivered the marquee keynote on March 13. His declaration — "I've never used AI on any of my films yet" — drew the loudest cheers of the week. He followed with a firm boundary: "I am not for AI if it replaces a creative individual." On his writers' rooms: "There's not an empty chair with a laptop in front of it."
            </p>
            <p style={{ fontSize: 16, lineHeight: 1.8, color: C.darkGray }} className="mb-4">
              Spielberg framed his stance as nuanced rather than Luddite. His filmography (A.I. Artificial Intelligence, Minority Report) gave his words additional weight. He championed the "lost art of blocking," revealed he used no storyboards on Schindler's List or Saving Private Ryan, and urged audiences to defend theatrical cinema.
            </p>

            <img src={IMAGES.spielberg} alt="Steven Spielberg keynote conversation at SXSW 2026" className="my-8 w-full rounded-lg object-cover" style={{ maxHeight: 480 }} />

            <InlinePullQuote
              text="I build these things because I want them to exist."
              speaker="Tom Sachs"
              session="Sympathetic Magic, Plywood, and the Power of Believing"
              color={C.yellow}
            />

            <h4 style={{ fontSize: 18, fontWeight: 700, color: C.darkGray }} className="mb-4">Serena Williams: Storytelling Wins Funding Rounds</h4>
            <p style={{ fontSize: 16, lineHeight: 1.8, color: C.darkGray }} className="mb-4">
              Serena Williams appeared at SXSW 2026 in her role as the first Entrepreneur-in-Residence at Reckitt Catalyst, a program supporting underrepresented founders in healthcare. Through Serena Ventures (launched 2014, $111 million inaugural fund, backing more than 14 billion-dollar companies), Williams has seen the pattern repeatedly: founders with excellent products fail to raise money because they can't communicate the vision compellingly.
            </p>

            <InlinePullQuote
              text="The most underestimated skill in business is the ability to tell a compelling story."
              speaker="Serena Williams, Founder of Serena Ventures"
              session="Health Equity Meets Founder-Led Innovation"
            />

            <h4 style={{ fontSize: 18, fontWeight: 700, color: C.darkGray }} className="mb-4">The Chicago Futures Salon Workshop</h4>
            <p style={{ fontSize: 16, lineHeight: 1.8, color: C.darkGray }} className="mb-4">
              In a festival saturated with talk about creativity's importance, exactly one session delivered a structured methodology for deploying avant-garde artistic practice inside organizations: "Beyond Design Thinking: Artistic Disruption for Business Innovation" — a three-hour executive workshop led by Michael Hyzy (VP of Strategy and Innovation at CGI, Forbes Technology Council member) and Michael Marshall (UX research lead at United Airlines' Airshop innovation lab).
            </p>
            <p style={{ fontSize: 16, lineHeight: 1.8, color: C.darkGray }} className="mb-4">
              The workshop sold out at 64 attendees and became one of the most talked-about sessions of the conference. The thesis: analytical frameworks return analytical answers, and your competitors use the same ones. The futures that matter are the ones you can't see from inside your own mental model. Their solution: adapt techniques developed by Futurists, Surrealists, and Situationists — movements that built systematic methods for bypassing habitual cognition — and deploy them inside executive strategy processes.
            </p>
            <p style={{ fontSize: 16, lineHeight: 1.8, color: C.darkGray }} className="mb-4">
              The four proprietary provocations — En L'An 2100™, One Into Another™, Exquisite Futures™, and Pace Layer Drift™ — combined rigorous foresight methodology with artistic techniques to surface collective blind spots. According to HBR/BCG's 2026 survey of 500 firms, companies that embrace strategic foresight see 23% higher profitability and 20% annual returns, while firms that don't face a 37%+ penalty.
            </p>

            <img src="/content/parallax-futures/frames/canon/MVI_5628_frame_0003.jpg" alt="Artistic Disruption for Business Innovation workshop at SXSW 2026" className="my-8 w-full rounded-lg object-cover" style={{ maxHeight: 480 }} />

            <InlinePullQuote
              text="People who understand people always win."
              speaker="Rohit Bhargava, Founder of Non-Obvious Company"
              session="5 Non-Obvious Secrets of Human Connection (most popular non-keynote session at SXSW 2026)"
              color="#12674A"
            />
          </ExpandableSection>

          {/* ── Part 3: Health Track ── */}
          <ExpandableSection id="health-track" title="The Health Track: Healthcare at the Center of the AI Convergence Era">
            <p style={{ fontSize: 16, lineHeight: 1.8, color: C.darkGray }} className="mb-6">
              Healthcare emerged as one of the most substantive programming tracks at SXSW 2026, with sessions spanning AI-powered diagnostics, FDA regulatory upheaval, psychedelic therapy, precision genetics, GLP-1 drug economics, and health equity — all anchored by Eli Lilly's sponsorship and shaped by the broader tension between AI optimism and institutional skepticism.
            </p>

            <h4 style={{ fontSize: 18, fontWeight: 700, color: C.darkGray }} className="mb-4">AI in Healthcare: Between Promise and Regulatory Crisis</h4>
            <p style={{ fontSize: 16, lineHeight: 1.8, color: C.darkGray }} className="mb-4">
              The most revealing session was "The Last Human at the FDA: AI on a Skeleton Crew." DOGE-driven personnel cuts eliminated 20% of FDA jobs, forcing the agency to bet on AI tools to maintain capacity. The FDA named Jeremy Walsh as its first-ever Chief AI Officer, and 70% of the agency now has access to "Elsa," a generative AI tool. The session exposed a broader theme: institutional readiness lags technological capability.
            </p>

            <h4 style={{ fontSize: 18, fontWeight: 700, color: C.darkGray }} className="mb-4">Precision Genetics &amp; Programmable Biology</h4>
            <p style={{ fontSize: 16, lineHeight: 1.8, color: C.darkGray }} className="mb-4">
              UC San Diego researchers presented cutting-edge work: Alexis Komor showcased a base-editing method recently used to create a custom therapy for an infant with a rare, deadly disease. Gene Yeo discussed RNA-targeting precision therapeutics for ALS. Glen Gowers (CEO of Basecamp Research) unveiled the Trillion Gene Atlas — a project collaborating with Anthropic, NVIDIA, Ultima Genomics, and PacBio to expand known evolutionary genetic diversity 100-fold.
            </p>

            <img src={IMAGES.innovation} alt="Precision genetics and programmable biology research" className="my-8 w-full rounded-lg object-cover" style={{ maxHeight: 480 }} />

            <h4 style={{ fontSize: 18, fontWeight: 700, color: C.darkGray }} className="mb-4">GLP-1 Drugs and the Longevity Conversation</h4>
            <p style={{ fontSize: 16, lineHeight: 1.8, color: C.darkGray }} className="mb-4">
              The GLP-1/weight-loss drug revolution was arguably the highest-profile health topic. Mark Cuban (Cost Plus Drugs) and Linda Yaccarino (eMed Population Health) announced a collaboration for supervised GLP-1 distribution. Dr. Jennifer Ashton destigmatized GLP-1s and framed obesity as a "complex, multi-factorial disease."
            </p>

            <InlinePullQuote
              text="Loneliness is now a market. Dependency is the product."
              speaker="Amy Webb, Founder & CEO of Future Today Institute"
              session="Convergence Outlook"
              color={C.yellow}
            />

            <h4 style={{ fontSize: 18, fontWeight: 700, color: C.darkGray }} className="mb-4">Health Equity: Serena Williams and Reckitt Catalyst</h4>
            <p style={{ fontSize: 16, lineHeight: 1.8, color: C.darkGray }} className="mb-4">
              Approximately 1 in 3 Americans have limited or no access to essential health services. Over 100 million face barriers to primary care. Reckitt Catalyst is a five-year commitment supporting 200+ women and underrepresented founders across 15+ countries. The cohort of founders presented solutions tackling real gaps in healthcare access.
            </p>

            <img src={IMAGES.panel} alt="Health equity panel at SXSW 2026" className="my-8 w-full rounded-lg object-cover" style={{ maxHeight: 480 }} />
          </ExpandableSection>

          {/* ── Part 4: Festival Logistics ── */}
          <ExpandableSection id="festival-logistics" title="Festival Logistics and Institutional Questions">
            <h4 style={{ fontSize: 18, fontWeight: 700, color: C.darkGray }} className="mb-4">The Distributed Village Model</h4>
            <p style={{ fontSize: 16, lineHeight: 1.8, color: C.darkGray }} className="mb-4">
              Without the Convention Center — its home since 1993, now a crater scheduled for completion in 2029 — SXSW deployed a "campus model" designed by Amsterdam-based experiential agency WINK. Three color-coded Clubhouses anchored the geography: Innovation at Brazos Hall, Film &amp; TV at 800 Congress, and Music at The Downright hotel near the Red River Cultural District. Sessions spread across the Fairmont Austin, JW Marriott, Hilton Austin, and five more hotels. Congress Avenue was pedestrianized for three blocks, hosting a free-to-public Block Party.
            </p>

            <h4 style={{ fontSize: 18, fontWeight: 700, color: C.darkGray }} className="mb-4">The Badge System as Monetized Barrier</h4>
            <p style={{ fontSize: 16, lineHeight: 1.8, color: C.darkGray }} className="mb-4">
              Only Platinum holders ($1,865+) could access all three tracks. Individual Innovation ($785), Film &amp; TV ($700), and Music ($475) badges lost the secondary access that previously let attendees wander across disciplines — the very cross-pollination that defined SXSW's identity.
            </p>

            <h4 style={{ fontSize: 18, fontWeight: 700, color: C.darkGray }} className="mb-4">Penske's Shadow: Institutional Memory Under Threat</h4>
            <p style={{ fontSize: 16, lineHeight: 1.8, color: C.darkGray }} className="mb-4">
              Penske Media Corporation acquired a controlling 51% stake in August 2023. In April 2025, Penske forced out Hugh Forrest, the 35-year veteran who had shaped SXSW's programming identity since 1989. He was one of 11 senior staff dismissed. The Innovation Awards were canceled outright. Penske's media empire — Variety, Billboard, Rolling Stone, The Hollywood Reporter — all cover SXSW extensively while their parent company controls it.
            </p>

            <InlinePullQuote
              text="Speculation is the twin of innovation."
              speaker="Andrew Ross Sorkin"
              session="A 1929 Warning for the AI Age"
              color={C.yellow}
            />
          </ExpandableSection>

          {/* ── Part 5: Film, Music & Art ── */}
          <ExpandableSection id="film-music-art" title="Film, Music, and Art Programming">
            <h4 style={{ fontSize: 18, fontWeight: 700, color: C.darkGray }} className="mb-4">The Film Slate</h4>
            <p style={{ fontSize: 16, lineHeight: 1.8, color: C.darkGray }} className="mb-4">
              The film slate was exceptionally strong. Boots Riley's I Love Boosters (starring Keke Palmer, Don Cheadle, LaKeith Stanfield, Demi Moore) set an electric tone as the opening night film. Wishful Thinking won the Narrative Feature Jury Award. The AI Doc: Or How I Became an Apocaloptimist became the documentary everyone was discussing — co-director Daniel Kwan coined "apocaloptimism": seeing catastrophic AI risks clearly while maintaining hope that coordinated human action can avert them.
            </p>

            <h4 style={{ fontSize: 18, fontWeight: 700, color: C.darkGray }} className="mb-4">The Music Festival: Attendance Bump Despite Compression</h4>
            <p style={{ fontSize: 16, lineHeight: 1.8, color: C.darkGray }} className="mb-4">
              The music festival gained a night — seven consecutive evenings versus the usual six — producing a 20% bump in music attendance. Billboard's sold-out "The Stage" series at Waterloo Park drew over 20,000 attendees across three nights. Noah Kahan's surprise show at the Fairmont Hotel caused pandemonium. Christina Aguilera and Calvin Harris headlined Coca-Cola's Sips &amp; Sounds at Auditorium Shores.
            </p>
            <p style={{ fontSize: 16, lineHeight: 1.8, color: C.darkGray }} className="mb-4">
              Yet artist compensation remained frozen at $400 for bands and $175 for solo/duo acts — no increase since 2023.
            </p>

            <img src={IMAGES.aiDoc} alt="Daniel Kwan and Tristan Harris discuss The AI Doc at SXSW 2026" className="my-8 w-full rounded-lg object-cover" style={{ maxHeight: 480 }} />

            <h4 style={{ fontSize: 18, fontWeight: 700, color: C.darkGray }} className="mb-4">XR Experience: Record-Breaking Lines</h4>
            <p style={{ fontSize: 16, lineHeight: 1.8, color: C.darkGray }} className="mb-4">
              The XR Experience, now in its 10th anniversary edition, generated the most excitement of any technology at SXSW 2026. The breakout hit was Fabula Rasa: Dead Man Talking by Brazilian studio ARVORE — a VR RPG driven entirely by improvised, AI-generated conversations. Players find themselves locked in a cage in a medieval town, conversing with AI-powered characters who respond dynamically to real-time speech.
            </p>

            <h4 style={{ fontSize: 18, fontWeight: 700, color: C.darkGray }} className="mb-4">The Art Program</h4>
            <p style={{ fontSize: 16, lineHeight: 1.8, color: C.darkGray }} className="mb-4">
              Josh Cochran's commemorative key art depicted a surreal Congress Avenue packed with Easter eggs from SXSW's four-decade history: a cowboy riding a woolly mammoth, the UT Austin marching band, Artemis II astronauts next to a DJ booth, a barking robot dog. The art direction was deliberately analog in a year dominated by AI discourse. The Flatstock poster art exhibition returned with over 50 artists.
            </p>

            <img src={IMAGES.cochranKeyArt} alt="Josh Cochran's 'All Together Now' commemorative key art for SXSW 2026" className="my-8 w-full rounded-lg object-cover" style={{ maxHeight: 480 }} />
          </ExpandableSection>

          {/* ── Part 6: Critical Consensus ── */}
          <ExpandableSection id="critical-consensus" title="What Worked, What Didn't, and Critical Consensus">
            <p style={{ fontSize: 16, lineHeight: 1.8, color: C.darkGray }} className="mb-6">
              The critical consensus split cleanly between content quality and experiential execution. Across outlets, the pattern held: programming was among the strongest in years, but getting to it was the worst it had ever been.
            </p>

            <div className="grid md:grid-cols-2 gap-6 mb-8">
              <div className="bg-white rounded-lg p-6 shadow-sm" style={{ borderLeft: `4px solid ${C.mint}` }}>
                <h5 style={{ fontSize: 16, fontWeight: 700, color: C.mint }} className="mb-3">What Worked</h5>
                <ul style={{ fontSize: 14, lineHeight: 1.8, color: C.darkGray }} className="space-y-2 list-disc pl-4">
                  <li>Sessions on AI's environmental impacts as Innovation track standout</li>
                  <li>Rivian's dominant brand presence — off-roading course on Congress Avenue</li>
                  <li>Brand/marketing and creator economy tracks shift from pure tech to audience engagement</li>
                  <li>Film slate earning critical acclaim (Boots Riley's I Love Boosters at 100% on Rotten Tomatoes)</li>
                  <li>Live podcast tapings (Pelosi, Newsom, Kara Swisher) drew massive crowds</li>
                </ul>
              </div>
              <div className="bg-white rounded-lg p-6 shadow-sm" style={{ borderLeft: `4px solid ${C.yellow}` }}>
                <h5 style={{ fontSize: 16, fontWeight: 700, color: C.yellow }} className="mb-3">What Didn't</h5>
                <ul style={{ fontSize: 14, lineHeight: 1.8, color: C.darkGray }} className="space-y-2 list-disc pl-4">
                  <li>The Fairmont expo's hidden fifth-floor location dominated complaints</li>
                  <li>Reservation system universally criticized — longer lines, standby anxiety</li>
                  <li>Panels that discussed technology without demonstrating it</li>
                  <li>Tesla's Cybercab "was often observed parked or being towed behind a Cybertruck"</li>
                  <li>Distributed venue model created infrastructure gaps and wayfinding confusion</li>
                </ul>
              </div>
            </div>

            <InlinePullQuote
              text="We are about to witness the highest failure rate for a single cohort of startups in the history of tech."
              speaker="Mark Roberge, Former CRO of HubSpot"
              session="The Science of Scaling"
              color={C.yellow}
            />
          </ExpandableSection>

          {/* ── Part 7: Five Forces ── */}
          <ExpandableSection id="five-forces" title="Five Forces Pulling SXSW Apart">
            <p style={{ fontSize: 16, lineHeight: 1.8, color: C.darkGray }} className="mb-6">
              SXSW 2026 was not a failure — it was something more unsettling. The programming was substantively stronger than in recent years, but the structural damage is accumulating. Five forces are pulling SXSW apart simultaneously:
            </p>

            <div className="space-y-4 mb-8">
              {[
                { num: "01", title: "Penske's Corporate Imperialism", desc: "Stripping institutional memory and editorial independence — the forced exit of Hugh Forrest, cancellation of Innovation Awards, and mandate to feature more conservative speakers." },
                { num: "02", title: "The Convention Center's Absence", desc: "Removing the physical and psychological center of gravity — the distributed village model worked functionally but lost the symbolic and organizational anchor." },
                { num: "03", title: "AI's Gravitational Pull", desc: "Homogenizing programming — nearly a third of proposals touched on AI, creating a ceiling effect on other topics' visibility." },
                { num: "04", title: "A Badge System That Monetizes Cross-Pollination", desc: "Requiring a ~$2,000 Platinum badge to experience the full festival, rather than enabling the interdisciplinary collisions that built the brand." },
                { num: "05", title: "Stagnant Artist Compensation", desc: "$400 for bands, $175 for solo/duo acts since 2023 — undermining the grassroots music culture that built the SXSW brand." },
              ].map((f) => (
                <div key={f.num} className="bg-white rounded-lg p-6 shadow-sm flex gap-5" style={{ borderLeft: `4px solid ${C.mint}` }}>
                  <span style={{ fontSize: 28, fontWeight: 700, color: C.mint, flexShrink: 0 }}>{f.num}</span>
                  <div>
                    <p style={{ fontSize: 16, fontWeight: 700, color: C.darkGray }} className="mb-1">{f.title}</p>
                    <p style={{ fontSize: 14, lineHeight: 1.7, color: C.gray }}>{f.desc}</p>
                  </div>
                </div>
              ))}
            </div>

            <div className="rounded-lg p-8 mt-8" style={{ backgroundColor: C.black }}>
              <p className="text-white" style={{ fontSize: 18, lineHeight: 1.8, maxWidth: 800 }}>
                SXSW's 40th anniversary proved that the festival can survive without a convention center. What remains unproven is whether SXSW can survive without the people and philosophy that made it matter. The 2026 edition proved SXSW can be intellectually substantive while structurally diminished. It proved that the conversation between humans and machines has matured into something genuinely important. And it proved that festivals, like institutions, can experience creative destruction — the question is whether what emerges on the other side is a phoenix or an echo.
              </p>
            </div>

            <InlinePullQuote
              text="Do not forgo judgment for efficiency."
              speaker="Sam Jordan"
              session="The Great Flip: Why Every Industry Is Running Backwards"
            />
          </ExpandableSection>

        </div>
      </section>

      {/* ───────── Go Deeper ───────── */}
      <section style={{ backgroundColor: C.black }} className="py-20">
        <div className="max-w-[1200px] mx-auto px-6">
          <h2 className="text-white mb-10" style={{ fontSize: 24, fontWeight: 700 }}>Go Deeper</h2>
          <div className="grid md:grid-cols-3 lg:grid-cols-5 gap-4">
            {navCards.map((c) => (
              <Link key={c.path} to={c.path} className="block rounded-lg p-5 transition-all hover:translate-y-[-2px] hover:shadow-lg" style={{ backgroundColor: C.darkGray, borderRadius: 8, borderLeft: `3px solid ${C.mint}` }}>
                <p className="text-white mb-2 flex items-center gap-2" style={{ fontSize: 18, fontWeight: 700 }}>{c.title} <ArrowRight size={14} /></p>
                <p style={{ fontSize: 14, color: C.gray }}>{c.desc}</p>
              </Link>
            ))}
          </div>
        </div>
      </section>
    </div>
  );
}
