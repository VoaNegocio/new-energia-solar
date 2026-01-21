import { MessageCircle } from 'lucide-react'

const WhatsAppButton = () => {
    return (
        <a
            href="https://wa.me/5500000000000"
            target="_blank"
            rel="noopener noreferrer"
            className="fixed bottom-6 right-6 z-50 bg-[#25D366] hover:bg-[#20bd5a] text-white p-4 rounded-full shadow-lg transition-transform hover:scale-110 flex items-center justify-center animate-pulse-slow"
            aria-label="Falar no WhatsApp"
        >
            <MessageCircle size={32} />
            <span className="absolute right-full mr-3 bg-white text-gray-800 text-xs font-bold py-1 px-3 rounded-lg shadow-md whitespace-nowrap opacity-0 hover:opacity-100 transition-opacity pointer-events-none group-hover:opacity-100 hidden md:block">
                Fale conosco agora!
            </span>
        </a>
    )
}

export default WhatsAppButton
