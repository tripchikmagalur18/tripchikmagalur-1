import type { StaticImageData } from "next/image";

import partnerBooking from "@/assets/partners/booking.png";
import partnerFundayBites from "@/assets/partners/funday-bites.png";
import partnerKaimara from "@/assets/partners/kaimara-belt.png";
import partnerLotsaIcecream from "@/assets/partners/lotsa-icecream.png";
import partnerMakeMyTrip from "@/assets/partners/makemytrip.png";
import partnerRedBus from "@/assets/partners/redbus.png";
import partnerTripAdvisor from "@/assets/partners/tripadvisor.png";

export type PartnerLogo = {
  id: string;
  name: string;
  logo: StaticImageData;
};

export const partnerLogos: PartnerLogo[] = [
  { id: "funday-bites", name: "Funday Bites", logo: partnerFundayBites },
  { id: "kaimara-belt", name: "The Kaimara Belt", logo: partnerKaimara },
  { id: "lotsa-icecream", name: "Lot'sa IceCream", logo: partnerLotsaIcecream },
  { id: "redbus", name: "redBus", logo: partnerRedBus },
  { id: "tripadvisor", name: "TripAdvisor", logo: partnerTripAdvisor },
  { id: "makemytrip", name: "MakeMyTrip", logo: partnerMakeMyTrip },
  { id: "booking", name: "Booking.com", logo: partnerBooking },
];
