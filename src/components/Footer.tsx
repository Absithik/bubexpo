import React from 'react';
import { Phone, MessageCircle, Instagram } from 'lucide-react';

const Footer = () => {
  return (
    <footer className="py-12 bg-gray-950 text-gray-400 border-t border-gray-900 border-opacity-50">
      <div className="max-w-7xl mx-auto px-6 lg:px-20 py-8 lg:py-12">
        <div className="grid md:grid-cols-2 gap-10 lg:gap-20 items-center">
            
          <div>
             <div className="flex items-center gap-2 mb-6">
                <div className="w-8 h-8 bg-primary flex items-center justify-center rounded font-heading font-black text-white">B</div>
                <span className="font-heading font-bold text-xl tracking-tight text-white">BUB EXPO 2026</span>
              </div>
             <p className="mb-6 max-w-sm">
               The biggest 3-day mega business expo happening this August in Salem.
             </p>
             <p className="text-sm font-semibold tracking-wider text-gray-500 uppercase">Presented by JCOML Salem 1.0</p>
          </div>

          <div className="flex flex-col md:items-end gap-4">
             <div className="flex flex-col gap-3">
                 <a href="tel:+919876543210" className="flex items-center gap-3 hover:text-white transition-colors group">
                   <span className="w-10 h-10 rounded-full bg-gray-900 flex items-center justify-center group-hover:bg-primary transition-colors text-white">
                      <Phone className="w-4 h-4" />
                   </span>
                   <span className="font-medium">Call Us</span>
                 </a>
                 <a href="https://wa.me/919876543210" target="_blank" rel="noreferrer" className="flex items-center gap-3 hover:text-green-400 transition-colors group">
                   <span className="w-10 h-10 rounded-full bg-gray-900 flex items-center justify-center group-hover:bg-green-500 transition-colors text-white">
                      <MessageCircle className="w-4 h-4" />
                   </span>
                   <span className="font-medium">WhatsApp</span>
                 </a>
                 <a href="#" className="flex items-center gap-3 hover:text-pink-400 transition-colors group">
                   <span className="w-10 h-10 rounded-full bg-gray-900 flex items-center justify-center group-hover:bg-pink-500 transition-colors text-white">
                      <Instagram className="w-4 h-4" />
                   </span>
                   <span className="font-medium">Instagram</span>
                 </a>
             </div>
          </div>
        </div>
      </div>
    </footer>
  );
};

export default Footer;
