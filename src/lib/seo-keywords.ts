/** Shared keyword clusters for Chikmagalur travel SEO (meta keywords + content alignment). */

export const GLOBAL_KEYWORDS = [
  "Chikmagalur tour packages",
  "Chikmagalur trip",
  "Chikmagalur travel guide",
  "Trip Chikmagalur",
  "Mullayanagiri trek",
  "Hebbe Falls",
  "Baba Budangiri",
  "places to visit in Chikmagalur",
  "Chikmagalur resort",
  "Chikmagalur villa stay",
  "Chikmagalur adventure activities",
  "Chikmagalur from Bangalore",
  "Chikmagalur from Mysore",
  "Chikmagalur honeymoon packages",
  "Chikmagalur corporate outing",
  "homestays in Chikmagalur",
  "coffee plantation tour Chikmagalur",
  "Chikmagalur weekend packages",
  "3 day Chikmagalur itinerary",
  "2 day Chikmagalur itinerary",
  "Kemmangundi tour",
  "Bhadra wildlife safari",
  "Western Ghats Karnataka",
] as const;

/** Build a de-duplicated keyword list for a page (primary first, then niche + global). */
export function pageKeywords(
  primary: string,
  ...extras: (string | string[] | undefined)[]
): string[] {
  const flat = extras.flatMap((e) => (e == null ? [] : Array.isArray(e) ? e : [e]));
  const seen = new Set<string>();
  const out: string[] = [];
  for (const k of [primary, ...flat, ...GLOBAL_KEYWORDS]) {
    const t = k.trim();
    if (!t || seen.has(t)) continue;
    seen.add(t);
    out.push(t);
  }
  return out.slice(0, 24);
}

export const HOME_KEYWORDS = pageKeywords(
  "Chikmagalur tour packages",
  "Chikmagalur weekend trip from Bangalore",
  "Chikmagalur resort with pool",
  "Chikmagalur private villa",
  "Mullayanagiri sunrise trek",
  "Hebbe Falls jeep ride",
  "Chikmagalur honeymoon package",
  "Chikmagalur corporate outing",
);

export const ADVENTURE_KEYWORDS = pageKeywords(
  "Chikmagalur adventure activities",
  "ziplining Chikmagalur",
  "ATV ride Chikmagalur",
  "jeep safari Chikmagalur",
  "Mullayanagiri trekking package",
  "camping in Chikmagalur",
);

export const STAYS_KEYWORDS = pageKeywords(
  "stays in Chikmagalur",
  "Chikmagalur resort booking",
  "Chikmagalur villa for groups",
  "family resort Chikmagalur",
  "homestay Chikmagalur",
);

export const FOOD_KEYWORDS = pageKeywords(
  "Chikmagalur food",
  "Malnad cuisine",
  "Akki Rotti Chikmagalur",
  "filter coffee estate cafe",
  "Pandi Curry Chikmagalur",
);

export const PLACES_KEYWORDS = pageKeywords(
  "places to visit in Chikmagalur",
  "Chikmagalur sightseeing",
  "Kemmanagundi",
  "Jhari Falls",
  "Hirekolale Lake",
  "Bhadra wildlife safari",
);

export const PACKAGES_KEYWORDS = pageKeywords(
  "Chikmagalur tour packages",
  "Chikmagalur package price",
  "customisable Chikmagalur trip",
  "5 day Chikmagalur itinerary",
);

export const PACKAGE_DAY_KEYWORDS: Record<string, string[]> = {
  "/package/day-1": pageKeywords(
    "day 1 Chikmagalur tour",
    "Mullayanagiri Baba Budangiri day trip",
    "Chikmagalur coffee estate tour",
  ),
  "/package/day-2": pageKeywords(
    "day 2 Chikmagalur tour",
    "Hebbe Falls Kemmanagundi package",
    "Chikmagalur waterfalls tour",
  ),
  "/package/day-3": pageKeywords(
    "day 3 Chikmagalur tour",
    "Hirekolale Lake Bhadra safari",
    "Chikmagalur wildlife trip",
  ),
  "/package/day-4": pageKeywords(
    "Belur Halebidu tour from Chikmagalur",
    "Hoysala temple day trip",
    "Chikmagalur heritage tour",
  ),
  "/package/day-5": pageKeywords(
    "Sringeri trek Chikmagalur",
    "Devaramane Betta trek",
    "Ethina Bhuja trek",
    "Abbi Falls Mudigere",
  ),
};

export const STAY_KEYWORDS: Record<string, string[]> = {
  "trip-chikmagalur-resort": pageKeywords(
    "Trip Chikmagalur Resort",
    "resort with swimming pool Chikmagalur",
    "family resort Chikmagalur",
    "group stay Chikmagalur",
  ),
  "trip-chikmagalur-resort-p2": pageKeywords(
    "Trip Chikmagalur Resort P2",
    "forest resort Chikmagalur",
    "resort with pool and forest view Chikmagalur",
    "family resort P2 Chikmagalur",
    "group stay resort Chikmagalur",
  ),
  "trip-chikmagalur-villa": pageKeywords(
    "Trip Chikmagalur Villa",
    "private villa Chikmagalur",
    "villa with kitchen Chikmagalur",
    "Chikmagalur villa for family",
  ),
  "trip-chikmagalur-homestay": pageKeywords(
    "Trip Chikmagalur Homestay",
    "homestay in Chikmagalur",
    "budget stay Chikmagalur",
    "group stay Chikmagalur homestay",
    "Chikmagalur dormitory stay",
  ),
  "trip-chikmagalur-homestay-p3": pageKeywords(
    "Trip Chikmagalur Homestay P3",
    "modern homestay Chikmagalur",
    "homestay with pool Chikmagalur",
    "forest view homestay Chikmagalur",
    "budget homestay P3 Chikmagalur",
  ),
  "trip-chikmagalur-stay-sr": pageKeywords(
    "Trip Chikmagalur Stay SR",
    "guest house Chikmagalur",
    "Chikmagalur stay SR",
    "balcony stay Chikmagalur",
    "mid budget hotel Chikmagalur",
  ),
};
