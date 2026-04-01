import Link from "next/link";
import TestimonialsSection from "@/components/sections/TestimonialsSection";

export default function WorkSingle() {
  return (
    <>
      {/* Hero */}
      <div className="section-hero v2">
        <div className="hero-image"></div>
        <div className="container">
          <div className="content-wrap text-center">
            <div className="title text-display-2 effectFade fadeRotateX">
              <span className="title1 fw-semibold text-gradient-1">
                3D Visualization
              </span>
              <br />
              <div className="title2 d-flex gap-20 justify-content-center flex-wrap">
                <span className="fw-semibold text-gradient-1">&amp; CGI</span>
              </div>
            </div>
            <p className="text effectFade fadeUp">
              Photorealistic 3D modeling and lighting architecture for the
              Luxxor ABK shower series, <br />
              delivering high-fidelity marketing assets that eliminated the need
              for expensive physical studio sets.
            </p>
            <div className="d-flex gap-16 justify-content-center flex-wrap mt-40 effectFade fadeUp">
              <Link href="/contact" className="tf-btn animate-btn">
                Start Your Project
                <i className="icon icon-arrow-top-right"></i>
              </Link>
              <Link href="/work" className="tf-btn-2 animate-btn">
                View All Works
                <i className="icon icon-arrow-top-right"></i>
              </Link>
            </div>
          </div>
        </div>
      </div>

      {/* Work Single */}
      <div id="works" className="section-work-single flat-spacing pt-0">
        <div className="container">
          {/* Cover image */}
          <div className="row mb-32">
            <div className="col-12">
              <div className="wrap-image mb-60 effectFade fadeZoom">
                <img src="/assets/images/section/work-single-1.jpg" alt="" />
              </div>

              <h2 className="heading fw-semibold mb-32 effectFade fadeUp">
                Project Details
              </h2>
              <p className="text-secondary effectFade fadeUp">
                The client, Luxxor ABK, required a premium visual suite for
                their new matte black fixture line. Traditional photography
                faced significant challenges: capturing the subtle textures of
                matte finishes without over-exposure and managing complex
                reflections on chrome components. They needed a way to showcase
                the product's sleek profile against a high-contrast
                architectural background to signal luxury and modern
                engineering.
                <br />
                <br />
                We developed a high-topology 3D digital twin of the shower
                system, focusing on material physics. By utilizing specialized
                PBR (Physically Based Rendering) shaders, we accurately
                replicated the light absorption of the matte surfaces and the
                sharp refractions of the metallic joints. We placed the assets
                in a custom-designed virtual environment with warm, directional
                lighting to accentuate the product's silhouette, providing the
                client with "infinite" camera angles that physical photography
                could not achieve.
              </p>
            </div>
          </div>

          {/* Deliverables + Industry */}
          <div className="row mb-60">
            <div className="col-md-8 md-mb-24">
              <div className="text-body-1 fw-semibold text-secondary mb-15 effectFade fadeUp">
                DELIVERABLES
              </div>
              <div className="list-tags effectFade fadeUp">
                <a href="#" className="tags-item fw-semibold">
                  High-Topology 3D Modeling
                </a>
                <a href="#" className="tags-item fw-semibold">
                  Photorealistic Product Rendering
                </a>
                <a href="#" className="tags-item fw-semibold">
                  Material Environment Design
                </a>
                <a href="#" className="tags-item fw-semibold">
                  Architectural Lighting Setup
                </a>
              </div>
            </div>
            <div className="col-md-4">
              <div
                className="text-body-1 fw-semibold text-secondary mb-15 effectFade fadeUp"
                data-delay="0.1"
              >
                INDUSTRY
              </div>
              <div className="list-tags effectFade fadeUp" data-delay="0.1">
                <a href="#" className="tags-item fw-semibold">
                  Home Decor / Sanitaryware
                </a>
              </div>
            </div>
          </div>

          {/* Project Research */}
          <div className="row mb-60">
            <div className="col-12">
              <h2 className="heading fw-semibold mb-20 effectFade fadeUp">
                Project Research
              </h2>
              <p className="text-secondary effectFade fadeUp">
                We conducted a deep analysis of high-end interior design
                catalogs to identify current "warm-minimalism" trends. Research
                into consumer behavior showed that matte black fixtures are
                perceived as 30% more "premium" when shown in high-contrast,
                low-key lighting environments.
                <br />
                <br />
                We also ran virtual stress tests on the 3D meshes to ensure the
                curvature of the shower heads remained smooth at ultra-high 8K
                resolution for large-format print marketing. This ensured the
                final assets were versatile enough for everything from Instagram
                stories to trade-show banners without any quality degradation.
              </p>
            </div>
          </div>

          {/* Project Results */}
          <div className="row mb-60">
            <div className="col-12">
              <h2 className="heading fw-semibold mb-20 effectFade fadeUp">
                Project Results
              </h2>
              <p className="text-secondary effectFade fadeUp">
                The 3D assets became the centerpiece of the Luxxor ABK digital
                catalog, contributing to significant pre-launch buzz on trade
                platforms. By shifting to a CGI-first workflow, the client saved
                approximately 70% in production costs compared to building
                physical bathroom sets.
                <br />
                <br />
                The high-detail renders allowed for close-up technical shots
                used in assembly manuals and promotional web banners, ensuring a
                unified visual language across all customer touchpoints. The
                client has since expanded the CGI workflow across their entire
                product range.
              </p>
            </div>
          </div>

          {/* CTA */}
          <div className="row mb-60">
            <div className="col-12 text-center">
              <Link href="/contact" className="tf-btn animate-btn">
                Get a Free Strategy Session
                <i className="icon icon-arrow-top-right"></i>
              </Link>
            </div>
          </div>

          {/* Bottom image pair */}
          <div className="row">
            <div className="col-md-6 md-mb-24">
              <div className="image effectFade fadeUp">
                <img src="/assets/images/section/work-single-3.jpg" alt="" />
              </div>
            </div>
            <div className="col-md-6">
              <div className="image effectFade fadeUp" data-delay="0.1">
                <img src="/assets/images/section/work-single-4.jpg" alt="" />
              </div>
            </div>
          </div>
        </div>
      </div>

      {/* Testimonials */}
      <div className="box-black">
        <div className="light-box"></div>
        <img
          className="light-top"
          src="/assets/images/item/light-top.png"
          alt=""
        />
        <img
          className="light-bot"
          src="/assets/images/item/light-bot.png"
          alt=""
        />
        <TestimonialsSection />
      </div>

      {/* Next Project */}
      <div className="section-featured-works flat-spacing">
        <div className="container">
          <div className="heading-section center mb-64">
            <div className="heading-sub fw-semibold effectFade fadeUp">
              Project
            </div>
            <div className="heading-title text-gradient-3 effectFade fadeRotateX">
              Next Project
            </div>
          </div>
          <div className="featured-works-list position-relative">
            <div className="element effectFade fadeUp">
              <div className="featured-works-item">
                <div className="image main-mouse-hover">
                  <img
                    src="/assets/images/section/featured-works-2.jpg"
                    alt=""
                  />
                  <a href="/work/single" className="tf-mouse view-project h6">
                    View Project
                    <i className="icon icon-arrow-top-right"></i>
                  </a>
                </div>
                <div className="content">
                  <div className="pagi-dot">
                    <span></span>
                    <span className="active"></span>
                    <span></span>
                    <span></span>
                  </div>
                  <div className="bot">
                    <h4 className="heading fw-semibold">
                      Product <br /> Photography
                    </h4>
                    <div className="grid-text">
                      <div className="item">
                        <div className="title text-secondary">DESCRIPTION</div>
                        <div className="text-body-3 fw-semibold">
                          High-clarity product photography for LC Gluta Glow
                          driving a 28% CTR lift across Meta ad campaigns.
                        </div>
                      </div>
                      <div className="item">
                        <div className="title text-secondary">DELIVERABLES</div>
                        <div className="fw-semibold">
                          E-commerce Catalog Shots, Lifestyle Creative Direction
                        </div>
                      </div>
                      <div className="item">
                        <div className="title text-secondary">INDUSTRY</div>
                        <div className="fw-semibold">Health & Beauty / D2C</div>
                      </div>
                    </div>
                  </div>
                </div>
              </div>
            </div>
          </div>
        </div>
      </div>
    </>
  );
}
