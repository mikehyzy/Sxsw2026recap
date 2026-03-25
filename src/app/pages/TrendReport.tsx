import { Link } from "react-router";
import { useState, useMemo } from "react";
import { ChevronDown, ChevronUp, ArrowUpDown } from "lucide-react";

/* ───────── Palette ───────── */
const C = {
  black: "#000000",
  mint: "#A8F5C8",
  purple: "#7B61FF",
  yellow: "#FFC700",
  lime: "#D4ED37",
  pink: "#FFB6D0",
  coral: "#F0B898",
  cyan: "#A8E8E8",
  lavender: "#C0A8F0",
  darkGray: "#1A1A1A",
  gray: "#6B6B6B",
  lightBg: "#F0FFF4",
  border: "#E0E0E0",
};

/* ───────── Signal Data (from SXSW_2026_Trend_Report.md JSON block) ───────── */
const signals = [
  {
    id: 1,
    num: "01",
    name: "The Cognitive Offloading Crisis",
    subtitle: "Human brains are atrophying because AI is too convenient to resist",
    signal_strength: 8,
    enterprise_readiness: 6,
    time_horizon: "NOW",
    risk_level: "HIGH",
    key_speakers: ["Sanjay Sarma (MIT)", "Olivia Joseph (MIT)", "Sahar Yousef (UC Berkeley)"],
    market_opportunity: "Cognitive preservation training, deliberate thinking frameworks",
    thesis: "As delegation to AI becomes frictionless, the neural networks supporting memory, attention, and problem-solving are degrading in real time, creating a generation operating at reduced cognitive capacity.",
    evidence: [
      "Sanjay Sarma (MIT): \"We are flirting with brain atrophy.\" Google Maps has already destroyed our sense of direction.",
      "Olivia Joseph (MIT): Students solving programming exercises without writing a single line of code. Linguistic homogenization across student papers.",
      "Dr. Sahar Yousef (UC Berkeley): Unpublished data showing most \"AI augmentation\" is shallow cognitive offloading in disguise.",
      "MIT Media Lab's Nataliya Kos'myna: Reading comprehension drops by nearly half when people habitually avoid difficult content.",
    ],
    implications: "Organizations that preserve deliberate, effortful cognition for their teams will maintain strategic advantages. This suggests a market for \"cognitive preservation\" training, frameworks for high-stakes decision-making that resist AI automation, and educational models that front-load fundamentals.",
    color: C.mint,
  },
  {
    id: 2,
    num: "02",
    name: "Agentic Experience Design (AX)",
    subtitle: "The interface is disappearing; human intent is becoming the protocol",
    signal_strength: 8,
    enterprise_readiness: 7,
    time_horizon: "12 MONTHS",
    risk_level: "MEDIUM",
    key_speakers: ["John Maeda (Microsoft)", "Greg Nudelman (UXforAI)"],
    market_opportunity: "Design tool innovation, AX training, agentic system consulting",
    thesis: "User experience (UX) is being replaced by Agentic Experience (AX) — orchestrating outcomes through conversations with autonomous systems that have no visual interface.",
    evidence: [
      "John Maeda (Microsoft): Design in Tech Report subtitled \"From UX to AX.\" Four AI UX design spaces: Chat, Document, Table, Canvas.",
      "Maeda introduced the \"Tree-Shaped Designer\" replacing the classic T-shaped model.",
      "Greg Nudelman: 85% of AI projects fail because teams answered the wrong question. His \"Snowball Design Sprint\" prototypes agents using RAG, digital twins, and value matrices.",
    ],
    implications: "Traditional wireframing, usability testing, and information architecture have limited application to agent systems. Organizations need designers who understand agentic systems, multi-turn conversation design, and graceful failure modes.",
    color: C.purple,
  },
  {
    id: 3,
    num: "03",
    name: "The Post-Search Internet Economy",
    subtitle: "Search as we know it is ending; bot commerce is replacing human consumer behavior",
    signal_strength: 9,
    enterprise_readiness: 9,
    time_horizon: "NOW",
    risk_level: "CRITICAL",
    key_speakers: ["Matthew Prince (Cloudflare)"],
    market_opportunity: "Data licensing, proprietary information monetization, new business models",
    thesis: "AI agents are displacing human searchers at scale, breaking the advertising business model that built the modern internet and forcing new value structures based on proprietary data access.",
    evidence: [
      "Matthew Prince (Cloudflare): By 2027, bot traffic will exceed human traffic in search.",
      "News organizations expect search-referral traffic to decline by 43% over three years, some anticipating 75%+ losses.",
      "\"An AI agent might visit thousands of websites in seconds, with no emotional response to your homepage design, your brand story, or your banner ad.\"",
      "Retailers splitting: Walmart opening for bot shoppers, Amazon blocking them, Target testing middle ground.",
      "Prince's \"Messy Middle\": some employees dramatically more productive with AI, others haven't adopted it, yet both earn the same salary.",
    ],
    implications: "The collapse of search-dependent revenue forces media, e-commerce, and digital services to reinvent around data licensing and direct agent access. Organizations with unique data assets have leverage. Those competing on attention alone face structural decline.",
    color: C.yellow,
  },
  {
    id: 4,
    num: "04",
    name: "Cognitive Fitness as Luxury Good",
    subtitle: "The ability to think deliberately becomes a status marker",
    signal_strength: 7,
    enterprise_readiness: 5,
    time_horizon: "2-3 YEARS",
    risk_level: "MEDIUM",
    key_speakers: ["Sanjay Sarma (MIT)", "Steven Spielberg"],
    market_opportunity: "Premium cognitive training, analog tools, executive coaching, philosophical education",
    thesis: "As AI automation becomes ubiquitous, the capacity for deep cognition — memory retention, sustained attention, novel problem-solving — becomes a scarce and expensive human capability.",
    evidence: [
      "High-end consulting and creative work commands premium fees because it requires novel thinking.",
      "Spielberg's insistence on storyboarding-free filmmaking preserved intuitive visual problem-solving.",
      "The sold-out Artistic Disruption workshop sold precisely because it promised thinking that algorithmic frameworks cannot produce.",
    ],
    implications: "Expect premium services marketed as \"cognitive preservation\" or \"thinking without machines.\" Luxury brands will position around deliberate cognition. Executive coaching shifts toward sustaining human judgment under AI pressure.",
    color: C.coral,
  },
  {
    id: 5,
    num: "05",
    name: "Convergence Thinking",
    subtitle: "The future is plural, interconnected, and irreversible; isolated forecasts are obsolete",
    signal_strength: 8,
    enterprise_readiness: 6,
    time_horizon: "NOW",
    risk_level: "HIGH",
    key_speakers: ["Amy Webb"],
    market_opportunity: "Scenario planning, convergence mapping tools, systems consulting",
    thesis: "Single-variable trend analysis is dead. The future is defined by multiple forces converging simultaneously — creating irreversible new realities that cannot be understood in isolation.",
    evidence: [
      "Amy Webb staged a theatrical funeral for her own trend report format, replacing it with the \"Convergence Outlook.\"",
      "Ten convergences identified: Compute Shock, Emotional Outsourcing, New Labor Equation, Human Augmentation, Autonomous Care, and more.",
      "SXSW Health track independently confirmed the convergence — sessions on AI diagnostics, genetics, GLP-1 drugs, and psychedelic therapy were manifestations of the same shift.",
      "Webb: \"Nobody is coming to save you. If you want agency, you have to take action.\"",
    ],
    implications: "Strategic planning must shift from single-variable forecasting to multi-variable convergence mapping. Scenario planning becomes essential. Organizations still operating in isolated domain expertise will be blindsided.",
    color: C.mint,
  },
  {
    id: 6,
    num: "06",
    name: "Transparency Becomes Mandatory",
    subtitle: "AI disclosure and honest communication are now table stakes",
    signal_strength: 9,
    enterprise_readiness: 10,
    time_horizon: "NOW",
    risk_level: "CRITICAL",
    key_speakers: ["Daren Schillace (Fox)", "Morra Aarons-Mele"],
    market_opportunity: "AI disclosure tools, compliance frameworks, auditing services",
    thesis: "Fox Entertainment's disclosure failure crystallized a new norm: transparency about AI-generated content is mandatory, and organizations that violate it face immediate reputational consequences.",
    evidence: [
      "Daren Schillace (Fox): Posted AI content without disclosure; \"the immediate and vast rejection was surprising.\"",
      "DesignRush called it \"one of the best lessons at SXSW this year.\"",
      "Morra Aarons-Mele: Transparency is the key mechanism for dismantling AI fear narratives.",
      "EU AI Act approaching full enforceability in August 2026.",
    ],
    implications: "All organizations using AI-generated content need explicit disclosure frameworks. Regulatory bodies are coding this into law. Reputational liability is immediate.",
    color: C.yellow,
  },
  {
    id: 7,
    num: "07",
    name: "Health as AI's Test Case",
    subtitle: "Healthcare establishes governance precedent for all sectors",
    signal_strength: 8,
    enterprise_readiness: 9,
    time_horizon: "NOW",
    risk_level: "CRITICAL",
    key_speakers: ["Timnit Gebru (DAIR)", "Karen Hao", "UC San Diego researchers"],
    market_opportunity: "Healthcare AI governance, equity frameworks, physician-AI tools",
    thesis: "Healthcare's collision of urgent human need with AI capability creates the highest-stakes testing ground for AI governance, ethics, and institutional readiness.",
    evidence: [
      "40%+ of U.S. doctors using OpenEvidence daily for clinical decision support.",
      "UC San Diego: base-editing for rare diseases, RNA therapeutics for ALS, Trillion Gene Atlas (100x expansion of known genetic diversity).",
      "FDA staffing crisis: 20% of jobs cut, 70% of agency using \"Elsa\" AI tool, first-ever Chief AI Officer appointed.",
      "Timnit Gebru and Karen Hao warned against conflating specialized diagnostic AI with massive AGI models.",
    ],
    implications: "Healthcare AI governance becomes the model for all AI governance. Organizations need AI validation, equity frameworks, regulatory compliance, and physician-AI collaboration models immediately.",
    color: C.purple,
  },
  {
    id: 8,
    num: "08",
    name: "Storytelling as Business Asset",
    subtitle: "Narrative expertise becomes the scarce competitive resource",
    signal_strength: 9,
    enterprise_readiness: 8,
    time_horizon: "12 MONTHS",
    risk_level: "MEDIUM",
    key_speakers: ["Serena Williams", "Steven Spielberg", "Jamie Lee Curtis", "Daniel Kwan"],
    market_opportunity: "Narrative consulting, storytelling training, creator economy",
    thesis: "In an age where content can be infinitely generated, the ability to tell stories that move humans becomes the scarce competitive resource, creating premium markets for narrative expertise.",
    evidence: [
      "Serena Williams: \"The most underestimated skill in business is the ability to tell a compelling story.\"",
      "Steven Spielberg defended intuition, theatrical cinema, and the \"lost art of blocking.\"",
      "Jamie Lee Curtis: Films exist \"because people need to tell stories and others need to hear them.\"",
      "Daniel Kwan coined \"apocaloptimism\" — seeing AI risks while maintaining hope.",
    ],
    implications: "Organizations need to invest in narrative capabilities. Hire storytellers. Make narrative expertise central to strategy. The creator economy becomes increasingly valuable because creators are storytellers.",
    color: C.pink,
  },
  {
    id: 9,
    num: "09",
    name: "Institutional Knowledge Liability",
    subtitle: "Organizations that lose experienced judgment lose strategic resilience",
    signal_strength: 8,
    enterprise_readiness: 8,
    time_horizon: "2-3 YEARS",
    risk_level: "HIGH",
    key_speakers: ["Hugh Forrest (SXSW)", "FDA panelists"],
    market_opportunity: "Knowledge preservation systems, succession planning, experienced practitioner retention",
    thesis: "Cost-cutting that eliminates institutional knowledge creates structural fragility and loss of irreplaceable judgment.",
    evidence: [
      "Hugh Forrest dismissed after 35 years shaping SXSW: \"Leaving SXSW was definitely not my decision.\"",
      "11 senior staff dismissed including comedy festival producer, VP of Communications, and CTO.",
      "FDA: Loss of experienced policy staff \"hamstrings AI innovation because you need the experienced staff — they've seen it all.\"",
    ],
    implications: "Organizations cutting experienced judgment to optimize short-term economics are hollowing themselves out. Institutional knowledge is irreplaceable. The cost of replacement is much higher than short-term savings.",
    color: C.lavender,
  },
  {
    id: 10,
    num: "10",
    name: "Agentic Economy",
    subtitle: "Autonomous systems handle transactional work; humans evaluated on irreplaceable judgment",
    signal_strength: 7,
    enterprise_readiness: 7,
    time_horizon: "12-24 MONTHS",
    risk_level: "HIGH",
    key_speakers: ["Ian Beacraft", "Scott Galloway", "Amazon AGI Lab"],
    market_opportunity: "Organizational restructuring, new compensation models, human-centered workflow design",
    thesis: "The economy is bifurcating: machines handle reliable, predictable work; humans will be evaluated primarily on judgment, creativity, and relational expertise that machines cannot replicate.",
    evidence: [
      "Ian Beacraft and Scott Galloway: Most companies fail at AI because organizational structures are obsolete.",
      "Amazon: \"Something that is 30% reliable or 60% reliable or even 80% reliable is 0% useful\" — reliability threshold agents haven't cleared.",
      "Matthew Prince's \"Messy Middle\": employees at different AI productivity levels earning the same salary.",
    ],
    implications: "Compensation structures need to reflect the scarcity of human expertise. Training should emphasize judgment and creativity over process optimization. The \"Messy Middle\" problem becomes a crisis within 12 months.",
    color: C.cyan,
  },
];

const RISK_COLORS: Record<string, string> = {
  CRITICAL: C.yellow,
  HIGH: C.pink,
  MEDIUM: C.mint,
};

type SortKey = "id" | "signal_strength" | "enterprise_readiness";

/* ───────── Jitter offsets to spread overlapping points ───────── */
const JITTER: Record<number, [number, number]> = {
  1: [-1.5, 1],    // 8,6
  2: [1.5, -1],    // 8,7
  3: [1, 1.5],     // 9,9
  4: [0, 0],       // 7,5 — alone
  5: [-2, -1.5],   // 8,6
  6: [-1, -1.5],   // 9,10
  7: [1.5, 1],     // 8,9
  8: [-1.5, -0.5], // 9,8
  9: [0, 0],       // 8,8 — alone
  10: [0, 0],      // 7,7 — alone
};

/* ───────── Interactive Scatter Chart ───────── */
function SignalChart({ onSelect }: { onSelect: (id: number) => void }) {
  const [hovered, setHovered] = useState<number | null>(null);

  return (
    <div className="relative w-full" style={{ paddingBottom: "60%", minHeight: 400 }}>
      <div className="absolute inset-0">
        {/* SVG grid, quadrant lines, and labels */}
        <svg className="absolute inset-0 w-full h-full" viewBox="0 0 100 100" preserveAspectRatio="none">
          {/* Minor grid */}
          {[1,2,3,4,5,6,7,8,9,10].map((v) => (
            <line key={`h${v}`} x1="8" y1={95 - (v / 10) * 85} x2="98" y2={95 - (v / 10) * 85} stroke="rgba(255,255,255,0.06)" strokeWidth="0.2" />
          ))}
          {[1,2,3,4,5,6,7,8,9,10].map((v) => (
            <line key={`v${v}`} x1={(v / 10) * 88 + 8} y1="2" x2={(v / 10) * 88 + 8} y2="95" stroke="rgba(255,255,255,0.06)" strokeWidth="0.2" />
          ))}
          {/* Axis tick labels */}
          {[2,4,6,8,10].map((v) => (
            <text key={`yl${v}`} x="6" y={95 - (v / 10) * 85 + 1} fill="rgba(255,255,255,0.3)" fontSize="2.2" textAnchor="end">{v}</text>
          ))}
          {[2,4,6,8,10].map((v) => (
            <text key={`xl${v}`} x={(v / 10) * 88 + 8} y="99" fill="rgba(255,255,255,0.3)" fontSize="2.2" textAnchor="middle">{v}</text>
          ))}
          {/* QUADRANT DIVIDER LINES — thick and visible */}
          {/* Horizontal: signal_strength = 7.5 (between 7 and 8) */}
          <line x1="8" y1={95 - (7.5 / 10) * 85} x2="98" y2={95 - (7.5 / 10) * 85} stroke="rgba(255,255,255,0.25)" strokeWidth="0.4" strokeDasharray="2,1" />
          {/* Vertical: enterprise_readiness = 7.5 */}
          <line x1={(7.5 / 10) * 88 + 8} y1="2" x2={(7.5 / 10) * 88 + 8} y2="95" stroke="rgba(255,255,255,0.25)" strokeWidth="0.4" strokeDasharray="2,1" />

          {/* Quadrant background tints */}
          <rect x="8" y="2" width={(7.5/10)*88} height={95 - (95 - (7.5/10)*85)} rx="1" fill="rgba(255,182,208,0.04)" />
          <rect x={(7.5/10)*88+8} y="2" width={98-(7.5/10)*88-8} height={95 - (95 - (7.5/10)*85)} rx="1" fill="rgba(255,199,0,0.04)" />
          <rect x="8" y={95 - (7.5/10)*85} width={(7.5/10)*88} height={(7.5/10)*85} rx="1" fill="rgba(192,168,240,0.04)" />
          <rect x={(7.5/10)*88+8} y={95 - (7.5/10)*85} width={98-(7.5/10)*88-8} height={(7.5/10)*85} rx="1" fill="rgba(168,245,200,0.04)" />

          {/* Quadrant labels */}
          <text x={(8 + (7.5/10)*88 + 8) / 2} y="8" fill={C.pink} fontSize="2.8" textAnchor="middle" fontWeight="700" opacity="0.6">DISRUPTION RISK</text>
          <text x={(8 + (7.5/10)*88 + 8) / 2} y="11.5" fill="rgba(255,255,255,0.25)" fontSize="1.8" textAnchor="middle">High signal, low readiness</text>

          <text x={(98 + (7.5/10)*88 + 8) / 2} y="8" fill={C.yellow} fontSize="2.8" textAnchor="middle" fontWeight="700" opacity="0.6">CRITICAL WATCH</text>
          <text x={(98 + (7.5/10)*88 + 8) / 2} y="11.5" fill="rgba(255,255,255,0.25)" fontSize="1.8" textAnchor="middle">High signal, high readiness</text>

          <text x={(8 + (7.5/10)*88 + 8) / 2} y={95 - (7.5/10)*85 + 8} fill={C.lavender} fontSize="2.8" textAnchor="middle" fontWeight="700" opacity="0.6">EMERGING</text>
          <text x={(8 + (7.5/10)*88 + 8) / 2} y={95 - (7.5/10)*85 + 11.5} fill="rgba(255,255,255,0.25)" fontSize="1.8" textAnchor="middle">Lower signal, low readiness</text>

          <text x={(98 + (7.5/10)*88 + 8) / 2} y={95 - (7.5/10)*85 + 8} fill={C.mint} fontSize="2.8" textAnchor="middle" fontWeight="700" opacity="0.6">ESTABLISHED</text>
          <text x={(98 + (7.5/10)*88 + 8) / 2} y={95 - (7.5/10)*85 + 11.5} fill="rgba(255,255,255,0.25)" fontSize="1.8" textAnchor="middle">Lower signal, high readiness</text>
        </svg>

        {/* Axis labels */}
        <div className="absolute bottom-0 left-0 right-0 text-center" style={{ color: C.gray, fontSize: 12, paddingBottom: 0 }}>
          Enterprise Readiness →
        </div>
        <div className="absolute top-0 left-0 bottom-0 flex items-center" style={{ color: C.gray, fontSize: 12, writingMode: "vertical-rl", transform: "rotate(180deg)", paddingLeft: 0 }}>
          Signal Strength →
        </div>

        {/* Data points with jitter */}
        {signals.map((s) => {
          const [jx, jy] = JITTER[s.id] || [0, 0];
          const x = (s.enterprise_readiness / 10) * 88 + 8 + jx;
          const y = 95 - (s.signal_strength / 10) * 85 + jy;
          const isHovered = hovered === s.id;
          return (
            <div key={s.id}>
              <button
                className="absolute transform -translate-x-1/2 -translate-y-1/2 rounded-full transition-all duration-200 cursor-pointer"
                style={{
                  left: `${x}%`,
                  top: `${y}%`,
                  width: isHovered ? 40 : 28,
                  height: isHovered ? 40 : 28,
                  backgroundColor: s.color,
                  border: `2px solid ${isHovered ? "white" : "transparent"}`,
                  zIndex: isHovered ? 50 : 10,
                  boxShadow: isHovered ? `0 0 20px ${s.color}80` : "none",
                }}
                onMouseEnter={() => setHovered(s.id)}
                onMouseLeave={() => setHovered(null)}
                onClick={() => {
                  onSelect(s.id);
                  document.getElementById(`signal-${s.id}`)?.scrollIntoView({ behavior: "smooth" });
                }}
              >
                <span className="text-black font-bold" style={{ fontSize: isHovered ? 14 : 11 }}>{s.num}</span>
              </button>
              {isHovered && (
                <div
                  className="absolute z-50 rounded-lg p-4 shadow-xl pointer-events-none"
                  style={{
                    left: `${x}%`,
                    top: `${y - 2}%`,
                    transform: "translate(-50%, -100%)",
                    backgroundColor: C.darkGray,
                    border: `1px solid ${s.color}`,
                    minWidth: 260,
                  }}
                >
                  <p className="text-white font-bold mb-1" style={{ fontSize: 14 }}>{s.name}</p>
                  <div className="flex gap-4 mb-2">
                    <span style={{ fontSize: 12, color: C.mint }}>Signal: {s.signal_strength}/10</span>
                    <span style={{ fontSize: 12, color: C.yellow }}>Readiness: {s.enterprise_readiness}/10</span>
                  </div>
                  <p style={{ fontSize: 12, color: C.gray }}>{s.subtitle}</p>
                  <div className="flex gap-2 mt-2">
                    <span className="px-2 py-0.5 rounded text-black" style={{ fontSize: 10, backgroundColor: RISK_COLORS[s.risk_level] || C.gray, fontWeight: 600 }}>{s.risk_level}</span>
                    <span className="px-2 py-0.5 rounded text-white" style={{ fontSize: 10, backgroundColor: "rgba(255,255,255,0.15)" }}>{s.time_horizon}</span>
                  </div>
                </div>
              )}
            </div>
          );
        })}
      </div>
    </div>
  );
}

/* ───────── Signal Card ───────── */
function SignalCard({ s, isOpen, onToggle }: { s: typeof signals[0]; isOpen: boolean; onToggle: () => void }) {
  return (
    <div id={`signal-${s.id}`} className="bg-white rounded-lg shadow-sm overflow-hidden" style={{ borderLeft: `4px solid ${s.color}` }}>
      <button onClick={onToggle} className="w-full text-left p-6 cursor-pointer flex items-start justify-between gap-4">
        <div className="flex-1">
          <div className="flex items-center gap-3 mb-2">
            <span className="flex-shrink-0 w-9 h-9 rounded-full flex items-center justify-center text-black font-bold" style={{ backgroundColor: s.color, fontSize: 13 }}>{s.num}</span>
            <div className="flex gap-2">
              <span className="px-2 py-0.5 rounded text-black" style={{ fontSize: 10, fontWeight: 600, backgroundColor: RISK_COLORS[s.risk_level] || C.gray }}>{s.risk_level}</span>
              <span className="px-2 py-0.5 rounded" style={{ fontSize: 10, fontWeight: 600, backgroundColor: C.darkGray, color: "white" }}>{s.time_horizon}</span>
            </div>
          </div>
          <h3 style={{ fontSize: 20, fontWeight: 700, color: C.darkGray }} className="mb-1">{s.name}</h3>
          <p style={{ fontSize: 14, color: C.gray }}>{s.subtitle}</p>
          <div className="flex gap-6 mt-3">
            <span style={{ fontSize: 13 }}><span style={{ color: C.mint, fontWeight: 700 }}>{s.signal_strength}</span><span style={{ color: C.gray }}>/10 signal</span></span>
            <span style={{ fontSize: 13 }}><span style={{ color: C.yellow, fontWeight: 700 }}>{s.enterprise_readiness}</span><span style={{ color: C.gray }}>/10 readiness</span></span>
          </div>
        </div>
        <span style={{ color: C.purple }} className="flex-shrink-0 mt-2">
          {isOpen ? <ChevronUp size={20} /> : <ChevronDown size={20} />}
        </span>
      </button>
      {isOpen && (
        <div className="px-6 pb-6" style={{ borderTop: `1px solid ${C.border}` }}>
          <div className="pt-5">
            <p style={{ fontSize: 12, textTransform: "uppercase", color: C.purple, letterSpacing: "0.08em", fontWeight: 600 }} className="mb-2">Thesis</p>
            <p style={{ fontSize: 15, color: C.darkGray, lineHeight: 1.7 }} className="mb-5">{s.thesis}</p>

            <p style={{ fontSize: 12, textTransform: "uppercase", color: C.purple, letterSpacing: "0.08em", fontWeight: 600 }} className="mb-2">Evidence</p>
            <ul className="mb-5 space-y-2">
              {s.evidence.map((e, i) => (
                <li key={i} className="flex gap-2" style={{ fontSize: 14, color: C.darkGray, lineHeight: 1.7 }}>
                  <span style={{ color: s.color }} className="flex-shrink-0 mt-0.5">•</span>
                  <span>{e}</span>
                </li>
              ))}
            </ul>

            <p style={{ fontSize: 12, textTransform: "uppercase", color: C.purple, letterSpacing: "0.08em", fontWeight: 600 }} className="mb-2">Implications</p>
            <p style={{ fontSize: 14, color: C.darkGray, lineHeight: 1.7 }} className="mb-4">{s.implications}</p>

            <p style={{ fontSize: 12, textTransform: "uppercase", color: C.gray, letterSpacing: "0.08em", fontWeight: 600 }} className="mb-2">Key Speakers</p>
            <div className="flex flex-wrap gap-2 mb-3">
              {s.key_speakers.map((sp) => (
                <span key={sp} className="px-3 py-1 rounded-full" style={{ fontSize: 12, backgroundColor: `${s.color}20`, color: C.darkGray, border: `1px solid ${s.color}40` }}>{sp}</span>
              ))}
            </div>

            <p style={{ fontSize: 12, textTransform: "uppercase", color: C.gray, letterSpacing: "0.08em", fontWeight: 600 }} className="mb-1 mt-4">Market Opportunity</p>
            <p style={{ fontSize: 13, color: C.gray, fontStyle: "italic" }}>{s.market_opportunity}</p>
          </div>
        </div>
      )}
    </div>
  );
}

/* ═══════════════════════════════════════════════════════════ */
/*                    TREND REPORT PAGE                       */
/* ═══════════════════════════════════════════════════════════ */

export function TrendReport() {
  const [openSignals, setOpenSignals] = useState<Set<number>>(new Set([1]));
  const [sortBy, setSortBy] = useState<SortKey>("id");

  const toggleSignal = (id: number) => {
    setOpenSignals((prev) => {
      const next = new Set(prev);
      if (next.has(id)) next.delete(id); else next.add(id);
      return next;
    });
  };

  const selectSignal = (id: number) => {
    setOpenSignals((prev) => new Set(prev).add(id));
  };

  const sortedSignals = useMemo(() => {
    const arr = [...signals];
    if (sortBy === "signal_strength") arr.sort((a, b) => b.signal_strength - a.signal_strength);
    else if (sortBy === "enterprise_readiness") arr.sort((a, b) => b.enterprise_readiness - a.enterprise_readiness);
    return arr;
  }, [sortBy]);

  return (
    <div>
      {/* ───────── Hero ───────── */}
      <section style={{ backgroundColor: C.black, minHeight: "40vh" }} className="flex items-center">
        <div className="max-w-[1200px] mx-auto px-6 py-16">
          <p style={{ color: C.purple, fontSize: 12, textTransform: "uppercase", letterSpacing: "0.1em", fontWeight: 600 }} className="mb-3">Trend Report</p>
          <h1 className="text-white mb-4" style={{ fontSize: "clamp(32px, 4vw, 56px)", fontWeight: 700, lineHeight: 1.1 }}>
            Ten Signals From a Festival at the Intersection of AI Maturity and Institutional Reckoning
          </h1>
          <p style={{ color: C.gray, fontSize: 18, lineHeight: 1.7 }} className="max-w-3xl">
            We are living through the end of isolated trends and the beginning of something far more complex. SXSW 2026 revealed that the future will not be defined by individual technological breakthroughs — the age of the "next big thing" is over. Instead, multiple forces are converging simultaneously, creating irreversible shifts in how we work, how we stay alive, how we stay sane, and what it means to be human in an age of abundant computation.
          </p>
        </div>
      </section>

      {/* ───────── Methodology ───────── */}
      <section style={{ backgroundColor: C.lightBg }} className="py-12">
        <div className="max-w-[1200px] mx-auto px-6" style={{ borderBottom: `1px solid ${C.border}` }}>
          <p style={{ color: C.purple, fontSize: 12, fontWeight: 700, letterSpacing: "0.1em", textTransform: "uppercase" }} className="mb-3">How This Report Was Built</p>
          <p style={{ fontSize: 16, color: C.darkGray, lineHeight: 1.8 }} className="max-w-3xl pb-10">
            These are not predictions. They are observations grounded in what practitioners, researchers, leaders, and makers are actually doing right now. Each signal has been assigned a strength score (how clearly it's emerging), an enterprise readiness score (how soon organizations need to act), and a time horizon (when impact becomes unavoidable). Synthesis framework: Amy Webb's Convergence Outlook methodology applied to SXSW programming.
          </p>
        </div>
      </section>

      {/* ───────── Interactive Signal Chart ───────── */}
      <section style={{ backgroundColor: C.black }} className="py-16">
        <div className="max-w-[1200px] mx-auto px-6">
          <h2 className="text-white mb-2" style={{ fontSize: 28, fontWeight: 700 }}>Signal Strength × Enterprise Readiness</h2>
          <p style={{ color: C.gray, fontSize: 14 }} className="mb-8">Click any signal to jump to its full write-up below</p>
          <div className="rounded-lg p-6" style={{ backgroundColor: C.darkGray }}>
            <SignalChart onSelect={selectSignal} />
          </div>
          <div className="flex flex-wrap gap-3 mt-6 justify-center">
            <span className="flex items-center gap-2" style={{ fontSize: 12, color: C.gray }}>
              <span className="w-3 h-3 rounded-full" style={{ backgroundColor: C.yellow }} /> CRITICAL
            </span>
            <span className="flex items-center gap-2" style={{ fontSize: 12, color: C.gray }}>
              <span className="w-3 h-3 rounded-full" style={{ backgroundColor: C.pink }} /> HIGH
            </span>
            <span className="flex items-center gap-2" style={{ fontSize: 12, color: C.gray }}>
              <span className="w-3 h-3 rounded-full" style={{ backgroundColor: C.mint }} /> MEDIUM
            </span>
          </div>
        </div>
      </section>

      {/* ───────── Sort Controls ───────── */}
      <section style={{ backgroundColor: C.lightBg }} className="pt-16 pb-4">
        <div className="max-w-[1200px] mx-auto px-6">
          <div className="flex flex-col sm:flex-row items-start sm:items-center justify-between gap-4 mb-8">
            <h2 style={{ fontSize: 32, fontWeight: 700, color: C.darkGray }}>10 Signals from SXSW 2026</h2>
            <div className="flex items-center gap-2">
              <ArrowUpDown size={14} style={{ color: C.gray }} />
              <span style={{ fontSize: 13, color: C.gray }}>Sort by:</span>
              {([["id", "Number"], ["signal_strength", "Signal Strength"], ["enterprise_readiness", "Readiness"]] as [SortKey, string][]).map(([key, label]) => (
                <button
                  key={key}
                  onClick={() => setSortBy(key)}
                  className="px-3 py-1.5 rounded-full transition-colors cursor-pointer"
                  style={{
                    fontSize: 12,
                    fontWeight: 600,
                    backgroundColor: sortBy === key ? C.purple : "white",
                    color: sortBy === key ? "white" : C.darkGray,
                    border: sortBy === key ? "none" : `1px solid ${C.border}`,
                  }}
                >
                  {label}
                </button>
              ))}
            </div>
          </div>
        </div>
      </section>

      {/* ───────── Signal Cards ───────── */}
      <section style={{ backgroundColor: C.lightBg }} className="pb-20">
        <div className="max-w-[1200px] mx-auto px-6 space-y-4">
          {sortedSignals.map((s) => (
            <SignalCard key={s.id} s={s} isOpen={openSignals.has(s.id)} onToggle={() => toggleSignal(s.id)} />
          ))}
        </div>
      </section>

      {/* ───────── Meta-Signals ───────── */}
      <section style={{ backgroundColor: C.black }} className="py-20">
        <div className="max-w-[1200px] mx-auto px-6">
          <h2 className="text-white mb-10" style={{ fontSize: 32, fontWeight: 700 }}>Three Meta-Signals</h2>
          <div className="grid md:grid-cols-3 gap-6">
            {[
              { title: "Institutional Readiness Lags Technological Capability", desc: "AI diagnostic tools are live and accurate. FDA staffing is insufficient. Regulatory frameworks are inadequate. Institutions are attempting to govern technologies they don't fully understand with frameworks still being written.", color: C.yellow },
              { title: "The Human Response Will Be Surprisingly Coherent", desc: "Across film, business, health, and innovation tracks, speakers independently arrived at the same conclusion: human creativity, judgment, storytelling, and relationship-building are becoming more valuable, not less.", color: C.mint },
              { title: "Convergence Thinking Is Becoming Mandatory", desc: "The future will not be shaped by isolated breakthroughs. It will be shaped by multiple forces converging. Organizations still operating in isolated domain expertise will be blindsided by convergences they didn't anticipate.", color: C.purple },
            ].map((m) => (
              <div key={m.title} className="rounded-lg p-6" style={{ backgroundColor: C.darkGray, borderTop: `3px solid ${m.color}` }}>
                <h3 className="text-white mb-3" style={{ fontSize: 18, fontWeight: 700 }}>{m.title}</h3>
                <p style={{ fontSize: 14, color: C.gray, lineHeight: 1.7 }}>{m.desc}</p>
              </div>
            ))}
          </div>
        </div>
      </section>

      {/* ───────── Cross-Reference ───────── */}
      <section style={{ backgroundColor: C.lightBg }} className="py-10">
        <div className="max-w-[1200px] mx-auto px-6 text-center">
          <p style={{ fontSize: 16, color: C.darkGray }}>
            Each signal links to supporting sessions in the{" "}
            <Link to="/sessions" style={{ color: C.purple }} className="underline font-semibold">Session Library →</Link>
          </p>
        </div>
      </section>
    </div>
  );
}
