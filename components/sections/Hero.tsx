import Link from 'next/link';
import { buildWhatsAppUrl } from '@/lib/utils';
import { ShoppingBag, MessageCircle, Grid3x3, Shield, Award, Zap, Users, Package, Truck } from 'lucide-react';

export default function Hero() {
  const whatsappUrl = buildWhatsAppUrl('918586850840', 'Hello, I want to order medicines');

  const floatingCards = [
    { icon: Zap, text: '24/7 Availability', color: 'bg-blue-500' },
    { icon: Shield, text: 'Genuine Medicines', color: 'bg-green-500' },
    { icon: Truck, text: 'Fast Delivery', color: 'bg-purple-500' }
  ];

  const trustBadges = [
    { icon: Shield, text: 'Certified Pharmacy' },
    { icon: Award, text: '100% Genuine Medicines' },
    { icon: Users, text: 'Trusted by Local Customers' }
  ];

  const stats = [
    { number: '500+', label: 'Happy Customers' },
    { number: '1000+', label: 'Products Available' },
    { number: 'Fast', label: 'Local Delivery' }
  ];

  return (
    <section className="relative bg-gradient-to-br from-blue-50 via-white to-blue-50 py-16 md:py-24 overflow-hidden">
      {/* Abstract Background Shapes */}
      <div className="absolute inset-0 overflow-hidden pointer-events-none">
        <div className="absolute top-20 right-10 w-72 h-72 bg-blue-100 rounded-full mix-blend-multiply filter blur-3xl opacity-30"></div>
        <div className="absolute top-40 left-10 w-72 h-72 bg-purple-100 rounded-full mix-blend-multiply filter blur-3xl opacity-30"></div>
        <div className="absolute -bottom-8 left-1/2 w-72 h-72 bg-green-100 rounded-full mix-blend-multiply filter blur-3xl opacity-30"></div>
      </div>

      <div className="max-w-[1400px] mx-auto px-4 sm:px-6 lg:px-8 relative z-10">
        <div className="grid grid-cols-1 lg:grid-cols-2 gap-12 items-center">
          {/* Left Content */}
          <div className="space-y-8">
            {/* Main Headline */}
            <div className="space-y-4">
              <h1 className="text-4xl md:text-5xl lg:text-6xl font-bold text-text leading-tight">
                Your Trusted Pharmacy for{' '}
                <span className="text-primary">Every Family</span>
              </h1>
              <p className="text-lg md:text-xl text-gray-600 leading-relaxed">
                Quick access to genuine medicines, baby care, and wellness products — all in one place
              </p>
            </div>

            {/* Trust Badges */}
            <div className="flex flex-wrap gap-4">
              {trustBadges.map((badge, index) => (
                <div
                  key={index}
                  className="flex items-center gap-2 bg-white px-4 py-2 rounded-full shadow-sm border border-gray-100"
                >
                  <badge.icon className="w-4 h-4 text-accent" />
                  <span className="text-sm font-medium text-gray-700">{badge.text}</span>
                </div>
              ))}
            </div>

            {/* CTA Buttons */}
            <div className="flex flex-col sm:flex-row gap-4">
              <Link
                href="/order"
                className="group bg-primary text-white px-8 py-4 rounded-2xl font-semibold hover:bg-blue-700 transition-all duration-300 text-center shadow-lg hover:shadow-xl hover:scale-105 flex items-center justify-center gap-2"
              >
                <ShoppingBag className="w-5 h-5" />
                Order Medicines
              </Link>
              <a
                href={whatsappUrl}
                target="_blank"
                rel="noopener noreferrer"
                className="group bg-accent text-white px-8 py-4 rounded-2xl font-semibold hover:bg-green-600 transition-all duration-300 text-center shadow-lg hover:shadow-xl hover:scale-105 flex items-center justify-center gap-2"
              >
                <MessageCircle className="w-5 h-5" />
                Chat on WhatsApp
              </a>
              <Link
                href="/medicines"
                className="group bg-white text-primary px-8 py-4 rounded-2xl font-semibold hover:bg-gray-50 transition-all duration-300 text-center border-2 border-primary hover:shadow-lg flex items-center justify-center gap-2"
              >
                <Grid3x3 className="w-5 h-5" />
                Browse Categories
              </Link>
            </div>

            {/* Stats Bar */}
            <div className="grid grid-cols-3 gap-4 pt-8 border-t border-gray-200">
              {stats.map((stat, index) => (
                <div key={index} className="text-center">
                  <div className="text-2xl md:text-3xl font-bold text-primary">{stat.number}</div>
                  <div className="text-sm text-gray-600 mt-1">{stat.label}</div>
                </div>
              ))}
            </div>
          </div>

          {/* Right Visual */}
          <div className="relative">
            {/* Main Image Container */}
            <div className="relative bg-gradient-to-br from-blue-100 to-purple-100 rounded-3xl p-8 shadow-2xl">
              <div className="aspect-square bg-white rounded-2xl shadow-inner flex items-center justify-center overflow-hidden">
                {/* Pharmacy Image */}
                <div className="relative w-full h-full">
                  <img 
                    src="https://www.environmentalscience.org/wp-content/uploads/2016/05/Chemist.jpeg" 
                    alt="Pharmacy and Medicines" 
                    className="w-full h-full object-cover hover:scale-105 transition-transform duration-700"
                  />
                  <div className="absolute inset-0 bg-gradient-to-t from-blue-900/20 to-transparent pointer-events-none"></div>
                </div>
              </div>

              {/* Floating Cards */}
              <div className="absolute top-8 -right-4 bg-white/90 backdrop-blur-md px-4 py-3 rounded-2xl shadow-xl border border-white/20 flex items-center gap-3 animate-bounce">
                <div className="bg-blue-500 p-2 rounded-xl">
                  <Zap className="w-5 h-5 text-white" />
                </div>
                <span className="font-semibold text-gray-800 text-sm whitespace-nowrap">
                  24/7 Availability
                </span>
              </div>

              <div className="absolute bottom-32 -left-4 bg-white/90 backdrop-blur-md px-4 py-3 rounded-2xl shadow-xl border border-white/20 flex items-center gap-3 animate-pulse">
                <div className="bg-green-500 p-2 rounded-xl">
                  <Shield className="w-5 h-5 text-white" />
                </div>
                <span className="font-semibold text-gray-800 text-sm whitespace-nowrap">
                  Genuine Medicines
                </span>
              </div>

              <div className="absolute bottom-8 -right-4 bg-white/90 backdrop-blur-md px-4 py-3 rounded-2xl shadow-xl border border-white/20 flex items-center gap-3 animate-bounce">
                <div className="bg-purple-500 p-2 rounded-xl">
                  <Truck className="w-5 h-5 text-white" />
                </div>
                <span className="font-semibold text-gray-800 text-sm whitespace-nowrap">
                  Fast Delivery
                </span>
              </div>
            </div>

            {/* Decorative Elements */}
            <div className="absolute -top-4 -left-4 w-24 h-24 bg-accent/20 rounded-full blur-2xl"></div>
            <div className="absolute -bottom-4 -right-4 w-32 h-32 bg-primary/20 rounded-full blur-2xl"></div>
          </div>
        </div>
      </div>
    </section>
  );
}
