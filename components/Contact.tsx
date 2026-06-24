'use client';

import { motion } from 'motion/react';
import { MapPin, Phone, Mail, Clock, MessageSquare } from 'lucide-react';

export default function Contact() {
  return (
    <section id="contact" className="py-24 bg-stone-50">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        <div className="grid lg:grid-cols-2 gap-12 bg-white rounded-[3rem] overflow-hidden shadow-xl border border-stone-100">
          <div className="p-8 md:p-16">
            <h2 className="text-3xl md:text-5xl font-display font-bold text-gray-900 mb-6">Get in Touch</h2>
            <p className="text-gray-600 mb-12">Have a question or need to book an appointment? Reach out to us directly.</p>

            <div className="space-y-8">
              <div className="flex gap-4">
                <div className="w-12 h-12 bg-rose-50 rounded-2xl flex items-center justify-center shrink-0 text-rose-500">
                  <MapPin className="w-6 h-6" />
                </div>
                <div>
                  <h4 className="font-bold text-gray-900 mb-1">Clinic Address</h4>
                  <p className="text-gray-600 leading-relaxed">
                    313, Ground Floor, Navtad Pole Road Side,<br/>
                    Opp. Moti Hamam Pole, Near Gheekanta Judicial Court,<br/>
                    Old Sandes Press Road, Gheekanta,<br/>
                    Ahmedabad, Gujarat – 380001
                  </p>
                </div>
              </div>

              <div className="flex gap-4">
                <div className="w-12 h-12 bg-rose-50 rounded-2xl flex items-center justify-center shrink-0 text-rose-500">
                  <Phone className="w-6 h-6" />
                </div>
                <div>
                  <h4 className="font-bold text-gray-900 mb-1">Phone Number</h4>
                  <a href="tel:+919099901093" className="text-rose-600 font-bold hover:underline block">+91 90999 01093</a>
                  <a href="https://wa.me/919099901093" target="_blank" rel="noreferrer" className="text-green-600 font-medium hover:underline text-sm inline-flex items-center gap-1 mt-1">
                    <MessageSquare className="w-4 h-4" /> WhatsApp Us
                  </a>
                </div>
              </div>

              <div className="flex gap-4">
                <div className="w-12 h-12 bg-rose-50 rounded-2xl flex items-center justify-center shrink-0 text-rose-500">
                  <Clock className="w-6 h-6" />
                </div>
                <div>
                  <h4 className="font-bold text-gray-900 mb-1">Business Hours</h4>
                  <p className="text-gray-600">Mon - Sat: 10:00 AM - 8:30 PM</p>
                  <p className="text-gray-600">Sunday: Closed</p>
                </div>
              </div>
            </div>
          </div>

          <div className="h-full min-h-[400px] w-full bg-stone-200">
            {/* Google Maps Embed */}
            <iframe 
              src="https://www.google.com/maps/embed?pb=!1m18!1m12!1m3!1d3671.939228308726!2d72.58371017500135!3d23.025983616203173!2m3!1f0!2f0!3f0!3m2!1i1024!2i768!4f13.1!3m3!1m2!1s0x395e85236bdc9d3d%3A0xcb792eee6b5f9889!2sMY%20CARE%20DENTAL%20HOSPITAL%20%26%20IMPLANT%20CENTRE!5e0!3m2!1sen!2sin!4v1716120000000!5m2!1sen!2sin" 
              width="100%" 
              height="100%" 
              style={{ border: 0 }} 
              allowFullScreen={true} 
              loading="lazy" 
              referrerPolicy="no-referrer-when-downgrade"
              className="w-full h-full grayscale hover:grayscale-0 transition duration-500"
            ></iframe>
          </div>
        </div>
      </div>
    </section>
  );
}
