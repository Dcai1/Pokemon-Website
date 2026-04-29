"use client";

import Link from "next/link";
import { useRouter } from "next/navigation";
import React, { useState } from "react";
import SearchBar from "./searchbar";

export default function Hero() {
  const router = useRouter();
  const [query, setQuery] = useState("");

  const handleSearch = () => {
    const searchPath = `/pokemon${query ? `?q=${encodeURIComponent(query)}` : ""}`;
    router.push(searchPath);
  };

  const handleKeyDown = (e: React.KeyboardEvent<HTMLInputElement>) => {
    if (e.key === "Enter") {
      handleSearch();
    }
  };

  return (
    <section className="relative flex items-center justify-center px-6 py-20">
      <div className="absolute inset-0 pointer-events-none" />
      <div className="relative z-10 max-w-5xl mx-auto text-center">
        <h1 className="text-4xl font-extrabold leading-tight text-gray-900 sm:text-6xl md:text-7xl">
          Discover Pokémon, easily
        </h1>

        <p className="max-w-2xl mx-auto mt-4 text-lg text-gray-700">
          A calm, focused interface to explore Pokémon data across regions.
        </p>

        <div className="flex items-center justify-center gap-4 mt-8">
          <Link
            href="/pokemon"
            className="inline-flex items-center px-8 py-3 rounded-full bg-rose-500 text-white text-lg font-semibold shadow-md hover:translate-y-[-2px] transition-transform"
            rel="noopener noreferrer"
          >
            Browse Pokémon
          </Link>

          <Link
            href="/about"
            className="inline-flex items-center px-6 py-3 text-gray-700 transition border border-gray-200 rounded-full bg-white/80 hover:bg-white"
            rel="noopener noreferrer"
          >
            Learn More
          </Link>
        </div>

        <div className="mt-8">
          <SearchBar
            onClick={handleSearch}
            onChange={(v) => setQuery(v)}
            onKeyDown={handleKeyDown}
            disabled={false}
          />
        </div>
      </div>
    </section>
  );
}
