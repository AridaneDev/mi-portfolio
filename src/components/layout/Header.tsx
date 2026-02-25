import { useActiveSection } from "../../hooks/useActiveSection"
export function Header() {
    const activeSection = useActiveSection()
    
    return (
        <header className="fixed top-0 w-full bg-transparent backdrop-blur-md  shadow-lg z-50">
           <nav className="max-w-7xl mx-auto py-4 md:py-8 flex justify-between items-center">
            <span className="text-2xl font-bold text-white">Aridane García</span>
            <div className='flex items-center gap-8'>
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