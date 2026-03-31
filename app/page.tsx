import HeroSection from '@/components/sections/HeroSection';
import AboutSection from '@/components/sections/AboutSection';
import PartnerMarquee from '@/components/sections/PartnerMarquee';
import ServicesSection from '@/components/sections/ServicesSection';
import FeaturedWorksSection from '@/components/sections/FeaturedWorksSection';
import ProcessSection from '@/components/sections/ProcessSection';
import BenefitsSection from '@/components/sections/BenefitsSection';
import FeaturesSection from '@/components/sections/FeaturesSection';
import ToolsSection from '@/components/sections/ToolsSection';
import StatisticSection from '@/components/sections/StatisticSection';
import TestimonialsSection from '@/components/sections/TestimonialsSection';
import PricingSection from '@/components/sections/PricingSection';
import FAQsSection from '@/components/sections/FAQsSection';
import ContactSection from '@/components/sections/ContactSection';

export default function Home() {
  return (
    <>
      <HeroSection />
      <AboutSection />
      <PartnerMarquee />

      <div className="box-white">
        <ServicesSection />
        <FeaturedWorksSection />
        <ProcessSection />
        <BenefitsSection />
        <FeaturesSection />
      </div>

      <ToolsSection />

      <div className="box-black">
        <div className="light-box"></div>
        <img className="light-top" src="/assets/images/item/light-top.png" alt="" />
        <img className="light-bot" src="/assets/images/item/light-bot.png" alt="" />

        <StatisticSection />
        <TestimonialsSection />
      </div>

      <PricingSection />
      <FAQsSection
        accordionId="accordion-asked-home"
        faqs={[
          {
            id: 'home-faq-1',
            question: "What's the typical timeline from idea to v1?",
            answer: "A clear problem statement, success metrics, access to sample data, and a stakeholder who can make decisions. We'll run a kickoff workshop to align scope.",
            defaultOpen: true,
          },
          {
            id: 'home-faq-2',
            question: 'What do we need to start?',
            answer: "A clear problem statement, success metrics, access to sample data, and a stakeholder who can make decisions. We'll run a kickoff workshop to align scope.",
          },
          {
            id: 'home-faq-3',
            question: 'Which models/stack do you use?',
            answer: "A clear problem statement, success metrics, access to sample data, and a stakeholder who can make decisions. We'll run a kickoff workshop to align scope.",
          },
          {
            id: 'home-faq-4',
            question: 'Are model/API costs included in pricing?',
            answer: "A clear problem statement, success metrics, access to sample data, and a stakeholder who can make decisions. We'll run a kickoff workshop to align scope.",
          },
        ]}
      />
      <ContactSection />
    </>
  );
}
