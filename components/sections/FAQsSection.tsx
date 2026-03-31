interface FAQItem {
  id: string;
  question: string;
  answer: string;
  defaultOpen?: boolean;
}

interface FAQsSectionProps {
  headingSubtitle?: string;
  headingTitle?: string;
  accordionId?: string;
  faqs?: FAQItem[];
}

const defaultFAQs: FAQItem[] = [
  {
    id: 'faq-1',
    question: "Do you just shoot the video, or do you help market it?",
    answer: "We do both. A great video is useless if no one sees it. We integrate our media production with robust internet marketing and web design strategies to ensure it drives real revenue.",
    defaultOpen: true,
  },
  {
    id: 'faq-2',
    question: 'Are you a production house or a marketing agency?',
    answer: "We are both. We blur the line between media company and advertising agency because you can't have successful marketing without incredible content, and vice versa.",
  },
  {
    id: 'faq-3',
    question: 'Who is your ideal client?',
    answer: "We partner with brands, real estate firms, e-commerce businesses, and corporations that are ready to scale and understand the ROI of premium media and marketing.",
  },
  {
    id: 'faq-4',
    question: 'Do you travel for shoots?',
    answer: "Yes, we deploy crews globally for commercial ads, corporate events, and large-scale brand films.",
  },
];

export default function FAQsSection({
  headingSubtitle = 'FAQs',
  headingTitle = 'Frequently Asked <br />Questions',
  accordionId = 'accordion-asked',
  faqs = defaultFAQs,
}: FAQsSectionProps) {
  return (
    <div className="section-faqs flat-spacing pt-0">
      <div className="container">
        <div className="heading-section center mb-64">
          <div className="heading-sub fw-semibold effectFade fadeUp">{headingSubtitle}</div>
          <div
            className="heading-title text-gradient-3 effectFade fadeRotateX"
            dangerouslySetInnerHTML={{ __html: headingTitle }}
          />
        </div>
        <div className="row justify-content-center">
          <div className="col-lg-8">
            <div className="accordion-asked" id={accordionId}>
              {faqs.map((faq, i) => (
                <div
                  key={faq.id}
                  className="accordion-asked-item effectFade fadeRotateX"
                  {...(i > 0 ? { 'data-delay': `${i * 0.1}` } : {})}
                >
                  <div className="accordion-asked-title" id={`heading-${faq.id}`}>
                    <button
                      className={`accordion-button text-body-1 fw-semibold${faq.defaultOpen ? '' : ' collapsed'}`}
                      type="button"
                      data-bs-toggle="collapse"
                      data-bs-target={`#${faq.id}`}
                      aria-expanded={faq.defaultOpen ? 'true' : 'false'}
                      aria-controls={faq.id}
                    >
                      {faq.question}
                      <span className="right-icon"></span>
                    </button>
                  </div>
                  <div
                    id={faq.id}
                    role="region"
                    className={`accordion-collapse collapse${faq.defaultOpen ? ' show' : ''}`}
                    aria-labelledby={`heading-${faq.id}`}
                    data-bs-parent={`#${accordionId}`}
                  >
                    <div className="accordion-body">{faq.answer}</div>
                  </div>
                </div>
              ))}
            </div>
          </div>
        </div>
      </div>
    </div>
  );
}
