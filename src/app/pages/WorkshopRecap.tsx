import { useState } from "react";
import { ChevronDown, ChevronUp, X } from "lucide-react";

const B = import.meta.env.BASE_URL;

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

/* ───────── Image paths ───────── */
const img = (p: string) => `${B}frames/${p}`;

/* ───────── Expandable Section ───────── */
function Expand({ title, defaultOpen = false, children }: { title: string; defaultOpen?: boolean; children: React.ReactNode }) {
  const [open, setOpen] = useState(defaultOpen);
  return (
    <div className="border-b" style={{ borderColor: C.border }}>
      <button onClick={() => setOpen(!open)} className="w-full flex items-center justify-between py-5 text-left group cursor-pointer">
        <h3 style={{ fontSize: 22, fontWeight: 700, color: C.darkGray }} className="group-hover:text-[#7B61FF] transition-colors pr-4">{title}</h3>
        <span style={{ color: C.purple }}>{open ? <ChevronUp size={22} /> : <ChevronDown size={22} />}</span>
      </button>
      {open && <div className="pb-8">{children}</div>}
    </div>
  );
}

/* ───────── Workshop Image (click to enlarge) ───────── */
function WImg({ src, alt, className = "" }: { src: string; alt: string; className?: string }) {
  const [enlarged, setEnlarged] = useState(false);
  return (
    <>
      <img
        src={src} alt={alt}
        className={`rounded-lg cursor-pointer hover:opacity-90 transition-opacity ${className}`}
        style={{ width: "100%", objectFit: "cover" }}
        onClick={() => setEnlarged(true)}
      />
      {enlarged && (
        <div className="fixed inset-0 z-50 flex items-center justify-center bg-black/90 cursor-pointer" onClick={() => setEnlarged(false)}>
          <button className="absolute top-6 right-6 text-white cursor-pointer" onClick={() => setEnlarged(false)}><X size={28} /></button>
          <img src={src} alt={alt} className="max-w-[90vw] max-h-[90vh] object-contain rounded-lg" />
        </div>
      )}
    </>
  );
}

/* ───────── Quote Block ───────── */
function Q({ text, attribution, color = C.purple }: { text: string; attribution?: string; color?: string }) {
  return (
    <blockquote className="my-6 pl-5 py-3" style={{ borderLeft: `3px solid ${color}` }}>
      <p style={{ fontSize: 16, fontStyle: "italic", lineHeight: 1.7, color: C.darkGray }}>&ldquo;{text}&rdquo;</p>
      {attribution && <footer className="mt-2"><span style={{ fontSize: 13, fontWeight: 600, color }}>{attribution}</span></footer>}
    </blockquote>
  );
}

/* ═══════════════════════════════════════════════════════════ */
/*                   WORKSHOP RECAP PAGE                       */
/* ═══════════════════════════════════════════════════════════ */

export function WorkshopRecap() {
  return (
    <div>
      {/* ───────── Hero with real title slide image ───────── */}
      <section className="relative" style={{ backgroundColor: C.black }}>
        <div className="max-w-[1400px] mx-auto">
          <img
            src={img("canon/MVI_5627_frame_0001.jpg")}
            alt="Artistic Disruption for Business Innovation — title slide at SXSW 2026"
            className="w-full object-cover"
            style={{ maxHeight: 560, opacity: 0.7 }}
          />
        </div>
        <div className="absolute inset-0 flex items-end">
          <div className="max-w-[1200px] mx-auto px-6 pb-12 w-full">
            <p style={{ color: C.mint, fontSize: 12, fontWeight: 700, letterSpacing: "0.1em", textTransform: "uppercase" }} className="mb-3">Workshop Recap</p>
            <h1 className="text-white mb-3" style={{ fontSize: "clamp(30px, 4vw, 48px)", fontWeight: 700, lineHeight: 1.15 }}>
              Artistic Disruption for Business Innovation
            </h1>
            <p style={{ color: C.mint, fontSize: 16 }}>Mike Hyzy &amp; Michael Marshall · Chicago Futures Salon · SXSW 2026</p>
            <div className="flex gap-3 flex-wrap mt-4">
              <span className="px-3 py-1 rounded-full" style={{ fontSize: 12, backgroundColor: C.purple, color: "white", fontWeight: 600 }}>Workshop</span>
              <span className="px-3 py-1 rounded-full" style={{ fontSize: 12, backgroundColor: C.darkGray, color: "white" }}>Sunday, March 15, 2026</span>
              <span className="px-3 py-1 rounded-full" style={{ fontSize: 12, backgroundColor: C.darkGray, color: "white" }}>Hilton Austin</span>
              <span className="px-3 py-1 rounded-full" style={{ fontSize: 12, backgroundColor: C.darkGray, color: "white" }}>Innovation Track</span>
              <span className="px-3 py-1 rounded-full" style={{ fontSize: 12, backgroundColor: C.darkGray, color: "white" }}>120 Minutes</span>
              <span className="px-3 py-1 rounded-full" style={{ fontSize: 12, backgroundColor: C.darkGray, color: "white" }}>64 Participants</span>
            </div>
          </div>
        </div>
      </section>

      {/* ───────── Overview ───────── */}
      <section style={{ backgroundColor: C.lightBg }} className="py-16">
        <div className="max-w-[1200px] mx-auto px-6">
          <div className="flex flex-col lg:flex-row gap-10">
            <div className="flex-1">
              <p style={{ color: C.purple, fontSize: 12, fontWeight: 700, letterSpacing: "0.1em", textTransform: "uppercase" }} className="mb-3">The Premise</p>
              <p style={{ fontSize: 16, lineHeight: 1.8, color: C.darkGray }} className="mb-4">
                This workshop applied artistic disruption techniques — drawn from Surrealist and Situationist movements of the 1930s–1970s — to futures thinking and business innovation. Rather than lecturing about creativity, the session immersed participants in four escalating "provocations" that forced them to think differently, collaborate with strangers, and generate speculative futures through hands-on creative exercises.
              </p>
              <p style={{ fontSize: 16, lineHeight: 1.8, color: C.darkGray }} className="mb-4">
                The format was deliberately disorienting. Participants drew, wrote, passed materials to strangers, interpreted unfamiliar images, and co-authored visions of the future without the safety net of slide decks, frameworks, or best practices. The underlying premise: if your strategy process feels comfortable, it's probably not producing anything original.
              </p>
              <p style={{ fontSize: 16, lineHeight: 1.8, color: C.darkGray }}>
                The workshop built from individual creative acts (Provocation #1) through collaborative interpretation (#2) to collective futures authoring (#3) and culminated in a group spectacle imagining SXSW in 2040 (#4). Each provocation increased the scale of collaboration and the time horizon of speculation.
              </p>
            </div>
            <div className="lg:w-[400px] flex-shrink-0 space-y-4">
              <WImg src={img("canon/MVI_5628_frame_0004.jpg")} alt="Speaker bios — Mike Hyzy and Michael Marshall" />
              <p style={{ fontSize: 12, color: C.gray, textAlign: "center" }}>Facilitators: Mike Hyzy (CGI / Forbes Technology Council) &amp; Michael Marshall (United Airlines Airshop)</p>
            </div>
          </div>
        </div>
      </section>

      {/* ───────── B-roll establishing shot ───────── */}
      <section style={{ backgroundColor: C.black }} className="py-2">
        <div className="max-w-[1400px] mx-auto">
          <WImg src={img("broll/DJI_1_frame_0005.jpg")} alt="Overhead view of full workshop room with round tables" />
          <p style={{ fontSize: 12, color: C.gray, textAlign: "center", padding: "8px 0" }}>Full room — 64 participants across round tables, Hilton Austin</p>
        </div>
      </section>

      {/* ───────── Four Provocations ───────── */}
      <section style={{ backgroundColor: C.lightBg }} className="py-16">
        <div className="max-w-[1200px] mx-auto px-6">
          <h2 style={{ fontSize: 32, fontWeight: 700, color: C.darkGray }} className="mb-2">Four Provocations</h2>
          <p style={{ fontSize: 16, color: C.gray, lineHeight: 1.7 }} className="mb-10">Each provocation increased the scale of collaboration and the time horizon of speculation.</p>

          {/* Provocation 1 */}
          <Expand title="Provocation #1: One Into Another 2.0" defaultOpen>
            <p style={{ fontSize: 16, lineHeight: 1.8, color: C.darkGray }} className="mb-4">
              Adapted from the Surrealist parlor game "One Into Another," this exercise forced participants through three rapid rounds of creative translation:
            </p>
            <ul className="mb-6 space-y-2 pl-5" style={{ listStyle: "disc" }}>
              <li style={{ fontSize: 15, lineHeight: 1.7, color: C.darkGray }}><strong>Round #1: Text</strong> (~5 min) — Participants wrote a short passage, then passed it to another table member who transformed it into something new</li>
              <li style={{ fontSize: 15, lineHeight: 1.7, color: C.darkGray }}><strong>Round #2: Images</strong> (~5 min) — The same pass-and-transform mechanic, now using visual imagery</li>
              <li style={{ fontSize: 15, lineHeight: 1.7, color: C.darkGray }}><strong>Round #3: Mixed Media</strong> (~5 min) — Combining text and images in a final round blending both modes</li>
            </ul>
            <p style={{ fontSize: 16, lineHeight: 1.8, color: C.darkGray }} className="mb-6">
              The original Surrealist game asked one player to secretly choose an object and describe it using properties of a completely different object, forcing metaphorical leaps that bypassed rational thought. Between rounds, the facilitator called "CHANGE PLACES" — a Situationist-inspired disruption where participants physically moved, breaking social comfort and forcing new collaborations.
            </p>
            <div className="grid md:grid-cols-2 gap-4 mb-4">
              <WImg src={img("canon/MVI_5629_frame_0005.jpg")} alt="Mike Hyzy circulating among tables during One Into Another exercise" />
              <WImg src={img("canon/MVI_5629_frame_0007.jpg")} alt="CHANGE PLACES slide with participant artwork on screen" />
            </div>
          </Expand>

          {/* Provocation 2 */}
          <Expand title="Provocation #2: En L'An 2000">
            <p style={{ fontSize: 16, lineHeight: 1.8, color: C.darkGray }} className="mb-4">
              A card-based interpretation exercise structured in 4 rounds (~5 minutes each). Participants drew cards with historical illustrations, studied the images together silently, then reacted beginning with "I suppose..." followed by what really happened. Each round built interpretive confidence and demonstrated how different people extract radically different meanings from identical stimuli.
            </p>
            <p style={{ fontSize: 16, lineHeight: 1.8, color: C.darkGray }} className="mb-6">
              This provocation trained participants in a skill essential to futures work: interpreting ambiguous visual signals and constructing meaning from incomplete information. The "I suppose..." framing explicitly separates assumption from reality — a critical distinction when working with uncertain futures.
            </p>
            <div className="grid md:grid-cols-3 gap-4 mb-4">
              <WImg src={img("canon/MVI_5630_frame_0002.jpg")} alt="En L'An 2000 instructions slide" />
              <WImg src={img("canon/MVI_5629_frame_0009.jpg")} alt="Michael Marshall presenting En L'An 2000 card — 'A l'ecole / At School'" />
              <WImg src={img("broll/DJI_2_frame_0004.jpg")} alt="Wide room angle — multiple tables deep in the card exercise" />
            </div>
          </Expand>

          {/* Provocation 3 */}
          <Expand title="Provocation #3: Exquisite Futures">
            <p style={{ fontSize: 16, lineHeight: 1.8, color: C.darkGray }} className="mb-4">
              Named after the Surrealist technique "Exquisite Corpse" — where artists collaboratively drew a figure without seeing each other's contributions — this provocation applied the same logic to futures speculation:
            </p>
            <ul className="mb-6 space-y-2 pl-5" style={{ listStyle: "disc" }}>
              <li style={{ fontSize: 15, lineHeight: 1.7, color: C.darkGray }}><strong>Round #1: 2035 / Global</strong> (~7 min) — Tables collaboratively authored a vision of the global landscape in 2035</li>
              <li style={{ fontSize: 15, lineHeight: 1.7, color: C.darkGray }}><strong>Round #2: 2040 / Industry</strong> (~7 min) — Same collaborative method, now focused on industry-specific futures in 2040</li>
            </ul>
            <p style={{ fontSize: 16, lineHeight: 1.8, color: C.darkGray }} className="mb-6">
              By splitting the exercise into a near-term global round and a further-out industry round, the provocation forced participants to bridge macro trends with sector-specific implications — the same bridging that effective foresight requires but rarely achieves in traditional planning processes.
            </p>
            <div className="grid md:grid-cols-3 gap-4 mb-4">
              <WImg src={img("canon/MVI_5630_frame_0008.jpg")} alt="Exquisite Futures 4-quadrant template on screen" />
              <WImg src={img("canon/MVI_5631_frame_0004.jpg")} alt="Michael Marshall gesturing to the room during Exquisite Futures" />
              <WImg src={img("canon/MVI_5631_frame_0006.jpg")} alt="Participant artwork displayed on the big screen" />
            </div>
            <p style={{ fontSize: 13, color: C.purple, fontWeight: 600, textAlign: "center" }}>Participant artwork displayed on the main screen — real creative output from the exercise</p>
          </Expand>

          {/* Provocation 4 */}
          <Expand title="Provocation #4: The Spectacle — SXSW 2040">
            <p style={{ fontSize: 16, lineHeight: 1.8, color: C.darkGray }} className="mb-4">
              The final provocation drew on the Situationist concept of "The Spectacle" — Guy Debord's critique of how mediated images replace lived experience. Tables were tasked with imagining what SXSW itself would look like in 2040, synthesizing the creative muscles exercised in the previous three provocations into a single collaborative vision.
            </p>
            <p style={{ fontSize: 16, lineHeight: 1.8, color: C.darkGray }} className="mb-6">
              This was the workshop's culminating act: participants who had spent the previous hour drawing, interpreting, passing, and co-authoring now applied all of those techniques to a shared subject they all understood — the festival they were attending. The specificity grounded the speculation, while the methods ensured the visions were genuinely surprising rather than incremental extrapolations.
            </p>
            <div className="grid md:grid-cols-2 gap-4 mb-4">
              <WImg src={img("canon/MVI_5631_frame_0008.jpg")} alt="The Spectacle: SXSW 2040 slide with all 4 stages" />
              <WImg src={img("canon/MVI_5632_frame_0003.jpg")} alt="Packed room during The Spectacle exercise" />
            </div>
          </Expand>
        </div>
      </section>

      {/* ───────── Methodology ───────── */}
      <section style={{ backgroundColor: C.black }} className="py-16">
        <div className="max-w-[1200px] mx-auto px-6">
          <h2 className="text-white mb-8" style={{ fontSize: 28, fontWeight: 700 }}>Methodology: Art Movements as Innovation Tools</h2>
          <div className="grid md:grid-cols-2 gap-8 mb-8">
            <div>
              <WImg src={img("canon/MVI_5628_frame_0005.jpg")} alt="Methodology slide about Surrealists and Situationists" />
            </div>
            <div>
              <WImg src={img("canon/MVI_5628_frame_0007.jpg")} alt="Surrealist artwork reference with packed room" />
            </div>
          </div>
          <div className="grid md:grid-cols-2 gap-8">
            <div className="rounded-lg p-6" style={{ backgroundColor: C.darkGray, borderTop: `3px solid ${C.pink}` }}>
              <h3 className="text-white mb-3" style={{ fontSize: 18, fontWeight: 700 }}>Surrealism (1930s–1960s)</h3>
              <p style={{ fontSize: 14, color: C.gray, lineHeight: 1.7 }}>
                Contributed techniques for bypassing rational thought to access unexpected ideas. The Surrealists believed that conscious, logical thinking was the enemy of genuine creativity — that the most powerful ideas emerge when the mind is freed from its habitual patterns. Techniques like automatic writing, exquisite corpse, and "one into another" were designed to produce exactly this cognitive liberation.
              </p>
            </div>
            <div className="rounded-lg p-6" style={{ backgroundColor: C.darkGray, borderTop: `3px solid ${C.yellow}` }}>
              <h3 className="text-white mb-3" style={{ fontSize: 18, fontWeight: 700 }}>Situationism (1950s–1970s)</h3>
              <p style={{ fontSize: 14, color: C.gray, lineHeight: 1.7 }}>
                Contributed techniques for disrupting habitual behavior and perception. The Situationists — led by Guy Debord — argued that modern life had become a passive "spectacle" where people consumed images rather than creating meaning. Their response: create "situations" — constructed encounters that broke routine and forced active participation. The "CHANGE PLACES" disruptions and the final Spectacle provocation both drew from this tradition.
              </p>
            </div>
          </div>
          <p className="text-white mt-8" style={{ fontSize: 16, lineHeight: 1.8, maxWidth: 800 }}>
            The workshop's premise: techniques developed by artists to disrupt cultural complacency are directly applicable to disrupting strategic complacency in business. The same cognitive patterns that make daily life feel automatic also make strategy sessions produce predictable outputs. Artistic disruption methods break those patterns.
          </p>
        </div>
      </section>

      {/* ───────── Closing images ───────── */}
      <section style={{ backgroundColor: C.lightBg }} className="py-16">
        <div className="max-w-[1200px] mx-auto px-6">
          <h2 style={{ fontSize: 28, fontWeight: 700, color: C.darkGray }} className="mb-8">The Room</h2>
          <div className="grid md:grid-cols-3 gap-4 mb-4">
            <WImg src={img("canon/MVI_5632_frame_0006.jpg")} alt="Thank You slide with both facilitators and full audience" />
            <WImg src={img("canon/MVI_5632_frame_0011.jpg")} alt="Post-session: people lingering, examining work, networking" />
            <WImg src={img("canon/MVI_5632_frame_0015.jpg")} alt="Materials and participant artwork remaining on tables" />
          </div>
          <p style={{ fontSize: 15, lineHeight: 1.8, color: C.darkGray }} className="mt-6">
            The energy shifted noticeably across the four provocations — from tentative and self-conscious during the first text round to fully immersed and animated by the Spectacle exercise. By the closing "Thank You" slide, participants lingered at tables examining each other's work and continuing conversations.
          </p>
        </div>
      </section>

      {/* ───────── Photo Gallery ───────── */}
      <section style={{ backgroundColor: C.black }} className="py-16">
        <div className="max-w-[1200px] mx-auto px-6">
          <h2 className="text-white mb-8" style={{ fontSize: 28, fontWeight: 700 }}>Photo Gallery</h2>
          <div className="grid grid-cols-2 md:grid-cols-4 gap-3">
            {[
              "broll/DJI_1_frame_0003.jpg", "broll/DJI_1_frame_0007.jpg", "broll/DJI_1_frame_0009.jpg", "broll/DJI_1_frame_0014.jpg",
              "broll/DJI_2_frame_0001.jpg", "broll/DJI_2_frame_0010.jpg",
              "canon/MVI_5628_frame_0003.jpg", "canon/MVI_5629_frame_0002.jpg",
              "canon/MVI_5630_frame_0005.jpg", "canon/MVI_5631_frame_0001.jpg",
              "canon/MVI_5632_frame_0002.jpg", "canon/MVI_5632_frame_0008.jpg",
            ].map((p) => (
              <WImg key={p} src={img(p)} alt="Workshop photo" className="aspect-video" />
            ))}
          </div>
        </div>
      </section>

      {/* ───────── Connection to SXSW Themes ───────── */}
      <section style={{ backgroundColor: C.lightBg }} className="py-16">
        <div className="max-w-[1200px] mx-auto px-6">
          <p style={{ fontSize: 16, lineHeight: 1.8, color: C.darkGray, maxWidth: 800 }}>
            This workshop embodied SXSW 2026's persistent tension between AI-driven efficiency and irreducibly human creativity. While dozens of sessions discussed how AI generates content faster, this session asked participants to generate ideas slower — to struggle, to draw badly, to interpret ambiguously, and to build meaning collaboratively without algorithmic assistance. In an era where AI can generate a hundred competent strategies in seconds, the competitive advantage belongs to organizations whose people can think in ways that surprise even themselves.
          </p>
        </div>
      </section>

      {/* ═══════════════════════════════════════════════════════ */}
      {/*                    BRAINDATE SECTION                    */}
      {/* ═══════════════════════════════════════════════════════ */}

      <section style={{ backgroundColor: C.black }} className="py-16">
        <div className="max-w-[1200px] mx-auto px-6">
          <p style={{ color: C.yellow, fontSize: 12, fontWeight: 700, letterSpacing: "0.1em", textTransform: "uppercase" }} className="mb-3">Braindate Recap</p>
          <h2 className="text-white mb-3" style={{ fontSize: "clamp(26px, 3.5vw, 40px)", fontWeight: 700, lineHeight: 1.15 }}>
            Why Your AI Strategy Needs an Artist
          </h2>
          <p style={{ color: C.gray, fontSize: 16 }} className="mb-2">Hosted by Mike Hyzy · Chicago Futures Salon · Monday, March 16, 2026</p>
          <p style={{ color: C.gray, fontSize: 14 }} className="mb-8">~8–10 professionals from Intercorp (Peru), Fire Mountain (media archives), CGI (Toronto), skincare technology, and independent creative practice</p>
        </div>
      </section>

      <section style={{ backgroundColor: C.lightBg }} className="py-16">
        <div className="max-w-[1200px] mx-auto px-6">
          <p style={{ fontSize: 16, lineHeight: 1.8, color: C.darkGray }} className="mb-6">
            This braindate explored a provocation at the heart of AI strategy: that the missing voice in most enterprise AI deployments isn't another engineer or product manager — it's an artist. The conversation moved fluidly between personal practice, organizational politics, and philosophical questions about what creativity means in an age of generative AI.
          </p>
          <p style={{ fontSize: 16, lineHeight: 1.8, color: C.darkGray }} className="mb-10">
            What made this session distinctive was the diversity of perspectives around the table. A business designer running innovation labs across Latin America, a media archivist digitizing decades of film and audio, a skincare technology professional, and strategy consultants all brought radically different lenses to the same question.
          </p>

          <Expand title="Cognitive Enhancement vs. Cognitive Offloading" defaultOpen>
            <p style={{ fontSize: 15, lineHeight: 1.8, color: C.darkGray }} className="mb-4">
              The central distinction drawn throughout the conversation was between using AI to enhance human cognition and using AI to replace it. Most organizations default to offloading — asking AI to write the memo, generate the strategy deck, produce the options. Enhancement looks different: using AI as a sparring partner, a challenger, a tool that forces sharper thinking rather than eliminating thinking entirely.
            </p>
            <Q text="The question isn't whether you use AI. It's whether AI is making you think harder or think less. If you're thinking less, you're not using it — it's using you." attribution="Mike Hyzy" />
          </Expand>

          <Expand title="The Missing Creative Voice in the C-Suite">
            <p style={{ fontSize: 15, lineHeight: 1.8, color: C.darkGray }} className="mb-4">
              Multiple participants noted that creative roles — designers, artists, writers — are systematically excluded from strategic decision-making. They're brought in to execute after decisions are made. But the cognitive skills that creative training develops — comfort with ambiguity, lateral thinking, aesthetic judgment — are precisely what AI strategy requires.
            </p>
            <Q text="In our labs across Lima, Bogotá, Santiago — every time we put a designer or artist in a room with business people, the output changes. Not incrementally. Categorically." attribution="Business Designer, Intercorp Innovation Labs (Peru)" color={C.yellow} />
          </Expand>

          <Expand title="The Strategy Trifecta">
            <p style={{ fontSize: 15, lineHeight: 1.8, color: C.darkGray }} className="mb-4">
              Mike outlined his approach to strategy as a trifecta: business strategy, technology strategy, and creative strategy. Most organizations run on two of three at best. Without creative strategy, the other two converge on the same solutions as every competitor using the same frameworks and the same AI tools.
            </p>
            <Q text="Every company has a business strategy and a tech strategy. Almost none have a creative strategy. And then they wonder why everything they produce looks and sounds like everyone else." attribution="Mike Hyzy" />
          </Expand>

          <Expand title="Artists Must Evolve Too">
            <p style={{ fontSize: 15, lineHeight: 1.8, color: C.darkGray }} className="mb-4">
              The conversation wasn't one-sided advocacy for artists. Artists who want a seat at the strategy table need to learn business language, understand commercial constraints, and demonstrate measurable impact. The parallel: data scientists who could only build models in isolation had limited impact. The ones who transformed organizations were those who learned to communicate in business terms.
            </p>
            <Q text="I'm not saying hire a painter and put them in your strategy meeting. I'm saying the cognitive toolkit that artistic training develops — that's what's missing. But the artist has to meet the business halfway." attribution="Mike Hyzy" color={C.mint} />
          </Expand>

          <Expand title="The Authenticity Hunger">
            <p style={{ fontSize: 15, lineHeight: 1.8, color: C.darkGray }} className="mb-4">
              As AI-generated content floods every channel, audiences are developing an acute hunger for authenticity — for things that feel human-made, imperfect, and real. The media archivist from Fire Mountain described how their work digitizing historical film and audio archives is becoming more valuable precisely because the material is irreproducibly authentic.
            </p>
            <Q text="We're sitting on decades of original footage, original recordings. None of it was made by AI. And suddenly that's the most valuable thing about it — not what it contains, but that it's real." attribution="Media Archivist, Fire Mountain" color={C.coral} />
          </Expand>

          {/* Notable Quotes */}
          <h3 style={{ fontSize: 22, fontWeight: 700, color: C.darkGray }} className="mt-12 mb-6">Notable Quotes</h3>
          <div className="grid md:grid-cols-2 gap-4 mb-10">
            {[
              { text: "Critique this. Not write this. That's the prompt that changes everything.", color: C.purple },
              { text: "The archivist is becoming the most important person in the building. Because they're the only ones sitting on things AI didn't make.", color: C.yellow },
              { text: "We ran the same innovation sprint with and without a designer in the room. The outputs weren't just different — the questions were different.", color: C.mint },
              { text: "AI can generate a thousand options. An artist can tell you which one matters. That's not a soft skill. That's the hardest skill in the room.", color: C.pink },
            ].map((q) => (
              <div key={q.text} className="rounded-lg p-6" style={{ backgroundColor: "white", borderLeft: `4px solid ${q.color}` }}>
                <p style={{ fontSize: 15, fontStyle: "italic", lineHeight: 1.7, color: C.darkGray }}>&ldquo;{q.text}&rdquo;</p>
              </div>
            ))}
          </div>

          {/* Participant Perspectives */}
          <h3 style={{ fontSize: 22, fontWeight: 700, color: C.darkGray }} className="mb-6">Participant Perspectives</h3>
          <div className="space-y-4 mb-10">
            {[
              { role: "Business Designer, Intercorp Innovation Labs (Peru)", desc: "Brought a Latin American perspective on running innovation programs across banking, retail, and education. Consistently observed that creative practitioners change not just outputs but the nature of inquiry within innovation teams." },
              { role: "Media Archivist, Fire Mountain", desc: "Described the unexpected renaissance in value of physical media archives as AI-generated content proliferates. Using AI tools for cataloging and restoration to preserve and surface inherently non-AI content." },
              { role: "Design Professional, CGI (Toronto)", desc: "Contributed perspectives on integrating design thinking into enterprise consulting — the organizational resistance, the translation challenges, and the moments where creative approaches break through." },
              { role: "Skincare Technology Professional", desc: "Offered a product-centered perspective on why aesthetic and sensory judgment can't be outsourced to AI. In industries where the product is experienced bodily, creative dimensions are inseparable from functional ones." },
              { role: "Independent Creative (Laura)", desc: "Grounded the conversation in the lived experience of a working creative navigating the AI landscape — the opportunities, the threats, the daily decisions about when to use AI tools and when to insist on human-only process." },
            ].map((p) => (
              <div key={p.role} className="bg-white rounded-lg p-5 shadow-sm" style={{ borderLeft: `4px solid ${C.lavender}` }}>
                <p style={{ fontSize: 14, fontWeight: 700, color: C.purple }} className="mb-1">{p.role}</p>
                <p style={{ fontSize: 14, lineHeight: 1.7, color: C.darkGray }}>{p.desc}</p>
              </div>
            ))}
          </div>

          {/* Takeaways */}
          <h3 style={{ fontSize: 22, fontWeight: 700, color: C.darkGray }} className="mb-6">Takeaways for Practitioners</h3>
          <div className="space-y-3">
            {[
              "Add a creative strategist to your AI initiative. Not after decisions are made. During the decision-making process.",
              "Shift your default AI prompt from \"generate\" to \"critique.\" This single behavioral change moves you from cognitive offloading to cognitive enhancement.",
              "Audit your strategy for the missing third leg. If you have business strategy and technology strategy but no creative strategy, you're competing on the same terms as everyone else.",
              "Invest in authenticity as AI content scales. Original human-made content will become more valuable, not less.",
              "Train artists in business; train businesspeople in art. The translation layer between creative thinking and strategic decision-making is where the real value lives.",
            ].map((t, i) => (
              <div key={i} className="flex gap-4 bg-white rounded-lg p-4 shadow-sm">
                <span style={{ fontSize: 22, fontWeight: 700, color: C.purple, flexShrink: 0 }}>{String(i + 1).padStart(2, "0")}</span>
                <p style={{ fontSize: 14, lineHeight: 1.7, color: C.darkGray }}>{t}</p>
              </div>
            ))}
          </div>
        </div>
      </section>

      {/* ───────── Footer note ───────── */}
      <section style={{ backgroundColor: C.black }} className="py-10">
        <div className="max-w-[1200px] mx-auto px-6 text-center">
          <p style={{ fontSize: 14, color: C.gray, fontStyle: "italic" }}>
            Workshop designed and facilitated by Mike Hyzy and Michael Marshall. Presented under the Chicago Futures Salon banner at SXSW 2026.
          </p>
        </div>
      </section>
    </div>
  );
}
