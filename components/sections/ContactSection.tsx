"use client";
import { useState, useRef, useEffect } from "react";

function CustomSelect({
  name,
  placeholder,
  options,
}: {
  name: string;
  placeholder: string;
  options: string[];
}) {
  const [open, setOpen] = useState(false);
  const [value, setValue] = useState("");
  const ref = useRef<HTMLDivElement>(null);

  useEffect(() => {
    const handler = (e: MouseEvent) => {
      if (ref.current && !ref.current.contains(e.target as Node)) {
        setOpen(false);
      }
    };
    document.addEventListener("mousedown", handler);
    return () => document.removeEventListener("mousedown", handler);
  }, []);

  return (
    <div ref={ref} style={{ position: "relative" }}>
      <input type="hidden" name={name} value={value} required />
      <div
        onClick={() => setOpen((o) => !o)}
        style={{
          width: "100%",
          padding: "12px 16px",
          borderRadius: "10px",
          border: "1.5px solid #c8d0da",
          background: "#fff",
          color: value ? "#1a1a2e" : "#9ca3af",
          fontSize: "14px",
          cursor: "pointer",
          display: "flex",
          justifyContent: "space-between",
          alignItems: "center",
          userSelect: "none",
        }}
      >
        <span>{value || placeholder}</span>
        <span
          style={{
            fontSize: "10px",
            color: "#999",
            transform: open ? "rotate(180deg)" : "none",
            transition: "transform 0.2s",
          }}
        >
          v
        </span>
      </div>
      {open && (
        <div
          style={{
            position: "absolute",
            top: "calc(100% + 6px)",
            left: 0,
            right: 0,
            zIndex: 9999,
            background: "#fff",
            border: "1.5px solid #c8d0da",
            borderRadius: "10px",
            boxShadow: "0 8px 24px rgba(0,0,0,0.12)",
            overflow: "hidden",
          }}
        >
          {options.map((opt) => (
            <div
              key={opt}
              onClick={() => {
                setValue(opt);
                setOpen(false);
              }}
              style={{
                padding: "11px 16px",
                fontSize: "14px",
                color: "#1a1a2e",
                cursor: "pointer",
                background: value === opt ? "#f0fdf9" : "#fff",
                fontWeight: value === opt ? 600 : 400,
              }}
              onMouseEnter={(e) =>
                (e.currentTarget.style.background = "#f8fafc")
              }
              onMouseLeave={(e) =>
                (e.currentTarget.style.background =
                  value === opt ? "#f0fdf9" : "#fff")
              }
            >
              {opt}
            </div>
          ))}
        </div>
      )}
    </div>
  );
}

const services = [
  "Google Ads",
  "AI Agent",
  "Automation",
  "Web Dev",
  "Social Media",
  "WhatsApp",
  "SEO",
  "E-com Scale",
];

const inputStyle: React.CSSProperties = {
  width: "100%",
  padding: "12px 16px",
  borderRadius: "10px",
  border: "1.5px solid #c8d0da",
  background: "#ffffff",
  color: "#1a1a2e",
  fontSize: "14px",
  outline: "none",
  appearance: "auto" as any,
  colorScheme: "light",
};

function FormContact() {
  const [selected, setSelected] = useState<string[]>([]);

  const toggle = (s: string) =>
    setSelected((prev) =>
      prev.includes(s) ? prev.filter((x) => x !== s) : [...prev, s],
    );

  const handleSubmit = (e: React.SyntheticEvent<HTMLFormElement>) => {
    e.preventDefault();
    const form = e.currentTarget;
    const business = (form.elements.namedItem("business") as HTMLSelectElement)
      .value;
    const budget = (form.elements.namedItem("budget") as HTMLSelectElement)
      .value;
    const name = (form.elements.namedItem("name") as HTMLInputElement).value;
    const mobile = (form.elements.namedItem("mobile") as HTMLInputElement)
      .value;
    const company = (form.elements.namedItem("company") as HTMLInputElement)
      .value;
    const msg = `Hi, I'd like to get a strategy.\n\nBusiness Type: ${business}\nMonthly Budget: ${budget}\nServices: ${selected.join(", ")}\nName: ${name}\nMobile: ${mobile}\nCompany: ${company}`;

    window.open(
      `https://wa.me/917000000000?text=${encodeURIComponent(msg)}`,
      "_blank",
    );
  };

  return (
    <form
      className="form-contact contact-form-card effectFade fadeUp"
      onSubmit={handleSubmit}
      style={{
        background: "#fff",
        boxShadow: "0 8px 40px rgba(0,0,0,0.10)",
        colorScheme: "light",
      }}
    >
      <style>{`
        .contact-form-card {
          padding: 48px 52px;
          border-radius: 24px;
        }

        .contact-form-card select option {
          background: #ffffff !important;
          color: #1a1a2e !important;
        }

        .contact-form-card input[type="checkbox"] {
          accent-color: #5aceb3;
          width: 15px;
          height: 15px;
          cursor: pointer;
          color-scheme: light;
        }

        .contact-form-services-grid {
          display: grid;
          grid-template-columns: repeat(4, minmax(0, 1fr));
          gap: 10px 12px;
          padding: 16px 20px;
          border: 1.5px solid #c8d0da;
          border-radius: 10px;
          background: #f8fafc;
        }

        .contact-service-option {
          display: flex;
          align-items: center;
          gap: 8px;
          cursor: pointer;
          font-size: 13px;
          color: #1a1a2e;
          min-width: 0;
          white-space: normal;
        }

        @media (max-width: 991px) {
          .contact-form-card {
            padding: 30px;
          }

          .contact-form-services-grid {
            grid-template-columns: repeat(2, minmax(0, 1fr));
          }
        }

        @media (max-width: 767px) {
          .contact-form-card {
            padding: 20px 18px;
            border-radius: 20px;
          }
        }

        @media (max-width: 480px) {
          .contact-form-services-grid {
            grid-template-columns: 1fr;
            padding: 14px;
            gap: 10px;
          }
        }
      `}</style>

      <h4
        className="heading fw-semibold"
        style={{ color: "#1a1a2e", marginBottom: "4px" }}
      >
        Get Your Strategy
      </h4>
      <p style={{ fontSize: "14px", color: "#6b7280", marginBottom: "32px" }}>
        Fill in the details and we'll reach out to you.
      </p>

      <div className="row mb-21">
        <div className="col-md-6">
          <fieldset style={{ marginBottom: 0 }}>
            <label
              className="fw-semibold text-body-3 mb-20"
              style={{
                color: "#1a1a2e",
                display: "block",
                marginBottom: "8px",
                fontSize: "13px",
              }}
            >
              Business Type *
            </label>
            <CustomSelect
              name="business"
              placeholder="Select Business"
              options={[
                "E-Commerce",
                "Real Estate",
                "Restaurant / Food",
                "Education",
                "Healthcare",
                "Startup",
                "Other",
              ]}
            />
          </fieldset>
        </div>
        <div className="col-md-6">
          <fieldset style={{ marginBottom: 0 }}>
            <label
              className="fw-semibold text-body-3 mb-20"
              style={{
                color: "#1a1a2e",
                display: "block",
                marginBottom: "8px",
                fontSize: "13px",
              }}
            >
              Monthly Budget *
            </label>
            <CustomSelect
              name="budget"
              placeholder="Select Budget"
              options={[
                "Under INR 25,000",
                "INR 25,000 - INR 50,000",
                "INR 50,000 - INR 100,000",
                "INR 100,000+",
              ]}
            />
          </fieldset>
        </div>
      </div>

      <fieldset className="mb-21">
        <label
          className="fw-semibold text-body-3 mb-20"
          style={{
            color: "#1a1a2e",
            display: "block",
            marginBottom: "10px",
            fontSize: "13px",
          }}
        >
          Services you're interested in *
        </label>
        <div className="contact-form-services-grid">
          {services.map((s) => (
            <label key={s} className="contact-service-option">
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

      <div className="row mb-21">
        <div className="col-md-4">
          <fieldset>
            <label
              className="fw-semibold text-body-3 mb-20"
              style={{
                color: "#1a1a2e",
                display: "block",
                marginBottom: "8px",
                fontSize: "13px",
              }}
            >
              Full Name *
            </label>
            <input
              name="name"
              type="text"
              placeholder="Your name"
              required
              style={inputStyle}
            />
          </fieldset>
        </div>
        <div className="col-md-4">
          <fieldset>
            <label
              className="fw-semibold text-body-3 mb-20"
              style={{
                color: "#1a1a2e",
                display: "block",
                marginBottom: "8px",
                fontSize: "13px",
              }}
            >
              Mobile *
            </label>
            <input
              name="mobile"
              type="tel"
              placeholder="+91 00000 00000"
              required
              style={inputStyle}
            />
          </fieldset>
        </div>
        <div className="col-md-4">
          <fieldset>
            <label
              className="fw-semibold text-body-3 mb-20"
              style={{
                color: "#1a1a2e",
                display: "block",
                marginBottom: "8px",
                fontSize: "13px",
              }}
            >
              Company Name *
            </label>
            <input
              name="company"
              type="text"
              placeholder="Your company"
              required
              style={inputStyle}
            />
          </fieldset>
        </div>
      </div>

      <button
        type="submit"
        className="tf-btn w-100"
        style={{
          background: "linear-gradient(135deg, #5ACEB3 0%, #3ab89a 100%)",
          borderColor: "#5ACEB3",
          boxShadow:
            "0 0 18px rgba(90, 206, 179, 0.45), 0 4px 14px rgba(90, 206, 179, 0.3)",
          color: "#fff",
          fontSize: "15px",
          fontWeight: 700,
          letterSpacing: "0.3px",
          marginTop: "8px",
        }}
      >
        Send Request via WhatsApp -&gt;
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
  {
    icon: "icon-envelope-solid",
    title: "E-mail address",
    value: "thesimbolomultimedia@gmail.com",
  },
  {
    icon: "icon-headset-solid",
    title: "Phone number",
    value: "+91 89829 48199",
  },
  {
    icon: "icon-map-marker-solid",
    title: "Address",
    value:
      "1st Floor, Sahil Regency, The Simbolo Multimedia, Plot No. ED/149, Ring Rd, near Khajrana square, IDA, Scheme, Indore, Madhya Pradesh 452016, India",
  },
];

export default function ContactSection({
  headingSubtitle = "Contact",
  headingTitle = "Let's Scale <br /> Your Brand",
  backgroundImage = "/assets/aman/mid.png",
  contactInfo = defaultContactInfo,
}: ContactSectionProps) {
  return (
    <div id="contact" className="flat-spacing pt-0">
      <div className="section-contact">
        <div className="contact-image">
          <img src={backgroundImage} alt="" style={{ opacity: 0.9 }} />
        </div>
        <div
          style={{
            position: "absolute",
            inset: 0,
            background: "rgba(255,255,255,0.55)",
            zIndex: 1,
          }}
        />

        <div className="container" style={{ position: "relative", zIndex: 2 }}>
          <div className="row align-items-start">
            <div className="col-lg-4">
              <div className="col-left" style={{ paddingTop: "8px" }}>
                <div className="heading-section mb-48">
                  <div className="heading-sub fw-semibold effectFade fadeUp">
                    {headingSubtitle}
                  </div>
                  <div
                    className="heading-title text-gradient-3 effectFade fadeRotateX"
                    dangerouslySetInnerHTML={{ __html: headingTitle }}
                  />
                </div>
                <div
                  style={{
                    display: "flex",
                    flexDirection: "column",
                    gap: "16px",
                  }}
                >
                  {contactInfo.map((info, i) => (
                    <div
                      key={i}
                      className="contact-item effectFade fadeRotateX"
                      style={{ alignItems: "flex-start", gap: "14px" }}
                      {...(i > 0 ? { "data-delay": `${i * 0.1}` } : {})}
                    >
                      <i
                        className={`icon ${info.icon}`}
                        style={{ flexShrink: 0, marginTop: "2px" }}
                      ></i>
                      <div className="content">
                        <div className="title fw-semibold mb-2">{info.title}</div>
                        <div className="text contact-item-text">{info.value}</div>
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
