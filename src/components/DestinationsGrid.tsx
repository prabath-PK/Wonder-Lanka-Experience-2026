import { useState, useMemo, useEffect } from 'react';
import { motion, AnimatePresence } from 'motion/react';
import { Search, MapPin, Calendar, Check, Compass, Info, X, Map, ArrowRight } from 'lucide-react';
import { destinations } from '../data';
import { Destination } from '../types';

interface DestinationsGridProps {
  searchQuery: string;
  setSearchQuery: (query: string) => void;
  onBookDestinationTour: (destinationName: string) => void;
}

export default function DestinationsGrid({ searchQuery, setSearchQuery, onBookDestinationTour }: DestinationsGridProps) {
  const [selectedRegion, setSelectedRegion] = useState<string>('All');
  const [activeDestination, setActiveDestination] = useState<Destination | null>(null);

  const regions = ['All', 'Cultural', 'Hill Country', 'Coast', 'Wildlife', 'Ancient Cities'];

  // Filter on both region and search phrase
  const filteredDestinations = useMemo(() => {
    return destinations.filter((dest) => {
      const matchRegion = selectedRegion === 'All' || dest.region === selectedRegion;
      const matchSearch =
        dest.name.toLowerCase().includes(searchQuery.toLowerCase()) ||
        dest.overview.toLowerCase().includes(searchQuery.toLowerCase()) ||
        dest.attractions.some(a => a.toLowerCase().includes(searchQuery.toLowerCase())) ||
        dest.activities.some(act => act.toLowerCase().includes(searchQuery.toLowerCase()));
      return matchRegion && matchSearch;
    });
  }, [selectedRegion, searchQuery]);

  return (
    <section id="destinations-section" className="py-24 bg-neutral-900 border-t border-neutral-800">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        <div className="text-center max-w-3xl mx-auto space-y-4 mb-16">
          <motion.div
            initial={{ opacity: 0 }}
            whileInView={{ opacity: 0.9 }}
            viewport={{ once: true }}
            className="inline-flex items-center space-x-1.5 bg-amber-500/10 px-3.5 py-1.5 rounded-full border border-amber-500/20 text-amber-500 text-xs font-semibold tracking-wider font-mono uppercase"
          >
            <span>Ceylon Map Locator</span>
          </motion.div>
          <h2 className="text-3xl sm:text-4xl font-bold tracking-tight text-neutral-50 font-sans">
            Explore Sri Lanka’s Major Destinations
          </h2>
          <p className="text-neutral-400 font-sans text-sm sm:text-base">
            From monumental primary royal capitals dating 2,500 years back, to high-altitude misty tea reserves, wild elephant game trails, and sweltering azure surf lines.
          </p>
        </div>

        {/* Region & Filter Controls */}
        <div className="flex flex-col md:flex-row justify-between items-center gap-6 mb-12 bg-neutral-950 p-4 rounded-2xl border border-neutral-850/80">
          {/* Tab Filters */}
          <div className="flex flex-wrap gap-2 w-full md:w-auto">
            {regions.map((region) => (
              <button
                key={region}
                onClick={() => setSelectedRegion(region)}
                className={`px-4 py-2 rounded-xl text-xs sm:text-sm font-medium transition-all cursor-pointer ${
                  selectedRegion === region
                    ? 'bg-amber-500 text-neutral-950 font-semibold shadow-md'
                    : 'bg-neutral-900 text-neutral-400 hover:text-white hover:bg-neutral-800'
                }`}
              >
                {region}
              </button>
            ))}
          </div>

          {/* Search Box */}
          <div className="relative w-full md:w-80">
            <Search className="absolute left-3.5 top-1/2 -translate-y-1/2 w-4.5 h-4.5 text-neutral-500" />
            <input
              type="text"
              placeholder="Search destinations..."
              value={searchQuery}
              onChange={(e) => setSearchQuery(e.target.value)}
              className="w-full bg-neutral-900 border border-neutral-800 focus:border-amber-400 rounded-xl pl-10 pr-4 py-2.5 text-sm focus:outline-none placeholder-neutral-550 text-neutral-200"
            />
            {searchQuery && (
              <button
                onClick={() => setSearchQuery('')}
                className="absolute right-3 top-1/2 -translate-y-1/2 text-neutral-400 hover:text-white text-xs cursor-pointer"
                aria-label="Clear destination search"
              >
                Clear
              </button>
            )}
          </div>
        </div>

        {/* Destinations Result Cards Grid */}
        {filteredDestinations.length === 0 ? (
          <div className="text-center py-20 bg-neutral-950 rounded-2xl border border-neutral-850/80 space-y-4">
            <p className="text-neutral-400 text-lg font-sans">No matching destinations found for your query.</p>
            <button
              onClick={() => {
                setSearchQuery('');
                setSelectedRegion('All');
              }}
              className="px-5 py-2 rounded-full bg-emerald-600 hover:bg-emerald-500 text-neutral-100 text-xs font-semibold cursor-pointer"
            >
              Reset Search Filter
            </button>
          </div>
        ) : (
          <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-8">
            {filteredDestinations.map((dest, idx) => (
              <motion.div
                key={dest.id}
                initial={{ opacity: 0, y: 30 }}
                whileInView={{ opacity: 1, y: 0 }}
                viewport={{ once: true, margin: '-50px' }}
                transition={{ duration: 0.6, delay: idx % 3 * 0.1 }}
                className="group bg-neutral-950 rounded-2xl overflow-hidden border border-neutral-850/60 shadow-xl flex flex-col hover:border-amber-500/30 transition-all duration-300"
              >
                {/* Thumbnail Image Container */}
                <div className="relative aspect-4/3 w-full overflow-hidden bg-neutral-900">
                  <img
                    src={dest.image}
                    alt={`${dest.name} landscape photo`}
                    loading="lazy"
                    referrerPolicy="no-referrer"
                    className="w-full h-full object-cover group-hover:scale-105 transition-transform duration-500"
                  />
                  <div className="absolute top-4 left-4 bg-emerald-900/90 backdrop-blur-md text-emerald-300 text-[10px] font-mono tracking-wider font-semibold uppercase px-3 py-1 rounded-full border border-emerald-500/25">
                    {dest.region} Region
                  </div>
                </div>

                {/* Info Box */}
                <div className="p-6 flex-1 flex flex-col justify-between space-y-4">
                  <div className="space-y-2">
                    <h3 className="text-xl font-bold text-neutral-100 group-hover:text-amber-400 transition-colors">
                      {dest.name}
                    </h3>
                    <p className="text-xs text-amber-500 font-mono flex items-center gap-1.5">
                      <Calendar className="w-3.5 h-3.5" />
                      <span>Best time: {dest.bestTime.split('(')[0]}</span>
                    </p>
                    <p className="text-neutral-450 text-neutral-400 text-sm line-clamp-3 leading-relaxed">
                      {dest.overview}
                    </p>
                  </div>

                  {/* CTAs */}
                  <div className="flex items-center justify-between pt-2 border-t border-neutral-900 gap-2">
                    <button
                      onClick={() => setActiveDestination(dest)}
                      className="text-xs font-semibold uppercase tracking-wider text-amber-400 hover:text-amber-300 group/btn flex items-center space-x-1 cursor-pointer"
                    >
                      <span>View more...</span>
                      <ArrowRight className="w-3.5 h-3.5 group-hover/btn:translate-x-1 transition-transform" />
                    </button>
                    <button
                      onClick={() => onBookDestinationTour(dest.name)}
                      className="px-4 py-2 rounded-lg bg-emerald-950/85 hover:bg-emerald-605 hover:bg-emerald-800 text-emerald-300 border border-emerald-500/20 text-xs font-semibold cursor-pointer"
                    >
                      Enquire Custom
                    </button>
                  </div>
                </div>
              </motion.div>
            ))}
          </div>
        )}

        {/* Detailed Destination Drawer / Lightbox Modal */}
        <AnimatePresence>
          {activeDestination && (
            <div className="fixed inset-0 z-50 overflow-y-auto flex items-center justify-center p-4">
              {/* Blur backdrop overlay */}
              <motion.div
                initial={{ opacity: 0 }}
                animate={{ opacity: 1 }}
                exit={{ opacity: 0 }}
                onClick={() => setActiveDestination(null)}
                className="fixed inset-0 bg-black/80 backdrop-blur-sm"
              />

              {/* Modal Container */}
              <motion.div
                initial={{ opacity: 0, scale: 0.95 }}
                animate={{ opacity: 1, scale: 1 }}
                exit={{ opacity: 0, scale: 0.95 }}
                className="relative bg-neutral-950 w-full max-w-4xl p-0 rounded-3xl overflow-hidden border border-neutral-800 shadow-2xl overflow-y-auto max-h-[90vh]"
              >
                {/* Close Button */}
                <button
                  onClick={() => setActiveDestination(null)}
                  className="absolute right-4 top-4 z-20 p-2.5 rounded-full bg-neutral-900/40 text-neutral-100 hover:bg-neutral-800 transition-colors cursor-pointer border border-neutral-700/30"
                  aria-label="Close modal dialog"
                >
                  <X className="w-5 h-5" />
                </button>

                {/* Hero Background image representation */}
                <div className="relative h-64 sm:h-80 w-full overflow-hidden bg-neutral-900">
                  <img
                    src={activeDestination.image}
                    alt={activeDestination.name}
                    referrerPolicy="no-referrer"
                    className="w-full h-full object-cover"
                  />
                  <div className="absolute inset-0 bg-gradient-to-t from-neutral-950 via-neutral-900/40 to-transparent" />
                  <div className="absolute bottom-6 left-6 sm:left-8 space-y-2">
                    <span className="bg-emerald-690 bg-emerald-600 text-neutral-100 text-[10px] font-mono font-semibold uppercase px-3.5 py-1.5 rounded-full">
                      {activeDestination.region} Region
                    </span>
                    <h2 className="text-2xl sm:text-4xl font-bold font-sans tracking-tight text-white mt-1">
                      {activeDestination.name} Guide
                    </h2>
                  </div>
                </div>

                {/* Content Box */}
                <div className="p-6 sm:p-8 space-y-8 text-neutral-300">
                  {/* Grid layout */}
                  <div className="grid grid-cols-1 lg:grid-cols-3 gap-8">
                    {/* General & best time columns */}
                    <div className="lg:col-span-2 space-y-6">
                      <div className="space-y-3">
                        <h3 className="text-lg font-bold font-sans text-neutral-100 flex items-center gap-1.5">
                          <Info className="w-5 h-5 text-amber-500" />
                          <span>Historical & Regional Overview</span>
                        </h3>
                        <p className="text-sm text-neutral-400 leading-relaxed font-sans">
                          {activeDestination.overview}
                        </p>
                      </div>

                      {/* Attractions Lists */}
                      <div className="space-y-3">
                        <h4 className="text-sm uppercase font-mono tracking-wider font-semibold text-neutral-100">
                          ⭐ Must-See Attractions:
                        </h4>
                        <ul className="space-y-2 text-sm text-neutral-400">
                          {activeDestination.attractions.map((attr, index) => (
                            <li key={index} className="flex items-start gap-2.5">
                              <span className="w-1.5 h-1.5 rounded-full bg-amber-450 bg-amber-500 mt-2 shrink-0 animate-pulse" />
                              <span>{attr}</span>
                            </li>
                          ))}
                        </ul>
                      </div>

                      {/* Activities Lists */}
                      <div className="space-y-3">
                        <h4 className="text-sm uppercase font-mono tracking-wider font-semibold text-neutral-100">
                          ⛵ Exclusive Activities to try:
                        </h4>
                        <div className="grid grid-cols-1 sm:grid-cols-2 gap-3 text-sm text-neutral-400">
                          {activeDestination.activities.map((act, index) => (
                            <div key={index} className="flex items-center gap-2">
                              <Check className="w-4 h-4 text-emerald-400 shrink-0" />
                              <span>{act}</span>
                            </div>
                          ))}
                        </div>
                      </div>
                    </div>

                    {/* Best Time & Local tips columns */}
                    <div className="space-y-6 bg-neutral-900/50 p-6 rounded-2xl border border-neutral-850">
                      <div>
                        <h4 className="text-xs uppercase font-mono tracking-widest text-amber-500 font-semibold flex items-center gap-1.5 mb-2">
                          <Calendar className="w-4 h-4" />
                          <span>Optimal Period</span>
                        </h4>
                        <p className="text-sm font-semibold text-neutral-100">{activeDestination.bestTime}</p>
                      </div>

                      <div className="space-y-3 pt-4 border-t border-neutral-800">
                        <h4 className="text-xs uppercase font-mono tracking-widest text-amber-500 font-semibold flex items-center gap-1.5">
                          <Compass className="w-4 h-4" />
                          <span>Insider Tips</span>
                        </h4>
                        <ul className="space-y-3 text-xs text-neutral-400 leading-relaxed">
                          {activeDestination.tips.map((tip, index) => (
                            <li key={index} className="bg-neutral-950 p-3 rounded-lg border border-neutral-850/80">
                              {tip}
                            </li>
                          ))}
                        </ul>
                      </div>
                    </div>
                  </div>

                  {/* Submitting custom action panel inside modal */}
                  <div className="flex flex-col sm:flex-row items-center justify-between gap-4 p-5 bg-emerald-950/20 rounded-2xl border border-emerald-500/10">
                    <div className="space-y-1">
                      <p className="text-sm font-semibold text-neutral-100">Want to include {activeDestination.name} in your custom tour?</p>
                      <p className="text-xs text-neutral-450 text-neutral-400">Our local travel managers will curate your daily itinerary seamlessly around this location.</p>
                    </div>
                    <button
                      onClick={() => {
                        onBookDestinationTour(activeDestination.name);
                        setActiveDestination(null);
                      }}
                      className="px-6 py-2.5 bg-emerald-600 hover:bg-emerald-500 text-neutral-50 rounded-xl text-xs font-bold transition-transform hover:scale-[1.02] cursor-pointer shrink-0"
                    >
                      Add to Custom Plan
                    </button>
                  </div>
                </div>
              </motion.div>
            </div>
          )}
        </AnimatePresence>
      </div>
    </section>
  );
}
