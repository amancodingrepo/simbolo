import HeroSection from '@/components/sections/HeroSection';
import AboutSection from '@/components/sections/AboutSection';
import PartnerMarquee from '@/components/sections/PartnerMarquee';
import ServicesSection from '@/components/sections/ServicesSection';
import FeaturedWorksSection from '@/components/sections/FeaturedWorksSection';
import ProcessSection from '@/components/sections/ProcessSection';
import BenefitsSection from '@/components/sections/BenefitsSection';
import FeaturesSection from '@/components/sections/FeaturesSection';
import ToolsSection from '@/components/sections/ToolsSection';
import TeamSection from '@/components/sections/TeamSection';
import StatisticSection from '@/components/sections/StatisticSection';
import AwardsSection from '@/components/sections/AwardsSection';
import TestimonialsSection from '@/components/sections/TestimonialsSection';
import PricingSection from '@/components/sections/PricingSection';
import FAQsSection from '@/components/sections/FAQsSection';
import ContactSection from '@/components/sections/ContactSection';

export default function HomeAnimated() {
  return (
    <>
      <HeroSection variant="v1" />
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
        <img
          className="light-top"
          src="/assets/images/item/light-top.png"
          alt=""
        />
        <img
          className="light-bot"
          src="/assets/images/item/light-bot.png"
          alt=""
        />

        <TeamSection />
        <StatisticSection />
        <AwardsSection />
        <TestimonialsSection />
      </div>

      <PricingSection />
      <FAQsSection
        accordionId="accordion-asked-home-animated"
        faqs={[
          {
            id: "home-animated-faq-1",
            question: "What's the typical timeline from idea to v1?",
            answer:
              "Most initial campaigns or brand identities take 4 to 6 weeks. We focus on a rapid deployment model to gather market data and iterate quickly for scale.",
            defaultOpen: true,
          },
          {
            id: "home-animated-faq-2",
            question: "What do we need to start?",
            answer:
              "We require your current brand guidelines, access to existing ad accounts, and a clear set of KPIs. A kickoff workshop will define the specific growth roadmap.",
          },
          {
            id: "home-animated-faq-3",
            question: "Which tech stack/platforms do you use?",
            answer:
              "We specialize in Meta, Google, and LinkedIn Ads, paired with high-end creative tools like Figma and Adobe Creative Cloud for asset production.",
          },
          {
            id: "home-animated-faq-4",
            question: "Are ad spends or software fees included?",
            answer:
              "Media spend and third-party platform fees are billed directly to your accounts to ensure transparency and total ownership of your data.",
          },
        ]}
      />
      <ContactSection />
    </>
  );
}
