import React from 'react'
import Navbar from './components/Navbar'
import Header from './components/Header'
import Features from './components/Features'
import MapSection from './components/MapSection'
import Screenshots from './components/Screenshots'
import Design from './components/Design'
import Roadmap from './components/Roadmap'
import CallToAction from './components/CallToAction'
import Footer from './components/Footer'

const App = () => {
  return (
    <>
      <Navbar />
      <Header />
      <main>
        <Features />
        <MapSection />
        <Screenshots />
        <Design />
        <Roadmap />
        <CallToAction />
      </main>
      <Footer />
    </>
  )
}

export default App