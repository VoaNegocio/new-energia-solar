import { useState } from 'react'
import { ArrowRight, CheckCircle, Calculator, ChevronDown } from 'lucide-react'
import { useNavigate } from 'react-router-dom'

const FinalCTA = () => {
    const navigate = useNavigate()
    const [formData, setFormData] = useState({
        name: '',
        whatsapp: '',
        billValue: ''
    })
    const [isDropdownOpen, setIsDropdownOpen] = useState(false)

    const handleChange = (e) => {
        const { name, value } = e.target
        setFormData(prev => ({
            ...prev,
            [name]: value
        }))
    }

    const billOptions = [
        "Até R$200",
        "De R$200 a R$300",
        "De R$300 a R$500",
        "Acima de R$500"
    ]

    const handleSubmit = async (e) => {
        e.preventDefault()

        // 1. Enviar para Webhook (CRM, n8n, Zapier)
        // Substitua pela URL do seu webhook real
        const webhookUrl = "https://hook.us1.make.com/bzgcth851gevkhsr4p821hqcscrwk3nu"

        if (webhookUrl) {
            try {
                await fetch(webhookUrl, {
                    method: 'POST',
                    headers: { 'Content-Type': 'application/json' },
                    body: JSON.stringify({
                        name: formData.name,
                        whatsapp: formData.whatsapp,
                        billValue: formData.billValue,
                        submittedAt: new Date().toISOString(),
                        source: "Landing Page Solar"
                    }),
                    mode: 'no-cors' // Importante para evitar erros de CORS em webhooks simples
                })
            } catch (error) {
                console.error("Erro ao enviar para webhook:", error)
            }
        }



        // 3. Redirecionar para página de Obrigado
        navigate('/obrigado')
    }

    return (
        <section id="contact" className="py-20 relative overflow-hidden">
            {/* Video Background with Masking Effects */}
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
                {/* Lighter overlays to show more video while keeping blue tint */}
                <div className="absolute inset-0 bg-brand-blue/75 mix-blend-multiply"></div>
                <div className="absolute inset-0 bg-brand-blue/60 backdrop-blur-[2px]"></div>
                <div className="absolute inset-0 bg-gradient-to-t from-brand-blue via-brand-blue/70 to-transparent"></div>
            </div>

            <div className="container-custom relative z-10">
                <div className="grid lg:grid-cols-2 gap-12 items-center">

                    {/* Left: Copy */}
                    <div className="text-white">
                        <div className="inline-flex items-center gap-2 px-3 py-1 bg-white/10 text-white rounded-full text-xs font-bold mb-6 backdrop-blur-sm border border-white/20">
                            <Calculator size={14} className="text-brand-orange" />
                            ANÁLISE DE VIABILIDADE
                        </div>

                        <h2 className="text-3xl lg:text-5xl font-extrabold mb-6 leading-tight">
                            Entenda se a energia solar <span className="text-brand-orange">faz sentido</span> para a sua casa.
                        </h2>

                        <p className="text-lg text-brand-lightBlue/80 mb-8 leading-relaxed">
                            Antes de investir, converse com um especialista e veja se o projeto realmente é viável para o seu cenário — sem compromisso e sem pressão.
                        </p>

                        <div className="space-y-4 text-brand-lightBlue/90 font-medium">
                            <div className="flex items-center gap-3">
                                <CheckCircle className="text-brand-orange" size={20} />
                                <span>Simulação personalizada para seu consumo</span>
                            </div>
                            <div className="flex items-center gap-3">
                                <CheckCircle className="text-brand-orange" size={20} />
                                <span>Análise de retorno financeiro real</span>
                            </div>
                            <div className="flex items-center gap-3">
                                <CheckCircle className="text-brand-orange" size={20} />
                                <span>Explicação técnica sem "mensalês"</span>
                            </div>
                        </div>
                    </div>

                    {/* Right: Form Card */}
                    <div className="bg-white rounded-2xl shadow-2xl p-6 md:p-8 lg:p-10">
                        <h3 className="text-2xl font-bold text-brand-blue mb-2">
                            Faça uma análise inicial gratuita
                        </h3>
                        <p className="text-gray-500 text-sm mb-6">
                            Preencha os dados abaixo para entender se a energia solar é uma boa decisão para você.
                        </p>

                        <form onSubmit={handleSubmit} className="space-y-6">
                            {/* Name */}
                            <div>
                                <label htmlFor="name" className="block text-sm font-semibold text-gray-700 mb-2">Nome</label>
                                <input
                                    type="text"
                                    id="name"
                                    name="name"
                                    required
                                    value={formData.name}
                                    onChange={handleChange}
                                    className="w-full px-4 py-3 rounded-xl bg-gray-50 shadow-inner border border-gray-200 focus:border-brand-orange focus:ring-2 focus:ring-brand-orange/20 outline-none transition-all placeholder-gray-400 text-gray-800 text-base"
                                    placeholder="Seu nome completo"
                                />
                            </div>

                            {/* WhatsApp */}
                            <div>
                                <label htmlFor="whatsapp" className="block text-sm font-semibold text-gray-700 mb-2">WhatsApp</label>
                                <input
                                    type="tel"
                                    id="whatsapp"
                                    name="whatsapp"
                                    required
                                    value={formData.whatsapp}
                                    onChange={handleChange}
                                    className="w-full px-4 py-3 rounded-xl bg-gray-50 shadow-inner border border-gray-200 focus:border-brand-orange focus:ring-2 focus:ring-brand-orange/20 outline-none transition-all placeholder-gray-400 text-gray-800 text-base"
                                    placeholder="(00) 00000-0000"
                                />
                            </div>

                            {/* Bill Value - Custom Dropdown */}
                            <div className="relative">
                                <label className="block text-sm font-semibold text-gray-700 mb-2">Gasto médio mensal com energia</label>
                                <button
                                    type="button"
                                    onClick={() => setIsDropdownOpen(!isDropdownOpen)}
                                    className="w-full px-4 py-3 rounded-xl bg-gray-50 shadow-inner border border-gray-200 focus:border-brand-orange focus:ring-2 focus:ring-brand-orange/20 outline-none transition-all text-gray-800 text-base text-left flex items-center justify-between"
                                >
                                    <span className={formData.billValue ? "text-gray-800" : "text-gray-400"}>
                                        {formData.billValue || "Selecione uma opção..."}
                                    </span>
                                    <ChevronDown
                                        size={20}
                                        className={`text-gray-500 transition-transform duration-300 ${isDropdownOpen ? 'rotate-180' : ''}`}
                                    />
                                </button>

                                {isDropdownOpen && (
                                    <div className="absolute z-20 top-full left-0 right-0 mt-2 bg-white rounded-xl shadow-xl border border-gray-100 overflow-hidden animate-in fade-in zoom-in-95 duration-200">
                                        {billOptions.map((option, index) => (
                                            <button
                                                key={index}
                                                type="button"
                                                onClick={() => {
                                                    setFormData(prev => ({ ...prev, billValue: option }))
                                                    setIsDropdownOpen(false)
                                                }}
                                                className="w-full px-4 py-3 text-left hover:bg-brand-orange/5 hover:text-brand-orange transition-colors flex items-center justify-between group"
                                            >
                                                <span className={`text-base ${formData.billValue === option ? 'font-bold text-brand-orange' : 'text-gray-700'}`}>
                                                    {option}
                                                </span>
                                                {formData.billValue === option && (
                                                    <CheckCircle size={16} className="text-brand-orange" />
                                                )}
                                            </button>
                                        ))}
                                    </div>
                                )}
                            </div>

                            {/* Submit Button */}
                            <button
                                type="submit"
                                className="w-full btn-3d-primary flex items-center justify-center gap-2 text-lg py-4 mt-6"
                            >
                                <span className="relative z-10 flex items-center gap-2">
                                    Quero entender se faz sentido pra mim
                                </span>
                            </button>

                            <p className="text-center text-xs text-gray-400 mt-4 flex items-center justify-center gap-2">
                                <span>Análise inicial sem custo</span>
                                <span className="w-1 h-1 bg-gray-300 rounded-full"></span>
                                <span>Atendimento humano</span>
                                <span className="w-1 h-1 bg-gray-300 rounded-full"></span>
                                <span>Sem compromisso</span>
                            </p>
                        </form>
                    </div>

                </div>
            </div>
        </section>
    )
}

export default FinalCTA
