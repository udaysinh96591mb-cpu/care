import Link from 'next/link';
import { Smile } from 'lucide-react';

export default function Footer() {
  return (
    <footer className="bg-gray-900 text-stone-300 py-16">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        <div className="grid md:grid-cols-4 gap-12 mb-12 border-b border-gray-800 pb-12">
          <div className="col-span-1 md:col-span-2">
            <div className="flex items-center gap-3 mb-6">
              <div className="w-12 h-12 rounded-full overflow-hidden border-2 border-rose-500 shadow-lg relative">
                <img src="https://picsum.photos/seed/girlsmile/100/100" alt="Girl Smile Logo" className="w-full h-full object-cover" />
              </div>
              <div>
                <h1 className="font-display font-bold text-xl tracking-tight text-white leading-none">SHREEJI</h1>
                <span className="text-[10px] uppercase tracking-widest text-rose-500 font-bold">Dental Clinic</span>
              </div>
            </div>
            <p className="text-gray-400 max-w-sm mb-6">
              Providing advanced dental care and implant solutions in Ahmedabad with a focus on patient comfort and world-class treatments.
            </p>
          </div>

          <div>
            <h4 className="text-white font-bold mb-6">Quick Links</h4>
            <ul className="space-y-3">
              <li><a href="#" className="hover:text-rose-400 transition">Home</a></li>
              <li><a href="#about" className="hover:text-rose-400 transition">About Us</a></li>
              <li><a href="#services" className="hover:text-rose-400 transition">Treatments</a></li>
              <li><a href="#gallery" className="hover:text-rose-400 transition">Smile Gallery</a></li>
              <li><a href="#contact" className="hover:text-rose-400 transition">Contact</a></li>
            </ul>
          </div>

          <div>
            <h4 className="text-white font-bold mb-6">Services</h4>
            <ul className="space-y-3">
              <li><a href="#services" className="hover:text-rose-400 transition">Dental Implants</a></li>
              <li><a href="#services" className="hover:text-rose-400 transition">Root Canal Treatment</a></li>
              <li><a href="#services" className="hover:text-rose-400 transition">Teeth Whitening</a></li>
              <li><a href="#services" className="hover:text-rose-400 transition">Braces & Aligners</a></li>
              <li><Link href="/admin" className="hover:text-rose-400 transition font-medium text-white block mt-6">Admin Login</Link></li>
            </ul>
          </div>
        </div>

        <div className="flex flex-col md:flex-row justify-between items-center gap-4 text-sm text-gray-500">
          <p>&copy; {new Date().getFullYear()} Shreeji Dental Clinic. All rights reserved.</p>
          <div className="flex items-center gap-2">
            <span>Powered by AI Studio</span>
          </div>
        </div>
      </div>
    </footer>
  );
}
