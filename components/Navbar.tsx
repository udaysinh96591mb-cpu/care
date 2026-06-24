'use client';

import { useState } from 'react';
import Link from 'next/link';
import { motion } from 'motion/react';
import { Menu, X, Smile } from 'lucide-react';

export default function Navbar() {
  const [isOpen, setIsOpen] = useState(false);

  const links = [
    { name: 'Home', href: '/' },
    { name: 'Services', href: '#services' },
    { name: 'About', href: '#about' },
    { name: 'Gallery', href: '#gallery' },
    { name: 'Contact', href: '#contact' },
  ];

  return (
    <header className="sticky top-0 z-50 bg-white/80 backdrop-blur-lg border-b border-stone-200/50">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        <div className="flex justify-between items-center h-20">
          <div className="flex items-center gap-3">
            <div className="w-12 h-12 rounded-full overflow-hidden border-2 border-rose-500 shadow-lg shadow-rose-500/20 relative">
              <img src="https://picsum.photos/seed/girlsmile/100/100" alt="Girl Smile Logo" className="w-full h-full object-cover" />
            </div>
            <div>
              <h1 className="font-display font-bold text-xl tracking-tight text-gray-900 leading-none">SHREEJI</h1>
              <span className="text-[10px] uppercase tracking-widest text-rose-500 font-bold">Dental Clinic</span>
            </div>
          </div>

          <nav className="hidden md:flex items-center gap-8">
            {links.map((link) => (
              <a key={link.name} href={link.href} className="text-sm font-medium text-gray-600 hover:text-rose-500 transition-colors">
                {link.name}
              </a>
            ))}
            <Link href="/admin" className="text-sm font-medium text-gray-600 hover:text-rose-500 transition-colors">
              Admin
            </Link>
            <a href="#book" className="bg-rose-500 text-white px-6 py-2.5 rounded-full text-sm font-medium hover:bg-rose-600 transition shadow-lg shadow-rose-500/25">
              Book Appointment
            </a>
          </nav>

          <button className="md:hidden p-2 text-gray-600" onClick={() => setIsOpen(!isOpen)}>
            {isOpen ? <X className="w-6 h-6" /> : <Menu className="w-6 h-6" />}
          </button>
        </div>
      </div>

      {isOpen && (
        <motion.div 
          initial={{ opacity: 0, y: -10 }} 
          animate={{ opacity: 1, y: 0 }} 
          className="md:hidden absolute top-20 left-0 w-full bg-white border-b border-stone-100 shadow-xl"
        >
          <div className="px-4 py-6 flex flex-col gap-4">
            {links.map((link) => (
              <a 
                key={link.name} 
                href={link.href} 
                className="text-base font-medium text-gray-800 p-2 hover:bg-rose-50 rounded-xl"
                onClick={() => setIsOpen(false)}
              >
                {link.name}
              </a>
            ))}
            <Link 
              href="/admin" 
              className="text-base font-medium text-gray-800 p-2 hover:bg-rose-50 rounded-xl"
              onClick={() => setIsOpen(false)}
            >
              Admin Dashboard
            </Link>
            <a 
              href="#book" 
              onClick={() => setIsOpen(false)}
              className="mt-2 bg-rose-500 text-white text-center px-6 py-3 rounded-xl font-medium"
            >
              Book Appointment
            </a>
          </div>
        </motion.div>
      )}
    </header>
  );
}
