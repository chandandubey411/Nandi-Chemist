// TypeScript interfaces for static data

export interface Category {
  id: string;
  name: string;
  label: string;
  icon: string;
  href: string;
}

export interface Product {
  id: string;
  name: string;
  price: string;
  image: string;
  category: string;
  description?: string;
  rating?: number;
  inStock?: boolean;
  prescriptionRequired?: boolean;
  discount?: string;
  originalPrice?: string;
  subcategory?: string;
}

export interface Feature {
  id: string;
  icon: string;
  title: string;
  description: string;
}

export interface Testimonial {
  id: string;
  name: string;
  rating: number;
  review: string;
}

// Static data arrays

export const CATEGORIES: Category[] = [
  {
    id: 'medicines',
    name: 'Medicines',
    label: 'Prescription & OTC',
    icon: 'Pill',
    href: '/medicines'
  },
  {
    id: 'baby-care',
    name: 'Baby Care',
    label: 'Diapers, Formula & More',
    icon: 'Baby',
    href: '/baby-care'
  },
  {
    id: 'nutrition',
    name: 'Nutritional Drinks',
    label: 'Supplements & Vitamins',
    icon: 'Beaker',
    href: '/nutrition'
  },
  {
    id: 'women-care',
    name: 'Women Care',
    label: 'Feminine Hygiene & Health',
    icon: 'Heart',
    href: '/women-care'
  },
  {
    id: 'personal-care',
    name: 'Personal Care',
    label: 'Skincare & Hygiene',
    icon: 'Sparkles',
    href: '/personal-care'
  },
  {
    id: 'health-devices',
    name: 'Health Devices',
    label: 'BP Monitors, Glucometers',
    icon: 'Activity',
    href: '/health-devices'
  },
  {
    id: 'ayurvedic',
    name: 'Ayurvedic Products',
    label: 'Natural & Herbal Remedies',
    icon: 'Leaf',
    href: '/medicines'
  },
  {
    id: 'otc',
    name: 'OTC Products',
    label: 'Over-the-Counter Medicines',
    icon: 'ShoppingBag',
    href: '/medicines'
  },
  {
    id: 'daily-essentials',
    name: 'Daily Essentials',
    label: 'Everyday Health Needs',
    icon: 'Package',
    href: '/personal-care'
  }
];

export const FEATURES: Feature[] = [
  {
    id: 'genuine',
    icon: 'ShieldCheck',
    title: 'Genuine Medicines',
    description: 'All products are sourced directly from certified distributors. We guarantee 100% authentic medicines.'
  },
  {
    id: 'affordable',
    icon: 'Tag',
    title: 'Affordable Prices',
    description: 'Competitive pricing on all medicines and health products. We offer the best value in Sector 75.'
  },
  {
    id: 'fast',
    icon: 'Zap',
    title: 'Fast Service',
    description: 'Quick order processing and prompt delivery. Your health needs are our priority.'
  },
  {
    id: 'trusted',
    icon: 'MapPin',
    title: 'Trusted Local Store',
    description: 'Serving the Dasnac Jewel community with care and professionalism since our founding.'
  }
];

export const TESTIMONIALS: Testimonial[] = [
  {
    id: 't1',
    name: 'Priya Sharma',
    rating: 5,
    review: 'Excellent service! Got my medicines quickly and the staff was very helpful.'
  },
  {
    id: 't2',
    name: 'Rahul Verma',
    rating: 5,
    review: 'Best pharmacy in Sector 75. Always have stock and prices are reasonable.'
  },
  {
    id: 't3',
    name: 'Sunita Gupta',
    rating: 4,
    review: 'Very professional and genuine medicines. Highly recommended for families.'
  },
  {
    id: 't4',
    name: 'Amit Kumar',
    rating: 5,
    review: 'Fast delivery and great customer support. My go-to pharmacy now.'
  }
];

export const PRODUCTS: Product[] = [
  // Pain Relief & Fever
  {
    id: 'p1',
    name: 'Dolo 650 (Strip of 15)',
    price: '₹30',
    image: '/products/dolo.png',
    category: 'medicines',
    description: 'Paracetamol for fever and pain relief',
    rating: 4.7,
    inStock: true,
    prescriptionRequired: false,
    subcategory: 'Pain Relief'
  },
  {
    id: 'p2',
    name: 'Crocin Advance (Strip of 10)',
    price: '₹28',
    image: '/products/crocin.png',
    category: 'medicines',
    description: 'Fast relief from fever and headache',
    rating: 4.6,
    inStock: true,
    prescriptionRequired: false,
    subcategory: 'Pain Relief'
  },
  {
    id: 'med1',
    name: 'Combiflam (Strip of 20)',
    price: '₹42',
    image: '/products/combiflam.png',
    category: 'medicines',
    description: 'Pain relief and fever reducer',
    rating: 4.8,
    inStock: true,
    prescriptionRequired: false,
    subcategory: 'Pain Relief'
  },
  {
    id: 'med2',
    name: 'Disprin (Strip of 10)',
    price: '₹18',
    image: '/products/disprin.png',
    category: 'medicines',
    description: 'Aspirin for pain and fever',
    rating: 4.5,
    inStock: true,
    prescriptionRequired: false,
    subcategory: 'Pain Relief'
  },
  {
    id: 'med3',
    name: 'Brufen 400mg (Strip of 15)',
    price: '₹35',
    image: '/products/brufen.png',
    category: 'medicines',
    description: 'Ibuprofen for inflammation and pain',
    rating: 4.6,
    inStock: true,
    prescriptionRequired: true,
    subcategory: 'Pain Relief'
  },
  
  // Cold & Flu
  {
    id: 'med4',
    name: 'Vicks Vaporub (50ml)',
    price: '₹145',
    image: '/products/vicks.png',
    category: 'medicines',
    description: 'Relief from cold and congestion',
    rating: 4.8,
    inStock: true,
    prescriptionRequired: false,
    subcategory: 'Cold & Flu'
  },
  {
    id: 'med5',
    name: 'Benadryl Cough Syrup (100ml)',
    price: '₹95',
    image: '/products/benadryl.png',
    category: 'medicines',
    description: 'Relief from dry cough',
    rating: 4.5,
    inStock: true,
    prescriptionRequired: false,
    subcategory: 'Cold & Flu'
  },
  {
    id: 'med6',
    name: 'Sinarest Tablet (Strip of 10)',
    price: '₹38',
    image: '/products/sinarest.png',
    category: 'medicines',
    description: 'Cold and flu relief',
    rating: 4.6,
    inStock: true,
    prescriptionRequired: false,
    subcategory: 'Cold & Flu'
  },
  {
    id: 'med7',
    name: 'Chericof Syrup (100ml)',
    price: '₹88',
    image: '/products/chericof.png',
    category: 'medicines',
    description: 'Cough suppressant',
    rating: 4.4,
    inStock: true,
    prescriptionRequired: false,
    subcategory: 'Cold & Flu'
  },
  {
    id: 'med8',
    name: 'D-Cold Total (Strip of 10)',
    price: '₹42',
    image: '/products/dcold.png',
    category: 'medicines',
    description: 'Complete cold relief',
    rating: 4.5,
    inStock: true,
    prescriptionRequired: false,
    subcategory: 'Cold & Flu'
  },

  // Antibiotics
  {
    id: 'med9',
    name: 'Azithromycin 500mg (Strip of 3)',
    price: '₹85',
    image: '/products/azithromycin.png',
    category: 'medicines',
    description: 'Antibiotic for bacterial infections',
    rating: 4.7,
    inStock: true,
    prescriptionRequired: true,
    subcategory: 'Antibiotics'
  },
  {
    id: 'med10',
    name: 'Amoxicillin 500mg (Strip of 10)',
    price: '₹65',
    image: '/products/amoxicillin.png',
    category: 'medicines',
    description: 'Broad-spectrum antibiotic',
    rating: 4.6,
    inStock: true,
    prescriptionRequired: true,
    subcategory: 'Antibiotics'
  },
  {
    id: 'med11',
    name: 'Ciprofloxacin 500mg (Strip of 10)',
    price: '₹78',
    image: '/products/cipro.png',
    category: 'medicines',
    description: 'Antibiotic for infections',
    rating: 4.5,
    inStock: false,
    prescriptionRequired: true,
    subcategory: 'Antibiotics'
  },

  // Allergy & Antihistamines
  {
    id: 'med12',
    name: 'Cetirizine 10mg (Strip of 10)',
    price: '₹22',
    image: '/products/cetirizine.png',
    category: 'medicines',
    description: 'Antihistamine for allergies',
    rating: 4.7,
    inStock: true,
    prescriptionRequired: false,
    subcategory: 'Allergy'
  },
  {
    id: 'med13',
    name: 'Allegra 120mg (Strip of 10)',
    price: '₹145',
    image: '/products/allegra.png',
    category: 'medicines',
    description: 'Fast allergy relief',
    rating: 4.8,
    inStock: true,
    prescriptionRequired: false,
    subcategory: 'Allergy'
  },
  {
    id: 'med14',
    name: 'Avil 25mg (Strip of 10)',
    price: '₹18',
    image: '/products/avil.png',
    category: 'medicines',
    description: 'Antiallergic medication',
    rating: 4.5,
    inStock: true,
    prescriptionRequired: false,
    subcategory: 'Allergy'
  },

  // Digestive Health
  {
    id: 'med15',
    name: 'Digene Gel (200ml)',
    price: '₹125',
    image: '/products/digene.png',
    category: 'medicines',
    description: 'Relief from acidity and gas',
    rating: 4.7,
    inStock: true,
    prescriptionRequired: false,
    subcategory: 'Digestive'
  },
  {
    id: 'med16',
    name: 'Eno Fruit Salt (100g)',
    price: '₹85',
    image: '/products/eno.png',
    category: 'medicines',
    description: 'Fast relief from acidity',
    rating: 4.8,
    inStock: true,
    prescriptionRequired: false,
    subcategory: 'Digestive'
  },
  {
    id: 'med17',
    name: 'Pantoprazole 40mg (Strip of 15)',
    price: '₹95',
    image: '/products/pantoprazole.png',
    category: 'medicines',
    description: 'Reduces stomach acid',
    rating: 4.6,
    inStock: true,
    prescriptionRequired: true,
    subcategory: 'Digestive'
  },
  {
    id: 'med18',
    name: 'Pudin Hara (30ml)',
    price: '₹55',
    image: '/products/pudin.png',
    category: 'medicines',
    description: 'Ayurvedic digestive aid',
    rating: 4.5,
    inStock: true,
    prescriptionRequired: false,
    subcategory: 'Digestive'
  },
  {
    id: 'med19',
    name: 'Imodium (Strip of 6)',
    price: '₹68',
    image: '/products/imodium.png',
    category: 'medicines',
    description: 'Anti-diarrheal medication',
    rating: 4.6,
    inStock: true,
    prescriptionRequired: false,
    subcategory: 'Digestive'
  },

  // Vitamins & Supplements
  {
    id: 'med20',
    name: 'Becosules Capsules (Strip of 20)',
    price: '₹42',
    image: '/products/becosules.png',
    category: 'medicines',
    description: 'Vitamin B-Complex supplement',
    rating: 4.7,
    inStock: true,
    prescriptionRequired: false,
    subcategory: 'Vitamins'
  },
  {
    id: 'med21',
    name: 'Vitamin D3 60K (Strip of 4)',
    price: '₹125',
    image: '/products/vitd.png',
    category: 'medicines',
    description: 'Vitamin D supplement',
    rating: 4.8,
    inStock: true,
    prescriptionRequired: false,
    subcategory: 'Vitamins'
  },
  {
    id: 'med22',
    name: 'Calcium Sandoz (Strip of 15)',
    price: '₹95',
    image: '/products/calcium.png',
    category: 'medicines',
    description: 'Calcium supplement',
    rating: 4.6,
    inStock: true,
    prescriptionRequired: false,
    subcategory: 'Vitamins'
  },
  {
    id: 'med23',
    name: 'Zincovit Tablets (Strip of 15)',
    price: '₹110',
    image: '/products/zincovit.png',
    category: 'medicines',
    description: 'Multivitamin with zinc',
    rating: 4.7,
    inStock: true,
    prescriptionRequired: false,
    subcategory: 'Vitamins'
  },

  // Diabetes Care
  {
    id: 'med24',
    name: 'Glucon-D (500g)',
    price: '₹185',
    image: '/products/glucond.png',
    category: 'medicines',
    description: 'Instant energy drink',
    rating: 4.6,
    inStock: true,
    prescriptionRequired: false,
    subcategory: 'Diabetes'
  },
  {
    id: 'med25',
    name: 'ORS Powder (21g x 10 sachets)',
    price: '₹45',
    image: '/products/ors.png',
    category: 'medicines',
    description: 'Oral rehydration salts',
    rating: 4.8,
    inStock: true,
    prescriptionRequired: false,
    subcategory: 'Rehydration'
  },

  // First Aid
  {
    id: 'med26',
    name: 'Dettol Antiseptic Liquid (125ml)',
    price: '₹95',
    image: '/products/dettol.png',
    category: 'medicines',
    description: 'Antiseptic disinfectant',
    rating: 4.8,
    inStock: true,
    prescriptionRequired: false,
    subcategory: 'First Aid'
  },
  {
    id: 'med27',
    name: 'Betadine Solution (100ml)',
    price: '₹115',
    image: '/products/betadine.png',
    category: 'medicines',
    description: 'Antiseptic solution',
    rating: 4.7,
    inStock: true,
    prescriptionRequired: false,
    subcategory: 'First Aid'
  },
  {
    id: 'med28',
    name: 'Band-Aid (Pack of 20)',
    price: '₹65',
    image: '/products/bandaid.png',
    category: 'medicines',
    description: 'Adhesive bandages',
    rating: 4.6,
    inStock: true,
    prescriptionRequired: false,
    subcategory: 'First Aid'
  },
  {
    id: 'med29',
    name: 'Burnol Cream (20g)',
    price: '₹45',
    image: '/products/burnol.png',
    category: 'medicines',
    description: 'Burn relief cream',
    rating: 4.5,
    inStock: true,
    prescriptionRequired: false,
    subcategory: 'First Aid'
  },
  {
    id: 'med30',
    name: 'Volini Gel (30g)',
    price: '₹125',
    image: '/products/volini.png',
    category: 'medicines',
    description: 'Pain relief gel',
    rating: 4.7,
    inStock: true,
    prescriptionRequired: false,
    subcategory: 'Pain Relief'
  },

  // Other categories (existing products)
  {
    id: 'p3',
    name: 'Pampers Baby Diapers (S, 22 pcs)',
    price: '₹499',
    image: '/products/pampers.png',
    category: 'baby-care',
    description: 'Soft and comfortable diapers',
    rating: 4.8,
    inStock: true,
    prescriptionRequired: false,
    subcategory: 'Diapers'
  },
  
  // Additional Baby Care Products
  {
    id: 'baby1',
    name: 'Huggies Wonder Pants (M, 56 pcs)',
    price: '₹899',
    image: '/products/huggies.png',
    category: 'baby-care',
    description: 'Pant-style diapers with 12-hour protection',
    rating: 4.7,
    inStock: true,
    prescriptionRequired: false,
    subcategory: 'Diapers'
  },
  {
    id: 'baby2',
    name: 'MamyPoko Pants (L, 42 pcs)',
    price: '₹749',
    image: '/products/mamypoko.png',
    category: 'baby-care',
    description: 'Extra absorb pants for active babies',
    rating: 4.6,
    inStock: true,
    prescriptionRequired: false,
    subcategory: 'Diapers'
  },
  {
    id: 'baby3',
    name: 'Pampers Baby Wipes (72 pcs)',
    price: '₹199',
    image: '/products/pampers-wipes.png',
    category: 'baby-care',
    description: 'Gentle and soft baby wipes',
    rating: 4.8,
    inStock: true,
    prescriptionRequired: false,
    subcategory: 'Wipes & Hygiene'
  },
  {
    id: 'baby4',
    name: 'Himalaya Baby Wipes (72 pcs)',
    price: '₹145',
    image: '/products/himalaya-wipes.png',
    category: 'baby-care',
    description: 'Herbal baby wipes with aloe vera',
    rating: 4.5,
    inStock: true,
    prescriptionRequired: false,
    subcategory: 'Wipes & Hygiene'
  },
  {
    id: 'baby5',
    name: "Johnson's Baby Lotion (200ml)",
    price: '₹225',
    image: '/products/johnsons-lotion.png',
    category: 'baby-care',
    description: 'Clinically proven mild baby lotion',
    rating: 4.7,
    inStock: true,
    prescriptionRequired: false,
    subcategory: 'Skincare'
  },
  {
    id: 'baby6',
    name: "Johnson's Baby Oil (200ml)",
    price: '₹245',
    image: '/products/johnsons-oil.png',
    category: 'baby-care',
    description: 'Pure mineral oil for baby massage',
    rating: 4.8,
    inStock: true,
    prescriptionRequired: false,
    subcategory: 'Skincare'
  },
  {
    id: 'baby7',
    name: "Johnson's Baby Shampoo (200ml)",
    price: '₹235',
    image: '/products/johnsons-shampoo.png',
    category: 'baby-care',
    description: 'No more tears formula',
    rating: 4.7,
    inStock: true,
    prescriptionRequired: false,
    subcategory: 'Bath & Hygiene'
  },
  {
    id: 'baby8',
    name: "Johnson's Baby Soap (75g x 4)",
    price: '₹180',
    image: '/products/johnsons-soap.png',
    category: 'baby-care',
    description: 'Gentle cleansing for baby skin',
    rating: 4.6,
    inStock: true,
    prescriptionRequired: false,
    subcategory: 'Bath & Hygiene'
  },
  {
    id: 'baby9',
    name: "Johnson's Baby Powder (200g)",
    price: '₹195',
    image: '/products/johnsons-powder.png',
    category: 'baby-care',
    description: 'Keeps baby skin dry and fresh',
    rating: 4.5,
    inStock: true,
    prescriptionRequired: false,
    subcategory: 'Skincare'
  },
  {
    id: 'baby10',
    name: 'Himalaya Baby Cream (100g)',
    price: '₹165',
    image: '/products/himalaya-cream.png',
    category: 'baby-care',
    description: 'Herbal baby cream for soft skin',
    rating: 4.6,
    inStock: true,
    prescriptionRequired: false,
    subcategory: 'Skincare'
  },
  {
    id: 'baby11',
    name: 'Himalaya Baby Lotion (200ml)',
    price: '₹185',
    image: '/products/himalaya-lotion.png',
    category: 'baby-care',
    description: 'Natural moisturizer for babies',
    rating: 4.5,
    inStock: true,
    prescriptionRequired: false,
    subcategory: 'Skincare'
  },
  {
    id: 'baby12',
    name: 'Chicco Feeding Bottle (150ml)',
    price: '₹325',
    image: '/products/chicco-bottle.png',
    category: 'baby-care',
    description: 'Anti-colic feeding bottle',
    rating: 4.7,
    inStock: true,
    prescriptionRequired: false,
    subcategory: 'Feeding'
  },
  {
    id: 'baby13',
    name: 'Pigeon Feeding Bottle (240ml)',
    price: '₹295',
    image: '/products/pigeon-bottle.png',
    category: 'baby-care',
    description: 'BPA-free baby bottle',
    rating: 4.6,
    inStock: true,
    prescriptionRequired: false,
    subcategory: 'Feeding'
  },
  {
    id: 'baby14',
    name: 'Mee Mee Bottle Nipples (Pack of 2)',
    price: '₹145',
    image: '/products/meemee-nipples.png',
    category: 'baby-care',
    description: 'Soft silicone nipples',
    rating: 4.5,
    inStock: true,
    prescriptionRequired: false,
    subcategory: 'Feeding'
  },
  {
    id: 'baby15',
    name: 'Farlin Baby Sipper (250ml)',
    price: '₹275',
    image: '/products/farlin-sipper.png',
    category: 'baby-care',
    description: 'Spill-proof training cup',
    rating: 4.6,
    inStock: true,
    prescriptionRequired: false,
    subcategory: 'Feeding'
  },
  {
    id: 'baby16',
    name: 'Cerelac Wheat (300g)',
    price: '₹185',
    image: '/products/cerelac.png',
    category: 'baby-care',
    description: 'Baby cereal with iron',
    rating: 4.8,
    inStock: true,
    prescriptionRequired: false,
    subcategory: 'Baby Food'
  },
  {
    id: 'baby17',
    name: 'Lactogen 1 (400g)',
    price: '₹495',
    image: '/products/lactogen.png',
    category: 'baby-care',
    description: 'Infant formula for 0-6 months',
    rating: 4.7,
    inStock: true,
    prescriptionRequired: false,
    subcategory: 'Baby Food'
  },
  {
    id: 'baby18',
    name: 'Sebamed Baby Lotion (200ml)',
    price: '₹425',
    image: '/products/sebamed-lotion.png',
    category: 'baby-care',
    description: 'pH 5.5 baby lotion',
    rating: 4.9,
    inStock: true,
    prescriptionRequired: false,
    subcategory: 'Skincare'
  },
  {
    id: 'baby19',
    name: 'Mamaearth Baby Lotion (200ml)',
    price: '₹349',
    image: '/products/mamaearth-lotion.png',
    category: 'baby-care',
    description: 'Natural baby moisturizer',
    rating: 4.7,
    inStock: true,
    prescriptionRequired: false,
    subcategory: 'Skincare'
  },
  {
    id: 'baby20',
    name: 'Chicco Baby Moments Bath Foam (200ml)',
    price: '₹295',
    image: '/products/chicco-bath.png',
    category: 'baby-care',
    description: 'Tear-free bath foam',
    rating: 4.6,
    inStock: true,
    prescriptionRequired: false,
    subcategory: 'Bath & Hygiene'
  },
  {
    id: 'baby21',
    name: 'Mee Mee Baby Nail Clipper',
    price: '₹125',
    image: '/products/meemee-clipper.png',
    category: 'baby-care',
    description: 'Safe nail clipper with magnifier',
    rating: 4.5,
    inStock: true,
    prescriptionRequired: false,
    subcategory: 'Baby Care Accessories'
  },
  {
    id: 'baby22',
    name: 'Pigeon Baby Brush & Comb Set',
    price: '₹165',
    image: '/products/pigeon-brush.png',
    category: 'baby-care',
    description: 'Soft bristle brush set',
    rating: 4.6,
    inStock: true,
    prescriptionRequired: false,
    subcategory: 'Baby Care Accessories'
  },
  {
    id: 'baby23',
    name: 'Himalaya Diaper Rash Cream (50g)',
    price: '₹145',
    image: '/products/himalaya-rash.png',
    category: 'baby-care',
    description: 'Soothes diaper rash',
    rating: 4.7,
    inStock: true,
    prescriptionRequired: false,
    subcategory: 'Skincare'
  },
  {
    id: 'baby24',
    name: 'Chicco Baby Thermometer',
    price: '₹395',
    image: '/products/chicco-thermometer.png',
    category: 'baby-care',
    description: 'Digital thermometer for babies',
    rating: 4.8,
    inStock: true,
    prescriptionRequired: false,
    subcategory: 'Baby Care Accessories'
  },
  {
    id: 'baby25',
    name: 'Mee Mee Baby Laundry Detergent (500ml)',
    price: '₹245',
    image: '/products/meemee-detergent.png',
    category: 'baby-care',
    description: 'Gentle on baby clothes',
    rating: 4.5,
    inStock: true,
    prescriptionRequired: false,
    subcategory: 'Baby Care Accessories'
  },
  {
    id: 'p4',
    name: 'Ensure Nutrition Powder (400g)',
    price: '₹699',
    image: '/products/ensure.png',
    category: 'nutrition',
    description: 'Complete nutrition supplement',
    rating: 4.7,
    inStock: true,
    prescriptionRequired: false,
    subcategory: 'Health Drinks'
  },
  
  // Additional Nutrition Products
  {
    id: 'nutr1',
    name: 'Horlicks Protein+ (400g)',
    price: '₹425',
    image: '/products/horlicks-protein.png',
    category: 'nutrition',
    description: 'High protein health drink',
    rating: 4.6,
    inStock: true,
    prescriptionRequired: false,
    subcategory: 'Protein & Fitness'
  },
  {
    id: 'nutr2',
    name: 'Protinex Original (250g)',
    price: '₹545',
    image: '/products/protinex.png',
    category: 'nutrition',
    description: 'Protein supplement for strength',
    rating: 4.7,
    inStock: true,
    prescriptionRequired: false,
    subcategory: 'Protein & Fitness'
  },
  {
    id: 'nutr3',
    name: 'MuscleBlaze Whey Protein (1kg)',
    price: '₹2,499',
    image: '/products/whey.png',
    category: 'nutrition',
    description: 'Premium whey protein isolate',
    rating: 4.8,
    inStock: true,
    prescriptionRequired: false,
    subcategory: 'Protein & Fitness'
  },
  {
    id: 'nutr4',
    name: 'Optimum Nutrition Gold Standard (2lbs)',
    price: '₹3,999',
    image: '/products/on-gold.png',
    category: 'nutrition',
    description: 'World-class whey protein',
    rating: 4.9,
    inStock: true,
    prescriptionRequired: false,
    subcategory: 'Protein & Fitness'
  },
  {
    id: 'nutr5',
    name: 'BCAA Amino Acids (200g)',
    price: '₹1,299',
    image: '/products/bcaa.png',
    category: 'nutrition',
    description: 'Supports muscle recovery',
    rating: 4.6,
    inStock: true,
    prescriptionRequired: false,
    subcategory: 'Protein & Fitness'
  },
  {
    id: 'nutr6',
    name: 'Creatine Monohydrate (250g)',
    price: '₹899',
    image: '/products/creatine.png',
    category: 'nutrition',
    description: 'Enhances strength and performance',
    rating: 4.7,
    inStock: true,
    prescriptionRequired: false,
    subcategory: 'Protein & Fitness'
  },
  {
    id: 'nutr7',
    name: 'Vitamin C 1000mg (60 tablets)',
    price: '₹299',
    image: '/products/vitc.png',
    category: 'nutrition',
    description: 'Boosts immunity naturally',
    rating: 4.8,
    inStock: true,
    prescriptionRequired: false,
    subcategory: 'Vitamins & Immunity'
  },
  {
    id: 'nutr8',
    name: 'Zinc Tablets 50mg (100 tablets)',
    price: '₹249',
    image: '/products/zinc.png',
    category: 'nutrition',
    description: 'Supports immune function',
    rating: 4.6,
    inStock: true,
    prescriptionRequired: false,
    subcategory: 'Vitamins & Immunity'
  },
  {
    id: 'nutr9',
    name: 'Multivitamin Daily (60 tablets)',
    price: '₹399',
    image: '/products/multivit.png',
    category: 'nutrition',
    description: 'Complete daily nutrition',
    rating: 4.7,
    inStock: true,
    prescriptionRequired: false,
    subcategory: 'Vitamins & Immunity'
  },
  {
    id: 'nutr10',
    name: 'Omega-3 Fish Oil (60 capsules)',
    price: '₹599',
    image: '/products/omega3.png',
    category: 'nutrition',
    description: 'Heart and brain health',
    rating: 4.8,
    inStock: true,
    prescriptionRequired: false,
    subcategory: 'Vitamins & Immunity'
  },
  {
    id: 'nutr11',
    name: 'Iron Supplement (100 tablets)',
    price: '₹199',
    image: '/products/iron.png',
    category: 'nutrition',
    description: 'Prevents anemia',
    rating: 4.5,
    inStock: true,
    prescriptionRequired: false,
    subcategory: 'Vitamins & Immunity'
  },
  {
    id: 'nutr12',
    name: 'Vitamin B12 (60 tablets)',
    price: '₹279',
    image: '/products/vitb12.png',
    category: 'nutrition',
    description: 'Energy and nerve health',
    rating: 4.7,
    inStock: true,
    prescriptionRequired: false,
    subcategory: 'Vitamins & Immunity'
  },
  {
    id: 'nutr13',
    name: 'Bournvita Health Drink (500g)',
    price: '₹245',
    image: '/products/bournvita.png',
    category: 'nutrition',
    description: 'Energy and nutrition for kids',
    rating: 4.6,
    inStock: true,
    prescriptionRequired: false,
    subcategory: 'Health Drinks'
  },
  {
    id: 'nutr14',
    name: 'Boost Health Drink (500g)',
    price: '₹285',
    image: '/products/boost.png',
    category: 'nutrition',
    description: 'Energy for active lifestyle',
    rating: 4.7,
    inStock: true,
    prescriptionRequired: false,
    subcategory: 'Health Drinks'
  },
  {
    id: 'nutr15',
    name: 'Pediasure Vanilla (400g)',
    price: '₹749',
    image: '/products/pediasure.png',
    category: 'nutrition',
    description: 'Complete nutrition for kids',
    rating: 4.8,
    inStock: true,
    prescriptionRequired: false,
    subcategory: 'Health Drinks'
  },
  {
    id: 'nutr16',
    name: 'Complan Chocolate (500g)',
    price: '₹395',
    image: '/products/complan.png',
    category: 'nutrition',
    description: 'Growth and development',
    rating: 4.6,
    inStock: true,
    prescriptionRequired: false,
    subcategory: 'Health Drinks'
  },
  {
    id: 'nutr17',
    name: 'Glucon-D Orange (500g)',
    price: '₹185',
    image: '/products/glucond-orange.png',
    category: 'nutrition',
    description: 'Instant energy drink',
    rating: 4.5,
    inStock: true,
    prescriptionRequired: false,
    subcategory: 'Health Drinks'
  },
  {
    id: 'nutr18',
    name: 'Dabur Chyawanprash Special (1kg)',
    price: '₹485',
    image: '/products/chyawan-special.png',
    category: 'nutrition',
    description: 'Ayurvedic immunity booster',
    rating: 4.8,
    inStock: true,
    prescriptionRequired: false,
    subcategory: 'Herbal & Ayurvedic'
  },
  {
    id: 'nutr19',
    name: 'Ashwagandha Capsules (60 caps)',
    price: '₹399',
    image: '/products/ashwagandha.png',
    category: 'nutrition',
    description: 'Reduces stress and anxiety',
    rating: 4.7,
    inStock: true,
    prescriptionRequired: false,
    subcategory: 'Herbal & Ayurvedic'
  },
  {
    id: 'nutr20',
    name: 'Tulsi Drops (30ml)',
    price: '₹125',
    image: '/products/tulsi.png',
    category: 'nutrition',
    description: 'Natural immunity booster',
    rating: 4.6,
    inStock: true,
    prescriptionRequired: false,
    subcategory: 'Herbal & Ayurvedic'
  },
  {
    id: 'nutr21',
    name: 'Giloy Capsules (60 caps)',
    price: '₹299',
    image: '/products/giloy.png',
    category: 'nutrition',
    description: 'Boosts immunity naturally',
    rating: 4.7,
    inStock: true,
    prescriptionRequired: false,
    subcategory: 'Herbal & Ayurvedic'
  },
  {
    id: 'nutr22',
    name: 'Mass Gainer Chocolate (3kg)',
    price: '₹2,999',
    image: '/products/mass-gainer.png',
    category: 'nutrition',
    description: 'Weight gain supplement',
    rating: 4.6,
    inStock: true,
    prescriptionRequired: false,
    subcategory: 'Weight Gain'
  },
  {
    id: 'nutr23',
    name: 'Serious Mass (6lbs)',
    price: '₹3,499',
    image: '/products/serious-mass.png',
    category: 'nutrition',
    description: 'High-calorie weight gainer',
    rating: 4.7,
    inStock: true,
    prescriptionRequired: false,
    subcategory: 'Weight Gain'
  },
  {
    id: 'nutr24',
    name: 'Pre-Workout Energy (300g)',
    price: '₹1,499',
    image: '/products/preworkout.png',
    category: 'nutrition',
    description: 'Explosive energy for workouts',
    rating: 4.8,
    inStock: true,
    prescriptionRequired: false,
    subcategory: 'Protein & Fitness'
  },
  {
    id: 'nutr25',
    name: 'Collagen Peptides (200g)',
    price: '₹1,299',
    image: '/products/collagen.png',
    category: 'nutrition',
    description: 'Skin, hair, and joint health',
    rating: 4.7,
    inStock: true,
    prescriptionRequired: false,
    subcategory: 'Vitamins & Immunity'
  },
  {
    id: 'nutr26',
    name: 'Probiotics (30 capsules)',
    price: '₹699',
    image: '/products/probiotics.png',
    category: 'nutrition',
    description: 'Gut health support',
    rating: 4.6,
    inStock: true,
    prescriptionRequired: false,
    subcategory: 'Vitamins & Immunity'
  },
  {
    id: 'nutr27',
    name: 'Biotin Hair Vitamins (60 tablets)',
    price: '₹499',
    image: '/products/biotin.png',
    category: 'nutrition',
    description: 'Healthy hair and nails',
    rating: 4.7,
    inStock: true,
    prescriptionRequired: false,
    subcategory: 'Vitamins & Immunity'
  },
  {
    id: 'nutr28',
    name: 'Magnesium Supplement (100 tablets)',
    price: '₹349',
    image: '/products/magnesium.png',
    category: 'nutrition',
    description: 'Muscle and nerve function',
    rating: 4.6,
    inStock: true,
    prescriptionRequired: false,
    subcategory: 'Vitamins & Immunity'
  },
  {
    id: 'nutr29',
    name: 'Green Tea Extract (60 capsules)',
    price: '₹599',
    image: '/products/greentea.png',
    category: 'nutrition',
    description: 'Antioxidant and metabolism boost',
    rating: 4.7,
    inStock: true,
    prescriptionRequired: false,
    subcategory: 'Herbal & Ayurvedic'
  },
  {
    id: 'nutr30',
    name: 'Apple Cider Vinegar (500ml)',
    price: '₹399',
    image: '/products/acv.png',
    category: 'nutrition',
    description: 'Weight management support',
    rating: 4.5,
    inStock: true,
    prescriptionRequired: false,
    subcategory: 'Herbal & Ayurvedic'
  },
  {
    id: 'p5',
    name: 'Whisper Ultra Soft (XL, 30 pads)',
    price: '₹249',
    image: '/products/whisper.png',
    category: 'women-care',
    description: 'Sanitary pads',
    rating: 4.6,
    inStock: true,
    prescriptionRequired: false,
    subcategory: 'Feminine Hygiene'
  },
  
  // Additional Women Care Products
  {
    id: 'women1',
    name: 'Stayfree Secure XL (30 pads)',
    price: '₹229',
    image: '/products/stayfree.png',
    category: 'women-care',
    description: 'All-day comfort and protection',
    rating: 4.5,
    inStock: true,
    prescriptionRequired: false,
    subcategory: 'Feminine Hygiene'
  },
  {
    id: 'women2',
    name: 'Sofy Antibacterial Pads (XL, 28 pcs)',
    price: '₹265',
    image: '/products/sofy.png',
    category: 'women-care',
    description: 'Antibacterial protection',
    rating: 4.7,
    inStock: true,
    prescriptionRequired: false,
    subcategory: 'Feminine Hygiene'
  },
  {
    id: 'women3',
    name: 'Whisper Choice Panty Liners (40 pcs)',
    price: '₹145',
    image: '/products/whisper-liners.png',
    category: 'women-care',
    description: 'Daily freshness and comfort',
    rating: 4.6,
    inStock: true,
    prescriptionRequired: false,
    subcategory: 'Feminine Hygiene'
  },
  {
    id: 'women4',
    name: 'Sirona Menstrual Cup (Medium)',
    price: '₹399',
    image: '/products/menstrual-cup.png',
    category: 'women-care',
    description: 'Eco-friendly period care',
    rating: 4.8,
    inStock: true,
    prescriptionRequired: false,
    subcategory: 'Feminine Hygiene'
  },
  {
    id: 'women5',
    name: 'VWash Plus Intimate Hygiene Wash (200ml)',
    price: '₹245',
    image: '/products/vwash.png',
    category: 'women-care',
    description: 'Gentle intimate care',
    rating: 4.7,
    inStock: true,
    prescriptionRequired: false,
    subcategory: 'Feminine Hygiene'
  },
  {
    id: 'women6',
    name: 'Lactacyd Intimate Wash (150ml)',
    price: '₹225',
    image: '/products/lactacyd.png',
    category: 'women-care',
    description: 'pH balanced intimate wash',
    rating: 4.6,
    inStock: true,
    prescriptionRequired: false,
    subcategory: 'Feminine Hygiene'
  },
  {
    id: 'women7',
    name: 'Iron Supplement for Women (60 tablets)',
    price: '₹299',
    image: '/products/iron-women.png',
    category: 'women-care',
    description: 'Prevents anemia and fatigue',
    rating: 4.7,
    inStock: true,
    prescriptionRequired: false,
    subcategory: 'Women Wellness'
  },
  {
    id: 'women8',
    name: 'Calcium + Vitamin D for Women (60 tablets)',
    price: '₹399',
    image: '/products/calcium-women.png',
    category: 'women-care',
    description: 'Bone health support',
    rating: 4.8,
    inStock: true,
    prescriptionRequired: false,
    subcategory: 'Women Wellness'
  },
  {
    id: 'women9',
    name: 'Multivitamin for Women (60 tablets)',
    price: '₹499',
    image: '/products/multivit-women.png',
    category: 'women-care',
    description: 'Complete daily nutrition',
    rating: 4.7,
    inStock: true,
    prescriptionRequired: false,
    subcategory: 'Women Wellness'
  },
  {
    id: 'women10',
    name: 'PCOS Support Supplement (60 capsules)',
    price: '₹799',
    image: '/products/pcos.png',
    category: 'women-care',
    description: 'Hormonal balance support',
    rating: 4.6,
    inStock: true,
    prescriptionRequired: false,
    subcategory: 'Women Wellness'
  },
  {
    id: 'women11',
    name: 'Folic Acid for Women (90 tablets)',
    price: '₹199',
    image: '/products/folic.png',
    category: 'women-care',
    description: 'Essential for pregnancy',
    rating: 4.8,
    inStock: true,
    prescriptionRequired: false,
    subcategory: 'Women Wellness'
  },
  {
    id: 'women12',
    name: 'Evening Primrose Oil (60 capsules)',
    price: '₹699',
    image: '/products/primrose.png',
    category: 'women-care',
    description: 'Hormonal health support',
    rating: 4.7,
    inStock: true,
    prescriptionRequired: false,
    subcategory: 'Women Wellness'
  },
  {
    id: 'women13',
    name: 'Cetaphil Gentle Face Wash (125ml)',
    price: '₹399',
    image: '/products/cetaphil-wash.png',
    category: 'women-care',
    description: 'Gentle cleansing for all skin types',
    rating: 4.8,
    inStock: true,
    prescriptionRequired: false,
    subcategory: 'Skincare'
  },
  {
    id: 'women14',
    name: 'Neutrogena Hydro Boost (50g)',
    price: '₹599',
    image: '/products/neutrogena.png',
    category: 'women-care',
    description: 'Intense hydration gel',
    rating: 4.7,
    inStock: true,
    prescriptionRequired: false,
    subcategory: 'Skincare'
  },
  {
    id: 'women15',
    name: 'Lakme Sunscreen SPF 50 (50ml)',
    price: '₹349',
    image: '/products/lakme-sunscreen.png',
    category: 'women-care',
    description: 'Broad spectrum sun protection',
    rating: 4.6,
    inStock: true,
    prescriptionRequired: false,
    subcategory: 'Skincare'
  },
  {
    id: 'women16',
    name: 'Plum Vitamin C Serum (30ml)',
    price: '₹599',
    image: '/products/plum-serum.png',
    category: 'women-care',
    description: 'Brightening and anti-aging',
    rating: 4.8,
    inStock: true,
    prescriptionRequired: false,
    subcategory: 'Skincare'
  },
  {
    id: 'women17',
    name: 'Nivea Soft Moisturizer (100ml)',
    price: '₹199',
    image: '/products/nivea.png',
    category: 'women-care',
    description: 'Light moisturizing cream',
    rating: 4.5,
    inStock: true,
    prescriptionRequired: false,
    subcategory: 'Skincare'
  },
  {
    id: 'women18',
    name: 'Himalaya Lip Care (4.5g)',
    price: '₹85',
    image: '/products/himalaya-lip.png',
    category: 'women-care',
    description: 'Natural lip balm',
    rating: 4.6,
    inStock: true,
    prescriptionRequired: false,
    subcategory: 'Skincare'
  },
  {
    id: 'women19',
    name: 'Mamaearth Onion Hair Oil (250ml)',
    price: '₹449',
    image: '/products/onion-oil.png',
    category: 'women-care',
    description: 'Hair growth and strength',
    rating: 4.7,
    inStock: true,
    prescriptionRequired: false,
    subcategory: 'Hair Care'
  },
  {
    id: 'women20',
    name: 'Dove Hair Fall Rescue Shampoo (340ml)',
    price: '₹295',
    image: '/products/dove-shampoo.png',
    category: 'women-care',
    description: 'Reduces hair fall',
    rating: 4.6,
    inStock: true,
    prescriptionRequired: false,
    subcategory: 'Hair Care'
  },
  {
    id: 'women21',
    name: 'Pantene Hair Conditioner (340ml)',
    price: '₹315',
    image: '/products/pantene.png',
    category: 'women-care',
    description: 'Smooth and silky hair',
    rating: 4.5,
    inStock: true,
    prescriptionRequired: false,
    subcategory: 'Hair Care'
  },
  {
    id: 'women22',
    name: 'Livon Hair Serum (100ml)',
    price: '₹245',
    image: '/products/livon.png',
    category: 'women-care',
    description: 'Frizz control and shine',
    rating: 4.7,
    inStock: true,
    prescriptionRequired: false,
    subcategory: 'Hair Care'
  },
  {
    id: 'women23',
    name: 'Palmer\'s Stretch Mark Cream (125g)',
    price: '₹699',
    image: '/products/palmers.png',
    category: 'women-care',
    description: 'Prevents stretch marks',
    rating: 4.8,
    inStock: true,
    prescriptionRequired: false,
    subcategory: 'Pregnancy Care'
  },
  {
    id: 'women24',
    name: 'Prenatal Multivitamin (60 tablets)',
    price: '₹599',
    image: '/products/prenatal.png',
    category: 'women-care',
    description: 'Complete pregnancy nutrition',
    rating: 4.9,
    inStock: true,
    prescriptionRequired: false,
    subcategory: 'Pregnancy Care'
  },
  {
    id: 'women25',
    name: 'Lansinoh Nipple Cream (40g)',
    price: '₹549',
    image: '/products/lansinoh.png',
    category: 'women-care',
    description: 'Nursing care and comfort',
    rating: 4.7,
    inStock: true,
    prescriptionRequired: false,
    subcategory: 'Pregnancy Care'
  },
  {
    id: 'women26',
    name: 'Mama\'s Choice Belly Oil (100ml)',
    price: '₹499',
    image: '/products/belly-oil.png',
    category: 'women-care',
    description: 'Nourishes pregnancy skin',
    rating: 4.6,
    inStock: true,
    prescriptionRequired: false,
    subcategory: 'Pregnancy Care'
  },
  {
    id: 'women27',
    name: 'Biotique Bio Almond Face Wash (150ml)',
    price: '₹185',
    image: '/products/biotique.png',
    category: 'women-care',
    description: 'Natural deep cleansing',
    rating: 4.5,
    inStock: true,
    prescriptionRequired: false,
    subcategory: 'Skincare'
  },
  {
    id: 'women28',
    name: 'Garnier Micellar Water (125ml)',
    price: '₹249',
    image: '/products/garnier-micellar.png',
    category: 'women-care',
    description: 'Makeup remover and cleanser',
    rating: 4.7,
    inStock: true,
    prescriptionRequired: false,
    subcategory: 'Skincare'
  },
  {
    id: 'women29',
    name: 'Lotus Herbals Night Cream (60g)',
    price: '₹425',
    image: '/products/lotus.png',
    category: 'women-care',
    description: 'Overnight skin repair',
    rating: 4.6,
    inStock: true,
    prescriptionRequired: false,
    subcategory: 'Skincare'
  },
  {
    id: 'women30',
    name: 'Bella Vita Perfume (100ml)',
    price: '₹599',
    image: '/products/bellavita.png',
    category: 'women-care',
    description: 'Long-lasting fragrance',
    rating: 4.8,
    inStock: true,
    prescriptionRequired: false,
    subcategory: 'Personal Care'
  },
  {
    id: 'p6',
    name: 'Omron BP Monitor (HEM-7120)',
    price: '₹1,799',
    image: '/products/omron.png',
    category: 'health-devices',
    description: 'Digital blood pressure monitor',
    rating: 4.8,
    inStock: true,
    prescriptionRequired: false,
    subcategory: 'Monitoring Devices'
  },
  
  // Additional Health Device Products
  {
    id: 'hd1',
    name: 'Dr. Morepen BP Monitor (BP-02)',
    price: '₹1,299',
    image: '/products/morepen-bp.png',
    category: 'health-devices',
    description: 'Accurate blood pressure monitoring',
    rating: 4.6,
    inStock: true,
    prescriptionRequired: false,
    subcategory: 'Monitoring Devices'
  },
  {
    id: 'hd2',
    name: 'Omron Digital Thermometer (MC-246)',
    price: '₹299',
    image: '/products/omron-thermo.png',
    category: 'health-devices',
    description: 'Fast temperature reading',
    rating: 4.7,
    inStock: true,
    prescriptionRequired: false,
    subcategory: 'Monitoring Devices'
  },
  {
    id: 'hd3',
    name: 'Dr. Trust Infrared Thermometer',
    price: '₹899',
    image: '/products/drtrust-thermo.png',
    category: 'health-devices',
    description: 'Non-contact temperature check',
    rating: 4.5,
    inStock: true,
    prescriptionRequired: false,
    subcategory: 'Monitoring Devices'
  },
  {
    id: 'hd4',
    name: 'BPL Pulse Oximeter',
    price: '₹1,499',
    image: '/products/bpl-oximeter.png',
    category: 'health-devices',
    description: 'Oxygen saturation monitor',
    rating: 4.8,
    inStock: true,
    prescriptionRequired: false,
    subcategory: 'Monitoring Devices'
  },
  {
    id: 'hd5',
    name: 'Dr. Morepen Pulse Oximeter (PO-04)',
    price: '₹1,199',
    image: '/products/morepen-oximeter.png',
    category: 'health-devices',
    description: 'SpO2 and pulse rate monitor',
    rating: 4.6,
    inStock: true,
    prescriptionRequired: false,
    subcategory: 'Monitoring Devices'
  },
  {
    id: 'hd6',
    name: 'Accu-Chek Active Glucometer',
    price: '₹899',
    image: '/products/accuchek.png',
    category: 'health-devices',
    description: 'Blood glucose monitoring',
    rating: 4.9,
    inStock: true,
    prescriptionRequired: false,
    subcategory: 'Monitoring Devices'
  },
  {
    id: 'hd7',
    name: 'Dr. Morepen Glucometer (BG-03)',
    price: '₹699',
    image: '/products/morepen-gluco.png',
    category: 'health-devices',
    description: 'Easy diabetes monitoring',
    rating: 4.5,
    inStock: true,
    prescriptionRequired: false,
    subcategory: 'Monitoring Devices'
  },
  {
    id: 'hd8',
    name: 'Omron Digital Weighing Scale (HN-289)',
    price: '₹1,299',
    image: '/products/omron-scale.png',
    category: 'health-devices',
    description: 'Accurate weight measurement',
    rating: 4.7,
    inStock: true,
    prescriptionRequired: false,
    subcategory: 'Monitoring Devices'
  },
  {
    id: 'hd9',
    name: 'Dr. Trust Digital Weighing Scale',
    price: '₹899',
    image: '/products/drtrust-scale.png',
    category: 'health-devices',
    description: 'Body weight monitor',
    rating: 4.6,
    inStock: true,
    prescriptionRequired: false,
    subcategory: 'Monitoring Devices'
  },
  {
    id: 'hd10',
    name: 'Tynor Knee Cap (Pair)',
    price: '₹399',
    image: '/products/tynor-knee.png',
    category: 'health-devices',
    description: 'Knee support and protection',
    rating: 4.5,
    inStock: true,
    prescriptionRequired: false,
    subcategory: 'Supports & Braces'
  },
  {
    id: 'hd11',
    name: 'Vissco Back Support Belt',
    price: '₹799',
    image: '/products/vissco-back.png',
    category: 'health-devices',
    description: 'Lower back pain relief',
    rating: 4.6,
    inStock: true,
    prescriptionRequired: false,
    subcategory: 'Supports & Braces'
  },
  {
    id: 'hd12',
    name: 'Tynor Cervical Pillow',
    price: '₹699',
    image: '/products/tynor-pillow.png',
    category: 'health-devices',
    description: 'Neck pain relief pillow',
    rating: 4.7,
    inStock: true,
    prescriptionRequired: false,
    subcategory: 'Supports & Braces'
  },
  {
    id: 'hd13',
    name: 'Vissco Wrist Brace',
    price: '₹349',
    image: '/products/vissco-wrist.png',
    category: 'health-devices',
    description: 'Wrist support and stabilization',
    rating: 4.5,
    inStock: true,
    prescriptionRequired: false,
    subcategory: 'Supports & Braces'
  },
  {
    id: 'hd14',
    name: 'Tynor Ankle Binder',
    price: '₹299',
    image: '/products/tynor-ankle.png',
    category: 'health-devices',
    description: 'Ankle support and compression',
    rating: 4.6,
    inStock: true,
    prescriptionRequired: false,
    subcategory: 'Supports & Braces'
  },
  {
    id: 'hd15',
    name: 'Omron Nebulizer (NE-C106)',
    price: '₹2,999',
    image: '/products/omron-nebulizer.png',
    category: 'health-devices',
    description: 'Respiratory care device',
    rating: 4.8,
    inStock: true,
    prescriptionRequired: false,
    subcategory: 'Respiratory Care'
  },
  {
    id: 'hd16',
    name: 'Dr. Morepen Nebulizer (CN-10)',
    price: '₹2,499',
    image: '/products/morepen-nebulizer.png',
    category: 'health-devices',
    description: 'Asthma and breathing relief',
    rating: 4.6,
    inStock: true,
    prescriptionRequired: false,
    subcategory: 'Respiratory Care'
  },
  {
    id: 'hd17',
    name: 'Vicks Steam Vaporizer',
    price: '₹899',
    image: '/products/vicks-vaporizer.png',
    category: 'health-devices',
    description: 'Steam inhalation therapy',
    rating: 4.7,
    inStock: true,
    prescriptionRequired: false,
    subcategory: 'Respiratory Care'
  },
  {
    id: 'hd18',
    name: 'Dr. Trust Oxygen Concentrator',
    price: '₹35,999',
    image: '/products/oxygen-concentrator.png',
    category: 'health-devices',
    description: 'Home oxygen therapy',
    rating: 4.9,
    inStock: true,
    prescriptionRequired: false,
    subcategory: 'Respiratory Care'
  },
  {
    id: 'hd19',
    name: 'Walking Stick Adjustable',
    price: '₹499',
    image: '/products/walking-stick.png',
    category: 'health-devices',
    description: 'Mobility support aid',
    rating: 4.5,
    inStock: true,
    prescriptionRequired: false,
    subcategory: 'Mobility Aids'
  },
  {
    id: 'hd20',
    name: 'Wheelchair Foldable',
    price: '₹5,999',
    image: '/products/wheelchair.png',
    category: 'health-devices',
    description: 'Portable mobility solution',
    rating: 4.7,
    inStock: true,
    prescriptionRequired: false,
    subcategory: 'Mobility Aids'
  },
  {
    id: 'hd21',
    name: 'Walker with Wheels',
    price: '₹2,499',
    image: '/products/walker.png',
    category: 'health-devices',
    description: 'Elderly mobility support',
    rating: 4.6,
    inStock: true,
    prescriptionRequired: false,
    subcategory: 'Mobility Aids'
  },
  {
    id: 'hd22',
    name: 'First Aid Kit (100 pieces)',
    price: '₹599',
    image: '/products/firstaid.png',
    category: 'health-devices',
    description: 'Complete emergency kit',
    rating: 4.8,
    inStock: true,
    prescriptionRequired: false,
    subcategory: 'Home Essentials'
  },
  {
    id: 'hd23',
    name: 'Electric Heating Pad',
    price: '₹799',
    image: '/products/heating-pad.png',
    category: 'health-devices',
    description: 'Pain relief therapy',
    rating: 4.6,
    inStock: true,
    prescriptionRequired: false,
    subcategory: 'Home Essentials'
  },
  {
    id: 'hd24',
    name: 'Dr. Trust Massager',
    price: '₹1,999',
    image: '/products/massager.png',
    category: 'health-devices',
    description: 'Full body massage device',
    rating: 4.7,
    inStock: true,
    prescriptionRequired: false,
    subcategory: 'Home Essentials'
  },
  {
    id: 'hd25',
    name: 'Hot Water Bag (2L)',
    price: '₹199',
    image: '/products/hotwater-bag.png',
    category: 'health-devices',
    description: 'Pain relief and warmth',
    rating: 4.5,
    inStock: true,
    prescriptionRequired: false,
    subcategory: 'Home Essentials'
  },
  {
    id: 'hd26',
    name: 'Dr. Morepen Stethoscope',
    price: '₹899',
    image: '/products/stethoscope.png',
    category: 'health-devices',
    description: 'Professional medical device',
    rating: 4.8,
    inStock: true,
    prescriptionRequired: false,
    subcategory: 'Monitoring Devices'
  },
  {
    id: 'hd27',
    name: 'Omron Body Composition Monitor',
    price: '₹3,999',
    image: '/products/omron-body.png',
    category: 'health-devices',
    description: 'Body fat and muscle analysis',
    rating: 4.7,
    inStock: true,
    prescriptionRequired: false,
    subcategory: 'Monitoring Devices'
  },
  {
    id: 'hd28',
    name: 'Vissco Lumbar Belt',
    price: '₹899',
    image: '/products/vissco-lumbar.png',
    category: 'health-devices',
    description: 'Spinal support belt',
    rating: 4.6,
    inStock: true,
    prescriptionRequired: false,
    subcategory: 'Supports & Braces'
  },
  {
    id: 'hd29',
    name: 'Dr. Trust Peak Flow Meter',
    price: '₹599',
    image: '/products/peak-flow.png',
    category: 'health-devices',
    description: 'Lung function monitor',
    rating: 4.5,
    inStock: true,
    prescriptionRequired: false,
    subcategory: 'Respiratory Care'
  },
  {
    id: 'hd30',
    name: 'Commode Chair Portable',
    price: '₹2,999',
    image: '/products/commode.png',
    category: 'health-devices',
    description: 'Elderly care essential',
    rating: 4.7,
    inStock: true,
    prescriptionRequired: false,
    subcategory: 'Mobility Aids'
  },
  {
    id: 'p7',
    name: 'Himalaya Neem Face Wash (150ml)',
    price: '₹120',
    image: '/products/himalaya.png',
    category: 'personal-care',
    description: 'Natural face wash',
    rating: 4.5,
    inStock: true,
    prescriptionRequired: false,
    subcategory: 'Skincare'
  },
  
  // Additional Personal Care Products
  {
    id: 'pc1',
    name: 'Cetaphil Gentle Cleanser (125ml)',
    price: '₹399',
    image: '/products/cetaphil-cleanser.png',
    category: 'personal-care',
    description: 'Deep hydration for all skin types',
    rating: 4.8,
    inStock: true,
    prescriptionRequired: false,
    subcategory: 'Skincare'
  },
  {
    id: 'pc2',
    name: 'Neutrogena Deep Clean (200ml)',
    price: '₹299',
    image: '/products/neutrogena-clean.png',
    category: 'personal-care',
    description: 'Oil-free deep cleansing',
    rating: 4.6,
    inStock: true,
    prescriptionRequired: false,
    subcategory: 'Skincare'
  },
  {
    id: 'pc3',
    name: 'Nivea Soft Cream (200ml)',
    price: '₹249',
    image: '/products/nivea-soft.png',
    category: 'personal-care',
    description: 'Light moisturizing cream',
    rating: 4.7,
    inStock: true,
    prescriptionRequired: false,
    subcategory: 'Skincare'
  },
  {
    id: 'pc4',
    name: 'Vaseline Body Lotion (400ml)',
    price: '₹299',
    image: '/products/vaseline.png',
    category: 'personal-care',
    description: 'Deep moisture for dry skin',
    rating: 4.6,
    inStock: true,
    prescriptionRequired: false,
    subcategory: 'Skincare'
  },
  {
    id: 'pc5',
    name: 'Lakme Sun Expert SPF 50 (50ml)',
    price: '₹349',
    image: '/products/lakme-sun.png',
    category: 'personal-care',
    description: 'Daily sun protection',
    rating: 4.5,
    inStock: true,
    prescriptionRequired: false,
    subcategory: 'Skincare'
  },
  {
    id: 'pc6',
    name: 'Himalaya Lip Balm (4.5g)',
    price: '₹85',
    image: '/products/himalaya-lipbalm.png',
    category: 'personal-care',
    description: 'Natural lip care',
    rating: 4.6,
    inStock: true,
    prescriptionRequired: false,
    subcategory: 'Skincare'
  },
  {
    id: 'pc7',
    name: 'Dove Shampoo (340ml)',
    price: '₹295',
    image: '/products/dove-hair.png',
    category: 'personal-care',
    description: 'Nourishing hair care',
    rating: 4.7,
    inStock: true,
    prescriptionRequired: false,
    subcategory: 'Hair Care'
  },
  {
    id: 'pc8',
    name: 'Pantene Conditioner (340ml)',
    price: '₹315',
    image: '/products/pantene-cond.png',
    category: 'personal-care',
    description: 'Smooth and silky hair',
    rating: 4.6,
    inStock: true,
    prescriptionRequired: false,
    subcategory: 'Hair Care'
  },
  {
    id: 'pc9',
    name: 'Parachute Coconut Oil (200ml)',
    price: '₹145',
    image: '/products/parachute.png',
    category: 'personal-care',
    description: 'Pure coconut hair oil',
    rating: 4.8,
    inStock: true,
    prescriptionRequired: false,
    subcategory: 'Hair Care'
  },
  {
    id: 'pc10',
    name: 'Livon Hair Serum (100ml)',
    price: '₹245',
    image: '/products/livon-serum.png',
    category: 'personal-care',
    description: 'Frizz control and shine',
    rating: 4.7,
    inStock: true,
    prescriptionRequired: false,
    subcategory: 'Hair Care'
  },
  {
    id: 'pc11',
    name: 'Clinic Plus Shampoo (340ml)',
    price: '₹185',
    image: '/products/clinic-plus.png',
    category: 'personal-care',
    description: 'Strong and healthy hair',
    rating: 4.5,
    inStock: true,
    prescriptionRequired: false,
    subcategory: 'Hair Care'
  },
  {
    id: 'pc12',
    name: 'Dove Beauty Bar (125g x 3)',
    price: '₹225',
    image: '/products/dove-soap.png',
    category: 'personal-care',
    description: 'Moisturizing beauty bar',
    rating: 4.7,
    inStock: true,
    prescriptionRequired: false,
    subcategory: 'Bath & Hygiene'
  },
  {
    id: 'pc13',
    name: 'Dettol Body Wash (250ml)',
    price: '₹245',
    image: '/products/dettol-wash.png',
    category: 'personal-care',
    description: 'Germ protection body wash',
    rating: 4.6,
    inStock: true,
    prescriptionRequired: false,
    subcategory: 'Bath & Hygiene'
  },
  {
    id: 'pc14',
    name: 'Lifebuoy Hand Wash (200ml)',
    price: '₹85',
    image: '/products/lifebuoy.png',
    category: 'personal-care',
    description: 'Germ protection hand wash',
    rating: 4.5,
    inStock: true,
    prescriptionRequired: false,
    subcategory: 'Bath & Hygiene'
  },
  {
    id: 'pc15',
    name: 'Savlon Hand Sanitizer (500ml)',
    price: '₹199',
    image: '/products/savlon.png',
    category: 'personal-care',
    description: 'Kills 99.9% germs',
    rating: 4.7,
    inStock: true,
    prescriptionRequired: false,
    subcategory: 'Bath & Hygiene'
  },
  {
    id: 'pc16',
    name: 'Wet Wipes (80 pcs)',
    price: '₹125',
    image: '/products/wet-wipes.png',
    category: 'personal-care',
    description: 'Fresh and clean on-the-go',
    rating: 4.6,
    inStock: true,
    prescriptionRequired: false,
    subcategory: 'Bath & Hygiene'
  },
  {
    id: 'pc17',
    name: 'Gillette Mach3 Razor',
    price: '₹299',
    image: '/products/gillette.png',
    category: 'personal-care',
    description: 'Smooth and close shave',
    rating: 4.8,
    inStock: true,
    prescriptionRequired: false,
    subcategory: 'Grooming'
  },
  {
    id: 'pc18',
    name: 'Gillette Shaving Foam (418g)',
    price: '₹245',
    image: '/products/gillette-foam.png',
    category: 'personal-care',
    description: 'Rich lather for smooth shave',
    rating: 4.7,
    inStock: true,
    prescriptionRequired: false,
    subcategory: 'Grooming'
  },
  {
    id: 'pc19',
    name: 'Philips Trimmer BT3221',
    price: '₹1,499',
    image: '/products/philips-trimmer.png',
    category: 'personal-care',
    description: 'Cordless beard trimmer',
    rating: 4.6,
    inStock: true,
    prescriptionRequired: false,
    subcategory: 'Grooming'
  },
  {
    id: 'pc20',
    name: 'Nivea Men Deodorant (150ml)',
    price: '₹199',
    image: '/products/nivea-deo.png',
    category: 'personal-care',
    description: '48-hour freshness',
    rating: 4.5,
    inStock: true,
    prescriptionRequired: false,
    subcategory: 'Grooming'
  },
  {
    id: 'pc21',
    name: 'Fogg Deodorant (150ml)',
    price: '₹249',
    image: '/products/fogg.png',
    category: 'personal-care',
    description: 'Long-lasting fragrance',
    rating: 4.6,
    inStock: true,
    prescriptionRequired: false,
    subcategory: 'Grooming'
  },
  {
    id: 'pc22',
    name: 'Wild Stone Perfume (100ml)',
    price: '₹399',
    image: '/products/wildstone.png',
    category: 'personal-care',
    description: 'Premium fragrance',
    rating: 4.7,
    inStock: true,
    prescriptionRequired: false,
    subcategory: 'Grooming'
  },
  {
    id: 'pc23',
    name: 'Colgate Total (150g)',
    price: '₹145',
    image: '/products/colgate.png',
    category: 'personal-care',
    description: 'Complete oral care',
    rating: 4.8,
    inStock: true,
    prescriptionRequired: false,
    subcategory: 'Oral Care'
  },
  {
    id: 'pc24',
    name: 'Sensodyne Toothpaste (100g)',
    price: '₹185',
    image: '/products/sensodyne.png',
    category: 'personal-care',
    description: 'Sensitivity relief',
    rating: 4.7,
    inStock: true,
    prescriptionRequired: false,
    subcategory: 'Oral Care'
  },
  {
    id: 'pc25',
    name: 'Listerine Mouthwash (250ml)',
    price: '₹199',
    image: '/products/listerine.png',
    category: 'personal-care',
    description: 'Fresh breath protection',
    rating: 4.6,
    inStock: true,
    prescriptionRequired: false,
    subcategory: 'Oral Care'
  },
  {
    id: 'pc26',
    name: 'Oral-B Toothbrush (Soft)',
    price: '₹85',
    image: '/products/oralb.png',
    category: 'personal-care',
    description: 'Gentle on gums',
    rating: 4.7,
    inStock: true,
    prescriptionRequired: false,
    subcategory: 'Oral Care'
  },
  {
    id: 'pc27',
    name: 'Pepsodent Toothpaste (150g)',
    price: '₹95',
    image: '/products/pepsodent.png',
    category: 'personal-care',
    description: 'Germ protection',
    rating: 4.5,
    inStock: true,
    prescriptionRequired: false,
    subcategory: 'Oral Care'
  },
  {
    id: 'pc28',
    name: 'The Man Company Face Wash (100ml)',
    price: '₹349',
    image: '/products/mancompany.png',
    category: 'personal-care',
    description: 'Charcoal deep cleansing',
    rating: 4.7,
    inStock: true,
    prescriptionRequired: false,
    subcategory: 'Grooming'
  },
  {
    id: 'pc29',
    name: 'Beardo Beard Oil (30ml)',
    price: '₹399',
    image: '/products/beardo.png',
    category: 'personal-care',
    description: 'Beard growth and shine',
    rating: 4.6,
    inStock: true,
    prescriptionRequired: false,
    subcategory: 'Grooming'
  },
  {
    id: 'pc30',
    name: 'Garnier Men Face Wash (100g)',
    price: '₹199',
    image: '/products/garnier-men.png',
    category: 'personal-care',
    description: 'Oil control face wash',
    rating: 4.5,
    inStock: true,
    prescriptionRequired: false,
    subcategory: 'Grooming'
  },
  {
    id: 'pc31',
    name: 'Biotique Bio Kelp Shampoo (190ml)',
    price: '₹185',
    image: '/products/biotique-shampoo.png',
    category: 'personal-care',
    description: 'Protein shampoo for falling hair',
    rating: 4.6,
    inStock: true,
    prescriptionRequired: false,
    subcategory: 'Hair Care'
  },
  {
    id: 'pc32',
    name: 'Pears Soap (125g x 3)',
    price: '₹165',
    image: '/products/pears.png',
    category: 'personal-care',
    description: 'Pure and gentle soap',
    rating: 4.7,
    inStock: true,
    prescriptionRequired: false,
    subcategory: 'Bath & Hygiene'
  },
  {
    id: 'pc33',
    name: 'Axe Deodorant (150ml)',
    price: '₹225',
    image: '/products/axe.png',
    category: 'personal-care',
    description: 'Bold fragrance',
    rating: 4.6,
    inStock: true,
    prescriptionRequired: false,
    subcategory: 'Grooming'
  },
  {
    id: 'pc34',
    name: 'Mamaearth Face Wash (100ml)',
    price: '₹299',
    image: '/products/mamaearth-face.png',
    category: 'personal-care',
    description: 'Natural and toxin-free',
    rating: 4.8,
    inStock: true,
    prescriptionRequired: false,
    subcategory: 'Skincare'
  },
  {
    id: 'pc35',
    name: 'Plum Body Lotion (200ml)',
    price: '₹449',
    image: '/products/plum-lotion.png',
    category: 'personal-care',
    description: 'Vegan body moisturizer',
    rating: 4.7,
    inStock: true,
    prescriptionRequired: false,
    subcategory: 'Skincare'
  },
  {
    id: 'p8',
    name: 'Dabur Chyawanprash (500g)',
    price: '₹280',
    image: '/products/dabur.png',
    category: 'ayurvedic',
    description: 'Immunity booster',
    rating: 4.7,
    inStock: true,
    prescriptionRequired: false
  }
];
