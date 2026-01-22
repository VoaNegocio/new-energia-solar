import Header from './components/Header'
import Hero from './components/Hero'
import Identification from './components/Identification'
import Problem from './components/Problem'
import Differentials from './components/Differentials'
import Taxation from './components/Taxation'
import SocialProof from './components/SocialProof'
import HowItWorks from './components/HowItWorks'
import FinalCTA from './components/FinalCTA'
import Footer from './components/Footer'
import WhatsAppButton from './components/WhatsAppButton'

function App() {
  return (
    <div className="min-h-screen flex flex-col w-full overflow-x-hidden">
      <Header />
      <main className="flex-grow">
        <Hero />
        <Identification />
        <Problem />
        <Differentials />
        <Taxation />
        <SocialProof />
        <HowItWorks />
        <FinalCTA />
      </main>
      <Footer />
    </div>
  )
}

export default App
