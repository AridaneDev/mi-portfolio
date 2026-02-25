import { useState } from 'react'
import { HiMenu, HiX } from 'react-icons/hi'
import { useActiveSection } from "../../hooks/useActiveSection"
export function Header() {
    const activeSection = useActiveSection()
    const [isMenuOpen, setIsMenuOpen] = useState(false)
    
    return (
        <header className="fixed top-0 w-full bg-gradient-to-r from-purple-900/70 to-slate-900/70 backdrop-blur-md  shadow-lg z-50">
           <nav className="max-w-7xl mx-auto p-6 md:py-8 flex justify-between items-center">
            <a href="#inicio"><span className="text-4xl text-white" style={{ fontFamily: 'Italianno, cursive' }}>Aridane García</span></a>
            
            <button
              onClick={() => setIsMenuOpen(!isMenuOpen)}
              className="md:hidden text-white text-3xl"
            >
              {isMenuOpen ? <HiX /> : <HiMenu />}
            </button>
            {isMenuOpen && (
                <div className='absolute top-full left-0 w-full bg-gray-200 backdrop-blur-md md:hidden shadow-lg border-t border-gray-700'>
                    <ul className='flex flex-col'>
                       <li>
                            <a 
                            href="#inicio"
                            onClick={() => setIsMenuOpen(false)}
                            className={`block px-6 py-4 transition-colors ${
                            activeSection === 'inicio' ? 'text-cyan-400' : 'text-gray-800'
                            }`}
                            >
                                Inicio
                            </a>

                        </li>
                        <li>
                            <a 
                            href="#proyectos"
                            onClick={() => setIsMenuOpen(false)}
                            className={`block px-6 py-4 transition-colors ${
                            activeSection === 'proyectos' ? 'text-cyan-400' : 'text-gray-800'
                            }`}
                            >
                                Proyectos
                            </a>

                        </li>
                        <li>
                            <a 
                            href="#sobre-mi"
                            onClick={() => setIsMenuOpen(false)}
                            className={`block px-6 py-4 transition-colors ${
                            activeSection === 'sobre-mi' ? 'text-cyan-400' : 'text-gray-800'
                            }`}
                            >
                                Sobre Mí
                            </a>

                        </li>
                        <li>
                            <a 
                            href="#contacto"
                            onClick={() => setIsMenuOpen(false)}
                            className={`block px-6 py-4 transition-colors ${
                            activeSection === 'contacto' ? 'text-cyan-400' : 'text-gray-800'
                            }`}
                            >
                                Contacto
                            </a>

                        </li> 
                    </ul>
                </div>
            
            
            )}

            <div className='hidden md:flex items-center gap-8'>
            <ul className="flex gap-6">
                <li>
                <a 
                    href="#inicio" 
                    className={`hover:text-cyan-400 transition-colors ${activeSection === 'inicio' ? 'text-cyan-400' : 'text-white'}`}
                >
                    Inicio
                </a>
                </li>
                <li>
                <a 
                    href="#proyectos" 
                    className={`hover:text-cyan-400 transition-colors ${activeSection === 'proyectos' ? 'text-cyan-400' : 'text-white'}`}
                >
                    Proyectos
                </a>
                </li>
                <li>
                <a 
                    href="#sobre-mi" 
                    className={`hover:text-cyan-400 transition-colors ${activeSection === 'sobre-mi' ? 'text-cyan-400' : 'text-white'}`}
                >
                    Sobre Mí
                </a>
                </li>
                <li>
                <a 
                    href="#contacto" 
                    className={`hover:text-cyan-400 transition-colors ${activeSection === 'contacto' ? 'text-cyan-400' : 'text-white'}`}
                >
                    Contacto
                </a>
                </li>
            </ul>
            </div>
           </nav>
        </header>
    )
}