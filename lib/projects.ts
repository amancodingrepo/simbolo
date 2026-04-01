export interface Project {
  slug: string;
  category: string;
  title: string;
  subtitle: string;
  heroTitle1: string;
  heroTitle2: string;
  coverImage: string;
  image2: string;
  image3: string;
  image4: string;
  listImage: string;
  deliverables: string[];
  industry: string;
  details: string;
  research: string;
  results: string;
  nextSlug: string;
  nextTitle: string;
  nextImage: string;
  dot: boolean[];
}

export const projects: Project[] = [
  {
    slug: '3d-visualization-cgi',
    category: 'Industrial Design Excellence',
    title: '3D Visualization & CGI',
    subtitle: 'Photorealistic 3D modeling and lighting architecture for the Luxxor ABK shower series, delivering high-fidelity marketing assets that eliminated the need for expensive physical studio sets.',
    heroTitle1: '3D Visualization',
    heroTitle2: '& CGI',
    coverImage: '/assets/aman/Screenshot 2026-04-01 115532.png',
    image2: '/assets/images/section/work-single-2.jpg',
    image3: '/assets/images/section/work-single-3.jpg',
    image4: '/assets/images/section/work-single-4.jpg',
    listImage: '/assets/aman/Screenshot 2026-04-01 115532.png',
    deliverables: ['High-Topology 3D Modeling', 'Photorealistic Product Rendering', 'Material Environment Design', 'Architectural Lighting Setup'],
    industry: 'Home Decor / Sanitaryware',
    details: `The client, Luxxor ABK, required a premium visual suite for their new matte black fixture line. Traditional photography faced significant challenges: capturing the subtle textures of matte finishes without over-exposure and managing complex reflections on chrome components. They needed a way to showcase the product's sleek profile against a high-contrast architectural background to signal luxury and modern engineering.\n\nWe developed a high-topology 3D digital twin of the shower system, focusing on material physics. By utilizing specialized PBR (Physically Based Rendering) shaders, we accurately replicated the light absorption of the matte surfaces and the sharp refractions of the metallic joints. We placed the assets in a custom-designed virtual environment with warm, directional lighting to accentuate the product's silhouette, providing the client with "infinite" camera angles that physical photography could not achieve.`,
    research: `We conducted a deep analysis of high-end interior design catalogs to identify current "warm-minimalism" trends. Research into consumer behavior showed that matte black fixtures are perceived as 30% more "premium" when shown in high-contrast, low-key lighting environments. We also ran virtual stress tests on the 3D meshes to ensure the curvature of the shower heads remained smooth at ultra-high 8K resolution for large-format print marketing. This ensured the final assets were versatile enough for everything from Instagram stories to trade-show banners without any quality degradation.`,
    results: `The 3D assets became the centerpiece of the Luxxor ABK digital catalog, contributing to significant pre-launch buzz on trade platforms. By shifting to a CGI-first workflow, the client saved approximately 70% in production costs compared to building physical bathroom sets.\n\nThe high-detail renders allowed for close-up technical shots used in assembly manuals and promotional web banners, ensuring a unified visual language across all customer touchpoints.`,
    nextSlug: 'product-photography',
    nextTitle: 'Product Photography',
    nextImage: '/assets/aman/Screenshot 2026-04-01 115715.png',
    dot: [true, false, false, false],
  },
  {
    slug: 'product-photography',
    category: 'D2C Skincare Optimization',
    title: 'Product Photography',
    subtitle: 'High-clarity product photography and lifestyle compositions for the LC Gluta Glow and LC-Glitz BTX lines, driving a unified brand aesthetic across e-commerce and social platforms.',
    heroTitle1: 'Product',
    heroTitle2: 'Photography',
    coverImage: '/assets/aman/Screenshot 2026-04-01 115715.png',
    image2: '/assets/images/section/work-single-2.jpg',
    image3: '/assets/images/section/work-single-3.jpg',
    image4: '/assets/images/section/work-single-4.jpg',
    listImage: '/assets/aman/Screenshot 2026-04-01 115715.png',
    deliverables: ['E-commerce Catalog Shots', 'Lifestyle Creative Direction', 'Color-Matched Post-Processing', 'Ingredient-Focused Compositions'],
    industry: 'Health & Beauty / D2C',
    details: `The skincare brand suffered from inconsistent visual messaging; their product shots varied in lighting and backdrop, which diluted brand authority. They needed a visual system that communicated both the "clinical" effectiveness of their ingredients (like Glutathione and Hyaluronic Acid) and the "luxury" experience of using the products.\n\nWe executed a dual-track production: clean, high-key studio photography for the web store and "hero" lifestyle compositions using natural elements like citrus and botanical accents to emphasize organic ingredients. We utilized soft-box lighting to minimize harsh reflections on the gold and white packaging, ensuring the fine print on the labels remained legible even at thumbnail sizes. This approach built immediate trust through visual transparency and professional polish.`,
    research: `Using historical ad data, we identified that skincare consumers are 40% more likely to click on ads that visually represent the "key ingredient" (e.g., oranges for Vitamin C). We audited the layouts of top-performing beauty brands to determine the optimal "product-to-negative-space" ratio for mobile viewing.\n\nThis research led us to implement the "vibrant yellow/gold" theme, which outperformed neutral palettes in user preference tests for "radiance" products.`,
    results: `Following the rollout of the new imagery, the brand reported a 28% increase in click-through rates (CTR) on Meta ads. The standardized product shots reduced customer inquiries regarding packaging details by 50%.\n\nThe lifestyle assets were successfully leveraged for a series of influencer kits, establishing a cohesive visual identity that helped the brand scale its social media presence rapidly.`,
    nextSlug: 'content-creation-editing',
    nextTitle: 'Content Creation & Editing',
    nextImage: '/assets/aman/Screenshot 2026-04-01 115824.png',
    dot: [false, true, false, false],
  },
  {
    slug: 'content-creation-editing',
    category: 'Education & Engagement Growth',
    title: 'Content Creation & Editing',
    subtitle: 'High-retention short-form video production and editing for educational creators, utilizing kinetic typography and strategic hooks to maximize watch time on vertical platforms.',
    heroTitle1: 'Content Creation',
    heroTitle2: '& Editing',
    coverImage: '/assets/aman/Screenshot 2026-04-01 115824.png',
    image2: '/assets/images/section/work-single-2.jpg',
    image3: '/assets/images/section/work-single-3.jpg',
    image4: '/assets/images/section/work-single-4.jpg',
    listImage: '/assets/aman/Screenshot 2026-04-01 115824.png',
    deliverables: ['Vertical Video Editing', 'Kinetic Typography', 'Motion Graphic Overlays', 'Thumbnail Design & Strategy'],
    industry: 'Ed-Tech / Digital Media',
    details: `The creators at Satyadhi Sharma Classes had high-value information but struggled with low viewer retention on their mobile content. Their videos lacked the visual "pop" required to keep users engaged in the fast-paced environment of Reels and YouTube Shorts. Critical educational points were being lost because the visual delivery was too static and failed to grab attention within the first three seconds.\n\nWe revamped the editing style to be "kinetic-first." This involved integrating bold on-screen captions, frequent pattern interrupts (dynamic zooms and cuts), and high-impact thumbnail overlays. We focused on the "Daily Marathon" and news-style content, ensuring that even complex topics were broken down into digestible, fast-paced visual segments. By layering in custom motion graphics and sound cues, we transformed standard lecture clips into high-energy, scroll-stopping content.`,
    research: `We tracked "drop-off" heatmaps on previous uploads and found that viewers exited during long pauses or complex technical explanations. Our solution was to "visualize the speech" — whenever a key term or "headline" was mentioned, we triggered a text overlay to reinforce the message.\n\nWe also researched trending educational formats on TikTok to implement a "news-ticker" style layout that increased perceived authority and urgency.`,
    results: `The new editing style led to a 60% increase in average watch time across the channel. One of the "Daily Marathon" clips went viral, generating 5x the usual engagement and driving thousands of new subscribers.\n\nThe creators reported that students found the new format much easier to learn from, and the "Birds Got Killed" news-style segments became a signature format that significantly boosted the brand's shareability.`,
    nextSlug: 'graphic-design-real-estate',
    nextTitle: 'Graphic Design',
    nextImage: '/assets/aman/Screenshot 2026-04-01 120156.png',
    dot: [false, false, true, false],
  },
  {
    slug: 'graphic-design-real-estate',
    category: 'Real Estate Visual Systems',
    title: 'Graphic Design',
    subtitle: 'A comprehensive suite of marketing collateral for premium land plots and eco-friendly farmhouses, designed to convert high-intent leads through clear information hierarchy and aspirational design.',
    heroTitle1: 'Graphic Design',
    heroTitle2: '& Real Estate',
    coverImage: '/assets/aman/Screenshot 2026-04-01 120156.png',
    image2: '/assets/images/section/work-single-2.jpg',
    image3: '/assets/images/section/work-single-3.jpg',
    image4: '/assets/images/section/work-single-4.jpg',
    listImage: '/assets/aman/Screenshot 2026-04-01 120156.png',
    deliverables: ['Social Media Ad Sets', 'Isometric Property Illustrations', 'Infographic Design', 'Sales Presentation Assets'],
    industry: 'Real Estate / Property Development',
    details: `The real estate client needed to sell land plots starting at ₹1551/- sqft, but their existing marketing materials felt cluttered and lacked a "luxury" feel. In the competitive real estate market, potential buyers are overwhelmed with data; the client needed a design system that could communicate complex offers (like "Registry Free" or "TVs Scooty" incentives) without sacrificing the "dream home" emotional appeal.\n\nWe designed a series of high-impact social media tiles and "Ideal Plot" infographics. We utilized a 3D-isometric design style for the plot visualizations to make the land feel tangible and "ready-to-build." By establishing a strict visual hierarchy — bold pricing, clear benefit checklists, and high-contrast call-to-action buttons — we ensured that even a casual scroller could digest the entire offer in under two seconds.`,
    research: `We analyzed the color psychology of real estate and found that "Earth Green" paired with "Trust Blue" or "Success Gold" created the highest level of lead-form submissions. We benchmarked against national developers to identify the most effective layout for property features.\n\nOur research showed that "floating island" graphics helped buyers visualize ownership better than flat site maps, leading us to adopt the isometric "path to success" visual theme.`,
    results: `The campaign generated a 45% increase in qualified lead inquiries within the first 60 days. The "Special Offer" tiles became the client's most-shared assets, significantly reducing their cost-per-lead (CPL) on Facebook.\n\nThe unified design system was later adapted for on-site billboards and print brochures, providing a seamless "O2O" (Online to Offline) brand experience for prospective buyers.`,
    nextSlug: '3d-visualization-cgi',
    nextTitle: '3D Visualization & CGI',
    nextImage: '/assets/aman/Screenshot 2026-04-01 115532.png',
    dot: [false, false, false, true],
  },
];
