import { Star } from 'lucide-react'
import { useState, useRef, useEffect } from 'react'

const SocialProof = () => {
    const [activeIndex, setActiveIndex] = useState(0)
    const scrollRef = useRef(null)

    const testimonials = [
        {
            photoPlaceholder: <img src="/New Energia Solar/painelsolar1-vertical.jpg" alt="Instalação Solar 1" className="w-full h-full object-cover" />,
            quote: "Excelente atendimento e acompanhamento. O projeto ficou exatamente como prometido.",
            location: "Ituverava - SP"
        },
        {
            photoPlaceholder: <img src="/New Energia Solar/painelsolar2-vertical.jpg" alt="Instalação Solar 2" className="w-full h-full object-cover" />,
            quote: "O acabamento ficou perfeito. Recomendo muito a equipe da New Energia Solar.",
            location: "Região - SP"
        },
        {
            photoPlaceholder: <img src="/New Energia Solar/painelsolar3-vertical.jpg" alt="Instalação Solar 3" className="w-full h-full object-cover" />,
            quote: "Fiquei muito seguro com a explicação técnica. Entendi tudo antes de fechar.",
            location: "Ituverava - SP"
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
        <section id="social-proof" className="py-20 relative overflow-hidden">
            {/* Video Background with Masking Effects */}
            <div className="absolute inset-0 z-0">
                <video
                    autoPlay
                    loop
                    muted
                    playsInline
                    className="w-full h-full object-cover"
                >
                    <source src="/videos/videobackgroundhero.mp4" type="video/mp4" />
                </video>
                {/* Blue overlays to mask usage - FinalCTA Style */}
                <div className="absolute inset-0 bg-brand-blue/75 mix-blend-multiply"></div>
                <div className="absolute inset-0 bg-brand-blue/60 backdrop-blur-[2px]"></div>
                <div className="absolute inset-0 bg-gradient-to-t from-brand-blue via-brand-blue/70 to-transparent"></div>
            </div>

            <div className="container-custom relative z-10">
                <div className="text-center mb-12">
                    <div className="inline-flex items-center gap-2 px-3 py-1 bg-white/10 text-white rounded-full text-xs font-bold mb-6 backdrop-blur-md border border-white/20">
                        <span className="w-2 h-2 bg-brand-orange rounded-full"></span>
                        CLIENTES
                    </div>
                    <h2 className="text-3xl md:text-4xl font-extrabold text-white mb-4">
                        Famílias da região já optaram por fazer energia solar do jeito certo
                    </h2>
                    <p className="text-lg text-blue-50 max-w-2xl mx-auto">
                        Energia solar não se prova com promessa.
                        <br />
                        <span className="font-bold text-brand-orange">Se prova com projeto bem executado.</span>
                    </p>
                </div>

                <div
                    ref={scrollRef}
                    className="flex md:grid md:grid-cols-3 gap-6 overflow-x-auto snap-x snap-mandatory pt-4 pb-8 -mx-4 px-4 md:px-0 md:pb-0 md:overflow-visible scrollbar-hide"
                >
                    {testimonials.map((item, index) => (
                        <div key={index} className="min-w-[85%] sm:min-w-[350px] md:min-w-0 snap-center bg-white rounded-2xl overflow-hidden shadow-sm border border-gray-100 transition-all duration-300 hover:shadow-lg hover:-translate-y-1 hover:border-brand-orange/20 group h-full flex flex-col">
                            <div className="h-96 bg-gray-200 flex items-center justify-center text-gray-400 font-bold relative overflow-hidden group-hover:scale-[1.02] transition-transform duration-500">
                                {item.photoPlaceholder}
                                <div className="absolute inset-0 bg-gradient-to-t from-black/20 to-transparent opacity-0 group-hover:opacity-100 transition-opacity duration-300"></div>
                            </div>
                            <div className="p-6 flex-1 flex flex-col">
                                <div className="flex gap-1 text-yellow-400 mb-3">
                                    <Star className="w-4 h-4 fill-current" />
                                    <Star className="w-4 h-4 fill-current" />
                                    <Star className="w-4 h-4 fill-current" />
                                    <Star className="w-4 h-4 fill-current" />
                                    <Star className="w-4 h-4 fill-current" />
                                </div>
                                <p className="text-gray-600 italic mb-4 flex-1">
                                    "{item.quote}"
                                </p>
                                <div className="mt-auto pt-4 border-t border-gray-50">
                                    <p className="font-bold text-brand-blue">- Cliente Satisfeito</p>
                                    <p className="text-xs text-gray-500">{item.location}</p>
                                </div>
                            </div>
                        </div>
                    ))}
                </div>

                {/* Dots for Mobile */}
                <div className="flex justify-center gap-2 mt-2 md:hidden">
                    {testimonials.map((_, index) => (
                        <div
                            key={index}
                            className={`w-2 h-2 rounded-full transition-all duration-300 ${index === activeIndex ? 'bg-brand-orange w-4' : 'bg-gray-300'
                                }`}
                        />
                    ))}
                </div>
            </div>
        </section>
    )
}

export default SocialProof
