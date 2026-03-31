# HTML TO NEXT.JS CONVERSION - SECTION EXTRACTION GUIDE

## OVERVIEW
- Total unique sections: 21 types
- Data attributes used: data-clone, data-speed, data-to, data-inviewport
- Layout framework: Bootstrap (container, row, col-*, d-flex utilities)

---

## DETAILED SECTION ANALYSIS BY FILE

### FILE: index.html (16 sections)

#### 1. HERO SECTION
```html
<div class="section-hero">
    <div class="hero-image"></div>
    <div class="container">
        <div class="content-wrap text-center">
            <div class="sub fw-semibold effectFade fadeUp">
                [SVG icon content]
                AI-Driven Agency
            </div>
            <div class="title text-display-2 effectFade fadeRotateX">
                <span class="title1 fw-semibold text-gradient-1">Your AI Sprint Team</span>
                <br>
                <div class="title2 d-flex gap-20 justify-content-center flex-wrap">
                    <span class="fw-semibold text-gradient-1">on Demand</span>
                    <div class="title-icon">
                        <div class="box"></div>
                        <div class="title-icon-wrap">
                            <img class="img-1 img-transform-3" src="assets/images/item/hero-1.svg" alt="">
                            <img class="img-2 img-transform-3" src="assets/images/item/hero-2.svg" alt="">
                            <img class="img-3 img-transform-3" src="assets/images/item/hero-3.svg" alt="">
                        </div>
                    </div>
                </div>
            </div>
            <p class="text effectFade fadeUp">Description text...</p>
            <div class="bot-btns effectFade fadeRotateX">
                <a href="service.html" class="tf-btn">Explore Services</a>
                <a href="#pricing" class="tf-btn-2">View Pricing Plans</a>
            </div>
        </div>
    </div>
    <a href="#about" class="scroll-more">
        <span class="fw-semibold link1">Scroll for more</span>
        <i class="icon icon-long-arrow-alt-down-solid"></i>
    </a>
</div>
```
Key classes: section-hero, text-center, text-display-2, text-gradient-1, effectFade fadeRotateX
Key animations: effectFade, fadeRotateX, fadeUp, fadeZoom

#### 2. ABOUT-US SECTION
```html
<div class="section-about-us flat-spacing" id="about">
    <div class="container">
        <div class="row">
            <div class="col-12">
                <div class="heading-section">
                    <div class="heading-sub fw-semibold effectFade fadeUp">About Us</div>
                    <div class="heading-title text-gradient-2 effectFade fadeRotateX">Human-Centered AI</div>
                </div>
            </div>
            <div class="col-xxl-7 col-lg-6 lg-mb-24">
                <!-- Left content with image -->
            </div>
            <div class="col-xxl-5 col-lg-6">
                <!-- Right content with reviews -->
                <div class="counter text-neutral-200">
                    <span class="number" data-speed="1500" data-to="120" data-inviewport="yes">10</span>
                </div>
            </div>
        </div>
    </div>
</div>
```
Data attributes: data-speed, data-to, data-inviewport
Key classes: flat-spacing, col-xxl-*, col-lg-*

#### 3. PARTNER SECTION
```html
<div class="section-partner">
    <div class="container">
        <div class="row">
            <div class="col-12">
                <div class="partner-wrap">
                    <p class="text-secondary text fw-semibold">Trusted by 100+</p>
                    <div class="infiniteSlide_tech_main d-grid">
                        <div class="infiniteSlide infiniteSlide_partner" data-clone="5">
                            <img src="assets/images/partner/partner-1.svg" alt="">
                            <img src="assets/images/partner/partner-2.svg" alt="">
                        </div>
                    </div>
                </div>
            </div>
        </div>
    </div>
</div>
```
Data attributes: data-clone="5"
Key classes: infiniteSlide_tech_main, infiniteSlide, d-grid

#### 4. SERVICES SECTION
```html
<div id="services" class="section-services flat-spacing">
    <div class="container">
        <div class="row">
            <div class="col-12">
                <div class="heading-section">
                    <div class="heading-sub fw-semibold effectFade fadeUp">What We Do</div>
                    <div class="heading-title text-gradient-2">Full-Stack AI Solutions</div>
                </div>
            </div>
        </div>
    </div>
</div>
```
IDs: services
Key classes: section-services, flat-spacing

#### 5. FEATURED-WORKS SECTION
```html
<div id="works" class="section-featured-works flat-spacing pt-0">
    <div class="container">
        <!-- Works grid layout -->
    </div>
</div>
```
IDs: works
Key classes: section-featured-works, flat-spacing, pt-0

#### 6. PROCESS SECTION
```html
<div class="section-process flat-spacing pt-0">
    <div class="container">
        <!-- Process steps -->
    </div>
</div>
```

#### 7. BENEFITS SECTION
```html
<div class="section-benefits flat-spacing pt-0">
    <div class="container">
        <!-- Benefits cards -->
    </div>
</div>
```

#### 8. FEATURES SECTION
```html
<div class="section-features flat-spacing pt-0">
    <div class="container z-5">
        <div class="heading-section">
            <div class="heading-sub fw-semibold effectFade fadeUp">Features</div>
            <div class="heading-title text-gradient-2">Powerful Capabilities</div>
        </div>
    </div>
    <div class="container">
        <div class="features-wrap justify-content-between">
            <!-- Features grid -->
        </div>
    </div>
</div>
```

#### 9. TOOLS SECTION
```html
<div class="section-tools flat-spacing">
    <div class="container">
        <div class="heading-section text-center">
            <!-- Tools -->
        </div>
    </div>
</div>
```

#### 10. TEAM SECTION
```html
<div class="section-team flat-spacing">
    <div class="container">
        <div class="row">
            <div class="col-12">
                <div class="heading-section text-center">
                    <div class="heading-sub fw-semibold effectFade fadeUp">Our Team</div>
                    <div class="heading-title text-gradient-2">Meet The Builders</div>
                </div>
            </div>
        </div>
    </div>
</div>
```

---

### FILE: about.html (11 sections)
Includes all of above PLUS:
- section-statistic
- section-awards flat-spacing
- section-testimonials flat-spacing pt-0
- section-faqs flat-spacing
- section-tools v2 flat-spacing

```html
<div class="section-statistic">
    <div class="container">
        <span class="number" data-speed="1000" data-to="500" data-inviewport="yes">0</span>
    </div>
</div>
```

---

### FILE: service.html (7-8 sections)

```html
<div id="pricing" class="section-pricing flat-spacing pt-0">
    <div class="container">
        <div class="row">
            <div class="col-12">
                <div class="heading-section text-center">
                    <div class="heading-sub fw-semibold">Flexible Pricing</div>
                    <div class="heading-title text-gradient-2">Choose Your Plan</div>
                </div>
            </div>
        </div>
    </div>
</div>
```

---

### FILE: work.html (6-7 sections)

Unique section:
```html
<div class="section-delay flat-spacing">
    <div class="container">
        <div class="delay-wrap">
            <!-- Work items -->
        </div>
    </div>
</div>
```

---

### FILE: blog-standard.html (2 sections)

```html
<div class="section-page-title">
    <div class="container text-center">
        <h1>Blog</h1>
    </div>
</div>

<section class="section-blog flat-spacing">
    <div class="container">
        <!-- Blog posts -->
    </div>
</section>
```

---

### FILE: contact.html (3-4 sections)

```html
<div id="contact" class="flat-spacing">
    <div class="section-contact">
        <div class="container">
            <!-- Contact form -->
        </div>
    </div>
</div>
```

---

### FILE: index-v2.html (16 sections - same as index.html)
Variant with same structure but animation differences.

---

## SUMMARY TABLE

| Section Type | Files | Classes | Data Attrs | IDs |
|---|---|---|---|---|
| section-hero | All | text-center, effectFade | - | - |
| section-hero v1 | about, service, work, contact | - | - | - |
| section-about-us | index, about, index-v2 | flat-spacing | - | about |
| section-partner | index, about, service, index-v2 | - | data-clone | - |
| section-services | index, service, index-v2 | flat-spacing | - | services |
| section-featured-works | index, work, index-v2 | flat-spacing, pt-0 | - | works |
| section-process | index, service, index-v2 | flat-spacing, pt-0 | - | - |
| section-pricing | service, work | flat-spacing, pt-0 | - | pricing |
| section-benefits | index, index-v2 | flat-spacing, pt-0 | - | - |
| section-features | index, about, index-v2 | flat-spacing, pt-0 | - | - |
| section-team | index, about, index-v2 | flat-spacing | - | - |
| section-tools | index, index-v2 | flat-spacing | - | - |
| section-tools v2 | about | flat-spacing | - | - |
| section-statistic | index, about, index-v2 | - | data-speed, data-to, data-inviewport | - |
| section-testimonials | about | flat-spacing, pt-0 | - | - |
| section-awards | about | flat-spacing | - | - |
| section-faqs | about, service, work, contact | flat-spacing | - | - |
| section-contact | about, service, work, contact | - | - | contact |
| section-delay | work | flat-spacing | - | - |
| section-blog | blog-standard | flat-spacing | - | - |
| section-page-title | blog-standard | - | - | - |

---

## KEY PATTERNS FOR CONVERSION

### Layout Pattern (Standard)
```html
<div class="section-[name] [modifiers]" [id]>
    <div class="container">
        <div class="row">
            <div class="col-[size]">
                <!-- Content -->
            </div>
        </div>
    </div>
</div>
```

### Heading Pattern
```html
<div class="heading-section [text-center]">
    <div class="heading-sub fw-semibold effectFade fadeUp">[Label]</div>
    <div class="heading-title text-gradient-2 effectFade fadeRotateX">[Title]</div>
</div>
```

### Animation Classes
- effectFade - Base animation
- fadeUp, fadeDown, fadeLeft, fadeRight - Direction variants
- fadeRotateX, fadeRotateY, fadeZoom - Transform variants
- img-transform-3 - Applied to images
- text-gradient-1, text-gradient-2 - Gradient text colors

### Spacing Classes
- flat-spacing - Default section spacing
- pt-0 - Remove top padding
- lg-mb-24 - Large margin bottom responsive
- Gap utilities: gap-20, gap-24, gap-4, gap-2, gap-12

### Counter/Animation Data Attributes
- data-speed="1500" - Animation duration in ms
- data-to="120" - Target counter number
- data-inviewport="yes" - Trigger on scroll into view
- data-clone="5" - Carousel infinite scroll clone count

---

## NEXT.JS COMPONENT STRUCTURE RECOMMENDATION

Create React components for each section type:
- components/sections/HeroSection.tsx
- components/sections/AboutUsSection.tsx
- components/sections/PartnerSection.tsx
- components/sections/ServicesSection.tsx
- components/sections/FeaturedWorksSection.tsx
- components/sections/ProcessSection.tsx
- components/sections/BenefitsSection.tsx
- components/sections/FeaturesSection.tsx
- components/sections/TeamSection.tsx
- components/sections/ToolsSection.tsx
- components/sections/StatisticSection.tsx
- components/sections/TestimonialsSection.tsx
- components/sections/AwardsSection.tsx
- components/sections/FAQsSection.tsx
- components/sections/PricingSection.tsx
- components/sections/ContactSection.tsx
- components/sections/BlogSection.tsx
