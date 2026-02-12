import { useState, useEffect } from 'react'
import { Link } from 'react-scroll'
import { Menu, X } from 'lucide-react'

const Header = () => {
    const [isOpen, setIsOpen] = useState(false)
    const [scrolled, setScrolled] = useState(false)

    useEffect(() => {
        const handleScroll = () => {
            setScrolled(window.scrollY > 20)
        }
        window.addEventListener('scroll', handleScroll)
        return () => window.removeEventListener('scroll', handleScroll)
    }, [])

    const navLinks = [
        { name: 'Início', to: 'hero' },
        { name: 'Para quem é', to: 'identification' },
        { name: 'Diferenciais', to: 'differentials' },
        { name: 'Depoimentos', to: 'social-proof' },
    ]

    return (
        <header
            className={`fixed top-0 left-0 right-0 z-50 transition-all duration-300 ${scrolled ? 'bg-white/90 backdrop-blur-md shadow-sm py-3' : 'bg-transparent py-5'
                }`}
        >
            <div className="container-custom flex justify-between items-center">
                {/* Logo */}
                <Link to="hero" smooth={true} duration={500} className="cursor-pointer block max-w-[60%]">
                    <img
                        src="/logo-new-energia.png"
                        alt="New Energia Solar"
                        className="h-8 md:h-12 w-auto object-contain"
                    />
                </Link>

                {/* Desktop Nav */}
                <nav className="hidden md:flex items-center gap-8">
                    {navLinks.map((link) => (
                        <Link
                            key={link.name}
                            to={link.to}
                            smooth={true}
                            duration={500}
                            className="text-brand-blue hover:text-brand-orange font-medium cursor-pointer transition-colors"
                        >
                            {link.name}
                        </Link>
                    ))}
                    <Link
                        to="contact"
                        smooth={true}
                        duration={500}
                        className="btn-primary py-2 px-6 text-sm cursor-pointer"
                    >
                        Entrar em contato via WhatsApp
                    </Link>
                </nav>

                {/* Mobile Menu Button */}
                <button
                    className="md:hidden text-brand-blue flex-shrink-0"
                    onClick={() => setIsOpen(!isOpen)}
                >
                    {isOpen ? <X size={28} /> : <Menu size={28} />}
                </button>

                {/* Mobile Menu */}
                {isOpen && (
                    <div className="absolute top-full left-0 right-0 bg-white border-t border-gray-100 shadow-lg md:hidden flex flex-col p-4 animate-fade-in-down">
                        {navLinks.map((link) => (
                            <Link
                                key={link.name}
                                to={link.to}
                                smooth={true}
                                duration={500}
                                className="py-3 text-brand-blue font-medium border-b border-gray-50 last:border-0"
                                onClick={() => setIsOpen(false)}
                            >
                                {link.name}
                            </Link>
                        ))}
                        <Link
                            to="contact"
                            smooth={true}
                            duration={500}
                            className="mt-4 btn-primary w-full text-center cursor-pointer"
                            onClick={() => setIsOpen(false)}
                        >
                            Entrar em contato via WhatsApp
                        </Link>
                    </div>
                )}
            </div>
        </header>
    )
}

export default Header
