import React, { useState, useEffect } from 'react';
import { MessageSquare, Send, X, ArrowUpRight, ShieldCheck } from 'lucide-react';
import { motion, AnimatePresence } from 'motion/react';

export default function FloatingWhatsApp() {
  const [isOpen, setIsOpen] = useState(false);
  const [typedMessage, setTypedMessage] = useState('');
  const [alertBadge, setAlertBadge] = useState(false);

  // Trigger pulse badge overlay after 5 seconds to call attention elegantly without irritation
  useEffect(() => {
    const timer = setTimeout(() => {
      setAlertBadge(true);
    }, 5000);
    return () => clearTimeout(timer);
  }, []);

  const handleMessageSend = (e: React.FormEvent) => {
    e.preventDefault();
    if (!typedMessage.trim()) return;

    // Build real Whatsapp API deep link with custom typed client message!
    const encoded = encodeURIComponent(typedMessage);
    const waUrl = `https://wa.me/94771234567?text=${encoded}`;
    
    window.open(waUrl, '_blank', 'noopener,noreferrer');
    
    setTypedMessage('');
    setIsOpen(false);
  };

  return (
    <div id="whatsapp-widget-container" className="fixed bottom-6 right-6 z-40 flex flex-col items-end">
      {/* Floating expanded messenger drawer */}
      <AnimatePresence>
        {isOpen && (
          <motion.div
            id="whatsapp-chat-box"
            initial={{ opacity: 0, y: 30, scale: 0.9 }}
            animate={{ opacity: 1, y: 0, scale: 1 }}
            exit={{ opacity: 0, y: 30, scale: 0.9 }}
            transition={{ type: 'spring', stiffness: 300, damping: 25 }}
            className="mb-4 w-80 sm:w-85 bg-neutral-950 border border-neutral-800 rounded-3xl overflow-hidden shadow-2xl"
          >
            {/* Header */}
            <div className="bg-emerald-600 p-4 flex items-center justify-between text-white">
              <div className="flex items-center space-x-3">
                <div className="relative">
                  <div className="w-10 h-10 rounded-full bg-emerald-950 flex items-center justify-center font-bold border border-emerald-400/40 text-emerald-305 text-emerald-300">
                    WL
                  </div>
                  {/* Alive status dot */}
                  <span className="absolute bottom-0 right-0 w-3 h-3 bg-green-455 bg-green-400 rounded-full border-2 border-emerald-600 animate-pulse" />
                </div>
                <div>
                  <h4 className="text-sm font-bold font-sans">Wonder Lanka Support</h4>
                  <p className="text-[10px] text-emerald-250 text-emerald-200 uppercase tracking-widest font-mono">Expert online & active</p>
                </div>
              </div>
              <button
                onClick={() => setIsOpen(false)}
                className="p-1.5 rounded-full hover:bg-emerald-700 transition-colors cursor-pointer text-white"
                aria-label="Minimize Whatsapp modal chat box"
              >
                <X className="w-4 h-4" />
              </button>
            </div>

            {/* Bubble logs body */}
            <div className="p-4 bg-neutral-900 space-y-3 h-48 overflow-y-auto">
              <div className="p-3 bg-neutral-950 border border-neutral-850 rounded-2xl text-xs text-neutral-300 max-w-[85%]">
                <p className="font-mono text-[9px] uppercase tracking-wider text-amber-500 mb-1">Colombo Admin Specialist:</p>
                <p>Aayubowan! 🙏 Thank you for reaching Wonder Lanka Experience.</p>
                <p className="mt-1">Leave your question below to text direct on our WhatsApp team. We map premium travel packages.</p>
              </div>
            </div>

            {/* Form writing */}
            <form onSubmit={handleMessageSend} className="p-3 bg-neutral-950 border-t border-neutral-850 space-y-2">
              <div className="relative">
                <input
                  type="text"
                  placeholder="Type message..."
                  value={typedMessage}
                  required
                  onChange={(e) => setTypedMessage(e.target.value)}
                  className="w-full bg-neutral-900 border border-neutral-805 focus:border-emerald-500 rounded-xl pl-3.5 pr-12 py-2.5 text-xs text-neutral-100 placeholder-neutral-550 focus:outline-none"
                />
                <button
                  type="submit"
                  className="absolute right-1.5 top-1.5 p-1.5 rounded-lg bg-emerald-600 hover:bg-emerald-500 text-white transition-colors cursor-pointer"
                  aria-label="Dispatch message to WhatsApp"
                >
                  <Send className="w-3.5 h-3.5" />
                </button>
              </div>
              
              <div className="flex items-center space-x-1.5 justify-center text-[9px] text-neutral-500">
                <ShieldCheck className="w-3 h-3 text-emerald-500" />
                <span>Redirects securely to registered WhatsApp business profile.</span>
              </div>
            </form>

          </motion.div>
        )}
      </AnimatePresence>

      {/* Floating launcher bubble */}
      <div className="relative">
        <button
          onClick={() => {
            setIsOpen(!isOpen);
            setAlertBadge(false);
          }}
          className="w-14 h-14 rounded-full bg-emerald-600 hover:bg-emerald-505 text-white flex items-center justify-center shadow-2xl transition-all hover:scale-105 active:scale-95 ring-4 ring-emerald-500/10 cursor-pointer"
          aria-label="Open floating Whatsapp helpline chat"
        >
          <MessageSquare className="w-6 h-6" />
        </button>

        {/* Pulse badge */}
        <AnimatePresence>
          {alertBadge && (
            <motion.span
              initial={{ scale: 0 }}
              animate={{ scale: 1 }}
              exit={{ scale: 0 }}
              className="absolute -top-1.5 -right-1.5 w-5 h-5 bg-amber-500 text-neutral-950 font-bold font-sans text-[10px] rounded-full flex items-center justify-center shadow-md animate-bounce"
            >
              1
            </motion.span>
          )}
        </AnimatePresence>
      </div>

    </div>
  );
}
