import React, { useState } from 'react';
import { motion, AnimatePresence } from 'motion/react';
import { Phone } from 'lucide-react';

const RegistrationForm = () => {
  const [status, setStatus] = useState<'idle' | 'submitting' | 'success'>('idle');

  const handleSubmit = (e: React.FormEvent) => {
    e.preventDefault();
    setStatus('submitting');
    // Simulate submission
    setTimeout(() => {
      setStatus('success');
      setTimeout(() => setStatus('idle'), 3000);
    }, 1000);
  };

  return (
    <section id="register" className="py-20 lg:py-28 px-6 lg:px-20 bg-gray-900 text-white relative overflow-hidden">
      {/* Decorative bg */}
      <div className="absolute inset-0 opacity-10 pointer-events-none" style={{ backgroundImage: 'radial-gradient(circle at 100% 0%, #FF6B00 0%, transparent 40%), radial-gradient(circle at 0% 100%, #FF6B00 0%, transparent 40%)'}}></div>
      
      <div className="max-w-5xl mx-auto flex flex-col lg:flex-row gap-12 lg:gap-20 relative z-10">
        <div className="flex-1 lg:py-10">
          <motion.div
            initial={{ opacity: 0, x: -20 }}
            whileInView={{ opacity: 1, x: 0 }}
            viewport={{ once: true }}
          >
            <h2 className="text-4xl lg:text-6xl font-black font-heading mb-6 tracking-tight">Don't Miss Out<br/>Register Interest</h2>
            <p className="text-xl text-gray-400 mb-8 font-medium">Be the first to know when official bookings and tickets open for Salem's biggest business event.</p>
            
            <div className="space-y-6">
              <div className="flex items-center gap-4 text-gray-300">
                <div className="w-12 h-12 rounded-full bg-white/10 flex items-center justify-center shrink-0">
                  <Phone className="w-5 h-5 text-primary" />
                </div>
                <div>
                  <p className="text-sm text-gray-500 font-semibold mb-1 uppercase tracking-wider">For Immediate Queries</p>
                  <p className="text-xl font-bold">+91 98765 43210</p>
                </div>
              </div>
            </div>
          </motion.div>
        </div>
        
        <div className="flex-1 w-full max-w-md mx-auto lg:mx-0">
          <motion.div
            initial={{ opacity: 0, y: 20 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true }}
            className="bg-white text-gray-900 p-8 rounded-3xl shadow-2xl"
          >
            <form onSubmit={handleSubmit} className="flex flex-col gap-4">
              <div>
                <label htmlFor="name" className="block text-sm font-bold text-gray-700 mb-1.5">Full Name</label>
                <input required type="text" id="name" className="w-full px-4 py-3 bg-gray-50 border border-gray-200 rounded-xl focus:ring-2 focus:ring-primary focus:border-primary outline-none transition-all" placeholder="John Doe" />
              </div>
              
              <div>
                <label htmlFor="mobile" className="block text-sm font-bold text-gray-700 mb-1.5">Mobile Number</label>
                <input required type="tel" id="mobile" className="w-full px-4 py-3 bg-gray-50 border border-gray-200 rounded-xl focus:ring-2 focus:ring-primary focus:border-primary outline-none transition-all" placeholder="+91 00000 00000" />
              </div>
              
              <div>
                <label htmlFor="company" className="block text-sm font-bold text-gray-700 mb-1.5">Company / Business Name</label>
                <input type="text" id="company" className="w-full px-4 py-3 bg-gray-50 border border-gray-200 rounded-xl focus:ring-2 focus:ring-primary focus:border-primary outline-none transition-all" placeholder="Acme Corp" />
              </div>

              <div>
                <label htmlFor="interest" className="block text-sm font-bold text-gray-700 mb-1.5">I am interested as a...</label>
                <select id="interest" required defaultValue="" className="w-full px-4 py-3 bg-gray-50 border border-gray-200 rounded-xl focus:ring-2 focus:ring-primary focus:border-primary outline-none transition-all appearance-none cursor-pointer">
                  <option value="" disabled>Select an option</option>
                  <option value="exhibitor">Exhibitor (Book Stall)</option>
                  <option value="sponsor">Sponsor</option>
                  <option value="visitor">Visitor / Attendee</option>
                  <option value="other">Other</option>
                </select>
              </div>

              <button 
                type="submit" 
                disabled={status === 'submitting' || status === 'success'}
                className="w-full h-14 mt-4 bg-primary text-white font-bold rounded-xl hover:bg-foreground transition-all flex items-center justify-center disabled:opacity-70 disabled:cursor-not-allowed"
              >
                <AnimatePresence mode="wait">
                  {status === 'idle' && (
                    <motion.span
                      key="idle"
                      initial={{ opacity: 0, y: 5 }}
                      animate={{ opacity: 1, y: 0 }}
                      exit={{ opacity: 0, y: -5 }}
                      transition={{ duration: 0.2 }}
                    >
                      Register Interest
                    </motion.span>
                  )}
                  {status === 'submitting' && (
                    <motion.span
                      key="submitting"
                       initial={{ opacity: 0 }}
                      animate={{ opacity: [0.5, 1, 0.5] }}
                      exit={{ opacity: 0 }}
                      transition={{ duration: 1.5, repeat: Infinity, ease: "easeInOut" }}
                    >
                      Submitting...
                    </motion.span>
                  )}
                  {status === 'success' && (
                    <motion.span
                      key="success"
                      initial={{ opacity: 0, y: 5 }}
                      animate={{ opacity: 1, y: 0 }}
                      transition={{ duration: 0.4 }}
                    >
                      Done! We will connect soon.
                    </motion.span>
                  )}
                </AnimatePresence>
              </button>
            </form>
          </motion.div>
        </div>
      </div>
    </section>
  );
};

export default RegistrationForm;
