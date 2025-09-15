import { blogPosts } from "@/lib/data";
import { notFound } from "next/navigation";
import Image from "next/image";
import { SupportDialog } from "@/components/shared/SupportDialog";
import { Separator } from "@/components/ui/separator";
import { Calendar, User, ArrowLeft } from "lucide-react";
import { CodeBlock } from "@/components/shared/CodeBlock";
import { Button } from "@/components/ui/button";
import Link from "next/link";

export async function generateStaticParams() {
  return blogPosts.map((post) => ({
    slug: post.slug,
  }));
}

// Custom component to render HTML and replace <pre> with CodeBlock
function ArticleContent({ content }) {
  // A simple and somewhat fragile way to split content.
  // A more robust solution would involve a proper HTML parser.
  const parts = content.split(/(<pre>.*?<\/pre>)/gs);

  return (
    <div>
      {parts.map((part, index) => {
        if (part.startsWith("<pre>") && part.endsWith("</pre>")) {
          // Extract code from inside <pre> tags
          const code = part.substring(5, part.length - 6);
          return <CodeBlock key={index} code={code} />;
        } else {
          // This is the regular HTML content
          return <div key={index} dangerouslySetInnerHTML={{ __html: part }} />;
        }
      })}
    </div>
  );
}

export default function BlogPostPage({ params }) {
  const post = blogPosts.find((p) => p.slug === params.slug);

  if (!post) {
    notFound();
  }

  return (
    <div className="container mx-auto px-4 py-16">
      <div className="max-w-4xl mx-auto">
        <Button variant="ghost" asChild className="mb-8">
          <Link href="/blog">
            <ArrowLeft className="mr-2 h-4 w-4" />
            Back to Blog
          </Link>
        </Button>
        <article>
          <header className="mb-8 text-center">
            <h1 className="font-headline text-4xl md:text-5xl font-bold text-[#FF6A00] mb-4">
              {post.title}
            </h1>
            <div className="flex justify-center items-center gap-6 text-muted-foreground text-sm">
              <div className="flex items-center gap-2">
                <User className="h-4 w-4" />
                <span>{post.author}</span>
              </div>
              <div className="flex items-center gap-2">
                <Calendar className="h-4 w-4" />
                <time dateTime={post.date}>{post.date}</time>
              </div>
            </div>
          </header>

          <div className="relative aspect-video w-full mb-12 rounded-xl overflow-hidden border shadow-lg">
            <Image
              src={post.image}
              alt={post.title}
              fill
              className="object-cover"
              data-ai-hint="tech"
              priority
            />
          </div>

          <div className="prose prose-invert max-w-none text-lg mb-12">
            <ArticleContent content={post.content} />
          </div>

          <Separator className="my-12" />

          <div id="comments" className="text-center">
            <h2 className="font-headline text-3xl font-semibold mb-4">
              Comments
            </h2>
            <p className="text-muted-foreground">
              Comments are coming soon. Stay tuned!
            </p>
          </div>
        </article>
      </div>
      <SupportDialog contentType="blog post" />
    </div>
  );
}
