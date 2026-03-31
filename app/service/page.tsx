import HeroSection from '@/components/sections/HeroSection';
import PartnerMarquee from '@/components/sections/PartnerMarquee';
import ServicesSection from '@/components/sections/ServicesSection';
import ProcessSection from '@/components/sections/ProcessSection';
import PricingSection from '@/components/sections/PricingSection';
import FAQsSection from '@/components/sections/FAQsSection';
import ContactSection from '@/components/sections/ContactSection';

export default function Services() {
  return (
    <>
      <HeroSection
        variant="v1"
        title1="End-to-End AI Services"
        title2="for Your Business"
        description="Comprehensive AI solutions from strategy to production — tailored to your stack and timelines."
        primaryButtonText="Get Started"
        primaryButtonHref="/contact"
        showScrollMore={false}
      />

      <PartnerMarquee />

      <div className="box-white">
        <ServicesSection />
        <ProcessSection />
      </div>

      <PricingSection />

      <FAQsSection
        accordionId="accordion-asked-services"
        faqs={[
          {
            id: 'svc-faq-1',
            question: "What's included in the Starter plan?",
            answer: 'Discovery workshop, opportunity brief, clickable UX prototype, tech spike, 1 data source and 1 integration — all in ≈2 weeks.',
            defaultOpen: true,
          },
          {
            id: 'svc-faq-2',
            question: 'Do you work with existing codebases?',
            answer: 'Yes. We integrate into your existing stack — whether that\'s Python microservices, a Node.js API, or a cloud-native pipeline.',
          },
          {
            id: 'svc-faq-3',
            question: 'Can services be purchased à la carte?',
            answer: 'For scoped engagements, yes. Contact us and we\'ll scope a custom statement of work.',
          },
          {
            id: 'svc-faq-4',
            question: 'Are model/API costs included?',
            answer: 'Model inference costs (OpenAI, Anthropic, etc.) are billed separately at cost with no markup.',
          },
        ]}
      />

      <ContactSection />
    </>
  );
}
