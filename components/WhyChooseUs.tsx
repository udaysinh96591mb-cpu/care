'use client';

import { motion } from 'motion/react';
import { Star, Shield, Users, CreditCard, Coffee, Heart, Settings, Clock } from 'lucide-react';

const reasons = [
  { title: "4.9★ Patient Satisfaction", icon: <Star className="w-6 h-6" /> },
  { title: "Advanced Dental Equipment", icon: <Settings className="w-6 h-6" /> },
  { title: "Experienced Dental Team", icon: <Users className="w-6 h-6" /> },
  { title: "Affordable Treatment Plans", icon: <CreditCard className="w-6 h-6" /> },
  { title: "Comfortable Environment", icon: <Coffee className="w-6 h-6" /> },
  { title: "Personalized Care", icon: <Heart className="w-6 h-6" /> },
  { title: "Strict Sterilization", icon: <Shield className="w-6 h-6" /> },
  { title: "Quick Appointments", icon: <Clock className="w-6 h-6" /> },
];

export default function WhyChooseUs() {
  return (
    <section className="py-24 bg-rose-50/50">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        <div className="text-center max-w-3xl mx-auto mb-16">
          <h2 className="text-3xl md:text-5xl font-display font-bold text-gray-900 mb-6">Why Choose Us?</h2>
          <p className="text-lg text-gray-600">We prioritize your comfort, safety, and oral health above everything else.</p>
        </div>

        <div className="grid grid-cols-2 md:grid-cols-4 gap-4 md:gap-6">
          {reasons.map((reason, i) => (
            <motion.div 
              key={i}
              initial={{ opacity: 0, scale: 0.95 }}
              whileInView={{ opacity: 1, scale: 1 }}
              viewport={{ once: true }}
              transition={{ delay: i * 0.05 }}
              className="bg-white p-6 rounded-3xl border border-rose-100 flex flex-col items-center text-center shadow-sm hover:shadow-md hover:border-rose-200 transition"
            >
              <div className="w-12 h-12 bg-rose-100 text-rose-600 rounded-full flex items-center justify-center mb-4">
                {reason.icon}
              </div>
              <h4 className="font-display font-bold text-gray-900 text-sm md:text-base">{reason.title}</h4>
            </motion.div>
          ))}
        </div>
      </div>
    </section>
  );
}
