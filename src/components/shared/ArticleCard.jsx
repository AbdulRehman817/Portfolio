import Link from "next/link";
import Image from "next/image";
import {
  Card,
  CardContent,
  CardFooter,
  CardHeader,
  CardTitle,
} from "@/components/ui/card";
import { ArrowRight, Calendar } from "lucide-react";

export function ArticleCard({ article, baseUrl }) {
  return (
    <Card className="flex flex-col h-full overflow-hidden transition-all duration-300 hover:shadow-xl hover:shadow-[#FF6A00]/20 hover:-translate-y-2 bg-card group">
      <Link
        href={`${baseUrl}/${article.slug}`}
        className="block overflow-hidden"
      >
        <div className="aspect-video relative">
          <Image
            src={article.image}
            alt={article.title}
            fill
            className="object-cover group-hover:scale-105 transition-transform duration-300"
            data-ai-hint="tech"
          />
        </div>
      </Link>
      <CardHeader>
        <CardTitle className="text-xl leading-snug">
          <Link
            href={`${baseUrl}/${article.slug}`}
            className="hover:text-primary transition-colors line-clamp-2"
          >
            {article.title}
          </Link>
        </CardTitle>
      </CardHeader>
      <CardContent className="flex-grow">
        <p className="text-muted-foreground text-sm line-clamp-3">
          {article.description}
        </p>
      </CardContent>
      <CardFooter className="flex justify-between items-center text-sm pt-4">
        <div className="flex items-center gap-2 text-muted-foreground">
          <Calendar className="h-4 w-4" />
          <span>{article.date}</span>
        </div>
        <Link
          href={`${baseUrl}/${article.slug}`}
          className="flex items-center font-semibold text-[#FF6A00] hover:underline"
        >
          Read More <ArrowRight className="ml-1 h-4 w-4" />
        </Link>
      </CardFooter>
    </Card>
  );
}
