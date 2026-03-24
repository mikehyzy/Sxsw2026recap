import { Link } from "react-router";

const themes = [
  { title: "The Empathy Gap in AI Development", desc: "Most AI teams optimize for performance metrics that have nothing to do with how humans experience the technology. Artists bring a fundamentally different lens—one focused on emotional resonance, narrative coherence, and aesthetic integrity.", tension: "Several engineers pushed back: 'Empathy doesn't scale. We need measurable outcomes, not feelings.' The counter-argument was that empathy IS the measurable outcome when your metric is adoption." },
  { title: "Creative Problem Framing vs. Technical Problem Solving", desc: "Artists don't just solve problems differently—they define problems differently. The group explored how reframing a technical challenge as a human narrative often reveals solution paths that pure engineering misses.", tension: "A product manager noted that creative reframing can also delay decisions. 'At some point you need to commit to a frame and ship.' The tension between exploration and execution was never fully resolved." },
  { title: "The Translation Layer Problem", desc: "Even when companies hire artists and engineers, they often can't communicate effectively. The conversation explored what a 'translation layer' between disciplines looks like in practice.", tension: "One participant argued that translation layers are the wrong metaphor: 'You don't need a translator. You need people who are fluent in both languages.' The group debated whether such people exist at scale." },
  { title: "Organizational Permission Structures", desc: "The biggest barrier isn't talent or even methodology—it's organizational permission. Most companies say they want creativity but punish the ambiguity that creative work requires.", tension: "A startup founder disagreed: 'Small teams don't need permission—they just build.' The conversation exposed a real divide between startup and enterprise innovation cultures." },
];

const voiceColors = ["#e8f5e9", "#fff3e0", "#f3f4f6", "#e3f2fd", "#fce4ec", "#f3e5f5", "#e0f2f1", "#fff8e1"];
const voices = [
  { text: "This conversation changed how I think about my AI team's composition. We're hiring a design lead next quarter.", attr: "— CTO, Series B Startup" },
  { text: "I've been saying this for years in the art world. It's validating to hear technologists arriving at the same conclusion.", attr: "— Creative Director" },
  { text: "The tension between speed and creativity is real. But I left believing we can design for both.", attr: "— Product VP, Enterprise SaaS" },
  { text: "Artists don't need to learn to code. Engineers need to learn to see.", attr: "— UX Researcher" },
  { text: "The permission structure insight hit hard. We have a cultural problem masquerading as a talent problem.", attr: "— Innovation Director" },
  { text: "Best Braindate I've ever attended. Usually these things are polite. This one was genuinely challenging.", attr: "— Conference Veteran" },
];

export function RoundtableRecap() {
  return (
    <div>
      {/* HERO */}
      <section style={{ backgroundColor: "#0A0A0A", minHeight: "45vh" }} className="flex items-center">
        <div className="max-w-[1200px] mx-auto px-6 py-16">
          <p style={{ color: "#F97C3C", fontSize: 12, fontWeight: 700, letterSpacing: "0.1em", textTransform: "uppercase" }} className="mb-3">Braindate Recap</p>
          <h1 className="text-white mb-4 max-w-4xl" style={{ fontSize: "clamp(28px, 3.5vw, 44px)", fontWeight: 700, lineHeight: 1.15 }}>
            Why Your AI Strategy Needs an Artist as Much as an Engineer
          </h1>
          <p style={{ color: "#6B6B6B", fontSize: 16 }} className="mb-6">A Braindate conversation at SXSW 2026</p>
          <p className="text-white max-w-[700px]" style={{ fontSize: 14, lineHeight: 1.7 }}>
            Braindates are structured peer conversations at SXSW where anyone can propose a topic and invite others to discuss it. Unlike panels, there's no audience—everyone participates. This session drew 16 people from across disciplines for an hour of genuine debate.
          </p>
        </div>
      </section>

      {/* PROVOCATION */}
      <section style={{ backgroundColor: "#F7F5F0" }} className="py-20">
        <div className="max-w-[900px] mx-auto px-6 text-center">
          <p style={{ color: "#12674A", fontSize: 12, fontWeight: 700, letterSpacing: "0.1em", textTransform: "uppercase" }} className="mb-8">The Argument</p>
          <div className="relative">
            <span className="absolute -top-6 -left-4 select-none" style={{ fontSize: 80, color: "#12674A", opacity: 0.3, fontFamily: "Georgia, serif", lineHeight: 1 }}>"</span>
            <p style={{ fontSize: 28, fontWeight: 700, color: "#1A1A1A", lineHeight: 1.5 }} className="mb-8">
              The companies that will dominate the AI era aren't the ones with the best models—they're the ones who understand that technology adoption is fundamentally a human design problem that requires artistic thinking.
            </p>
          </div>
          <p style={{ fontSize: 16, color: "#1A1A1A", lineHeight: 1.8 }} className="mb-4">
            This provocation set the table for an hour of genuine debate. The claim isn't that artists should replace engineers—it's that the absence of artistic thinking in AI strategy creates a predictable adoption gap that no amount of engineering can close.
          </p>
          <p style={{ fontSize: 16, color: "#1A1A1A", lineHeight: 1.8 }}>
            What followed was one of the most productive disagreements I've experienced at any conference.
          </p>
        </div>
      </section>

      {/* DISCUSSION MAP */}
      <section style={{ backgroundColor: "#F7F5F0" }} className="pb-20">
        <div className="max-w-[1200px] mx-auto px-6">
          <h2 style={{ fontSize: 32, fontWeight: 700, color: "#1A1A1A" }} className="mb-10">How the Conversation Unfolded</h2>
          <div className="space-y-6">
            {themes.map((t, i) => (
              <div key={i} className="bg-white rounded-lg shadow-sm p-8" style={{ borderRadius: 8 }}>
                <div className="flex gap-4 items-start">
                  <div className="w-10 h-10 rounded-full flex-shrink-0 flex items-center justify-center text-white" style={{ backgroundColor: "#12674A", fontSize: 14, fontWeight: 700 }}>{i + 1}</div>
                  <div className="flex-1">
                    <h3 style={{ fontSize: 20, fontWeight: 700, color: "#1A1A1A" }} className="mb-3">{t.title}</h3>
                    <p style={{ fontSize: 16, color: "#1A1A1A", lineHeight: 1.7 }} className="mb-4">{t.desc}</p>
                    <div className="pl-4 py-3" style={{ borderLeft: "3px solid #F97C3C" }}>
                      <p style={{ fontSize: 14, color: "#1A1A1A", lineHeight: 1.7, fontStyle: "italic" }}>{t.tension}</p>
                    </div>
                  </div>
                </div>
              </div>
            ))}
          </div>
        </div>
      </section>

      {/* PARTICIPANT VOICES */}
      <section style={{ backgroundColor: "#F7F5F0" }} className="pb-20">
        <div className="max-w-[1200px] mx-auto px-6">
          <h2 style={{ fontSize: 32, fontWeight: 700, color: "#1A1A1A" }} className="mb-10">What People Said</h2>
          <div className="columns-1 md:columns-2 lg:columns-3 gap-6">
            {voices.map((v, i) => (
              <div key={i} className="break-inside-avoid mb-6 rounded-lg p-6" style={{ backgroundColor: voiceColors[i % voiceColors.length], borderRadius: 8 }}>
                <p style={{ fontSize: 16, fontStyle: "italic", color: "#1A1A1A", lineHeight: 1.6 }} className="mb-3">"{v.text}"</p>
                <p style={{ fontSize: 12, fontWeight: 700, color: "#1A1A1A" }}>{v.attr}</p>
              </div>
            ))}
          </div>
        </div>
      </section>

      {/* SYNTHESIS */}
      <section style={{ backgroundColor: "#0A0A0A" }} className="py-20">
        <div className="max-w-[800px] mx-auto px-6 text-center">
          <h2 className="text-white mb-8" style={{ fontSize: 28, fontWeight: 700 }}>What I Took Away</h2>
          <p className="text-white mb-6" style={{ fontSize: 18, lineHeight: 1.8 }}>
            The most surprising outcome wasn't agreement—it was the quality of disagreement. Engineers and artists arguing about adoption strategy from fundamentally different premises, yet arriving at overlapping conclusions through completely different reasoning paths.
          </p>
          <p className="text-white mb-6" style={{ fontSize: 18, lineHeight: 1.8 }}>
            The translation layer problem is real, and it won't be solved by hiring "creative technologists." It requires organizational redesign that puts artistic thinking at the strategic level, not the execution level.
          </p>
          <p className="text-white" style={{ fontSize: 18, fontWeight: 700, lineHeight: 1.8 }}>
            The future of AI strategy isn't technical or creative—it's both, simultaneously, from the very first conversation.
          </p>
        </div>
      </section>

      {/* CTA */}
      <section style={{ backgroundColor: "#F7F5F0" }} className="py-16">
        <div className="max-w-[1200px] mx-auto px-6 grid md:grid-cols-2 gap-6">
          <Link to="/workshop" className="bg-white rounded-lg shadow-sm p-6 hover:shadow-md transition-shadow block" style={{ borderRadius: 8, borderLeft: "3px solid #12674A" }}>
            <h3 style={{ fontSize: 18, fontWeight: 700, color: "#1A1A1A" }}>Read the Workshop Recap →</h3>
            <p style={{ fontSize: 14, color: "#6B6B6B" }} className="mt-2">See how artistic disruption works in practice with a hands-on methodology.</p>
          </Link>
          <Link to="/trends" className="bg-white rounded-lg shadow-sm p-6 hover:shadow-md transition-shadow block" style={{ borderRadius: 8, borderLeft: "3px solid #12674A" }}>
            <h3 style={{ fontSize: 18, fontWeight: 700, color: "#1A1A1A" }}>See the Trend Report →</h3>
            <p style={{ fontSize: 14, color: "#6B6B6B" }} className="mt-2">The artist-engineer convergence was one of 10 signals identified across SXSW.</p>
          </Link>
        </div>
      </section>
    </div>
  );
}
