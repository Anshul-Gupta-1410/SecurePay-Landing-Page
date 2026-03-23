import Navbar from "@/components/Navbar";
import Hero from "@/components/Hero";
import IntegratedPartners from "@/components/IntegratedPartners";
import PaymentJourney from "@/components/PaymentJourney";
import FeaturesBento from "@/components/FeaturesBento";
import DashboardPreview from "@/components/DashboardPreview";
import TrustSecurity from "@/components/TrustSecurity";
import Footer from "@/components/Footer";

export default function Home() {
  return (
    <main className="min-h-screen bg-obsidian text-foreground selection:bg-primary/30">
      <Navbar />
      <Hero />
      <IntegratedPartners />
      <PaymentJourney />
      <FeaturesBento />
      <DashboardPreview />
      <TrustSecurity />
      <Footer />
    </main>
  );
}
