import { Link } from "react-router";
import { IMAGES } from "../components/images";

const stats = [
  { num: "850+", label: "Sessions" },
  { num: "4,400", label: "Musicians" },
  { num: "375+", label: "Screenings" },
  { num: "450", label: "Brand Activations" },
  { num: "6", label: "LinkedIn Articles Published" },
  { num: "1", label: "Book Signing" },
];

const quotes = [
  { text: "AI doesn't replace creativity — it reveals who never had it in the first place.", attr: "— Keynote, Tech & AI Track", bg: "#12674A" },
  { text: "The best brand activations at SXSW weren't selling anything. They were teaching something.", attr: "— Brand Strategist, Overheard at Rainey St.", bg: "#F97C3C" },
  { text: "We've moved from 'should we use AI?' to 'how do we govern what we've already deployed?'", attr: "— Panel on AI Governance", bg: "#0A0A0A" },
];

const timeline = [
  { title: "Workshop", sub: "Artistic Disruption for Business Innovation", desc: "A hands-on session exploring how surrealist, situationist, and futurist methodologies unlock innovation." },
  { title: "Braindate", sub: "Why Your AI Strategy Needs an Artist", desc: "A structured roundtable conversation about the role of creative thinking in enterprise AI strategy." },
  { title: "Book Signing", sub: "Gamification for Product Excellence", desc: "Signed copies and conversations about applying game mechanics to product adoption challenges." },
  { title: "LinkedIn Series", sub: "6-Part SXSW Coverage", desc: "Daily dispatches covering trends, sessions, and insights from the ground in Austin." },
];

const navCards = [
  { title: "Trend Report", desc: "Signals and patterns across 850+ sessions", to: "/trends" },
  { title: "Session Library", desc: "Searchable archive of every session I attended", to: "/sessions" },
  { title: "Workshop Recap", desc: "Artistic Disruption for Business Innovation", to: "/workshop" },
  { title: "Roundtable Recap", desc: "Why Your AI Strategy Needs an Artist", to: "/roundtable" },
  { title: "Photo Journal", desc: "Visual field notes from 7 days in Austin", to: "/photos" },
];

export function HomePage() {
  return (
    <div>
      {/* Hero */}
      <section style={{ backgroundColor: "#0A0A0A", minHeight: "80vh" }} className="relative flex items-center overflow-hidden">
        <div className="max-w-[1200px] mx-auto px-6 py-20 flex flex-col md:flex-row items-center gap-12 w-full relative z-10">
          <div className="flex-1">
            <h1 className="text-white mb-4" style={{ fontSize: "clamp(36px, 5vw, 64px)", fontWeight: 900, lineHeight: 1.1 }}>
              SXSW 2026: All Together Now
            </h1>
            <p style={{ color: "#6B6B6B", fontSize: "18px" }} className="mb-6">
              March 12–18 | Austin, TX | Innovation &middot; Music &middot; Film & TV
            </p>
            <p className="text-white" style={{ fontSize: "18px", maxWidth: "600px", lineHeight: 1.7 }}>
              Seven days of collisions between technologists, artists, and builders revealed a singular truth: the future belongs to those who can hold complexity without collapsing it. Here's what that looked like on the ground.
            </p>
          </div>
          <div className="shrink-0">
            <img src={IMAGES.hero} alt="SXSW Austin" className="object-cover rounded-lg" style={{ width: "400px", height: "500px" }} />
          </div>
        </div>
        <div className="absolute bottom-0 left-0 right-0 h-32" style={{ background: "linear-gradient(to bottom, transparent, #F7F5F0)" }} />
      </section>

      {/* By the Numbers */}
      <section style={{ backgroundColor: "#F7F5F0" }} className="py-20">
        <div className="max-w-[1200px] mx-auto px-6">
          <h2 style={{ fontSize: "32px", fontWeight: 700, color: "#1A1A1A" }} className="mb-10">By the Numbers</h2>
          <div className="grid grid-cols-2 md:grid-cols-3 lg:grid-cols-6 gap-6">
            {stats.map((s) => (
              <div key={s.label} className="bg-white rounded-lg shadow-sm p-6" style={{ borderTop: "3px solid #12674A", borderRadius: "8px" }}>
                <p style={{ fontSize: "48px", fontWeight: 700, color: "#12674A", lineHeight: 1.1 }}>{s.num}</p>
                <p style={{ fontSize: "14px", color: "#6B6B6B" }} className="mt-2">{s.label}</p>
              </div>
            ))}
          </div>
        </div>
      </section>

      {/* Pull Quotes */}
      <section style={{ backgroundColor: "#F7F5F0" }} className="pb-20">
        <div className="max-w-[1200px] mx-auto px-6">
          <h2 style={{ fontSize: "32px", fontWeight: 700, color: "#1A1A1A" }} className="mb-10">Signals Worth Repeating</h2>
          <div className="grid md:grid-cols-3 gap-6">
            {quotes.map((q, i) => (
              <div key={i} className="rounded-lg p-8 relative overflow-hidden" style={{ backgroundColor: q.bg, borderRadius: "8px" }}>
                <span className="absolute top-2 left-4 text-white/30 select-none" style={{ fontSize: "72px", fontWeight: 900, lineHeight: 1 }}>&ldquo;</span>
                <p className="text-white relative z-10 mt-10 mb-6" style={{ fontSize: "20px", fontStyle: "italic", lineHeight: 1.6 }}>{q.text}</p>
                <hr className="border-white/30 mb-3" />
                <p className="text-white/80" style={{ fontSize: "14px" }}>{q.attr}</p>
              </div>
            ))}
          </div>
        </div>
      </section>

      {/* My SXSW Footprint */}
      <section style={{ backgroundColor: "#F7F5F0" }} className="pb-20">
        <div className="max-w-[1200px] mx-auto px-6">
          <h2 style={{ fontSize: "32px", fontWeight: 700, color: "#1A1A1A" }} className="mb-12">What I Did at SXSW</h2>
          <div className="relative flex flex-col md:flex-row items-start justify-between gap-8">
            <div className="hidden md:block absolute top-6 left-6 right-6 h-0.5" style={{ backgroundColor: "#12674A" }} />
            {timeline.map((t, i) => (
              <div key={i} className="flex-1 relative z-10 cursor-pointer group">
                <div className="w-12 h-12 rounded-full flex items-center justify-center text-white mb-4 group-hover:scale-110 transition-transform" style={{ backgroundColor: "#12674A", fontSize: "16px", fontWeight: 700 }}>
                  {i + 1}
                </div>
                <p style={{ fontSize: "16px", fontWeight: 700, color: "#1A1A1A" }}>{t.title}</p>
                <p style={{ fontSize: "14px", color: "#6B6B6B" }} className="mb-2">{t.sub}</p>
                <p style={{ fontSize: "14px", color: "#1A1A1A", lineHeight: 1.6 }}>{t.desc}</p>
              </div>
            ))}
          </div>
        </div>
      </section>

      {/* Go Deeper Navigation */}
      <section style={{ backgroundColor: "#0A0A0A" }} className="py-20">
        <div className="max-w-[1200px] mx-auto px-6">
          <h2 className="text-white mb-10" style={{ fontSize: "24px", fontWeight: 700 }}>Go Deeper</h2>
          <div className="grid md:grid-cols-5 gap-4">
            {navCards.map((c) => (
              <Link key={c.to} to={c.to} className="block p-6 rounded-lg hover:shadow-lg transition-shadow" style={{ backgroundColor: "#1A1A1A", borderLeft: "3px solid #12674A", borderRadius: "8px" }}>
                <p className="text-white mb-2" style={{ fontSize: "18px", fontWeight: 700 }}>{c.title}</p>
                <p style={{ fontSize: "14px", color: "#6B6B6B" }}>{c.desc}</p>
              </Link>
            ))}
          </div>
        </div>
      </section>
    </div>
  );
}
