"use client"
import { useState } from 'react';
import { motion } from 'framer-motion';
import { ArrowLeft, Maximize2, Bed, Bath, Square } from 'lucide-react';

import Link from 'next/link';
import { properties } from './PropertiesData';
import Image from 'next/image';
import { useParams } from 'next/navigation';

interface Property {
  id: string;
  name: string;
  description: string;
  image: string;
  price: number;
}



// In a real app, you'd fetch data based on the ID
// This is a simplified version for demonstration
const PropertyDetails = () => {
  const [activeImage, setActiveImage] = useState(0);
  const { slug } = useParams(); // Extract the dynamic route parameter
  const id = parseInt(slug?.[0] || ""); // Assuming the slug is an array and `id` is the first value

 

  const property = properties.find((item) => item.id === id) 
   
  const additionalImages = [
    property?.image,
    property?.image,  // Duplicated for demo
    property?.image,  // Duplicated for demo
  ];


  return (
    <motion.div 
      initial={{ opacity: 0 }}
      animate={{ opacity: 1 }}
      className="min-h-screen bg-white"
    >
      {/* Back Button */}
      <div className="sticky top-16 z-10 border-b border-gray-200 bg-white/80 backdrop-blur-md">
        <div className="mx-auto max-w-7xl px-4 py-4 sm:px-6 lg:px-8">
          <Link href="/properties" className="inline-flex items-center space-x-2 text-sm text-gray-600 hover:text-black">
            <ArrowLeft size={20} />
            <span>Back to Properties</span>
          </Link>
        </div>
      </div>

      <div className="mx-auto max-w-7xl px-4 py-8 sm:px-6 lg:px-8">
        {/* Main Image Gallery */}
        <div className="mb-8 grid gap-4 sm:grid-cols-2 lg:grid-cols-3">
          <motion.div 
            initial={{ opacity: 0, y: 20 }}
            animate={{ opacity: 1, y: 0 }}
            className="relative col-span-2 aspect-[4/3] overflow-hidden rounded-lg"
          >
            {property?.image && (
            <Image
              fill
              src={property.image}
              alt={property.title}
              className="h-full w-full object-cover"
            />
          )}
            <button className="absolute right-4 top-4 rounded-full bg-white/80 p-2 backdrop-blur-sm hover:bg-white">
              <Maximize2 className='text-neutral-600' size={20} />
            </button>
          </motion.div>
          
          <div className="hidden lg:grid lg:grid-rows-2 lg:gap-4">
            {additionalImages.slice(1, 3).map((img, idx) => (
              <motion.div
                key={idx}
                initial={{ opacity: 0, y: 20 }}
                animate={{ opacity: 1, y: 0 }}
                className="relative aspect-[4/3] overflow-hidden rounded-lg"
              >
                <img
                  src={img}
                  alt={`${property?.title} - View ${idx + 2}`}
                  className="h-full w-full object-cover"
                  onClick={() => setActiveImage(idx + 1)}
                />
              </motion.div>
            ))}
          </div>
        </div>

        {/* Property Details */}
        <div className="grid gap-8 lg:grid-cols-3">
          <div className="lg:col-span-2">
            <motion.div
              initial={{ opacity: 0, y: 20 }}
              animate={{ opacity: 1, y: 0 }}
              className="space-y-6"
            >
              <div className="border-b border-gray-200 pb-6">
                <h1 className="mb-2 text-3xl text-neutral-900 font-light">{property?.title}</h1>
                <p className="text-lg text-gray-600">{property?.location}</p>
              </div>

              <div className="flex space-x-8 border-b border-gray-200 pb-6">
                <div className="flex items-center space-x-2">
                  <Bed className="text-gray-400" size={24} />
                  <span className='text-gray-400'>{property?.beds} beds</span>
                </div>
                <div className="flex items-center space-x-2">
                  <Bath className="text-gray-400" size={24} />
                  <span className='text-gray-400'>{property?.baths} baths</span>
                </div>
                <div className="flex items-center space-x-2">
                  <Square className="text-gray-400" size={24} />
                  <span className='text-gray-400'>{property?.sqft.toLocaleString()} sqft</span>
                </div>
              </div>

              <div className="space-y-4 border-b border-gray-200 pb-6">
                <h2 className="text-xl text-gray-600 font-light">About this property</h2>
                <p className="text-gray-600">
                  This stunning {property?.type.toLowerCase()} features breathtaking views and luxurious amenities. 
                  The property showcases exceptional architectural design and premium finishes throughout. 
                  Perfect for those seeking the ultimate in luxury living.
                </p>
              </div>
            </motion.div>
          </div>

          {/* Price Card */}
          <motion.div
            initial={{ opacity: 0, y: 20 }}
            animate={{ opacity: 1, y: 0 }}
            className="rounded-lg border border-gray-200 p-6"
          >
            <div className="mb-6 text-center">
              <p className="text-3xl text-neutral-900 font-light">${property?.price}</p>
              <p className="text-sm text-gray-600">Listed Price</p>
            </div>

            <motion.button
              whileHover={{ scale: 1.02 }}
              whileTap={{ scale: 0.98 }}
              className="mb-4 w-full bg-black py-3 text-sm text-white hover:bg-neutral-700"
            >
              Schedule a Viewing
            </motion.button>

            <motion.button
              whileHover={{ scale: 1.02 }}
              whileTap={{ scale: 0.98 }}
              className="w-full border border-black py-3 text-sm text-black hover:bg-gray-50"
            >
              Contact Agent
            </motion.button>
          </motion.div>
        </div>
      </div>
    </motion.div>
  );
};

export default PropertyDetails;