import Link from "next/link";

export default function About() {
    return (
        <main className="flex flex-col p-10 text-center text-shadow-lg text-shadow-white mx-auto bg-gradient-to-b from-red-200 via-white to-red-300 min-h-screen">
            <div className="max-w-max mx-auto my-auto hover:scale-105 duration-1000 transition-all p-6 bg-gradient-to-br from-red-200 via-red-100 to-red-300 rounded-3xl shadow-lg shadow-red-400 text-center text-shadow-lg text-shadow-white border-2 border-red-300">
                <h1 className="text-2xl sm:text-3xl lg:text-4xl hover:scale-120 transition-all font-bold mb-6 text-center p-10 bg-red-400 w-fit rounded-full mx-auto shadow-2xl shadow-red-500 bg-gradient-to-br from-white via-yellow-100 to-yellow-400">
                About This Website</h1>

                <div className="text-xl sm:text-2xl border text-red-500 p-6 text-shadow-lg text-shadow-red-300 space-y-1 bg-gradient-to-br from-white via-red-100 to-red-300 rounded-xl shadow-xl shadow-red-300">
                    <p>This is a simple Pokémon site that displays various Pokémons from different regions in the games.</p>
                    <p className="p-6">I started it alone as a passion project.</p>

                    <p>It calls and uses an <Link href={"https://pokeapi.co/"} target="_blank" className="underline hover:text-green-400 transition-all"> API</Link> to 
                    load Pokémons and their details.</p>

                    <p>The current functions of this website lists Pokémon on their respective pages. Clicking on one will display
                        their details including their types, abilities, and locations.</p>
                    <p>If additional information is required, such as move descriptions or generally more information,
                        a link to the Pokémon Database is provided.</p>

                    <p className="font-bold hover:bg-green-400 hover:scale-110 duration-1000 transition-all bg-gradient-to-br mt-6 from-red-100 via-red-200 to-red-400 w-fit mx-auto p-3 rounded-2xl shadow-2xl shadow-red-500 border-4">
                        This project was built using Next.js, React, TypeScript, and Tailwind.</p>
                </div>

            </div>
        </main>
    )
};