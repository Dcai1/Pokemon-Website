export default function Loading() {
  return (
    <div className="bg-blend-overlay overflow-hidden text-center bg-repeat-space bg-[url('/images/pokeball-background.png')] bg-size-[75px] flex items-center min-h-screen min-w-screen mx-auto bg-red-400">
      <p className="mx-auto text-3xl font-bold transition-all animate-bounce">
        Loading Pokémons... hang tight!
      </p>
    </div>
  );
}
