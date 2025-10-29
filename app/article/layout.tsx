import ProgressTracker from '@/components/ProgressTracker';

export default function ArticleLayout({
  children,
}: {
  children: React.ReactNode;
}) {
  return (
    <>
      <ProgressTracker />
      <article className="prose prose-lg max-w-4xl mx-auto px-6 py-12">
        {children}
      </article>
    </>
  );
}
