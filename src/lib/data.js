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
    slug: "nextjs-deployment-guide",
    title: "A Complete Guide to Deploying Your Next.js Application",
    description:
      "Learn how to confidently deploy your Next.js app using both manual and Vercel methods.",
    date: "2025-09-01",
    author: "Abdul Rehman",
    image:
      "https://i.ytimg.com/vi/YVqdpSsCnK4/hq720.jpg?sqp=-oaymwEhCK4FEIIDSFryq4qpAxMIARUAAAAAGAElAADIQj0AgKJD&rs=AOn4CLB1rhGevE7Cmi1k3QbVhKm01TUbag",
    content: `
<p>Deploying a modern web application can feel overwhelming if you're new to hosting and build pipelines. Fortunately, <strong>Next.js</strong> combined with <strong>Vercel</strong> makes the process seamless, offering zero-configuration deployments with powerful features.</p>

<hr class="my-8" />

<h2 class="text-2xl font-bold mb-4">📦 Step 1: Install Project Dependencies</h2>
<pre>
npm install
# or
yarn install
</pre>
<br>
<h2 class="text-2xl font-bold mb-4">🔑 Step 2: Configure Environment Variables</h2>
<pre>
NODE_ENV=production
NEXT_PUBLIC_API_URL=https://api.example.com
SECRET_KEY=supersecurekey
</pre>
<p class="italic mb-8">💡 Never commit secrets to Git. Add <code>.env*</code> to your <code>.gitignore</code>.</p>

<h2 class="text-2xl font-bold mb-4">🚧 Step 3: Build for Production</h2>
<pre>
npm run build
</pre>
<br>

<h2 class="text-2xl font-bold mb-4">✅ Step 4: Run Manually (Optional)</h2>
<pre>
npm start
</pre>
<br>

<pre>
pm2 start npm --name "my-app" -- run start
</pre>
<blockquote class="border-l-4 border-orange-500 pl-4 italic mb-8">
<div style="margin-top: 6px;"></div>
💡 Use <code>pm2 save</code> and <code>pm2 startup</code> for automatic restarts on reboot.
</blockquote>

<hr class="my-8" />

<h2 class="text-2xl font-bold mb-4">🌐 Deploying with Vercel (Recommended)</h2>
<p class="mb-8"><strong>Vercel</strong> is the official deployment platform for Next.js. It supports SSR, SSG, ISR, and API routes—without extra configuration.</p>

<h3 class="text-xl font-semibold mb-2">🔗 1. Push Your Code to Git</h3>
<pre>
git init
git add .
git commit -m "Initial commit"
git remote add origin https://github.com/yourname/your-repo
git push -u origin main
</pre>
<br>

<h3 class="text-xl font-semibold mb-2">⚙️ 2. Import Your Repo to Vercel</h3>
<p class="mb-4">Go to <a href="https://vercel.com/import" target="_blank" class="text-orange-500 underline">vercel.com/import</a>, connect your repo, and let Vercel auto-detect settings:</p>
<ul class="list-disc list-inside mb-8">
  <li><strong>Framework:</strong> Next.js</li>
  <li><strong>Build Command:</strong> <code>next build</code></li>
  <li><strong>Output Directory:</strong> <code>.next</code></li>
</ul>

<h3 class="text-xl font-semibold mb-2">🔑 3. Set Environment Variables</h3>
<pre>
NEXT_PUBLIC_API_URL=https://api.example.com
SECRET_KEY=supersecurekey
</pre>
<br>

<h3 class="text-xl font-semibold mb-2">🚀 4. Deploy</h3>
<pre>
https://your-nextjs-app.vercel.app
</pre>
    <br>

<h3 class="text-xl font-semibold mb-2">✨ 5. Deploy via CLI (Optional)</h3>
<pre>
npx vercel
</pre>

<hr class="my-8" />

<h2 class="text-2xl font-bold mb-4">⚡ Bonus Tips</h2>
<ul class="list-disc list-inside mb-8">
  <li>Use <code>vercel --prod</code> for instant production deployment.</li>
  <li>Preview deployments are auto-generated for every branch and pull request.</li>
  <li>Add a <strong>custom domain</strong> directly from the dashboard.</li>
  <li>Automatic HTTPS and global CDN caching are included.</li>
</ul>

<blockquote class="border-l-4 border-green-500 pl-4 font-semibold">
✅ <strong>Conclusion:</strong> Next.js simplifies the transition from development to production, but Vercel takes it to the next level—providing speed, scalability, and ease of use.
</blockquote>
    `,
  },

  {
    slug: "getting-started-with-framer-motion",
    title: "Getting Started with Framer Motion",
    description:
      "A beginner-friendly guide to adding stunning animations to your React applications with Framer Motion.",
    image:
      "https://cdn1.leapcell.io/3374238960f2226ac2-34c6-4ee2-9dc5-1c746ed6629c.png",
    author: "Abdul Rehman",
    date: "2024-07-15",
    tags: ["React", "Animation", "Framer Motion", "UI/UX"],
    content: `
<p>
Animations can make your React applications feel lively and engaging. <strong>Framer Motion</strong> is a beginner-friendly library that lets you create smooth, complex animations with very little code. This guide will walk you through the basics step by step so you can start animating your components with confidence.
</p>

<hr class="my-8" />

<h2 class="text-2xl font-bold mb-4">⚙️ Step 1: Installation</h2>
<p class="mb-4">First, install Framer Motion in your project using npm or yarn:</p>
<pre>
  npm install framer-motion
</pre>
<p class="text-center mb-4 mt-4">OR</p>
<pre>
yarn add framer-motion
</pre>
<p class="mb-4">Once installed, you're ready to import it into your components.</p>

<hr class="my-8" />

<h2 class="text-2xl font-bold mb-4">🎬 Step 2: Creating Your First Animation</h2>
<p class="mb-4">
Let's create a simple animated box that moves, scales, and rotates. We'll use <code>motion.div</code>, which works like a regular div but supports animations.
</p>
<pre>
import { motion } from "framer-motion";

export const MyComponent = () => (
  <motion.div
    animate={{
      x: 100,
      scale: 1.2,
      rotate: 90
    }}
    transition={{ duration: 0.5 }}
    className="w-24 h-24 bg-primary rounded-lg"
  />
);
</pre>
<p class="mb-4">Try changing the values of <code>x</code>, <code>scale</code>, and <code>rotate</code> to see different effects!</p>

<hr class="my-8" />

<h2 class="text-2xl font-bold mb-4">🎭 Step 3: Using Variants</h2>
<p class="mb-4">
Variants let you define multiple animation states in one place, keeping your code clean.
</p>
<pre>
const listVariants = {
  visible: { 
    opacity: 1,
    transition: { when: "beforeChildren", staggerChildren: 0.3 },
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
    <motion.li variants={itemVariants}>Item 3</motion.li>
  </motion.ul>
);
</pre>
<p class="mb-4">Variants are perfect for animating lists, menus, or any grouped elements.</p>

<hr class="my-8" />

<h2 class="text-2xl font-bold mb-4">🖱️ Step 4: Gestures and Dragging</h2>
<p class="mb-4">
Framer Motion supports hover, tap, and drag gestures. Here's an example:
</p>
<pre>
<motion.div
  whileHover={{ scale: 1.1 }}
  whileTap={{ scale: 0.9 }}
  drag="x"
  dragConstraints={{ left: -100, right: 100 }}
  className="w-24 h-24 bg-secondary rounded-lg"
/>
</pre>
<p class="mb-4">
You can also drag vertically using <code>drag="y"</code>, or both directions with <code>drag</code>. <code>dragConstraints</code> limits movement to a set range.
</p>

<hr class="my-8" />

<h2 class="text-2xl font-bold mb-4">✨ Step 5: Combining Animations</h2>
<p class="mb-4">
You can combine motion, gestures, and variants for interactive components:
</p>
<pre>
<motion.div
  variants={itemVariants}
  initial="hidden"
  animate="visible"
  whileHover={{ scale: 1.1 }}
  whileTap={{ scale: 0.9 }}
  className="w-24 h-24 bg-primary rounded-lg"
/>
</pre>

<hr class="my-8" />

<h2 class="text-2xl font-bold mb-4">💡 Tips for Beginners</h2>
<ul class="list-disc ml-6 mb-4">
  <li>Start with simple animations like fade, slide, and scale.</li>
  <li>Use variants to manage multiple elements efficiently.</li>
  <li>Experiment with <code>transition</code> properties: <code>duration</code>, <code>delay</code>, <code>ease</code>.</li>
  <li>Combine gestures and motion for interactive UIs.</li>
  <li>Check the <a href="https://www.framer.com/docs/" class="text-[#FF6A00] underline">Framer Motion docs</a> for more advanced features.</li>
</ul>


<blockquote class="border-l-4 border-green-500 pl-4 font-semibold">
✅ <strong>Conclusion:</strong> Now you’re ready to add motion to your React apps! Start experimenting, and soon your interfaces will feel smooth, interactive, and engaging.
</blockquote>
`,
  },

  {
    slug: "mastering-tailwind-css-grid",
    title: "Mastering Tailwind CSS Grid for Complex Layouts",
    description:
      "Dive deep into Tailwind's grid system to build responsive and intricate layouts with ease and precision.",
    image: "https://img-c.udemycdn.com/course/480x270/2257056_575c_6.jpg",
    author: "Abdul Rehman",
    date: "2024-07-10",
    tags: ["Tailwind CSS", "CSS", "Web Development", "Responsive Design"],
    content: `
<p class="text-lg mb-8">
Tailwind CSS has changed the way we approach styling. Its <strong>grid system</strong> is one of the most powerful tools for building complex layouts without writing custom CSS. In this guide, we'll explore how to create responsive, maintainable, and easy-to-read grid layouts—from the basics to more advanced examples.
</p>

<hr class="my-8" />

<h2 class="text-2xl font-bold mb-4">📐 Understanding the Basics</h2>
<p class=" mb-4">
Before diving into complex layouts, it's important to understand the fundamentals. Tailwind uses utility classes like <code>grid</code> and <code>grid-cols-{n}</code> to define a grid container and the number of columns.
</p>
<pre>
<div class="grid grid-cols-3 gap-4">
  <div>01</div>
  <div>02</div>
  <div>03</div>
</div>
</pre>
<p class="mb-4">
Here, <code>grid-cols-3</code> creates three equal-width columns, and <code>gap-4</code> adds spacing between them. Simple grids like this are the foundation for more advanced layouts.
</p>

<hr class="my-8" />

<h2 class="text-2xl font-bold mb-4">📏 Making Grids Responsive</h2>
<p class="mb-4">
Tailwind allows you to create responsive grids effortlessly using breakpoint prefixes like <code>sm:</code>, <code>md:</code>, and <code>lg:</code>. This means your layout adapts to different screen sizes.
</p>
<pre>
<div class="grid grid-cols-1 sm:grid-cols-2 md:grid-cols-3 lg:grid-cols-4 gap-4">
  <div>Item 1</div>
  <div>Item 2</div>
  <div>Item 3</div>
  <div>Item 4</div>
</div>
</pre>
<p class="mb-4">
- <code>grid-cols-1</code> → Single column on small screens  
- <code>sm:grid-cols-2</code> → Two columns on small devices  
- <code>md:grid-cols-3</code> → Three columns on medium devices  
- <code>lg:grid-cols-4</code> → Four columns on large devices
</p>

<hr class="my-8" />

<h2 class="text-2xl font-bold mb-4">↔️ Spanning and Positioning Items</h2>
<p class=" mb-4">
Sometimes you need certain items to span multiple columns or start at a specific position. Tailwind makes this easy with <code>col-span-{n}</code> and <code>col-start-{n}</code>.
</p>
<pre>
<div class="grid grid-cols-3 gap-4">
  <div class="col-span-2">Main Content</div>
  <div>Sidebar</div>
</div>
</pre>
<pre>
<div class="grid grid-cols-6 gap-4">
  <div class="col-start-2 col-span-4">Centered Content</div>
</div>
</pre>
<p class="mb-4">
- <code>col-span-2</code> → Item spans two columns  
- <code>col-start-2</code> → Item starts at column 2  
These classes give you fine-grained control over layout without writing custom CSS.
</p>

<hr class="my-8" />

<h2 class="text-2xl font-bold mb-4">📊 Real-World Dashboard Example</h2>
<p class="mb-4">
Let's build a simple responsive dashboard layout using the grid system. We'll create a sidebar, a stats section, and a main chart area.
</p>
<pre>
<div class="grid grid-cols-1 lg:grid-cols-4 gap-8">
  {/* Sidebar */}
  <div class="lg:col-span-1">Sidebar</div>

  {/* Main Content */}
  <div class="lg:col-span-3 grid grid-cols-1 md:grid-cols-2 gap-6">
    <div class="md:col-span-1">Stat Card 1</div>
    <div class="md:col-span-1">Stat Card 2</div>
    <div class="md:col-span-2">Main Chart</div>
  </div>
</div>
</pre>
<p class="mb-4">
- Sidebar spans 1 column on large screens  
- Stats cards are arranged in 2 columns on medium screens  
- Main chart spans 2 columns to create a balanced layout  
This shows how flexible Tailwind grids are for real-world applications.
</p>

<hr class="my-8" />

<h2 class="text-2xl font-bold mb-4">💡 Tips for Beginners</h2>
<ul class="list-disc ml-6 mb-4">
  <li>Start simple: Begin with 2-3 column layouts before attempting complex grids.</li>
  <li>Use <code>gap-{n}</code> to maintain consistent spacing between items.</li>
  <li>Combine responsive prefixes for layouts that work on all screen sizes.</li>
  <li>Use <code>col-span</code> and <code>col-start</code> to control layout without custom CSS.</li>
  <li>Experiment in small projects to get comfortable with grids before using them in production.</li>
</ul>

<blockquote class="border-l-4 border-green-500 pl-4 font-semibold">
✅ <strong>Conclusion:</strong> <p> Mastering Tailwind's grid system lets you create beautiful, responsive layouts quickly and efficiently. Practice, experiment, and soon you'll be building complex designs with confidence!</p>
</blockquote>

`,
  },
];
