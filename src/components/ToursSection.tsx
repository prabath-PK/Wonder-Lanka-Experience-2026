import React, { useState, useEffect } from 'react';
import { motion, AnimatePresence } from 'motion/react';
import { Clock, MapPin, Check, Sparkles, Star, Plus, Minus, Calendar, Users, Send, CheckCircle2, AlertCircle, Compass, ShieldCheck } from 'lucide-react';
import { tours, destinations } from '../data';
import { Tour } from '../types';

interface ToursSectionProps {
  preSelectedInquiryName?: string;
  onPlanTripInquire: (formData: any) => void;
}

export default function ToursSection({ preSelectedInquiryName, onPlanTripInquire }: ToursSectionProps) {
  const [filterType, setFilterType] = useState<string>('All');
  const [selectedTour, setSelectedTour] = useState<Tour | null>(null);
  
  // Custom Tour Builder state
  const [customName, setCustomName] = useState('');
  const [numTravelers, setNumTravelers] = useState(2);
  const [travelDate, setTravelDate] = useState('');
  const [preferredTourType, setPreferredTourType] = useState('Honeymoon Package');
  const [selectedDests, setSelectedDests] = useState<string[]>([]);
  const [travelClass, setTravelClass] = useState('Premium Boutique');
  const [specialNote, setSpecialNote] = useState('');

  // Submitted custom drafts list tracked via localStorage
  const [submittedDrafts, setSubmittedDrafts] = useState<any[]>([]);
  const [showBuilderSuccess, setShowBuilderSuccess] = useState(false);
  const [previewItinerary, setPreviewItinerary] = useState<string[]>([]);

  // Selected tour context sync if requested from another tab
  useEffect(() => {
    if (preSelectedInquiryName) {
      // Find matching tour or pre-populate builder
      const foundTour = tours.find(t => t.name.toLowerCase().includes(preSelectedInquiryName.toLowerCase()));
      if (foundTour) {
        setSelectedTour(foundTour);
        // Scroll to selected tour modal or section
        const sec = document.getElementById('tour-cards-container');
        if (sec) sec.scrollIntoView({ behavior: 'smooth' });
      } else {
        // If it's a destination name or other, pre-select it in checkboxes
        const matchedDest = destinations.find(d => d.name.toLowerCase().includes(preSelectedInquiryName.toLowerCase()));
        if (matchedDest && !selectedDests.includes(matchedDest.name)) {
          setSelectedDests([matchedDest.name]);
        }
      }
    }
  }, [preSelectedInquiryName]);

  // Read submitted drafts from localStorage on mount
  useEffect(() => {
    const saved = localStorage.getItem('wonderlanka_custom_drafts');
    if (saved) {
      try {
        setSubmittedDrafts(JSON.parse(saved));
      } catch (e) {
        console.error('Failed reading custom drafts', e);
      }
    }
  }, []);

  // Filter tour logic
  const filteredTours = tours.filter((tour) => {
    if (filterType === 'All') return true;
    if (filterType === 'multi-day') return tour.type === 'multi-day';
    if (filterType === 'experience') return tour.type === 'experience';
    return true;
  });

  const toggleDestinationSelection = (destName: string) => {
    setSelectedDests((prev) =>
      prev.includes(destName) ? prev.filter((d) => d !== destName) : [...prev, destName]
    );
  };

  // Generate interactive preview as user toggles checkboxes
  useEffect(() => {
    if (selectedDests.length === 0) {
      setPreviewItinerary([]);
      return;
    }
    const days: string[] = [];
    selectedDests.forEach((dest, idx) => {
      days.push(`Day ${idx * 2 + 1}: Arrival and luxury transfers to check-in near ${dest}. Explore evening attractions.`);
      days.push(`Day ${idx * 2 + 2}: Multi-activity adventure and cultural sightseeing inside ${dest}. Private expert guiding included.`);
    });
    days.push(`Day ${selectedDests.length * 2 + 1}: Scenic coastal return transport towards Colombo airport. Departure and traditional Ceylon goodbye ritual.`);
    setPreviewItinerary(days);
  }, [selectedDests]);

  const handleCustomBuilderSubmit = (e: React.FormEvent) => {
    e.preventDefault();
    if (!customName.trim()) {
      alert('Kindly provide your full name to generate your custom travel proposal.');
      return;
    }
    if (selectedDests.length === 0) {
      alert('Please select at least one preferred destination to map your custom route.');
      return;
    }

    const newDraft = {
      id: 'draft_' + Date.now(),
      clientName: customName,
      numTravelers,
      travelDate: travelDate || 'Flexible Dates',
      preferredTourType,
      selectedDests,
      travelClass,
      specialNote,
      estimatedDays: selectedDests.length * 2 + 1,
      itineraryOutline: previewItinerary,
      createdAt: new Date().toLocaleDateString('en-US', { month: 'long', day: 'numeric', year: 'numeric' }),
      status: 'Custom Itinerary Generated'
    };

    const updated = [newDraft, ...submittedDrafts];
    setSubmittedDrafts(updated);
    localStorage.setItem('wonderlanka_custom_drafts', JSON.stringify(updated));

    setShowBuilderSuccess(true);
    
    // Also trigger inquiry context bubble upwards and register with contact form
    onPlanTripInquire({
      name: customName,
      guests: numTravelers,
      travelDates: travelDate,
      tourType: preferredTourType,
      destinations: selectedDests,
      message: `Preferred class: ${travelClass}. ${specialNote}`
    });

    // Reset some fields
    setCustomName('');
    setSpecialNote('');
    setSelectedDests([]);
  };

  const removeDraft = (id: string) => {
    const updated = submittedDrafts.filter(d => d.id !== id);
    setSubmittedDrafts(updated);
    localStorage.setItem('wonderlanka_custom_drafts', JSON.stringify(updated));
  };

  return (
    <section id="tours-section" className="py-24 bg-neutral-900 border-t border-neutral-805">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 space-y-20">
        
        {/* Title banner */}
        <div className="text-center max-w-3xl mx-auto space-y-4">
          <motion.div
            initial={{ opacity: 0 }}
            whileInView={{ opacity: 0.9 }}
            viewport={{ once: true }}
            className="inline-flex items-center space-x-1.5 bg-amber-500/10 px-3.5 py-1.5 rounded-full border border-amber-500/20 text-amber-550 text-amber-400 text-xs font-semibold tracking-wider font-mono uppercase"
          >
            <span>Signature Multi-Day Packages</span>
          </motion.div>
          <h2 className="text-3xl sm:text-4xl font-bold tracking-tight text-neutral-50 font-sans">
            Recommended Sri Lankan Itineraries
          </h2>
          <p className="text-neutral-400 text-sm sm:text-base leading-relaxed">
            Meticulously planned by regional veterans combining luxury boutique stays, comfort transport, and real-life conservation engagements. Secure your slot or build a fully-custom guide below.
          </p>
        </div>

        {/* Filter controls */}
        <div id="tour-cards-container" className="space-y-10">
          <div className="flex justify-center space-x-2">
            <button
              onClick={() => setFilterType('All')}
              className={`px-5 py-2 rounded-xl text-xs sm:text-sm font-semibold cursor-pointer transition-colors ${
                filterType === 'All'
                  ? 'bg-amber-400 text-neutral-950 font-bold'
                  : 'bg-neutral-950 text-neutral-400 hover:text-white border border-neutral-850'
              }`}
            >
              All Packages
            </button>
            <button
              onClick={() => setFilterType('multi-day')}
              className={`px-5 py-2 rounded-xl text-xs sm:text-sm font-semibold cursor-pointer transition-colors ${
                filterType === 'multi-day'
                  ? 'bg-amber-400 text-neutral-950 font-bold'
                  : 'bg-neutral-950 text-neutral-400 hover:text-white border border-neutral-850'
              }`}
            >
              Classic Multi-Day Tours
            </button>
            <button
              onClick={() => setFilterType('experience')}
              className={`px-5 py-2 rounded-xl text-xs sm:text-sm font-semibold cursor-pointer transition-colors ${
                filterType === 'experience'
                  ? 'bg-amber-400 text-neutral-950 font-bold'
                  : 'bg-neutral-950 text-neutral-400 hover:text-white border border-neutral-850'
              }`}
            >
              Experience-Based Stays
            </button>
          </div>

          {/* Tour grid */}
          <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-8">
            {filteredTours.map((tour) => (
              <div
                key={tour.id}
                className="group bg-neutral-950 rounded-2xl overflow-hidden border border-neutral-850 hover:border-emerald-500/20 transition-all shadow-xl flex flex-col justify-between"
              >
                <div className="p-6 space-y-6">
                  {/* Badge & Duration */}
                  <div className="flex justify-between items-center">
                    <span className="text-[10px] bg-emerald-950 text-emerald-300 font-mono tracking-wider uppercase px-2.5 py-1 rounded-md border border-emerald-500/20 font-bold">
                      {tour.category}
                    </span>
                    <span className="text-xs text-neutral-400 font-mono flex items-center gap-1">
                      <Clock className="w-3.5 h-3.5 text-amber-500" />
                      <span>{tour.duration}</span>
                    </span>
                  </div>

                  {/* Title & Destinations Covered */}
                  <div className="space-y-3">
                    <h3 className="text-lg font-bold font-sans text-neutral-100 group-hover:text-amber-400 transition-colors">
                      {tour.name}
                    </h3>
                    <div className="flex flex-wrap gap-1.5 pt-1">
                      {tour.destinations.map((dest, idx) => (
                        <span
                          key={idx}
                          className="text-[11px] bg-neutral-900 border border-neutral-850 text-neutral-300 px-2 py-0.5 rounded-md flex items-center gap-1"
                        >
                          <MapPin className="w-3 h-3 text-red-500 shrink-0" />
                          <span>{dest}</span>
                        </span>
                      ))}
                    </div>
                  </div>

                  {/* High point list */}
                  <div className="space-y-2 pt-2">
                    <p className="text-xs font-mono uppercase text-amber-500 font-bold">🎯 Tour Highlights:</p>
                    <ul className="space-y-1.5 text-xs text-neutral-400">
                      {tour.highlights.slice(0, 3).map((high, i) => (
                        <li key={i} className="flex items-start gap-2 leading-relaxed">
                          <span className="w-1.5 h-1.5 rounded-full bg-amber-400 shrink-0 mt-1.5" />
                          <span>{high}</span>
                        </li>
                      ))}
                    </ul>
                  </div>
                </div>

                {/* Bottom Trigger */}
                <div className="p-6 pt-0">
                  <button
                    onClick={() => setSelectedTour(tour)}
                    className="w-full py-3 bg-neutral-900 hover:bg-neutral-850 hover:text-white border border-neutral-800 rounded-xl text-xs font-semibold tracking-wide transition-colors cursor-pointer"
                  >
                    View Plan & Includes
                  </button>
                </div>
              </div>
            ))}
          </div>
        </div>

        {/* ------------------------------------------------------------- */}
        {/* INTERACTIVE CUSTOM TOUR BUILDER */}
        {/* ------------------------------------------------------------- */}
        <div id="custom-tour-builder" className="pt-12">
          <div className="bg-neutral-950 rounded-3xl border border-neutral-850/80 overflow-hidden shadow-2xl">
            <div className="grid grid-cols-1 lg:grid-cols-12">
              
              {/* Part 1: Interactive Draft Form */}
              <div className="lg:col-span-7 p-6 sm:p-10 space-y-8">
                <div className="space-y-2">
                  <div className="flex items-center space-x-1 border-l-4 border-amber-505 border-amber-500 pl-3">
                    <Sparkles className="w-5 h-5 text-amber-500 animate-spin" style={{ animationDuration: '4s' }} />
                    <span className="text-xs font-mono uppercase text-amber-400 font-bold tracking-widest">Co-Create Your Itinerary</span>
                  </div>
                  <h3 className="text-2xl font-bold text-neutral-50 font-sans tracking-tight">
                    Custom Tour Builder
                  </h3>
                  <p className="text-xs sm:text-sm text-neutral-400 leading-relaxed font-sans">
                    Check the destinations you want, set traveler counts and dates, and watch your customized routing draft build in real-time on the right.
                  </p>
                </div>

                {/* Form element */}
                <form onSubmit={handleCustomBuilderSubmit} className="space-y-6">
                  <div className="grid grid-cols-1 sm:grid-cols-2 gap-6">
                    {/* Field: Client Name */}
                    <div className="space-y-2">
                      <label htmlFor="custom-client-name" className="text-xs uppercase font-mono tracking-wider font-semibold text-neutral-300">
                        Your Full Name *
                      </label>
                      <input
                        id="custom-client-name"
                        type="text"
                        required
                        placeholder="John Doe"
                        value={customName}
                        onChange={(e) => setCustomName(e.target.value)}
                        className="w-full bg-neutral-900 border border-neutral-800 focus:border-amber-400 rounded-xl px-4 py-3 text-sm text-neutral-100 placeholder-neutral-600 focus:outline-none"
                      />
                    </div>

                    {/* Field: Dates */}
                    <div className="space-y-2">
                      <label htmlFor="custom-travel-date" className="text-xs uppercase font-mono tracking-wider font-semibold text-neutral-300">
                        Travel Start Date (Ref)
                      </label>
                      <input
                        id="custom-travel-date"
                        type="date"
                        value={travelDate}
                        onChange={(e) => setTravelDate(e.target.value)}
                        className="w-full bg-neutral-900 border border-neutral-800 focus:border-amber-400 rounded-xl px-4 py-3 text-sm text-neutral-100 placeholder-neutral-600 focus:outline-none"
                      />
                    </div>

                    {/* Field: Travelers (with counter controls) */}
                    <div className="space-y-2">
                      <label className="text-xs uppercase font-mono tracking-wider font-semibold text-neutral-300 flex items-center gap-1.5">
                        <Users className="w-4 h-4 text-neutral-400" />
                        <span>Travel Guests Count</span>
                      </label>
                      <div className="flex items-center space-x-3 bg-neutral-900 border border-neutral-800 rounded-xl p-1 max-w-[180px]">
                        <button
                          type="button"
                          onClick={() => setNumTravelers(Math.max(1, numTravelers - 1))}
                          className="w-10 h-10 rounded-lg bg-neutral-950 hover:bg-neutral-800 text-neutral-200 flex items-center justify-center font-bold cursor-pointer"
                        >
                          -
                        </button>
                        <span className="flex-1 text-center text-sm font-semibold text-neutral-100">{numTravelers} Pax</span>
                        <button
                          type="button"
                          onClick={() => setNumTravelers(numTravelers + 1)}
                          className="w-10 h-10 rounded-lg bg-neutral-950 hover:bg-neutral-800 text-neutral-200 flex items-center justify-center font-bold cursor-pointer"
                        >
                          +
                        </button>
                      </div>
                    </div>

                    {/* Field: Tour theme */}
                    <div className="space-y-2">
                      <label htmlFor="custom-pax-theme" className="text-xs uppercase font-mono tracking-wider font-semibold text-neutral-300">
                        Primary Package Focus
                      </label>
                      <select
                        id="custom-pax-theme"
                        value={preferredTourType}
                        onChange={(e) => setPreferredTourType(e.target.value)}
                        className="w-full bg-neutral-900 border border-neutral-800 focus:border-amber-400 rounded-xl px-4 py-3 text-sm text-neutral-200 focus:outline-none"
                      >
                        <option value="Cultural & Ancient Sites">Cultural & Ancient Sites</option>
                        <option value="Wildlife Safari">Wildlife Safari</option>
                        <option value="Surf & Stay Package">Surf & Stay Package</option>
                        <option value="Family Holiday">Family Holiday</option>
                        <option value="Honeymoon Package">Honeymoon Package</option>
                        <option value="Nature & Trekking">Nature & Trekking</option>
                        <option value="Luxury Escape">Luxury Escape</option>
                        <option value="Ayurvedic Wellness Retreat">Ayurvedic Wellness Retreat</option>
                      </select>
                    </div>
                  </div>

                  {/* Field: Select multiple destinations via checkbox grid */}
                  <div className="space-y-3">
                    <label className="text-xs uppercase font-mono tracking-wider font-semibold text-neutral-300 block">
                      Select Desired Locations (Multiple *):
                    </label>
                    <div className="grid grid-cols-2 sm:grid-cols-3 gap-3 bg-neutral-900/50 p-4 rounded-2xl border border-neutral-850">
                      {destinations.map((dest) => {
                        const isSelected = selectedDests.includes(dest.name);
                        return (
                          <button
                            key={dest.id}
                            type="button"
                            onClick={() => toggleDestinationSelection(dest.name)}
                            className={`p-2.5 rounded-xl text-left text-xs transition-all flex items-center space-x-2 border cursor-pointer ${
                              isSelected
                                ? 'bg-emerald-950/40 border-emerald-500/40 text-emerald-300'
                                : 'bg-neutral-900 border-neutral-800 text-neutral-400 hover:border-neutral-700 hover:text-white'
                            }`}
                          >
                            <span className={`w-3.5 h-3.5 rounded-md flex items-center justify-center shrink-0 border ${
                              isSelected ? 'bg-emerald-600 border-emerald-400 text-white' : 'border-neutral-600'
                            }`}>
                              {isSelected && <Check className="w-2.5 h-2.5" />}
                            </span>
                            <span className="truncate">{dest.name.split('(')[0].trim()}</span>
                          </button>
                        );
                      })}
                    </div>
                  </div>

                  <div className="grid grid-cols-1 sm:grid-cols-2 gap-6">
                    {/* Hotel travel class */}
                    <div className="space-y-2">
                      <label className="text-xs uppercase font-mono tracking-wider font-semibold text-neutral-300 block">
                        Desired Accommodation Tier
                      </label>
                      <div className="grid grid-cols-3 gap-2">
                        {['Boutique Standard', 'Premium Boutique', 'Ultra Luxury 5★'].map((tc) => (
                          <button
                            key={tc}
                            type="button"
                            onClick={() => setTravelClass(tc)}
                            className={`py-2 rounded-xl text-[10px] sm:text-xs font-semibold text-center border cursor-pointer transition-colors ${
                              travelClass === tc
                                ? 'bg-amber-400 text-neutral-950 border-amber-400 font-bold'
                                : 'bg-neutral-900 border-neutral-800 text-neutral-400 hover:text-white'
                            }`}
                          >
                            {tc.replace('Boutique ', '')}
                          </button>
                        ))}
                      </div>
                    </div>

                    {/* Submit form button info */}
                    <div className="space-y-2">
                      <label className="text-xs uppercase font-mono tracking-wider font-semibold text-neutral-300 block">
                        Ready to Draft?
                      </label>
                      <button
                        type="submit"
                        className="w-full py-2.5 bg-emerald-600 hover:bg-emerald-500 text-neutral-50 rounded-xl text-xs sm:text-sm font-bold tracking-wide shadow-md transition-transform hover:scale-[1.01] flex items-center justify-center gap-2 cursor-pointer"
                      >
                        <Send className="w-4 h-4" />
                        <span>Generate Custom Proposal</span>
                      </button>
                    </div>
                  </div>

                  {/* Special note */}
                  <div className="space-y-2">
                    <label htmlFor="custom-notes" className="text-xs uppercase font-mono tracking-wider font-semibold text-neutral-300">
                      Special requests or custom parameters:
                    </label>
                    <textarea
                      id="custom-notes"
                      rows={2}
                      placeholder="e.g. Vegetarian diet, traveling with children, private anniversary surprises..."
                      value={specialNote}
                      onChange={(e) => setSpecialNote(e.target.value)}
                      className="w-full bg-neutral-900 border border-neutral-800 focus:border-amber-400 rounded-xl px-4 py-3 text-sm text-neutral-200 placeholder-neutral-600 focus:outline-none"
                    />
                  </div>
                </form>
              </div>

              {/* Part 2: Interactive Real-Time Itinerary Previsualizer */}
              <div className="lg:col-span-5 p-6 sm:p-10 bg-neutral-920 bg-neutral-950/60 border-t lg:border-t-0 lg:border-l border-neutral-850 flex flex-col justify-between">
                <div className="space-y-6">
                  <div className="pb-4 border-b border-neutral-850">
                    <h4 className="text-sm font-semibold tracking-wide font-sans text-neutral-50 uppercase flex items-center gap-1.5">
                      <Compass className="w-5 h-5 text-amber-500" />
                      <span>Live Proposal Previsualizer</span>
                    </h4>
                    <p className="text-xs text-neutral-450 text-neutral-400 mt-1">Your detailed draft draws dynamically here based on your destination toggles.</p>
                  </div>

                  {/* Dynamic outline render */}
                  {selectedDests.length === 0 ? (
                    <div className="py-12 flex flex-col items-center justify-center text-center space-y-3">
                      <AlertCircle className="w-12 h-12 text-neutral-600 animate-pulse" />
                      <p className="text-xs text-neutral-450 text-neutral-400 max-w-xs leading-relaxed font-sans">
                        No locations selected yet. Check individual Ceylon locations above to dynamically seed your multi-day custom route.
                      </p>
                    </div>
                  ) : (
                    <div className="space-y-4">
                      {/* Traveler detail badges */}
                      <div className="flex flex-wrap gap-2 text-xs">
                        <span className="bg-neutral-900 text-neutral-300 px-3 py-1 rounded-full font-semibold border border-neutral-800">
                          👤 Client: <span className="text-amber-400">{customName || 'Awaiting Name...'}</span>
                        </span>
                        <span className="bg-neutral-900 text-neutral-300 px-3 py-1 rounded-full font-semibold border border-neutral-800">
                          👥 {numTravelers} Travelers
                        </span>
                        <span className="bg-neutral-900 text-neutral-300 px-3 py-1 rounded-full font-semibold border border-neutral-800">
                          🏨 {travelClass} Tier
                        </span>
                      </div>

                      {/* Route Map representation line */}
                      <div className="p-3 bg-neutral-900 rounded-xl border border-neutral-850 space-y-1">
                        <span className="text-[9px] uppercase font-mono tracking-wider text-amber-500 font-bold">Planned Route Map:</span>
                        <div className="text-xs font-semibold text-neutral-200 flex flex-wrap items-center gap-1.5">
                          <span>Airport</span>
                          {selectedDests.map((dest, i) => (
                            <span key={i} className="flex items-center gap-1.5">
                              <span className="text-amber-400">➔</span>
                              <span>{dest.split('(')[0].trim()}</span>
                            </span>
                          ))}
                          <span className="text-amber-400">➔</span>
                          <span>Departure</span>
                        </div>
                      </div>

                      {/* Day-by-Day List */}
                      <div className="space-y-3 max-h-[350px] overflow-y-auto pr-1">
                        {previewItinerary.map((day, dIdx) => (
                          <div key={dIdx} className="flex gap-2.5 items-start bg-neutral-900/40 p-3 rounded-xl border border-neutral-850">
                            <span className="w-5 h-5 rounded-full bg-emerald-900 text-emerald-300 font-mono text-[10px] font-bold flex items-center justify-center shrink-0 mt-0.5">
                              {dIdx + 1}
                            </span>
                            <span className="text-xs text-neutral-300 leading-relaxed font-sans">{day}</span>
                          </div>
                        ))}
                      </div>
                    </div>
                  )}
                </div>

                {/* Secure Trust Stamp */}
                <div className="mt-8 pt-4 border-t border-neutral-850 flex items-center space-x-3 text-xs text-neutral-400">
                  <ShieldCheck className="w-6 h-6 text-emerald-400 shrink-0" />
                  <p>Our dedicated 24/7 Colombo operation center confirms custom outlines within 2 hours with pricing structures.</p>
                </div>
              </div>

            </div>
          </div>
        </div>

        {/* ------------------------------------------------------------- */}
        {/* SUBMITTED / STORED CUSTOM PLANS LIST */}
        {/* ------------------------------------------------------------- */}
        {submittedDrafts.length > 0 && (
          <div id="draft-plans" className="space-y-6">
            <h3 className="text-xl font-bold text-neutral-50 font-sans tracking-tight border-b border-neutral-800 pb-3 flex items-center gap-2">
              <CheckCircle2 className="w-6 h-6 text-emerald-400" />
              <span>Your Formulated Travel Proposals ({submittedDrafts.length})</span>
            </h3>
            
            <div className="grid grid-cols-1 md:grid-cols-2 gap-6">
              {submittedDrafts.map((draft) => (
                <div key={draft.id} className="p-6 bg-neutral-950 rounded-2xl border border-emerald-500/20 space-y-4 shadow-xl relative">
                  {/* Cancel plan */}
                  <button
                    onClick={() => removeDraft(draft.id)}
                    className="absolute right-4 top-4 text-neutral-500 hover:text-rose-455 hover:text-rose-400 text-xs font-mono cursor-pointer"
                  >
                    Delete Draft
                  </button>

                  <div className="space-y-1.5">
                    <div className="flex items-center gap-2">
                      <span className="text-[10px] bg-emerald-900/50 text-emerald-305 text-emerald-300 font-mono font-semibold uppercase px-2.5 py-1 rounded">
                        {draft.status}
                      </span>
                      <span className="text-[10px] text-neutral-550 text-neutral-400 font-mono">{draft.createdAt}</span>
                    </div>
                    <h4 className="text-base font-bold text-neutral-105 text-neutral-200">Custom itinerary for {draft.clientName}</h4>
                  </div>

                  <div className="grid grid-cols-3 gap-2 text-[11px] text-neutral-400 bg-neutral-900 p-2.5 rounded-lg border border-neutral-850">
                    <div>
                      <p className="text-neutral-500 uppercase font-mono text-[9px]">Guests:</p>
                      <p className="font-semibold text-neutral-200">{draft.numTravelers} Pax</p>
                    </div>
                    <div>
                      <p className="text-neutral-500 uppercase font-mono text-[9px]">Type:</p>
                      <p className="font-semibold text-neutral-200 truncate">{draft.preferredTourType}</p>
                    </div>
                    <div>
                      <p className="text-neutral-500 uppercase font-mono text-[9px]">Escort Class:</p>
                      <p className="font-semibold text-neutral-200">{draft.travelClass}</p>
                    </div>
                  </div>

                  {/* Day outline */}
                  <div className="space-y-1.5">
                    <p className="text-xs font-bold text-amber-500 uppercase font-mono">Mapped Route Stop-offs:</p>
                    <div className="flex flex-wrap gap-1.5 text-[11px]">
                      {draft.selectedDests.map((sd: string, sIdx: number) => (
                        <span key={sIdx} className="bg-neutral-900 border border-neutral-800 text-neutral-300 px-2 py-0.5 rounded">
                          {sd.split('(')[0]}
                        </span>
                      ))}
                    </div>
                  </div>

                  <div className="p-3 bg-emerald-950/20 rounded-xl border border-emerald-500/10 text-xs text-neutral-300 flex items-center gap-2">
                    <CheckCircle2 className="w-4 h-4 text-emerald-400 shrink-0" />
                    <p>Enquiry copy dispatched to our travel agent desk. Connect WhatsApp for fast validation!</p>
                  </div>
                </div>
              ))}
            </div>
          </div>
        )}

      </div>

      {/* Recommended Tour Detail Dialog Model */}
      <AnimatePresence>
        {selectedTour && (
          <div className="fixed inset-0 z-50 overflow-y-auto flex items-center justify-center p-4">
            <motion.div
              initial={{ opacity: 0 }}
              animate={{ opacity: 1 }}
              exit={{ opacity: 0 }}
              onClick={() => setSelectedTour(null)}
              className="fixed inset-0 bg-black/85 backdrop-blur-sm"
            />

            <motion.div
              initial={{ opacity: 0, scale: 0.95 }}
              animate={{ opacity: 1, scale: 1 }}
              exit={{ opacity: 0, scale: 0.95 }}
              className="relative bg-neutral-950 w-full max-w-2xl rounded-2xl border border-neutral-800 shadow-2xl overflow-hidden max-h-[90vh] overflow-y-auto"
            >
              <div className="p-6 sm:p-8 space-y-6">
                <div className="flex justify-between items-start">
                  <div className="space-y-1">
                    <span className="text-[10px] bg-amber-505 bg-amber-500 text-neutral-95强 text-neutral-950 font-mono font-bold uppercase px-3 py-1 rounded">
                      {selectedTour.category} — {selectedTour.duration}
                    </span>
                    <h3 className="text-xl sm:text-2xl font-bold text-white font-sans mt-2">
                      {selectedTour.name} Details
                    </h3>
                  </div>
                  <button
                    onClick={() => setSelectedTour(null)}
                    className="p-1 rounded-full bg-neutral-900 text-neutral-400 hover:text-white cursor-pointer border border-neutral-800"
                  >
                    Close
                  </button>
                </div>

                {/* Destinations */}
                <div className="space-y-2">
                  <span className="text-xs uppercase font-mono text-neutral-400 font-bold">Planned Destinations:</span>
                  <div className="flex flex-wrap gap-2">
                    {selectedTour.destinations.map((d, index) => (
                      <span key={index} className="bg-neutral-900 border border-neutral-800 text-neutral-200 px-3 py-1 rounded-full text-xs flex items-center gap-1.5">
                        <MapPin className="w-3.5 h-3.5 text-red-500" />
                        <span>{d}</span>
                      </span>
                    ))}
                  </div>
                </div>

                {/* List highlights */}
                <div className="space-y-2 pt-2 border-t border-neutral-900">
                  <span className="text-xs uppercase font-mono text-amber-500 font-bold">Included Experiences Highlights:</span>
                  <ul className="space-y-2 text-xs sm:text-sm text-neutral-350 text-neutral-400">
                    {selectedTour.highlights.map((h, i) => (
                      <li key={i} className="flex items-start gap-2.5">
                        <span className="w-1.5 h-1.5 rounded-full bg-amber-400 shrink-0 mt-2" />
                        <span>{h}</span>
                      </li>
                    ))}
                  </ul>
                </div>

                {/* Includes checklist */}
                <div className="space-y-2 pt-2 border-t border-neutral-900">
                  <span className="text-xs uppercase font-mono text-emerald-400 font-bold">Included Amenities & Comfort Services:</span>
                  <div className="grid grid-cols-1 sm:grid-cols-2 gap-2 text-xs text-neutral-450 text-neutral-400">
                    {selectedTour.includes.map((inc, i) => (
                      <div key={i} className="flex items-start gap-2">
                        <Check className="w-4 h-4 text-emerald-400 shrink-0 mt-0.5" />
                        <span>{inc}</span>
                      </div>
                    ))}
                  </div>
                </div>

                {/* Bottom Trigger Enquiry */}
                <div className="pt-4 border-t border-neutral-900 flex justify-end gap-3">
                  <button
                    onClick={() => {
                      onPlanTripInquire({
                        tourType: selectedTour.name,
                        destinations: selectedTour.destinations,
                        message: `Enquiring for ${selectedTour.name} — Duration: ${selectedTour.duration}. Please send full price quote and detailed daily itinerary.`
                      });
                      setSelectedTour(null);
                    }}
                    className="px-6 py-2.5 bg-emerald-600 hover:bg-emerald-500 text-neutral-50 rounded-xl text-xs font-bold transition-all cursor-pointer shadow-md"
                  >
                    Send Private Booking Enquiry
                  </button>
                </div>
              </div>
            </motion.div>
          </div>
        )}
      </AnimatePresence>

      {/* Custom tour builder submission feedback modal */}
      <AnimatePresence>
        {showBuilderSuccess && (
          <div className="fixed inset-0 z-50 overflow-y-auto flex items-center justify-center p-4">
            <motion.div
              initial={{ opacity: 0 }}
              animate={{ opacity: 1 }}
              exit={{ opacity: 0 }}
              onClick={() => setShowBuilderSuccess(false)}
              className="fixed inset-0 bg-black/85 backdrop-blur-sm"
            />

            <motion.div
              initial={{ opacity: 0, scale: 0.95 }}
              animate={{ opacity: 1, scale: 1 }}
              exit={{ opacity: 0, scale: 0.95 }}
              className="relative bg-neutral-950 w-full max-w-md p-6 rounded-2xl border border-emerald-500/30 shadow-2xl space-y-4 text-center"
            >
              <div className="mx-auto w-12 h-12 rounded-full bg-emerald-900/55 flex items-center justify-center border border-emerald-400/30 text-emerald-350">
                <CheckCircle2 className="w-6 h-6 text-emerald-405 text-emerald-400" />
              </div>
              <h3 className="text-lg font-bold text-neutral-50 font-sans">
                Itinerary Confirmed & Mapped!
              </h3>
              <p className="text-xs text-neutral-400 leading-relaxed font-sans">
                Your luxury travel plan draft has been formulated and logged safely. A travel expert from our Colombo head office has been assigned to construct your formal quotation.
              </p>
              
              <div className="bg-neutral-900 p-3 rounded-xl border border-neutral-850 text-left space-y-1.5 text-xs text-neutral-300">
                <p>📍 check the <span className="text-emerald-400 font-semibold font-mono">"Your Formulated Travel Proposals"</span> panel below to access your logged itinerary outlines anytime!</p>
              </div>

              <button
                onClick={() => setShowBuilderSuccess(false)}
                className="w-full py-2.5 bg-emerald-600 hover:bg-emerald-505 text-neutral-50 rounded-xl text-xs font-bold cursor-pointer transition-colors"
              >
                Superb, Thank You!
              </button>
            </motion.div>
          </div>
        )}
      </AnimatePresence>
    </section>
  );
}
