'use client';

import { motion } from 'framer-motion';
import { useInView } from 'framer-motion';
import { useRef } from 'react';
import { Check } from 'lucide-react';

const steps = [
  'Application Form',
  'Contract Review',
  'Quotation / Agreement to Client',
  'Invoice Preparation & Sending',
  'Stage-I Report & NC Closure Review',
  'Site Inspection & Recommendation',
  'Final Certification Review',
  'Payment Confirmation',
];

export default function CertificationProcess() {
  const ref = useRef(null);
  const isInView = useInView(ref, { once: true, amount: 0.2 });

  return (
    <section id="process" ref={ref} className="py-20 bg-[#f1f8f1]">
      <div className="max-w-6xl mx-auto px-4 sm:px-6 lg:px-8">
        
        {/* Main Heading as per Screenshot */}
        <motion.div
          initial={{ opacity: 0, y: -20 }}
          animate={isInView ? { opacity: 1, y: 0 } : {}}
          className="text-center mb-16"
        >
          <h2 className="text-3xl md:text-4xl font-bold text-green-700 uppercase tracking-[0.2em]">
            CERTIFICATION PROCESS
          </h2>
          <div className="w-24 h-1 bg-green-600 mx-auto mt-4 rounded-full"></div>
        </motion.div>

        <div className="grid md:grid-cols-2 gap-12 items-center">
          
          {/* Left: Golden ISO Logo (As per Image) */}
          <motion.div
            initial={{ opacity: 0, x: -50 }}
            animate={isInView ? { opacity: 1, x: 0 } : {}}
            transition={{ duration: 0.8 }}
            className="flex justify-center"
          >
            <div className="relative w-full max-w-[400px]">
              <img 
                src="https://ars-certification.com/wp-content/uploads/2024/11/codifyformatter-300x300.png" 
                alt="ISO Certification Badge" 
                className="w-full h-auto drop-shadow-2xl"
              />
            </div>
          </motion.div>

          {/* Right: Checklist Steps */}
          <motion.div
            initial={{ opacity: 0, x: 50 }}
            animate={isInView ? { opacity: 1, x: 0 } : {}}
            transition={{ duration: 0.8 }}
          >
            <div className="space-y-4">
              {steps.map((step, index) => (
                <motion.div
                  key={index}
                  initial={{ opacity: 0, x: 20 }}
                  animate={isInView ? { opacity: 1, x: 0 } : {}}
                  transition={{ duration: 0.4, delay: index * 0.1 }}
                  className="flex items-center gap-4 group"
                >
                  {/* Green Tick Icon */}
                  <div className="bg-green-600 p-1 rounded-sm flex-shrink-0">
                    <Check size={14} className="text-white stroke-[4px]" />
                  </div>
                  
                  {/* Step Text */}
                  <p className="text-gray-700 font-semibold text-lg hover:text-green-700 transition cursor-default">
                    {step}
                  </p>
                </motion.div>
              ))}
            </div>

            {/* Start Now Button */}
            <motion.div 
              className="mt-12"
              whileHover={{ scale: 1.05 }}
              whileTap={{ scale: 0.95 }}
            >
              <button className="bg-green-700 text-white px-10 py-4 rounded-md font-bold text-sm tracking-widest hover:bg-green-800 transition shadow-lg">
                GET STARTED NOW
              </button>
            </motion.div>
          </motion.div>

        </div>
      </div>
    </section>
  );
}