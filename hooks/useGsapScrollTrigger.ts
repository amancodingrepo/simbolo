import { useEffect, useRef } from "react";
import gsap from "gsap";
import { ScrollTrigger } from "gsap/ScrollTrigger";

gsap.registerPlugin(ScrollTrigger);

export function useGsapScrollTrigger(selector: string, callback?: () => void) {
  const containerRef = useRef<HTMLDivElement>(null);

  useEffect(() => {
    const ctx = gsap.context(() => {
      const elements = document.querySelectorAll(selector);

      if (elements.length === 0) return;

      elements.forEach((el, index) => {
        const hasDelay = el.hasAttribute("data-delay");
        const delay = hasDelay ? parseFloat(el.getAttribute("data-delay") || "0") : 0;

        gsap.fromTo(
          el,
          { opacity: 0, y: 20 },
          {
            opacity: 1,
            y: 0,
            duration: 0.6,
            delay,
            scrollTrigger: {
              trigger: el,
              start: "top 80%",
              end: "top 50%",
              scrub: false,
              markers: false,
            },
          }
        );
      });

      callback?.();
    }, containerRef);

    return () => {
      ctx.revert();
      ScrollTrigger.getAll().forEach((trigger) => trigger.kill());
    };
  }, [selector, callback]);

  return containerRef;
}
