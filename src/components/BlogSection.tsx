import React, { useState } from 'react';
import { motion, AnimatePresence } from 'motion/react';
import { BookOpen, Calendar, User, Clock, ArrowLeft, Heart, Share2, Sparkles, AlertCircle } from 'lucide-react';
import { blogPosts } from '../data';
import { BlogPost } from '../types';

export default function BlogSection() {
  const [selectedPost, setSelectedPost] = useState<BlogPost | null>(null);
  const [likes, setLikes] = useState<Record<string, number>>({});
  const [hasLiked, setHasLiked] = useState<Record<string, boolean>>({});

  const handleLike = (id: string, e: React.MouseEvent) => {
    e.stopPropagation();
    if (hasLiked[id]) {
      setLikes(prev => ({ ...prev, [id]: (prev[id] || 0) - 1 }));
      setHasLiked(prev => ({ ...prev, [id]: false }));
    } else {
      setLikes(prev => ({ ...prev, [id]: (prev[id] || 0) + 1 }));
      setHasLiked(prev => ({ ...prev, [id]: true }));
    }
  };

  const handleShare = (post: BlogPost, e: React.MouseEvent) => {
    e.stopPropagation();
    if (navigator.share) {
      navigator.share({
        title: post.title,
        text: post.excerpt,
        url: window.location.href,
      }).catch(console.error);
    } else {
      alert(`Copied link to clipboard for article: "${post.title}"`);
    }
  };

  return (
    <section id="blog-section" className="py-24 bg-neutral-950 border-t border-neutral-805">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        
        <AnimatePresence mode="wait">
          {!selectedPost ? (
            <motion.div
              key="list"
              initial={{ opacity: 0 }}
              animate={{ opacity: 1 }}
              exit={{ opacity: 0 }}
              className="space-y-16"
            >
              {/* Header Title Grid */}
              <div className="text-center max-w-3xl mx-auto space-y-4">
                <motion.div
                  initial={{ opacity: 0 }}
                  whileInView={{ opacity: 0.9 }}
                  viewport={{ once: true }}
                  className="inline-flex items-center space-x-1.5 bg-amber-500/10 px-3.5 py-1.5 rounded-full border border-amber-500/20 text-text-amber-550 text-amber-450 text-amber-400 text-xs font-semibold tracking-wider font-mono uppercase"
                >
                  <BookOpen className="w-4 h-4 text-amber-404" />
                  <span>Ceylon Insider Knowledge Hub</span>
                </motion.div>
                <h2 className="text-3xl sm:text-4xl font-bold tracking-tight text-neutral-50 font-sans">
                  The Sri Lanka Travel Guide
                </h2>
                <p className="text-neutral-400 text-sm sm:text-base leading-relaxed">
                  Valuable counsel, local etiquette, packing parameters, and secret photography routes curated directly by our native chauffeurs and conservation naturalists.
                </p>
              </div>

              {/* Cards Grid */}
              <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-8">
                {blogPosts.map((post) => {
                  const itemLikes = likes[post.id] || 12 + Math.floor(Math.random() * 8);
                  const isPostLiked = hasLiked[post.id] || false;

                  return (
                    <div
                      key={post.id}
                      onClick={() => setSelectedPost(post)}
                      className="group bg-neutral-900 rounded-2xl overflow-hidden border border-neutral-850 hover:border-amber-500/25 transition-all shadow-xl flex flex-col justify-between cursor-pointer"
                    >
                      {/* Thumbnail photo */}
                      <div className="relative aspect-video overflow-hidden bg-neutral-850">
                        <img
                          src={post.image}
                          alt={post.title}
                          loading="lazy"
                          referrerPolicy="no-referrer"
                          className="w-full h-full object-cover group-hover:scale-105 transition-transform duration-500"
                        />
                        <div className="absolute top-4 left-4 bg-neutral-950/80 backdrop-blur-md text-[10px] uppercase font-mono tracking-wider font-semibold text-amber-400 px-3 py-1 rounded-md">
                          {post.category}
                        </div>
                      </div>

                      {/* Content panel */}
                      <div className="p-6 flex-1 flex flex-col justify-between space-y-4">
                        <div className="space-y-3">
                          <div className="flex items-center space-x-4 text-[11px] text-neutral-500 font-mono">
                            <span className="flex items-center gap-1">
                              <Calendar className="w-3.5 h-3.5 text-neutral-500" />
                              <span>{post.date}</span>
                            </span>
                            <span className="flex items-center gap-1">
                              <Clock className="w-3.5 h-3.5 text-neutral-500" />
                              <span>{post.readTime}</span>
                            </span>
                          </div>

                          <h3 className="text-base sm:text-lg font-bold font-sans text-neutral-100 group-hover:text-amber-400 transition-colors leading-snug">
                            {post.title}
                          </h3>
                          <p className="text-xs sm:text-sm text-neutral-450 text-neutral-400 line-clamp-3 leading-relaxed">
                            {post.excerpt}
                          </p>
                        </div>

                        {/* Interactive reaction toolbar */}
                        <div className="flex justify-between items-center pt-4 border-t border-neutral-850 text-xs text-neutral-400">
                          <span className="text-neutral-550 font-mono">By {post.author.split('(')[0]}</span>
                          <div className="flex items-center space-x-3">
                            <button
                              onClick={(e) => handleLike(post.id, e)}
                              className={`flex items-center space-x-1 hover:text-rose-400 transition-all cursor-pointer ${
                                isPostLiked ? 'text-rose-450 text-rose-550 text-rose-500 font-bold' : ''
                              }`}
                              aria-label={`Like article ${post.title}`}
                            >
                              <Heart className={`w-4.5 h-4.5 ${isPostLiked ? 'fill-current text-rose-500' : ''}`} />
                              <span>{itemLikes}</span>
                            </button>
                            <button
                              onClick={(e) => handleShare(post, e)}
                              className="hover:text-amber-400 transition-colors cursor-pointer"
                              aria-label={`Share link for ${post.title}`}
                            >
                              <Share2 className="w-4.5 h-4.5" />
                            </button>
                          </div>
                        </div>

                      </div>
                    </div>
                  );
                })}
              </div>
            </motion.div>
          ) : (
            <motion.div
              key="detailed"
              initial={{ opacity: 0, x: 20 }}
              animate={{ opacity: 1, x: 0 }}
              exit={{ opacity: 0, x: -20 }}
              className="max-w-3xl mx-auto space-y-8 bg-neutral-900 border border-neutral-850 p-6 sm:p-10 rounded-3xl shadow-2xl relative"
            >
              {/* Back CTA Button */}
              <button
                onClick={() => setSelectedPost(null)}
                className="inline-flex items-center gap-2 text-xs font-mono font-bold uppercase text-amber-450 tracking-wider text-amber-400 hover:text-amber-300 cursor-pointer"
              >
                <ArrowLeft className="w-4 h-4" />
                <span>Go Back to Travel Guides</span>
              </button>

              {/* Title, metadata */}
              <div className="space-y-4">
                <span className="text-[10px] bg-amber-500/10 text-amber-400 border border-amber-500/20 font-mono font-bold tracking-widest uppercase px-3 py-1 rounded-md">
                  {selectedPost.category}
                </span>

                <h2 className="text-2xl sm:text-4xl font-bold font-sans tracking-tight text-white leading-tight">
                  {selectedPost.title}
                </h2>

                <div className="flex flex-wrap gap-4 text-xs font-mono text-neutral-500 pt-1">
                  <span className="flex items-center gap-1.5 text-neutral-400">
                    <User className="w-4 h-4 text-emerald-450 text-emerald-400" />
                    <span>Inscribed by: {selectedPost.author}</span>
                  </span>
                  <span className="flex items-center gap-1.5">
                    <Calendar className="w-4 h-4 text-neutral-505" />
                    <span>Published: {selectedPost.date}</span>
                  </span>
                  <span className="flex items-center gap-1.5">
                    <Clock className="w-4 h-4 text-neutral-505" />
                    <span>Duration: {selectedPost.readTime}</span>
                  </span>
                </div>
              </div>

              {/* Large immersive layout image */}
              <div className="h-64 sm:h-96 w-full rounded-2xl overflow-hidden shadow-lg">
                <img
                  src={selectedPost.image}
                  alt={selectedPost.title}
                  referrerPolicy="no-referrer"
                  className="w-full h-full object-cover"
                />
              </div>

              {/* Body blog content markup simulation */}
              <div className="text-neutral-300 space-y-6 sm:text-base leading-relaxed font-sans pt-4 border-t border-neutral-850">
                <p className="font-semibold text-neutral-200 text-lg">
                  "{selectedPost.excerpt}"
                </p>

                <p>
                  Sri Lanka is a paradise unlike any other. Known historically as Serendib or Ceylon, the island holds a dramatic geographical density—meaning you can explore sweltering, palm-fringed tropical beaches and cooling highlands within a three-hour scenic car navigation trip.
                </p>

                <div className="bg-neutral-950 p-5 rounded-2xl border border-neutral-850 space-y-3">
                  <h4 className="text-xs font-mono uppercase text-amber-550 text-amber-400 font-bold flex items-center gap-1.5">
                    <Sparkles className="w-4.5 h-4.5" />
                    <span>Key Guidelines for Safe Traveling</span>
                  </h4>
                  <ul className="space-y-1.5 text-xs text-neutral-400 font-sans">
                    <li>• Always check tide forecasts and marine park indicators before buying tour tickets.</li>
                    <li>• Remove footwear and hats before walking past stone stupas inside historical cities.</li>
                    <li>• Carry cash for payment inside country roadside boutiques or street tuk-tuks.</li>
                  </ul>
                </div>

                <p>
                  To maximize your experience of {selectedPost.title.toLowerCase().replace('the ultimate guide to ', '')}, consider consulting with our Colombo head travel desk. We provide clean, air-conditioned hybrid sedans accompanied by official English-speaking tourist office licensed guides. Together, we can co-create private, custom routes that escape tourist gridlocks.
                </p>
              </div>

              {/* Bottom footer bar */}
              <div className="pt-6 border-t border-neutral-850 flex justify-between items-center text-xs text-neutral-400">
                <p>Enjoyed our guide? Bookmark it for your upcoming booking.</p>
                <button
                  onClick={() => setSelectedPost(null)}
                  className="px-5 py-2 rounded-xl bg-neutral-950 hover:bg-neutral-800 border border-neutral-800 text-neutral-200 cursor-pointer"
                >
                  Return to Guides
                </button>
              </div>
            </motion.div>
          )}
        </AnimatePresence>

      </div>
    </section>
  );
}
