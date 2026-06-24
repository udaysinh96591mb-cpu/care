'use client';

import { motion } from 'motion/react';
import Image from 'next/image';
import { Star, ArrowRight, Phone } from 'lucide-react';

export default function Hero() {
  return (
    <section className="relative pt-20 pb-32 overflow-hidden bg-stone-50">
      <div className="absolute inset-0 bg-[radial-gradient(ellipse_at_top_right,_var(--tw-gradient-stops))] from-rose-100/50 via-stone-50 to-stone-50"></div>
      
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 relative z-10">
        <div className="grid lg:grid-cols-2 gap-12 lg:gap-8 items-center">
          <motion.div 
            initial={{ opacity: 0, y: 20 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.6 }}
            className="max-w-2xl"
          >
            <div className="inline-flex items-center gap-2 px-4 py-2 rounded-full bg-rose-100/50 text-rose-700 font-medium text-sm mb-6 border border-rose-200/50 backdrop-blur-sm">
              <Star className="w-4 h-4 fill-rose-500 text-rose-500" />
              <span>4.9 Star Rated Clinic in Ahmedabad</span>
            </div>
            
            <h1 className="text-5xl md:text-6xl lg:text-7xl font-display font-bold text-gray-900 leading-[1.1] mb-6">
              Your Smile, <br/>
              <span className="text-transparent bg-clip-text bg-gradient-to-r from-rose-500 to-rose-400">Our Priority</span>
            </h1>
            
            <p className="text-lg text-gray-600 mb-8 leading-relaxed max-w-xl">
              Advanced Dental Care, Dental Implants, Cosmetic Dentistry & Family Dental Treatments in Ahmedabad. Experience world-class dental care in a comfortable environment.
            </p>
            
            <div className="flex flex-col sm:flex-row gap-4">
              <a href="#book" className="inline-flex justify-center items-center gap-2 bg-rose-500 text-white px-8 py-4 rounded-full font-medium hover:bg-rose-600 transition shadow-xl shadow-rose-500/25">
                Book Appointment
                <ArrowRight className="w-5 h-5" />
              </a>
              <a href="tel:+919099901093" className="inline-flex justify-center items-center gap-2 bg-white text-gray-900 border border-stone-200 px-8 py-4 rounded-full font-medium hover:bg-stone-50 transition shadow-sm">
                <Phone className="w-5 h-5 text-rose-500" />
                Call Now
              </a>
            </div>

            <div className="mt-12 flex flex-wrap items-center gap-x-8 gap-y-4 text-sm font-medium text-gray-500">
              <div className="flex items-center gap-2"><div className="w-2 h-2 rounded-full bg-rose-500"></div> Experienced Specialists</div>
              <div className="flex items-center gap-2"><div className="w-2 h-2 rounded-full bg-rose-500"></div> Advanced Technology</div>
              <div className="flex items-center gap-2"><div className="w-2 h-2 rounded-full bg-rose-500"></div> Affordable Treatment</div>
            </div>
          </motion.div>

          <motion.div 
            initial={{ opacity: 0, scale: 0.95 }}
            animate={{ opacity: 1, scale: 1 }}
            transition={{ duration: 0.8, delay: 0.2 }}
            className="relative"
          >
            <div className="relative h-[500px] w-full rounded-[2.5rem] overflow-hidden shadow-2xl border-8 border-white">
              <Image 
                src="https://lh3.googleusercontent.com/gps-cs-s/APNQkAFu-BxHmmY-M9PcwZPJyYENu0ua-N94ahPXNCQnpydiP9Yp3x-9_SBep8O3xNospLBLPYaAXSJqpCc51iZ-TFcOg-AEkDGEv6nOwuuwAxEt2yosWm1oUnzi24JFH3SHw4XX3HA=w1000-h800-k-no" 
                alt="My Care Dental Hospital Clinic" 
                fill 
                className="object-cover"
                referrerPolicy="no-referrer"
              />
              <div className="absolute inset-0 bg-gradient-to-t from-black/40 to-transparent"></div>
            </div>

            {/* Floating Review Badge */}
            <motion.div 
              initial={{ opacity: 0, y: 20 }}
              animate={{ opacity: 1, y: 0 }}
              transition={{ delay: 1, duration: 0.5 }}
              className="absolute -bottom-6 -left-6 bg-white/90 backdrop-blur-md p-6 rounded-[2rem] shadow-xl border border-white/50"
            >
              <div className="flex items-center gap-4">
                <div className="flex -space-x-2">
                  {[1,2,3].map(i => (
                    <div key={i} className="w-10 h-10 rounded-full border-2 border-white bg-stone-200 overflow-hidden relative">
                      <Image src={`https://picsum.photos/seed/user${i}/100/100`} alt="User" fill className="object-cover" referrerPolicy="no-referrer" />
                    </div>
                  ))}
                </div>
                <div>
                  <div className="flex gap-1 mb-1">
                    {[1,2,3,4,5].map(i => <Star key={i} className="w-4 h-4 fill-amber-400 text-amber-400" />)}
                  </div>
                  <p className="text-sm font-bold text-gray-900">119+ Happy Patients</p>
                </div>
              </div>
            </motion.div>
          </motion.div>
        </div>
      </div>
    </section>
  );
}
