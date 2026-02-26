'use client';

import { motion } from 'framer-motion';
import { useInView } from 'framer-motion';
import { useRef } from 'react';
import { Facebook, Linkedin, Twitter, Globe, Phone, Mail, MapPin } from 'lucide-react';

export default function Footer() {
  const ref = useRef(null);
  const isInView = useInView(ref, { once: true, amount: 0.1 });

  return (
    <footer ref={ref} className="bg-[#111827] text-white pt-16 pb-8">
      <div className="max-w-6xl mx-auto px-4 sm:px-6 lg:px-8">
        {/* Main Footer Content */}
        <div className="grid grid-cols-1 md:grid-cols-4 gap-12 mb-16">
          
          {/* Brand & Logo */}
          <motion.div
            initial={{ opacity: 0, y: 20 }}
            animate={isInView ? { opacity: 1, y: 0 } : {}}
            transition={{ duration: 0.6 }}
            className="flex flex-col gap-6"
          >
            <img 
              src="https://ars-certification.com/wp-content/uploads/2024/10/cropped-ARS-Logo.png" 
              alt="ARS Logo" 
              className="h-16 w-fit object-contain  " // Logo ko white karne ke liye brightness/invert
            />
            <p className="text-gray-400 text-sm leading-relaxed">
              Leading ISO certification provider helping organizations achieve operational excellence and compliance worldwide.
            </p>
          </motion.div>

          {/* Quick Links */}
          <motion.div
            initial={{ opacity: 0, y: 20 }}
            animate={isInView ? { opacity: 1, y: 0 } : {}}
            transition={{ duration: 0.6, delay: 0.1 }}
          >
            <h4 className="text-lg font-bold mb-6 text-white">Quick Links</h4>
            <ul className="space-y-4 text-sm">
              <li><a href="#" className="text-gray-400 hover:text-green-500 transition-colors">Home</a></li>
              <li><a href="#standards" className="text-gray-400 hover:text-green-500 transition-colors">Standards</a></li>
              <li><a href="#services" className="text-gray-400 hover:text-green-500 transition-colors">Services</a></li>
              <li><a href="#process" className="text-gray-400 hover:text-green-500 transition-colors">Process</a></li>
            </ul>
          </motion.div>

          {/* Services */}
          <motion.div
            initial={{ opacity: 0, y: 20 }}
            animate={isInView ? { opacity: 1, y: 0 } : {}}
            transition={{ duration: 0.6, delay: 0.2 }}
          >
            <h4 className="text-lg font-bold mb-6 text-white">Services</h4>
            <ul className="space-y-4 text-sm">
              <li><a href="#" className="text-gray-400 hover:text-green-500 transition-colors">Auditing</a></li>
              <li><a href="#" className="text-gray-400 hover:text-green-500 transition-colors">Training</a></li>
              <li><a href="#" className="text-gray-400 hover:text-green-500 transition-colors">Certification</a></li>
              <li><a href="#" className="text-gray-400 hover:text-green-500 transition-colors">Consulting</a></li>
            </ul>
          </motion.div>

          {/* Contact Info */}
          <motion.div
            initial={{ opacity: 0, y: 20 }}
            animate={isInView ? { opacity: 1, y: 0 } : {}}
            transition={{ duration: 0.6, delay: 0.3 }}
          >
            <h4 className="text-lg font-bold mb-6 text-white">Contact Info</h4>
            <ul className="space-y-4 text-sm">
              <li className="flex items-center gap-3 text-gray-400 hover:text-white transition cursor-default">
                <Phone size={16} className="text-green-500" />
                <span>+44 7577 668340</span>
              </li>
              <li className="flex items-center gap-3 text-gray-400 hover:text-white transition cursor-default">
                <Mail size={16} className="text-green-500" />
                <span>contact@arscertification.com</span>
              </li>
              <li className="flex items-start gap-3 text-gray-400">
                <MapPin size={16} className="text-green-500 mt-1" />
                <span>United Kingdom & Pakistan</span>
              </li>
            </ul>
          </motion.div>
        </div>

        {/* Bottom Bar */}
        <div className="border-t border-gray-800 pt-8 flex flex-col md:flex-row justify-between items-center gap-6">
          <motion.p
            initial={{ opacity: 0 }}
            animate={isInView ? { opacity: 1 } : {}}
            className="text-gray-500 text-sm"
          >
            © 2026 ARS Certification. All rights reserved.
          </motion.p>

          {/* Social Links */}
          <motion.div
            initial={{ opacity: 0 }}
            animate={isInView ? { opacity: 1 } : {}}
            className="flex gap-6"
          >
            <a href="#" className="text-gray-400 hover:text-green-500 transition-all hover:scale-110">
              <Facebook size={20} />
            </a>
            <a href="#" className="text-gray-400 hover:text-green-500 transition-all hover:scale-110">
              <Linkedin size={20} />
            </a>
            <a href="#" className="text-gray-400 hover:text-green-500 transition-all hover:scale-110">
              <Twitter size={20} />
            </a>
            <a href="#" className="text-gray-400 hover:text-green-500 transition-all hover:scale-110">
              <Globe size={20} />
            </a>
          </motion.div>
        </div>
      </div>
    </footer>
  );
}