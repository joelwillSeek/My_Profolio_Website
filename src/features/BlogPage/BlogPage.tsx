"use client";

import { useEffect, useState } from "react";
import ScrambleText from "../../components/ScrambleText";
import { BlogPost } from "./data";

export default function BlogPage() {
  const [posts, setPosts] = useState<BlogPost[]>([]);
  const [loading, setLoading] = useState(true);
  const [error, setError] = useState<string | null>(null);

  const fetchBlogs = async () => {
    setLoading(true);
    setError(null);
    try {
      const res = await fetch("/api/blog");
      if (!res.ok) {
        throw new Error("Failed to fetch blogs");
      }
      const data = await res.json();
      if (Array.isArray(data)) {
        setPosts(data);
      } else {
        throw new Error("Invalid response format");
      }
    } catch (err: any) {
      console.error(err);
      setError(err.message || "Something went wrong");
    } finally {
      setLoading(false);
    }
  };

  useEffect(() => {
    fetchBlogs();
  }, []);

  return (
    <section id="blog" className="relative py-24 px-8 overflow-hidden z-10 flex flex-col items-center">
      <div className="w-full max-w-6xl mx-auto relative space-y-16">

        {/* Section Header */}
        <div className="flex items-end gap-4 border-b border-primary/30 pb-4 relative">
          <h2 className="font-headline-lg text-4xl text-on-surface uppercase tracking-tighter">
            <ScrambleText text="BLOGS" trigger="in-view" speed={40} />
          </h2>
          <div className="absolute bottom-0 left-0 h-[2px] w-1/3 bg-primary" style={{ boxShadow: "0 0 15px #93ccff, 0 0 5px #93ccff" }} />
        </div>

        <p className="font-body-md text-on-surface-variant leading-relaxed max-w-2xl border-l-2 border-primary/50 pl-4 py-2">
          Accessing historical archives. Read my thoughts, tutorials, and insights on <span className="text-primary">software engineering</span>, <span className="text-primary">architecture</span>, and <span className="text-primary">technology</span>.
        </p>

        {/* Blog Grid */}
        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-8 relative">
          {loading ? (
            // Loading Skeletons
            Array.from({ length: 3 }).map((_, idx) => (
              <div key={idx} className="border border-outline-variant/30 bg-surface/20 backdrop-blur-md p-6 flex flex-col h-full space-y-4 animate-pulse">
                <div className="h-3 w-24 bg-primary/20 rounded"></div>
                <div className="h-6 w-3/4 bg-on-surface-variant/20 rounded"></div>
                <div className="h-16 w-full bg-on-surface-variant/10 rounded"></div>
                <div className="flex gap-2">
                  <div className="h-5 w-14 bg-primary/10 rounded"></div>
                  <div className="h-5 w-14 bg-primary/10 rounded"></div>
                </div>
              </div>
            ))
          ) : error ? (
            <div className="col-span-full py-12 flex flex-col items-center justify-center space-y-4 text-center">
              <span className="text-red-400 font-body-md">Error loading feed: {error}</span>
              <button
                onClick={fetchBlogs}
                className="font-label-sm text-[12px] uppercase tracking-widest px-6 py-2.5 border border-primary text-primary bg-primary/10 hover:bg-primary/20 transition-all duration-200 cursor-pointer shadow-[0_0_15px_rgba(147,204,255,0.15)]"
              >
                REFRESH_FEED
              </button>
            </div>
          ) : posts.length === 0 ? (
            <div className="col-span-full py-12 flex flex-col items-center justify-center space-y-4 text-center">
              <span className="text-on-surface-variant font-body-md">No blog entries found.</span>
              <button
                onClick={fetchBlogs}
                className="font-label-sm text-[12px] uppercase tracking-widest px-6 py-2.5 border border-primary text-primary bg-primary/10 hover:bg-primary/20 transition-all duration-200 cursor-pointer shadow-[0_0_15px_rgba(147,204,255,0.15)]"
              >
                REFRESH_FEED
              </button>
            </div>
          ) : (
            posts.map((post) => (
              <div onClick={() => {
                if (post.link) window.open(post.link, "_blank");
              }} key={post.id} className="group relative border border-outline-variant bg-surface/40 backdrop-blur-md p-6 transition-all hover:border-primary hover:shadow-[0_0_20px_rgba(147,204,255,0.15)] flex flex-col h-full cursor-pointer">
                {/* Corner Accents */}
                <div className="absolute -top-[1px] -left-[1px] w-4 h-4 border-t border-l border-primary opacity-0 group-hover:opacity-100 transition-opacity" style={{ boxShadow: "-2px -2px 10px rgba(147,204,255,0.3)" }} />
                <div className="absolute -bottom-[1px] -right-[1px] w-4 h-4 border-b border-r border-primary opacity-0 group-hover:opacity-100 transition-opacity" style={{ boxShadow: "2px 2px 10px rgba(147,204,255,0.3)" }} />

                <div className="mb-4">
                  <span className="font-code-snippet text-primary/80 text-[10px] tracking-widest uppercase">
                    LOG_DATE: {post.date}
                  </span>
                </div>

                <h3 className="font-headline-md text-xl text-on-surface mb-3 group-hover:text-primary transition-colors">
                  {post.title}
                </h3>

                <p className="font-body-md text-on-surface-variant text-sm leading-relaxed mb-6 flex-grow">
                  {post.excerpt}
                </p>

                <div className="flex flex-wrap gap-2 mb-6 mt-auto">
                  {post.tags.map(tag => (
                    <span key={tag} className="bg-primary/10 text-primary border border-primary/20 text-[10px] uppercase tracking-widest px-2 py-1 font-label-sm">
                      {tag}
                    </span>
                  ))}
                </div>

                <div className="mt-auto pt-4 border-t border-outline-variant/50">
                  <div className="font-label-sm text-[12px] uppercase tracking-widest flex items-center gap-2 text-on-surface group-hover:text-primary transition-colors w-fit">
                    READ_ENTRY
                    <i className="fas fa-arrow-right text-[10px] transform group-hover:translate-x-1 transition-transform"></i>
                  </div>
                </div>
              </div>
            ))
          )}
        </div>

      </div>
    </section>
  );
}

