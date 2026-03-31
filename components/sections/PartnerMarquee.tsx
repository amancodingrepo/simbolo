'use client';

interface PartnerMarqueeProps {
  heading?: string;
  partners?: Array<{
    src: string;
    alt: string;
  }>;
  dataClone?: number;
}

const defaultPartners = [
  { src: '/assets/images/partner/partner-1.svg', alt: 'Partner 1' },
  { src: '/assets/images/partner/partner-2.svg', alt: 'Partner 2' },
  { src: '/assets/images/partner/partner-3.svg', alt: 'Partner 3' },
  { src: '/assets/images/partner/partner-4.svg', alt: 'Partner 4' },
  { src: '/assets/images/partner/partner-5.svg', alt: 'Partner 5' },
  { src: '/assets/images/partner/partner-6.svg', alt: 'Partner 6' },
];

export default function PartnerMarquee({
  heading = 'Scaling 100+ ambitious brands',
  partners = defaultPartners,
  dataClone = 5,
}: PartnerMarqueeProps) {
  return (
    <div className="section-partner">
      <div className="container">
        <div className="row">
          <div className="col-12">
            <div className="partner-wrap">
              <p className="text-secondary text fw-semibold">{heading}</p>
              <div className="infiniteSlide_tech_main d-grid">
                <div className="infiniteSlide infiniteSlide_partner" data-clone={dataClone}>
                  {partners.map((partner, index) => (
                    <img key={index} src={partner.src} alt={partner.alt} />
                  ))}
                </div>
              </div>
            </div>
          </div>
        </div>
      </div>
    </div>
  );
}
