import { Link } from "react-router";
import { IMAGES } from "../components/images";

const stats = [
  { number: "850+", label: "Sessions" },
  { number: "4,400", label: "Musicians" },
  { number: "375+", label: "Screenings" },
  { number: "450", label: "Brand Activations" },
  { number: "6", label: "LinkedIn Articles Published" },
  { number: "1", label: "Book Signing" },
];

const quotes = [
  { text: "The most interesting things at SXSW happened in the hallways, not the keynote stages. The future is being built in conversations, not presentations.", attribution: "— Field Notes, Day 3", bg: "#12674A" },
  { text: "Every company claims to be AI-first now, but the ones winning are artist-first. Creativity isn't a nice-to-have—it's the adoption layer.", attribution: "— Braindate Discussion", bg: "#F97C3C" },
  { text: "We've moved from 'Will AI replace us?' to 'How do we work alongside it?' That shift happened faster than anyone predicted.", attribution: "— Workshop Participant", bg: "#0A0A0A" },
];

const timeline = [
  { title: "Workshop", subtitle: "Artistic Disruption for Business Innovation", desc: "Led a hands-on session exploring how surrealist and situationist methods unlock innovation that conventional frameworks miss." },
  { title: "Braindate", subtitle: "Why Your AI Strategy Needs an Artist", desc: "Facilitated a roundtable conversation on the critical role of artistic thinking in AI deployment strategy." },
  { title: "Book Signing", subtitle: "Gamification for Product Excellence", desc: "Signed copies and discussed how gamification drives adoption, not just engagement, in enterprise products." },
  { title: "LinkedIn Series", subtitle: "6-Part SXSW Coverage", desc: "Published six dispatches covering trends, tensions, and takeaways from seven days in Austin." },
];

const navCards = [
  { title: "Trend Report", desc: "Signals and patterns across 850+ sessions", path: "/trends" },
  { title: "Session Library", desc: "Searchable archive of every session I attended", path: "/sessions" },
  { title: "Workshop Recap", desc: "Artistic Disruption for Business Innovation", path: "/workshop" },
  { title: "Roundtable Recap", desc: "Why Your AI Strategy Needs an Artist", path: "/roundtable" },
  { title: "Photo Journal", desc: "Visual field notes from 7 days in Austin", path: "/photos" },
];

export function Home() {
  return (
    <div>
      {/* HERO */}
      <section style={{ backgroundColor: "#0A0A0A", minHeight: "80vh" }} className="relative flex items-center overflow-hidden">
        <div className="max-w-[1200px] mx-auto px-6 py-20 flex flex-col lg:flex-row items-center gap-12 w-full relative z-10">
          <div className="flex-1">
            <h1 className="text-white mb-4" style={{ fontSize: "clamp(36px, 5vw, 64px)", fontWeight: 900, lineHeight: 1.1 }}>
              SXSW 2026:<br />All Together Now
            </h1>
            <p style={{ color: "#6B6B6B", fontSize: 16 }} className="mb-6">
              March 12–18 | Austin, TX | Innovation · Music · Film & TV
            </p>
            <p className="text-white max-w-xl" style={{ fontSize: 18, lineHeight: 1.7 }}>
              Seven days of sessions, conversations, and serendipity revealed a clear signal: the future belongs to those who can bridge disciplines. This is a practitioner's field guide to what mattered most.
            </p>
          </div>
          <div className="flex-shrink-0">
            <img src={IMAGES.hero} alt="SXSW Conference" className="rounded-lg object-cover" style={{ width: 400, height: 500 }} />
          </div>
        </div>
        <div className="absolute bottom-0 left-0 right-0 h-32" style={{ background: "linear-gradient(to bottom, transparent, #F7F5F0)" }} />
      </section>

      {/* BY THE NUMBERS */}
      <section style={{ backgroundColor: "#F7F5F0" }} className="py-20">
        <div className="max-w-[1200px] mx-auto px-6">
          <h2 style={{ fontSize: 32, fontWeight: 700, color: "#1A1A1A" }} className="mb-10">By the Numbers</h2>
          <div className="grid grid-cols-2 md:grid-cols-3 lg:grid-cols-6 gap-6">
            {stats.map((s) => (
              <div key={s.label} className="bg-white rounded-lg shadow-sm p-6" style={{ borderTop: "3px solid #12674A", borderRadius: 8 }}>
                <p style={{ fontSize: 48, fontWeight: 700, color: "#12674A", lineHeight: 1.1 }}>{s.number}</p>
                <p style={{ fontSize: 14, color: "#6B6B6B" }} className="mt-2">{s.label}</p>
              </div>
            ))}
          </div>
        </div>
      </section>

      {/* PULL QUOTES */}
      <section style={{ backgroundColor: "#F7F5F0" }} className="pb-20">
        <div className="max-w-[1200px] mx-auto px-6">
          <h2 style={{ fontSize: 32, fontWeight: 700, color: "#1A1A1A" }} className="mb-10">Signals Worth Repeating</h2>
          <div className="grid md:grid-cols-3 gap-6">
            {quotes.map((q, i) => (
              <div key={i} className="rounded-lg p-8 relative overflow-hidden" style={{ backgroundColor: q.bg, borderRadius: 8 }}>
                <span className="absolute top-4 left-4 text-white select-none" style={{ fontSize: 72, opacity: 0.3, lineHeight: 1, fontFamily: "Georgia, serif" }}>"</span>
                <p className="text-white relative z-10 mt-10 mb-6" style={{ fontSize: 20, fontStyle: "italic", lineHeight: 1.6 }}>{q.text}</p>
                <hr className="border-white/30 mb-3" />
                <p className="text-white" style={{ fontSize: 14 }}>{q.attribution}</p>
              </div>
            ))}
          </div>
        </div>
      </section>

      {/* TIMELINE */}
      <section style={{ backgroundColor: "#F7F5F0" }} className="pb-20">
        <div className="max-w-[1200px] mx-auto px-6">
          <h2 style={{ fontSize: 32, fontWeight: 700, color: "#1A1A1A" }} className="mb-10">What I Did at SXSW</h2>
          <div className="relative flex flex-col md:flex-row items-start gap-0">
            <div className="hidden md:block absolute top-5 left-0 right-0 h-0.5" style={{ backgroundColor: "#12674A" }} />
            {timeline.map((t, i) => (
              <div key={i} className="flex-1 relative px-4 mb-8 md:mb-0 cursor-pointer group">
                <div className="w-10 h-10 rounded-full flex items-center justify-center mb-4 relative z-10 transition-transform group-hover:scale-110" style={{ backgroundColor: "#12674A" }}>
                  <span className="text-white" style={{ fontSize: 14, fontWeight: 700 }}>{i + 1}</span>
                </div>
                <p style={{ fontSize: 16, fontWeight: 700, color: "#1A1A1A" }}>{t.title}</p>
                <p style={{ fontSize: 14, color: "#12674A", fontWeight: 500 }} className="mb-2">{t.subtitle}</p>
                <p style={{ fontSize: 14, color: "#6B6B6B", lineHeight: 1.6 }}>{t.desc}</p>
              </div>
            ))}
          </div>
        </div>
      </section>

      {/* GO DEEPER */}
      <section style={{ backgroundColor: "#0A0A0A" }} className="py-20">
        <div className="max-w-[1200px] mx-auto px-6">
          <h2 className="text-white mb-10" style={{ fontSize: 24, fontWeight: 700 }}>Go Deeper</h2>
          <div className="grid md:grid-cols-3 lg:grid-cols-5 gap-4">
            {navCards.map((c) => (
              <Link key={c.path} to={c.path} className="block rounded-lg p-5 transition-all hover:translate-y-[-2px] hover:shadow-lg" style={{ backgroundColor: "#1A1A1A", borderRadius: 8, borderLeft: "3px solid #12674A" }}>
                <p className="text-white mb-2" style={{ fontSize: 18, fontWeight: 700 }}>{c.title}</p>
                <p style={{ fontSize: 14, color: "#6B6B6B" }}>{c.desc}</p>
              </Link>
            ))}
          </div>
        </div>
      </section>
    </div>
  );
}