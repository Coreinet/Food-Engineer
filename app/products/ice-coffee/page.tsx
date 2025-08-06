'use client'
import Link from 'next/link'
import Image from 'next/image'
import { useState, useEffect } from 'react'
import Navbar from '../../components/Navbar'

export default function IceCoffee() {
  const [isVisible, setIsVisible] = useState(false)
  const [selectedImage, setSelectedImage] = useState(0)
  const [isAnimating, setIsAnimating] = useState(false)

  useEffect(() => {
    setIsVisible(true)
  }, [])

  const images = [
    '/images/ice_coffee_1.jpg',
    '/images/ice_coffee_2.jpg'
  ]

  const handleImageChange = (newIndex: number) => {
    if (isAnimating) return
    setIsAnimating(true)
    setSelectedImage(newIndex)
    setTimeout(() => setIsAnimating(false), 500)
  }

  return (
    <div className="min-h-screen bg-white">
      <Navbar />

      {/* Hero Section */}
      <section className="pt-24 pb-8 px-2 sm:px-6 bg-gradient-to-br from-brown-50 to-orange-50">
        <div className="max-w-6xl mx-auto">
          <div className="grid grid-cols-1 md:grid-cols-2 gap-6 sm:gap-12 items-center">
            {/* Product Image Gallery - mobile optimized */}
            <div className={`text-center ${isVisible ? 'animate-slide-in' : 'opacity-0 translate-x-full'}`}> 
              <div className="relative flex flex-col items-center">
                {/* Main Image */}
                <div className="w-40 h-40 xs:w-56 xs:h-56 sm:w-80 sm:h-80 md:w-96 md:h-96 rounded-2xl bg-gradient-to-br from-brown-100 to-orange-100 border-8 border-white shadow-2xl overflow-hidden relative flex items-center justify-center mx-auto">
                  <div className={`w-full h-full transition-all duration-500 ease-in-out ${isAnimating ? 'scale-105' : 'scale-100'}`}> 
                    <Image
                      src={images[selectedImage]}
                      alt="Ice Coffee Product"
                      width={400}
                      height={400}
                      className="w-full h-full object-cover"
                    />
                  </div>
                </div>
                {/* Arrow Buttons - below image on mobile */}
                <div className="flex justify-center items-center gap-4 mt-4 sm:mt-6">
                  <button
                    onClick={() => handleImageChange(selectedImage === 0 ? images.length - 1 : selectedImage - 1)}
                    className="bg-white/90 hover:bg-white text-gray-800 hover:text-orange-600 w-8 h-8 sm:w-10 sm:h-10 rounded-full flex items-center justify-center shadow hover:shadow-md transition-all duration-300 hover:scale-110 backdrop-blur-sm z-10 text-lg sm:text-xl p-0"
                  >
                    <svg className="w-4 h-4 sm:w-6 sm:h-6" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                      <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M15 19l-7-7 7-7" />
                    </svg>
                  </button>
                  <button
                    onClick={() => handleImageChange(selectedImage === images.length - 1 ? 0 : selectedImage + 1)}
                    className="bg-white/90 hover:bg-white text-gray-800 hover:text-orange-600 w-8 h-8 sm:w-10 sm:h-10 rounded-full flex items-center justify-center shadow hover:shadow-md transition-all duration-300 hover:scale-110 backdrop-blur-sm z-10 text-lg sm:text-xl p-0"
                  >
                    <svg className="w-4 h-4 sm:w-6 sm:h-6" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                      <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M9 5l7 7-7 7" />
                    </svg>
                  </button>
                </div>
                {/* Navigation Dots */}
                <div className="flex justify-center space-x-2 mt-3 sm:mt-4">
                  {images.map((_, index) => (
                    <button
                      key={index}
                      onClick={() => handleImageChange(index)}
                      className={`w-3 h-3 rounded-full ${selectedImage === index ? 'bg-orange-600 scale-125' : 'bg-gray-300 hover:bg-gray-400'} transition-colors`}
                    />
                  ))}
                </div>
                {/* Quality badge */}
                <div className="absolute -top-4 -right-4 bg-orange-600 text-white px-3 py-1 rounded-full text-xs sm:text-sm font-bold">Premium Quality</div>
              </div>
            </div>
            {/* Product Info */}
            <div className={`space-y-4 sm:space-y-6 ${isVisible ? 'animate-fade-in' : 'opacity-0'}`}> 
              <div>
                <h1 className="text-2xl sm:text-5xl md:text-6xl font-bold text-gray-900 mb-2 sm:mb-4">Ice Coffee</h1>
                <p className="text-sm sm:text-xl text-gray-600 mb-3 sm:mb-6">Refreshing ice coffee beverages with diverse flavors and superior quality, perfect for hot weather refreshment.</p>
                <div className="flex flex-wrap items-center gap-2 sm:gap-4 justify-center sm:justify-start">
                  <span className="text-xl sm:text-2xl">☕</span>
                  <span className="text-xl sm:text-2xl">🧊</span>
                  <span className="text-xl sm:text-2xl">🥤</span>
                  <span className="text-xl sm:text-2xl">🍃</span>
                </div>
              </div>
              <div className="space-y-2 sm:space-y-4">
                <h3 className="text-lg sm:text-2xl font-bold text-gray-900">Key Features</h3>
                <div className="grid grid-cols-1 xs:grid-cols-2 gap-2 sm:gap-4">
                  <div className="flex items-center">
                    <div className="w-3 h-3 bg-orange-600 rounded-full mr-2 sm:mr-3"></div>
                    <span className="text-xs sm:text-gray-700">Various Flavors</span>
                  </div>
                  <div className="flex items-center">
                    <div className="w-3 h-3 bg-orange-600 rounded-full mr-2 sm:mr-3"></div>
                    <span className="text-xs sm:text-gray-700">No Excessive Caffeine</span>
                  </div>
                  <div className="flex items-center">
                    <div className="w-3 h-3 bg-orange-600 rounded-full mr-2 sm:mr-3"></div>
                    <span className="text-xs sm:text-gray-700">Suitable for All Ages</span>
                  </div>
                  <div className="flex items-center">
                    <div className="w-3 h-3 bg-orange-600 rounded-full mr-2 sm:mr-3"></div>
                    <span className="text-xs sm:text-gray-700">Premium Coffee Beans</span>
                  </div>
                </div>
              </div>
            </div>
          </div>
        </div>
      </section>

      {/* Product Details */}
      <section className="py-8 sm:py-16 px-2 sm:px-6 bg-gray-50">
        <div className="max-w-6xl mx-auto">
          <div className="grid grid-cols-1 md:grid-cols-2 gap-6 sm:gap-12">
            {/* Production Process */}
            <div className={`space-y-6 ${isVisible ? 'animate-fade-in' : 'opacity-0'}`} style={{animationDelay: '0.4s'}}>
              <h2 className="text-3xl font-bold text-gray-900">Production Process</h2>
              <div className="space-y-4">
                <div className="bg-white p-6 rounded-lg shadow-sm">
                  <h3 className="text-xl font-bold text-gray-900 mb-2">1. Coffee Bean Selection</h3>
                  <p className="text-gray-600">Carefully selected premium coffee beans from various regions for optimal flavor profiles.</p>
                </div>
                <div className="bg-white p-6 rounded-lg shadow-sm">
                  <h3 className="text-xl font-bold text-gray-900 mb-2">2. Brewing & Extraction</h3>
                  <p className="text-gray-600">Advanced brewing techniques to extract the perfect coffee flavor and aroma.</p>
                </div>
                <div className="bg-white p-6 rounded-lg shadow-sm">
                  <h3 className="text-xl font-bold text-gray-900 mb-2">3. Flavor Formulation</h3>
                  <p className="text-gray-600">Expert blending of coffee with natural flavors and sweeteners for balanced taste.</p>
                </div>
                <div className="bg-white p-6 rounded-lg shadow-sm">
                  <h3 className="text-xl font-bold text-gray-900 mb-2">4. Cooling & Packaging</h3>
                  <p className="text-gray-600">Rapid cooling and aseptic packaging to preserve freshness and quality.</p>
                </div>
              </div>
            </div>

            {/* Product Varieties */}
            <div className={`space-y-6 ${isVisible ? 'animate-fade-in' : 'opacity-0'}`} style={{animationDelay: '0.6s'}}>
              <h2 className="text-3xl font-bold text-gray-900">Available Varieties</h2>
              <div className="space-y-4">
                {[
                  { name: 'Classic Ice Coffee', icon: '☕', description: 'Traditional ice coffee with rich coffee flavor' },
                  { name: 'Vanilla Ice Coffee', icon: '🍦', description: 'Smooth vanilla-flavored ice coffee' },
                  { name: 'Caramel Ice Coffee', icon: '🍯', description: 'Sweet caramel ice coffee with rich taste' },
                  { name: 'Mocha Ice Coffee', icon: '🍫', description: 'Chocolate-infused ice coffee blend' },
                  { name: 'Hazelnut Ice Coffee', icon: '🌰', description: 'Nutty hazelnut ice coffee variety' }
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
      <section className="py-8 sm:py-16 px-2 sm:px-6 bg-gray-50">
        <div className="max-w-6xl mx-auto">
          <div className="text-center mb-12">
            <h2 className="text-4xl font-bold text-gray-900 mb-4">Product Benefits</h2>
            <div className="w-20 h-1 bg-orange-600 mx-auto"></div>
          </div>
          
          <div className="grid grid-cols-1 md:grid-cols-3 gap-6 sm:gap-8">
            {[
              {
                title: 'Refreshment',
                description: 'Perfect cooling beverage for hot weather with energizing properties',
                icon: '🧊'
              },
              {
                title: 'Flavor Variety',
                description: 'Multiple flavor options to suit different taste preferences',
                icon: '🍃'
              },
              {
                title: 'Health Conscious',
                description: 'Controlled caffeine levels suitable for all age groups',
                icon: '💚'
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
      <section className="py-8 sm:py-16 px-2 sm:px-6 bg-white">
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

      {/* Global fade-in animation */}
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