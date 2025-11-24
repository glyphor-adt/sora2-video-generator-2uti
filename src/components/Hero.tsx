import React from 'react'
import { Zap } from 'lucide-react'

function Hero() {
  return (
    <header className="relative py-24 bg-gradient-to-br from-blue-600 via-purple-600 to-pink-600 overflow-hidden">
      <div className="absolute inset-0">
        <div className="absolute inset-0 bg-[radial-gradient(50%_50%_at_50%_50%,rgba(255,255,255,0.05)_0%,transparent_50%)]" />
      </div>
      <div className="relative z-10 container mx-auto px-4">
        <h1 className="text-6xl font-bold text-white text-center md:text-left text-balance">Unleash Your Creative Vision with AI-Powered Video Generation</h1>
        <p className="text-xl text-gray-200 max-w-2xl mt-6 text-center md:text-left">
          Effortlessly transform your ideas into stunning videos. Sora2 makes video creation accessible to everyone.
        </p>
        <div className="mt-12 flex flex-col sm:flex-row items-center justify-center md:justify-start gap-4">
          <a href="#" className="bg-white text-blue-600 hover:bg-blue-50 px-8 py-4 rounded-xl text-lg shadow-xl transition-all duration-300">
            Start Creating
          </a>
          <a href="#" className="border-2 border-gray-300 hover:border-blue-500 text-white px-8 py-4 rounded-xl text-lg transition-all duration-300">
            Learn More
          </a>
        </div>
      </div>
    </header>
  )
}

export default Hero
