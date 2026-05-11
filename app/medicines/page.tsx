'use client';

import { useState, useMemo } from 'react';
import PageHeader from '@/components/ui/PageHeader';
import Breadcrumb from '@/components/ui/Breadcrumb';
import ProductCard from '@/components/ui/ProductCard';
import { PRODUCTS } from '@/data';
import { Search, SlidersHorizontal, ShieldCheck, Zap, Truck, HeadphonesIcon, ChevronDown } from 'lucide-react';

export default function MedicinesPage() {
  const [searchQuery, setSearchQuery] = useState('');
  const [selectedCategory, setSelectedCategory] = useState('all');
  const [priceRange, setPriceRange] = useState([0, 2000]);
  const [showInStockOnly, setShowInStockOnly] = useState(false);
  const [showPrescriptionOnly, setShowPrescriptionOnly] = useState(false);
  const [sortBy, setSortBy] = useState('popularity');
  const [showFilters, setShowFilters] = useState(false);
  const [itemsToShow, setItemsToShow] = useState(12);
  
  const medicineProducts = PRODUCTS.filter(p => p.category === 'medicines');
  
  // Get unique subcategories
  const subcategories = useMemo(() => {
    const cats = new Set(medicineProducts.map(p => p.subcategory).filter(Boolean));
    return ['all', ...Array.from(cats)];
  }, [medicineProducts]);

  // Filter and sort products
  const filteredProducts = useMemo(() => {
    let filtered = medicineProducts.filter(product => {
      const matchesSearch = product.name.toLowerCase().includes(searchQuery.toLowerCase()) ||
                           product.description?.toLowerCase().includes(searchQuery.toLowerCase());
      const matchesCategory = selectedCategory === 'all' || product.subcategory === selectedCategory;
      const price = parseInt(product.price.replace(/[₹,]/g, ''));
      const matchesPrice = price >= priceRange[0] && price <= priceRange[1];
      const matchesStock = !showInStockOnly || product.inStock;
      const matchesPrescription = !showPrescriptionOnly || product.prescriptionRequired;
      
      return matchesSearch && matchesCategory && matchesPrice && matchesStock && matchesPrescription;
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
  }, [medicineProducts, searchQuery, selectedCategory, priceRange, showInStockOnly, showPrescriptionOnly, sortBy]);

  const displayedProducts = filteredProducts.slice(0, itemsToShow);

  return (
    <main className="bg-gray-50">
      {/* Premium Header */}
      <div className="bg-gradient-to-br from-primary via-blue-600 to-indigo-700 text-white py-16">
        <div className="max-w-[1400px] mx-auto px-4 sm:px-6 lg:px-8">
          <Breadcrumb 
            items={[{ label: 'Medicines' }]} 
            className="mb-6 text-blue-100"
          />
          <h1 className="text-4xl md:text-5xl font-bold mb-4">Medicines</h1>
          <p className="text-xl text-blue-100 max-w-2xl">
            Browse our wide range of prescription and over-the-counter medicines
          </p>
        </div>
      </div>

      {/* Trust Indicators */}
      <div className="bg-white border-b border-gray-200">
        <div className="max-w-[1400px] mx-auto px-4 sm:px-6 lg:px-8 py-6">
          <div className="grid grid-cols-2 md:grid-cols-4 gap-6">
            <div className="flex items-center gap-3">
              <div className="w-12 h-12 bg-accent/10 rounded-xl flex items-center justify-center flex-shrink-0">
                <ShieldCheck className="w-6 h-6 text-accent" />
              </div>
              <div>
                <p className="font-semibold text-text text-sm">100% Genuine</p>
                <p className="text-xs text-gray-600">Medicines</p>
              </div>
            </div>
            <div className="flex items-center gap-3">
              <div className="w-12 h-12 bg-primary/10 rounded-xl flex items-center justify-center flex-shrink-0">
                <Zap className="w-6 h-6 text-primary" />
              </div>
              <div>
                <p className="font-semibold text-text text-sm">Fast Delivery</p>
                <p className="text-xs text-gray-600">Same Day</p>
              </div>
            </div>
            <div className="flex items-center gap-3">
              <div className="w-12 h-12 bg-blue-100 rounded-xl flex items-center justify-center flex-shrink-0">
                <Truck className="w-6 h-6 text-primary" />
              </div>
              <div>
                <p className="font-semibold text-text text-sm">Free Delivery</p>
                <p className="text-xs text-gray-600">Above ₹500</p>
              </div>
            </div>
            <div className="flex items-center gap-3">
              <div className="w-12 h-12 bg-purple-100 rounded-xl flex items-center justify-center flex-shrink-0">
                <HeadphonesIcon className="w-6 h-6 text-purple-600" />
              </div>
              <div>
                <p className="font-semibold text-text text-sm">Expert Support</p>
                <p className="text-xs text-gray-600">Pharmacist</p>
              </div>
            </div>
          </div>
        </div>
      </div>

      <div className="max-w-[1400px] mx-auto px-4 sm:px-6 lg:px-8 py-8">
        <div className="flex flex-col lg:flex-row gap-8">
          {/* Sidebar Filters */}
          <aside className={`lg:w-72 ${showFilters ? 'block' : 'hidden lg:block'}`}>
            <div className="bg-white rounded-2xl shadow-lg p-6 sticky top-24">
              <div className="flex items-center justify-between mb-6">
                <h3 className="text-lg font-bold text-text flex items-center gap-2">
                  <SlidersHorizontal className="w-5 h-5" />
                  Filters
                </h3>
                <button
                  onClick={() => {
                    setSelectedCategory('all');
                    setPriceRange([0, 2000]);
                    setShowInStockOnly(false);
                    setShowPrescriptionOnly(false);
                  }}
                  className="text-sm text-primary hover:underline"
                >
                  Clear All
                </button>
              </div>

              {/* Category Filter */}
              <div className="mb-6">
                <h4 className="font-semibold text-text mb-3">Category</h4>
                <div className="space-y-2">
                  {subcategories.map(cat => (
                    <label key={cat} className="flex items-center gap-2 cursor-pointer group">
                      <input
                        type="radio"
                        name="category"
                        checked={selectedCategory === cat}
                        onChange={() => setSelectedCategory(cat || 'all')}
                        className="w-4 h-4 text-primary focus:ring-primary"
                      />
                      <span className="text-sm text-gray-700 group-hover:text-primary capitalize">
                        {cat === 'all' ? 'All Medicines' : cat}
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
                    className="w-full"
                  />
                  <div className="flex items-center justify-between text-sm text-gray-600">
                    <span>₹0</span>
                    <span className="font-semibold text-primary">₹{priceRange[1]}</span>
                  </div>
                </div>
              </div>

              {/* Availability */}
              <div className="mb-6">
                <h4 className="font-semibold text-text mb-3">Availability</h4>
                <label className="flex items-center gap-2 cursor-pointer">
                  <input
                    type="checkbox"
                    checked={showInStockOnly}
                    onChange={(e) => setShowInStockOnly(e.target.checked)}
                    className="w-4 h-4 text-primary focus:ring-primary rounded"
                  />
                  <span className="text-sm text-gray-700">In Stock Only</span>
                </label>
              </div>

              {/* Prescription */}
              <div>
                <h4 className="font-semibold text-text mb-3">Prescription</h4>
                <label className="flex items-center gap-2 cursor-pointer">
                  <input
                    type="checkbox"
                    checked={showPrescriptionOnly}
                    onChange={(e) => setShowPrescriptionOnly(e.target.checked)}
                    className="w-4 h-4 text-primary focus:ring-primary rounded"
                  />
                  <span className="text-sm text-gray-700">Prescription Required</span>
                </label>
              </div>
            </div>
          </aside>

          {/* Main Content */}
          <div className="flex-1">
            {/* Search and Sort Bar */}
            <div className="bg-white rounded-2xl shadow-lg p-6 mb-8">
              <div className="flex flex-col md:flex-row gap-4">
                {/* Search */}
                <div className="flex-1 relative">
                  <Search className="absolute left-4 top-1/2 transform -translate-y-1/2 text-gray-400 w-5 h-5" />
                  <input
                    type="text"
                    placeholder="Search medicines by name or use..."
                    value={searchQuery}
                    onChange={(e) => setSearchQuery(e.target.value)}
                    className="w-full pl-12 pr-4 py-3 border border-gray-300 rounded-xl focus:outline-none focus:ring-2 focus:ring-primary focus:border-transparent"
                  />
                </div>

                {/* Sort */}
                <div className="relative md:w-64">
                  <select
                    value={sortBy}
                    onChange={(e) => setSortBy(e.target.value)}
                    className="w-full px-4 py-3 border border-gray-300 rounded-xl focus:outline-none focus:ring-2 focus:ring-primary appearance-none bg-white cursor-pointer"
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
                  className="lg:hidden flex items-center justify-center gap-2 px-6 py-3 bg-primary text-white rounded-xl font-semibold hover:bg-blue-700 transition-colors"
                >
                  <SlidersHorizontal className="w-5 h-5" />
                  Filters
                </button>
              </div>

              {/* Results Count */}
              <div className="mt-4 text-sm text-gray-600">
                Showing <span className="font-semibold text-text">{displayedProducts.length}</span> of{' '}
                <span className="font-semibold text-text">{filteredProducts.length}</span> products
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
                      className="px-8 py-3 bg-white text-primary border-2 border-primary rounded-xl font-semibold hover:bg-primary hover:text-white transition-all duration-300 shadow-md hover:shadow-lg"
                    >
                      Load More Products
                    </button>
                  </div>
                )}
              </>
            ) : (
              <div className="bg-white rounded-2xl shadow-lg p-12 text-center">
                <div className="w-20 h-20 bg-gray-100 rounded-full flex items-center justify-center mx-auto mb-4">
                  <Search className="w-10 h-10 text-gray-400" />
                </div>
                <h3 className="text-xl font-bold text-text mb-2">No medicines found</h3>
                <p className="text-gray-600 mb-6">Try adjusting your filters or search query</p>
                <button
                  onClick={() => {
                    setSearchQuery('');
                    setSelectedCategory('all');
                    setPriceRange([0, 2000]);
                    setShowInStockOnly(false);
                    setShowPrescriptionOnly(false);
                  }}
                  className="px-6 py-2 bg-primary text-white rounded-xl font-semibold hover:bg-blue-700 transition-colors"
                >
                  Clear Filters
                </button>
              </div>
            )}
          </div>
        </div>

        {/* Info Section */}
        <div className="mt-16 grid md:grid-cols-2 lg:grid-cols-4 gap-6">
          <div className="bg-white rounded-2xl p-8 shadow-lg hover:shadow-xl transition-shadow">
            <div className="w-14 h-14 bg-primary/10 rounded-xl flex items-center justify-center mb-4">
              <ShieldCheck className="w-7 h-7 text-primary" />
            </div>
            <h3 className="font-bold text-text mb-2 text-lg">Prescription Medicines</h3>
            <p className="text-gray-600 text-sm leading-relaxed">
              We stock a comprehensive range of prescription medications. Please ensure you have a valid prescription.
            </p>
          </div>
          <div className="bg-white rounded-2xl p-8 shadow-lg hover:shadow-xl transition-shadow">
            <div className="w-14 h-14 bg-accent/10 rounded-xl flex items-center justify-center mb-4">
              <Zap className="w-7 h-7 text-accent" />
            </div>
            <h3 className="font-bold text-text mb-2 text-lg">Over-the-Counter</h3>
            <p className="text-gray-600 text-sm leading-relaxed">
              Browse our selection of OTC medicines for common ailments like fever, cold, and pain relief.
            </p>
          </div>
          <div className="bg-white rounded-2xl p-8 shadow-lg hover:shadow-xl transition-shadow">
            <div className="w-14 h-14 bg-blue-100 rounded-xl flex items-center justify-center mb-4">
              <ShieldCheck className="w-7 h-7 text-blue-600" />
            </div>
            <h3 className="font-bold text-text mb-2 text-lg">Quality Assurance</h3>
            <p className="text-gray-600 text-sm leading-relaxed">
              All medicines are sourced directly from certified distributors and stored under optimal conditions.
            </p>
          </div>
          <div className="bg-white rounded-2xl p-8 shadow-lg hover:shadow-xl transition-shadow">
            <div className="w-14 h-14 bg-purple-100 rounded-xl flex items-center justify-center mb-4">
              <HeadphonesIcon className="w-7 h-7 text-purple-600" />
            </div>
            <h3 className="font-bold text-text mb-2 text-lg">Expert Guidance</h3>
            <p className="text-gray-600 text-sm leading-relaxed">
              Our trained pharmacists are available to answer your questions and provide medication counseling.
            </p>
          </div>
        </div>
      </div>
    </main>
  );
}
