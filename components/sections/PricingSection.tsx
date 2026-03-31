'use client';

interface PlanFeature {
  text: string;
}

interface PricingPlan {
  icon: string;
  name: string;
  subtitle: string;
  priceMonth: string;
  priceYear: string;
  defaultPrice: string;
  defaultPer: string;
  ctaText?: string;
  ctaHref?: string;
  description: string;
  features: PlanFeature[];
  style?: 'default' | 'black';
}

interface PricingSectionProps {
  headingSubtitle?: string;
  headingTitle?: string;
  plans?: PricingPlan[];
}

const defaultPlans: PricingPlan[] = [
  {
    icon: 'icon-bolt-solid',
    name: 'Growth Catalyst',
    subtitle: 'For emerging brands',
    priceMonth: '0',
    priceYear: '0',
    defaultPrice: 'Custom',
    defaultPer: '',
    ctaText: 'Book a Call',
    ctaHref: '/contact',
    description: 'High-impact media assets to test offers and elevate your baseline aesthetic.',
    features: [
      { text: 'Strategy session' },
      { text: '1 Hero Brand Video or Commercial' },
      { text: '5 Short-form social assets' },
      { text: 'Foundational ad distribution strategy' },
    ],
    style: 'default',
  },
  {
    icon: 'icon-crown-solid',
    name: 'Scale & Dominate',
    subtitle: 'For established organizations',
    priceMonth: '0',
    priceYear: '0',
    defaultPrice: 'Custom',
    defaultPer: '',
    ctaText: 'Book a Call',
    ctaHref: '/contact',
    description: 'An end-to-end media and marketing engine designed for aggressive market capture.',
    features: [
      { text: 'Comprehensive digital strategy' },
      { text: 'Full web/e-commerce redesign' },
      { text: 'Monthly video production (Ads, Reels, Interviews)' },
      { text: 'Continuous campaign optimization' },
    ],
    style: 'black',
  },
];

import { useState } from 'react';

export default function PricingSection({
  headingSubtitle = 'Investment',
  headingTitle = 'Scalable growth packages tailored to your goals',
  plans = defaultPlans,
}: PricingSectionProps) {
  const [isAnnually, setIsAnnually] = useState(true);

  const formatPrice = (price: string) => {
    if (price === '0') return 'Custom';
    return '$' + Number(price).toLocaleString('en-US');
  };

  return (
    <div id="pricing" className="section-pricing flat-spacing">
      <div className="container">
        <div className="heading-section mb-80">
          <div className="heading-sub fw-semibold effectFade fadeUp">{headingSubtitle}</div>
          <div className="heading-title text-gradient-3 gap-8 effectFade fadeRotateX">
            {headingTitle} <br />
            <div className="h-8 d-none d-lg-block"></div>
            <input 
              type="checkbox" 
              id="pricingSwitch" 
              className="tf-switch-check" 
              checked={isAnnually} 
              onChange={() => setIsAnnually(!isAnnually)} 
            />&nbsp;single project / retainer
          </div>
        </div>
        <div className="row">
          {plans.map((plan, i) => (
            <div key={i} className={`col-lg-6 ${i < plans.length - 1 ? 'lg-mb-24' : ''}`}>
              <div
                className={`pricing-item h-100 effectFade fadeRotateX${plan.style === 'black' ? ' style-black' : ''}`}
                {...(i > 0 ? { 'data-delay': `${i * 0.1}` } : {})}
              >
                <div className="top d-flex gap-12 align-items-center">
                  <div className="d-flex gap-8 align-items-center">
                    <i className={`icon ${plan.icon} fs-24`}></i>
                    <div className="fw-semibold text">{plan.name}</div>
                  </div>
                  <div className="line"></div>
                  <div className={`fw-semibold ${plan.style === 'black' ? 'text-neutral-400' : 'text-secondary'}`}>{plan.subtitle}</div>
                </div>
                <div className="heading">
                  <div className="d-flex gap-14 align-items-end">
                    <div className="price-number fw-bold">
                      {formatPrice(isAnnually ? plan.priceYear : plan.priceMonth)}
                    </div>
                    {formatPrice(isAnnually ? plan.priceYear : plan.priceMonth) !== 'Custom' && (
                      <h6 className="price-per">{isAnnually ? '/ retainer' : '/ project'}</h6>
                    )}
                  </div>
                  <a href={plan.ctaHref ?? '/contact'} className="tf-btn">
                    {plan.ctaText ?? 'Get Started'}
                  </a>
                </div>
                <div className="line"></div>
                <div className="content">
                  <div>
                    <div className="title fw-semibold mb-4">What&apos;s included</div>
                    <div className="text fw-semibold">{plan.description}</div>
                  </div>
                  <ul className="list-text type-check">
                    {plan.features.map((f, j) => (
                      <li key={j}>
                        <i className="icon icon-check-solid"></i>
                        {f.text}
                      </li>
                    ))}
                  </ul>
                </div>
              </div>
            </div>
          ))}
        </div>
      </div>
    </div>
  );
}
