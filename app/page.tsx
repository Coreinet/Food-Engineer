'use client'
import { useState, useEffect } from 'react'
import Link from 'next/link'

export default function Home() {
  const [activeSection, setActiveSection] = useState('home')
  const [isVisible, setIsVisible] = useState(false)
  const [isMobileMenuOpen, setIsMobileMenuOpen] = useState(false)
  
  // Contact form state
  const [formData, setFormData] = useState({
    name: '',
    email: '',
    message: ''
  })
  const [isSubmitting, setIsSubmitting] = useState(false)
  const [submitStatus, setSubmitStatus] = useState<{
    type: 'success' | 'error' | null
    message: string
  }>({ type: null, message: '' })

  useEffect(() => {
    setIsVisible(true)
  }, [])

  const scrollToSection = (sectionId: string) => {
    setActiveSection(sectionId)
    setIsMobileMenuOpen(false)
    const element = document.getElementById(sectionId)
    if (element) {
      element.scrollIntoView({ behavior: 'smooth' })
    }
  }

  const handleInputChange = (e: React.ChangeEvent<HTMLInputElement | HTMLTextAreaElement>) => {
    const { name, value } = e.target
    setFormData(prev => ({
      ...prev,
      [name]: value
    }))
  }

  const handleSubmit = async (e: React.FormEvent) => {
    e.preventDefault()
    setIsSubmitting(true)
    setSubmitStatus({ type: null, message: '' })

    try {
      const response = await fetch('/api/contact', {
        method: 'POST',
        headers: {
          'Content-Type': 'application/json',
        },
        body: JSON.stringify(formData),
      })

      const data = await response.json()

      if (response.ok) {
        setSubmitStatus({
          type: 'success',
          message: data.message
        })
        setFormData({ name: '', email: '', message: '' })
      } else {
        setSubmitStatus({
          type: 'error',
          message: data.error || 'Something went wrong. Please try again.'
        })
      }
    } catch (error) {
      setSubmitStatus({
        type: 'error',
        message: 'Looks like there\'s a connection issue! Please check your internet and try again. 🌐'
      })
    } finally {
      setIsSubmitting(false)
    }
  }

  return (
    <div className="min-h-screen bg-white">
      {/* Hero Section */}
      <section id="home" className="pt-24 pb-16 px-4 sm:px-6">
        <div className="max-w-6xl mx-auto">
          <div className="grid lg:grid-cols-2 gap-8 lg:gap-12 items-center">
            {/* Text Content */}
            <div className={`text-center lg:text-left order-2 lg:order-1 ${isVisible ? 'animate-fade-in' : 'opacity-0'}`}>
              <h1 className="text-4xl sm:text-5xl lg:text-6xl font-bold text-gray-900 mb-6 leading-tight">
                Food Industry Engineer
              </h1>
              <p className="text-lg sm:text-xl text-gray-600 mb-8 max-w-2xl mx-auto lg:mx-0">
                Specializing in juice and ice coffee production with over 28 years of experience in food industry engineering and beverage production.
              </p>
              <div className="flex flex-col sm:flex-row gap-4 justify-center lg:justify-start">
                <Link
                  href="/products"
                  className="bg-blue-600 text-white px-6 sm:px-8 py-3 rounded-lg font-medium hover:bg-blue-700 transition-all duration-300 transform hover:scale-105 inline-block text-center"
                >
                  View Products
                </Link>
                <Link
                  href="/about"
                  className="border-2 border-blue-600 text-blue-600 px-6 sm:px-8 py-3 rounded-lg font-medium hover:bg-blue-600 hover:text-white transition-all duration-300 transform hover:scale-105 inline-block text-center"
                >
                  Read More
                </Link>
              </div>
            </div>

            {/* Profile Image */}
            <div className={`flex justify-center lg:justify-end order-1 lg:order-2 ${isVisible ? 'animate-slide-in' : 'opacity-0 translate-x-full'}`}>
              <div className="relative">
                {/* Father's actual photo */}
                <div className="w-64 h-64 sm:w-80 sm:h-80 rounded-full border-8 border-white shadow-2xl overflow-hidden">
                  <img 
                    src="/images/profile.jpg" 
                    alt="Food Industry Engineer"
                    className="w-full h-full object-cover"
                  />
                </div>
                
                {/* Floating elements around the image */}
                <div className="absolute -top-4 -right-4 w-6 h-6 sm:w-8 sm:h-8 bg-orange-400 rounded-full animate-bounce"></div>
                <div className="absolute -bottom-4 -left-4 w-4 h-4 sm:w-6 sm:h-6 bg-green-400 rounded-full animate-pulse"></div>
                <div className="absolute top-1/2 -left-6 sm:-left-8 w-3 h-3 sm:w-4 sm:h-4 bg-yellow-400 rounded-full animate-ping"></div>
                
                {/* Experience badge */}
                <div className="absolute -bottom-4 -right-4 bg-blue-600 text-white px-3 sm:px-4 py-2 rounded-full text-xs sm:text-sm font-bold animate-pulse">
                  28+ Years
                </div>
              </div>
            </div>
          </div>
        </div>
      </section>

      {/* Services Section */}
      <section id="services" className="py-16 px-4 sm:px-6 bg-gray-50">
        <div className="max-w-6xl mx-auto">
          <div className="text-center mb-12">
            <h2 className="text-3xl sm:text-4xl font-bold text-gray-900 mb-4">Services</h2>
            <div className="w-20 h-1 bg-blue-600 mx-auto"></div>
          </div>
          <div className="grid sm:grid-cols-2 lg:grid-cols-3 gap-6 sm:gap-8">
            {[
              {
                title: 'Production Design',
                description: 'Design and optimize production lines for juice and ice coffee using the latest technologies',
                icon: '🏭'
              },
              {
                title: 'Quality Control',
                description: 'Implement advanced quality control systems to ensure product health and quality',
                icon: '🔬'
              },
              {
                title: 'Product Development',
                description: 'Develop new and innovative products based on market needs and consumer preferences',
                icon: '💡'
              }
            ].map((service, index) => (
              <div key={index} className="bg-white p-6 sm:p-8 rounded-lg text-center transform hover:scale-105 transition-all duration-300 hover:shadow-lg">
                <div className="text-3xl sm:text-4xl mb-4 animate-bounce">{service.icon}</div>
                <h3 className="text-lg sm:text-xl font-bold text-gray-900 mb-4">{service.title}</h3>
                <p className="text-gray-600 leading-relaxed text-sm sm:text-base">{service.description}</p>
              </div>
            ))}
          </div>
        </div>
      </section>

      {/* Products Preview Section */}
      <section id="products" className="py-16 px-4 sm:px-6 bg-white">
        <div className="max-w-6xl mx-auto">
          <div className="text-center mb-12">
            <h2 className="text-3xl sm:text-4xl font-bold text-gray-900 mb-4">Featured Products</h2>
            <div className="w-20 h-1 bg-blue-600 mx-auto"></div>
          </div>
          <div className="grid lg:grid-cols-2 gap-6 sm:gap-8">
            <div className="bg-gray-50 p-6 sm:p-8 rounded-lg shadow-lg transform hover:scale-105 transition-all duration-300">
              <div className="text-center">
                <div className="text-4xl sm:text-5xl mb-4 animate-pulse">🍊</div>
                <h3 className="text-xl sm:text-2xl font-bold text-gray-900 mb-4">Factory Juices</h3>
                <p className="text-gray-600 mb-6 text-sm sm:text-base">
                  Production of high-quality factory juices including orange, apple, grape and other seasonal fruits
                </p>
                <div className="space-y-2 text-sm text-gray-700 mb-6">
                  <div>• Industrial production standards</div>
                  <div>• Consistent quality control</div>
                  <div>• Long shelf life</div>
                </div>
                <Link
                  href="/products/factory-juices"
                  className="inline-block bg-blue-600 text-white px-6 py-2 rounded-lg font-medium hover:bg-blue-700 transition-colors"
                >
                  Learn More
                </Link>
              </div>
            </div>
            <div className="bg-gray-50 p-6 sm:p-8 rounded-lg shadow-lg transform hover:scale-105 transition-all duration-300">
              <div className="text-center">
                <div className="text-4xl sm:text-5xl mb-4 animate-pulse">☕</div>
                <h3 className="text-xl sm:text-2xl font-bold text-gray-900 mb-4">Ice Coffee</h3>
                <p className="text-gray-600 mb-6 text-sm sm:text-base">
                  Production of ice coffee with diverse flavors and superior quality for refreshment and energy
                </p>
                <div className="space-y-2 text-sm text-gray-700 mb-6">
                  <div>• Various attractive flavors</div>
                  <div>• No excessive caffeine</div>
                  <div>• Suitable for all ages</div>
                </div>
                <Link
                  href="/products/ice-coffee"
                  className="inline-block bg-blue-600 text-white px-6 py-2 rounded-lg font-medium hover:bg-blue-700 transition-colors"
                >
                  Learn More
                </Link>
              </div>
            </div>
          </div>
          <div className="text-center mt-8">
            <Link
              href="/products"
              className="inline-flex items-center bg-gray-900 text-white px-6 sm:px-8 py-3 rounded-lg font-medium hover:bg-gray-800 transition-all duration-300 transform hover:scale-105"
            >
              View All Products →
            </Link>
          </div>
        </div>
      </section>

      {/* Contact Section */}
      <section id="contact" className="py-16 px-4 sm:px-6 bg-gray-50">
        <div className="max-w-6xl mx-auto">
          <div className="text-center mb-12">
            <h2 className="text-3xl sm:text-4xl font-bold text-gray-900 mb-4">Contact</h2>
            <div className="w-20 h-1 bg-blue-600 mx-auto"></div>
          </div>
          <div className="grid lg:grid-cols-2 gap-8 lg:gap-12">
            <div>
              <h3 className="text-2xl font-bold text-gray-900 mb-6">Contact Information</h3>
              <div className="space-y-4">
                <div className="flex items-center group">
                  <div className="w-10 h-10 bg-blue-600 rounded-full flex items-center justify-center mr-4 group-hover:scale-110 transition-transform duration-300">
                    <span className="text-white">📧</span>
                  </div>
                  <div>
                    <div className="font-medium text-gray-900">Email</div>
                    <div className="text-gray-600">info@foodengineer.com</div>
                  </div>
                </div>
                <div className="flex items-center group">
                  <div className="w-10 h-10 bg-blue-600 rounded-full flex items-center justify-center mr-4 group-hover:scale-110 transition-transform duration-300">
                    <span className="text-white">📱</span>
                  </div>
                  <div>
                    <div className="font-medium text-gray-900">Phone</div>
                    <div className="text-gray-600">+98 933 394 7299</div>
                    
                  </div>
                </div>
                <div className="flex items-center group">
                  <div className="w-10 h-10 bg-blue-600 rounded-full flex items-center justify-center mr-4 group-hover:scale-110 transition-transform duration-300">
                    <span className="text-white">📍</span>
                  </div>
                  <div>
                    <div className="font-medium text-gray-900">Location</div>
                    <div className="text-gray-600">Urmia, Iran</div>
                    <div className="text-gray-600">Erbil, Iraq</div>
                    <div className="text-gray-600">Istanbul, Turkey</div>
                  </div>
                </div>
              </div>
            </div>
            <div className="bg-white p-6 sm:p-8 rounded-lg">
              <h3 className="text-2xl font-bold text-gray-900 mb-6">Send Message</h3>
              <form onSubmit={handleSubmit} className="space-y-4">
                <div>
                  <input
                    type="text"
                    name="name"
                    placeholder="Full Name"
                    value={formData.name}
                    onChange={handleInputChange}
                    className="w-full px-4 py-3 border border-gray-300 rounded-lg focus:outline-none focus:border-blue-500 transition-all duration-300"
                    required
                  />
                </div>
                <div>
                  <input
                    type="email"
                    name="email"
                    placeholder="Email"
                    value={formData.email}
                    onChange={handleInputChange}
                    className="w-full px-4 py-3 border border-gray-300 rounded-lg focus:outline-none focus:border-blue-500 transition-all duration-300"
                    required
                  />
                </div>
                <div>
                  <textarea
                    name="message"
                    placeholder="Your Message"
                    rows={4}
                    value={formData.message}
                    onChange={handleInputChange}
                    className="w-full px-4 py-3 border border-gray-300 rounded-lg focus:outline-none focus:border-blue-500 transition-all duration-300"
                    required
                  ></textarea>
                </div>
                <button
                  type="submit"
                  disabled={isSubmitting}
                  className="w-full bg-gradient-to-r from-blue-600 to-blue-700 hover:from-blue-700 hover:to-blue-800 text-white py-3 rounded-lg font-medium transition-all duration-300 transform hover:scale-105 disabled:opacity-50 disabled:cursor-not-allowed shadow-lg hover:shadow-xl flex items-center justify-center space-x-2"
                >
                  {isSubmitting ? (
                    <>
                      <div className="animate-spin rounded-full h-5 w-5 border-b-2 border-white"></div>
                      <span>Sending your message...</span>
                    </>
                  ) : (
                    <>
                      <span></span>
                      <span>Send Message</span>
                    </>
                  )}
                </button>
                {submitStatus.type === 'success' && (
                  <div className="bg-green-50 border border-green-200 rounded-lg p-4 text-center shadow-sm">
                    <div className="flex items-center justify-center space-x-2">
                      <span className="text-green-600 text-xl">✅</span>
                      <p className="text-green-700 font-medium">{submitStatus.message}</p>
                    </div>
                  </div>
                )}
                {submitStatus.type === 'error' && (
                  <div className="bg-gradient-to-r from-red-50 to-pink-50 border border-red-200 rounded-lg p-4 text-center shadow-sm animate-pulse">
                    <div className="flex items-center justify-center space-x-2">
                      <span className="text-red-600 text-2xl">💫</span>
                      <p className="text-red-700 font-medium text-sm leading-relaxed">{submitStatus.message}</p>
                    </div>
                  </div>
                )}
              </form>
            </div>
          </div>
        </div>
      </section>

      {/* Footer */}
      <footer className="bg-gray-900 text-white py-8 px-4 sm:px-6">
        <div className="max-w-6xl mx-auto text-center">
          <p className="text-base sm:text-lg mb-4">Food Industry Engineer - Specializing in Juice and Ice Coffee Production</p>
          <p className="text-gray-400 text-sm sm:text-base">© 2024 All rights reserved</p>
        </div>
      </footer>

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

