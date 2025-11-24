import React from 'react'
import { Zap, Shield, TrendingUp, Clock, Code, Brush } from 'lucide-react'

const features = [
  {
    icon: Zap,
    title: 'Generate Videos in Seconds, Not Hours',
    description: 'Our AI algorithms rapidly transform your text prompts into high-quality video content.',
  },
  {
    icon: Shield,
    title: 'Enterprise-Grade Security for Your Content',
    description: 'Benefit from robust security measures, ensuring your creations are protected at all times.',
  },
  {
    icon: TrendingUp,
    title: 'Scale Your Video Production Effortlessly',
    description: 'Easily handle a large volume of video projects without compromising quality or turnaround time.',
  },
    {
    icon: Clock,
    title: 'Real-Time Video Generation & Iteration',
    description: 'See your videos come to life in real-time, allowing for immediate feedback and adjustments.',
  },
  {
    icon: Code,
    title: 'Seamless API Integration',
    description: 'Integrate Sora2 into your existing workflows with our developer-friendly API.',
  },
  {
    icon: Brush,
    title: 'Limitless Creative Possibilities',
    description: 'Explore a wide range of styles, moods, and effects to bring your unique vision to life.',
  },
]

function Features() {
  return (
    <section className="py-20 bg-gray-100">
      <div className="container mx-auto px-4">
        <h2 className="text-5xl font-bold text-gray-800 text-center mb-12">Empowering Your Video Creation Journey</h2>
        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-8">
          {features.map((feature, index) => (
            <div key={index} className="bg-white rounded-xl shadow-xl hover:shadow-2xl hover:-translate-y-1 transition-all duration-300 p-6">
              <feature.icon className="h-8 w-8 text-blue-600 mb-4" aria-hidden="true" />
              <h3 className="text-xl font-semibold text-gray-700 mb-2">{feature.title}</h3>
              <p className="text-gray-600 leading-relaxed">{feature.description}</p>
            </div>
          ))}
        </div>
      </div>
    </section>
  )
}

export default Features
