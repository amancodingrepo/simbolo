'use client';

import Link from 'next/link';

interface CounterProps {
  speed?: number;
  to?: number;
  inViewport?: boolean;
}

interface TestimonialProps {
  image?: string;
  quote?: string;
  name?: string;
  role?: string;
}

interface AboutSectionProps {
  /* New flexible props (used by about/page.tsx style) */
  sectionId?: string;
  heading?: string;
  /* Original named props */
  headingSubtitle?: string;
  headingTitle?: string;
  locationText?: string;
  location?: string;
  description?: string;
  trustpilotStars?: number;
  clientCount?: number;
  clientCounterProps?: CounterProps;
  ctaButtonText?: string;
  ctaButtonHref?: string;
  /* Testimonial - either flat props or object */
  testimonial?: TestimonialProps;
  testimonialText?: string;
  testimonialAuthor?: string;
  testimonialRole?: string;
  testimonialImage?: string;
}

export default function AboutSection({
  sectionId = 'about',
  heading,
  headingSubtitle = 'Who We Are',
  headingTitle,
  locationText = 'Available for global campaigns',
  location = 'Global',
  description = 'Trusted by ambitious brands to turn visual content and digital experiences into powerful revenue engines.',
  trustpilotStars = 5,
  clientCount = 100,
  clientCounterProps = { speed: 1500, to: 100, inViewport: true },
  ctaButtonText = 'Start a Project',
  ctaButtonHref = '/contact',
  testimonial,
  testimonialText,
  testimonialAuthor,
  testimonialRole,
  testimonialImage = '/assets/images/section/quotes-1.jpg',
}: AboutSectionProps) {
  // Resolve heading: prefer `heading` alias, then `headingTitle`
  const resolvedTitle = heading ?? headingTitle ?? 'Creative Excellence Meets Measurable ROI';

  // Resolve testimonial: support both object and flat props
  const resolvedTestimonial: TestimonialProps = testimonial ?? {
    image: testimonialImage,
    quote: testimonialText ?? "Great marketing isn't just seen; it's felt—and then it converts.",
    name: testimonialAuthor ?? 'Creative Director',
    role: testimonialRole ?? "Simbolo",
  };

  return (
    <div className="section-about-us flat-spacing" id={sectionId}>
      <div className="container">
        <div className="row">
          <div className="col-12">
            <div className="heading-section">
              <div className="heading-sub fw-semibold effectFade fadeUp">{headingSubtitle}</div>
              <div className="heading-title text-gradient-2 effectFade fadeRotateX">{resolvedTitle}</div>
            </div>
          </div>
          <div className="col-xxl-7 col-lg-6 lg-mb-24">
            <div className="col-left">
              <div className="position-relative z-5">
                <div className="sub text-white">
                  <span className="dot"></span>
                  {locationText}
                </div>
                <h5 className="title fw-semibold text-white">
                  Based in <span className="text-brand">Indore</span>
                </h5>
                <Link href={ctaButtonHref} className="tf-btn">
                  {ctaButtonText}
                </Link>
              </div>
              <img className="effectFade fadeRotateX" src="assets/images/item/earth.png" alt="Earth globe" />
            </div>
          </div>
          <div className="col-xxl-5 col-lg-6">
            <div className="review-box mb-24">
              <div className="desc fw-semibold text-body-1">{description}</div>
              <div className="d-flex justify-content-between flex-wrap align-items-end gap-12">
                <div>
                  <div className="d-flex gap-4 text mb-10">
                    <svg width="26" height="24" viewBox="0 0 26 24" fill="none" xmlns="http://www.w3.org/2000/svg">
                      <path d="M12.6792 18.3019L18.1887 16.9057L20.4906 24L12.6792 18.3019ZM25.3585 9.13208H15.6604L12.6792 0L9.69811 9.13208H0L7.84906 14.7925L4.86792 23.9245L12.717 18.2641L17.5472 14.7925L25.3585 9.13208Z" fill="#219653" />
                    </svg>
                    Top Rated Agency
                  </div>
                  <div className="d-flex gap-2">
                    {Array.from({ length: trustpilotStars }).map((_, i) => (
                      <svg key={i} width="24" height="24" viewBox="0 0 24 24" fill="none" xmlns="http://www.w3.org/2000/svg">
                        <rect width="24" height="24" fill="#3F3F46" />
                        <path d="M11.9996 16.4114L15.6496 15.4341L17.1746 20.4001L11.9996 16.4114ZM20.3996 9.99255H13.9746L11.9996 3.6001L10.0246 9.99255H3.59961L8.79961 13.9548L6.82461 20.3473L12.0246 16.385L15.2246 13.9548L20.3996 9.99255Z" fill="white" />
                      </svg>
                    ))}
                  </div>
                </div>
                <div className="counter text-neutral-200">
                  <span
                    className="number"
                    data-speed={clientCounterProps.speed}
                    data-to={clientCounterProps.to}
                    data-inviewport={clientCounterProps.inViewport ? 'yes' : 'no'}
                  >
                    {clientCount}
                  </span>
                  <span>+</span>
                </div>
              </div>
            </div>
            <div className="box-quotes effectFade fadeRotateX">
              <div className="image">
                <img src={resolvedTestimonial.image} alt="Testimonial" />
              </div>
              <div className="content">
                <div className="icon mb-8">
                  <svg width="23" height="20" viewBox="0 0 23 20" fill="none" xmlns="http://www.w3.org/2000/svg">
                    <path d="M12.9375 20V10.3597C12.9375 7.72182 13.824 5.51559 15.5969 3.74101C17.4177 1.91847 19.8854 0.671463 23 0V6.40288C21.8021 6.78657 21.0115 7.26619 20.6281 7.84173C20.2448 8.3693 20.0292 9.04077 19.9813 9.85612H23V20H12.9375ZM0 20V10.3597C0 7.72182 0.886459 5.51559 2.65938 3.74101C4.48021 1.91847 6.94792 0.671463 10.0625 0V6.40288C8.9125 6.78657 8.12187 7.26619 7.69062 7.84173C7.30729 8.3693 7.09167 9.04077 7.04375 9.85612H10.0625V20H0Z" fill="#E4E4E7" />
                  </svg>
                </div>
                <div className="text-body-1 fw-semibold desc">{resolvedTestimonial.quote}</div>
                <div className="cite">
                  <div className="name text-body-3 fw-semibold">{resolvedTestimonial.name}</div>
                  <div className="line"></div>
                  <div className="sub text-body-3">{resolvedTestimonial.role}</div>
                </div>
              </div>
            </div>
          </div>
        </div>
      </div>
    </div>
  );
}
