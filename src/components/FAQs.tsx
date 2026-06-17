import { useState } from 'react';
import { motion, AnimatePresence } from 'motion/react';
import { HelpCircle, ChevronDown, ChevronUp, MessageCircle } from 'lucide-react';
import { faqs } from '../data';

export default function FAQs() {
  const [openIndexes, setOpenIndexes] = useState<number[]>([]);

  const toggleAccordion = (index: number) => {
    setOpenIndexes((prev) =>
      prev.includes(index) ? prev.filter((i) => i !== index) : [...prev, index]
    );
  };

  return (
    <section id="faqs-section" className="py-24 bg-neutral-900 border-t border-neutral-805">
      <div className="max-w-4xl mx-auto px-4 sm:px-6 lg:px-8 space-y-12">
        
        {/* Title */}
        <div className="text-center max-w-2xl mx-auto space-y-4">
          <motion.div
            initial={{ opacity: 0 }}
            whileInView={{ opacity: 0.9 }}
            viewport={{ once: true }}
            className="inline-flex items-center space-x-1.5 bg-amber-500/10 px-3.5 py-1.5 rounded-full border border-amber-500/20 text-text-amber-550 text-amber-450 text-amber-400 text-xs font-semibold tracking-wider font-mono uppercase"
          >
            <HelpCircle className="w-4 h-4 text-emerald-404" />
            <span>Essential Traveller Knowledge Base</span>
          </motion.div>
          <h2 className="text-2xl sm:text-3xl font-bold tracking-tight text-neutral-50 font-sans">
            Frequently Asked Questions
          </h2>
          <p className="text-neutral-400 text-xs sm:text-xs">
            Prepare seamlessly for your Ceylon voyage with answers to practical questions gathered directly by our ground hosting team.
          </p>
        </div>

        {/* List Accordion items */}
        <div className="space-y-4">
          {faqs.map((faq, index) => {
            const isOpen = openIndexes.includes(index);
            return (
              <div
                key={index}
                className="bg-neutral-950 border border-neutral-850 rounded-2xl overflow-hidden transition-all shadow-md hover:border-neutral-800"
              >
                {/* Trigger */}
                <button
                  onClick={() => toggleAccordion(index)}
                  className="w-full text-left p-5 sm:p-6 flex justify-between items-center bg-transparent focus:outline-none cursor-pointer gap-4"
                >
                  <div className="space-y-1">
                    <span className="text-[9px] uppercase font-mono bg-neutral-900 text-amber-400 border border-neutral-800 px-2 py-0.5 rounded-md">
                      {faq.category}
                    </span>
                    <h4 className="text-sm sm:text-base font-semibold text-neutral-200 mt-1">
                      {faq.question}
                    </h4>
                  </div>
                  <div className="text-neutral-400 shrink-0">
                    {isOpen ? <ChevronUp className="w-4 h-4 text-amber-400" /> : <ChevronDown className="w-4 h-4" />}
                  </div>
                </button>

                {/* Body Expand panels */}
                <AnimatePresence initial={false}>
                  {isOpen && (
                    <motion.div
                      initial={{ height: 0, opacity: 0 }}
                      animate={{ height: 'auto', opacity: 1 }}
                      exit={{ height: 0, opacity: 0 }}
                      transition={{ duration: 0.25 }}
                    >
                      <div className="px-5 sm:px-6 pb-6 text-xs sm:text-sm text-neutral-400 leading-relaxed font-sans border-t border-neutral-900 pt-3">
                        {faq.answer}
                      </div>
                    </motion.div>
                  )}
                </AnimatePresence>
              </div>
            );
          })}
        </div>

        {/* Call support prompt */}
        <div className="p-5 bg-emerald-950/20 border border-emerald-500/10 rounded-2xl flex flex-col sm:flex-row justify-between items-center gap-4 text-center sm:text-left">
          <div className="space-y-1">
            <p className="text-sm font-semibold text-neutral-100 flex items-center justify-center sm:justify-start gap-1.5">
              <MessageCircle className="w-4.5 h-4.5 text-emerald-400" />
              <span>Have an unlisted question in your mind?</span>
            </p>
            <p className="text-xs text-neutral-450 text-neutral-400">Our customer team supports direct typing queries 24/7 on WhatsApp Messenger.</p>
          </div>
          <a
            href="https://wa.me/94771234567"
            target="_blank"
            rel="noreferrer"
            className="px-5 py-2.5 bg-emerald-600 hover:bg-emerald-505 text-white text-xs font-bold rounded-xl shadow-md transition-transform hover:scale-[1.02] cursor-pointer"
          >
            Ask Us Directly
          </a>
        </div>

      </div>
    </section>
  );
}
