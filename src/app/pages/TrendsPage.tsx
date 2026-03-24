import { Link } from "react-router";

const trackColors: Record<string, string> = {
  "Tech & AI": "#50AFE8",
  "Music": "#C0392B",
  "Film & TV": "#D4A017",
  "Design": "#12674A",
  "Brand & Marketing": "#F97C3C",
  "Health": "#2E8B57",
  "Culture": "#6C7EB7",
};

const trends = [
  { num: "01", title: "Agentic AI Moves from Demo to Deployment", signal: "Enterprise adoption of autonomous AI agents accelerated from proof-of-concept to production workflows.", evidence: ["'Building Trust in Autonomous Systems' — Featured Session, Tech & AI", "'When Your AI Has Its Own To-Do List' — Panel, Tech & AI", "'Enterprise AI at Scale' — Keynote, Tech & AI"], meaning: "The conversation has shifted from whether agentic AI works to how organizations govern it at scale. The deployment gap is closing faster than policy frameworks can keep up.", tags: ["Tech & AI", "Brand & Marketing"] },
  { num: "02", title: "The Artist-Engineer Convergence", signal: "Cross-disciplinary collaboration between artists and engineers is no longer optional — it's a competitive advantage.", evidence: ["'Artistic Disruption for Business Innovation' — Workshop, Design", "'Creative Coding as Strategic Practice' — Panel, Design", "'The Aesthetics of AI' — Featured Session, Culture"], meaning: "Organizations that silo creative and technical teams are already behind. The most innovative products at SXSW came from teams that blurred these boundaries.", tags: ["Design", "Tech & AI", "Culture"] },
  { num: "03", title: "Behavioral Science as the Missing Adoption Layer", signal: "Product teams are discovering that adoption failures are behavioral problems, not technical ones.", evidence: ["'Nudge Architecture for AI Products' — Panel, Design", "'Why Users Reject What They Asked For' — Featured Session, Brand & Marketing"], meaning: "The best technology fails without behavioral design. Gamification, nudge theory, and habit formation are becoming core product disciplines.", tags: ["Design", "Brand & Marketing"] },
  { num: "04", title: "Governance Fatigue vs. Governance Necessity", signal: "Organizations are exhausted by AI governance frameworks but can't afford to ignore them.", evidence: ["'Governance Without the Bureaucracy' — Panel, Tech & AI", "'Responsible AI in Practice' — Workshop, Tech & AI"], meaning: "The next wave of governance tools will succeed by reducing friction, not adding process. Embedded governance beats bolted-on compliance.", tags: ["Tech & AI", "Health"] },
  { num: "05", title: "Creator Economy Meets Enterprise Tooling", signal: "Creator-focused platforms are moving upstream into enterprise workflows.", evidence: ["'Creator Tools for Corporate Innovation' — Panel, Brand & Marketing", "'The Prosumer Stack' — Featured Session, Tech & AI"], meaning: "The line between consumer creativity tools and enterprise software is dissolving. Expect major acquisitions in this space.", tags: ["Brand & Marketing", "Tech & AI"] },
  { num: "06", title: "Post-Convention-Center SXSW as Spatial Design Case Study", signal: "The distributed venue model created a natural experiment in urban experience design.", evidence: ["'Wayfinding in a Distributed Conference' — Panel, Design", "'The City as Interface' — Featured Session, Culture"], meaning: "SXSW's expansion beyond the convention center is a case study in spatial computing principles applied to physical space.", tags: ["Design", "Culture"] },
  { num: "07", title: "AI in Healthcare Hits Regulatory Reality", signal: "Healthcare AI deployments are encountering regulatory frameworks that weren't designed for adaptive systems.", evidence: ["'FDA and the AI Dilemma' — Panel, Health", "'Clinical AI: Promise vs. Protocol' — Featured Session, Health"], meaning: "Healthcare AI will advance at the speed of regulation, not innovation. Organizations need regulatory strategy as much as technical capability.", tags: ["Health", "Tech & AI"] },
  { num: "08", title: "The Brand Activation Arms Race", signal: "Brand experiences at SXSW reached new levels of ambition and sophistication.", evidence: ["'Beyond the Pop-Up' — Panel, Brand & Marketing", "'Experiential ROI: Measuring What Matters' — Workshop, Brand & Marketing"], meaning: "The activation landscape has matured from novelty to strategic platform. Brands that can't create participatory experiences will lose cultural relevance.", tags: ["Brand & Marketing", "Culture"] },
  { num: "09", title: "Open Source as Competitive Moat", signal: "Companies are using open-source contributions as a strategic differentiator.", evidence: ["'Open Source Strategy for Enterprise' — Panel, Tech & AI", "'Community-Driven Innovation' — Featured Session, Tech & AI"], meaning: "Open source is no longer altruistic — it's a talent acquisition and market positioning strategy.", tags: ["Tech & AI"] },
  { num: "10", title: "The Death of the Slide Deck", signal: "Interactive, narrative-driven presentations replaced traditional slide formats across SXSW sessions.", evidence: ["'Storytelling Beyond Slides' — Workshop, Design", "'The Presentation Revolution' — Panel, Culture"], meaning: "Static presentations are losing ground to immersive, conversational formats. The future of professional communication is dynamic.", tags: ["Design", "Culture"] },
];

export function TrendsPage() {
  return (
    <div>
      {/* Hero */}
      <section style={{ backgroundColor: "#0A0A0A", minHeight: "40vh" }} className="flex items-center">
        <div className="max-w-[1200px] mx-auto px-6 py-20">
          <h1 className="text-white mb-4" style={{ fontSize: "56px", fontWeight: 700, lineHeight: 1.1 }}>What SXSW 2026 Signaled</h1>
          <p style={{ color: "#6B6B6B", fontSize: "18px", maxWidth: "700px" }}>A practitioner's trend synthesis from 7 days of sessions, conversations, and activations</p>
        </div>
      </section>

      {/* Methodology */}
      <section style={{ backgroundColor: "#F7F5F0" }} className="py-12">
        <div className="max-w-[1200px] mx-auto px-6" style={{ borderBottom: "1px solid #E0E0E0", paddingBottom: "32px" }}>
          <p style={{ color: "#12674A", fontSize: "12px", fontWeight: 700, textTransform: "uppercase", letterSpacing: "2px" }} className="mb-3">How I Built This</p>
          <p style={{ fontSize: "16px", color: "#1A1A1A", lineHeight: 1.7, maxWidth: "800px" }}>
            This synthesis draws from 47 sessions attended, 30+ hallway conversations, and observations across brand activations, workshops, and evening events. Trends were identified by mapping recurring themes across tracks, then stress-testing them against pre-SXSW industry signals. What follows isn't prediction — it's pattern recognition from the field.
          </p>
        </div>
      </section>

      {/* Trend Matrix */}
      <section style={{ backgroundColor: "#0A0A0A" }} className="py-16">
        <div className="max-w-[1200px] mx-auto px-6">
          <div className="rounded-lg flex items-center justify-center" style={{ height: "500px", backgroundColor: "#1A1A1A", border: "1px dashed #333" }}>
            <p style={{ color: "#6B6B6B", fontSize: "16px" }}>Custom trend visualization — Signal strength vs. enterprise readiness</p>
          </div>
          <p style={{ color: "#6B6B6B", fontSize: "14px" }} className="mt-4 text-center">Signal strength vs. enterprise readiness</p>
        </div>
      </section>

      {/* Trend Cards */}
      <section style={{ backgroundColor: "#F7F5F0" }} className="py-20">
        <div className="max-w-[1200px] mx-auto px-6">
          <h2 style={{ fontSize: "32px", fontWeight: 700, color: "#1A1A1A" }} className="mb-10">10 Signals from SXSW 2026</h2>
          <div className="grid md:grid-cols-2 gap-6">
            {trends.map((t) => (
              <div key={t.num} className="bg-white rounded-lg shadow-sm p-8" style={{ borderLeft: "4px solid #12674A", borderRadius: "8px" }}>
                <p style={{ color: "#12674A", fontSize: "14px", fontWeight: 700 }} className="mb-1">{t.num}</p>
                <h3 style={{ fontSize: "22px", fontWeight: 700, color: "#1A1A1A" }} className="mb-3">{t.title}</h3>
                <p style={{ fontSize: "16px", color: "#1A1A1A", lineHeight: 1.6 }} className="mb-4">{t.signal}</p>
                <p style={{ fontSize: "12px", color: "#6B6B6B", textTransform: "uppercase", fontWeight: 700, letterSpacing: "1px" }} className="mb-2">Supporting Evidence</p>
                <ul className="mb-4 space-y-1">
                  {t.evidence.map((e, i) => (
                    <li key={i} style={{ fontSize: "14px", color: "#1A1A1A" }}>&bull; {e}</li>
                  ))}
                </ul>
                <p style={{ fontSize: "12px", color: "#12674A", textTransform: "uppercase", fontWeight: 700, letterSpacing: "1px" }} className="mb-2">What It Means</p>
                <p style={{ fontSize: "14px", color: "#1A1A1A", lineHeight: 1.6 }} className="mb-4">{t.meaning}</p>
                <div className="flex flex-wrap gap-2">
                  {t.tags.map((tag) => (
                    <span key={tag} className="px-3 py-1 rounded text-white" style={{ fontSize: "10px", fontWeight: 700, backgroundColor: trackColors[tag] || "#12674A", borderRadius: "4px" }}>{tag}</span>
                  ))}
                </div>
              </div>
            ))}
          </div>
        </div>
      </section>

      {/* Cross-reference footer */}
      <section style={{ backgroundColor: "#F0EEEA" }} className="py-10">
        <div className="max-w-[1200px] mx-auto px-6 text-center">
          <p style={{ fontSize: "16px", color: "#1A1A1A" }}>
            Each trend links to supporting sessions in the{" "}
            <Link to="/sessions" style={{ color: "#12674A", textDecoration: "underline" }}>Session Library &rarr;</Link>
          </p>
        </div>
      </section>
    </div>
  );
}
