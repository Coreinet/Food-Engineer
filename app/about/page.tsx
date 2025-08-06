'use client'
import Link from 'next/link'
import { useState, useEffect } from 'react'

export default function About() {
  const [isVisible, setIsVisible] = useState(false)
  const [isMobileMenuOpen, setIsMobileMenuOpen] = useState(false)

  useEffect(() => {
    setIsVisible(true)
  }, [])

  return (
    <div className="min-h-screen bg-white">
      {/* Navigation */}
      <nav className="fixed top-0 w-full bg-white/90 backdrop-blur-sm border-b border-gray-200 z-50">
        <div className="max-w-6xl mx-auto px-4 sm:px-6">
          <div className="flex justify-between items-center h-16">
            <Link href="/" className="text-xl font-bold text-gray-900 hover:text-blue-600 transition-colors">
              Food Engineer
            </Link>
            
            {/* Desktop Menu */}
            <div className="hidden md:flex space-x-8">
              <Link href="/" className="text-sm font-medium text-gray-600 hover:text-blue-600 transition-colors">
                Home
              </Link>
              <span className="text-sm font-medium text-blue-600">About</span>
              <Link href="/#services" className="text-sm font-medium text-gray-600 hover:text-blue-600 transition-colors">
                Services
              </Link>
              <Link href="/products" className="text-sm font-medium text-gray-600 hover:text-blue-600 transition-colors">
                Products
              </Link>
              <Link href="/#contact" className="text-sm font-medium text-gray-600 hover:text-blue-600 transition-colors">
                Contact
              </Link>
            </div>

            {/* Mobile Menu Button */}
            <button
              onClick={() => setIsMobileMenuOpen(!isMobileMenuOpen)}
              className="md:hidden p-2 rounded-md text-gray-600 hover:text-blue-600 hover:bg-gray-100 transition-colors"
            >
              <svg className="w-6 h-6" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                {isMobileMenuOpen ? (
                  <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M6 18L18 6M6 6l12 12" />
                ) : (
                  <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M4 6h16M4 12h16M4 18h16" />
                )}
              </svg>
            </button>
          </div>

          {/* Mobile Menu */}
          {isMobileMenuOpen && (
            <div className="md:hidden border-t border-gray-200 bg-white">
              <div className="px-2 pt-2 pb-3 space-y-1">
                <Link
                  href="/"
                  className="block px-3 py-2 text-base font-medium text-gray-600 hover:text-blue-600 hover:bg-gray-50 rounded-md transition-colors"
                  onClick={() => setIsMobileMenuOpen(false)}
                >
                  Home
                </Link>
                <span className="block px-3 py-2 text-base font-medium text-blue-600 bg-blue-50 rounded-md">
                  About
                </span>
                <Link
                  href="/#services"
                  className="block px-3 py-2 text-base font-medium text-gray-600 hover:text-blue-600 hover:bg-gray-50 rounded-md transition-colors"
                  onClick={() => setIsMobileMenuOpen(false)}
                >
                  Services
                </Link>
                <Link
                  href="/products"
                  className="block px-3 py-2 text-base font-medium text-gray-600 hover:text-blue-600 hover:bg-gray-50 rounded-md transition-colors"
                  onClick={() => setIsMobileMenuOpen(false)}
                >
                  Products
                </Link>
                <Link
                  href="/#contact"
                  className="block px-3 py-2 text-base font-medium text-gray-600 hover:text-blue-600 hover:bg-gray-50 rounded-md transition-colors"
                  onClick={() => setIsMobileMenuOpen(false)}
                >
                  Contact
                </Link>
              </div>
            </div>
          )}
        </div>
      </nav>

      {/* Hero Section */}
      <section className="pt-24 pb-16 px-4 sm:px-6 bg-gradient-to-br from-blue-50 to-indigo-50">
        <div className="max-w-6xl mx-auto">
          <div className="text-center mb-12">
            <h1 className={`text-4xl sm:text-5xl lg:text-6xl font-bold text-gray-900 mb-6 ${isVisible ? 'animate-fade-in' : 'opacity-0'}`}>
              About Me
            </h1>
            <p className={`text-lg sm:text-xl text-gray-600 max-w-4xl mx-auto ${isVisible ? 'animate-fade-in' : 'opacity-0'}`} style={{animationDelay: '0.2s'}}>
              Food Industry Engineer with over 28 years of outstanding experience in beverage production, quality control, research & development, and factory establishment in beverage, dairy, and food industries.
            </p>
          </div>
        </div>
      </section>

      {/* Profile Section */}
      <section className="py-16 px-4 sm:px-6">
        <div className="max-w-6xl mx-auto">
          <div className="grid lg:grid-cols-2 gap-8 lg:gap-16 items-center">
            {/* Profile Image */}
            <div className={`text-center order-1 lg:order-1 ${isVisible ? 'animate-slide-in' : 'opacity-0 translate-x-full'}`}>
              <div className="relative inline-block">
                <div className="w-64 h-64 sm:w-80 sm:h-80 lg:w-96 lg:h-96 rounded-full border-8 border-white shadow-2xl overflow-hidden">
                  <img
                    src="/images/father-photo.jpg"
                    alt="Food Industry Engineer"
                    className="w-full h-full object-cover"
                  />
                </div>

                {/* Experience badge */}
                <div className="absolute -bottom-4 -right-4 bg-blue-600 text-white px-4 sm:px-6 py-2 sm:py-3 rounded-full text-sm sm:text-lg font-bold animate-pulse">
                  28+ Years
                </div>
              </div>
            </div>

            {/* Personal Info */}
            <div className={`space-y-6 lg:space-y-8 order-2 lg:order-2 ${isVisible ? 'animate-fade-in' : 'opacity-0'}`} style={{animationDelay: '0.4s'}}>
              <div>
                <h2 className="text-2xl sm:text-3xl font-bold text-gray-900 mb-4">Personal Information</h2>
                <div className="space-y-3 sm:space-y-4">
                  <div className="flex items-center">
                    <div className="w-3 h-3 sm:w-4 sm:h-4 bg-blue-600 rounded-full mr-3"></div>
                    <span className="text-sm sm:text-base text-gray-700"><strong>Name:</strong> Mohammad Alizadeh Hasari</span>
                  </div>
                  <div className="flex items-center">
                    <div className="w-3 h-3 sm:w-4 sm:h-4 bg-blue-600 rounded-full mr-3"></div>
                    <span className="text-sm sm:text-base text-gray-700"><strong>Profession:</strong> Food Industry Engineer</span>
                  </div>
                  <div className="flex items-center">
                    <div className="w-3 h-3 sm:w-4 sm:h-4 bg-blue-600 rounded-full mr-3"></div>
                    <span className="text-sm sm:text-base text-gray-700"><strong>Experience:</strong> 28+ Years</span>
                  </div>
                  <div className="flex items-center">
                    <div className="w-3 h-3 sm:w-4 sm:h-4 bg-blue-600 rounded-full mr-3"></div>
                    <span className="text-sm sm:text-base text-gray-700"><strong>Specialization:</strong> Beverage Production & Quality Control</span>
                  </div>
                  <div className="flex items-center">
                    <div className="w-3 h-3 sm:w-4 sm:h-4 bg-blue-600 rounded-full mr-3"></div>
                    <span className="text-sm sm:text-base text-gray-700"><strong>Location:</strong> Tehran, Iran</span>
                  </div>
                </div>
              </div>

              <div>
                <h3 className="text-xl sm:text-2xl font-bold text-gray-900 mb-4">Professional Summary</h3>
                <p className="text-sm sm:text-base text-gray-600 leading-relaxed">
                  Expert in various production, quality control, research & development, and factory establishment in beverage (carbonated and non-carbonated), dairy, and food concentrate industries. Specialized in cold and hot beverage formulations, ready-to-use powders for ice cream and specialty beverages, and coffee-based beverage production lines (Ice Coffee).
                </p>
              </div>
            </div>
          </div>
        </div>
      </section>

      {/* Experience Timeline */}
      <section className="py-16 px-4 sm:px-6 bg-gray-50">
        <div className="max-w-6xl mx-auto">
          <div className="text-center mb-12">
            <h2 className="text-3xl sm:text-4xl font-bold text-gray-900 mb-4">Professional Experience</h2>
            <div className="w-20 h-1 bg-blue-600 mx-auto"></div>
          </div>

          <div className="space-y-6 sm:space-y-8">
            {[
              {
                year: '2014 - Present',
                title: 'Production Manager & Factory Director',
                company: 'Active Food Company, Erbil, Iraq',
                description: 'Leading research & development projects in juice and cold/hot powdered beverages. Specialized in diverse formulations for beverages, ice cream, and specialty drinks. Research and development for Ice Coffee production line (Espresso, Cappuccino, Latte).'
              },
              {
                year: '2005 - 2014',
                title: 'Senior Food Industry Engineer',
                company: 'Beverage Production Companies',
                description: 'Managed production operations and quality control systems for various beverage companies including Zamzam Foundation, Pakdis Urmia, Novin Nasim, and Pak Shir.'
              },
              {
                year: '1998 - 2005',
                title: 'Quality Control Specialist',
                company: 'Dairy & Beverage Industry',
                description: 'Developed and maintained quality control systems for dairy and beverage production with focus on food safety standards.'
              },
              {
                year: '1996 - 1998',
                title: 'Junior Food Engineer',
                company: 'Food Manufacturing Industry',
                description: 'Started career in food engineering with focus on production line design and process optimization.'
              }
            ].map((experience, index) => (
              <div key={index} className={`bg-white p-6 sm:p-8 rounded-lg shadow-md transform hover:scale-105 transition-all duration-300 ${isVisible ? 'animate-fade-in' : 'opacity-0'}`} style={{animationDelay: `${0.6 + index * 0.1}s`}}>
                <div className="flex flex-col sm:flex-row sm:items-start space-y-4 sm:space-y-0 sm:space-x-4">
                  <div className="w-12 h-12 bg-blue-600 rounded-full flex items-center justify-center flex-shrink-0">
                    <span className="text-white font-bold">{index + 1}</span>
                  </div>
                  <div className="flex-1">
                    <div className="flex flex-col sm:flex-row sm:items-center sm:justify-between mb-2">
                      <h3 className="text-lg sm:text-xl font-bold text-gray-900">{experience.title}</h3>
                      <span className="text-blue-600 font-semibold text-sm sm:text-base">{experience.year}</span>
                    </div>
                    <p className="text-gray-600 font-medium mb-2 text-sm sm:text-base">{experience.company}</p>
                    <p className="text-gray-600 text-sm sm:text-base">{experience.description}</p>
                  </div>
                </div>
              </div>
            ))}
          </div>
        </div>
      </section>

      {/* Companies Section */}
      <section className="py-16 px-4 sm:px-6 bg-white">
        <div className="max-w-6xl mx-auto">
          <div className="text-center mb-12">
            <h2 className="text-3xl sm:text-4xl font-bold text-gray-900 mb-4">Companies & Organizations</h2>
            <div className="w-20 h-1 bg-blue-600 mx-auto"></div>
          </div>

          <div className="grid sm:grid-cols-2 lg:grid-cols-3 gap-4 sm:gap-6">
            {[
              'Zamzam Foundation (Bonyad Mostazafan)',
              'Pakdis Urmia',
              'Novin Nasim',
              'Pak Shir',
              'Active Food Company (Erbil, Iraq)'
            ].map((company, index) => (
              <div key={index} className={`bg-gray-50 p-4 sm:p-6 rounded-lg text-center transform hover:scale-105 transition-all duration-300 ${isVisible ? 'animate-fade-in' : 'opacity-0'}`} style={{animationDelay: `${1.2 + index * 0.1}s`}}>
                <div className="text-2xl sm:text-3xl mb-4">🏢</div>
                <h3 className="text-base sm:text-lg font-bold text-gray-900">{company}</h3>
              </div>
            ))}
          </div>
        </div>
      </section>

      {/* Skills Section */}
      <section className="py-16 px-4 sm:px-6 bg-gray-50">
        <div className="max-w-6xl mx-auto">
          <div className="text-center mb-12">
            <h2 className="text-3xl sm:text-4xl font-bold text-gray-900 mb-4">Skills & Expertise</h2>
            <div className="w-20 h-1 bg-blue-600 mx-auto"></div>
          </div>

          <div className="grid sm:grid-cols-2 lg:grid-cols-3 gap-6 sm:gap-8">
            {[
              {
                category: 'Production Engineering',
                skills: ['Production Line Design', 'Process Optimization', 'Factory Establishment', 'Capacity Planning', 'Equipment Selection']
              },
              {
                category: 'Quality Control',
                skills: ['HACCP Implementation', 'Quality Assurance', 'Food Safety Standards', 'Testing Protocols', 'Research & Development']
              },
              {
                category: 'Beverage Formulation',
                skills: ['Cold Beverage Formulation', 'Hot Beverage Formulation', 'Powdered Beverages', 'Ice Coffee Production', 'Juice Concentrates']
              }
            ].map((skillGroup, index) => (
              <div key={index} className={`bg-white p-4 sm:p-6 rounded-lg ${isVisible ? 'animate-fade-in' : 'opacity-0'}`} style={{animationDelay: `${1.6 + index * 0.1}s`}}>
                <h3 className="text-lg sm:text-xl font-bold text-gray-900 mb-4">{skillGroup.category}</h3>
                <div className="space-y-2">
                  {skillGroup.skills.map((skill, skillIndex) => (
                    <div key={skillIndex} className="flex items-center">
                      <div className="w-2 h-2 bg-blue-600 rounded-full mr-3"></div>
                      <span className="text-sm sm:text-base text-gray-700">{skill}</span>
                    </div>
                  ))}
                </div>
              </div>
            ))}
          </div>
        </div>
      </section>

      {/* Back to Home */}
      <section className="py-16 px-4 sm:px-6 bg-white">
        <div className="max-w-6xl mx-auto text-center">
          <Link
            href="/"
            className="inline-flex items-center bg-blue-600 text-white px-6 sm:px-8 py-3 rounded-lg font-medium hover:bg-blue-700 transition-all duration-300 transform hover:scale-105"
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

      <style jsx>{`
        @keyframes fade-in {
          from { opacity: 0; transform: translateY(20px); }
          to { opacity: 1; transform: translateY(0); }
        }
        @keyframes slide-in {
          from { opacity: 0; transform: translateX(50px); }
          to { opacity: 1; transform: translateX(0); }
        }
        .animate-fade-in { animation: fade-in 1s ease-out forwards; }
        .animate-slide-in { animation: slide-in 1s ease-out 0.5s forwards; }
      `}</style>
    </div>
  )
} 