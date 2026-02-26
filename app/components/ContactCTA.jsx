'use client';

import { motion } from 'framer-motion';
import { useInView } from 'framer-motion';
import { useRef } from 'react';
import { Phone, MapPin, Mail } from 'lucide-react';

export default function ContactCTA() {
  const ref = useRef(null);
  const isInView = useInView(ref, { once: true, amount: 0.2 });

  return (
    <section ref={ref} className="py-20 bg-primary">
      <div className="max-w-4xl mx-auto px-4 sm:px-6 lg:px-8">
        <motion.div
          initial={{ opacity: 0, y: 20 }}
          animate={isInView ? { opacity: 1, y: 0 } : { opacity: 0, y: 20 }}
          transition={{ duration: 0.6 }}
          className="text-center mb-12"
        >
          <h2 className="text-3xl md:text-4xl font-bold text-white mb-4">
            If You Have Any Question, <br /> Feel Free to Call
          </h2>
          <p className="text-white/80 text-lg">
            Our team of experts is ready to assist you with your ISO certification journey.
          </p>
        </motion.div>

        {/* Contact Details */}
        <div className="grid grid-cols-1 md:grid-cols-3 gap-8 mb-12">
          {/* Phone */}
          <motion.div
            initial={{ opacity: 0, y: 20 }}
            animate={isInView ? { opacity: 1, y: 0 } : { opacity: 0, y: 20 }}
            transition={{ duration: 0.6, delay: 0.1 }}
            className="bg-white/10 rounded-lg p-6 text-center hover:bg-white/20 transition"
          >
            <Phone className="text-white mx-auto mb-4" size={32} />
            <p className="text-white/70 text-sm mb-2">Call Us</p>
            <div className="space-y-2">
              <p className="text-white font-semibold">+44 7577 668340</p>
              <p className="text-white font-semibold">+92 314 1766696</p>
            </div>
          </motion.div>

          {/* Email */}
          <motion.div
            initial={{ opacity: 0, y: 20 }}
            animate={isInView ? { opacity: 1, y: 0 } : { opacity: 0, y: 20 }}
            transition={{ duration: 0.6, delay: 0.2 }}
            className="bg-white/10 rounded-lg p-6 text-center hover:bg-white/20 transition"
          >
            <Mail className="text-white mx-auto mb-4" size={32} />
            <p className="text-white/70 text-sm mb-2">Email Us</p>
            <p className="text-white font-semibold break-all">contact@arscertification.com</p>
          </motion.div>

          {/* Location */}
          <motion.div
            initial={{ opacity: 0, y: 20 }}
            animate={isInView ? { opacity: 1, y: 0 } : { opacity: 0, y: 20 }}
            transition={{ duration: 0.6, delay: 0.3 }}
            className="bg-white/10 rounded-lg p-6 text-center hover:bg-white/20 transition"
          >
            <MapPin className="text-white mx-auto mb-4" size={32} />
            <p className="text-white/70 text-sm mb-2">Location</p>
            <p className="text-white font-semibold">United Kingdom & Pakistan</p>
          </motion.div>
        </div>

        {/* CTA Button */}
        <motion.div
          initial={{ opacity: 0 }}
          animate={isInView ? { opacity: 1 } : { opacity: 0 }}
          transition={{ duration: 0.6, delay: 0.4 }}
          className="text-center"
        >
          <button className="bg-white text-primary px-10 py-4 rounded-lg font-bold hover:bg-opacity-90 transition text-lg">
            Schedule Consultation
          </button>
        </motion.div>
      </div>
    </section>
  );
}
