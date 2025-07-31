type SearchProps = {
  onClick: () => void;
  onChange: (value: string) => void;
  disabled?: boolean;
  onKeyDown: (e: React.KeyboardEvent<HTMLInputElement>) => void;
};

export default function SearchBar({
  onClick,
  onChange,
  disabled,
  onKeyDown,
}: SearchProps) {
  return (
    <div className="items-center justify-center max-w-5xl p-3 mx-auto mb-8 overflow-hidden transition-all duration-1000 border-4 shadow-xl sm:p-6 shadow-red-400 rounded-4xl bg-gradient-to-br from-red-300 via-red-400 to-red-300">
      <div className="flex justify-center w-full">
        <input
          type="text"
          placeholder="Search Pokémon... (e.g. Pikachu)"
          onChange={(e) => onChange(e.target.value)}
          onKeyDown={onKeyDown}
          className="w-full max-w-2xl p-3 m-6 text-lg font-bold text-center transition-all duration-200 border-4 outline-none sm:text-xl rounded-xl bg-gradient-to-b from-red-200 via-red-300 to-red-400 focus:scale-105 focus:border-4 focus:border-green-400 focus:shadow-2xl focus:shadow-green-400"
        />
      </div>

      <div className="flex items-center justify-center gap-8">
        <button
          className="p-4 pl-6 pr-6 mt-3 mb-3 text-xs text-white transition-all duration-300 bg-red-500 border-2 border-red-600 rounded-lg shadow-xl sm:text-2xl hover:border-green-400 shadow-red-500 hover:shadow-green-400 hover:border-3 hover:text-green-400 hover:scale-130"
          onClick={() => window.location.reload()}
        >
          Reset
        </button>

        <button
          className={`mt-3 mb-3 p-4 pl-6 pr-6 border-2 border-red-600 shadow-xl shadow-red-500 text-xs sm:text-xl bg-red-500 text-white rounded-lg transition-all duration-300 
                ${
                  disabled
                    ? "opacity-60 cursor-not-allowed grayscale"
                    : "hover:border-green-400 hover:shadow-green-400 hover:border-3 hover:text-green-400 hover:scale-130"
                }`}
          onClick={onClick}
        >
          Search
        </button>
      </div>
    </div>
  );
}
