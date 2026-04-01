import PageTitleSection from "@/components/sections/PageTitleSection";
import BlogSection from "@/components/sections/BlogSection";

export default function BlogPage() {
  return (
    <>
      <PageTitleSection
        title="Our Blog"
        backgroundImage="/assets/aman/hero.png"
        breadcrumbs={[
          { label: "Home", href: "/" },
          { label: "Blog", href: "/blog" },
        ]}
      />
      <BlogSection layout="three-columns" showSidebar={false} />
    </>
  );
}
