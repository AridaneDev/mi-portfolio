import { ProyectCard } from "../ui/ProjectCard";

export function Projects() {
    return (
        <section className="min-h-screen bg-gray-100 py-20 px-4">
            <div className="max-w-6xl mx-auto">
                <h2 className="text-4xl font-bold text-center mb-12 text-gray-800">Mis Proyectos</h2>

                <div className="grid md:grid-cols-2 lg:grid-cols-3 gap-8">
                    <ProyectCard
                    titulo="Mi Portfolio"
                    descripcion="Portfolio personal creado con React, TypeScript y Tailwind CSS."
                    imagen="https://images.unsplash.com/photo-1517694712202-14dd9538aa97?w=400&h=300&fit=crop"
                    tecnologias={["React", "TypeScript", "Tailwind"]}
                    />

                    <ProyectCard 
                    titulo="SaaS Landing Page"
                    descripcion="Landing page moderna con animaciones, CMS headless y optimización SEO"
                    imagen="https://images.unsplash.com/photo-1460925895917-afdab827c52f?w=400&h=300&fit=crop"
                    tecnologias={["Next.js", "TypeScript", "Tailwind", "Prisma"]}
                    linkDemo="#"
                    linkCodigo="#"
          />

                     <ProyectCard
                    titulo="Task Management App"
                    descripcion="Aplicación de gestión de proyectos estilo Trello con drag & drop y colaboración en tiempo real."
                    imagen="https://images.unsplash.com/photo-1454165804606-c3d57bc86b40?w=400&h=300&fit=crop"
                    tecnologias={["React", "TypeScript", "Tailwind", "Supabase"]}
                    linkDemo="#"
                    linkCodigo="#"
                    />
                </div>
            </div>
        </section>
    )
}