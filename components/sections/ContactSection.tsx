'use client';
import { useState, useRef, useEffect } from 'react';

function CustomSelect({ name, placeholder, options }: { name: string; placeholder: string; options: string[] }) {
  const [open, setOpen] = useState(false);
  const [value, setValue] = useState('');
  const ref = useRef<HTMLDivElement>(null);

  useEffect(() => {
    const handler = (e: MouseEvent) => {
      if (ref.current && !ref.current.contains(e.target as Node)) setOpen(false);
    };
    document.addEventListener('mousedown', handler);
    return () => document.removeEventListener('mousedown', handler);
  }, []);

  return (
    <div ref={ref} style={{ position: 'relative' }}>
      <input type="hidden" name={name} value={value} required />
      <div
        onClick={() => setOpen(o => !o)}
        style={{
          width: '100%', padding: '12px 16px', borderRadius: '10px',
          border: '1.5px solid #c8d0da', background: '#fff', color: value ? '#1a1a2e' : '#9ca3af',
          fontSize: '14px', cursor: 'pointer', display: 'flex', justifyContent: 'space-between', alignItems: 'center', userSelect: 'none',
        }}
      >
        <span>{value || placeholder}</span>
        <span style={{ fontSize: '10px', color: '#999', transform: open ? 'rotate(180deg)' : 'none', transition: 'transform 0.2s' }}>▼</span>
      </div>
      {open && (
        <div style={{
          position: 'absolute', top: 'calc(100% + 6px)', left: 0, right: 0, zIndex: 9999,
          background: '#fff', border: '1.5px solid #c8d0da', borderRadius: '10px',
          boxShadow: '0 8px 24px rgba(0,0,0,0.12)', overflow: 'hidden',
        }}>
          {options.map(opt => (
            <div
              key={opt}
              onClick={() => { setValue(opt); setOpen(false); }}
              style={{
                padding: '11px 16px', fontSize: '14px', color: '#1a1a2e', cursor: 'pointer',
                background: value === opt ? '#f0fdf9' : '#fff',
                fontWeight: value === opt ? 600 : 400,
              }}
              onMouseEnter={e => (e.currentTarget.style.background = '#f8fafc')}
              onMouseLeave={e => (e.currentTarget.style.background = value === opt ? '#f0fdf9' : '#fff')}
            >
              {opt}
            </div>
          ))}
        </div>
      )}
    </div>
  );
}

const services = ['Google Ads', 'AI Agent', 'Automation', 'Web Dev', 'Social Media', 'WhatsApp', 'SEO', 'E-com Scale'];

const inputStyle: React.CSSProperties = {
  width: '100%',
  padding: '12px 16px',
  borderRadius: '10px',
  border: '1.5px solid #c8d0da',
  background: '#ffffff',
  color: '#1a1a2e',
  fontSize: '14px',
  outline: 'none',
  appearance: 'auto' as any,
  colorScheme: 'light',
};

function FormContact() {
  const [selected, setSelected] = useState<string[]>([]);

  const toggle = (s: string) =>
    setSelected(prev => prev.includes(s) ? prev.filter(x => x !== s) : [...prev, s]);

  const handleSubmit = (e: React.SyntheticEvent<HTMLFormElement>) => {
    e.preventDefault();
    const form = e.currentTarget;
    const business = (form.elements.namedItem('business') as HTMLSelectElement).value;
    const budget = (form.elements.namedItem('budget') as HTMLSelectElement).value;
    const name = (form.elements.namedItem('name') as HTMLInputElement).value;
    const mobile = (form.elements.namedItem('mobile') as HTMLInputElement).value;
    const company = (form.elements.namedItem('company') as HTMLInputElement).value;
    const msg = `Hi, I'd like to get a strategy.\n\nBusiness Type: ${business}\nMonthly Budget: ${budget}\nServices: ${selected.join(', ')}\nName: ${name}\nMobile: ${mobile}\nCompany: ${company}`;
    window.open(`https://wa.me/917000000000?text=${encodeURIComponent(msg)}`, '_blank');
  };

  return (
    <form className="form-contact effectFade fadeUp" onSubmit={handleSubmit} style={{ padding: '48px 52px', borderRadius: '24px', background: '#fff', boxShadow: '0 8px 40px rgba(0,0,0,0.10)', colorScheme: 'light' }}>
      <style>{`
        .form-contact select option { background: #ffffff !important; color: #1a1a2e !important; }
        .form-contact input[type="checkbox"] { accent-color: #5ACEB3; width: 15px; height: 15px; cursor: pointer; color-scheme: light; }
      `}</style>
      <h4 className="heading fw-semibold" style={{ color: '#1a1a2e', marginBottom: '4px' }}>Get Your Strategy</h4>
      <p style={{ fontSize: '14px', color: '#6b7280', marginBottom: '32px' }}>Fill in the details and we'll reach out to you.</p>

      {/* Row 1: Business Type + Budget */}
      <div className="row mb-21">
        <div className="col-md-6">
          <fieldset style={{ marginBottom: 0 }}>
            <label className="fw-semibold text-body-3 mb-20" style={{ color: '#1a1a2e', display: 'block', marginBottom: '8px', fontSize: '13px' }}>Business Type *</label>
            <CustomSelect name="business" placeholder="Select Business" options={['E-Commerce','Real Estate','Restaurant / Food','Education','Healthcare','Startup','Other']} />
          </fieldset>
        </div>
        <div className="col-md-6">
          <fieldset style={{ marginBottom: 0 }}>
            <label className="fw-semibold text-body-3 mb-20" style={{ color: '#1a1a2e', display: 'block', marginBottom: '8px', fontSize: '13px' }}>Monthly Budget *</label>
            <CustomSelect name="budget" placeholder="Select Budget" options={['Under ₹25,000','₹25,000 – ₹50,000','₹50,000 – ₹1,00,000','₹1,00,000+']} />
          </fieldset>
        </div>
      </div>

      {/* Services */}
      <fieldset className="mb-21">
        <label className="fw-semibold text-body-3 mb-20" style={{ color: '#1a1a2e', display: 'block', marginBottom: '10px', fontSize: '13px' }}>Services you're interested in *</label>
        <div style={{ display: 'grid', gridTemplateColumns: 'repeat(4, 1fr)', gap: '10px 12px', padding: '16px 20px', border: '1.5px solid #c8d0da', borderRadius: '10px', background: '#f8fafc' }}>
          {services.map(s => (
            <label key={s} style={{ display: 'flex', alignItems: 'center', gap: '8px', cursor: 'pointer', fontSize: '13px', color: '#1a1a2e', whiteSpace: 'nowrap' }}>
              <input
                type="checkbox"
                checked={selected.includes(s)}
                onChange={() => toggle(s)}
                style={{} as any}
              />
              {s}
            </label>
          ))}
        </div>
      </fieldset>

      {/* Row 2: Name + Mobile */}
      <div className="row mb-21">
        <div className="col-md-4">
          <fieldset>
            <label className="fw-semibold text-body-3 mb-20" style={{ color: '#1a1a2e', display: 'block', marginBottom: '8px', fontSize: '13px' }}>Full Name *</label>
            <input name="name" type="text" placeholder="Your name" required style={inputStyle} />
          </fieldset>
        </div>
        <div className="col-md-4">
          <fieldset>
            <label className="fw-semibold text-body-3 mb-20" style={{ color: '#1a1a2e', display: 'block', marginBottom: '8px', fontSize: '13px' }}>Mobile *</label>
            <input name="mobile" type="tel" placeholder="+91 00000 00000" required style={inputStyle} />
          </fieldset>
        </div>
        <div className="col-md-4">
          <fieldset>
            <label className="fw-semibold text-body-3 mb-20" style={{ color: '#1a1a2e', display: 'block', marginBottom: '8px', fontSize: '13px' }}>Company Name *</label>
            <input name="company" type="text" placeholder="Your company" required style={inputStyle} />
          </fieldset>
        </div>
      </div>

      <button
        type="submit"
        className="tf-btn w-100"
        style={{
          background: 'linear-gradient(135deg, #5ACEB3 0%, #3ab89a 100%)',
          borderColor: '#5ACEB3',
          boxShadow: '0 0 18px rgba(90, 206, 179, 0.45), 0 4px 14px rgba(90, 206, 179, 0.3)',
          color: '#fff',
          fontSize: '15px',
          fontWeight: 700,
          letterSpacing: '0.3px',
          marginTop: '8px',
        }}
      >
        Send Request via WhatsApp &nbsp;→
      </button>
    </form>
  );
}

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
}

const defaultContactInfo: ContactInfo[] = [
  { icon: 'icon-envelope-solid', title: 'E-mail address', value: 'thesimbolomultimedia@gmail.com' },
  { icon: 'icon-headset-solid', title: 'Phone number', value: '+1 (647) 555 0172' },
];

export default function ContactSection({
  headingSubtitle = 'Contact',
  headingTitle = "Let's Scale <br /> Your Brand",
  backgroundImage = '/assets/aman/mid.png',
  contactInfo = defaultContactInfo,
}: ContactSectionProps) {
  return (
    <div id="contact" className="flat-spacing pt-0">
      <div className="section-contact">
        <div className="contact-image">
          <img src={backgroundImage} alt="" style={{ opacity: 0.9 }} />
        </div>
        <div style={{ position: 'absolute', inset: 0, background: 'rgba(255,255,255,0.55)', zIndex: 1 }} />

        <div className="container" style={{ position: 'relative', zIndex: 2 }}>
          <div className="row align-items-start">
            <div className="col-lg-4">
              <div className="col-left" style={{ paddingTop: '8px' }}>
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
            <div className="col-lg-8">
              <FormContact />
            </div>
          </div>
        </div>
      </div>
    </div>
  );
}
