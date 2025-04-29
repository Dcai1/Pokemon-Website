type SearchProps = {
    onClick: () => void;
    onChange: (value: string) => void;
    disabled?: boolean;
}

export default function SearchBar({ onClick, onChange, disabled }: SearchProps) {
    return (
        <div 
        className="items-center max-w-full justify-center overflow-hidden p-6 m-8 border shadow-xl shadow-red-400 rounded-4xl hover:scale-105 transition-all duration-1000 bg-gradient-to-br from-red-200 via-red-100 to-red-300">

            <input
                type="text"
                placeholder="Search Pokémon... (e.g. Pikachu)"
                onChange={(e) => onChange(e.target.value)} 
                className="border-4 rounded-xl text-xl sm:text-2xl font-bold p-3 m-6 w-full mx-auto text-center transition-all outline-none bg-gradient-to-b from-red-200 via-red-300 to-red-400 focus:scale-102 focus:border-6 focus:border-green-400 focus:shadow-2xl focus:shadow-green-400 duration-200"
                />

                
            <div className="flex items-center justify-center gap-8">
            <button 
            className="mt-3 mb-3 p-4 pl-6 pr-6 border-2 border-red-600 hover:border-green-400 shadow-xl shadow-red-500 hover:shadow-green-400 text-xl sm:text-2xl bg-red-500 text-white rounded-lg hover:border-3 hover:text-green-400 hover:scale-130 transition-all duration-300"
            onClick={() => window.location.reload()}
            >
            Reset
            </button>

            <button 
            className={`mt-3 mb-3 p-4 pl-6 pr-6 border-2 border-red-600 shadow-xl shadow-red-500 text-xl sm:text-2xl bg-red-500 text-white rounded-lg transition-all duration-300 
                ${disabled ? "opacity-60 cursor-not-allowed grayscale" : "hover:border-green-400 hover:shadow-green-400 hover:border-3 hover:text-green-400 hover:scale-130"}`}
            onClick={onClick}
            >
                Search
            </button>
            </div>

        </div>
    )
};