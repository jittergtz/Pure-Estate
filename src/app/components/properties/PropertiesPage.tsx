"use client"
import { useState, useEffect, useRef } from 'react';
import { motion } from 'framer-motion';
import Image from 'next/image';
import { properties } from './PropertiesData';
import { Slider } from '@/components/ui/slider';

const PropertiesPage = () => {
  const [priceRange, setPriceRange] = useState([5000000, 20000000]);
  const [selectedType, setSelectedType] = useState('All');
  const [visibleProperties, setVisibleProperties] = useState(10);
  const loaderRef = useRef(null); // Ref for the loader element

  useEffect(() => {
    const observer = new IntersectionObserver(
      (entries) => {
        if (entries[0].isIntersecting) {
          // Load more properties when the loader is in view
          setVisibleProperties((prev) => prev + 10);
        }
      },
      { threshold: 1.0 } // Trigger when the loader is fully visible
    );

    if (loaderRef.current) {
      observer.observe(loaderRef.current); // Observe the loader element
    }

    // Cleanup observer on unmount
    return () => {
      if (loaderRef.current) {
        observer.unobserve(loaderRef.current);
      }
    };
  }, []);

  return (
    <div className="min-h-screen bg-white">
      {/* Filters Header */}
      <motion.div 
        initial={{ opacity: 0, y: -20 }}
        animate={{ opacity: 1, y: 0 }}
        className="sticky w-full top-16 z-10 border-b border-gray-200 bg-white/80 backdrop-blur-md"
      >
        <div className="mx-auto max-w-7xl px-2 py-2 lg:py-4 lg:px-8">
          <div className="flex flex-wrap items-center justify-between gap-4">
            {/* Property Type Filter */}
            <div className="flex space-x-4 overflow-x-scroll ">
              {['All', 'Villa', 'Penthouse', 'Estate', 'Mansion'].map((type) => (
                <button
                  key={type}
                  onClick={() => setSelectedType(type)}
                  className={`rounded-full px-6 py-2 text-sm transition-colors ${
                    selectedType === type
                      ? 'bg-black text-white'
                      : 'bg-gray-100 text-gray-600 hover:bg-gray-200'
                  }`}
                >
                  {type}
                </button>
              ))}
            </div>

            {/* Price Range Filter */}
            <div className="w-72">
              <label className="text-sm text-gray-600">Price Range</label>
              <div className="flex justify-between text-sm text-gray-600">
                <span>${(priceRange[0] / 1000000).toFixed(1)}M</span>
                <span>${(priceRange[1] / 1000000).toFixed(1)}M</span>
              </div>
            </div>
          </div>
        </div>
      </motion.div>

      {/* Properties Grid */}
      <div className="mx-auto max-w-7xl px-4 py-12 sm:px-6 lg:px-8">
        <motion.div 
          initial={{ opacity: 0 }}
          animate={{ opacity: 1 }}
          className="grid gap-8 sm:grid-cols-2 lg:grid-cols-2"
        >
          {properties.slice(0, visibleProperties).map((property) => (
            <motion.div
              key={property.id}
              initial={{ opacity: 0, y: 20 }}
              whileInView={{ opacity: 1, y: 0 }}
              viewport={{ once: true }}
              whileHover={{ y: -2 }}
              className="group cursor-pointer"
            >
              {/* Property Image */}
              <div className="relative mb-4 aspect-[4/3] overflow-hidden">
                <Image
                  src={property.image}
                  alt={property.title}
                  layout="fill"
                  objectFit="cover"
                  className="transition-transform duration-500 group-hover:scale-110"
                  loading="lazy"
                />
              </div>

              {/* Property Details */}
              <div className="space-y-2">
                <div className="flex items-baseline justify-between">
                  <h3 className="text-lg text-neutral-900 font-light">{property.title}</h3>
                  <p className="text-lg text-neutral-900 font-light">
                    ${property.price}
                  </p>
                </div>
                <p className="text-sm text-gray-600">{property.location}</p>
                <div className="flex items-center space-x-4 text-sm text-gray-500">
                  <span>{property.beds} beds</span>
                  <span>{property.baths} baths</span>
                  <span>{property.sqft.toLocaleString()} sqft</span>
                </div>
                <div className="flex w-full">
                  <motion.a
                    whileHover={{ scale: 1.05 }}
                    whileTap={{ scale: 0.95 }}
                    className="w-full text-center border border-black bg-black py-3 text-sm text-white transition-colors hover:bg-white hover:text-black"
                    href={`/properties/${property.id}`}
                  >
                    View Details
                  </motion.a>
                </div>
              </div>
            </motion.div>
          ))}
        </motion.div>

        {/* Loader for Infinite Scroll */}
        <div ref={loaderRef} className="h-10"></div>
      </div>
    </div>
  );
};

export default PropertiesPage;