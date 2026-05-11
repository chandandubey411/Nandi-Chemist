import Link from 'next/link';
import * as Icons from 'lucide-react';

interface Category {
  id: string;
  name: string;
  label: string;
  icon: string;
  href: string;
}

interface CategoryCardProps {
  category: Category;
}

export default function CategoryCard({ category }: CategoryCardProps) {
  const IconComponent = (Icons as any)[category.icon] || Icons.Package;

  return (
    <Link
      href={category.href}
      data-testid="category-card"
      className="group block bg-white rounded-2xl p-8 shadow-lg hover:shadow-2xl hover:-translate-y-2 transition-all duration-300 border border-gray-100 hover:border-primary/20 cursor-pointer relative overflow-hidden"
    >
      {/* Gradient overlay on hover */}
      <div className="absolute inset-0 bg-gradient-to-br from-primary/5 to-transparent opacity-0 group-hover:opacity-100 transition-opacity duration-300"></div>
      
      <div className="flex flex-col items-center text-center relative z-10">
        <div className="w-20 h-20 bg-gradient-to-br from-blue-100 to-blue-50 rounded-2xl flex items-center justify-center mb-5 group-hover:scale-110 group-hover:rotate-3 transition-all duration-300 shadow-md">
          <IconComponent className="w-10 h-10 text-primary" />
        </div>
        <h3 className="text-xl font-bold text-text mb-2 group-hover:text-primary transition-colors duration-300">{category.name}</h3>
        <p className="text-sm text-gray-600 leading-relaxed">{category.label}</p>
      </div>
    </Link>
  );
}
