'use client';

import { motion } from 'motion/react';
import { Sparkles, Stethoscope, Scissors, Shield, PenTool, CheckCircle, Bone, Smile as SmileIcon, Activity, PlusCircle, Syringe, Heart } from 'lucide-react';

const services = [
  { title: "Dental Implants", icon: <Bone className="w-8 h-8" />, desc: "Permanent replacement for missing teeth." },
  { title: "Root Canal Treatment", icon: <Activity className="w-8 h-8" />, desc: "Save your infected tooth with pain-free RCT." },
  { title: "Teeth Whitening", icon: <Sparkles className="w-8 h-8" />, desc: "Get a brighter, stain-free smile instantly." },
  { title: "Smile Designing", icon: <SmileIcon className="w-8 h-8" />, desc: "Customized cosmetic dental makeovers." },
  { title: "Braces & Aligners", icon: <CheckCircle className="w-8 h-8" />, desc: "Straighten teeth with modern orthodontic solutions." },
  { title: "Crowns & Bridges", icon: <Shield className="w-8 h-8" />, desc: "Restore damaged teeth beautifully." },
  { title: "Tooth Extraction", icon: <Scissors className="w-8 h-8" />, desc: "Safe and painless removal of problematic teeth." },
  { title: "Pediatric Dentistry", icon: <Heart className="w-8 h-8" />, desc: "Gentle dental care for children." },
  { title: "Gum Treatment", icon: <Stethoscope className="w-8 h-8" />, desc: "Advanced solutions for gum disease." },
  { title: "Dentures", icon: <PenTool className="w-8 h-8" />, desc: "Comfortable and natural-looking dentures." },
  { title: "Emergency Dental Care", icon: <PlusCircle className="w-8 h-8" />, desc: "Immediate attention for dental emergencies." },
  { title: "Full Mouth Rehab", icon: <Syringe className="w-8 h-8" />, desc: "Comprehensive treatment for oral health." }
];

export default function Services() {
  return (
    <section id="services" className="py-24 bg-stone-50">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        <div className="text-center max-w-3xl mx-auto mb-16">
          <span className="text-rose-500 font-bold tracking-wider uppercase text-sm mb-4 block">Our Services</span>
          <h2 className="text-3xl md:text-5xl font-display font-bold text-gray-900 mb-6">Comprehensive Dental Care</h2>
          <p className="text-lg text-gray-600">We offer a wide range of dental treatments using the latest technology to ensure the best possible care for your smile.</p>
        </div>

        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 xl:grid-cols-4 gap-6">
          {services.map((service, index) => (
            <motion.div 
              key={service.title}
              initial={{ opacity: 0, y: 20 }}
              whileInView={{ opacity: 1, y: 0 }}
              viewport={{ once: true }}
              transition={{ delay: index * 0.05 }}
              className="bg-white p-8 rounded-[2rem] border border-stone-200 hover:border-rose-200 hover:shadow-xl hover:shadow-rose-100/50 transition-all group"
            >
              <div className="w-16 h-16 bg-rose-50 rounded-2xl flex items-center justify-center text-rose-500 mb-6 group-hover:scale-110 group-hover:bg-rose-500 group-hover:text-white transition-all duration-300">
                {service.icon}
              </div>
              <h3 className="text-xl font-display font-bold text-gray-900 mb-3">{service.title}</h3>
              <p className="text-gray-600 text-sm">{service.desc}</p>
            </motion.div>
          ))}
        </div>
      </div>
    </section>
  );
}
