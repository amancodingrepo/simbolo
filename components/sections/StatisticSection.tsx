"use client";

interface StatItem {
  label: string;
  number: string | number;
  prefix?: string;
  quote?: string;
  author?: string;
  authorRole?: string;
}

interface StatisticSectionProps {
  headingSubtitle?: string;
  headingTitle?: string | React.ReactNode;
  stats?: StatItem[];
}

const defaultStats: StatItem[] = [
  {
    label: "AVERAGE ROAS INCREASE",
    number: 2.5,
    prefix: "x",
    quote:
      '"Simbolo completely overhauled our digital presence. The new brand film and web redesign doubled our conversion rate in the first quarter alone."',
    author: "Auveda Herbals",
    authorRole: "E-commerce Brand",
  },
  {
    label: "CLIENT RETENTION RATE",
    number: 92,
    prefix: "%",
    quote:
      '"Their team understood our brand instantly. The social content they produced consistently outperformed our internal benchmarks every single month."',
    author: "Kavman",
    authorRole: "D2C Fashion Label",
  },
  {
    label: "CAMPAIGNS DELIVERED",
    number: 500,
    prefix: "+",
    quote:
      '"From strategy to execution, Simbolo handled everything. Our Google Ads ROAS went from 1.8x to 4.2x within 60 days of onboarding."',
    author: "Nashta Gruh",
    authorRole: "F&B Chain",
  },
  {
    label: "REVENUE GENERATED FOR CLIENTS",
    number: "₹10",
    prefix: "Cr+",
    quote:
      '"The real estate walkthrough videos Simbolo produced helped us close three high-ticket units that had been sitting on the market for months."',
    author: "Pratham Veda Realty",
    authorRole: "Real Estate Developer",
  },
  {
    label: "BRANDS SCALED",
    number: 100,
    prefix: "+",
    quote:
      '"We tried three agencies before Simbolo. None of them came close to the results or the level of strategic thinking they bring to every project."',
    author: "Re-Coco",
    authorRole: "Lifestyle Brand",
  },
];

export default function StatisticSection({
  headingSubtitle = "Impact",
  headingTitle,
  stats = defaultStats,
}: StatisticSectionProps) {
  return (
    <div className="section-statistic">
      <div className="line"></div>
      <div className="container">
        <div className="row justify-content-between">
          <div className="col-md-6">
            <div className="heading-section mb-32">
              <div className="heading-sub fw-semibold style-1 effectFade fadeUp">
                {headingSubtitle}
              </div>
              <div className="heading-title text-white effectFade fadeRotateX">
                {headingTitle ?? (
                  <>
                    Creative that <br /> drives commerce
                  </>
                )}
              </div>
            </div>
            <p
              className="text-neutral-400 mb-32 effectFade fadeUp"
              style={{ lineHeight: "1.7", maxWidth: "420px" }}
            >
              Every rupee you invest with Simbolo is tracked, optimised, and
              pushed to deliver the highest possible return — across video, web,
              and paid media.
            </p>
            <div
              className="effectFade fadeUp"
              style={{ display: "flex", flexDirection: "column", gap: "14px" }}
            >
              {[
                "Brand films that convert, not just impress",
                "Paid media managed for peak ROI",
                "Web experiences built for revenue",
                "Full-funnel strategy from day one",
              ].map((point, i) => (
                <div
                  key={i}
                  style={{ display: "flex", alignItems: "center", gap: "12px" }}
                >
                  <span
                    style={{
                      width: "8px",
                      height: "8px",
                      borderRadius: "50%",
                      background: "#5ACEB3",
                      flexShrink: 0,
                    }}
                  />
                  <span
                    className="text-neutral-300"
                    style={{ fontSize: "0.95rem" }}
                  >
                    {point}
                  </span>
                </div>
              ))}
            </div>
          </div>
          <div className="col-md-6">
            <div className="statistic-slider">
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
                <div className="swiper-wrapper effectFade fadeUp no-div">
                  {stats.map((stat, i) => (
                    <div key={i} className="swiper-slide">
                      {stat.quote && (
                        <div
                          className="text text-body-1 text-neutral-400 mb-24"
                          style={{ lineHeight: "1.7", fontStyle: "italic" }}
                        >
                          {stat.quote}
                        </div>
                      )}
                      {(stat.author || stat.authorRole) && (
                        <div className="d-flex align-items-center gap-12 mb-24">
                          <div
                            style={{
                              width: "32px",
                              height: "2px",
                              background: "#5ACEB3",
                            }}
                          />
                          <div>
                            {stat.author && (
                              <span
                                className="text-white fw-semibold"
                                style={{ fontSize: "13px" }}
                              >
                                {stat.author}
                              </span>
                            )}
                            {stat.authorRole && (
                              <span
                                className="text-neutral-400"
                                style={{ fontSize: "13px" }}
                              >
                                {" "}
                                — {stat.authorRole}
                              </span>
                            )}
                          </div>
                        </div>
                      )}
                      <div className="title fw-semibold text-body-1">
                        {stat.label}
                      </div>
                      <div className="statistic-number">
                        <span className="number text-white fw-semibold">
                          {stat.number}
                        </span>
                        {stat.prefix && (
                          <span className="prefix text-brand">
                            {stat.prefix}
                          </span>
                        )}
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
