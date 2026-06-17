import { useState } from 'react';
import { motion, AnimatePresence } from 'motion/react';
import { ZoomIn, X, ChevronLeft, ChevronRight, Camera } from 'lucide-react';

const galleryItems = [
  {
    image: 'https://images.unsplash.com/photo-1588598130841-3837f8a35e74?auto=format&fit=crop&q=80&w=1200',
    title: 'Sigiriya Rock Morning Climb',
    caption: 'Rising 200m from the forest, Sigiriya features world-renowned frescoes and royal boulder terraces.'
  },
  {
    image: 'https://images.unsplash.com/photo-1563189333-e57551cc7204?auto=format&fit=crop&q=80&w=1200',
    title: 'The Nine Arch Bridge, Ella',
    caption: 'Marvel at 19th-century colonial railway engineering, where vintage trains run above tea leaves.'
  },
  {
    image: 'https://images.unsplash.com/photo-1544735716-392fe2489ffa?auto=format&fit=crop&q=80&w=1200',
    title: 'Cobalt Palm Bays in Mirissa',
    caption: 'Unwind under the tropical breeze of coconut palms on gold-sand ocean beaches of Southern Sri Lanka.'
  },
  {
    image: 'https://images.unsplash.com/photo-1581888227599-779811939961?auto=format&fit=crop&q=80&w=1200',
    title: 'Wild Leopard of Yala Wilderness',
    caption: 'Yala has the highest leopard population density in the world, living adjacent to coastal salt pans.'
  },
  {
    image: 'https://images.unsplash.com/photo-1543731068-7e0f5beff43a?auto=format&fit=crop&q=80&w=1200',
    title: 'Terraced Tea Hills in Nuwara Eliya',
    caption: 'Generations of Ceylon ladies pluck rare golden tips on the hills of Little England.'
  },
  {
    image: 'https://images.unsplash.com/photo-1473186578172-c141e6798cf4?auto=format&fit=crop&q=80&w=1200',
    title: 'Tropical Colonial Galle Lighthouse',
    caption: 'Built by Dutch soldiers on stone ramparts, Galle Fort lighthouse shines on shipping channels.'
  }
];

export default function GalleryLightbox() {
  const [activePhotoIndex, setActivePhotoIndex] = useState<number | null>(null);

  const handlePrev = () => {
    if (activePhotoIndex !== null) {
      setActivePhotoIndex((prev) => (prev === 0 ? galleryItems.length - 1 : (prev ?? 0) - 1));
    }
  };

  const handleNext = () => {
    if (activePhotoIndex !== null) {
      setActivePhotoIndex((prev) => (prev === galleryItems.length - 1 ? 0 : (prev ?? 0) + 1));
    }
  };

  return (
    <section id="gallery-section" className="py-24 bg-neutral-950">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        
        {/* Title */}
        <div className="text-center max-w-3xl mx-auto space-y-4 mb-16">
          <motion.div
            initial={{ opacity: 0 }}
            whileInView={{ opacity: 0.9 }}
            viewport={{ once: true }}
            className="inline-flex items-center space-x-1.5 bg-amber-500/10 px-3.5 py-1.5 rounded-full border border-amber-500/20 text-amber-550 text-amber-400 text-xs font-semibold tracking-wider font-mono uppercase"
          >
            <Camera className="w-4 h-4 text-amber-404" />
            <span>Interactive Media Snapshots</span>
          </motion.div>
          <h2 className="text-3xl sm:text-4xl font-bold tracking-tight text-neutral-50 font-sans">
            Captivating Snapshots of Wonder Lanka
          </h2>
          <p className="text-neutral-400 text-sm sm:text-base leading-relaxed">
            Glance through stunning visual compositions captured by travel journalists across major cultural sites, highlands, and marine reserves. Click any picture to enter the widescreen lightbox tour.
          </p>
        </div>

        {/* Gallery Grid */}
        <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-3 gap-6">
          {galleryItems.map((item, index) => (
            <motion.div
              key={index}
              initial={{ opacity: 0, scale: 0.97 }}
              whileInView={{ opacity: 1, scale: 1 }}
              viewport={{ once: true }}
              transition={{ duration: 0.5, delay: index * 0.1 }}
              onClick={() => setActivePhotoIndex(index)}
              className="group relative aspect-video xl:aspect-16/9 rounded-2xl overflow-hidden cursor-zoom-in border border-neutral-850 shadow-lg bg-neutral-900"
            >
              <img
                src={item.image}
                alt={item.title}
                loading="lazy"
                referrerPolicy="no-referrer"
                className="w-full h-full object-cover group-hover:scale-105 transition-transform duration-500"
              />
              {/* Blur hover overlay */}
              <div className="absolute inset-0 bg-neutral-950/40 opacity-0 group-hover:opacity-100 transition-opacity flex items-center justify-center backdrop-blur-[2px]">
                <div className="bg-neutral-900/90 border border-neutral-700/50 p-3 rounded-full text-amber-400 shadow-xl scale-75 group-hover:scale-100 transition-all">
                  <ZoomIn className="w-6 h-6" />
                </div>
              </div>

              {/* Bottom tag info inside cards */}
              <div className="absolute bottom-0 left-0 right-0 p-4 bg-gradient-to-t from-black/85 to-transparent text-neutral-200">
                <p className="text-sm font-semibold font-sans">{item.title}</p>
                <p className="text-[10px] text-neutral-400 font-mono tracking-wide truncate">{item.caption}</p>
              </div>
            </motion.div>
          ))}
        </div>

        {/* FULLSCREEN LIGHTBOX DIALOG */}
        <AnimatePresence>
          {activePhotoIndex !== null && (
            <div className="fixed inset-0 z-50 overflow-hidden flex items-center justify-center p-4 bg-black/95">
              <motion.div
                initial={{ opacity: 0 }}
                animate={{ opacity: 1 }}
                exit={{ opacity: 0 }}
                className="absolute inset-0 cursor-zoom-out"
                onClick={() => setActivePhotoIndex(null)}
              />

              {/* Close Button top corner */}
              <button
                onClick={() => setActivePhotoIndex(null)}
                className="absolute right-6 top-6 z-20 p-2.5 rounded-full bg-neutral-800 text-neutral-350 hover:bg-neutral-700 hover:text-white cursor-pointer"
                aria-label="Close fullscreen lightbox"
              >
                <X className="w-5 h-5" />
              </button>

              {/* Navigation Arrows */}
              <button
                onClick={handlePrev}
                className="absolute left-4 sm:left-8 z-20 p-3 rounded-full bg-neutral-900/50 hover:bg-neutral-800 text-neutral-250 hover:text-white transition-colors cursor-pointer border border-neutral-810 border-neutral-800"
                aria-label="Previous photo"
              >
                <ChevronLeft className="w-6 h-6" />
              </button>
              <button
                onClick={handleNext}
                className="absolute right-4 sm:right-8 z-20 p-3 rounded-full bg-neutral-900/50 hover:bg-neutral-800 text-neutral-250 hover:text-white transition-colors cursor-pointer border border-neutral-810 border-neutral-800"
                aria-label="Next photo"
              >
                <ChevronRight className="w-6 h-6" />
              </button>

              {/* Image Frame Content */}
              <motion.div
                key={activePhotoIndex}
                initial={{ opacity: 0, scale: 0.95 }}
                animate={{ opacity: 1, scale: 1 }}
                exit={{ opacity: 0, scale: 0.95 }}
                className="relative max-w-4xl max-h-[80vh] flex flex-col items-center justify-center"
              >
                <img
                  src={galleryItems[activePhotoIndex].image}
                  alt={galleryItems[activePhotoIndex].title}
                  referrerPolicy="no-referrer"
                  className="w-full max-h-[70vh] object-contain rounded-xl shadow-2xl border border-neutral-800"
                />

                {/* Photo info details caption */}
                <div className="mt-4 text-center max-w-2xl px-4 text-neutral-300 space-y-1">
                  <h4 className="text-lg font-bold text-neutral-50 font-sans">
                    {galleryItems[activePhotoIndex].title}
                  </h4>
                  <p className="text-xs sm:text-sm text-neutral-400 font-sans">
                    {galleryItems[activePhotoIndex].caption}
                  </p>
                </div>
              </motion.div>
            </div>
          )}
        </AnimatePresence>
      </div>
    </section>
  );
}
