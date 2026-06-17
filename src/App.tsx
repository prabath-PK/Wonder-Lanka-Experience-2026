import { useState } from 'react';
import { motion, AnimatePresence } from 'motion/react';
import { Compass, Sparkles, MapPin, Star, Heart, ShieldAlert, CheckCircle, Flame, Gift, Trees, Globe, HeartHandshake } from 'lucide-react';
import Navbar from './components/Navbar';
import Footer from './components/Footer';
import Hero from './components/Hero';
import DestinationsGrid from './components/DestinationsGrid';
import ExperiencesCards from './components/ExperiencesCards';
import ToursSection from './components/ToursSection';
import ContactSection from './components/ContactSection';
import BlogSection from './components/BlogSection';
import GalleryLightbox from './components/GalleryLightbox';
import FAQs from './components/FAQs';
import FloatingWhatsApp from './components/FloatingWhatsApp';

export default function App() {
  const [activeTab, setActiveTab] = useState('home');
  const [destinationSearch, setDestinationSearch] = useState('');
  
  // Data flowing from page elements to contact form or custom builder
  const [inquiryData, setInquiryData] = useState<any>(null);

  // Triggering actions from Home / Hero
  const handleHeroSearch = (query: string) => {
    setDestinationSearch(query);
    setActiveTab('destinations');
    window.scrollTo({ top: 350, behavior: 'smooth' });
  };

  const handleInquiryForwarding = (tourNameOrDetails: string) => {
    setInquiryData({
      tourType: tourNameOrDetails,
      message: `Enquiring about the personalized ${tourNameOrDetails} package. Please provide full pricing tiers and guides.`
    });
    setActiveTab('contact');
    window.scrollTo({ top: 0, behavior: 'smooth' });
  };

  const handleCustomBuilderForwarding = (data: any) => {
    setInquiryData(data);
    setActiveTab('contact');
    window.scrollTo({ top: 0, behavior: 'smooth' });
  };

  const handlePlanTripClick = () => {
    setActiveTab('tours');
    // Scroll directly to Custom Tour Builder portion on Tours section
    setTimeout(() => {
      const el = document.getElementById('custom-tour-builder');
      if (el) {
        el.scrollIntoView({ behavior: 'smooth' });
      }
    }, 100);
  };

  return (
    <div className="bg-neutral-900 text-neutral-100 min-h-screen selection:bg-amber-400 selection:text-neutral-950 font-sans flex flex-col justify-between">
      {/* Dynamic Header */}
      <Navbar
        activeTab={activeTab}
        setActiveTab={setActiveTab}
        onPlanTripClick={handlePlanTripClick}
      />

      {/* Primary Scenic Page views container */}
      <main className="flex-grow">
        <AnimatePresence mode="wait">
          {activeTab === 'home' && (
            <motion.div
              key="home"
              initial={{ opacity: 0 }}
              animate={{ opacity: 1 }}
              exit={{ opacity: 0 }}
              transition={{ duration: 0.5 }}
            >
              {/* Immersive cinematic slider and search */}
              <Hero
                onExploreTours={() => setActiveTab('tours')}
                onContactUs={() => setActiveTab('contact')}
                onSearchDestination={handleHeroSearch}
              />

              {/* SECTION: WHY CHOOSE WONDER LANKA */}
              <section id="why-us" className="py-24 bg-neutral-950 border-t border-neutral-850">
                <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
                  <div className="text-center max-w-3xl mx-auto space-y-4 mb-16">
                    <span className="inline-flex items-center space-x-1 border border-emerald-500/10 px-3 py-1 rounded-full bg-emerald-500/5 text-emerald-400 text-xs font-mono uppercase tracking-widest font-semibold">
                      🥇 Certified local operator
                    </span>
                    <h2 className="text-3xl sm:text-4xl font-bold font-sans tracking-tight text-neutral-50">
                      Why Choose Wonder Lanka Experience
                    </h2>
                    <p className="text-neutral-400 text-sm sm:text-base leading-relaxed">
                      We blend centuries-old hospitality with state-of-the-art tour safety tracking and deep conservation backing for a seamless luxury Ceylon escape.
                    </p>
                  </div>

                  {/* Icon Card Grid */}
                  <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-3 gap-8">
                    {/* card 1 */}
                    <div className="p-6 bg-neutral-900 rounded-2xl border border-neutral-850 shadow-md space-y-4 hover:border-amber-500/20 transition-colors">
                      <div className="w-12 h-12 bg-amber-500/10 rounded-xl border border-amber-500/20 flex items-center justify-center text-amber-400">
                        <Globe className="w-6 h-6 animate-pulse" />
                      </div>
                      <h3 className="text-lg font-bold text-neutral-100 font-sans">Colombo-Based Experts</h3>
                      <p className="text-xs sm:text-sm text-neutral-450 text-neutral-400 leading-relaxed">
                        Generational, local Sri Lankans managing your route directly from our Colombo reservation team with deep insider secrets.
                      </p>
                    </div>

                    {/* card 2 */}
                    <div className="p-6 bg-neutral-900 rounded-2xl border border-neutral-850 shadow-md space-y-4 hover:border-amber-500/20 transition-colors">
                      <div className="w-12 h-12 bg-amber-500/10 rounded-xl border border-amber-500/20 flex items-center justify-center text-amber-450 text-amber-400">
                        <Compass className="w-6 h-6" />
                      </div>
                      <h3 className="text-lg font-bold text-neutral-105 text-neutral-100 font-sans">Tailor-Made Flex-Pacing</h3>
                      <p className="text-xs sm:text-sm text-neutral-400 leading-relaxed">
                        Choose high-adrenaline hikes or leisurely beach wellness. We customize travel timelines around your personal stamina and style.
                      </p>
                    </div>

                    {/* card 3 */}
                    <div className="p-6 bg-neutral-900 rounded-2xl border border-neutral-850 shadow-md space-y-4 hover:border-amber-500/20 transition-colors">
                      <div className="w-12 h-12 bg-amber-500/10 rounded-xl border border-amber-500/20 flex items-center justify-center text-amber-400">
                        <HeartHandshake className="w-6 h-6" />
                      </div>
                      <h3 className="text-lg font-bold text-neutral-105 text-neutral-100 font-sans">National Board Guides</h3>
                      <p className="text-xs sm:text-sm text-neutral-400 leading-relaxed">
                        Travel only with official, Sri Lanka Tourism Development Board authorized English-speaking driver guides for deep local safety.
                      </p>
                    </div>

                    {/* card 4 */}
                    <div className="p-6 bg-neutral-900 rounded-2xl border border-neutral-850 shadow-md space-y-4 hover:border-amber-500/20 transition-colors">
                      <div className="w-12 h-12 bg-amber-500/10 rounded-xl border border-amber-500/20 flex items-center justify-center text-amber-450 text-amber-400">
                        <Gift className="w-6 h-6" />
                      </div>
                      <h3 className="text-lg font-bold text-neutral-105 text-neutral-100 font-sans">Handpicked Stays</h3>
                      <p className="text-xs sm:text-sm text-neutral-400 leading-relaxed">
                        From eco-tented glamping near leopards inside Yala, to majestic restored 19th-century Ceylon colonial tea mansions.
                      </p>
                    </div>

                    {/* card 5 */}
                    <div className="p-6 bg-neutral-900 rounded-2xl border border-neutral-850 shadow-md space-y-4 hover:border-amber-500/20 transition-colors">
                      <div className="w-12 h-12 bg-amber-500/10 rounded-xl border border-amber-500/20 flex items-center justify-center text-amber-450 text-amber-400">
                        <Flame className="w-6 h-6" />
                      </div>
                      <h3 className="text-lg font-bold text-neutral-105 text-neutral-100 font-sans">Active GPS Fleet Safety</h3>
                      <p className="text-xs sm:text-sm text-neutral-400 leading-relaxed">
                        Every luxury hybrid vehicle has active tracking inside our 24/7 central desk to ensure absolute roadside security.
                      </p>
                    </div>

                    {/* card 6 */}
                    <div className="p-6 bg-neutral-900 rounded-2xl border border-neutral-850 shadow-md space-y-4 hover:border-amber-500/20 transition-colors">
                      <div className="w-12 h-12 bg-amber-500/10 rounded-xl border border-amber-500/20 flex items-center justify-center text-amber-455 text-amber-400">
                        <Trees className="w-6 h-6" />
                      </div>
                      <h3 className="text-lg font-bold text-neutral-105 text-neutral-100 font-sans">Conservation Core Values</h3>
                      <p className="text-xs sm:text-sm text-neutral-400 leading-relaxed">
                        We dedicate 5% of all booking commissions to direct turtle conservation programs and elephant protection trusts inside Sri Lanka.
                      </p>
                    </div>
                  </div>
                </div>
              </section>

              {/* POPULAR DESTINATIONS PREVIEW SLIDER */}
              <section id="dest-preview" className="py-24 bg-neutral-900">
                <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 space-y-12">
                  <div className="flex flex-col md:flex-row justify-between items-start md:items-end gap-6">
                    <div className="space-y-3">
                      <span className="text-[10px] bg-amber-500/10 text-amber-400 border border-amber-550 border-amber-500/10 font-mono uppercase tracking-widest font-semibold px-3 py-1 rounded">
                        🌏 Major Landmarks
                      </span>
                      <h3 className="text-2xl sm:text-3xl font-bold text-neutral-50 font-sans">Popular Destinations Preview</h3>
                      <p className="text-neutral-400 text-xs sm:text-sm max-w-xl">
                        Unveil the historical marvel of Sigiriya rock, Ella railway crossings, Yala parks and tropical Galle fort.
                      </p>
                    </div>
                    <button
                      onClick={() => setActiveTab('destinations')}
                      className="px-6 py-3 bg-neutral-950 border border-neutral-800 rounded-full hover:bg-neutral-850 text-xs text-neutral-105 text-neutral-200 hover:text-white font-bold tracking-wide transition-colors cursor-pointer"
                    >
                      See All 12 Destinations
                    </button>
                  </div>

                  {/* 3 Major Preview cards */}
                  <div className="grid grid-cols-1 md:grid-cols-3 gap-8">
                    {/* card 1 */}
                    <div
                      onClick={() => {
                        setActiveTab('destinations');
                        setDestinationSearch('Sigiriya');
                      }}
                      className="group cursor-pointer rounded-2xl overflow-hidden border border-neutral-850 shadow-xl bg-neutral-950/40 relative h-72"
                    >
                      <img
                        src="https://images.unsplash.com/photo-1588598130841-3837f8a35e74?auto=format&fit=crop&q=80&w=600"
                        alt="Sigiriya lion rock monument"
                        referrerPolicy="no-referrer"
                        className="w-full h-full object-cover group-hover:scale-105 transition-transform duration-500"
                      />
                      <div className="absolute inset-0 bg-gradient-to-t from-neutral-950 via-black/30 to-transparent" />
                      <div className="absolute bottom-4 left-4 p-2 space-y-2">
                        <span className="text-[9px] font-mono uppercase bg-emerald-600 px-2 py-0.5 rounded text-white font-bold">
                          Cultural Triangle
                        </span>
                        <h4 className="text-base font-bold text-white">Sigiriya Lion Rock</h4>
                      </div>
                    </div>

                    {/* card 2 */}
                    <div
                      onClick={() => {
                        setActiveTab('destinations');
                        setDestinationSearch('Ella');
                      }}
                      className="group cursor-pointer rounded-2xl overflow-hidden border border-neutral-850 shadow-xl bg-neutral-950/40 relative h-72"
                    >
                      <img
                        src="https://images.unsplash.com/photo-1563189333-e57551cc7204?auto=format&fit=crop&q=80&w=600"
                        alt="Nine arch bridge in Ella hill region"
                        referrerPolicy="no-referrer"
                        className="w-full h-full object-cover group-hover:scale-105 transition-transform duration-500"
                      />
                      <div className="absolute inset-0 bg-gradient-to-t from-neutral-950 via-black/30 to-transparent" />
                      <div className="absolute bottom-4 left-4 p-2 space-y-2">
                        <span className="text-[9px] font-mono uppercase bg-emerald-600 px-2 py-0.5 rounded text-white font-bold">
                          Hill Country
                        </span>
                        <h4 className="text-base font-bold text-white">Ella Railway Bridges</h4>
                      </div>
                    </div>

                    {/* card 3 */}
                    <div
                      onClick={() => {
                        setActiveTab('destinations');
                        setDestinationSearch('Galle');
                      }}
                      className="group cursor-pointer rounded-2xl overflow-hidden border border-neutral-850 shadow-xl bg-neutral-950/40 relative h-72"
                    >
                      <img
                        src="https://images.unsplash.com/photo-1586861635167-e5223aadc9fe?auto=format&fit=crop&q=80&w=600"
                        alt="Dutch fortified fort lighthouse Galle"
                        referrerPolicy="no-referrer"
                        className="w-full h-full object-cover group-hover:scale-105 transition-transform duration-500"
                      />
                      <div className="absolute inset-0 bg-gradient-to-t from-neutral-950 via-black/30 to-transparent" />
                      <div className="absolute bottom-4 left-4 p-2 space-y-2">
                        <span className="text-[9px] font-mono uppercase bg-emerald-600 px-2 py-0.5 rounded text-white font-bold">
                          Teal Coast
                        </span>
                        <h4 className="text-base font-bold text-white">Galle Historical Fort</h4>
                      </div>
                    </div>
                  </div>
                </div>
              </section>

              {/* TESTIMONIAL PANEL CAROUSEL */}
              <section id="testimonials-block" className="py-24 bg-neutral-950">
                <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 space-y-12">
                  <div className="text-center max-w-2xl mx-auto space-y-3">
                    <span className="text-[10px] bg-emerald-900/40 text-emerald-300 font-mono uppercase tracking-widest px-2.5 py-1 rounded font-bold">
                      ⭐ Guest reviews
                    </span>
                    <h3 className="text-2xl sm:text-3xl font-bold font-sans text-neutral-50">Heartwarming Reviews from Travellers</h3>
                  </div>

                  <div className="grid grid-cols-1 md:grid-cols-3 gap-8">
                    {/* Review 1 */}
                    <div className="p-6 bg-neutral-900 rounded-2xl border border-neutral-850 space-y-4 flex flex-col justify-between">
                      <p className="text-xs sm:text-xs text-neutral-300 leading-relaxed italic">
                        "An absolute masterpiece. Wonder Lanka mapped a custom 10-day tour for our family. The private chef cooking experience and Yala safari leopard sightings were breathtaking."
                      </p>
                      <div className="text-right">
                        <p className="text-xs font-semibold text-neutral-100 font-sans">— Sarah & Liam, London</p>
                        <div className="flex gap-1 justify-end text-amber-400 mt-1">
                          <Star className="w-3.5 h-3.5 fill-current" />
                          <Star className="w-3.5 h-3.5 fill-current" />
                          <Star className="w-3.5 h-3.5 fill-current" />
                          <Star className="w-3.5 h-3.5 fill-current" />
                          <Star className="w-3.5 h-3.5 fill-current" />
                        </div>
                      </div>
                    </div>

                    {/* Review 2 */}
                    <div className="p-6 bg-neutral-900 rounded-2xl border border-neutral-850 space-y-4 flex flex-col justify-between">
                      <p className="text-xs sm:text-xs text-neutral-300 leading-relaxed italic">
                        "Arugam Bay surf guiding with WL was extraordinary. They arranged high-performance board rentals and private coaching with certified ISA surfers. Unmatched execution!"
                      </p>
                      <div className="text-right">
                        <p className="text-xs font-semibold text-neutral-100 font-sans">— Marc, Munich</p>
                        <div className="flex gap-1 justify-end text-amber-400 mt-1">
                          <Star className="w-3.5 h-3.5 fill-current" />
                          <Star className="w-3.5 h-3.5 fill-current" />
                          <Star className="w-3.5 h-3.5 fill-current" />
                          <Star className="w-3.5 h-3.5 fill-current" />
                          <Star className="w-3.5 h-3.5 fill-current" />
                        </div>
                      </div>
                    </div>

                    {/* Review 3 */}
                    <div className="p-6 bg-neutral-900 rounded-2xl border border-neutral-850 space-y-4 flex flex-col justify-between">
                      <p className="text-xs sm:text-xs text-neutral-300 leading-relaxed italic">
                        "We did our wedding honeymoon through their luxury package. Gregory Lake high teas and private helicopter charters over Sigiriya were unforgettable and worth every penny."
                      </p>
                      <div className="text-right">
                        <p className="text-xs font-semibold text-neutral-100 font-sans">— Chloe & Jack, Sydney</p>
                        <div className="flex gap-1 justify-end text-amber-400 mt-1">
                          <Star className="w-3.5 h-3.5 fill-current" />
                          <Star className="w-3.5 h-3.5 fill-current" />
                          <Star className="w-3.5 h-3.5 fill-current" />
                          <Star className="w-3.5 h-3.5 fill-current" />
                          <Star className="w-3.5 h-3.5 fill-current" />
                        </div>
                      </div>
                    </div>
                  </div>
                </div>
              </section>

              {/* MEDIA GALLERY SECTION */}
              <GalleryLightbox />

              {/* BLOG ARTICLES HUB PREVIEW */}
              <section className="py-16 bg-neutral-900">
                <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 text-center space-y-6">
                  <h3 className="text-2xl font-bold font-sans text-neutral-100">Access Our Certified Ceylon Insiders guides</h3>
                  <button
                    onClick={() => {
                      setActiveTab('contact');
                      // Focus or scroll to blog
                      setTimeout(() => {
                        const target = document.getElementById('blog-anchor');
                        if (target) target.scrollIntoView({ behavior: 'smooth' });
                      }, 100);
                    }}
                    className="px-6 py-3 bg-emerald-600 hover:bg-emerald-500 rounded-full font-bold text-xs cursor-pointer text-white"
                  >
                    Load Detailed Travel Blogs
                  </button>
                </div>
              </section>

              {/* FAQs BRIEF ACCORDIONS */}
              <FAQs />

              {/* COMPREHENSIVE FINAL CALL TO ACTION (CTA) BAR */}
              <div id="final-cta" className="relative py-24 bg-gradient-to-br from-emerald-950 to-neutral-950 overflow-hidden text-center border-t border-emerald-900/30">
                <div className="absolute inset-0 opacity-15 pointer-events-none">
                  <img
                    src="https://images.unsplash.com/photo-1543731068-7e0f5beff43a?auto=format&fit=crop&q=80&w=1200"
                    alt="Ceylon tea estates"
                    referrerPolicy="no-referrer"
                    className="w-full h-full object-cover filter blur-sm"
                  />
                </div>

                <div className="relative z-10 max-w-4xl mx-auto px-4 space-y-6">
                  <h3 className="text-3xl sm:text-5xl font-bold font-sans tracking-tight text-white leading-tight">
                    Start Planning Your Sri Lankan <br /> Adventure Today
                  </h3>
                  <p className="text-sm sm:text-lg text-neutral-300 max-w-2xl mx-auto">
                    Aayubowan! Our local experts are waiting to map your private, chauffeured Ceylon itinerary completely free. Let’s co-create your dream escape.
                  </p>
                  
                  <div className="flex flex-wrap justify-center gap-4 pt-4">
                    <button
                      onClick={() => {
                        setActiveTab('tours');
                        window.scrollTo({ top: 0, behavior: 'smooth' });
                      }}
                      className="px-8 py-3.5 bg-amber-500 hover:bg-amber-400 text-neutral-950 font-bold rounded-full text-xs sm:text-sm shadow-lg leading-none flex items-center gap-1.5 cursor-pointer"
                    >
                      <Flame className="w-4 h-4 fill-current text-neutral-950 shrink-0" />
                      <span>Configure Custom Tour</span>
                    </button>
                    <button
                      onClick={() => {
                        setActiveTab('contact');
                        window.scrollTo({ top: 0, behavior: 'smooth' });
                      }}
                      className="px-8 py-3.5 bg-neutral-900 border border-neutral-700/60 text-white rounded-full text-xs sm:text-sm hover:bg-neutral-850 cursor-pointer"
                    >
                      Connect Hotlines Directly
                    </button>
                  </div>
                </div>
              </div>
            </motion.div>
          )}

          {activeTab === 'destinations' && (
            <motion.div
              key="destinations"
              initial={{ opacity: 0, y: 15 }}
              animate={{ opacity: 1, y: 0 }}
              exit={{ opacity: 0 }}
              transition={{ duration: 0.35 }}
            >
              <DestinationsGrid
                searchQuery={destinationSearch}
                setSearchQuery={setDestinationSearch}
                onBookDestinationTour={handleInquiryForwarding}
              />
            </motion.div>
          )}

          {activeTab === 'experiences' && (
            <motion.div
              key="experiences"
              initial={{ opacity: 0, scale: 0.98 }}
              animate={{ opacity: 1, scale: 1 }}
              exit={{ opacity: 0 }}
              transition={{ duration: 0.35 }}
            >
              <ExperiencesCards
                onSelectedExperience={handleInquiryForwarding}
              />
            </motion.div>
          )}

          {activeTab === 'tours' && (
            <motion.div
              key="tours"
              initial={{ opacity: 0, y: 15 }}
              animate={{ opacity: 1, y: 0 }}
              exit={{ opacity: 0 }}
              transition={{ duration: 0.35 }}
            >
              <ToursSection
                preSelectedInquiryName={inquiryData?.tourType || ''}
                onPlanTripInquire={handleCustomBuilderForwarding}
              />
            </motion.div>
          )}

          {activeTab === 'contact' && (
            <motion.div
              key="contact"
              initial={{ opacity: 0 }}
              animate={{ opacity: 1 }}
              exit={{ opacity: 0 }}
              transition={{ duration: 0.35 }}
              className="space-y-4"
            >
              {/* Main Contact panel */}
              <ContactSection
                inquiryPrePopulate={inquiryData}
                onClearPrePopulate={() => setInquiryData(null)}
              />

              {/* Inline Full Blog anchors wrapper */}
              <div id="blog-anchor" className="bg-neutral-950 py-4">
                <BlogSection />
              </div>
            </motion.div>
          )}
        </AnimatePresence>
      </main>

      {/* Floating fast Support */}
      <FloatingWhatsApp />

      {/* Rich Footer links */}
      <Footer setActiveTab={setActiveTab} />
    </div>
  );
}
