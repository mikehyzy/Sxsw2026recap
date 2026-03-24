import { Link } from "react-router";

const TRACK_COLORS: Record<string, string> = {
  "Tech & AI": "#50AFE8",
  "Music": "#C0392B",
  "Film & TV": "#D4A017",
  "Design": "#12674A",
  "Brand & Marketing": "#F97C3C",
  "Health": "#2E8B57",
  "Culture": "#6C7EB7",
  "Startups": "#D4A017",
};

const trends = [
  { num: "01", title: "Agentic AI Moves from Demo to Deployment", summary: "Enterprise teams are shifting from showcasing AI agents to embedding them in production workflows.", evidence: ["OpenAI DevDay session on multi-agent orchestration", "Microsoft keynote on Copilot ecosystem", "Three startup pitches featuring autonomous agent platforms"], meaning: "The hype cycle is compressing. Companies that treat agents as features rather than products will win.", tags: ["Tech & AI", "Brand & Marketing"] },
  { num: "02", title: "The Artist-Engineer Convergence", summary: "The most innovative teams now pair creative practitioners with technical builders from day one.", evidence: ["Workshop: Artistic Disruption for Business Innovation", "Adobe's creative AI tools showcase", "Panel on design thinking in ML pipelines"], meaning: "This isn't about aesthetics—it's about problem framing. Artists see constraints differently.", tags: ["Design", "Tech & AI"] },
  { num: "03", title: "Behavioral Science as the Missing Adoption Layer", summary: "Products fail not because of bad tech but because they ignore how humans actually change behavior.", evidence: ["Keynote on habit formation in health tech", "Panel: Why enterprise software adoption stalls", "Braindate on gamification frameworks"], meaning: "Adoption is a design problem, not a training problem. Behavioral science needs a seat at the product table.", tags: ["Health", "Design"] },
  { num: "04", title: "Governance Fatigue vs. Governance Necessity", summary: "Teams are exhausted by AI governance debates but acknowledge the regulatory walls closing in.", evidence: ["EU AI Act implementation panel", "Corporate AI ethics roundtable", "Startup founder on compliance-first design"], meaning: "The winners will build governance into the product, not bolt it on after launch.", tags: ["Tech & AI", "Culture"] },
  { num: "05", title: "Creator Economy Meets Enterprise Tooling", summary: "Creator platforms are being repurposed for internal communications and employee engagement.", evidence: ["Notion's enterprise creator tools launch", "Panel on internal influencers", "TikTok for Business session on employee advocacy"], meaning: "The line between consumer content creation and enterprise communication has fully dissolved.", tags: ["Brand & Marketing", "Tech & AI"] },
  { num: "06", title: "Post-Convention-Center SXSW as Spatial Design Case Study", summary: "Without a central venue, SXSW became a distributed design experiment across Austin's urban fabric.", evidence: ["Wayfinding challenges documented across social media", "Panel on distributed event design", "Brand activation map spanning 47 venues"], meaning: "The decentralization forced serendipity—and that may have been better than any curated experience.", tags: ["Design", "Culture"] },
  { num: "07", title: "AI in Healthcare Hits Regulatory Reality", summary: "Healthcare AI demos are impressive, but FDA pathways and HIPAA constraints dominate real conversations.", evidence: ["FDA digital health lead keynote", "Three health-AI startup pitches", "Panel on clinical validation timelines"], meaning: "Healthcare AI will move slowly—and that's appropriate. The gap between demo and deployment is measured in years, not months.", tags: ["Health", "Tech & AI"] },
  { num: "08", title: "The Brand Activation Arms Race", summary: "Brands spent unprecedented amounts on experiential activations, raising the bar for attention capture.", evidence: ["Amazon's 3-story immersive experience", "Google's AI playground spanning a full city block", "Over 450 documented brand activations"], meaning: "Experiential marketing is becoming the primary channel. The question is whether the ROI math works beyond brand awareness.", tags: ["Brand & Marketing"] },
  { num: "09", title: "Open Source as Competitive Moat", summary: "Open source is no longer charity—it's a deliberate competitive strategy for AI companies.", evidence: ["Meta's open model strategy keynote", "Hugging Face community session", "Debate panel: open vs. closed AI development"], meaning: "The open-source AI ecosystem is creating switching costs that rival proprietary lock-in.", tags: ["Tech & AI"] },
  { num: "10", title: "The Death of the Slide Deck", summary: "The best sessions abandoned slides entirely in favor of live demos, conversations, and collaborative exercises.", evidence: ["Standing ovation for slide-free keynote", "Workshop participation rates vs. lecture attendance", "Social media sentiment analysis of session formats"], meaning: "Audiences are done being talked at. The future of knowledge transfer is participatory.", tags: ["Culture", "Design"] },
];

export function TrendReport() {
  return (
    <div>
      {/* HERO */}
      <section style={{ backgroundColor: "#0A0A0A", minHeight: "40vh" }} className="flex items-center">
        <div className="max-w-[1200px] mx-auto px-6 py-16">
          <h1 className="text-white mb-4" style={{ fontSize: "clamp(32px, 4vw, 56px)", fontWeight: 700, lineHeight: 1.1 }}>
            What SXSW 2026 Signaled
          </h1>
          <p style={{ color: "#6B6B6B", fontSize: 18 }} className="max-w-2xl">
            A practitioner's trend synthesis from 7 days of sessions, conversations, and activations
          </p>
        </div>
      </section>

      {/* METHODOLOGY */}
      <section style={{ backgroundColor: "#F7F5F0" }} className="py-12">
        <div className="max-w-[1200px] mx-auto px-6" style={{ borderBottom: "1px solid #E0E0E0" }}>
          <p style={{ color: "#12674A", fontSize: 12, fontWeight: 700, letterSpacing: "0.1em", textTransform: "uppercase" }} className="mb-3">How I Built This</p>
          <p style={{ fontSize: 16, color: "#1A1A1A", lineHeight: 1.8 }} className="max-w-3xl pb-10">
            This synthesis draws from 47 sessions attended, 23 conversations with founders and practitioners, and seven days of field observation. Trends were identified by frequency of mention, audience energy, and cross-session resonance. This is not a comprehensive survey—it's one practitioner's pattern-matched perspective.
          </p>
        </div>
      </section>

      {/* TREND MATRIX PLACEHOLDER */}
      <section style={{ backgroundColor: "#0A0A0A" }} className="py-16">
        <div className="max-w-[1200px] mx-auto px-6">
          <div className="rounded-lg flex items-center justify-center" style={{ backgroundColor: "#1A1A1A", height: 500, borderRadius: 8 }}>
            <p style={{ color: "#6B6B6B", fontSize: 16 }}>Signal Strength vs. Enterprise Readiness — Visualization Placeholder</p>
          </div>
          <p style={{ color: "#6B6B6B", fontSize: 14 }} className="mt-4 text-center">Signal strength vs. enterprise readiness</p>
        </div>
      </section>

      {/* TREND CARDS */}
      <section style={{ backgroundColor: "#F7F5F0" }} className="py-20">
        <div className="max-w-[1200px] mx-auto px-6">
          <h2 style={{ fontSize: 32, fontWeight: 700, color: "#1A1A1A" }} className="mb-10">10 Signals from SXSW 2026</h2>
          <div className="grid md:grid-cols-2 gap-6">
            {trends.map((t) => (
              <div key={t.num} className="bg-white rounded-lg shadow-sm p-6" style={{ borderRadius: 8, borderLeft: "4px solid #12674A" }}>
                <p style={{ color: "#12674A", fontSize: 14, fontWeight: 700 }} className="mb-1">{t.num}</p>
                <h3 style={{ fontSize: 22, fontWeight: 700, color: "#1A1A1A" }} className="mb-2">{t.title}</h3>
                <p style={{ fontSize: 16, color: "#1A1A1A", lineHeight: 1.6 }} className="mb-4">{t.summary}</p>
                <p style={{ fontSize: 12, textTransform: "uppercase", color: "#6B6B6B", letterSpacing: "0.05em", fontWeight: 600 }} className="mb-2">Supporting Evidence</p>
                <ul className="mb-4 pl-4" style={{ fontSize: 14, color: "#1A1A1A", lineHeight: 1.8 }}>
                  {t.evidence.map((e, i) => <li key={i} className="list-disc">{e}</li>)}
                </ul>
                <p style={{ fontSize: 12, textTransform: "uppercase", color: "#12674A", letterSpacing: "0.05em", fontWeight: 600 }} className="mb-2">What It Means</p>
                <p style={{ fontSize: 14, color: "#1A1A1A", lineHeight: 1.7 }} className="mb-4">{t.meaning}</p>
                <div className="flex flex-wrap gap-2">
                  {t.tags.map((tag) => (
                    <span key={tag} className="text-white px-3 py-1 rounded" style={{ fontSize: 10, backgroundColor: TRACK_COLORS[tag] || "#12674A", borderRadius: 4 }}>{tag}</span>
                  ))}
                </div>
              </div>
            ))}
          </div>
        </div>
      </section>

      {/* CROSS-REF FOOTER */}
      <section style={{ backgroundColor: "#F0EEEA" }} className="py-10">
        <div className="max-w-[1200px] mx-auto px-6 text-center">
          <p style={{ fontSize: 16, color: "#1A1A1A" }}>
            Each trend links to supporting sessions in the{" "}
            <Link to="/sessions" style={{ color: "#12674A" }} className="underline">Session Library →</Link>
          </p>
        </div>
      </section>
    </div>
  );
}
