import { ArrowRight, CheckCircle, Calculator } from 'lucide-react'

const FinalCTA = () => {
    const whatsappUrl = "https://wa.me/551638393638?text=Ol%C3%A1%2C%20vim%20pelo%20site."

    return (
        <section id="contact" className="py-8 lg:py-20 relative overflow-hidden">
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
                {/* Lighter overlays to show more video while keeping blue tint */}
                <div className="absolute inset-0 bg-brand-blue/75 mix-blend-multiply"></div>
                <div className="absolute inset-0 bg-brand-blue/60 backdrop-blur-[2px]"></div>
                <div className="absolute inset-0 bg-gradient-to-t from-brand-blue via-brand-blue/70 to-transparent"></div>
            </div>

            <div className="container-custom relative z-10">
                <div className="grid lg:grid-cols-2 gap-8 lg:gap-12 items-center">

                    {/* Left: Copy */}
                    <div className="text-white">
                        <div className="inline-flex items-center gap-2 px-3 py-1 bg-white/10 text-white rounded-full text-xs font-bold mb-4 backdrop-blur-sm border border-white/20">
                            <Calculator size={14} className="text-brand-orange" />
                            ANÁLISE DE VIABILIDADE
                        </div>

                        <h2 className="text-2xl lg:text-5xl font-extrabold mb-6 leading-tight">
                            Entenda se a energia solar <span className="text-brand-orange">faz sentido</span> para a sua casa.
                        </h2>

                        <p className="text-lg text-brand-lightBlue/80 mb-8 leading-relaxed">
                            Antes de investir, converse com um especialista e veja se o projeto realmente é viável para o seu cenário — sem compromisso e sem pressão.
                        </p>

                        <div className="space-y-4 text-brand-lightBlue/90 font-medium">
                            <div className="flex items-center gap-3">
                                <CheckCircle className="text-brand-orange" size={20} />
                                <span>Simulação personalizada para seu consumo</span>
                            </div>
                            <div className="flex items-center gap-3">
                                <CheckCircle className="text-brand-orange" size={20} />
                                <span>Análise de retorno financeiro real</span>
                            </div>
                            <div className="flex items-center gap-3">
                                <CheckCircle className="text-brand-orange" size={20} />
                                <span>Explicação técnica sem "mensalês"</span>
                            </div>
                        </div>
                    </div>

                    {/* Right: Form Card */}
                    <div className="bg-white rounded-xl shadow-2xl p-5 md:p-8 lg:p-10">
                        <h3 className="text-2xl font-bold text-brand-blue mb-2">
                            Fale agora com um especialista
                        </h3>
                        <p className="text-gray-500 text-sm mb-6">
                            Clique abaixo para iniciar uma conversa direta pelo WhatsApp e tirar suas dúvidas sobre energia solar.
                        </p>

                        <div className="space-y-6">
                            <a
                                href={whatsappUrl}
                                target="_blank"
                                rel="noopener noreferrer"
                                className="w-full btn-3d-primary flex items-center justify-center gap-2 text-lg py-4 mt-2"
                            >
                                <span className="relative z-10 flex items-center gap-2">
                                    Quero falar no WhatsApp
                                </span>
                                <ArrowRight size={20} className="relative z-10" />
                            </a>

                            <p className="text-center text-xs text-gray-400 mt-4 flex items-center justify-center gap-2">
                                <span>Atendimento humano</span>
                                <span className="w-1 h-1 bg-gray-300 rounded-full"></span>
                                <span>Resposta rápida</span>
                                <span className="w-1 h-1 bg-gray-300 rounded-full"></span>
                                <span>Sem compromisso</span>
                            </p>
                        </div>
                    </div>

                </div>
            </div>
        </section>
    )
}

export default FinalCTA
