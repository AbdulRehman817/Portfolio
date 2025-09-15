import { projects } from "@/lib/data";
import { notFound } from "next/navigation";
import Image from "next/image";
import Link from "next/link";
import { Badge } from "@/components/ui/badge";
import { Button } from "@/components/ui/button";
import {
  Globe,
  Github,
  ArrowLeft,
  Layers,
  BookOpen,
  ExternalLink,
  ArrowDown,
} from "lucide-react";
import { SupportDialog } from "@/components/shared/SupportDialog";
import { Card, CardContent, CardHeader, CardTitle } from "@/components/ui/card";
import { Separator } from "@/components/ui/separator";

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
    <div className="bg-background">
      {/* Hero Section */}
      <section className="relative h-screen flex items-center justify-center text-white">
        <div className="absolute inset-0 z-0">
          <Image
            src={project.image}
            alt={project.title}
            fill
            className="object-cover"
            data-ai-hint="abstract technology"
            priority
          />

          <div className="absolute inset-0 bg-black/60 backdrop-blur-sm"></div>
          <div className="absolute top-8">
            <Button
              variant="ghost"
              asChild
              className="text-white hover:bg-white/10 hover:text-white"
            >
              <Link href="/projects">
                <ArrowLeft className="mr-2 h-4 w-4" />
                Back to Projects
              </Link>
            </Button>
          </div>
        </div>
        <div className="relative z-10 text-center px-4">
          <h1 className="text-4xl md:text-6xl font-bold mb-4">
            {project.title}
          </h1>
          <p className="text-lg md:text-xl max-w-3xl mx-auto text-white/80 mb-8">
            {project.description}
          </p>
          <Button
            asChild
            size="lg"
            className="bg-[#FF6A00]/80 hover:bg-[#FF6A00] text-white"
          >
            <a href="#content">
              View Project <ArrowDown className="ml-2 h-5 w-5" />
            </a>
          </Button>
        </div>
      </section>

      {/* Main Content */}
      <div id="content" className="container mx-auto px-4 py-16 md:py-24">
        <div className="grid grid-cols-1 lg:grid-cols-3 gap-12">
          <div className="lg:col-span-2">
            <article className="prose prose-invert max-w-none text-lg text-foreground/90">
              <h2 className="text-3xl font-bold mb-6 text-[#FF6A00]">
                About the Project
              </h2>
              <div className="bg-card p-8 rounded-xl shadow-lg space-y-6">
                <p>{project.longDescription}</p>
                <p>
                  This project was a great opportunity to leverage a modern tech
                  stack to solve a real-world problem. The combination of these
                  technologies allowed for a robust, scalable, and maintainable
                  application that delivers a seamless user experience.
                </p>
              </div>
            </article>
          </div>
          <div className="lg:col-span-1">
            <div className="space-y-8 sticky top-24">
              <Card className="shadow-lg bg-card/50">
                <CardHeader>
                  <CardTitle className="flex items-center gap-3 text-xl">
                    <Layers className="w-6 h-6 text-[#FF6A00]" />
                    <span>Tech Stack</span>
                  </CardTitle>
                </CardHeader>
                <CardContent>
                  <div className="flex flex-wrap gap-3">
                    {project.tags.map((tag) => (
                      <Badge
                        key={tag}
                        variant="secondary"
                        className="text-base px-4 py-2"
                      >
                        {tag}
                      </Badge>
                    ))}
                  </div>
                </CardContent>
              </Card>
              <Card className="shadow-lg bg-card/50">
                <CardHeader>
                  <CardTitle className="flex items-center gap-3 text-xl">
                    <ExternalLink className="w-6 h-6 text-[#FF6A00]" />
                    <span>Project Links</span>
                  </CardTitle>
                </CardHeader>
                <CardContent className="space-y-4">
                  {project.liveUrl && (
                    <Button asChild className="w-full bg-[#FF6A00] text-white">
                      <a
                        href={project.liveUrl}
                        target="_blank"
                        rel="noopener noreferrer"
                      >
                        <Globe className="mr-2 h-4 w-4" /> View Live
                      </a>
                    </Button>
                  )}
                  {project.githubUrl && (
                    <Button variant="secondary" asChild className="w-full ">
                      <a
                        href={project.githubUrl}
                        target="_blank"
                        rel="noopener noreferrer"
                      >
                        <Github className="mr-2 h-4 w-4" /> View on GitHub
                      </a>
                    </Button>
                  )}
                </CardContent>
              </Card>
            </div>
          </div>
        </div>
      </div>
      <SupportDialog contentType="project" />
    </div>
  );
}
