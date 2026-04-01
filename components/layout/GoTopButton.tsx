'use client';

import { useState, useEffect } from "react";

export default function GoTopButton() {
  const [isVisible, setIsVisible] = useState(false);

  useEffect(() => {
    const handleScroll = () => {
      const scrollTop = window.scrollY;
      const docHeight = document.documentElement.scrollHeight - window.innerHeight;
      const scrollPercentage = (scrollTop / docHeight) * 100;
      const progressAngle = (scrollPercentage / 100) * 360;

      const windowBottom = scrollTop + window.innerHeight;
      const footer = document.querySelector("footer");
      const footerOffset = footer ? footer.offsetTop : Infinity;

      if (scrollTop > 100 && windowBottom < footerOffset) {
        setIsVisible(true);
      } else {
        setIsVisible(false);
      }

      const progressEl = document.querySelector(".border-progress") as HTMLElement;
      if (progressEl) {
        progressEl.style.setProperty("--progress-angle", `${progressAngle}deg`);
      }
    };

    window.addEventListener("scroll", handleScroll);
    return () => window.removeEventListener("scroll", handleScroll);
  }, []);

  const scrollToTop = () => {
    window.scrollTo({ top: 0, behavior: "smooth" });
  };

  return (
    <button
      id="goTop"
      onClick={scrollToTop}
      className={isVisible ? "show" : ""}
      aria-label="Scroll to top"
    >
      <span className="border-progress"></span>
      <span className="ic-wrap" aria-hidden="true">
        <svg className="go-top-arrow" viewBox="0 0 24 24" focusable="false">
          <path d="M12 18V6"></path>
          <path d="M7 11L12 6L17 11"></path>
        </svg>
      </span>
    </button>
  );
}
