'use client';

import { motion } from 'framer-motion';
import { useInView } from 'framer-motion';
import { useRef } from 'react';

const standards = [
  { id: 1, name: 'ISO 9001', img: 'https://ars-certification.com/wp-content/uploads/2024/11/9001-4-150x150-1.png' },
  { id: 2, name: 'ISO 14001', img: 'https://ars-certification.com/wp-content/uploads/2024/11/14001-3-150x150-1.png' },
  { id: 3, name: 'ISO 22000', img: 'https://ars-certification.com/wp-content/uploads/2024/11/22000-2-150x150-1.png' },
  { id: 4, name: 'ISO 21001', img: 'https://ars-certification.com/wp-content/uploads/2024/11/27001-2-150x150-1.png' },
  { id: 5, name: 'ISO 37001', img: 'https://ars-certification.com/wp-content/uploads/2024/11/37001-2-150x150-1.png' },
  { id: 6, name: 'ISO 41001', img: 'https://ars-certification.com/wp-content/uploads/2024/11/41001-2-150x150-1.png' },
  { id: 7, name: 'ISO 45001', img: 'https://ars-certification.com/wp-content/uploads/2024/11/45001-3-150x150-1.png' },
  { id: 8, name: 'ISO 27001', img: 'https://ars-certification.com/wp-content/uploads/2024/11/210001-2-150x150-1.png' },
  { id: 9, name: 'ISO 13485', img: 'https://ars-certification.com/wp-content/uploads/2024/11/iso-22301.png' },
  { id: 10, name: 'ISO 22301', img: 'https://ars-certification.com/wp-content/uploads/2024/11/iso-13485.png' },
];

export default function StandardsGrid() {
  const ref = useRef(null);
  const isInView = useInView(ref, { once: true, amount: 0.1 });

  return (
    <section id="standards" ref={ref} className="py-16 bg-[#f1f8f1]">
      <div className="max-w-5xl mx-auto px-4">
        {/* Heading like Screenshot 139 */}
        <motion.div
          initial={{ opacity: 0, y: -20 }}
          animate={isInView ? { opacity: 1, y: 0 } : {}}
          className="text-center mb-12"
        >
          <h2 className="text-2xl md:text-3xl font-bold text-green-700 uppercase tracking-wide">
            STANDARDS WE CERTIFY
          </h2>
          <div className="w-24 h-1 bg-green-600 mx-auto mt-2 rounded-full opacity-20"></div>
        </motion.div>

        {/* Circular Grid Layout */}
        <div className="grid grid-cols-2 sm:grid-cols-3 md:grid-cols-5 gap-y-10 gap-x-4 justify-items-center">
          {standards.map((standard, index) => (
            <motion.div
              key={standard.id}
              initial={{ opacity: 0, scale: 0.8 }}
              animate={isInView ? { opacity: 1, scale: 1 } : {}}
              transition={{ duration: 0.5, delay: index * 0.05 }}
              whileHover={{ scale: 1.1 }}
              className="relative group cursor-pointer"
            >
              {/* Circular Image Container */}
              <div className="w-32 h-32 md:w-36 md:h-36 rounded-full overflow-hidden border-4 border-white shadow-md bg-black flex items-center justify-center">
                <img 
                  src={standard.img} 
                  alt={standard.name} 
                  className="w-full h-full object-cover opacity-80 group-hover:opacity-100 transition-opacity"
                />
                {/* Text Overlay inside Circle */}
                <div className="absolute inset-0 flex items-center justify-center">
                   <span className="text-white font-bold text-sm md:text-base bg-black/40 px-2 py-1 rounded">
                     {standard.name}
                   </span>
                </div>
              </div>
            </motion.div>
          ))}
        </div>
      </div>
    </section>
  );
}