'use client';

import { motion } from 'framer-motion';
import { useInView } from 'framer-motion';
import { useRef } from 'react';
import { Star, Quote } from 'lucide-react';

const testimonials = [
  {
    id: 1,
    name: 'Sarah Johnson',
    company: 'TechCorp Industries',
    role: 'Quality Director',
    content: 'The team was incredibly helpful during our ISO 9001 journey. Their expertise and guidance made the process smooth and straightforward.',
    rating: 5,
    img: 'https://i.pravatar.cc/150?u=sarah',
  },
  {
    id: 2,
    name: 'Michael Chen',
    company: 'Green Manufacturing Ltd',
    role: 'Operations Manager',
    content: 'We achieved ISO 14001 certification in record time. The consultants understood our business and provided practical solutions.',
    rating: 5,
    img: 'https://i.pravatar.cc/150?u=michael',
  },
  {
    id: 3,
    name: 'Emily Rodriguez',
    company: 'Safety First Solutions',
    role: 'HR Director',
    content: 'Outstanding service! The ISO 45001 process was transparent and well-structured. Highly recommend their programs.',
    rating: 5,
    img: 'https://i.pravatar.cc/150?u=emily',
  },
  {
    id: 4,
    name: 'David Smith',
    company: 'Secure Data Systems',
    role: 'Security Lead',
    content: 'Professional team with deep knowledge of ISO 27001. They helped us strengthen our security framework significantly.',
    rating: 5,
    img: 'https://i.pravatar.cc/150?u=david',
  },
];

export default function Testimonials() {
  const ref = useRef(null);
  const isInView = useInView(ref, { once: true, amount: 0.2 });

  return (
    <section id="testimonials" ref={ref} className="py-24 bg-[#f8faf8] overflow-hidden">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        
        {/* Modern Header */}
        <motion.div
          initial={{ opacity: 0, y: 30 }}
          animate={isInView ? { opacity: 1, y: 0 } : {}}
          transition={{ duration: 0.8 }}
          className="text-center mb-20"
        >
          <span className="bg-green-100 text-green-700 px-4 py-1.5 rounded-full text-sm font-bold tracking-wider uppercase">
            Testimonials
          </span>
          <h2 className="text-4xl md:text-5xl font-extrabold text-gray-900 mt-6 mb-4">
            Trusted by Industry <span className="text-green-600">Leaders</span>
          </h2>
          <p className="text-gray-500 text-lg max-w-2xl mx-auto">
            Helping organizations worldwide achieve excellence through simplified certification processes.
          </p>
        </motion.div>

        {/* Grid with Modern Cards */}
        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-8">
          {testimonials.map((testimonial, index) => (
            <motion.div
              key={testimonial.id}
              initial={{ opacity: 0, scale: 0.9 }}
              animate={isInView ? { opacity: 1, scale: 1 } : {}}
              transition={{ duration: 0.5, delay: index * 0.1 }}
              whileHover={{ y: -12 }}
              className="relative bg-white p-8 rounded-3xl shadow-[0_20px_50px_rgba(0,0,0,0.05)] border border-gray-100 group"
            >
              {/* Decorative Quote Icon */}
              <div className="absolute top-6 right-8 text-green-100 group-hover:text-green-200 transition-colors">
                <Quote size={40} fill="currentColor" />
              </div>

              {/* Stars */}
              <div className="flex gap-1 mb-6">
                {[...Array(testimonial.rating)].map((_, i) => (
                  <Star key={i} size={14} className="fill-yellow-400 text-yellow-400" />
                ))}
              </div>

              {/* Content */}
              <p className="text-gray-600 mb-8 leading-relaxed relative z-10 italic">
                "{testimonial.content}"
              </p>

              {/* Profile Section */}
              <div className="flex items-center gap-4 border-t border-gray-50 pt-6">
                <div className="relative">
                  <img 
                    src={testimonial.img} 
                    alt={testimonial.name} 
                    className="w-12 h-12 rounded-full object-cover border-2 border-green-500/20"
                  />
                  <div className="absolute -bottom-1 -right-1 bg-green-500 w-4 h-4 rounded-full border-2 border-white flex items-center justify-center">
                    <Check size={8} className="text-white" />
                  </div>
                </div>
                <div>
                  <h4 className="font-bold text-gray-900 text-sm">{testimonial.name}</h4>
                  <p className="text-[11px] text-gray-400 uppercase tracking-tighter font-semibold">
                    {testimonial.role} @ <span className="text-green-600">{testimonial.company}</span>
                  </p>
                </div>
              </div>
            </motion.div>
          ))}
        </div>
      </div>
    </section>
  );
}

// Chota sa Lucide icon helper
function Check({ size, className }) {
  return (
    <svg 
      xmlns="http://www.w3.org/2000/svg" 
      width={size} height={size} 
      viewBox="0 0 24 24" fill="none" 
      stroke="currentColor" strokeWidth="3" 
      strokeLinecap="round" strokeLinejoin="round" 
      className={className}
    >
      <polyline points="20 6 9 17 4 12" />
    </svg>
  );
}