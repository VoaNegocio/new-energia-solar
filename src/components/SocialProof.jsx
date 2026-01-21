const SocialProof = () => {
    return (
        <section id="social-proof" className="py-20 bg-brand-gray/30">
            <div className="container-custom">
                <div className="text-center mb-12">
                    <h2 className="text-3xl font-bold text-brand-blue mb-4">
                        Famílias da região já optaram por fazer energia solar do jeito certo
                    </h2>
                    <p className="text-lg text-gray-600 max-w-2xl mx-auto">
                        Energia solar não se prova com promessa.
                        <br />
                        <span className="font-bold text-brand-orange">Se prova com projeto bem executado.</span>
                    </p>
                </div>

                <div className="grid md:grid-cols-3 gap-8">
                    {/* Placeholder 1 */}
                    <div className="bg-white rounded-2xl overflow-hidden shadow-sm hover:shadow-md transition-shadow">
                        <div className="h-48 bg-gray-200 flex items-center justify-center text-gray-400 font-bold">
                            [FOTO INSTALAÇÃO 1]
                        </div>
                        <div className="p-6">
                            <p className="text-gray-600 italic mb-4">
                                "Excelente atendimento e acompanhamento. O projeto ficou exatamente como prometido."
                            </p>
                            <p className="font-bold text-brand-blue">- Cliente Satisfeito</p>
                            <p className="text-xs text-gray-500">Ituverava - SP</p>
                        </div>
                    </div>

                    {/* Placeholder 2 */}
                    <div className="bg-white rounded-2xl overflow-hidden shadow-sm hover:shadow-md transition-shadow">
                        <div className="h-48 bg-gray-200 flex items-center justify-center text-gray-400 font-bold">
                            [FOTO INSTALAÇÃO 2]
                        </div>
                        <div className="p-6">
                            <p className="text-gray-600 italic mb-4">
                                "O acabamento ficou perfeito. Recomendo muito a equipe da New Energia Solar."
                            </p>
                            <p className="font-bold text-brand-blue">- Cliente Satisfeito</p>
                            <p className="text-xs text-gray-500">Região - SP</p>
                        </div>
                    </div>

                    {/* Placeholder 3 */}
                    <div className="bg-white rounded-2xl overflow-hidden shadow-sm hover:shadow-md transition-shadow">
                        <div className="h-48 bg-gray-200 flex items-center justify-center text-gray-400 font-bold">
                            [FOTO INSTALAÇÃO 3]
                        </div>
                        <div className="p-6">
                            <p className="text-gray-600 italic mb-4">
                                "Fiquei muito seguro com a explicação técnica. Entendi tudo antes de fechar."
                            </p>
                            <p className="font-bold text-brand-blue">- Cliente Satisfeito</p>
                            <p className="text-xs text-gray-500">Ituverava - SP</p>
                        </div>
                    </div>
                </div>
            </div>
        </section>
    )
}

export default SocialProof
