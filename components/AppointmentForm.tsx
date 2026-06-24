'use client';

import { useState } from 'react';
import { motion } from 'motion/react';
import { Calendar as CalendarIcon, Clock, AlertCircle } from 'lucide-react';

export default function AppointmentForm() {
  const [formData, setFormData] = useState({
    name: '',
    phone: '',
    email: '',
    treatment: '',
    date: '',
    message: ''
  });

  const [submitted, setSubmitted] = useState(false);

  const handleSubmit = (e: React.FormEvent) => {
    e.preventDefault();
    
    // Save to localStorage for admin dashboard
    const newBooking = {
      id: Date.now().toString(),
      ...formData,
      status: 'Pending',
      createdAt: new Date().toISOString()
    };
    
    const existingStr = localStorage.getItem('dental_bookings');
    const existing = existingStr ? JSON.parse(existingStr) : [];
    localStorage.setItem('dental_bookings', JSON.stringify([newBooking, ...existing]));
    
    setSubmitted(true);
    setTimeout(() => {
      setSubmitted(false);
      setFormData({ name: '', phone: '', email: '', treatment: '', date: '', message: '' });
    }, 5000);
  };

  const handleChange = (e: React.ChangeEvent<HTMLInputElement | HTMLSelectElement | HTMLTextAreaElement>) => {
    setFormData({ ...formData, [e.target.name]: e.target.value });
  };

  const today = new Date().toISOString().split('T')[0];

  return (
    <section id="book" className="py-24 bg-white relative">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 relative z-10">
        
        <div className="text-center max-w-3xl mx-auto mb-16">
          <h2 className="text-3xl md:text-5xl font-display font-bold text-gray-900 mb-6">Book Your Appointment</h2>
          <p className="text-lg text-gray-600">Schedule your visit with our expert dental team. We will get back to you to confirm your appointment.</p>
        </div>

        <div className="max-w-3xl mx-auto">
          <motion.div 
            initial={{ opacity: 0, y: 20 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true }}
            className="bg-stone-50 p-8 md:p-12 rounded-[2.5rem] shadow-xl border border-stone-100"
          >
            {submitted ? (
              <div className="text-center py-12">
                <div className="w-20 h-20 bg-green-100 rounded-full flex items-center justify-center mx-auto mb-6">
                  <svg className="w-10 h-10 text-green-500" fill="none" stroke="currentColor" viewBox="0 0 24 24"><path strokeLinecap="round" strokeLinejoin="round" strokeWidth="2" d="M5 13l4 4L19 7"></path></svg>
                </div>
                <h3 className="text-2xl font-display font-bold text-gray-900 mb-2">Request Received!</h3>
                <p className="text-gray-600">Thank you for booking with Shreeji Dental Clinic. We will contact you shortly to confirm your slot.</p>
              </div>
            ) : (
              <form onSubmit={handleSubmit} className="space-y-6">
                <div className="grid grid-cols-1 md:grid-cols-2 gap-6">
                  <div>
                    <label className="block text-sm font-medium text-gray-700 mb-2">Full Name *</label>
                    <input required type="text" name="name" value={formData.name} onChange={handleChange} className="w-full px-4 py-3 rounded-xl border border-stone-200 focus:ring-2 focus:ring-rose-500 focus:border-transparent outline-none transition bg-white" placeholder="John Doe" />
                  </div>
                  <div>
                    <label className="block text-sm font-medium text-gray-700 mb-2">Phone Number *</label>
                    <input required type="tel" name="phone" value={formData.phone} onChange={handleChange} className="w-full px-4 py-3 rounded-xl border border-stone-200 focus:ring-2 focus:ring-rose-500 focus:border-transparent outline-none transition bg-white" placeholder="+91 90000 00000" />
                  </div>
                </div>

                <div className="grid grid-cols-1 md:grid-cols-2 gap-6">
                  <div>
                    <label className="block text-sm font-medium text-gray-700 mb-2">Email Address</label>
                    <input type="email" name="email" value={formData.email} onChange={handleChange} className="w-full px-4 py-3 rounded-xl border border-stone-200 focus:ring-2 focus:ring-rose-500 focus:border-transparent outline-none transition bg-white" placeholder="john@example.com" />
                  </div>
                  <div>
                    <label className="block text-sm font-medium text-gray-700 mb-2">Treatment Required *</label>
                    <select required name="treatment" value={formData.treatment} onChange={handleChange} className="w-full px-4 py-3 rounded-xl border border-stone-200 focus:ring-2 focus:ring-rose-500 focus:border-transparent outline-none transition bg-white">
                      <option value="">Select Treatment</option>
                      <option value="General Checkup">General Checkup</option>
                      <option value="Dental Implants">Dental Implants</option>
                      <option value="Root Canal">Root Canal Treatment</option>
                      <option value="Teeth Whitening">Teeth Whitening</option>
                      <option value="Smile Designing">Smile Designing</option>
                      <option value="Braces & Aligners">Braces & Aligners</option>
                      <option value="Other">Other</option>
                    </select>
                  </div>
                </div>

                <div>
                  <label className="block text-sm font-medium text-gray-700 mb-2">Preferred Date *</label>
                  <input required type="date" name="date" min={today} value={formData.date} onChange={handleChange} className="w-full px-4 py-3 rounded-xl border border-stone-200 focus:ring-2 focus:ring-rose-500 focus:border-transparent outline-none transition bg-white" />
                </div>

                <div>
                  <label className="block text-sm font-medium text-gray-700 mb-2">Message (Optional)</label>
                  <textarea name="message" value={formData.message} onChange={handleChange} rows={4} className="w-full px-4 py-3 rounded-xl border border-stone-200 focus:ring-2 focus:ring-rose-500 focus:border-transparent outline-none transition bg-white resize-none" placeholder="Any specific concerns?"></textarea>
                </div>

                <button type="submit" className="w-full bg-rose-500 text-white py-4 rounded-xl font-medium hover:bg-rose-600 transition shadow-lg shadow-rose-500/20 text-lg">
                  Submit
                </button>
              </form>
            )}
          </motion.div>
        </div>

        {/* Emergency and Working Hours below the form */}
        <div className="max-w-5xl mx-auto mt-16 grid grid-cols-1 md:grid-cols-2 gap-8">
          <motion.div 
            initial={{ opacity: 0, x: -20 }}
            whileInView={{ opacity: 1, x: 0 }}
            viewport={{ once: true }}
            className="bg-rose-50 p-8 rounded-[2rem] border border-rose-100 flex items-start gap-6"
          >
            <div className="w-14 h-14 bg-rose-100 rounded-full flex items-center justify-center shrink-0">
              <AlertCircle className="w-7 h-7 text-rose-600" />
            </div>
            <div>
              <h3 className="text-xl font-display font-bold text-gray-900 mb-2">Emergency Cases</h3>
              <p className="text-gray-600 mb-4 text-sm">We handle dental emergencies with priority. If you have severe pain or injury, call us immediately.</p>
              <a href="tel:+917878505140" className="text-rose-600 font-bold hover:underline text-lg">078785 05140</a>
            </div>
          </motion.div>

          <motion.div 
            initial={{ opacity: 0, x: 20 }}
            whileInView={{ opacity: 1, x: 0 }}
            viewport={{ once: true }}
            className="bg-white p-8 rounded-[2rem] border border-stone-200 shadow-sm flex items-start gap-6"
          >
            <div className="w-14 h-14 bg-stone-100 rounded-full flex items-center justify-center shrink-0">
              <Clock className="w-7 h-7 text-gray-600" />
            </div>
            <div className="w-full">
              <h3 className="text-xl font-display font-bold text-gray-900 mb-4">Working Hours</h3>
              <ul className="space-y-3 text-sm text-gray-600">
                <li className="flex justify-between items-center border-b border-stone-100 pb-2">
                  <span className="font-medium">Monday - Saturday</span>
                  <span>10:00 AM - 8:30 PM</span>
                </li>
                <li className="flex justify-between items-center pt-1 text-rose-600 font-medium">
                  <span>Sunday</span>
                  <span>Closed</span>
                </li>
              </ul>
            </div>
          </motion.div>
        </div>

      </div>
    </section>
  );
}
