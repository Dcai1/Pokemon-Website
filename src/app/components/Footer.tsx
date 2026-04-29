export default function Footer({ children }: { children?: React.ReactNode }) {
  return (
    <footer className="sticky left-0 right-0 z-50 flex justify-center invisible pointer-events-auto sm:visible bottom-4">
      <div className="w-full max-w-5xl px-4">
        <div className="transition-all duration-500 border rounded-full shadow-lg bg-gradient-to-br from-rose-200 via-rose-300 to-rose-400 hover:scale-105">
          <p className="p-6 m-auto text-sm text-rose-600 md:text-lg">
            {children ??
              "Note: Hover over a Pokémon's Image to view their Shiny variant!"}
          </p>
        </div>
      </div>
    </footer>
  );
}
