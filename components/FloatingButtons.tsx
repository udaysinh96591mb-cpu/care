'use client';

import { MessageSquare, Phone } from 'lucide-react';

export default function FloatingButtons() {
  return (
    <div className="fixed bottom-6 right-6 z-50 flex flex-col gap-4">
      <a 
        href="tel:+917878505140" 
        className="w-14 h-14 bg-rose-500 text-white rounded-full flex items-center justify-center shadow-lg shadow-rose-500/30 hover:scale-110 hover:bg-rose-600 transition-all duration-300"
        title="Call Clinic"
      >
        <Phone className="w-6 h-6" />
      </a>
      <a 
        href="https://wa.me/917878505140" 
        target="_blank" 
        rel="noreferrer"
        className="w-14 h-14 bg-[#25D366] text-white rounded-full flex items-center justify-center shadow-lg shadow-[#25D366]/30 hover:scale-110 hover:bg-[#20bd5a] transition-all duration-300"
        title="WhatsApp Us"
      >
        <MessageSquare className="w-6 h-6" />
      </a>
    </div>
  );
}
