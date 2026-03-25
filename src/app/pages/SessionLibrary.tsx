import { useState, useMemo, useEffect, useCallback } from "react";
import { Search, ChevronDown, ChevronUp, Download, X } from "lucide-react";

/* ───────── Simple Markdown Renderer ───────── */
function renderMarkdown(md: string): string {
  return md
    // Remove the first H1 (already shown in card title)
    .replace(/^# .+\n/, "")
    // H2 headings
    .replace(/^## (.+)$/gm, '<h2 style="font-size:22px;font-weight:700;color:#1A1A1A;margin:28px 0 12px;border-bottom:1px solid #E0E0E0;padding-bottom:8px">$1</h2>')
    // H3 headings
    .replace(/^### (.+)$/gm, '<h3 style="font-size:18px;font-weight:700;color:#1A1A1A;margin:20px 0 8px">$1</h3>')
    // Bold
    .replace(/\*\*(.+?)\*\*/g, '<strong>$1</strong>')
    // Italic
    .replace(/\*(.+?)\*/g, '<em>$1</em>')
    // Blockquotes
    .replace(/^> (.+)$/gm, '<blockquote style="border-left:3px solid #7B61FF;padding-left:16px;margin:12px 0;font-style:italic;color:#1A1A1A">$1</blockquote>')
    // Unordered lists
    .replace(/^- (.+)$/gm, '<li style="margin:4px 0;padding-left:4px">$1</li>')
    // Wrap consecutive <li> in <ul>
    .replace(/((?:<li[^>]*>.*<\/li>\n?)+)/g, '<ul style="list-style:disc;padding-left:20px;margin:8px 0;font-size:15px;line-height:1.7;color:#1A1A1A">$1</ul>')
    // Ordered lists
    .replace(/^\d+\. (.+)$/gm, '<li style="margin:4px 0">$1</li>')
    // Horizontal rules
    .replace(/^---$/gm, '<hr style="border:none;border-top:1px solid #E0E0E0;margin:24px 0" />')
    // Links
    .replace(/\[([^\]]+)\]\(([^)]+)\)/g, '<a href="$2" target="_blank" rel="noopener" style="color:#7B61FF;text-decoration:underline">$1</a>')
    // Paragraphs: wrap non-tag lines
    .replace(/^(?!<[a-z])((?!\s*$).+)$/gm, '<p style="font-size:15px;line-height:1.8;color:#1A1A1A;margin:8px 0">$1</p>')
    // Clean up empty paragraphs
    .replace(/<p[^>]*>\s*<\/p>/g, "");
}

/* ───────── Full Recap Content Component ───────── */
function FullRecapContent({ filename }: { filename: string }) {
  const [content, setContent] = useState<string | null>(null);
  const [loading, setLoading] = useState(true);

  useEffect(() => {
    setLoading(true);
    fetch(`${import.meta.env.BASE_URL}content/session-recaps/${filename}`)
      .then(r => r.text())
      .then(text => { setContent(text); setLoading(false); })
      .catch(() => { setContent(null); setLoading(false); });
  }, [filename]);

  if (loading) return <p style={{ color: "#6B6B6B", fontSize: 14, padding: "20px 0" }}>Loading full recap...</p>;
  if (!content) return <p style={{ color: "#6B6B6B", fontSize: 14, padding: "20px 0" }}>Could not load recap.</p>;

  return (
    <div
      className="prose-custom"
      dangerouslySetInnerHTML={{ __html: renderMarkdown(content) }}
    />
  );
}

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

/* ───────── Track Colors ───────── */
const TRACK_COLORS: Record<string, string> = {
  "Tech & AI": "#50AFE8",
  "Innovation": C.purple,
  "Brand & Marketing": C.yellow,
  "Health": "#2E8B57",
  "Culture": C.lavender,
  "Film & TV": C.pink,
  "Startups": C.lime,
  "Science & Technology": C.cyan,
  "Community": C.mint,
  "Wellness": C.coral,
};

function getTrackColor(track: string): string {
  for (const [key, color] of Object.entries(TRACK_COLORS)) {
    if (track.toLowerCase().includes(key.toLowerCase())) return color;
  }
  return C.purple;
}

/* ───────── All 30 Sessions ───────── */
const sessions = [
  {
    id: 1,
    title: "AI Commerce: The Future of Shopping with Autonomous Agents",
    speaker: "Cheryl (Mastercard), Roger (Commerce Researcher), Heather (Mars VP)",
    date: "Friday, March 13",
    day: "Day 2",
    track: "Tech & AI",
    format: "Panel",
    overview: "As e-commerce platforms increasingly integrate AI agents and autonomous purchasing systems, businesses face a critical inflection point. Leaders from payments technology, consumer research, and consumer packaged goods explored the present reality and near-future of AI-driven commerce.",
    themes: ["Trust as the fundamental product in AI commerce", "AEO (AI Engine Optimization) replacing SEO", "Positive friction in autonomous purchasing"],
    topQuote: "Mars discovered we need to increase content development by 250% to influence AI agents.",
    quoteAttribution: "Heather, Mars VP",
    filename: "AI_Commerce.md",
  },
  {
    id: 2,
    title: "Convergence Outlook: From Trend Reports to Systems Thinking",
    speaker: "Amy Webb, Founder & CEO, FutureToday Institute",
    date: "Saturday, March 14",
    day: "Day 3",
    track: "Innovation",
    format: "Keynote",
    overview: "In a move that was equal parts theatrical spectacle and strategic repositioning, Amy Webb staged a mock funeral for her own 18-year-old Emerging Tech Trend Report. She replaced it with the 'Convergence Outlook' — a framework that maps what happens when multiple systems intersect to create impacts greater than the sum of their parts.",
    themes: ["Death of sequential change", "Ten convergences reshaping society", "Contribution Credit as new economic model"],
    topQuote: "Nobody is coming to save you. If you want agency, you have to take action.",
    quoteAttribution: "Amy Webb",
    filename: "Amy_Webb_Convergence_Outlook.md",
  },
  {
    id: 3,
    title: "The End of Smartphone Apps",
    speaker: "Carl Pei, CEO and Co-Founder, Nothing",
    date: "Wednesday, March 18",
    day: "Day 7",
    track: "Innovation",
    format: "Featured",
    overview: "Carl Pei used his SXSW 2026 Featured Session to deliver one of the conference's most concrete predictions about the future of mobile computing. Rather than generalized speculation, Pei presented a specific three-stage framework for how AI agents will make smartphone apps obsolete, backed by $200 million in Series C funding.",
    themes: ["Three-stage framework for app obsolescence", "AI agents need purpose-built interfaces", "Nothing's US market expansion"],
    topQuote: "I think the future of smartphones or operating systems should just be: I know you very well, and if I know your intention, I just do it for you.",
    quoteAttribution: "Carl Pei",
    filename: "Carl_Pei_Nothing.md",
  },
  {
    id: 4,
    title: "How CMOs Rewrote the Rules of Connection",
    speaker: "Brian Irving (CMO, Lyft), Allison Stransky (CMO, Samsung)",
    date: "Wednesday, March 18",
    day: "Day 7",
    track: "Brand & Marketing",
    format: "Panel",
    overview: "The Lyft and Samsung CMOs delivered one of the conference's most substantive marketing sessions — arguing that AI doesn't kill authenticity but supercharges it. The session crystallized a broader shift: the industry has moved past debating whether to adopt AI and is now grappling with how to deploy it responsibly.",
    themes: ["AI-native organizational transformation", "GEO replacing SEO", "Training investment outweighs tool investment"],
    topQuote: "For every dollar we spend on new AI tools, we need two to three dollars to invest in training.",
    quoteAttribution: "Brian Irving, CMO of Lyft",
    filename: "CMOs_Rules_of_Connection.md",
  },
  {
    id: 5,
    title: "Craft Still Wins: The Irreplaceable Role of Human Instinct, Taste, and Emotion",
    speaker: "Greg Greenberg, Executive Creative Director, TBWA\\Media Arts Lab (Apple)",
    date: "Saturday, March 14",
    day: "Day 3",
    track: "Brand & Marketing",
    format: "Solo",
    overview: "Greg Greenberg delivered one of SXSW 2026's most pointed counterarguments to the industry's AI fixation. He argued not against AI but for the irreplaceable primacy of human instinct, taste, and emotional craft in creative work, drawing on more than 14 years producing Apple's most iconic advertising.",
    themes: ["Human instinct vs. AI efficiency", "Handcrafted storytelling as competitive advantage", "The 'bland tax' of AI-generated content"],
    topQuote: "The most dangerous creative failure is not making bad work, but making interchangeable work.",
    quoteAttribution: "Greg Greenberg",
    filename: "Craft_Still_Wins.md",
  },
  {
    id: 6,
    title: "How Crypto Is Building Capital Markets for Everyone",
    speaker: "Pedro Miranda (Solana Foundation), Rodolfo Gonzalez (Foundation Capital)",
    date: "Saturday, March 14",
    day: "Day 3",
    track: "Innovation",
    format: "Featured",
    overview: "Crypto's boldest case at SXSW 2026 came from two insiders who argued that prediction markets, branded stablecoins, and AI-powered agents are dismantling Wall Street's monopoly on capital formation.",
    themes: ["Prediction markets as $63 billion industry", "Branded stablecoins", "AI agents need crypto wallets"],
    topQuote: "Agents are new customers, and existing financial infrastructure is not built to serve them.",
    quoteAttribution: "Rodolfo Gonzalez, Foundation Capital",
    filename: "Crypto_Capital_Markets.md",
  },
  {
    id: 7,
    title: "Decoding Nature with AI",
    speaker: "Glenn (Basecamp Research), Cesar (Microsoft), Alicia (Academic Researcher)",
    date: "Monday, March 16",
    day: "Day 5",
    track: "Science & Technology",
    format: "Panel",
    overview: "Leading biologists and AI researchers explored how artificial intelligence is transforming our understanding of the natural world — from discovering novel molecules to redesigning biological systems. Central to the discussion was the tension between unprecedented scientific opportunity and the ethical implications of biological design tools.",
    themes: ["Programming biology as paradigm shift", "Data sovereignty in the Global South", "Safety benchmarking for biological AI"],
    topQuote: "Programming biology is taking a step away from trial and error. We want to predict outcomes and intentionally design medicine.",
    quoteAttribution: "Panelist",
    filename: "Decoding_Nature_with_AI.md",
  },
  {
    id: 8,
    title: "Food and Comics: Culinary Storytelling and Creative Activism",
    speaker: "Chef Jose Andres (World Central Kitchen), Steve Orlando, Nick Lowe (Marvel)",
    date: "Tuesday, March 17",
    day: "Day 6",
    track: "Culture",
    format: "Panel",
    overview: "This panel brought together two of humanity's most universal languages — food and art — to explore how culinary activism and comic storytelling can drive social change. Chef Jose Andres joined writer Steve Orlando and Marvel editor Nick Lowe.",
    themes: ["Universal languages of food and art", "Everyday superheroes", "Scaling impact through multimedia"],
    topQuote: "With great power, there must also come great responsibility. And I think the key to remember that we all have great power.",
    quoteAttribution: "Nick Lowe, Marvel Editor",
    filename: "Food_and_Comics.md",
  },
  {
    id: 9,
    title: "Futures Improv: Interactive Foresight",
    speaker: "Matt Carmichael (Ipsos), Alexandra Whittington, Henry Coutinho-Mason, Annie Hardy (Cisco)",
    date: "Monday, March 16",
    day: "Day 5",
    track: "Innovation",
    format: "Workshop",
    overview: "Professional futurists speculated on emerging futures through an experimental, interactive format. Rather than traditional panels, the session used improv techniques and real-time audience input to explore how different possible futures might unfold.",
    themes: ["Future of work and portfolio careers", "Brain-computer interfaces and neural rights", "Boredom as essential creative function"],
    topQuote: "Conspiracy theories used to be about lack of information. Now people embrace them for human connection with like-minded people.",
    quoteAttribution: "Panelist",
    filename: "Futures_Improv.md",
  },
  {
    id: 10,
    title: "The Innovation Engine You've Never Heard of: FirstBuild",
    speaker: "Andre Zdanow, President of FirstBuild, GE Appliances",
    date: "March 12–18",
    day: "Day 1–7",
    track: "Innovation",
    format: "Featured",
    overview: "FirstBuild, GE Appliances' open innovation lab and microfactory, represents one of the most radical experiments in corporate product development. Andre Zdanow presented a model with 245,000 community members, 100+ products launched, and a 93% failure rate that the company treats as a feature.",
    themes: ["Community co-creation at scale", "93% failure rate as feature", "Open innovation vs. proprietary R&D"],
    topQuote: "We exist to fail.",
    quoteAttribution: "Andre Zdanow",
    filename: "GE_Appliances_FirstBuild.md",
  },
  {
    id: 11,
    title: "Health: Who to Trust in the Age of AI",
    speaker: "Mary James (Real Chemistry), Alice Bell (Reddit), Dr. Anya Bilski (UCSF)",
    date: "Monday, March 16",
    day: "Day 5",
    track: "Health",
    format: "Panel",
    overview: "This session examined the shifting landscape of health information where AI, community platforms, and traditional healthcare intersect. The panel explored how patients increasingly turn to ChatGPT, Google, and Reddit for health guidance before — or instead of — seeing a physician.",
    themes: ["Changing health information journey", "Reddit as health community", "AI limitations in clinical diagnosis"],
    topQuote: "The better they're able to piece together that story, the better I'm able to help them.",
    quoteAttribution: "Dr. Anya Bilski, UCSF",
    filename: "Health_Who_to_Trust_in_AI_Age.md",
  },
  {
    id: 12,
    title: "How to Design a Company That AI Can't Outpace",
    speaker: "Ian Beacraft, CEO and Chief Futurist, Signal and Cipher",
    date: "Monday, March 16",
    day: "Day 5",
    track: "Tech & AI",
    format: "Featured",
    overview: "The companies winning the AI era won't be the fastest adopters — they'll be the ones that fundamentally redesign how work is organized. Beacraft laid out a practical framework for rebuilding organizations around AI — not bolting AI onto structures designed 150 years ago.",
    themes: ["Operate/Design/Architect hierarchy", "Execution as commodity", "OpenClaw and autonomous AI agents"],
    topQuote: "Companies don't have an AI problem. They have a design problem.",
    quoteAttribution: "Ian Beacraft",
    filename: "Ian_Beacraft_AI_Native_Org.md",
  },
  {
    id: 13,
    title: "BuzzFeed's Last Bet: Jonah Peretti Launches AI Apps at SXSW",
    speaker: "Jonah Peretti (BuzzFeed CEO) and Bill Shouldis (Branch Office)",
    date: "Friday, March 13",
    day: "Day 2",
    track: "Innovation",
    format: "Featured",
    overview: "On March 12, BuzzFeed released financials revealing a $57.3 million net loss and going-concern language. On March 13, Peretti walked onto the SXSW stage to unveil Branch Office, a new AI-powered app suite designed to reinvent how people connect on the internet.",
    themes: ["AI-powered apps for human connection", "Going-concern crisis meets product launch", "Software as the new content"],
    topQuote: "We're accelerating into an era of infinite fake news, slop, personalization bubbles, and cuts at the organizations that actually care about content.",
    quoteAttribution: "Jonah Peretti",
    filename: "Jonah_Peretti_BuzzFeed.md",
  },
  {
    id: 14,
    title: "The Case for Programmable Money",
    speaker: "Li Fan, CTO and Chief AI Officer, Circle",
    date: "March 12–18",
    day: "Day 1–7",
    track: "Innovation",
    format: "Featured",
    overview: "Li Fan argued that the convergence of AI and blockchain is not a speculative thesis but an infrastructure buildout already underway. She presented Circle's position at the intersection of two parallel networks: the Internet of Intelligence and the Internet of Value.",
    themes: ["Programmable money and AI agent convergence", "Stablecoins as financial infrastructure", "Responsible AI in regulated fintech"],
    topQuote: "AI-generated code does not automatically translate into equivalent workforce reduction.",
    quoteAttribution: "Li Fan, Circle",
    filename: "Li_Fan_Circle.md",
  },
  {
    id: 15,
    title: "Lose Your Mind to AI: Super Companies and Cognitive Fitness",
    speaker: "Greg Shove (CEO, Section AI), cognitive performance researcher",
    date: "Sunday, March 15",
    day: "Day 4",
    track: "Innovation",
    format: "Panel",
    overview: "This session delivered one of SXSW 2026's sharpest warnings: AI isn't just changing what we do at work — it's changing how our brains function. The discussion centered on 'super companies' and the uncomfortable reality that most knowledge workers are becoming 'AI passengers' rather than 'AI drivers.'",
    themes: ["Super companies as dominant model", "AI drivers vs. passengers (75/25 split)", "Cognitive fitness and brain gym necessity"],
    topQuote: "We're entering the era of super companies. Super companies will be the only companies, in my opinion, that survive.",
    quoteAttribution: "Greg Shove, CEO of Section AI",
    filename: "Lose_Your_Mind_to_AI.md",
  },
  {
    id: 16,
    title: "The Science of Scaling: Using Data to Decide When and How Fast to Scale Revenue",
    speaker: "Mark Roberge, Harvard Business School; Former CRO, HubSpot",
    date: "Monday, March 17",
    day: "Day 6",
    track: "Startups",
    format: "Featured",
    overview: "Mark Roberge presented a data-driven framework that redefines product-market fit around customer retention rather than revenue. His core argument: 75% of funded startups fail because they scale haphazardly rather than scientifically.",
    themes: ["Product-market fit = retention, not revenue", "Leading Indicators of Retention (LIR)", "AI startups face highest failure rate in tech history"],
    topQuote: "We are about to witness the highest failure rate for a single cohort of startups in the history of tech.",
    quoteAttribution: "Mark Roberge",
    filename: "Mark_Roberge_Science_of_Scaling.md",
  },
  {
    id: 17,
    title: "Actionable Ikigai: Career Planning in the Age of AI",
    speaker: "Mike Bechtel, Futurist, University of Notre Dame (formerly Deloitte)",
    date: "Sunday, March 16",
    day: "Day 5",
    track: "Innovation",
    format: "Solo",
    overview: "Mike Bechtel presented a practical framework for career planning in the age of AI. Rather than abstract predictions, he shared a personal dashboard he has used for 20 years, built around the Japanese concept of ikigai.",
    themes: ["Actionable ikigai for career navigation", "AI accelerates narrow specialization obsolescence", "Self-comparison over peer comparison"],
    topQuote: "Most career advice stinks. Why? Because we can't manage what we don't measure, and most of us are flying blind.",
    quoteAttribution: "Mike Bechtel",
    filename: "Mike_Bechtel_Ikigai.md",
  },
  {
    id: 18,
    title: "10 Breakthrough Technologies of 2026",
    speaker: "Niall Firth, Executive Editor, MIT Technology Review",
    date: "March 12–18",
    day: "Day 1–7",
    track: "Tech & AI",
    format: "Solo",
    overview: "MIT Technology Review's 25th anniversary selection captures a moment when several long-gestating fields are reaching commercial or clinical inflection points simultaneously: AI is devouring data center resources, biotechnology is moving from laboratory to patient, and energy infrastructure is rapidly evolving.",
    themes: ["Hyperscale AI data centers and energy crisis", "Base editing and personalized gene therapy", "Sodium-ion batteries as quiet disruptor"],
    topQuote: "AI companions have mounting evidence that this can be dangerous — while politicians are finally waking up.",
    quoteAttribution: "MIT Technology Review",
    filename: "MIT_10_Breakthrough_Technologies.md",
  },
  {
    id: 19,
    title: "A Latticework of Mental Models",
    speaker: "Mohnish Pabrai, Founder, Pabrai Investment Funds",
    date: "March 12–18",
    day: "Day 1–7",
    track: "Innovation",
    format: "Solo",
    overview: "Mohnish Pabrai delivered a solo lecture on the key mental models that have shaped the most important decisions of his life. Drawing on Charlie Munger's latticework concept, he argued that compounding, honesty, asymmetric bets, and disciplined cloning are universal operating principles.",
    themes: ["Lollapalooza effects from cascading models", "Shameless cloning as discipline", "Honesty and trust as compounding assets"],
    topQuote: "The gap between behavioral understanding and behavioral execution is where most people fail.",
    quoteAttribution: "Mohnish Pabrai",
    filename: "Mohnish_Pabrai.md",
  },
  {
    id: 20,
    title: "OpenClaw ClawCon: A Festival for Personal AI",
    speaker: "OpenClaw Community, Josh Abban, Nat Eliason, Alpha High School Students",
    date: "Thursday, March 12",
    day: "Day 1",
    track: "Community",
    format: "Workshop",
    overview: "ClawCon has evolved from a small Discord community of ~100 people into a global movement with 750+ attendees. The session showcased how the OpenClaw platform enabled individuals from students to professionals to build autonomous businesses and generate significant revenue.",
    themes: ["Grassroots AI community building", "From OpenClaw theater to real business value", "Student entrepreneurship with AI agents"],
    topQuote: "Move beyond OpenClaw theater. Treat OpenClaw as a business assistant, not just a personal assistant.",
    quoteAttribution: "Nat Eliason",
    filename: "OpenClaw_ClawCon.md",
  },
  {
    id: 21,
    title: "Phia: AI Shopping Meets Founder-Led Community",
    speaker: "Phoebe Gates and Sophia Kianni (Co-CEOs, Phia)",
    date: "Friday, March 13",
    day: "Day 2",
    track: "Brand & Marketing",
    format: "Featured",
    overview: "Phoebe Gates and Sophia Kianni — Stanford roommates turned co-CEOs of Phia, a $185 million AI shopping startup — presented how they built an AI-native commerce app by leveraging community feedback as their primary product development signal.",
    themes: ["AI-native commerce", "Community as product development signal", "Competing with Amazon through trust"],
    topQuote: "My primary motivation is to build something generational that has no ties to me, my privilege, or my last name. I have a chip on my shoulder.",
    quoteAttribution: "Phoebe Gates",
    filename: "Phia_AI_Shopping.md",
  },
  {
    id: 22,
    title: "Reclaiming Our Humanity: Challenging AI's Power Brokers",
    speaker: "Timnit Gebru (DAIR), Karen Hao (BBC); Moderated by John Palfrey (MacArthur Foundation)",
    date: "Sunday, March 15",
    day: "Day 4",
    track: "Tech & AI",
    format: "Panel",
    overview: "Three of the most influential critics of concentrated AI power dismantled the tech industry's dominant narratives and argued that neither AI utopia nor AI apocalypse serves the public interest. The central argument: the real question is not 'What can AI do?' but 'Who defines its purpose?'",
    themes: ["False binary of AI utopia vs. apocalypse", "Invisible human labor behind AI", "Community-controlled AI as alternative"],
    topQuote: "I don't want to build one model for everything. I want to build many models for many different kinds of people in the world, because there's no one way of being human.",
    quoteAttribution: "Timnit Gebru",
    filename: "Reclaiming_Our_Humanity.md",
  },
  {
    id: 23,
    title: "5 Non-Obvious Secrets of Human Connection",
    speaker: "Rohit Bhargava, Founder, Non-Obvious Company",
    date: "Friday, March 13",
    day: "Day 2",
    track: "Innovation",
    format: "Solo",
    overview: "In a festival overwhelmed by AI content, Rohit Bhargava positioned human connection as the irreducible layer that technology cannot automate. His session revealed five 'non-obvious secrets' grounded in trend research, making it the most popular non-keynote session at SXSW 2026.",
    themes: ["Five non-obvious secrets of connection", "Curating serendipity", "Brave gatherings over transactional networking"],
    topQuote: "People who understand people always win.",
    quoteAttribution: "Rohit Bhargava",
    filename: "Rohit_Bhargava_Human_Connection.md",
  },
  {
    id: 24,
    title: "The Great Flip: Why Every Industry Is Running Backwards",
    speaker: "Sam Jordan, Head of Computing and Technology, Future Today Strategy Group",
    date: "Sunday, March 16",
    day: "Day 5",
    track: "Tech & AI",
    format: "Solo",
    overview: "Sam Jordan presented a structured argument that technology is not simply accelerating the pace of industry but inverting its fundamental order of operations. Her framework helps identify where these inversions are occurring and why leaders defending old positions are defending positions that no longer exist.",
    themes: ["Structural inversion of industry pipelines", "Craft, discovery, and talent disruption", "Judgment vs. efficiency"],
    topQuote: "Do not forgo judgment for efficiency.",
    quoteAttribution: "Sam Jordan",
    filename: "Sam_Jordan_Great_Flip.md",
  },
  {
    id: 25,
    title: "AI Playbook: 7 Patterns of AI That Actually Works",
    speaker: "Sandy Carter, CBO, Unstoppable Domains; former IBM CMO and AWS VP",
    date: "Wednesday, March 18",
    day: "Day 7",
    track: "Tech & AI",
    format: "Solo",
    overview: "Only 20% of companies genuinely succeed with AI implementation. Sandy Carter presented findings from 450+ organizations to deliver the conference's most actionable AI session: a seven-pattern framework for escaping 'pilot purgatory.'",
    themes: ["Seven patterns of successful AI", "Governance costs more than the model", "Leadership behavior as strongest predictor"],
    topQuote: "They didn't say, 'I need an AI project.' They said, 'I have a business problem — let's see if we can solve it.'",
    quoteAttribution: "Sandy Carter",
    filename: "Sandy_Carter_AI_Playbook.md",
  },
  {
    id: 26,
    title: "Health Equity Meets Founder-Led Innovation",
    speaker: "Serena Williams (Reckitt Catalyst), Kwamane Liddell (ThriveLink), Mika Eddy (Malama Health)",
    date: "Friday, March 13",
    day: "Day 2",
    track: "Health",
    format: "Panel",
    overview: "Serena Williams took the stage as Entrepreneur-in-Residence for Reckitt Catalyst, actively involved in selecting, mentoring, and supporting health-focused founders from underrepresented backgrounds. The session paired Williams's star power with founders solving specific health access crises.",
    themes: ["Health equity as market opportunity", "Lived experience as competitive advantage", "Non-dilutive funding as power redistribution"],
    topQuote: "The most underestimated skill in business is the ability to tell a compelling story.",
    quoteAttribution: "Serena Williams",
    filename: "Serena_Williams_Reckitt_Catalyst.md",
  },
  {
    id: 27,
    title: "Social Health: From Niche to Mainstream",
    speaker: "Public Health Thought Leader",
    date: "Thursday, March 12",
    day: "Day 1",
    track: "Wellness",
    format: "Keynote",
    overview: "This session marked a pivotal moment in public health discourse: the recognition of social health as equal in importance to physical and mental health. Loneliness and lack of regular social interaction account for approximately 871,000 deaths annually.",
    themes: ["Social health as missing pillar", "871,000 annual deaths from loneliness", "AI companions and connection ethics"],
    topQuote: "The next trillion dollar wellness economy is built on connection.",
    quoteAttribution: "Public Health Thought Leader",
    filename: "Social_Health_Niche_to_Mainstream.md",
  },
  {
    id: 28,
    title: "A 1929 Warning for the AI Age",
    speaker: "Andrew Ross Sorkin (CNBC, NYT DealBook); Interviewed by Joe Weisenthal (Bloomberg)",
    date: "Sunday, March 15",
    day: "Day 4",
    track: "Culture",
    format: "Featured",
    overview: "Andrew Ross Sorkin delivered a historically grounded warning to an audience steeped in AI optimism: the patterns driving today's technology-fueled speculation mirror the conditions that preceded the 1929 crash with uncomfortable precision.",
    themes: ["Nvidia-RCA parallel in speculation", "Regulatory guardrails being dismantled", "Speculation as the twin of innovation"],
    topQuote: "I don't want to tell you that today is 1929. That, I have no idea about. But do I think we're in a bubble of some sort? Sure.",
    quoteAttribution: "Andrew Ross Sorkin",
    filename: "Sorkin_1929_Warning.md",
  },
  {
    id: 29,
    title: "Steven Spielberg Keynote: Wonder, Imagination, and the Filmmaker's Responsibility",
    speaker: "Steven Spielberg; Interviewed by Sean Fennessy",
    date: "Friday, March 13",
    day: "Day 2",
    track: "Film & TV",
    format: "Keynote",
    overview: "Steven Spielberg's keynote offered a rare, intimate look into the mind of cinema's most influential living filmmaker. At the conversation's heart lay Spielberg's core conviction that filmmaking is fundamentally about transmitting human emotion and connection.",
    themes: ["Imagination and childhood fears as creative engine", "Evolution from optimistic to darker sci-fi", "Filmmaking as emotional translation"],
    topQuote: "I am not afraid of any aliens.",
    quoteAttribution: "Steven Spielberg",
    filename: "Steven_Spielberg_Keynote.md",
  },
  {
    id: 30,
    title: "Sympathetic Magic, Plywood, and the Power of Believing",
    speaker: "Tom Sachs, Artist and Sculptor",
    date: "Saturday, March 14",
    day: "Day 3",
    track: "Culture",
    format: "Keynote",
    overview: "Tom Sachs delivered a keynote grounded in 'sympathetic magic' — drawn from 19th-century anthropology but applied to contemporary creative practice. Using plywood, hot glue, and found materials, Sachs argued that the act of making something is itself a form of magic.",
    themes: ["Sympathetic magic as creative principle", "Constraints as creative architecture", "Output before input as daily discipline"],
    topQuote: "I build these things because I want them to exist.",
    quoteAttribution: "Tom Sachs",
    filename: "Tom_Sachs.md",
  },
];

const ALL_TRACKS = ["All", ...Array.from(new Set(sessions.map(s => s.track))).sort()];
const ALL_FORMATS = ["All Formats", ...Array.from(new Set(sessions.map(s => s.format))).sort()];
const ALL_DAYS = ["All Days", "Day 1", "Day 2", "Day 3", "Day 4", "Day 5", "Day 6", "Day 7"];

/* ═══════════════════════════════════════════════════════════ */
/*                   SESSION LIBRARY PAGE                      */
/* ═══════════════════════════════════════════════════════════ */

export function SessionLibrary() {
  const [search, setSearch] = useState("");
  const [selectedTrack, setSelectedTrack] = useState("All");
  const [selectedFormat, setSelectedFormat] = useState("All Formats");
  const [selectedDay, setSelectedDay] = useState("All Days");
  const [expandedId, setExpandedId] = useState<number | null>(null);

  const filtered = useMemo(() => {
    return sessions.filter((s) => {
      if (selectedTrack !== "All" && s.track !== selectedTrack) return false;
      if (selectedFormat !== "All Formats" && s.format !== selectedFormat) return false;
      if (selectedDay !== "All Days" && !s.day.includes(selectedDay.replace("All Days", ""))) return false;
      if (search) {
        const q = search.toLowerCase();
        return s.title.toLowerCase().includes(q) || s.speaker.toLowerCase().includes(q) || s.overview.toLowerCase().includes(q) || s.themes.some(t => t.toLowerCase().includes(q));
      }
      return true;
    });
  }, [search, selectedTrack, selectedFormat, selectedDay]);

  return (
    <div>
      {/* ───────── Hero ───────── */}
      <section style={{ backgroundColor: C.black, minHeight: "30vh" }} className="flex flex-col items-center justify-center px-6 py-16">
        <p style={{ color: C.purple, fontSize: 12, textTransform: "uppercase", letterSpacing: "0.1em", fontWeight: 600 }} className="mb-3">Session Library</p>
        <h1 className="text-white mb-2 text-center" style={{ fontSize: "clamp(32px, 4vw, 56px)", fontWeight: 700 }}>30 Sessions. 7 Days. One Festival.</h1>
        <p style={{ color: C.gray, fontSize: 16 }} className="mb-8 text-center">Searchable archive of every session attended at SXSW 2026, March 12–18</p>
        <div className="relative w-full max-w-[500px]">
          <Search size={18} className="absolute left-4 top-1/2 -translate-y-1/2" style={{ color: C.gray }} />
          <input
            type="text"
            placeholder="Search by title, speaker, or keyword..."
            value={search}
            onChange={(e) => setSearch(e.target.value)}
            className="w-full pl-11 pr-10 py-3 rounded-lg outline-none"
            style={{ fontSize: 15, borderRadius: 8 }}
          />
          {search && (
            <button onClick={() => setSearch("")} className="absolute right-3 top-1/2 -translate-y-1/2 cursor-pointer" style={{ color: C.gray }}>
              <X size={16} />
            </button>
          )}
        </div>
      </section>

      {/* ───────── Filter Bar ───────── */}
      <div className="sticky top-14 z-40 bg-white shadow-sm py-4">
        <div className="max-w-[1200px] mx-auto px-6">
          <div className="flex flex-wrap gap-2 mb-2">
            {ALL_TRACKS.map((t) => {
              const color = t === "All" ? C.purple : getTrackColor(t);
              return (
                <button
                  key={t}
                  onClick={() => setSelectedTrack(t)}
                  className="px-4 py-1.5 rounded transition-colors cursor-pointer"
                  style={{
                    fontSize: 13,
                    borderRadius: 20,
                    backgroundColor: selectedTrack === t ? color : "white",
                    color: selectedTrack === t ? (t === "Startups" || t === "Brand & Marketing" ? C.black : "white") : color,
                    border: `1px solid ${color}`,
                    fontWeight: 600,
                  }}
                >
                  {t}
                </button>
              );
            })}
          </div>
          <div className="flex flex-wrap gap-2">
            {ALL_FORMATS.map((f) => (
              <button
                key={f}
                onClick={() => setSelectedFormat(f)}
                className="px-4 py-1.5 rounded transition-colors cursor-pointer"
                style={{
                  fontSize: 13,
                  borderRadius: 20,
                  backgroundColor: selectedFormat === f ? C.purple : "white",
                  color: selectedFormat === f ? "white" : C.gray,
                  border: `1px solid ${selectedFormat === f ? C.purple : C.border}`,
                  fontWeight: 600,
                }}
              >
                {f}
              </button>
            ))}
            <span style={{ width: 1, backgroundColor: C.border, margin: "0 4px" }} />
            {ALL_DAYS.map((d) => (
              <button
                key={d}
                onClick={() => setSelectedDay(d)}
                className="px-3 py-1.5 rounded transition-colors cursor-pointer"
                style={{
                  fontSize: 12,
                  borderRadius: 20,
                  backgroundColor: selectedDay === d ? C.purple : "white",
                  color: selectedDay === d ? "white" : C.gray,
                  border: `1px solid ${selectedDay === d ? C.purple : C.border}`,
                  fontWeight: 600,
                }}
              >
                {d}
              </button>
            ))}
          </div>
        </div>
      </div>

      {/* ───────── Session Grid ───────── */}
      <section style={{ backgroundColor: C.lightBg }} className="py-10">
        <div className="max-w-[1200px] mx-auto px-6">
          <p style={{ fontSize: 14, color: C.gray }} className="mb-6">Showing {filtered.length} of 30 sessions</p>
          <div className="grid md:grid-cols-2 lg:grid-cols-3 gap-6">
            {filtered.map((s) => {
              const trackColor = getTrackColor(s.track);
              const isExpanded = expandedId === s.id;
              return (
                <div key={s.id} className={`bg-white rounded-lg shadow-sm overflow-hidden transition-all ${isExpanded ? "md:col-span-2 lg:col-span-3" : ""}`} style={{ borderRadius: 8 }}>
                  <div style={{ height: 4, backgroundColor: trackColor }} />
                  <div className="p-5">
                    <div className="flex gap-2 mb-3 flex-wrap">
                      <span className="px-2 py-0.5 rounded-full" style={{ fontSize: 10, backgroundColor: trackColor, color: trackColor === C.lime || trackColor === C.yellow || trackColor === C.mint || trackColor === C.coral ? C.black : "white", fontWeight: 600 }}>{s.track}</span>
                      <span className="px-2 py-0.5 rounded-full" style={{ fontSize: 10, backgroundColor: C.lightBg, color: C.gray, fontWeight: 600 }}>{s.format}</span>
                      <span className="px-2 py-0.5 rounded-full" style={{ fontSize: 10, backgroundColor: C.lightBg, color: C.gray }}>{s.date}</span>
                    </div>
                    <h3 style={{ fontSize: 18, fontWeight: 700, color: C.darkGray, lineHeight: 1.3 }} className="mb-2">{s.title}</h3>
                    <p style={{ fontSize: 14, color: C.purple, fontWeight: 600 }} className="mb-1">{s.speaker}</p>
                    <p style={{ fontSize: 14, color: C.gray, lineHeight: 1.6 }} className={`mb-4 ${isExpanded ? "" : "line-clamp-3"}`}>{s.overview}</p>

                    {isExpanded && (
                      <div style={{ borderTop: `1px solid ${C.border}` }} className="pt-4 mt-2">
                        {/* Key Themes pills */}
                        <div className="flex flex-wrap gap-2 mb-5">
                          {s.themes.map((t) => (
                            <span key={t} className="px-3 py-1 rounded-full" style={{ fontSize: 12, backgroundColor: `${trackColor}20`, color: C.darkGray, border: `1px solid ${trackColor}40` }}>{t}</span>
                          ))}
                        </div>

                        {/* Notable Quote */}
                        <blockquote className="mb-6 pl-5 py-3" style={{ borderLeft: `3px solid ${trackColor}` }}>
                          <p style={{ fontSize: 16, fontStyle: "italic", lineHeight: 1.7, color: C.darkGray }}>&ldquo;{s.topQuote}&rdquo;</p>
                          <footer className="mt-2">
                            <span style={{ fontSize: 13, fontWeight: 600, color: C.purple }}>{s.quoteAttribution}</span>
                          </footer>
                        </blockquote>

                        {/* Full Recap Content */}
                        <FullRecapContent filename={s.filename} />

                        {/* Download */}
                        <div className="mt-8 pt-4" style={{ borderTop: `1px solid ${C.border}` }}>
                          <a
                            href={`${import.meta.env.BASE_URL}content/session-recaps/${s.filename}`}
                            download={s.filename}
                            className="inline-flex items-center gap-2 px-5 py-2.5 rounded-lg transition-colors hover:opacity-80"
                            style={{ fontSize: 14, backgroundColor: C.purple, color: "white", fontWeight: 600, borderRadius: 8 }}
                          >
                            <Download size={16} /> Download Full Recap (.md)
                          </a>
                        </div>
                      </div>
                    )}

                    <button
                      onClick={() => setExpandedId(isExpanded ? null : s.id)}
                      className="flex items-center gap-1 mt-3 cursor-pointer"
                      style={{ fontSize: 14, color: C.purple, fontWeight: 600 }}
                    >
                      {isExpanded ? "Show less" : "Read more"} {isExpanded ? <ChevronUp size={14} /> : <ChevronDown size={14} />}
                    </button>
                  </div>
                </div>
              );
            })}
          </div>

          {filtered.length === 0 && (
            <div className="text-center py-20">
              <p style={{ fontSize: 18, color: C.gray }}>No sessions match your filters.</p>
              <button onClick={() => { setSearch(""); setSelectedTrack("All"); setSelectedFormat("All Formats"); setSelectedDay("All Days"); }} className="mt-4 px-6 py-2 rounded-lg cursor-pointer" style={{ fontSize: 14, color: "white", backgroundColor: C.purple }}>
                Clear all filters
              </button>
            </div>
          )}
        </div>
      </section>
    </div>
  );
}
