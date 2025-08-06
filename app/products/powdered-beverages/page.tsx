'use client'
import Link from 'next/link'
import { useState, useEffect } from 'react'
import Navbar from '../../components/Navbar'

export default function PowderedBeverages() {
  const [isVisible, setIsVisible] = useState(false)

  useEffect(() => {
    setIsVisible(true)
  }, [])

  return (
    <div className="min-h-screen bg-white">
      <Navbar />

      {/* Hero Section */}
      <section className="pt-24 pb-16 px-6 bg-gradient-to-br from-purple-50 to-pink-50">
        <div className="max-w-6xl mx-auto">
          <div className="grid md:grid-cols-2 gap-12 items-center">
            {/* Product Image */}
            <div className={`text-center ${isVisible ? 'animate-slide-in' : 'opacity-0 translate-x-full'}`}>
              <div className="relative">
                <div className="w-96 h-96 rounded-2xl bg-gradient-to-br from-purple-100 to-pink-100 border-8 border-white shadow-2xl overflow-hidden flex items-center justify-center">
                  <div className="text-8xl">🥤</div>
                </div>
                
                {/* Quality badge */}
                <div className="absolute -top-4 -right-4 bg-purple-600 text-white px-4 py-2 rounded-full text-sm font-bold">
                  Instant Mix
                </div>
              </div>
            </div>

            {/* Product Info */}
            <div className={`space-y-6 ${isVisible ? 'animate-fade-in' : 'opacity-0'}`}>
              <div>
                <h1 className="text-5xl md:text-6xl font-bold text-gray-900 mb-4">Powdered Beverages</h1>
                <p className="text-xl text-gray-600 mb-6">
                  Ready-to-use powdered beverages for instant preparation with long shelf life and convenient packaging.
                </p>
                <div className="flex items-center space-x-4">
                  <span className="text-2xl">🥤</span>
                  <span className="text-2xl">⚡</span>
                  <span className="text-2xl">📦</span>
                  <span className="text-2xl">🌟</span>
                </div>
              </div>

              <div className="space-y-4">
                <h3 className="text-2xl font-bold text-gray-900">Key Features</h3>
                <div className="grid grid-cols-2 gap-4">
                  <div className="flex items-center">
                    <div className="w-3 h-3 bg-purple-600 rounded-full mr-3"></div>
                    <span className="text-gray-700">Instant Preparation</span>
                  </div>
                  <div className="flex items-center">
                    <div className="w-3 h-3 bg-purple-600 rounded-full mr-3"></div>
                    <span className="text-gray-700">Long Shelf Life</span>
                  </div>
                  <div className="flex items-center">
                    <div className="w-3 h-3 bg-purple-600 rounded-full mr-3"></div>
                    <span className="text-gray-700">Convenient Packaging</span>
                  </div>
                  <div className="flex items-center">
                    <div className="w-3 h-3 bg-purple-600 rounded-full mr-3"></div>
                    <span className="text-gray-700">Multiple Flavors</span>
                  </div>
                </div>
              </div>
            </div>
          </div>
        </div>
      </section>

      {/* Product Details */}
      <section className="py-16 px-6">
        <div className="max-w-6xl mx-auto">
          <div className="grid md:grid-cols-2 gap-12">
            {/* Production Process */}
            <div className={`space-y-6 ${isVisible ? 'animate-fade-in' : 'opacity-0'}`} style={{animationDelay: '0.4s'}}>
              <h2 className="text-3xl font-bold text-gray-900">Production Process</h2>
              <div className="space-y-4">
                <div className="bg-gray-50 p-6 rounded-lg">
                  <h3 className="text-xl font-bold text-gray-900 mb-2">1. Ingredient Selection</h3>
                  <p className="text-gray-600">Careful selection of high-quality ingredients for optimal taste and nutrition.</p>
                </div>
                <div className="bg-gray-50 p-6 rounded-lg">
                  <h3 className="text-xl font-bold text-gray-900 mb-2">2. Powder Formulation</h3>
                  <p className="text-gray-600">Expert blending and processing to create instant-dissolving powder mixtures.</p>
                </div>
                <div className="bg-gray-50 p-6 rounded-lg">
                  <h3 className="text-xl font-bold text-gray-900 mb-2">3. Quality Control</h3>
                  <p className="text-gray-600">Rigorous testing to ensure consistent taste, texture, and nutritional value.</p>
                </div>
                <div className="bg-gray-50 p-6 rounded-lg">
                  <h3 className="text-xl font-bold text-gray-900 mb-2">4. Packaging & Storage</h3>
                  <p className="text-gray-600">Airtight packaging to maintain freshness and extend shelf life.</p>
                </div>
              </div>
            </div>

            {/* Product Varieties */}
            <div className={`space-y-6 ${isVisible ? 'animate-fade-in' : 'opacity-0'}`} style={{animationDelay: '0.6s'}}>
              <h2 className="text-3xl font-bold text-gray-900">Available Varieties</h2>
              <div className="space-y-4">
                {[
                  { name: 'Chocolate Milk Powder', icon: '🍫', description: 'Rich chocolate milk powder for instant preparation' },
                  { name: 'Strawberry Powder', icon: '🍓', description: 'Sweet strawberry powder drink mix' },
                  { name: 'Orange Powder', icon: '🍊', description: 'Tangy orange powder beverage' },
                  { name: 'Vanilla Powder', icon: '🍦', description: 'Smooth vanilla powder drink' },
                  { name: 'Mixed Fruit Powder', icon: '🥤', description: 'Blend of various fruit flavors' }
                ].map((variety, index) => (
                  <div key={index} className="bg-white border border-gray-200 p-4 rounded-lg hover:shadow-md transition-shadow">
                    <div className="flex items-center space-x-4">
                      <div className="text-3xl">{variety.icon}</div>
                      <div>
                        <h3 className="text-lg font-bold text-gray-900">{variety.name}</h3>
                        <p className="text-gray-600">{variety.description}</p>
                      </div>
                    </div>
                  </div>
                ))}
              </div>
            </div>
          </div>
        </div>
      </section>

      {/* Benefits Section */}
      <section className="py-16 px-6 bg-gray-50">
        <div className="max-w-6xl mx-auto">
          <div className="text-center mb-12">
            <h2 className="text-4xl font-bold text-gray-900 mb-4">Product Benefits</h2>
            <div className="w-20 h-1 bg-purple-600 mx-auto"></div>
          </div>
          
          <div className="grid md:grid-cols-3 gap-8">
            {[
              {
                title: 'Convenience',
                description: 'Instant preparation with just water, perfect for busy lifestyles',
                icon: '⚡'
              },
              {
                title: 'Portability',
                description: 'Lightweight and compact packaging for easy transport',
                icon: '📦'
              },
              {
                title: 'Longevity',
                description: 'Extended shelf life without refrigeration requirements',
                icon: '⏰'
              }
            ].map((benefit, index) => (
              <div key={index} className={`bg-white p-6 rounded-lg text-center ${isVisible ? 'animate-fade-in' : 'opacity-0'}`} style={{animationDelay: `${0.8 + index * 0.1}s`}}>
                <div className="text-4xl mb-4">{benefit.icon}</div>
                <h3 className="text-xl font-bold text-gray-900 mb-2">{benefit.title}</h3>
                <p className="text-gray-600">{benefit.description}</p>
              </div>
            ))}
          </div>
        </div>
      </section>

      {/* Back to Products */}
      <section className="py-16 px-6 bg-white">
        <div className="max-w-6xl mx-auto text-center">
          <div className="flex flex-col sm:flex-row gap-4 justify-center">
            <Link 
              href="/products"
              className="inline-flex items-center bg-blue-600 text-white px-8 py-3 rounded-lg font-medium hover:bg-blue-700 transition-all duration-300 transform hover:scale-105"
            >
              ← Back to Products
            </Link>
            <Link 
              href="/products"
              className="inline-flex items-center bg-gray-900 text-white px-8 py-3 rounded-lg font-medium hover:bg-gray-800 transition-all duration-300 transform hover:scale-105"
            >
              View All Products →
            </Link>
          </div>
        </div>
      </section>

      <style jsx>{`
        @keyframes fade-in {
          from {
            opacity: 0;
            transform: translateY(20px);
          }
          to {
            opacity: 1;
            transform: translateY(0);
          }
        }
        
        @keyframes slide-in {
          from {
            opacity: 0;
            transform: translateX(50px);
          }
          to {
            opacity: 1;
            transform: translateX(0);
          }
        }
        
        .animate-fade-in {
          animation: fade-in 1s ease-out forwards;
        }
        
        .animate-slide-in {
          animation: slide-in 1s ease-out 0.5s forwards;
        }
      `}</style>
    </div>
  )
} 