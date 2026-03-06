import { ProyectCard } from "../ui/ProjectCard";
import portfolio from "../../assets/portfolio.png";
import dashboard from "../../assets/dashboard.png";
import weatherApp from "../../assets/weatherApp.png";
import { motion } from "framer-motion";

export function Projects() {
  return (
    <section id="proyectos" className="min-h-screen bg-gray-100 py-20 px-4">
      <div className="max-w-6xl mx-auto">
        <motion.h2
          className="text-4xl font-bold text-center mb-12 text-gray-800"
          initial={{ opacity: 0, y: 30 }}
          whileInView={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.6 }}
          viewport={{ once: true }}
        >
          Proyectos
        </motion.h2>

        <motion.div
          className="grid md:grid-cols-2 lg:grid-cols-3 gap-8 max-w-6xl mx-auto"
          initial={{ opacity: 0, y: 40 }}
          whileInView={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.7, delay: 0.2 }}
          viewport={{ once: true }}
        >
          <ProyectCard
            titulo="Mi Portfolio Personal"
            descripcion="Portfolio personal creado con React, TypeScript y Tailwind CSS."
            imagen={portfolio}
            tecnologias={["React", "TypeScript", "Tailwind"]}
            linkDemo="https://aridanegarcia.vercel.app/"
            linkCodigo="https://github.com/AridaneDev/mi-portfolio"
          />

          <ProyectCard
            titulo="Wheather App"
            descripcion="App del tiempo que consume la API de OpenWeatherMap. Muestra temperatura, sensación térmica, 
            humedad y viento con fondo dinámico según el clima."
            imagen={weatherApp}
            tecnologias={["React", "TypeScript", "Tailwind"]}
            linkDemo="https://weather-app-aridane.vercel.app/"
            linkCodigo="https://github.com/AridaneDev/weather-app"
          />

          <ProyectCard
            titulo="FerroStock"
            descripcion="Aplicación CRUD para la gestión de stock e inventario. Proyecto de fin de ciclo DAW"
            imagen={dashboard}
            tecnologias={["PHP", "JavaScript", "Tailwind", "HTML"]}
            linkDemo="#"
            linkCodigo="#"
            enDesarrollo
          />
        </motion.div>
      </div>
    </section>
  );
}
