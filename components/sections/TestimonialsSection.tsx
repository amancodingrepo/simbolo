'use client';

interface TestimonialItem {
  type?: 'stars' | 'quote';
  text: string;
  name: string;
  role: string;
}

interface TestimonialsSectionProps {
  headingSubtitle?: string;
  headingTitle?: string;
  testimonials?: TestimonialItem[];
}

const defaultTestimonials: TestimonialItem[] = [
  {
    type: 'stars',
    text: 'Simbolo Multimedia is a highly professional digital marketing agency in Indore. Their work in SEO and Google Business Profile optimisation significantly improved our visibility. Good support and timely service.',
    name: 'AUVEDA HERBALS',
    role: '2 months ago',
  },
  {
    type: 'stars',
    text: 'The Simbolo Multimedia digital marketing agency in Indore is an excellent agency. They have helped us grow our social media, ads, and e-commerce business very effectively.',
    name: 'Kavman',
    role: '2 months ago',
  },
  {
    type: 'stars',
    text: 'Great Experience with the Simbolo Multimedia. One of the Best Social Media Marketing Services in Indore for SEO and Online Promotion. Highly Recommended.',
    name: 'nashtagruh',
    role: '2 months ago',
  },
  {
    type: 'stars',
    text: 'Good service, professional team, and strong results in SEO and digital marketing.',
    name: 'Pratham Veda',
    role: 'Edited a day ago',
  },
];

export default function TestimonialsSection({
  headingSubtitle = 'Testimonials',
  headingTitle = 'Hear From The <br /> Brands We\'ve Scaled',
  testimonials = defaultTestimonials,
}: TestimonialsSectionProps) {
  return (
    <div className="section-testimonials flat-spacing pt-0">
      <div className="container">
        <div className="heading-section mb-48 text-center">
          <div className="heading-sub fw-semibold style-1 effectFade fadeUp">{headingSubtitle}</div>
          <div
            className="heading-title text-white effectFade fadeRotateX"
            dangerouslySetInnerHTML={{ __html: headingTitle }}
          />
        </div>
        <div className="row g-4">
          {testimonials.map((t, i) => (
            <div key={i} className="col-lg-6 col-md-6">
              <div className="testimonial-card h-100 p-4" style={{ background: 'rgba(255,255,255,0.05)', borderRadius: '12px', border: '1px solid rgba(255,255,255,0.08)' }}>
                <div className="top-icon d-flex gap-2 mb-3">
                  <i className="icon icon-star-solid" style={{ color: '#5ACEB3' }}></i>
                  <i className="icon icon-star-solid" style={{ color: '#5ACEB3' }}></i>
                  <i className="icon icon-star-solid" style={{ color: '#5ACEB3' }}></i>
                  <i className="icon icon-star-solid" style={{ color: '#5ACEB3' }}></i>
                  <i className="icon icon-star-solid" style={{ color: '#5ACEB3' }}></i>
                </div>
                <div className="text-body-1 text-white mb-4" style={{ lineHeight: '1.7' }}>{t.text}</div>
                <div className="d-flex align-items-center gap-3">
                  <div>
                    <div className="name text-white fw-semibold">{t.name}</div>
                    <div className="sub text-neutral-400" style={{ fontSize: '13px' }}>{t.role}</div>
                  </div>
                </div>
              </div>
            </div>
          ))}
        </div>
      </div>
    </div>
  );
}
