import Image from "next/image";
import {
  Github,
  Linkedin,
  Mail,
  Download,
  Terminal,
  Layers,
  Globe,
  Users,
} from "lucide-react";
import { Button } from "@/components/ui/button";
import { Card, CardContent } from "@/components/ui/card";
import { Badge } from "@/components/ui/badge";

const technologies = [
  "React",
  "Next.js",
  "TypeScript",
  "JavaScript",
  "Node.js",
  "MongoDB",
  "Express.js",
  "Tailwind CSS",
  "Firebase",
  "Git",
];

const expertise = [
  {
    icon: Terminal,
    title: "Frontend Development",
    description:
      "Building responsive and interactive user interfaces with modern React ecosystem",
  },
  {
    icon: Layers,
    title: "Backend Development",
    description:
      "Creating robust server-side applications and RESTful APIs with Node.js",
  },
  {
    icon: Globe,
    title: "Full-Stack Solutions",
    description:
      "End-to-end web application development from concept to deployment",
  },
  {
    icon: Users,
    title: "User Experience",
    description:
      "Designing intuitive interfaces that prioritize user needs and accessibility",
  },
];

export default function AboutPage() {
  return (
    <div className="min-h-screen bg-card text-gray-100">
      <div className="container mx-auto px-6 py-16 max-w-6xl">
        {/* Header Section */}
        <section className="text-center py-20 border-b border-gray-700">
          <div className="mb-12">
            <div className="relative inline-block mb-8">
              <div className="w-40 h-40 mx-auto rounded-full overflow-hidden border-2 border-gray-700 shadow-2xl">
                <Image
                  src="https://picsum.photos/300"
                  alt="Abdul Rehman"
                  fill
                  className="object-cover"
                  priority
                />
              </div>
            </div>

            <h1 className="text-5xl md:text-6xl font-bold mb-4">
              <span className="text-gray-100">Abdul</span>{" "}
              <span className="text-orange-500">Rehman</span>
            </h1>

            <p className="text-2xl text-orange-400 font-light mb-8">
              Full-Stack Developer
            </p>

            <p className="text-lg text-gray-300 max-w-2xl mx-auto leading-relaxed mb-12">
              I build modern web applications with clean code and thoughtful
              design. Passionate about creating digital experiences that solve
              real problems and deliver exceptional user value.
            </p>

            <div className="flex flex-col sm:flex-row gap-6 justify-center">
              <Button
                asChild
                className="bg-orange-500 hover:bg-orange-600 text-white  px-8 py-6 text-lg font-semibold transition-all duration-300"
              >
                <a href="mailto:abdulrehman81799@gmail.com">
                  <Mail className="mr-2 h-5 w-5" />
                  Contact Me
                </a>
              </Button>

              <Button
                variant="outline"
                className="border-2 border-gray-600 text-gray-300 hover:border-orange-500 hover:text-orange-400 bg-transparent px-8 py-6 text-lg font-semibold transition-all duration-300"
              >
                <Download className="mr-2 h-5 w-5" />
                Resume
              </Button>
            </div>
          </div>
        </section>

        {/* About Section */}
        <section className="py-20 border-b border-gray-700">
          <div className="grid grid-cols-1 lg:grid-cols-2 gap-16">
            <div className="space-y-8">
              <h2 className="text-4xl font-bold text-orange-500 mb-8">
                About Me
              </h2>

              <div className="space-y-6 text-lg text-gray-300 leading-relaxed">
                <p>
                  I'm a dedicated full-stack developer with a passion for
                  creating exceptional web experiences. My journey began with
                  curiosity about how the web works, which has evolved into
                  expertise in modern development practices and technologies.
                </p>
                <p>
                  I specialize in building scalable applications using React,
                  Next.js, and Node.js. My approach combines technical
                  proficiency with user-centered design to create solutions that
                  are both powerful and intuitive.
                </p>
                <p>
                  Beyond coding, I enjoy staying current with industry trends,
                  contributing to open-source projects, and sharing knowledge
                  with the developer community.
                </p>
              </div>
            </div>

            <div className="space-y-8">
              <h3 className="text-2xl font-bold text-orange-500">
                Technical Skills
              </h3>

              <div className="grid grid-cols-2 gap-4 ">
                {technologies.map((tech, index) => (
                  <Badge
                    key={tech}
                    variant="secondary"
                    className="px-4 py-3 text-center bg-[#262626] text-gray-300 border border-[#262626] hover:border-orange-500 hover:text-orange-400 transition-all duration-300 cursor-default"
                  >
                    {tech}
                  </Badge>
                ))}
              </div>

              <div className="bg-[#262626] border border-[#262626] rounded-lg p-6 mt-8">
                <h4 className="text-xl font-semibold text-orange-400 mb-4">
                  Currently Learning
                </h4>
                <p className="text-gray-300">
                  Always expanding my skillset with new technologies and best
                  practices. Currently exploring advanced React patterns,
                  serverless architecture, and modern DevOps practices.
                </p>
              </div>
            </div>
          </div>
        </section>

        {/* Expertise Section */}
        <section className="py-20 border-b border-[#262626]">
          <div className="text-center mb-16">
            <h2 className="text-4xl font-bold text-orange-500 mb-8">
              What I Do
            </h2>
            <p className="text-lg text-gray-300 max-w-2xl mx-auto">
              I provide comprehensive web development services to help bring
              your ideas to life
            </p>
          </div>

          <div className="grid grid-cols-1 md:grid-cols-2 gap-8">
            {expertise.map((item, index) => (
              <Card
                key={index}
                className="bg-[#262626] border border-[#262626] hover:border-orange-500 transition-all duration-300 group"
              >
                <CardContent className="p-8">
                  <div className="flex items-start gap-4">
                    <div className="w-12 h-12 bg-orange-500 rounded-lg flex items-center justify-center flex-shrink-0 group-hover:bg-orange-600 transition-colors">
                      <item.icon className="h-6 w-6 text-gray-900" />
                    </div>
                    <div>
                      <h3 className="text-xl font-bold text-gray-100 mb-3">
                        {item.title}
                      </h3>
                      <p className="text-gray-300 leading-relaxed">
                        {item.description}
                      </p>
                    </div>
                  </div>
                </CardContent>
              </Card>
            ))}
          </div>
        </section>

        {/* Experience Highlights */}
        <section className="py-20 border-b border-[#262626]">
          <div className="text-center mb-16">
            <h2 className="text-4xl font-bold text-orange-500 mb-8">
              Experience Highlights
            </h2>
          </div>

          <div className="grid grid-cols-1 md:grid-cols-3 gap-8">
            <div className="text-center bg-[#262626] border border-[#262626] rounded-lg p-8">
              <div className="text-4xl font-bold text-orange-500 mb-2">15+</div>
              <div className="text-gray-300 text-lg">Projects Completed</div>
            </div>

            <div className="text-center bg-[#262626] border border-[#262626] rounded-lg p-8">
              <div className="text-4xl font-bold text-orange-500 mb-2">3+</div>
              <div className="text-gray-300 text-lg">Years Experience</div>
            </div>

            <div className="text-center bg-[#262626] border border-[#262626] rounded-lg p-8">
              <div className="text-4xl font-bold text-orange-500 mb-2">10+</div>
              <div className="text-gray-300 text-lg">Technologies</div>
            </div>
          </div>
        </section>

        {/* Contact Section */}
        <section className="py-20 text-center">
          <div className="max-w-3xl mx-auto">
            <h2 className="text-4xl font-bold text-orange-500 mb-8">
              Let's Work Together
            </h2>

            <p className="text-lg text-gray-300 mb-12 leading-relaxed">
              I'm always interested in discussing new opportunities and exciting
              projects. Whether you're looking for a developer to join your team
              or need help bringing your ideas to life, let's connect and
              explore the possibilities.
            </p>

            <div className="flex flex-col sm:flex-row gap-6 justify-center mb-12">
              <Button
                asChild
                size="lg"
                className="bg-orange-500 hover:bg-orange-600 text-white px-10 py-6 text-lg font-semibold transition-all duration-300"
              >
                <a href="mailto:abdulrehman81799@gmail.com">
                  <Mail className="mr-3 h-6 w-6" />
                  Send Message
                </a>
              </Button>
            </div>

            <div className="flex justify-center gap-8">
              <Button
                variant="ghost"
                size="lg"
                asChild
                className="text-gray-400 hover:text-orange-400 transition-colors"
              >
                <a
                  href="https://github.com/AbdulRehman817"
                  target="_blank"
                  rel="noopener noreferrer"
                >
                  <Github className="h-6 w-6 mr-3" />
                  <span className="text-lg">GitHub</span>
                </a>
              </Button>

              <Button
                variant="ghost"
                size="lg"
                asChild
                className="text-gray-400 hover:text-orange-400 transition-colors"
              >
                <a
                  href="https://www.linkedin.com/in/abdul-rehman-7aa108328/"
                  target="_blank"
                  rel="noopener noreferrer"
                >
                  <Linkedin className="h-6 w-6 mr-3" />
                  <span className="text-lg">LinkedIn</span>
                </a>
              </Button>
            </div>
          </div>
        </section>
      </div>
    </div>
  );
}
