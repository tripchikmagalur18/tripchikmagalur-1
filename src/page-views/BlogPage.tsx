"use client";

import { useState } from "react";
import { Plus, Minus, BookOpen, Clock, Calendar } from "lucide-react";
import Navbar from "@/components/Navbar";
import Footer from "@/components/Footer";
import { PageJsonLd } from "@/components/page-json-ld";
import Breadcrumbs from "@/components/Breadcrumbs";
import { cn } from "@/lib/utils";
import { WHATSAPP_LINK } from "@/lib/whatsapp";

interface BlogItem {
  id: number;
  title: string;
  excerpt: string;
  content: string;
  readTime: string;
  category: string;
}

const blogs: BlogItem[] = [
  {
    id: 1,
    title: "Best Places to Visit in Chikmagalur",
    excerpt: "Discover the top attractions in Karnataka's coffee country",
    content: "Chikmagalur is one of the most beautiful hill stations in Karnataka, known for lush coffee plantations, misty mountains, and scenic waterfalls. Some of the best places to visit include Mullayanagiri Peak (the highest peak in Karnataka), Baba Budangiri hills, Kudremukh National Park, Hebbe Falls, Jhari Falls, Hirekolale Lake, and Kemmangundi. These attractions make Chikmagalur a perfect destination for nature lovers, photographers, couples, and families. The best time to explore these tourist places is from September to March when the weather is pleasant and ideal for sightseeing.",
    readTime: "4 min read",
    category: "Destinations",
  },
  {
    id: 2,
    title: "Chikmagalur Trip from Bangalore",
    excerpt: "Your complete guide to the perfect weekend getaway",
    content: "A Chikmagalur trip from Bangalore is one of the most popular weekend getaways. Located around 245 km from Bangalore, Chikmagalur can be reached by car, bus, or private cab. The scenic drive through Hassan and Belur adds to the experience. Many travelers prefer booking Chikmagalur tour packages from Bangalore that include transport, hotels, and sightseeing for a hassle-free journey. Start early to make the most of your trip and enjoy the beautiful countryside views along the way.",
    readTime: "3 min read",
    category: "Travel Guide",
  },
  {
    id: 3,
    title: "Best Time to Visit Chikmagalur",
    excerpt: "Plan your trip during the ideal season",
    content: "The best time to visit Chikmagalur is from September to March when the weather is cool and pleasant. Monsoon season from June to August transforms Chikmagalur into a green paradise with flowing waterfalls, while summer months are ideal for sightseeing and coffee estate visits. Each season offers a unique experience – misty mornings in winter, lush greenery in monsoon, and clear skies in summer for panoramic views.",
    readTime: "2 min read",
    category: "Planning",
  },
  {
    id: 4,
    title: "Chikmagalur Budget Trip Guide",
    excerpt: "Experience the hills without breaking the bank",
    content: "A budget trip to Chikmagalur is easy to plan with affordable homestays, shared transportation, and local eateries. Budget travelers can enjoy waterfalls, trekking spots, and scenic viewpoints without spending much. A 2 to 3-day budget itinerary makes Chikmagalur an ideal low-cost hill station trip. Consider staying in local homestays, eating at small restaurants, and using public transport or shared cabs to minimize expenses.",
    readTime: "3 min read",
    category: "Budget Travel",
  },
  {
    id: 5,
    title: "Chikmagalur Tour Packages",
    excerpt: "Curated experiences for every type of traveler",
    content: "Chikmagalur tour packages are available for couples, families, groups, and solo travelers. These packages usually include accommodation, sightseeing, transportation, and optional meals. Customized packages help travelers explore Chikmagalur comfortably. Whether you're looking for a romantic getaway, family vacation, or adventure trip, there's a package that suits your needs and budget.",
    readTime: "2 min read",
    category: "Packages",
  },
  {
    id: 6,
    title: "Chikmagalur Travel Packages with Hotels",
    excerpt: "Stay comfortably while exploring the coffee hills",
    content: "Travel packages with hotels in Chikmagalur include budget hotels, luxury resorts, coffee estate stays, and homestays. These packages are ideal for travelers looking for comfort and convenience. From cozy homestays nestled in coffee plantations to luxury resorts with stunning valley views, Chikmagalur offers accommodation options for every budget and preference.",
    readTime: "3 min read",
    category: "Accommodation",
  },
  {
    id: 7,
    title: "Chikmagalur Honeymoon Packages",
    excerpt: "Create romantic memories in the hills",
    content: "Chikmagalur honeymoon packages offer romantic stays, private sightseeing, coffee plantation walks, and peaceful surroundings. It is one of the best honeymoon destinations in Karnataka. The misty mountains, scenic viewpoints, and private estate stays create the perfect atmosphere for couples to celebrate their new beginning together.",
    readTime: "3 min read",
    category: "Romance",
  },
  {
    id: 8,
    title: "Chikmagalur Family Tour Packages",
    excerpt: "Fun-filled adventures for all ages",
    content: "Family tour packages in Chikmagalur include comfortable hotels, safe transport, and easy sightseeing options suitable for kids and elders. A 3-day itinerary works best for families. Activities like gentle nature walks, waterfall visits, and wildlife safaris ensure everyone has a memorable experience.",
    readTime: "3 min read",
    category: "Family",
  },
  {
    id: 9,
    title: "Chikmagalur Group Tour Packages",
    excerpt: "Perfect getaway for friends and teams",
    content: "Group tour packages are perfect for friends, corporate teams, and college groups. These packages include group-friendly resorts, trekking, jeep rides, and campfire experiences. Bond with your group over adventure activities during the day and enjoy campfire nights under the stars.",
    readTime: "2 min read",
    category: "Groups",
  },
  {
    id: 10,
    title: "2 Days Chikmagalur Itinerary",
    excerpt: "Make the most of your weekend trip",
    content: "A 2-day Chikmagalur itinerary covers Mullayanagiri, Baba Budangiri, Hebbe Falls, and Hirekolale Lake. It is ideal for weekend travelers. Day 1 can focus on the peaks and viewpoints, while Day 2 explores waterfalls and coffee estates before heading back.",
    readTime: "4 min read",
    category: "Itinerary",
  },
  {
    id: 11,
    title: "3 Days Chikmagalur Itinerary",
    excerpt: "A relaxed exploration of coffee country",
    content: "A 3-day itinerary allows relaxed exploration of waterfalls, coffee estates, wildlife sanctuaries, and scenic viewpoints. With an extra day, you can include a visit to Bhadra Wildlife Sanctuary, explore hidden trails, or simply relax at your coffee estate stay.",
    readTime: "4 min read",
    category: "Itinerary",
  },
  {
    id: 12,
    title: "Waterfalls in Chikmagalur",
    excerpt: "Chase the cascading beauty of the Western Ghats",
    content: "Chikmagalur is famous for waterfalls like Hebbe Falls, Jhari Falls, Kalhatti Falls, and Manikyadhara Falls, especially during monsoon season. Each waterfall offers a unique experience – from the twin cascades of Hebbe Falls to the spiritual significance of Manikyadhara Falls.",
    readTime: "3 min read",
    category: "Nature",
  },
  {
    id: 13,
    title: "Coffee Plantation Tours in Chikmagalur",
    excerpt: "Experience the journey from bean to cup",
    content: "Coffee plantation tours are a unique experience in Chikmagalur where visitors can learn about coffee cultivation and processing while enjoying peaceful estate walks. Known as the birthplace of coffee in India, Chikmagalur offers authentic plantation experiences where you can see coffee growing, learn about processing, and taste freshly brewed estate coffee.",
    readTime: "4 min read",
    category: "Experience",
  },
  {
    id: 14,
    title: "Best Resorts & Homestays in Chikmagalur",
    excerpt: "Find your perfect stay in the hills",
    content: "Chikmagalur offers a wide range of resorts and homestays from budget-friendly to luxury coffee estate resorts, suitable for all types of travelers. Whether you prefer a family-run homestay with home-cooked Malnad cuisine or a luxury resort with infinity pools overlooking the valley, you'll find the perfect accommodation for your trip.",
    readTime: "3 min read",
    category: "Accommodation",
  },
  {
    id: 15,
    title: "Why Chikmagalur is the Best Hill Station in Karnataka",
    excerpt: "Discover what makes this destination special",
    content: "Chikmagalur combines natural beauty, adventure activities, cultural heritage, and peaceful escapes all in one destination. From the highest peak in Karnataka to ancient temples, from coffee trails to wildlife safaris, Chikmagalur offers experiences that no other hill station in Karnataka can match. Its proximity to Bangalore makes it the perfect weekend getaway for city dwellers seeking nature's embrace.",
    readTime: "4 min read",
    category: "Features",
  },
];

const categories = ["All", ...new Set(blogs.map((blog) => blog.category))];

const BlogPage = () => {
  const [openId, setOpenId] = useState<number | null>(null);
  const [selectedCategory, setSelectedCategory] = useState("All");

  const toggleBlog = (id: number) => {
    setOpenId(openId === id ? null : id);
  };

  const filteredBlogs =
    selectedCategory === "All"
      ? blogs
      : blogs.filter((blog) => blog.category === selectedCategory);

  // Generate Article Schema for SEO
  const blogSchema = {
    "@context": "https://schema.org",
    "@type": "Blog",
    blogPost: blogs.map((blog) => ({
      "@type": "BlogPosting",
      headline: blog.title,
      description: blog.excerpt,
      articleBody: blog.content,
    })),
  };

  return (
    <main className="min-h-screen bg-gradient-to-b from-mist to-background">
      <PageJsonLd schema={blogSchema} breadcrumbs={[
          { name: "Home", path: "/" },
          { name: "Blog", path: "/blog" },
        ]} />

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
                      openId === blog.id ? "max-h-[500px] opacity-100" : "max-h-0 opacity-0"
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
