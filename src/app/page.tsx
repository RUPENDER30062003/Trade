
// src/app/page.tsx
import Hero from "@/components/Hero";
import VerticalTimeline from "@/components/VerticalTimeline"
import PricingComparison from "@/components/PricingComparison"
import FundingHero from "@/components/FundingHero";

export default function Home() {
  return (
    <main>
      <Hero />
      <VerticalTimeline/>
      <PricingComparison/>
      <FundingHero/>
    </main>
  );
}