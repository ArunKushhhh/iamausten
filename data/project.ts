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
    id: "ezSnippy",
    title: "ezSnippy",
    summary:
      "A code snippet management tool designed to help developers organize, store, and access their reusable code blocks efficiently.",
    type: "Next.js Web App",
    features: [
      {
        name: "Syntax Highlighting",
        icon: "CodeXml",
        bgColor: "bg-[#8162C0]/30",
        textColor: "text-[#8162C0]",
      },
      {
        name: "Favorites & Trash",
        icon: "Heart",
        bgColor: "bg-[#339D5D]/30",
        textColor: "text-[#339D5D]",
      },
      {
        name: "Search & Filter",
        icon: "Search",
        bgColor: "bg-[#AF3505]/30",
        textColor: "text-[#AF3505]",
      },
      {
        name: "Clerk Authentication",
        icon: "Lock",
        bgColor: "bg-[#2563EB]/30",
        textColor: "text-[#2563EB]",
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
        bgColor: "bg-[#AF3505]/30",
        textColor: "text-[#AF3505]",
      },
      {
        name: "Emoji Picker",
        icon: "Smile",
        bgColor: "bg-[#2563EB]/30",
        textColor: "text-[#2563EB]",
      },
      {
        name: "Servers & DMs",
        icon: "Wifi",
        bgColor: "bg-[#339D5D]/30",
        textColor: "text-[#339D5D]",
      },
      {
        name: "Threads",
        icon: "Spool",
        bgColor: "bg-[#8162C0]/30",
        textColor: "text-[#8162C0]",
      },
      {
        name: "File sharing & Polls",
        icon: "Share2",
        bgColor: "bg-[#FF6166]/30",
        textColor: "text-[#FF6166]",
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
        bgColor: "bg-[#AF3505]/30",
        textColor: "text-[#AF3505]",
      },
      {
        name: "Comments System",
        icon: "MessageCircle",
        bgColor: "bg-[#2563EB]/30",
        textColor: "text-[#2563EB]",
      },
      {
        name: "Real-Time Presence",
        icon: "TimerReset",
        bgColor: "bg-[#339D5D]/30",
        textColor: "text-[#339D5D]",
      },
      {
        name: "Image Uploads",
        icon: "Images",
        bgColor: "bg-[#8162C0]/30",
        textColor: "text-[#8162C0]",
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
    type: "Web App",
    features: [
      {
        name: "User Profile Management",
        icon: "Zap",
        bgColor: "bg-[#2563EB]/30",
        textColor: "text-[#2563EB]",
      },
      {
        name: "Authentication",
        icon: "Cloud",
        bgColor: "bg-[#009d06]/30",
        textColor: "text-[#009d06]",
      },
      {
        name: "Email, 2FA Verification",
        icon: "Video",
        bgColor: "bg-[#FF5100]/30",
        textColor: "text-[#FF5100]",
      },
    ],
    repoUrl: "https://github.com/ArunKushhhh/TaskPro-Frontend",
    image: "/images/work/taskpro.png",
  },
  {
    id: "TaskPro",
    title: "TaskPro - Project Management Dashboard",
    summary:
      "Inspired by Iron Man's iconic assistants JARVIS and FRIDAY, JARVIS is a voice-enabled AI agent built with Python and powered by LiveKit, an open-source platform for real-time voice, video, and multimodal AI experiences.",
    type: "Web App",
    features: [
      {
        name: "Gemini API",
        icon: "Zap",
        bgColor: "bg-[#2563EB]/30",
        textColor: "text-[#2563EB]",
      },
      {
        name: "DuckDuckGo Search",
        icon: "Cloud",
        bgColor: "bg-[#009d06]/30",
        textColor: "text-[#009d06]",
      },
      {
        name: "Audio & Video Interactions",
        icon: "Video",
        bgColor: "bg-[#FF5100]/30",
        textColor: "text-[#FF5100]",
      },
      {
        name: "WebRTC Real time infra",
        icon: "Video",
        bgColor: "bg-[#FF5100]/30",
        textColor: "text-[#FF5100]",
      },
    ],
    repoUrl: "https://github.com/ArunKushhhh/JARVIS",
    image: "/images/work/jarvis.png",
  },
  {
    id: "pullQuest",
    title: "PullQuest - Project Management Dashboard",
    summary:
      "An open-source contribution platform that provides a ranking-based profile system for contributors and helps maintainers efficiently evaluate code quality and engagement through a transparent, measurable, and rewarding system.",
    type: "Web App",
    features: [
      {
        name: "CRON jobs",
        icon: "Zap",
        bgColor: "bg-[#2563EB]/30",
        textColor: "text-[#2563EB]",
      },
      {
        name: "DuckDuckGo Search",
        icon: "Cloud",
        bgColor: "bg-[#009d06]/30",
        textColor: "text-[#009d06]",
      },
      {
        name: "Audio & Video Interactions",
        icon: "Video",
        bgColor: "bg-[#FF5100]/30",
        textColor: "text-[#FF5100]",
      },
      {
        name: "WebRTC Real time infra",
        icon: "Video",
        bgColor: "bg-[#FF5100]/30",
        textColor: "text-[#FF5100]",
      },
    ],
    liveUrl: "https://aptos-pull-quest-frontend.vercel.app/",
    repoUrl: "https://github.com/ArunKushhhh/Aptos-PullQuest-Frontend",
    image: "/images/work/pullQuest.png",
  },
];
