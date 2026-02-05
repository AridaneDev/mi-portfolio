export function Hero () {
    return (
        <section className="min-h-screen bg-gradient-to-br from-purple-900 via-slate-900 to-teal-900 flex items-center justify-center px4">
            <div className="max-w-6xl mx-auto grid md:grid-cols-2 gap-12 items-center">
                <div className="text-white space-y-6">
                <div>
                    <h1 className="text-5xl md:text-6xl font-bold">
                        ¡Hola! Soy <span className="text-cyan-400">Aridane García</span>
                    </h1>
                    <p className="text-xl md:text-2xl text-purple-300 mt-2">Desarrollador Web 💻</p>
                </div>
                <p className="text-lg text-gray-300">
                   Especializado en React, TypeScript y Tailwind CSS, 
            enfocado en crear interfaces modernas y experiencias de usuario intuitivas. 
                </p>

                <div className="flex gap-4 text-2xl">
                    <a href="#" className="hover:text-cyan-400 transition-colors">
                        GitHub
                    </a>
                    <a href="#" className="hover:text-cyan-400 transition-colors">
                        Email
                    </a>
                    <a href="#" className="hover:text-cyan-400 transition-colors">
                        Linkedin
                    </a>

                </div>
            </div>
            </div>
        </section>
    )
}