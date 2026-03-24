const trends = [
  { num: "01", title: "Agentic AI Moves from Demo to Deployment", summary: "Enterprise adoption of autonomous AI agents accelerated dramatically, with multiple sessions showcasing production-ready implementations.", evidence: ["Google DeepMind keynote on agent orchestration frameworks", "Microsoft session: 'From Copilot to Colleague'", "Panel: 'When Agents Make Decisions Without You'"], meaning: "Organizations need agent governance frameworks before scaling. The gap between demo and production is primarily organizational, not technical.", tags: [{ label: "Tech & AI", color: "#50AFE8" }] },
  { num: "02", title: "The Artist-Engineer Convergence", summary: "Creative practitioners and technologists are merging into hybrid roles that defy traditional org charts.", evidence: ["Workshop: 'Artistic Disruption for Business Innovation'", "MIT Media Lab showcase on computational creativity", "Braindate: 'Why Your AI Strategy Needs an Artist'"], meaning: "The most valuable person in your org might be the one who can both code and think in metaphors. HR needs new job descriptions.", tags: [{ label: "Design", color: "#12674A" }, { label: "Tech & AI", color: "#50AFE8" }] },
  { num: "03", title: "Behavioral Science as the Missing Adoption Layer", summary: "Session after session pointed to behavioral design as the key to getting humans to actually use new tools.", evidence: ["Keynote on 'Adoption is a Behavior Problem, Not a Tech Problem'", "Gamification workshop drawing standing-room crowds", "Health track sessions on patient compliance tech"], meaning: "Building great products isn't enough. You need behavioral architects who understand habit loops, friction reduction, and motivation design.", tags: [{ label: "Design", color: "#12674A" }, { label: "Health", color: "#2E8B57" }] },
  { num: "04", title: "Governance Fatigue vs. Governance Necessity", summary: "The AI governance conversation has matured but many practitioners are exhausted by the pace of regulatory change.", evidence: ["EU AI Act implementation panel drew overflow crowd", "Startup founders panel on 'Moving Fast Without Breaking Ethics'", "Corporate counsel roundtable on AI liability"], meaning: "Governance can't be an afterthought or a blocker. The winners will build lightweight, adaptive governance that moves at the speed of innovation.", tags: [{ label: "Tech & AI", color: "#50AFE8" }, { label: "Culture", color: "#6C7EB7" }] },
  { num: "05", title: "Creator Economy Meets Enterprise Tooling", summary: "Creator-focused platforms are pivoting toward enterprise use cases, blurring the lines between consumer and B2B.", evidence: ["Notion AI enterprise launch event", "Canva for Enterprise deep dive", "Panel: 'When Creator Tools Become Corporate Infrastructure'"], meaning: "Expect procurement teams to start evaluating tools that originated in the creator economy. Consumerization of enterprise software is accelerating.", tags: [{ label: "Brand & Marketing", color: "#F97C3C" }, { label: "Tech & AI", color: "#50AFE8" }] },
  { num: "06", title: "Post-Convention-Center SXSW as Spatial Design Case Study", summary: "Without the Austin Convention Center, SXSW 2026 became a distributed festival — and a real-time experiment in spatial experience design.", evidence: ["Festival footprint expanded across 15+ downtown venues", "Wayfinding UX became a topic of conversation itself", "Architecture critics covered SXSW for the first time"], meaning: "Distributed experiences require intentional design. This applies to remote work, hybrid events, and decentralized organizations.", tags: [{ label: "Design", color: "#12674A" }, { label: "Culture", color: "#6C7EB7" }] },
  { num: "07", title: "AI in Healthcare Hits Regulatory Reality", summary: "Healthcare AI moved from aspirational demos to confronting the messy reality of FDA approval, HIPAA compliance, and clinician trust.", evidence: ["FDA commissioner's featured session on AI device regulation", "Panel: 'Why Clinicians Don't Trust Your Algorithm'", "Startup pitch competition dominated by health-AI companies"], meaning: "Healthcare AI companies that invest in regulatory expertise and clinician co-design will outperform those focused purely on model performance.", tags: [{ label: "Health", color: "#2E8B57" }, { label: "Tech & AI", color: "#50AFE8" }] },
  { num: "08", title: "The Brand Activation Arms Race", summary: "Brand activations at SXSW reached new levels of spectacle, with companies competing for attention through immersive experiences.", evidence: ["Amazon's 3-story AI experience center", "Porsche x AI art installation on Rainey Street", "450+ documented brand activations across the festival"], meaning: "Attention is the scarcest resource. Brands that create genuine value through their activations will earn lasting mindshare; spectacle alone fades fast.", tags: [{ label: "Brand & Marketing", color: "#F97C3C" }] },
  { num: "09", title: "Open Source as Competitive Moat", summary: "Multiple sessions argued that open-source AI models are becoming a strategic differentiator rather than a liability.", evidence: ["Meta keynote on Llama 3 ecosystem growth", "Panel: 'Open Source is the New Lock-In'", "Developer track sessions on contributing to OSS strategically"], meaning: "Companies that contribute to open-source ecosystems build trust, attract talent, and shape industry standards. Closed-source alone is no longer a moat.", tags: [{ label: "Tech & AI", color: "#50AFE8" }] },
  { num: "10", title: "The Death of the Slide Deck", summary: "Presenters who relied on traditional slides were noticeably less engaging than those using live demos, conversations, and interactive formats.", evidence: ["Standing ovation for a keynote with zero slides", "Workshop formats consistently outperformed lecture formats in attendance", "SXSW program committee reportedly favoring interactive proposals"], meaning: "Communication is evolving. If your ideas can't survive without bullet points, they might not be strong enough. Invest in storytelling, not slide design.", tags: [{ label: "Culture", color: "#6C7EB7" }, { label: "Design", color: "#12674A" }] },
];

export function TrendReport() {
  return (
    <div>
      {/* Hero */}
      <section style={{ backgroundColor: "#0A0A0A", minHeight: "40vh" }} className="flex items-center">
        <div className="max-w-[1200px] mx-auto px-6 py-20 w-full">
          <h1 className="text-white mb-4" style={{ fontSize: "clamp(32px, 4vw, 56px)", fontWeight: 700, lineHeight: 1.1 }}>What SXSW 2026 Signaled</h1>
          <p style={{ color: "#6B6B6B", fontSize: 18 }}>A practitioner's trend synthesis from 7 days of sessions, conversations, and activations</p>
        </div>
      </section>

      {/* Methodology */}
      <section style={{ backgroundColor: "#F7F5F0" }} className="py-16">
        <div className="max-w-[1200px] mx-auto px-6">
          <p style={{ color: "#12674A", fontSize: 12, fontWeight: 700, letterSpacing: "0.1em", textTransform: "uppercase" }} className="mb-4">How I Built This</p>
          <p style={{ fontSize: 16, color: "#1A1A1A", lineHeight: 1.8, maxWidth: 800 }}>
            This synthesis is drawn from attending 47 sessions across 7 days, supplemented by dozens of hallway conversations, Braindates, and brand activation visits. Each trend was validated against at least three independent data points — a session, a conversation, and an observable pattern. This is not a comprehensive survey; it's an opinionated field guide from a practitioner who was paying attention.
          </p>
          <div className="mt-8 border-b" style={{ borderColor: "#E0E0E0" }} />
        </div>
      </section>

      {/* Trend Matrix placeholder */}
      <section style={{ backgroundColor: "#0A0A0A" }} className="py-16">
        <div className="max-w-[1200px] mx-auto px-6">
          <div className="w-full rounded-lg flex items-center justify-center" style={{ height: 500, backgroundColor: "#1A1A1A", border: "1px dashed #333" }}>
            <p style={{ color: "#6B6B6B", fontSize: 16 }}>Custom visualization: Signal strength vs. enterprise readiness</p>
          </div>
          <p style={{ color: "#6B6B6B", fontSize: 14 }} className="mt-4 text-center">Signal strength vs. enterprise readiness</p>
        </div>
      </section>

      {/* Trend Cards */}
      <section style={{ backgroundColor: "#F7F5F0" }} className="py-20">
        <div className="max-w-[1200px] mx-auto px-6">
          <h2 style={{ fontSize: 32, fontWeight: 700, color: "#1A1A1A" }} className="mb-10">10 Signals from SXSW 2026</h2>
          <div className="grid md:grid-cols-2 gap-6">
            {trends.map((t) => (
              <div key={t.num} className="bg-white rounded-lg shadow-sm p-8" style={{ borderLeft: "4px solid #12674A", borderRadius: 8 }}>
                <p style={{ color: "#12674A", fontSize: 14, fontWeight: 700 }} className="mb-2">{t.num}</p>
                <h3 style={{ fontSize: 22, fontWeight: 700, color: "#1A1A1A" }} className="mb-3">{t.title}</h3>
                <p style={{ fontSize: 16, color: "#1A1A1A", lineHeight: 1.6 }} className="mb-4">{t.summary}</p>
                <p style={{ fontSize: 12, textTransform: "uppercase", color: "#6B6B6B", letterSpacing: "0.05em", fontWeight: 600 }} className="mb-2">Supporting evidence</p>
                <ul className="mb-4 space-y-1">
                  {t.evidence.map((e, i) => (
                    <li key={i} style={{ fontSize: 14, color: "#1A1A1A" }} className="flex items-start gap-2">
                      <span style={{ color: "#12674A" }}>•</span> {e}
                    </li>
                  ))}
                </ul>
                <p style={{ fontSize: 12, textTransform: "uppercase", color: "#12674A", letterSpacing: "0.05em", fontWeight: 600 }} className="mb-2">What it means</p>
                <p style={{ fontSize: 14, color: "#1A1A1A", lineHeight: 1.6 }} className="mb-4">{t.meaning}</p>
                <div className="flex flex-wrap gap-2">
                  {t.tags.map((tag) => (
                    <span key={tag.label} className="px-3 py-1 text-white" style={{ backgroundColor: tag.color, borderRadius: 4, fontSize: 10, fontWeight: 600 }}>{tag.label}</span>
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
          <p style={{ fontSize: 16, color: "#1A1A1A" }}>Each trend links to supporting sessions in the <a href="/sessions" style={{ color: "#12674A", textDecoration: "underline" }}>Session Library →</a></p>
        </div>
      </section>
    </div>
  );
}
