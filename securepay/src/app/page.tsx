import Navbar from "@/components/Navbar";
import Hero from "@/components/Hero";
import PaymentJourney from "@/components/PaymentJourney";
import FeaturesBento from "@/components/FeaturesBento";
import DashboardPreview from "@/components/DashboardPreview";
import TrustSecurity from "@/components/TrustSecurity";
import FAQ from "@/components/FAQ";
import Contact from "@/components/Contact";
import Footer from "@/components/Footer";

export default function Home() {
  return (
    <main className="min-h-screen bg-obsidian text-foreground selection:bg-primary/30">
      <Navbar />
      <Hero />
      <PaymentJourney />
      <FeaturesBento />
      <DashboardPreview />
      <TrustSecurity />
      <FAQ />
      <Contact />
      <Footer />
    </main>
  );
}
