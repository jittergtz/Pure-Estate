// pages/about.tsx
"use client";

import { motion } from 'framer-motion';
import Image from 'next/image';

const AboutPage = () => {
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
          <h1 className="text-2xl font-semibold tracking-tight">About Us</h1> {/* Page title */}
        </div>
      </motion.header>

      <motion.main
        initial={{ opacity: 0, y: 20 }}
        animate={{ opacity: 1, y: 0, transition: { duration: 0.8, delay: 0.4 } }}
        className="container mx-auto px-6 py-12 lg:px-8" // Main content container
      >
        {/* Introduction Section */}
        <motion.section className="mb-16">
          <motion.div className="lg:grid lg:grid-cols-2 lg:gap-16 items-center">
            <div className="mb-8 lg:mb-0">
              <motion.h2 className="text-2xl font-semibold mb-4">Welcome to Pure Estate</motion.h2> {/* Section Heading */}
              <motion.p className="text-gray-700 mb-6">
                At Luxury Estates, we are passionate about connecting people with exceptional homes.
                We specialize in luxury real estate, offering a curated selection of villas, penthouses,
                estates, and mansions in the most desirable locations around the world.
              </motion.p>
              <motion.p className="text-gray-700">
                Our mission is to provide an unparalleled experience for our clients, whether they are
                searching for their dream home, selling a prestigious property, or seeking expert
                investment advice. We combine deep market knowledge with a commitment to personalized service.
              </motion.p>
            </div>
            <div>
              {/* Example Image - Replace with your actual "About Us" image */}
              <motion.div className="relative aspect-w-16 aspect-h-9 overflow-hidden rounded-lg shadow-md">
                <Image
                  src="https://images.unsplash.com/photo-1568605114967-8130f3a36994?q=80&w=2670&auto=format&fit=crop" // Replace with your image URL
                  alt="Luxury Estates Office"
                  layout="fill"
                  objectFit="cover"
                  loading="lazy"
                  className="motion-safe:transition-transform motion-safe:duration-500 hover:scale-105"
                />
              </motion.div>
            </div>
          </motion.div>
        </motion.section>

        {/* Our Team Section */}
        <motion.section className="mb-16">
          <motion.h2 className="text-xl font-semibold mb-6">Our Expert Team</motion.h2> {/* Section Heading */}
          <motion.p className="text-gray-700 mb-8">
            Meet our dedicated team of experienced real estate professionals. We bring together diverse
            expertise in luxury markets, property management, and client service to ensure exceptional results.
          </motion.p>
          <motion.div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-8">
            {/* Team Member 1 */}
            <motion.div className="flex flex-col items-center text-center">
              <div className="relative w-24 h-24 rounded-full overflow-hidden mb-4 shadow-md">
                <Image
                  src="https://images.unsplash.com/photo-1560250097-0b93528c311a?q=80&w=1974&auto=format&fit=crop" // Replace with team member image
                  alt="Team Member 1"
                  layout="fill"
                  objectFit="cover"
                  loading="lazy"
                />
              </div>
              <motion.h3 className="text-lg font-medium">Eleanor Wright</motion.h3> {/* Team Member Name */}
              <motion.p className="text-sm text-gray-500">Lead Agent</motion.p> {/* Team Member Title */}
            </motion.div>
            {/* Team Member 2 */}
            <motion.div className="flex flex-col items-center text-center">
              <div className="relative w-24 h-24 rounded-full overflow-hidden mb-4 shadow-md">
                <Image
                  src="https://images.unsplash.com/photo-1580489944761-15a19d674b80?q=80&w=1961&auto=format&fit=crop" // Replace with team member image
                  alt="Team Member 2"
                  layout="fill"
                  objectFit="cover"
                  loading="lazy"
                />
              </div>
              <motion.h3 className="text-lg font-medium">Daniel Carter</motion.h3> {/* Team Member Name */}
              <motion.p className="text-sm text-gray-500">Senior Broker</motion.p> {/* Team Member Title */}
            </motion.div>
            {/* Team Member 3 */}
            <motion.div className="flex flex-col items-center text-center">
              <div className="relative w-24 h-24 rounded-full overflow-hidden mb-4 shadow-md">
                <Image
                  src="https://images.unsplash.com/photo-1438761681033-6461ffad8d80?q=80&w=2070&auto=format&fit=crop" // Replace with team member image
                  alt="Team Member 3"
                  layout="fill"
                  objectFit="cover"
                  loading="lazy"
                />
              </div>
              <motion.h3 className="text-lg font-medium">Sarah Johnson</motion.h3> {/* Team Member Name */}
              <motion.p className="text-sm text-gray-500">Marketing Director</motion.p> {/* Team Member Title */}
            </motion.div>
          </motion.div>
        </motion.section>

        {/* Our Values Section */}
        <motion.section className="mb-16">
          <motion.h2 className="text-xl font-semibold mb-6">Our Core Values</motion.h2> {/* Section Heading */}
          <motion.div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-8">
            {/* Value 1 */}
            <motion.div className="p-6 bg-gray-50 rounded-md shadow-sm">
              <motion.h3 className="text-lg font-medium mb-2">Excellence</motion.h3> {/* Value Name */}
              <motion.p className="text-gray-700">
                We strive for the highest standards in everything we do, from property selection to client service.
              </motion.p>
            </motion.div>
            {/* Value 2 */}
            <motion.div className="p-6 bg-gray-50 rounded-md shadow-sm">
              <motion.h3 className="text-lg font-medium mb-2">Integrity</motion.h3> {/* Value Name */}
              <motion.p className="text-gray-700">
                We operate with honesty, transparency, and ethical practices in all our interactions.
              </motion.p>
            </motion.div>
            {/* Value 3 */}
            <motion.div className="p-6 bg-gray-50 rounded-md shadow-sm">
              <motion.h3 className="text-lg font-medium mb-2">Client-Centric</motion.h3> {/* Value Name */}
              <motion.p className="text-gray-700">
                We prioritize our clients' needs and goals, providing personalized solutions and dedicated support.
              </motion.p>
            </motion.div>
          </motion.div>
        </motion.section>

        {/* Call to Action Section */}
        <motion.section className="text-center">
          <motion.h2 className="text-xl font-semibold mb-4">Ready to Find Your Luxury Home?</motion.h2> {/* Section Heading */}
          <motion.p className="text-gray-700 mb-8">
            Contact us today to begin your journey in luxury real estate. Our team is ready to assist you
            with expert guidance and personalized service.
          </motion.p>
          <motion.a
            href="/contact"
            className="inline-flex items-center rounded-md border border-black bg-black px-8 py-3 text-sm font-medium text-white shadow-sm transition-colors hover:bg-white hover:text-black"
          >
            Contact Us Now
          </motion.a>
        </motion.section>
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

export default AboutPage;