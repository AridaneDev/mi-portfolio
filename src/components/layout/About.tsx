import fotoAbout from "../../assets/fotoAbout.jpg";
import {
  SiReact,
  SiTypescript,
  SiTailwindcss,
  SiJavascript,
  SiPhp,
  SiMysql,
  SiGit,
  SiHtml5,
  SiCss3,
  SiNodedotjs,
} from "react-icons/si";
import { FaJava } from "react-icons/fa";
export function About() {
  return (
    <section id="sobre-mi" className="py-24 px-4 bg-white">
      <div className="max-w-6xl mx-auto">
        <h2 className="text-4xl font-bold text-center mb-16 text-gray-800">
          Sobre Mí
        </h2>
        <div className="flex flex-col-reverse md:grid md:grid-cols-2 gap-12 items-center">
          <div className="space-y-6">
            <p className="text-lg text-gray-900 leading-relaxed">
              Mi nombre es Aridane García, soy un desarrollador web radicado en
              Gran Canaria, España.
            </p>
            <p className="text-lg text-gray-900 leading-relaxed">
              Actualmente estoy terminando el ciclo superior de{" "}
              <span className="font-semibold text-purple-600">
                Desarrollo de Aplicaciones Web (DAW)
              </span>{" "}
              y en búsqueda de prácticas donde pueda seguir aprendiendo y
              aportando valor.
            </p>
            <p className="text-lg text-gray-900 leading-relaxed">
              Me considero una persona con una curiosidad insaciable por la
              tecnología y una gran capacidad de adaptación. Disfruto
              enfrentándome a problemas complejos y buscando la forma más
              eficiente de resolverlos, siempre con el compromiso de escribir
              código limpio y escalable que resuelva los problemas del cliente.
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
        <div className="space-y-5 mt-28">
          <h3 className="text-3xl font-bold text-gray-800 text-center">
            My Skills
          </h3>
          <div>
            <p className="text-xl font-semibold text-gray-700 mb-5 text-center">
              Frontend
            </p>
            <div className="flex flex-wrap justify-center gap-4 text-4xl">
              <SiHtml5 className="text-orange-500" title="HTML" />
              <SiCss3 className="text-blue-500" title="CSS" />
              <SiJavascript className="text-yellow-400" title="JavaScript" />
              <SiTypescript className="text-blue-600" title="TypeScript" />
              <SiReact className="text-cyan-400" title="React" />
              <SiTailwindcss className="text-teal-400" title="Tailwind" />
            </div>
          </div>

          <div>
            <p className="text-xl font-semibold text-gray-700 mb-2 text-center">
              Backend
            </p>
            <div className="flex flex-wrap justify-center gap-4 text-4xl">
              <SiNodedotjs className="text-green-600" title="Node.js" />
              <SiPhp className="text-indigo-400" title="PHP" />
              <FaJava className="text-red-500" title="Java" />
              <span className="text-gray-700 font-bold text-xl self-center">
                C#
              </span>
            </div>
          </div>

          <div>
            <p className="text-lg font-semibold text-gray-700 mb-2 text-center">
              Base de datos & Herramientas
            </p>
            <div className="flex flex-wrap justify-center gap-4 text-4xl">
              <SiMysql className="text-blue-700" title="MySQL" />
              <SiGit className="text-orange-600" title="Git" />
            </div>
          </div>
        </div>
      </div>
    </section>
  );
}
