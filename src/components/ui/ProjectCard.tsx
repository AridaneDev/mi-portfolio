interface ProyectCardProps {
  titulo: string;
  descripcion: string;
  imagen: string;
  tecnologias: string[];
  linkDemo?: string;
  linkCodigo?: string;
  enDesarrollo?: boolean;
}

export function ProyectCard({
  titulo,
  descripcion,
  imagen,
  tecnologias,
  linkDemo,
  linkCodigo,
  enDesarrollo,
}: ProyectCardProps) {
  return (
    <div className="bg-white rounded-lg shadow-lg overflow-hidden hover:shadow-purple-500 hover:-translate-y-2 transition-all duration-300 relative">
      {enDesarrollo && (
        <span className="absolute top-4 right-4 bg-yellow-400 text-yellow-900 text-xs font-bold px-2 py-1 rounded-full">
          En desarrollo
        </span>
      )}

      <img src={imagen} alt={titulo} className="w-full h-48 object-cover p-3" />

      <div className="p-6">
        <h3 className="text-xl font-bold text-gray-800 mb-2">{titulo}</h3>
        <p className="text-gray-900 mb-4">{descripcion}</p>
      </div>

      <div className="flex justify-center gap-4 mb-4">
        {linkDemo && (
          <a
            href={linkDemo}
            target="_blank"
            rel="noopener noreferrer"
            className="bg-purple-600 hover:bg-purple-700 text-white px-4 py-2 rounded-lg text-sm font-semibold transition-colors"
          >
            Demo
          </a>
        )}
        {linkCodigo && (
          <a
            href={linkCodigo}
            target="_blank"
            rel="noopener noreferrer"
            className="bg-gray-700 hover:bg-gray-800 text-white px-4 py-2 rounded-lg text-sm font-semibold transition-colors"
          >
            Código
          </a>
        )}
      </div>

      <div className="flex flex-wrap justify-center gap-2 mb-4">
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
  );
}
