'use client';

interface StatItem {
  label: string;
  number: string | number;
  prefix?: string;
}

interface StatisticSectionProps {
  headingSubtitle?: string;
  headingTitle?: string | React.ReactNode;
  description?: string;
  stats?: StatItem[];
}

const defaultStats: StatItem[] = [
  { label: 'AVERAGE ROAS INCREASE', number: 2.5, prefix: 'x' },
  { label: 'CLIENT RETENTION RATE', number: 92, prefix: '%' },
  { label: 'CAMPAIGNS DELIVERED', number: 500, prefix: '+' },
];

export default function StatisticSection({
  headingSubtitle = 'Impact',
  headingTitle,
  description = '"Simbolo completely overhauled our digital presence. The new brand film and web redesign doubled our conversion rate in the first quarter alone."',
  stats = defaultStats,
}: StatisticSectionProps) {
  return (
    <div className="section-statistic">
      <div className="line"></div>
      <div className="container">
        <div className="row justify-content-between">
          <div className="col-md-6">
            <div className="heading-section mb-48">
              <div className="heading-sub fw-semibold style-1 effectFade fadeUp">{headingSubtitle}</div>
              <div className="heading-title text-white effectFade fadeRotateX">
                {headingTitle ?? (
                  <>Creative that <br /> drives commerce</>
                )}
              </div>
            </div>
          </div>
          <div className="col-md-6">
            <div className="statistic-slider">
              <div className="text text-body-1 text-neutral-400 effectFade fadeUp">
                {description}
              </div>
              <div className="swiper swiper-progressbar">
                <div className="group-slider effectFade fadeUp">
                  <div className="progress-bar">
                    <div className="progress-fill" id="progressBar"></div>
                  </div>
                  <div className="group-btn-slider">
                    <div className="btn-slider progressbar-prev">
                      <i className="icon icon-angle-left-solid"></i>
                    </div>
                    <div className="btn-slider progressbar-next">
                      <i className="icon icon-angle-right-solid"></i>
                    </div>
                  </div>
                </div>
                <div className="swiper-wrapper effectFade fadeUp">
                  {stats.map((stat, i) => (
                    <div key={i} className="swiper-slide">
                      <div className="title fw-semibold text-body-1">{stat.label}</div>
                      <div className="statistic-number">
                        <span className="number text-white fw-semibold">{stat.number}</span>
                        {stat.prefix && <span className="prefix text-brand">{stat.prefix}</span>}
                      </div>
                    </div>
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
