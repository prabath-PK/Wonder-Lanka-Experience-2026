import { useState } from 'react';
import { motion, AnimatePresence } from 'motion/react';
import { Compass, Sparkles, MapPin, Star, Heart, ShieldAlert, CheckCircle, Flame, Gift, Trees, Globe, HeartHandshake, User, Award } from 'lucide-react';
import Navbar from './components/Navbar';
import Footer from './components/Footer';
import Hero from './components/Hero';
import DestinationsGrid from './components/DestinationsGrid';
import ExperiencesCards from './components/ExperiencesCards';
import ToursSection from './components/ToursSection';
import ContactSection from './components/ContactSection';
import BlogSection from './components/BlogSection';
import GalleryLightbox from './components/GalleryLightbox';
import GuestGalleryCarousel from './components/GuestGalleryCarousel';
import FAQs from './components/FAQs';
import FloatingWhatsApp from './components/FloatingWhatsApp';
import travelPartnerImg from './assets/images/srilanka_travel_partner_1781774434830.jpg';
import culturalHero from './assets/images/srilanka_cultural_hero_1781713945959.jpg';
import teaEstate from './assets/images/srilanka_tea_estate_1781713963590.jpg';
import beachHero from './assets/images/srilanka_beach_1781713979894.jpg';
import wildlifeHero from './assets/images/srilanka_wildlife_1781713996120.jpg';
import { Destination } from './types';
import { destinations } from './data';
import { X, Calendar as CalendarIcon, Clock, Check } from 'lucide-react';

export default function App() {
  const [activeTab, setActiveTab] = useState('home');
  const [destinationSearch, setDestinationSearch] = useState('');
  
  // Data flowing from page elements to contact form or custom builder
  const [inquiryData, setInquiryData] = useState<any>(null);
  const [selectedPreviewDest, setSelectedPreviewDest] = useState<Destination | null>(null);

  // Triggering actions from Home / Hero
  const handleHeroSearch = (query: string) => {
    setDestinationSearch(query);
    setActiveTab('destinations');
    window.scrollTo({ top: 350, behavior: 'smooth' });
  };

  const handleCardClick = (id: string) => {
    const found = destinations.find(d => d.id === id);
    if (found) {
      setSelectedPreviewDest(found);
    }
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

              {/* SECTION: ABOUT WONDER LANKA EXPERIENCE */}
              <section id="about-us" className="py-24 bg-neutral-900 border-t border-neutral-850 overflow-hidden">
                <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 relative">
                  {/* Subtle Background Light Ray Glows */}
                  <div className="absolute top-1/4 -left-1/4 w-96 h-96 bg-emerald-500/5 blur-3xl rounded-full" />
                  <div className="absolute bottom-1/4 -right-1/4 w-96 h-96 bg-amber-500/5 blur-3xl rounded-full" />

                  <div className="grid grid-cols-1 lg:grid-cols-12 gap-12 lg:gap-16 items-center">
                    {/* Left Column: Story narrative */}
                    <div className="lg:col-span-7 space-y-8 relative z-10">
                      <div className="space-y-4">
                        <span className="inline-flex items-center space-x-2 border border-amber-500/10 px-3.5 py-1.5 rounded-full bg-amber-500/5 text-amber-400 text-xs font-mono uppercase tracking-widest font-semibold">
                          <HeartHandshake className="w-3.5 h-3.5" />
                          <span>Meet Gayan & The Team</span>
                        </span>
                        <h2 className="text-3xl sm:text-4xl lg:text-5xl font-extrabold font-serif tracking-tight leading-tight select-none">
                          About <span className="text-[#D95C1C]">Wonder</span> <span className="text-[#16B1BC]">Lanka</span> <span className="text-[#5BA370]">Experience</span>
                        </h2>
                      </div>

                      <div className="space-y-6 text-neutral-300 text-base sm:text-lg leading-relaxed font-sans">
                        <p className="border-l-3 border-[#5BA370] pl-4 italic text-neutral-200">
                          We're crafting a perfect tour facilitator & operator service in Sri Lanka. Our aim is to be welcoming, flexible and friendly as your driver and travel partner.
                        </p>

                        <p>
                          My name is <span className="text-neutral-50 font-semibold font-serif underline decoration-[#D95C1C] decoration-2 underline-offset-4">Gayan Waruna</span> and I am the owner of <span className="text-neutral-50 font-serif font-semibold">Wonder Lanka Experience</span>. I am handling this website with my team, always trying to provide the very best, unique and transparent service as your trusted travel partner.
                        </p>

                        <p>
                          We are travelling specialists all over Sri Lanka and we'd be happy to welcome you and show you around. From the ancient city of Polonnaruwa to the golden beaches of Mirissa, we ensure <span className="text-amber-400 font-medium">every mile is a memory</span>.
                        </p>
                      </div>

                      {/* Micro KPI and Action Button */}
                      <div className="pt-4 flex flex-wrap gap-4 items-center">
                        <button
                          onClick={() => setActiveTab('contact')}
                          className="px-6 py-3 bg-gradient-to-r from-emerald-600 to-[#16B1BC] text-neutral-50 font-semibold rounded-xl shadow-lg shadow-emerald-900/20 hover:shadow-emerald-900/30 hover:scale-[1.02] active:scale-[0.98] transition-all flex items-center space-x-2 text-sm sm:text-base cursor-pointer"
                        >
                          <span>Plan Your Tour with Gayan</span>
                          <Compass className="w-4 h-4 animate-spin-slow" />
                        </button>
                        
                        <div className="flex items-center space-x-3 text-neutral-400 font-mono text-xs sm:text-sm bg-neutral-950/40 px-4 py-2.5 rounded-xl border border-neutral-850/60">
                          <Award className="w-4 h-4 text-amber-500" />
                          <span>100% Customized Travel Itineraries</span>
                        </div>
                      </div>
                    </div>

                    {/* Right Column: Visual Portrait Card */}
                    <div className="lg:col-span-5 relative">
                      <div className="relative mx-auto max-w-sm lg:max-w-none group">
                        {/* Decorative background framing accent */}
                        <div className="absolute -inset-1.5 bg-gradient-to-r from-[#D95C1C] via-[#16B1BC] to-[#5BA370] rounded-2.5xl opacity-40 blur-md transition duration-500" />
                        
                        {/* Main Image Wrapper */}
                        <div className="relative bg-neutral-950 p-2 rounded-2.5xl border border-neutral-800 shadow-2xl">
                          <img
                            src={travelPartnerImg}
                            alt="Gayan Waruna - Owner of Wonder Lanka Experience"
                            referrerPolicy="no-referrer"
                            className="w-full h-auto aspect-[4/5] object-cover rounded-2xl grayscale-[20%] group-hover:grayscale-0 transition-all duration-700"
                          />
                          
                          {/* Rich Floating Portrait Badge */}
                          <div className="absolute bottom-6 left-6 right-6 bg-neutral-950/90 backdrop-blur-md p-4 rounded-xl border border-neutral-800 shadow-xl flex items-center justify-between">
                            <div className="space-y-1">
                              <h4 className="text-neutral-50 font-serif font-bold text-base sm:text-lg">Gayan Waruna</h4>
                              <p className="text-[#5BA370] text-xs font-mono uppercase tracking-wider font-semibold">Owner & Founder</p>
                            </div>
                            <div className="bg-neutral-900/90 py-1.5 px-2.5 rounded-lg border border-neutral-800 flex items-center space-x-1">
                              <Star className="w-3.5 h-3.5 text-amber-500 fill-amber-500" />
                              <span className="text-xs font-mono font-bold text-neutral-200">5.0</span>
                            </div>
                          </div>
                        </div>

                        {/* Welcoming tag overlay */}
                        <div className="absolute -top-3 -right-3 bg-gradient-to-r from-[#D95C1C] to-amber-500 text-neutral-950 text-[10px] font-bold font-mono tracking-widest uppercase px-3 py-1.5 rounded-lg shadow-lg rotate-3 select-none">
                          ★ Local Specialist
                        </div>
                      </div>
                    </div>
                  </div>
                </div>
              </section>

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

              {/* POPULAR DESTINATIONS PREVIEW BENTO GRID */}
              <section id="dest-preview" className="py-24 bg-neutral-950 border-t border-neutral-900">
                <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 space-y-12">
                  <div className="flex flex-col md:flex-row justify-between items-start md:items-end gap-6">
                    <div className="space-y-2">
                      <span className="text-[11px] text-[#b48d57] font-mono uppercase tracking-[0.22em] font-bold block">
                        Popular Destinations
                      </span>
                      <h3 className="text-3xl sm:text-4xl lg:text-5xl font-extrabold text-white font-serif tracking-tight select-none leading-none">
                        Where to wander
                      </h3>
                    </div>
                    <button
                      onClick={() => setActiveTab('destinations')}
                      className="text-[#b48d57] hover:text-amber-400 font-serif font-bold text-sm sm:text-base tracking-wide transition-all flex items-center space-x-1.5 cursor-pointer group"
                    >
                      <span>View all destinations</span>
                      <span className="transition-transform duration-200 group-hover:translate-x-1">→</span>
                    </button>
                  </div>

                  {/* Elegant Bento CSS Grid */}
                  <div className="grid grid-cols-1 md:grid-cols-3 gap-6 sm:gap-8 auto-rows-min md:grid-flow-row-dense">
                    {/* Bento Card 1: Sigiriya (Tall Portrait, Spans 2 Rows) */}
                    <div
                      onClick={() => handleCardClick('sigiriya')}
                      className="group cursor-pointer rounded-[24px] overflow-hidden shadow-md bg-neutral-900 border border-neutral-200/20 relative md:col-start-1 md:row-start-1 md:row-span-2 h-[420px] md:h-[620px] transition-all duration-300 hover:shadow-xl"
                    >
                      <img
                        src={culturalHero}
                        alt="Sigiriya Lion Rock Fortress"
                        referrerPolicy="no-referrer"
                        className="w-full h-full object-cover group-hover:scale-[1.03] transition-transform duration-700 ease-out"
                      />
                      <div className="absolute inset-0 bg-gradient-to-t from-neutral-950/90 via-neutral-950/20 to-transparent" />
                      <div className="absolute bottom-6 left-6 right-6 p-1">
                        <span className="text-[10px] md:text-xs text-amber-500 font-sans tracking-widest font-bold uppercase block mb-1">
                          Cultural Triangle
                        </span>
                        <h4 className="text-2xl sm:text-3xl font-serif font-extrabold text-white tracking-tight leading-none mb-2">
                          Sigiriya
                        </h4>
                      </div>
                    </div>

                    {/* Bento Card 2: Ella (Column 2, Row 1) */}
                    <div
                      onClick={() => handleCardClick('ella')}
                      className="group cursor-pointer rounded-[24px] overflow-hidden shadow-md bg-neutral-900 border border-neutral-200/20 relative md:col-start-2 md:row-start-1 h-[220px] md:h-[296px] transition-all duration-300 hover:shadow-xl"
                    >
                      <img
                        src={teaEstate}
                        alt="Ella Tea Plantations"
                        referrerPolicy="no-referrer"
                        className="w-full h-full object-cover group-hover:scale-[1.03] transition-transform duration-700 ease-out"
                      />
                      <div className="absolute inset-0 bg-gradient-to-t from-neutral-950/90 via-neutral-950/20 to-transparent" />
                      <div className="absolute bottom-5 left-5 right-5 p-1">
                        <span className="text-[10px] md:text-xs text-amber-500 font-sans tracking-widest font-bold uppercase block mb-1">
                          Hill Country
                        </span>
                        <h4 className="text-xl sm:text-2xl font-serif font-extrabold text-white tracking-tight leading-none">
                          Ella
                        </h4>
                      </div>
                    </div>

                    {/* Bento Card 3: Mirissa (Column 3, Row 1) */}
                    <div
                      onClick={() => handleCardClick('mirissa')}
                      className="group cursor-pointer rounded-[24px] overflow-hidden shadow-md bg-neutral-900 border border-neutral-200/20 relative md:col-start-3 md:row-start-1 h-[220px] md:h-[296px] transition-all duration-300 hover:shadow-xl"
                    >
                      <img
                        src={beachHero}
                        alt="Mirissa tropical sweep"
                        referrerPolicy="no-referrer"
                        className="w-full h-full object-cover group-hover:scale-[1.03] transition-transform duration-700 ease-out"
                      />
                      <div className="absolute inset-0 bg-gradient-to-t from-neutral-950/90 via-neutral-950/20 to-transparent" />
                      <div className="absolute bottom-5 left-5 right-5 p-1">
                        <span className="text-[10px] md:text-xs text-amber-500 font-sans tracking-widest font-bold uppercase block mb-1">
                          South Coast
                        </span>
                        <h4 className="text-xl sm:text-2xl font-serif font-extrabold text-white tracking-tight leading-none">
                          Mirissa
                        </h4>
                      </div>
                    </div>

                    {/* Bento Card 4: Yala (Column 2, Row 2) */}
                    <div
                      onClick={() => handleCardClick('yala')}
                      className="group cursor-pointer rounded-[24px] overflow-hidden shadow-md bg-neutral-900 border border-neutral-200/20 relative md:col-start-2 md:row-start-2 h-[220px] md:h-[296px] transition-all duration-300 hover:shadow-xl"
                    >
                      <img
                        src={wildlifeHero}
                        alt="Yala Leopard Safari"
                        referrerPolicy="no-referrer"
                        className="w-full h-full object-cover group-hover:scale-[1.03] transition-transform duration-700 ease-out"
                      />
                      <div className="absolute inset-0 bg-gradient-to-t from-neutral-950/90 via-neutral-950/20 to-transparent" />
                      <div className="absolute bottom-5 left-5 right-5 p-1">
                        <span className="text-[10px] md:text-xs text-amber-500 font-sans tracking-widest font-bold uppercase block mb-1">
                          Safari
                        </span>
                        <h4 className="text-xl sm:text-2xl font-serif font-extrabold text-white tracking-tight leading-none">
                          Yala
                        </h4>
                      </div>
                    </div>

                    {/* Bento Card 5: Galle (Column 3, Row 2) */}
                    <div
                      onClick={() => handleCardClick('galle')}
                      className="group cursor-pointer rounded-[24px] overflow-hidden shadow-md bg-neutral-900 border border-neutral-200/20 relative md:col-start-3 md:row-start-2 h-[220px] md:h-[296px] transition-all duration-300 hover:shadow-xl"
                    >
                      <img
                        src="https://images.unsplash.com/photo-1586861635167-e5223aadc9fe?auto=format&fit=crop&q=80&w=1200"
                        alt="Galle Dutch Fort"
                        referrerPolicy="no-referrer"
                        className="w-full h-full object-cover group-hover:scale-[1.03] transition-transform duration-700 ease-out"
                      />
                      <div className="absolute inset-0 bg-gradient-to-t from-neutral-950/90 via-neutral-950/20 to-transparent" />
                      <div className="absolute bottom-5 left-5 right-5 p-1">
                        <span className="text-[10px] md:text-xs text-amber-500 font-sans tracking-widest font-bold uppercase block mb-1">
                          Heritage
                        </span>
                        <h4 className="text-xl sm:text-2xl font-serif font-extrabold text-white tracking-tight leading-none">
                          Galle
                        </h4>
                      </div>
                    </div>

                    {/* Bento Card 6: Kandy (Column 1, Row 3) */}
                    <div
                      onClick={() => handleCardClick('kandy')}
                      className="group cursor-pointer rounded-[24px] overflow-hidden shadow-md bg-neutral-900 border border-neutral-200/20 relative md:col-start-1 md:row-start-3 h-[220px] md:h-[296px] transition-all duration-300 hover:shadow-xl"
                    >
                      <img
                        src="https://images.unsplash.com/photo-1546708973-b339540b5162?auto=format&fit=crop&q=80&w=1200"
                        alt="Kandy Sacred Capital"
                        referrerPolicy="no-referrer"
                        className="w-full h-full object-cover group-hover:scale-[1.03] transition-transform duration-700 ease-out"
                      />
                      <div className="absolute inset-0 bg-gradient-to-t from-neutral-950/90 via-neutral-950/20 to-transparent" />
                      <div className="absolute bottom-5 left-5 right-5 p-1">
                        <span className="text-[10px] md:text-xs text-amber-500 font-sans tracking-widest font-bold uppercase block mb-1">
                          Culture
                        </span>
                        <h4 className="text-xl sm:text-2xl font-serif font-extrabold text-white tracking-tight leading-none">
                          Kandy
                        </h4>
                      </div>
                    </div>
                  </div>
                </div>

                {/* Interactive Destination Detail Modal */}
                <AnimatePresence>
                  {selectedPreviewDest && (
                    <motion.div
                      initial={{ opacity: 0 }}
                      animate={{ opacity: 1 }}
                      exit={{ opacity: 0 }}
                      className="fixed inset-0 z-50 flex items-center justify-center p-4 bg-neutral-950/80 backdrop-blur-md"
                    >
                      <motion.div
                        initial={{ scale: 0.95, y: 20 }}
                        animate={{ scale: 1, y: 0 }}
                        exit={{ scale: 0.95, y: 20 }}
                        className="bg-neutral-950 border border-neutral-850 rounded-[28px] max-w-4xl w-full max-h-[85vh] overflow-y-auto shadow-2xl relative"
                      >
                        {/* Banner Image */}
                        <div className="relative h-60 sm:h-80 w-full overflow-hidden">
                          <img
                            src={
                              selectedPreviewDest.id === 'sigiriya' ? culturalHero :
                              selectedPreviewDest.id === 'ella' ? teaEstate :
                              selectedPreviewDest.id === 'mirissa' ? beachHero :
                              selectedPreviewDest.id === 'yala' ? wildlifeHero :
                              selectedPreviewDest.image
                            }
                            alt={selectedPreviewDest.name}
                            className="w-full h-full object-cover"
                          />
                          <div className="absolute inset-0 bg-gradient-to-t from-neutral-950 via-neutral-950/25 to-transparent" />
                          
                          {/* Close button */}
                          <button
                            onClick={() => setSelectedPreviewDest(null)}
                            className="absolute top-4 right-4 bg-neutral-900/80 hover:bg-neutral-800 text-neutral-300 hover:text-white p-2.5 rounded-full border border-neutral-800 transition-colors backdrop-blur-sm cursor-pointer"
                          >
                            <X className="w-5 h-5" />
                          </button>

                          {/* Banner overlay tags */}
                          <div className="absolute bottom-6 left-6 right-6">
                            <span className="text-[10px] sm:text-xs font-mono uppercase bg-amber-500/20 text-amber-400 border border-amber-500/30 px-3 py-1 rounded-md tracking-wider font-semibold">
                              {selectedPreviewDest.region} region
                            </span>
                            <h4 className="text-3xl sm:text-4xl font-extrabold font-serif text-white mt-3 tracking-tight">
                              {selectedPreviewDest.name}
                            </h4>
                          </div>
                        </div>

                        {/* Modal Content */}
                        <div className="p-6 sm:p-10 space-y-8">
                          {/* Best Time Row */}
                          <div className="flex flex-col sm:flex-row gap-4 justify-between items-start sm:items-center p-4 bg-neutral-900/60 rounded-2xl border border-neutral-850/60">
                            <div className="flex items-center space-x-3">
                              <CalendarIcon className="w-5 h-5 text-emerald-400" />
                              <div>
                                <p className="text-[10px] uppercase tracking-wider font-mono text-neutral-405 text-neutral-400">Best Season to Visit</p>
                                <p className="text-sm font-semibold text-neutral-200">{selectedPreviewDest.bestTime}</p>
                              </div>
                            </div>
                            <button
                              onClick={() => {
                                handleInquiryForwarding(selectedPreviewDest.name);
                                setSelectedPreviewDest(null);
                                setActiveTab('contact');
                                setTimeout(() => {
                                  const contactEl = document.getElementById('contact');
                                  if (contactEl) {
                                    contactEl.scrollIntoView({ behavior: 'smooth' });
                                  }
                                }, 300);
                              }}
                              className="w-full sm:w-auto px-5 py-2.5 bg-gradient-to-r from-emerald-600 to-[#16B1BC] text-white font-semibold text-xs rounded-xl shadow-md shadow-emerald-950/30 hover:scale-[1.02] active:scale-[0.98] transition-all cursor-pointer text-center"
                            >
                              Consult Travel Designer
                            </button>
                          </div>

                          {/* Columns */}
                          <div className="grid grid-cols-1 md:grid-cols-12 gap-8 text-neutral-300">
                            {/* Left text */}
                            <div className="md:col-span-7 space-y-6">
                              <div className="space-y-3">
                                <h5 className="text-sm font-mono uppercase tracking-wider text-amber-500 font-bold">Overview</h5>
                                <p className="text-sm sm:text-base leading-relaxed text-neutral-300">{selectedPreviewDest.overview}</p>
                              </div>

                              <div className="space-y-3">
                                <h5 className="text-sm font-mono uppercase tracking-wider text-emerald-400 font-bold">Top Attractions</h5>
                                <ul className="grid grid-cols-1 gap-2.5">
                                  {selectedPreviewDest.attractions.map((attr, idx) => (
                                    <li key={idx} className="flex items-start space-x-2.5 text-xs sm:text-sm">
                                      <Check className="w-4 h-4 text-emerald-500 shrink-0 mt-0.5" />
                                      <span>{attr}</span>
                                    </li>
                                  ))}
                                </ul>
                              </div>
                            </div>

                            {/* Right text */}
                            <div className="md:col-span-5 space-y-6 border-t md:border-t-0 md:border-l border-neutral-850 pt-8 md:pt-0 md:pl-8">
                              <div className="space-y-3">
                                <h5 className="text-sm font-mono uppercase tracking-wider text-[#16B1BC] font-bold">Activities</h5>
                                <ul className="space-y-2.5">
                                  {selectedPreviewDest.activities.map((act, idx) => (
                                    <li key={idx} className="flex items-start space-x-2.5 text-xs sm:text-sm">
                                      <Sparkles className="w-4 h-4 text-[#16B1BC] shrink-0 mt-0.5" />
                                      <span>{act}</span>
                                    </li>
                                  ))}
                                </ul>
                              </div>

                              <div className="space-y-3 p-4 bg-amber-500/5 rounded-2xl border border-amber-500/10">
                                <h5 className="text-xs font-mono uppercase tracking-wider text-amber-400 font-bold flex items-center space-x-1.5">
                                  <span>💡 Local Insider Tips</span>
                                </h5>
                                <ul className="space-y-2 text-[11px] text-neutral-300 leading-relaxed list-disc pl-4">
                                  {selectedPreviewDest.tips.map((tip, idx) => (
                                    <li key={idx}>{tip}</li>
                                  ))}
                                </ul>
                              </div>
                            </div>
                          </div>
                        </div>
                      </motion.div>
                    </motion.div>
                  )}
                </AnimatePresence>
              </section>

              {/* TESTIMONIAL PANEL CAROUSEL */}
              <section id="testimonials-block" className="py-24 bg-neutral-950">
                <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 space-y-12">
                  <div className="text-center max-w-2xl mx-auto space-y-3">
                    <span className="text-[10px] bg-emerald-900/40 text-emerald-300 font-mono uppercase tracking-widest px-2.5 py-1 rounded font-bold">
                      ⭐ Google Maps reviews
                    </span>
                    <h3 className="text-2xl sm:text-3xl font-bold font-sans text-neutral-50">Real Experiences from Our Guests</h3>
                  </div>

                  <div className="grid grid-cols-1 md:grid-cols-3 gap-8">
                    {/* Review 1 */}
                    <div className="p-6 bg-neutral-900 rounded-2xl border border-neutral-850 space-y-4 flex flex-col justify-between">
                      <p className="text-xs sm:text-xs text-neutral-300 leading-relaxed italic">
                        "An incredible experience in Weligama! The surf lessons with the team at Wonder Lanka were top-notch. As a beginner, I felt absolutely safe and caught so many waves. The coaches are professional, super friendly, and know the local breaks inside out. Highly recommend!"
                      </p>
                      <div className="text-right">
                        <p className="text-xs font-semibold text-neutral-100 font-sans">— Max, Berlin</p>
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
                        "We booked a custom tour across Sri Lanka with Wonder Lanka, and it was the absolute highlight of our trip. From exploring Sigiriya to enjoying the beautiful beaches of Gurubebila and Weligama, everything was perfectly organized. Our guide was amazing!"
                      </p>
                      <div className="text-right">
                        <p className="text-xs font-semibold text-neutral-100 font-sans">— Sophie & Pierre, Paris</p>
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
                        "Beautiful atmosphere and a wonderful surf camp! The location in Gurubebila is perfect—only a short walk to the main surf breaks of Weligama. The guides helped us rent high-quality boards and gave us secret tips for the best Ceylon tea & curries."
                      </p>
                      <div className="text-right">
                        <p className="text-xs font-semibold text-neutral-100 font-sans">— Emily, London</p>
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

                  <div className="flex justify-center pt-4">
                    <a
                      href="https://maps.app.goo.gl/WLN2utHHKBnfpEQb7"
                      target="_blank"
                      rel="noreferrer"
                      className="inline-flex items-center space-x-2 px-6 py-3 bg-neutral-900 hover:bg-neutral-850 border border-neutral-800 text-amber-400 font-sans text-xs font-bold rounded-full transition-all tracking-wider uppercase cursor-pointer"
                    >
                      <span>Read More Reviews on Google Maps</span>
                      <span>→</span>
                    </a>
                  </div>
                </div>
              </section>

              {/* WONDER LANKA GUEST GALLERY CAROUSEL */}
              <GuestGalleryCarousel />

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
