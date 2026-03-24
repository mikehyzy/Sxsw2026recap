import { ImageWithFallback } from "./figma/ImageWithFallback";

const steps = [
  { num: 1, title: "Provocation & Disorientation", desc: "Participants were introduced to surrealist techniques — automatic writing, exquisite corpse, and constraint-based ideation — to break out of habitual thinking patterns. The goal was cognitive defamiliarization: making the familiar strange.", img: "https://images.unsplash.com/photo-1614995008867-32eef7bff38c?crop=entropy&cs=tinysrgb&fit=max&fm=jpg&ixid=M3w3Nzg4Nzd8MHwxfHNlYXJjaHwxfHxjcmVhdGl2ZSUyMHdvcmtzaG9wJTIwd2hpdGVib2FyZCUyMGJyYWluc3Rvcm18ZW58MXx8fHwxNzc0MzYwMzI1fDA&ixlib=rb-4.1.0&q=80&w=1080&utm_source=figma&utm_medium=referral" },
  { num: 2, title: "Situationist Détournement", desc: "Teams took existing business frameworks (OKRs, SWOT, journey maps) and deliberately subverted them — rewriting them as poetry, reversing their logic, or applying them to absurd domains. This revealed hidden assumptions.", img: "https://images.unsplash.com/photo-1761250246894-ee2314939662?crop=entropy&cs=tinysrgb&fit=max&fm=jpg&ixid=M3w3Nzg4Nzd8MHwxfHNlYXJjaHwxfHxjb25mZXJlbmNlJTIwd29ya3Nob3AlMjBjb2xsYWJvcmF0aXZlfGVufDF8fHx8MTc3NDM2MDMyMnww&ixlib=rb-4.1.0&q=80&w=1080&utm_source=figma&utm_medium=referral" },
  { num: 3, title: "Futurist Synthesis", desc: "Using the raw material from the first two phases, participants built 'artifacts from the future' — press releases, product mockups, and org charts from 2030 — grounded in the insights they'd uncovered.", img: "https://images.unsplash.com/photo-1763584106832-55be1bde2961?crop=entropy&cs=tinysrgb&fit=max&fm=jpg&ixid=M3w3Nzg4Nzd8MHwxfHNlYXJjaHwxfHx0ZWNobm9sb2d5JTIwaW5ub3ZhdGlvbiUyMGV4aGliaXR8ZW58MXx8fHwxNzc0MzYwMzI0fDA&ixlib=rb-4.1.0&q=80&w=1080&utm_source=figma&utm_medium=referral" },
  { num: 4, title: "Translation to Strategy", desc: "The final phase bridged art and business. Each team distilled their creative explorations into actionable strategic recommendations, proving that artistic methods can produce rigorous business outcomes." },
];

const quotes = [
  { text: "I've done hundreds of workshops. This is the first time I felt like I was actually thinking differently, not just doing exercises.", attribution: "— Director of Innovation, Fortune 100", bg: "#12674A" },
  { text: "The surrealist techniques broke something loose. Our team hasn't stopped referencing the ideas we generated here.", attribution: "— VP Product, AI Startup", bg: "#F97C3C" },
  { text: "I came in skeptical about 'art in business.' I left understanding that art IS the business advantage we're missing.", attribution: "— Strategy Consultant", bg: "#0A0A0A" },
];

export function WorkshopRecap() {
  return (
    <div>
      {/* Hero */}
      <section style={{ backgroundColor: "#0A0A0A", minHeight: "50vh" }} className="flex items-center">
        <div className="max-w-[1200px] mx-auto px-6 py-20 w-full flex flex-col lg:flex-row items-center gap-12">
          <div className="flex-1">
            <p style={{ color: "#12674A", fontSize: 12, fontWeight: 700, letterSpacing: "0.1em", textTransform: "uppercase" }} className="mb-4">Workshop Recap</p>
            <h1 className="text-white mb-4" style={{ fontSize: "clamp(30px, 4vw, 48px)", fontWeight: 700, lineHeight: 1.15 }}>Artistic Disruption for Business Innovation</h1>
            <p style={{ color: "#6B6B6B", fontSize: 18 }} className="mb-6">Co-led with Michael Marshall | SXSW 2026</p>
            <div className="flex flex-wrap gap-3">
              <span className="px-3 py-1 text-white" style={{ backgroundColor: "#12674A", borderRadius: 4, fontSize: 12, fontWeight: 600 }}>Design</span>
              <span className="px-3 py-1" style={{ border: "1px solid #6B6B6B", color: "#6B6B6B", borderRadius: 4, fontSize: 12, fontWeight: 600 }}>Workshop</span>
              <span className="px-3 py-1" style={{ color: "#6B6B6B", fontSize: 12 }}>March 2026</span>
            </div>
          </div>
          <ImageWithFallback src="https://images.unsplash.com/photo-1762968269894-1d7e1ce8894e?crop=entropy&cs=tinysrgb&fit=max&fm=jpg&ixid=M3w3Nzg4Nzd8MHwxfHNlYXJjaHwxfHxjb25mZXJlbmNlJTIwc3RhZ2UlMjBzcGVha2VyJTIwa2V5bm90ZXxlbnwxfHx8fDE3NzQzNjAzMjN8MA&ixlib=rb-4.1.0&q=80&w=1080&utm_source=figma&utm_medium=referral" alt="Workshop" className="w-[500px] max-w-full h-[350px] object-cover rounded-lg" />
        </div>
      </section>

      {/* Overview */}
      <section style={{ backgroundColor: "#F7F5F0" }} className="py-20">
        <div className="max-w-[1200px] mx-auto px-6 flex flex-col lg:flex-row gap-12">
          <div className="lg:w-[60%]">
            <p style={{ color: "#12674A", fontSize: 12, fontWeight: 700, letterSpacing: "0.1em", textTransform: "uppercase" }} className="mb-4">The Premise</p>
            <p style={{ fontSize: 16, color: "#1A1A1A", lineHeight: 1.8 }} className="mb-4">
              Conventional innovation frameworks — design thinking, lean startup, agile — have become so standardized that they often produce standardized outputs. When every company runs the same workshops with the same post-it notes, breakthrough thinking becomes impossible.
            </p>
            <p style={{ fontSize: 16, color: "#1A1A1A", lineHeight: 1.8 }} className="mb-4">
              This workshop proposed a radical alternative: what if we used artistic methodologies — surrealism, situationism, futurism — as genuine innovation tools? Not as metaphors or icebreakers, but as rigorous frameworks for generating ideas that conventional methods cannot reach.
            </p>
            <p style={{ fontSize: 16, color: "#1A1A1A", lineHeight: 1.8 }}>
              The results were striking. In 90 minutes, participants generated ideas that they described as genuinely new — not variations on existing themes, but authentic departures from their habitual thinking patterns.
            </p>
          </div>
          <div className="lg:w-[40%]">
            <div className="bg-white rounded-lg shadow-sm p-6" style={{ borderRadius: 8 }}>
              <h3 style={{ fontSize: 18, fontWeight: 700, color: "#1A1A1A" }} className="mb-4">Quick Facts</h3>
              {[["Format", "Workshop"], ["Duration", "90 minutes"], ["Participants", "48"], ["Track", "Design"], ["Methods", "Surrealist, Situationist, Futurist"]].map(([k, v]) => (
                <div key={k} className="flex justify-between py-2" style={{ borderBottom: "1px solid #F0EEEA" }}>
                  <span style={{ fontSize: 14, color: "#6B6B6B" }}>{k}</span>
                  <span style={{ fontSize: 14, fontWeight: 600, color: "#1A1A1A" }}>{v}</span>
                </div>
              ))}
            </div>
          </div>
        </div>
      </section>

      {/* Methodology Walkthrough */}
      <section style={{ backgroundColor: "#F7F5F0" }} className="pb-20">
        <div className="max-w-[1200px] mx-auto px-6">
          <h2 style={{ fontSize: 32, fontWeight: 700, color: "#1A1A1A" }} className="mb-12">How the Workshop Worked</h2>
          <div className="space-y-12 relative">
            <div className="hidden md:block absolute left-6 top-6 bottom-6 w-0.5" style={{ backgroundColor: "#12674A" }} />
            {steps.map((s) => (
              <div key={s.num} className="flex gap-8 items-start">
                <div className="w-12 h-12 rounded-full flex-shrink-0 flex items-center justify-center text-white relative z-10" style={{ backgroundColor: "#12674A", fontSize: 16, fontWeight: 700 }}>{s.num}</div>
                <div className="flex-1">
                  <h3 style={{ fontSize: 20, fontWeight: 700, color: "#1A1A1A" }} className="mb-3">{s.title}</h3>
                  <p style={{ fontSize: 16, color: "#1A1A1A", lineHeight: 1.7 }} className="mb-4">{s.desc}</p>
                  {s.img && <ImageWithFallback src={s.img} alt={s.title} className="w-full max-w-[600px] h-[300px] object-cover rounded-lg" />}
                </div>
              </div>
            ))}
          </div>
        </div>
      </section>

      {/* Outcomes */}
      <section style={{ backgroundColor: "#F7F5F0" }} className="pb-20">
        <div className="max-w-[1200px] mx-auto px-6">
          <h2 style={{ fontSize: 32, fontWeight: 700, color: "#1A1A1A" }} className="mb-10">What Emerged</h2>
          <div className="grid md:grid-cols-3 gap-6 mb-12">
            {quotes.map((q, i) => (
              <div key={i} className="rounded-lg p-8 relative overflow-hidden" style={{ backgroundColor: q.bg, borderRadius: 8 }}>
                <span className="absolute top-4 left-6 text-white select-none" style={{ fontSize: 72, opacity: 0.3, lineHeight: 1, fontWeight: 700 }}>"</span>
                <p className="text-white relative z-10 mt-10 mb-6" style={{ fontSize: 20, fontStyle: "italic", lineHeight: 1.6 }}>{q.text}</p>
                <hr className="border-white/30 mb-3" />
                <p className="text-white" style={{ fontSize: 14, opacity: 0.8 }}>{q.attribution}</p>
              </div>
            ))}
          </div>
          <p style={{ fontSize: 16, color: "#1A1A1A", lineHeight: 1.8, maxWidth: 800 }}>
            Across all teams, three patterns emerged: participants consistently reported that the surrealist techniques produced ideas they would never have reached through conventional brainstorming; the situationist détournement phase revealed assumptions they didn't know they were making; and the futurist synthesis phase showed that creative exploration can lead to actionable strategy.
          </p>
        </div>
      </section>

      {/* The Bigger Argument */}
      <section style={{ backgroundColor: "#0A0A0A" }} className="py-20">
        <div className="max-w-[800px] mx-auto px-6 text-center">
          <h2 className="text-white mb-8" style={{ fontSize: 28, fontWeight: 700 }}>What This Proves</h2>
          <p className="text-white mb-6" style={{ fontSize: 18, lineHeight: 1.8 }}>
            The innovation industry has a creativity problem. The tools we use to generate new ideas have themselves become predictable. When every organization uses the same frameworks, competitive advantage disappears.
          </p>
          <p className="text-white mb-6" style={{ fontSize: 18, lineHeight: 1.8 }}>
            Artistic methodologies offer a genuine alternative — not because art is vaguely inspiring, but because artistic disciplines have spent centuries developing rigorous techniques for breaking cognitive patterns and generating genuine novelty.
          </p>
          <p className="text-white" style={{ fontSize: 18, lineHeight: 1.8 }}>
            The workshop at SXSW proved that these techniques transfer. Business professionals, when given the right framework, can use artistic methods to produce ideas that are both genuinely creative and strategically viable.
          </p>
        </div>
      </section>

      {/* CTA */}
      <section style={{ backgroundColor: "#F7F5F0" }} className="py-20">
        <div className="max-w-[1200px] mx-auto px-6 grid md:grid-cols-2 gap-6">
          <a href="/roundtable" className="block bg-white rounded-lg shadow-sm p-8 hover:shadow-md transition-shadow" style={{ borderLeft: "3px solid #12674A", borderRadius: 8 }}>
            <p style={{ fontSize: 18, fontWeight: 700, color: "#1A1A1A" }}>Read the Roundtable Recap →</p>
            <p style={{ fontSize: 14, color: "#6B6B6B" }} className="mt-2">Why Your AI Strategy Needs an Artist as Much as an Engineer</p>
          </a>
          <a href="#" className="block bg-white rounded-lg shadow-sm p-8 hover:shadow-md transition-shadow" style={{ borderLeft: "3px solid #12674A", borderRadius: 8 }}>
            <p style={{ fontSize: 18, fontWeight: 700, color: "#1A1A1A" }}>Book This Workshop →</p>
            <p style={{ fontSize: 14, color: "#6B6B6B" }} className="mt-2">Bring Artistic Disruption to your organization's next offsite or innovation sprint</p>
          </a>
        </div>
      </section>
    </div>
  );
}
