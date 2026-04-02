"use client";

import { useEffect, useState } from "react";

const mobileLinks = [
  { href: "/", label: "Home" },
  { href: "/service", label: "Services" },
  { href: "/work", label: "Works" },
  { href: "/blog", label: "Blog" },
  { href: "/contact", label: "Contact" },
];

export default function MobileMenu() {
  const [time, setTime] = useState<string>("");

  useEffect(() => {
    const updateClock = () => {
      const now = new Date();
      setTime(now.toLocaleTimeString("en-GB"));
    };

    updateClock();
    const interval = setInterval(updateClock, 1000);
    return () => clearInterval(interval);
  }, []);

  return (
    <div className="offcanvas-menu">
      <div className="offcanvas-content">
        <div className="container h-100">
          <div className="offcanvas-content_wrapin">
            <div className="canvas_head">
              <a href="/" className="logo-site">
                <img src="/assets/aman/logo.png" alt="Simbolo" width="120" height="32" />
              </a>
              <div className="btn-mobile-menu close-mb-menu text-caption link">
                <i className="icon icon-close"></i>
                CLOSE
              </div>
            </div>

            <div className="canvas_center">
              <ul className="nav-ul-mb" id="mobile-menu">
                {mobileLinks.map((link) => (
                  <li key={link.href}>
                    <div className="item">
                      <a href={link.href} className="mb-menu-link text-display-1">
                        <span className="text">{link.label}</span>
                      </a>
                    </div>
                  </li>
                ))}
              </ul>
            </div>

            <div className="canvas_foot">
              <div className="left">
                <a href="mailto:thesimbolomultimedia@gmail.com" className="text-caption text-neutral-200">
                  thesimbolomultimedia@gmail.com
                </a>
                <p className="text-caption text-neutral-200">
                  IST <span className="clock">{time}</span>
                </p>
              </div>
              <div className="right">
                <a
                  href="https://www.instagram.com/the_simbolo_?igsh=ZXloMjlwcHpnandh"
                  target="_blank"
                  rel="noopener noreferrer"
                  className="tf-link-icon text-caption text-neutral-200"
                >
                  <i className="icon icon-arrow-top-right"></i>
                  INSTAGRAM
                </a>
                <a
                  href="https://www.linkedin.com/company/thesimbolomultimedia/"
                  target="_blank"
                  rel="noopener noreferrer"
                  className="tf-link-icon text-caption text-neutral-200"
                >
                  <i className="icon icon-arrow-top-right"></i>
                  LINKEDIN
                </a>
              </div>
            </div>
          </div>
        </div>
      </div>
    </div>
  );
}
