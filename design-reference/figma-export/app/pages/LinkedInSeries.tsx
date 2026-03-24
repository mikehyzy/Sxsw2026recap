const articles = [
  { num: "01", title: "Day One: The Signal in the Noise", date: "March 12, 2026", excerpt: "First impressions from Austin as SXSW 2026 kicks off. The convention center is gone, the city is the venue, and the energy feels different this year. Here's what I'm watching." },
  { num: "02", title: "The Agentic AI Moment Has Arrived", date: "March 13, 2026", excerpt: "After three keynotes and a dozen demos, it's clear: agentic AI has moved from concept to deployment. But the gap between demo and production is wider than anyone on stage admitted." },
  { num: "03", title: "Why Every AI Team Needs an Artist", date: "March 14, 2026", excerpt: "A Braindate conversation with 16 strangers taught me more about AI strategy than any keynote. The missing ingredient isn't technical—it's creative." },
  { num: "04", title: "The Brand Activation Arms Race", date: "March 15, 2026", excerpt: "450 brand activations. Three-story immersive experiences. A full city block taken over by Google. SXSW has become the Super Bowl of experiential marketing." },
  { num: "05", title: "Governance Fatigue Is Real—And Dangerous", date: "March 16, 2026", excerpt: "Everyone's tired of talking about AI governance. But the EU AI Act is real, FDA pathways are tightening, and the companies ignoring this will pay the price." },
  { num: "06", title: "Seven Days Later: What Actually Mattered", date: "March 18, 2026", excerpt: "A synthesis of the signals, surprises, and strategic takeaways from a week in Austin. Not everything that trended mattered. Not everything that mattered trended." },
];

export function LinkedInSeries() {
  return (
    <div>
      <section style={{ backgroundColor: "#0A0A0A", minHeight: "35vh" }} className="flex items-center">
        <div className="max-w-[1200px] mx-auto px-6 py-16">
          <h1 className="text-white mb-4" style={{ fontSize: "clamp(32px, 4vw, 48px)", fontWeight: 700 }}>The SXSW 2026 Series</h1>
          <p style={{ color: "#6B6B6B", fontSize: 18 }}>6 dispatches from 7 days in Austin</p>
        </div>
      </section>

      <section style={{ backgroundColor: "#F7F5F0" }} className="py-12">
        <div className="max-w-[1200px] mx-auto px-6">
          <p style={{ fontSize: 16, color: "#1A1A1A", lineHeight: 1.8 }} className="max-w-3xl mb-2">
            Over seven days at SXSW 2026, I published a daily dispatch capturing the signals, tensions, and surprises as they happened. Each piece was written in the field—unpolished, immediate, and honest.
          </p>
          <p style={{ fontSize: 14, color: "#6B6B6B" }}>Published on LinkedIn, March 2026</p>
        </div>
      </section>

      <section style={{ backgroundColor: "#F7F5F0" }} className="pb-20">
        <div className="max-w-[1200px] mx-auto px-6 space-y-6">
          {articles.map((a) => (
            <div key={a.num} className="bg-white rounded-lg shadow-sm flex items-center gap-8 p-8 hover:shadow-md transition-shadow cursor-pointer" style={{ borderRadius: 8, borderBottom: "1px solid #E0E0E0" }}>
              <p className="hidden md:block flex-shrink-0" style={{ fontSize: 48, fontWeight: 700, color: "#12674A", width: 80, textAlign: "center" }}>{a.num}</p>
              <div className="flex-1">
                <h3 style={{ fontSize: 22, fontWeight: 700, color: "#1A1A1A" }} className="mb-1">{a.title}</h3>
                <p style={{ fontSize: 12, color: "#6B6B6B" }} className="mb-2">{a.date}</p>
                <p style={{ fontSize: 14, color: "#6B6B6B", lineHeight: 1.6 }} className="mb-3">{a.excerpt}</p>
                <a href="#" style={{ fontSize: 14, color: "#12674A" }} className="hover:underline">Read on LinkedIn →</a>
              </div>
            </div>
          ))}
        </div>
      </section>
    </div>
  );
}
