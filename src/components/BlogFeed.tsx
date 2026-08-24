"use client";

import React, { useState } from 'react';
import { Search } from 'lucide-react';
import { Link } from '@/i18n/routing';
import { getAllPostsSorted, type BlogPost } from '@/lib/blog-data';

const CATEGORIES = ["All", "News", "Blog", "Event"];

export function BlogFeed() {
  const [searchQuery, setSearchQuery] = useState("");
  const [activeCategory, setActiveCategory] = useState("All");
  const [visibleCount, setVisibleCount] = useState(3);

  const sortedPosts = getAllPostsSorted();

  const filteredPosts = sortedPosts.filter((post: BlogPost) => {
    const matchesSearch = 
      post.title.toLowerCase().includes(searchQuery.toLowerCase()) || 
      post.excerpt.toLowerCase().includes(searchQuery.toLowerCase());
    
    const matchesCategory = activeCategory === "All" || post.category === activeCategory;

    return matchesSearch && matchesCategory;
  });

  const displayPosts = filteredPosts.slice(0, visibleCount);

  // Reset visible count when filters change
  React.useEffect(() => {
    setVisibleCount(3);
  }, [searchQuery, activeCategory]);

  return (
    <section className="w-full bg-white flex-1 flex flex-col">
      {/* Top Navigation Bar */}
      <div className="w-full border-b border-slate-200 sticky top-[76px] bg-white/80 backdrop-blur-md z-30">
        <div className="max-w-[1400px] mx-auto px-4 md:px-8 py-4 flex flex-col md:flex-row md:items-center justify-between gap-4">
          
          {/* Category Tabs */}
          <div className="flex items-center overflow-x-auto hide-scrollbar border border-slate-200 rounded-sm bg-slate-50 w-full md:w-max max-w-full min-w-0">
            {CATEGORIES.map((category, index) => (
              <button 
                key={category}
                onClick={() => setActiveCategory(category)}
                className={`px-5 py-2 text-sm font-medium transition-colors shrink-0
                  ${index !== CATEGORIES.length - 1 ? 'border-r border-slate-200' : ''}
                  ${activeCategory === category 
                    ? 'text-slate-900 bg-white shadow-sm' 
                    : 'text-slate-500 hover:text-slate-900 bg-transparent'
                  }
                `}
              >
                {category}
              </button>
            ))}
          </div>

          {/* Search Bar */}
          <div className="relative w-full md:w-80 shrink-0">
            <div className="absolute inset-y-0 left-0 pl-3 flex items-center pointer-events-none">
              <Search className="h-4 w-4 text-slate-400" />
            </div>
            <input
              type="text"
              placeholder="Search articles"
              value={searchQuery}
              onChange={(e) => setSearchQuery(e.target.value)}
              className="w-full pl-9 pr-4 py-2 border border-slate-200 bg-slate-50 hover:bg-white focus:bg-white focus:border-slate-300 outline-none transition-colors text-sm text-slate-700 placeholder:text-slate-400 rounded-sm"
            />
          </div>

        </div>
      </div>

      {/* Posts Grid */}
      <div className="w-full max-w-[1400px] mx-auto px-4 md:px-8 py-12 md:py-16">
        
        {displayPosts.length > 0 ? (
          <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-6 md:gap-8">
            {displayPosts.map((post) => (
              <Link 
                key={post.slug}
                href={`/blog/${post.slug}` as any}
                className="group flex flex-col bg-[#fafafa] border border-slate-200 overflow-hidden hover:border-slate-300 transition-colors h-full rounded-sm"
              >
                {/* Image */}
                <div className="relative h-[220px] w-full border-b border-slate-200 overflow-hidden bg-white">
                  {post.image ? (
                    <img 
                      src={post.image} 
                      alt={post.title}
                      className="w-full h-full object-cover transition-transform duration-700 group-hover:scale-[1.02] opacity-90 group-hover:opacity-100"
                    />
                  ) : (
                    <div className="w-full h-full flex items-center justify-center bg-slate-50 transition-transform duration-700 group-hover:scale-[1.02]">
                      <span className="font-serif text-2xl font-bold text-slate-300 tracking-wider uppercase">
                        WOMEN-IN-WACREN
                      </span>
                    </div>
                  )}
                </div>
                
                {/* Content */}
                <div className="flex flex-col flex-1 p-6 md:p-8">
                  <h3 className="font-heading text-lg md:text-xl font-medium text-slate-900 mb-4 leading-snug">
                    {post.title}
                  </h3>
                  
                  <p className="text-sm md:text-[15px] text-slate-500 font-light leading-relaxed mb-8 flex-1">
                    {post.excerpt}
                  </p>
                  
                  {/* Meta Footer */}
                  <div className="mt-auto flex items-center justify-between text-[13px] font-medium pt-2">
                    <span className="text-primary tracking-wide">
                      [{post.category}]
                    </span>
                    <span className="text-slate-600 font-mono text-[12px]">
                      {post.date}
                    </span>
                  </div>
                </div>
              </Link>
            ))}
          </div>
        ) : (
          <div className="flex flex-col items-center justify-center py-20 text-center border border-dashed border-slate-200 rounded-lg bg-slate-50">
            <h3 className="text-lg font-medium text-slate-700 mb-2">No articles found</h3>
            <p className="text-slate-500 text-sm mb-6">We couldn't find any articles matching your search.</p>
            <button 
              onClick={() => {
                setSearchQuery("");
                setActiveCategory("All");
              }}
              className="px-6 py-2 border border-slate-200 bg-white text-slate-700 text-sm font-medium hover:bg-slate-50 transition-colors rounded-sm shadow-sm"
            >
              Clear Filters
            </button>
          </div>
        )}
        
        {/* Pagination */}
        {filteredPosts.length > visibleCount && (
          <div className="flex justify-center mt-16">
            <button 
              onClick={() => setVisibleCount(prev => prev + 3)}
              className="px-6 py-2 border border-slate-200 bg-slate-50 text-slate-700 text-sm font-medium hover:bg-white hover:border-slate-300 transition-colors rounded-sm"
            >
              Load More
            </button>
          </div>
        )}
      </div>
    </section>
  );
}
