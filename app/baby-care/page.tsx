'use client';

import { useState, useMemo } from 'react';
import Breadcrumb from '@/components/ui/Breadcrumb';
import ProductCard from '@/components/ui/ProductCard';
import { PRODUCTS } from '@/data';
import { Search, SlidersHorizontal, ShieldCheck, Heart, Sparkles, Baby, ChevronDown, Award, Leaf, Clock } from 'lucide-react';

export default function BabyCarePage() {
  const [searchQuery, setSearchQuery] = useState('');
  const [selectedCategory, setSelectedCategory] = useState('all');
  const [priceRange, setPriceRange] = useState([0, 1000]);
  const [showInStockOnly, setShowInStockOnly] = useState(false);
  const [selectedAgeGroup, setSelectedAgeGroup] = useState('all');
  const [sortBy, setSortBy] = useState('popularity');
  const [showFilters, setShowFilters] = useState(false);
  const [itemsToShow, setItemsToShow] = useState(12);
  
  const babyProducts = PRODUCTS.filter(p => p.category === 'baby-care');
  
  // Get unique subcategories
  const subcategories = useMemo(() => {
    const cats = new Set(babyProducts.map(p => p.subcategory).filter(Boolean));
    return ['all', ...Array.from(cats)];
  }, [babyProducts]);

  const ageGroups = ['all', '0-6 months', '6-12 months', '1+ years'];

  // Filter and sort products
  const filteredProducts = useMemo(() => {
    let filtered = babyProducts.filter(product => {
      const matchesSearch = product.name.toLowerCase().includes(searchQuery.toLowerCase()) ||
                           product.description?.toLowerCase().includes(searchQuery.toLowerCase());
      const matchesCategory = selectedCategory === 'all' || product.subcategory === selectedCategory;
      const price = parseInt(product.price.replace(/[₹,]/g, ''));
      const matchesPrice = price >= priceRange[0] && price <= priceRange[1];
      const matchesStock = !showInStockOnly || product.inStock;
      
      return matchesSearch && matchesCategory && matchesPrice && matchesStock;
    });

    // Sort products
    filtered.sort((a, b) => {
      const priceA = parseInt(a.price.replace(/[₹,]/g, ''));
      const priceB = parseInt(b.price.replace(/[₹,]/g, ''));
      
      switch (sortBy) {
        case 'price-low':
          return priceA - priceB;
        case 'price-high':
          return priceB - priceA;
        case 'rating':
          return (b.rating || 0) - (a.rating || 0);
        default: // popularity
          return (b.rating || 0) - (a.rating || 0);
      }
    });

    return filtered;
  }, [babyProducts, searchQuery, selectedCategory, priceRange, showInStockOnly, sortBy]);

  const displayedProducts = filteredProducts.slice(0, itemsToShow);

  return (
    <main className="bg-gradient-to-b from-pink-50/30 via-blue-50/20 to-white">
      {/* Premium Soft Header */}
      <div className="bg-gradient-to-br from-pink-100 via-blue-100 to-purple-100 text-gray-800 py-16">
        <div className="max-w-[1400px] mx-auto px-4 sm:px-6 lg:px-8">
          <Breadcrumb 
            items={[{ label: 'Baby Care' }]} 
            className="mb-6 text-gray-600"
          />
          <div className="flex items-center gap-3 mb-4">
            <div className="w-14 h-14 bg-white/80 backdrop-blur-sm rounded-2xl flex items-center justify-center shadow-lg">
              <Baby className="w-8 h-8 text-pink-500" />
            </div>
            <h1 className="text-4xl md:text-5xl font-bold text-gray-800">Baby Care Products</h1>
          </div>
          <p className="text-xl text-gray-700 max-w-2xl">
            Safe and gentle products for your baby's health and care
          </p>
        </div>
      </div>

      {/* Trust & Safety Indicators */}
      <div className="bg-white border-b border-pink-100">
        <div className="max-w-[1400px] mx-auto px-4 sm:px-6 lg:px-8 py-6">
          <div className="grid grid-cols-2 md:grid-cols-4 gap-6">
            <div className="flex items-center gap-3">
              <div className="w-12 h-12 bg-pink-100 rounded-2xl flex items-center justify-center flex-shrink-0">
                <ShieldCheck className="w-6 h-6 text-pink-500" />
              </div>
              <div>
                <p className="font-semibold text-text text-sm">100% Baby Safe</p>
                <p className="text-xs text-gray-600">Products</p>
              </div>
            </div>
            <div className="flex items-center gap-3">
              <div className="w-12 h-12 bg-blue-100 rounded-2xl flex items-center justify-center flex-shrink-0">
                <Award className="w-6 h-6 text-blue-500" />
              </div>
              <div>
                <p className="font-semibold text-text text-sm">Dermatologically</p>
                <p className="text-xs text-gray-600">Tested</p>
              </div>
            </div>
            <div className="flex items-center gap-3">
              <div className="w-12 h-12 bg-purple-100 rounded-2xl flex items-center justify-center flex-shrink-0">
                <Heart className="w-6 h-6 text-purple-500" />
              </div>
              <div>
                <p className="font-semibold text-text text-sm">Trusted Brands</p>
                <p className="text-xs text-gray-600">Only</p>
              </div>
            </div>
            <div className="flex items-center gap-3">
              <div className="w-12 h-12 bg-green-100 rounded-2xl flex items-center justify-center flex-shrink-0">
                <Sparkles className="w-6 h-6 text-green-500" />
              </div>
              <div>
                <p className="font-semibold text-text text-sm">Recommended</p>
                <p className="text-xs text-gray-600">by Parents</p>
              </div>
            </div>
          </div>
        </div>
      </div>

      <div className="max-w-[1400px] mx-auto px-4 sm:px-6 lg:px-8 py-8">
        <div className="flex flex-col lg:flex-row gap-8">
          {/* Sidebar Filters */}
          <aside className={`lg:w-72 ${showFilters ? 'block' : 'hidden lg:block'}`}>
            <div className="bg-white rounded-3xl shadow-lg p-6 sticky top-24 border border-pink-100">
              <div className="flex items-center justify-between mb-6">
                <h3 className="text-lg font-bold text-text flex items-center gap-2">
                  <SlidersHorizontal className="w-5 h-5 text-pink-500" />
                  Filters
                </h3>
                <button
                  onClick={() => {
                    setSelectedCategory('all');
                    setPriceRange([0, 1000]);
                    setShowInStockOnly(false);
                    setSelectedAgeGroup('all');
                  }}
                  className="text-sm text-pink-500 hover:underline font-medium"
                >
                  Clear All
                </button>
              </div>

              {/* Category Filter */}
              <div className="mb-6">
                <h4 className="font-semibold text-text mb-3 flex items-center gap-2">
                  <Baby className="w-4 h-4 text-pink-500" />
                  Category
                </h4>
                <div className="space-y-2">
                  {subcategories.map(cat => (
                    <label key={cat} className="flex items-center gap-2 cursor-pointer group">
                      <input
                        type="radio"
                        name="category"
                        checked={selectedCategory === cat}
                        onChange={() => setSelectedCategory(cat || 'all')}
                        className="w-4 h-4 text-pink-500 focus:ring-pink-400"
                      />
                      <span className="text-sm text-gray-700 group-hover:text-pink-500 capitalize">
                        {cat === 'all' ? 'All Products' : cat}
                      </span>
                    </label>
                  ))}
                </div>
              </div>

              {/* Age Group Filter */}
              <div className="mb-6">
                <h4 className="font-semibold text-text mb-3 flex items-center gap-2">
                  <Clock className="w-4 h-4 text-blue-500" />
                  Age Group
                </h4>
                <div className="space-y-2">
                  {ageGroups.map(age => (
                    <label key={age} className="flex items-center gap-2 cursor-pointer group">
                      <input
                        type="radio"
                        name="age"
                        checked={selectedAgeGroup === age}
                        onChange={() => setSelectedAgeGroup(age)}
                        className="w-4 h-4 text-blue-500 focus:ring-blue-400"
                      />
                      <span className="text-sm text-gray-700 group-hover:text-blue-500 capitalize">
                        {age === 'all' ? 'All Ages' : age}
                      </span>
                    </label>
                  ))}
                </div>
              </div>

              {/* Price Range */}
              <div className="mb-6">
                <h4 className="font-semibold text-text mb-3">Price Range</h4>
                <div className="space-y-3">
                  <input
                    type="range"
                    min="0"
                    max="1000"
                    value={priceRange[1]}
                    onChange={(e) => setPriceRange([0, parseInt(e.target.value)])}
                    className="w-full accent-pink-500"
                  />
                  <div className="flex items-center justify-between text-sm text-gray-600">
                    <span>₹0</span>
                    <span className="font-semibold text-pink-500">₹{priceRange[1]}</span>
                  </div>
                </div>
              </div>

              {/* Availability */}
              <div>
                <h4 className="font-semibold text-text mb-3">Availability</h4>
                <label className="flex items-center gap-2 cursor-pointer">
                  <input
                    type="checkbox"
                    checked={showInStockOnly}
                    onChange={(e) => setShowInStockOnly(e.target.checked)}
                    className="w-4 h-4 text-pink-500 focus:ring-pink-400 rounded"
                  />
                  <span className="text-sm text-gray-700">In Stock Only</span>
                </label>
              </div>
            </div>
          </aside>

          {/* Main Content */}
          <div className="flex-1">
            {/* Search and Sort Bar */}
            <div className="bg-white rounded-3xl shadow-lg p-6 mb-8 border border-pink-100">
              <div className="flex flex-col md:flex-row gap-4">
                {/* Search */}
                <div className="flex-1 relative">
                  <Search className="absolute left-4 top-1/2 transform -translate-y-1/2 text-gray-400 w-5 h-5" />
                  <input
                    type="text"
                    placeholder="Search baby care products..."
                    value={searchQuery}
                    onChange={(e) => setSearchQuery(e.target.value)}
                    className="w-full pl-12 pr-4 py-3 border border-pink-200 rounded-2xl focus:outline-none focus:ring-2 focus:ring-pink-400 focus:border-transparent"
                  />
                </div>

                {/* Sort */}
                <div className="relative md:w-64">
                  <select
                    value={sortBy}
                    onChange={(e) => setSortBy(e.target.value)}
                    className="w-full px-4 py-3 border border-pink-200 rounded-2xl focus:outline-none focus:ring-2 focus:ring-pink-400 appearance-none bg-white cursor-pointer"
                  >
                    <option value="popularity">Sort by Popularity</option>
                    <option value="price-low">Price: Low to High</option>
                    <option value="price-high">Price: High to Low</option>
                    <option value="rating">Highest Rated</option>
                  </select>
                  <ChevronDown className="absolute right-4 top-1/2 transform -translate-y-1/2 text-gray-400 w-5 h-5 pointer-events-none" />
                </div>

                {/* Mobile Filter Toggle */}
                <button
                  onClick={() => setShowFilters(!showFilters)}
                  className="lg:hidden flex items-center justify-center gap-2 px-6 py-3 bg-gradient-to-r from-pink-500 to-purple-500 text-white rounded-2xl font-semibold hover:from-pink-600 hover:to-purple-600 transition-all shadow-md"
                >
                  <SlidersHorizontal className="w-5 h-5" />
                  Filters
                </button>
              </div>

              {/* Results Count */}
              <div className="mt-4 text-sm text-gray-600">
                Showing <span className="font-semibold text-pink-600">{displayedProducts.length}</span> of{' '}
                <span className="font-semibold text-pink-600">{filteredProducts.length}</span> products
              </div>
            </div>

            {/* Products Grid */}
            {displayedProducts.length > 0 ? (
              <>
                <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-3 gap-8 mb-8">
                  {displayedProducts.map((product) => (
                    <ProductCard key={product.id} product={product} />
                  ))}
                </div>

                {/* Load More */}
                {itemsToShow < filteredProducts.length && (
                  <div className="text-center">
                    <button
                      onClick={() => setItemsToShow(prev => prev + 12)}
                      className="px-8 py-3 bg-gradient-to-r from-pink-500 to-purple-500 text-white rounded-2xl font-semibold hover:from-pink-600 hover:to-purple-600 transition-all duration-300 shadow-lg hover:shadow-xl"
                    >
                      Load More Products
                    </button>
                  </div>
                )}
              </>
            ) : (
              <div className="bg-white rounded-3xl shadow-lg p-12 text-center border border-pink-100">
                <div className="w-20 h-20 bg-pink-100 rounded-full flex items-center justify-center mx-auto mb-4">
                  <Search className="w-10 h-10 text-pink-400" />
                </div>
                <h3 className="text-xl font-bold text-text mb-2">No products found</h3>
                <p className="text-gray-600 mb-6">Try adjusting your filters or search query</p>
                <button
                  onClick={() => {
                    setSearchQuery('');
                    setSelectedCategory('all');
                    setPriceRange([0, 1000]);
                    setShowInStockOnly(false);
                    setSelectedAgeGroup('all');
                  }}
                  className="px-6 py-2 bg-gradient-to-r from-pink-500 to-purple-500 text-white rounded-2xl font-semibold hover:from-pink-600 hover:to-purple-600 transition-all"
                >
                  Clear Filters
                </button>
              </div>
            )}
          </div>
        </div>

        {/* Baby Care Tips Section */}
        <div className="mt-16 mb-8">
          <div className="text-center mb-10">
            <h2 className="text-3xl md:text-4xl font-bold text-text mb-3">Baby Care Tips</h2>
            <p className="text-gray-600 text-lg">Essential guidance for your little one's care</p>
          </div>
          <div className="grid md:grid-cols-2 lg:grid-cols-4 gap-6">
            <div className="bg-gradient-to-br from-pink-50 to-white rounded-3xl p-8 shadow-lg hover:shadow-xl transition-all border border-pink-100">
              <div className="w-14 h-14 bg-pink-100 rounded-2xl flex items-center justify-center mb-4">
                <Sparkles className="w-7 h-7 text-pink-500" />
              </div>
              <h3 className="font-bold text-text mb-2 text-lg">Skin Care</h3>
              <p className="text-gray-600 text-sm leading-relaxed">
                Use gentle, fragrance-free products. Always patch test new products and moisturize after baths.
              </p>
            </div>
            <div className="bg-gradient-to-br from-blue-50 to-white rounded-3xl p-8 shadow-lg hover:shadow-xl transition-all border border-blue-100">
              <div className="w-14 h-14 bg-blue-100 rounded-2xl flex items-center justify-center mb-4">
                <ShieldCheck className="w-7 h-7 text-blue-500" />
              </div>
              <h3 className="font-bold text-text mb-2 text-lg">Diaper Hygiene</h3>
              <p className="text-gray-600 text-sm leading-relaxed">
                Change diapers frequently, clean gently, and apply barrier cream to prevent rashes.
              </p>
            </div>
            <div className="bg-gradient-to-br from-purple-50 to-white rounded-3xl p-8 shadow-lg hover:shadow-xl transition-all border border-purple-100">
              <div className="w-14 h-14 bg-purple-100 rounded-2xl flex items-center justify-center mb-4">
                <Baby className="w-7 h-7 text-purple-500" />
              </div>
              <h3 className="font-bold text-text mb-2 text-lg">Feeding Safety</h3>
              <p className="text-gray-600 text-sm leading-relaxed">
                Sterilize bottles regularly, check milk temperature, and follow age-appropriate feeding guidelines.
              </p>
            </div>
            <div className="bg-gradient-to-br from-green-50 to-white rounded-3xl p-8 shadow-lg hover:shadow-xl transition-all border border-green-100">
              <div className="w-14 h-14 bg-green-100 rounded-2xl flex items-center justify-center mb-4">
                <Leaf className="w-7 h-7 text-green-500" />
              </div>
              <h3 className="font-bold text-text mb-2 text-lg">Natural Care</h3>
              <p className="text-gray-600 text-sm leading-relaxed">
                Choose products with natural ingredients. Avoid harsh chemicals and artificial fragrances.
              </p>
            </div>
          </div>
        </div>
      </div>
    </main>
  );
}
