export default function TeamSection() {
  return (
    <div className="section-team flat-spacing">
      <div className="container">
        <div className="heading-section center mb-64">
          <div className="heading-sub fw-semibold style-1 effectFade fadeUp">The Team</div>
          <div className="heading-title text-white effectFade fadeRotateX">The Creative Minds <br /> Scaling Your Brand</div>
        </div>
        <div className="row justify-content-center">
          <div className="col-lg-4 col-md-8 lg-mb-24">
            <div className="team-item h-100 effectFade fadeUp">
              <div className="image">
                <img src="/assets/images/team/team-1.jpg" alt="" />
              </div>
              <a href="#" className="name h6 fw-semibold">Ava Collins</a>
              <div className="sub text-body-1">Creative Director</div>
              <div className="tf-social justify-content-center">
                <a href="#" className="social-item">
                  <i className="icon icon-twitter-x"></i>
                </a>
                <a href="#" className="social-item">
                  <i className="icon icon-linkedin-in"></i>
                </a>
                <a href="#" className="social-item">
                  <i className="icon icon-instagram"></i>
                </a>
              </div>
            </div>
          </div>
          <div className="col-lg-4 col-md-6 lg-mb-24">
            <div className="team-item style-1 mb-24 effectFade fadeUp">
              <div className="top">
                <div className="image">
                  <img src="/assets/images/team/team-2.jpg" alt="" />
                </div>
                <div className="tf-social justify-content-center">
                  <a href="#" className="social-item">
                    <i className="icon icon-instagram"></i>
                  </a>
                  <a href="#" className="social-item">
                    <i className="icon icon-linkedin-in"></i>
                  </a>
                </div>
              </div>
              <a href="#" className="name text-body-1 fw-semibold">Noah Reed</a>
              <div className="sub">Head of Production</div>
            </div>
            <div className="team-item style-1 effectFade fadeUp">
              <div className="top">
                <div className="image">
                  <img src="/assets/images/team/team-3.jpg" alt="" />
                </div>
                <div className="tf-social justify-content-center">
                  <a href="#" className="social-item">
                    <i className="icon icon-instagram"></i>
                  </a>
                  <a href="#" className="social-item">
                    <i className="icon icon-linkedin-in"></i>
                  </a>
                </div>
              </div>
              <a href="#" className="name text-body-1 fw-semibold">Lucas Hayes</a>
              <div className="sub">Lead Web Architect</div>
            </div>
          </div>
          <div className="col-lg-4 col-md-6">
            <div className="team-item style-1 mb-24 effectFade fadeUp" data-delay="0.1">
              <div className="top">
                <div className="image">
                  <img src="/assets/images/team/team-4.jpg" alt="" />
                </div>
                <div className="tf-social justify-content-center">
                  <a href="#" className="social-item">
                    <i className="icon icon-instagram"></i>
                  </a>
                  <a href="#" className="social-item">
                    <i className="icon icon-linkedin-in"></i>
                  </a>
                </div>
              </div>
              <a href="#" className="name text-body-1 fw-semibold">Jordan Brooks</a>
              <div className="sub">Senior Editor &amp; Colorist</div>
            </div>
            <div className="team-item style-1 effectFade fadeUp" data-delay="0.1">
              <div className="top">
                <div className="image">
                  <img src="/assets/images/team/team-5.jpg" alt="" />
                </div>
                <div className="tf-social justify-content-center">
                  <a href="#" className="social-item">
                    <i className="icon icon-instagram"></i>
                  </a>
                  <a href="#" className="social-item">
                    <i className="icon icon-linkedin-in"></i>
                  </a>
                </div>
              </div>
              <a href="#" className="name text-body-1 fw-semibold">Erin Park</a>
              <div className="sub">Digital Strategy Lead</div>
            </div>
          </div>
        </div>
      </div>
    </div>
  );
}
