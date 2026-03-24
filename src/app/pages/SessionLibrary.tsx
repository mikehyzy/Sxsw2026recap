import { useState } from "react";

const TRACKS = [
  { label: "All", color: "#12674A" },
  { label: "Tech & AI", color: "#50AFE8" },
  { label: "Brand & Marketing", color: "#F97C3C" },
  { label: "Design", color: "#12674A" },
  { label: "Health", color: "#2E8B57" },
  { label: "Culture", color: "#6C7EB7" },
  { label: "Startups", color: "#D4A017" },
];
const FORMATS = ["All Formats", "Keynote", "Featured Session", "Panel", "Workshop", "Mentor Session"];

const sessions = [
  { title: "The Agentic Enterprise: Building AI That Acts", speaker: "Dr. Sarah Chen, OpenAI", date: "March 13, 2026", track: "Tech & AI", format: "Keynote", color: "#50AFE8", summary: "How enterprise teams are moving from AI demonstrations to production-grade autonomous agents that handle complex workflows end-to-end." },
  { title: "Artistic Disruption for Business Innovation", speaker: "Michael Marshall & You", date: "March 14, 2026", track: "Design", format: "Workshop", color: "#12674A", summary: "A hands-on workshop using surrealist, situationist, and futurist methodologies to unlock innovation that conventional business frameworks miss." },
  { title: "Why Brand Activations Eat Strategy for Breakfast", speaker: "Jenna Rodriguez, WPP", date: "March 15, 2026", track: "Brand & Marketing", format: "Featured Session", color: "#F97C3C", summary: "Exploring why experiential marketing budgets have tripled since 2023 and what that means for traditional advertising channels." },
  { title: "FDA and the AI Frontier in Healthcare", speaker: "Dr. Marcus Webb, FDA", date: "March 13, 2026", track: "Health", format: "Panel", color: "#2E8B57", summary: "A candid discussion about regulatory pathways for AI-powered diagnostics and the timeline from lab validation to clinical deployment." },
  { title: "Open Source AI: Competitive Strategy or Idealism?", speaker: "Yann LeCun, Meta AI", date: "March 16, 2026", track: "Tech & AI", format: "Keynote", color: "#50AFE8", summary: "Meta's chief AI scientist makes the case that open-source AI creates stronger competitive moats than proprietary approaches." },
  { title: "The Spatial Design of Distributed Events", speaker: "Rem Koolhaas & Partners", date: "March 14, 2026", track: "Design", format: "Featured Session", color: "#12674A", summary: "How SXSW's post-convention-center era has created an unintentional masterclass in distributed urban event design." },
  { title: "Creator Tools for the Enterprise", speaker: "Ivan Zhao, Notion", date: "March 15, 2026", track: "Tech & AI", format: "Featured Session", color: "#50AFE8", summary: "Notion's founder on why consumer content creation tools are being adapted for internal communications and knowledge management." },
  { title: "Behavioral Science Meets Product Design", speaker: "Nir Eyal & Dr. BJ Fogg", date: "March 16, 2026", track: "Culture", format: "Panel", color: "#6C7EB7", summary: "Two pioneers of behavioral design debate whether habit-forming products are ethical and how to build adoption without manipulation." },
  { title: "The Pitch: AI Startups Changing Healthcare", speaker: "Various Founders", date: "March 17, 2026", track: "Startups", format: "Panel", color: "#D4A017", summary: "Six startups pitch their AI healthcare solutions to a panel of investors and hospital system CTOs in a rapid-fire format." },
];

export function SessionLibrary() {
  const [selectedTrack, setSelectedTrack] = useState("All");
  const [selectedFormat, setSelectedFormat] = useState("All Formats");
  const [search, setSearch] = useState("");

  const filtered = sessions.filter((s) => {
    if (selectedTrack !== "All" && s.track !== selectedTrack) return false;
    if (selectedFormat !== "All Formats" && s.format !== selectedFormat) return false;
    if (search && !s.title.toLowerCase().includes(search.toLowerCase()) && !s.speaker.toLowerCase().includes(search.toLowerCase())) return false;
    return true;
  });

  return (
    <div>
      <section style={{ backgroundColor: "#0A0A0A", minHeight: "30vh" }} className="flex flex-col items-center justify-center px-6 py-16">
        <h1 className="text-white mb-2 text-center" style={{ fontSize: "clamp(32px, 4vw, 56px)", fontWeight: 700 }}>Session Library</h1>
        <p style={{ color: "#6B6B6B", fontSize: 16 }} className="mb-8 text-center">Searchable archive of sessions attended, March 12–18, 2026</p>
        <input
          type="text"
          placeholder="Search by title, speaker, or topic..."
          value={search}
          onChange={(e) => setSearch(e.target.value)}
          className="w-full max-w-[500px] px-5 py-3 rounded-lg outline-none"
          style={{ fontSize: 15, borderRadius: 8 }}
        />
      </section>

      {/* FILTER BAR */}
      <div className="sticky top-14 z-40 bg-white shadow-sm py-4">
        <div className="max-w-[1200px] mx-auto px-6">
          <div className="flex flex-wrap gap-2 mb-2">
            {TRACKS.map((t) => (
              <button
                key={t.label}
                onClick={() => setSelectedTrack(t.label)}
                className="px-4 py-1.5 rounded transition-colors"
                style={{
                  fontSize: 13,
                  borderRadius: 4,
                  backgroundColor: selectedTrack === t.label ? t.color : "white",
                  color: selectedTrack === t.label ? "white" : t.color,
                  border: `1px solid ${t.color}`,
                }}
              >
                {t.label}
              </button>
            ))}
          </div>
          <div className="flex flex-wrap gap-2">
            {FORMATS.map((f) => (
              <button
                key={f}
                onClick={() => setSelectedFormat(f)}
                className="px-4 py-1.5 rounded transition-colors"
                style={{
                  fontSize: 13,
                  borderRadius: 4,
                  backgroundColor: selectedFormat === f ? "#12674A" : "white",
                  color: selectedFormat === f ? "white" : "#6B6B6B",
                  border: `1px solid ${selectedFormat === f ? "#12674A" : "#ccc"}`,
                }}
              >
                {f}
              </button>
            ))}
          </div>
        </div>
      </div>

      <section style={{ backgroundColor: "#F7F5F0" }} className="py-10">
        <div className="max-w-[1200px] mx-auto px-6">
          <p style={{ fontSize: 14, color: "#6B6B6B" }} className="mb-6">Showing {filtered.length} sessions</p>
          <div className="grid md:grid-cols-2 lg:grid-cols-3 gap-6">
            {filtered.map((s, i) => (
              <div key={i} className="bg-white rounded-lg shadow-sm overflow-hidden cursor-pointer hover:shadow-md transition-shadow" style={{ borderRadius: 8 }}>
                <div style={{ height: 4, backgroundColor: s.color }} />
                <div className="p-5">
                  <div className="flex gap-2 mb-3">
                    <span className="text-white px-2 py-0.5 rounded" style={{ fontSize: 10, backgroundColor: s.color, borderRadius: 4 }}>{s.track}</span>
                    <span className="px-2 py-0.5 rounded" style={{ fontSize: 10, backgroundColor: "#F7F5F0", color: "#6B6B6B", borderRadius: 4 }}>{s.format}</span>
                  </div>
                  <h3 style={{ fontSize: 18, fontWeight: 700, color: "#1A1A1A", lineHeight: 1.3 }} className="mb-2 line-clamp-2">{s.title}</h3>
                  <p style={{ fontSize: 14, color: "#12674A" }} className="mb-1">{s.speaker}</p>
                  <p style={{ fontSize: 12, color: "#6B6B6B" }} className="mb-3">{s.date}</p>
                  <p style={{ fontSize: 14, color: "#6B6B6B", lineHeight: 1.6 }} className="line-clamp-3 mb-4">{s.summary}</p>
                  <p style={{ fontSize: 14, color: "#12674A" }}>Read more →</p>
                </div>
              </div>
            ))}
          </div>
          <div className="text-center mt-10">
            <button className="px-8 py-3 rounded-lg transition-colors hover:bg-[#12674A] hover:text-white" style={{ fontSize: 14, color: "#12674A", border: "1px solid #12674A", borderRadius: 8 }}>
              Load more sessions
            </button>
          </div>
        </div>
      </section>
    </div>
  );
}
