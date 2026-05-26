"use client";

import { useState } from "react";
import { Plus, Minus, BookOpen, Clock } from "lucide-react";
import Navbar from "@/components/Navbar";
import Footer from "@/components/Footer";
import Breadcrumbs from "@/components/Breadcrumbs";
import { blogPosts } from "@/data/blog-posts";
import { cn } from "@/lib/utils";
import { WHATSAPP_LINK } from "@/lib/whatsapp";

const categories = ["All", ...new Set(blogPosts.map((blog) => blog.category))];

const BlogPage = () => {
  const [openId, setOpenId] = useState<number | null>(null);
  const [selectedCategory, setSelectedCategory] = useState("All");

  const toggleBlog = (id: number) => {
    setOpenId(openId === id ? null : id);
  };

  const filteredBlogs =
    selectedCategory === "All"
      ? blogPosts
      : blogPosts.filter((blog) => blog.category === selectedCategory);

  return (
    <main className="min-h-screen bg-gradient-to-b from-mist to-background">
      <Navbar />

      {/* Hero Section */}
      <section className="relative pt-32 pb-16 md:pt-40 md:pb-20">
        <div className="container mx-auto px-4">
          <div className="text-center max-w-3xl mx-auto">
            <div className="inline-flex items-center gap-2 px-4 py-2 rounded-full glass-card-light mb-6">
              <BookOpen className="w-4 h-4 text-teal-600" />
              <span className="text-sm font-medium text-foreground/80">Travel Blog</span>
            </div>
            <h1 className="text-4xl md:text-5xl lg:text-6xl font-display font-bold text-foreground mb-6">
              Chikmagalur <span className="text-gradient-gold">Travel Guide</span>
            </h1>
            <p className="text-lg md:text-xl text-muted-foreground max-w-2xl mx-auto">
              Expert tips, itineraries, and insider knowledge to help you plan 
              an unforgettable trip to Karnataka's coffee paradise.
            </p>
          </div>
        </div>
      </section>

      {/* Category Filter */}
      <section className="pb-8">
        <div className="container mx-auto px-4">
          <Breadcrumbs
            items={[
              { name: "Home", path: "/" },
              { name: "Blog", path: "/blog" },
            ]}
            className="mb-6 max-w-3xl mx-auto"
          />
          <div className="flex flex-wrap justify-center gap-2">
            {categories.map((category) => (
              <button
                key={category}
                onClick={() => setSelectedCategory(category)}
                className={cn(
                  "px-4 py-2 rounded-full text-sm font-medium transition-all duration-300",
                  selectedCategory === category
                    ? "bg-accent text-white"
                    : "glass-card-light text-foreground hover:bg-accent/10"
                )}
              >
                {category}
              </button>
            ))}
          </div>
        </div>
      </section>

      {/* Blog Section */}
      <section className="pb-20 md:pb-32">
        <div className="container mx-auto px-4">
          <div className="max-w-4xl mx-auto">
            <div className="space-y-4">
              {filteredBlogs.map((blog, index) => (
                <article
                  key={blog.id}
                  id={`post-${blog.id}`}
                  className={cn(
                    "glass-card-light overflow-hidden transition-all duration-300",
                    openId === blog.id && "ring-2 ring-accent/20"
                  )}
                  itemScope
                  itemType="https://schema.org/BlogPosting"
                >
                  <button
                    onClick={() => toggleBlog(blog.id)}
                    className="w-full p-5 md:p-6 text-left group focus:outline-none focus-visible:ring-2 focus-visible:ring-accent focus-visible:ring-inset"
                    aria-expanded={openId === blog.id}
                    aria-controls={`blog-content-${blog.id}`}
                  >
                    <div className="flex items-start justify-between gap-4">
                      <div className="flex-1">
                        <div className="flex flex-wrap items-center gap-3 mb-2">
                          <span className="px-2 py-1 rounded-full bg-accent/10 text-accent text-xs font-medium">
                            {blog.category}
                          </span>
                          <span className="flex items-center gap-1 text-xs text-muted-foreground">
                            <Clock className="w-3 h-3" />
                            {blog.readTime}
                          </span>
                        </div>
                        <h2
                          className="text-lg md:text-xl font-semibold text-foreground group-hover:text-accent transition-colors mb-1"
                          itemProp="headline"
                        >
                          {blog.title}
                        </h2>
                        <p className="text-sm text-muted-foreground" itemProp="description">
                          {blog.excerpt}
                        </p>
                      </div>
                      <span
                        className={cn(
                          "flex-shrink-0 w-8 h-8 rounded-full glass flex items-center justify-center transition-all duration-300",
                          openId === blog.id
                            ? "bg-accent text-white rotate-180"
                            : "bg-secondary text-foreground group-hover:bg-accent/10"
                        )}
                      >
                        {openId === blog.id ? (
                          <Minus className="w-4 h-4" />
                        ) : (
                          <Plus className="w-4 h-4" />
                        )}
                      </span>
                    </div>
                  </button>

                  <div
                    id={`blog-content-${blog.id}`}
                    className={cn(
                      "overflow-hidden transition-all duration-300 ease-out",
                      openId === blog.id ? "max-h-[1200px] opacity-100" : "max-h-0 opacity-0"
                    )}
                  >
                    <div className="px-5 md:px-6 pb-5 md:pb-6 border-t border-border/50">
                      <p
                        className="text-muted-foreground leading-relaxed pt-4"
                        itemProp="articleBody"
                      >
                        {blog.content}
                      </p>
                      <a
                        href={WHATSAPP_LINK}
                        target="_blank"
                        rel="noopener noreferrer"
                        className="inline-flex items-center gap-2 mt-4 text-accent hover:text-accent/80 font-medium text-sm transition-colors"
                      >
                        Plan this trip →
                      </a>
                    </div>
                  </div>
                </article>
              ))}
            </div>
          </div>
        </div>
      </section>

      {/* CTA Section */}
      <section className="pb-20 md:pb-32">
        <div className="container mx-auto px-4">
          <div className="max-w-2xl mx-auto text-center glass-card-light p-8 md:p-12">
            <h2 className="text-2xl md:text-3xl font-display font-bold text-foreground mb-4">
              Ready to explore Chikmagalur?
            </h2>
            <p className="text-muted-foreground mb-6">
              Let us help you create the perfect itinerary for your Chikmagalur adventure.
            </p>
            <a
              href={WHATSAPP_LINK}
              target="_blank"
              rel="noopener noreferrer"
              className="inline-flex items-center gap-2 px-6 py-3 rounded-full bg-accent text-white font-medium hover:bg-accent/90 transition-colors"
            >
              Get Custom Itinerary
            </a>
          </div>
        </div>
      </section>

      <Footer />    </main>
  );
};

export default BlogPage;
