'use client';

import { useState, useMemo } from 'react';
import Breadcrumb from '@/components/ui/Breadcrumb';
import ProductCard from '@/components/ui/ProductCard';
import { PRODUCTS } from '@/data';
import { Search, SlidersHorizontal, Zap, Shield, Dumbbell, Heart, ChevronDown, TrendingUp, Award, Leaf, Sparkles, Target, Users } from 'lucide-react';

export default function NutritionPage() {
  const [searchQuery, setSearchQuery] = useState('');
  const [selectedCategory, setSelectedCategory] = useState('all');
  const [priceRange, setPriceRange] = useState([0, 5000]);
  const [showInStockOnly, setShowInStockOnly] = useState(false);
  const [sortBy, setSortBy] = useState('popularity');
  const [showFilters, setShowFilters] = useState(false);
  const [itemsToShow, setItemsToShow] = useState(12);
  
  const nutritionProducts = PRODUCTS.filter(p => p.category === 'nutrition');
  
  // Get unique subcategories
  const subcategories = useMemo(() => {
    const cats = new Set(nutritionProducts.map(p => p.subcategory).filter(Boolean));
    return ['all', ...Array.from(cats)];
  }, [nutritionProducts]);

  // Filter and sort products
  const filteredProducts = useMemo(() => {
    let filtered = nutritionProducts.filter(product => {
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
  }, [nutritionProducts, searchQuery, selectedCategory, priceRange, showInStockOnly, sortBy]);

  const displayedProducts = filteredProducts.slice(0, itemsToShow);

  const fitnessGoals = [
    { icon: Dumbbell, title: 'Muscle Building', color: 'from-orange-500 to-red-500', bgColor: 'bg-orange-50', iconColor: 'text-orange-500' },
    { icon: TrendingUp, title: 'Weight Gain', color: 'from-blue-500 to-cyan-500', bgColor: 'bg-blue-50', iconColor: 'text-blue-500' },
    { icon: Shield, title: 'Immunity Support', color: 'from-green-500 to-emerald-500', bgColor: 'bg-green-50', iconColor: 'text-green-500' },
    { icon: Heart, title: 'Daily Wellness', color: 'from-pink-500 to-rose-500', bgColor: 'bg-pink-50', iconColor: 'text-pink-500' },
  ];

  return (
    <main className="bg-gradient-to-b from-green-50/30 via-blue-50/20 to-white">
      {/* Premium Energetic Header */}
      <div className="bg-gradient-to-br from-blue-500 via-cyan-500 to-green-500 text-white py-16 relative overflow-hidden">
        {/* Animated background elements */}
        <div className="absolute inset-0 opacity-10">
          <div className="absolute top-10 right-10 w-64 h-64 bg-white rounded-full blur-3xl animate-pulse"></div>
          <div className="absolute bottom-10 left-10 w-64 h-64 bg-white rounded-full blur-3xl animate-pulse" style={{ animationDelay: '1s' }}></div>
        </div>
        
        <div className="max-w-[1400px] mx-auto px-4 sm:px-6 lg:px-8 relative z-10">
          <Breadcrumb 
            items={[{ label: 'Nutrition & Supplements' }]} 
            className="mb-6 text-blue-100"
          />
          <div className="flex items-center gap-4 mb-4">
            <div className="w-16 h-16 bg-white/20 backdrop-blur-md rounded-2xl flex items-center justify-center shadow-xl">
              <Zap className="w-9 h-9 text-white" />
            </div>
            <h1 className="text-4xl md:text-5xl font-bold">Nutrition & Supplements</h1>
          </div>
          <p className="text-xl text-blue-50 max-w-3xl leading-relaxed">
            Support your health, fitness, and immunity with trusted nutritional products
          </p>
        </div>
      </div>

      {/* Fitness Goals Banner */}
      <div className="bg-white border-b border-gray-200">
        <div className="max-w-[1400px] mx-auto px-4 sm:px-6 lg:px-8 py-8">
          <div className="grid grid-cols-2 md:grid-cols-4 gap-6">
            {fitnessGoals.map((goal, index) => (
              <div
                key={index}
                className="group cursor-pointer bg-gradient-to-br from-white to-gray-50 rounded-2xl p-6 shadow-md hover:shadow-xl transition-all duration-300 border border-gray-100 hover:-translate-y-1"
              >
                <div className={`w-14 h-14 ${goal.bgColor} rounded-xl flex items-center justify-center mb-4 group-hover:scale-110 transition-transform`}>
                  <goal.icon className={`w-7 h-7 ${goal.iconColor}`} />
                </div>
                <h3 className="font-bold text-text text-lg">{goal.title}</h3>
              </div>
            ))}
          </div>
        </div>
      </div>

      <div className="max-w-[1400px] mx-auto px-4 sm:px-6 lg:px-8 py-8">
        <div className="flex flex-col lg:flex-row gap-8">
          {/* Sidebar Filters */}
          <aside className={`lg:w-72 ${showFilters ? 'block' : 'hidden lg:block'}`}>
            <div className="bg-white rounded-2xl shadow-lg p-6 sticky top-24 border border-green-100">
              <div className="flex items-center justify-between mb-6">
                <h3 className="text-lg font-bold text-text flex items-center gap-2">
                  <SlidersHorizontal className="w-5 h-5 text-green-500" />
                  Filters
                </h3>
                <button
                  onClick={() => {
                    setSelectedCategory('all');
                    setPriceRange([0, 5000]);
                    setShowInStockOnly(false);
                  }}
                  className="text-sm text-green-600 hover:underline font-medium"
                >
                  Clear All
                </button>
              </div>

              {/* Category Filter */}
              <div className="mb-6">
                <h4 className="font-semibold text-text mb-3 flex items-center gap-2">
                  <Target className="w-4 h-4 text-green-500" />
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
                        className="w-4 h-4 text-green-500 focus:ring-green-400"
                      />
                      <span className="text-sm text-gray-700 group-hover:text-green-600 capitalize">
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
                    max="5000"
                    value={priceRange[1]}
                    onChange={(e) => setPriceRange([0, parseInt(e.target.value)])}
                    className="w-full accent-green-500"
                  />
                  <div className="flex items-center justify-between text-sm text-gray-600">
                    <span>₹0</span>
                    <span className="font-semibold text-green-600">₹{priceRange[1]}</span>
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
                    className="w-4 h-4 text-green-500 focus:ring-green-400 rounded"
                  />
                  <span className="text-sm text-gray-700">In Stock Only</span>
                </label>
              </div>
            </div>
          </aside>

          {/* Main Content */}
          <div className="flex-1">
            {/* Search and Sort Bar */}
            <div className="bg-white rounded-2xl shadow-lg p-6 mb-8 border border-green-100">
              <div className="flex flex-col md:flex-row gap-4">
                {/* Search */}
                <div className="flex-1 relative">
                  <Search className="absolute left-4 top-1/2 transform -translate-y-1/2 text-gray-400 w-5 h-5" />
                  <input
                    type="text"
                    placeholder="Search nutrition products..."
                    value={searchQuery}
                    onChange={(e) => setSearchQuery(e.target.value)}
                    className="w-full pl-12 pr-4 py-3 border border-green-200 rounded-xl focus:outline-none focus:ring-2 focus:ring-green-400 focus:border-transparent"
                  />
                </div>

                {/* Sort */}
                <div className="relative md:w-64">
                  <select
                    value={sortBy}
                    onChange={(e) => setSortBy(e.target.value)}
                    className="w-full px-4 py-3 border border-green-200 rounded-xl focus:outline-none focus:ring-2 focus:ring-green-400 appearance-none bg-white cursor-pointer"
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
                  className="lg:hidden flex items-center justify-center gap-2 px-6 py-3 bg-gradient-to-r from-green-500 to-cyan-500 text-white rounded-xl font-semibold hover:from-green-600 hover:to-cyan-600 transition-all shadow-md"
                >
                  <SlidersHorizontal className="w-5 h-5" />
                  Filters
                </button>
              </div>

              {/* Results Count */}
              <div className="mt-4 text-sm text-gray-600">
                Showing <span className="font-semibold text-green-600">{displayedProducts.length}</span> of{' '}
                <span className="font-semibold text-green-600">{filteredProducts.length}</span> products
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
                      className="px-8 py-3 bg-gradient-to-r from-green-500 to-cyan-500 text-white rounded-xl font-semibold hover:from-green-600 hover:to-cyan-600 transition-all duration-300 shadow-lg hover:shadow-xl"
                    >
                      Load More Products
                    </button>
                  </div>
                )}
              </>
            ) : (
              <div className="bg-white rounded-2xl shadow-lg p-12 text-center border border-green-100">
                <div className="w-20 h-20 bg-green-100 rounded-full flex items-center justify-center mx-auto mb-4">
                  <Search className="w-10 h-10 text-green-400" />
                </div>
                <h3 className="text-xl font-bold text-text mb-2">No products found</h3>
                <p className="text-gray-600 mb-6">Try adjusting your filters or search query</p>
                <button
                  onClick={() => {
                    setSearchQuery('');
                    setSelectedCategory('all');
                    setPriceRange([0, 5000]);
                    setShowInStockOnly(false);
                  }}
                  className="px-6 py-2 bg-gradient-to-r from-green-500 to-cyan-500 text-white rounded-xl font-semibold hover:from-green-600 hover:to-cyan-600 transition-all"
                >
                  Clear Filters
                </button>
              </div>
            )}
          </div>
        </div>

        {/* Why Nutrition Matters Section */}
        <div className="mt-16 mb-8">
          <div className="text-center mb-10">
            <h2 className="text-3xl md:text-4xl font-bold text-text mb-3">Why Nutrition Matters</h2>
            <p className="text-gray-600 text-lg">Essential benefits for your health and wellness</p>
          </div>
          <div className="grid md:grid-cols-2 lg:grid-cols-4 gap-6">
            <div className="bg-gradient-to-br from-orange-50 to-white rounded-2xl p-8 shadow-lg hover:shadow-xl transition-all border border-orange-100 group">
              <div className="w-14 h-14 bg-gradient-to-br from-orange-500 to-red-500 rounded-xl flex items-center justify-center mb-4 group-hover:scale-110 transition-transform shadow-md">
                <Zap className="w-7 h-7 text-white" />
              </div>
              <h3 className="font-bold text-text mb-2 text-lg">Energy & Strength</h3>
              <p className="text-gray-600 text-sm leading-relaxed">
                Boost your daily energy levels and physical strength with proper nutrition and supplements.
              </p>
            </div>
            <div className="bg-gradient-to-br from-green-50 to-white rounded-2xl p-8 shadow-lg hover:shadow-xl transition-all border border-green-100 group">
              <div className="w-14 h-14 bg-gradient-to-br from-green-500 to-emerald-500 rounded-xl flex items-center justify-center mb-4 group-hover:scale-110 transition-transform shadow-md">
                <Shield className="w-7 h-7 text-white" />
              </div>
              <h3 className="font-bold text-text mb-2 text-lg">Better Immunity</h3>
              <p className="text-gray-600 text-sm leading-relaxed">
                Strengthen your immune system naturally with vitamins, minerals, and herbal supplements.
              </p>
            </div>
            <div className="bg-gradient-to-br from-blue-50 to-white rounded-2xl p-8 shadow-lg hover:shadow-xl transition-all border border-blue-100 group">
              <div className="w-14 h-14 bg-gradient-to-br from-blue-500 to-cyan-500 rounded-xl flex items-center justify-center mb-4 group-hover:scale-110 transition-transform shadow-md">
                <Dumbbell className="w-7 h-7 text-white" />
              </div>
              <h3 className="font-bold text-text mb-2 text-lg">Muscle Recovery</h3>
              <p className="text-gray-600 text-sm leading-relaxed">
                Support muscle growth and faster recovery with protein and amino acid supplements.
              </p>
            </div>
            <div className="bg-gradient-to-br from-pink-50 to-white rounded-2xl p-8 shadow-lg hover:shadow-xl transition-all border border-pink-100 group">
              <div className="w-14 h-14 bg-gradient-to-br from-pink-500 to-rose-500 rounded-xl flex items-center justify-center mb-4 group-hover:scale-110 transition-transform shadow-md">
                <Heart className="w-7 h-7 text-white" />
              </div>
              <h3 className="font-bold text-text mb-2 text-lg">Daily Wellness</h3>
              <p className="text-gray-600 text-sm leading-relaxed">
                Maintain overall health and well-being with balanced nutrition and daily supplements.
              </p>
            </div>
          </div>
        </div>

        {/* Nutrition Tips Section */}
        <div className="mt-16">
          <div className="text-center mb-10">
            <h2 className="text-3xl md:text-4xl font-bold text-text mb-3">Nutrition Tips & Wellness Guide</h2>
            <p className="text-gray-600 text-lg">Expert advice for a healthier lifestyle</p>
          </div>
          <div className="grid md:grid-cols-2 lg:grid-cols-3 gap-6">
            <div className="bg-white rounded-2xl p-8 shadow-lg hover:shadow-xl transition-all border border-gray-100">
              <div className="flex items-center gap-3 mb-4">
                <div className="w-12 h-12 bg-blue-100 rounded-xl flex items-center justify-center">
                  <Award className="w-6 h-6 text-blue-500" />
                </div>
                <h3 className="font-bold text-text text-lg">Daily Protein Tips</h3>
              </div>
              <p className="text-gray-600 text-sm leading-relaxed">
                Aim for 0.8-1g of protein per kg of body weight. Include lean meats, eggs, dairy, and plant-based sources.
              </p>
            </div>
            <div className="bg-white rounded-2xl p-8 shadow-lg hover:shadow-xl transition-all border border-gray-100">
              <div className="flex items-center gap-3 mb-4">
                <div className="w-12 h-12 bg-green-100 rounded-xl flex items-center justify-center">
                  <Sparkles className="w-6 h-6 text-green-500" />
                </div>
                <h3 className="font-bold text-text text-lg">Vitamin Importance</h3>
              </div>
              <p className="text-gray-600 text-sm leading-relaxed">
                Vitamins support immunity, energy, and overall health. Ensure adequate intake through diet and supplements.
              </p>
            </div>
            <div className="bg-white rounded-2xl p-8 shadow-lg hover:shadow-xl transition-all border border-gray-100">
              <div className="flex items-center gap-3 mb-4">
                <div className="w-12 h-12 bg-cyan-100 rounded-xl flex items-center justify-center">
                  <Leaf className="w-6 h-6 text-cyan-500" />
                </div>
                <h3 className="font-bold text-text text-lg">Immunity Boosting</h3>
              </div>
              <p className="text-gray-600 text-sm leading-relaxed">
                Include vitamin C, zinc, and herbal supplements like ashwagandha and tulsi for natural immunity support.
              </p>
            </div>
          </div>
        </div>
      </div>
    </main>
  );
}
