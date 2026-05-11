import { Testimonial } from '@/data';
import { Star, Quote } from 'lucide-react';

interface TestimonialCardProps {
  testimonial: Testimonial;
}

export default function TestimonialCard({ testimonial }: TestimonialCardProps) {
  return (
    <div className="group bg-white rounded-2xl p-8 shadow-lg hover:shadow-2xl transition-all duration-300 border border-gray-100 hover:border-primary/20 hover:-translate-y-2 relative overflow-hidden">
      {/* Quote icon background */}
      <div className="absolute top-4 right-4 opacity-5 group-hover:opacity-10 transition-opacity">
        <Quote className="w-20 h-20 text-primary" />
      </div>
      
      <div className="relative z-10">
        {/* Avatar placeholder */}
        <div className="w-16 h-16 bg-gradient-to-br from-primary to-blue-600 rounded-full flex items-center justify-center mb-4 shadow-md">
          <span className="text-white text-xl font-bold">
            {testimonial.name.charAt(0)}
          </span>
        </div>

        {/* Rating */}
        <div className="flex items-center gap-1 mb-4">
          {[...Array(5)].map((_, i) => (
            <Star
              key={i}
              className={`w-5 h-5 ${
                i < testimonial.rating
                  ? 'fill-yellow-400 text-yellow-400'
                  : 'text-gray-300'
              }`}
            />
          ))}
        </div>

        {/* Review */}
        <p className="text-gray-700 mb-5 italic leading-relaxed">
          &quot;{testimonial.review}&quot;
        </p>

        {/* Name */}
        <p className="font-bold text-text text-lg">— {testimonial.name}</p>
      </div>
    </div>
  );
}
