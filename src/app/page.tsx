import * as React from "react";
import { PublicNav } from "@/components/layout/public-nav";
import { HeroSection } from "@/components/landing/hero-section";
import { ProductPreview } from "@/components/landing/product-preview";
import { FeatureShowcase } from "@/components/landing/feature-showcase";
import { WorkflowSection } from "@/components/landing/workflow-section";
import { CTASection } from "@/components/landing/cta-section";
import { PublicFooter } from "@/components/layout/public-footer";

export default function HomePage() {
  return (
    <div className="min-h-screen flex flex-col bg-white text-neutral-900">
      <PublicNav />
      <main className="flex-1">
        <HeroSection />
        <ProductPreview />
        <FeatureShowcase />
        <WorkflowSection />
        <CTASection />
      </main>
      <PublicFooter />
    </div>
  );
}
