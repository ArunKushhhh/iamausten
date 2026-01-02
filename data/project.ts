export type Feature = {
  name: string;
  icon: string;
  bgColor?: string;
  textColor?: string;
};

export type Project = {
  id: string;
  title: string;
  summary: string;
  type: string;
  features: Feature[];
  liveUrl?: string;
  repoUrl?: string;
  image: string;
};

export const projects: Project[] = [
  {
    id: "floww",
    title: "Floww",
    summary:
      "An AI-powered visual workflow builder that enables users to create, schedule, and execute web scraping workflows with detailed phase-level observability and credit-based execution.",
    type: "Next.js Web App",
    features: [
      {
        name: "Visual Workflow Builder",
        icon: "Workflow",
        bgColor: "bg-[#2563EB]/30",
        textColor: "text-[#2563EB]",
      },
      {
        name: "Execution Monitoring & Logs",
        icon: "Activity",
        bgColor: "bg-[#16A34A]/30",
        textColor: "text-[#16A34A]",
      },
      {
        name: "Scheduling & Automation",
        icon: "Clock",
        bgColor: "bg-[#7C3AED]/30",
        textColor: "text-[#7C3AED]",
      },
      {
        name: "Credits & Billing System",
        icon: "CreditCard",
        bgColor: "bg-[#F97316]/30",
        textColor: "text-[#F97316]",
      },
    ],
    repoUrl: "https://github.com/ArunKushhhh/Floww",
    image: "/images/work/floww.png",
  },
  {
    id: "ezSnippy",
    title: "ezSnippy",
    summary:
      "A code snippet management tool designed to help developers organize, store, and access their reusable code blocks efficiently.",
    type: "Next.js Web App",
    features: [
      {
        name: "Syntax Highlighting",
        icon: "CodeXml",
        bgColor: "bg-[#4F46E5]/30",
        textColor: "text-[#4F46E5]",
      },
      {
        name: "Favorites & Trash",
        icon: "Heart",
        bgColor: "bg-[#EC4899]/30",
        textColor: "text-[#EC4899]",
      },
      {
        name: "Search & Filter",
        icon: "Search",
        bgColor: "bg-[#2563EB]/30",
        textColor: "text-[#2563EB]",
      },
      {
        name: "Clerk Authentication",
        icon: "Lock",
        bgColor: "bg-[#16A34A]/30",
        textColor: "text-[#16A34A]",
      },
    ],
    liveUrl: "https://ez-snippet-lake.vercel.app/",
    repoUrl: "https://github.com/ArunKushhhh/ezSnippy",
    image: "/images/work/snippet-editor-lightmode.png",
  },
  {
    id: "prysm",
    title: "PRYSM",
    summary:
      "A modern, real-time team communication platform built with React and Stream Chat.",
    type: "MERN Web App",
    features: [
      {
        name: "Video Calls",
        icon: "Video",
        bgColor: "bg-[#EF4444]/30",
        textColor: "text-[#EF4444]",
      },
      {
        name: "Emoji Picker",
        icon: "Smile",
        bgColor: "bg-[#EAB308]/30",
        textColor: "text-[#EAB308]",
      },
      {
        name: "Servers & DMs",
        icon: "Wifi",
        bgColor: "bg-[#0D9488]/30",
        textColor: "text-[#0D9488]",
      },
      {
        name: "Threads",
        icon: "Spool",
        bgColor: "bg-[#7C3AED]/30",
        textColor: "text-[#7C3AED]",
      },
      {
        name: "File Sharing & Polls",
        icon: "Share2",
        bgColor: "bg-[#F97316]/30",
        textColor: "text-[#F97316]",
      },
    ],
    liveUrl: "https://prysm-jet.vercel.app/",
    repoUrl: "https://github.com/ArunKushhhh/prysm",
    image: "/images/work/chat.png",
  },
  {
    id: "writespace",
    title: "WriteSpace",
    summary:
      "A full-stack blogging platform designed to help you capture your ideas, stories, insights, and experiences",
    type: "Next.js Web App",
    features: [
      {
        name: "Full-Text Search",
        icon: "Search",
        bgColor: "bg-[#2563EB]/30",
        textColor: "text-[#2563EB]",
      },
      {
        name: "Comments System",
        icon: "MessageCircle",
        bgColor: "bg-[#16A34A]/30",
        textColor: "text-[#16A34A]",
      },
      {
        name: "Real-Time Presence",
        icon: "TimerReset",
        bgColor: "bg-[#0D9488]/30",
        textColor: "text-[#0D9488]",
      },
      {
        name: "Image Uploads",
        icon: "Images",
        bgColor: "bg-[#7C3AED]/30",
        textColor: "text-[#7C3AED]",
      },
    ],
    liveUrl: "https://writespace-ivory.vercel.app/",
    repoUrl: "https://github.com/ArunKushhhh/writespace",
    image: "/images/work/writespace.png",
  },
  {
    id: "TaskPro",
    title: "TaskPro",
    summary:
      "The project management dashboard that enables users to manage workspaces, projects, and tasks with full support for collaboration—including comments, mentions, reactions, and detailed activity logs. Users can organize archived projects and tasks, attach files or external links.",
    type: "Full Stack Web App",
    features: [
      {
        name: "User Profile Management",
        icon: "Zap",
        bgColor: "bg-[#4F46E5]/30",
        textColor: "text-[#4F46E5]",
      },
      {
        name: "Authentication",
        icon: "Cloud",
        bgColor: "bg-[#16A34A]/30",
        textColor: "text-[#16A34A]",
      },
      {
        name: "Email & 2FA Verification",
        icon: "Mails",
        bgColor: "bg-[#F97316]/30",
        textColor: "text-[#F97316]",
      },
    ],
    repoUrl: "https://github.com/ArunKushhhh/TaskPro-Frontend",
    image: "/images/work/taskpro.png",
  },
  {
    id: "pullQuest",
    title: "Pull Quest",
    summary:
      "A full-stack virtual open-source contribution platform that incentivizes high-quality pull requests through a coin-based reputation system, enabling contributor accountability and recruiter-driven discovery via transparent rankings and experience tags.",
    type: "Full-Stack Web App",
    features: [
      {
        name: "Coin-Based Incentives",
        icon: "Coins",
        bgColor: "bg-[#F59E0B]/30",
        textColor: "text-[#F59E0B]",
      },
      {
        name: "Contributor Rankings",
        icon: "TrendingUp",
        bgColor: "bg-[#2563EB]/30",
        textColor: "text-[#2563EB]",
      },
      {
        name: "Recruiter Visibility",
        icon: "UserSearch",
        bgColor: "bg-[#16A34A]/30",
        textColor: "text-[#16A34A]",
      },
      {
        name: "GitHub PR Quality Evaluation",
        icon: "GitPullRequest",
        bgColor: "bg-[#7C3AED]/30",
        textColor: "text-[#7C3AED]",
      },
    ],
    liveUrl: "https://aptos-pull-quest-frontend.vercel.app/",
    repoUrl: "https://github.com/ArunKushhhh/Aptos-PullQuest-Frontend",
    image: "/images/work/pullQuest.png",
  },
];
