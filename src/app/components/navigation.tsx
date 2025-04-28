"use client";

import Link from "next/link";
import { usePathname } from "next/navigation";

export const Navigation = () => {
    const pathName = usePathname();
    return (
        <nav className="p-4 bg-red-500 text-2xl rounded-b-2xl overflow-hidden text-center sticky top-0 z-50 text-shadow-lg text-shadow-red-900">
            <Link href="/"
            className={`m-4 hover:font-bold transition-all duration-1000 text-amber-50 ${pathName === "/" ? "font-bold text-red-400 italic" : ""}`}>
                Home
            </Link>

            <Link 
            href="/Pokemons"
            className={`m-4 hover:font-bold transition-all duration-1000 text-amber-50 ${pathName === "/Pokemons" ? "font-bold text-red-400 italic" : ""}`}>
                Pokémons
            </Link>

            <Link href="/about" 
            className={`text-amber-50 hover:font-bold transition-all duration-1000 m-4 ${pathName === "/about" ? "font-bold text-red-400 italic" : ""}`}>
                About
            </Link>
        </nav>
    )
}