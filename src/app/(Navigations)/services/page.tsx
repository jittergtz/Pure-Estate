"use client";

import { motion } from 'framer-motion';

const ServicePage = () => {
  return (
    <motion.div
      initial={{ opacity: 0 }}
      animate={{ opacity: 1 }}
      exit={{ opacity: 0 }}
      className="bg-white text-black min-h-screen" // Base styles: white background, black text, full screen height
    >
      <motion.header
        initial={{ y: -20, opacity: 0 }}
        animate={{ y: 0, opacity: 1, transition: { duration: 0.8, delay: 0.2 } }}
        className="sticky top-0 z-10 bg-white/90 backdrop-blur-md border-b border-gray-200 py-6" // Sticky header with blur and border
      >
        <div className="container mx-auto px-6 lg:px-8">
          <h1 className="text-2xl font-semibold tracking-tight">Our Services</h1> {/* Page title */}
        </div>
      </motion.header>

      <motion.main
        initial={{ opacity: 0, y: 20 }}
        animate={{ opacity: 1, y: 0, transition: { duration: 0.8, delay: 0.4 } }}
        className="container mx-auto px-6 py-12 lg:px-8" // Main content container
      >
        <section className="mb-10">
          <motion.h2 className="text-xl font-semibold mb-4">Luxury Property Expertise</motion.h2> {/* Section Heading */}
          <motion.p className="text-gray-700">
            We specialize in connecting discerning clients with exceptional luxury properties.
            Our services are tailored to meet the unique needs of buyers, sellers, and investors
            in the high-end real estate market.
          </motion.p>
        </section>

        <section className="mb-10">
          <motion.h2 className="text-xl font-semibold mb-4">For Buyers</motion.h2> {/* Section Heading */}
          <motion.ul className="list-disc list-inside text-gray-700 space-y-2">
            <li>Personalized Property Search & Selection</li>
            <li>Exclusive Access to Off-Market Listings</li>
            <li>Expert Negotiation & Acquisition Support</li>
            <li>Seamless Transaction Management</li>
          </motion.ul>
        </section>

        <section className="mb-10">
          <motion.h2 className="text-xl font-semibold mb-4">For Sellers</motion.h2> {/* Section Heading */}
          <motion.ul className="list-disc list-inside text-gray-700 space-y-2">
            <li>Strategic Property Marketing & Global Reach</li>
            <li>Professional Photography & Videography</li>
            <li>Discreet and Confidential Sales</li>
            <li>Maximizing Property Value & Returns</li>
          </motion.ul>
        </section>

        <section>
          <motion.h2 className="text-xl font-semibold mb-4">Additional Services</motion.h2> {/* Section Heading */}
          <motion.ul className="list-disc list-inside text-gray-700 space-y-2">
            <li>Property Valuation & Market Analysis</li>
            <li>Relocation Assistance</li>
            <li>Investment Consulting</li>
            <li>Property Management (Coming Soon)</li>
          </motion.ul>
        </section>
      </motion.main>

      <motion.footer
        initial={{ opacity: 0, y: 20 }}
        animate={{ opacity: 1, y: 0, transition: { duration: 0.8, delay: 0.6 } }}
        className="border-t border-gray-200 py-10 mt-20" // Footer with top border
      >
        <div className="container mx-auto px-6 lg:px-8 text-center text-gray-500">
          <p>&copy; {new Date().getFullYear()} Luxury Estates. All rights reserved.</p> {/* Footer copyright text */}
        </div>
      </motion.footer>
    </motion.div>
  );
};

export default ServicePage;