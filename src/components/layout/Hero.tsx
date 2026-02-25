import { FaGithub, FaLinkedin, FaWhatsapp } from 'react-icons/fa'
import fotoPerfil from '../../assets/foto-perfil.png'
import CV from '../../assets/CV-Aridane-García.pdf'

export function Hero () {
    return (
        <section id="inicio" className="min-h-screen bg-gradient-to-br from-purple-900 via-slate-900 to-teal-900 flex items-center justify-center px-4 pt-24">
            <div className="max-w-6xl mx-auto flex flex-col-reverse md:grid md:grid-cols-2 gap-12 items-center">
                <div className="text-white flex flex-col items-center text-center md:text-left md:items-start space-y-9">
                <div>
                    <h1 className="text-4xl md:text-6xl font-bold">
                        Hola, mi nombre es <span className="text-cyan-400">Aridane García</span>
                    </h1>
                </div>
                <p className="text-xl md:text-2xl text-gray-300">
                   Soy un desarrollador de software que actualmente reside en las Islas Canarias, España.
                </p>

                <div className="flex gap-4">
                    <a 
                    href="#proyectos"
                    className="bg-purple-600 hover:bg-purple-700 text-white px-6 py-3 rounded-lg font-semibold transition-colors"
                    >
                    Ver Proyectos
                    </a>
                    <a 
                    href={CV}
                    download="CV-Aridane-García.pdf"
                    className="bg-cyan-600 hover:bg-cyan-700 text-white px-6 py-3 rounded-lg font-semibold transition-colors" 
                    >
                    Descargar CV
                    </a>
                </div>

                <div className='flex gap-6 align-items p-6'>
                                <a 
                                href="https://github.com/AridaneDev"
                                target='_blank'
                                rel='noopener noreferrer'
                                className='text-white hover:text-cyan-400 transition-colors'
                                >
                                <FaGithub size={24} />
                                </a>
                                <a 
                                href="https://www.linkedin.com/in/aridanegarcialopez/"
                                target='_blank'
                                rel='noopener noreferrer'
                                className='text-white hover:text-cyan-400 transition-colors'
                                >
                                <FaLinkedin size={24} />
                                </a>
                                <a 
                                href="https://wa.me/34637148437"
                                target='_blank'
                                rel='noopener noreferrer'
                                className='text-white hover:text-cyan-400 transition-colors'
                                >
                                <FaWhatsapp size={24} />
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