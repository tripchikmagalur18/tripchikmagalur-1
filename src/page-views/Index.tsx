"use client";

import Navbar from "@/components/Navbar";
import HeroSection from "@/components/HeroSection";
import OffersSection from "@/components/OffersSection";
import ActivitiesSection from "@/components/ActivitiesSection";
import TestimonialSection from "@/components/TestimonialSection";
import PackagesSection from "@/components/PackagesSection";
import GallerySection from "@/components/GallerySection";
import PartnersSection from "@/components/PartnersSection";
import HomeFAQSection from "@/components/HomeFAQSection";
import Footer from "@/components/Footer";
import HomeContactDock from "@/components/HomeContactDock";

const Index = () => {
  return (
    <main className="overflow-x-hidden">
      <Navbar />
      <HeroSection />
      <OffersSection />
      <ActivitiesSection />
      <TestimonialSection />
      <PackagesSection />
      <GallerySection />
      <HomeFAQSection />
      <PartnersSection />
      <Footer />
      <HomeContactDock />
    </main>
  );
};

export default Index;
