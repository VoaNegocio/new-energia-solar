import { ClipboardCheck, HardHat, ShieldCheck, Scale } from 'lucide-react'

const Differentials = () => {
    const differentials = [
        {
            icon: <ClipboardCheck size={32} className="text-brand-orange" />,
            title: "Consultoria antes da decisão",
            description: "Você entende o projeto antes de investir."
        },
        {
            icon: <HardHat size={32} className="text-brand-orange" />,
            title: "Acompanhamento de ponta a ponta",
            description: "Do primeiro contato até a instalação final."
        },
        {
            icon: <ShieldCheck size={32} className="text-brand-orange" />,
            title: "Acabamento profissional",
            description: "Projeto bem feito aparece até no telhado."
        },
        {
            icon: <Scale size={32} className="text-brand-orange" />,
            title: "Clareza sobre regras e taxação",
            description: "Sem empurrar decisão. Sem promessas irreais."
        }
    ]

    return (
        <section id="differentials" className="py-20 bg-brand-gray/30">
            <div className="container-custom">
                <div className="max-w-3xl mx-auto text-center mb-16">
                    <h2 className="text-3xl lg:text-4xl font-bold text-brand-blue mb-6">
                        Na New, você não recebe só um orçamento.<br />
                        <span className="text-brand-orange">Você recebe orientação e acompanhamento real.</span>
                    </h2>
                    <p className="text-gray-600 text-lg">O que muda na prática:</p>
                </div>

                <div className="grid md:grid-cols-2 gap-8 max-w-4xl mx-auto">
                    {differentials.map((item, index) => (
                        <div key={index} className="bg-white p-8 rounded-2xl shadow-sm hover:shadow-md transition-shadow border border-gray-100 flex items-start gap-6 group">
                            <div className="bg-brand-blue/5 p-4 rounded-xl group-hover:bg-brand-blue/10 transition-colors">
                                {item.icon}
                            </div>
                            <div>
                                <h3 className="text-xl font-bold text-brand-blue mb-2">{item.title}</h3>
                                <p className="text-gray-600 leading-relaxed">{item.description}</p>
                            </div>
                        </div>
                    ))}
                </div>
            </div>
        </section>
    )
}

export default Differentials
