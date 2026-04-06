import { useState } from "react";
import { classNames } from "../utils/classNames";

export default function Header() {
  const [open, setOpen] = useState(false);

  return (
    <header className="fixed top-0 left-0 w-full z-50 bg-[#1a0f1f]/80 backdrop-blur-md border-b border-white/10">
      <div className="max-w-6xl mx-auto flex items-center justify-between px-4 py-4">
        
        {/* Logo / Brand */}
        <h1 className="text-xl font-bold text-yellow-400 tracking-wide">
          Unique Soulfood N Sandwiches
        </h1>

        {/* Desktop Nav */}
        <nav className="hidden md:flex items-center gap-8 text-white/90">
          <a href="#menu" className="hover:text-yellow-400 transition">Menu</a>
          <a href="#hours" className="hover:text-yellow-400 transition">Hours</a>
          <a href="#contact" className="hover:text-yellow-400 transition">Contact</a>

          <a
            href="tel:8037575224"
            className="bg-yellow-400 text-black px-4 py-2 rounded-lg font-semibold shadow hover:bg-yellow-300 transition"
          >
            Call to Order
          </a>
        </nav>

        {/* Mobile Menu Button */}
        <button
          className="md:hidden text-white text-3xl"
          onClick={() => setOpen(!open)}
        >
          ☰
        </button>
      </div>

      {/* Mobile Slide Menu */}
      <div
        className={classNames(
          "md:hidden bg-[#1a0f1f] border-t border-white/10 transition-all overflow-hidden",
          open ? "max-h-60 py-4" : "max-h-0 py-0"
        )}
      >
        <nav className="flex flex-col items-center gap-4 text-white/90">
          <a href="#menu" onClick={() => setOpen(false)}>Menu</a>
          <a href="#hours" onClick={() => setOpen(false)}>Hours</a>
          <a href="#contact" onClick={() => setOpen(false)}>Contact</a>

          <a
            href="tel:8037575224"
            className="bg-yellow-400 text-black px-4 py-2 rounded-lg font-semibold shadow hover:bg-yellow-300 transition"
          >
            Call to Order
          </a>
        </nav>
      </div>
    </header>
  );
}
