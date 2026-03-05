import { ProyectCard } from "../ui/ProjectCard";
import portfolio from "../../assets/portfolio.png";
import dashboard from "../../assets/dashboard.png";

export function Projects() {
  return (
    <section id="proyectos" className="min-h-screen bg-gray-100 py-20 px-4">
      <div className="max-w-6xl mx-auto">
        <h2 className="text-4xl font-bold text-center mb-12 text-gray-800">
          Proyectos
        </h2>

        <div className="grid md:grid-cols-2 lg:grid-cols-3 gap-8">
          <ProyectCard
            titulo="Mi Portfolio Personal"
            descripcion="Portfolio personal creado con React, TypeScript y Tailwind CSS."
            imagen={portfolio}
            tecnologias={["React", "TypeScript", "Tailwind"]}
            linkDemo="#"
            linkCodigo="#"
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

          <ProyectCard
            titulo="Task Management App"
            descripcion="Aplicación de gestión de proyectos estilo Trello con drag & drop y colaboración en tiempo real."
            imagen="https://images.unsplash.com/photo-1454165804606-c3d57bc86b40?w=400&h=300&fit=crop"
            tecnologias={["React", "TypeScript", "Tailwind", "Supabase"]}
            linkDemo="#"
            linkCodigo="#"
            enDesarrollo
          />
        </div>
      </div>
    </section>
  );
}
