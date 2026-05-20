"use client";

import Link from "next/link";
import { MessageCircle, Clock, MapPin, Sun, Moon, IndianRupee, Calendar } from "lucide-react";
import Navbar from "@/components/Navbar";
import Footer from "@/components/Footer";
import FloatingWhatsApp from "@/components/FloatingWhatsApp";
import { PageJsonLd } from "@/components/page-json-ld";
import Breadcrumbs from "@/components/Breadcrumbs";

const WHATSAPP_LINK = "https://wa.link/6s636h";

const dayPlans = [
  {
    day: "Day 1",
    title: "Peaks, Coffee & Sunset",
    icon: Sun,
    stops: [
      { time: "5:30 AM", place: "Drive to Mullayanagiri", note: "Leave town in darkness — 26 km, 45 min drive", link: "/places/mullayanagiri-trek" },
      { time: "6:30 AM", place: "Mullayanagiri sunrise", note: "Karnataka's highest peak (1,930 m). 450-step climb. Visit Mullappa temple at the summit.", link: "/places/mullayanagiri-trek" },
      { time: "8:30 AM", place: "Breakfast at base", note: "Try the local kal dosa or akki rotti at the parking-side stalls" },
      { time: "9:30 AM", place: "Baba Budangiri", note: "Sacred Sufi-Hindu cave dargah. Manikyadhara Falls right next to it.", link: "/places/baba-budangiri" },
      { time: "12:30 PM", place: "Lunch in Chikmagalur town", note: "Malnad thali at Town Canteen or Hotel Mayura" },
      { time: "3:30 PM", place: "Coffee estate tour", note: "Plantation walk, bean-roasting demo, fresh filter coffee tasting", link: "/places/coffee-plantations-chikmagalur" },
      { time: "6:30 PM", place: "Hirekolale Lake sunset", note: "Best sunset spot near town — Mullayanagiri silhouette across the water", link: "/places/hirekolale-lake" },
      { time: "8:00 PM", place: "Dinner + estate homestay", note: "Stay in a coffee plantation cottage 5–10 km from town" },
    ],
  },
  {
    day: "Day 2",
    title: "Waterfalls & Hill Station",
    icon: Moon,
    stops: [
      { time: "7:30 AM", place: "Drive to Kemmanagundi", note: "55 km, 2 hr scenic ghat road. Carry breakfast — limited options en route.", link: "/places/kemmanagundi" },
      { time: "10:00 AM", place: "Hebbe Falls jeep ride", note: "Mandatory shared 4x4 jeep — ₹350/person. 168 ft two-tier cascade in the forest.", link: "/places/hebbe-falls" },
      { time: "1:30 PM", place: "Lunch at Kemmanagundi", note: "KSTDC restaurant or local tiffin centre" },
      { time: "3:00 PM", place: "Kalhatti Falls + temple", note: "Sacred 400-ft cascade beside Veerabhadra cave temple", link: "/places/kalhatti-falls" },
      { time: "5:00 PM", place: "Z Point sunset", note: "Best viewpoint in Kemmanagundi — short walk from parking", link: "/places/kemmanagundi" },
      { time: "7:30 PM", place: "Drive back / depart", note: "Return to Chikmagalur or directly to Bangalore (5 hr)" },
    ],
  },
];

const budgetBreakdown = [
  { item: "Coffee estate homestay (1 night, twin sharing)", cost: "₹1,200 – ₹2,500" },
  { item: "Meals (4 — Day 1 lunch+dinner, Day 2 breakfast+lunch)", cost: "₹600 – ₹1,000" },
  { item: "Private cab (2 days, Innova/Etios)", cost: "₹1,000 – ₹1,500 per person (group of 4)" },
  { item: "Entry fees + Hebbe Falls jeep + parking", cost: "₹500 – ₹700" },
  { item: "Coffee tasting + souvenirs", cost: "₹200 – ₹500" },
  { item: "Total per person (mid-range)", cost: "₹3,500 – ₹6,200", bold: true },
];

const packingList = [
  "Light layers (warm jacket for early-morning Mullayanagiri)",
  "Trekking shoes with grip — wet rocks at falls",
  "Rain jacket (any season — Western Ghats)",
  "Power bank — limited charging at estate stays",
  "Cash ₹3,000+ — UPI patchy at remote spots",
  "Sunscreen, cap, basic medicines",
  "Quick-dry clothes for waterfall days",
];

const faqs = [
  {
    q: "Is 2 days enough for Chikmagalur?",
    a: "Yes — a well-planned 2-day Chikmagalur itinerary covers all the major highlights: Mullayanagiri sunrise, Baba Budangiri, Hebbe Falls, Kemmanagundi Z Point, a coffee estate visit and Hirekolale Lake sunset. It's the most popular weekend duration from Bangalore.",
  },
  {
    q: "What is the best 2-day Chikmagalur itinerary from Bangalore?",
    a: "Leave Bangalore Friday 8 PM by car or sleeper bus. Reach Chikmagalur by 1:30 AM. Day 1: Mullayanagiri sunrise, Baba Budangiri, coffee estate, Hirekolale sunset. Day 2: Hebbe Falls, Kemmanagundi, Z Point. Return by Sunday 8 PM.",
  },
  {
    q: "How much does a 2-day Chikmagalur trip cost?",
    a: "A mid-range 2-day Chikmagalur trip costs ₹3,500–₹6,200 per person including stay, meals, private cab, all entries and the mandatory Hebbe Falls jeep ride. Group of 4+ brings cost down to the lower end.",
  },
  {
    q: "What is the best month for a 2-day Chikmagalur itinerary?",
    a: "October to March offers the best weather — clear sunrise views at Mullayanagiri, comfortable trekking, and full waterfalls just after monsoon. December–January are the coolest and most popular.",
  },
  {
    q: "Where should I stay during a 2-day Chikmagalur trip?",
    a: "A coffee estate homestay 5–10 km from Chikmagalur town is ideal — close enough for early-morning Mullayanagiri starts, immersive enough to feel like a true plantation getaway. Avoid staying inside Kemmanagundi unless skipping Mullayanagiri.",
  },
  {
    q: "Can I cover Mullayanagiri and Hebbe Falls on the same day?",
    a: "Technically yes, but it's exhausting — 5+ hours of driving plus the jeep ride. Splitting across 2 days (Mullayanagiri Day 1, Hebbe Falls Day 2) is far more enjoyable and is what this itinerary recommends.",
  },
  {
    q: "Do I need a guide for this 2-day Chikmagalur itinerary?",
    a: "For a self-drive trip, no — the routes are clearly marked and the trails are easy. For first-timers, families, or anyone wanting hassle-free logistics, a local operator handles cab, driver, jeep bookings and meals.",
  },
  {
    q: "Is this 2-day Chikmagalur itinerary suitable for kids and seniors?",
    a: "Yes, with one tweak: replace the Mullayanagiri sunrise with a relaxed 9 AM visit. The Hebbe Falls jeep ride is a hit with children, and Hirekolale Lake + coffee estate are gentle on seniors.",
  },
];

const TwoDayItineraryPage = () => {
  const tripSchema = {
    "@context": "https://schema.org",
    "@type": "TouristTrip",
    name: "2 Day Chikmagalur Itinerary — Weekend Plan",
    description: "Detailed 2-day Chikmagalur itinerary covering Mullayanagiri, Baba Budangiri, Hebbe Falls, Kemmanagundi, coffee estate and Hirekolale Lake.",
    touristType: ["Weekend travellers", "Couples", "Families"],
    itinerary: dayPlans.map((d, i) => ({
      "@type": "ItemList",
      name: `${d.day} — ${d.title}`,
      position: i + 1,
      itemListElement: d.stops.map((s, j) => ({
        "@type": "ListItem",
        position: j + 1,
        name: s.place,
        description: s.note,
      })),
    })),
    offers: {
      "@type": "Offer",
      price: 3499,
      priceCurrency: "INR",
      url: "https://tripchikmagalur.com/package/day-2",
      availability: "https://schema.org/InStock",
    },
  };

  const faqSchema = {
    "@context": "https://schema.org",
    "@type": "FAQPage",
    mainEntity: faqs.map((f) => ({
      "@type": "Question",
      name: f.q,
      acceptedAnswer: { "@type": "Answer", text: f.a },
    })),
  };

  return (
    <main className="overflow-x-hidden bg-background">
      <PageJsonLd schema={[tripSchema, faqSchema]} breadcrumbs={[
          { name: "Home", path: "/" },
          { name: "2 Day Chikmagalur Itinerary", path: "/2-day-chikmagalur-itinerary" },
        ]} />

      <Navbar />

      <section className="pt-32 pb-10 bg-gradient-to-b from-mist to-background">
        <div className="container mx-auto px-4 max-w-5xl">
          <Breadcrumbs
            items={[
              { name: "Home", path: "/" },
              { name: "2 Day Chikmagalur Itinerary", path: "/2-day-chikmagalur-itinerary" },
            ]}
            className="mb-6"
          />
          <span className="text-sunset text-xs font-bold uppercase tracking-[0.2em]">
            <Calendar className="w-3 h-3 inline mr-1" /> Updated April 2026 · Tested itinerary
          </span>
          <h1 className="text-4xl md:text-5xl lg:text-6xl font-display font-bold text-foreground mt-3 leading-tight">
            The Perfect 2 Day Chikmagalur Itinerary
          </h1>
          <p className="mt-5 text-lg text-muted-foreground leading-relaxed">
            A 2 day Chikmagalur itinerary is the sweet spot for most travellers — long enough to do
            the highlights without rushing, short enough for a Friday-night-to-Sunday-night weekend escape
            from Bangalore, Mysore or Mangalore. This plan covers Mullayanagiri sunrise, Baba Budangiri,
            Hebbe Falls, Kemmanagundi, a coffee estate walk and Hirekolale Lake sunset, with realistic
            timings, costs, and a packing list — built from running this exact route 200+ times for our
            travellers.
          </p>

          <div className="mt-8 grid grid-cols-2 md:grid-cols-4 gap-3">
            <div className="bg-card border border-border rounded-xl p-4">
              <Clock className="w-4 h-4 text-accent mb-1" />
              <p className="text-xs text-muted-foreground">Duration</p>
              <p className="font-bold text-foreground">2 Days / 1 Night</p>
            </div>
            <div className="bg-card border border-border rounded-xl p-4">
              <IndianRupee className="w-4 h-4 text-accent mb-1" />
              <p className="text-xs text-muted-foreground">Cost</p>
              <p className="font-bold text-foreground">₹3,500 – ₹6,200 pp</p>
            </div>
            <div className="bg-card border border-border rounded-xl p-4">
              <MapPin className="w-4 h-4 text-accent mb-1" />
              <p className="text-xs text-muted-foreground">Places covered</p>
              <p className="font-bold text-foreground">8 destinations</p>
            </div>
            <div className="bg-card border border-border rounded-xl p-4">
              <Calendar className="w-4 h-4 text-accent mb-1" />
              <p className="text-xs text-muted-foreground">Best months</p>
              <p className="font-bold text-foreground">Oct – Mar</p>
            </div>
          </div>
        </div>
      </section>

      {/* Day-by-day */}
      <section className="py-16">
        <div className="container mx-auto px-4 max-w-4xl">
          {dayPlans.map((d) => {
            const Icon = d.icon;
            return (
              <div key={d.day} className="mb-14">
                <div className="flex items-center gap-3 mb-2">
                  <div className="w-10 h-10 rounded-full bg-sunset/10 flex items-center justify-center">
                    <Icon className="w-5 h-5 text-sunset" />
                  </div>
                  <span className="text-sunset font-bold text-sm uppercase tracking-widest">{d.day}</span>
                </div>
                <h2 className="text-3xl md:text-4xl font-display font-bold text-foreground mb-6">
                  {d.title}
                </h2>
                <div className="space-y-3 border-l-2 border-border pl-6 ml-5">
                  {d.stops.map((s) => (
                    <div key={s.time + s.place} className="relative">
                      <div className="absolute -left-[31px] top-2 w-3 h-3 rounded-full bg-accent border-4 border-background" />
                      <div className="bg-card border border-border rounded-xl p-4">
                        <div className="flex items-baseline gap-3 mb-1">
                          <span className="text-xs font-bold text-accent">{s.time}</span>
                          <h3 className="font-semibold text-foreground">
                            {s.link ? (
                              <Link href={s.link} className="hover:text-accent underline-offset-4 hover:underline">
                                {s.place}
                              </Link>
                            ) : (
                              s.place
                            )}
                          </h3>
                        </div>
                        <p className="text-sm text-muted-foreground leading-relaxed">{s.note}</p>
                      </div>
                    </div>
                  ))}
                </div>
              </div>
            );
          })}
        </div>
      </section>

      {/* Budget */}
      <section className="py-16 bg-muted/30">
        <div className="container mx-auto px-4 max-w-3xl">
          <h2 className="text-3xl font-display font-bold text-foreground mb-3">
            2 Day Chikmagalur Trip Cost Breakdown
          </h2>
          <p className="text-muted-foreground mb-6">
            Per-person cost for a mid-range 2-day Chikmagalur trip (group of 4, twin-sharing).
          </p>
          <div className="bg-card border border-border rounded-2xl overflow-hidden">
            <table className="w-full">
              <tbody>
                {budgetBreakdown.map((b) => (
                  <tr key={b.item} className={`border-b border-border last:border-0 ${b.bold ? "bg-muted/50 font-bold" : ""}`}>
                    <td className="px-5 py-4 text-sm text-foreground">{b.item}</td>
                    <td className="px-5 py-4 text-sm text-foreground text-right whitespace-nowrap">{b.cost}</td>
                  </tr>
                ))}
              </tbody>
            </table>
          </div>
        </div>
      </section>

      {/* Packing */}
      <section className="py-16">
        <div className="container mx-auto px-4 max-w-3xl">
          <h2 className="text-3xl font-display font-bold text-foreground mb-6">
            What to Pack for a 2 Day Chikmagalur Trip
          </h2>
          <ul className="grid sm:grid-cols-2 gap-3">
            {packingList.map((p) => (
              <li key={p} className="flex items-start gap-2 bg-card border border-border rounded-xl p-4 text-sm text-foreground">
                <span className="text-green-600 font-bold">✓</span> {p}
              </li>
            ))}
          </ul>
        </div>
      </section>

      {/* CTA */}
      <section className="py-16 bg-foreground text-background">
        <div className="container mx-auto px-4 max-w-3xl text-center">
          <h2 className="text-3xl md:text-4xl font-display font-bold mb-3">
            Want this 2-day plan handled end-to-end?
          </h2>
          <p className="opacity-80 mb-6">
            Our Weekend Escape package covers this exact itinerary with private cab, estate stay, all
            meals and a local guide — from ₹3,499 per person.
          </p>
          <div className="flex flex-col sm:flex-row items-center justify-center gap-3">
            <Link
              href="/package/day-2"
              className="bg-background text-foreground px-6 py-3 rounded-full font-medium hover:opacity-90 transition"
            >
              View Weekend Escape Package →
            </Link>
            <a
              href={WHATSAPP_LINK}
              target="_blank"
              rel="noopener noreferrer"
              className="inline-flex items-center gap-2 bg-sunset text-white px-6 py-3 rounded-full font-medium hover:bg-sunset/90 transition"
            >
              <MessageCircle className="w-4 h-4" /> Book on WhatsApp
            </a>
          </div>
        </div>
      </section>

      {/* Related itineraries */}
      <section className="py-16">
        <div className="container mx-auto px-4 max-w-5xl">
          <h2 className="text-2xl font-display font-bold text-foreground mb-6">
            Other Chikmagalur Itineraries
          </h2>
          <div className="grid sm:grid-cols-3 gap-4">
            {[
              { to: "/chikmagalur-itinerary", title: "1, 2 & 3 Day Plans", desc: "Compare all itinerary lengths" },
              { to: "/chikmagalur-itinerary-from-bangalore", title: "From Bangalore", desc: "Road trip with route + fuel stops" },
              { to: "/places-to-visit-in-chikmagalur", title: "Top 10 Places", desc: "Pick your own destinations" },
            ].map((l) => (
              <Link
                key={l.to}
                href={l.to}
                className="block bg-card border border-border rounded-xl p-5 hover:border-accent hover:shadow-md transition"
              >
                <p className="font-bold text-foreground">{l.title} →</p>
                <p className="text-xs text-muted-foreground mt-1">{l.desc}</p>
              </Link>
            ))}
          </div>
        </div>
      </section>

      {/* FAQ */}
      <section className="py-16 bg-muted/30">
        <div className="container mx-auto px-4 max-w-3xl">
          <h2 className="text-3xl font-display font-bold text-foreground mb-8">
            2 Day Chikmagalur Itinerary — FAQs
          </h2>
          <div className="space-y-4">
            {faqs.map((f) => (
              <details key={f.q} className="bg-card border border-border rounded-xl p-5 group">
                <summary className="font-semibold text-foreground cursor-pointer list-none flex items-center justify-between">
                  {f.q}
                  <span className="text-accent text-xl group-open:rotate-45 transition">+</span>
                </summary>
                <p className="mt-3 text-muted-foreground leading-relaxed text-sm">{f.a}</p>
              </details>
            ))}
          </div>
        </div>
      </section>

      <Footer />
      <FloatingWhatsApp />
    </main>
  );
};

export default TwoDayItineraryPage;
