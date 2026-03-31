'use client';

interface ServiceItem {
  id?: string;
  title: string;
  description: string;
  details?: string;
  image?: string;
  tags?: string[];
}

interface ServicesSectionProps {
  sectionId?: string;
  headingSubtitle?: string;
  headingTitle?: string | React.ReactNode;
  heading?: string | React.ReactNode;
  description?: string;
  services?: ServiceItem[];
  defaultImage?: string;
}

const defaultServices: ServiceItem[] = [
  {
    id: 'faq-1',
    title: 'Viral Social & <br /> Trending Content',
    description: 'We turn attention into equity. Short-form Instagram reels and platform-native content designed to hack engagement and build loyal communities.',
    image: 'assets/images/section/service-2.jpg',
    tags: ['Instagram Reels', 'Trend forecasting', 'Audience retention optimization'],
  },
  {
    id: 'faq-2',
    title: 'E-Commerce <br /> & Web Ecosystems',
    description: 'We design and develop digital storefronts and marketing funnels that turn passive browsers into repeat buyers.',
    image: 'assets/images/section/service-3.jpg',
    tags: ['Web design', 'E-commerce optimization', 'Funnel conversion mapping'],
  },
  {
    id: 'faq-3',
    title: 'High-Ticket Product <br /> & Real Estate Media',
    description: 'Premium food, product, and real estate cinematography that justifies premium pricing and accelerates sales cycles.',
    image: 'assets/images/section/service-4.jpg',
    tags: ['Product shoots', 'Real estate tours', 'Perceived value enhancement'],
  },
  {
    id: 'faq-4',
    title: 'Corporate Authority <br /> & Internet Marketing',
    description: 'Interviews, event coverage, and digital marketing campaigns that establish industry dominance and generate qualified B2B leads.',
    image: 'assets/images/section/service-1.jpg',
    tags: ['Corporate identity', 'Lead generation', 'Authority building'],
  },
  {
    id: 'faq-5',
    title: 'Commercial Ads <br /> & Brand Films',
    description: 'We produce high-end visual narratives that elevate your market positioning and drive measurable customer acquisition.',
    image: 'assets/images/section/service-1.jpg',
    tags: ['Creative strategy', 'High-end production', 'Conversion-focused storytelling'],
  },
];

import { useState } from 'react';

export default function ServicesSection({
  sectionId = 'services',
  headingSubtitle = 'Growth Engines',
  headingTitle,
  heading,
  description = 'From high-converting commercials to frictionless e-commerce web experiences, every asset we create is mapped directly to your business goals.',
  services = defaultServices,
  defaultImage = '/assets/images/section/service-1.jpg',
}: ServicesSectionProps) {
  const resolvedHeadingTitle = heading ?? headingTitle ?? <>We Engineer Results, <br /> Not Just Deliverables</>;

  const [activeIdx, setActiveIdx] = useState(0);
  const [displayedImage, setDisplayedImage] = useState(services[0]?.image ?? defaultImage);
  const [imgOpacity, setImgOpacity] = useState(1);

  const handleMouseEnter = (i: number) => {
    setActiveIdx(i);
    setImgOpacity(0);
    setTimeout(() => {
      setDisplayedImage(services[i]?.image ?? defaultImage);
      setImgOpacity(1);
    }, 300);
  };

  const handleMouseLeave = () => {
    setActiveIdx(0);
    setImgOpacity(0);
    setTimeout(() => {
      setDisplayedImage(services[0]?.image ?? defaultImage);
      setImgOpacity(1);
    }, 300);
  };

  return (
    <div id={sectionId} className="section-services flat-spacing">
      <div className="container">
        <div className="row justify-content-between">
          <div className="col-xxl-4 col-lg-6">
            <div className="d-flex flex-column justify-content-between h-100">
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
          </div>
          <div className="col-xxl-6 col-lg-6">
            <div className="accordion-faq_list">
              {services.map((service, i) => (
                <div
                  key={i}
                  className="accordion-faq_item effectFade fadeUp"
                  onMouseEnter={() => handleMouseEnter(i)}
                  onMouseLeave={handleMouseLeave}
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
          <div className="services-image effectFade fadeUp">
            <img
              src={displayedImage}
              alt=""
              style={{ opacity: imgOpacity, transition: 'opacity 0.2s ease-in-out' }}
            />
          </div>
        </div>
      </div>
    </div>
  );
}
