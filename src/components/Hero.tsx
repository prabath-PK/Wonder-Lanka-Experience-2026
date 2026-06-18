import React, { useState, useEffect } from 'react';
import { motion, AnimatePresence } from 'motion/react';
import { Compass, Search, Calendar, ChevronRight, Sparkles, MapPin } from 'lucide-react';

import culturalHero from '../assets/images/srilanka_cultural_hero_1781713945959.jpg';
import teaEstate from '../assets/images/srilanka_tea_estate_1781713963590.jpg';
import beachHero from '../assets/images/srilanka_beach_1781713979894.jpg';
import wildlifeHero from '../assets/images/srilanka_wildlife_1781713996120.jpg';

interface HeroProps {
  onExploreTours: () => void;
  onContactUs: () => void;
  onSearchDestination: (query: string) => void;
}

const slides = [
  {
    image: culturalHero,
    title: 'Experience cultural wonders',
    subtitle: 'Sigiriya Lion Rock Fortress, an engineering miracle from the 5th century.'
  },
  {
    image: teaEstate,
    title: 'Breathe highland air',
    subtitle: 'Pass through mist-veiled tea estates and dramatic mountains in Ella.'
  },
  {
    image: beachHero,
    title: 'Relax on sun-swept bays',
    subtitle: 'Trace lazy coconut trees and cobalt waters along Galle and Mirissa.'
  },
  {
    image: wildlifeHero,
    title: 'Discover exotic wildlife',
    subtitle: 'Meet wild herds of elephants and elusive leopards inside Yala National Park.'
  }
];

export default function Hero({ onExploreTours, onContactUs, onSearchDestination }: HeroProps) {
  const [currentSlide, setCurrentSlide] = useState(0);
  const [searchQuery, setSearchQuery] = useState('');

  // Slower auto rotation for luxury slow pace
  useEffect(() => {
    const timer = setInterval(() => {
      setCurrentSlide((prev) => (prev + 1) % slides.length);
    }, 6000);
    return () => clearInterval(timer);
  }, []);

  const handleSearchSubmit = (e: React.FormEvent) => {
    e.preventDefault();
    if (searchQuery.trim()) {
      onSearchDestination(searchQuery);
    }
  };

  return (
    <section id="hero-section" className="relative h-[100vh] min-h-[650px] w-full overflow-hidden bg-neutral-900 text-white">
      {/* Background Imagery Loop */}
      <div className="absolute inset-0 z-0">
        <AnimatePresence mode="wait">
          <motion.div
            key={currentSlide}
            initial={{ opacity: 0, scale: 1.05 }}
            animate={{ opacity: 1, scale: 1 }}
            exit={{ opacity: 0 }}
            transition={{ duration: 1.5, ease: 'easeInOut' }}
            className="absolute inset-0"
          >
            <img
              src={slides[currentSlide].image}
              alt="Sri Lanka tourism visual background"
              referrerPolicy="no-referrer"
              className="w-full h-full object-cover"
            />
            {/* Ambient Dark Overlay to ensure premium high contrast text readability */}
            <div className="absolute inset-0 bg-gradient-to-t from-neutral-950 via-neutral-900/60 to-black/50" />
          </motion.div>
        </AnimatePresence>
      </div>

      {/* Floating Sparkle Elements */}
      <div className="absolute inset-0 z-1 pointer-events-none opacity-20">
        <div className="absolute top-1/4 left-1/10 w-1.5 h-1.5 bg-amber-400 rounded-full animate-ping" />
        <div className="absolute bottom-1/3 right-1/10 w-2 h-2 bg-sky-300 rounded-full animate-pulse" />
        <div className="absolute top-1/3 right-1/4 w-1 h-1 bg-white rounded-full animate-pulse" />
      </div>

      {/* Hero Content Area */}
      <div className="relative z-10 max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 h-full flex flex-col justify-center pt-20">
        <div className="max-w-3xl space-y-6">
          {/* Badge Overlay */}
          <motion.div
            initial={{ opacity: 0, y: 15 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ delay: 0.3, duration: 0.8 }}
            className="inline-flex items-center space-x-2 bg-emerald-950/70 backdrop-blur-md px-4 py-1.5 rounded-full border border-emerald-500/30 text-emerald-300 text-xs font-semibold tracking-wider font-mono uppercase"
          >
            <Sparkles className="w-3.5 h-3.5 text-amber-405 text-amber-400" />
            <span>Sri Lanka’s Premier Luxury Operator</span>
          </motion.div>

          {/* Majestic Main Headline */}
          <div className="space-y-2">
            <motion.h1
              initial={{ opacity: 0, y: 25 }}
              animate={{ opacity: 1, y: 0 }}
              transition={{ delay: 0.5, duration: 0.8 }}
              className="text-4xl sm:text-5xl lg:text-7xl font-bold font-sans tracking-tight leading-[1.1] text-neutral-50"
            >
              Experience the Wonders <br />
              <span className="text-transparent bg-clip-text bg-gradient-to-r from-amber-400 via-emerald-355 to-emerald-400">
                of Sri Lanka
              </span>
            </motion.h1>
            
            {/* Multi-slide subtitle that matches the rotating background */}
            <motion.p
              key={currentSlide + '-sub'}
              initial={{ opacity: 0, x: -10 }}
              animate={{ opacity: 0.9, x: 0 }}
              className="hidden sm:block text-xs uppercase font-mono text-amber-200 tracking-widest mt-1"
            >
              📍 Now Showing: {slides[currentSlide].title} — {slides[currentSlide].subtitle}
            </motion.p>
          </div>

          {/* Inspiring Subheadline */}
          <motion.p
            initial={{ opacity: 0, y: 20 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ delay: 0.7, duration: 0.8 }}
            className="text-base sm:text-xl text-neutral-300 font-sans font-light leading-relaxed max-w-2xl"
          >
            Discover unforgettable adventures, breathtaking destinations, authentic culture, and tailor-made tours across the Pearl of the Indian Ocean.
          </motion.p>

          {/* Interactive Fast-Search Panel */}
          <motion.form
            initial={{ opacity: 0, y: 20 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ delay: 0.9, duration: 0.8 }}
            onSubmit={handleSearchSubmit}
            className="flex flex-col sm:flex-row items-stretch bg-neutral-900/80 backdrop-blur-md p-2 rounded-2xl border border-neutral-800 shadow-2xl max-w-xl w-full gap-2 mt-2"
          >
            <div className="flex-1 flex items-center px-3 gap-2">
              <Search className="w-5 h-5 text-neutral-400 shrink-0" />
              <input
                type="text"
                placeholder="Search locations e.g. Sigiriya, Ella, Galle..."
                value={searchQuery}
                onChange={(e) => setSearchQuery(e.target.value)}
                className="w-full bg-transparent border-0 focus:outline-none focus:ring-0 text-neutral-100 placeholder-neutral-450 placeholder-neutral-400 text-sm py-2"
              />
            </div>
            <button
              type="submit"
              className="px-6 py-3 bg-amber-500 hover:bg-amber-400 text-neutral-950 font-bold rounded-xl text-sm transition-all flex items-center justify-center gap-1.5 cursor-pointer shadow-lg shadow-amber-500/10"
            >
              <span>Explore</span>
              <ChevronRight className="w-4 h-4" />
            </button>
          </motion.form>

          {/* CTAs */}
          <motion.div
            initial={{ opacity: 0, y: 20 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ delay: 1.1, duration: 0.8 }}
            className="flex flex-wrap gap-4 pt-4"
          >
            <button
              id="hero-explore-tours"
              onClick={onExploreTours}
              className="px-8 py-4 bg-emerald-600 hover:bg-emerald-500 text-neutral-50 font-semibold tracking-wide rounded-full transition-all shadow-lg hover:shadow-emerald-950/40 ring-1 ring-emerald-400/20 flex items-center space-x-2 cursor-pointer"
            >
              <Compass className="w-5 h-5" />
              <span>Explore Premium Tours</span>
            </button>
            <button
              id="hero-contact-us"
              onClick={onContactUs}
              className="px-8 py-4 bg-neutral-900/80 hover:bg-neutral-800 border border-neutral-800 hover:border-neutral-700 text-neutral-200 hover:text-white font-semibold tracking-wide rounded-full transition-all backdrop-blur-sm flex items-center space-x-2 cursor-pointer"
            >
              <Calendar className="w-5 h-5" />
              <span>Tailor-Made consultation</span>
            </button>
          </motion.div>
        </div>
      </div>

      {/* Floating indicators */}
      <div className="absolute bottom-8 left-1/2 -translate-x-1/2 z-10 flex space-x-2">
        {slides.map((_, i) => (
          <button
            key={i}
            className={`w-3 h-3 rounded-full transition-all ${
              currentSlide === i ? 'bg-amber-400 w-8' : 'bg-neutral-600 hover:bg-neutral-400'
            }`}
            onClick={() => setCurrentSlide(i)}
            aria-label={`Go to background slide ${i + 1}`}
          />
        ))}
      </div>
    </section>
  );
}
