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
                    imagen="https://via.placeholder.com/400x300"
                    tecnologias={["React", "TypeScript", "Tailwind"]}
                    />
                </div>
            </div>
        </section>
    )
}