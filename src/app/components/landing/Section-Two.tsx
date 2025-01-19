// components/LifestyleSection.tsx
"use client"
import { motion } from 'motion/react';
import Image from 'next/image';
import { useState } from 'react';

const lifestyleFeatures = [
  {
    id: 1,
    title: "Concierge Services",
    description: "24/7 white-glove service attending to your every need, from travel arrangements to private chef bookings.",
    image: "https://images.unsplash.com/photo-1566073771259-6a8506099945?q=80&w=2370&auto=format&fit=crop",
    icon: "🎭"
  },
  {
    id: 2,
    title: "Wellness Facilities",
    description: "State-of-the-art fitness centers, spa facilities, and meditation gardens for your physical and mental wellbeing.",
    image: "https://images.unsplash.com/photo-1545579133-99bb5ab189bd?q=80&w=2370&auto=format&fit=crop",
    icon: "💆"
  },
  {
    id: 3,
    title: "Private Events",
    description: "Exclusive access to curated social events, wine tastings, and cultural experiences within our community.",
    image: "https://images.unsplash.com/photo-1519671482749-fd09be7ccebf?q=80&w=2370&auto=format&fit=crop",
    icon: "🥂"
  }
];

const LifestyleSection = () => {
  const [activeFeature, setActiveFeature] = useState(lifestyleFeatures[0]);

  const containerVariants = {
    hidden: { opacity: 0 },
    visible: {
      opacity: 1,
      transition: { staggerChildren: 0.3 }
    }
  };

  const itemVariants = {
    hidden: { opacity: 0, x: -30 },
    visible: {
      opacity: 1,
      x: 0,
      transition: { duration: 0.8 }
    }
  };

  return (
    <section className="bg-white py-24">
      <div className="mx-auto max-w-7xl px-4 sm:px-6 lg:px-8">
        <motion.div
          initial="hidden"
          whileInView="visible"
          viewport={{ once: true }}
          variants={containerVariants}
          className="mb-16 text-center"
        >
          <motion.h2 
            variants={itemVariants}
            className="mb-6 text-4xl font-light text-black sm:text-5xl"
          >
            Experience Unparalleled
            <span className="block font-serif italic">Luxury Living</span>
          </motion.h2>
          <motion.p 
            variants={itemVariants}
            className="mx-auto max-w-2xl text-lg text-gray-600"
          >
            More than just a home, it's a lifestyle curated for those who appreciate 
            the finest things in life. Discover a world of exclusive privileges and 
            exceptional experiences.
          </motion.p>
        </motion.div>

        <div className="grid gap-12 lg:grid-cols-2">
          {/* Feature Navigation */}
          <motion.div 
            initial="hidden"
            whileInView="visible"
            viewport={{ once: true }}
            variants={containerVariants}
            className="space-y-8"
          >
            {lifestyleFeatures.map((feature) => (
              <motion.div
                key={feature.id}
                variants={itemVariants}
                className={`cursor-pointer border-l-4 px-6 py-4 transition-all duration-300 ${
                  activeFeature.id === feature.id 
                    ? 'border-black bg-gray-50' 
                    : 'border-transparent hover:border-gray-200'
                }`}
                onClick={() => setActiveFeature(feature)}
              >
                <div className="mb-2 text-2xl">{feature.icon}</div>
                <h3 className="mb-2 text-xl font-light">{feature.title}</h3>
                <p className="text-gray-600">{feature.description}</p>
              </motion.div>
            ))}
          </motion.div>

          {/* Feature Image */}
          <motion.div 
            className="relative h-[600px] overflow-hidden"
            initial={{ opacity: 0, scale: 0.95 }}
            whileInView={{ opacity: 1, scale: 1 }}
            viewport={{ once: true }}
            transition={{ duration: 0.8 }}
          >
            <motion.div
              key={activeFeature.id}
              initial={{ opacity: 0 }}
              animate={{ opacity: 1 }}
              transition={{ duration: 0.5 }}
              className="relative h-full"
            >
              <Image
                src={activeFeature.image}
                alt={activeFeature.title}
                layout="fill"
                objectFit="cover"
                className="rounded-lg"
              />
              <div className="absolute inset-0 bg-gradient-to-t from-black/30 to-transparent rounded-lg" />
            </motion.div>
          </motion.div>
        </div>

        {/* Call to Action */}
        <motion.div 
          initial={{ opacity: 0, y: 30 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true }}
          transition={{ duration: 0.8 }}
          className="mt-16 text-center"
        >
          <p className="mb-8 text-lg text-gray-600">
            Ready to elevate your lifestyle? Schedule a private tour of our 
            exclusive properties and experience luxury living firsthand.
          </p>
          <motion.button 
            whileHover={{ scale: 1.05 }}
            whileTap={{ scale: 0.95 }}
            className="border border-black bg-black px-8 py-3 text-sm font-medium text-white transition-colors hover:bg-white hover:text-black"
          >
            Schedule Private Tour
          </motion.button>
        </motion.div>
      </div>
    </section>
  );
};

export default LifestyleSection;