import React from 'react'

const Hero = () => {
    return (
        <section id="hero" className="relative pt-32 pb-20 lg:pt-48 lg:pb-32 overflow-hidden bg-brand-lightBlue/30">
            <div className="container-custom grid lg:grid-cols-2 gap-12 items-center">

                {/* Left: Copy */}
                <div className="relative z-10 order-2 lg:order-1">
                    <div className="inline-flex items-center gap-2 px-3 py-1 bg-brand-blue/10 text-brand-blue rounded-full text-xs font-bold mb-6">
                        <span className="w-2 h-2 bg-brand-orange rounded-full"></span>
                        PROJETO DE ENERGIA SOLAR
                    </div>

                    <h1 className="text-4xl lg:text-5xl font-extrabold text-brand-blue leading-tight mb-6">
                        O problema da energia solar <span className="text-brand-orange">não é a placa.</span><br />
                        É o projeto mal feito.
                    </h1>

                    <p className="text-lg text-gray-600 mb-8 leading-relaxed max-w-xl">
                        Antes de investir em energia solar, você precisa ter certeza de que o projeto faz sentido para a sua casa — hoje e no futuro.
                        <br /><br />
                        A <strong>New</strong> acompanha você do início à instalação, com clareza, cuidado e acabamento profissional.
                    </p>

                    <div className="flex flex-col sm:flex-row gap-4">
                        <a href="https://wa.me/5500000000000" className="btn-primary flex items-center justify-center gap-2">
                            👉 Falar com um especialista no WhatsApp
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
                <div className="relative order-1 lg:order-2">
                    <div className="relative rounded-3xl overflow-hidden shadow-2xl bg-gray-200 aspect-[4/3] group">
                        <img
                            src="/New Energia Solar/painelsolar1-horizontal.jpg"
                            alt="Casa com projetos de energia solar da New Energia Solar"
                            className="object-cover w-full h-full transform transition-transform duration-700 group-hover:scale-105"
                        />
                    </div>

                    {/* Floating Badge */}
                    <div className="absolute -bottom-6 -left-6 bg-white p-4 rounded-xl shadow-lg border-l-4 border-brand-orange hidden md:block">
                        <p className="text-xs text-gray-500 font-bold uppercase tracking-wider mb-1">Economia Real</p>
                        <p className="text-brand-blue font-bold text-lg">Até 95% de redução</p>
                    </div>
                </div>
            </div>
        </section>
    )
}

export default Hero
