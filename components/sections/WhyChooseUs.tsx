import { FEATURES } from '@/data';
import SectionHeading from '@/components/ui/SectionHeading';
import FeatureBlock from '@/components/ui/FeatureBlock';

export default function WhyChooseUs() {
  return (
    <section className="py-20 md:py-28 bg-gradient-to-br from-blue-50 via-white to-purple-50/30 relative overflow-hidden">
      {/* Decorative elements */}
      <div className="absolute top-20 left-10 w-72 h-72 bg-blue-200/30 rounded-full blur-3xl"></div>
      <div className="absolute bottom-20 right-10 w-72 h-72 bg-purple-200/30 rounded-full blur-3xl"></div>
      
      <div className="max-w-[1200px] mx-auto px-4 sm:px-6 lg:px-8 relative z-10">
        <SectionHeading 
          title="Why Choose Nandi Chemists?" 
          subtitle="Your health and trust are our top priorities"
        />
        <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-4 gap-8">
          {FEATURES.map((feature, index) => (
            <FeatureBlock 
              key={feature.id} 
              feature={feature}
              index={index}
            />
          ))}
        </div>
      </div>
    </section>
  );
}
