export const projects = [
  {
    slug: "interactive-dashboard",
    title: "Interactive Data Dashboard",
    description:
      "A responsive and dynamic data visualization dashboard built with Next.js and Recharts.",
    longDescription:
      "This project showcases a fully interactive dashboard for visualizing complex datasets. It features real-time data updates, customizable charts, and a sleek, modern UI designed for optimal user experience. Built with Next.js for server-side rendering and performance, and Recharts for powerful data visualization capabilities.",
    image: "https://picsum.photos/800/600?random=1",
    tags: ["Next.js", "React", "TypeScript", "Tailwind CSS", "Recharts"],
    githubUrl: "https://github.com/AbdulRehman817",
    liveUrl: "https://example.com",
  },
  {
    slug: "shopping-store",
    title: "Shopping Store",
    description:
      "A responsive e-commerce app built with Next.js, TypeScript, MongoDB/Mongoose, and Tailwind CSS.",
    longDescription:
      "A modern full-stack e-commerce application built with Next.js and TypeScript, featuring a clean, responsive UI styled with Tailwind CSS. The store uses MongoDB as its database with Mongoose for schema modeling and data validation. It includes product listing, category filtering, shopping cart management, and secure checkout. The backend handles CRUD operations for products, orders, and users, while Next.js provides fast server-side rendering for better SEO and performance.",
    image: "https://picsum.photos/800/600?random=7",
    tags: ["Next.js", "TypeScript", "MongoDB", "Mongoose", "Tailwind CSS"],
    githubUrl: "https://github.com/AbdulRehman817/Shopping-Store-Frontend",
    liveUrl: "https://shopping-store-frontend-chi.vercel.app/",
  },
  {
    slug: "e-commerce-platform",
    title: "E-Commerce Platform",
    description:
      "A full-featured e-commerce platform built with React JS, Mongo DB, and Tailwind CSS.",
    longDescription:
      "The eCommerce website is a modern, fully responsive online store designed to provide a seamless shopping experience across all devices, from mobile to desktop. The platform allows users to browse through a wide range of products, add items to their cart, and securely checkout, all while offering an intuitive and user-friendly interface.",
    image: "https://picsum.photos/800/600?random=8",
    tags: ["React", "MongoDB", "Tailwind CSS", "JavaScript"],
    githubUrl: "https://github.com/AbdulRehman817/E-Commerce-Website-ReactJs",
    liveUrl: "https://e-commerce-website-react-js-gules.vercel.app/",
  },
  {
    slug: "chat-app",
    title: "Chat App",
    description:
      "A real-time messaging platform that allows users to communicate instantly.",
    longDescription:
      "The Chat Application is a full-featured, real-time messaging platform developed using React.js for the frontend and Firebase (Firestore, Realtime Database, Authentication, and Storage) for the backend. It is designed to provide users with a smooth and secure chatting experience, similar to modern messaging platforms like WhatsApp or Messenger.",
    image: "https://picsum.photos/800/600?random=2",
    tags: ["React", "Firebase", "Realtime Database", "Authentication"],
    githubUrl: "https://github.com/AbdulRehman817/Chat-App",
    liveUrl: "https://chat-app-sc7o.vercel.app/signin",
  },
  {
    slug: "ai-powered-chatbot",
    title: "AI-Powered Chatbot",
    description:
      "An intelligent chatbot using natural language processing to provide customer support.",
    longDescription:
      "This project is an AI-powered chatbot designed to handle customer support inquiries. It leverages natural language processing (NLP) to understand and respond to user queries in a human-like manner. The chatbot is integrated into a web application and can be trained on custom knowledge bases.",
    image: "https://picsum.photos/800/600?random=3",
    tags: ["Python", "Flask", "NLP", "React", "WebSockets"],
    githubUrl: "https://github.com/AbdulRehman817",
    liveUrl: "https://example.com",
  },
];

export const blogPosts = [
  {
    slug: "building-a-blog-with-nextjs",
    title: "Building a Blog with Next.js and Tailwind CSS",
    description:
      "Learn how to create a high-performance blog from scratch using Next.js and style it with Tailwind CSS.",
    content: `
      <p class="text-lg text-muted-foreground mb-8">In this comprehensive guide, we'll walk through the entire process of building a feature-rich, high-performance blog from the ground up. We'll be using the power of Next.js for its robust React framework capabilities like Server-Side Rendering (SSR) and Static Site Generation (SSG), and we'll pair it with Tailwind CSS for rapid, utility-first styling. By the end, you'll have a fully functional, beautiful, and responsive blog ready to be deployed.</p>
      
      <h2 class="text-2xl font-bold mt-8 mb-4">Step 1: Project Initialization and Setup</h2>
      <p class="mb-4">The first step is to create a new Next.js application. The \`create-next-app\` CLI tool is the quickest way to get started. It scaffolds a new project with all the necessary configurations for TypeScript, Tailwind CSS, and ESLint.</p>
      <p class="mb-4">Open your terminal and execute the following command. This will create a new directory named 'my-awesome-blog' and install all the required dependencies.</p>
      <pre>npx create-next-app@latest my-awesome-blog --typescript --tailwind --eslint</pre>
      <p class="mt-4 mb-4">After the installation is complete, navigate into your new project directory:</p>
      <pre>cd my-awesome-blog</pre>
      
      <h2 class="text-2xl font-bold mt-8 mb-4">Step 2: Creating a Reusable Layout</h2>
      <p class="mb-4">A consistent layout is key for a good user experience. We'll create a main layout component that includes a shared header and footer. This component will wrap our page content, ensuring a consistent look and feel across the entire blog.</p>
      <p class="mb-4">Create a new directory \`src/components/layout\` and add two new files: \`Header.tsx\` and \`Footer.tsx\`. Then, modify the root \`src/app/layout.tsx\` file to use these components.</p>
      <pre>/* src/app/layout.tsx */
import { Header } from '@/components/layout/Header';
import { Footer } from '@/components/layout/Footer';

export default function RootLayout({ children }) {
  return (
    <html lang="en">
      <body>
        <Header />
        <main>{children}</main>
        <Footer />
      </body>
    </html>
  );
</pre>
      
      <h2 class="text-2xl font-bold mt-8 mb-4">Step 3: Fetching and Displaying Blog Posts</h2>
      <p class="mb-4">Next.js excels at data fetching. For a blog, we can pre-render all our posts at build time using Static Site Generation (SSG) for maximum performance. We'll assume our blog posts are stored as local Markdown files, but this approach can be adapted for any headless CMS.</p>
      <p class="mb-4">You can use libraries like \`gray-matter\` to parse metadata from Markdown files and \`remark\` to convert the Markdown content to HTML.</p>
      <p class="mb-4">On your blog's index page (\`src/app/blog/page.tsx\`), you can use \`getStaticProps\` to fetch all post data and pass it to your component as props.</p>
      <pre>import fs from 'fs';
import path from 'path';
import matter from 'gray-matter';

export async function getStaticProps() {
  const postsDirectory = path.join(process.cwd(), 'posts');
  const filenames = fs.readdirSync(postsDirectory);

  const posts = filenames.map(filename => {
    const filePath = path.join(postsDirectory, filename);
    const fileContents = fs.readFileSync(filePath, 'utf8');
    const { data } = matter(fileContents);
    return {
      slug: filename.replace(/\\.md$/, ''),
      frontmatter: data,
    };
  });

  return {
    props: {
      posts,
    },
  };
}</pre>
      <p class="mt-4">You now have access to your posts in your page component and can loop through them to create a list of post previews.</p>

      <h2 class="text-2xl font-bold mt-8 mb-4">Step 4: Deploying Your Blog</h2>
      <p class="mb-4">Once you're happy with your blog, it's time to deploy it. Services like Vercel (from the creators of Next.js) or Netlify offer seamless deployment experiences. Connect your Git repository, and with a few clicks, your blog will be live on the web.</p>
      <p class="mb-4">First, push your code to a GitHub repository. Then, on your hosting provider's dashboard:</p>
      <pre># 1. Create a new project
# 2. Connect it to your GitHub repository
# 3. Configure build settings (usually auto-detected)
# 4. Deploy!</pre>
    `,
    image: "https://picsum.photos/800/600?random=4",
    author: "Abdul Rehman",
    date: "2024-07-20",
    tags: ["Next.js", "Web Development", "Tailwind CSS", "JavaScript"],
  },
  {
    slug: "getting-started-with-framer-motion",
    title: "Getting Started with Framer Motion",
    description:
      "A beginner-friendly guide to adding stunning animations to your React applications.",
    content: `
      <p class="text-lg text-muted-foreground mb-8">Animations can transform a static user interface into a dynamic and engaging experience. Framer Motion is a production-ready motion library for React that makes it incredibly simple to create beautiful, complex animations with an intuitive and declarative API. This guide will get you up and running with the basics.</p>

      <h2 class="text-2xl font-bold mt-8 mb-4">Step 1: Installation</h2>
      <p class="mb-4">To begin, you need to add Framer Motion to your project. You can do this using either npm or yarn. Open your terminal in your project's root directory and run one of the following commands:</p>
      <pre>npm install framer-motion</pre>
      <p class="mt-4 mb-4">Or if you prefer yarn:</p>
      <pre>yarn add framer-motion</pre>

      <h2 class="text-2xl font-bold mt-8 mb-4">Step 2: Creating Your First Animation</h2>
      <p class="mb-4">Animating a component with Framer Motion is straightforward. First, you need to import the \`motion\` object. Then, you can convert any standard HTML or SVG element into a "motion component" by prefixing it with \`motion.\`. For example, \`div\` becomes \`motion.div\`.</p>
      <p class="mb-4">Once you have a motion component, you can animate it using the \`animate\` prop. This prop defines the target state of the animation.</p>
      <pre>import { motion } from "framer-motion";

export const MyComponent = () => (
  <motion.div
    animate={{
      x: 100,
      scale: 1.2,
      rotate: 90
    }}
    transition={{
      duration: 0.5
    }}
  />
);
</pre>
      <p class="mt-4">In this example, the div will move 100 pixels to the right, scale up by 20%, and rotate 90 degrees over a duration of 0.5 seconds.</p>

      <h2 class="text-2xl font-bold mt-8 mb-4">Step 3: Exploring Variants for Complex Animations</h2>
      <p class="mb-4">Variants are a powerful feature that allow you to define a set of named animation states. You can then transition between these states declaratively. This is especially useful for orchestrating complex animations across multiple components in your application.</p>
      <p class="mb-4">You define variants as an object, where each key represents a custom state name.</p>
      <pre>const listVariants = {
  visible: { 
    opacity: 1,
    transition: {
      when: "beforeChildren",
      staggerChildren: 0.3,
    },
  },
  hidden: { opacity: 0 },
};

const itemVariants = {
  visible: { opacity: 1, x: 0 },
  hidden: { opacity: 0, x: -100 },
};

export const MyList = () => (
  <motion.ul variants={listVariants} initial="hidden" animate="visible">
    <motion.li variants={itemVariants}>Item 1</motion.li>
    <motion.li variants={itemVariants}>Item 2</motion.li>
  </motion.ul>
);
</pre>
      <p class="mt-4">Here, the \`ul\` will fade in first, and then each \`li\` will stagger in one by one. This creates a clean, orchestrated animation with very little code.</p>

      <h2 class="text-2xl font-bold mt-8 mb-4">Step 4: Gestures and Dragging</h2>
      <p class="mb-4">Framer Motion also provides simple-to-use gesture helpers. You can easily add hover, tap, and drag gestures to your motion components.</p>
      <pre>
<motion.div
  whileHover={{ scale: 1.1 }}
  whileTap={{ scale: 0.9 }}
  drag="x"
  dragConstraints={{ left: -100, right: 100 }}
/>
      </pre>
      <p class="mt-4">This div will scale up on hover, scale down on tap, and can be dragged horizontally within a 200px range. It's that easy to add rich interactivity.</p>

    `,
    image: "https://picsum.photos/800/600?random=5",
    author: "Abdul Rehman",
    date: "2024-07-15",
    tags: ["React", "Animation", "Framer Motion", "UI/UX"],
  },
  {
    slug: "mastering-tailwind-css-grid",
    title: "Mastering Tailwind CSS Grid for Complex Layouts",
    description:
      "Dive deep into Tailwind's grid system to build responsive and intricate layouts with ease and precision.",
    content: `
      <p class="text-lg text-muted-foreground mb-8">Tailwind CSS has revolutionized the way we approach styling, and its grid system is one of its most powerful features. This article will guide you through creating complex, responsive layouts that are maintainable and easy to reason about, moving beyond the basics of columns and rows.</p>

      <h2 class="text-2xl font-bold mt-8 mb-4">The Fundamentals: \`grid-cols\` and \`grid-rows\`</h2>
      <p class="mb-4">At its core, the grid system starts with defining the number of columns and rows. You can create a simple three-column grid like this:</p>
      <pre><div class="grid grid-cols-3 gap-4">
  <div>01</div>
  <div>02</div>
  <div>03</div>
</div></pre>
      <p class="mt-4 mb-4">But what if you need more control? You can define explicit column counts for different breakpoints to ensure your layout is perfectly responsive.</p>
      <pre><div class="grid grid-cols-1 sm:grid-cols-2 md:grid-cols-3 lg:grid-cols-4 gap-4">
  {/* Your grid items here */}
</div></pre>
      
      <h2 class="text-2xl font-bold mt-8 mb-4">Spanning and Positioning Elements</h2>
      <p class="mb-4">The real power comes from positioning items within the grid. Use \`col-span-*\` to make an element span multiple columns. This is perfect for creating hero sections or featured content blocks.</p>
      <pre><div class="grid grid-cols-3 gap-4">
  <div class="col-span-2">Main Content</div>
  <div>Sidebar</div>
</div></pre>
      <p class="mt-4 mb-4">You can also specify the start and end lines for an item, giving you precise control over its placement.</p>
      <pre><div class="grid grid-cols-6 gap-4">
  <div class="col-start-2 col-span-4">Centered Content</div>
</div></pre>

      <h2 class="text-2xl font-bold mt-8 mb-4">Advanced Example: A Dashboard Layout</h2>
      <p class="mb-4">Let's combine these concepts to build a common dashboard layout. We want a sidebar, a main content area, and a few stats cards at the top.</p>
      <pre><div class="grid grid-cols-1 lg:grid-cols-4 gap-8">
  {/* Sidebar */}
  <div class="lg:col-span-1">...</div>

  {/* Main Content Area */}
  <div class="lg:col-span-3 grid grid-cols-1 md:grid-cols-2 gap-6">
    <div class="md:col-span-1">Stat Card 1</div>
    <div class="md:col-span-1">Stat Card 2</div>
    <div class="md:col-span-2">Main Chart</div>
  </div>
</div></pre>
      <p class="mt-4">This nested grid approach gives you granular control over each section of your UI, allowing for highly complex and responsive designs without ever leaving your HTML. By mastering these utility classes, you can build virtually any layout imaginable.</p>
    `,
    image: "https://picsum.photos/800/600?random=6",
    author: "Abdul Rehman",
    date: "2024-07-10",
    tags: ["Tailwind CSS", "CSS", "Web Development", "Responsive Design"],
  },
];
