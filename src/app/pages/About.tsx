import { IMAGES } from "../components/images";
import { Linkedin, BookOpen, PenLine } from "lucide-react";

const credentials = [
  "Forbes Technology Council",
  "Roosevelt University Board, AI Advisory",
  "MBA, University of Illinois Gies",
  "Former pipefitter and general contractor",
];

export function About() {
  return (
    <div>
      {/* HERO / BIO */}
      <section style={{ backgroundColor: "#F7F5F0" }} className="py-20">
        <div className="max-w-[1200px] mx-auto px-6 flex flex-col lg:flex-row gap-12 items-start">
          <img src={IMAGES.headshot} alt="Headshot" className="rounded-lg object-cover flex-shrink-0" style={{ width: 400, maxWidth: "100%", height: 500, borderRadius: 8 }} />
          <div className="flex-1">
            <h1 style={{ fontSize: 40, fontWeight: 700, color: "#1A1A1A" }} className="mb-2">Mike Hyzy</h1>
            <p style={{ fontSize: 18, color: "#6B6B6B" }} className="mb-6">VP of AI Strategy & Product Development</p>
            <p style={{ fontSize: 16, color: "#1A1A1A", lineHeight: 1.8 }} className="mb-4">
              I build AI strategies that actually get adopted. My background is unusual—I started as a pipefitter and general contractor before earning an MBA and moving into technology leadership. That blue-collar foundation shapes everything about how I approach innovation: practically, with impatience for theory that doesn't survive contact with reality.
            </p>
            <p style={{ fontSize: 16, color: "#1A1A1A", lineHeight: 1.8 }} className="mb-4">
              Today I lead AI strategy and product development for a Fortune 500 company, serve on advisory boards, write for Forbes, and speak at conferences about the intersection of behavioral science, artistic thinking, and technology adoption.
            </p>
            <p style={{ fontSize: 16, color: "#1A1A1A", lineHeight: 1.8 }} className="mb-4">
              My book, Gamification for Product Excellence, has been translated into seven languages and adopted as required reading in MBA programs at three universities.
            </p>
            <p style={{ fontSize: 16, color: "#1A1A1A", lineHeight: 1.8 }} className="mb-6">
              At SXSW 2026, I led a workshop on artistic disruption, facilitated a Braindate on AI strategy, signed books, and published a 6-part LinkedIn series documenting the experience in real time.
            </p>
            <div className="flex gap-3 flex-wrap">
              {[
                { icon: <Linkedin size={14} />, label: "LinkedIn" },
                { icon: <PenLine size={14} />, label: "Forbes" },
                { icon: <BookOpen size={14} />, label: "Book" },
              ].map((l) => (
                <a key={l.label} href="#" className="flex items-center gap-2 px-4 py-2 rounded hover:bg-[#12674A]/10 transition-colors" style={{ color: "#12674A", fontSize: 14, border: "1px solid #12674A", borderRadius: 4 }}>
                  {l.icon} {l.label}
                </a>
              ))}
            </div>
          </div>
        </div>
      </section>

      {/* CREDENTIALS */}
      <section style={{ backgroundColor: "#0A0A0A" }} className="py-6">
        <div className="max-w-[1200px] mx-auto px-6 flex flex-wrap items-center justify-center gap-x-0">
          {credentials.map((c, i) => (
            <span key={c} className="flex items-center">
              <span className="text-white px-4 py-2" style={{ fontSize: 14 }}>{c}</span>
              {i < credentials.length - 1 && <span style={{ color: "#4A4A4A" }}>|</span>}
            </span>
          ))}
        </div>
      </section>

      {/* CONTACT */}
      <section style={{ backgroundColor: "#F7F5F0" }} className="py-20">
        <div className="max-w-[600px] mx-auto px-6 text-center">
          <h2 style={{ fontSize: 28, fontWeight: 700, color: "#1A1A1A" }} className="mb-4">Get in Touch</h2>
          <p style={{ fontSize: 16, color: "#6B6B6B" }} className="mb-8">
            For speaking engagements, workshops, or consulting inquiries
          </p>
          <div className="flex justify-center gap-4">
            <button className="text-white px-8 py-3 rounded-lg transition-opacity hover:opacity-90" style={{ backgroundColor: "#12674A", fontSize: 16, borderRadius: 8 }}>
              Email
            </button>
            <button className="px-8 py-3 rounded-lg transition-colors hover:bg-[#12674A] hover:text-white" style={{ color: "#12674A", fontSize: 16, border: "1px solid #12674A", borderRadius: 8 }}>
              LinkedIn
            </button>
          </div>
        </div>
      </section>
    </div>
  );
}