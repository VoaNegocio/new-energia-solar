import { Check, X } from 'lucide-react'

const Identification = () => {
    return (
        <section id="identification" className="py-8 lg:py-24 relative overflow-hidden">
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
                <div className="max-w-4xl mx-auto">
                    <div className="text-center mb-8 lg:mb-16">
                        <div className="inline-flex items-center gap-2 px-3 py-1 bg-white/10 text-white rounded-full text-xs font-bold mb-4 backdrop-blur-md border border-white/20">
                            <span className="w-2 h-2 bg-brand-orange rounded-full"></span>
                            PERFIL IDEAL
                        </div>
                        <h2 className="text-2xl md:text-4xl font-extrabold text-white mb-4">
                            Essa consultoria é para você que:
                        </h2>
                    </div>

                    <div className="grid md:grid-cols-2 gap-8 mb-16">
                        {/* Positive Qualifiers - Tactile Cards */}
                        <div className="space-y-4">
                            {[
                                "Mora em casa própria",
                                "Vive em Ituverava ou região",
                                "Já pensou em energia solar",
                                "Tem medo de gastar errado ou ser mal atendido",
                                "Prefere qualidade e orientação a preço baixo"
                            ].map((item, index) => (
                                <div key={index} className="group flex items-center gap-3 p-4 bg-white rounded-xl shadow-sm border border-gray-100 transition-all duration-300 hover:shadow-lg hover:-translate-y-1 hover:border-brand-blue/20 cursor-default">
                                    <div className="flex-shrink-0 w-10 h-10 rounded-full bg-green-50 flex items-center justify-center group-hover:bg-green-100 transition-colors">
                                        <Check size={20} className="text-green-600" />
                                    </div>
                                    <span className="text-gray-700 font-medium group-hover:text-brand-blue transition-colors">{item}</span>
                                </div>
                            ))}
                        </div>

                        {/* Negative Qualifiers - Warning Cards */}
                        <div className="space-y-4">
                            {[
                                "Não é para quem escolhe só pelo menor preço",
                                "Não é para quem quer decidir sem entender o projeto"
                            ].map((item, index) => (
                                <div key={index} className="flex items-center gap-3 p-4 bg-white rounded-xl border border-red-100 transition-all duration-300 hover:bg-red-50 hover:border-red-200">
                                    <div className="flex-shrink-0 w-10 h-10 rounded-full bg-red-100 flex items-center justify-center">
                                        <X size={20} className="text-red-500" />
                                    </div>
                                    <span className="text-gray-700 font-medium">{item}</span>
                                </div>
                            ))}

                            {/* Callout Box */}
                            <div className="mt-8 p-6 bg-white/10 rounded-2xl border border-white/20 text-center md:text-left backdrop-blur-md">
                                <p className="text-sm text-blue-50 font-semibold">
                                    💡 A gente valoriza o seu dinheiro tanto quanto você. Por isso, não vendemos "kit padrão". Vendemos solução.
                                </p>
                            </div>
                        </div>
                    </div>

                    <div className="text-center pt-8 border-t border-white/10 max-w-2xl mx-auto">
                        <p className="text-xl font-bold text-blue-100 mb-8">
                            Energia solar é investimento. <br />
                            <span className="text-brand-orange text-2xl">E investimento mal decidido cobra depois.</span>
                        </p>
                        <a href="#contact" className="btn-3d-primary px-8 py-4 text-lg">
                            <span className="relative z-10 flex items-center gap-2">
                                Quero minha análise gratuita
                                <svg className="w-4 h-4 fill-current" xmlns="http://www.w3.org/2000/svg" viewBox="0 0 448 512"><path d="M416 208H272V64c0-17.67-14.33-32-32-32h-32c-17.67 0-32 14.33-32 32v144H32c-17.67 0-32 14.33-32 32v32c0 17.67 14.33 32 32 32h144v144c0 17.67 14.33 32 32 32h32c17.67 0 32-14.33 32-32V304h144c17.67 0 32-14.33 32-32v-32c0-17.67-14.33-32-32-32z" /></svg>
                            </span>
                        </a>
                    </div>
                </div>
            </div>
        </section>
    )
}

export default Identification
