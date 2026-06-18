import React, { useState } from 'react';
import { Share2, Mail, Phone, MapPin, Send, CheckCircle2 } from 'lucide-react';

interface FooterProps {
  setActiveTab: (tab: string) => void;
}

export default function Footer({ setActiveTab }: FooterProps) {
  const [email, setEmail] = useState('');
  const [subscribed, setSubscribed] = useState(false);
  const [error, setError] = useState('');

  const handleSubscribe = (e: React.FormEvent) => {
    e.preventDefault();
    if (!email) {
      setError('Please provide a valid email adress.');
      return;
    }
    if (!/\S+@\S+\.\S+/.test(email)) {
      setError('Oops! That doesn’t look like a valid email.');
      return;
    }
    setSubscribed(true);
    setEmail('');
    setError('');
  };

  const handleLinkClick = (tabId: string) => {
    setActiveTab(tabId);
    window.scrollTo({ top: 0, behavior: 'smooth' });
  };

  return (
    <footer id="main-footer" className="bg-neutral-950 text-neutral-400 border-t border-neutral-800">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 py-16">
        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-12">
          {/* Column 1: Brand details */}
          <div id="footer-col-brand" className="space-y-6">
            <div
              className="flex items-baseline space-x-1.5 sm:space-x-2 cursor-pointer select-none leading-none py-1"
              onClick={() => handleLinkClick('home')}
            >
              <span className="text-[21px] sm:text-[25px] font-bold font-serif text-[#D95C1C] tracking-tight">Wonder</span>
              <span className="text-[21px] sm:text-[25px] font-bold font-serif text-[#16B1BC] tracking-tight">Lanka</span>
              <span className="text-[21px] sm:text-[25px] font-bold font-serif text-[#5BA370] tracking-tight">Experience</span>
            </div>
            <p className="text-neutral-400 text-sm leading-relaxed">
              We specialize in tailor-made luxury tours, breathtaking locations, wildlife conservation safaris, and authentic Sri Lankan hospitality. Trust our local experts to guide you across the Pearl of the Indian Ocean.
            </p>
            <div className="flex space-x-4">
              <a href="https://facebook.com" target="_blank" rel="noreferrer" className="w-10 h-10 rounded-full bg-neutral-900 flex items-center justify-center hover:bg-emerald-800 hover:text-white transition-colors cursor-pointer text-neutral-300">
                <span className="font-bold text-sm">fb</span>
              </a>
              <a href="https://instagram.com" target="_blank" rel="noreferrer" className="w-10 h-10 rounded-full bg-neutral-900 flex items-center justify-center hover:bg-emerald-800 hover:text-white transition-colors cursor-pointer text-neutral-300">
                <span className="font-bold text-sm">ig</span>
              </a>
              <a href="https://whatsapp.com" target="_blank" rel="noreferrer" className="w-10 h-10 rounded-full bg-neutral-900 flex items-center justify-center hover:bg-emerald-800 hover:text-white transition-colors cursor-pointer text-neutral-300">
                <span className="font-bold text-sm">wa</span>
              </a>
              <a href="https://tripadvisor.com" target="_blank" rel="noreferrer" className="w-10 h-10 rounded-full bg-neutral-900 flex items-center justify-center hover:bg-emerald-800 hover:text-white transition-colors cursor-pointer text-neutral-300">
                <span className="font-bold text-sm">ta</span>
              </a>
            </div>
          </div>

          {/* Column 2: Quick Links */}
          <div id="footer-col-links" className="space-y-6">
            <h3 className="text-neutral-100 font-sans font-semibold tracking-wide uppercase text-xs">Quick Navigation</h3>
            <ul className="space-y-3 text-sm">
              <li>
                <button onClick={() => handleLinkClick('home')} className="hover:text-amber-400 transition-colors pointer-events-auto cursor-pointer">
                  Wonder Lanka Home
                </button>
              </li>
              <li>
                <button onClick={() => handleLinkClick('destinations')} className="hover:text-amber-400 transition-colors pointer-events-auto cursor-pointer">
                  Featured Destinations
                </button>
              </li>
              <li>
                <button onClick={() => handleLinkClick('experiences')} className="hover:text-amber-400 transition-colors pointer-events-auto cursor-pointer">
                  Authentic Experiences
                </button>
              </li>
              <li>
                <button onClick={() => handleLinkClick('tours')} className="hover:text-amber-400 transition-colors pointer-events-auto cursor-pointer">
                  Tour Packages & Custom Builder
                </button>
              </li>
              <li>
                <button onClick={() => handleLinkClick('contact')} className="hover:text-amber-400 transition-colors pointer-events-auto cursor-pointer">
                  Contact & Location
                </button>
              </li>
            </ul>
          </div>

          {/* Column 3: Contact Info */}
          <div id="footer-col-contact" className="space-y-6">
            <h3 className="text-neutral-100 font-sans font-semibold tracking-wide uppercase text-xs">Contact Headquarters</h3>
            <ul className="space-y-4 text-sm">
              <li className="flex items-start space-x-3">
                <MapPin className="w-5 h-5 text-emerald-500 shrink-0 mt-0.5" />
                <span>45 Galle Road, Colombo 03, Sri Lanka</span>
              </li>
              <li className="flex items-center space-x-3">
                <Phone className="w-5 h-5 text-emerald-500 shrink-0" />
                <span>+94 (77) 123-4567</span>
              </li>
              <li className="flex items-center space-x-3">
                <Mail className="w-5 h-5 text-emerald-500 shrink-0" />
                <span>hello@wonderlankaexperience.com</span>
              </li>
            </ul>
          </div>

          {/* Column 4: Newsletter */}
          <div id="footer-col-newsletter" className="space-y-6">
            <h3 className="text-neutral-100 font-sans font-semibold tracking-wide uppercase text-xs">Newsletter Subscription</h3>
            <p className="text-xs text-neutral-450 text-neutral-400 leading-relaxed">
              Get handpicked seasonal travel guides, secret itineraries, and special limited-time luxury travel rates directly.
            </p>

            {subscribed ? (
              <div id="newsletter-success" className="p-4 bg-emerald-950/40 border border-emerald-500/30 rounded-xl space-y-2 flex items-start space-x-3">
                <CheckCircle2 className="w-5 h-5 text-emerald-400 shrink-0 mt-0.5" />
                <div>
                  <h4 className="text-sm font-semibold text-neutral-100">You are subscribed!</h4>
                  <p className="text-xs text-neutral-300">Look out for our signature Ceylon Welcome Guide in your inbox soon.</p>
                </div>
              </div>
            ) : (
              <form id="newsletter-form" onSubmit={handleSubscribe} className="space-y-2">
                <div className="relative">
                  <input
                    type="email"
                    placeholder="Enter your email"
                    value={email}
                    onChange={(e) => {
                      setEmail(e.target.value);
                      setError('');
                    }}
                    className="w-full bg-neutral-900 border border-neutral-800 focus:border-amber-400 rounded-lg px-4 py-3 text-sm focus:outline-none placeholder-neutral-500 text-neutral-200"
                  />
                  <button
                    type="submit"
                    className="absolute right-2 top-2 p-1.5 rounded-md bg-emerald-600 hover:bg-emerald-500 text-white transition-colors cursor-pointer"
                    aria-label="Submit email newsletter subscription"
                  >
                    <Send className="w-4 h-4" />
                  </button>
                </div>
                {error && <p className="text-xs text-rose-450 text-rose-400 pl-1">{error}</p>}
              </form>
            )}
          </div>
        </div>

        <div className="mt-16 pt-8 border-t border-neutral-900 flex flex-col sm:flex-row justify-between items-center text-xs text-neutral-500 bg-neutral-950">
          <p>© 2026 Wonder Lanka Experience (Pvt) Ltd. All rights reserved.</p>
          <div className="flex space-x-6 mt-4 sm:mt-0">
            <a href="#privacy" className="hover:text-amber-400 transition-colors">Privacy Policy</a>
            <a href="#terms" className="hover:text-amber-400 transition-colors">Terms of Service</a>
            <a href="#sitemap" className="hover:text-amber-400 transition-colors">Global XML Sitemap</a>
          </div>
        </div>
      </div>
    </footer>
  );
}
