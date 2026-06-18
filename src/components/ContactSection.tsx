import React, { useState, useEffect } from 'react';
import { motion, AnimatePresence } from 'motion/react';
import { Mail, Phone, Calendar, Users, Send, CheckCircle2, MapPin, Clock, ArrowRight } from 'lucide-react';
import { destinations } from '../data';

interface ContactSectionProps {
  inquiryPrePopulate?: any;
  onClearPrePopulate?: () => void;
}

export default function ContactSection({ inquiryPrePopulate, onClearPrePopulate }: ContactSectionProps) {
  // Form fields
  const [name, setName] = useState('');
  const [email, setEmail] = useState('');
  const [whatsapp, setWhatsapp] = useState('');
  const [country, setCountry] = useState('');
  const [travelDates, setTravelDates] = useState('');
  const [numGuests, setNumGuests] = useState(2);
  const [tourType, setTourType] = useState('Honeymoon Package');
  const [selectedDestinations, setSelectedDestinations] = useState<string[]>([]);
  const [message, setMessage] = useState('');

  // Submission control
  const [submittedForms, setSubmittedForms] = useState<any[]>([]);
  const [showSuccessModal, setShowSuccessModal] = useState(false);

  // Read submitted contact enquiries from localStorage on mount
  useEffect(() => {
    const saved = localStorage.getItem('wonderlanka_contact_enquiries');
    if (saved) {
      try {
        setSubmittedForms(JSON.parse(saved));
      } catch (e) {
        console.error('Failed reading contact enquiries from localStorage', e);
      }
    }
  }, []);

  // Pre-populate fields when forwarded from tour builder or destination card
  useEffect(() => {
    if (inquiryPrePopulate) {
      if (inquiryPrePopulate.name) setName(inquiryPrePopulate.name);
      if (inquiryPrePopulate.guests) setNumGuests(inquiryPrePopulate.guests);
      if (inquiryPrePopulate.travelDates) setTravelDates(inquiryPrePopulate.travelDates);
      if (inquiryPrePopulate.tourType) setTourType(inquiryPrePopulate.tourType);
      if (inquiryPrePopulate.destinations) setSelectedDestinations(inquiryPrePopulate.destinations);
      if (inquiryPrePopulate.message) setMessage(inquiryPrePopulate.message);

      // Smooth scroll to form fields
      const formEl = document.getElementById('contact-form-wrapper');
      if (formEl) {
        formEl.scrollIntoView({ behavior: 'smooth' });
      }
    }
  }, [inquiryPrePopulate]);

  const toggleDestSelection = (destName: string) => {
    setSelectedDestinations((prev) =>
      prev.includes(destName) ? prev.filter((d) => d !== destName) : [...prev, destName]
    );
  };

  const handleSubmitEnquiry = (e: React.FormEvent) => {
    e.preventDefault();
    if (!name.trim() || !email.trim() || !whatsapp.trim() || !country.trim()) {
      alert('Please fill out all required fields marked with *');
      return;
    }

    const newEnquiry = {
      id: 'enquiry_' + Date.now(),
      name,
      email,
      whatsapp,
      country,
      travelDates: travelDates || 'Flexible dates',
      numGuests,
      tourType,
      selectedDestinations,
      message,
      createdAt: new Date().toLocaleDateString('en-US', { month: 'long', day: 'numeric', year: 'numeric', hour: '2-digit', minute: '2-digit' }),
      status: 'Awaiting Expert Review'
    };

    const updated = [newEnquiry, ...submittedForms];
    setSubmittedForms(updated);
    localStorage.setItem('wonderlanka_contact_enquiries', JSON.stringify(updated));

    setShowSuccessModal(true);
    
    // Clear form inputs
    setName('');
    setEmail('');
    setWhatsapp('');
    setCountry('');
    setTravelDates('');
    setNumGuests(2);
    setTourType('Custom Tour');
    setSelectedDestinations([]);
    setMessage('');

    if (onClearPrePopulate) {
      onClearPrePopulate();
    }
  };

  const deleteEnquiry = (id: string) => {
    const updated = submittedForms.filter(item => item.id !== id);
    setSubmittedForms(updated);
    localStorage.setItem('wonderlanka_contact_enquiries', JSON.stringify(updated));
  };

  return (
    <section id="contact-section" className="py-24 bg-neutral-900 border-t border-neutral-805">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 space-y-16">
        
        {/* Header Banner */}
        <div className="text-center max-w-3xl mx-auto space-y-4">
          <motion.div
            initial={{ opacity: 0 }}
            whileInView={{ opacity: 0.9 }}
            viewport={{ once: true }}
            className="inline-flex items-center space-x-1.5 bg-amber-500/10 px-3.5 py-1.5 rounded-full border border-amber-500/20 text-amber-400 text-xs font-semibold tracking-wider font-mono uppercase"
          >
            <span>Reach Our Ceylon Travel Experts</span>
          </motion.div>
          <h2 className="text-3xl sm:text-4xl font-bold tracking-tight text-neutral-50 font-sans">
            Start Your Extraordinary Journey
          </h2>
          <p className="text-neutral-400 text-sm sm:text-base leading-relaxed">
            Fill the secure consultation request below, or connect with our Colombo desks directly on mobile. We process and map luxury quotes for you completely free.
          </p>
        </div>

        {/* Dual Panel Grid */}
        <div className="grid grid-cols-1 lg:grid-cols-12 gap-12">
          
          {/* Column 1: Info & Embedded map */}
          <div className="lg:col-span-4 space-y-8">
            <div className="bg-neutral-950 p-6 rounded-2xl border border-neutral-850 space-y-6">
              <h3 className="text-lg font-bold text-neutral-50 font-sans">Weligama Head Office</h3>
              
              <div className="space-y-4 text-sm text-neutral-400">
                <div className="flex items-start space-x-3.5">
                  <MapPin className="w-5 h-5 text-emerald-400 shrink-0 mt-0.5" />
                  <div>
                    <p className="font-semibold text-neutral-200">Our Address</p>
                    <p># 1/5 ,Gurubebila , Weligama. 81700.</p>
                  </div>
                </div>

                <div className="flex items-start space-x-3.5 pt-3 border-t border-neutral-850">
                  <Mail className="w-5 h-5 text-emerald-400 shrink-0 mt-0.5" />
                  <div>
                    <p className="font-semibold text-neutral-200">Email Desks</p>
                    <a href="mailto:hello@wonderlankaexperience.com" className="text-amber-400 hover:underline">
                      hello@wonderlankaexperience.com
                    </a>
                  </div>
                </div>

                <div className="flex items-start space-x-3.5 pt-3 border-t border-neutral-850">
                  <Phone className="w-5 h-5 text-emerald-400 shrink-0 mt-0.5" />
                  <div>
                    <p className="font-semibold text-neutral-200">Hotlines / WhatsApp</p>
                    <p className="text-neutral-300 font-semibold">+94 (77) 123-4567</p>
                  </div>
                </div>

                <div className="flex items-start space-x-3.5 pt-3 border-t border-neutral-850">
                  <Clock className="w-5 h-5 text-emerald-400 shrink-0 mt-0.5" />
                  <div>
                    <p className="font-semibold text-neutral-200">Office Hours</p>
                    <p>Monday - Saturday: 8:00 AM - 7:00 PM</p>
                    <p className="text-xs text-emerald-450 text-emerald-400">24/7 client operations team active</p>
                  </div>
                </div>
              </div>
            </div>

             {/* Embedded Sri Lanka Web Map (OSM standard, super high contrast) */}
            <div className="bg-neutral-950 rounded-2xl border border-neutral-810 border-neutral-800 overflow-hidden h-72 relative">
              <iframe
                title="Sri Lanka Map Locator"
                src="https://maps.google.com/maps?q=Gurubebila,%20Weligama,%20Sri%20Lanka&t=&z=15&ie=UTF8&iwloc=&output=embed"
                width="100%"
                height="100%"
                style={{ border: 0, filter: 'invert(90%) hue-rotate(180deg) contrast(110%) greyscale(30%)' }}
                allowFullScreen={false}
                loading="lazy"
                referrerPolicy="no-referrer"
              />
              <div className="absolute bottom-3 left-3 bg-neutral-900/90 backdrop-blur border border-neutral-800 px-3 py-1.5 rounded-lg text-[10px] font-mono text-neutral-300">
                📍 # 1/5 ,Gurubebila , Weligama. 81700.
              </div>
            </div>
          </div>

          {/* Column 2: Secured Inquiry Form */}
          <div id="contact-form-wrapper" className="lg:col-span-8 bg-neutral-950 rounded-3xl border border-neutral-850 p-6 sm:p-10 space-y-6">
            <div className="space-y-1">
              <h3 className="text-xl font-bold font-sans text-neutral-50">Private Consultation Request</h3>
              <p className="text-xs sm:text-sm text-neutral-400">Map your travel group profile. Fields marked with * are required.</p>
            </div>

            {/* Form */}
            <form onSubmit={handleSubmitEnquiry} className="space-y-6">
              <div className="grid grid-cols-1 sm:grid-cols-2 gap-6">
                
                {/* Name */}
                <div className="space-y-1.5">
                  <label htmlFor="contact-name" className="text-xs uppercase font-mono tracking-wider font-semibold text-neutral-300">
                    Lead Traveler Name *
                  </label>
                  <input
                    id="contact-name"
                    type="text"
                    required
                    placeholder="E.g. David Williams"
                    value={name}
                    onChange={(e) => setName(e.target.value)}
                    className="w-full bg-neutral-900 border border-neutral-800 focus:border-amber-400 rounded-xl px-4 py-3 text-sm text-neutral-200 placeholder-neutral-600 focus:outline-none focus:ring-1 focus:ring-amber-500/20"
                  />
                </div>

                {/* Email */}
                <div className="space-y-1.5">
                  <label htmlFor="contact-email" className="text-xs uppercase font-mono tracking-wider font-semibold text-neutral-300">
                    Email Address *
                  </label>
                  <input
                    id="contact-email"
                    type="email"
                    required
                    placeholder="david@example.com"
                    value={email}
                    onChange={(e) => setEmail(e.target.value)}
                    className="w-full bg-neutral-900 border border-neutral-800 focus:border-amber-400 rounded-xl px-4 py-3 text-sm text-neutral-200 placeholder-neutral-600 focus:outline-none focus:ring-1 focus:ring-amber-500/20"
                  />
                </div>

                {/* WhatsApp Number */}
                <div className="space-y-1.5">
                  <label htmlFor="contact-whatsapp" className="text-xs uppercase font-mono tracking-wider font-semibold text-neutral-300">
                    WhatsApp Number *
                  </label>
                  <input
                    id="contact-whatsapp"
                    type="tel"
                    required
                    placeholder="E.g. +1 (555) 019-2834"
                    value={whatsapp}
                    onChange={(e) => setWhatsapp(e.target.value)}
                    className="w-full bg-neutral-900 border border-neutral-800 focus:border-amber-400 rounded-xl px-4 py-3 text-sm text-neutral-200 placeholder-neutral-600 focus:outline-none focus:ring-1 focus:ring-amber-500/20"
                  />
                </div>

                {/* Country */}
                <div className="space-y-1.5">
                  <label htmlFor="contact-country" className="text-xs uppercase font-mono tracking-wider font-semibold text-neutral-300">
                    Country of Residence *
                  </label>
                  <input
                    id="contact-country"
                    type="text"
                    required
                    placeholder="E.g. United Kingdom"
                    value={country}
                    onChange={(e) => setCountry(e.target.value)}
                    className="w-full bg-neutral-900 border border-neutral-800 focus:border-amber-400 rounded-xl px-4 py-3 text-sm text-neutral-200 placeholder-neutral-600 focus:outline-none focus:ring-1 focus:ring-amber-500/20"
                  />
                </div>

                {/* Travel Dates */}
                <div className="space-y-1.5">
                  <label htmlFor="contact-dates" className="text-xs uppercase font-mono tracking-wider font-semibold text-neutral-300">
                    Travel Dates / Season
                  </label>
                  <input
                    id="contact-dates"
                    type="text"
                    placeholder="E.g. Late December 2026"
                    value={travelDates}
                    onChange={(e) => setTravelDates(e.target.value)}
                    className="w-full bg-neutral-900 border border-neutral-800 focus:border-amber-400 rounded-xl px-4 py-3 text-sm text-neutral-200 placeholder-neutral-600 focus:outline-none"
                  />
                </div>

                {/* Guests counter */}
                <div className="space-y-1.5">
                  <label htmlFor="contact-guests" className="text-xs uppercase font-mono tracking-wider font-semibold text-neutral-300 flex items-center justify-between">
                    <span>Number of Guests</span>
                    <span className="text-amber-405 text-amber-400 font-mono text-[10px] uppercase font-bold">Current: {numGuests} PAX</span>
                  </label>
                  <input
                    id="contact-guests"
                    type="range"
                    min="1"
                    max="30"
                    value={numGuests}
                    onChange={(e) => setNumGuests(parseInt(e.target.value))}
                    className="w-full accent-emerald-500 h-2 bg-neutral-900 rounded-lg cursor-pointer"
                  />
                </div>

                {/* Preferred Tour Type Dropdown */}
                <div className="space-y-1.5 col-span-1 sm:col-span-2">
                  <label htmlFor="contact-tour-type" className="text-xs uppercase font-mono tracking-wider font-semibold text-neutral-300">
                    Tour Category Style
                  </label>
                  <select
                    id="contact-tour-type"
                    value={tourType}
                    onChange={(e) => setTourType(e.target.value)}
                    className="w-full bg-neutral-900 border border-neutral-800 focus:border-amber-400 rounded-xl px-4 py-3 text-sm text-neutral-300 focus:outline-none"
                  >
                    <option value="Cultural Tour">Cultural Tour</option>
                    <option value="Wildlife Tour">Wildlife Tour</option>
                    <option value="Surf Tour">Surf Tour</option>
                    <option value="Family Holiday">Family Holiday</option>
                    <option value="Honeymoon Package">Honeymoon Package</option>
                    <option value="Adventure Tour">Adventure Tour</option>
                    <option value="Luxury Tour">Luxury Tour</option>
                    <option value="Custom Tour">Custom Tour</option>
                  </select>
                </div>
              </div>

              {/* Multi destinations checklist popup */}
              <div className="space-y-3">
                <label className="text-xs uppercase font-mono tracking-wider font-semibold text-neutral-300 block">
                  Select Locations to Map into Quote (Check Multiple):
                </label>
                <div className="grid grid-cols-2 sm:grid-cols-4 gap-2.5 bg-neutral-900/60 p-4 rounded-xl border border-neutral-850">
                  {destinations.map((dest) => {
                    const isSelected = selectedDestinations.includes(dest.name);
                    return (
                      <button
                        key={dest.id}
                        type="button"
                        onClick={() => toggleDestSelection(dest.name)}
                        className={`py-2 px-2.5 rounded-lg text-left text-xs transition-colors flex items-center space-x-1 border truncate cursor-pointer ${
                          isSelected
                            ? 'bg-emerald-950/40 border-emerald-505 border-emerald-500/30 text-emerald-305 text-emerald-300'
                            : 'bg-neutral-900 border-neutral-805 text-neutral-450 text-neutral-400 hover:text-white'
                        }`}
                      >
                        <span className={`w-3 h-3 rounded flex items-center justify-center shrink-0 border ${
                          isSelected ? 'bg-emerald-600 border-emerald-400 text-white' : 'border-neutral-600'
                        }`}>
                          {isSelected && <CheckCircle2 className="w-2.5 h-2.5" />}
                        </span>
                        <span className="truncate">{dest.name.split('(')[0]}</span>
                      </button>
                    );
                  })}
                </div>
              </div>

              {/* Special message */}
              <div className="space-y-2">
                <label htmlFor="contact-msg" className="text-xs uppercase font-mono tracking-wider font-semibold text-neutral-305 text-neutral-300">
                  Describe what your dream trip looks like *
                </label>
                <textarea
                  id="contact-msg"
                  rows={4}
                  required
                  value={message}
                  onChange={(e) => setMessage(e.target.value)}
                  placeholder="e.g., We are celebrating our 10th anniversary. We love wildlife, boutique photography moments, but would also like to have 2 days of complete beach relaxation."
                  className="w-full bg-neutral-900 border border-neutral-850 focus:border-amber-400 rounded-xl px-4 py-3 text-sm text-neutral-200 placeholder-neutral-650 focus:outline-none focus:ring-1 focus:ring-amber-500/20"
                />
              </div>

              {/* Submit btn */}
              <button
                type="submit"
                className="w-full py-4 rounded-xl bg-emerald-600 hover:bg-emerald-500 text-neutral-50 font-bold tracking-wide shadow-lg transition-all hover:translate-y-[-1px] cursor-pointer"
              >
                Send Secure Inquiry Proposal
              </button>
            </form>
          </div>

        </div>

        {/* ------------------------------------------------------------- */}
        {/* SUBMITTED CONTACTS ENQUIRY LOGS */}
        {/* ------------------------------------------------------------- */}
        {submittedForms.length > 0 && (
          <div id="enquiry-logs-block" className="pt-8 space-y-6">
            <h3 className="text-xl font-bold font-sans text-neutral-50 border-b border-neutral-800 pb-3 flex items-center gap-2">
              <CheckCircle2 className="w-6 h-6 text-emerald-404 text-emerald-400" />
              <span>Your Submitted Enquiry Logs ({submittedForms.length})</span>
            </h3>

            <div className="grid grid-cols-1 md:grid-cols-2 gap-6">
              {submittedForms.map((item) => (
                <div key={item.id} className="p-6 bg-neutral-950 rounded-2xl border border-amber-500/15 space-y-4 shadow-xl relative">
                  <button
                    onClick={() => deleteEnquiry(item.id)}
                    className="absolute right-4 top-4 text-xs font-mono text-neutral-600 hover:text-rose-400 cursor-pointer"
                  >
                    Remove Log
                  </button>

                  <div className="space-y-1">
                    <div className="flex items-center gap-2">
                      <span className="text-[9px] bg-amber-500/10 text-amber-450 text-amber-450 text-amber-450 text-amber-500 font-mono tracking-wider px-2 py-0.5 rounded border border-amber-500/25 font-bold uppercase">
                        {item.status}
                      </span>
                      <span className="text-[10px] text-neutral-500 font-mono">{item.createdAt}</span>
                    </div>
                    <h4 className="text-base font-bold text-neutral-205 text-neutral-200 font-sans">
                      Request from {item.name} ({item.country})
                    </h4>
                  </div>

                  <div className="grid grid-cols-2 gap-2 text-xs text-neutral-400 bg-neutral-900/60 p-3 rounded-xl border border-neutral-850">
                    <p>💬 <span className="font-semibold text-neutral-300">{item.tourType}</span></p>
                    <p>👥 <span className="font-semibold text-neutral-300">{item.numGuests} Guests</span></p>
                    <p className="col-span-2 text-[11px] text-neutral-500 truncate">📩 Dates: {item.travelDates}</p>
                  </div>

                  {item.selectedDestinations.length > 0 && (
                    <div className="space-y-1">
                      <p className="text-[10px] font-mono text-neutral-500 uppercase tracking-widest">Enrolled Locations:</p>
                      <div className="flex flex-wrap gap-1.5 text-[10px] text-neutral-300">
                        {item.selectedDestinations.map((sd: string, sIdx: number) => (
                          <span key={sIdx} className="bg-neutral-900 border border-neutral-800 px-2 py-0.5 rounded">
                            {sd.split('(')[0]}
                          </span>
                        ))}
                      </div>
                    </div>
                  )}

                  <p className="text-xs text-neutral-400 line-clamp-2 italic">
                    "{item.message}"
                  </p>
                </div>
              ))}
            </div>
          </div>
        )}

      </div>

      {/* Success Modal */}
      <AnimatePresence>
        {showSuccessModal && (
          <div className="fixed inset-0 z-50 overflow-y-auto flex items-center justify-center p-4">
            <motion.div
              initial={{ opacity: 0 }}
              animate={{ opacity: 1 }}
              exit={{ opacity: 0 }}
              onClick={() => setShowSuccessModal(false)}
              className="fixed inset-0 bg-black/85 backdrop-blur-sm"
            />

            <motion.div
              initial={{ opacity: 0, scale: 0.95 }}
              animate={{ opacity: 1, scale: 1 }}
              exit={{ opacity: 0, scale: 0.95 }}
              className="relative bg-neutral-950 w-full max-w-sm p-6 rounded-2xl border border-emerald-500/30 shadow-2xl space-y-4 text-center"
            >
              <div className="mx-auto w-12 h-12 rounded-full bg-emerald-950 border border-emerald-500/40 flex items-center justify-center text-emerald-400">
                <CheckCircle2 className="w-6 h-6" />
              </div>
              <h3 className="text-lg font-bold text-neutral-50 font-sans">
                Inquiry Logged Successfully!
              </h3>
              <p className="text-xs text-neutral-400 leading-relaxed font-sans">
                Thank you for choosing Wonder Lanka Experience. Your consultation files are compiled. One of our destination specialists will text you on WhatsApp within 2 hours.
              </p>

              <button
                onClick={() => setShowSuccessModal(false)}
                className="w-full py-2.5 bg-emerald-600 hover:bg-emerald-505 text-neutral-50 rounded-xl text-xs font-bold cursor-pointer transition-colors"
              >
                Excellent
              </button>
            </motion.div>
          </div>
        )}
      </AnimatePresence>
    </section>
  );
}
