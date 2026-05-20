"use client";

import Navbar from "@/components/Navbar";
import HeroSection from "@/components/HeroSection";
import OffersSection from "@/components/OffersSection";
import ActivitiesSection from "@/components/ActivitiesSection";
import TestimonialSection from "@/components/TestimonialSection";
import PackagesSection from "@/components/PackagesSection";
import GallerySection from "@/components/GallerySection";
import WhyChooseUsSection from "@/components/WhyChooseUsSection";
import PartnersSection from "@/components/PartnersSection";
import ContactSection from "@/components/ContactSection";
import Footer from "@/components/Footer";
import FloatingWhatsApp from "@/components/FloatingWhatsApp";
import LeadFormPopup from "@/components/LeadFormPopup";
import { PageJsonLd } from "@/components/page-json-ld";

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
      <WhyChooseUsSection />
      <PartnersSection />
      <ContactSection />
      <Footer />
      <FloatingWhatsApp />
      <LeadFormPopup />
    </main>
  );
};

export default Index;
