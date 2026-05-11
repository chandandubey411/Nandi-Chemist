'use client';

import { useState } from 'react';
import { useSearchParams } from 'next/navigation';
import { Loader2, User, Phone, Mail, MapPin, Package, MessageSquare } from 'lucide-react';

interface OrderFormProps {
  defaultProductName?: string;
  defaultProductPrice?: string;
  onQuantityChange?: (quantity: number) => void;
}

interface OrderFormData {
  fullName: string;
  phone: string;
  email: string;
  deliveryAddress: string;
  productName: string;
  productPrice: string;
  quantity: number;
  additionalNotes: string;
}

interface FormErrors {
  fullName?: string;
  phone?: string;
  email?: string;
  deliveryAddress?: string;
  productName?: string;
}

type SubmitStatus = 'idle' | 'loading' | 'success' | 'error';

export default function OrderForm({ 
  defaultProductName = '', 
  defaultProductPrice = '',
  onQuantityChange 
}: OrderFormProps) {
  const searchParams = useSearchParams();
  const initialProductName = searchParams.get('name') || defaultProductName;
  const initialProductPrice = searchParams.get('price') || defaultProductPrice;

  const [formData, setFormData] = useState<OrderFormData>({
    fullName: '',
    phone: '',
    email: '',
    deliveryAddress: '',
    productName: initialProductName,
    productPrice: initialProductPrice,
    quantity: 1,
    additionalNotes: ''
  });
  const [errors, setErrors] = useState<FormErrors>({});
  const [submitStatus, setSubmitStatus] = useState<SubmitStatus>('idle');

  const validateForm = (): FormErrors => {
    const newErrors: FormErrors = {};

    if (!formData.fullName.trim()) {
      newErrors.fullName = 'Full name is required';
    }

    if (!formData.phone.trim()) {
      newErrors.phone = 'Phone number is required';
    } else if (!/^[6-9]\d{9}$/.test(formData.phone.trim())) {
      newErrors.phone = 'Please enter a valid 10-digit phone number';
    }

    if (!formData.email.trim()) {
      newErrors.email = 'Email is required';
    } else if (!/^[^\s@]+@[^\s@]+\.[^\s@]+$/.test(formData.email.trim())) {
      newErrors.email = 'Please enter a valid email address';
    }

    if (!formData.deliveryAddress.trim()) {
      newErrors.deliveryAddress = 'Delivery address is required';
    }

    if (!formData.productName.trim()) {
      newErrors.productName = 'Product name is required';
    }

    return newErrors;
  };

  const handleChange = (e: React.ChangeEvent<HTMLInputElement | HTMLTextAreaElement>) => {
    const { name, value } = e.target;
    setFormData(prev => ({ ...prev, [name]: value }));
    // Clear error for this field when user starts typing
    if (errors[name as keyof FormErrors]) {
      setErrors(prev => ({ ...prev, [name]: undefined }));
    }
  };

  const handleQuantityChange = (newQuantity: number) => {
    if (newQuantity >= 1 && newQuantity <= 99) {
      setFormData(prev => ({ ...prev, quantity: newQuantity }));
      if (onQuantityChange) {
        onQuantityChange(newQuantity);
      }
    }
  };

  const handleSubmit = async (e: React.FormEvent) => {
    e.preventDefault();

    // Validate form
    const validationErrors = validateForm();
    if (Object.keys(validationErrors).length > 0) {
      setErrors(validationErrors);
      return;
    }

    setSubmitStatus('loading');

    try {
      const response = await fetch('https://api.web3forms.com/submit', {
        method: 'POST',
        headers: {
          'Content-Type': 'application/json'
        },
        body: JSON.stringify({
          access_key: process.env.NEXT_PUBLIC_WEB3FORMS_KEY,
          subject: `New Order from ${formData.fullName}`,
          full_name: formData.fullName,
          phone: formData.phone,
          email: formData.email,
          delivery_address: formData.deliveryAddress,
          product_name: formData.productName,
          product_price: formData.productPrice,
          quantity: formData.quantity,
          total_amount: formData.productPrice ? 
            `₹${(parseFloat(formData.productPrice.replace(/[₹,]/g, '')) * formData.quantity).toFixed(2)}` : 
            'N/A',
          additional_notes: formData.additionalNotes || 'None'
        })
      });

      if (response.ok) {
        setSubmitStatus('success');
        setFormData({
          fullName: '',
          phone: '',
          email: '',
          deliveryAddress: '',
          productName: defaultProductName,
          productPrice: defaultProductPrice,
          quantity: 1,
          additionalNotes: ''
        });
        setTimeout(() => setSubmitStatus('idle'), 5000);
      } else {
        setSubmitStatus('error');
      }
    } catch (error) {
      setSubmitStatus('error');
    }
  };

  return (
    <div className="bg-white rounded-2xl shadow-xl border border-gray-100 p-8">
      {submitStatus === 'success' && (
        <div className="mb-6 p-4 bg-green-50 border border-green-200 rounded-xl text-green-800">
          <strong>Order Submitted Successfully!</strong>
          <p className="mt-1 text-sm">Thank you! We&apos;ll contact you shortly to confirm your order.</p>
        </div>
      )}

      {submitStatus === 'error' && (
        <div className="mb-6 p-4 bg-red-50 border border-red-200 rounded-xl text-red-800">
          <strong>Something went wrong.</strong>
          <p className="mt-1 text-sm">Please try again or call us directly at 8586850840.</p>
        </div>
      )}

      <form onSubmit={handleSubmit} className="space-y-6">
        {/* Full Name Field */}
        <div>
          <label htmlFor="fullName" className="block text-sm font-semibold text-text mb-2 flex items-center gap-2">
            <User className="w-4 h-4 text-primary" />
            Full Name <span className="text-red-500">*</span>
          </label>
          <input
            type="text"
            id="fullName"
            name="fullName"
            value={formData.fullName}
            onChange={handleChange}
            className={`w-full px-4 py-3 rounded-xl border ${
              errors.fullName ? 'border-red-500' : 'border-gray-300'
            } focus:outline-none focus:ring-2 focus:ring-primary transition-all`}
            placeholder="Enter your full name"
          />
          {errors.fullName && (
            <p className="mt-1 text-sm text-red-500">{errors.fullName}</p>
          )}
        </div>

        {/* Phone Field */}
        <div>
          <label htmlFor="phone" className="block text-sm font-semibold text-text mb-2 flex items-center gap-2">
            <Phone className="w-4 h-4 text-primary" />
            Phone Number <span className="text-red-500">*</span>
          </label>
          <input
            type="tel"
            id="phone"
            name="phone"
            value={formData.phone}
            onChange={handleChange}
            className={`w-full px-4 py-3 rounded-xl border ${
              errors.phone ? 'border-red-500' : 'border-gray-300'
            } focus:outline-none focus:ring-2 focus:ring-primary transition-all`}
            placeholder="Enter 10-digit mobile number"
          />
          {errors.phone && (
            <p className="mt-1 text-sm text-red-500">{errors.phone}</p>
          )}
        </div>

        {/* Email Field */}
        <div>
          <label htmlFor="email" className="block text-sm font-semibold text-text mb-2 flex items-center gap-2">
            <Mail className="w-4 h-4 text-primary" />
            Email Address <span className="text-red-500">*</span>
          </label>
          <input
            type="email"
            id="email"
            name="email"
            value={formData.email}
            onChange={handleChange}
            className={`w-full px-4 py-3 rounded-xl border ${
              errors.email ? 'border-red-500' : 'border-gray-300'
            } focus:outline-none focus:ring-2 focus:ring-primary transition-all`}
            placeholder="your.email@example.com"
          />
          {errors.email && (
            <p className="mt-1 text-sm text-red-500">{errors.email}</p>
          )}
        </div>

        {/* Delivery Address Field */}
        <div>
          <label htmlFor="deliveryAddress" className="block text-sm font-semibold text-text mb-2 flex items-center gap-2">
            <MapPin className="w-4 h-4 text-primary" />
            Delivery Address <span className="text-red-500">*</span>
          </label>
          <textarea
            id="deliveryAddress"
            name="deliveryAddress"
            value={formData.deliveryAddress}
            onChange={handleChange}
            rows={3}
            className={`w-full px-4 py-3 rounded-xl border ${
              errors.deliveryAddress ? 'border-red-500' : 'border-gray-300'
            } focus:outline-none focus:ring-2 focus:ring-primary transition-all resize-none`}
            placeholder="Enter complete delivery address with landmark"
          />
          {errors.deliveryAddress && (
            <p className="mt-1 text-sm text-red-500">{errors.deliveryAddress}</p>
          )}
        </div>

        {/* Product Name Field */}
        <div>
          <label htmlFor="productName" className="block text-sm font-semibold text-text mb-2 flex items-center gap-2">
            <Package className="w-4 h-4 text-primary" />
            Product Name <span className="text-red-500">*</span>
          </label>
          <input
            type="text"
            id="productName"
            name="productName"
            value={formData.productName}
            onChange={handleChange}
            className={`w-full px-4 py-3 rounded-xl border ${
              errors.productName ? 'border-red-500' : 'border-gray-300'
            } focus:outline-none focus:ring-2 focus:ring-primary transition-all`}
            placeholder="Enter product name"
          />
          {errors.productName && (
            <p className="mt-1 text-sm text-red-500">{errors.productName}</p>
          )}
        </div>

        {/* Product Price Field (Read-only if pre-filled) */}
        {formData.productPrice && (
          <div>
            <label htmlFor="productPrice" className="block text-sm font-semibold text-text mb-2">
              Product Price
            </label>
            <input
              type="text"
              id="productPrice"
              name="productPrice"
              value={formData.productPrice}
              readOnly
              className="w-full px-4 py-3 rounded-xl border border-gray-300 bg-gray-50 text-gray-600"
            />
          </div>
        )}

        {/* Quantity Selector */}
        <div>
          <label htmlFor="quantity" className="block text-sm font-semibold text-text mb-2">
            Quantity
          </label>
          <div className="flex items-center gap-4">
            <button
              type="button"
              onClick={() => handleQuantityChange(formData.quantity - 1)}
              className="w-12 h-12 rounded-xl border-2 border-primary text-primary font-bold text-xl hover:bg-primary hover:text-white transition-all"
            >
              −
            </button>
            <input
              type="number"
              id="quantity"
              name="quantity"
              value={formData.quantity}
              onChange={(e) => handleQuantityChange(parseInt(e.target.value) || 1)}
              min="1"
              max="99"
              className="w-20 text-center px-4 py-3 rounded-xl border border-gray-300 focus:outline-none focus:ring-2 focus:ring-primary font-semibold text-lg"
            />
            <button
              type="button"
              onClick={() => handleQuantityChange(formData.quantity + 1)}
              className="w-12 h-12 rounded-xl border-2 border-primary text-primary font-bold text-xl hover:bg-primary hover:text-white transition-all"
            >
              +
            </button>
          </div>
        </div>

        {/* Additional Notes Field */}
        <div>
          <label htmlFor="additionalNotes" className="block text-sm font-semibold text-text mb-2 flex items-center gap-2">
            <MessageSquare className="w-4 h-4 text-primary" />
            Additional Notes (Optional)
          </label>
          <textarea
            id="additionalNotes"
            name="additionalNotes"
            value={formData.additionalNotes}
            onChange={handleChange}
            rows={3}
            className="w-full px-4 py-3 rounded-xl border border-gray-300 focus:outline-none focus:ring-2 focus:ring-primary transition-all resize-none"
            placeholder="Any special instructions or requirements..."
          />
        </div>

        {/* Submit Button */}
        <button
          type="submit"
          disabled={submitStatus === 'loading'}
          className="w-full bg-gradient-to-r from-primary to-blue-600 text-white py-4 px-6 rounded-xl font-semibold text-lg hover:from-blue-700 hover:to-blue-800 transition-all duration-200 disabled:opacity-50 disabled:cursor-not-allowed flex items-center justify-center gap-2 shadow-lg hover:shadow-xl"
        >
          {submitStatus === 'loading' ? (
            <>
              <Loader2 className="w-5 h-5 animate-spin" />
              Submitting Order...
            </>
          ) : (
            'Place Order'
          )}
        </button>
      </form>
    </div>
  );
}
