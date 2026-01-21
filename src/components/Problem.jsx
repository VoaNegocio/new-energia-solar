import { AlertTriangle } from 'lucide-react'

const Problem = () => {
    return (
        <section className="py-20 bg-white">
            <div className="container-custom">
                <div className="max-w-3xl mx-auto text-center">
                    <div className="inline-flex items-center justify-center w-16 h-16 bg-red-100 rounded-full mb-8">
                        <AlertTriangle className="text-red-500 w-8 h-8" />
                    </div>

                    <h2 className="text-3xl font-bold text-brand-blue mb-8 leading-tight">
                        Muitas pessoas se frustram com energia solar não por causa da placa, mas porque:
                    </h2>

                    <div className="space-y-4 mb-10 text-left md:text-center max-w-xl mx-auto">
                        <p className="text-gray-700 text-lg flex items-center md:justify-center gap-3">
                            <span className="w-1.5 h-1.5 bg-red-400 rounded-full flex-shrink-0"></span>
                            Compraram sem entender o projeto
                        </p>
                        <p className="text-gray-700 text-lg flex items-center md:justify-center gap-3">
                            <span className="w-1.5 h-1.5 bg-red-400 rounded-full flex-shrink-0"></span>
                            Confiaram só na promessa de economia
                        </p>
                        <p className="text-gray-700 text-lg flex items-center md:justify-center gap-3">
                            <span className="w-1.5 h-1.5 bg-red-400 rounded-full flex-shrink-0"></span>
                            Não sabiam se o sistema era adequado para a casa
                        </p>
                        <p className="text-gray-700 text-lg flex items-center md:justify-center gap-3">
                            <span className="w-1.5 h-1.5 bg-red-400 rounded-full flex-shrink-0"></span>
                            Ficaram inseguras com regras e taxação
                        </p>
                        <p className="text-gray-700 text-lg flex items-center md:justify-center gap-3">
                            <span className="w-1.5 h-1.5 bg-red-400 rounded-full flex-shrink-0"></span>
                            Descobriram problemas depois da instalação
                        </p>
                    </div>

                    <div className="bg-brand-blue/5 p-6 rounded-2xl border border-brand-blue/10">
                        <p className="text-xl font-medium text-brand-blue">
                            👉 A placa pode ser boa.
                            <br />
                            <strong className="text-brand-orange">O projeto mal feito é que gera prejuízo.</strong>
                        </p>
                    </div>
                </div>
            </div>
        </section>
    )
}

export default Problem
