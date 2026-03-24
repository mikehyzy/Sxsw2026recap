import { Link } from "react-router";
import { ImageWithFallback } from "./figma/ImageWithFallback";
import { ArrowRight } from "lucide-react";

const stats = [
  { number: "850+", label: "Sessions" },
  { number: "4,400", label: "Musicians" },
  { number: "375+", label: "Screenings" },
  { number: "450", label: "Brand Activations" },
  { number: "6", label: "LinkedIn Articles Published" },
  { number: "1", label: "Book Signing" },
];

const quotes = [
  { text: "AI without artistic thinking is just automation with better PR. The companies that win will be the ones that pair engineers with artists.", attribution: "— Keynote reflection, Tech & AI track", bg: "#12674A" },
  { text: "We've moved past the question of whether AI will replace jobs. The real question is whether organizations can redesign fast enough to keep up.", attribution: "— Featured session, Brand & Marketing track", bg: "#F97C3C" },
  { text: "SXSW proved that the future of innovation isn't in Silicon Valley — it's in the collision spaces where disciplines meet.", attribution: "— Braindate conversation", bg: "#0A0A0A" },
];

const timeline = [
  { title: "Workshop", subtitle: "Artistic Disruption for Business Innovation", desc: "A hands-on session exploring how surrealist and situationist methodologies can unlock business innovation." },
  { title: "Braindate", subtitle: "Why Your AI Strategy Needs an Artist", desc: "A provocative conversation about the missing creative layer in enterprise AI strategy." },
  { title: "Book Signing", subtitle: "Gamification for Product Excellence", desc: "Signed copies and conversations about gamification as an adoption framework, not just engagement." },
  { title: "LinkedIn Series", subtitle: "6-Part SXSW Coverage", desc: "Daily dispatches synthesizing the most important signals from the festival." },
];

const navCards = [
  { title: "Trend Report", desc: "Signals and patterns across 850+ sessions", path: "/trends" },
  { title: "Session Library", desc: "Searchable archive of every session I attended", path: "/sessions" },
  { title: "Workshop Recap", desc: "Artistic Disruption for Business Innovation", path: "/workshop" },
  { title: "Roundtable Recap", desc: "Why Your AI Strategy Needs an Artist", path: "/roundtable" },
  { title: "Photo Journal", desc: "Visual field notes from 7 days in Austin", path: "/photos" },
];

export function HomePage() {
  return (
    <div>
      {/* Hero */}
      <section style={{ backgroundColor: "#0A0A0A", minHeight: "80vh" }} className="relative flex items-center">
        <div className="max-w-[1200px] mx-auto px-6 w-full flex flex-col lg:flex-row items-center gap-12 py-20">
          <div className="flex-1">
            <h1 className="text-white mb-4" style={{ fontSize: "clamp(36px, 5vw, 64px)", fontWeight: 900, lineHeight: 1.1 }}>SXSW 2026: All Together Now</h1>
            <p style={{ color: "#6B6B6B", fontSize: 18 }} className="mb-6">March 12–18 | Austin, TX | Innovation · Music · Film & TV</p>
            <p className="text-white" style={{ fontSize: 18, lineHeight: 1.7, maxWidth: 600 }}>
              Seven days of collisions between technologists, artists, and strategists revealed a festival in transformation. This is a practitioner's field guide to what mattered — and what it means for the rest of 2026.
            </p>
          </div>
          <div className="flex-shrink-0">
            <ImageWithFallback
              src="https://images.unsplash.com/photo-1760386129113-6e20e3b59731?crop=entropy&cs=tinysrgb&fit=max&fm=jpg&ixid=M3w3Nzg4Nzd8MHwxfHNlYXJjaHwxfHxTWFNXJTIwY29uZmVyZW5jZSUyMEF1c3RpbiUyMFRleGFzfGVufDF8fHx8MTc3NDM2MDMyMnww&ixlib=rb-4.1.0&q=80&w=1080&utm_source=figma&utm_medium=referral"
              alt="SXSW 2026"
              className="w-[400px] h-[500px] object-cover rounded-lg max-w-full"
            />
          </div>
        </div>
        <div className="absolute bottom-0 left-0 right-0 h-32" style={{ background: "linear-gradient(to bottom, #0A0A0A, #F7F5F0)" }} />
      </section>

      {/* By the Numbers */}
      <section style={{ backgroundColor: "#F7F5F0" }} className="py-20">
        <div className="max-w-[1200px] mx-auto px-6">
          <h2 style={{ fontSize: 32, fontWeight: 700, color: "#1A1A1A" }} className="mb-10">By the Numbers</h2>
          <div className="grid grid-cols-2 md:grid-cols-3 lg:grid-cols-6 gap-6">
            {stats.map((s) => (
              <div key={s.label} className="bg-white rounded-lg shadow-sm p-6" style={{ borderTop: "3px solid #12674A", borderRadius: 8 }}>
                <p style={{ fontSize: 48, fontWeight: 700, color: "#12674A", lineHeight: 1 }} className="mb-2">{s.number}</p>
                <p style={{ fontSize: 14, color: "#6B6B6B" }}>{s.label}</p>
              </div>
            ))}
          </div>
        </div>
      </section>

      {/* Pull Quotes */}
      <section style={{ backgroundColor: "#F7F5F0" }} className="pb-20">
        <div className="max-w-[1200px] mx-auto px-6">
          <h2 style={{ fontSize: 32, fontWeight: 700, color: "#1A1A1A" }} className="mb-10">Signals Worth Repeating</h2>
          <div className="grid md:grid-cols-3 gap-6">
            {quotes.map((q, i) => (
              <div key={i} className="rounded-lg p-8 relative overflow-hidden" style={{ backgroundColor: q.bg, borderRadius: 8 }}>
                <span className="absolute top-4 left-6 text-white select-none" style={{ fontSize: 72, opacity: 0.3, lineHeight: 1, fontWeight: 700 }}>"</span>
                <p className="text-white relative z-10 mt-10 mb-6" style={{ fontSize: 20, fontStyle: "italic", lineHeight: 1.6 }}>{q.text}</p>
                <hr className="border-white/30 mb-3" />
                <p className="text-white" style={{ fontSize: 14, opacity: 0.8 }}>{q.attribution}</p>
              </div>
            ))}
          </div>
        </div>
      </section>

      {/* My SXSW Footprint */}
      <section style={{ backgroundColor: "#F7F5F0" }} className="pb-20">
        <div className="max-w-[1200px] mx-auto px-6">
          <h2 style={{ fontSize: 32, fontWeight: 700, color: "#1A1A1A" }} className="mb-12">What I Did at SXSW</h2>
          <div className="relative">
            <div className="hidden md:block absolute top-6 left-6 right-6 h-0.5" style={{ backgroundColor: "#12674A" }} />
            <div className="grid md:grid-cols-4 gap-8">
              {timeline.map((t, i) => (
                <div key={i} className="relative cursor-pointer group">
                  <div className="w-12 h-12 rounded-full flex items-center justify-center text-white mb-4 relative z-10 group-hover:scale-110 transition-transform" style={{ backgroundColor: "#12674A", fontSize: 14, fontWeight: 700 }}>
                    {String(i + 1).padStart(2, "0")}
                  </div>
                  <p style={{ fontSize: 16, fontWeight: 700, color: "#1A1A1A" }} className="mb-1">{t.title}</p>
                  <p style={{ fontSize: 14, color: "#6B6B6B" }} className="mb-2">{t.subtitle}</p>
                  <p style={{ fontSize: 14, color: "#6B6B6B", lineHeight: 1.6 }}>{t.desc}</p>
                </div>
              ))}
            </div>
          </div>
        </div>
      </section>

      {/* Go Deeper */}
      <section style={{ backgroundColor: "#0A0A0A" }} className="py-20">
        <div className="max-w-[1200px] mx-auto px-6">
          <h2 className="text-white mb-10" style={{ fontSize: 24, fontWeight: 700 }}>Go Deeper</h2>
          <div className="grid md:grid-cols-5 gap-4">
            {navCards.map((c) => (
              <Link key={c.path} to={c.path} className="block rounded-lg p-5 hover:translate-y-[-2px] transition-transform" style={{ backgroundColor: "#1A1A1A", borderLeft: "3px solid #12674A", borderRadius: 8 }}>
                <p className="text-white mb-2 flex items-center gap-2" style={{ fontSize: 18, fontWeight: 700 }}>{c.title} <ArrowRight size={14} /></p>
                <p style={{ fontSize: 14, color: "#6B6B6B" }}>{c.desc}</p>
              </Link>
            ))}
          </div>
        </div>
      </section>
    </div>
  );
}
