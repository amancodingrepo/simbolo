'use client';

import Link from 'next/link';

interface HeroSectionProps {
  subTitle?: string;
  title1?: string;
  title2?: string;
  description?: string;
  primaryButtonText?: string;
  primaryButtonHref?: string;
  secondaryButtonText?: string;
  secondaryButtonHref?: string;
  showScrollMore?: boolean;
  variant?: 'default' | 'v1';
}

export default function HeroSection({
  subTitle = 'Growth-Driven Media & Marketing Agency',
  title1 = 'We Help Brands Scale.',
  title2 = '',
  description = "We don't just shoot videos or build websites; we engineer visual campaigns and digital ecosystems that capture attention, drive traffic, and multiply revenue.",
  primaryButtonText = 'See Our Results',
  primaryButtonHref = '/work',
  secondaryButtonText = 'Book a Strategy Call',
  secondaryButtonHref = '/contact',
  showScrollMore = true,
  variant = 'default',
}: HeroSectionProps) {
  return (
    <div className={`section-hero ${variant === 'v1' ? 'v1' : ''}`}>
      <div
        className="hero-image"
        style={{
          backgroundImage: 'url(/assets/images/section/heroo.png)',
          backgroundSize: 'cover',
          backgroundPosition: 'center',
          position: 'absolute',
          top: 0,
          left: 0,
          width: '100%',
          height: '100%',
          zIndex: -1
        }}
      ></div>
      <div className="container">
        <div className="content-wrap text-center">
          {variant === 'default' && (
            <div className="sub fw-semibold effectFade fadeUp">
              <svg width="20" height="20" viewBox="0 0 20 20" fill="none" xmlns="http://www.w3.org/2000/svg">
                <path d="M3.53252 12.0966C3.75106 11.5025 4.59108 11.5025 4.81645 12.0966L5.54037 14.0567C5.60866 14.2411 5.75891 14.3913 5.9433 14.4596L7.90335 15.1835C8.49751 15.4021 8.49751 16.2421 7.90335 16.4674L5.9433 17.1914C5.75891 17.2597 5.60866 17.4099 5.54037 17.5943L4.81645 19.5543C4.59791 20.1485 3.75789 20.1485 3.53252 19.5543L2.8086 17.5943C2.74031 17.4099 2.59006 17.2597 2.40566 17.1914L0.44562 16.4674C-0.14854 16.2489 -0.14854 15.4089 0.44562 15.1835L2.40566 14.4596C2.59006 14.3913 2.74031 14.2411 2.8086 14.0567L3.53252 12.0966Z" fill="url(#paint0_linear_580_105)" />
                <path d="M3.53252 12.0966C3.75106 11.5025 4.59108 11.5025 4.81645 12.0966L5.54037 14.0567C5.60866 14.2411 5.75891 14.3913 5.9433 14.4596L7.90335 15.1835C8.49751 15.4021 8.49751 16.2421 7.90335 16.4674L5.9433 17.1914C5.75891 17.2597 5.60866 17.4099 5.54037 17.5943L4.81645 19.5543C4.59791 20.1485 3.75789 20.1485 3.53252 19.5543L2.8086 17.5943C2.74031 17.4099 2.59006 17.2597 2.40566 17.1914L0.44562 16.4674C-0.14854 16.2489 -0.14854 15.4089 0.44562 15.1835L2.40566 14.4596C2.59006 14.3913 2.74031 14.2411 2.8086 14.0567L3.53252 12.0966Z" fill="url(#paint1_linear_580_105)" />
                <path d="M11.4068 0.670991C11.7346 -0.223664 12.9981 -0.223664 13.3259 0.670991L14.7874 4.61157C14.8898 4.89157 15.1152 5.11011 15.3952 5.21938L19.3358 6.68088C20.2304 7.00869 20.2304 8.27214 19.3358 8.59995L15.3952 10.0614C15.1152 10.1639 14.8967 10.3893 14.7874 10.6693L13.3259 14.6098C12.9981 15.5045 11.7346 15.5045 11.4068 14.6098L9.94534 10.6693C9.8429 10.3893 9.61753 10.1707 9.33752 10.0614L5.39694 8.59995C4.50229 8.27214 4.50229 7.00869 5.39694 6.68088L9.33752 5.21938C9.61753 5.11694 9.83607 4.89157 9.94534 4.61157L11.4068 0.670991Z" fill="url(#paint2_linear_580_105)" />
                <path d="M11.4068 0.670991C11.7346 -0.223664 12.9981 -0.223664 13.3259 0.670991L14.7874 4.61157C14.8898 4.89157 15.1152 5.11011 15.3952 5.21938L19.3358 6.68088C20.2304 7.00869 20.2304 8.27214 19.3358 8.59995L15.3952 10.0614C15.1152 10.1639 14.8967 10.3893 14.7874 10.6693L13.3259 14.6098C12.9981 15.5045 11.7346 15.5045 11.4068 14.6098L9.94534 10.6693C9.8429 10.3893 9.61753 10.1707 9.33752 10.0614L5.39694 8.59995C4.50229 8.27214 4.50229 7.00869 5.39694 6.68088L9.33752 5.21938C9.61753 5.11694 9.83607 4.89157 9.94534 4.61157L11.4068 0.670991Z" fill="url(#paint3_linear_580_105)" />
                <defs>
                  <linearGradient id="paint0_linear_580_105" x1="10.2993" y1="-1.30435" x2="21.6031" y2="11.1057" gradientUnits="userSpaceOnUse">
                    <stop offset="1" stopColor="#555D64" />
                    <stop offset="1" stopColor="#292C2E" />
                  </linearGradient>
                  <linearGradient id="paint1_linear_580_105" x1="10.0034" y1="0" x2="10.0034" y2="20" gradientUnits="userSpaceOnUse">
                    <stop offset="1" stopColor="#EA2B16" />
                    <stop offset="1" stopColor="#FF3B26" />
                  </linearGradient>
                  <linearGradient id="paint2_linear_580_105" x1="10.2993" y1="-1.30435" x2="21.6031" y2="11.1057" gradientUnits="userSpaceOnUse">
                    <stop offset="1" stopColor="#555D64" />
                    <stop offset="1" stopColor="#292C2E" />
                  </linearGradient>
                  <linearGradient id="paint3_linear_580_105" x1="10.0034" y1="0" x2="10.0034" y2="20" gradientUnits="userSpaceOnUse">
                    <stop offset="1" stopColor="#EA2B16" />
                    <stop offset="1" stopColor="#FF3B26" />
                  </linearGradient>
                </defs>
              </svg>
              {subTitle}
            </div>
          )}
          <div className="title text-display-2 effectFade fadeRotateX">
            <span className="title1 fw-semibold text-gradient-1">{title1}</span>
            <br />
            <div className="title2 d-flex gap-20 justify-content-center flex-wrap">
              <span className="fw-semibold text-gradient-1">{title2}</span>
              <div className="title-icon">
                <div className="box"></div>
                <div className="title-icon-wrap">
                  <img className="img-1 img-transform-3" src="/assets/images/item/hero-1.svg" alt="" />
                  <img className="img-2 img-transform-3" src="/assets/images/item/hero-2.svg" alt="" />
                  <img className="img-3 img-transform-3" src="/assets/images/item/hero-3.svg" alt="" />
                </div>
              </div>
            </div>
          </div>
          <p className="text effectFade fadeUp">{description}</p>
          <div className="bot-btns effectFade fadeRotateX">
            <Link href={primaryButtonHref} className="tf-btn">
              {primaryButtonText}
            </Link>
            <Link href={secondaryButtonHref} className="tf-btn-2">
              {secondaryButtonText}
            </Link>
          </div>
        </div>
      </div>
      {showScrollMore && (
        <a href="#about" className="scroll-more">
          <span className="fw-semibold link1">See how we scale</span>
          <i className="icon icon-long-arrow-alt-down-solid"></i>
        </a>
      )}
    </div>
  );
}
