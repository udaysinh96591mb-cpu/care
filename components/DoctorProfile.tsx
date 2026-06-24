'use client';

import { motion } from 'motion/react';
import Image from 'next/image';
import { Star, Award, BookOpen } from 'lucide-react';

export default function DoctorProfile() {
  return (
    <section className="py-24 bg-white">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        <div className="bg-stone-50 rounded-[3rem] p-8 md:p-16 border border-stone-100">
          <div className="grid lg:grid-cols-2 gap-12 items-center">
            <motion.div 
              initial={{ opacity: 0, scale: 0.95 }}
              whileInView={{ opacity: 1, scale: 1 }}
              viewport={{ once: true }}
              className="relative h-[500px] w-full rounded-[2.5rem] overflow-hidden shadow-xl"
            >
              <Image 
                src="https://images.unsplash.com/photo-1606811841689-23dfddce3e95?auto=format&fit=crop&w=800&q=80" 
                alt="Dr. Jessica - Chief Dental Surgeon" 
                fill 
                className="object-cover"
                referrerPolicy="no-referrer"
              />
            </motion.div>

            <motion.div 
              initial={{ opacity: 0, x: 20 }}
              whileInView={{ opacity: 1, x: 0 }}
              viewport={{ once: true }}
            >
              <span className="text-rose-500 font-bold tracking-wider uppercase text-sm mb-2 block">Meet Our Expert</span>
              <h2 className="text-3xl md:text-5xl font-display font-bold text-gray-900 mb-2">Dr. Jessica</h2>
              <p className="text-xl text-gray-500 mb-8">Chief Dental Surgeon & Implantologist</p>

              <div className="space-y-6 mb-8">
                <div className="flex items-start gap-4">
                  <div className="w-12 h-12 bg-white rounded-2xl flex items-center justify-center shrink-0 shadow-sm">
                    <Award className="w-6 h-6 text-rose-500" />
                  </div>
                  <div>
                    <h4 className="font-bold text-gray-900">Qualifications</h4>
                    <p className="text-gray-600">BDS, MDS (Oral & Maxillofacial Surgery)</p>
                  </div>
                </div>
                
                <div className="flex items-start gap-4">
                  <div className="w-12 h-12 bg-white rounded-2xl flex items-center justify-center shrink-0 shadow-sm">
                    <BookOpen className="w-6 h-6 text-rose-500" />
                  </div>
                  <div>
                    <h4 className="font-bold text-gray-900">Experience</h4>
                    <p className="text-gray-600">10+ Years of clinical excellence</p>
                  </div>
                </div>

                <div className="flex items-start gap-4">
                  <div className="w-12 h-12 bg-white rounded-2xl flex items-center justify-center shrink-0 shadow-sm">
                    <Star className="w-6 h-6 text-rose-500" />
                  </div>
                  <div>
                    <h4 className="font-bold text-gray-900">Specializations</h4>
                    <p className="text-gray-600">Dental Implants, Full Mouth Rehab, Smile Designing</p>
                  </div>
                </div>
              </div>

              <div className="bg-white p-6 rounded-2xl border border-stone-100 shadow-sm">
                <div className="flex gap-1 mb-2">
                  {[1,2,3,4,5].map(i => <Star key={i} className="w-5 h-5 fill-amber-400 text-amber-400" />)}
                </div>
                <p className="italic text-gray-700">"Doctor's nature is very supportive and caring. Excellent treatment with proper guidance."</p>
              </div>
            </motion.div>
          </div>
        </div>
      </div>
    </section>
  );
}
