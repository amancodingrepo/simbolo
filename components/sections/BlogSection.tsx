import { blogs } from '@/lib/blogs';

interface BlogPost {
  title: string;
  excerpt: string;
  image: string;
  date: string;
  category?: string;
  href?: string;
  author?: string;
}

interface SidebarCategory {
  name: string;
  count?: number;
}

interface BlogSectionProps {
  posts?: BlogPost[];
  showSidebar?: boolean;
  layout?: 'standard' | 'two-columns' | 'three-columns';
  sidebarCategories?: SidebarCategory[];
  sidebarTags?: string[];
}

const defaultPosts: BlogPost[] = blogs.map(b => ({
  title: b.title,
  excerpt: b.excerpt,
  image: b.image,
  date: b.date,
  category: b.category,
  href: `/blog/${b.slug}`,
  author: b.author,
}));

const defaultSidebarCategories: SidebarCategory[] = [
  { name: '3D & CGI', count: 1 },
  { name: 'Photography', count: 1 },
  { name: 'Content Strategy', count: 1 },
  { name: 'Graphic Design', count: 1 },
];

const defaultSidebarTags = ['3D Rendering', 'Product Photography', 'Video Editing', 'Real Estate', 'E-Commerce', 'Branding'];

// Delay cycle for staggered animations: matches template data-delay pattern
function getDelay(index: number, cols: number): string | undefined {
  const pos = index % cols;
  if (pos === 0) return undefined;
  return String(pos * 0.1);
}

export default function BlogSection({
  posts = defaultPosts,
  showSidebar = true,
  layout = 'standard',
  sidebarCategories = defaultSidebarCategories,
  sidebarTags = defaultSidebarTags,
}: BlogSectionProps) {
  // ── Grid layouts (two-columns / three-columns) ──────────────────────────────
  if (layout === 'two-columns' || layout === 'three-columns') {
    const cols = layout === 'three-columns' ? 3 : 2;
    const gridClass = layout === 'three-columns'
      ? 'tf-grid-layout sm-col-2 xl-col-3'
      : 'tf-grid-layout sm-col-2';

    return (
      <section className="section-blog flat-spacing">
        <div className="container">
          <div className={gridClass}>
            {posts.map((post, i) => {
              const delay = getDelay(i, cols);
              return (
                <div
                  key={i}
                  className="article-blog hover-img effectFade fadeUp no-div"
                  {...(delay ? { 'data-delay': delay } : {})}
                >
                  <a href={post.href ?? '#'} className="blog-image img-style">
                    <img loading="lazy" src={post.image} alt={post.title} />
                  </a>
                  <div className="blog-content">
                    <div className="infor">
                      {post.category && (
                        <p className="infor_sub text-secondary">{post.category}</p>
                      )}
                      <h6 className="fw-semibold">
                        <a href={post.href ?? '#'} className="link1 infor_name">
                          {post.title}
                        </a>
                      </h6>
                    </div>
                    <a href={post.href ?? '#'} className="tf-btn-2">
                      Read more
                      <i className="icon icon-arrow-top-right"></i>
                    </a>
                  </div>
                </div>
              );
            })}
          </div>
        </div>
      </section>
    );
  }

  // ── Standard layout (with or without sidebar) ───────────────────────────────
  const postsColumn = (
    <div className="tf-grid-layout">
      {posts.map((post, i) => (
        <div key={i} className="article-blog style-horizontal hover-img effectFade fadeUp no-div">
          <a href={post.href ?? '#'} className="blog-image img-style">
            <img loading="lazy" src={post.image} alt={post.title} />
          </a>
          <div className="blog-content">
            <div className="infor">
              {post.category && (
                <p className="infor_sub text-secondary">{post.category}</p>
              )}
              <h6 className="fw-semibold">
                <a href={post.href ?? '#'} className="link1 infor_name">
                  {post.title}
                </a>
              </h6>
            </div>
            <a href={post.href ?? '#'} className="tf-btn-2">
              Read more
              <i className="icon icon-arrow-top-right"></i>
            </a>
          </div>
        </div>
      ))}

      <div className="wd-full effectFade fadeUp no-div">
        <ul className="wg-pagination">
          <li><a href="#" className="pagination-item active">1</a></li>
          <li><a href="#" className="pagination-item">2</a></li>
          <li><a href="#" className="pagination-item">...</a></li>
          <li>
            <a href="#" className="pagination-item">
              <i className="icon icon-angle-right-solid"></i>
            </a>
          </li>
        </ul>
      </div>
    </div>
  );

  if (!showSidebar) {
    return (
      <section className="section-blog flat-spacing">
        <div className="container">
          {postsColumn}
        </div>
      </section>
    );
  }

  return (
    <section className="section-blog flat-spacing">
      <div className="container">
        <div className="row justify-content-between">
          <div className="col-lg-7">
            {postsColumn}
          </div>
          <div className="col-lg-4">
            <div className="blog-sidebar m-lg-0">

              {/* Search */}
              <div className="sidebar-item effectFade fadeUp no-div">
                <h5 className="sidebar-title">Search</h5>
                <form className="form-search">
                  <fieldset className="text">
                    <input
                      type="text"
                      placeholder="Search"
                      name="search"
                      tabIndex={0}
                      required
                    />
                  </fieldset>
                  <button type="submit" className="link1 text-white">
                    <i className="icon icon-search-solid"></i>
                  </button>
                </form>
              </div>

              {/* Recent posts */}
              <div className="sidebar-item effectFade fadeUp no-div">
                <h5 className="sidebar-title">Recent posts</h5>
                <div className="list-relatest-post">
                  {posts.map((post, i) => (
                    <div key={i} className="relatest-post-item">
                      <div className="image">
                        <img loading="lazy" width={80} height={80} src={post.image} alt={post.title} />
                      </div>
                      <div className="content">
                        <h6 className="title text-body-1">
                          <a href={post.href ?? '#'} className="link1">{post.title}</a>
                        </h6>
                        <p className="time text-body-3 text-white-64">{post.date}</p>
                      </div>
                    </div>
                  ))}
                </div>
              </div>

              {/* Categories */}
              <div className="sidebar-item effectFade fadeUp no-div">
                <h5 className="sidebar-title">Category</h5>
                <div className="sidebar-categories">
                  {sidebarCategories.map((cat, i) => (
                    <div key={i} className="item">
                      <a href="#" className="text-body-1 link1">{cat.name}</a>
                      {cat.count !== undefined && (
                        <span className="text-body-3 text-white-64">({cat.count})</span>
                      )}
                    </div>
                  ))}
                </div>
              </div>

              {/* Tags */}
              <div className="sidebar-item effectFade fadeUp no-div">
                <h5 className="sidebar-title">Popular tag</h5>
                <div className="list-tags">
                  {sidebarTags.map((tag, i) => (
                    <a key={i} href="#" className="tags-item fw-semibold">{tag}</a>
                  ))}
                </div>
              </div>

            </div>
          </div>
        </div>
      </div>
    </section>
  );
}
