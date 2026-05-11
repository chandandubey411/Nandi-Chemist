// Utility functions

export interface FormErrors {
  name?: string;
  phone?: string;
  productName?: string;
}

export interface OrderFormData {
  name: string;
  phone: string;
  productName: string;
  message?: string;
}

/**
 * Builds a WhatsApp URL with pre-filled message
 * @param phone - Phone number (with country code, no + symbol)
 * @param message - Pre-filled message text
 * @returns WhatsApp URL
 */
export function buildWhatsAppUrl(phone: string, message: string): string {
  return `https://wa.me/${phone}?text=${encodeURIComponent(message)}`;
}

/**
 * Validates order form data
 * @param data - Form data to validate
 * @returns Object with error messages for invalid fields
 */
export function validateOrderForm(data: OrderFormData): FormErrors {
  const errors: FormErrors = {};

  if (!data.name || data.name.trim() === '') {
    errors.name = 'Name is required';
  }

  if (!data.phone || data.phone.trim() === '') {
    errors.phone = 'Phone number is required';
  }

  if (!data.productName || data.productName.trim() === '') {
    errors.productName = 'Product name is required';
  }

  return errors;
}
