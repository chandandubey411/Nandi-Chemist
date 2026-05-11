import { Suspense } from 'react';
import PageHeader from '@/components/ui/PageHeader';
import Breadcrumb from '@/components/ui/Breadcrumb';
import OrderForm from '@/components/sections/OrderForm';

export default function OrderPage() {
  return (
    <main>
      <PageHeader
        title="Place an Order"
        description="Fill out the form below and we'll contact you shortly to confirm your order"
      />
      
      <div className="max-w-[1200px] mx-auto px-4 sm:px-6 lg:px-8 py-8">
        <Breadcrumb items={[{ label: 'Order' }]} />
      </div>
      
      <div className="max-w-3xl mx-auto px-4 sm:px-6 lg:px-8 mb-16">
        <Suspense fallback={<div className="flex justify-center p-8"><div className="animate-spin rounded-full h-8 w-8 border-b-2 border-primary"></div></div>}>
          <OrderForm />
        </Suspense>
      </div>
      
      {/* Additional Info */}
      <div className="max-w-[1200px] mx-auto px-4 sm:px-6 lg:px-8 pb-16">
        <div className="bg-secondary p-8 rounded-xl">
          <h2 className="text-2xl font-bold text-text mb-4">How It Works</h2>
          <div className="grid md:grid-cols-3 gap-6 text-gray-700">
            <div>
              <div className="w-12 h-12 bg-primary text-white rounded-full flex items-center justify-center font-bold text-xl mb-3">
                1
              </div>
              <h3 className="font-semibold text-text mb-2">Submit Your Order</h3>
              <p>Fill out the form with your details and the medicines you need.</p>
            </div>
            <div>
              <div className="w-12 h-12 bg-primary text-white rounded-full flex items-center justify-center font-bold text-xl mb-3">
                2
              </div>
              <h3 className="font-semibold text-text mb-2">We'll Contact You</h3>
              <p>Our team will call you to confirm availability and pricing.</p>
            </div>
            <div>
              <div className="w-12 h-12 bg-primary text-white rounded-full flex items-center justify-center font-bold text-xl mb-3">
                3
              </div>
              <h3 className="font-semibold text-text mb-2">Fast Delivery</h3>
              <p>Collect from our store or get it delivered to your doorstep.</p>
            </div>
          </div>
        </div>
      </div>
    </main>
  );
}
