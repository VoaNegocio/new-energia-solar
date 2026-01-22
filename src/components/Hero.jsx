import React from 'react'

const Hero = () => {
    return (
        <section id="hero" className="relative pt-32 pb-20 lg:pt-48 lg:pb-32 overflow-hidden">
            {/* Video Background */}
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
                {/* Overlay to ensure text readability */}
                <div className="absolute inset-0 bg-brand-lightBlue/80 mix-blend-overlay"></div>
                <div className="absolute inset-0 bg-gradient-to-r from-white/90 via-white/70 to-transparent"></div>
            </div>

            <div className="container-custom grid lg:grid-cols-2 gap-12 items-center relative z-10">

                {/* Left: Copy */}
                <div>
                    <div className="inline-flex items-center gap-2 px-3 py-1 bg-brand-blue/10 text-brand-blue rounded-full text-xs font-bold mb-6 backdrop-blur-sm">
                        <span className="w-2 h-2 bg-brand-orange rounded-full"></span>
                        PROJETO DE ENERGIA SOLAR
                    </div>

                    <h1 className="text-4xl lg:text-5xl font-extrabold text-brand-blue leading-tight mb-6">
                        O problema da energia solar <span className="text-brand-orange">não é a placa.</span><br />
                        É o projeto mal feito.
                    </h1>

                    {/* Mobile Image (Between Title and Text) */}
                    {/* Mobile Image (Between Title and Text) */}
                    <div className="lg:hidden relative mb-10">
                        <div className="rounded-3xl overflow-hidden shadow-2xl bg-gray-200 aspect-[4/3] group relative z-0">
                            <img
                                src="/New Energia Solar/painelsolar1-horizontal.jpg"
                                alt="Casa com projetos de energia solar da New Energia Solar"
                                className="object-cover w-full h-full transform transition-transform duration-700 group-hover:scale-105"
                            />
                        </div>
                        {/* Mobile Floating Badge */}
                        <div className="absolute -bottom-4 right-4 bg-white p-3 rounded-lg shadow-lg border-l-4 border-brand-orange z-10 flex flex-col justify-center">
                            <p className="text-[10px] text-gray-500 font-bold uppercase tracking-wider mb-0.5 leading-none">Economia Real</p>
                            <p className="text-brand-blue font-bold text-sm leading-tight">Até 95% de redução</p>
                        </div>
                    </div>

                    <p className="text-lg text-gray-600 mb-8 leading-relaxed max-w-xl">
                        Antes de investir em energia solar, você precisa ter certeza de que o projeto faz sentido para a sua casa — hoje e no futuro.
                        <br /><br />
                        A <strong>New</strong> acompanha você do início à instalação, com clareza, cuidado e acabamento profissional.
                    </p>

                    <div className="flex flex-col sm:flex-row gap-4">
                        <a href="https://wa.me/5500000000000" className="btn-solar-tactile flex items-center justify-center gap-3 font-bold py-4 px-8 transform transition-all duration-300 w-full sm:w-auto">
                            <span className="relative z-10 flex items-center gap-2">
                                <svg className="w-5 h-5 fill-current" xmlns="http://www.w3.org/2000/svg" viewBox="0 0 448 512"><path d="M380.9 97.1C339 55.1 283.2 32 223.9 32c-122.4 0-222 99.6-222 222 0 39.1 10.2 77.3 29.6 111L0 480l117.7-30.9c32.4 17.7 68.9 27 106.1 27h.1c122.3 0 224.1-99.6 224.1-222 0-59.3-25.2-115-67.1-157zm-157 341.6c-33.2 0-65.7-8.9-94-25.7l-6.7-4-69.8 18.3L72 359.2l-4.4-7c-18.5-29.4-28.2-63.3-28.2-98.2 0-101.7 82.8-184.5 184.6-184.5 49.3 0 95.6 19.2 130.4 54.1 34.8 34.9 56.2 81.2 56.1 130.5 0 101.8-84.9 184.6-186.6 184.6zm101.2-138.2c-5.5-2.8-32.8-16.2-37.9-18-5.1-1.9-8.8-2.8-12.5 2.8-3.7 5.6-14.3 18-17.5 21.8-3.2 3.7-6.5 4.2-12 1.4-32.6-16.3-54-29.1-75.5-66-5.7-9.8 5.7-9.1 16.3-30.3 1.8-3.7 .9-6.9-.5-9.7-1.4-2.8-12.5-30-17.1-41-4.5-10.8-9.1-9.3-12.5-9.5-3.2-.2-6.9-.2-10.6-.2-3.7 0-9.7 1.4-14.8 6.9-5.1 5.6-19.4 19-19.4 46.3 0 27.3 19.9 53.7 22.6 57.4 2.8 3.7 39.1 59.7 94.8 83.8 35.2 15.2 49 16.5 66.6 13.9 10.7-1.6 32.8-13.4 37.4-26.4 4.6-13 4.6-24.1 3.2-26.4-1.3-2.5-5-3.9-10.5-6.6z" /></svg>
                                Falar com um especialista no WhatsApp
                            </span>
                        </a>
                    </div>

                    <div className="mt-12 flex items-center gap-6 text-sm font-semibold text-gray-500">
                        <div className="flex items-center gap-2">
                            <div className="w-8 h-8 rounded-full bg-brand-blue/5 flex items-center justify-center text-brand-blue">✓</div>
                            Projeto
                        </div>
                        <div className="flex items-center gap-2">
                            <div className="w-8 h-8 rounded-full bg-brand-blue/5 flex items-center justify-center text-brand-blue">✓</div>
                            Acompanhamento
                        </div>
                        <div className="flex items-center gap-2">
                            <div className="w-8 h-8 rounded-full bg-brand-blue/5 flex items-center justify-center text-brand-blue">✓</div>
                            Segurança
                        </div>
                    </div>
                </div>

                {/* Right: Image */}
                <div className="relative hidden lg:block">
                    <div className="relative rounded-3xl overflow-hidden shadow-2xl bg-gray-200 aspect-[4/3] group">
                        <img
                            src="/New Energia Solar/painelsolar1-horizontal.jpg"
                            alt="Casa com projetos de energia solar da New Energia Solar"
                            className="object-cover w-full h-full transform transition-transform duration-700 group-hover:scale-105"
                        />
                    </div>

                    {/* Floating Badge */}
                    <div className="absolute -bottom-6 -left-6 bg-white p-4 rounded-xl border-l-4 border-brand-orange hidden md:block static-3d-card">
                        <p className="text-xs text-gray-500 font-bold uppercase tracking-wider mb-1">Economia Real</p>
                        <p className="text-brand-blue font-bold text-lg">Até 95% de redução</p>
                    </div>
                </div>
            </div>
        </section>
    )
}

export default Hero
