import Link from 'next/link';

interface ToolItem {
  name: string;
  image?: string;
  category?: string;
}

interface ToolsSectionProps {
  variant?: 'default' | 'v2';
  heading?: string;
  subheading?: string;
  description?: string;
  ctaText?: string;
  ctaHref?: string;
  /** Accept either string names or ToolItem objects */
  tools?: (string | ToolItem)[];
}

export default function ToolsSection({
  variant = 'default',
  heading,
  subheading = 'Technolzzzogy',
  description = 'From cinema cameras and professional lighting arrays to advanced web frameworks and marketing analytics platforms, we use the best tools to guarantee maximum impact.',
  ctaText = 'Start Scaling',
  ctaHref = '/contact',
}: ToolsSectionProps) {
  const resolvedHeading = heading ?? 'We leverage industry-leading gear and tech';

  return (
    <div className={`section-tools flat-spacing${variant === 'v2' ? ' v2' : ''}`}>
      {/* Google Ads — marketing analytics */}
      <img className="img-1 img-grow-1" src="/assets/aman/google-icon-logo-svgrepo-com.svg" alt="Google" />
      {/* LinkedIn — social/marketing platform */}
      <img className="img-2 img-grow-2" src="/assets/aman/linkedin-svgrepo-com.svg" alt="LinkedIn" />
      {/* Meta — social/ad platform */}
      <img className="img-3 img-grow-3" src="/assets/aman/meta.webp" alt="Meta" />
      {/* Brand tool 1 */}
      <img className="img-4 img-grow-4" src="/assets/aman/brand logo/3.png" alt="Tool" />
      {/* Brand tool 2 */}
      <img className="img-5 img-grow-5" src="/assets/aman/brand logo/5.png" alt="Tool" />
      {/* Brand tool 3 */}
      <img className="img-6 img-grow-6" src="/assets/aman/brand logo/8.png" alt="Tool" />
      <div className="container">
        <div className="row justify-content-center">
          <div className="col-xl-5 col-md-8 text-center">
            <div className="heading-section center mb-48">
              <div className="heading-sub fw-semibold effectFade fadeUp">{subheading}</div>
              <div className="heading-title text-gradient-3 effectFade fadeRotateX">{resolvedHeading}</div>
            </div>
            <div className="text effectFade fadeUp">
              {description}
            </div>
            <Link href={ctaHref} className="tf-btn effectFade fadeRotateX">
              {ctaText}
            </Link>
          </div>
        </div>
      </div>
    </div>
  );
}
