import PageTitleSection from '@/components/sections/PageTitleSection';
import BlogSection from '@/components/sections/BlogSection';

export default function BlogThreeColumns() {
  return (
    <>
      <PageTitleSection
        title="Blog"
        breadcrumbs={[
          { label: 'Home', href: '/' },
          { label: 'Blog', href: '/blog' },
          { label: '3 Columns' },
        ]}
      />
      <BlogSection layout="three-columns" showSidebar={false} />
    </>
  );
}
