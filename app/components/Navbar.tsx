'use client'

import Link from 'next/link'
import { useState } from 'react'
import { usePathname } from 'next/navigation'

export default function Navbar() {
  const [menuOpen, setMenuOpen] = useState(false)
  const pathname = usePathname()

  const navLinks = [
    { href: '/', label: 'Home' },
    { href: '/about', label: 'About' },
    { href: '/#services', label: 'Services' },
    { href: '/products', label: 'Products' },
    { href: '/#contact', label: 'Contact' },
  ]

  const isActive = (href: string) =>
    pathname === href || (href === '/products' && pathname.startsWith('/products'))

  return (
    <nav className="fixed top-0 left-0 right-0 z-50 bg-white border-b border-gray-200 shadow-sm">
      <div className="max-w-6xl mx-auto px-4 flex justify-between items-center h-16">
        {/* Logo */}
        <Link href="/" className="text-xl font-bold text-gray-900 hover:text-blue-600 transition">
          Food Engineer
        </Link>

        {/* Desktop Links */}
        <div className="hidden md:flex gap-6">
          {navLinks.map(link => (
            <Link
              key={link.href}
              href={link.href}
              className={`text-base font-medium transition-colors ${
                isActive(link.href)
                  ? 'text-blue-600 font-semibold'
                  : 'text-gray-600 hover:text-blue-600'
              }`}
            >
              {link.label}
            </Link>
          ))}
        </div>

        {/* Mobile Menu Button */}
        <button
          className="md:hidden w-10 h-10 flex items-center justify-center"
          onClick={() => setMenuOpen(true)}
          aria-label="Open menu"
        >
          <svg className="w-6 h-6 text-gray-800" fill="none" stroke="currentColor" viewBox="0 0 24 24">
            <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M4 6h16M4 12h16M4 18h16" />
          </svg>
        </button>
      </div>

      {/* Mobile Menu Overlay */}
      {menuOpen && (
        <div className="fixed inset-0 z-40 bg-black/50" onClick={() => setMenuOpen(false)} />
      )}

      {/* Mobile Menu */}
      <div
        className={`fixed top-0 right-0 h-full w-72 bg-white z-50 shadow-lg transform transition-transform duration-300 ${
          menuOpen ? 'translate-x-0' : 'translate-x-full'
        }`}
      >
        <div className="flex justify-between items-center px-4 py-4 border-b">
          <span className="text-lg font-semibold text-gray-800">Menu</span>
          <button
            className="w-10 h-10 flex items-center justify-center hover:bg-gray-100 rounded-full"
            onClick={() => setMenuOpen(false)}
            aria-label="Close menu"
          >
            <svg className="w-6 h-6 text-gray-600" fill="none" stroke="currentColor" viewBox="0 0 24 24">
              <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M6 18L18 6M6 6l12 12" />
            </svg>
          </button>
        </div>
        <nav className="flex flex-col gap-4 px-6 py-6">
          {navLinks.map(link => (
            <Link
              key={link.href}
              href={link.href}
              onClick={() => setMenuOpen(false)}
              className={`block text-lg font-medium px-2 py-2 rounded transition-all ${
                isActive(link.href)
                  ? 'text-blue-600 bg-gray-100'
                  : 'text-gray-800 hover:text-blue-600 hover:bg-gray-50'
              }`}
            >
              {link.label}
            </Link>
          ))}
        </nav>
      </div>
    </nav>
  )
}
