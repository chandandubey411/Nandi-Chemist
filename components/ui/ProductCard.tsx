'use client';

import Image from 'next/image';
import { useRouter } from 'next/navigation';
import { Product } from '@/data';
import { ShoppingCart, Star, FileText } from 'lucide-react';

interface ProductCardProps {
  product: Product;
  onOrderClick?: (name: string) => void;
}

export default function ProductCard({ product, onOrderClick }: ProductCardProps) {
  const router = useRouter();

  const handleOrderClick = () => {
    if (onOrderClick) {
      onOrderClick(product.name);
    } else {
      // Navigate to order page with product details as query params
      const params = new URLSearchParams({
        id: product.id,
        name: product.name,
        price: product.price,
        image: product.image,
        inStock: String(product.inStock !== false),
        ...(product.prescriptionRequired && { prescriptionRequired: 'true' })
      });
      router.push(`/order?${params.toString()}`);
    }
  };

  return (
    <div className="group bg-white rounded-2xl overflow-hidden shadow-lg hover:shadow-2xl transition-all duration-300 border border-gray-100 hover:border-primary/20 hover:-translate-y-2">
      {/* Product Image */}
      <div className="relative w-full h-56 bg-gradient-to-br from-gray-50 to-blue-50/30 overflow-hidden">
        <Image
          src={product.image}
          alt={product.name}
          fill
          className="object-contain p-6 group-hover:scale-110 transition-transform duration-300"
          loading="lazy"
        />
        
        {/* Badges */}
        <div className="absolute top-3 right-3 flex flex-col gap-2">
          {product.inStock !== false ? (
            <div className="bg-accent text-white text-xs font-semibold px-3 py-1 rounded-full shadow-md">
              In Stock
            </div>
          ) : (
            <div className="bg-gray-400 text-white text-xs font-semibold px-3 py-1 rounded-full shadow-md">
              Out of Stock
            </div>
          )}
          {product.prescriptionRequired && (
            <div className="bg-orange-500 text-white text-xs font-semibold px-3 py-1 rounded-full shadow-md flex items-center gap-1">
              <FileText className="w-3 h-3" />
              Rx
            </div>
          )}
        </div>

        {/* Discount Badge */}
        {product.discount && (
          <div className="absolute top-3 left-3 bg-red-500 text-white text-xs font-bold px-3 py-1 rounded-full shadow-md">
            {product.discount} OFF
          </div>
        )}
      </div>

      {/* Product Info */}
      <div className="p-5">
        <h3 className="text-base font-semibold text-text mb-2 line-clamp-2 min-h-[3rem] group-hover:text-primary transition-colors">
          {product.name}
        </h3>
        
        {/* Description */}
        {product.description && (
          <p className="text-sm text-gray-600 mb-3 line-clamp-2">
            {product.description}
          </p>
        )}
        
        {/* Rating */}
        <div className="flex items-center gap-1 mb-3">
          {[...Array(5)].map((_, i) => (
            <Star
              key={i}
              className={`w-4 h-4 ${
                i < Math.floor(product.rating || 4.5)
                  ? 'fill-yellow-400 text-yellow-400'
                  : 'text-gray-300'
              }`}
            />
          ))}
          <span className="text-xs text-gray-500 ml-1">({product.rating || '4.5'})</span>
        </div>

        {/* Price */}
        <div className="flex items-baseline gap-2 mb-4">
          <p className="text-2xl font-bold text-primary">{product.price}</p>
          {product.originalPrice && (
            <p className="text-sm text-gray-400 line-through">{product.originalPrice}</p>
          )}
        </div>

        {/* CTA Button */}
        <button
          onClick={handleOrderClick}
          disabled={product.inStock === false}
          className={`w-full py-3 px-4 rounded-xl font-semibold transition-all duration-300 flex items-center justify-center gap-2 shadow-md ${
            product.inStock === false
              ? 'bg-gray-300 text-gray-500 cursor-not-allowed'
              : 'bg-primary text-white hover:bg-blue-700 hover:shadow-lg group-hover:scale-105'
          }`}
        >
          <ShoppingCart className="w-4 h-4" />
          {product.inStock === false ? 'Out of Stock' : 'Buy Now'}
        </button>
      </div>
    </div>
  );
}
