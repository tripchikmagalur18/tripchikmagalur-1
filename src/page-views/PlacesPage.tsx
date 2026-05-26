"use client";
import { imageSrc } from "@/lib/image-src";

import Link from "next/link";
import { useState, useEffect, useRef } from "react";
import { MapPin, Clock, Navigation, ArrowLeft, Car, Sparkles, Lightbulb, Route, ExternalLink } from "lucide-react";
import Navbar from "@/components/Navbar";
import Footer from "@/components/Footer";
import AnimatedCar from "@/components/AnimatedCar";
import { PageJsonLd } from "@/components/page-json-ld";
import Breadcrumbs from "@/components/Breadcrumbs";
import { Dialog, DialogContent, DialogHeader, DialogTitle, DialogDescription } from "@/components/ui/dialog";

import placesMap from "@/assets/places-map.png";
import siriNature from "@/assets/place-siri-nature.jpg";
import jhariFalls from "@/assets/place-jhari-falls.jpg";
import mullayangiri from "@/assets/place-mullayangiri.jpg";
import seethalayngiri from "@/assets/place-seethalayngiri.jpg";
import honnammaFalls from "@/assets/place-honnamma-falls.jpg";
import bababudangiri from "@/assets/place-bababudangiri.jpg";
import manikyadhara from "@/assets/place-manikyadhara.jpg";
import zpoint from "@/assets/place-zpoint.jpg";
import ziplining from "@/assets/place-ziplining.jpg";
import deviramma from "@/assets/place-deviramma.jpg";
import kalhattiFalls from "@/assets/place-kalhatti-falls.jpg";
import kemmanagundi from "@/assets/place-kemmanagundi.jpg";
import rajbhavan from "@/assets/place-rajbhavan.jpg";
import hebbeFalls from "@/assets/place-hebbe-falls.jpg";
import hirekolale from "@/assets/place-hirekolale.jpg";
import estateCafe from "@/assets/place-estate-cafe.jpg";
import mallandur from "@/assets/place-mallandur.jpg";
import muthodi from "@/assets/place-muthodi.jpg";
import ukkuda from "@/assets/place-ukkuda.jpg";
import bandekal from "@/assets/place-bandekal.jpg";
import yagachi from "@/assets/place-yagachi.jpg";
import belurDam from "@/assets/place-belur-dam.jpg";
import chennakeshava from "@/assets/place-chennakeshava.jpg";
import hoysaleshwara from "@/assets/place-hoysaleshwara.jpg";
import hiremangalore from "@/assets/place-hiremangalore.jpg";
import siddharthaPark from "@/assets/place-siddhartha-park.jpg";
import devaramane from "@/assets/place-devaramane.jpg";
import bettada from "@/assets/place-bettada.jpg";
import abbiFalls from "@/assets/place-abbi-falls.jpg";
import ethinaBhuja from "@/assets/place-ethina-bhuja.jpg";

interface Place {
  name: string;
  image: string;
  distance: string;
  time: string;
  description: string;
  speciality?: string;
  howToReach?: string;
  tips?: string;
  mapUrl?: string;
}

interface DayData {
  day: number;
  label: string;
  places: Place[];
}

const daysData: DayData[] = [
  {
    day: 1,
    label: "Peaks & Waterfalls",
    places: [
      { name: "Siri Nature Roost", image: imageSrc(siriNature), distance: "3.2 km", time: "11 min", description: "The best coffee point in Chikmagalur with the iconic Siri statue.", speciality: "Iconic Siri statue viewpoint with panoramic estate views and the town's most popular coffee deck.", howToReach: "Take MG Road towards KM Road; well-paved tar road, drivable for all vehicles including sedans.", tips: "Best visited early morning (6-8 AM) for mist and golden light. Carry a light jacket — winds get strong." },
      { name: "Jhari Falls (Butter Falls)", image: imageSrc(jhariFalls), distance: "23.8 km", time: "48 min", description: "Hidden inside a coffee estate, reached via a 4.5 km jeep adventure ride.", speciality: "Milky-white waterfall hidden deep inside Attigundi coffee estate — feels like a secret discovery.", howToReach: "Drive to Attigundi village, then mandatory shared jeep ride (₹150-200/person) through the estate. Private cars not allowed on the last stretch.", tips: "Wear grippy shoes — rocks are slippery. Avoid weekends for less crowd. Don't swim directly under the fall." },
      { name: "Mullayangiri", image: imageSrc(mullayangiri), distance: "33.4 km", time: "70 min", description: "Tallest peak in Karnataka at 6,400 ft with a temple at the summit.", speciality: "Highest peak in Karnataka with a Shiva temple at the summit and 360° Western Ghats view.", howToReach: "Smooth ghat road from Chikmagalur via Sarpadhari. Last 200 steps to summit must be climbed on foot.", tips: "Visit before 11 AM to beat clouds. Pack water & snacks — no shops on top. Drone flying is restricted." },
      { name: "Seethalayngiri Gudi", image: imageSrc(seethalayngiri), distance: "19.4 km", time: "40 min", description: "A cave temple with Lord Rama & Goddess Sita, surrounded by mountain views.", speciality: "Ancient cave temple believed to be where Lord Rama & Sita rested during exile.", howToReach: "Off the Mullayangiri route — diversion road, narrow but motorable. SUVs preferred in monsoon.", tips: "Combine this with the Mullayangiri trip. Footwear must be removed at the cave entrance." },
      { name: "Honnamma Falls", image: imageSrc(honnammaFalls), distance: "22.6 km", time: "44 min", description: "A lovely waterfall en route to Baba Budangiri hills, a must-stop point.", speciality: "Roadside waterfall flowing in full glory during monsoon — perfect for a quick splash & photos.", howToReach: "On the main Baba Budangiri road, easy roadside parking available.", tips: "Best between July-October. Don't venture beyond barricades — currents are strong post-rain." },
      { name: "Baba Budangiri", image: imageSrc(bababudangiri), distance: "30.8 km", time: "1 hr 8 min", description: "Where India's first coffee plantation began. Also known as Dattapeeta.", speciality: "Birthplace of Indian coffee and a sacred shrine for both Hindus & Muslims (Dattatreya/Baba Budan).", howToReach: "Drive via Attigundi-Kemmangundi road; well-paved ghat with multiple viewpoints en route.", tips: "Foggy after 12 PM — go early. Carry warm clothing year-round. Keep windows up if monkeys are around." },
      { name: "Manikyadhara Falls", image: imageSrc(manikyadhara), distance: "34.6 km", time: "1 hr 30 min", description: "Stream of pearls — water droplets sparkle like pearls in sunlight.", speciality: "Sacred waterfall where droplets sparkle like pearls — believed to have spiritual healing powers.", howToReach: "1.5 km descent on foot from Baba Budangiri parking. Steps are well-built but steep.", tips: "Wear quick-dry clothes — you will get drenched. Lockers available for valuables near the entrance." },
      { name: "Z Point (Sunset Point)", image: imageSrc(zpoint), distance: "37.9 km", time: "1 hr 27 min", description: "One of the most beautiful sunset viewpoints near Baba Budangiri.", speciality: "Z-shaped cliff edge offering one of the most dramatic sunset views in the Western Ghats.", howToReach: "Short 2 km trek from Baba Budangiri parking — moderately easy with a few rocky patches.", tips: "Reach by 5 PM for sunset. Carry torch for return walk. Stay back from the cliff edge — no railings." },
      { name: "Zip Lining", image: imageSrc(ziplining), distance: "27.9 km", time: "54 min", description: "One of the most thrilling adventures in Chikmagalur at Mubarak Homestay.", speciality: "High-speed zipline crossing a valley — one of the longest in South India at Mubarak Homestay.", howToReach: "Drive towards Attigundi; signboards lead to Mubarak Homestay activity zone.", tips: "Pre-book in peak season. Wear closed-toe shoes. Not recommended for those with back issues." },
    ],
  },
  {
    day: 2,
    label: "Temples & Hill Stations",
    places: [
      { name: "Deviramma Temple", image: imageSrc(deviramma), distance: "20 km", time: "30 min", description: "Hill-top temple open during Deepavali, linked to Mysore Palace celebrations.", speciality: "Sacred hilltop temple open only during Deepavali — directly linked to Mysore royal traditions.", howToReach: "Drive to base village, then 30-min uphill trek through forested path.", tips: "Mostly closed outside Deepavali — check dates locally. Carry water & wear trekking shoes." },
      { name: "Kalhatti Falls", image: imageSrc(kalhattiFalls), distance: "58 km", time: "1 hr 28 min", description: "Waterfall on the river headwaters, 10 km from Kemmangundi hill station.", speciality: "Sacred waterfall flowing past Veerabhadra temple carved into the rock face.", howToReach: "Off the Kemmangundi road via Tarikere; steep last stretch but well-paved.", tips: "Combine with Kemmangundi trip. Slippery steps near temple — hold the railings." },
      { name: "Kemmanagundi", image: imageSrc(kemmanagundi), distance: "62.2 km", time: "1 hr 34 min", description: "Known for vibrant night sky vistas from the sunset viewpoint.", speciality: "Mysore Maharaja's summer retreat with rose gardens, Z-point sunset & Shanti Falls.", howToReach: "Via Tarikere-Lingadahalli ghat road. Smooth drive of about 1.5 hrs from Chikmagalur.", tips: "Stay overnight at Horticulture cottages for stargazing. Layered clothing — temperatures drop sharply." },
      { name: "Raj Bhavan (Rose Garden)", image: imageSrc(rajbhavan), distance: "34 km", time: "54 min", description: "A beautiful garden with flowers, perfect for spending time with loved ones.", speciality: "Manicured Raj Bhavan rose garden with hundreds of flower varieties and sweeping valley views.", howToReach: "Inside Kemmangundi hill station; short drive from the Kemmangundi market.", tips: "Entry ticket required (~₹20). Carry a camera — the colors pop in afternoon light." },
      { name: "Hebbe Falls", image: imageSrc(hebbeFalls), distance: "65 km", time: "1 hr 45 min", description: "Gushes down from 551 ft in two stages inside a coffee estate.", speciality: "Two-tier 551 ft waterfall hidden inside a coffee estate — both Dodda Hebbe & Chikka Hebbe.", howToReach: "Drive to Kemmangundi, then mandatory 8 km shared jeep ride through coffee estates (₹250-300/person).", tips: "Allow 4-5 hours total. Carry change of clothes. Avoid in heavy monsoon — jeep route gets blocked." },
    ],
  },
  {
    day: 3,
    label: "Lakes & Forests",
    places: [
      { name: "Hirekolale Lake", image: imageSrc(hirekolale), distance: "10 km", time: "25 min", description: "Scenic lake enclosed with gorgeous surroundings and serene retreat.", speciality: "Crescent-shaped lake reflecting the Mullayangiri range — ideal for sunrise & sunset.", howToReach: "Short scenic drive from Chikmagalur city via Hirekolale Road. Smooth tar road throughout.", tips: "Sunrise visits are magical. No food stalls — pack snacks. Boating is not officially allowed." },
      { name: "Estate Cafe", image: imageSrc(estateCafe), distance: "23.7 km", time: "54 min", description: "Perfect place for a date, family dinner or hangout in Mallandur.", speciality: "Open-air cafe nestled inside a coffee estate — famous for filter coffee, wood-fired pizzas & sunsets.", howToReach: "Located on Mallandur Road; clear signboards from Chikmagalur. Easy drive.", tips: "Reservation recommended on weekends. Try their estate-grown coffee. Closes by 9 PM." },
      { name: "Mallandur Shooting Point", image: imageSrc(mallandur), distance: "30.8 km", time: "1 hr 8 min", description: "A hillock top view through coffee estates and forest stretch.", speciality: "Bollywood-famous viewpoint where multiple film shoots happened — endless coffee estate views.", howToReach: "From Mallandur village, narrow estate road for the final 2 km. SUV preferred.", tips: "Visit on a clear day. No facilities at the point — carry water. Best at golden hour." },
      { name: "Muthodi Forest Safari", image: imageSrc(muthodi), distance: "34.6 km", time: "1 hr 30 min", description: "River safari through forests with the largest teak tree and British guest house.", speciality: "Bhadra Tiger Reserve safari — chance to spot tigers, leopards, gaurs, elephants & rare birds.", howToReach: "Drive to Muthodi gate via NH-173; book safari at the forest office on arrival or online.", tips: "Book the 6:30 AM slot for best wildlife sightings. Carry binoculars. No plastic allowed inside." },
      { name: "Ukkuda Falls", image: imageSrc(ukkuda), distance: "19.4 km", time: "40 min", description: "Verdant green biodiverse location with many species of animals and birds.", speciality: "Off-beat waterfall surrounded by dense biodiversity — a paradise for birdwatchers.", howToReach: "Drive to Ukkuda village, then 20-min easy walk through forest trail.", tips: "Hire a local guide (₹200-300) — trail isn't well marked. Leeches in monsoon — wear socks." },
      { name: "Bande Kal Gudda", image: imageSrc(bandekal), distance: "22.6 km", time: "44 min", description: "Stunning hill at 3,500 ft, one of the best monsoon destinations in India.", speciality: "Massive monolithic rock hill with 360° view — featured in 'Best Monsoon Destinations of India'.", howToReach: "Drive to base; 1-hour moderate trek to the summit through grasslands.", tips: "Don't attempt in heavy rain — rocks get extremely slippery. Start trek before 8 AM." },
    ],
  },
  {
    day: 4,
    label: "Heritage & Water Sports",
    places: [
      { name: "Yagachi Water Sports", image: imageSrc(yagachi), distance: "19.4 km", time: "40 min", description: "Adventure water sports center located next to Yagachi Dam.", speciality: "Karnataka's premier water sports hub — kayaking, jet ski, banana boat, speed boat & more.", howToReach: "Located near Hassan on the Belur road; well-signposted from NH-373.", tips: "Combo packages save money. Wear quick-dry clothes. Operates 9 AM-6 PM, closed on Mondays." },
      { name: "Belur Dam", image: imageSrc(belurDam), distance: "22.6 km", time: "44 min", description: "Dam at 965m altitude for drinking water and irrigation, completed in 2001.", speciality: "Calm reservoir with backwater views — peaceful spot for picnics and photography.", howToReach: "Short drive from Belur town; smooth approach road and parking available.", tips: "Pair this with Chennakeshava Temple visit. Sunset views are stunning. No swimming allowed." },
      { name: "Chennakeshava Temple", image: imageSrc(chennakeshava), distance: "30.8 km", time: "1 hr 8 min", description: "12th-century Hindu temple commissioned by King Vishnuvardhana in 1117 CE.", speciality: "UNESCO-listed Hoysala masterpiece with intricate soapstone carvings — over 900 years old.", howToReach: "Located in Belur town center; large parking & easy access.", tips: "Hire an ASI-approved guide (₹300-500) — the carvings have stories you'll miss otherwise. Cover shoulders & knees." },
      { name: "Hoysaleshwara Temple", image: imageSrc(hoysaleshwara), distance: "34.6 km", time: "1 hr 30 min", description: "Historic temple in Halebidu dedicated to Lord Shiva, built around 1120 CE.", speciality: "Twin Shiva temples in Halebidu — every inch covered in mythological sculptures.", howToReach: "16 km from Belur on the Halebidu road; easy and direct drive.", tips: "Combine with Belur in one day. Carry sun hat — open courtyards. Photography allowed without flash." },
      { name: "Hiremangalore Temple", image: imageSrc(hiremangalore), distance: "9 km", time: "20 min", description: "State-protected Hoysala and Dravidian style temple built in three stages.", speciality: "Lesser-known protected monument blending Hoysala and Dravidian architecture in one structure.", howToReach: "Quick drive from Chikmagalur via Hiremangalore village road.", tips: "Mornings are best — quiet & cool. Rarely crowded, perfect for offbeat heritage lovers." },
    ],
  },
  {
    day: 5,
    label: "Treks & View Points",
    places: [
      { name: "Siddhartha Hegde Park", image: imageSrc(siddharthaPark), distance: "19.4 km", time: "40 min", description: "Built in memory of Cafe Coffee Day founder, beloved by Chikmagalur people.", speciality: "Memorial park dedicated to V.G. Siddhartha (CCD founder) — locally beloved peaceful retreat.", howToReach: "Inside Chikmagalur town limits — short auto/cab ride from city center.", tips: "Free entry. Great for an evening stroll. Pair with a CCD outlet visit nearby." },
      { name: "Devaramane Betta", image: imageSrc(devaramane), distance: "59 km", time: "1 hr 28 min", description: "Stunning hill at 3,500 ft, one of the best monsoon viewpoints in India.", speciality: "Sacred hill with Kalabhairaveshwara temple and panoramic monsoon views.", howToReach: "Drive via Mudigere; last 5 km is steep — 4WD/SUV recommended in monsoon.", tips: "Start early — clouds roll in by noon. Camping allowed with prior permission." },
      { name: "Bettada Bhaireshwara Temple", image: imageSrc(bettada), distance: "62.2 km", time: "1 hr 34 min", description: "600-year-old Shiva temple, believed to be where Pandavas spent exile.", speciality: "600-year-old Shiva temple atop Devaramane hill — believed to be a Pandava exile site.", howToReach: "Atop Devaramane Betta; combine the trip with the hill visit.", tips: "Reach by 11 AM for ritual timings. Footwear left at base. Echoing temple acoustics are unique." },
      { name: "Abbi Waterfalls", image: imageSrc(abbiFalls), distance: "152 km", time: "3 hr 51 min", description: "Wide waterfall area creating spectacular views near Chikmagalur city.", speciality: "Wide cascading waterfall in Coorg region — best paired with a coffee plantation walk.", howToReach: "Long drive via Madikeri; full-day trip recommended. Last 200m is on foot via a hanging bridge.", tips: "Plan as a full day or overnight in Coorg. Crowded on weekends — visit on weekdays." },
      { name: "Ethina Bhuja", image: imageSrc(ethinaBhuja), distance: "51 km", time: "1 hr 16 min", description: "Peak shaped like an ox hump, best for trekking in summer and monsoon.", speciality: "Ox-hump shaped peak — one of the most scenic moderate treks in the Western Ghats.", howToReach: "Drive to Byrapura village base camp; trek is 6 km one way (3-4 hrs round trip).", tips: "Hire a local guide (mandatory in some seasons). Carry 2L water. Avoid solo treks." },
    ],
  },
];

const PlaceCard = ({ place, index, onOpen }: { place: Place; index: number; onOpen: (p: Place) => void }) => {
  const cardRef = useRef<HTMLButtonElement>(null);
  const [isVisible, setIsVisible] = useState(false);

  useEffect(() => {
    const observer = new IntersectionObserver(
      ([entry]) => { if (entry.isIntersecting) setIsVisible(true); },
      { threshold: 0.15 }
    );
    if (cardRef.current) observer.observe(cardRef.current);
    return () => observer.disconnect();
  }, []);

  return (
    <button
      ref={cardRef}
      onClick={() => onOpen(place)}
      className="group relative overflow-hidden rounded-2xl bg-card border border-border/50 transition-all duration-500 hover:shadow-xl hover:-translate-y-1 text-left w-full focus:outline-none focus:ring-2 focus:ring-primary/50"
      style={{
        opacity: isVisible ? 1 : 0,
        transform: isVisible ? "translateY(0)" : "translateY(30px)",
        transitionDelay: `${(index % 3) * 100}ms`,
      }}
      aria-label={`View details about ${place.name}`}
    >
      <div className="relative h-48 overflow-hidden">
        <img
          src={place.image}
          alt={place.name}
          className="w-full h-full object-cover transition-transform duration-700 group-hover:scale-110"
          loading="lazy"
        />
        <div className="absolute inset-0 bg-gradient-to-t from-black/60 via-transparent to-transparent" />
        <h3 className="absolute bottom-3 left-4 right-4 text-white font-display font-bold text-lg leading-tight drop-shadow-lg">
          {place.name}
        </h3>
        <span className="absolute top-3 right-3 text-[10px] uppercase tracking-wider px-2 py-1 rounded-full bg-white/20 backdrop-blur-md text-white font-semibold opacity-0 group-hover:opacity-100 transition-opacity">
          View Details
        </span>
      </div>
      <div className="p-4 space-y-3">
        <p className="text-muted-foreground text-sm leading-relaxed line-clamp-2">
          {place.description}
        </p>
        <div className="flex items-center gap-4 text-xs">
          <span className="inline-flex items-center gap-1 px-2.5 py-1 rounded-full bg-primary/10 text-primary font-medium">
            <Navigation className="w-3 h-3" />
            {place.distance}
          </span>
          <span className="inline-flex items-center gap-1 px-2.5 py-1 rounded-full bg-sunset/10 text-sunset font-medium">
            <Clock className="w-3 h-3" />
            {place.time}
          </span>
        </div>
      </div>
    </button>
  );
};

const PlaceDetailDialog = ({ place, onClose }: { place: Place | null; onClose: () => void }) => {
  if (!place) return null;
  const mapsUrl = place.mapUrl ?? `https://www.google.com/maps/dir/?api=1&origin=Chikmagalur&destination=${encodeURIComponent(place.name + ", Chikmagalur, Karnataka")}`;

  return (
    <Dialog open={!!place} onOpenChange={(open) => { if (!open) onClose(); }}>
      <DialogContent className="max-w-2xl p-0 overflow-hidden max-h-[90vh] overflow-y-auto">
        <div className="relative h-56 sm:h-64 w-full overflow-hidden">
          <img src={place.image} alt={place.name} className="w-full h-full object-cover" />
          <div className="absolute inset-0 bg-gradient-to-t from-background via-background/40 to-transparent" />
          <div className="absolute bottom-4 left-5 right-5">
            <DialogHeader className="text-left space-y-1">
              <DialogTitle className="font-display text-2xl sm:text-3xl text-white drop-shadow-lg">
                {place.name}
              </DialogTitle>
              <DialogDescription className="text-white/85 text-sm">
                {place.description}
              </DialogDescription>
            </DialogHeader>
          </div>
        </div>

        <div className="p-6 space-y-5">
          <div className="grid grid-cols-2 gap-3">
            <div className="flex items-center gap-2 px-3 py-2.5 rounded-xl bg-primary/10 text-primary">
              <Navigation className="w-4 h-4 shrink-0" />
              <div className="min-w-0">
                <div className="text-[10px] uppercase tracking-wider opacity-70">Distance</div>
                <div className="font-semibold text-sm">{place.distance}</div>
              </div>
            </div>
            <div className="flex items-center gap-2 px-3 py-2.5 rounded-xl bg-sunset/10 text-sunset">
              <Clock className="w-4 h-4 shrink-0" />
              <div className="min-w-0">
                <div className="text-[10px] uppercase tracking-wider opacity-70">Duration</div>
                <div className="font-semibold text-sm">{place.time}</div>
              </div>
            </div>
          </div>

          {place.speciality && (
            <div className="space-y-1.5">
              <div className="flex items-center gap-2 text-foreground font-semibold">
                <Sparkles className="w-4 h-4 text-primary" />
                Speciality
              </div>
              <p className="text-muted-foreground text-sm leading-relaxed pl-6">{place.speciality}</p>
            </div>
          )}

          {place.howToReach && (
            <div className="space-y-1.5">
              <div className="flex items-center gap-2 text-foreground font-semibold">
                <Route className="w-4 h-4 text-primary" />
                How to Reach (from Chikmagalur)
              </div>
              <p className="text-muted-foreground text-sm leading-relaxed pl-6">{place.howToReach}</p>
            </div>
          )}

          {place.tips && (
            <div className="space-y-1.5">
              <div className="flex items-center gap-2 text-foreground font-semibold">
                <Lightbulb className="w-4 h-4 text-sunset" />
                Special Tips
              </div>
              <p className="text-muted-foreground text-sm leading-relaxed pl-6">{place.tips}</p>
            </div>
          )}

          <a
            href={mapsUrl}
            target="_blank"
            rel="noopener noreferrer"
            className="inline-flex items-center justify-center gap-2 w-full px-5 py-3 rounded-xl glass-button text-white font-medium shadow-lg hover:scale-[1.02] transition-transform"
          >
            <MapPin className="w-4 h-4" />
            Get Directions on Google Maps
            <ExternalLink className="w-3.5 h-3.5 opacity-80" />
          </a>
        </div>
      </DialogContent>
    </Dialog>
  );
};

const PlacesPage = () => {
  const [activeDay, setActiveDay] = useState(0);
  const [selectedPlace, setSelectedPlace] = useState<Place | null>(null);

  // Build TouristAttraction schema for all places (rich snippets)
  const touristAttractionSchema = daysData.flatMap((day) =>
    day.places.map((place) => ({
      "@context": "https://schema.org",
      "@type": "TouristAttraction",
      name: place.name,
      description: place.description,
      image: place.image,
      address: {
        "@type": "PostalAddress",
        addressLocality: "Chikmagalur",
        addressRegion: "Karnataka",
        addressCountry: "IN",
      },
      isAccessibleForFree: true,
      touristType: ["Adventure travelers", "Nature lovers", "Families", "Couples"],
    }))
  );

  return (
    <main className="min-h-screen bg-background relative overflow-hidden">
      <PageJsonLd schema={touristAttractionSchema} breadcrumbs={[
          { name: "Home", path: "/" },
          { name: "Places", path: "/places" },
        ]} />
      <Navbar />
      <AnimatedCar />

      {/* Hero with Map */}
      <section className="pt-28 pb-12 relative">
        <div className="container mx-auto px-4">
          <Breadcrumbs
            items={[
              { name: "Home", path: "/" },
              { name: "Places", path: "/places" },
            ]}
            className="mb-6"
          />

          <div className="text-center mb-10">
            <span className="text-sunset font-medium text-sm uppercase tracking-[0.2em]">
              Explore Chikmagalur
            </span>
            <h1 className="text-4xl md:text-5xl lg:text-6xl font-display font-bold text-foreground mt-3">
              Places to Visit
            </h1>
            <p className="text-muted-foreground mt-4 max-w-2xl mx-auto text-lg">
              Discover 30+ stunning destinations across 5 days of exploration
            </p>
          </div>

          {/* Map */}
          <div className="relative max-w-4xl mx-auto rounded-3xl overflow-hidden border border-border/50 shadow-2xl group">
            <img
              src={imageSrc(placesMap)}
              alt="Chikmagalur Tourist Guide Map"
              className="w-full h-auto transition-transform duration-700 group-hover:scale-[1.02]"
            />
            <div className="absolute inset-0 bg-gradient-to-t from-background/30 to-transparent pointer-events-none" />
            <div className="absolute bottom-4 left-4 right-4 flex items-center gap-2 glass rounded-xl px-4 py-2 text-sm text-foreground/80">
              <MapPin className="w-4 h-4 text-primary shrink-0" />
              <span>Interactive tourist guide map of Chikmagalur & surroundings</span>
            </div>
          </div>
        </div>
      </section>

      {/* Day Tabs */}
      <section className="py-12">
        <div className="container mx-auto px-4">
          {/* Day Selector */}
          <div className="flex gap-3 overflow-x-auto pb-4 scrollbar-hide justify-center flex-wrap">
            {daysData.map((day, i) => (
              <button
                key={day.day}
                onClick={() => setActiveDay(i)}
                className={`px-5 py-2.5 rounded-full text-sm font-medium transition-all duration-300 whitespace-nowrap flex items-center gap-2 ${
                  activeDay === i
                    ? "glass-button text-white shadow-lg scale-105"
                    : "glass text-foreground/70 hover:text-foreground hover:scale-[1.02]"
                }`}
              >
                <Car className="w-4 h-4" />
                Day {day.day} — {day.label}
              </button>
            ))}
          </div>

          {/* Place Cards Grid */}
          <div className="mt-10 grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-3 gap-6">
            {daysData[activeDay].places.map((place, index) => (
              <PlaceCard key={place.name} place={place} index={index} onOpen={setSelectedPlace} />
            ))}
          </div>

          {/* All Days View */}
          <div className="mt-20">
            <h2 className="text-3xl font-display font-bold text-foreground text-center mb-12">
              All Destinations
            </h2>
            {daysData.map((day) => (
              <div key={day.day} className="mb-16">
                <div className="flex items-center gap-3 mb-6">
                  <div className="w-10 h-10 rounded-full bg-primary/20 flex items-center justify-center text-primary font-bold text-sm">
                    {day.day}
                  </div>
                  <div>
                    <h3 className="font-display font-bold text-xl text-foreground">
                      Day {day.day}
                    </h3>
                    <p className="text-muted-foreground text-sm">{day.label}</p>
                  </div>
                  <div className="flex-1 h-px bg-border/50 ml-4" />
                </div>
                <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-3 gap-6">
                  {day.places.map((place, index) => (
                    <PlaceCard key={place.name} place={place} index={index} onOpen={setSelectedPlace} />
                  ))}
                </div>
              </div>
            ))}
          </div>
        </div>
      </section>

      <Footer />      <PlaceDetailDialog place={selectedPlace} onClose={() => setSelectedPlace(null)} />
    </main>
  );
};

export default PlacesPage;
