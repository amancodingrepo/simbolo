import PageTitleSection from '@/components/sections/PageTitleSection';
import BlogSection from '@/components/sections/BlogSection';

export default function BlogTwoColumns() {
  return (
    <>
      <PageTitleSection
        title="Blog"
        breadcrumbs={[
          { label: 'Home', href: '/' },
          { label: 'Blog', href: '/blog' },
          { label: '2 Columns' },
        ]}
      />
      <BlogSection layout="two-columns" showSidebar={false} />
    </>
  );
}
