import { Link, useLocation } from "react-router";

const links = [
  { to: "/", label: "Home" },
  { to: "/trends", label: "Trends" },
  { to: "/sessions", label: "Sessions" },
  { to: "/workshop", label: "Workshop" },
  { to: "/roundtable", label: "Roundtable" },
  { to: "/linkedin", label: "LinkedIn Series" },
  { to: "/book", label: "Book" },
  { to: "/photos", label: "Photos" },
  { to: "/resources", label: "Resources" },
  { to: "/about", label: "About" },
];

export function Navbar() {
  const location = useLocation();
  return (
    <nav style={{ backgroundColor: "#0A0A0A", fontFamily: "Inter, sans-serif" }} className="sticky top-0 z-50 border-b border-white/10">
      <div className="max-w-[1200px] mx-auto px-6 flex items-center justify-between h-14 overflow-x-auto">
        <Link to="/" className="text-white shrink-0" style={{ fontSize: "16px", fontWeight: 700 }}>SXSW 2026</Link>
        <div className="flex items-center gap-1 shrink-0">
          {links.map((l) => (
            <Link
              key={l.to}
              to={l.to}
              className="px-3 py-1.5 rounded transition-colors whitespace-nowrap"
              style={{
                fontSize: "13px",
                color: location.pathname === l.to ? "#fff" : "#999",
                backgroundColor: location.pathname === l.to ? "#12674A" : "transparent",
              }}
            >
              {l.label}
            </Link>
          ))}
        </div>
      </div>
    </nav>
  );
}
