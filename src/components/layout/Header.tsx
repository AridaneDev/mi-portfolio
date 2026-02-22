export function Header() {
    return (
        <header className="fixed top-0 w-full bg-transparent backdrop-blur-md  shadow-lg z-50">
           <nav className="max-w-7xl mx-auto px-4 py-8 flex justify-between items-center">
            <span className="text-2xl font-bold text-cyan-400">AriDev</span>
            
            <ul className="flex gap-6">
                <li><a href="#inicio" className="text-white hover:text-cyan-400">Inicio</a></li>
                <li><a href="#proyectos" className="text-white hover:text-cyan-400">Proyectos</a></li>
                <li><a href="#sobre-mí" className="text-white hover:text-cyan-400">Sobre mí</a></li>
                <li><a href="#contacto" className="text-white hover:text-cyan-400">Contacto</a></li>
            </ul>
           </nav>
        </header>
    )
}