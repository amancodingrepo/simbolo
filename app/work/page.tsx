import HeroSection from '@/components/sections/HeroSection';
import FeaturedWorksSection from '@/components/sections/FeaturedWorksSection';
import PricingSection from '@/components/sections/PricingSection';
import FAQsSection from '@/components/sections/FAQsSection';
import ContactSection from '@/components/sections/ContactSection';

export default function Works() {
  return (
    <>
      <HeroSection
        variant="v1"
        title1="Explore Our Finest"
        title2="AI Work"
        description="See how we've shipped AI copilots, agents, and data pipelines for clients across Fintech, Healthcare, SaaS, and Ecommerce."
        primaryButtonText="Start a Project"
        primaryButtonHref="/contact"
        showScrollMore={false}
      />

      <div className="box-white">
        <FeaturedWorksSection />
      </div>

      <PricingSection
        headingSubtitle="Pricing Plans"
        headingTitle="Ready to start your"
      />

      <FAQsSection
        accordionId="accordion-asked-work"
        faqs={[
          {
            id: 'work-faq-1',
            question: 'How do you pick what to build?',
            answer: 'We start with a structured discovery sprint to score use cases by ROI, feasibility, and data readiness. You see the ranking before any code is written.',
            defaultOpen: true,
          },
          {
            id: 'work-faq-2',
            question: 'Can I see the eval results for past projects?',
            answer: 'We share anonymised eval dashboards and metric breakdowns during sales calls. Real numbers, no marketing fluff.',
          },
          {
            id: 'work-faq-3',
            question: 'Do you take on early-stage startups?',
            answer: 'Yes, especially for Starter-plan pilots. A clear problem and access to sample data are all you need to begin.',
          },
        ]}
      />

      <ContactSection />
    </>
  );
}
