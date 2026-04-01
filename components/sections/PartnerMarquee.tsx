'use client';

const partners = [
  { src: '/assets/aman/brand logo/1.png', alt: 'Partner 1' },
  { src: '/assets/aman/brand logo/3.png', alt: 'Partner 3' },
  { src: '/assets/aman/brand logo/4.png', alt: 'Partner 4' },
  { src: '/assets/aman/brand logo/5.png', alt: 'Partner 5' },
  { src: '/assets/aman/brand logo/6.png', alt: 'Partner 6' },
  { src: '/assets/aman/brand logo/8.png', alt: 'Partner 8' },
  { src: '/assets/aman/brand logo/9.png', alt: 'Partner 9' },
  { src: '/assets/aman/brand logo/10.png', alt: 'Partner 10' },
  { src: '/assets/aman/brand logo/11.png', alt: 'Partner 11' },
  { src: '/assets/aman/brand logo/12.png', alt: 'Partner 12' },
  { src: '/assets/aman/brand logo/13.png', alt: 'Partner 13' },
  { src: '/assets/aman/brand logo/14.png', alt: 'Partner 14' },
];

export default function PartnerMarquee() {
  return (
    <div style={{ padding: '24px 0' }}>
      <div style={{ display: 'flex', alignItems: 'center', gap: '0', paddingRight: '120px' }}>
        <div style={{ flexShrink: 0, paddingLeft: '120px', paddingRight: '0px', whiteSpace: 'nowrap' }}>
          <p style={{ margin: 0, fontSize: '19px', fontWeight: 600, color: '#999', lineHeight: '1.4' }}>
            Trusted by 100+<br />top-tier brands
          </p>
        </div>
        <div style={{ overflow: 'hidden', flex: 1, minWidth: 0, WebkitMaskImage: 'linear-gradient(to right, transparent 0%, black 10%, black 90%, transparent 100%)', maskImage: 'linear-gradient(to right, transparent 0%, black 10%, black 90%, transparent 100%)' }}>
          <style>{`
            @keyframes marquee {
              0% { transform: translateX(0); }
              100% { transform: translateX(-50%); }
            }
            .marquee-track {
              display: flex;
              align-items: center;
              width: max-content;
              animation: marquee 45s linear infinite;
            }
            .marquee-track:hover {
              animation-play-state: paused;
            }
            .marquee-item {
              width: 140px;
              display: flex;
              align-items: center;
              justify-content: center;
              flex-shrink: 0;
            }
          `}</style>
          <div className="marquee-track">
            {[...partners, ...partners].map((partner, index) => (
              <div key={index} className="marquee-item">
                <img
                  src={partner.src}
                  alt={partner.alt}
                  style={{ height: '160px', width: 'auto', maxWidth: '130px', objectFit: 'contain', opacity: 1, filter: 'grayscale(30%)' }}
                />
              </div>
            ))}
          </div>
        </div>
      </div>
    </div>
  );
}
