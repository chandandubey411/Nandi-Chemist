# Nandi Chemists - Pharmacy Website

A modern, professional multi-page pharmacy website built with Next.js 14, Tailwind CSS, and TypeScript.

## Features

- ✅ Multi-page architecture with proper routing
- ✅ Responsive design (mobile-first)
- ✅ Sticky navigation with active page highlighting
- ✅ Breadcrumb navigation on all pages
- ✅ 9 separate pages with unique content
- ✅ Search and filter functionality on product pages
- ✅ Order form with Web3Forms integration
- ✅ WhatsApp floating CTA
- ✅ Customer testimonials
- ✅ Contact section with Google Maps
- ✅ Accessibility compliant
- ✅ Performance optimized

## Pages

1. **Home (/)** - Hero, categories overview, featured products, testimonials, CTA
2. **Medicines (/medicines)** - Medicine products with search
3. **Baby Care (/baby-care)** - Baby products with search
4. **Nutrition (/nutrition)** - Nutritional supplements with search
5. **Women Care (/women-care)** - Women's health products with search
6. **Personal Care (/personal-care)** - Personal care items with search
7. **Health Devices (/health-devices)** - Medical devices with search
8. **Contact (/contact)** - Contact form and location details
9. **Order (/order)** - Product booking form

## Getting Started

### 1. Install Dependencies

```bash
npm install
```

### 2. Configure Web3Forms

1. Get your free access key from [Web3Forms](https://web3forms.com/)
2. Open `.env.local` and replace `YOUR_ACCESS_KEY_HERE` with your actual key:

```
NEXT_PUBLIC_WEB3FORMS_KEY=your_actual_key_here
```

### 3. Add Product Images

Replace the placeholder files in `public/products/` with actual product images:
- dolo.png
- crocin.png
- pampers.png
- ensure.png
- whisper.png
- omron.png
- himalaya.png
- dabur.png

Recommended image size: 400x400px (square)

### 4. Run Development Server

```bash
npm run dev
```

Open [http://localhost:3000](http://localhost:3000) in your browser.

### 5. Build for Production

```bash
npm run build
npm start
```

## Project Structure

```
nandi-chemists/
├── app/
│   ├── layout.tsx              # Root layout with Navbar, Footer, WhatsApp CTA
│   ├── page.tsx                # Home page
│   ├── medicines/page.tsx      # Medicines page
│   ├── baby-care/page.tsx      # Baby Care page
│   ├── nutrition/page.tsx      # Nutrition page
│   ├── women-care/page.tsx     # Women Care page
│   ├── personal-care/page.tsx  # Personal Care page
│   ├── health-devices/page.tsx # Health Devices page
│   ├── contact/page.tsx        # Contact page
│   ├── order/page.tsx          # Order page
│   └── globals.css             # Global styles and Tailwind config
├── components/
│   ├── layout/
│   │   ├── Navbar.tsx          # Sticky navigation with routing
│   │   └── Footer.tsx          # Footer with page links
│   ├── sections/
│   │   ├── Hero.tsx            # Hero section
│   │   ├── Categories.tsx      # Product categories grid
│   │   ├── Products.tsx        # Featured products
│   │   ├── WhyChooseUs.tsx     # Trust features
│   │   ├── OrderForm.tsx       # Order form with validation
│   │   ├── Testimonials.tsx    # Customer reviews
│   │   └── Contact.tsx         # Contact details and map
│   └── ui/
│       ├── Breadcrumb.tsx      # Breadcrumb navigation
│       ├── PageHeader.tsx      # Page header component
│       ├── SectionHeading.tsx
│       ├── CategoryCard.tsx
│       ├── ProductCard.tsx
│       ├── FeatureBlock.tsx
│       ├── TestimonialCard.tsx
│       └── WhatsAppCTA.tsx
├── data/
│   └── index.ts                # Static data (categories, products, etc.)
├── lib/
│   └── utils.ts                # Utility functions
└── public/
    └── products/               # Product images
```

## Navigation

The website uses Next.js App Router for proper multi-page navigation:
- Each navbar link navigates to a separate page
- Active page is highlighted in the navbar
- Breadcrumb navigation on all pages
- No anchor link scrolling - proper page routing

## Customization

### Colors

Edit `app/globals.css` to change the color scheme:

```css
:root {
  --primary: #2563eb;      /* Medical Blue */
  --secondary: #eff6ff;    /* Light Blue */
  --accent: #22c55e;       /* Green */
  --background: #f8fafc;   /* Light Gray */
  --dark: #0f172a;         /* Dark Gray */
  --text: #0f172a;         /* Text Color */
}
```

### Data

Edit `data/index.ts` to update:
- Categories (with page routes)
- Products
- Features
- Testimonials

### Contact Information

Update contact details in:
- `components/layout/Footer.tsx`
- `components/sections/Contact.tsx`
- `components/ui/WhatsAppCTA.tsx`

## Tech Stack

- **Framework**: Next.js 14 (App Router)
- **Styling**: Tailwind CSS v4
- **Language**: TypeScript
- **Icons**: Lucide React
- **Forms**: Web3Forms
- **Deployment**: Vercel (recommended)

## Deployment

### Deploy to Vercel

1. Push your code to GitHub
2. Import your repository on [Vercel](https://vercel.com)
3. Add your `NEXT_PUBLIC_WEB3FORMS_KEY` environment variable
4. Deploy!

## Support

For issues or questions, contact:
- Email: Nandichemists75@gmail.com
- Phone: 8586850840

## License

© 2025 Nandi Chemists. All rights reserved.
