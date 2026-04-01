import { notFound } from 'next/navigation';
import { projects } from '@/lib/projects';
import TestimonialsSection from '@/components/sections/TestimonialsSection';

export function generateStaticParams() {
  return projects.map(p => ({ slug: p.slug }));
}

export default async function WorkSingle({ params }: { params: Promise<{ slug: string }> }) {
  const { slug } = await params;
  const project = projects.find(p => p.slug === slug);
  if (!project) return notFound();

  const next = projects.find(p => p.slug === project.nextSlug)!;

  return (
    <>
      {/* Hero */}
      <div className="section-hero v2" style={{ position: 'relative' }}>
        <div
          className="hero-image"
          style={{
            backgroundImage: 'linear-gradient(rgba(255, 255, 255, 0.7), rgba(255, 255, 255, 0.7)), url(/assets/aman/hero.png)',
            backgroundSize: 'cover',
            backgroundPosition: 'center',
            position: 'absolute',
            top: 0,
            left: 0,
            width: '100%',
            height: '100%',
            zIndex: -1,
            opacity: 1
          }}
        ></div>
        <div className="container">
          <div className="content-wrap text-center">
            <div className="title text-display-2 effectFade fadeRotateX">
              <span className="title1 fw-semibold text-gradient-1">{project.heroTitle1}</span>
              <br />
              <div className="title2 d-flex gap-20 justify-content-center flex-wrap">
                <span className="fw-semibold text-gradient-1">{project.heroTitle2}</span>
              </div>
            </div>
            <p className="text effectFade fadeUp">{project.subtitle}</p>
          </div>
        </div>
      </div>

      {/* Work Single Body */}
      <div id="works" className="section-work-single flat-spacing pt-0">
        <div className="container">

          {/* Cover image */}
          <div className="row mb-32">
            <div className="col-12">
              <div className="wrap-image mb-60 effectFade fadeZoom">
                <img src={project.coverImage} alt={project.title} style={{ width: '100%', objectFit: 'cover', borderRadius: '12px' }} />
              </div>
              <h2 className="heading fw-semibold mb-32 effectFade fadeUp">Project Details</h2>
              <p className="text-secondary effectFade fadeUp">
                {project.details.split('\n\n').map((para, i) => (
                  <span key={i}>{para}{i < project.details.split('\n\n').length - 1 && <><br /><br /></>}</span>
                ))}
              </p>
            </div>
          </div>

          {/* Deliverables + Industry */}
          <div className="row mb-60">
            <div className="col-md-8 md-mb-24">
              <div className="text-body-1 fw-semibold text-secondary mb-15 effectFade fadeUp">DELIVERABLES</div>
              <div className="list-tags effectFade fadeUp">
                {project.deliverables.map((d, i) => (
                  <a key={i} href="#" className="tags-item fw-semibold">{d}</a>
                ))}
              </div>
            </div>
            <div className="col-md-4">
              <div className="text-body-1 fw-semibold text-secondary mb-15 effectFade fadeUp" data-delay="0.1">INDUSTRY</div>
              <div className="list-tags effectFade fadeUp" data-delay="0.1">
                <a href="#" className="tags-item fw-semibold">{project.industry}</a>
              </div>
            </div>
          </div>

          {/* Second image */}
          <div className="row mb-60">
            <div className="col-12">
              <div className="wrap-image effectFade fadeZoom">
                <img src={project.image2} alt="" />
              </div>
            </div>
          </div>

          {/* Project Research */}
          <div className="row mb-60">
            <div className="col-12">
              <h2 className="heading fw-semibold mb-20 effectFade fadeUp">Project Research</h2>
              <p className="text-secondary effectFade fadeUp">
                {project.research.split('\n\n').map((para, i) => (
                  <span key={i}>{para}{i < project.research.split('\n\n').length - 1 && <><br /><br /></>}</span>
                ))}
              </p>
            </div>
          </div>

          {/* Project Results */}
          <div className="row mb-60">
            <div className="col-12">
              <h2 className="heading fw-semibold mb-20 effectFade fadeUp">Project Results</h2>
              <p className="text-secondary effectFade fadeUp">
                {project.results.split('\n\n').map((para, i) => (
                  <span key={i}>{para}{i < project.results.split('\n\n').length - 1 && <><br /><br /></>}</span>
                ))}
              </p>
            </div>
          </div>

          {/* Bottom image pair */}
          <div className="row">
            <div className="col-md-6 md-mb-24">
              <div className="image effectFade fadeUp">
                <img src={project.image3} alt="" />
              </div>
            </div>
            <div className="col-md-6">
              <div className="image effectFade fadeUp" data-delay="0.1">
                <img src={project.image4} alt="" />
              </div>
            </div>
          </div>

        </div>
      </div>

      {/* Testimonials */}
      <div className="box-black">
        <div className="light-box"></div>
        <img className="light-top" src="/assets/images/item/light-top.png" alt="" />
        <img className="light-bot" src="/assets/images/item/light-bot.png" alt="" />
        <TestimonialsSection />
      </div>

      {/* Next Project */}
      <div className="section-featured-works flat-spacing">
        <div className="container">
          <div className="heading-section center mb-64">
            <div className="heading-sub fw-semibold effectFade fadeUp">Project</div>
            <div className="heading-title text-gradient-3 effectFade fadeRotateX">Next Project</div>
          </div>
          <div className="featured-works-list position-relative">
            <div className="element effectFade fadeUp">
              <div className="featured-works-item">
                <div className="image main-mouse-hover">
                  <img src={next.listImage} alt={next.title} style={{ width: '100%', objectFit: 'cover' }} />
                  <a href={`/work/${next.slug}`} className="tf-mouse view-project h6">
                    View Project
                    <i className="icon icon-arrow-top-right"></i>
                  </a>
                </div>
                <div className="content">
                  <div className="pagi-dot">
                    {next.dot.map((active, j) => (
                      <span key={j} className={active ? 'active' : ''}></span>
                    ))}
                  </div>
                  <div className="bot">
                    <h4 className="heading fw-semibold">{next.title}</h4>
                    <div className="grid-text">
                      <div className="item">
                        <div className="title text-secondary">CATEGORY</div>
                        <div className="text-body-3 fw-semibold">{next.category}</div>
                      </div>
                      <div className="item">
                        <div className="title text-secondary">DELIVERABLES</div>
                        <div className="fw-semibold text-body-3">{next.deliverables.slice(0, 2).join(', ')}</div>
                      </div>
                      <div className="item">
                        <div className="title text-secondary">INDUSTRY</div>
                        <div className="fw-semibold text-body-3">{next.industry}</div>
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
