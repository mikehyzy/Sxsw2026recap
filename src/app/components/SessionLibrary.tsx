import { useState } from "react";

const trackColors: Record<string, string> = {
  "Tech & AI": "#50AFE8",
  "Brand & Marketing": "#F97C3C",
  "Design": "#12674A",
  "Health": "#2E8B57",
  "Culture": "#6C7EB7",
  "Startups": "#D4A017",
};

const formats = ["All Formats", "Keynote", "Featured Session", "Panel", "Workshop", "Mentor Session"];

const sessions = [
  { title: "Agentic AI: From Copilot to Colleague", speakers: "Dr. Sarah Chen, Microsoft", date: "March 13, 2026", track: "Tech & AI", format: "Keynote", summary: "Exploring the transition from AI assistants to autonomous agents in enterprise workflows, with live demonstrations of agent orchestration." },
  { title: "The Brand Activation Playbook for 2027", speakers: "Marcus Rivera, Ogilvy", date: "March 14, 2026", track: "Brand & Marketing", format: "Featured Session", summary: "A data-driven framework for designing brand activations that create lasting impressions beyond the event itself." },
  { title: "Artistic Disruption for Business Innovation", speakers: "Michael Marshall & You", date: "March 15, 2026", track: "Design", format: "Workshop", summary: "Hands-on workshop applying surrealist, situationist, and futurist methodologies to real business challenges." },
  { title: "AI Meets FDA: Navigating Healthcare Regulation", speakers: "Dr. Amara Osei, FDA", date: "March 13, 2026", track: "Health", format: "Featured Session", summary: "The FDA commissioner's perspective on regulating AI-powered medical devices and the path toward adaptive regulation." },
  { title: "Open Source as Competitive Strategy", speakers: "Yann LeCun, Meta AI", date: "March 16, 2026", track: "Tech & AI", format: "Keynote", summary: "How Meta's open-source AI strategy with Llama 3 is reshaping the competitive landscape and building ecosystem moats." },
  { title: "The Spatial Festival: Designing Distributed Events", speakers: "Amanda Torres, SXSW", date: "March 14, 2026", track: "Culture", format: "Panel", summary: "How SXSW adapted to a post-convention-center world and what it teaches about designing distributed experiences." },
  { title: "Gamification Beyond Engagement", speakers: "You", date: "March 17, 2026", track: "Design", format: "Mentor Session", summary: "A mentor session exploring how gamification frameworks drive adoption and behavioral change, not just surface-level engagement metrics." },
  { title: "Startup Pitch: Health AI Edition", speakers: "Various Founders", date: "March 15, 2026", track: "Startups", format: "Panel", summary: "Eight health-AI startups pitch their solutions to a panel of investors and healthcare executives." },
  { title: "Creator Tools in the Enterprise", speakers: "Ivan Zhao, Notion", date: "March 16, 2026", track: "Brand & Marketing", format: "Featured Session", summary: "How tools born in the creator economy are being adopted by Fortune 500 companies and reshaping enterprise workflows." },
];

export function SessionLibrary() {
  const [selectedTrack, setSelectedTrack] = useState("All");
  const [selectedFormat, setSelectedFormat] = useState("All Formats");
  const [search, setSearch] = useState("");

  const filtered = sessions.filter((s) => {
    if (selectedTrack !== "All" && s.track !== selectedTrack) return false;
    if (selectedFormat !== "All Formats" && s.format !== selectedFormat) return false;
    if (search && !s.title.toLowerCase().includes(search.toLowerCase()) && !s.speakers.toLowerCase().includes(search.toLowerCase())) return false;
    return true;
  });

  return (
    <div>
      {/* Hero */}
      <section style={{ backgroundColor: "#0A0A0A", minHeight: "30vh" }} className="flex items-center">
        <div className="max-w-[1200px] mx-auto px-6 py-16 w-full text-center">
          <h1 className="text-white mb-4" style={{ fontSize: "clamp(32px, 4vw, 56px)", fontWeight: 700 }}>Session Library</h1>
          <p style={{ color: "#6B6B6B", fontSize: 18 }} className="mb-8">Searchable archive of sessions attended, March 12–18, 2026</p>
          <input
            type="text"
            placeholder="Search by title, speaker, or topic..."
            value={search}
            onChange={(e) => setSearch(e.target.value)}
            className="w-full max-w-[500px] px-5 py-3 rounded-lg bg-white outline-none"
            style={{ fontSize: 16, color: "#1A1A1A" }}
          />
        </div>
      </section>

      {/* Filter Bar */}
      <div className="sticky top-14 z-40 bg-white shadow-sm py-4">
        <div className="max-w-[1200px] mx-auto px-6">
          <div className="flex flex-wrap gap-2 mb-3">
            {["All", ...Object.keys(trackColors)].map((t) => (
              <button
                key={t}
                onClick={() => setSelectedTrack(t)}
                className="px-4 py-1.5 rounded transition-colors"
                style={{
                  borderRadius: 4,
                  fontSize: 13,
                  fontWeight: 600,
                  backgroundColor: selectedTrack === t ? (t === "All" ? "#12674A" : trackColors[t]) : "white",
                  color: selectedTrack === t ? "white" : (t === "All" ? "#12674A" : trackColors[t]),
                  border: `1px solid ${t === "All" ? "#12674A" : trackColors[t] || "#12674A"}`,
                }}
              >
                {t}
              </button>
            ))}
          </div>
          <div className="flex flex-wrap gap-2">
            {formats.map((f) => (
              <button
                key={f}
                onClick={() => setSelectedFormat(f)}
                className="px-4 py-1.5 rounded transition-colors"
                style={{
                  borderRadius: 4,
                  fontSize: 13,
                  fontWeight: 600,
                  backgroundColor: selectedFormat === f ? "#1A1A1A" : "white",
                  color: selectedFormat === f ? "white" : "#6B6B6B",
                  border: `1px solid ${selectedFormat === f ? "#1A1A1A" : "#ccc"}`,
                }}
              >
                {f}
              </button>
            ))}
          </div>
        </div>
      </div>

      {/* Session Count + Grid */}
      <section style={{ backgroundColor: "#F7F5F0" }} className="py-10">
        <div className="max-w-[1200px] mx-auto px-6">
          <p style={{ fontSize: 14, color: "#6B6B6B" }} className="mb-6">Showing {filtered.length} sessions</p>
          <div className="grid md:grid-cols-2 lg:grid-cols-3 gap-6">
            {filtered.map((s, i) => (
              <div key={i} className="bg-white rounded-lg shadow-sm overflow-hidden hover:shadow-md transition-shadow" style={{ borderRadius: 8 }}>
                <div className="h-1" style={{ backgroundColor: trackColors[s.track] || "#12674A" }} />
                <div className="p-6">
                  <div className="flex flex-wrap gap-2 mb-3">
                    <span className="px-2 py-0.5 text-white" style={{ backgroundColor: trackColors[s.track], borderRadius: 4, fontSize: 10, fontWeight: 600 }}>{s.track}</span>
                    <span className="px-2 py-0.5" style={{ backgroundColor: "#F7F5F0", color: "#6B6B6B", borderRadius: 4, fontSize: 10, fontWeight: 600 }}>{s.format}</span>
                  </div>
                  <h3 style={{ fontSize: 18, fontWeight: 700, color: "#1A1A1A", lineHeight: 1.3 }} className="mb-2 line-clamp-2">{s.title}</h3>
                  <p style={{ fontSize: 14, color: "#12674A" }} className="mb-1">{s.speakers}</p>
                  <p style={{ fontSize: 12, color: "#6B6B6B" }} className="mb-3">{s.date}</p>
                  <p style={{ fontSize: 14, color: "#6B6B6B", lineHeight: 1.5 }} className="line-clamp-3 mb-4">{s.summary}</p>
                  <a href="#" style={{ fontSize: 14, color: "#12674A", fontWeight: 600 }}>Read more →</a>
                </div>
              </div>
            ))}
          </div>
          <div className="mt-10 text-center">
            <button className="px-8 py-3 rounded-lg transition-colors hover:opacity-90" style={{ border: "2px solid #12674A", color: "#12674A", fontSize: 16, fontWeight: 600, borderRadius: 8, backgroundColor: "transparent" }}>
              Load more sessions
            </button>
          </div>
        </div>
      </section>
    </div>
  );
}
