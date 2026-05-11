'use client';

import Image from 'next/image';
import { Package, CheckCircle, AlertCircle, FileText } from 'lucide-react';

interface ProductSummaryProps {
  productName: string;
  productPrice: string;
  productImage: string;
  quantity: number;
  inStock: boolean;
  prescriptionRequired?: boolean;
}

export default function ProductSummary({
  productName,
  productPrice,
  productImage,
  quantity,
  inStock,
  prescriptionRequired
}: ProductSummaryProps) {
  // Calculate total price
  const priceValue = parseFloat(productPrice.replace(/[₹,]/g, ''));
  const totalPrice = priceValue * quantity;

  return (
    <div className="bg-white rounded-2xl shadow-xl border border-gray-100 overflow-hidden sticky top-24">
      {/* Header */}
      <div className="bg-gradient-to-r from-primary to-blue-600 text-white px-6 py-4">
        <div className="flex items-center gap-2">
          <Package className="w-5 h-5" />
          <h3 className="text-lg font-semibold">Order Summary</h3>
        </div>
      </div>

      {/* Product Details */}
      <div className="p-6">
        {/* Product Image */}
        <div className="relative w-full h-48 bg-gradient-to-br from-gray-50 to-blue-50/30 rounded-xl mb-4 overflow-hidden">
          <Image
            src={productImage}
            alt={productName}
            fill
            className="object-contain p-4"
          />
        </div>

        {/* Product Info */}
        <div className="space-y-4">
          <div>
            <h4 className="font-semibold text-text text-lg mb-2">{productName}</h4>
            
            {/* Badges */}
            <div className="flex flex-wrap gap-2 mb-3">
              {inStock ? (
                <div className="flex items-center gap-1 bg-green-50 text-green-700 text-xs font-semibold px-3 py-1 rounded-full">
                  <CheckCircle className="w-3 h-3" />
                  In Stock
                </div>
              ) : (
                <div className="flex items-center gap-1 bg-red-50 text-red-700 text-xs font-semibold px-3 py-1 rounded-full">
                  <AlertCircle className="w-3 h-3" />
                  Out of Stock
                </div>
              )}
              
              {prescriptionRequired && (
                <div className="flex items-center gap-1 bg-orange-50 text-orange-700 text-xs font-semibold px-3 py-1 rounded-full">
                  <FileText className="w-3 h-3" />
                  Prescription Required
                </div>
              )}
            </div>
          </div>

          {/* Price Breakdown */}
          <div className="border-t border-gray-200 pt-4 space-y-3">
            <div className="flex justify-between text-gray-600">
              <span>Price per unit:</span>
              <span className="font-semibold">{productPrice}</span>
            </div>
            
            <div className="flex justify-between text-gray-600">
              <span>Quantity:</span>
              <span className="font-semibold">{quantity}</span>
            </div>
            
            <div className="border-t border-gray-200 pt-3 flex justify-between text-lg font-bold text-text">
              <span>Total:</span>
              <span className="text-primary">₹{totalPrice.toFixed(2)}</span>
            </div>
          </div>

          {/* Additional Info */}
          {prescriptionRequired && (
            <div className="bg-orange-50 border border-orange-200 rounded-xl p-4 mt-4">
              <p className="text-sm text-orange-800">
                <strong>Note:</strong> This product requires a valid prescription. Please upload or provide your prescription details when placing the order.
              </p>
            </div>
          )}
        </div>
      </div>
    </div>
  );
}
