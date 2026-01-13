"use client";

import Link from "next/link";
import { usePathname } from "next/navigation";

export const Navigation = () => {
  const pathName = usePathname();
  return (
    <nav className="hover:scale-y-110 transition-all sticky top-0 z-50 p-3 overflow-hidden text-xl text-center bg-red-500 bg-center sm:bg-auto bg-contain bg-blend-overlay bg-[url('/images/pokeball.png')] sm:text-2xl text-shadow-lg text-shadow-red-900">
      <Link
        href="/"
        className={`m-4 hover:underline transition-all duration-1000 text-amber-50 ${
          pathName === "/" ? "font-bold text-red-400 italic" : ""
        }`}
        rel="noopener noreferrer"
      >
        Home
      </Link>

      <Link
        href="/pokemon"
        className={`m-4 hover:underline transition-all duration-1000 text-amber-50 ${
          pathName === "/pokemon" ? "font-bold text-red-400 italic" : ""
        }`}
        rel="noopener noreferrer"
      >
        Pokémon
      </Link>

      <Link
        href="/about"
        className={`text-amber-50 hover:underline transition-all duration-1000 m-4 ${
          pathName === "/about" ? "font-bold text-red-400 italic" : ""
        }`}
        rel="noopener noreferrer"
      >
        About
      </Link>
    </nav>
  );
};
