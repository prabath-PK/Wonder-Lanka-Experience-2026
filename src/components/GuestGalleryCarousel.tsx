import { useState, useRef } from 'react';
import { motion, AnimatePresence } from 'motion/react';
import { ChevronLeft, ChevronRight, MapPin, Quote, Sparkles, X, MessageSquare, Heart } from 'lucide-react';

import guestSafariHappy from '../assets/images/guest_safari_happy_1781777043152.jpg';
import guestEllaBridge from '../assets/images/guest_ella_bridge_1781777061231.jpg';
import guestMirissaBeach from '../assets/images/guest_mirissa_beach_1781777075256.jpg';
import guestTempleGalle from '../assets/images/guest_temple_galle_1781777090700.jpg';
import guestTeaHills from '../assets/images/guest_tea_hills_1781777106908.jpg';

const guestPhotos = [
  {
    image: guestSafariHappy,
    title: 'Safari Thrills',
    location: 'Yala National Park',
    story: '“We saw three different leopards on our sunrise drive! Absolute dream come true. The private naturalist guide provided by Wonder Lanka was extremely knowledgeable. Highly recommended!”',
    guests: 'Emma & Clara',
    country: 'Sweden 🇸🇪',
    activity: 'Elephant & Leopard Safari'
  },
  {
    image: guestEllaBridge,
    title: 'Bridge Walkers',
    location: 'Nine Arch Bridge, Ella',
    story: '“Timing the blue vintage train passing right under us was magical. Walking along the misty rails surrounded by endless green tea fields is an experience we will carry forever.”',
    guests: 'The Miller Family',
    country: 'Germany 🇩🇪',
    activity: 'Scenic Train Odyssey'
  },
  {
    image: guestMirissaBeach,
    title: 'Coconut Sunset',
    location: 'Secret Beach, Mirissa',
    story: '“Drinking freshly plucked coconut water on gold-sand bays while watching the crimson sun melt into the Indian Ocean. Every beach recommended by WL was a pristine paradise.”',
    guests: 'Leo & Sasha',
    country: 'Canada 🇨🇦',
    activity: 'Tropical Coastline Relaxation'
  },
  {
    image: guestTempleGalle,
    title: 'Ancient Wonders',
    location: 'Polonnaruwa Vatadage',
    story: '“Marveling at 1000-year-old sacred stone stupas and beautifully carved Moonstones in total peace. Wonder Lanka handled the entrance passes and travel logistics flawlessly.”',
    guests: 'Jack & Chloe',
    country: 'Australia 🇦🇺',
    activity: 'Heritage & Sacred Monuments Tour'
  },
  {
    image: guestTeaHills,
    title: 'Emerald Terraces',
    location: 'Tea Valleys, Nuwara Eliya',
    story: '“Surrounded by fresh tea fragrance right in the cool misty central mountains. The luxury bungalow we stayed in had breathtaking views overlooking colonial brick hearths.”',
    guests: 'The Robertsons',
    country: 'United Kingdom 🇬🇧',
    activity: 'High-Grown Tea Estate Experience'
  },
  {
    image: 'https://images.unsplash.com/photo-1544735716-392fe2489ffa?auto=format&fit=crop&q=80&w=800',
    title: 'Tranquil Palms',
    location: 'South Coast Lagoon',
    story: '“We booked active surfing sessions but fell in love with lazy late afternoons walking under palm trees, listening to the waves. Truly a tranquil rejuvenate trip.”',
    guests: 'Nate & Maya',
    country: 'United States 🇺🇸',
    activity: 'Sunset Lagoon Paddle'
  },
  {
    image: 'https://images.unsplash.com/photo-1581888227599-779811939961?auto=format&fit=crop&q=80&w=800',
    title: 'Wild Leopard Chase',
    location: 'Yala Wilderness Camp',
    story: '“Sleeping in luxurious custom glamping tents with five-star service in the deep forest. Hearing wildlife noises and having dinner under a blanket of cosmic stars.”',
    guests: 'Hiroshi & Ryu',
    country: 'Japan 🇯🇵',
    activity: 'Wildlife Glamping Safari'
  }
];

export default function GuestGalleryCarousel() {
  const [startIndex, setStartIndex] = useState(0);
  const [selectedGuest, setSelectedGuest] = useState<typeof guestPhotos[0] | null>(null);

  // Carousel controls
  const handleNext = () => {
    setStartIndex((prev) => (prev + 1 >= guestPhotos.length - 4 ? 0 : prev + 1));
  };

  const handlePrev = () => {
    setStartIndex((prev) => (prev === 0 ? guestPhotos.length - 5 : prev - 1));
  };

  return (
    <section id="guest-gallery-section" className="py-24 bg-neutral-950 border-t border-neutral-900/50">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 space-y-12">
        
        {/* Gallery Header */}
        <div className="text-center max-w-2xl mx-auto space-y-3">
          <span className="text-[10px] bg-amber-500/10 text-amber-400 font-mono uppercase tracking-widest px-2.5 py-1 rounded font-bold border border-amber-500/20">
            📸 Co-created Memories
          </span>
          <h3 className="text-3xl sm:text-4xl font-extrabold font-serif text-white tracking-tight">
            Wonder Lanka Guest Gallery
          </h3>
          <p className="text-neutral-400 text-xs sm:text-sm">
            Genuine moments of joy shared by our travelers. Click any guest card to read their travel diary.
          </p>
        </div>

        {/* Carousel Frame - Styled closely like user request screenshot */}
        <div className="relative border border-neutral-800 bg-neutral-900/30 p-6 rounded-[28px] overflow-hidden shadow-2xl">
          
          {/* Slider Row */}
          <div className="grid grid-cols-2 md:grid-cols-5 gap-4 overflow-hidden">
            {guestPhotos.slice(startIndex, startIndex + 5).map((item, idx) => (
              <motion.div
                key={item.guests + '-' + idx}
                layoutId={`gallery-card-${item.guests}`}
                onClick={() => setSelectedGuest(item)}
                className="group cursor-pointer bg-white p-3 rounded-2xl shadow-xl transition-all duration-300 hover:scale-[1.03] hover:-translate-y-1 flex flex-col items-center"
              >
                {/* 1:1 Aspect ratio square container like the butterfly squares */}
                <div className="w-full aspect-square rounded-xl overflow-hidden bg-neutral-100 relative">
                  <img
                    src={item.image}
                    alt={item.title}
                    referrerPolicy="no-referrer"
                    className="w-full h-full object-cover group-hover:scale-105 transition-transform duration-500 ease-out"
                  />
                  
                  {/* Rating or micro banner overlay */}
                  <div className="absolute top-2 right-2 bg-neutral-900/80 backdrop-blur-md px-2 py-0.5 rounded-full text-[8px] font-mono text-amber-400 border border-neutral-800 flex items-center space-x-1">
                    <span>★</span>
                    <span>5.0</span>
                  </div>
                </div>

                {/* Micro info bar under white frame */}
                <div className="w-full pt-3 text-center">
                  <p className="text-[11px] font-serif font-extrabold text-neutral-900 tracking-tight block truncate">
                    {item.guests}
                  </p>
                  <p className="text-[9px] font-mono text-[#b48d57] uppercase tracking-wider block truncate">
                    {item.location}
                  </p>
                </div>
              </motion.div>
            ))}

            {/* If we have fewer than 5 items due to slice (safety placeholder) */}
            {guestPhotos.slice(startIndex, startIndex + 5).length < 5 && 
              Array.from({ length: 5 - guestPhotos.slice(startIndex, startIndex + 5).length }).map((_, i) => (
                <div key={i} className="hidden md:block bg-neutral-900/40 border border-neutral-850 p-4 rounded-2xl h-full opacity-30 aspect-square" />
              ))
            }
          </div>

          {/* Navigation Controls */}
          <div className="flex justify-between items-center mt-6">
            <span className="text-[10px] font-mono text-neutral-500">
              Showing {startIndex + 1} - {Math.min(startIndex + 5, guestPhotos.length)} of {guestPhotos.length} stories
            </span>
            <div className="flex gap-2">
              <button
                onClick={handlePrev}
                className="p-2 bg-neutral-900 hover:bg-neutral-800 text-neutral-300 hover:text-white rounded-full border border-neutral-800 transition-colors cursor-pointer"
                title="Previous Slide"
              >
                <ChevronLeft className="w-4 h-4" />
              </button>
              <button
                onClick={handleNext}
                className="p-2 bg-neutral-900 hover:bg-neutral-800 text-neutral-300 hover:text-white rounded-full border border-neutral-800 transition-colors cursor-pointer"
                title="Next Slide"
              >
                <ChevronRight className="w-4 h-4" />
              </button>
            </div>
          </div>
        </div>

        {/* Separately Selected Detailed Information popup */}
        <AnimatePresence>
          {selectedGuest && (
            <motion.div
              initial={{ opacity: 0 }}
              animate={{ opacity: 1 }}
              exit={{ opacity: 0 }}
              className="fixed inset-0 z-50 flex items-center justify-center p-4 bg-neutral-950/80 backdrop-blur-md"
            >
              <motion.div
                initial={{ scale: 0.95, y: 15 }}
                animate={{ scale: 1, y: 0 }}
                exit={{ scale: 0.95, y: 15 }}
                className="bg-neutral-900 border border-neutral-800 rounded-[32px] max-w-2xl w-full p-6 sm:p-8 shadow-2xl relative overflow-hidden"
              >
                {/* Decorative spotlight radial glow */}
                <div className="absolute -top-40 -left-40 w-80 h-80 bg-amber-500/10 rounded-full blur-3xl pointer-events-none" />
                <div className="absolute -bottom-40 -right-40 w-80 h-80 bg-[#16B1BC]/10 rounded-full blur-3xl pointer-events-none" />

                {/* Close Button */}
                <button
                  onClick={() => setSelectedGuest(null)}
                  className="absolute top-4 right-4 bg-neutral-800 hover:bg-neutral-700 text-neutral-400 hover:text-white p-2 rounded-full border border-neutral-750 transition-colors cursor-pointer z-10"
                  aria-label="Close"
                >
                  <X className="w-4 h-4" />
                </button>

                <div className="grid grid-cols-1 sm:grid-cols-12 gap-6 relative">
                  {/* Photo Frame Section */}
                  <div className="sm:col-span-5 space-y-3">
                    <div className="aspect-square bg-white p-2.5 rounded-2xl shadow-xl rotate-[-2deg] transition-transform hover:rotate-0 duration-300">
                      <div className="w-full h-full rounded-lg overflow-hidden bg-neutral-100">
                        <img
                          src={selectedGuest.image}
                          alt={selectedGuest.title}
                          referrerPolicy="no-referrer"
                          className="w-full h-full object-cover"
                        />
                      </div>
                    </div>
                    
                    <div className="text-center pt-2">
                      <span className="text-[10px] font-mono text-amber-500 tracking-wider bg-amber-500/10 px-2.5 py-0.5 rounded-full border border-amber-500/20">
                        Verified Travel-Client
                      </span>
                    </div>
                  </div>

                  {/* Info Diary Text */}
                  <div className="sm:col-span-7 flex flex-col justify-between space-y-4">
                    <div className="space-y-3">
                      <div className="flex items-center space-x-1 text-amber-400 text-xs font-mono">
                        <span>★</span>
                        <span>★</span>
                        <span>★</span>
                        <span>★</span>
                        <span>★</span>
                        <span className="text-neutral-500 ml-1.5">(Rated 5.0 / 5.0)</span>
                      </div>

                      <h4 className="text-xl sm:text-2xl font-serif font-extrabold text-white tracking-tight leading-none">
                        {selectedGuest.guests}
                      </h4>
                      <div className="flex items-center space-x-2 text-xs text-neutral-450 text-neutral-400 font-sans">
                        <span className="text-[#b48d57] font-semibold">{selectedGuest.country}</span>
                        <span>•</span>
                        <span className="flex items-center gap-1">
                          <MapPin className="w-3.5 h-3.5 text-[#16B1BC]" />
                          {selectedGuest.location}
                        </span>
                      </div>

                      {/* Experience Pillar Block */}
                      <div className="text-[11px] bg-neutral-950/60 p-2.5 rounded-xl border border-neutral-850 inline-flex items-center gap-1.5">
                        <Sparkles className="w-3.5 h-3.5 text-[#16B1BC]" />
                        <span className="text-neutral-400 font-mono uppercase tracking-wider">Itinerary:</span>
                        <span className="text-neutral-200 font-bold">{selectedGuest.activity}</span>
                      </div>
                    </div>

                    {/* Story Paragraph */}
                    <div className="relative pt-4 border-t border-neutral-800">
                      <Quote className="absolute -top-1.5 -left-2 w-8 h-8 text-neutral-800 opacity-40 shrink-0" />
                      <p className="text-xs sm:text-sm text-neutral-300 leading-relaxed italic relative z-10 pl-4">
                        {selectedGuest.story}
                      </p>
                    </div>

                    <div className="flex justify-end pt-4">
                      <button
                        onClick={() => setSelectedGuest(null)}
                        className="px-5 py-2 bg-gradient-to-r from-emerald-600 to-[#16B1BC] text-white font-serif font-bold text-xs rounded-xl shadow-md transition-all hover:scale-[1.03] cursor-pointer"
                      >
                        Keep Exploring
                      </button>
                    </div>
                  </div>
                </div>

              </motion.div>
            </motion.div>
          )}
        </AnimatePresence>

      </div>
    </section>
  );
}
