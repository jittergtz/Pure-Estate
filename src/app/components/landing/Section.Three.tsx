// components/TestimonialsSection.tsx
"use client"
import { motion } from 'motion/react';
import Image from 'next/image';

const testimonials = [
  {
    id: 1,
    quote: "The attention to detail and personalized service exceeded all expectations. They truly understand luxury real estate.",
    author: "James Wilson",
    title: "CEO, Global Ventures",
    image: "https://images.unsplash.com/photo-1507003211169-0a1dd7228f2d?q=80&w=2370&auto=format&fit=crop"
  },
  {
    id: 2,
    quote: "Their portfolio of properties is unmatched. They helped us find our dream home in record time.",
    author: "Emily Chang",
    title: "Tech Entrepreneur",
    image: "https://images.unsplash.com/photo-1494790108377-be9c29b29330?q=80&w=2370&auto=format&fit=crop"
  },
  {
    id: 3,
    quote: "The most professional and discrete real estate service I've ever experienced. Truly world-class.",
    author: "Michael Roberts",
    title: "Private Investor",
    image: "https://images.unsplash.com/photo-1472099645785-5658abf4ff4e?q=80&w=2370&auto=format&fit=crop"
  }
];

const stats = [
  { id: 1, value: '$2.5B+', label: 'Property Sales' },
  { id: 2, value: '150+', label: 'Luxury Properties' },
  { id: 3, value: '15+', label: 'Years Experience' },
  { id: 4, value: '98%', label: 'Client Satisfaction' }
];

const TestimonialsSection = () => {
  return (
    <section className="bg-black py-24">
      <div className="mx-auto max-w-7xl px-4 sm:px-6 lg:px-8">
        {/* Stats */}
        <motion.div 
          initial={{ opacity: 0, y: 30 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true }}
          className="mb-20 grid grid-cols-2 gap-8 md:grid-cols-4"
        >
          {stats.map((stat) => (
            <div key={stat.id} className="text-center">
              <motion.p 
                initial={{ scale: 0.9 }}
                whileInView={{ scale: 1 }}
                viewport={{ once: true }}
                className="text-3xl font-light text-white"
              >
                {stat.value}
              </motion.p>
              <p className="text-sm text-gray-400">{stat.label}</p>
            </div>
          ))}
        </motion.div>

        {/* Testimonials */}
        <motion.div
          initial={{ opacity: 0 }}
          whileInView={{ opacity: 1 }}
          viewport={{ once: true }}
          className="mb-16 text-center"
        >
          <h2 className="mb-6 text-4xl font-light text-white sm:text-5xl">
            Trusted by
            <span className="block font-serif italic">Industry Leaders</span>
          </h2>
        </motion.div>

        <motion.div 
          initial="hidden"
          whileInView="visible"
          viewport={{ once: true }}
          variants={{
            hidden: { opacity: 0 },
            visible: {
              opacity: 1,
              transition: { staggerChildren: 0.3 }
            }
          }}
          className="grid gap-8 md:grid-cols-2 lg:grid-cols-3"
        >
          {testimonials.map((testimonial) => (
            <motion.div
              key={testimonial.id}
              variants={{
                hidden: { opacity: 0, y: 50 },
                visible: {
                  opacity: 1,
                  y: 0,
                  transition: { duration: 0.8 }
                }
              }}
              className="relative rounded-lg bg-white/5 p-8"
            >
              <div className="mb-6">
                <svg className="h-8 w-8 text-gray-400" fill="currentColor" viewBox="0 0 24 24">
                  <path d="M14.017 21v-7.391c0-5.704 3.731-9.57 8.983-10.609l.995 2.151c-2.432.917-3.995 3.638-3.995 5.849h4v10h-9.983zm-14.017 0v-7.391c0-5.704 3.748-9.57 9-10.609l.996 2.151c-2.433.917-3.996 3.638-3.996 5.849h3.983v10h-9.983z" />
                </svg>
              </div>
              <p className="mb-6 text-lg text-gray-300">{testimonial.quote}</p>
              <div className="flex items-center">
                <div className="relative h-12 w-12 overflow-hidden rounded-full">
                  <Image
                    src={testimonial.image}
                    alt={testimonial.author}
                    layout="fill"
                    objectFit="cover"
                  />
                </div>
                <div className="ml-4">
                  <p className="text-sm font-medium text-white">{testimonial.author}</p>
                  <p className="text-sm text-gray-400">{testimonial.title}</p>
                </div>
              </div>
            </motion.div>
          ))}
        </motion.div>

        {/* Partners */}
        <motion.div 
          initial={{ opacity: 0, y: 30 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true }}
          className="mt-20 text-center"
        >
          <p className="mb-8 text-lg text-gray-400">
            As featured in
          </p>
          <div className="flex flex-wrap items-center justify-center gap-8 opacity-50">
            {/* Replace with actual partner logos */}
            {[1, 2, 3, 4].map((i) => (
              <div key={i} className="h-8 w-32 bg-white/20" />
            ))}
          </div>
        </motion.div>
      </div>
    </section>
  );
};

export default TestimonialsSection;