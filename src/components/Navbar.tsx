import { useState, useEffect } from 'react';
import { motion, AnimatePresence } from 'motion/react';
import { Menu, X, Compass, MapPin, Sparkles, Phone, CalendarDays, Share2 } from 'lucide-react';

interface NavbarProps {
  activeTab: string;
  setActiveTab: (tab: string) => void;
  onPlanTripClick: () => void;
}

export default function Navbar({ activeTab, setActiveTab, onPlanTripClick }: NavbarProps) {
  const [isOpen, setIsOpen] = useState(false);
  const [scrolled, setScrolled] = useState(false);

  useEffect(() => {
    const handleScroll = () => {
      if (window.scrollY > 20) {
        setScrolled(true);
      } else {
        setScrolled(false);
      }
    };
    window.addEventListener('scroll', handleScroll);
    return () => window.removeEventListener('scroll', handleScroll);
  }, []);

  const navItems = [
    { id: 'home', label: 'Home', icon: Compass },
    { id: 'destinations', label: 'Destinations', icon: MapPin },
    { id: 'experiences', label: 'Experiences', icon: Sparkles },
    { id: 'tours', label: 'Tours & Custom Packages', icon: CalendarDays },
    { id: 'contact', label: 'Contact', icon: Phone },
  ];

  const handleNavItemClick = (itemId: string) => {
    setActiveTab(itemId);
    setIsOpen(false);
    window.scrollTo({ top: 0, behavior: 'smooth' });
  };

  return (
    <header
      id="main-header"
      className={`fixed top-0 left-0 w-full z-50 transition-all duration-300 ${
        scrolled
          ? 'bg-neutral-900/90 backdrop-blur-md shadow-lg border-b border-neutral-800'
          : 'bg-gradient-to-b from-black/60 to-transparent'
      }`}
    >
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        <div className="flex justify-between items-center h-20">
          {/* Brand Logo */}
          <div
            id="brand-logo-container"
            onClick={() => handleNavItemClick('home')}
            className="flex items-center space-x-2 cursor-pointer group"
          >
            <div className="w-10 h-10 rounded-full bg-emerald-600 flex items-center justify-center border border-emerald-400/30 shadow-md shadow-emerald-900/20 group-hover:scale-105 transition-transform">
              <Share2 className="w-5 h-5 text-neutral-100" />
            </div>
            <div className="flex flex-col">
              <span className="text-xl font-bold tracking-wider text-neutral-50 font-sans group-hover:text-emerald-300 transition-colors">
                WONDER LANKA
              </span>
              <span className="text-[10px] uppercase tracking-[0.25em] text-amber-400 font-mono">
                EXPERIENCE
              </span>
            </div>
          </div>

          {/* Desktop Navigation */}
          <nav id="desktop-nav" className="hidden md:flex items-center space-x-6">
            {navItems.map((item) => {
              const Icon = item.icon;
              const isActive = activeTab === item.id;
              return (
                <button
                  key={item.id}
                  id={`nav-link-${item.id}`}
                  onClick={() => handleNavItemClick(item.id)}
                  className={`relative flex items-center space-x-1.5 px-3 py-2 text-sm font-medium transition-colors cursor-pointer ${
                    isActive
                      ? 'text-amber-400'
                      : scrolled
                      ? 'text-neutral-300 hover:text-white'
                      : 'text-neutral-200 hover:text-white'
                  }`}
                >
                  <Icon className="w-4 h-4" />
                  <span>{item.label}</span>
                  {isActive && (
                    <motion.div
                      layoutId="activeUnderline"
                      className="absolute bottom-0 left-3 right-3 h-0.5 bg-amber-400"
                      transition={{ type: 'spring', stiffness: 380, damping: 30 }}
                    />
                  )}
                </button>
              );
            })}

            {/* Custom CTA */}
            <button
              id="cta-plan-trip"
              onClick={onPlanTripClick}
              className="ml-2 px-5 py-2.5 rounded-full bg-emerald-600 hover:bg-emerald-500 text-neutral-50 text-sm font-semibold tracking-wide transition-all shadow-md hover:shadow-emerald-950/20 ring-1 ring-emerald-400/10 cursor-pointer"
            >
              Plan My Trip
            </button>
          </nav>

          {/* Mobile Menu Button */}
          <div className="flex md:hidden items-center space-x-2">
            <button
              id="cta-mobile-plan-trip"
              onClick={onPlanTripClick}
              className="px-4 py-2 rounded-full bg-emerald-600 hover:bg-emerald-500 text-neutral-50 text-xs font-semibold tracking-wide transition-all cursor-pointer"
            >
              Request Custom
            </button>
            <button
              id="mobile-menu-toggle"
              onClick={() => setIsOpen(!isOpen)}
              className="p-2 rounded-md text-neutral-300 hover:text-white focus:outline-none focus:ring-2 focus:ring-inset focus:ring-emerald-500"
              aria-label="Toggle navigation menu"
            >
              {isOpen ? <X className="w-6 h-6" /> : <Menu className="w-6 h-6" />}
            </button>
          </div>
        </div>
      </div>

      {/* Mobile Navigation Drawer */}
      <AnimatePresence>
        {isOpen && (
          <motion.div
            id="mobile-menu-drawer"
            initial={{ opacity: 0, height: 0 }}
            animate={{ opacity: 1, height: 'auto' }}
            exit={{ opacity: 0, height: 0 }}
            transition={{ duration: 0.25 }}
            className="md:hidden bg-neutral-950/95 border-b border-neutral-800"
          >
            <div className="px-4 pt-2 pb-6 space-y-2">
              {navItems.map((item) => {
                const Icon = item.icon;
                const isActive = activeTab === item.id;
                return (
                  <button
                    key={item.id}
                    id={`mobile-nav-link-${item.id}`}
                    onClick={() => handleNavItemClick(item.id)}
                    className={`w-full flex items-center space-x-3 px-4 py-3 rounded-xl text-base font-medium transition-all ${
                      isActive
                        ? 'bg-emerald-950/50 text-amber-400 border-l-4 border-amber-400 pl-3'
                        : 'text-neutral-300 hover:bg-neutral-900 hover:text-white border-l-4 border-transparent'
                    }`}
                  >
                    <Icon className="w-5 h-5" />
                    <span>{item.label}</span>
                  </button>
                );
              })}
              <div className="pt-4 px-4">
                <button
                  id="cta-mobile-drawer-plan"
                  onClick={() => {
                    onPlanTripClick();
                    setIsOpen(false);
                  }}
                  className="w-full py-3 rounded-full bg-emerald-600 hover:bg-emerald-500 text-neutral-50 text-center font-semibold tracking-wide shadow-md cursor-pointer"
                >
                  Plan My Custom Itinerary
                </button>
              </div>
            </div>
          </motion.div>
        )}
      </AnimatePresence>
    </header>
  );
}
