// pages/contact.tsx
"use client";

import { motion } from 'framer-motion';
import Image from 'next/image';
import { useState } from 'react';

const ContactPage = () => {
  // State for form inputs
  const [name, setName] = useState('');
  const [email, setEmail] = useState('');
  const [message, setMessage] = useState('');
  const [formStatus, setFormStatus] = useState< 'idle' | 'loading' | 'success' | 'error' >('idle'); // Form submission status

  const handleSubmit = async (e: React.FormEvent) => {
    e.preventDefault();
    setFormStatus('loading'); // Set form status to loading on submit

    // Simulate form submission delay (replace with actual API call later)
    setTimeout(() => {
      if (Math.random() > 0.5) { // Simulate success/error randomly for now
        setFormStatus('success');
        setName('');
        setEmail('');
        setMessage('');
      } else {
        setFormStatus('error');
      }
    }, 1500); // 1.5 seconds delay to simulate submission
  };

  return (
    <motion.div
      initial={{ opacity: 0 }}
      animate={{ opacity: 1 }}
      exit={{ opacity: 0 }}
      className="bg-white pt-20  text-black min-h-screen" // Base styles: white background, black text, full screen height
    >
   

      <motion.main
        initial={{ opacity: 0, y: 20 }}
        animate={{ opacity: 1, y: 0, transition: { duration: 0.8, delay: 0.4 } }}
        className="container  mx-auto  h-full   flex flex-col lg:flex-row gap-10" // Main content container, flex layout for form and info
      >
        {/* Contact Form Section */}
        <motion.section className="lg:w-1/2 px-2 h-full">
          <motion.h2 className="text-xl  mb-6">Send us a Message</motion.h2> {/* Form section heading */}
          <form onSubmit={handleSubmit} className="space-y-4">
            {/* Name Input */}
            <div>
              <label htmlFor="name" className="block text-sm font-medium text-gray-700 mb-1">
                Your Name
              </label>
              <input
                type="text"
                id="name"
                placeholder="Marc"
                value={name}
                onChange={(e) => setName(e.target.value)}
                className="mt-1 block w-full py-2 px-2 border outline-black border-gray-600  shadow-sm focus:border-black focus:ring-black sm:text-sm"
                required
              />
            </div>
            {/* Email Input */}
            <div>
              <label htmlFor="email" className="block text-sm font-medium text-gray-700 mb-1">
                Your Email
              </label>
              <input
                type="email"
                id="email"
                value={email}
                placeholder='Marc@storefront.com'
                onChange={(e) => setEmail(e.target.value)}
                className="mt-1 block w-full py-2 px-2 border outline-black border-gray-600 shadow-sm focus:border-black focus:ring-black sm:text-sm"
                required
              />
            </div>
            {/* Message Textarea */}
            <div>
              <label htmlFor="message" className="block text-sm font-medium text-gray-700 mb-1">
                Message
              </label>
              <textarea
                id="message"
                value={message}
                onChange={(e) => setMessage(e.target.value)}
                rows={5}
                className="mt-1 h-64 block w-full outline-black border px-2 border-gray-600 shadow-sm focus:border-black focus:ring-black sm:text-sm"
                required
              />
            </div>
            {/* Submit Button */}
            <motion.div className="flex justify-start mt-6">
              <motion.button
                whileHover={{ scale: 1.05 }}
                whileTap={{ scale: 0.95 }}
                type="submit"
                className={` w-full items-center  border border-black bg-black px-8 py-3 text-sm font-medium text-white shadow-sm transition-colors hover:bg-white hover:text-black focus:outline-none focus:ring-2 focus:ring-black focus:ring-offset-2 disabled:opacity-50 ${formStatus === 'loading' ? 'cursor-wait' : ''}`}
                disabled={formStatus === 'loading'}
              >
                {formStatus === 'loading' ? (
                  <>
                    <svg className="animate-spin -ml-1 mr-3 h-5 w-5 text-white" xmlns="http://www.w3.org/2000/svg" fill="none" viewBox="0 0 24 24">
                      <circle className="opacity-25" cx="12" cy="12" r="10" stroke="currentColor" strokeWidth="4"></circle>
                      <path className="opacity-75" fill="currentColor" d="M4 12a8 8 0 018-8V0C5.373 0 0 5.373 0 12h4zm2 5.291A7.962 7.962 0 014 12H0c0 3.042 1.135 5.824 3 7.938l3-2.647z"></path>
                    </svg>
                    Sending...
                  </>
                ) : formStatus === 'success' ? 'Sent Successfully!' : 'Send Message'}
              </motion.button>
              {formStatus === 'error' && (
                <p className="ml-4 text-sm text-red-500 self-center">Error sending message. Please try again.</p>
              )}
            </motion.div>
          </form>
        </motion.section>

        {/* Contact Information Section */}
        <motion.section className="lg:w-1/2 h-[600px] overflow-hidden   relative bg-black  px-6 py-12 lg:px-8 ">
        <Image
        src={"/contactSection.jpg"}
        alt='cover'
        fill
        className='object-cover pointer-events-none opacity-60'
        />
        <div className='absolute  w-full'>
          <motion.h2 className="text-xl lg:text-3xl text-neutral-50  mb-6">Our Contact Information</motion.h2> {/* Contact info section heading */}
          <div className="space-y-4 text-neutral-50">
            <div>
              <h3 className="font-medium lg:text-xl text-gray-300">Address</h3>
              <p>123 Luxury Lane</p>
              <p>Beverly Hills, CA 90210</p>
              <p>USA</p>
            </div>
            <div>
              <h3 className="font-medium lg:text-xl text-gray-300">Phone</h3>
              <p>+1 (555) 123-4567</p>
            </div>
            <div>
              <h3 className="font-medium lg:text-xl text-gray-300">Email</h3>
              <p>info@luxuryestates.com</p>
            </div>
            <div>
              <h3 className="font-medium lg:text-xl text-gray-300">Opening Hours</h3>
              <p>Monday - Friday: 9am - 6pm</p>
              <p>Saturday: 10am - 4pm</p>
              <p>Sunday: Closed</p>
            </div>
          </div>
          </div>
        </motion.section>
      </motion.main>

     
    </motion.div>
  );
};

export default ContactPage;