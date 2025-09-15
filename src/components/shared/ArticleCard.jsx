import React, { useState, useEffect } from "react";
import { ArrowRight, Calendar, Clock, Eye, BookOpen } from "lucide-react";
import { articles } from "@/lib/data";
import Link from "next/link";
// Mock article data for demonstration

export function ArticleCard({
  article = mockArticle,
  baseUrl = "/blog",
  mode = "once",
}) {
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
      className="flex flex-col h-full overflow-hidden transition-all duration-500 hover:shadow-2xl hover:shadow-orange-500/25 hover:-translate-y-3 bg-card-900 group relative border-2 border-card-700 hover:border-orange-500/30 rounded-lg"
      onMouseEnter={() => setIsHovered(true)}
      onMouseLeave={() => setIsHovered(false)}
    >
      {/* Subtle glow effect */}
      <div className="absolute -inset-0.5 bg-gradient-to-r from-orange-500/0 via-orange-500/10 to-orange-500/0 rounded-lg blur opacity-0 group-hover:opacity-100 transition-opacity duration-500 -z-10" />

      <Link
        href={`${baseUrl}/${article.slug}`}
        className="block overflow-hidden relative"
      >
        <div className="aspect-video relative bg-card-800">
          {!imageLoaded && (
            <div className="absolute inset-0 bg-gradient-to-br from-slate-800 via-slate-700/80 to-slate-800 animate-pulse" />
          )}
          <img
            src={article.image}
            alt={article.title}
            className={`w-full h-full object-cover group-hover:scale-110 transition-all duration-700 ${
              imageLoaded ? "opacity-100" : "opacity-0"
            }`}
            data-ai-hint="tech"
            onLoad={() => setImageLoaded(true)}
          />

          {/* Gradient overlay on hover */}
          <div className="absolute inset-0 bg-gradient-to-t from-black/60 via-transparent to-transparent opacity-0 group-hover:opacity-100 transition-opacity duration-300" />

          {/* Article type badge */}
          <div
            className={`absolute top-4 left-4 transition-all duration-300 ${
              isHovered
                ? "opacity-100 translate-y-0"
                : "opacity-0 -translate-y-2"
            }`}
          >
            <span className="flex items-center gap-1 bg-orange-500/90 backdrop-blur-md text-white text-xs px-3 py-1 rounded-full font-medium">
              <BookOpen className="w-3 h-3" />
              Article
            </span>
          </div>

          {/* Article stats overlay */}
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
              <Clock className="w-3 h-3" />
              <span>{article.date}</span>
            </div>
          </div>

          {/* Read indicator */}
          <div
            className={`absolute top-4 right-4 transition-all duration-300 ${
              isHovered
                ? "opacity-100 translate-y-0"
                : "opacity-0 -translate-y-2"
            }`}
          >
            <div className="w-8 h-8 bg-white/20 backdrop-blur-md rounded-full flex items-center justify-center text-white hover:bg-orange-500/80 transition-colors cursor-pointer">
              <ArrowRight className="w-4 h-4" />
            </div>
          </div>
        </div>
      </Link>

      {/* Card Header */}
      <div className="p-6 pb-3">
        <h3 className="text-xl leading-snug font-semibold">
          <a
            href={`${baseUrl}/${article.slug}`}
            className="hover:text-orange-500 transition-all duration-300 line-clamp-2 group-hover:tracking-wide text-white"
          >
            {article.title}
          </a>
        </h3>
      </div>

      {/* Card Content */}
      <div className="flex-grow pb-4 px-6">
        <p className="text-grey-400 text-sm line-clamp-3 leading-relaxed">
          {article.description}
        </p>
      </div>

      {/* Card Footer */}
      <div className="px-6 pb-6">
        <div className="flex justify-between items-center text-sm">
          <div className="flex items-center gap-2 text-card-400">
            <Calendar className="h-4 w-4" />
            <span>2025</span>
          </div>

          <a
            href={`${baseUrl}/${article.slug}`}
            className="flex items-center font-semibold text-orange-500 opacity-0 group-hover:opacity-100 transition-all duration-500 transform group-hover:translate-x-2 hover:underline"
          >
            <span className="mr-2">Read More</span>
            <div className="relative">
              <ArrowRight className="w-4 h-4 transition-transform duration-300 group-hover:translate-x-1" />
              <ArrowRight className="absolute top-0 left-0 w-4 h-4 opacity-0 transition-all duration-300 group-hover:opacity-100 group-hover:translate-x-2" />
            </div>
          </a>
        </div>

        {/* Progress indicator */}
        <div className="w-full h-1 bg-card-700 rounded-full overflow-hidden mt-4">
          <div
            className={`h-full bg-gradient-to-r from-orange-500 to-orange-400 transition-all duration-700 ${
              isHovered ? "w-full" : "w-0"
            }`}
          />
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

// Demo grid component for articles
const ArticleGrid = () => {
  return (
    <div className="min-h-screen bg-card-950 p-8">
      <div className="max-w-6xl mx-auto">
        <h1 className="text-3xl font-bold text-center mb-12 text-white">
          Latest Articles
        </h1>
        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-8">
          {articles.map((article, index) => (
            <div
              key={index}
              className="animate-fade-in-up"
              style={{ animationDelay: `${index * 150}ms` }}
            >
              <ArticleGrid article={article} />
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
};

export default ArticleCard;

// import React, { useState } from "react";
// import { ArrowRight, Calendar, Clock, Eye, BookOpen } from "lucide-react";

// // Mock blog posts data (replace with your actual blogPosts import)
// const blogPosts = [
//   {
//     title: "A Complete Guide to Deploying Your Next.js Application",
//     description: "Learn everything you need to know about deploying Next.js applications to various platforms including Vercel, Netlify, and AWS. This comprehensive guide covers best practices, optimization techniques, and troubleshooting tips.",
//     image: "https://images.unsplash.com/photo-1555066931-4365d14bab8c?w=800&h=450&fit=crop",
//     date: "Dec 15, 2023",
//     slug: "complete-guide-nextjs-deployment",
//     readTime: "8 min read",
//     views: "4.2k"
//   },
//   {
//     title: "Getting Started with Framer Motion",
//     description: "A beginner-friendly introduction to Framer Motion for creating stunning animations in React applications.",
//     image: "https://images.unsplash.com/photo-1551288049-bebda4e38f71?w=800&h=450&fit=crop",
//     date: "Dec 10, 2023",
//     slug: "getting-started-framer-motion",
//     readTime: "5 min read",
//     views: "2.8k"
//   },
//   {
//     title: "Mastering Tailwind CSS Grid for Complex Layouts",
//     description: "Learn advanced CSS Grid techniques with Tailwind CSS to create responsive, complex layouts with ease.",
//     image: "https://images.unsplash.com/photo-1507003211169-0a1dd7228f2d?w=800&h=450&fit=crop",
//     date: "Dec 8, 2023",
//     slug: "mastering-tailwind-css-grid",
//     readTime: "12 min read",
//     views: "6.1k"
//   }
// ];

// export function ArticleCard({ article, baseUrl = "/blog" }) {
//   const [imageLoaded, setImageLoaded] = useState(false);
//   const [isHovered, setIsHovered] = useState(false);

//   return (
//     <div
//       className="flex flex-col h-full overflow-hidden transition-all duration-500 hover:shadow-2xl hover:shadow-orange-500/25 hover:-translate-y-3 bg-gray-900 group relative border-2 border-gray-700 hover:border-orange-500/30 rounded-lg"
//       onMouseEnter={() => setIsHovered(true)}
//       onMouseLeave={() => setIsHovered(false)}
//     >
//       {/* Subtle glow effect */}
//       <div className="absolute -inset-0.5 bg-gradient-to-r from-orange-500/0 via-orange-500/10 to-orange-500/0 rounded-lg blur opacity-0 group-hover:opacity-100 transition-opacity duration-500 -z-10" />

//       <a
//         href={`${baseUrl}/${article.slug}`}
//         className="block overflow-hidden relative"
//       >
//         <div className="aspect-video relative bg-gray-800">
//           {!imageLoaded && (
//             <div className="absolute inset-0 bg-gradient-to-br from-gray-800 via-gray-700/80 to-gray-800 animate-pulse" />
//           )}
//           <img
//             src={article.image}
//             alt={article.title}
//             className={`w-full h-full object-cover group-hover:scale-110 transition-all duration-700 ${imageLoaded ? 'opacity-100' : 'opacity-0'}`}
//             data-ai-hint="tech"
//             onLoad={() => setImageLoaded(true)}
//           />

//           {/* Gradient overlay on hover */}
//           <div className="absolute inset-0 bg-gradient-to-t from-black/60 via-transparent to-transparent opacity-0 group-hover:opacity-100 transition-opacity duration-300" />

//           {/* Article type badge */}
//           <div className={`absolute top-4 left-4 transition-all duration-300 ${isHovered ? 'opacity-100 translate-y-0' : 'opacity-0 -translate-y-2'}`}>
//             <span className="flex items-center gap-1 bg-orange-500/90 backdrop-blur-md text-white text-xs px-3 py-1 rounded-full font-medium">
//               <BookOpen className="w-3 h-3" />
//               Article
//             </span>
//           </div>

//           {/* Article stats overlay */}
//           <div className={`absolute bottom-4 left-4 flex items-center gap-3 text-white/90 text-sm transition-all duration-300 ${isHovered ? 'opacity-100 translate-y-0' : 'opacity-0 translate-y-2'}`}>
//             <div className="flex items-center gap-1 bg-black/30 backdrop-blur-md px-2 py-1 rounded-full">
//               <Eye className="w-3 h-3" />
//               <span>{article.views}</span>
//             </div>
//             <div className="flex items-center gap-1 bg-black/30 backdrop-blur-md px-2 py-1 rounded-full">
//               <Clock className="w-3 h-3" />
//               <span>{article.readTime}</span>
//             </div>
//           </div>

//           {/* Read indicator */}
//           <div className={`absolute top-4 right-4 transition-all duration-300 ${isHovered ? 'opacity-100 translate-y-0' : 'opacity-0 -translate-y-2'}`}>
//             <div className="w-8 h-8 bg-white/20 backdrop-blur-md rounded-full flex items-center justify-center text-white hover:bg-orange-500/80 transition-colors cursor-pointer">
//               <ArrowRight className="w-4 h-4" />
//             </div>
//           </div>
//         </div>
//       </a>

//       {/* Card Header */}
//       <div className="p-6 pb-3">
//         <h3 className="text-xl leading-snug font-semibold">
//           <a
//             href={`${baseUrl}/${article.slug}`}
//             className="hover:text-orange-500 transition-all duration-300 line-clamp-2 group-hover:tracking-wide text-white"
//           >
//             {article.title}
//           </a>
//         </h3>
//       </div>

//       {/* Card Content */}
//       <div className="flex-grow pb-4 px-6">
//         <p className="text-gray-400 text-sm line-clamp-3 leading-relaxed">
//           {article.description}
//         </p>
//       </div>

//       {/* Card Footer */}
//       <div className="px-6 pb-6">
//         <div className="flex justify-between items-center text-sm">
//           <div className="flex items-center gap-2 text-gray-400">
//             <Calendar className="h-4 w-4" />
//             <span>{article.date}</span>
//           </div>

//           <a
//             href={`${baseUrl}/${article.slug}`}
//             className="flex items-center font-semibold text-orange-500 opacity-0 group-hover:opacity-100 transition-all duration-500 transform group-hover:translate-x-2 hover:underline"
//           >
//             <span className="mr-2">Read More</span>
//             <div className="relative">
//               <ArrowRight className="w-4 h-4 transition-transform duration-300 group-hover:translate-x-1" />
//               <ArrowRight className="absolute top-0 left-0 w-4 h-4 opacity-0 transition-all duration-300 group-hover:opacity-100 group-hover:translate-x-2" />
//             </div>
//           </a>
//         </div>

//         {/* Progress indicator */}
//         <div className="w-full h-1 bg-gray-700 rounded-full overflow-hidden mt-4">
//           <div className={`h-full bg-gradient-to-r from-orange-500 to-orange-400 transition-all duration-700 ${isHovered ? 'w-full' : 'w-0'}`} />
//         </div>
//       </div>

//       {/* Bottom accent line */}
//       <div className={`absolute bottom-0 left-0 h-1 bg-gradient-to-r from-orange-500 to-transparent transition-all duration-700 ${isHovered ? 'w-full' : 'w-0'}`} />
//     </div>
//   );
// }

// // ✅ Grid using blogPosts instead of mock data
// const ArticleGrid = () => {
//   return (
//     <div className="min-h-screen bg-gray-950 p-8">
//       <div className="max-w-6xl mx-auto">
//         <h1 className="text-3xl font-bold text-center mb-12 text-white">
//           Latest Articles
//         </h1>
//         <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-8">
//           {blogPosts.map((article, index) => (
//             <div
//               key={index}
//               className="animate-fade-in-up"
//               style={{ animationDelay: `${index * 150}ms` }}
//             >
//               <ArticleCard article={article} />
//             </div>
//           ))}
//         </div>
//       </div>

//       <style jsx>{`
//         @keyframes fade-in-up {
//           from {
//             opacity: 0;
//             transform: translateY(30px);
//           }
//           to {
//             opacity: 1;
//             transform: translateY(0);
//           }
//         }
//         .animate-fade-in-up {
//           animation: fade-in-up 0.6s ease-out forwards;
//           opacity: 0;
//         }
//         .line-clamp-3 {
//           display: -webkit-box;
//           -webkit-line-clamp: 3;
//           -webkit-box-orient: vertical;
//           overflow: hidden;
//         }
//         .line-clamp-2 {
//           display: -webkit-box;
//           -webkit-line-clamp: 2;
//           -webkit-box-orient: vertical;
//           overflow: hidden;
//         }
//       `}</style>
//     </div>
//   );
// };

// export default ArticleGrid;
