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
import { projects } from "@/lib/data";

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

  return (
    <div className="flex flex-col">
      {/* Hero Section */}
      <section className="py-24 md:py-32 bg-card/50">
        <div className="container mx-auto px-4 text-center">
          <Badge
            variant="secondary"
            className="mb-4 bg-[#3b3b3b]-800/50 backdrop-blur-sm border border-[#3b3b3b]-700/50 text-[#3b3b3b]-300"
          >
            Creative Developer & Designer
          </Badge>
          <h1 className="text-4xl md:text-6xl font-bold tracking-tight text-white mb-4">
            <span className="bg-gradient-to-r from-orange-400 via-orange-500 to-orange-600 bg-clip-text text-transparent">
              Abdul Rehman
            </span>
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
              className="bg-gradient-to-r from-orange-600 to-orange-500 hover:from-orange-700 hover:to-orange-600 text-white shadow-lg shadow-orange-500/25 transform hover:scale-105 transition-all duration-300"
            >
              <Link href="/projects">
                Explore My Work <ArrowRight className="ml-2 h-5 w-5" />
              </Link>
            </Button>
            <Button
              asChild
              size="lg"
              variant="secondary"
              className="bg-[#3b3b3b]-800/50 backdrop-blur-sm hover:bg-[#3b3b3b]-700/50 border border-[#3b3b3b]-700/50 hover:border-orange-500/30 text-white"
            >
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
              <Button
                asChild
                variant="outline"
                className="bg-gradient-to-r from-orange-600 to-orange-500 hover:from-orange-700 hover:to-orange-600 text-white border-orange-500/30 hover:border-orange-400 transform hover:scale-105 transition-all duration-300"
              >
                <Link href="/about">Learn More About Me</Link>
              </Button>
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
                className="text-orange-500 bg-[#3b3b3b]-800/50 backdrop-blur-sm border border-[#3b3b3b]-700/50 hover:border-orange-500/50 flex flex-col items-center justify-center p-6 text-center hover:bg-orange-500/5 cursor-pointer transition-all duration-300 transform hover:scale-105"
              >
                <div className="mb-3 group-hover:scale-110 transition-transform duration-300">
                  {skill.icon}
                </div>
                <p className="font-semibold text-white group-hover:text-orange-400 transition-colors duration-300">
                  {skill.name}
                </p>
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

      {/* CTA Section */}
      <section className="py-24 text-white bg-gradient-to-r from-orange-600 via-orange-500 to-orange-600 relative overflow-hidden">
        {/* Background Effects */}
        <div className="absolute inset-0 bg-[radial-gradient(circle_at_30%_30%,rgba(255,255,255,0.1)_0%,transparent_50%)]" />
        <div className="absolute inset-0 bg-[radial-gradient(circle_at_70%_70%,rgba(255,255,255,0.05)_0%,transparent_50%)]" />

        <div className="container mx-auto px-4 text-center relative z-10">
          <h2 className="text-4xl md:text-5xl font-bold mb-6">
            Let's Build Something Amazing Together
          </h2>
          <p className="text-xl mb-10 max-w-2xl mx-auto text-orange-100 leading-relaxed">
            Have a project in mind or just want to connect? I'd love to hear
            from you and discuss how we can bring your ideas to life.
          </p>
          <div className="flex flex-col sm:flex-row gap-4 justify-center">
            <Button
              size="lg"
              variant="secondary"
              asChild
              className="bg-white text-orange-600 hover:bg-orange-50 font-bold transform hover:scale-105 transition-all duration-300 shadow-lg"
            >
              <Link href="/contact">
                Get In Touch <Feather className="ml-2 h-5 w-5" />
              </Link>
            </Button>
            <Button
              size="lg"
              variant="outline"
              asChild
              className="bg-transparent border-2 border-white text-white hover:bg-white hover:text-orange-600 font-bold transition-all duration-300"
            >
              <Link href="/projects">
                View My Work <ArrowRight className="ml-2 h-5 w-5" />
              </Link>
            </Button>
          </div>
        </div>
      </section>
    </div>
  );
}
