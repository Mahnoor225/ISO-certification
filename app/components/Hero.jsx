'use client';

import { motion } from 'framer-motion';
import { ArrowRight } from 'lucide-react';

export default function Hero() {
  return (
    <section className="relative min-h-[90vh] flex items-center justify-center overflow-hidden">
      {/* Background Image with Dark Overlay */}
      <div 
        className="absolute inset-0 z-0"
        style={{
          backgroundImage: `url('https://ars-certification.com/wp-content/uploads/2024/10/3d-flat-icon-as-food-safety-consultant-with-iso-badge-compliance-report-concept-as-food-safety_980716-404096.jpg')`,
          backgroundSize: 'cover',
          backgroundPosition: 'center',
        }}
      >
        <div className="absolute inset-0 bg-black/50" /> {/* Darkens image for text readability */}
      </div>

      {/* Main Content Area */}
      <div className="relative z-10 max-w-5xl mx-auto px-4 text-center">
        <motion.div
          initial={{ opacity: 0, y: 30 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.8 }}
          className="flex flex-col items-center"
        >
          {/* Main Heading */}
          <h1 className="text-4xl md:text-6xl lg:text-7xl font-bold text-white mb-6 leading-tight">
            Grow your business with <br />
            <span className="text-[#4ade80]">ISO certification</span>
          </h1>

          {/* Subtext */}
          <p className="text-lg md:text-xl text-gray-200 mb-4 max-w-2xl">
            UKAS accredited ISO certification provider
          </p>

          {/* Action Button */}
          <motion.button 
            whileHover={{ scale: 1.05 }}
            whileTap={{ scale: 0.95 }}
            className="mt-4 bg-[#2e7d32] text-white px-10 py-4 rounded-md font-semibold hover:bg-green-700 transition flex items-center gap-2 border border-green-400/30"
          >
            CONTACT US <ArrowRight size={20} />
          </motion.button>
        </motion.div>
      </div>

   {/* Decorative Bottom Curve */}
<div className="absolute bottom-[-2px] left-0 w-full leading-[0] z-20 overflow-hidden">
  <svg 
    viewBox="0 0 1440 120" 
    fill="none" 
    xmlns="http://www.w3.org/2000/svg"
    /* translate-y-[2px] aur scale-x ko barha diya hai */
    className="w-full h-auto translate-y-[2px] scale-x-[1.02]" 
    preserveAspectRatio="none"
  >
    <path 
      d="M0 120L1440 120L1440 40C1440 40 1080 120 720 120C360 120 0 40 0 40L0 120Z" 
      fill="#f1f8f1" 
    />
  </svg>
  
  {/* Extra safety layer: Ye niche wala div gap ko fill kar dega */}
  <div className="h-[2px] w-full bg-[#f1f8f1] -mt-[1px]"></div>
</div>
    </section>
  );
}