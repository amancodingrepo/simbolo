# Simbolo HTML → Next.js Conversion Guide

## Overview
This document guides the completion of the Simbolo conversion from HTML/jQuery to Next.js with React.

## Architecture Overview

### Original Structure → Next.js Structure

| Original | Next.js Equivalent |
|---|---|
| `index.html` | `app/page.tsx` |
| `about.html` | `app/about/page.tsx` |
| `service.html` | `app/service/page.tsx` |
| `service-single.html` | `app/service/single/page.tsx` |
| `work.html` | `app/work/page.tsx` |
| `work-single.html` | `app/work/single/page.tsx` |
| `blog-standard.html` | `app/blog/page.tsx` |
| `blog-two-columns.html` | `app/blog/two-columns/page.tsx` |
| `blog-three-columns.html` | `app/blog/three-columns/page.tsx` |
| `blog-single.html` | `app/blog/[slug]/page.tsx` |
| `contact.html` | `app/contact/page.tsx` |
| `404.html` | `app/not-found.tsx` |
| Header (repeated) | `components/layout/Header.tsx` (reused) |
| Footer (repeated) | `components/layout/Footer.tsx` (reused) |

## What's Already Implemented

### ✅ Layout Components
- `Header.tsx` - Desktop nav + mobile button (state managed with useState)
- `Footer.tsx` - Footer with links
- `MobileMenu.tsx` - Full-screen offcanvas mobile menu with clock
- `GoTopButton.tsx` - Scroll-to-top with circular progress ring
- `SettingsPanel.tsx` - Color theme switcher + cursor effect toggle
- `CursorTrail.tsx` - Canvas-based cursor trail effect

### ✅ Custom Hooks
- `useColorTheme.ts` - localStorage persistence for color theme
- `useGsapScrollTrigger.ts` - GSAP ScrollTrigger setup helper

### ✅ Routes
All page routes created and building successfully.

### ✅ Assets
All assets copied to `public/assets/`

---

## Implementation Roadmap

### Phase 1: Core Page Content (Priority High)

#### 1.1 HeroSection Component
**Source**: The `.section-hero` elements in each page
**File**: `components/sections/HeroSection.tsx`
**Key Elements**:
- Hero title/heading
- Subheading
- CTA buttons
- Background gradient or decorative images
- Floating SVG elements (hero-1.svg, hero-2.svg, hero-3.svg)

**Implementation Notes**:
```tsx
'use client';
export interface HeroSectionProps {
  title: string;
  subtitle?: string;
  buttons?: Array<{ text: string; href: string; variant: 'primary' | 'secondary' }>;
  backgroundImage?: string;
  decorativeImages?: string[];
}
export default function HeroSection(props: HeroSectionProps) { ... }
```

#### 1.2 AboutSection Component
**Source**: The `.section-about-us#about` in index.html and about.html
**File**: `components/sections/AboutSection.tsx`
**Key Elements**:
- Globe/earth image (left)
- Text content
- Review/testimonial box with animated counter (`data-to="120"`)
- Trustpilot stars/rating

**Implementation Notes**:
- Animate counter on scroll using IntersectionObserver
- Use gsap.to() to animate the number from 0 to target value

#### 1.3 PartnerMarquee Component
**Source**: `.section-partner` with `.infiniteSlide` marquee
**File**: `components/sections/PartnerMarquee.tsx`
**Key Elements**:
- Infinite scrolling row of partner logos
- 6-8 partner SVG logos

**Implementation Notes**:
- Replace jQuery `infiniteslide` plugin with CSS `animation: marquee`
- Use CSS keyframes for the scrolling effect:
```css
@keyframes marquee {
  0% { transform: translateX(0); }
  100% { transform: translateX(-100%); }
}
```
- Clone logos 2-3x in the DOM for seamless loop

---

### Phase 2: Interactive Sections (Priority High)

#### 2.1 ServicesSection Component
**Source**: `.section-services#services` with accordion + image swap
**File**: `components/sections/ServicesSection.tsx`
**Key Elements**:
- Bootstrap accordion (4 service items with tags)
- Service image that swaps on accordion click
- Image stored in `data-img` attribute

**Implementation Notes**:
```tsx
'use client';
const [activeService, setActiveService] = useState(0);

// Image swap: read from service data
// Fade transition: opacity CSS transition
```

#### 2.2 PricingSection Component
**Source**: `.section-pricing#pricing` with toggle switch
**File**: `components/sections/PricingSection.tsx`
**Key Elements**:
- Monthly/yearly toggle switch (`#pricingSwitch`)
- 2 pricing cards (Starter, Enterprise)
- Price data with `data-month` and `data-year` attributes
- `data-per` label (month/year)

**Implementation Notes**:
```tsx
const [isMonthly, setIsMonthly] = useState(true);
// Read data-month/data-year from pricing cards
// Update displayed price and label on toggle
```

#### 2.3 FaqSection Component
**Source**: `.section-faqs` with Bootstrap accordion
**File**: `components/sections/FaqSection.tsx`
**Key Elements**:
- 4 Q&A accordion items
- Bootstrap collapse class behavior

**Implementation Notes**:
```tsx
const [openIndex, setOpenIndex] = useState(-1);
// Toggle individual FAQ items
// Only one open at a time (or allow multiple)
```

---

### Phase 3: Carousel/Slider Sections (Priority Medium)

#### 3.1 ProcessSection Component
**Source**: `.section-process` with Swiper slider
**File**: `components/sections/ProcessSection.tsx`
**Key Elements**:
- Swiper with 3 process cards (Discover, Prototype, Validate)
- Navigation arrows
- Title and description text

**Implementation Notes**:
```tsx
'use client';
import { Swiper, SwiperSlide } from 'swiper/react';
import { Navigation } from 'swiper/modules';

export default function ProcessSection() {
  return (
    <Swiper modules={[Navigation]} navigation>
      <SwiperSlide>Card 1</SwiperSlide>
      {/* ... */}
    </Swiper>
  );
}
```

#### 3.2 StatisticSection Component
**Source**: `.section-statistic` with Swiper + custom progress bar nav
**File**: `components/sections/StatisticSection.tsx`
**Key Elements**:
- Swiper with 3 statistic items (230K, 95% uptime, 99% on-time)
- Custom progress bar navigation
- Animated progress bar on slide change

#### 3.3 TestimonialsSection Component
**Source**: `.section-testimonials` with synced Swiper sliders
**File**: `components/sections/TestimonialsSection.tsx`
**Key Elements**:
- Left: Swiper with text testimonials (3 slides)
- Right: Swiper with images (synced to left)
- Prev/next buttons
- Pagination dots

**Implementation Notes**:
```tsx
const swiperRef = useRef();
<Swiper
  onSwiper={(swiper) => (swiperRef.current = swiper)}
  controller={{ control: swiperRef.current?.controller }}
/>
// Use Swiper's controller API to sync sliders
```

---

### Phase 4: Animation Sections (Priority Medium)

#### 4.1 BenefitsSection Component
**Source**: `.section-benefits` with progress bars and animated counters
**File**: `components/sections/BenefitsSection.tsx`
**Key Elements**:
- 4 animated progress bars (Accuracy, Latency, Safety, Cost)
- Step checklist
- Secure design badge
- Design-led AI card

**Implementation Notes**:
```tsx
'use client';
import gsap from 'gsap';
import { ScrollTrigger } from 'gsap/ScrollTrigger';

// Animate progress bar width on scroll trigger
```

#### 4.2 ToolsSection Component
**Source**: `.section-tools` with parallax animated images
**File**: `components/sections/ToolsSection.tsx`
**Key Elements**:
- Centered text/CTA
- 6 floating decorative images (`img-grow-1` through `img-grow-6`)
- Parallax/parallax-like animations on scroll

**Implementation Notes**:
```tsx
// Use GSAP with scrub:2 for smooth parallax
gsap.to(".img-grow-1", {
  y: 20,
  rotation: 5,
  scrollTrigger: { trigger: ".section-tools", scrub: 2 }
});
```

#### 4.3 FeaturedWorksSection Component
**Source**: `.section-featured-works#works` with hover effects and dots
**File**: `components/sections/FeaturedWorksSection.tsx`
**Key Elements**:
- 4 work items with images
- Hover effect: `.tf-mouse` floating label following cursor
- `.pagi-dot` progress dots (animated sequentially on scroll)
- 3-column metadata grid per work item

**Implementation Notes**:
```tsx
// Mouse hover effect: track mouse position, position label following
useEffect(() => {
  const handleMouseMove = (e) => {
    // Update label position relative to work item
    // Use lerp (linear interpolation) for smooth following
  };
});

// Animated dots: use GSAP ScrollTrigger to animate dots
gsap.to('.pagi-dot', {
  backgroundColor: 'active-color',
  stagger: 0.4,
  scrollTrigger: { trigger: '.section-featured-works' }
});
```

---

### Phase 5: Advanced GSAP Animations (Priority Medium)

These are the animations from `gsapAnimation.js`:

#### 5.1 Scroll Fade Effects (`.effectFade`)
- `fadeUp`, `fadeDown`, `fadeLeft`, `fadeRight`
- `fadeRotateX` (3D flip effect)
- `fadeZoom`
- `data-delay` attribute support

**Implementation**: Use `useGsapScrollTrigger` hook or create specialized `useScrollFadeAnimations` hook.

#### 5.2 Progress Bar Animations (`.progress-line`)
- Bars animate from 15% to target `data-progress` percent
- Triggered on scroll

#### 5.3 Parallax Image Animations (`img-transform-3`, `.img-grow-*`)
- Scale, rotate, translate effects
- Responsive behavior

#### 5.4 Magnetic Cursor Label (`.main-mouse-hover` + `.tf-mouse`)
- Smooth label following mouse
- Lerp interpolation

---

### Phase 6: Form and Dynamic Content (Priority Low)

#### 6.1 ContactSection Component
**Source**: `.section-contact#contact` with form
**File**: `components/sections/ContactSection.tsx`
**Key Elements**:
- Contact form (Name, Phone, Message, Attachment)
- Submit button
- Contact info (email, phone)

**Implementation Notes**:
```tsx
'use client';
const [formData, setFormData] = useState({ name: '', phone: '', message: '' });
const handleSubmit = (e) => { ... };
```

#### 6.2 Blog Listing Components
**File**: `components/sections/BlogListing.tsx`
**Key Elements**:
- Blog post cards with image, title, "Read more" link
- Pagination
- Different layouts: standard, 2-columns, 3-columns

---

## Key Implementation Patterns

### Pattern 1: Scroll-Triggered Animations
```tsx
'use client';
import { useEffect, useRef } from 'react';
import gsap from 'gsap';
import { ScrollTrigger } from 'gsap/ScrollTrigger';

gsap.registerPlugin(ScrollTrigger);

export default function MySection() {
  const sectionRef = useRef(null);

  useEffect(() => {
    const ctx = gsap.context(() => {
      gsap.to(selector, {
        property: value,
        scrollTrigger: {
          trigger: sectionRef.current,
          start: 'top 80%',
          end: 'top 50%'
        }
      });
    }, sectionRef);

    return () => {
      ctx.revert();
      ScrollTrigger.getAll().forEach(t => t.kill());
    };
  }, []);

  return <section ref={sectionRef}>...</section>;
}
```

### Pattern 2: useState for Toggles
```tsx
const [isOpen, setIsOpen] = useState(false);

const handleToggle = () => setIsOpen(!isOpen);

return (
  <>
    <button onClick={handleToggle}>Toggle</button>
    {isOpen && <Content />}
  </>
);
```

### Pattern 3: Swiper Initialization
```tsx
'use client';
import { Swiper, SwiperSlide } from 'swiper/react';
import { Navigation, Pagination } from 'swiper/modules';
import 'swiper/css';
import 'swiper/css/navigation';

export default function MySlider() {
  return (
    <Swiper modules={[Navigation, Pagination]} navigation pagination>
      <SwiperSlide>Slide 1</SwiperSlide>
      <SwiperSlide>Slide 2</SwiperSlide>
    </Swiper>
  );
}
```

---

## Testing Checklist

After implementing each component:
- [ ] Component renders without errors
- [ ] Mobile responsive (test on 320px, 768px, 1200px)
- [ ] Animations work smoothly
- [ ] Interactive elements respond to user input
- [ ] Images load correctly from `/assets/` path
- [ ] Links navigate correctly
- [ ] No console errors or warnings

---

## Performance Considerations

1. **Dynamic Imports**: Use `dynamic()` for heavy components
   ```tsx
   const CursorTrail = dynamic(() => import('./CursorTrail'), { ssr: false });
   ```

2. **CSS**: Keep Bootstrap CSS, consider purging unused styles later
3. **Images**: Optimize images, use Next.js `Image` component where possible
4. **Animations**: Use `will-change` CSS for animated elements
5. **Lazy Loading**: Use IntersectionObserver for scroll-triggered content

---

## Useful Commands

```bash
# Development
npm run dev          # Start dev server (http://localhost:3000)

# Building
npm run build        # Build for production
npm start            # Start production server

# Checking
npm run lint         # Run ESLint

# Debugging
# Enable verbose logging in next.config.ts if needed
```

---

## File Reference for Original HTML

All section HTML can be found in:
- **index.html** (main page with all sections)
- **about.html**, **service.html**, **work.html** (inner pages)
- **blog-standard.html**, **contact.html** (misc pages)

To quickly find HTML sections, search for:
- `.section-{name}` class names
- `id="anchor"` for linked sections
- `data-*` attributes for configuration

---

## Next Steps

1. **Start with HeroSection**: Simple, no interactions, good template
2. **Move to PartnerMarquee**: Pure CSS, no JavaScript needed
3. **Implement interactive sections**: Services, Pricing, FAQ (useState patterns)
4. **Add sliders**: Process, Statistic, Testimonials (Swiper)
5. **Implement animations**: Benefits, Tools, FeaturedWorks (GSAP)
6. **Forms**: ContactSection
7. **Polish**: Responsive tweaks, performance optimization

---

## Questions or Issues?

- Check original HTML for element structure and class names
- Verify assets are correctly referenced with `/assets/` prefix
- Test each component in isolation before integrating into page
- Use browser DevTools to debug animations and layout issues
