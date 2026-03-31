import HeroSection from '@/components/sections/HeroSection';
import AboutSection from '@/components/sections/AboutSection';
import PartnerMarquee from '@/components/sections/PartnerMarquee';
import FeaturesSection from '@/components/sections/FeaturesSection';
import ToolsSection from '@/components/sections/ToolsSection';
import TeamSection from '@/components/sections/TeamSection';
import StatisticSection from '@/components/sections/StatisticSection';
import AwardsSection from '@/components/sections/AwardsSection';
import TestimonialsSection from '@/components/sections/TestimonialsSection';
import FAQsSection from '@/components/sections/FAQsSection';
import ContactSection from '@/components/sections/ContactSection';

export default function About() {
  return (
    <>
      <HeroSection
        variant="v1"
        title1="Simbolo Empowering"
        title2="Industries"
        description="Learn about our mission, philosophy, and the team behind the AI."
        primaryButtonText="Get Started"
        primaryButtonHref="/contact"
        secondaryButtonText=""
        secondaryButtonHref=""
      />

      <AboutSection
        sectionId="about"
        heading="Human-Centered AI, Built for Production"
        description="Trusted by 120+ clients across 4 industries - shipping AI from idea to production in 8–10 weeks"
        location="Montréal, Canada"
        testimonialText="Good AI feels obvious—because the hard work is hidden."
        testimonialAuthor="Ava Collins"
        testimonialRole="Simbolo's Design Lead"
      />

      <PartnerMarquee />

      <FeaturesSection />

      <ToolsSection variant="v2" />

      <TeamSection />

      <div className="box-black">
        <div className="light-box"></div>
        <img className="light-top" src="/assets/images/item/light-top.png" alt="" />
        <img className="light-bot" src="/assets/images/item/light-bot.png" alt="" />

        <StatisticSection />
        <AwardsSection />
        <TestimonialsSection />
      </div>

      <FAQsSection
        accordionId="accordion-asked-about"
        faqs={[
          {
            id: 'about-faq-1',
            question: 'What industries do you work in?',
            answer: 'We primarily work in SaaS, Fintech, Healthcare, and Ecommerce — though our process adapts to any domain with structured data and measurable outcomes.',
            defaultOpen: true,
          },
          {
            id: 'about-faq-2',
            question: 'How do you handle data privacy?',
            answer: 'All client data is handled with enterprise-grade security: PII masking, SSO/SAML, RBAC, encryption at rest and in transit, and full audit trails.',
          },
          {
            id: 'about-faq-3',
            question: 'What makes Simbolo different?',
            answer: 'We combine product thinking, AI engineering, and eval-first methodology to ship features that actually work — and prove it with dashboards.',
          },
        ]}
      />

      <ContactSection />
    </>
  );
}
