'use client';

import { motion } from 'motion/react';
import Image from 'next/image';
import { Star, Quote } from 'lucide-react';

const testimonials = [
  {
    name: "Rahul Sharma",
    text: "Excellent service and friendly staff. The clinic is very clean and the doctors are highly professional. Highly recommended for any dental issues.",
    img: "https://picsum.photos/seed/user10/100/100"
  },
  {
    name: "Priya Patel",
    text: "Doctor's nature is very supportive and caring. They explained the entire implant procedure clearly and the treatment was completely painless.",
    img: "https://picsum.photos/seed/user11/100/100"
  },
  {
    name: "Amit Desai",
    text: "Affordable treatment with excellent results. Got my root canal done here and the experience was much better than I expected.",
    img: "https://picsum.photos/seed/user12/100/100"
  }
];

export default function Testimonials() {
  return (
    <section className="py-24 bg-white relative overflow-hidden">
      <div className="absolute top-0 right-0 w-96 h-96 bg-rose-50 rounded-full blur-3xl -translate-y-1/2 translate-x-1/2"></div>
      <div className="absolute bottom-0 left-0 w-96 h-96 bg-rose-50 rounded-full blur-3xl translate-y-1/2 -translate-x-1/2"></div>
      
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 relative z-10">
        <div className="text-center max-w-3xl mx-auto mb-16">
          <div className="inline-flex items-center gap-2 px-4 py-2 rounded-full bg-stone-100 text-gray-900 font-bold mb-6">
            <Star className="w-5 h-5 fill-amber-400 text-amber-400" />
            <span>4.9/5 Rating from 119+ Reviews on Google</span>
          </div>
          <h2 className="text-3xl md:text-5xl font-display font-bold text-gray-900 mb-6">What Our Patients Say</h2>
        </div>

        <div className="grid md:grid-cols-3 gap-8">
          {testimonials.map((test, i) => (
            <motion.div 
              key={i}
              initial={{ opacity: 0, y: 20 }}
              whileInView={{ opacity: 1, y: 0 }}
              viewport={{ once: true }}
              transition={{ delay: i * 0.1 }}
              className="bg-stone-50 p-8 rounded-[2.5rem] border border-stone-100 relative shadow-sm hover:shadow-xl hover:shadow-rose-100/50 transition duration-300"
            >
              <Quote className="absolute top-6 right-8 w-10 h-10 text-rose-100 rotate-180" />
              <div className="flex gap-1 mb-6">
                {[1,2,3,4,5].map(star => <Star key={star} className="w-5 h-5 fill-amber-400 text-amber-400" />)}
              </div>
              <p className="text-gray-700 mb-8 relative z-10">"{test.text}"</p>
              
              <div className="flex items-center gap-4 mt-auto">
                <div className="relative w-12 h-12 rounded-full overflow-hidden">
                  <Image src={test.img} alt={test.name} fill className="object-cover" referrerPolicy="no-referrer" />
                </div>
                <div>
                  <h4 className="font-bold text-gray-900">{test.name}</h4>
                  <span className="text-sm text-gray-500">Verified Patient</span>
                </div>
              </div>
            </motion.div>
          ))}
        </div>
      </div>
    </section>
  );
}
