import { Metadata } from "next";
import HeroSimple from "./HeroSimple";
import AboutThisWebsite from "./AboutThisWebsite";
import AboutMe from "./AboutMe";

export const metadata: Metadata = {
  title: "About",
  description:
    "Started as a passion project, it uses the PokéAPI to load pokémon and their information. Built using Next.js.",
};

export default function About() {
  return (
    <main className="min-h-screen p-6">
      <HeroSimple />

      <div className="px-2">
        <AboutThisWebsite />
        <AboutMe />
      </div>
    </main>
  );
}
