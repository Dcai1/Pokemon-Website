import { Metadata } from "next";
import Hero from "./components/Hero";
import FeatureCard from "./components/FeatureCard";

export const metadata: Metadata = {
  title: "Welcome to PokéWeb",
  description:
    "A Pokémon site fetching and listing various pokémon from every region. Click on pokémon names to view more information.",
  openGraph: {
    title: "Welcome to PokéWeb",
    description:
      "A Pokémon site fetching and listing various pokémon from every region. Click on pokémon names to view more information.",

    url: "https://pokeweb-site.vercel.app/",
    siteName: "Welcome to PokéWeb",
    images: [
      {
        url: "/thumbnails/home.png",
        width: 1200,
        height: 630,
        alt: "Welcome to PokéWeb",
      },
    ],
    locale: "en-US",
    type: "website",
  },
  twitter: {
    card: "summary_large_image",
    title: "Welcome to PokéWeb",
    description:
      "A Pokémon site fetching and listing various pokémon from every region. Click on pokémon names to view more information.",
    images: ["/thumbnails/home.png"],
  },
};

export default function Home() {
  return (
    <main className="min-h-screen gradient-bg">
      <Hero />

      <section className="max-w-5xl px-6 py-12 mx-auto bg-gradient-to-bl">
        <div className="grid grid-cols-1 gap-6 sm:grid-cols-3">
          <FeatureCard
            icon="🔎"
            title="Quick Search"
            description="Find Pokémon by name instantly with our fast search."
            href="/pokemon"
            delay={0}
          />

          <FeatureCard
            icon="🗺️"
            title="Browse Regions"
            description="Explore Pokémon grouped by region for easier discovery."
            href="/pokemon"
            delay={120}
          />

          <FeatureCard
            icon="💻"
            title="Open Source"
            description="View the project's code on GitHub."
            href="https://github.com/Dcai1/Pokemon-Website"
            external
            delay={240}
          />
        </div>
      </section>

      <footer className="py-8 text-center">
        <p className="text-sm text-gray-600">
          ⚠️ This project is not affiliated with Pokémon (company) or Nintendo.
          ⚠️
        </p>
      </footer>
    </main>
  );
}
