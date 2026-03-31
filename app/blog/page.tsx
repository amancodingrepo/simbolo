import PageTitleSection from '@/components/sections/PageTitleSection';
import BlogSection from '@/components/sections/BlogSection';

export default function Blog() {
  return (
    <>
      <PageTitleSection
        title="Blog"
        breadcrumbs={[
          { label: 'Home', href: '/' },
          { label: 'Blog' },
        ]}
      />
      <BlogSection layout="standard" showSidebar={true} />
    </>
  );
}
