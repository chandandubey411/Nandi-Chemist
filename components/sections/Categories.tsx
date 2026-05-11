import { CATEGORIES, Category } from '@/data';
import SectionHeading from '@/components/ui/SectionHeading';
import CategoryCard from '@/components/ui/CategoryCard';
import Link from 'next/link';
import { ArrowRight } from 'lucide-react';

interface CategoriesProps {
  categories?: Category[];
}

export default function Categories({ categories = CATEGORIES }: CategoriesProps) {
  return (
    <section className="py-20 md:py-28 bg-gradient-to-b from-white via-blue-50/30 to-white relative overflow-hidden">
      {/* Decorative background elements */}
      <div className="absolute top-0 right-0 w-96 h-96 bg-blue-100/40 rounded-full blur-3xl opacity-50"></div>
      <div className="absolute bottom-0 left-0 w-96 h-96 bg-purple-100/40 rounded-full blur-3xl opacity-50"></div>
      
      <div className="max-w-[1200px] mx-auto px-4 sm:px-6 lg:px-8 relative z-10">
        <div className="flex items-end justify-between mb-12">
          <SectionHeading
            title="Shop by Category"
            subtitle="Browse our wide range of healthcare products and medicines"
          />
          <Link 
            href="/medicines" 
            className="hidden md:flex items-center gap-2 text-primary font-semibold hover:gap-3 transition-all duration-300 group"
          >
            View All
            <ArrowRight className="w-5 h-5 group-hover:translate-x-1 transition-transform" />
          </Link>
        </div>
        <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-3 gap-8">
          {categories.map((category) => (
            <CategoryCard key={category.id} category={category} />
          ))}
        </div>
      </div>
    </section>
  );
}
