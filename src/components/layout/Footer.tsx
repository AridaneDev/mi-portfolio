import { FaGithub, FaLinkedin, FaWhatsapp } from 'react-icons/fa'
export function Footer() {
    return (
        <footer className="bg-slate-800 text-gray-400 py-10 px-4 border-t border-gray-900">
            <div className='max-w-6xl mx-auto flex flex-col md:flex-row justify-between items-center gap-4'>
                <p className='text-sm'>
                    © 2026 Aridane García. Desarrollado con React, TypeScript y Tailwind CSS.
                </p>

                <div className='flex gap-6'>
                    <a 
                        href="https://github.com/AridaneDev"
                        target='_blank'
                        rel='noopener noreferrer'
                        className='hover:text-white transition-colors'
                    >
                        <FaGithub size={20} />
                    </a>
                    <a 
                        href="https://www.linkedin.com/in/aridanegarcialopez/"
                        target='_blank'
                        rel='noopener noreferrer'
                        className='hover:text-white transition-colors'
                    >
                        <FaLinkedin size={20} />
                    </a>
                    <a 
                        href="https://wa.me/34637148437"
                        target='_blank'
                        rel='noopener noreferrer'
                        className='hover:text-white transition-colors'
                    >
                        <FaWhatsapp size={20} />
                    </a>
                </div>
            </div>
        </footer>
    )
}

  