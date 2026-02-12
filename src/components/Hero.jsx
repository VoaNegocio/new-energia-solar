import React from 'react'

const Hero = () => {
    return (
        <section id="hero" className="relative pt-20 pb-8 lg:pt-48 lg:pb-32 overflow-hidden">
            {/* Video Background */}
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
                {/* Overlay to ensure text readability */}
                <div className="absolute inset-0 bg-brand-lightBlue/80 mix-blend-overlay"></div>
                <div className="absolute inset-0 bg-gradient-to-r from-white/90 via-white/70 to-transparent"></div>
            </div>

            <div className="container-custom grid lg:grid-cols-2 gap-6 lg:gap-12 items-center relative z-10">

                {/* Left: Copy */}
                <div>
                    <div className="inline-flex items-center gap-2 px-3 py-1 bg-brand-blue/10 text-brand-blue rounded-full text-[10px] sm:text-xs font-bold mb-3 backdrop-blur-sm">
                        <span className="w-2 h-2 bg-brand-orange rounded-full"></span>
                        PROJETO DE ENERGIA SOLAR
                    </div>

                    <h1 className="text-xl sm:text-4xl lg:text-5xl font-extrabold text-brand-blue leading-tight mb-3">
                        Se você começar a pagar a sua placa hoje, um dia você <span className="text-brand-orange">não precisará mais pagar a conta de energia!</span>
                    </h1>

                    {/* Mobile Image (Between Title and Text) */}
                    <div className="lg:hidden relative mb-6 max-w-full">
                        <div className="rounded-2xl overflow-hidden shadow-xl bg-gray-200 aspect-[16/9] group relative z-0">
                            <img
                                src="/New Energia Solar/painelsolar1-horizontal.webp"
                                alt="Casa com projetos de energia solar da New Energia Solar"
                                className="object-cover w-full h-full transform transition-transform duration-700 lg:group-hover:scale-105"
                            />
                        </div>
                        {/* Mobile Floating Badge - Compacted */}
                        <div className="absolute bottom-0 right-0 bg-white p-2 rounded-tl-lg rounded-br-xl shadow-lg border-l-4 border-brand-orange z-10 flex flex-col justify-center max-w-[120px]">
                            <p className="text-[9px] text-gray-500 font-bold uppercase tracking-wider mb-0.5 leading-none">Economia Real</p>
                            <p className="text-brand-blue font-bold text-xs leading-tight">Até 95% de redução na sua conta de energia.</p>
                        </div>
                    </div>

                    <p className="text-base sm:text-lg text-gray-600 mb-6 leading-relaxed max-w-xl">
                        Energia solar é uma conta que você paga por um projeto que é seu!
                    </p>

                    <div className="flex flex-col sm:flex-row gap-4">
                        <a href="#contact" className="btn-3d-primary w-full sm:w-auto px-6 py-3 text-base sm:text-lg">
                            <span className="relative z-10 flex items-center justify-center gap-2">
                                <svg className="w-4 h-4 fill-current" xmlns="http://www.w3.org/2000/svg" viewBox="0 0 448 512"><path d="M416 208H272V64c0-17.67-14.33-32-32-32h-32c-17.67 0-32 14.33-32 32v144H32c-17.67 0-32 14.33-32 32v32c0 17.67 14.33 32 32 32h144v144c0 17.67 14.33 32 32 32h32c17.67 0 32-14.33 32-32V304h144c17.67 0 32-14.33 32-32v-32c0-17.67-14.33-32-32-32z" /></svg>
                                Quero fazer um orçamento gratuito
                            </span>
                        </a>
                    </div>

                    <div className="mt-8 flex flex-wrap items-center gap-4 text-xs sm:text-sm font-semibold text-gray-500">
                        <div className="flex items-center gap-1.5">
                            <div className="w-6 h-6 rounded-full bg-brand-blue/5 flex items-center justify-center text-brand-blue">✓</div>
                            Projeto
                        </div>
                        <div className="flex items-center gap-1.5">
                            <div className="w-6 h-6 rounded-full bg-brand-blue/5 flex items-center justify-center text-brand-blue">✓</div>
                            Acompanhamento
                        </div>
                        <div className="flex items-center gap-1.5">
                            <div className="w-6 h-6 rounded-full bg-brand-blue/5 flex items-center justify-center text-brand-blue">✓</div>
                            Segurança
                        </div>
                    </div>
                </div>

                {/* Right: Image */}
                <div className="relative hidden lg:block">
                    <div className="relative rounded-3xl overflow-hidden shadow-2xl bg-gray-200 aspect-[4/3] group">
                        <img
                            src="/New Energia Solar/painelsolar1-horizontal.webp"
                            alt="Casa com projetos de energia solar da New Energia Solar"
                            className="object-cover w-full h-full transform transition-transform duration-700 group-hover:scale-105"
                        />
                    </div>

                    {/* Floating Badge */}
                    <div className="absolute -bottom-6 -left-6 bg-white p-4 rounded-xl border-l-4 border-brand-orange hidden md:block static-3d-card">
                        <p className="text-xs text-gray-500 font-bold uppercase tracking-wider mb-1">Economia Real</p>
                        <p className="text-brand-blue font-bold text-lg">Até 95% de redução na sua conta de energia.</p>
                    </div>
                </div>
            </div>
        </section>
    )
}

export default Hero
