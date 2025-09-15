import { Github, Linkedin, Code } from "lucide-react";
import Link from "next/link";
import { Button } from "@/components/ui/button";
import { Separator } from "@/components/ui/separator";

const navItems = [
  { href: "/about", label: "About" },
  { href: "/projects", label: "Projects" },
  { href: "/blog", label: "Blog" },
  { href: "/contact", label: "Contact" },
];

export function Footer() {
  return (
    <footer className="bg-card">
      <div className="container py-14 px-6 md:px-12">
        <div className="grid grid-cols-1 md:grid-cols-3 gap-10 md:gap-16">
          {/* Logo + About */}
          <div className="flex flex-col gap-5">
            <Link href="/" className="flex items-center gap-3">
              <div className="w-12 h-12 bg-[#FF6A00] rounded-lg flex items-center justify-center">
                <Code className="h-6 w-6 text-white" />
              </div>
              <span className="font-bold font-headline text-2xl">
                Abdul Rehman
              </span>
            </Link>
            <p className="text-muted-foreground leading-relaxed max-w-sm">
              Creative developer passionate about building modern web
              experiences.
            </p>
          </div>

          {/* Quick Links */}
          <div className="md:justify-self-center">
            <h4 className="font-semibold text-lg mb-5">Quick Links</h4>
            <ul className="space-y-3">
              {navItems.map((item) => (
                <li key={item.href}>
                  <Link
                    href={item.href}
                    className="text-muted-foreground hover:text-primary transition-colors"
                  >
                    {item.label}
                  </Link>
                </li>
              ))}
            </ul>
          </div>

          {/* Social Links */}
          <div className="md:justify-self-end">
            <h4 className="font-semibold text-lg mb-5">Connect</h4>
            <div className="flex items-center gap-4">
              <Button variant="ghost" size="icon" asChild>
                <a
                  href="https://github.com/AbdulRehman817"
                  target="_blank"
                  rel="noopener noreferrer"
                >
                  <Github className="h-5 w-5" />
                  <span className="sr-only">GitHub</span>
                </a>
              </Button>

              <Button variant="ghost" size="icon" asChild>
                <a
                  href="https://linkedin.com/in/abdul-rehman-7aa108328/"
                  target="_blank"
                  rel="noopener noreferrer"
                >
                  <Linkedin className="h-5 w-5" />
                  <span className="sr-only">LinkedIn</span>
                </a>
              </Button>
            </div>
          </div>
        </div>

        <Separator className="my-10" />

        <p className="text-sm text-center text-muted-foreground">
          © {new Date().getFullYear()} Abdul Rehman. All rights reserved.
        </p>
      </div>
    </footer>
  );
}
