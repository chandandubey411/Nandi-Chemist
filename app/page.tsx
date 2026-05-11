import Hero from '@/components/sections/Hero';
import Categories from '@/components/sections/Categories';
import Products from '@/components/sections/Products';
import WhyChooseUs from '@/components/sections/WhyChooseUs';
import Testimonials from '@/components/sections/Testimonials';
import Link from 'next/link';
import { ShoppingBag, MessageCircle, Shield, Zap, Truck } from 'lucide-react';
import { buildWhatsAppUrl } from '@/lib/utils';

export default function Home() {
  const whatsappUrl = buildWhatsAppUrl('918586850840', 'Hello, I want to order medicines');

  return (
    <main>
      <Hero />
      <Categories />
      <Products />
      <WhyChooseUs />
      <Testimonials />
      
      {/* Premium CTA Section */}
      <section className="py-20 md:py-28 bg-gradient-to-br from-primary via-blue-600 to-indigo-700 text-white relative overflow-hidden">
        {/* Decorative patterns */}
        <div className="absolute inset-0 opacity-10">
          <div className="absolute top-0 left-0 w-full h-full" style={{
            backgroundImage: 'radial-gradient(circle at 2px 2px, white 1px, transparent 0)',
            backgroundSize: '40px 40px'
          }}></div>
        </div>
        <div className="absolute top-10 right-10 w-64 h-64 bg-white/10 rounded-full blur-3xl"></div>
        <div className="absolute bottom-10 left-10 w-64 h-64 bg-white/10 rounded-full blur-3xl"></div>
        
        <div className="max-w-[1200px] mx-auto px-4 sm:px-6 lg:px-8 text-center relative z-10">
          <h2 className="text-4xl md:text-5xl font-bold mb-6 leading-tight">
            Ready to Order Your Medicines?
          </h2>
          <p className="text-xl md:text-2xl mb-4 text-blue-100 max-w-3xl mx-auto leading-relaxed">
            Get genuine medicines delivered fast. Contact us today!
          </p>
          
          {/* Trust indicators */}
          <div className="flex flex-wrap items-center justify-center gap-6 mb-10 text-blue-100">
            <div className="flex items-center gap-2">
              <Shield className="w-5 h-5" />
              <span className="text-sm font-medium">100% Genuine Medicines</span>
            </div>
            <div className="flex items-center gap-2">
              <Zap className="w-5 h-5" />
              <span className="text-sm font-medium">Fast Delivery</span>
            </div>
            <div className="flex items-center gap-2">
              <Truck className="w-5 h-5" />
              <span className="text-sm font-medium">Trusted Local Store</span>
            </div>
          </div>

          {/* CTA Buttons */}
          <div className="flex flex-col sm:flex-row gap-5 justify-center items-center">
            <Link
              href="/order"
              className="group bg-white text-primary px-10 py-4 rounded-2xl font-bold hover:bg-gray-50 transition-all duration-300 shadow-2xl hover:shadow-3xl hover:scale-105 flex items-center gap-3 text-lg"
            >
              <ShoppingBag className="w-6 h-6" />
              Place an Order
            </Link>
            <a
              href={whatsappUrl}
              target="_blank"
              rel="noopener noreferrer"
              className="group bg-accent text-white px-10 py-4 rounded-2xl font-bold hover:bg-green-600 transition-all duration-300 shadow-2xl hover:shadow-3xl hover:scale-105 flex items-center gap-3 text-lg"
            >
              <MessageCircle className="w-6 h-6" />
              Chat on WhatsApp
            </a>
          </div>
        </div>
      </section>
    </main>
  );
}
