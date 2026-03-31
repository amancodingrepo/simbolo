# Simbolo - Next.js Conversion

This is the converted Next.js version of the Simbolo HTML/JavaScript project.

## Getting Started

### Installation

```bash
npm install
```

### Development Server

```bash
npm run dev
```

Open [http://localhost:3000](http://localhost:3000) with your browser to see the result.

### Building

```bash
npm run build
npm start
```

## Project Structure

```
├── app/                          # Pages (App Router)
│   ├── layout.tsx               # Root layout with header, footer, global styles
│   ├── globals.css              # Global styles
│   ├── page.tsx                 # Home page
│   ├── about/page.tsx           # About page
│   ├── service/                 # Service pages
│   ├── work/                    # Work/Portfolio pages
│   ├── blog/                    # Blog pages (standard, 2-columns, 3-columns)
│   ├── contact/page.tsx         # Contact page
│   ├── home-animated/page.tsx   # Animated home variant
│   └── not-found.tsx            # 404 page
│
├── components/                   # Reusable React components
│   ├── layout/
│   │   ├── Header.tsx           # Main header with navigation
│   │   ├── Footer.tsx           # Footer component
│   │   ├── MobileMenu.tsx       # Mobile/offcanvas menu
│   │   ├── GoTopButton.tsx      # Scroll-to-top button
│   │   ├── SettingsPanel.tsx    # Theme color & effects switcher
│   │   └── CursorTrail.tsx      # Canvas cursor trail effect
│   └── sections/                # Page sections (to be created)
│
├── hooks/                        # Custom React hooks
│   ├── useColorTheme.ts         # Color theme management
│   └── useGsapScrollTrigger.ts  # GSAP ScrollTrigger setup
│
├── public/
│   ├── assets/                  # All static assets from original project
│   │   ├── css/                 # Stylesheets
│   │   ├── js/                  # JavaScript libraries
│   │   ├── fonts/               # Web fonts
│   │   ├── icon/                # Icon fonts
│   │   ├── images/              # All images
│   │   └── scss/                # SCSS source files
│
├── package.json                 # Dependencies
├── tsconfig.json                # TypeScript configuration
├── next.config.ts               # Next.js configuration
└── .eslintrc.json              # ESLint configuration
```

## Technology Stack

- **Framework**: Next.js 16 with TypeScript
- **Router**: App Router (modern Next.js)
- **Styling**: Bootstrap 5 (reused from original)
- **Animations**: GSAP 3 with ScrollTrigger
- **Sliders**: Swiper (React version available)
- **Icons**: Icomoon icon font

## What's Been Done

✅ Next.js project scaffolded with TypeScript
✅ App Router structure created with all routes
✅ Layout component with header, footer, global navigation
✅ All assets copied to public folder
✅ Custom hooks for theme management and GSAP
✅ Layout components: Header, Footer, MobileMenu, GoTopButton, SettingsPanel
✅ Client-side utilities: CursorTrail canvas effect
✅ TypeScript configuration fixed
✅ Build tested and working

## What Still Needs To Be Done

- [ ] Convert all section components (Hero, About, Services, Features, etc.)
- [ ] Implement GSAP scroll animations for sections
- [ ] Create Swiper/Carousel components for sliders
- [ ] Convert jQuery form handling to React
- [ ] Create data/content structure for dynamic pages
- [ ] Add Swiper React components to replace vanilla JS initialization
- [ ] Implement remaining animations from gsapAnimation.js
- [ ] Test all interactive features
- [ ] Optimize images and performance

## Running the Project

```bash
# Start dev server
npm run dev

# Build for production
npm run build

# Start production server
npm start

# Run linting
npm run lint
```

## Notes

- All original assets are preserved in `/public/assets/`
- Bootstrap JS is still loaded for backward compatibility but can be replaced with React components
- jQuery is loaded but not required for new React components
- GSAP animations work with the `useGsapScrollTrigger` hook
- Color theme and cursor settings persist in localStorage
