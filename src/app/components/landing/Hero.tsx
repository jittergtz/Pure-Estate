"use client"
// components/Hero.tsx

import { AnimatePresence, motion } from 'motion/react';
import Head from 'next/head';
import Image from 'next/image';
import Link from 'next/link';
import { useEffect, useState } from 'react';

const images = [
    {
      id: 1,
      url: "https://images.unsplash.com/photo-1513584684374-8bab748fbf90?q=80&w=2365&auto=format&fit=crop",
      alt: "Luxury beachfront villa"
    },
    {
      id: 2,
      url: "https://images.unsplash.com/photo-1600596542815-ffad4c1539a9?q=80&w=2375&auto=format&fit=crop",
      alt: "Modern penthouse interior"
    },
    {
      id: 3,
      url: "https://images.unsplash.com/photo-1600585154340-be6161a56a0c?q=80&w=2370&auto=format&fit=crop",
      alt: "Contemporary mountain estate"
    }
  ];
  
  const Hero = () => {
    const [currentImageIndex, setCurrentImageIndex] = useState(0);
    const [isTransitioning, setIsTransitioning] = useState(false);
  
    useEffect(() => {
      // Set up the interval for image rotation
      const intervalId = setInterval(() => {
        setIsTransitioning(true);
        setCurrentImageIndex((prevIndex) => (prevIndex + 1) % images.length);
      }, 10000); // Change image every 10 seconds
  
      // Cleanup interval on component unmount
      return () => clearInterval(intervalId);
    }, []);
  
    // Handle transition end
    useEffect(() => {
      if (isTransitioning) {
        const timeoutId = setTimeout(() => {
          setIsTransitioning(false);
        }, 1000); // Match this with animation duration
  
        return () => clearTimeout(timeoutId);
      }
    }, [isTransitioning]);
  
    const fadeIn = {
      initial: { opacity: 0, y: 20 },
      animate: { opacity: 1, y: 0 },
      transition: { duration: 0.8, ease: "easeOut" }
    };
  
    const slideIn = {
      initial: { x: -100, opacity: 0 },
      animate: { x: 0, opacity: 1 },
      transition: { duration: 1, ease: "easeOut", delay: 0.2 }
    };
  
    return (
      <section className="relative h-screen w-full overflow-hidden bg-black">
        {/* Image Carousel */}
        <AnimatePresence mode="wait">
          <motion.div
            key={currentImageIndex}
            initial={{ opacity: 0.3 }}
            animate={{ opacity: 1 }}
            exit={{ opacity: 0 }}
            transition={{ duration: 0.4 }}
            className="absolute inset-0"
          >
            <Image
              src={images[currentImageIndex].url}
              alt={images[currentImageIndex].alt}
              layout="fill"
              objectFit="cover"
              priority={true}
              className="opacity-70 transition-transform duration-[10000ms] ease-linear"
              style={{
                transform: isTransitioning ? 'scale(1.1)' : 'scale(1)'
              }}
            />
          </motion.div>
        </AnimatePresence>
  
        {/* Image Navigation Dots */}
        <div className="absolute bottom-8 left-1/2 z-10 flex -translate-x-1/2 space-x-2">
          {images.map((_, index) => (
            <button
              key={index}
              onClick={() => {
                setIsTransitioning(true);
                setCurrentImageIndex(index);
              }}
              className={`h-2 w-2 rounded-full transition-all ${
                currentImageIndex === index 
                  ? 'bg-white w-6' 
                  : 'bg-white/50 hover:bg-white/80'
              }`}
              aria-label={`Go to slide ${index + 1}`}
            />
          ))}
        </div>
  
        {/* Content Overlay */}
        <div className="relative h-full w-full bg-gradient-to-b from-black/40 to-black/70">
          <div className="mx-auto max-w-7xl px-4 py-32 sm:px-6 lg:px-8">
            <div className="flex h-full flex-col justify-center">
              <motion.div
                {...fadeIn}
                className="max-w-3xl"
              >
                <motion.h1 
                  className="mb-6 text-5xl font-light tracking-tight text-white sm:text-6xl lg:text-7xl"
                  {...slideIn}
                >
                  Extraordinary Living
                  <span className="block font-serif italic">Defined</span>
                </motion.h1>
                
                <motion.p 
                  className="mb-8 text-lg text-gray-300 sm:text-xl"
                  {...fadeIn}
                >
                  Discover exceptional properties that redefine luxury living,
                  where every detail tells a story of sophistication and elegance.
                </motion.p>
  
                <motion.div 
                  className="flex space-x-4"
                  {...fadeIn}
                >
                  <Link href={"/properties"} className="border border-white bg-white px-8 py-3 text-sm font-medium text-black transition-colors hover:bg-transparent hover:text-white">
                    View Properties
                  </Link>
                  <Link href={"/contact"}  className="border border-white px-8 py-3 text-sm font-medium text-white transition-colors hover:bg-white hover:text-black">
                    Contact Us
                    </Link>
                </motion.div>
              </motion.div>
            </div>
          </div>
        </div>
      </section>
    );
  };
  
  export default Hero;