import fotoAbout from '../../assets/fotoAbout.jpg'
export function About() {
    return (
        <section id="sobre-mi" className="py-24 px-4 bg-white">
            <div className="max-w-6xl mx-auto">
                <h2 className="text-4xl font-bold text-center mb-16 text-gray-800">Sobre Mí</h2>
                <div className="grid md:grid-cols-2 gap-12 items-center">
                    <div className="space-y-6">
                        <p className="text-lg text-gray-900 leading-relaxed">
                            Siempre amé este mundo de la tecnología. Me apasiona crear y ser creativo, 
              dar soluciones reales a problemas reales.
                        </p>
                        <p className="text-lg text-gray-900 leading-relaxed">
              Actualmente estoy terminando el ciclo de Desarrollo de Aplicaciones Web (DAW) 
              y en búsqueda de prácticas donde pueda seguir aprendiendo y aportando valor.
                        </p>
                        <p className="text-lg text-gray-900 leading-relaxed">
                            Enfocado en <span className="font-semibold text-purple-600">React, TypeScript y Tailwind CSS</span>, 
              trabajando en crear interfaces modernas y experiencias de usuario intuitivas.
                        </p>
                    </div>
            <div className="flex justify-center">
                <div className="w-64 h-64 md:w-80 md:h-80 rounded-full bg-gradient-to-br from-cyan-400 to-purple-500 p-1 ">
                    <div className="w-full h-full rounded-full bg-gray-800 flex items-center justify-center text-6xl">
                       <img 
                        src={fotoAbout}
                        alt="Aridane García"
                        className="w-full h-full rounded-full object-cover"   
                       />     
                    </div>
                </div>
           </div> 
          </div> 
        </div>  
        </section>
    )
}