# Quick Start Guide - React Components

## 10 Components Ready to Use

All components are production-ready, fully typed, and support dynamic content via props.

### 1. Import Components

Option A - Individual imports:
```tsx
import HeroSection from '@/components/HeroSection';
import AboutSection from '@/components/AboutSection';
```

Option B - Batch import:
```tsx
import {
  HeroSection,
  AboutSection,
  PartnerMarquee,
  ServicesSection,
  FeaturedWorksSection,
  ProcessSection,
  BenefitsSection,
  FeaturesSection,
  ToolsSection,
  TeamSection
} from '@/components';
```

### 2. Use Components

```tsx
export default function Home() {
  return (
    <main>
      <HeroSection
        title1="Your AI Sprint Team"
        title2="on Demand"
        description="Transform your business with AI"
        primaryButtonText="Get Started"
        primaryButtonHref="/contact"
      />
      <AboutSection
        clientCount={120}
        location="Montréal, Canada"
      />
      <PartnerMarquee
        heading="Trusted by 100+ brands"
      />
      <ServicesSection
        services={[
          {
            id: 'svc-1',
            title: 'Custom AI Development',
            description: 'Build your AI solution',
            details: 'Full-stack development with best practices'
          }
        ]}
      />
      <FeaturedWorksSection />
      <ProcessSection />
      <BenefitsSection />
      <FeaturesSection />
      <ToolsSection variant="default" />
      <TeamSection />
    </main>
  );
}
```

### 3. Component Props Reference

| Component | Key Props | Required | Default |
|-----------|-----------|----------|---------|
| HeroSection | `title1`, `title2`, `description` | No | Yes (defaults provided) |
| AboutSection | `clientCount`, `location`, `testimonial` | No | Yes |
| PartnerMarquee | `partners`, `heading` | No | Yes |
| ServicesSection | `services` (array) | No | Yes |
| FeaturedWorksSection | `works` (array) | No | Yes |
| ProcessSection | `steps` (array) | No | Yes |
| BenefitsSection | `benefits` (array) | No | Yes |
| FeaturesSection | `features` (array) | No | Yes |
| ToolsSection | `tools` (array), `variant` | No | Yes |
| TeamSection | `members` (array) | No | Yes |

### 4. Data Structure Examples

**Services:**
```tsx
{
  id: 'service-id',
  title: 'Service Title',
  description: 'Short description',
  icon?: '/assets/icon.svg',
  details?: 'Expanded details for accordion'
}
```

**Works:**
```tsx
{
  id: 'work-id',
  title: 'Project Title',
  category: 'Category',
  description: 'Description',
  image: '/assets/images/work-1.jpg',
  link?: '/case-study/1'
}
```

**Team Members:**
```tsx
{
  id: 'member-id',
  name: 'Full Name',
  role: 'Job Title',
  image: '/assets/images/team/member.jpg',
  bio?: 'Short bio',
  socials?: [
    { platform: 'linkedin', url: 'https://...' },
    { platform: 'twitter', url: 'https://...' }
  ]
}
```

### 5. CSS Requirements

All components use Bootstrap CSS classes. Ensure your project has:

```html
<!-- In your layout.tsx or _document -->
<link href="https://cdn.jsdelivr.net/npm/bootstrap@5.3.0/dist/css/bootstrap.min.css" rel="stylesheet">
```

Or import Bootstrap in your CSS:
```css
@import 'bootstrap/dist/css/bootstrap.css';
```

### 6. Custom Animation Classes

Components use custom animation classes:
- `effectFade` - Base fade animation
- `fadeUp`, `fadeDown`, `fadeLeft`, `fadeRight` - Direction variants
- `fadeRotateX`, `fadeRotateY` - 3D rotations
- `fadeZoom` - Zoom effect
- `img-transform-3` - Image animation

You need to define these in your CSS or add them to your animation library.

### 7. Data Attributes

Some components use data attributes for JavaScript hooks:
- `data-speed="1500"` - Counter animation speed (ms)
- `data-to="120"` - Counter target value
- `data-inviewport="yes"` - Trigger on viewport entry
- `data-clone="5"` - Infinite scroll duplication count

Add JavaScript handlers to animate these elements on mount/scroll.

### 8. Next.js Configuration

No special configuration needed. Components are Next.js 13+ ready with:
- `'use client'` directive for client-side features
- Next.js `Link` component for navigation
- Image paths using `/assets/` directory

### 9. TypeScript

All components are fully typed. Props interfaces are defined in each component:

```tsx
import type { HeroSectionProps } from '@/components/HeroSection';

const props: HeroSectionProps = {
  title1: 'Your Title',
  // ... type-checked
};
```

### 10. Common Customizations

**Change Button Styles:**
```tsx
<HeroSection
  primaryButtonText="Custom Text"
  primaryButtonHref="/custom-path"
/>
```

**Override Content:**
```tsx
<ServicesSection
  services={myCustomServices}
  headingTitle="My Custom Title"
/>
```

**Add More Items:**
```tsx
<TeamSection
  members={[...defaultMembers, ...myAdditionalMembers]}
/>
```

## File Structure

```
components/
├── HeroSection.tsx
├── AboutSection.tsx
├── PartnerMarquee.tsx
├── ServicesSection.tsx
├── FeaturedWorksSection.tsx
├── ProcessSection.tsx
├── BenefitsSection.tsx
├── FeaturesSection.tsx
├── ToolsSection.tsx
├── TeamSection.tsx
├── index.ts
├── COMPONENTS_SUMMARY.md
└── QUICK_START.md (this file)
```

## Next Steps

1. Copy all `.tsx` files to your `components/` directory
2. Install Bootstrap if not already installed
3. Update image paths in `/assets/` directory
4. Replace placeholder data with real content
5. Style animation classes with your CSS framework
6. Test responsive behavior across breakpoints

## Support

- Check COMPONENTS_SUMMARY.md for detailed component documentation
- All components have inline comments explaining key sections
- Default prop values show expected data structures
- TypeScript interfaces provide type hints in your IDE
