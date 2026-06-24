'use client';

import { useState, useEffect } from 'react';
import { motion } from 'motion/react';
import Link from 'next/link';
import { ArrowLeft, Trash2, Calendar, Clock, Phone, User, Stethoscope, AlertCircle } from 'lucide-react';

export default function AdminDashboard() {
  const [bookings, setBookings] = useState<any[]>([]);
  const [isClient, setIsClient] = useState(false);
  const [confirmClear, setConfirmClear] = useState(false);

  useEffect(() => {
    setIsClient(true);
    const savedBookings = localStorage.getItem('dental_bookings');
    if (savedBookings) {
      try {
        setBookings(JSON.parse(savedBookings));
      } catch (e) {
        console.error(e);
      }
    }
  }, []);

  const saveBookings = (newBookings: any[]) => {
    setBookings(newBookings);
    localStorage.setItem('dental_bookings', JSON.stringify(newBookings));
  };

  const updateStatus = (id: string, status: string) => {
    const updated = bookings.map(b => b.id === id ? { ...b, status } : b);
    saveBookings(updated);
  };

  const deleteBooking = (id: string) => {
    const updated = bookings.filter(b => b.id !== id);
    saveBookings(updated);
  };

  const clearAll = () => {
    if (!confirmClear) {
      setConfirmClear(true);
      setTimeout(() => setConfirmClear(false), 3000); // Reset after 3s
      return;
    }
    saveBookings([]);
    setConfirmClear(false);
  };

  const getStatusColor = (status: string) => {
    switch(status) {
      case 'Confirmed': return 'bg-green-100 text-green-700 border-green-300';
      case 'Waiting': return 'bg-blue-100 text-blue-700 border-blue-300';
      case 'Cancelled': return 'bg-red-100 text-red-700 border-red-300';
      default: return 'bg-yellow-100 text-yellow-700 border-yellow-300';
    }
  };

  const getStatusLineColor = (status: string) => {
    switch(status) {
      case 'Confirmed': return 'bg-green-500';
      case 'Waiting': return 'bg-blue-500';
      case 'Cancelled': return 'bg-red-500';
      default: return 'bg-yellow-500';
    }
  };

  if (!isClient) return null;

  return (
    <div className="min-h-screen bg-[#faf9f8] p-4 md:p-8">
      <div className="max-w-6xl mx-auto">
        <div className="flex flex-col md:flex-row justify-between items-center mb-8 gap-4">
          <div className="flex items-center gap-4">
            <Link href="/" className="p-2 bg-white rounded-full shadow-sm hover:bg-stone-50 transition">
              <ArrowLeft className="w-5 h-5 text-gray-600" />
            </Link>
            <h1 className="text-3xl font-display font-bold text-gray-900">Admin Dashboard</h1>
          </div>
          
          <button 
            onClick={clearAll}
            className={`px-4 py-2 rounded-xl transition font-medium flex items-center gap-2 ${confirmClear ? 'bg-red-600 text-white' : 'bg-white text-red-600 border border-red-200 hover:bg-red-50'}`}
          >
            <Trash2 className="w-4 h-4" />
            {confirmClear ? 'Confirm Clear?' : 'Clear All'}
          </button>
        </div>

        <div className="grid gap-6">
          {bookings.length === 0 ? (
            <div className="bg-white p-12 rounded-[2rem] shadow-sm text-center border border-stone-100">
              <AlertCircle className="w-12 h-12 text-gray-300 mx-auto mb-4" />
              <h3 className="text-xl font-display font-medium text-gray-500">No appointments yet</h3>
              <p className="text-gray-400 mt-2">New bookings will appear here.</p>
            </div>
          ) : (
            bookings.map((booking, index) => (
              <motion.div 
                initial={{ opacity: 0, y: 20 }}
                animate={{ opacity: 1, y: 0 }}
                transition={{ delay: index * 0.05 }}
                key={booking.id} 
                className="bg-white rounded-[2rem] shadow-sm border border-stone-100 overflow-hidden relative flex flex-col md:flex-row"
              >
                {/* Status Line */}
                <div className={`w-2 absolute left-0 top-0 bottom-0 ${getStatusLineColor(booking.status || 'Pending')}`}></div>
                
                <div className="p-6 md:p-8 flex-1 pl-8 md:pl-10">
                  <div className="flex justify-between items-start mb-4">
                    <div>
                      <h3 className="text-xl font-display font-bold text-gray-900">{booking.name}</h3>
                      <span className={`inline-block px-3 py-1 rounded-full text-xs font-medium mt-2 border ${getStatusColor(booking.status || 'Pending')}`}>
                        {booking.status || 'Pending'}
                      </span>
                    </div>
                    <button 
                      onClick={() => deleteBooking(booking.id)}
                      className="p-2 text-gray-400 hover:text-red-500 hover:bg-red-50 rounded-full transition"
                      title="Delete Booking"
                    >
                      <Trash2 className="w-5 h-5" />
                    </button>
                  </div>

                  <div className="grid grid-cols-1 md:grid-cols-2 gap-4 text-gray-600 mb-6">
                    <div className="flex items-center gap-3">
                      <Phone className="w-4 h-4 text-rose-500" />
                      <a href={`tel:${booking.phone}`} className="hover:text-rose-600 font-medium">{booking.phone}</a>
                    </div>
                    <div className="flex items-center gap-3">
                      <User className="w-4 h-4 text-rose-500" />
                      <span>{booking.email || 'No email provided'}</span>
                    </div>
                    <div className="flex items-center gap-3">
                      <Calendar className="w-4 h-4 text-rose-500" />
                      <span className="font-medium text-gray-900">{booking.date}</span>
                    </div>
                    <div className="flex items-center gap-3">
                      <Stethoscope className="w-4 h-4 text-rose-500" />
                      <span className="bg-rose-50 text-rose-700 px-2 py-1 rounded-md text-sm">{booking.treatment}</span>
                    </div>
                  </div>

                  {booking.message && (
                    <div className="bg-stone-50 p-4 rounded-2xl text-sm text-gray-700 border border-stone-100">
                      <strong>Message: </strong> {booking.message}
                    </div>
                  )}

                  <div className="flex flex-wrap gap-2 mt-6 pt-6 border-t border-stone-100">
                    <span className="text-sm font-medium text-gray-500 w-full mb-1">Update Status:</span>
                    <button onClick={() => updateStatus(booking.id, 'Pending')} className="px-4 py-2 text-sm rounded-xl bg-gray-100 text-gray-700 hover:bg-gray-200 transition">Pending</button>
                    <button onClick={() => updateStatus(booking.id, 'Waiting')} className="px-4 py-2 text-sm rounded-xl bg-blue-50 text-blue-700 hover:bg-blue-100 transition">Waiting</button>
                    <button onClick={() => updateStatus(booking.id, 'Confirmed')} className="px-4 py-2 text-sm rounded-xl bg-green-50 text-green-700 hover:bg-green-100 transition">Confirmed</button>
                    <button onClick={() => updateStatus(booking.id, 'Cancelled')} className="px-4 py-2 text-sm rounded-xl bg-red-50 text-red-700 hover:bg-red-100 transition">Cancel</button>
                  </div>
                </div>
              </motion.div>
            ))
          )}
        </div>
      </div>
    </div>
  );
}
