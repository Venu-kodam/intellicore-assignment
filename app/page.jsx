import AIFeatures from "@/components/AIFeatures";
import Footer from "@/components/Footer";
import Hero from "@/components/Hero";
import JobsSection from "@/components/JobsSection";
import Navbar from "@/components/Navbar";

export default function Home() {
  return (
    <div
      className="h-screen bg-cover bg-center bg-no-repeat"
      style={{
        backgroundImage: "url('/landing_topbg.png')"
      }}
    >
      <Navbar />
      <Hero />
      <JobsSection />
      <AIFeatures />
      <Footer />
    </div>
  );
}
