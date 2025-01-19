// components/FeaturedProperties.tsx
"use client"
import { motion } from 'motion/react';
import Image from 'next/image';

const properties = [
  {
    id: 1,
    title: "Modern Beachfront Villa",
    location: "Malibu, California",
    price: "$12,500,000",
    image: "https://images.unsplash.com/photo-1512917774080-9991f1c4c750?q=80&w=2370&auto=format&fit=crop",
    features: "6 Beds • 8 Baths • 8,500 Sq Ft"
  },
  {
    id: 2,
    title: "Penthouse with City Views",
    location: "Manhattan, New York",
    price: "$18,900,000",
    image: "https://images.unsplash.com/photo-1600596542815-ffad4c1539a9?q=80&w=2375&auto=format&fit=crop",
    features: "4 Beds • 5 Baths • 5,200 Sq Ft"
  },
  {
    id: 3,
    title: "Contemporary Mountain Estate",
    location: "Aspen, Colorado",
    price: "$5,750,000",
    image: "https://images.unsplash.com/photo-1600585154340-be6161a56a0c?q=80&w=2370&auto=format&fit=crop",
    features: "7 Beds • 9 Baths • 9,800 Sq Ft"
  }
];

const FeaturedProperties = () => {
  const containerVariants = {
    hidden: { opacity: 0 },
    visible: {
      opacity: 1,
      transition: {
        staggerChildren: 0.3
      }
    }
  };

  const itemVariants = {
    hidden: { y: 50, opacity: 0 },
    visible: {
      y: 0,
      opacity: 1,
      transition: {
        duration: 0.8,
        ease: "easeOut"
      }
    }
  };

  const textVariants = {
    hidden: { x: -50, opacity: 0 },
    visible: {
      x: 0,
      opacity: 1,
      transition: {
        duration: 0.6,
        ease: "easeOut"
      }
    }
  };

  return (
    <section className="bg-black py-24">
      <div className="mx-auto max-w-7xl px-4 sm:px-6 lg:px-8">
        {/* Section Header */}
        <motion.div 
          initial="hidden"
          whileInView="visible"
          viewport={{ once: true }}
          variants={textVariants}
          className="mb-16 max-w-3xl"
        >
          <h2 className="mb-6 text-4xl font-light text-white sm:text-5xl">
            Curated Collection of
            <span className="block font-serif italic">Exceptional Properties</span>
          </h2>
          <p className="text-lg text-gray-400">
            Experience unparalleled luxury in the world's most sought-after locations. 
            Each property in our portfolio is handpicked for its unique character and 
            exceptional quality.
          </p>
        </motion.div>

        {/* Properties Grid */}
        <motion.div 
          variants={containerVariants}
          initial="hidden"
          whileInView="visible"
          viewport={{ once: true }}
          className="grid gap-8 md:grid-cols-2 lg:grid-cols-3"
        >
          {properties.map((property) => (
            <motion.div
              key={property.id}
              variants={itemVariants}
              className="group cursor-pointer"
            >
              <div className="relative mb-4 h-[400px] overflow-hidden">
                <Image
                  src={property.image}
                  alt={property.title}
                  layout="fill"
                  objectFit="cover"
                  className="transition-transform duration-700 group-hover:scale-110"
                />
                <div className="absolute inset-0 bg-gradient-to-t from-black/60 to-transparent" />
                <div className="absolute bottom-0 p-6">
                  <p className="mb-2 text-xl font-light text-white">{property.title}</p>
                  <p className="text-gray-300">{property.location}</p>
                </div>
              </div>
              <div className="space-y-2">
                <p className="text-2xl font-light text-white">{property.price}</p>
                <p className="text-sm text-gray-400">{property.features}</p>
              </div>
              <motion.button 
                whileHover={{ scale: 1.05 }}
                whileTap={{ scale: 0.95 }}
                className="mt-4 border border-white px-6 py-2 text-sm text-white transition-colors hover:bg-white hover:text-black"
              >
                View Details
              </motion.button>
            </motion.div>
          ))}
        </motion.div>

        {/* Call to Action */}
        <motion.div 
          initial="hidden"
          whileInView="visible"
          viewport={{ once: true }}
          variants={textVariants}
          className="mt-16 text-center"
        >
          <p className="mb-8 text-lg text-gray-400">
            Our portfolio extends beyond these featured properties. 
            Discover our complete collection of exceptional homes.
          </p>
          <motion.button 
            whileHover={{ scale: 1.05 }}
            whileTap={{ scale: 0.95 }}
            className="border border-white bg-white px-8 py-3 text-sm font-medium text-black transition-colors hover:bg-transparent hover:text-white"
          >
            View All Properties
          </motion.button>
        </motion.div>
      </div>
    </section>
  );
};

export default FeaturedProperties;