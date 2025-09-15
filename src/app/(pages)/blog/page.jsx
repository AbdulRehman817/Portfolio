import { blogPosts } from "@/lib/data";
import { ArticleCard } from "@/components/shared/ArticleCard";

export default function BlogPage() {
  return (
    <div className="container mx-auto px-4 py-16">
      <div className="text-center mb-12">
        <h1 className="font-headline text-4xl font-bold tracking-tight text-primary sm:text-5xl">
          From the Blog
        </h1>
        <p className="mt-4 max-w-2xl mx-auto text-lg text-muted-foreground">
          My thoughts on technology, design, and everything in between.
        </p>
      </div>

      <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-8">
        {blogPosts.map((post) => (
          <ArticleCard key={post.slug} article={post} baseUrl="/blog" />
        ))}
      </div>
    </div>
  );
}
