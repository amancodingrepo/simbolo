export default function ProcessSection() {
  return (
    <div className="section-process flat-spacing pt-0">
      <div className="container">
        <div className="tf-btn-swiper-main">
        <div className="row">
          <div className="col-lg-5">
            <div className="process-heading h-100">
              <div className="heading-section mb-80">
                <div className="heading-sub fw-semibold effectFade fadeUp">Process</div>
                <div className="heading-title text-gradient-3 effectFade fadeRotateX">How We <br /> Drive Growth</div>
              </div>
              <div className="group-btn-slider">
                <div className="nav-prev-swiper">
                  <i className="icon icon-angle-left-solid"></i>
                </div>
                <div className="nav-next-swiper">
                  <i className="icon icon-angle-right-solid"></i>
                </div>
              </div>
            </div>
          </div>
          <div className="col-lg-7">
            <div className="process-slide">
              <div dir="ltr" className="swiper tf-swiper swiper-box-shadow" data-preview="1.78" data-tablet="2" data-mobile-sm="1" data-mobile="1" data-loop="false" data-center="false" data-space-lg="24" data-space-md="24" data-space="30">
                <div className="swiper-wrapper">
                  <div className="swiper-slide">
                    <div className="process-card">
                      <i className="icon icon-search-solid"></i>
                      <div className="content">
                        <h4 className="title fw-semibold">Strategy &amp; Audience Mapping</h4>
                        <p className="text text-secondary">We audit your current positioning, identify revenue bottlenecks, and reverse-engineer a media and marketing strategy based on concrete KPIs.</p>
                      </div>
                      <div className="bot">
                        <div className="time fw-semibold"></div>
                        <div className="number">
                          <span className="text-neutral-400">01</span>
                          <span className="text-neutral-200">/03</span>
                        </div>
                      </div>
                    </div>
                  </div>
                  <div className="swiper-slide">
                    <div className="process-card">
                      <i className="icon icon-bolt-solid"></i>
                      <div className="content">
                        <h4 className="title fw-semibold">Production &amp; Development</h4>
                        <p className="text text-secondary">We execute high-end video shoots, design web assets, and edit compelling narratives focused entirely on maximizing viewer retention and conversion.</p>
                      </div>
                      <div className="bot">
                        <div className="time fw-semibold"></div>
                        <div className="number">
                          <span className="text-neutral-400">02</span>
                          <span className="text-neutral-200">/03</span>
                        </div>
                      </div>
                    </div>
                  </div>
                  <div className="swiper-slide">
                    <div className="process-card">
                      <i className="icon icon-user-check-solid-1"></i>
                      <div className="content">
                        <h4 className="title fw-semibold">Distribution &amp; Scaling</h4>
                        <p className="text text-secondary">Assets mean nothing without eyeballs. We deploy the content across targeted channels, tracking metrics and optimizing for the highest possible ROI.</p>
                      </div>
                      <div className="bot">
                        <div className="time fw-semibold"></div>
                        <div className="number">
                          <span className="text-neutral-400">03</span>
                          <span className="text-neutral-200">/03</span>
                        </div>
                      </div>
                    </div>
                  </div>
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
