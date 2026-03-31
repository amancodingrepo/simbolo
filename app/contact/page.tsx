import HeroSection from '@/components/sections/HeroSection';
import ContactSection from '@/components/sections/ContactSection';
import FAQsSection from '@/components/sections/FAQsSection';

export default function Contact() {
  return (
    <>
      <HeroSection
        variant="v1"
        title1="Let's Build"
        title2="Intelligent Things"
        description="Tell us about your AI project — we'll scope it, price it, and get back to you within 24 hours."
        primaryButtonText="Go Home"
        primaryButtonHref="/"
        showScrollMore={false}
      />

      <ContactSection
        headingSubtitle="Contact"
        headingTitle="Let's Build <br /> Intelligent Things"
        contactInfo={[
          { icon: 'icon-envelope-solid', title: 'E-mail address', value: 'hello@Simbolo.com' },
          { icon: 'icon-headset-solid', title: 'Phone number', value: '+1 (647) 555 0172' },
        ]}
      />

      <FAQsSection
        accordionId="accordion-asked-contact"
        headingTitle="Common <br />Questions"
        faqs={[
          {
            id: 'contact-faq-1',
            question: 'How quickly do you respond to inquiries?',
            answer: 'We respond to all project inquiries within 24 hours on business days.',
            defaultOpen: true,
          },
          {
            id: 'contact-faq-2',
            question: 'Do you offer free consultations?',
            answer: 'Yes — a 30-minute discovery call is free and helps us understand your problem before we propose a scope.',
          },
          {
            id: 'contact-faq-3',
            question: 'Can we start with a smaller engagement?',
            answer: 'Absolutely. Our Starter plan is designed exactly for this — prove value in 2 weeks before committing to a full build.',
          },
        ]}
      />
    </>
  );
}
