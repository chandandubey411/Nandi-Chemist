'use client';

import { useState, useMemo } from 'react';
import Breadcrumb from '@/components/ui/Breadcrumb';
import ProductCard from '@/components/ui/ProductCard';
import { PRODUCTS } from '@/data';
import { Search, SlidersHorizontal, Sparkles, ShieldCheck, Smile, Droplets, ChevronDown, Award, Leaf, Wind, Scissors } from 'lucide-react';

export default function PersonalCarePage() {
  const [searchQuery, setSearchQuery] = useState('');
  const [selectedCategory, setSelectedCategory] = useState('all');
  const [priceRange, setPriceRange] = useState([0, 2000]);
  const [showInStockOnly, setShowInStockOnly] = useState(false);
  const [sortBy, setSortBy] = useState('popularity');
  const [showFilters, setShowFilters] = useState(false);
  const [itemsToShow, setItemsToShow] = useState(12);
  
  const personalCareProducts = PRODUCTS.filter(p => p.category === 'personal-care');
  
  // Get unique subcategories
  const subcategories = useMemo(() => {
    const cats = new Set(personalCareProducts.map(p => p.subcategory).filter(Boolean));
    return ['all', ...Array.from(cats)];
  }, [personalCareProducts]);

  // Filter and sort products
  const filteredProducts = useMemo(() => {
    let filtered = personalCareProducts.filter(product => {
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
  }, [personalCareProducts, searchQuery, selectedCategory, priceRange, showInStockOnly, sortBy]);

  const displayedProducts = filteredProducts.slice(0, itemsToShow);

  const careBenefits = [
    { icon: Sparkles, title: 'Healthy Skin', color: 'from-cyan-500 to-blue-500', bgColor: 'bg-cyan-50', iconColor: 'text-cyan-500' },
    { icon: ShieldCheck, title: 'Better Hygiene', color: 'from-teal-500 to-green-500', bgColor: 'bg-teal-50', iconColor: 'text-teal-500' },
    { icon: Smile, title: 'Daily Confidence', color: 'from-blue-500 to-indigo-500', bgColor: 'bg-blue-50', iconColor: 'text-blue-500' },
    { icon: Scissors, title: 'Grooming & Wellness', color: 'from-indigo-500 to-purple-500', bgColor: 'bg-indigo-50', iconColor: 'text-indigo-500' },
  ];

  return (
    <main className="bg-gradient-to-b from-cyan-50/30 via-blue-50/20 to-white">
      {/* Clean Modern Header */}
      <div className="bg-gradient-to-br from-cyan-400 via-teal-400 to-blue-400 text-white py-16 relative overflow-hidden">
        {/* Clean geometric patterns */}
        <div className="absolute inset-0 opacity-10">
          <div className="absolute top-10 right-10 w-64 h-64 bg-white rounded-full blur-3xl"></div>
          <div className="absolute bottom-10 left-10 w-64 h-64 bg-white rounded-full blur-3xl"></div>
        </div>
        
        <div className="max-w-[1400px] mx-auto px-4 sm:px-6 lg:px-8 relative z-10">
          <Breadcrumb 
            items={[{ label: 'Personal Care' }]} 
            className="mb-6 text-cyan-100"
          />
          <div className="flex items-center gap-4 mb-4">
            <div className="w-16 h-16 bg-white/20 backdrop-blur-md rounded-2xl flex items-center justify-center shadow-xl">
              <Droplets className="w-9 h-9 text-white" />
            </div>
            <h1 className="text-4xl md:text-5xl font-bold">Personal Care Essentials</h1>
          </div>
          <p className="text-xl text-cyan-50 max-w-3xl leading-relaxed">
            Everything you need for hygiene, grooming, skincare, and daily wellness
          </p>
        </div>
      </div>

      {/* Care Benefits Banner */}
      <div className="bg-white border-b border-gray-200">
        <div className="max-w-[1400px] mx-auto px-4 sm:px-6 lg:px-8 py-8">
          <div className="grid grid-cols-2 md:grid-cols-4 gap-6">
            {careBenefits.map((benefit, index) => (
              <div
                key={index}
                className="group cursor-pointer bg-gradient-to-br from-white to-gray-50 rounded-2xl p-6 shadow-md hover:shadow-xl transition-all duration-300 border border-gray-100 hover:-translate-y-1"
              >
                <div className={`w-14 h-14 ${benefit.bgColor} rounded-xl flex items-center justify-center mb-4 group-hover:scale-110 transition-transform`}>
                  <benefit.icon className={`w-7 h-7 ${benefit.iconColor}`} />
                </div>
                <h3 className="font-bold text-text text-lg">{benefit.title}</h3>
              </div>
            ))}
          </div>
        </div>
      </div>

      <div className="max-w-[1400px] mx-auto px-4 sm:px-6 lg:px-8 py-8">
        <div className="flex flex-col lg:flex-row gap-8">
          {/* Sidebar Filters */}
          <aside className={`lg:w-72 ${showFilters ? 'block' : 'hidden lg:block'}`}>
            <div className="bg-white rounded-2xl shadow-lg p-6 sticky top-24 border border-cyan-100">
              <div className="flex items-center justify-between mb-6">
                <h3 className="text-lg font-bold text-text flex items-center gap-2">
                  <SlidersHorizontal className="w-5 h-5 text-cyan-500" />
                  Filters
                </h3>
                <button
                  onClick={() => {
                    setSelectedCategory('all');
                    setPriceRange([0, 2000]);
                    setShowInStockOnly(false);
                  }}
                  className="text-sm text-cyan-600 hover:underline font-medium"
                >
                  Clear All
                </button>
              </div>

              {/* Category Filter */}
              <div className="mb-6">
                <h4 className="font-semibold text-text mb-3 flex items-center gap-2">
                  <Droplets className="w-4 h-4 text-cyan-500" />
                  Category
                </h4>
                <div className="space-y-2 max-h-64 overflow-y-auto">
                  {subcategories.map(cat => (
                    <label key={cat} className="flex items-center gap-2 cursor-pointer group">
                      <input
                        type="radio"
                        name="category"
                        checked={selectedCategory === cat}
                        onChange={() => setSelectedCategory(cat || 'all')}
                        className="w-4 h-4 text-cyan-500 focus:ring-cyan-400"
                      />
                      <span className="text-sm text-gray-700 group-hover:text-cyan-600 capitalize">
                        {cat === 'all' ? 'All Products' : cat}
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
                    max="2000"
                    value={priceRange[1]}
                    onChange={(e) => setPriceRange([0, parseInt(e.target.value)])}
                    className="w-full accent-cyan-500"
                  />
                  <div className="flex items-center justify-between text-sm text-gray-600">
                    <span>₹0</span>
                    <span className="font-semibold text-cyan-600">₹{priceRange[1]}</span>
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
                    className="w-4 h-4 text-cyan-500 focus:ring-cyan-400 rounded"
                  />
                  <span className="text-sm text-gray-700">In Stock Only</span>
                </label>
              </div>
            </div>
          </aside>

          {/* Main Content */}
          <div className="flex-1">
            {/* Search and Sort Bar */}
            <div className="bg-white rounded-2xl shadow-lg p-6 mb-8 border border-cyan-100">
              <div className="flex flex-col md:flex-row gap-4">
                {/* Search */}
                <div className="flex-1 relative">
                  <Search className="absolute left-4 top-1/2 transform -translate-y-1/2 text-gray-400 w-5 h-5" />
                  <input
                    type="text"
                    placeholder="Search personal care products..."
                    value={searchQuery}
                    onChange={(e) => setSearchQuery(e.target.value)}
                    className="w-full pl-12 pr-4 py-3 border border-cyan-200 rounded-xl focus:outline-none focus:ring-2 focus:ring-cyan-400 focus:border-transparent"
                  />
                </div>

                {/* Sort */}
                <div className="relative md:w-64">
                  <select
                    value={sortBy}
                    onChange={(e) => setSortBy(e.target.value)}
                    className="w-full px-4 py-3 border border-cyan-200 rounded-xl focus:outline-none focus:ring-2 focus:ring-cyan-400 appearance-none bg-white cursor-pointer"
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
                  className="lg:hidden flex items-center justify-center gap-2 px-6 py-3 bg-gradient-to-r from-cyan-500 to-teal-500 text-white rounded-xl font-semibold hover:from-cyan-600 hover:to-teal-600 transition-all shadow-md"
                >
                  <SlidersHorizontal className="w-5 h-5" />
                  Filters
                </button>
              </div>

              {/* Results Count */}
              <div className="mt-4 text-sm text-gray-600">
                Showing <span className="font-semibold text-cyan-600">{displayedProducts.length}</span> of{' '}
                <span className="font-semibold text-cyan-600">{filteredProducts.length}</span> products
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
                      className="px-8 py-3 bg-gradient-to-r from-cyan-500 to-teal-500 text-white rounded-xl font-semibold hover:from-cyan-600 hover:to-teal-600 transition-all duration-300 shadow-lg hover:shadow-xl"
                    >
                      Load More Products
                    </button>
                  </div>
                )}
              </>
            ) : (
              <div className="bg-white rounded-2xl shadow-lg p-12 text-center border border-cyan-100">
                <div className="w-20 h-20 bg-cyan-100 rounded-full flex items-center justify-center mx-auto mb-4">
                  <Search className="w-10 h-10 text-cyan-400" />
                </div>
                <h3 className="text-xl font-bold text-text mb-2">No products found</h3>
                <p className="text-gray-600 mb-6">Try adjusting your filters or search query</p>
                <button
                  onClick={() => {
                    setSearchQuery('');
                    setSelectedCategory('all');
                    setPriceRange([0, 2000]);
                    setShowInStockOnly(false);
                  }}
                  className="px-6 py-2 bg-gradient-to-r from-cyan-500 to-teal-500 text-white rounded-xl font-semibold hover:from-cyan-600 hover:to-teal-600 transition-all"
                >
                  Clear Filters
                </button>
              </div>
            )}
          </div>
        </div>

        {/* Why Personal Care Matters Section */}
        <div className="mt-16 mb-8">
          <div className="text-center mb-10">
            <h2 className="text-3xl md:text-4xl font-bold text-text mb-3">Why Personal Care Matters</h2>
            <p className="text-gray-600 text-lg">Essential benefits for your daily wellness routine</p>
          </div>
          <div className="grid md:grid-cols-2 lg:grid-cols-4 gap-6">
            <div className="bg-gradient-to-br from-cyan-50 to-white rounded-2xl p-8 shadow-lg hover:shadow-xl transition-all border border-cyan-100 group">
              <div className="w-14 h-14 bg-gradient-to-br from-cyan-500 to-blue-500 rounded-xl flex items-center justify-center mb-4 group-hover:scale-110 transition-transform shadow-md">
                <Sparkles className="w-7 h-7 text-white" />
              </div>
              <h3 className="font-bold text-text mb-2 text-lg">Healthy Skin</h3>
              <p className="text-gray-600 text-sm leading-relaxed">
                Maintain radiant and healthy skin with proper cleansing, moisturizing, and sun protection.
              </p>
            </div>
            <div className="bg-gradient-to-br from-teal-50 to-white rounded-2xl p-8 shadow-lg hover:shadow-xl transition-all border border-teal-100 group">
              <div className="w-14 h-14 bg-gradient-to-br from-teal-500 to-green-500 rounded-xl flex items-center justify-center mb-4 group-hover:scale-110 transition-transform shadow-md">
                <ShieldCheck className="w-7 h-7 text-white" />
              </div>
              <h3 className="font-bold text-text mb-2 text-lg">Better Hygiene</h3>
              <p className="text-gray-600 text-sm leading-relaxed">
                Stay fresh and protected with quality hygiene products for daily cleanliness and germ protection.
              </p>
            </div>
            <div className="bg-gradient-to-br from-blue-50 to-white rounded-2xl p-8 shadow-lg hover:shadow-xl transition-all border border-blue-100 group">
              <div className="w-14 h-14 bg-gradient-to-br from-blue-500 to-indigo-500 rounded-xl flex items-center justify-center mb-4 group-hover:scale-110 transition-transform shadow-md">
                <Smile className="w-7 h-7 text-white" />
              </div>
              <h3 className="font-bold text-text mb-2 text-lg">Daily Confidence</h3>
              <p className="text-gray-600 text-sm leading-relaxed">
                Feel confident and fresh throughout the day with proper personal care and grooming routines.
              </p>
            </div>
            <div className="bg-gradient-to-br from-indigo-50 to-white rounded-2xl p-8 shadow-lg hover:shadow-xl transition-all border border-indigo-100 group">
              <div className="w-14 h-14 bg-gradient-to-br from-indigo-500 to-purple-500 rounded-xl flex items-center justify-center mb-4 group-hover:scale-110 transition-transform shadow-md">
                <Scissors className="w-7 h-7 text-white" />
              </div>
              <h3 className="font-bold text-text mb-2 text-lg">Grooming & Wellness</h3>
              <p className="text-gray-600 text-sm leading-relaxed">
                Look and feel your best with quality grooming products for hair, beard, and overall appearance.
              </p>
            </div>
          </div>
        </div>

        {/* Self Care & Grooming Tips Section */}
        <div className="mt-16">
          <div className="text-center mb-10">
            <h2 className="text-3xl md:text-4xl font-bold text-text mb-3">Self Care & Grooming Tips</h2>
            <p className="text-gray-600 text-lg">Expert advice for your daily care routine</p>
          </div>
          <div className="grid md:grid-cols-2 lg:grid-cols-3 gap-6">
            <div className="bg-white rounded-2xl p-8 shadow-lg hover:shadow-xl transition-all border border-gray-100">
              <div className="flex items-center gap-3 mb-4">
                <div className="w-12 h-12 bg-cyan-100 rounded-xl flex items-center justify-center">
                  <Sparkles className="w-6 h-6 text-cyan-500" />
                </div>
                <h3 className="font-bold text-text text-lg">Skincare Routine</h3>
              </div>
              <p className="text-gray-600 text-sm leading-relaxed">
                Cleanse twice daily, use toner, apply moisturizer, and never skip sunscreen for healthy, glowing skin.
              </p>
            </div>
            <div className="bg-white rounded-2xl p-8 shadow-lg hover:shadow-xl transition-all border border-gray-100">
              <div className="flex items-center gap-3 mb-4">
                <div className="w-12 h-12 bg-teal-100 rounded-xl flex items-center justify-center">
                  <Wind className="w-6 h-6 text-teal-500" />
                </div>
                <h3 className="font-bold text-text text-lg">Hair Care Tips</h3>
              </div>
              <p className="text-gray-600 text-sm leading-relaxed">
                Shampoo 2-3 times weekly, condition after every wash, and oil your hair regularly for strength and shine.
              </p>
            </div>
            <div className="bg-white rounded-2xl p-8 shadow-lg hover:shadow-xl transition-all border border-gray-100">
              <div className="flex items-center gap-3 mb-4">
                <div className="w-12 h-12 bg-blue-100 rounded-xl flex items-center justify-center">
                  <Award className="w-6 h-6 text-blue-500" />
                </div>
                <h3 className="font-bold text-text text-lg">Grooming Essentials</h3>
              </div>
              <p className="text-gray-600 text-sm leading-relaxed">
                Maintain proper beard care, use quality razors, apply deodorant daily, and keep nails trimmed and clean.
              </p>
            </div>
          </div>
        </div>
      </div>
    </main>
  );
}
