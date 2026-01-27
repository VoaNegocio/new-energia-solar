import { HelpCircle } from 'lucide-react'

const Taxation = () => {
    return (
        <section className="py-12 lg:py-20 bg-brand-lightBlue/30">
            <div className="container-custom">
                <div className="max-w-3xl mx-auto text-center">
                    <div className="inline-flex items-center gap-2 text-brand-blue font-bold mb-4 bg-white px-4 py-2 rounded-full shadow-sm">
                        <HelpCircle size={20} className="text-brand-orange" />
                        <span className="uppercase tracking-wider text-xs">Objeção Comum</span>
                    </div>

                    <h2 className="text-2xl lg:text-4xl font-bold text-brand-blue mb-6">
                        “E se o governo taxar a energia solar?”
                    </h2>

                    <div className="bg-white p-8 rounded-2xl shadow-sm border border-brand-blue/5">
                        <p className="text-lg text-gray-700 leading-relaxed mb-6">
                            Essa dúvida é legítima. <strong className="text-brand-blue">Ignorar isso seria irresponsável.</strong>
                        </p>

                        <p className="text-gray-600 mb-8">
                            Na consultoria, explicamos:
                        </p>

                        <ul className="text-left max-w-md mx-auto space-y-3 mb-8">
                            <li className="flex items-center gap-3 text-gray-700">
                                <span className="w-2 h-2 bg-brand-orange rounded-full"></span>
                                Como funciona a regra hoje
                            </li>
                            <li className="flex items-center gap-3 text-gray-700">
                                <span className="w-2 h-2 bg-brand-orange rounded-full"></span>
                                O que já mudou
                            </li>
                            <li className="flex items-center gap-3 text-gray-700">
                                <span className="w-2 h-2 bg-brand-orange rounded-full"></span>
                                Como isso entra no planejamento do projeto
                            </li>
                        </ul>

                        <div className="flex flex-wrap justify-center gap-4 text-sm font-bold text-brand-blue/60 uppercase tracking-widest border-t border-gray-100 pt-6">
                            <span>Sem pânico.</span>
                            <span className="text-brand-orange">•</span>
                            <span>Sem pressão.</span>
                            <span className="text-brand-orange">•</span>
                            <span>Sem empurrar decisão.</span>
                        </div>
                    </div>
                </div>
            </div>
        </section>
    )
}

export default Taxation
