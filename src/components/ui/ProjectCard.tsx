interface ProyectCardProps {
    titulo: string
    descripcion: string
    imagen: string
    tecnologias: string[]
    linkDemo?: string
    linkCodigo?: string
}

export function ProyectCard({titulo, descripcion, imagen, tecnologias, linkDemo, linkCodigo}: ProyectCardProps) {

return (
    <div className="bg-white rounded-lg shadow-lg overflow-hidden hover:shadow-xl transition-shadow ">
        <img
            src={imagen}
            alt={titulo}
            className="w-full h-48 object-cover"
        />

        <div className="p-6">
            <h3 className="text-xl font-bold text-gray-800 mb-2">{titulo}</h3>
            <p className="text-gray-600 mb-4">{descripcion}</p>
        </div>
        <div className="flex flex-wrap mb-4">
            {tecnologias.map((tech) => (
                <span 
                    key={tech}
                    className="bg-blue-100 text-blue-800 px-3 py-1 rounded-full text-sm font-medium"
                    >
                    {tech}
                </span>
            ))}
        </div>
    </div>
    )
}
