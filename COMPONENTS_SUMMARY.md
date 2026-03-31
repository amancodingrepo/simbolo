# React TypeScript Section Components - Simbolo Website

## Summary
Created 10 production-ready React section components in TypeScript for the Simbolo website. All components follow Next.js best practices with proper typing and Bootstrap CSS compatibility.

## Components Created

### 1. HeroSection.tsx (3.0 KB)
**Purpose:** Hero banner with title, buttons, and scroll indicator
**Key Features:**
- Accepts customizable title, subtitle, and description
- Supports default and v1 variants
- Primary and secondary buttons with Next.js Link
- Scroll-more anchor link
- Uses Bootstrap classes: section-hero, text-display-2, text-gradient-1, effectFade animations
- Props interface for dynamic content

**Props:**
- `subTitle`, `title1`, `title2`, `description`
- `primaryButtonText`, `primaryButtonHref`
- `secondaryButtonText`, `secondaryButtonHref`
- `showScrollMore`, `variant`

---

### 2. AboutSection.tsx (5.6 KB)
**Purpose:** About section with earth image, counter, testimonial, and Trustpilot integration
**Key Features:**
- Responsive grid layout (col-xxl-7, col-lg-6)
- Location info with branding
- Animated counter with data attributes
- Testimonial card with image and quote
- Bootstrap classes: section-about-us, flat-spacing, text-gradient-2
- Trustpilot integration with star ratings

**Props:**
- `headingSubtitle`, `headingTitle`
- `locationText`, `location`
- `description`
- `clientCount`, `clientCounterProps`
- `testimonial` object with image, quote, name, role

---

### 3. PartnerMarquee.tsx (1.5 KB)
**Purpose:** Infinite scrolling partner logos carousel
**Key Features:**
- Infinitely looping marquee effect
- Configurable partners array
- Data attribute for clone count
- Bootstrap classes: section-partner, infiniteSlide, infiniteSlide_partner
- Lightweight and reusable

**Props:**
- `heading` - Text above the carousel
- `partners` - Array of logo objects with src and alt
- `dataClone` - Number of clones for infinite scroll (default: 5)

---

### 4. ServicesSection.tsx (4.2 KB)
**Purpose:** Services section with expandable accordion cards
**Key Features:**
- Grid layout with col-md-6, col-lg-4 responsive columns
- Expandable service cards with detailed information
- Service icons (optional)
- Toggle functionality with React state
- Bootstrap classes: section-services, flat-spacing
- Animation delays for staggered effect

**Props:**
- `headingSubtitle`, `headingTitle`
- `services` - Array of service items with id, title, description, details

---

### 5. FeaturedWorksSection.tsx (3.5 KB)
**Purpose:** Portfolio/case studies showcase grid
**Key Features:**
- Two-column grid layout (col-lg-6)
- Work cards with images and overlay
- Category and description for each project
- Next.js Link integration for case studies
- Bootstrap classes: section-featured-works, flat-spacing, pt-0
- Hover overlay with CTA button

**Props:**
- `headingSubtitle`, `headingTitle`
- `works` - Array of work items with id, title, category, description, image, link

---

### 6. ProcessSection.tsx (2.9 KB)
**Purpose:** Process methodology with 4 numbered steps
**Key Features:**
- Four-step process layout (col-lg-3, col-md-6)
- Number display with gradient text
- Icon support per step
- Arrow indicators between steps
- Bootstrap classes: section-process, flat-spacing, pt-0
- Text animations with fadeUp effect

**Props:**
- `headingSubtitle`, `headingTitle`
- `steps` - Array with number, title, description, icon

---

### 7. BenefitsSection.tsx (2.7 KB)
**Purpose:** Benefits/features list in grid layout
**Key Features:**
- Responsive grid (col-md-6, col-lg-4)
- Benefit cards with icons
- Optional highlight flag for featured benefits
- Bootstrap classes: section-benefits, flat-spacing, pt-0
- Animation delays for staggered appearance

**Props:**
- `headingSubtitle`, `headingTitle`
- `benefits` - Array with id, title, description, icon, highlight

---

### 8. FeaturesSection.tsx (3.0 KB)
**Purpose:** Advanced capabilities with decorative elements
**Key Features:**
- Multi-container structure with z-index management
- Decorative side-line elements
- Features grid with justify-content-between
- Feature items with icons and descriptions
- Bootstrap classes: section-features, flat-spacing, pt-0, z-5
- Flexible layout for variable-width items

**Props:**
- `headingSubtitle`, `headingTitle`
- `features` - Array with id, title, description, icon

---

### 9. ToolsSection.tsx (3.5 KB)
**Purpose:** Technologies and tools showcase
**Key Features:**
- Two variants: default (container-based) and v2 (centered wrap)
- Tool cards with images and categories
- Responsive grid layout
- Bootstrap classes: section-tools, flat-spacing
- Category badges optional

**Props:**
- `headingSubtitle`, `headingTitle`
- `tools` - Array with id, name, image, category
- `variant` - 'default' or 'v2'

---

### 10. TeamSection.tsx (3.8 KB)
**Purpose:** Team members grid with social links
**Key Features:**
- Responsive team grid (col-md-6, col-lg-3)
- Member cards with images and overlays
- Social media links array support
- Role and bio information
- Bootstrap classes: section-team, flat-spacing
- Hover overlay with social links

**Props:**
- `headingSubtitle`, `headingTitle`
- `members` - Array with id, name, role, image, bio, socials array

---

## Common Features Across All Components

### Structure
- ✅ `'use client'` directive at top for Next.js 13+ client components
- ✅ TypeScript interfaces for all props
- ✅ Default values for all optional props
- ✅ Default/placeholder data included

### Styling
- ✅ All Bootstrap classes preserved exactly
- ✅ CSS class names unchanged from HTML
- ✅ Animation classes (effectFade, fadeUp, fadeRotateX, etc.)
- ✅ Spacing utilities (flat-spacing, pt-0, mb-24, gap-20, etc.)
- ✅ Responsive grid classes (col-md-6, col-lg-4, col-xxl-7, etc.)

### Next.js Integration
- ✅ Next.js Link components for navigation
- ✅ Dynamic image paths using /assets/ convention
- ✅ Data attributes preserved for JavaScript interactions
- ✅ Proper TypeScript typing throughout

### Dynamic Content
- ✅ Props for customizing headings, descriptions, images
- ✅ Array props for repeating content (services, works, team, etc.)
- ✅ Optional icon support
- ✅ Configurable variants where applicable

## File Locations
All components are located in: `/c/Users/Asus/Desktop/simbolo/new/`

```
HeroSection.tsx
AboutSection.tsx
PartnerMarquee.tsx
ServicesSection.tsx
FeaturedWorksSection.tsx
ProcessSection.tsx
BenefitsSection.tsx
FeaturesSection.tsx
ToolsSection.tsx
TeamSection.tsx
```

## Usage Example

```tsx
import HeroSection from '@/components/sections/HeroSection';
import AboutSection from '@/components/sections/AboutSection';
import PartnerMarquee from '@/components/sections/PartnerMarquee';

export default function Home() {
  return (
    <>
      <HeroSection 
        title1="Your AI Sprint Team"
        description="Custom description here"
      />
      <AboutSection 
        clientCount={150}
        location="Toronto, Canada"
      />
      <PartnerMarquee />
    </>
  );
}
```

## Notes
- All components are production-ready and can be imported directly
- Replace placeholder data with real content via props
- Image paths assume `/assets/` directory exists in public folder
- CSS classes rely on Bootstrap framework or custom CSS modules
- Data attributes (data-speed, data-to, data-clone) require JavaScript handlers
