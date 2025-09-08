import { projects } from "@/lib/data";
import { notFound } from "next/navigation";
import Image from "next/image";
import Link from "next/link";
import { Badge } from "@/components/ui/badge";
import { Button } from "@/components/ui/button";
import { Globe, Github, ArrowLeft } from "lucide-react";
import { SupportDialog } from "@/components/shared/SupportDialog";

export async function generateStaticParams() {
  return projects.map((project) => ({
    slug: project.slug,
  }));
}

export default function ProjectDetailPage({ params }) {
  const project = projects.find((p) => p.slug === params.slug);

  if (!project) {
    notFound();
  }

  return (
    <div className="container mx-auto px-4 py-16 md:py-24">
      <div className="max-w-4xl mx-auto">
        <Button variant="ghost" asChild className="mb-8">
          <Link href="/projects">
            <ArrowLeft className="mr-2 h-4 w-4" />
            Back to Projects
          </Link>
        </Button>

        <article className="bg-card rounded-xl overflow-hidden">
          <div className="relative aspect-video w-full border-b">
            <Image
              src={project.image}
              alt={project.title}
              fill
              className="object-cover"
              data-ai-hint="abstract technology"
              priority
            />
          </div>

          <div className="p-8 md:p-12">
            <header className="mb-8">
              <div className="flex flex-wrap gap-2 mb-4">
                {project.tags.map((tag) => (
                  <Badge key={tag} variant="secondary">
                    {tag}
                  </Badge>
                ))}
              </div>
              <h1 className="font-headline text-3xl md:text-4xl font-bold text-primary mb-2">
                {project.title}
              </h1>
              <p className="text-lg text-muted-foreground">
                {project.description}
              </p>
            </header>

            <div className="prose prose-invert max-w-none text-lg text-foreground/80 mb-8">
              <p>{project.longDescription}</p>
            </div>

            <div className="flex flex-col sm:flex-row items-center justify-center gap-4 mt-8 pt-8 border-t border-border">
              {project.liveUrl && (
                <Button asChild size="lg" className="w-full sm:w-auto">
                  <a
                    href={project.liveUrl}
                    target="_blank"
                    rel="noopener noreferrer"
                  >
                    <Globe className="mr-2 h-5 w-5" /> View Live Demo
                  </a>
                </Button>
              )}
              {project.githubUrl && (
                <Button
                  variant="secondary"
                  size="lg"
                  asChild
                  className="w-full sm:w-auto"
                >
                  <a
                    href={project.githubUrl}
                    target="_blank"
                    rel="noopener noreferrer"
                  >
                    <Github className="mr-2 h-5 w-5" /> View on GitHub
                  </a>
                </Button>
              )}
            </div>
          </div>
        </article>
      </div>
      <SupportDialog contentType="project" />
    </div>
  );
}
