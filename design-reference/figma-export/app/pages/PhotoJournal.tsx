import { IMAGES } from "../components/images";
import { useState } from "react";

const photos = [
  { src: IMAGES.hero, caption: "Opening night at the main stage", location: "Austin Convention District", aspect: "landscape" },
  { src: IMAGES.neon, caption: "Keep Austin Weird — and innovative", location: "South Congress Avenue", aspect: "portrait" },
  { src: IMAGES.workshop, caption: "Artistic Disruption workshop in action", location: "Hilton Downtown", aspect: "landscape" },
  { src: IMAGES.music, caption: "Late night showcase on 6th Street", location: "Stubb's BBQ", aspect: "square" },
  { src: IMAGES.crowd, caption: "The food truck scene after dark", location: "Rainey Street", aspect: "portrait" },
  { src: IMAGES.austin, caption: "Austin skyline from Congress Bridge", location: "Lady Bird Lake", aspect: "landscape" },
  { src: IMAGES.panel, caption: "Panel discussion on AI governance", location: "JW Marriott", aspect: "landscape" },
  { src: IMAGES.collab, caption: "Braindate session in progress", location: "Palmer Events Center", aspect: "square" },
  { src: IMAGES.keynote, caption: "Standing room only at the AI keynote", location: "ACL Live", aspect: "landscape" },
  { src: IMAGES.mural, caption: "Street art discovered between sessions", location: "East Austin", aspect: "portrait" },
  { src: IMAGES.networking, caption: "Networking after hours", location: "Rainey Street", aspect: "square" },
  { src: IMAGES.innovation, caption: "The future on display", location: "Trade Show Floor", aspect: "landscape" },
  { src: IMAGES.headshot, caption: "Between sessions", location: "Downtown Austin", aspect: "portrait" },
  { src: IMAGES.game, caption: "Gamification demo booth", location: "Exhibition Hall", aspect: "square" },
  { src: IMAGES.bookSigning, caption: "Book signing event", location: "BookPeople Austin", aspect: "landscape" },
];

const aspectMap: Record<string, string> = { landscape: "260px", portrait: "450px", square: "350px" };

export function PhotoJournal() {
  const [hovered, setHovered] = useState<number | null>(null);

  return (
    <div>
      <section style={{ backgroundColor: "#0A0A0A", minHeight: "30vh" }} className="flex items-center">
        <div className="max-w-[1200px] mx-auto px-6 py-16">
          <h1 className="text-white mb-2" style={{ fontSize: "clamp(32px, 4vw, 48px)", fontWeight: 700 }}>Visual Field Notes</h1>
          <p style={{ color: "#6B6B6B", fontSize: 18 }}>7 days in Austin, March 2026</p>
        </div>
      </section>

      <section style={{ backgroundColor: "#F7F5F0" }} className="py-10">
        <div className="max-w-[1200px] mx-auto px-6">
          <div className="columns-1 md:columns-2 lg:columns-3 gap-2">
            {photos.map((p, i) => (
              <div
                key={i}
                className="break-inside-avoid mb-2 relative overflow-hidden rounded-lg cursor-pointer"
                style={{ borderRadius: 8 }}
                onMouseEnter={() => setHovered(i)}
                onMouseLeave={() => setHovered(null)}
              >
                <img src={p.src} alt={p.caption} className="w-full object-cover" style={{ height: aspectMap[p.aspect] }} />
                <div
                  className="absolute inset-0 flex flex-col justify-end p-4 transition-opacity"
                  style={{
                    background: "linear-gradient(to top, rgba(10,10,10,0.8) 0%, transparent 60%)",
                    opacity: hovered === i ? 1 : 0,
                  }}
                >
                  <p className="text-white" style={{ fontSize: 14 }}>{p.caption}</p>
                  <p style={{ fontSize: 12, color: "#6B6B6B" }}>{p.location}</p>
                </div>
              </div>
            ))}
          </div>
        </div>
      </section>
    </div>
  );
}
