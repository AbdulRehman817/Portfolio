import Image from "next/image";
import { Github, Linkedin, Send, Code, Palette, Server } from "lucide-react";
import { Button } from "@/components/ui/button";
import Link from "next/link";

export default function AboutPage() {
  return (
    <div className="w-full">
      {/* Hero Section */}
      <section className="relative min-h-screen flex items-center bg-gradient-to-br from-[#0f0f0f] via-[#1a1a1a] to-[#111111] text-white">
        <div className="container mx-auto grid grid-cols-1 md:grid-cols-2 gap-12 items-center px-6">
          {/* Intro */}
          <div className="space-y-6">
            <h1 className="text-6xl md:text-7xl font-extrabold leading-tight">
              Building{" "}
              <span className="text-transparent bg-clip-text bg-gradient-to-r from-[#FF6A00] to-orange-400">
                modern web
              </span>{" "}
              experiences
            </h1>
            <p className="text-lg text-gray-300 max-w-lg">
              Hi, I’m Abdul Rehman — a developer who turns ideas into clean,
              functional, and engaging digital products.
            </p>
            <div className="flex gap-4">
              <Button
                asChild
                size="lg"
                className="bg-[#FF6A00] hover:bg-[#e65e00] text-white px-6"
              >
                <a href="mailto:hello@example.com">
                  <Send className="mr-2 h-5 w-5" /> Get in Touch
                </a>
              </Button>
              <Button variant="outline" asChild>
                <a
                  href="https://www.linkedin.com/in/abdul-rehman-7aa108328/"
                  target="_blank"
                >
                  LinkedIn
                </a>
              </Button>
            </div>
          </div>

          {/* Image */}
          <div className="flex justify-center">
            <div className="relative w-80 h-80 rounded-3xl overflow-hidden shadow-2xl border border-white/10">
              <Image
                src="https://picsum.photos/500"
                alt="Abdul Rehman"
                fill
                className="object-cover"
                priority
              />
            </div>
          </div>
        </div>
      </section>

      {/* Stats */}
      <section className="relative -mt-16 z-10">
        <div className="container mx-auto grid grid-cols-1 md:grid-cols-3 gap-6 px-6">
          {[
            { number: "3+", label: "Years Learning" },
            { number: "20+", label: "Projects Built" },
            { number: "∞", label: "Ideas to Explore" },
          ].map((stat, i) => (
            <div
              key={i}
              className="bg-white/5 backdrop-blur-lg rounded-2xl p-8 text-center shadow-md"
            >
              <h3 className="text-4xl font-bold text-[#FF6A00]">
                {stat.number}
              </h3>
              <p className="text-gray-400">{stat.label}</p>
            </div>
          ))}
        </div>
      </section>

      {/* Philosophy */}
      <section className="container mx-auto py-28 px-6">
        <h2 className="text-4xl font-bold text-center mb-16">My Philosophy</h2>
        <div className="grid md:grid-cols-3 gap-12 text-center">
          <div className="space-y-4">
            <Code className="mx-auto w-10 h-10 text-[#FF6A00]" />
            <h3 className="text-xl font-semibold">Clean Code</h3>
            <p className="text-muted-foreground">
              Scalable, maintainable, and readable — good code is future-proof.
            </p>
          </div>
          <div className="space-y-4">
            <Palette className="mx-auto w-10 h-10 text-[#FF6A00]" />
            <h3 className="text-xl font-semibold">Thoughtful Design</h3>
            <p className="text-muted-foreground">
              Every interaction is intentional, combining form with function.
            </p>
          </div>
          <div className="space-y-4">
            <Server className="mx-auto w-10 h-10 text-[#FF6A00]" />
            <h3 className="text-xl font-semibold">Modern Stack</h3>
            <p className="text-muted-foreground">
              Leveraging the latest technologies to deliver high-performance
              apps.
            </p>
          </div>
        </div>
      </section>

      {/* Journey Timeline */}
      <section className="bg-card py-28">
        <div className="container mx-auto px-6">
          <h2 className="text-4xl font-bold text-center mb-16">My Journey</h2>
          <div className="relative max-w-3xl mx-auto before:content-[''] before:absolute before:left-4 before:top-0 before:bottom-0 before:w-1 before:bg-[#FF6A00]/40">
            {[
              {
                title: "Curiosity Sparks",
                desc: "Started exploring how websites worked. Curiosity turned into passion.",
              },
              {
                title: "Hands-On Projects",
                desc: "Built responsive UIs and connected them with robust backends.",
              },
              {
                title: "Continuous Growth",
                desc: "Always learning, experimenting, and pushing my skills further.",
              },
            ].map((step, i) => (
              <div key={i} className="relative pl-12 mb-12 last:mb-0">
                <div className="absolute left-0 top-1 w-8 h-8 bg-[#FF6A00] rounded-full border-4 border-white/20"></div>
                <h3 className="text-xl font-semibold">{step.title}</h3>
                <p className="text-muted-foreground">{step.desc}</p>
              </div>
            ))}
          </div>
        </div>
      </section>

      {/* Contact */}
      <section className="relative py-28 text-center">
        <div className="container mx-auto px-6">
          <div className="bg-white/5 backdrop-blur-lg bg-card rounded-3xl p-16 shadow-lg max-w-2xl mx-auto">
            <h2 className="text-4xl font-bold mb-6">Let’s Connect</h2>
            <p className="text-muted-foreground mb-8">
              Open to exciting projects, collaborations, or just a friendly
              chat.
            </p>
            <div className="flex justify-center gap-6">
              <Button
                asChild
                size="lg"
                className="bg-[#FF6A00] hover:bg-[#e65e00] text-white"
              >
                <a href="mailto:hello@example.com">Say Hello</a>
              </Button>
              <Link
                href="https://github.com/AbdulRehman817"
                target="_blank"
                className="text-gray-400 hover:text-[#FF6A00]"
              >
                <Github className="h-7 w-7" />
              </Link>
              <Link
                href="https://www.linkedin.com/in/abdul-rehman-7aa108328/"
                target="_blank"
                className="text-gray-400 hover:text-[#FF6A00]"
              >
                <Linkedin className="h-7 w-7" />
              </Link>
            </div>
          </div>
        </div>
      </section>
    </div>
  );
}
