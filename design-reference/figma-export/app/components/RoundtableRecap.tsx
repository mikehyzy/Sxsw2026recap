const themes = [
  { num: 1, title: "The Imagination Deficit in AI Strategy", summary: "Most AI strategies are built by engineers optimizing for efficiency. But efficiency without imagination produces incremental improvements, not breakthroughs. The group explored why organizations that only hire technical talent for AI initiatives are systematically limiting their outcomes.", tension: "Several participants pushed back: 'Artists can't read a P&L statement. How do you justify their seat at the table when resources are scarce?'" },
  { num: 2, title: "Pattern Recognition vs. Pattern Breaking", summary: "AI excels at pattern recognition — but innovation requires pattern breaking. Artists are trained to see what's not there, to question assumptions, and to create from ambiguity. This complementary capability is exactly what AI teams need but rarely seek.", tension: "A data scientist argued: 'We already have techniques for creative problem-solving. Adding artists feels like adding complexity without clear ROI.'" },
  { num: 3, title: "The Translation Problem", summary: "Even when organizations recognize the value of artistic thinking, they struggle to translate it into actionable outcomes. The conversation explored frameworks for bridging the gap between creative exploration and strategic execution.", tension: "One participant noted: 'I've seen design thinking become corporate theater. How do we prevent artistic methods from suffering the same fate?'" },
  { num: 4, title: "Hiring, Org Design, and Power Structures", summary: "Integrating artists into AI teams raises fundamental questions about organizational design. Where do they sit? Who do they report to? How are they evaluated? The group debated whether existing structures can accommodate hybrid roles.", tension: "A VP of Engineering challenged: 'My team is already cross-functional. I'm not sure adding another discipline solves the problem — it might just slow us down.'" },
];

const voiceColors = ["#E8F5E9", "#FFF3E0", "#F5F5F5", "#E3F2FD", "#FCE4EC", "#F3E5F5", "#E0F2F1", "#FFF8E1"];
const voices = [
  { quote: "I've been saying this for years but couldn't articulate it. The artist isn't a nice-to-have — they're the person who asks the questions no one else thinks to ask.", attribution: "Head of AI, Healthcare Startup" },
  { quote: "My engineering team builds exactly what I ask for. The problem is I'm asking the wrong questions. An artist would fix that.", attribution: "CTO, Enterprise SaaS" },
  { quote: "We hired a playwright as our UX researcher. Best decision we ever made. She sees narrative structures in user behavior that data alone misses.", attribution: "VP Product, Fintech" },
  { quote: "The ROI argument is a trap. You can't measure the value of a question that changes the direction of an entire product.", attribution: "Innovation Director, CPG" },
  { quote: "I'm an artist who works in tech. The hardest part isn't doing the creative work — it's convincing people that the creative work IS the work.", attribution: "Creative Technologist" },
  { quote: "We need to stop treating 'creative' as an adjective and start treating it as a job function with measurable outputs.", attribution: "Strategy Consultant" },
  { quote: "After this conversation, I'm going back and rewriting our AI team job descriptions. We've been hiring for the wrong skills.", attribution: "CHRO, Tech Company" },
  { quote: "The best AI product I ever shipped started with a poet's observation about how people talk to machines.", attribution: "ML Engineer, Big Tech" },
];

export function RoundtableRecap() {
  return (
    <div>
      {/* Hero */}
      <section style={{ backgroundColor: "#0A0A0A", minHeight: "45vh" }} className="flex items-center">
        <div className="max-w-[1200px] mx-auto px-6 py-20 w-full">
          <p style={{ color: "#F97C3C", fontSize: 12, fontWeight: 700, letterSpacing: "0.1em", textTransform: "uppercase" }} className="mb-4">Braindate Recap</p>
          <h1 className="text-white mb-4" style={{ fontSize: "clamp(28px, 3.5vw, 44px)", fontWeight: 700, lineHeight: 1.15, maxWidth: 800 }}>Why Your AI Strategy Needs an Artist as Much as an Engineer</h1>
          <p style={{ color: "#6B6B6B", fontSize: 18 }} className="mb-6">A Braindate conversation at SXSW 2026</p>
          <p className="text-white" style={{ fontSize: 14, lineHeight: 1.7, maxWidth: 700 }}>
            Braindates are SXSW's peer-to-peer knowledge exchange format. Participants propose topics and are matched with others who share their interest. Unlike panels, there's no audience — everyone is a participant. This conversation drew 12 people from across disciplines.
          </p>
        </div>
      </section>

      {/* The Provocation */}
      <section style={{ backgroundColor: "#F7F5F0" }} className="py-20">
        <div className="max-w-[900px] mx-auto px-6 text-center">
          <p style={{ color: "#12674A", fontSize: 12, fontWeight: 700, letterSpacing: "0.1em", textTransform: "uppercase" }} className="mb-8">The Argument</p>
          <div className="relative">
            <span className="absolute -top-6 -left-4" style={{ fontSize: 80, color: "#12674A", opacity: 0.3, fontWeight: 700, lineHeight: 1 }}>"</span>
            <p style={{ fontSize: 28, fontWeight: 700, color: "#1A1A1A", lineHeight: 1.4 }} className="mb-8">
              Every AI team has engineers who can build anything. Almost none have artists who can imagine what should be built. This isn't a talent gap — it's a strategic blind spot.
            </p>
          </div>
          <p style={{ fontSize: 16, color: "#1A1A1A", lineHeight: 1.8 }} className="mb-4">
            The provocation was simple: organizations investing millions in AI talent are systematically excluding the one discipline most equipped to handle ambiguity, generate novel framings, and challenge assumptions — art.
          </p>
          <p style={{ fontSize: 16, color: "#1A1A1A", lineHeight: 1.8 }}>
            This isn't about making AI products prettier. It's about the fundamental cognitive diversity required to build AI systems that serve human needs in genuinely new ways.
          </p>
        </div>
      </section>

      {/* Discussion Map */}
      <section style={{ backgroundColor: "#F7F5F0" }} className="pb-20">
        <div className="max-w-[1200px] mx-auto px-6">
          <h2 style={{ fontSize: 32, fontWeight: 700, color: "#1A1A1A" }} className="mb-10">How the Conversation Unfolded</h2>
          <div className="space-y-6">
            {themes.map((t) => (
              <div key={t.num} className="bg-white rounded-lg shadow-sm p-8" style={{ borderRadius: 8 }}>
                <div className="flex items-start gap-4">
                  <div className="w-10 h-10 rounded-full flex-shrink-0 flex items-center justify-center text-white" style={{ backgroundColor: "#12674A", fontSize: 14, fontWeight: 700 }}>{t.num}</div>
                  <div className="flex-1">
                    <h3 style={{ fontSize: 20, fontWeight: 700, color: "#1A1A1A" }} className="mb-3">{t.title}</h3>
                    <p style={{ fontSize: 16, color: "#1A1A1A", lineHeight: 1.7 }} className="mb-4">{t.summary}</p>
                    <div className="pl-4 py-3" style={{ borderLeft: "3px solid #F97C3C" }}>
                      <p style={{ fontSize: 14, color: "#1A1A1A", lineHeight: 1.6, fontStyle: "italic" }}>{t.tension}</p>
                    </div>
                  </div>
                </div>
              </div>
            ))}
          </div>
        </div>
      </section>

      {/* Participant Voices */}
      <section style={{ backgroundColor: "#F7F5F0" }} className="pb-20">
        <div className="max-w-[1200px] mx-auto px-6">
          <h2 style={{ fontSize: 32, fontWeight: 700, color: "#1A1A1A" }} className="mb-10">What People Said</h2>
          <div className="columns-1 md:columns-2 lg:columns-3 gap-6 space-y-6">
            {voices.map((v, i) => (
              <div key={i} className="break-inside-avoid rounded-lg p-6" style={{ backgroundColor: voiceColors[i % voiceColors.length], borderRadius: 8 }}>
                <p style={{ fontSize: 16, fontStyle: "italic", color: "#1A1A1A", lineHeight: 1.6 }} className="mb-3">"{v.quote}"</p>
                <p style={{ fontSize: 12, fontWeight: 700, color: "#1A1A1A" }}>— {v.attribution}</p>
              </div>
            ))}
          </div>
        </div>
      </section>

      {/* Synthesis */}
      <section style={{ backgroundColor: "#0A0A0A" }} className="py-20">
        <div className="max-w-[800px] mx-auto px-6 text-center">
          <h2 className="text-white mb-8" style={{ fontSize: 28, fontWeight: 700 }}>What I Took Away</h2>
          <p className="text-white mb-6" style={{ fontSize: 18, lineHeight: 1.8 }}>
            This conversation confirmed something I've observed across dozens of organizations: the most innovative AI teams aren't the ones with the most technical talent. They're the ones with the most cognitive diversity.
          </p>
          <p className="text-white mb-6" style={{ fontSize: 18, lineHeight: 1.8 }}>
            Artists bring a specific, trainable set of skills — comfort with ambiguity, facility with metaphor, practice in questioning assumptions — that directly complement engineering capabilities. The barrier isn't proof of value; it's organizational imagination.
          </p>
          <p className="text-white" style={{ fontSize: 18, fontWeight: 700, lineHeight: 1.8 }}>
            The companies that figure this out first will build AI products that feel genuinely new. Everyone else will build faster versions of what already exists.
          </p>
        </div>
      </section>

      {/* CTA */}
      <section style={{ backgroundColor: "#F7F5F0" }} className="py-20">
        <div className="max-w-[1200px] mx-auto px-6 grid md:grid-cols-2 gap-6">
          <a href="/workshop" className="block bg-white rounded-lg shadow-sm p-8 hover:shadow-md transition-shadow" style={{ borderLeft: "3px solid #12674A", borderRadius: 8 }}>
            <p style={{ fontSize: 18, fontWeight: 700, color: "#1A1A1A" }}>Read the Workshop Recap →</p>
            <p style={{ fontSize: 14, color: "#6B6B6B" }} className="mt-2">Artistic Disruption for Business Innovation</p>
          </a>
          <a href="/trends" className="block bg-white rounded-lg shadow-sm p-8 hover:shadow-md transition-shadow" style={{ borderLeft: "3px solid #12674A", borderRadius: 8 }}>
            <p style={{ fontSize: 18, fontWeight: 700, color: "#1A1A1A" }}>See the Trend Report →</p>
            <p style={{ fontSize: 14, color: "#6B6B6B" }} className="mt-2">10 signals from 7 days of SXSW 2026</p>
          </a>
        </div>
      </section>
    </div>
  );
}
