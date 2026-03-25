import { Outlet, Link, useLocation } from "react-router";
import { Footer } from "./Footer";
import { useState } from "react";
import { Menu, X } from "lucide-react";

const NAV_ITEMS = [
  { path: "/", label: "Home" },
  { path: "/trends", label: "Trends" },
  { path: "/sessions", label: "Sessions" },
  { path: "/workshop", label: "Workshop" },
  { path: "/roundtable", label: "Roundtable" },
  { path: "/linkedin", label: "LinkedIn Series" },
  { path: "/book", label: "Book" },
  { path: "/photos", label: "Photos" },
  { path: "/about", label: "About" },
  { path: "/resources", label: "Resources" },
];

export function Layout() {
  const location = useLocation();
  const [menuOpen, setMenuOpen] = useState(false);

  return (
    <div style={{ fontFamily: "Inter, sans-serif", backgroundColor: "#F0FFF4" }} className="min-h-screen">
      <nav style={{ backgroundColor: "#000000" }} className="sticky top-0 z-50 border-b border-white/10">
        <div className="max-w-[1200px] mx-auto px-6 flex items-center justify-between h-14">
          <Link to="/" className="text-white" style={{ fontWeight: 700, fontSize: 16 }}>SXSW 2026</Link>
          <div className="hidden lg:flex items-center gap-1">
            {NAV_ITEMS.map((item) => (
              <Link
                key={item.path}
                to={item.path}
                className="px-3 py-1.5 rounded transition-colors"
                style={{
                  fontSize: 13,
                  color: location.pathname === item.path ? "#fff" : "#999",
                  backgroundColor: location.pathname === item.path ? "#7B61FF" : "transparent",
                }}
              >
                {item.label}
              </Link>
            ))}
          </div>
          <button className="lg:hidden text-white" onClick={() => setMenuOpen(!menuOpen)}>
            {menuOpen ? <X size={20} /> : <Menu size={20} />}
          </button>
        </div>
        {menuOpen && (
          <div className="lg:hidden px-6 pb-4 flex flex-col gap-1">
            {NAV_ITEMS.map((item) => (
              <Link
                key={item.path}
                to={item.path}
                onClick={() => setMenuOpen(false)}
                className="px-3 py-2 rounded"
                style={{
                  fontSize: 14,
                  color: location.pathname === item.path ? "#fff" : "#999",
                  backgroundColor: location.pathname === item.path ? "#7B61FF" : "transparent",
                }}
              >
                {item.label}
              </Link>
            ))}
          </div>
        )}
      </nav>
      <main>
        <Outlet />
      </main>
      <Footer />
    </div>
  );
}
