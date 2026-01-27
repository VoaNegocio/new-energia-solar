import { MessageSquare, FileText, Settings, Hammer, Eye } from 'lucide-react'

const HowItWorks = () => {
    const steps = [
        {
            icon: <MessageSquare size={24} />,
            title: "Conversa inicial",
            description: "Para entender sua casa e consumo"
        },
        {
            icon: <FileText size={24} />,
            title: "Análise técnica",
            description: "Explicação clara do projeto"
        },
        {
            icon: <Settings size={24} />,
            title: "Ajustes",
            description: "Até fazer sentido pra você"
        },
        {
            icon: <Hammer size={24} />,
            title: "Instalação",
            description: "Com acabamento profissional"
        },
        {
            icon: <Eye size={24} />,
            title: "Você acompanha tudo",
            description: "Sem surpresas"
        }
    ]

    return (
        <section className="py-12 lg:py-20 bg-white">
            <div className="container-custom">
                <div className="text-center mb-10 lg:mb-16">
                    <h2 className="text-2xl lg:text-3xl font-bold text-brand-blue mb-4">
                        Como funciona a consultoria da New:
                    </h2>
                </div>

                <div className="relative">
                    {/* Connecting Line (Desktop) */}
                    <div className="hidden lg:block absolute top-8 left-0 right-0 h-1 bg-brand-gray -z-10 transform translate-y-4"></div>

                    <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-5 gap-8">
                        {steps.map((step, index) => (
                            <div key={index} className="relative flex flex-col items-center text-center bg-white p-4">
                                <div className="w-16 h-16 rounded-full bg-brand-blue text-white flex items-center justify-center font-bold text-xl mb-6 shadow-lg border-4 border-white relative z-10 mx-auto">
                                    {index + 1}
                                </div>
                                <h3 className="text-lg font-bold text-brand-blue mb-2">{step.title}</h3>
                                <p className="text-gray-600 text-sm">{step.description}</p>
                            </div>
                        ))}
                    </div>
                </div>
            </div>
        </section>
    )
}

export default HowItWorks
