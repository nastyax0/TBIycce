import HeroWithCarousel from "@/components/hero";
import AboutUs from "@/components/aboutus";
import Services from "@/components/services";
import Gallery from "@/components/gallery";
import IncubateesSection from "@/components/incubatee";
import PartnersSection from "@/components/partner";
import DashboardCards from "@/components/dashboard";

export default function Home() {
  return (
    <>
      <HeroWithCarousel />
      <AboutUs />
      <Services />
      <DashboardCards />
      <Gallery />
      <IncubateesSection />
      <PartnersSection />
    </>
  );
}
