import FoodPage from "@/page-views/FoodPage";
import { metadataForPath } from "@/lib/route-metadata";

export async function generateMetadata() {
  return metadataForPath("/food");
}

export default function Page() {
  return <FoodPage />;
}
