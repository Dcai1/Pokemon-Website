"use client";

interface ErrorProps {
    error: Error;
};

export default function Error({error}: ErrorProps  ) {
    return (
        <div 
        className="min-h-screen flex flex-col items-center justify-center p-6  bg-gradient-to-br from-red-500 via-red-500 to-red-600 text-3xl sm:text-4xl lg:text-5xl transition-opacity shadow-lg mx-auto my-auto">
            <div className="bg-red-200 text-red-800 text-center shadow-xl rounded-3xl p-10 max-w-3xl w-full animate-pulse hover:scale-110 duration-500 transition-all">
            
            <h1 className="text-4xl sm:text-5xl font-bold mb-6 bg-red-300 p-4 rounded-full shadow-md">
                Error: Failed to load Pokemon Data!</h1>
            
            <h2 className="text-xl sm:text-2xl font-semibold mb-4">
                Try: </h2>

            <ol className="list-decimal list-inside text-lg sm:text-xl font-semibold mb-6">
                <li>Checking your Internet Connection</li>
                <li>Reloading the Page</li>
                <li>Trying again later</li>
            </ol>

            <button onClick ={() => window.location.reload()} 
            className="bg-red-300 text-red-600 font-bold p-3 mb-10 mt-6 rounded-full hover:bg-red-400 hover:scale-150 transition-all duration-300 shadow-lg shadow-red-400">
                Reload Page </button>

            <h2 className="text-xl sm:text-2xl font-semibold">Error Details:</h2>
            <h3>{error?.message && (
                <p className="italic text-base sm:text-lg m-6 bg-red-300 rounded-xl p-4 opacity-60">{error.message}</p>
            )} </h3>
            </div>
        </div>
    )
}