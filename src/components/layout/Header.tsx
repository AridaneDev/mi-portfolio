export function Header() {
    return (
        <header className="fixed top-0 w-full bg-white shadow-md z-50">
           <nav className="max-w-7xl mx-auto px-4 py-8 flex justify-between items-center">
            <h1 className="text-2xl font-bold text-gray-800">AriDev</h1>
            
            <ul className="flex gap-6">
                <li><a href="#inicio" className="hover:text-blue-600">Inicio</a></li>
                <li><a href="#proyectos" className="hover:text-blue-600">Proyectos</a></li>
                <li><a href="#sobre-mí" className="hover:text-blue-600">Sobre mí</a></li>
                <li><a href="#contacto" className="hover:text-blue-600">Contacto</a></li>
            </ul>
           </nav>
        </header>
    )
}