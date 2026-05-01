import React from 'react';
import { motion } from 'motion/react';
import { MessageCircle } from 'lucide-react';

const FloatingWhatsApp = () => {
    return (
        <motion.a
           initial={{ scale: 0, opacity: 0 }}
           animate={{ scale: 1, opacity: 1 }}
           transition={{ delay: 1 }}
           href="https://wa.me/919876543210" 
           target="_blank"
           rel="noreferrer"
           className="fixed bottom-6 right-6 z-50 w-16 h-16 bg-[#25D366] text-white rounded-full flex items-center justify-center shadow-[0_8px_30px_rgb(37,211,102,0.3)] hover:scale-110 transition-transform cursor-pointer"
        >
            <MessageCircle className="w-8 h-8" />
        </motion.a>
    )
}

export default FloatingWhatsApp;
