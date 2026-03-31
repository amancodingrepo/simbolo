export default function BenefitsSection() {
  return (
    <div className="section-benefits flat-spacing pt-0">
      <div className="container">
        <div className="heading-section center mb-70">
          <div className="heading-sub fw-semibold effectFade fadeUp">Benefits</div>
          <div className="heading-title text-gradient-3 effectFade fadeRotateX">Why Brands Partner With Us</div>
        </div>
        <div className="row mb-24">
          <div className="col-lg-7">
            <div className="benefits-box benefits-progress">
              <div className="benefits-progress-inner">
                <div className="benefits-progress-item">
                  <div className="progress-line" data-progress="60"></div>
                  <div className="progress-text fw-semibold">
                    <i className="icon icon-bullseye-solid"></i>
                    ROAS
                  </div>
                </div>
                <div className="benefits-progress-item">
                  <div className="progress-line" data-progress="100"></div>
                  <div className="progress-text fw-semibold">
                    <i className="icon icon-tachometer-alt-solid"></i>
                    Conversion Rate
                  </div>
                </div>
                <div className="benefits-progress-item">
                  <div className="progress-line" data-progress="40"></div>
                  <div className="progress-text fw-semibold">
                    <i className="icon icon-shield-alt-solid"></i>
                    Engagement
                  </div>
                </div>
                <div className="benefits-progress-item">
                  <div className="progress-line" data-progress="80"></div>
                  <div className="progress-text fw-semibold">
                    <i className="icon icon-coins-solid"></i>
                    Sales Velocity
                  </div>
                </div>
              </div>
              <div className="content">
                <h6 className="fw-semibold title">Outcome over Output</h6>
                <p className="text text-secondary">We don't sell "videos" or "websites." We sell increased sales, higher engagement, and brand scaling. Every deliverable is tied to a business metric.</p>
              </div>
            </div>
          </div>
          <div className="col-lg-5">
            <div className="benefits-box benefits-step effectFade fadeUp">
              <div className="benefits-step-inner">
                <div className="line-step"></div>
                <div className="step-item">
                  <i className="icon icon-check-solid"></i>
                </div>
                <div className="step-item">
                  <i className="icon icon-check-solid"></i>
                </div>
                <div className="step-item">
                  <i className="icon icon-check-solid"></i>
                </div>
              </div>
              <div className="content">
                <h6 className="fw-semibold title">End-to-End Capabilities</h6>
                <p className="text text-secondary">From the initial creative concept and film production to web development and ad distribution, we control the entire growth pipeline.</p>
              </div>
            </div>
          </div>
        </div>
        <div className="row">
          <div className="col-lg-5">
            <div className="benefits-box benefits-secure">
              <div className="benefits-secure-inner text-center">
                <img src="/assets/images/item/benefits-1.svg" alt="" />
              </div>
              <div className="content">
                <h6 className="fw-semibold title">Platform-Native Expertise</h6>
                <p className="text text-secondary">We know what works on a cinema screen versus an Instagram feed. Our content is meticulously formatted and paced for where your audience actually lives.</p>
              </div>
            </div>
          </div>
          <div className="col-lg-7">
            <div className="benefits-box benefits-design">
              <div className="benefits-design-inner">
                <img className="item-img-1" src="/assets/images/item/benefits-2.svg" alt="" />
                <img className="item-img-2 rightleft" src="/assets/images/item/benefits-3.png" alt="" />
                <img className="item-img-3 updown" src="/assets/images/item/benefits-4.png" alt="" />
              </div>
              <div className="content">
                <h6 className="fw-semibold title">Frictionless Execution</h6>
                <p className="text text-secondary">You run your business; we handle the growth. We bring full production crews, state-of-the-art gear, and strategic minds so you don't have to micromanage.</p>
              </div>
            </div>
          </div>
        </div>
      </div>
    </div>
  );
}
