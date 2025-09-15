import Link from "next/link";
import Image from "next/image";
import {
  Card,
  CardContent,
  CardFooter,
  CardHeader,
  CardTitle,
} from "@/components/ui/card";
import { Badge } from "@/components/ui/badge";
import { ArrowRight } from "lucide-react";

export function ProjectCard({ project }) {
  return (
    <Card className=" flex flex-col h-full overflow-hidden transition-all duration-300 hover:shadow-xl hover:shadow-[#FF6A00]/20 hover:tracking-light hover:-translate-y-2 bg-card group">
      <Link
        href={`/projects/${project.slug}`}
        className="block overflow-hidden"
      >
        <div className="aspect-video relative">
          <Image
            src={project.image}
            alt={project.title}
            fill
            className="object-cover group-hover:scale-105 transition-transform duration-300"
            data-ai-hint="abstract technology"
          />
        </div>
      </Link>
      <CardHeader>
        <CardTitle className="text-xl leading-snug">
          <Link
            href={`/projects/${project.slug}`}
            className="hover:text-primary transition-colors line-clamp-2"
          >
            {project.title}
          </Link>
        </CardTitle>
      </CardHeader>
      <CardContent className="flex-grow">
        <p className="text-muted-foreground text-sm line-clamp-3">
          {project.description}
        </p>
        <div className="flex flex-wrap gap-2 mt-4">
          {project.tags.slice(0, 3).map((tag) => (
            <Badge key={tag} variant="secondary">
              {tag}
            </Badge>
          ))}
        </div>
      </CardContent>
      <CardFooter className="pt-4">
        <Link
          href={`/projects/${project.slug}`}
          className=" flex items-center font-semibold text-primary opacity-0 group-hover:opacity-100 transition-opacity duration-300"
        >
          <span className="text-[#FF6A00]">View Details</span>
          <ArrowRight className="ml-2 h-4 w-4 text-[#FF6A00]" />
        </Link>
      </CardFooter>
    </Card>
  );
}
