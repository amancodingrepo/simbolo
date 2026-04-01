import { projects } from '@/lib/projects';

export default function FeaturedWorksSection() {
  return (
    <div id="works" className="section-featured-works flat-spacing pt-0">
      <div className="container">
        <div className="heading-section mb-0">
          <div className="heading-sub fw-semibold mx-auto effectFade fadeUp">Proven Results</div>
        </div>
        <div className="featured-works-list position-relative">
          {projects.map((project, i) => (
            <div key={project.slug}>
              <div className={`featured-works-item effectFade fadeUp${i === 0 ? ' no-div' : ''}`}>
                <div className="image main-mouse-hover">
                  <img src={project.listImage} alt={project.title} style={{ width: '100%', objectFit: 'cover' }} />
                  <a href={`/work/${project.slug}`} className="tf-mouse view-project h6">
                    View Project
                    <i className="icon icon-arrow-top-right"></i>
                  </a>
                </div>
                <div className="content">
                  <div className="pagi-dot">
                    {project.dot.map((active, j) => (
                      <span key={j} className={active ? 'active' : ''}></span>
                    ))}
                  </div>
                  <div className="bot">
                    <h4 className="heading fw-semibold">{project.title}</h4>
                    <div className="grid-text">
                      <div className="item">
                        <div className="title text-secondary">DESCRIPTION</div>
                        <div className="text-body-3 fw-semibold">{project.subtitle.slice(0, 120)}...</div>
                      </div>
                      <div className="item">
                        <div className="title text-secondary">DELIVERABLES</div>
                        <div className="fw-semibold text-body-3">{project.deliverables.slice(0, 2).join(', ')}</div>
                      </div>
                      <div className="item">
                        <div className="title text-secondary">INDUSTRY</div>
                        <div className="fw-semibold text-body-3">{project.industry}</div>
                      </div>
                    </div>
                  </div>
                </div>
              </div>
            </div>
          ))}
        </div>
      </div>
    </div>
  );
}
