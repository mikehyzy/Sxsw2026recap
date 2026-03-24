import { Link } from "react-router";
import { IMAGES } from "../components/images";

const steps = [
  { title: "Surrealist Warm-Up: Exquisite Corpse for Strategy", desc: "Participants created collaborative strategy documents where each person could only see the previous contributor's last line. The resulting strategies were wild—and surprisingly insightful.", img: IMAGES.workshop },
  { title: "Situationist Drift: Reframing the Problem Space", desc: "Teams physically moved through different spaces, each representing a different stakeholder perspective. Movement changed thinking patterns and surfaced blind spots.", img: IMAGES.collab },
  { title: "Futurist Provocation: Design from 2036", desc: "Working backward from an imagined future state, participants designed products that don't exist yet—then identified which elements could be built today.", img: IMAGES.innovation },
  { title: "Synthesis: Connecting the Artifacts", desc: "Groups mapped connections between outputs from all three exercises, identifying convergence points that none of the individual methods would have surfaced alone.", img: IMAGES.panel },
];

const quotes = [
  { text: "I've done a hundred design thinking workshops. This was the first one that actually surprised me.", attribution: "— Product Director, Fortune 500", bg: "#12674A" },
  { text: "The surrealist exercise broke something loose in how our team thinks about constraints. We're bringing this back to the office.", attribution: "— Innovation Lead, Tech Startup", bg: "#F97C3C" },
  { text: "I came for the novelty. I'm leaving with a completely reframed understanding of our core problem.", attribution: "— UX Researcher", bg: "#0A0A0A" },
];

export function WorkshopRecap() {
  return (
    <div>
      {/* HERO */}
      <section style={{ backgroundColor: "#0A0A0A", minHeight: "50vh" }} className="flex items-center">
        <div className="max-w-[1200px] mx-auto px-6 py-16 flex flex-col lg:flex-row items-center gap-12 w-full">
          <div className="flex-1">
            <p style={{ color: "#12674A", fontSize: 12, fontWeight: 700, letterSpacing: "0.1em", textTransform: "uppercase" }} className="mb-3">Workshop Recap</p>
            <h1 className="text-white mb-4" style={{ fontSize: "clamp(30px, 4vw, 48px)", fontWeight: 700, lineHeight: 1.15 }}>
              Artistic Disruption for Business Innovation
            </h1>
            <p style={{ color: "#6B6B6B", fontSize: 16 }} className="mb-6">Co-led with Michael Marshall | SXSW 2026</p>
            <div className="flex gap-3 flex-wrap">
              <span className="text-white px-3 py-1 rounded" style={{ fontSize: 12, backgroundColor: "#12674A", borderRadius: 4 }}>Design</span>
              <span className="text-white px-3 py-1 rounded" style={{ fontSize: 12, border: "1px solid #6B6B6B", color: "#ccc", borderRadius: 4 }}>Workshop</span>
              <span style={{ fontSize: 12, color: "#6B6B6B" }} className="py-1">March 2026</span>
            </div>
          </div>
          <img src={IMAGES.workshop} alt="Workshop" className="rounded-lg object-cover flex-shrink-0" style={{ width: 500, maxWidth: "100%", height: 350, borderRadius: 8 }} />
        </div>
      </section>

      {/* OVERVIEW */}
      <section style={{ backgroundColor: "#F7F5F0" }} className="py-20">
        <div className="max-w-[1200px] mx-auto px-6 flex flex-col lg:flex-row gap-12">
          <div className="lg:w-3/5">
            <p style={{ color: "#12674A", fontSize: 12, fontWeight: 700, letterSpacing: "0.1em", textTransform: "uppercase" }} className="mb-4">The Premise</p>
            <p style={{ fontSize: 16, color: "#1A1A1A", lineHeight: 1.8 }} className="mb-4">
              Every organization says they want innovation, but most innovation frameworks produce incremental improvement dressed up as transformation. The problem isn't a lack of creativity—it's that conventional business methodologies actively suppress the divergent thinking that breakthrough innovation requires.
            </p>
            <p style={{ fontSize: 16, color: "#1A1A1A", lineHeight: 1.8 }} className="mb-4">
              This workshop drew on three artistic movements—Surrealism, Situationism, and Futurism—to give participants tools for genuine disruption. Not disruption as a buzzword, but disruption as a practice: breaking established patterns of thought to discover new solution spaces.
            </p>
            <p style={{ fontSize: 16, color: "#1A1A1A", lineHeight: 1.8 }}>
              The results were striking. In 90 minutes, teams produced artifacts and insights that their organizations' normal processes would never have generated. More importantly, they understood why.
            </p>
          </div>
          <div className="lg:w-2/5">
            <div className="bg-white rounded-lg shadow-sm p-6" style={{ borderRadius: 8 }}>
              <h3 style={{ fontSize: 18, fontWeight: 700, color: "#1A1A1A" }} className="mb-4">Quick Facts</h3>
              {[
                ["Format", "Workshop"],
                ["Duration", "90 minutes"],
                ["Participants", "48"],
                ["Track", "Design"],
                ["Methods", "Surrealist, Situationist, Futurist"],
              ].map(([k, v]) => (
                <div key={k} className="flex justify-between py-2" style={{ borderBottom: "1px solid #F0EEEA" }}>
                  <span style={{ fontSize: 14, color: "#6B6B6B" }}>{k}</span>
                  <span style={{ fontSize: 14, color: "#1A1A1A", fontWeight: 500 }}>{v}</span>
                </div>
              ))}
            </div>
          </div>
        </div>
      </section>

      {/* METHODOLOGY */}
      <section style={{ backgroundColor: "#F7F5F0" }} className="pb-20">
        <div className="max-w-[1200px] mx-auto px-6">
          <h2 style={{ fontSize: 32, fontWeight: 700, color: "#1A1A1A" }} className="mb-12">How the Workshop Worked</h2>
          <div className="space-y-0">
            {steps.map((s, i) => (
              <div key={i} className="flex gap-6 pb-12 relative">
                <div className="flex flex-col items-center flex-shrink-0">
                  <div className="w-10 h-10 rounded-full flex items-center justify-center text-white" style={{ backgroundColor: "#12674A", fontSize: 14, fontWeight: 700 }}>{i + 1}</div>
                  {i < steps.length - 1 && <div className="flex-1 w-0.5 mt-2" style={{ backgroundColor: "#12674A" }} />}
                </div>
                <div className="flex-1">
                  <h3 style={{ fontSize: 20, fontWeight: 700, color: "#1A1A1A" }} className="mb-3">{s.title}</h3>
                  <p style={{ fontSize: 16, color: "#1A1A1A", lineHeight: 1.7 }} className="mb-4">{s.desc}</p>
                  <img src={s.img} alt={s.title} className="rounded-lg object-cover w-full" style={{ maxWidth: 600, height: 300, borderRadius: 8 }} />
                </div>
              </div>
            ))}
          </div>
        </div>
      </section>

      {/* OUTCOMES */}
      <section style={{ backgroundColor: "#F7F5F0" }} className="pb-20">
        <div className="max-w-[1200px] mx-auto px-6">
          <h2 style={{ fontSize: 32, fontWeight: 700, color: "#1A1A1A" }} className="mb-10">What Emerged</h2>
          <div className="grid md:grid-cols-3 gap-6 mb-12">
            {quotes.map((q, i) => (
              <div key={i} className="rounded-lg p-8 relative overflow-hidden" style={{ backgroundColor: q.bg, borderRadius: 8 }}>
                <span className="absolute top-4 left-4 text-white select-none" style={{ fontSize: 72, opacity: 0.3, fontFamily: "Georgia, serif", lineHeight: 1 }}>"</span>
                <p className="text-white relative z-10 mt-10 mb-6" style={{ fontSize: 20, fontStyle: "italic", lineHeight: 1.6 }}>{q.text}</p>
                <hr className="border-white/30 mb-3" />
                <p className="text-white" style={{ fontSize: 14 }}>{q.attribution}</p>
              </div>
            ))}
          </div>
          <p style={{ fontSize: 16, color: "#1A1A1A", lineHeight: 1.8 }} className="mb-4 max-w-3xl">
            Across all groups, three patterns emerged consistently: teams produced more divergent ideas when working with artistic constraints than with open brainstorming; physical movement through space changed the quality of ideation; and backward-from-the-future design eliminated the incrementalism that plagues most corporate innovation.
          </p>
          <p style={{ fontSize: 16, color: "#1A1A1A", lineHeight: 1.8 }} className="max-w-3xl">
            The artifacts themselves—collaged strategy documents, spatial maps, and future-state prototypes—were unlike anything that comes out of a typical design sprint. They were messier, stranger, and significantly more useful.
          </p>
        </div>
      </section>

      {/* BIGGER ARGUMENT */}
      <section style={{ backgroundColor: "#0A0A0A" }} className="py-20">
        <div className="max-w-[800px] mx-auto px-6 text-center">
          <h2 className="text-white mb-8" style={{ fontSize: 28, fontWeight: 700 }}>What This Proves</h2>
          <p className="text-white mb-6" style={{ fontSize: 18, lineHeight: 1.8 }}>
            Business innovation doesn't need another framework—it needs a fundamentally different way of seeing. Artistic methodologies aren't a creative luxury; they're a strategic necessity for any organization facing problems that conventional thinking can't solve.
          </p>
          <p className="text-white mb-6" style={{ fontSize: 18, lineHeight: 1.8 }}>
            The workshop demonstrated that when you give smart people permission to think like artists, they don't produce chaos—they produce breakthrough clarity. The constraint isn't capability. It's permission.
          </p>
          <p className="text-white" style={{ fontSize: 18, lineHeight: 1.8 }}>
            Every company has the talent to innovate radically. What they lack is the methodological courage to move beyond post-it notes and empathy maps.
          </p>
        </div>
      </section>

      {/* CTA */}
      <section style={{ backgroundColor: "#F7F5F0" }} className="py-16">
        <div className="max-w-[1200px] mx-auto px-6 grid md:grid-cols-2 gap-6">
          <Link to="/roundtable" className="bg-white rounded-lg shadow-sm p-6 hover:shadow-md transition-shadow block" style={{ borderRadius: 8, borderLeft: "3px solid #12674A" }}>
            <h3 style={{ fontSize: 18, fontWeight: 700, color: "#1A1A1A" }}>Read the Roundtable Recap →</h3>
            <p style={{ fontSize: 14, color: "#6B6B6B" }} className="mt-2">Explore the Braindate conversation on why AI strategy needs artistic thinking.</p>
          </Link>
          <div className="bg-white rounded-lg shadow-sm p-6 cursor-pointer hover:shadow-md transition-shadow" style={{ borderRadius: 8, borderLeft: "3px solid #12674A" }}>
            <h3 style={{ fontSize: 18, fontWeight: 700, color: "#1A1A1A" }}>Book This Workshop →</h3>
            <p style={{ fontSize: 14, color: "#6B6B6B" }} className="mt-2">Bring Artistic Disruption to your team. Available for corporate offsites and conferences.</p>
          </div>
        </div>
      </section>
    </div>
  );
}
