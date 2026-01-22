import { BrowserRouter as Router, Routes, Route } from 'react-router-dom'
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
import ThankYou from './components/ThankYou'

const LandingPage = () => (
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

function App() {
  return (
    <Router>
      <Routes>
        <Route path="/" element={<LandingPage />} />
        <Route path="/obrigado" element={<ThankYou />} />
      </Routes>
    </Router>
  )
}

export default App
