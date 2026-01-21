import { Check, X } from 'lucide-react'

const Identification = () => {
    return (
        <section id="identification" className="py-20 bg-brand-gray/50">
            <div className="container-custom">
                <div className="max-w-4xl mx-auto">
                    <div className="text-center mb-12">
                        <h2 className="text-3xl font-bold text-brand-blue mb-4">
                            Essa consultoria é para você que:
                        </h2>
                    </div>

                    <div className="grid md:grid-cols-2 gap-8 mb-12">
                        {/* Positive Qualifiers */}
                        <div className="space-y-4">
                            {[
                                "Mora em casa própria",
                                "Vive em Ituverava ou região",
                                "Já pensou em energia solar",
                                "Tem medo de gastar errado ou ser mal atendido",
                                "Prefere qualidade e orientação a preço baixo"
                            ].map((item, index) => (
                                <div key={index} className="flex items-start gap-3 p-3 bg-white rounded-lg shadow-sm border border-gray-100">
                                    <div className="mt-1 min-w-5 min-h-5 rounded-full bg-green-100 flex items-center justify-center">
                                        <Check size={14} className="text-green-600" />
                                    </div>
                                    <span className="text-gray-700 font-medium">{item}</span>
                                </div>
                            ))}
                        </div>

                        {/* Negative Qualifiers */}
                        <div className="space-y-4">
                            {[
                                "Não é para quem escolhe só pelo menor preço",
                                "Não é para quem quer decidir sem entender o projeto"
                            ].map((item, index) => (
                                <div key={index} className="flex items-start gap-3 p-3 bg-red-50/50 rounded-lg border border-red-100">
                                    <div className="mt-1 min-w-5 min-h-5 rounded-full bg-red-100 flex items-center justify-center">
                                        <X size={14} className="text-red-500" />
                                    </div>
                                    <span className="text-gray-600">{item}</span>
                                </div>
                            ))}
                        </div>
                    </div>

                    <div className="text-center border-t border-gray-200 pt-8 max-w-2xl mx-auto">
                        <p className="text-lg font-bold text-brand-blue">
                            Energia solar é investimento.<br />
                            <span className="text-brand-orange">E investimento mal decidido cobra depois.</span>
                        </p>
                    </div>
                </div>
            </div>
        </section>
    )
}

export default Identification
