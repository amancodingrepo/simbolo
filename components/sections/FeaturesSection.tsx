export default function FeaturesSection() {
  return (
    <div className="section-features flat-spacing pt-0">
      <div className="container">
        <div className="heading-section center mb-64">
          <div className="heading-sub fw-semibold effectFade fadeUp">Expertise</div>
          <div className="heading-title text-gradient-3 effectFade fadeRotateX">Everything You Need to Dominate Your Market</div>
        </div>
      </div>
      <div className="position-relative">
        <div className="container z-5">
          <div className="features-wrap justify-content-between">
            <div className="features-col col-left lg-mb-24">
              <div className="features-item effectFade fadeUp">
                <i className="icon icon-video-solid"></i>
                <h6 className="title fw-semibold">Cinematic Video Production</h6>
                <p className="text-secondary">
                  Commercial ads, brand films, and product shoots with industry-leading cameras, lighting, and art direction that command premium pricing.
                </p>
              </div>
              <div className="features-item effectFade fadeUp">
                <i className="icon icon-desktop-solid"></i>
                <h6 className="title fw-semibold">High-Converting Web Design</h6>
                <p className="text-secondary">
                  Custom e-commerce and marketing websites engineered for speed, user experience, and frictionless checkout flows.
                </p>
              </div>
              <div className="features-item effectFade fadeUp">
                <i className="icon icon-tiktok-filled"></i>
                <h6 className="title fw-semibold">Social Media Domination</h6>
                <p className="text-secondary">
                  Instagram reels, TikToks, and trending content delivered at volume to keep your brand hyper-relevant and consistently growing.
                </p>
              </div>
            </div>
            <div className="features-center flex-shrink">
              <img src="/assets/images/logo/logo-1.svg" alt="" />
            </div>
            <div className="features-col col-right">
              <div className="features-item effectFade fadeUp" data-delay="0.1">
                <i className="icon icon-crop-alt-solid"></i>
                <h6 className="title fw-semibold">Precision Editing &amp; Post-Production</h6>
                <p className="text-secondary">
                  Advanced color grading, sound design, and retention-optimized editing that keeps viewers watching until the call-to-action.
                </p>
              </div>
              <div className="features-item effectFade fadeUp" data-delay="0.1">
                <i className="icon icon-chart-line-solid"></i>
                <h6 className="title fw-semibold">Performance Marketing</h6>
                <p className="text-secondary">
                  Internet marketing and ad distribution strategies that put your high-end media directly in front of buyers with high intent.
                </p>
              </div>
              <div className="features-item effectFade fadeUp" data-delay="0.1">
                <i className="icon icon-user-friends-solid"></i>
                <h6 className="title fw-semibold">Corporate &amp; Event Mastery</h6>
                <p className="text-secondary">
                  Polished interviews and dynamic event coverage that build trust with investors, partners, and high-ticket clients.
                </p>
              </div>
            </div>
          </div>
        </div>
        <div className="side-line-main d-none d-lg-block wow fadeIn">
          <div className="container">
            <div className="row">
              <div className="col-lg-4 mx-auto">
                <div className="side-line-wrap">
                  <div className="link-break-line left">
                    <div className="link-break-line">
                      <span className="item top"></span>
                      <span className="item bottom"></span>
                    </div>
                  </div>
                  <div className="link-break-center">
                    <span className="simu-electric left"></span>
                    <span className="simu-electric right"></span>
                  </div>
                  <div className="link-break-line right">
                    <span className="item top"></span>
                    <span className="item bottom"></span>
                  </div>
                </div>
              </div>
            </div>
          </div>
        </div>
      </div>
    </div>
  );
}
