interface PageTitleSectionProps {
  title?: string;
  breadcrumbs?: { label: string; href?: string }[];
}

export default function PageTitleSection({
  title = 'Blog',
  breadcrumbs = [
    { label: 'Home', href: '/' },
    { label: 'Blog' },
  ],
}: PageTitleSectionProps) {
  return (
    <div className="section-page-title">
      <div className="container">
        <div className="page-title-wrap">
          <h1 className="heading-title fw-semibold effectFade fadeRotateX">{title}</h1>
          <ul className="breadcrumb effectFade fadeUp">
            {breadcrumbs.map((crumb, i) => (
              <li key={i} className={`breadcrumb-item${!crumb.href ? ' active' : ''}`}>
                {crumb.href ? (
                  <a href={crumb.href}>{crumb.label}</a>
                ) : (
                  <span>{crumb.label}</span>
                )}
              </li>
            ))}
          </ul>
        </div>
      </div>
    </div>
  );
}
