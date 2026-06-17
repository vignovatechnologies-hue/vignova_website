// src/app/page.tsx
// Home page — composes all section components.

import Navbar from "@/components/layout/Navbar";
import Footer from "@/components/layout/Footer";
import HeroSection from "@/components/home/HeroSection";
import TrustBar from "@/components/home/TrustBar";
import FeaturedProduct from "@/components/home/FeaturedProduct";
import ServicesOverview from "@/components/home/ServicesOverview";
import AboutSnippet from "@/components/home/AboutSnippet";
import WhyVignova from "@/components/home/WhyVignova";
import CtaBanner from "@/components/shared/CtaBanner";

export default function HomePage() {
  return (
    <div className="w-full min-h-screen bg-white flex flex-col">
      <Navbar />
      <HeroSection />
      <TrustBar />
      <FeaturedProduct />
      <ServicesOverview />
      <AboutSnippet />
      <WhyVignova />
      <CtaBanner />
      <Footer />
    </div>
  );
}
