"use client";

interface ErrorProps {
  error: Error;
}

export default function Error({ error }: ErrorProps) {
  return (
    <div className="flex flex-col items-center justify-center w-full min-h-screen p-4 text-base text-center bg-gradient-to-br from-red-500 via-red-500 to-red-600 sm:p-6 sm:text-xl">
      <div className="w-full max-w-lg p-6 text-red-800 bg-red-200 rounded-2xl shadow-xl animate-pulse transition-transform duration-500 hover:scale-[1.03]">
        <h1 className="p-3 mb-4 text-2xl font-bold bg-red-300 rounded-full shadow-md sm:text-3xl">
          Error: Failed to load Pokémon Data!
        </h1>

        <h2 className="mb-2 text-lg font-semibold sm:text-xl">Try:</h2>

        <ol className="mb-4 text-sm font-medium list-decimal list-inside sm:text-base">
          <li>Checking your Internet Connection</li>
          <li>Reloading the Page</li>
          <li>Trying again later</li>
        </ol>

        <button
          onClick={() => window.location.reload()}
          className="p-2 mt-4 mb-6 font-bold text-red-600 transition-all duration-300 bg-red-300 rounded-full shadow-md hover:bg-red-400 hover:scale-105"
        >
          Reload Page
        </button>

        <h2 className="mb-1 text-lg font-semibold sm:text-xl">
          Error Details:
        </h2>
        {error?.message && (
          <p className="p-3 m-3 text-sm italic bg-red-300 rounded-xl opacity-70 sm:text-base">
            {error.message}
          </p>
        )}
      </div>
    </div>
  );
}
