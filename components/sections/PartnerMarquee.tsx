"use client";

const partners = [
  { src: "/assets/aman/brand logo/1.png", alt: "Partner 1" },
  { src: "/assets/aman/brand logo/3.png", alt: "Partner 3" },
  { src: "/assets/aman/brand logo/4.png", alt: "Partner 4" },
  { src: "/assets/aman/brand logo/5.png", alt: "Partner 5" },
  { src: "/assets/aman/brand logo/6.png", alt: "Partner 6" },
  { src: "/assets/aman/brand logo/8.png", alt: "Partner 8" },
  { src: "/assets/aman/brand logo/9.png", alt: "Partner 9" },
  { src: "/assets/aman/brand logo/10.png", alt: "Partner 10" },
  { src: "/assets/aman/brand logo/11.png", alt: "Partner 11" },
  { src: "/assets/aman/brand logo/12.png", alt: "Partner 12" },
  { src: "/assets/aman/brand logo/13.png", alt: "Partner 13" },
  { src: "/assets/aman/brand logo/14.png", alt: "Partner 14" },
];

export default function PartnerMarquee() {
  return (
    <div className="partner-marquee">
      <style>{`
        @keyframes partnerMarquee {
          0% { transform: translateX(0); }
          100% { transform: translateX(-50%); }
        }

        .partner-marquee {
          padding: 24px 0;
        }

        .partner-marquee__row {
          display: flex;
          align-items: center;
          gap: 0;
          padding-right: 120px;
        }

        .partner-marquee__label {
          flex-shrink: 0;
          padding-left: 120px;
          white-space: nowrap;
        }

        .partner-marquee__label p {
          margin: 0;
          font-size: 19px;
          font-weight: 600;
          color: #999;
          line-height: 1.4;
        }

        .partner-marquee__viewport {
          overflow: hidden;
          flex: 1;
          min-width: 0;
          -webkit-mask-image: linear-gradient(to right, transparent 0%, black 10%, black 90%, transparent 100%);
          mask-image: linear-gradient(to right, transparent 0%, black 10%, black 90%, transparent 100%);
        }

        .partner-marquee__track {
          display: flex;
          align-items: center;
          width: max-content;
          animation: partnerMarquee 40s linear infinite;
        }

        .partner-marquee__track:hover {
          animation-play-state: paused;
        }

        .partner-marquee__item {
          width: 140px;
          display: flex;
          align-items: center;
          justify-content: center;
          flex-shrink: 0;
        }

        .partner-marquee__item img {
          height: 160px;
          width: auto;
          max-width: 130px;
          object-fit: contain;
          opacity: 1;
          filter: grayscale(30%);
        }

        @media (max-width: 991px) {
          .partner-marquee__row {
            padding-right: 24px;
            gap: 16px;
          }

          .partner-marquee__label {
            padding-left: 24px;
          }

          .partner-marquee__item {
            width: 108px;
          }

          .partner-marquee__item img {
            height: 110px;
            max-width: 88px;
          }
        }

        @media (max-width: 767px) {
          .partner-marquee {
            padding: 16px 0;
          }

          .partner-marquee__row {
            flex-direction: column;
            align-items: flex-start;
            gap: 12px;
            padding-right: 0;
          }

          .partner-marquee__label {
            padding-left: 12px;
            white-space: normal;
          }

          .partner-marquee__label p {
            font-size: 16px;
          }

          .partner-marquee__viewport {
            width: 100%;
          }

          .partner-marquee__item {
            width: 88px;
          }

          .partner-marquee__item img {
            height: 76px;
            max-width: 70px;
          }
        }
      `}</style>

      <div className="partner-marquee__row">
        <div className="partner-marquee__label">
          <p>
            Trusted by 100+
            <br />
            top-tier brands
          </p>
        </div>

        <div className="partner-marquee__viewport">
          <div className="partner-marquee__track">
            {[...partners, ...partners].map((partner, index) => (
              <div key={index} className="partner-marquee__item">
                <img src={partner.src} alt={partner.alt} />
              </div>
            ))}
          </div>
        </div>
      </div>
    </div>
  );
}
