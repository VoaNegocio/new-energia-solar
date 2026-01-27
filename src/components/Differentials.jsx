import { ClipboardCheck, HardHat, ShieldCheck, Scale } from 'lucide-react'
import { useState, useRef, useEffect } from 'react'

const Differentials = () => {
    const [activeIndex, setActiveIndex] = useState(0)
    const scrollRef = useRef(null)

    const differentials = [
        {
            icon: <ClipboardCheck size={32} className="text-brand-orange" />,
            title: "Consultoria antes da decisão",
            description: "Você entende o projeto antes de investir."
        },
        {
            icon: <HardHat size={32} className="text-brand-orange" />,
            title: "Acompanhamento de ponta a ponta",
            description: "Do primeiro contato até a instalação final."
        },
        {
            icon: <ShieldCheck size={32} className="text-brand-orange" />,
            title: "Acabamento profissional",
            description: "Projeto bem feito aparece até no telhado."
        },
        {
            icon: <Scale size={32} className="text-brand-orange" />,
            title: "Clareza sobre regras e taxação",
            description: "Sem empurrar decisão. Sem promessas irreais."
        }
    ]

    const handleScroll = () => {
        if (scrollRef.current) {
            const scrollLeft = scrollRef.current.scrollLeft
            const width = scrollRef.current.offsetWidth
            const index = Math.round(scrollLeft / width)
            setActiveIndex(index)
        }
    }

    useEffect(() => {
        const container = scrollRef.current
        if (container) {
            container.addEventListener('scroll', handleScroll)
            return () => container.removeEventListener('scroll', handleScroll)
        }
    }, [])

    return (
        <section id="differentials" className="py-12 lg:py-24 relative overflow-hidden">
            {/* Video Background with Masking Effects */}
            <div className="absolute inset-0 z-0">
                <video
                    autoPlay
                    loop
                    muted
                    playsInline
                    className="w-full h-full object-cover"
                >
                    <source src="/videos/videobackgroundhero_opt.mp4" type="video/mp4" />
                </video>
                {/* Blue overlays to mask usage - FinalCTA Style */}
                <div className="absolute inset-0 bg-brand-blue/75 mix-blend-multiply"></div>
                <div className="absolute inset-0 bg-brand-blue/60 backdrop-blur-[2px]"></div>
                <div className="absolute inset-0 bg-gradient-to-t from-brand-blue via-brand-blue/70 to-transparent"></div>
            </div>

            <div className="container-custom relative z-10">
                <div className="max-w-3xl mx-auto text-center mb-8 md:mb-16">
                    <div className="inline-flex items-center gap-2 px-3 py-1 bg-white/10 text-white rounded-full text-xs font-bold mb-4 backdrop-blur-md border border-white/20">
                        <span className="w-2 h-2 bg-brand-orange rounded-full"></span>
                        DIFERENCIAIS
                    </div>
                    <h2 className="text-2xl md:text-4xl font-extrabold text-white mb-4">
                        Na New, você não recebe só um orçamento.<br className="hidden md:block" />
                        <span className="text-brand-orange">Você recebe orientação e acompanhamento real.</span>
                    </h2>
                    <p className="text-blue-50 text-lg">O que muda na prática:</p>
                </div>

                {/* Mobile Horizontal Scroll / Desktop Grid */}
                <div
                    ref={scrollRef}
                    className="flex md:grid md:grid-cols-2 gap-6 overflow-x-auto snap-x snap-mandatory pb-8 md:pb-0 px-4 md:px-0 -mx-4 md:mx-auto max-w-4xl scrollbar-hide"
                >
                    {differentials.map((item, index) => (
                        <div key={index} className="flex-shrink-0 w-[85%] md:w-auto snap-center bg-white p-8 rounded-2xl shadow-sm border border-gray-100 transition-all duration-300 hover:shadow-lg hover:-translate-y-1 hover:border-brand-orange/20 group">
                            <div className="bg-brand-orange/10 w-14 h-14 rounded-xl flex items-center justify-center mb-6 group-hover:scale-110 transition-transform duration-300">
                                {item.icon}
                            </div>
                            <div>
                                <h3 className="text-xl font-bold text-brand-blue mb-3">{item.title}</h3>
                                <p className="text-gray-600 leading-relaxed">{item.description}</p>
                            </div>
                        </div>
                    ))}
                </div>

                {/* Dots for Mobile */}
                <div className="flex justify-center gap-2 mt-2 md:hidden">
                    {differentials.map((_, index) => (
                        <div
                            key={index}
                            className={`w-2 h-2 rounded-full transition-all duration-300 ${index === activeIndex ? 'bg-brand-orange w-4' : 'bg-gray-300'
                                }`}
                        />
                    ))}
                </div>
            </div>

            <div className="mt-12 text-center">
                <a href="#contact" className="btn-3d-primary px-8 py-4 text-lg">
                    <span className="relative z-10 flex items-center gap-2">
                        Quero um projeto com esse acompanhamento
                        <svg className="w-4 h-4 fill-current" xmlns="http://www.w3.org/2000/svg" viewBox="0 0 448 512"><path d="M416 208H272V64c0-17.67-14.33-32-32-32h-32c-17.67 0-32 14.33-32 32v144H32c-17.67 0-32 14.33-32 32v32c0 17.67 14.33 32 32 32h144v144c0 17.67 14.33 32 32 32h32c17.67 0 32-14.33 32-32V304h144c17.67 0 32-14.33 32-32v-32c0-17.67-14.33-32-32-32z" /></svg>
                    </span>
                </a>
            </div>
        </section>
    )
}

export default Differentials
