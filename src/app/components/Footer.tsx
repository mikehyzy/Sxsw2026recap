import { Link } from "react-router";

export function Footer() {
  return (
    <footer style={{ backgroundColor: "#0A0A0A" }} className="py-16 text-center">
      <div className="max-w-[1200px] mx-auto px-6">
        <p className="text-white mb-2" style={{ fontFamily: "Inter, sans-serif", fontWeight: 700, fontSize: 18 }}>
          Mike Hyzy
        </p>
        <p style={{ color: "#6B6B6B", fontSize: 14, fontFamily: "Inter, sans-serif" }}>
          VP of AI Strategy & Product Development · Forbes Technology Council
        </p>
        <div className="flex justify-center gap-6 mt-4 mb-6">
          <a href="https://www.mikehyzy.com" target="_blank" rel="noopener noreferrer" style={{ color: "#12674A", fontSize: 14, fontFamily: "Inter, sans-serif" }} className="hover:underline">Website</a>
          <a href="#" style={{ color: "#12674A", fontSize: 14, fontFamily: "Inter, sans-serif" }} className="hover:underline">LinkedIn</a>
          <a href="#" style={{ color: "#12674A", fontSize: 14, fontFamily: "Inter, sans-serif" }} className="hover:underline">Forbes Column</a>
        </div>
        <p style={{ color: "#6B6B6B", fontSize: 13, fontFamily: "Inter, sans-serif", fontStyle: "italic" }}>
          Built from field notes. Not a corporate recap.
        </p>
        <p style={{ color: "#4A4A4A", fontSize: 12, fontFamily: "Inter, sans-serif" }} className="mt-2">
          &copy; 2026 All rights reserved.
        </p>
      </div>
    </footer>
  );
}