const articles = [
  { num: "01", title: "Day 1: The Festival Without a Center", date: "March 12, 2026", excerpt: "SXSW 2026 opens without the Austin Convention Center for the first time in decades. What emerged was a distributed festival that accidentally became the best case study in spatial experience design I've ever seen." },
  { num: "02", title: "Day 2: Agentic AI Gets Real", date: "March 13, 2026", excerpt: "The keynotes today moved past AI demos and into deployment stories. Three themes emerged: agent orchestration, human-AI handoff design, and the governance gap that nobody wants to talk about." },
  { num: "03", title: "Day 3: The Artist-Engineer Gap", date: "March 14, 2026", excerpt: "After hosting a Braindate on why AI teams need artists, I'm more convinced than ever that the innovation industry has a creativity problem. Here's what 12 strangers taught me about cognitive diversity." },
  { num: "04", title: "Day 4: Workshop Reflections — When Art Becomes Strategy", date: "March 15, 2026", excerpt: "Co-leading the Artistic Disruption workshop with Michael Marshall produced results that surprised even us. Surrealist techniques applied to business problems generated ideas that conventional methods simply can't reach." },
  { num: "05", title: "Day 5-6: The Brand Activation Arms Race", date: "March 16, 2026", excerpt: "450 brand activations. Three stories tall of immersive experiences. But does spectacle equal impact? A field guide to what worked, what didn't, and what it means for experiential marketing in 2027." },
  { num: "06", title: "Day 7: What SXSW 2026 Meant", date: "March 18, 2026", excerpt: "Synthesizing seven days into signal and noise. The ten trends that will define the next year of innovation, and the one question every leader should be asking after this festival." },
];

export function LinkedInSeries() {
  return (
    <div>
      {/* Hero */}
      <section style={{ backgroundColor: "#0A0A0A", minHeight: "35vh" }} className="flex items-center">
        <div className="max-w-[1200px] mx-auto px-6 py-20 w-full">
          <h1 className="text-white mb-4" style={{ fontSize: "clamp(32px, 4vw, 48px)", fontWeight: 700 }}>The SXSW 2026 Series</h1>
          <p style={{ color: "#6B6B6B", fontSize: 18 }}>6 dispatches from 7 days in Austin</p>
        </div>
      </section>

      {/* Overview */}
      <section style={{ backgroundColor: "#F7F5F0" }} className="py-16">
        <div className="max-w-[1200px] mx-auto px-6">
          <p style={{ fontSize: 16, color: "#1A1A1A", lineHeight: 1.8, maxWidth: 800 }}>
            Each day at SXSW 2026, I published a dispatch synthesizing the most important signals from the festival. The series covers everything from agentic AI deployment to the spatial design implications of a distributed festival. Together, they form a practitioner's real-time diary of a week that will shape the rest of 2026.
          </p>
          <p style={{ fontSize: 14, color: "#6B6B6B" }} className="mt-4">Published on LinkedIn, March 2026</p>
        </div>
      </section>

      {/* Article Cards */}
      <section style={{ backgroundColor: "#F7F5F0" }} className="pb-20">
        <div className="max-w-[1200px] mx-auto px-6 space-y-6">
          {articles.map((a) => (
            <div key={a.num} className="bg-white rounded-lg shadow-sm flex items-stretch overflow-hidden hover:shadow-md transition-shadow" style={{ borderRadius: 8, borderBottom: "1px solid #E0E0E0" }}>
              <div className="flex items-center justify-center px-8 flex-shrink-0" style={{ minWidth: 100 }}>
                <span style={{ fontSize: 48, fontWeight: 700, color: "#12674A" }}>{a.num}</span>
              </div>
              <div className="p-6 flex-1">
                <h3 style={{ fontSize: 22, fontWeight: 700, color: "#1A1A1A" }} className="mb-1">{a.title}</h3>
                <p style={{ fontSize: 12, color: "#6B6B6B" }} className="mb-3">{a.date}</p>
                <p style={{ fontSize: 14, color: "#6B6B6B", lineHeight: 1.6 }} className="mb-3">{a.excerpt}</p>
                <a href="#" style={{ fontSize: 14, color: "#12674A", fontWeight: 600 }}>Read on LinkedIn →</a>
              </div>
            </div>
          ))}
        </div>
      </section>
    </div>
  );
}
