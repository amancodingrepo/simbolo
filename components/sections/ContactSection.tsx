interface ContactInfo {
  icon: string;
  title: string;
  value: string;
}

interface ContactSectionProps {
  headingSubtitle?: string;
  headingTitle?: string;
  backgroundImage?: string;
  contactInfo?: ContactInfo[];
  formHeading?: string;
}

const defaultContactInfo: ContactInfo[] = [
  { icon: 'icon-envelope-solid', title: 'E-mail address', value: 'hello@simbolo.agency' },
  { icon: 'icon-headset-solid', title: 'Phone number', value: '+1 (647) 555 0172' },
];

export default function ContactSection({
  headingSubtitle = 'Contact',
  headingTitle = "Let's Scale <br /> Your Brand",
  backgroundImage = '/assets/aman/mid.png',
  contactInfo = defaultContactInfo,
  formHeading = 'Tell us about your project',
}: ContactSectionProps) {
  return (
    <div id="contact" className="flat-spacing pt-0">
      <div className="section-contact">
        <div className="contact-image">
          <img src={backgroundImage} alt="" style={{ opacity: 0.9 }} />
        </div>
        <div style={{ position: 'absolute', inset: 0, background: 'rgba(255,255,255,0.5)', zIndex: 1 }} />

        <div className="container" style={{ position: 'relative', zIndex: 2 }}>
          <div className="row">
            <div className="col-lg-6">
              <div className="col-left">
                <div className="heading-section mb-48">
                  <div className="heading-sub fw-semibold effectFade fadeUp">{headingSubtitle}</div>
                  <div
                    className="heading-title text-gradient-3 effectFade fadeRotateX"
                    dangerouslySetInnerHTML={{ __html: headingTitle }}
                  />
                </div>
                <div>
                  {contactInfo.map((info, i) => (
                    <div
                      key={i}
                      className={`contact-item effectFade fadeRotateX${i > 0 ? ' mt-0' : ' mb-20'}`}
                      {...(i > 0 ? { 'data-delay': `${i * 0.1}` } : {})}
                    >
                      <i className={`icon ${info.icon}`}></i>
                      <div className="content">
                        <div className="title fw-semibold mb-2">{info.title}</div>
                        <div className="text">{info.value}</div>
                      </div>
                    </div>
                  ))}
                </div>
              </div>
            </div>
            <div className="col-lg-6">
              <form className="form-contact effectFade fadeUp">
                <h4 className="heading fw-semibold">{formHeading}</h4>
                <fieldset className="mb-21">
                  <label className="fw-semibold text-body-3 mb-20">Your Name</label>
                  <input type="text" placeholder="Enter your full name" required />
                </fieldset>
                <fieldset className="mb-21">
                  <label className="fw-semibold text-body-3 mb-20">Your Phone</label>
                  <input type="text" placeholder="Enter your phone number" required />
                </fieldset>
                <fieldset className="mb-21">
                  <label className="fw-semibold text-body-3 mb-20">Enter the e-mail</label>
                  <input type="email" placeholder="Enter your email" required />
                </fieldset>
                <fieldset className="mb-18">
                  <label className="fw-semibold text-body-3 mb-0">More About The Project</label>
                  <textarea name="text"></textarea>
                </fieldset>
                <div className="attachment d-flex gap-8 align-items-center">
                  <i className="icon icon-paperclip-solid fs-24"></i>
                  <div className="fw-semibold text-body-3">Add an Attachment</div>
                </div>
                <button type="submit" className="tf-btn w-100">Submit Message</button>
              </form>
            </div>
          </div>
        </div>
      </div>
    </div>
  );
}
