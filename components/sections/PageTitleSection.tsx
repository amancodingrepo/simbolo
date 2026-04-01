interface PageTitleSectionProps {
  title?: string;
  breadcrumbs?: { label: string; href?: string }[];
  backgroundImage?: string;
}

export default function PageTitleSection({
  title = "Blog",
  backgroundImage = "/assets/aman/hero.png",
  breadcrumbs = [{ label: "Home", href: "/" }, { label: "Blog" }],
}: PageTitleSectionProps) {
  return (
    <div
      className="section-page-title"
      style={{
        position: "relative",
        backgroundImage: `linear-gradient(rgba(255, 255, 255, 0.7), rgba(255, 255, 255, 0.7)), url(${backgroundImage})`,
        backgroundSize: "cover",
        backgroundPosition: "center",
        backgroundRepeat: "no-repeat",
        backgroundAttachment: "fixed",
      }}
    >
      <div className="container">
        <div className="page-title-wrap">
          <h1 className="heading-title fw-semibold effectFade fadeRotateX">
            {title}
          </h1>
          <ul className="breadcrumb effectFade fadeUp">
            {breadcrumbs.map((crumb, i) => (
              <li
                key={i}
                className={`breadcrumb-item${!crumb.href ? " active" : ""}`}
              >
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
