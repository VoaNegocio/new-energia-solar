import { CheckCircle, ArrowRight } from 'lucide-react'
import { Link } from 'react-router-dom'

const ThankYou = () => {
    return (
        <div className="min-h-screen bg-white flex flex-col items-center justify-center p-4">
            <div className="max-w-md w-full text-center">
                <div className="bg-green-100 w-24 h-24 rounded-full flex items-center justify-center mx-auto mb-8 animate-in zoom-in duration-300">
                    <CheckCircle className="w-12 h-12 text-green-600" />
                </div>

                <h1 className="text-3xl font-bold text-gray-900 mb-4">
                    Solicitação Recebida!
                </h1>

                <p className="text-gray-600 mb-8 text-lg">
                    Recebemos seus dados com sucesso. Em instantes, um de nossos especialistas entrará em contato para apresentar sua análise personalizada.
                </p>

                <div className="space-y-4">
                    <Link
                        to="/"
                        className="btn-3d-primary w-full py-4 flex items-center justify-center gap-2 text-lg"
                    >
                        <span className="relative z-10 font-bold">
                            Voltar para o Início
                        </span>
                    </Link>
                </div>
            </div>
        </div>
    )
}

export default ThankYou
