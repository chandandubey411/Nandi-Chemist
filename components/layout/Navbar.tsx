'use client';

import { useState } from 'react';
import Link from 'next/link';
import Image from 'next/image';
import { usePathname } from 'next/navigation';
import { Menu, X } from 'lucide-react';

export default function Navbar() {
  const [isMenuOpen, setIsMenuOpen] = useState(false);
  const pathname = usePathname();

  const navLinks = [
    { name: 'Home', href: '/' },
    { name: 'Medicines', href: '/medicines' },
    { name: 'Baby Care', href: '/baby-care' },
    { name: 'Nutrition', href: '/nutrition' },
    { name: 'Women Care', href: '/women-care' },
    { name: 'Personal Care', href: '/personal-care' },
    { name: 'Health Devices', href: '/health-devices' },
    { name: 'Contact', href: '/contact' }
  ];

  const isActive = (href: string) => pathname === href;

  return (
    <nav
      className="sticky top-0 z-50 bg-white shadow-md"
      aria-label="Main navigation"
    >
      <div className="max-w-[1400px] mx-auto px-4 sm:px-6 lg:px-8">
        <div className="flex items-center justify-between h-16">
          {/* Logo - Left Side */}
          <div className="flex-shrink-0">
            <Link href="/" className="flex items-center gap-2">
              <Image
                src="/logo.png"
                alt="Nandi Chemists Logo"
                width={40}
                height={40}
                className="object-contain"
                priority
              />
              <span className="text-xl lg:text-2xl font-bold text-primary whitespace-nowrap">
                Nandi Chemists
              </span>
            </Link>
          </div>

          {/* Desktop Navigation - Right Side */}
          <div className="hidden lg:flex items-center space-x-4 xl:space-x-6">
            {navLinks.map((link) => (
              <Link
                key={link.name}
                href={link.href}
                className={`transition-colors duration-200 font-medium whitespace-nowrap text-sm xl:text-base ${
                  isActive(link.href)
                    ? 'text-primary border-b-2 border-primary pb-1'
                    : 'text-gray-700 hover:text-primary'
                }`}
              >
                {link.name}
              </Link>
            ))}
            <Link
              href="/order"
              className="bg-primary text-white px-4 xl:px-5 py-2 rounded-xl font-medium hover:bg-blue-700 transition-colors duration-200 whitespace-nowrap text-sm xl:text-base"
            >
              Order Now
            </Link>
          </div>

          {/* Mobile Menu Button */}
          <button
            onClick={() => setIsMenuOpen(!isMenuOpen)}
            className="lg:hidden p-2 rounded-lg hover:bg-gray-100 transition-colors"
            aria-expanded={isMenuOpen}
            aria-controls="mobile-menu"
            aria-label="Toggle navigation menu"
          >
            {isMenuOpen ? (
              <X className="w-6 h-6 text-gray-700" />
            ) : (
              <Menu className="w-6 h-6 text-gray-700" />
            )}
          </button>
        </div>

        {/* Mobile Navigation */}
        <div
          id="mobile-menu"
          className={`lg:hidden transition-all duration-300 ease-in-out overflow-hidden ${
            isMenuOpen ? 'max-h-96 pb-4' : 'max-h-0'
          }`}
        >
          <div className="flex flex-col space-y-3 pt-2">
            {navLinks.map((link) => (
              <Link
                key={link.name}
                href={link.href}
                onClick={() => setIsMenuOpen(false)}
                className={`transition-colors duration-200 font-medium py-2 ${
                  isActive(link.href)
                    ? 'text-primary font-semibold'
                    : 'text-gray-700 hover:text-primary'
                }`}
              >
                {link.name}
              </Link>
            ))}
            <Link
              href="/order"
              onClick={() => setIsMenuOpen(false)}
              className="bg-primary text-white px-5 py-2 rounded-xl font-medium hover:bg-blue-700 transition-colors duration-200 text-center"
            >
              Order Now
            </Link>
          </div>
        </div>
      </div>
    </nav>
  );
}
