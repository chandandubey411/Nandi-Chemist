'use client';

import { useState, useMemo } from 'react';
import Breadcrumb from '@/components/ui/Breadcrumb';
import ProductCard from '@/components/ui/ProductCard';
import { PRODUCTS } from '@/data';
import { Search, SlidersHorizontal, Activity, ShieldCheck, Award, Gauge, ChevronDown, Heart, Stethoscope, Wind, Users } from 'lucide-react';

export default function HealthDevicesPage() {
  const [searchQuery, setSearchQuery] = useState('');
  const [selectedCategory, setSelectedCategory] = useState('all');
  const [priceRange, setPriceRange] = useState([0, 40000]);
  const [showInStockOnly, setShowInStockOnly] = useState(false);
  const [sortBy, setSortBy] = useState('popularity');
  const [showFilters, setShowFilters] = useState(false);
  const [itemsToShow, setItemsToShow] = useState(12);
  
  const healthDevices = PRODUCTS.filter(p => p.category === 'health-devices');
  
  const subcategories = useMemo(() => {
    const cats = new Set(healthDevices.map(p => p.subcategory).filter(Boolean));
    return ['all', ...Array.from(cats)];
  }, [healthDevices]);

  const filteredProducts = useMemo(() => {
    let filtered = healthDevices.filter(product => {
      const matchesSearch = product.name.toLowerCase().includes(searchQuery.toLowerCase()) ||
                           product.description?.toLowerCase().includes(searchQuery.toLowerCase());
      const matchesCategory = selectedCategory === 'all' || product.subcategory === selectedCategory;
      const price = parseInt(product.price.replace(/[₹,]/g, ''));
      const matchesPrice = price >= priceRange[0] && price <= priceRange[1];
      const matchesStock = !showInStockOnly || product.inStock;
      
      return matchesSearch && matchesCategory && matchesPrice && matchesStock;
    });

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
        default:
          return (b.rating || 0) - (a.rating || 0);
      }
    });

    return filtered;
  }, [healthDevices, searchQuery, selectedCategory, priceRange, showInStockOnly, sortBy]);

  const displayedProducts = filteredProducts.slice(0, itemsToShow);

  const trustFeatures = [
    { icon: Gauge, title: 'Accurate Readings', color: 'from-blue-500 to-cyan-500', bgColor: 'bg-blue-50', iconColor: 'text-blue-500' },
    { icon: Award, title: 'Trusted Brands', color: 'from-cyan-500 to-teal-500', bgColor: 'bg-cyan-50', iconColor: 'text-cyan-500' },
    { icon: Heart, title: 'Easy Home Use', color: 'from-teal-500 to-green-500', bgColor: 'bg-teal-50', iconColor: 'text-teal-500' },
    { icon: ShieldCheck, title: 'Durable & Reliable', color: 'from-indigo-500 to-blue-500', bgColor: 'bg-indigo-50', iconColor: 'text-indigo-500' },
  ];

  return (
    <main className="bg-gradient-to-b from-blue-50/30 via-cyan-50/20 to-white">
      {/* Professional Medical Header */}
      <div className="bg-gradient-to-br from-white via-blue-50 to-cyan-50 text-gray-800 py-16 relative overflow-hidden border-b-4 border-blue-500">
        <div className="absolute inset-0 opacity-5">
          <div className="absolute top-20 right-20 w-64 h-64 bg-blue-500 rounded-full blur-3xl"></div>
          <div className="absolute bottom-20 left-20 w-64 h-64 bg-cyan-500 rounded-full blur-3xl"></div>
        </div>
        
        <div className="max-w-[1400px] mx-auto px-4 sm:px-6 lg:px-8 relative z-10">
          <Breadcrumb 
            items={[{ label: 'Health Devices' }]} 
            className="mb-6 text-gray-600"
          />
          <div className="flex items-center gap-4 mb-4">
            <div className="w-16 h-16 bg-blue-500 rounded-2xl flex items-center justify-center shadow-xl">
              <Activity className="w-9 h-9 text-white" />
            </div>
            <h1 className="text-4xl md:text-5xl font-bold text-gray-800">Health Devices & Medical Equipment</h1>
          </div>
          <p className="text-xl text-gray-700 max-w-3xl leading-relaxed">
            Reliable health monitoring devices for home and professional care
          </p>
        </div>
      </div>

      {/* Trust Features Banner */}
      <div className="bg-white border-b border-gray-200">
        <div className="max-w-[1400px] mx-auto px-4 sm:px-6 lg:px-8 py-8">
          <div className="grid grid-cols-2 md:grid-cols-4 gap-6">
            {trustFeatures.map((feature, index) => (
              <div
                key={index}
                className="group cursor-pointer bg-gradient-to-br from-white to-gray-50 rounded-2xl p-6 shadow-md hover:shadow-xl transition-all duration-300 border border-gray-100 hover:-translate-y-1"
              >
                <div className={`w-14 h-14 ${feature.bgColor} rounded-xl flex items-center justify-center mb-4 group-hover:scale-110 transition-transform`}>
                  <feature.icon className={`w-7 h-7 ${feature.iconColor}`} />
                </div>
                <h3 className="font-bold text-text text-lg">{feature.title}</h3>
              </div>
            ))}
          </div>
        </div>
      </div>

      <div className="max-w-[1400px] mx-auto px-4 sm:px-6 lg:px-8 py-8">
        <div className="flex flex-col lg:flex-row gap-8">
          {/* Sidebar Filters */}
          <aside className={`lg:w-72 ${showFilters ? 'block' : 'hidden lg:block'}`}>
            <div className="bg-white rounded-2xl shadow-lg p-6 sticky top-24 border border-blue-100">
              <div className="flex items-center justify-between mb-6">
                <h3 className="text-lg font-bold text-text flex items-center gap-2">
                  <SlidersHorizontal className="w-5 h-5 text-blue-500" />
                  Filters
                </h3>
                <button
                  onClick={() => {
                    setSelectedCategory('all');
                    setPriceRange([0, 40000]);
                    setShowInStockOnly(false);
                  }}
                  className="text-sm text-blue-600 hover:underline font-medium"
                >
                  Clear All
                </button>
              </div>

              <div className="mb-6">
                <h4 className="font-semibold text-text mb-3 flex items-center gap-2">
                  <Stethoscope className="w-4 h-4 text-blue-500" />
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
                        className="w-4 h-4 text-blue-500 focus:ring-blue-400"
                      />
                      <span className="text-sm text-gray-700 group-hover:text-blue-600 capitalize">
                        {cat === 'all' ? 'All Devices' : cat}
                      </span>
                    </label>
                  ))}
                </div>
              </div>

              <div className="mb-6">
                <h4 className="font-semibold text-text mb-3">Price Range</h4>
                <div className="space-y-3">
                  <input
                    type="range"
                    min="0"
                    max="40000"
                    value={priceRange[1]}
                    onChange={(e) => setPriceRange([0, parseInt(e.target.value)])}
                    className="w-full accent-blue-500"
                  />
                  <div className="flex items-center justify-between text-sm text-gray-600">
                    <span>₹0</span>
                    <span className="font-semibold text-blue-600">₹{priceRange[1]}</span>
                  </div>
                </div>
              </div>

              <div>
                <h4 className="font-semibold text-text mb-3">Availability</h4>
                <label className="flex items-center gap-2 cursor-pointer">
                  <input
                    type="checkbox"
                    checked={showInStockOnly}
                    onChange={(e) => setShowInStockOnly(e.target.checked)}
                    className="w-4 h-4 text-blue-500 focus:ring-blue-400 rounded"
                  />
                  <span className="text-sm text-gray-700">In Stock Only</span>
                </label>
              </div>
            </div>
          </aside>

          {/* Main Content */}
          <div className="flex-1">
            <div className="bg-white rounded-2xl shadow-lg p-6 mb-8 border border-blue-100">
              <div className="flex flex-col md:flex-row gap-4">
                <div className="flex-1 relative">
                  <Search className="absolute left-4 top-1/2 transform -translate-y-1/2 text-gray-400 w-5 h-5" />
                  <input
                    type="text"
                    placeholder="Search health devices..."
                    value={searchQuery}
                    onChange={(e) => setSearchQuery(e.target.value)}
                    className="w-full pl-12 pr-4 py-3 border border-blue-200 rounded-xl focus:outline-none focus:ring-2 focus:ring-blue-400 focus:border-transparent"
                  />
                </div>

                <div className="relative md:w-64">
                  <select
                    value={sortBy}
                    onChange={(e) => setSortBy(e.target.value)}
                    className="w-full px-4 py-3 border border-blue-200 rounded-xl focus:outline-none focus:ring-2 focus:ring-blue-400 appearance-none bg-white cursor-pointer"
                  >
                    <option value="popularity">Sort by Popularity</option>
                    <option value="price-low">Price: Low to High</option>
                    <option value="price-high">Price: High to Low</option>
                    <option value="rating">Highest Rated</option>
                  </select>
                  <ChevronDown className="absolute right-4 top-1/2 transform -translate-y-1/2 text-gray-400 w-5 h-5 pointer-events-none" />
                </div>

                <button
                  onClick={() => setShowFilters(!showFilters)}
                  className="lg:hidden flex items-center justify-center gap-2 px-6 py-3 bg-gradient-to-r from-blue-500 to-cyan-500 text-white rounded-xl font-semibold hover:from-blue-600 hover:to-cyan-600 transition-all shadow-md"
                >
                  <SlidersHorizontal className="w-5 h-5" />
                  Filters
                </button>
              </div>

              <div className="mt-4 text-sm text-gray-600">
                Showing <span className="font-semibold text-blue-600">{displayedProducts.length}</span> of{' '}
                <span className="font-semibold text-blue-600">{filteredProducts.length}</span> devices
              </div>
            </div>

            {displayedProducts.length > 0 ? (
              <>
                <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-3 gap-8 mb-8">
                  {displayedProducts.map((product) => (
                    <ProductCard key={product.id} product={product} />
                  ))}
                </div>

                {itemsToShow < filteredProducts.length && (
                  <div className="text-center">
                    <button
                      onClick={() => setItemsToShow(prev => prev + 12)}
                      className="px-8 py-3 bg-gradient-to-r from-blue-500 to-cyan-500 text-white rounded-xl font-semibold hover:from-blue-600 hover:to-cyan-600 transition-all duration-300 shadow-lg hover:shadow-xl"
                    >
                      Load More Devices
                    </button>
                  </div>
                )}
              </>
            ) : (
              <div className="bg-white rounded-2xl shadow-lg p-12 text-center border border-blue-100">
                <div className="w-20 h-20 bg-blue-100 rounded-full flex items-center justify-center mx-auto mb-4">
                  <Search className="w-10 h-10 text-blue-400" />
                </div>
                <h3 className="text-xl font-bold text-text mb-2">No devices found</h3>
                <p className="text-gray-600 mb-6">Try adjusting your filters or search query</p>
                <button
                  onClick={() => {
                    setSearchQuery('');
                    setSelectedCategory('all');
                    setPriceRange([0, 40000]);
                    setShowInStockOnly(false);
                  }}
                  className="px-6 py-2 bg-gradient-to-r from-blue-500 to-cyan-500 text-white rounded-xl font-semibold hover:from-blue-600 hover:to-cyan-600 transition-all"
                >
                  Clear Filters
                </button>
              </div>
            )}
          </div>
        </div>

        {/* Why Choose Our Health Devices Section */}
        <div className="mt-16 mb-8">
          <div className="text-center mb-10">
            <h2 className="text-3xl md:text-4xl font-bold text-text mb-3">Why Choose Our Health Devices</h2>
            <p className="text-gray-600 text-lg">Trusted medical equipment for accurate health monitoring</p>
          </div>
          <div className="grid md:grid-cols-2 lg:grid-cols-4 gap-6">
            <div className="bg-gradient-to-br from-blue-50 to-white rounded-2xl p-8 shadow-lg hover:shadow-xl transition-all border border-blue-100 group">
              <div className="w-14 h-14 bg-gradient-to-br from-blue-500 to-cyan-500 rounded-xl flex items-center justify-center mb-4 group-hover:scale-110 transition-transform shadow-md">
                <Gauge className="w-7 h-7 text-white" />
              </div>
              <h3 className="font-bold text-text mb-2 text-lg">Accurate Readings</h3>
              <p className="text-gray-600 text-sm leading-relaxed">
                Medical-grade accuracy for reliable health monitoring and precise measurements.
              </p>
            </div>
            <div className="bg-gradient-to-br from-cyan-50 to-white rounded-2xl p-8 shadow-lg hover:shadow-xl transition-all border border-cyan-100 group">
              <div className="w-14 h-14 bg-gradient-to-br from-cyan-500 to-teal-500 rounded-xl flex items-center justify-center mb-4 group-hover:scale-110 transition-transform shadow-md">
                <Award className="w-7 h-7 text-white" />
              </div>
              <h3 className="font-bold text-text mb-2 text-lg">Trusted Brands</h3>
              <p className="text-gray-600 text-sm leading-relaxed">
                Certified devices from leading healthcare brands like Omron, Dr. Morepen, and BPL.
              </p>
            </div>
            <div className="bg-gradient-to-br from-teal-50 to-white rounded-2xl p-8 shadow-lg hover:shadow-xl transition-all border border-teal-100 group">
              <div className="w-14 h-14 bg-gradient-to-br from-teal-500 to-green-500 rounded-xl flex items-center justify-center mb-4 group-hover:scale-110 transition-transform shadow-md">
                <Heart className="w-7 h-7 text-white" />
              </div>
              <h3 className="font-bold text-text mb-2 text-lg">Easy Home Use</h3>
              <p className="text-gray-600 text-sm leading-relaxed">
                User-friendly devices designed for convenient home health monitoring by anyone.
              </p>
            </div>
            <div className="bg-gradient-to-br from-indigo-50 to-white rounded-2xl p-8 shadow-lg hover:shadow-xl transition-all border border-indigo-100 group">
              <div className="w-14 h-14 bg-gradient-to-br from-indigo-500 to-blue-500 rounded-xl flex items-center justify-center mb-4 group-hover:scale-110 transition-transform shadow-md">
                <ShieldCheck className="w-7 h-7 text-white" />
              </div>
              <h3 className="font-bold text-text mb-2 text-lg">Durable & Reliable</h3>
              <p className="text-gray-600 text-sm leading-relaxed">
                Long-lasting devices with warranty support for peace of mind and reliability.
              </p>
            </div>
          </div>
        </div>

        {/* Health Monitoring Tips Section */}
        <div className="mt-16">
          <div className="text-center mb-10">
            <h2 className="text-3xl md:text-4xl font-bold text-text mb-3">Health Monitoring Tips</h2>
            <p className="text-gray-600 text-lg">Essential guidance for accurate health tracking</p>
          </div>
          <div className="grid md:grid-cols-2 lg:grid-cols-3 gap-6">
            <div className="bg-white rounded-2xl p-8 shadow-lg hover:shadow-xl transition-all border border-gray-100">
              <div className="flex items-center gap-3 mb-4">
                <div className="w-12 h-12 bg-blue-100 rounded-xl flex items-center justify-center">
                  <Activity className="w-6 h-6 text-blue-500" />
                </div>
                <h3 className="font-bold text-text text-lg">BP Monitoring</h3>
              </div>
              <p className="text-gray-600 text-sm leading-relaxed">
                Check blood pressure at the same time daily, rest for 5 minutes before measuring, and keep a log.
              </p>
            </div>
            <div className="bg-white rounded-2xl p-8 shadow-lg hover:shadow-xl transition-all border border-gray-100">
              <div className="flex items-center gap-3 mb-4">
                <div className="w-12 h-12 bg-cyan-100 rounded-xl flex items-center justify-center">
                  <Wind className="w-6 h-6 text-cyan-500" />
                </div>
                <h3 className="font-bold text-text text-lg">Oxygen Monitoring</h3>
              </div>
              <p className="text-gray-600 text-sm leading-relaxed">
                Use pulse oximeter on clean, warm fingers. Normal SpO2 is 95-100%. Consult doctor if below 90%.
              </p>
            </div>
            <div className="bg-white rounded-2xl p-8 shadow-lg hover:shadow-xl transition-all border border-gray-100">
              <div className="flex items-center gap-3 mb-4">
                <div className="w-12 h-12 bg-teal-100 rounded-xl flex items-center justify-center">
                  <Users className="w-6 h-6 text-teal-500" />
                </div>
                <h3 className="font-bold text-text text-lg">Home Healthcare</h3>
              </div>
              <p className="text-gray-600 text-sm leading-relaxed">
                Keep devices clean, calibrate regularly, follow instructions, and maintain records for doctor visits.
              </p>
            </div>
          </div>
        </div>
      </div>
    </main>
  );
}
