import { PRODUCTS } from '@/data';
import SectionHeading from '@/components/ui/SectionHeading';
import ProductCard from '@/components/ui/ProductCard';
import Link from 'next/link';
import { ArrowRight } from 'lucide-react';

export default function Products() {
  return (
    <section className="py-20 md:py-28 bg-white">
      <div className="max-w-[1200px] mx-auto px-4 sm:px-6 lg:px-8">
        <div className="flex items-end justify-between mb-12">
          <SectionHeading
            title="Featured Products"
            subtitle="Popular medicines and healthcare products at great prices"
          />
          <Link 
            href="/medicines" 
            className="hidden md:flex items-center gap-2 text-primary font-semibold hover:gap-3 transition-all duration-300 group"
          >
            View All Products
            <ArrowRight className="w-5 h-5 group-hover:translate-x-1 transition-transform" />
          </Link>
        </div>
        <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-4 gap-8">
          {PRODUCTS.map((product) => (
            <ProductCard key={product.id} product={product} />
          ))}
        </div>
      </div>
    </section>
  );
}
