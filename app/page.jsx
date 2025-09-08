"use client";
import { Button } from "@/components/ui/button";
import {
  ArrowRight,
  Download,
  Briefcase,
  Feather,
  Rss,
  Code,
  Server,
  Database,
  Cloud,
  Wind,
  Palette,
  Bot,
  GitBranch,
  Terminal,
  Lock,
  Github,
  Component,
} from "lucide-react";
import Link from "next/link";
import { ProjectCard } from "@/components/shared/ProjectCard";
import { blogPosts, projects } from "@/lib/data";
import { ArticleCard } from "@/components/shared/ArticleCard";
import { Badge } from "@/components/ui/badge";
import { TypeAnimation } from "react-type-animation";
import { Card, CardContent, CardHeader } from "@/components/ui/card";

const skills = [
  { name: "HTML", icon: <Code className="w-8 h-8" /> },
  { name: "CSS", icon: <Palette className="w-8 h-8" /> },
  { name: "JavaScript", icon: <Code className="w-8 h-8" /> },
  { name: "React", icon: <Component className="w-8 h-8" /> },
  { name: "Next.js", icon: <Component className="w-8 h-8" /> },
  { name: "TypeScript", icon: <Code className="w-8 h-8" /> },
  { name: "Tailwind CSS", icon: <Wind className="w-8 h-8" /> },
  { name: "Node.js", icon: <Server className="w-8 h-8" /> },
  { name: "Express.js", icon: <Server className="w-8 h-8" /> },
  { name: "MongoDB", icon: <Database className="w-8 h-8" /> },
  { name: "Firebase", icon: <Cloud className="w-8 h-8" /> },
  { name: "Clerk", icon: <Lock className="w-8 h-8" /> },
  { name: "GitHub", icon: <Github className="w-8 h-8" /> },
  { name: "UI/UX Design", icon: <Bot className="w-8 h-8" /> },
];

export default function Home() {
  const featuredProjects = projects.slice(0, 3);
  const latestArticles = blogPosts.slice(0, 3);

  return (
    <div className="flex flex-col">
      {/* Hero Section */}
      <section className="py-24 md:py-32 bg-card/50">
        <div className="container mx-auto px-4 text-center">
          <Badge variant="secondary" className="mb-4">
            Creative Developer & Designer
          </Badge>
          <h1 className="text-4xl md:text-6xl font-bold tracking-tight mb-4">
            Abdul Rehman
          </h1>
          <TypeAnimation
            sequence={[
              "I build beautiful web applications.",
              1000,
              "I design functional user interfaces.",
              1000,
              "I solve complex problems with code.",
              1000,
            ]}
            wrapper="p"
            speed={50}
            className="text-lg md:text-xl text-muted-foreground mb-8 max-w-xl mx-auto"
            repeat={Infinity}
          />
          <div className="flex flex-col sm:flex-row gap-4 justify-center">
            <Button asChild size="lg">
              <Link href="/projects">
                Explore My Work <ArrowRight className="ml-2 h-5 w-5" />
              </Link>
            </Button>
            <Button asChild size="lg" variant="secondary">
              <a href="/resume.pdf" download>
                Download CV <Download className="ml-2 h-5 w-5" />
              </a>
            </Button>
          </div>
        </div>
      </section>

      {/* About Me Section */}
      <section className="py-24">
        <div className="container mx-auto px-4 max-w-4xl">
          <div className="text-center mb-12">
            <h2 className="text-3xl md:text-4xl font-bold">About Me</h2>
            <p className="mt-4 text-lg text-muted-foreground">
              My journey, my passion, and my purpose.
            </p>
          </div>
          <div className="bg-card p-8 md:p-12 rounded-xl shadow-lg">
            <div className="space-y-6 text-lg text-center text-foreground/80">
              <p>
                Hi, I’m Abdul Rehman—a developer who loves creating web
                applications that are not only functional but also enjoyable to
                use. For me, coding is about more than just writing lines of
                code—it’s about turning ideas into experiences that people can
                connect with.
              </p>
              <p>
                I first got into coding because I was curious about how websites
                worked, and that curiosity quickly grew into a real passion.
                Now, I enjoy solving problems, experimenting with design, and
                building projects that bring creativity and practicality
                together.
              </p>
              <Button asChild variant="outline">
                <Link href="/about">Learn More About Me</Link>
              </Button>
            </div>
          </div>
        </div>
      </section>

      {/* Code Quote Section */}
      <section className="py-24">
        <div className="container mx-auto px-4 max-w-3xl">
          <div className="bg-[#0D1117] border border-border rounded-xl shadow-lg overflow-hidden">
            <div className="flex items-center justify-between px-4 py-2 bg-muted/20 border-b border-border">
              <div className="flex items-center gap-2">
                <span className="w-3 h-3 bg-red-500 rounded-full"></span>
                <span className="w-3 h-3 bg-yellow-500 rounded-full"></span>
                <span className="w-3 h-3 bg-green-500 rounded-full"></span>
              </div>
              <p className="text-xs text-muted-foreground">Code / Philosophy</p>
            </div>
            <div className="p-8">
              <pre className="font-code text-lg md:text-xl text-primary-foreground/80">
                <code>
                  <span className="text-purple-400">(</span>
                  <span className="text-blue-400">function</span>{" "}
                  <span className="text-yellow-400">repeat</span>
                  <span className="text-purple-400">()</span> {"{"}
                  {"\n  "}
                  <span className="text-yellow-400">eat</span>
                  <span className="text-purple-400">()</span>;{"\n  "}
                  <span className="text-yellow-400">sleep</span>
                  <span className="text-purple-400">()</span>;{"\n  "}
                  <span className="text-yellow-400">love_yourself</span>
                  <span className="text-purple-400">()</span>;{"\n  "}
                  <span className="text-yellow-400">repeat</span>
                  <span className="text-purple-400">()</span>;{"\n"}
                  {"}"}
                  <span className="text-purple-400">)</span>
                  <span className="text-purple-400">()</span>;
                </code>
              </pre>
            </div>
          </div>
        </div>
      </section>

      {/* Skills Section */}
      <section className="py-24 bg-card/50 w-full">
        <div className="container mx-auto px-4">
          <div className="text-center mb-12">
            <h2 className="text-3xl md:text-4xl font-bold">My Toolkit</h2>
            <p className="mt-4 text-lg text-muted-foreground">
              The technologies I use to bring ideas to life.
            </p>
          </div>
          <div className="grid grid-cols-2 sm:grid-cols-3 md:grid-cols-4 lg:grid-cols-7 gap-6">
            {skills.map((skill) => (
              <Card
                key={skill.name}
                className="flex flex-col items-center justify-center p-6 text-center bg-background/50 hover:bg-primary/10 transition-colors duration-300"
              >
                <div className="text-primary mb-3">{skill.icon}</div>
                <p className="font-semibold text-foreground">{skill.name}</p>
              </Card>
            ))}
          </div>
        </div>
      </section>

      {/* Featured Projects Section */}
      <section className="py-24">
        <div className="container mx-auto px-4">
          <div className="text-center mb-12">
            <h2 className="text-3xl md:text-4xl font-bold">
              Featured Projects
            </h2>
            <p className="mt-4 text-lg text-muted-foreground">
              A selection of my proudest work.
            </p>
          </div>
          <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-8">
            {featuredProjects.map((project) => (
              <ProjectCard key={project.slug} project={project} />
            ))}
          </div>
          <div className="text-center mt-12">
            <Button asChild variant="outline">
              <Link href="/projects">
                View All Projects <Briefcase className="ml-2 h-4 w-4" />
              </Link>
            </Button>
          </div>
        </div>
      </section>

      {/* Latest Articles Section */}
      <section className="py-24 bg-card/50">
        <div className="container mx-auto px-4">
          <div className="text-center mb-12">
            <h2 className="text-3xl md:text-4xl font-bold">Latest Articles</h2>
            <p className="mt-4 text-lg text-muted-foreground">
              My thoughts on development, design, and more.
            </p>
          </div>
          <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-8">
            {latestArticles.map((post) => (
              <ArticleCard key={post.slug} article={post} baseUrl="/blog" />
            ))}
          </div>
          <div className="text-center mt-12">
            <Button asChild variant="outline">
              <Link href="/blog">
                Read The Blog <Rss className="ml-2 h-4 w-4" />
              </Link>
            </Button>
          </div>
        </div>
      </section>

      {/* CTA Section */}
      <section className="py-24 bg-primary text-primary-foreground">
        <div className="container mx-auto px-4 text-center">
          <h2 className="text-3xl font-bold mb-4">
            Let's Build Something Amazing Together
          </h2>
          <p className="text-lg mb-8 max-w-2xl mx-auto">
            Have a project in mind or just want to connect? I'd love to hear
            from you.
          </p>
          <Button size="lg" variant="secondary" asChild>
            <Link href="/contact">
              Get In Touch <Feather className="ml-2 h-5 w-5" />
            </Link>
          </Button>
        </div>
      </section>
    </div>
  );
}
