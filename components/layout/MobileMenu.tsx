'use client';

import { useEffect, useState } from "react";

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
                <i className="icon icon-davies-logo"></i>
              </a>
              <div className="btn-mobile-menu close-mb-menu text-caption link">
                <i className="icon icon-close"></i>
                CLOSE
              </div>
            </div>
            <div className="canvas_center">
              <ul className="nav-ul-mb" id="mobile-menu">
                <li>
                  <div className="item">
                    <div className="has-sub-menu">
                      <a href="#dropdown-menu-index" className="mb-menu-link text-display-1 collapsed" data-bs-toggle="collapse" aria-expanded="false" aria-controls="dropdown-menu-index">
                        <span className="text">Home</span>
                      </a>
                      <div id="dropdown-menu-index" className="collapse" data-bs-parent="#mobile-menu">
                        <ul className="sub-nav-menu">
                          <li><a href="/" className="sub-nav-link text-white">Home Gradient</a></li>
                        </ul>
                      </div>
                    </div>
                  </div>
                </li>
                <li>
                  <div className="item">
                    <a href="/about" className="mb-menu-link text-display-1">
                      <span className="text">About</span>
                    </a>
                  </div>
                </li>
                <li>
                  <div className="item">
                    <div className="has-sub-menu">
                      <a href="#dropdown-menu-1" className="mb-menu-link text-display-1 collapsed" data-bs-toggle="collapse" aria-expanded="false" aria-controls="dropdown-menu-1">
                        <span className="text">Works</span>
                      </a>
                      <div id="dropdown-menu-1" className="collapse" data-bs-parent="#mobile-menu">
                        <ul className="sub-nav-menu">
                          <li><a href="/work" className="sub-nav-link text-white">Works</a></li>
                          <li><a href="/work/single" className="sub-nav-link text-white">Works Single</a></li>
                        </ul>
                      </div>
                    </div>
                  </div>
                </li>
                <li>
                  <div className="item">
                    <div className="has-sub-menu">
                      <a href="#dropdown-menu-2" className="mb-menu-link text-display-1 collapsed" data-bs-toggle="collapse" aria-expanded="false" aria-controls="dropdown-menu-2">
                        <span className="text">Services</span>
                      </a>
                      <div id="dropdown-menu-2" className="collapse" data-bs-parent="#mobile-menu">
                        <ul className="sub-nav-menu">
                          <li><a href="/service" className="sub-nav-link text-white">Services</a></li>
                          <li><a href="/service/single" className="sub-nav-link text-white">Services Single</a></li>
                        </ul>
                      </div>
                    </div>
                  </div>
                </li>
                <li>
                  <div className="item">
                    <div className="has-sub-menu">
                      <a href="#dropdown-menu-3" className="mb-menu-link text-display-1 collapsed" data-bs-toggle="collapse" aria-expanded="false" aria-controls="dropdown-menu-3">
                        <span className="text">Blog</span>
                      </a>
                      <div id="dropdown-menu-3" className="collapse" data-bs-parent="#mobile-menu">
                        <ul className="sub-nav-menu">
                          <li><a href="/blog/three-columns" className="sub-nav-link text-white">Blog Grid 3</a></li>
                        </ul>
                      </div>
                    </div>
                  </div>
                </li>
                <li>
                  <div className="item">
                    <a href="/contact" className="mb-menu-link text-display-1">
                      <span className="text">Contact</span>
                    </a>
                  </div>
                </li>
              </ul>
            </div>
            <div className="canvas_foot">
              <div className="left">
                <a href="mailto:hello@simbolo.com" className="text-caption text-neutral-200">hello@simbolo.com</a>
                <p className="text-caption text-neutral-200">
                  CUP <span className="clock">{time}</span>
                </p>
              </div>
              <div className="right">
                <a href="#" className="tf-link-icon text-caption text-neutral-200">
                  <i className="icon icon-arrow-top-right"></i>
                  INSTAGRAM
                </a>
                <a href="#" className="tf-link-icon text-caption text-neutral-200">
                  <i className="icon icon-arrow-top-right"></i>
                  LINKEDIN
                </a>
                <a href="#" className="tf-link-icon text-caption text-neutral-200">
                  <i className="icon icon-arrow-top-right"></i>
                  TWITTER (X)
                </a>
              </div>
            </div>
          </div>
        </div>
      </div>
    </div>
  );
}
