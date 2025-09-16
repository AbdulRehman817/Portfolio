"use client";

import Link from "next/link";
import { usePathname } from "next/navigation";
import { useState } from "react";
import { Code, Menu, X } from "lucide-react";

import { Button } from "@/components/ui/button";
import { Sheet, SheetContent, SheetTrigger } from "@/components/ui/sheet";
import { cn } from "@/lib/utils";
import Image from "next/image";

const navItems = [
  { href: "/about", label: "About" },
  { href: "/projects", label: "Projects" },
  { href: "/blog", label: "Blog" },
  { href: "/contact", label: "Contact" },
];

export function Header() {
  const [isMobileMenuOpen, setIsMobileMenuOpen] = useState(false);
  const pathname = usePathname();

  return (
    <header className="sticky top-0 z-50 w-full border-b border-border/40 bg-background/95 backdrop-blur supports-[backdrop-filter]:bg-background/60">
      <div className="container flex h-20 items-center justify-between px-4 md:px-6">
        {/* Logo */}
        <Link href="/" className="flex items-center gap-3">
          {/* <div className="w-10 h-10 bg-[#FF6A00] rounded-lg flex items-center justify-center"> */}
          {/* <Code className="w-6 h-6 text-white" /> */}
          {/* </div> */}
          <span className="text-xl md:text-2xl font-bold font-headline text-foreground">
            <Image
              src="/unnamed__1_-removebg-preview.png"
              width="130"
              height="130"
              alt=""
              className="relative right-[20px]"
            />
          </span>
        </Link>

        {/* Desktop Navigation */}
        <nav className="hidden md:flex items-center gap-2">
          {navItems.map((item) => (
            <Button
              key={item.href}
              asChild
              variant={pathname.startsWith(item.href) ? "secondary" : "ghost"}
              className="text-sm px-4 py-2"
            >
              <Link href={item.href}>{item.label}</Link>
            </Button>
          ))}
        </nav>

        {/* Mobile Navigation Button */}
        <div className="md:hidden">
          <Sheet open={isMobileMenuOpen} onOpenChange={setIsMobileMenuOpen}>
            <SheetTrigger asChild>
              <Button variant="ghost" size="icon">
                <Menu className="h-6 w-6" />
                <span className="sr-only">Open menu</span>
              </Button>
            </SheetTrigger>

            <SheetContent
              side="right"
              className="w-full max-w-xs bg-background"
            >
              <div className="p-4">
                {/* Mobile Header */}
                <div className="flex justify-between items-center mb-6">
                  <Link
                    href="/"
                    className="flex items-center gap-2"
                    onClick={() => setIsMobileMenuOpen(false)}
                  >
                    <div className="w-8 h-8 bg-[#FF6A00] rounded-md flex items-center justify-center">
                      <Code className="h-5 w-5 text-white" />
                    </div>
                    <span className="font-bold text-lg font-headline text-foreground">
                      Abdul Rehman
                    </span>
                  </Link>

                  {/* <X className="h-6 w-6" />  */}
                  <span className="sr-only">Close menu</span>
                </div>

                {/* Mobile Nav Items */}
                <div className="flex flex-col gap-2">
                  {navItems.map((item) => (
                    <Link
                      key={item.href}
                      href={item.href}
                      onClick={() => setIsMobileMenuOpen(false)}
                      className={cn(
                        "text-base font-medium px-3 py-2 rounded-md transition-colors",
                        pathname.startsWith(item.href)
                          ? "bg-secondary text-primary"
                          : "text-muted-foreground hover:text-primary hover:bg-accent"
                      )}
                    >
                      {item.label}
                    </Link>
                  ))}
                </div>
              </div>
            </SheetContent>
          </Sheet>
        </div>
      </div>
    </header>
  );
}
