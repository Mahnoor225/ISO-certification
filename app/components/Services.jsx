'use client';

import { motion } from 'framer-motion';
import { useInView } from 'framer-motion';
import { useRef } from 'react';

const services = [
  {
    id: 1,
    title: 'AUDITING',
    description: 'A systematic and independent examination to determine whether quality activities and related results comply with planned arrangements and whether these arrangements are implemented effectively.',
    image: 'https://ars-certification.com/wp-content/uploads/2024/11/ge75f842a70e8b74c428a0bc95509258c38d1b1d6cb1c71b37dd685b57b6cc49ee52fc317d141539dd2686984594ae6aa076102c90028ef28cc077a3c74e7fc4f_1280-4189560-1024x678.jpg',
  },
  {
    id: 2,
    title: 'TRAINING',
    description: 'For developing an environment that enhances employee motivation and organization productivity and satisfaction. Trained personnel will be retained, performer and flexible enough in specific work condition.',
    image: 'https://ars-certification.com/wp-content/uploads/2024/11/pexels-photo-1708912-1708912-1024x683.jpg',
  },
   {
    id: 3,
    title: 'CERTIFICATION',
    description: 'Certification is a useful tool to add credibility, by demonstrating that your product or service meets the expectations of your customers.',
    image: 'https://ars-certification.com/wp-content/uploads/2024/11/pexels-photo-12324202-12324202-1024x683.jpg',
  },
    {
    id: 4,
    title: 'INSPECTION',
    description: 'An inspection is, most typically, an organized examination or formal assessment workout. In the sector of commercial enterprise, inspection is the important appraisal of substances, objects, or structures concerning examination, testing, and gauging.',
    image: 'https://ars-certification.com/wp-content/uploads/2024/11/pexels-photo-6615284-6615284-6-1024x683.jpg',
  },
  {
    id: 5,
    title: 'TESTING',
    description: 'Today, most goods are subject to local regulations (EN, ASTM, CPSC, and others) to help ensure the health and safety of the final consumer. Since importers and retailers are responsible for the products in the country where they market them.',
    image: 'https://ars-certification.com/wp-content/uploads/2024/11/pexels-photo-3862605-3862605-683x1024.jpg',
  },
   {
    id: 5,
    title: 'Other Certification Services',
    description: 'Quality shall be delivered using right resources and ethical approach. Our system is inline with ISO 9001 etc',
    image: 'https://ars-certification.com/wp-content/uploads/2024/11/standard-quality-control-collage-1024x683.jpg',
  },
];

export default function Services() {
  const ref = useRef(null);
  const isInView = useInView(ref, { once: true, amount: 0.2 });

  return (
    <section id="services" ref={ref} className="py-20 bg-[#f1f8f1]">
      <div className="max-w-6xl mx-auto px-4 sm:px-6 lg:px-8">
        
        {/* Heading Section */}
        <motion.div
          initial={{ opacity: 0, y: 20 }}
          animate={isInView ? { opacity: 1, y: 0 } : {}}
          transition={{ duration: 0.6 }}
          className="text-center mb-16"
        >
          <p className="text-green-700 font-medium mb-2">We All Need Help to Realize What We Want Most.</p>
          <h2 className="text-4xl md:text-5xl font-bold text-green-800 mb-6">
            Our Additional Services
          </h2>
          <div className="w-24 h-1.5 bg-green-600 mx-auto rounded-full"></div>
        </motion.div>

        {/* Services Cards Grid */}
        <div className="grid grid-cols-1 md:grid-cols-3 gap-8">
          {services.map((service, index) => (
            <motion.div
              key={service.id}
              initial={{ opacity: 0, y: 30 }}
              animate={isInView ? { opacity: 1, y: 0 } : {}}
              transition={{ duration: 0.6, delay: index * 0.2 }}
              whileHover={{ y: -10 }}
              className="bg-[#e8f3e8] rounded-3xl overflow-hidden shadow-sm border border-green-100 flex flex-col items-center text-center pb-8"
            >
              {/* Card Image */}
              <div className="w-full h-48 overflow-hidden">
                <img 
                  src={service.image} 
                  alt={service.title} 
                  className="w-full h-full object-cover"
                />
              </div>

              {/* Card Content */}
              <div className="px-6 pt-6">
                <h3 className="text-xl font-bold text-green-800 mb-4 tracking-wider">
                  {service.title}
                </h3>
                <p className="text-gray-600 text-sm leading-relaxed">
                  {service.description}
                </p>
              </div>
            </motion.div>
          ))}
        </div>
      </div>
    </section>
  );
}