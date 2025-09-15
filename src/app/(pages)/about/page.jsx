import Image from "next/image";
import {
  Github,
  Twitter,
  Linkedin,
  Mail,
  Send,
  Code,
  Palette,
  Server,
} from "lucide-react";
import { Button } from "@/components/ui/button";
import { Card, CardContent, CardHeader, CardTitle } from "@/components/ui/card";
import { Badge } from "@/components/ui/badge";
import Link from "next/link";

const skills = [
  "HTML",
  "CSS",
  "JavaScript",
  "React",
  "Next.js",
  "TypeScript",
  "Tailwind CSS",
  "Node.js",
  "Express.js",
  "MongoDB",
  "Firebase",
  "Clerk",
  "GitHub",
  "UI/UX Design",
];

export default function AboutPage() {
  return (
    <div className="container mx-auto px-4 py-16 md:py-24">
      {/* Intro Section */}
      <section className="grid grid-cols-1 md:grid-cols-3 gap-12 items-center mb-24">
        <div className="md:col-span-1 flex justify-center">
          <div className="relative w-48 h-48 rounded-full overflow-hidden border-4 border-primary shadow-lg">
            <Image
              src="https://picsum.photos/300"
              alt="Abdul Rehman"
              fill
              className="object-cover"
              data-ai-hint="portrait"
              priority
            />
          </div>
        </div>
        <div className="md:col-span-2">
          <h1 className="text-4xl md:text-5xl font-bold text-[#FF6A00] mb-4">
            Hi, I’m Abdul Rehman
          </h1>
          <p className="text-xl text-muted-foreground mb-6">
            I’m a developer who loves creating web applications that are not
            only functional but also enjoyable to use. For me, coding is about
            more than just writing lines of code—it’s about turning ideas into
            experiences that people can connect with.
          </p>
          <p className="text-lg text-foreground/80">
            I first got into coding because I was curious about how websites
            worked, and that curiosity quickly grew into a real passion. Now, I
            enjoy solving problems, experimenting with design, and building
            projects that bring creativity and practicality together.
          </p>
        </div>
      </section>

      {/* Philosophy Section */}
      <section className="mb-24">
        <div className="text-center mb-12">
          <h2 className="text-3xl md:text-4xl font-bold">My Philosophy</h2>
          <p className="mt-4 text-lg text-muted-foreground">
            My approach to building great products.
          </p>
        </div>
        <div className="grid grid-cols-1 md:grid-cols-3 gap-8 ">
          <Card className="text-center bg-card/50 hover:bg-card transition-all duration-300 transform hover:-translate-y-2">
            <CardHeader>
              <div className="mx-auto bg-[#FF6A00]/10 p-3 rounded-full w-fit mb-4">
                <Code className="w-8 h-8  text-[#FF6A00]" />
              </div>
              <CardTitle>Clean Code</CardTitle>
            </CardHeader>
            <CardContent>
              <p className="text-muted-foreground">
                I believe in writing code that is not only functional but also
                readable, maintainable, and scalable. Well-structured code is
                the foundation of a great product.
              </p>
            </CardContent>
          </Card>
          <Card className="text-center bg-card/50 hover:bg-card transition-all duration-300 transform hover:-translate-y-2">
            <CardHeader>
              <div className="mx-auto bg-[#FF6A00]/10 p-3 rounded-full w-fit mb-4">
                <Palette className="w-8 h-8 text-[#FF6A00]" />
              </div>
              <CardTitle>Thoughtful Design</CardTitle>
            </CardHeader>
            <CardContent>
              <p className="text-muted-foreground">
                Design is more than just aesthetics. I focus on creating
                intuitive, user-friendly interfaces that solve real problems and
                provide an enjoyable experience.
              </p>
            </CardContent>
          </Card>
          <Card className="text-center bg-card/50 hover:bg-card transition-all duration-300 transform hover:-translate-y-2">
            <CardHeader>
              <div className="mx-auto bg-[#FF6A00]/10 p-3 rounded-full w-fit mb-4">
                <Server className="w-8 h-8 text-[#FF6A00]" />
              </div>
              <CardTitle>Modern Stack</CardTitle>
            </CardHeader>
            <CardContent>
              <p className="text-muted-foreground">
                I leverage modern technologies and best practices to build fast,
                secure, and reliable applications that are ready for the future.
              </p>
            </CardContent>
          </Card>
        </div>
      </section>

      {/* Skills & Bio Section */}
      <section className="grid grid-cols-1 md:grid-cols-3 gap-12 mb-24 items-start">
        <div className="md:col-span-2">
          <h2 className="text-3xl font-bold mb-6">My Journey</h2>
          <div className="space-y-6 text-lg text-foreground/80">
            <p>
              I started my journey with a simple curiosity about how websites
              and apps actually work. What began as small experiments quickly
              turned into a real passion for building things on the web.
            </p>
            <p>
              Over time, I learned how to create clean, responsive designs on
              the front end and connect them with powerful back-end systems.
              I’ve worked on different types of projects — from personal
              practice apps to real-world applications — and each one has taught
              me something new.
            </p>
            <p>
              I enjoy learning and challenging myself with new tools and
              technologies. When I’m not coding, I like exploring new ideas,
              spending time on creative hobbies, or picking up skills that
              inspire me to think differently about the work I do.
            </p>
          </div>
        </div>
        <div className="md:col-span-1">
          <h2 className="text-3xl font-bold mb-6">My Skills</h2>
          <div className="flex flex-wrap gap-3">
            {skills.map((skill) => (
              <Badge
                key={skill}
                variant="secondary"
                className="text-base px-4 py-2"
              >
                {skill}
              </Badge>
            ))}
          </div>
        </div>
      </section>

      {/* Contact Section */}
      <section
        id="contact"
        className="text-center bg-card p-8 md:p-12 rounded-xl"
      >
        <h2 className="text-3xl font-bold mb-4">Let's Connect</h2>
        <p className="text-muted-foreground mb-8 max-w-2xl mx-auto">
          I'm always open to discussing new projects, creative ideas, or
          opportunities to be part of an amazing team. Feel free to reach out!
        </p>
        <div className="flex flex-col sm:flex-row justify-center items-center gap-4">
          <Button
            asChild
            size="lg"
            className="bg-[#FF6A00]/80 hover:bg-[#FF6A00] text-white"
          >
            <a href="mailto:hello@example.com">
              <Send className="mr-2 h-5 w-5 " /> Say Hello
            </a>
          </Button>
          <div className="flex items-center gap-2">
            <Button variant="ghost" size="icon" asChild>
              <a
                href="https://github.com/AbdulRehman817"
                target="_blank"
                rel="noopener noreferrer"
              >
                <Github />
                <span className="sr-only">GitHub</span>
              </a>
            </Button>

            <Button variant="ghost" size="icon" asChild>
              <a
                href="https://www.linkedin.com/in/abdul-rehman-7aa108328/"
                target="_blank"
                rel="noopener noreferrer"
              >
                <Linkedin className="h-6 w-6" />
                <span className="sr-only">LinkedIn</span>
              </a>
            </Button>
          </div>
        </div>
      </section>
    </div>
  );
}
