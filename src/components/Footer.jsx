import { Instagram, Facebook, Phone, Mail } from 'lucide-react'

const Footer = () => {
    return (
        <footer className="bg-brand-blue text-white py-12">
            <div className="container-custom">
                <div className="grid md:grid-cols-3 gap-8 mb-8">
                    {/* Brand */}
                    <div>
                        <div className="mb-4">
                            <img
                                src="/logo-new-energia.png"
                                alt="New Segurança e Energia Solar"
                                className="h-12 md:h-16 w-auto object-contain"
                            />
                        </div>
                        <p className="text-brand-lightBlue/80 text-sm leading-relaxed max-w-xs">
                            Energia solar levada a sério. Projetos residenciais e comerciais com acompanhamento técnico de ponta a ponta.
                        </p>
                    </div>

                    {/* Quick Links */}
                    <div>
                        <h3 className="text-lg font-bold mb-4 text-brand-orange">Links Rápidos</h3>
                        <ul className="space-y-2 text-sm text-brand-lightBlue/80">
                            <li><a href="#hero" className="hover:text-white transition-colors">Início</a></li>
                            <li><a href="#identification" className="hover:text-white transition-colors">Para quem é</a></li>
                            <li><a href="#differentials" className="hover:text-white transition-colors">Diferenciais</a></li>
                            <li><a href="#social-proof" className="hover:text-white transition-colors">Projetos Realizados</a></li>
                        </ul>
                    </div>

                    {/* Contact */}
                    <div>
                        <h3 className="text-lg font-bold mb-4 text-brand-orange">Contato</h3>
                        <div className="space-y-3 text-sm text-brand-lightBlue/80">
                            <a href="#contact" className="flex items-center gap-2 hover:text-white transition-colors">
                                Quero falar com um especialista
                            </a>

                        </div>
                    </div>
                </div>

                <div className="border-t border-white/10 pt-8 text-center text-xs text-brand-lightBlue/60">
                    <p>&copy; 2009 New Segurança e Energia Solar. Todos os direitos reservados.</p>
                </div>
            </div>
        </footer>
    )
}

export default Footer
