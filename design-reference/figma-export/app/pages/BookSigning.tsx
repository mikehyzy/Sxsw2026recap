import { IMAGES } from "../components/images";

const endorsements = [
  { text: "A masterclass in making products people actually want to use.", attr: "— VP of Product, Google" },
  { text: "Finally, a gamification book that's about business outcomes, not points and badges.", attr: "— Forbes Technology Council" },
  { text: "Essential reading for anyone building products in the AI era.", attr: "— Harvard Business Review" },
];

export function BookSigning() {
  return (
    <div>
      {/* HERO */}
      <section style={{ backgroundColor: "#0A0A0A", minHeight: "50vh" }} className="flex items-center">
        <div className="max-w-[1200px] mx-auto px-6 py-16 flex flex-col lg:flex-row items-center gap-12 w-full">
          <div className="flex-1">
            <h1 className="text-white mb-4" style={{ fontSize: "clamp(28px, 3.5vw, 44px)", fontWeight: 700, lineHeight: 1.15 }}>
              Gamification for Product Excellence
            </h1>
            <p style={{ color: "#6B6B6B", fontSize: 16 }} className="mb-8">Signed at SXSW 2026</p>
            <div className="space-y-6">
              {endorsements.map((e, i) => (
                <div key={i}>
                  <p className="text-white" style={{ fontSize: 16, fontStyle: "italic", lineHeight: 1.6 }}>"{e.text}"</p>
                  <p style={{ color: "#6B6B6B", fontSize: 13 }} className="mt-1">{e.attr}</p>
                </div>
              ))}
            </div>
          </div>
          <div className="flex-shrink-0" style={{ transform: "rotate(2deg)" }}>
            <img src={IMAGES.game} alt="Book Cover" className="rounded-lg object-cover shadow-2xl" style={{ width: 350, height: 500, borderRadius: 8 }} />
          </div>
        </div>
      </section>

      {/* ABOUT */}
      <section style={{ backgroundColor: "#F7F5F0" }} className="py-20">
        <div className="max-w-[800px] mx-auto px-6">
          <p style={{ fontSize: 16, color: "#1A1A1A", lineHeight: 1.8 }} className="mb-4">
            Gamification for Product Excellence redefines what gamification means for serious product teams. This isn't about slapping badges on an enterprise dashboard—it's about understanding the deep behavioral mechanics that drive product adoption and long-term engagement.
          </p>
          <p style={{ fontSize: 16, color: "#1A1A1A", lineHeight: 1.8 }} className="mb-4">
            Drawing on behavioral science, game design theory, and real-world case studies from Fortune 500 implementations, the book provides a practical framework for building products that people don't just use—they choose to use.
          </p>
          <p style={{ fontSize: 16, color: "#1A1A1A", lineHeight: 1.8 }} className="mb-8">
            The book has been adopted as required reading in MBA programs at three universities and has been translated into seven languages since its publication.
          </p>
          <button className="text-white px-8 py-3 rounded-lg transition-opacity hover:opacity-90" style={{ backgroundColor: "#12674A", fontSize: 16, borderRadius: 8 }}>
            Buy the Book →
          </button>
        </div>
      </section>

      {/* SXSW CONTEXT */}
      <section style={{ backgroundColor: "#F7F5F0" }} className="pb-20">
        <div className="max-w-[1200px] mx-auto px-6">
          <h2 style={{ fontSize: 24, fontWeight: 700, color: "#1A1A1A" }} className="mb-4">Why This Book at SXSW</h2>
          <p style={{ fontSize: 16, color: "#1A1A1A", lineHeight: 1.8 }} className="mb-8 max-w-3xl">
            SXSW 2026's biggest theme was adoption—getting humans to actually use the AI tools being built for them. Gamification isn't about making things fun; it's about designing for the behavioral patterns that drive sustained engagement. In an era of AI-first products, that's not a nice-to-have—it's the difference between a product that launches and a product that lasts.
          </p>
          <img src={IMAGES.bookSigning} alt="Book Signing Event" className="rounded-lg object-cover w-full" style={{ maxWidth: 800, height: 400, borderRadius: 8 }} />
        </div>
      </section>
    </div>
  );
}
