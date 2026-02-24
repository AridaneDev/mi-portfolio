import { BsFillSendFill } from 'react-icons/bs'
export function CTA() {
    return (
      <section className="bg-slate-900 py-24 px-4">
        <div className="max-w-6xl mx-auto flex flex-col md:flex-row items-center justify-center gap-12">
            <h2 className="text-4xl md:text-5xl font-bold text-white text-center">
                ¿Interesado en<br />trabajar juntos? 
            </h2>
            <a 
            href="mailto:aridane.garcia@proton.me"
            className="text-3xl inline-flex items-center gap-3 text-cyan-400 hover:text-cyan-600"
            >
                Enviame un mensaje<BsFillSendFill size={28} />
            </a>
        </div>
      </section>  
    )
}