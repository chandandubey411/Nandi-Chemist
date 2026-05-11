import PageHeader from '@/components/ui/PageHeader';
import Breadcrumb from '@/components/ui/Breadcrumb';
import Contact from '@/components/sections/Contact';

export default function ContactPage() {
  return (
    <main>
      <PageHeader
        title="Contact Us"
        description="Get in touch with us for any queries or assistance"
      />
      
      <div className="max-w-[1200px] mx-auto px-4 sm:px-6 lg:px-8 py-8">
        <Breadcrumb items={[{ label: 'Contact' }]} />
      </div>
      
      <Contact />
    </main>
  );
}
