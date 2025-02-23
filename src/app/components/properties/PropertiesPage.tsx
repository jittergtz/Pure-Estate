"use client"
import { useState, useEffect, useRef } from 'react';
import { motion } from 'framer-motion';
import Image from 'next/image';
import { properties } from './PropertiesData';
import { Slider } from '@/components/ui/slider'; // Importing Shadcn Slider

const PropertiesPage = () => {
  // State for price range filter, initially set from 5M to 20M
  const [priceRange, setPriceRange] = useState([5000000, 80000000]);
  // State for selected property type filter, default is 'All'
  const [selectedType, setSelectedType] = useState('All');
  // State to manage the number of properties visible for infinite scroll, initially 10
  const [visibleProperties, setVisibleProperties] = useState(10);
  // Ref for the loader element at the bottom of the property list, used for infinite scroll
  const loaderRef = useRef(null);
  // State to hold the filtered properties that will be displayed
  const [filteredProperties, setFilteredProperties] = useState(properties);

  // useEffect hook to handle Intersection Observer for infinite scrolling
  useEffect(() => {
    const observer = new IntersectionObserver(
      (entries) => {
        // If the loader element is intersecting with the viewport
        if (entries[0].isIntersecting) {
          // Load more properties by increasing the visibleProperties count
          setVisibleProperties((prev) => prev + 10);
        }
      },
      { threshold: 1.0 } // Trigger when the entire loader is visible
    );

    // Observe the loader element if it exists
    if (loaderRef.current) {
      observer.observe(loaderRef.current);
    }

    // Cleanup function to unobserve the loader when component unmounts
    return () => {
      if (loaderRef.current) {
        observer.unobserve(loaderRef.current);
      }
    };
  }, []); // Empty dependency array ensures this effect runs only on mount and unmount

  // useEffect to handle filtering properties based on selected type and price range
  useEffect(() => {
    // Filter properties based on selectedType
    const typeFiltered = selectedType === 'All'
      ? properties // If 'All' is selected, show all properties
      : properties.filter(property => property.type === selectedType); // Otherwise, filter by selected type

    // Filter by price range
    const priceFiltered = typeFiltered.filter(property =>
      parseFloat(property.price.replace(/,/g, '')) >= priceRange[0] && // Remove commas from price string and parse to Float
      parseFloat(property.price.replace(/,/g, '')) <= priceRange[1]
    );

    setFilteredProperties(priceFiltered); // Update filteredProperties state with both type and price filters

  }, [selectedType, priceRange]); // Re-run filter when selectedType or priceRange changes


  // Function to handle price range slider change
  const handlePriceChange = (value: number[]) => {
    setPriceRange(value); // Update priceRange state when slider value changes
  };


  // Define min and max price for the slider based on your data
  const minPrice = 5000000; // Minimum price for the slider
  const maxPrice = 80000000; // Maximum price for the slider


  return (
    <div className="min-h-screen bg-white">
      {/* Filters Header: Sticky at the top, with blur effect */}
      <motion.div
        initial={{ opacity: 0, y: -20 }}
        animate={{ opacity: 1, y: 0 }}
        className="sticky w-full top-16 z-10 border-b border-gray-200 bg-white/80 backdrop-blur-md"
      >
        <div className="mx-auto max-w-7xl px-2 py-2 lg:py-4 lg:px-8">
          <div className="flex flex-wrap items-center justify-between gap-4">
            {/* Property Type Filter: Buttons to select property type */}
            <div className="flex space-x-4 overflow-x-scroll scrollerOff">
              {/* Map over property types and create a button for each */}
              {['All', 'Villa', 'Penthouse', 'Estate', 'Mansion'].map((type) => (
                <button
                  key={type}
                  onClick={() => setSelectedType(type)} // Update selectedType state on click
                  className={`rounded-full px-6 py-2 text-sm transition-colors ${
                    selectedType === type
                      ? 'bg-black text-white' // Style for selected type button
                      : 'bg-gray-100 text-gray-600 hover:bg-gray-200' // Style for unselected type buttons
                  }`}
                >
                  {type}
                </button>
              ))}
            </div>

            {/* Price Range Filter: Slider to select price range */}
            <div className="w-72">
             
              {/* Display current price range values */}
              <div className="flex justify-between text-sm text-gray-600 mb-2">
               <span>Price start's at: ${(priceRange[0] / 1000000).toFixed(1)}M</span> {/* Format min price to Million */}
                <span>${(priceRange[1] / 1000000).toFixed(1)}M</span> {/* Format max price to Million */}
              </div>
              {/* Shadcn Slider Component */}
              <Slider
                min={minPrice}        // Minimum price value for slider
                max={maxPrice}        // Maximum price value for slider
                step={200000}       // Slider step value (adjust as needed)
                defaultValue={priceRange} // Initial value of the slider from state
                onValueChange={handlePriceChange} // Function to update priceRange state on slider change
                value={priceRange} // Current value of the slider from state
              />
            </div>
          </div>
        </div>
      </motion.div>

      {/* Properties Grid: Displays the list of properties */}
      <div className="mx-auto max-w-7xl px-4 py-12 sm:px-6 lg:px-8">
        <motion.div
          initial={{ opacity: 0 }}
          animate={{ opacity: 1 }}
          className="grid gap-8 sm:grid-cols-2 lg:grid-cols-2" // Grid layout for properties, 2 columns on small and large screens
        >
          {/* Map over the filtered properties array, sliced for infinite scroll */}
          {filteredProperties.slice(0, visibleProperties).map((property) => (
            <motion.div
              key={property.id}
              initial={{ opacity: 0, y: 20 }}
              whileInView={{ opacity: 1, y: 0 }}
              viewport={{ once: true }} // Animation only plays once when in view
              whileHover={{ y: -2 }} // Slight lift effect on hover
              className="group cursor-pointer" // Group and cursor styles for hover effect
            >
              {/* Property Image: Container for the property image */}
              <div className="relative mb-4 aspect-[4/3] overflow-hidden">
                <Image
                  src={property.image} // Image source from property data
                  alt={property.title} // Alt text for accessibility
                  layout="fill" // Image fills the container
                  objectFit="cover" // Cover container, cropping if necessary
                  className="transition-transform duration-500 group-hover:scale-110" // Hover scale animation
                  loading="lazy" // Lazy loading for performance
                />
              </div>

              {/* Property Details: Container for text details below the image */}
              <div className="space-y-2">
                {/* Title and Price: Row with title and price */}
                <div className="flex items-baseline justify-between">
                  <h3 className="text-lg text-neutral-900 font-light">{property.title}</h3> {/* Property title */}
                  <p className="text-lg text-neutral-900 font-light">
                    ${property.price} {/* Property price */}
                  </p>
                </div>
                {/* Location: Property location */}
                <p className="text-sm text-gray-600">{property.location}</p>
                {/* Details: Beds, baths, sqft */}
                <div className="flex items-center space-x-4 text-sm text-gray-500">
                  <span>{property.beds} beds</span>
                  <span>{property.baths} baths</span>
                  <span>{property.sqft.toLocaleString()} sqft</span> {/* Format sqft with commas */}
                </div>
                {/* View Details Button: Link to property detail page */}
                <div className="flex w-full">
                  <motion.a
                    whileHover={{ scale: 1.05 }}
                    whileTap={{ scale: 0.95 }}
                    className="w-full text-center border border-black bg-black py-3 text-sm text-white transition-colors hover:bg-white hover:text-black"
                    href={`/properties/${property.id}`} // Link to dynamic property detail page
                  >
                    View Details
                  </motion.a>
                </div>
              </div>
            </motion.div>
          ))}
        </motion.div>

        {/* Loader for Infinite Scroll: Element to trigger loading more properties */}
        <div ref={loaderRef} className="h-10"></div>
      </div>
    </div>
  );
};

export default PropertiesPage;