import Link from "next/link";
import { imageSrc } from "@/lib/image-src";
import categoryFood from "@/assets/category-food.jpg";
import categoryStays from "@/assets/category-stays.jpg";
import categoryAdventure from "@/assets/category-adventure.jpg";

const offers = [
  {
    image: imageSrc(categoryFood),
    title: "Food",
    description: "Savor authentic Malnad delicacies and fresh coffee from local estates.",
    href: "/food",
  },
  {
    image: imageSrc(categoryAdventure),
    title: "Adventure",
    description: "From trekking to ziplining, experience thrilling activities in the Western Ghats.",
    href: "/adventure",
  },
  {
    image: imageSrc(categoryStays),
    title: "Stays",
    description: "Stay at our palm grove resort with pool, rooms & family amenities.",
    href: "/stays",
  },
];

const OffersSection = () => {
  return (
    <section className="py-24 bg-background relative overflow-hidden">
      <div className="container mx-auto px-4 relative z-10">
        {/* Section Header */}
        <div className="text-center mb-16">
          <span className="text-sunset font-medium text-sm uppercase tracking-[0.2em] animate-fade-up">
            What We Provide
          </span>
          <h2 className="text-4xl md:text-5xl lg:text-6xl font-display font-bold text-foreground mt-4 animate-fade-up stagger-1">
            We Offer the Best
          </h2>
        </div>

        {/* Round Elevated Image Cards */}
        <div className="flex justify-center gap-4 sm:gap-8 md:gap-16 max-w-5xl mx-auto">
          {offers.map((offer, index) => (
            <Link
              href={offer.href}
              key={offer.title}
              className="group relative animate-fade-up flex flex-col items-center"
              style={{ animationDelay: `${(index + 2) * 0.1}s` }}
            >
              {/* Round Image Card */}
              <div className="relative w-24 h-24 sm:w-40 sm:h-40 md:w-52 md:h-52 rounded-full overflow-hidden shadow-2xl hover:shadow-3xl transition-all duration-500 cursor-pointer group-hover:scale-105 group-hover:-translate-y-2">
                {/* Image */}
                <img
                  src={offer.image}
                  alt={offer.title}
                  className="w-full h-full object-cover transition-transform duration-700 group-hover:scale-110"
                />
                
                {/* Subtle overlay on hover */}
                <div className="absolute inset-0 bg-gradient-to-t from-black/30 via-transparent to-transparent opacity-0 group-hover:opacity-100 transition-opacity duration-300" />
              </div>
              
              {/* Title below card */}
              <h3 className="text-sm sm:text-xl md:text-2xl font-display font-bold text-foreground mt-3 sm:mt-6 text-center transition-colors duration-300 group-hover:text-sunset">
                {offer.title}
              </h3>
              
              {/* Description tooltip on hover */}
              <div className="absolute -bottom-4 left-1/2 -translate-x-1/2 w-64 opacity-0 group-hover:opacity-100 group-hover:-bottom-2 transition-all duration-300 pointer-events-none" style={{ top: 'calc(100% + 1rem)' }}>
                <p className="glass-dark text-white/90 text-sm text-center py-3 px-4 rounded-2xl shadow-lg">
                  {offer.description}
                </p>
              </div>
            </Link>
          ))}
        </div>
      </div>
    </section>
  );
};

export default OffersSection;
