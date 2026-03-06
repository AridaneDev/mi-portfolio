import { BsFillSendFill } from "react-icons/bs";
export function CTA() {
  return (
    <section id="contacto" className="bg-slate-900 py-32 px-4">
      <div className="max-w-6xl mx-auto flex flex-col items-center justify-center gap-6 text-center">
        <h2 className="text-4xl md:text-5xl font-bold text-white">
          ¿Tienes un proyecto en mente?
        </h2>
        <a
          href="mailto:aridane.garcia@proton.me"
          className="mt-2 text-3xl inline-flex items-center gap-3 text-cyan-400 hover:text-cyan-300 transition-colors"
        >
          Cuéntamelo
          <BsFillSendFill size={24} />
        </a>
      </div>
    </section>
  );
}
