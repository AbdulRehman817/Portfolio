"use client";

import Link from "next/link";
import { Button } from "@/components/ui/button";
import { Badge } from "@/components/ui/badge";
import { Card } from "@/components/ui/card";
import { ProjectCard } from "@/components/shared/ProjectCard";
import { ArticleCard } from "@/components/shared/ArticleCard";
import { blogPosts, projects } from "@/lib/data";
import { TypeAnimation } from "react-type-animation";
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
  Github,
  Component,
  Lock,
  Terminal,
} from "lucide-react";

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
    <main className="flex flex-col">
      {/* Hero Section */}
      <section className="py-24 md:py-32 bg-card/50">
        <div className="container px-4 mx-auto text-center">
          <Badge variant="secondary" className="mb-4">
            Creative Developer & Designer
          </Badge>
          <h1 className="text-4xl md:text-6xl font-bold tracking-tight text-white mb-4">
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
            <Button
              asChild
              size="lg"
              className="bg-[#FF6A00]/80 hover:bg-[#FF6A00] text-white"
            >
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

      {/* About Me */}
      <section className="py-24">
        <div className="container max-w-4xl mx-auto px-4">
          <div className="text-center mb-12">
            <h2 className="text-3xl md:text-4xl font-bold">About Me</h2>
            <p className="mt-4 text-lg text-muted-foreground">
              My journey, my passion, and my purpose.
            </p>
          </div>
          <div className="bg-card p-8 md:p-12 rounded-xl shadow-lg text-lg text-center text-foreground/80 space-y-6">
            <p>
              Hi, I’m Abdul Rehman — a developer who loves creating web
              applications that are not only functional but also enjoyable to
              use. For me, coding is about more than just writing lines of code
              — it’s about turning ideas into experiences.
            </p>
            <p>
              I started out curious about how websites worked, and that evolved
              into a passion. Now, I enjoy solving problems, experimenting with
              design, and building creative yet practical solutions.
            </p>
            <Button asChild variant="outline">
              <Link href="/about">Learn More About Me</Link>
            </Button>
          </div>
        </div>
      </section>

      {/* Skills Grid */}
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
                className="text-[#FF6A00] bg-background/50 flex flex-col items-center justify-center p-6 text-center hover:bg-[#FF6A00]/10 cursor transition-colors duration-300"
              >
                <div className="mb-3">{skill.icon}</div>
                <p className="font-semibold text-foreground">{skill.name}</p>
              </Card>
            ))}
          </div>
        </div>
      </section>

      <section className="mb-[100px] mt-[100px] mx-auto">
        <div className="container mx-auto px-4 max-w-3xl">
          {/* Heading */}
          <div className="text-center mb-8">
            <div className="inline-flex items-center justify-center gap-2 text-primary mb-2">
              <Terminal className="w-6 h-6" />
              <span className="text-xl font-semibold tracking-wide uppercase">
                Developer Reflections
              </span>
            </div>
            <p className="mt-2 text-muted-foreground text-lg">
              Insights, philosophies, and thoughts that guide my code.
            </p>
          </div>

          {/* Terminal-style Quote Block */}
          <div className="bg-card border-l-4 border-primary rounded-lg shadow-xl overflow-hidden">
            <div className="bg-foreground/5 p-3 flex items-center gap-2">
              <div className="w-3 h-3 rounded-full bg-red-500"></div>
              <div className="w-3 h-3 rounded-full bg-yellow-500"></div>
              <div className="w-3 h-3 rounded-full bg-green-500"></div>
              <p className="text-sm text-muted-foreground ml-auto">
                /dev/thoughts
              </p>
            </div>
            <div className="p-6 font-code text-green-400">
              <span className="text-primary mr-2">$</span>
              <TypeAnimation
                sequence={[
                  `"The best products are built at the intersection of clean code and thoughtful design."`,
                  5000,
                  `"Code is like humor. When you have to explain it, it’s bad." - Cory House`,
                  5000,
                  `"Simplicity is the soul of efficiency." - Austin Freeman`,
                  5000,
                ]}
                wrapper="span"
                speed={80}
                cursor
                repeat={Infinity}
                className="text-foreground/90"
              />
            </div>
          </div>
        </div>
      </section>

      {/* Projects */}
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

      {/* Articles */}
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

      {/* CTA */}
      <section className="py-24 text-white bg-[#FF6A00]">
        <div className="container mx-auto px-4 text-center">
          <h2 className="text-4xl font-bold mb-4">
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
    </main>
  );
}
