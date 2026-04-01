'use client';

import { useState } from 'react';

interface ServiceItem {
  id?: string;
  title: string;
  description: string;
  details?: string;
  tags?: string[];
}

interface ServicesSectionProps {
  sectionId?: string;
  headingSubtitle?: string;
  headingTitle?: string | React.ReactNode;
  heading?: string | React.ReactNode;
  description?: string;
  services?: ServiceItem[];
}

const defaultServices: ServiceItem[] = [
  {
    id: 'faq-1',
    title: 'Viral Social & <br /> Trending Content',
    description: 'We turn attention into equity. Short-form Instagram reels and platform-native content designed to hack engagement and build loyal communities.',
    tags: ['Instagram Reels', 'Trend forecasting', 'Audience retention optimization'],
  },
  {
    id: 'faq-2',
    title: 'E-Commerce <br /> & Web Ecosystems',
    description: 'We design and develop digital storefronts and marketing funnels that turn passive browsers into repeat buyers.',
    tags: ['Web design', 'E-commerce optimization', 'Funnel conversion mapping'],
  },
  {
    id: 'faq-3',
    title: 'High-Ticket Product <br /> & Real Estate Media',
    description: 'Premium food, product, and real estate cinematography that justifies premium pricing and accelerates sales cycles.',
    tags: ['Product shoots', 'Real estate tours', 'Perceived value enhancement'],
  },
  {
    id: 'faq-4',
    title: 'Corporate Authority <br /> & Internet Marketing',
    description: 'Interviews, event coverage, and digital marketing campaigns that establish industry dominance and generate qualified B2B leads.',
    tags: ['Corporate identity', 'Lead generation', 'Authority building'],
  },
  {
    id: 'faq-5',
    title: 'Commercial Ads <br /> & Brand Films',
    description: 'We produce high-end visual narratives that elevate your market positioning and drive measurable customer acquisition.',
    tags: ['Creative strategy', 'High-end production', 'Conversion-focused storytelling'],
  },
];

export default function ServicesSection({
  sectionId = 'services',
  headingSubtitle = 'Growth Engines',
  headingTitle,
  heading,
  description = 'From high-converting commercials to frictionless e-commerce web experiences, every asset we create is mapped directly to your business goals.',
  services = defaultServices,
}: ServicesSectionProps) {
  const resolvedHeadingTitle = heading ?? headingTitle ?? <>We Engineer Results, <br /> Not Just Deliverables</>;

  const [activeIdx, setActiveIdx] = useState<number | null>(null);

  const handleClick = (i: number) => {
    setActiveIdx(activeIdx === i ? null : i);
  };

  return (
    <div id={sectionId} className="section-services flat-spacing">
      <div className="container">
        <div style={{ display: 'flex', alignItems: 'flex-start', gap: '48px' }}>
          {/* Sticky left column */}
          <div style={{ flex: '0 0 38%', position: 'sticky', top: '100px', alignSelf: 'flex-start' }}>
            <div className="col-left">
              <div className="heading-section mb-48">
                <div className="heading-sub fw-semibold effectFade fadeUp">{headingSubtitle}</div>
                <div className="heading-title text-gradient-3 effectFade fadeRotateX">
                  {resolvedHeadingTitle}
                </div>
              </div>
              <p className="effectFade fadeUp">{description}</p>
            </div>
          </div>
          {/* Scrollable right column */}
          <div style={{ flex: 1, minWidth: 0 }}>
            <style>{`
              .accordion-faq_item { cursor: pointer; transition: color 0.25s ease; }
              .accordion-faq_item:hover .accordion-title,
              .accordion-faq_item.active .accordion-title { color: var(--primary, #a78bfa); }
              .accordion-faq_item:hover .num,
              .accordion-faq_item.active .num { color: var(--primary, #a78bfa); }
            `}</style>
            <div className="accordion-faq_list">
              {services.map((service, i) => (
                <div
                  key={i}
                  className={`accordion-faq_item effectFade fadeUp${activeIdx === i ? ' active' : ''}`}
                  onClick={() => handleClick(i)}
                >
                  <div className={`accordion-action services-image-btn${activeIdx === i ? ' active-img' : ' collapsed'}`}>
                    <div className="accordion-title">
                      <span dangerouslySetInnerHTML={{ __html: service.title }} />
                      <div className="text-body-1 num">({String(i + 1).padStart(2, '0')})</div>
                    </div>
                  </div>
                  <div
                    style={{
                      overflow: 'hidden',
                      maxHeight: activeIdx === i ? '300px' : '0px',
                      transition: 'max-height 0.7s cubic-bezier(0.4, 0, 0.2, 1), opacity 0.6s cubic-bezier(0.4, 0, 0.2, 1)',
                      opacity: activeIdx === i ? 1 : 0,
                    }}
                  >
                    <div className="accordion-content">
                      <div className="text-body-3 text-neutral-300 text">{service.description}</div>
                      {service.tags && service.tags.length > 0 && (
                        <div className="list-tags">
                          {service.tags.map((tag, j) => (
                            <a href="#" key={j} className="tags-item fw-semibold">{tag}</a>
                          ))}
                        </div>
                      )}
                    </div>
                  </div>
                </div>
              ))}
            </div>
          </div>
        </div>{/* end flex row */}
      </div>
    </div>
  );
}
