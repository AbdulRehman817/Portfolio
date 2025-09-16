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
      <div className="container mx-auto px-6 py-20">
        <div className="grid grid-cols-1 lg:grid-cols-3 gap-12 max-w-7xl mx-auto">
          {/* Main Content */}
          <div className="lg:col-span-2">
            {/* About Section */}
            <section className="mb-16">
              <h2 className="text-3xl font-bold text-primary mb-8 flex items-center gap-3">
                <BookOpen className="w-8 h-8 text-orange-500" />
                About the Project
              </h2>

              <div className="bg-card rounded-xl p-8 space-y-6">
                <p className="text-gray-300 text-lg leading-relaxed">
                  {project.longDescription}
                </p>
                <p className="text-gray-300 text-lg leading-relaxed">
                  This project was a great opportunity to leverage a modern tech
                  stack to solve a real-world problem. The combination of these
                  technologies allowed for a robust, scalable, and maintainable
                  application that delivers a seamless user experience.
                </p>
              </div>
            </section>

            {/* Key Features */}
            <section className="mb-16">
              <h2 className="text-3xl font-bold text-white mb-8">
                Key Features
              </h2>

              <div className="grid grid-cols-1 md:grid-cols-2 gap-6">
                <div className="bg-card rounded-xl p-6 hover:bg-gray-800 transition-colors duration-200">
                  <h3 className="text-xl font-semibold text-white mb-3">
                    Real-time Data Visualization
                  </h3>
                  <p className="text-gray-400">
                    Dynamic charts that update automatically with live data
                    streams
                  </p>
                </div>

                <div className="bg-card rounded-xl p-6 hover:bg-card transition-colors duration-200">
                  <h3 className="text-xl font-semibold text-white mb-3">
                    Interactive Widgets
                  </h3>
                  <p className="text-gray-400">
                    Customizable dashboard components with drag-and-drop
                    functionality
                  </p>
                </div>

                <div className="bg-card rounded-xl p-6 hover:bg-card transition-colors duration-200">
                  <h3 className="text-xl font-semibold text-white mb-3">
                    Multi-source Integration
                  </h3>
                  <p className="text-gray-400">
                    Connect to various APIs, databases, and file formats
                    seamlessly
                  </p>
                </div>

                <div className="bg-card rounded-xl p-6 hover:bg-card transition-colors duration-200">
                  <h3 className="text-xl font-semibold text-white mb-3">
                    Responsive Design
                  </h3>
                  <p className="text-gray-400">
                    Optimized experience across desktop, tablet, and mobile
                    devices
                  </p>
                </div>
              </div>
            </section>

            {/* Technical Approach */}
            <section>
              <h2 className="text-3xl font-bold text-white mb-8">
                Technical Approach
              </h2>

              <div className="bg-card rounded-xl p-8">
                <div className="space-y-6">
                  <div className="border-l-4 border-orange-500 pl-6">
                    <h3 className="text-xl font-semibold text-orange-400 mb-3">
                      Performance Optimization
                    </h3>
                    <p className="text-gray-300">
                      Implemented efficient data structures and caching
                      mechanisms to handle large datasets while maintaining
                      smooth 60fps interactions.
                    </p>
                  </div>

                  <div className="border-l-4 border-orange-500 pl-6">
                    <h3 className="text-xl font-semibold text-orange-400 mb-3">
                      Real-time Updates
                    </h3>
                    <p className="text-gray-300">
                      Built robust WebSocket connections for live data streaming
                      with automatic reconnection and error handling
                      capabilities.
                    </p>
                  </div>

                  <div className="border-l-4 border-orange-500 pl-6">
                    <h3 className="text-xl font-semibold text-orange-400 mb-3">
                      Scalable Architecture
                    </h3>
                    <p className="text-gray-300">
                      Designed a modular component architecture that allows for
                      easy extension and maintenance of dashboard features.
                    </p>
                  </div>
                </div>
              </div>
            </section>
          </div>

          {/* Sidebar - Clean */}
          <div className="lg:col-span-1">
            <div className="space-y-8 sticky top-24">
              {/* Tech Stack */}
              <div className="bg-card rounded-xl">
                <div className="p-6 border-b border-card">
                  <h3 className="text-xl font-bold text-white flex items-center gap-3">
                    <Layers className="w-6 h-6 text-orange-500" />
                    Tech Stack
                  </h3>
                </div>
                <div className="p-6">
                  <div className="flex flex-wrap gap-3">
                    {project.tags.map((tag, index) => (
                      <span
                        key={tag}
                        className={`px-4 py-2 rounded-lg text-sm font-medium ${
                          index === 0
                            ? "bg-orange-500/20 text-orange-400"
                            : "bg-card/100 text-gray-300"
                        }`}
                      >
                        {tag}
                      </span>
                    ))}
                  </div>
                </div>
              </div>

              {/* Project Links */}
              <div className="bg-card rounded-xl">
                <div className="p-6 border-b border-card">
                  <h3 className="text-xl font-bold text-white flex items-center gap-3">
                    <ExternalLink className="w-6 h-6 text-orange-500" />
                    Project Links
                  </h3>
                </div>
                <div className="p-6 space-y-4">
                  <button className="w-full bg-orange-500 hover:bg-orange-600 text-white py-3 px-4 rounded-lg font-semibold transition-colors duration-200 flex items-center justify-center gap-2">
                    <Globe className="w-5 h-5" />
                    View Live Demo
                  </button>
                  <button className="w-full bg-[#2E2E2E] hover:bg-card text-white py-3 px-4 rounded-lg font-semibold transition-colors duration-200 flex items-center justify-center gap-2">
                    <Github className="w-5 h-5" />
                    View on GitHub
                  </button>
                </div>
              </div>

              {/* Project Details */}
              <div className="bg-card rounnded-xl">
                <div className="p-6 border-b border-gray-800">
                  <h3 className="text-xl font-bold text-white">
                    Project Details
                  </h3>
                </div>
                <div className="p-6 space-y-4">
                  <div className="flex justify-between">
                    <span className="text-gray-400">Duration</span>
                    <span className="text-white">{project.duration}</span>
                  </div>
                  <div className="flex justify-between">
                    <span className="text-gray-400">Team</span>
                    <span className="text-white">{project.team}</span>
                  </div>
                  <div className="flex justify-between">
                    <span className="text-gray-400">Year</span>
                    <span className="text-white">{project.year}</span>
                  </div>
                  <div className="flex justify-between">
                    <span className="text-gray-400">Category</span>
                    <span className="text-orange-400">{project.category}</span>
                  </div>
                </div>
              </div>
            </div>
          </div>
        </div>
      </div>

      <SupportDialog contentType="project" />
    </div>
  );
}
