'use client';

import { motion } from 'motion/react';
import Image from 'next/image';
import { CheckCircle2 } from 'lucide-react';

export default function About() {
  const points = [
    "Modern dental infrastructure",
    "Patient-focused treatment approach",
    "Experienced doctors",
    "Comfortable and hygienic environment",
    "Affordable and transparent pricing"
  ];

  return (
    <section id="about" className="py-24 bg-white">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        <div className="grid lg:grid-cols-2 gap-16 items-center">
          <motion.div 
            initial={{ opacity: 0, x: -30 }}
            whileInView={{ opacity: 1, x: 0 }}
            viewport={{ once: true }}
            className="relative h-[600px] w-full rounded-[2.5rem] overflow-hidden"
          >
            <Image 
              src="https://images.unsplash.com/photo-1588776814546-1ffcf47267a5?auto=format&fit=crop&w=800&q=80" 
              alt="Dental Clinic Interior" 
              fill 
              className="object-cover"
              referrerPolicy="no-referrer"
            />
          </motion.div>

          <motion.div 
            initial={{ opacity: 0, x: 30 }}
            whileInView={{ opacity: 1, x: 0 }}
            viewport={{ once: true }}
          >
            <span className="text-rose-500 font-bold tracking-wider uppercase text-sm mb-4 block">About Our Clinic</span>
            <h2 className="text-3xl md:text-5xl font-display font-bold text-gray-900 mb-6">World-Class Dental Care in Ahmedabad</h2>
            <p className="text-lg text-gray-600 mb-8 leading-relaxed">
              At Shreeji Dental Clinic, we are committed to providing the highest quality dental care in a relaxing and safe environment. Our state-of-the-art facility is equipped with advanced technology to ensure precise diagnostics and effective treatments.
            </p>

            <div className="space-y-4 mb-10">
              {points.map((point, i) => (
                <div key={i} className="flex items-center gap-3">
                  <CheckCircle2 className="w-6 h-6 text-rose-500 shrink-0" />
                  <span className="text-gray-700 font-medium">{point}</span>
                </div>
              ))}
            </div>

            <a href="#book" className="inline-flex justify-center items-center bg-stone-900 text-white px-8 py-4 rounded-full font-medium hover:bg-rose-500 transition shadow-lg">
              Know More About Us
            </a>
          </motion.div>
        </div>
      </div>
    </section>
  );
}
