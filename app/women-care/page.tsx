'use client';

import { useState, useMemo } from 'react';
import Breadcrumb from '@/components/ui/Breadcrumb';
import ProductCard from '@/components/ui/ProductCard';
import { PRODUCTS } from '@/data';
import { Search, SlidersHorizontal, Heart, Sparkles, Flower2, ShieldCheck, ChevronDown, Award, Leaf, Sun, Baby } from 'lucide-react';

export default function WomenCarePage() {
  const [searchQuery, setSearchQuery] = useState('');
  const [selectedCategory, setSelectedCategory] = useState('all');
  const [priceRange, setPriceRange] = useState([0, 1000]);
  const [showInStockOnly, setShowInStockOnly] = useState(false);
  const [sortBy, setSortBy] = useState('popularity');
  const [showFilters, setShowFilters] = useState(false);
  const [itemsToShow, setItemsToShow] = useState(12);
  
  const womenProducts = PRODUCTS.filter(p => p.category === 'women-care');
  
  // Get unique subcategories
  const subcategories = useMemo(() => {
    const cats = new Set(womenProducts.map(p => p.subcategory).filter(Boolean));
    return ['all', ...Array.from(cats)];
  }, [womenProducts]);

  // Filter and sort products
  const filteredProducts = useMemo(() => {
    let filtered = womenProducts.filter(product => {
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
  }, [womenProducts, searchQuery, selectedCategory, priceRange, showInStockOnly, sortBy]);

  const displayedProducts = filteredProducts.slice(0, itemsToShow);

  const careCategories = [
    { icon: Heart, title: 'Hygiene & Comfort', color: 'from-pink-500 to-rose-500', bgColor: 'bg-pink-50', iconColor: 'text-pink-500' },
    { icon: Sparkles, title: 'Skin & Beauty', color: 'from-purple-500 to-pink-500', bgColor: 'bg-purple-50', iconColor: 'text-purple-500' },
    { icon: Flower2, title: 'Daily Wellness', color: 'from-rose-500 to-pink-500', bgColor: 'bg-rose-50', iconColor: 'text-rose-500' },
    { icon: Baby, title: 'Pregnancy Care', color: 'from-indigo-500 to-purple-500', bgColor: 'bg-indigo-50', iconColor: 'text-indigo-500' },
  ];

  return (
    <main className="bg-gradient-to-b from-pink-50/40 via-purple-50/20 to-white">
      {/* Elegant Soft Header */}
      <div className="bg-gradient-to-br from-pink-200 via-purple-200 to-white text-gray-800 py-16 relative overflow-hidden">
        {/* Soft floating elements */}
        <div className="absolute inset-0 opacity-20">
          <div className="absolute top-20 right-20 w-48 h-48 bg-pink-300 rounded-full blur-3xl"></div>
          <div className="absolute bottom-20 left-20 w-48 h-48 bg-purple-300 rounded-full blur-3xl"></div>
        </div>
        
        <div className="max-w-[1400px] mx-auto px-4 sm:px-6 lg:px-8 relative z-10">
          <Breadcrumb 
            items={[{ label: 'Women Care' }]} 
            className="mb-6 text-gray-600"
          />
          <div className="flex items-center gap-4 mb-4">
            <div className="w-16 h-16 bg-white/80 backdrop-blur-sm rounded-3xl flex items-center justify-center shadow-xl">
              <Flower2 className="w-9 h-9 text-pink-500" />
            </div>
            <h1 className="text-4xl md:text-5xl font-bold text-gray-800">Women Care & Wellness</h1>
          </div>
          <p className="text-xl text-gray-700 max-w-3xl leading-relaxed">
            Trusted products for women's health, hygiene, skincare, and daily wellness
          </p>
        </div>
      </div>

      {/* Care Categories Banner */}
      <div className="bg-white border-b border-pink-100">
        <div className="max-w-[1400px] mx-auto px-4 sm:px-6 lg:px-8 py-8">
          <div className="grid grid-cols-2 md:grid-cols-4 gap-6">
            {careCategories.map((category, index) => (
              <div
                key={index}
                className="group cursor-pointer bg-gradient-to-br from-white to-gray-50 rounded-3xl p-6 shadow-md hover:shadow-xl transition-all duration-300 border border-gray-100 hover:-translate-y-1"
              >
                <div className={`w-14 h-14 ${category.bgColor} rounded-2xl flex items-center justify-center mb-4 group-hover:scale-110 transition-transform`}>
                  <category.icon className={`w-7 h-7 ${category.iconColor}`} />
                </div>
                <h3 className="font-bold text-text text-lg">{category.title}</h3>
              </div>
            ))}
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
                  }}
                  className="text-sm text-pink-500 hover:underline font-medium"
                >
                  Clear All
                </button>
              </div>

              {/* Category Filter */}
              <div className="mb-6">
                <h4 className="font-semibold text-text mb-3 flex items-center gap-2">
                  <Flower2 className="w-4 h-4 text-pink-500" />
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
                        className="w-4 h-4 text-pink-500 focus:ring-pink-400"
                      />
                      <span className="text-sm text-gray-700 group-hover:text-pink-500 capitalize">
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
                    placeholder="Search women care products..."
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
                  }}
                  className="px-6 py-2 bg-gradient-to-r from-pink-500 to-purple-500 text-white rounded-2xl font-semibold hover:from-pink-600 hover:to-purple-600 transition-all"
                >
                  Clear Filters
                </button>
              </div>
            )}
          </div>
        </div>

        {/* Care Designed for Women Section */}
        <div className="mt-16 mb-8">
          <div className="text-center mb-10">
            <h2 className="text-3xl md:text-4xl font-bold text-text mb-3">Care Designed for Women</h2>
            <p className="text-gray-600 text-lg">Trusted solutions for every aspect of women's wellness</p>
          </div>
          <div className="grid md:grid-cols-2 lg:grid-cols-4 gap-6">
            <div className="bg-gradient-to-br from-pink-50 to-white rounded-3xl p-8 shadow-lg hover:shadow-xl transition-all border border-pink-100 group">
              <div className="w-14 h-14 bg-gradient-to-br from-pink-500 to-rose-500 rounded-2xl flex items-center justify-center mb-4 group-hover:scale-110 transition-transform shadow-md">
                <Heart className="w-7 h-7 text-white" />
              </div>
              <h3 className="font-bold text-text mb-2 text-lg">Hygiene & Comfort</h3>
              <p className="text-gray-600 text-sm leading-relaxed">
                Premium feminine hygiene products for daily comfort and protection with trusted brands.
              </p>
            </div>
            <div className="bg-gradient-to-br from-purple-50 to-white rounded-3xl p-8 shadow-lg hover:shadow-xl transition-all border border-purple-100 group">
              <div className="w-14 h-14 bg-gradient-to-br from-purple-500 to-pink-500 rounded-2xl flex items-center justify-center mb-4 group-hover:scale-110 transition-transform shadow-md">
                <Sparkles className="w-7 h-7 text-white" />
              </div>
              <h3 className="font-bold text-text mb-2 text-lg">Skin & Beauty</h3>
              <p className="text-gray-600 text-sm leading-relaxed">
                Dermatologically tested skincare products for glowing, healthy skin at every age.
              </p>
            </div>
            <div className="bg-gradient-to-br from-rose-50 to-white rounded-3xl p-8 shadow-lg hover:shadow-xl transition-all border border-rose-100 group">
              <div className="w-14 h-14 bg-gradient-to-br from-rose-500 to-pink-500 rounded-2xl flex items-center justify-center mb-4 group-hover:scale-110 transition-transform shadow-md">
                <Flower2 className="w-7 h-7 text-white" />
              </div>
              <h3 className="font-bold text-text mb-2 text-lg">Daily Wellness</h3>
              <p className="text-gray-600 text-sm leading-relaxed">
                Essential vitamins and supplements designed specifically for women's health needs.
              </p>
            </div>
            <div className="bg-gradient-to-br from-indigo-50 to-white rounded-3xl p-8 shadow-lg hover:shadow-xl transition-all border border-indigo-100 group">
              <div className="w-14 h-14 bg-gradient-to-br from-indigo-500 to-purple-500 rounded-2xl flex items-center justify-center mb-4 group-hover:scale-110 transition-transform shadow-md">
                <Baby className="w-7 h-7 text-white" />
              </div>
              <h3 className="font-bold text-text mb-2 text-lg">Pregnancy Care</h3>
              <p className="text-gray-600 text-sm leading-relaxed">
                Safe and gentle products for expecting and nursing mothers with expert-recommended care.
              </p>
            </div>
          </div>
        </div>

        {/* Women Wellness Tips Section */}
        <div className="mt-16">
          <div className="text-center mb-10">
            <h2 className="text-3xl md:text-4xl font-bold text-text mb-3">Women Wellness Tips</h2>
            <p className="text-gray-600 text-lg">Expert guidance for your health and self-care journey</p>
          </div>
          <div className="grid md:grid-cols-2 lg:grid-cols-3 gap-6">
            <div className="bg-white rounded-3xl p-8 shadow-lg hover:shadow-xl transition-all border border-gray-100">
              <div className="flex items-center gap-3 mb-4">
                <div className="w-12 h-12 bg-pink-100 rounded-2xl flex items-center justify-center">
                  <Sun className="w-6 h-6 text-pink-500" />
                </div>
                <h3 className="font-bold text-text text-lg">Skincare Routine</h3>
              </div>
              <p className="text-gray-600 text-sm leading-relaxed">
                Cleanse, tone, and moisturize daily. Always use sunscreen and remove makeup before bed for healthy, glowing skin.
              </p>
            </div>
            <div className="bg-white rounded-3xl p-8 shadow-lg hover:shadow-xl transition-all border border-gray-100">
              <div className="flex items-center gap-3 mb-4">
                <div className="w-12 h-12 bg-purple-100 rounded-2xl flex items-center justify-center">
                  <ShieldCheck className="w-6 h-6 text-purple-500" />
                </div>
                <h3 className="font-bold text-text text-lg">Hygiene Awareness</h3>
              </div>
              <p className="text-gray-600 text-sm leading-relaxed">
                Change sanitary products regularly, use pH-balanced intimate wash, and choose breathable cotton undergarments.
              </p>
            </div>
            <div className="bg-white rounded-3xl p-8 shadow-lg hover:shadow-xl transition-all border border-gray-100">
              <div className="flex items-center gap-3 mb-4">
                <div className="w-12 h-12 bg-rose-100 rounded-2xl flex items-center justify-center">
                  <Award className="w-6 h-6 text-rose-500" />
                </div>
                <h3 className="font-bold text-text text-lg">Nutrition Tips</h3>
              </div>
              <p className="text-gray-600 text-sm leading-relaxed">
                Include iron, calcium, and folic acid in your diet. Stay hydrated and maintain balanced nutrition for overall wellness.
              </p>
            </div>
          </div>
        </div>
      </div>
    </main>
  );
}
