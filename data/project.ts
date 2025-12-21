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
    id: "ezSnippet",
    title: "ezSnippet - A Snippet Manager",
    summary:
      "A feature-rich realtime chat application enabling seamless communication through direct messaging, group chats, media sharing, and video calls.",
    type: "Next.js Web App",
    features: [
      {
        name: "Realtime Sync",
        icon: "Zap",
        bgColor: "bg-[#2563EB]/30",
        textColor: "text-[#2563EB]",
      },
      {
        name: "Media Sharing",
        icon: "Cloud",
        bgColor: "bg-[#009d06]/30",
        textColor: "text-[#009d06]",
      },
      {
        name: "Video Calls",
        icon: "Video",
        bgColor: "bg-[#FF5100]/30",
        textColor: "text-[#FF5100]",
      },
      {
        name: "Clerk Authentication",
        icon: "Lock",
        bgColor: "bg-[#8700F5]/30",
        textColor: "text-[#8700F5]",
      },
      {
        name: "Direct Messaging",
        icon: "Message",
        bgColor: "bg-[#CFC814]/30",
        textColor: "text-[#CFC814]",
      },
    ],
    liveUrl: "https://writespace-ivory.vercel.app/",
    repoUrl: "https://github.com/ArunKushhhh/writespace",
    image: "/images/work/writespace.png",
  },
  {
    id: "writespace",
    title: "WriteSpace - A Blog Page",
    summary:
      "A feature-rich realtime chat application enabling seamless communication through direct messaging, group chats, media sharing, and video calls.",
    type: "Next.js Web App",
    features: [
      {
        name: "Realtime Sync",
        icon: "Zap",
        bgColor: "bg-[#2563EB]/30",
        textColor: "text-[#2563EB]",
      },
      {
        name: "Media Sharing",
        icon: "Cloud",
        bgColor: "bg-[#009d06]/30",
        textColor: "text-[#009d06]",
      },
      {
        name: "Video Calls",
        icon: "Video",
        bgColor: "bg-[#FF5100]/30",
        textColor: "text-[#FF5100]",
      },
      {
        name: "Clerk Authentication",
        icon: "Lock",
        bgColor: "bg-[#8700F5]/30",
        textColor: "text-[#8700F5]",
      },
      {
        name: "Direct Messaging",
        icon: "Message",
        bgColor: "bg-[#CFC814]/30",
        textColor: "text-[#CFC814]",
      },
    ],
    liveUrl: "https://writespace-ivory.vercel.app/",
    repoUrl: "https://github.com/ArunKushhhh/writespace",
    image: "/images/work/writespace.png",
  },
  {
    id: "TaskPro",
    title: "TaskPro - Project Management Dashboard",
    summary:
      "The project management dashboard that enables users to manage workspaces, projects, and tasks with full support for collaboration—including comments, mentions, reactions, and detailed activity logs.  Users can organize archived projects and tasks, attach files or external links.",
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
