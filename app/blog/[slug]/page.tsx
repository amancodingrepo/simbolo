import { notFound } from "next/navigation";
import { blogs } from "@/lib/blogs";

export function generateStaticParams() {
  return blogs.map((b) => ({ slug: b.slug }));
}

export default async function BlogSingle({
  params,
}: {
  params: Promise<{ slug: string }>;
}) {
  const { slug } = await params;
  const post = blogs.find((b) => b.slug === slug);
  if (!post) return notFound();

  const otherPosts = blogs.filter((b) => b.slug !== post.slug).slice(0, 3);

  return (
    <>
      {/* Hero */}
      <div className="section-hero v2" style={{ position: "relative" }}>
        <div
          className="hero-image"
          style={{
            backgroundImage:
              "linear-gradient(rgba(255, 255, 255, 0.7), rgba(255, 255, 255, 0.7)), url(/assets/aman/hero.png)",
            backgroundSize: "cover",
            backgroundPosition: "center",
            position: "absolute",
            top: 0,
            left: 0,
            width: "100%",
            height: "100%",
            zIndex: -1,
            opacity: 1,
          }}
        ></div>
        <div className="container">
          <div className="content-wrap text-center">
            <div className="title text-display-2 effectFade fadeRotateX">
              <span className="title1 fw-semibold text-gradient-1">
                {post.title}
              </span>
              <br />
              <div className="title2 d-flex gap-20 justify-content-center flex-wrap">
                <span className="fw-semibold text-gradient-1">
                  {post.category}
                </span>
              </div>
            </div>
            <p className="text effectFade fadeUp">{post.excerpt}</p>
            {/* Cover image - positioned below text */}
            <div
              className="wrap-image mb-60 effectFade fadeZoom"
              style={{ marginTop: "40px" }}
            >
              <img
                src={post.coverImage}
                alt={post.title}
                style={{
                  width: "100%",
                  objectFit: "cover",
                  borderRadius: "12px",
                  maxHeight: "520px",
                }}
              />
            </div>

            {/* Meta */}
            <div className="d-flex gap-20 align-items-center mb-32 flex-wrap effectFade fadeUp">
              <span className="tags-item fw-semibold">{post.category}</span>
              <span className="text-secondary text-body-3">{post.date}</span>
              <span className="text-secondary text-body-3">
                {post.readTime}
              </span>
            </div>

            {/* Title */}
            <h2
              className="heading fw-semibold mb-32 effectFade fadeUp"
              style={{ color: "black" }}
            >
              {post.title}
            </h2>

            {/* Body */}
            <div
              className="text-secondary effectFade fadeUp"
              style={{ lineHeight: "1.85", maxWidth: "full" }}
            >
              {post.body.split("\n\n").map((para, i) => (
                <p key={i} style={{ marginBottom: "1.5rem" }}>
                  {para}
                </p>
              ))}
            </div>
          </div>
        </div>
      </div>

      {/* Blog Single Body */}
      <div className="section-blog flat-spacing pt-0">
        <div className="container">
          <div className="row justify-content-center">
            <div className="col-lg-8">
              {/* Author */}
              <div
                className="d-flex align-items-center gap-16 mt-60 mb-60 effectFade fadeUp"
                style={{
                  borderTop: "1px solid rgba(255,255,255,0.1)",
                  paddingTop: "32px",
                }}
              >
                <div>
                  <div className="fw-semibold text-primary">{post.author}</div>
                  <div className="text-secondary text-body-3">
                    {post.authorRole} · Simbolo
                  </div>
                </div>
              </div>
            </div>
          </div>

          {/* Related Posts */}
          {otherPosts.length > 0 && (
            <div className="mt-60">
              <h3 className="heading fw-semibold mb-40 effectFade fadeUp">
                More Articles
              </h3>
              <div className="tf-grid-layout sm-col-2 xl-col-3">
                {otherPosts.map((related, i) => (
                  <div
                    key={i}
                    className="article-blog hover-img effectFade fadeUp no-div"
                  >
                    <a
                      href={`/blog/${related.slug}`}
                      className="blog-image img-style"
                    >
                      <img
                        loading="lazy"
                        src={related.image}
                        alt={related.title}
                      />
                    </a>
                    <div className="blog-content">
                      <div className="infor">
                        <p className="infor_sub text-secondary">
                          {related.category}
                        </p>
                        <h6 className="fw-semibold">
                          <a
                            href={`/blog/${related.slug}`}
                            className="link1 infor_name"
                          >
                            {related.title}
                          </a>
                        </h6>
                      </div>
                      <a href={`/blog/${related.slug}`} className="tf-btn-2">
                        Read more
                        <i className="icon icon-arrow-top-right"></i>
                      </a>
                    </div>
                  </div>
                ))}
              </div>
            </div>
          )}
        </div>
      </div>
    </>
  );
}
