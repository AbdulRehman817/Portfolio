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
  Calendar,
  Users,
  Target,
  Clock,
  CheckCircle,
} from "lucide-react";
import { SupportDialog } from "@/components/shared/SupportDialog";
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
    <div className="min-h-screen bg-muted/20 ">
      <main className="container mx-auto px-6 py-12 max-w-6xl">
        {/* Project Header */}
        <div className="mb-12">
          <h1 className="text-4xl md:text-5xl font-bold text-gray-900 dark:text-white mb-6">
            {project.title}
          </h1>

          <p className="text-xl text-gray-600 dark:text-gray-300 leading-relaxed mb-8 max-w-3xl">
            {project.description}
          </p>

          {/* Project Meta */}
        </div>

        {/* Project Image */}
        <div className="mb-16">
          <div className="relative aspect-video w-full rounded-lg overflow-hidden bg-gray-100 dark:bg-gray-900 border border-gray-200 dark:border-gray-800">
            <Image
              src={project.image}
              alt={project.title}
              fill
              className="object-cover"
              priority
            />
          </div>
        </div>

        {/* Two Column Layout */}
        <div className="grid lg:grid-cols-3 gap-12">
          {/* Main Content */}
          <div className="lg:col-span-2 space-y-12">
            {/* About Section */}
            <section>
              <h2 className="text-2xl font-bold text-gray-900 dark:text-white mb-6 flex items-center gap-3">
                <BookOpen className="w-6 h-6 text-[#FF6A00]" />
                About This Project
              </h2>
              <div className="bg-card rounded-lg border border-gray-200 dark:border-gray-800 p-8">
                <div className="prose prose-lg dark:prose-invert max-w-none">
                  <p className="text-gray-700 dark:text-gray-300 leading-relaxed mb-6">
                    {project.longDescription ||
                      "This project was designed to solve real-world problems through thoughtful user experience design and robust development. The focus was on creating a solution that is both powerful and easy to use."}
                  </p>
                  <p className="text-gray-700 dark:text-gray-300 leading-relaxed">
                    Throughout the development process, I prioritized clean
                    code, performance optimization, and user feedback to ensure
                    the final product meets high standards of quality and
                    usability.
                  </p>
                </div>
              </div>
            </section>

            {/* Key Features (Instead of Results & Impact) */}
            <section>
              <h2 className="text-2xl font-bold text-gray-900 dark:text-white mb-6 flex items-center gap-3">
                <CheckCircle className="w-6 h-6 text-[#FF6A00]" />
                Key Features
              </h2>
              <div className=" bg-card rounded-lg border border-gray-200 dark:border-gray-800 p-8">
                <ul className="space-y-4 text-gray-700 dark:text-gray-300">
                  <li className="flex items-start gap-3">
                    <CheckCircle className="w-5 h-5 text-[#FF6A00] mt-1" />
                    <span>Responsive UI with modern, minimal design.</span>
                  </li>
                  <li className="flex items-start gap-3">
                    <CheckCircle className="w-5 h-5 text-[#FF6A00] mt-1" />
                    <span>Optimized performance and fast load times.</span>
                  </li>
                  <li className="flex items-start gap-3">
                    <CheckCircle className="w-5 h-5 text-[#FF6A00] mt-1" />
                    <span>Clean codebase with reusable components.</span>
                  </li>
                  <li className="flex items-start gap-3">
                    <CheckCircle className="w-5 h-5 text-[#FF6A00] mt-1" />
                    <span>Dark mode support for better accessibility.</span>
                  </li>
                </ul>
              </div>
            </section>
          </div>

          {/* Sidebar */}
          <div className="lg:col-span-1">
            <div className="sticky top-8 space-y-8">
              {/* Technology Stack */}
              <div className="bg-card rounded-lg border border-gray-200 dark:border-gray-800">
                <div className="p-6 border-b border-gray-200 dark:border-gray-800">
                  <h3 className="text-lg font-semibold text-gray-900 dark:text-white flex items-center gap-2">
                    <Layers className="w-5 h-5 text-[#FF6A00]" />
                    Technology Stack
                  </h3>
                </div>
                <div className="p-6">
                  <div className="flex flex-wrap gap-2">
                    {project.tags?.map((tech) => (
                      <span
                        key={tech}
                        className="px-3 py-1 bg-card text-gray-700 dark:text-gray-300 text-sm rounded-md border border-gray-200 dark:border-gray-700"
                      >
                        {tech}
                      </span>
                    ))}
                  </div>
                </div>
              </div>

              {/* Project Links */}
              <div className="bg-card rounded-lg border border-gray-200 dark:border-gray-800">
                <div className="p-6 border-b border-gray-200 dark:border-gray-800">
                  <h3 className="text-lg font-semibold text-gray-900 dark:text-white flex items-center gap-2">
                    <ExternalLink className="w-5 h-5 text-[#FF6A00]" />
                    Project Links
                  </h3>
                </div>
                <div className="p-6 space-y-3">
                  <Button className="w-full bg-[#FF6A00] hover:bg-orange-600 text-white">
                    <Globe className="w-4 h-4 mr-2" />
                    View Live Demo
                  </Button>
                  <Button
                    variant="outline"
                    className="w-full border-gray-300 dark:border-gray-600"
                  >
                    <Github className="w-4 h-4 mr-2" />
                    View Source Code
                  </Button>
                </div>
              </div>

              {/* Project Details */}
              <div className="bg-card rounded-lg border border-gray-200 dark:border-gray-800">
                <div className="p-6 border-b border-gray-200 dark:border-gray-800">
                  <h3 className="text-lg font-semibold text-gray-900 dark:text-white">
                    Project Information
                  </h3>
                </div>
                <div className="p-6 space-y-4">
                  <div className="flex justify-between">
                    <span className="text-gray-600 dark:text-gray-400 flex items-center gap-2">
                      <Calendar className="w-4 h-4" />
                      Duration
                    </span>
                    <span className="text-gray-900 dark:text-white font-medium">
                      {project.duration || "3 months"}
                    </span>
                  </div>
                  <Separator />
                  <div className="flex justify-between">
                    <span className="text-gray-600 dark:text-gray-400 flex items-center gap-2">
                      <Users className="w-4 h-4" />
                      Team Size
                    </span>
                    <span className="text-gray-900 dark:text-white font-medium">
                      Me
                    </span>
                  </div>
                  <Separator />
                  <div className="flex justify-between">
                    <span className="text-gray-600 dark:text-gray-400 flex items-center gap-2">
                      <Clock className="w-4 h-4" />
                      Completion
                    </span>
                    <span className="text-gray-900 dark:text-white font-medium">
                      {project.year || "2024"}
                    </span>
                  </div>
                  <Separator />
                  <div className="flex justify-between">
                    <span className="text-gray-600 dark:text-gray-400 flex items-center gap-2">
                      <Target className="w-4 h-4" />
                      Category
                    </span>
                    <span className="text-[#FF6A00] font-medium">
                      {project.category || "Web Application"}
                    </span>
                  </div>
                </div>
              </div>

              {/* Contact CTA */}
              <div className="bg-orange-50 dark:bg-orange-950/20 border border-orange-200 dark:border-orange-800/30 rounded-lg p-6">
                <h3 className="text-lg font-semibold text-gray-900 dark:text-white mb-3">
                  Interested in This Project?
                </h3>
                <p className="text-gray-600 dark:text-gray-400 text-sm mb-4">
                  Want to discuss this project or collaborate on something
                  similar?
                </p>
                <Button className="w-full bg-[#FF6A00] hover:bg-orange-600 text-white">
                  Get In Touch
                </Button>
              </div>
            </div>
          </div>
        </div>
      </main>

      <SupportDialog contentType="project" />
    </div>
  );
}
