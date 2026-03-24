const categories = [
  {
    title: "AI & Machine Learning Platforms",
    color: "#50AFE8",
    resources: [
      { name: "OpenAI Platform", desc: "GPT-4o and agent orchestration APIs for enterprise deployment" },
      { name: "Hugging Face", desc: "Open-source model hub and collaborative ML development platform" },
      { name: "Anthropic Claude", desc: "Constitutional AI with enterprise safety and alignment focus" },
      { name: "Google Vertex AI", desc: "End-to-end ML platform with managed infrastructure" },
    ],
  },
  {
    title: "Governance & Safety Frameworks",
    color: "#12674A",
    resources: [
      { name: "NIST AI Risk Management Framework", desc: "Federal guidelines for identifying and managing AI risks" },
      { name: "EU AI Act Compliance Toolkit", desc: "Implementation resources for the European AI regulation" },
      { name: "Responsible AI Institute", desc: "Certification and assessment tools for ethical AI development" },
    ],
  },
  {
    title: "Creative & Design Tools",
    color: "#F97C3C",
    resources: [
      { name: "Figma", desc: "Collaborative interface design and prototyping platform" },
      { name: "Adobe Firefly", desc: "Generative AI creative tools integrated into Creative Cloud" },
      { name: "Runway ML", desc: "AI-powered video editing and generation tools for creators" },
      { name: "Miro", desc: "Visual collaboration platform for distributed creative teams" },
    ],
  },
  {
    title: "Data & Analytics",
    color: "#6C7EB7",
    resources: [
      { name: "Snowflake", desc: "Cloud data platform for unified analytics and data sharing" },
      { name: "dbt", desc: "SQL-first transformation tool for analytics engineering" },
      { name: "Tableau", desc: "Visual analytics platform for business intelligence" },
    ],
  },
  {
    title: "Books & Publications",
    color: "#D4A017",
    resources: [
      { name: "Gamification for Product Excellence", desc: "Behavioral design frameworks for product adoption" },
      { name: "The Alignment Problem", desc: "Brian Christian's exploration of AI safety and human values" },
      { name: "Hooked", desc: "Nir Eyal's model for building habit-forming products" },
      { name: "Creative Confidence", desc: "Tom and David Kelley on unleashing creative potential" },
    ],
  },
];

export function Resources() {
  return (
    <div>
      <section style={{ backgroundColor: "#0A0A0A", minHeight: "30vh" }} className="flex items-center">
        <div className="max-w-[1200px] mx-auto px-6 py-16">
          <h1 className="text-white mb-2" style={{ fontSize: "clamp(32px, 4vw, 48px)", fontWeight: 700 }}>Resources & Tools</h1>
          <p style={{ color: "#6B6B6B", fontSize: 18 }}>Platforms, frameworks, and companies referenced across sessions</p>
        </div>
      </section>

      <section style={{ backgroundColor: "#F7F5F0" }} className="py-16">
        <div className="max-w-[1200px] mx-auto px-6 space-y-16">
          {categories.map((cat) => (
            <div key={cat.title}>
              <h2 className="mb-6 pl-4" style={{ fontSize: 24, fontWeight: 700, color: "#1A1A1A", borderLeft: `4px solid ${cat.color}` }}>{cat.title}</h2>
              <div className="grid md:grid-cols-2 lg:grid-cols-3 gap-6">
                {cat.resources.map((r) => (
                  <div key={r.name} className="bg-white rounded-lg shadow-sm p-5 hover:shadow-md transition-shadow" style={{ borderRadius: 8 }}>
                    <h3 style={{ fontSize: 18, fontWeight: 700, color: "#1A1A1A" }} className="mb-2">{r.name}</h3>
                    <p style={{ fontSize: 14, color: "#6B6B6B", lineHeight: 1.6 }} className="mb-3">{r.desc}</p>
                    <span className="inline-block text-white px-2 py-0.5 rounded mr-2 mb-2" style={{ fontSize: 10, backgroundColor: cat.color, borderRadius: 4 }}>{cat.title}</span>
                    <a href="#" style={{ fontSize: 14, color: "#12674A" }} className="hover:underline block">Visit →</a>
                  </div>
                ))}
              </div>
            </div>
          ))}
        </div>
      </section>
    </div>
  );
}
