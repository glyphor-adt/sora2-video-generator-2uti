import React from 'react'

const tiers = [
  {
    name: 'Starter',
    price: 'Free',
    description: 'Perfect for individuals getting started with AI video generation.',
    features: ['Up to 3 video generations per month', 'Standard video quality', 'Basic support'],
    cta: 'Get Started',
  },
  {
    name: 'Pro',
    price: '$29/month',
    description: 'For professionals needing more video output and advanced features.',
    features: [
      'Unlimited video generations',
      'High-definition video quality',
      'Priority support',
      'Commercial usage rights',
    ],
    cta: 'Upgrade to Pro',
    mostPopular: true,
  },
  {
    name: 'Enterprise',
    price: 'Contact Us',
    description: 'Custom solutions for large organizations with unique needs.',
    features: [
      'Dedicated account manager',
      'Custom AI model training',
      'On-premise deployment options',
      '24/7 support',
    ],
    cta: 'Contact Us',
  },
]

function Pricing() {
  return (
    <section className="py-20 bg-muted">
      <div className="container mx-auto px-4">
        <h2 className="text-5xl font-bold text-gray-800 text-center mb-12">Simple, Transparent Pricing</h2>
        <div className="grid grid-cols-1 md:grid-cols-3 gap-8">
          {tiers.map((tier, index) => (
            <div key={index}
              className={`bg-white rounded-xl shadow-xl p-8 ${tier.mostPopular ? 'shadow-2xl border-2 border-blue-500' : ''}`}
            >
              {tier.mostPopular && (
                <div className="text-center">
                  <span className="inline-flex items-center justify-center px-3 py-1.5 rounded-full text-xs font-medium bg-blue-100 text-blue-800 mb-4">
                    Most Popular
                  </span>
                </div>
              )}
              <h3 className="text-2xl font-semibold text-gray-700 mb-2 text-center">{tier.name}</h3>
              <p className="text-gray-600 text-center">{tier.description}</p>
              <div className="text-4xl font-bold text-blue-600 text-center my-6">{tier.price}</div>
              <ul className="list-disc list-inside text-gray-600 mb-6">
                {tier.features.map((feature, i) => (
                  <li key={i}>{feature}</li>
                ))}
              </ul>
              <div className="text-center">
                <a href="#" className="bg-blue-600 hover:bg-blue-700 text-white px-6 py-3 rounded-xl inline-block transition-all duration-300">
                  {tier.cta}
                </a>
              </div>
            </div>
          ))}
        </div>
      </div>
    </section>
  )
}

export default Pricing
