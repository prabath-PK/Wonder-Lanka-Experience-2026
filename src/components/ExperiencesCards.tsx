import React, { useState } from 'react';
import { motion, AnimatePresence } from 'motion/react';
import { Waves, Mountain, Compass, Fish, Milestone, Utensils, Leaf, HeartPulse, Sparkles, Check, ChevronRight } from 'lucide-react';
import { experiences } from '../data';
import { Experience } from '../types';

interface ExperiencesCardsProps {
  onSelectedExperience: (experienceName: string) => void;
}

// Map key string to Lucide React component safely
const iconMap: Record<string, React.ComponentType<any>> = {
  Waves: Waves,
  Mountain: Mountain,
  Compass: Compass,
  Fish: Fish,
  Milestone: Milestone,
  Utensils: Utensils,
  Leaf: Leaf,
  HeartPulse: HeartPulse,
};

export default function ExperiencesCards({ onSelectedExperience }: ExperiencesCardsProps) {
  const [activeCategory, setActiveCategory] = useState<string>('All');
  const [selectedExp, setSelectedExp] = useState<Experience | null>(null);

  const categories = ['All', 'Adventure', 'Wildlife', 'Cultural', 'Nature', 'Wellness'];

  const filteredExperiences = experiences.filter((exp) => {
    return activeCategory === 'All' || exp.category === activeCategory;
  });

  return (
    <section id="experiences-section" className="py-24 bg-neutral-950">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        
        {/* Header Title */}
        <div className="text-center max-w-3xl mx-auto space-y-4 mb-16">
          <motion.div
            initial={{ opacity: 0 }}
            whileInView={{ opacity: 0.9 }}
            viewport={{ once: true }}
            className="inline-flex items-center space-x-1.5 bg-emerald-500/10 px-3.5 py-1.5 rounded-full border border-emerald-500/20 text-emerald-400 text-xs font-semibold tracking-wider font-mono uppercase"
          >
            <Sparkles className="w-3.5 h-3.5 text-amber-400" />
            <span>Luxury & Authentic Experiences</span>
          </motion.div>
          <h2 className="text-3xl sm:text-4xl font-bold tracking-tight text-neutral-50 font-sans">
            Authentic Sri Lankan Experiences
          </h2>
          <p className="text-neutral-400 font-sans text-sm sm:text-base">
            Delve deeper than standard sightseeing. From wellness Ayurveda retreats guided by qualified practitioners to cooking with village locals, discover the true soul of Sri Lanka.
          </p>
        </div>

        {/* Category switcher */}
        <div className="flex flex-wrap justify-center gap-2 sm:gap-3 mb-12">
          {categories.map((category) => (
            <button
              key={category}
              onClick={() => setActiveCategory(category)}
              className={`px-5 py-2.5 rounded-full text-xs sm:text-sm font-semibold tracking-wide transition-all duration-300 pointer-events-auto cursor-pointer border ${
                activeCategory === category
                  ? 'bg-emerald-600 text-white border-emerald-500 shadow-lg shadow-emerald-900/10'
                  : 'bg-neutral-900 text-neutral-400 border-neutral-800 hover:text-white hover:bg-neutral-850'
              }`}
            >
              {category}
            </button>
          ))}
        </div>

        {/* Experiences Cards Grid */}
        <div className="grid grid-cols-1 md:grid-cols-2 gap-8">
          {filteredExperiences.map((exp, idx) => {
            const IconComponent = iconMap[exp.icon] || Compass;
            return (
              <motion.div
                key={exp.id}
                layout
                initial={{ opacity: 0, scale: 0.98 }}
                whileInView={{ opacity: 1, scale: 1 }}
                viewport={{ once: true }}
                transition={{ duration: 0.5 }}
                className="group relative bg-neutral-900 rounded-3xl overflow-hidden border border-neutral-800/80 shadow-xl flex flex-col sm:flex-row hover:border-emerald-505 hover:border-emerald-500/20 transition-all duration-300"
              >
                {/* Thumbnail Side Image wrapper */}
                <div className="relative w-full sm:w-1/2 h-52 sm:h-full min-h-[220px] overflow-hidden bg-neutral-850">
                  <img
                    src={exp.image}
                    alt={exp.title}
                    loading="lazy"
                    referrerPolicy="no-referrer"
                    className="w-full h-full object-cover group-hover:scale-105 transition-transform duration-500"
                  />
                  <div className="absolute inset-0 bg-gradient-to-t sm:bg-gradient-to-r from-neutral-900 via-neutral-900/30 to-transparent" />
                </div>

                {/* Experience Detail Panel column */}
                <div className="p-6 sm:p-8 flex-1 flex flex-col justify-between space-y-4">
                  <div className="space-y-3">
                    <div className="flex items-center space-x-2">
                      <div className="w-8 h-8 rounded-lg bg-emerald-900/50 border border-emerald-500/20 flex items-center justify-center text-emerald-400">
                        <IconComponent className="w-4 h-4" />
                      </div>
                      <span className="text-amber-500 text-xs font-mono tracking-widest uppercase font-semibold">
                        {exp.category}
                      </span>
                    </div>

                    <h3 className="text-xl font-bold text-neutral-100 font-sans group-hover:text-amber-400 transition-colors">
                      {exp.title}
                    </h3>
                    <p className="text-sm text-neutral-400 font-sans leading-relaxed">
                      {exp.description}
                    </p>
                  </div>

                  {/* Micro Actions */}
                  <div className="flex flex-col sm:flex-row justify-between items-stretch sm:items-center gap-3 pt-4 border-t border-neutral-850">
                    <button
                      onClick={() => setSelectedExp(exp)}
                      className="text-xs font-bold text-emerald-400 hover:text-emerald-300 flex items-center space-x-1 cursor-pointer group/btn"
                    >
                      <span>Show Highlights</span>
                      <ChevronRight className="w-4 h-4 group-hover/btn:translate-x-1 transition-transform" />
                    </button>
                    <button
                      onClick={() => onSelectedExperience(exp.title)}
                      className="px-4 py-2 rounded-xl bg-neutral-950 hover:bg-neutral-800 border border-neutral-805 text-xs text-neutral-200 hover:text-white font-medium cursor-pointer transition-colors"
                    >
                      Include in Private Tour
                    </button>
                  </div>
                </div>
              </motion.div>
            );
          })}
        </div>

        {/* Modal Lightbox for Specific Experience highlights */}
        <AnimatePresence>
          {selectedExp && (
            <div className="fixed inset-0 z-50 overflow-y-auto flex items-center justify-center p-4">
              <motion.div
                initial={{ opacity: 0 }}
                animate={{ opacity: 1 }}
                exit={{ opacity: 0 }}
                onClick={() => setSelectedExp(null)}
                className="fixed inset-0 bg-black/85 backdrop-blur-sm"
              />

              <motion.div
                initial={{ opacity: 0, scale: 0.95 }}
                animate={{ opacity: 1, scale: 1 }}
                exit={{ opacity: 0, scale: 0.95 }}
                className="relative bg-neutral-900 w-full max-w-xl rounded-2xl border border-neutral-850 p-6 shadow-2xl space-y-6"
              >
                {/* Header info */}
                <div className="flex justify-between items-start">
                  <div className="space-y-1">
                    <span className="text-[10px] bg-emerald-900/65 text-emerald-300 font-mono tracking-widest uppercase font-semibold px-2.5 py-1 rounded-md">
                      {selectedExp.category}
                    </span>
                    <h3 className="text-xl font-bold text-neutral-50 font-sans mt-2">
                      {selectedExp.title} Highlights
                    </h3>
                  </div>
                  <button
                    onClick={() => setSelectedExp(null)}
                    className="p-1.5 rounded-full bg-neutral-800 text-neutral-400 hover:text-white transition-colors cursor-pointer"
                  >
                    Close
                  </button>
                </div>

                {/* Cover image mini */}
                <div className="h-40 w-full overflow-hidden rounded-xl">
                  <img
                    src={selectedExp.image}
                    alt={selectedExp.title}
                    referrerPolicy="no-referrer"
                    className="w-full h-full object-cover"
                  />
                </div>

                {/* Sub activities */}
                <div className="space-y-4">
                  <div className="space-y-2">
                    <span className="text-xs font-mono uppercase text-amber-500 font-bold">🛠️ Selected Activities:</span>
                    <div className="space-y-1.5">
                      {selectedExp.activities.map((act, index) => (
                        <div key={index} className="flex items-start gap-2.5 text-xs text-neutral-300 font-sans">
                          <Check className="w-4 h-4 text-emerald-400 shrink-0 mt-0.5" />
                          <span>{act}</span>
                        </div>
                      ))}
                    </div>
                  </div>

                  <div className="space-y-2 pt-2 border-t border-neutral-800">
                    <span className="text-xs font-mono uppercase text-amber-500 font-bold">✨ Highlights & Amenities:</span>
                    <div className="space-y-1.5">
                      {selectedExp.highlights.map((h, index) => (
                        <div key={index} className="flex items-start gap-2.5 text-xs text-neutral-350 text-neutral-400 font-sans">
                          <span className="w-1.5 h-1.5 rounded-full bg-amber-400 shrink-0 mt-2" />
                          <span>{h}</span>
                        </div>
                      ))}
                    </div>
                  </div>
                </div>

                {/* Bottom checkout */}
                <div className="pt-2">
                  <button
                    onClick={() => {
                      onSelectedExperience(selectedExp.title);
                      setSelectedExp(null);
                    }}
                    className="w-full py-2.5 bg-emerald-600 hover:bg-emerald-500 text-neutral-50 rounded-xl text-xs font-bold transition-all cursor-pointer shadow-md"
                  >
                    Select: Add to Custom Itinerary Planner
                  </button>
                </div>
              </motion.div>
            </div>
          )}
        </AnimatePresence>
      </div>
    </section>
  );
}
