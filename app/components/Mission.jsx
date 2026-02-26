'use client';

import { motion } from 'framer-motion';
import { useInView } from 'framer-motion';
import { useRef } from 'react';
import { CheckCircle } from 'lucide-react';

export default function Mission() {
  const ref = useRef(null);
  const isInView = useInView(ref, { once: true, amount: 0.2 });

  const benefits = [
    'Enhanced operational efficiency',
    'Improved customer satisfaction',
    'Risk management and compliance',
    'Competitive market advantage',
    'Employee engagement and safety',
    'Sustainable business practices',
  ];

  return (
    <section ref={ref} className="py-20 bg-secondary">
      <div className="max-w-6xl mx-auto px-4 sm:px-6 lg:px-8">
        <div className="grid md:grid-cols-2 gap-12 items-center">
          {/* Left Content */}
          <motion.div
            initial={{ opacity: 0, x: -50 }}
            animate={isInView ? { opacity: 1, x: 0 } : { opacity: 0, x: -50 }}
            transition={{ duration: 0.8 }}
          >
            <p className="text-primary font-semibold mb-2">OUR MISSION</p>
            <h2 className="text-3xl md:text-4xl font-bold text-foreground mb-6">
              Empowering Organizations to Excel
            </h2>
            <p className="text-foreground/70 text-lg mb-8 leading-relaxed">
              We are dedicated to helping organizations of all sizes achieve ISO certification. Our expert consultants provide guidance, support, and expertise throughout your certification journey, ensuring compliance and sustainability.
            </p>

            {/* Benefits Grid */}
            <div className="grid grid-cols-1 sm:grid-cols-2 gap-4">
              {benefits.map((benefit, index) => (
                <motion.div
                  key={index}
                  initial={{ opacity: 0, x: -20 }}
                  animate={isInView ? { opacity: 1, x: 0 } : { opacity: 0, x: -20 }}
                  transition={{ duration: 0.6, delay: index * 0.1 }}
                  className="flex items-start gap-3"
                >
                  <CheckCircle className="text-primary flex-shrink-0 mt-1" size={20} />
                  <span className="text-foreground">{benefit}</span>
                </motion.div>
              ))}
            </div>
          </motion.div>

          {/* Right Image */}
        {/* Right Image */}
<motion.div
  initial={{ opacity: 0, x: 50 }}
  animate={isInView ? { opacity: 1, x: 0 } : { opacity: 0, x: 50 }}
  transition={{ duration: 0.8 }}
  /* Background ko halka green tint aur shadow diya hai */
  className="relative bg-[#f1f8f1] rounded-2xl h-96 flex items-center justify-center overflow-hidden shadow-xl border-4 border-white"
>
  <div className="w-full h-full">
    <img 
      src="https://encrypted-tbn0.gstatic.com/images?q=tbn:ANd9GcR6Hj31pwXT6Ye_Rj7JCV0XV3-J2AghIjwguQ&s" 
      alt="Mission Strategic Excellence" 
      /* Object-cover image ko stretch hone se bachayega aur poora area cover karega */
      className="w-full h-full object-cover" 
    />
  </div>
  
  {/* Optional: Halka sa dark overlay text ki readability (agar ho) ke liye */}
  <div className="absolute inset-0 bg-black/5"></div>
</motion.div>
        </div>
      </div>
    </section>
  );
}
