import Header from "@/components/Header";
import HeroSection from "@/components/HeroSection";
import FeatureCard from "@/components/FeatureCard";
import BenefitsSection from "@/components/BenefitsSection";
import StatsSection from "@/components/StatsSection";

import securityIcon from "@/assets/security-icon.jpg";
import devicesIcon from "@/assets/devices-icon.jpg";
import safetyIcon from "@/assets/safety-icon.jpg";

const Index = () => {
  return (
    <div className="min-h-screen bg-background">
      <Header />
      <HeroSection />
      
      <div className="max-w-7xl mx-auto px-6">
        <FeatureCard
          icon={securityIcon}
          title="Secure access, worldwide"
          description="Connect securely from anywhere, to anywhere. Our network of high-speed servers across the globe puts you in control."
          buttonText="Get SecureWeb"
        />
        
        <FeatureCard
          icon={safetyIcon}
          title="One click to a safer internet"
          description="Going online doesn't have to mean being exposed. Whether you're shopping, banking, or just browsing, keep your personal information more private and secure."
          buttonText="Learn more"
          isReversed
        />
        
        <FeatureCard
          icon={devicesIcon}
          title="Use SecureWeb on every device"
          description="Phone, tablet, computer, router—no matter where you are or what devices you're using, a single SecureWeb subscription can get you protected."
          buttonText="See all apps"
        />
      </div>
      
      <BenefitsSection />
      <StatsSection />
    </div>
  );
};

export default Index;