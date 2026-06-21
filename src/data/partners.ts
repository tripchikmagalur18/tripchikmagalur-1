import type { StaticImageData } from "next/image";

import bookingLogo from "@/assets/partners/booking.jpg";
import fundayBitesLogo from "@/assets/partners/funday-bites.jpg";
import kaimaraBeltLogo from "@/assets/partners/kaimara-belt.jpg";
import lotsaIcecreamLogo from "@/assets/partners/lotsa-icecream.jpg";
import makemytripLogo from "@/assets/partners/makemytrip.jpg";
import redbusLogo from "@/assets/partners/redbus.jpg";
import tripadvisorLogo from "@/assets/partners/tripadvisor.jpg";

export type PartnerLogo = {
  id: string;
  name: string;
  logo: StaticImageData;
  href?: string;
};

export const partnerLogos: PartnerLogo[] = [
  {
    id: "tripadvisor",
    name: "TripAdvisor",
    logo: tripadvisorLogo,
    href: "https://www.tripadvisor.in/",
  },
  {
    id: "kaimara-belt",
    name: "The Kaimara Belt",
    logo: kaimaraBeltLogo,
  },
  {
    id: "booking",
    name: "Booking.com",
    logo: bookingLogo,
    href: "https://www.booking.com/",
  },
  {
    id: "makemytrip",
    name: "MakeMyTrip",
    logo: makemytripLogo,
    href: "https://www.makemytrip.com/",
  },
  {
    id: "redbus",
    name: "redBus",
    logo: redbusLogo,
    href: "https://www.redbus.in/",
  },
  {
    id: "funday-bites",
    name: "Funday Bites",
    logo: fundayBitesLogo,
    href: "https://funday-bites.vercel.app/",
  },
  {
    id: "lotsa-icecream",
    name: "Lot'sa IceCream",
    logo: lotsaIcecreamLogo,
  },
];
