'use client';

import { useEffect } from 'react';
import { usePathname } from 'next/navigation';

export default function TemplateInit() {
  const pathname = usePathname();

  useEffect(() => {
    // We add a small delay to ensure Next.js has fully mounted the new DOM elements
    // before we initialize jQuery, GSAP and Swipers.
    const timer = setTimeout(() => {
      if (typeof window !== 'undefined') {
        const win = window as any;
        
        // 1. Initialize core template scripts (jQuery events)
        if (typeof win.initSimboloMain === 'function') {
          win.initSimboloMain();
        }
        
        // 2. Initialize Swiper carousels
        if (typeof win.initSimboloSwipers === 'function') {
          win.initSimboloSwipers();
        }

        // 3. Initialize GSAP animations (kills old triggers, binds new ones)
        if (typeof win.initSimboloGSAP === 'function') {
          win.initSimboloGSAP();
        }
      }
    }, 150);

    return () => clearTimeout(timer);
  }, [pathname]);

  return null;
}
