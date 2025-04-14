
import React from 'react';
import { Search } from 'lucide-react';

const ServiceFilters = ({ searchQuery, setSearchQuery, category, setCategory, sortBy, setSortBy }) => {
  const categories = [
    { value: '', label: 'All Categories' },
    { value: 'Beauty & Wellness', label: 'Beauty & Wellness' },
    { value: 'Car Rental', label: 'Car Rental' },
    { value: 'Tuition', label: 'Tuition' },
    { value: 'Housekeeping', label: 'Housekeeping' },
    { value: 'Plumbing', label: 'Plumbing' },
    { value: 'Electrician', label: 'Electrician' }
  ];

  const sortOptions = [
    { value: 'name', label: 'Name (A-Z)' },
    { value: 'name-desc', label: 'Name (Z-A)' },
    { value: 'price-asc', label: 'Price (Low to High)' },
    { value: 'price-desc', label: 'Price (High to Low)' },
  ];

  return (
    <div className="bg-white p-4 rounded-lg shadow-sm mb-6">
      <div className="grid grid-cols-1 md:grid-cols-3 gap-4">
        <div className="relative">
          <div className="absolute inset-y-0 left-0 pl-3 flex items-center pointer-events-none">
            <Search className="h-5 w-5 text-gray-400" />
          </div>
          <input
            type="text"
            placeholder="Search services..."
            className="pl-10 form-input"
            value={searchQuery}
            onChange={(e) => setSearchQuery(e.target.value)}
          />
        </div>
        
        <div>
          <select
            value={category}
            onChange={(e) => setCategory(e.target.value)}
            className="form-input"
          >
            {categories.map((option) => (
              <option key={option.value} value={option.value}>
                {option.label}
              </option>
            ))}
          </select>
        </div>
        
        <div>
          <select
            value={sortBy}
            onChange={(e) => setSortBy(e.target.value)}
            className="form-input"
          >
            {sortOptions.map((option) => (
              <option key={option.value} value={option.value}>
                {option.label}
              </option>
            ))}
          </select>
        </div>
      </div>
    </div>
  );
};

export default ServiceFilters;
