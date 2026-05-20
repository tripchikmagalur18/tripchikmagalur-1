import FoodPage from "@/page-views/FoodPage";
import { metadataForPath } from "@/lib/route-metadata";

export const metadata = metadataForPath("/food");

export default function Page() {
  return <FoodPage />;
}
