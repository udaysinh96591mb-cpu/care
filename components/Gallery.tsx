'use client';

import { motion } from 'motion/react';
import Image from 'next/image';

const galleryItems = [
  { title: "Teeth Whitening", img: "https://picsum.photos/seed/teeth1/600/400" },
  { title: "Dental Implants", img: "https://picsum.photos/seed/teeth2/600/400" },
  { title: "Smile Designing", img: "https://picsum.photos/seed/teeth3/600/400" },
  { title: "Ceramic Crowns", img: "https://picsum.photos/seed/teeth4/600/400" },
];

export default function Gallery() {
  return (
    <section id="gallery" className="py-24 bg-stone-50">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        <div className="text-center max-w-3xl mx-auto mb-16">
          <span className="text-rose-500 font-bold tracking-wider uppercase text-sm mb-4 block">Smile Transformations</span>
          <h2 className="text-3xl md:text-5xl font-display font-bold text-gray-900 mb-6">Before & After Gallery</h2>
          <p className="text-lg text-gray-600">See the real results we have achieved for our patients.</p>
        </div>

        <div className="grid md:grid-cols-2 gap-8">
          {galleryItems.map((item, i) => (
            <motion.div 
              key={i}
              initial={{ opacity: 0, y: 20 }}
              whileInView={{ opacity: 1, y: 0 }}
              viewport={{ once: true }}
              transition={{ delay: i * 0.1 }}
              className="group relative h-64 md:h-80 rounded-[2rem] overflow-hidden shadow-lg"
            >
              <Image 
                src={item.img} 
                alt={item.title} 
                fill 
                className="object-cover group-hover:scale-105 transition duration-700"
                referrerPolicy="no-referrer"
              />
              <div className="absolute inset-0 bg-gradient-to-t from-black/70 via-black/20 to-transparent"></div>
              <div className="absolute bottom-0 left-0 w-full p-8">
                <h3 className="text-white font-display font-bold text-2xl">{item.title}</h3>
                <p className="text-white/80 mt-1">Successful Case</p>
              </div>
            </motion.div>
          ))}
        </div>
      </div>
    </section>
  );
}
