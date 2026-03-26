import { Header } from "@/components/site/Header";
import { Footer } from "@/components/site/Footer";
import {
  Hero,
  OfferPillars,
  AIBusiness,
  CaseStudies,
  Process,
  TechTrust,
  Testimonials,
  ContactCTA,
} from "@/components/site/Sections";

export default function Home() {
  return (
    <>
      <Header />
      <main className="flex-1">
        <Hero />
        <OfferPillars />
        <AIBusiness />
        <CaseStudies />
        <Process />
        <TechTrust />
        <Testimonials />
        <ContactCTA />
      </main>
      <Footer />
    </>
  );
}
