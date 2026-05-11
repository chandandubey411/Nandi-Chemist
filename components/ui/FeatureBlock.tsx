import { Feature } from '@/data';
import * as Icons from 'lucide-react';

interface FeatureBlockProps {
  feature: Feature;
  index?: number;
}

export default function FeatureBlock({ feature, index = 0 }: FeatureBlockProps) {
  const IconComponent = (Icons as any)[feature.icon] || Icons.CheckCircle;

  return (
    <div 
      className="group bg-white rounded-2xl p-8 shadow-lg hover:shadow-2xl transition-all duration-300 border border-gray-100 hover:border-primary/20 hover:-translate-y-2"
      style={{
        animationDelay: `${index * 100}ms`
      }}
    >
      <div className="flex flex-col items-center text-center">
        <div className="w-20 h-20 bg-gradient-to-br from-accent/20 to-accent/10 rounded-2xl flex items-center justify-center mb-5 group-hover:scale-110 group-hover:rotate-6 transition-all duration-300 shadow-md">
          <IconComponent className="w-10 h-10 text-accent" />
        </div>
        <h3 className="text-xl font-bold text-text mb-3 group-hover:text-primary transition-colors">{feature.title}</h3>
        <p className="text-gray-600 leading-relaxed">{feature.description}</p>
      </div>
    </div>
  );
}
