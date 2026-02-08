import fotoPerfil from '../../assets/foto-animada.png'
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

                <div className="flex gap-4">
                    <a 
                    href="#proyectos"
                    className="bg-purple-600 hover:bg-purple-700 text-white px-6 py-3 rounded-lg font-semibold transition-colors"
                    >
                    Ver Proyectos
                    </a>
                    <a 
                    href="#"
                    className="bg-cyan-500 hover:bg-cyan-600 text-white px-6 py-3 rounded-lg font-semibold transition-colors" 
                    >
                    Descargar CV
                    </a>
                </div>
                </div>

                <div className="flex justify-center">
                    <div className="w-64 h-64 md:w-80 md:h-80 rounded-full bg-gradient-to-br from-cyan-400 to-purple-500 p-1 ">
                        <div className="w-full h-full rounded-full bg-gray-800 flex items-center justify-center text-6xl">
                            <img src={fotoPerfil} 
                            alt="Aridane García" 
                            className='w-full h-full rounded-full object-cover'
                            />
                        </div>
                    </div>
                </div>
            </div>
        </section>
    )
}