"use client";
import React, { useState } from "react";
import { ArrowRight, ExternalLink, Github, Calendar, Eye } from "lucide-react";
import { projects } from "@/lib/data";
import { useEffect } from "react";
import Link from "next/link";

// Mock project data for fallback
const mockProject = {
  title: "Interactive Data Dashboard",
  description:
    "A comprehensive data visualization platform built with React and D3.js, featuring real-time analytics and interactive charts for business intelligence.",
  image:
    "https://images.unsplash.com/photo-1551288049-bebda4e38f71?w=800&h=450&fit=crop",
  tags: ["React", "Next.js", "TypeScript", "JavaScript", "D3.js"],
  slug: "interactive-dashboard",
};

export function ProjectCard({ project = mockProject, mode = "once" }) {
  const [imageLoaded, setImageLoaded] = useState(false);
  const [showNumbers, setShowNumbers] = useState(0);
  const [isHovered, setIsHovered] = useState(false);
  const [hasIncremented, setHasIncremented] = useState(false);

  useEffect(() => {
    if (mode === "once" && isHovered && !hasIncremented) {
      setShowNumbers((prev) => prev + 1);
      setHasIncremented(true);
    }
  }, [isHovered, mode, hasIncremented]);
  return (
    <div
      className="flex flex-col h-full overflow-hidden transition-all duration-500 hover:shadow-2xl hover:shadow-orange-500/25 hover:-translate-y-3 bg-card group relative border-2 border-card-700 hover:border-orange-500/30 rounded-lg"
      onMouseEnter={() => setIsHovered(true)}
      onMouseLeave={() => setIsHovered(false)}
    >
      {/* Subtle glow effect */}
      <div className="absolute -inset-0.5 bg-gradient-to-r from-orange-500/0 via-orange-500/10 to-orange-500/0 rounded-lg blur opacity-0 group-hover:opacity-100 transition-opacity duration-500 -z-10" />

      <Link
        href={`/projects/${project.slug}`}
        className="block overflow-hidden relative"
      >
        <div className="aspect-video relative bg-card-800">
          {!imageLoaded && (
            <div className="absolute inset-0 bg-gradient-to-br from-slate-800 via-slate-700/80 to-slate-800 animate-pulse" />
          )}
          <img
            src={project.image}
            alt={project.title}
            className={`w-full h-full object-cover group-hover:scale-110 transition-all duration-700 ${
              imageLoaded ? "opacity-100" : "opacity-0"
            }`}
            onLoad={() => setImageLoaded(true)}
          />

          {/* Gradient overlay */}
          <div className="absolute inset-0 bg-gradient-to-t from-black/60 via-transparent to-transparent opacity-0 group-hover:opacity-100 transition-opacity duration-300" />

          {/* Floating action buttons */}
          <div
            className={`absolute top-4 right-4 flex gap-2 transition-all duration-300 ${
              isHovered
                ? "opacity-100 translate-y-0"
                : "opacity-0 -translate-y-2"
            }`}
          >
            <button className="p-2 bg-black/30 backdrop-blur-md rounded-full text-white hover:bg-orange-500/80 transition-colors">
              <a
                href={project.liveUrl}
                target="_blank"
                rel="noopener noreferrer"
                className="p-2 bg-black/30 backdrop-blur-md rounded-full text-white hover:bg-orange-500/80 transition-colors"
              >
                <ExternalLink className="w-4 h-4" />
              </a>
            </button>
            <button className="p-2 bg-black/30 backdrop-blur-md rounded-full text-white hover:bg-orange-500/80 transition-colors">
              <Link
                href={project.githubUrl}
                target="_blank"
                rel="noopener noreferrer"
                className="p-2  backdrop-blur-md rounded-full text-white hover:bg-orange-500/80 transition-colors"
              >
                <Github className="w-4 h-4" />
              </Link>
            </button>
          </div>

          {/* Project stats */}
          <div
            className={`absolute bottom-4 left-4 flex items-center gap-3 text-white/90 text-sm transition-all duration-300 ${
              isHovered
                ? "opacity-100 translate-y-0"
                : "opacity-0 translate-y-2"
            }`}
          >
            <div className="flex items-center gap-1 bg-black/30 backdrop-blur-md px-2 py-1 rounded-full">
              <Eye className="w-3 h-3" />
              <span>{showNumbers.toLocaleString()}</span>
            </div>
            <div className="flex items-center gap-1 bg-black/30 backdrop-blur-md px-2 py-1 rounded-full">
              <Calendar className="w-3 h-3" />
              <span>{project.date}</span>
            </div>
          </div>
        </div>
      </Link>

      {/* Card Header */}
      <div className="p-6 pb-3">
        <h3 className="text-xl leading-snug font-semibold">
          <a
            href={`/projects/${project.slug}`}
            className="hover:text-orange-500 transition-all duration-300 line-clamp-2 group-hover:tracking-wide text-white"
          >
            {project.title}
          </a>
        </h3>
      </div>

      {/* Card Content */}
      <div className="flex-grow pb-4 px-6">
        <p className="text-slate-400 text-sm line-clamp-3 leading-relaxed mb-4">
          {project.description}
        </p>
        <div className="flex flex-wrap gap-2">
          {project.tags.slice(0, 3).map((tag, index) => (
            <span
              key={tag}
              className={`px-3 py-1 text-xs rounded-full transition-all duration-300 hover:bg-orange-500/10 hover:text-orange-500 hover:border-orange-500/30 transform hover:scale-105 border ${
                index === 0
                  ? "bg-orange-500/5 text-orange-500/80 border-orange-500/20"
                  : "bg-card-800 text-card-300 border-slate-600"
              }`}
            >
              {tag}
            </span>
          ))}
          {project.tags.length > 3 && (
            <span className="px-3 py-1 text-xs rounded-full border border-card-600 text-slate-300 hover:bg-orange-500/5 hover:border-orange-500/30 transition-all duration-300">
              +{project.tags.length - 3}
            </span>
          )}
        </div>
      </div>

      {/* Card Footer */}
      <div className="px-6 pb-6">
        <div className="w-full flex items-center justify-between">
          <a
            href={`/projects/${project.slug}`}
            className="flex items-center font-semibold opacity-0 group-hover:opacity-100 transition-all duration-500 transform group-hover:translate-x-2"
          >
            <span className="text-orange-500 mr-2">View Details</span>
            <ArrowRight className="w-4 h-4 text-orange-500 transition-transform duration-300 group-hover:translate-x-1" />
          </a>

          <div className="w-12 h-1 bg-slate-700 rounded-full overflow-hidden">
            <div
              className={`h-full bg-gradient-to-r from-orange-500 to-orange-400 transition-all duration-700 ${
                isHovered ? "w-full" : "w-0"
              }`}
            />
          </div>
        </div>
      </div>

      {/* Bottom accent line */}
      <div
        className={`absolute bottom-0 left-0 h-1 bg-gradient-to-r from-orange-500 to-transparent transition-all duration-700 ${
          isHovered ? "w-full" : "w-0"
        }`}
      />
    </div>
  );
}

// ✅ Project Grid Component
export default function ProjectGrid() {
  return (
    <div className="min-h-screen bg-slate-950 p-8">
      <div className="max-w-6xl mx-auto">
        <h1 className="text-3xl font-bold text-center mb-12 text-white">
          Featured Projects
        </h1>
        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-8">
          {projects.map((project, index) => (
            <div
              key={index}
              className="animate-fade-in-up"
              style={{ animationDelay: `${index * 150}ms` }}
            >
              <ProjectCard project={project} />
            </div>
          ))}
        </div>
      </div>

      <style jsx>{`
        @keyframes fade-in-up {
          from {
            opacity: 0;
            transform: translateY(30px);
          }
          to {
            opacity: 1;
            transform: translateY(0);
          }
        }
        .animate-fade-in-up {
          animation: fade-in-up 0.6s ease-out forwards;
          opacity: 0;
        }
        .line-clamp-3 {
          display: -webkit-box;
          -webkit-line-clamp: 3;
          -webkit-box-orient: vertical;
          overflow: hidden;
        }
        .line-clamp-2 {
          display: -webkit-box;
          -webkit-line-clamp: 2;
          -webkit-box-orient: vertical;
          overflow: hidden;
        }
      `}</style>
    </div>
  );
}
