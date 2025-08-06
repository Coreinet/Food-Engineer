'use client'
import Link from 'next/link'
import { useState, useEffect } from 'react'
import Image from 'next/image'
import Navbar from '../components/Navbar'

export default function Products() {
  const [isVisible, setIsVisible] = useState(false)
  const [lightboxIdx, setLightboxIdx] = useState(-1)
  const images = [
    '/images/Factory_1.jpg',
    '/images/Factory_2.jpg',
    '/images/Factory_3.jpg',
    '/images/Factory_4.jpg',
    '/images/Factory_5.jpg'
  ]
  const captions = [
    'Production Step 1',
    'Production Step 2',
    'Production Step 3',
    'Production Step 4',
    'Production Step 5'
  ]

  useEffect(() => {
    setIsVisible(true)
  }, [])

  return (
    <div className="min-h-screen bg-white">
      <Navbar />

      {/* Hero Section */}
      <section className="pt-24 pb-10 px-2 sm:px-4 bg-gradient-to-br from-orange-50 to-yellow-50">
        <div className="max-w-6xl mx-auto">
          <div className="text-center mb-8 sm:mb-12">
            <h1 className={`text-3xl sm:text-5xl md:text-6xl font-bold text-gray-900 mb-4 sm:mb-6 ${isVisible ? 'fade-in' : 'opacity-0'}`}>Our Products</h1>
            <p className={`text-base sm:text-xl text-gray-600 max-w-3xl mx-auto ${isVisible ? 'fade-in' : 'opacity-0'}`} style={{animationDelay: '0.2s'}}>High-quality beverages and food products manufactured with 28 years of expertise in food industry engineering</p>
          </div>
        </div>
      </section>

      {/* Products Grid */}
      <section className="py-8 sm:py-16 px-2 sm:px-6">
        <div className="max-w-6xl mx-auto">
          <div className="grid grid-cols-1 sm:grid-cols-2 gap-6 sm:gap-8">
            {[
              {
                id: 'factory-juices',
                title: 'Factory Juices',
                description: 'Industrial juice production with consistent quality and long shelf life',
                image: '/images/juice-product.jpg',
                icon: '🍊',
                features: [
                  'Industrial production standards',
                  'Consistent quality control',
                  'Long shelf life',
                  'Multiple fruit varieties'
                ],
                category: 'Beverages'
              },
              {
                id: 'ice-coffee',
                title: 'Ice Coffee',
                description: 'Refreshing ice coffee beverages with diverse flavors and superior quality',
                image: '/images/ice-coffee-product.jpg',
                icon: '☕',
                features: [
                  'Various attractive flavors',
                  'No excessive caffeine',
                  'Suitable for all ages',
                  'Premium coffee beans'
                ],
                category: 'Beverages'
              }
            ].map((product, index) => (
              <div key={product.id} className={`bg-white rounded-lg shadow-lg overflow-hidden transform hover:scale-105 transition-all duration-300 ${isVisible ? 'fade-in' : 'opacity-0'}`} style={{animationDelay: `${0.4 + index * 0.1}s`}}>
                {/* Product Image */}
                <div className="h-36 sm:h-48 bg-gradient-to-br from-orange-100 to-yellow-100 flex items-center justify-center">
                  <div className="text-4xl sm:text-6xl">{product.icon}</div>
                </div>
                
                {/* Product Info */}
                <div className="p-4 sm:p-6">
                  <div className="flex items-center justify-between mb-1 sm:mb-2">
                    <span className="text-xs sm:text-sm text-blue-600 font-medium">{product.category}</span>
                    <div className="text-lg sm:text-2xl">{product.icon}</div>
                  </div>
                  
                  <h3 className="text-lg sm:text-xl font-bold text-gray-900 mb-1 sm:mb-2">{product.title}</h3>
                  <p className="text-xs sm:text-gray-600 mb-2 sm:mb-4">{product.description}</p>
                  
                  {/* Features */}
                  <div className="space-y-1 sm:space-y-2 mb-4 sm:mb-6">
                    {product.features.map((feature, featureIndex) => (
                      <div key={featureIndex} className="flex items-center">
                        <div className="w-2 h-2 bg-blue-600 rounded-full mr-2 sm:mr-3"></div>
                        <span className="text-xs sm:text-sm text-gray-700">{feature}</span>
                      </div>
                    ))}
                  </div>
                  
                  {/* View Details Button */}
                  <Link
                    href={`/products/${product.id}`}
                    className="block w-full bg-blue-600 text-white text-center py-2 rounded-lg font-medium hover:bg-blue-700 transition-colors text-xs sm:text-base"
                  >
                    View Details
                  </Link>
                </div>
              </div>
            ))}
          </div>
        </div>
      </section>

      {/* Production Gallery Section */}
      <section className="py-8 sm:py-16 px-2 sm:px-6 bg-gradient-to-br from-yellow-50 to-orange-50 relative overflow-hidden">
        {/* Subtle background pattern */}
        <div className="absolute inset-0 opacity-10 pointer-events-none select-none" aria-hidden="true">
          <svg width="100%" height="100%" className="w-full h-full">
            <defs>
              <pattern id="dots" x="0" y="0" width="40" height="40" patternUnits="userSpaceOnUse">
                <circle cx="4" cy="4" r="2" fill="#fbbf24" />
              </pattern>
            </defs>
            <rect width="100%" height="100%" fill="url(#dots)" />
          </svg>
        </div>
        <div className="max-w-6xl mx-auto relative z-10">
          <div className="text-center mb-12">
            <h2 className="text-4xl md:text-5xl font-bold text-gray-900 mb-4">Production Gallery</h2>
            <p className="text-lg text-gray-600">Behind the scenes of our production process</p>
          </div>
          {/* Gallery grid */}
          <div className="grid grid-cols-1 xs:grid-cols-2 sm:grid-cols-3 md:grid-cols-4 lg:grid-cols-5 gap-4 sm:gap-8">
            {images.map((src, idx) => (
              <div
                key={idx}
                className="flex flex-col items-center group fade-in"
                style={{ animationDelay: `${0.1 * idx}s`, animationFillMode: 'both' }}
              >
                <div
                  className="w-32 h-32 xs:w-40 xs:h-40 sm:w-52 sm:h-52 md:w-64 md:h-64 rounded-2xl sm:rounded-3xl overflow-hidden shadow-xl border-4 border-orange-200 bg-white transition-transform duration-300 group-hover:scale-105 group-hover:shadow-2xl group-hover:border-orange-400 cursor-pointer relative"
                  onClick={() => setLightboxIdx(idx)}
                >
                  <Image
                    src={src}
                    alt={captions[idx]}
                    width={400}
                    height={400}
                    className="w-full h-full object-cover rounded-2xl sm:rounded-3xl"
                    draggable={false}
                  />
                  <div className="absolute inset-0 bg-black/0 group-hover:bg-black/10 transition-colors duration-300" />
                </div>
                <div className="mt-2 sm:mt-3 text-xs sm:text-base text-gray-700 font-medium text-center drop-shadow fade-in" style={{ animationDelay: `${0.15 + 0.1 * idx}s`, animationFillMode: 'both' }}>{captions[idx]}</div>
              </div>
            ))}
          </div>
          {/* Lightbox overlay */}
          {lightboxIdx !== -1 && (
            <div
              className="fixed inset-0 bg-black/70 flex items-center justify-center z-50 fade-in"
              onClick={() => setLightboxIdx(-1)}
              style={{ animationDuration: '0.2s' }}
            >
              <div className="relative" onClick={e => e.stopPropagation()}>
                <Image
                  src={images[lightboxIdx]}
                  alt={captions[lightboxIdx]}
                  width={800}
                  height={800}
                  className="max-w-[90vw] max-h-[80vh] rounded-3xl shadow-2xl border-8 border-orange-300 bg-white"
                />
                <button
                  className="absolute -top-6 -right-6 bg-white text-orange-500 rounded-full shadow-lg w-12 h-12 flex items-center justify-center text-3xl font-bold border-2 border-orange-300 hover:bg-orange-100 transition-all"
                  onClick={() => setLightboxIdx(-1)}
                  aria-label="Close"
                >
                  &times;
                </button>
              </div>
            </div>
          )}
        </div>
      </section>

      {/* Back to Home */}
      <section className="py-16 px-6 bg-gray-50">
        <div className="max-w-6xl mx-auto text-center">
          <Link 
            href="/"
            className="inline-flex items-center bg-blue-600 text-white px-8 py-3 rounded-lg font-medium hover:bg-blue-700 transition-all duration-300 transform hover:scale-105"
          >
            ← Back to Home
          </Link>
        </div>
      </section>

      {/* WhatsApp Button */}
      <div className="fixed bottom-6 right-6 z-50">
        <a
          href="https://wa.me/989333947299"
          target="_blank"
          rel="noopener noreferrer"
          className="bg-green-500 hover:bg-green-600 text-white w-14 h-14 rounded-full flex items-center justify-center shadow-lg hover:shadow-xl transition-all duration-300 transform hover:scale-110"
          aria-label="Contact on WhatsApp"
        >
          <svg className="w-7 h-7" fill="currentColor" viewBox="0 0 24 24">
            <path d="M17.472 14.382c-.297-.149-1.758-.867-2.03-.967-.273-.099-.471-.148-.67.15-.197.297-.767.966-.94 1.164-.173.199-.347.223-.644.075-.297-.15-1.255-.463-2.39-1.475-.883-.788-1.48-1.761-1.653-2.059-.173-.297-.018-.458.13-.606.134-.133.298-.347.446-.52.149-.174.198-.298.298-.497.099-.198.05-.371-.025-.52-.075-.149-.669-1.612-.916-2.207-.242-.579-.487-.5-.669-.51-.173-.008-.371-.01-.57-.01-.198 0-.52.074-.792.372-.272.297-1.04 1.016-1.04 2.479 0 1.462 1.065 2.875 1.213 3.074.149.198 2.096 3.2 5.077 4.487.709.306 1.262.489 1.694.625.712.227 1.36.195 1.871.118.571-.085 1.758-.719 2.006-1.413.248-.694.248-1.289.173-1.413-.074-.124-.272-.198-.57-.347m-5.421 7.403h-.004a9.87 9.87 0 01-5.031-1.378l-.361-.214-3.741.982.998-3.648-.235-.374a9.86 9.86 0 01-1.51-5.26c.001-5.45 4.436-9.884 9.888-9.884 2.64 0 5.122 1.03 6.988 2.898a9.825 9.825 0 012.893 6.994c-.003 5.45-4.437 9.884-9.885 9.884m8.413-18.297A11.815 11.815 0 0012.05 0C5.495 0 .16 5.335.157 11.892c0 2.096.547 4.142 1.588 5.945L.057 24l6.305-1.654a11.882 11.882 0 005.683 1.448h.005c6.554 0 11.89-5.335 11.893-11.893A11.821 11.821 0 0020.885 3.488"/>
          </svg>
        </a>
      </div>
    </div>
  )
} 