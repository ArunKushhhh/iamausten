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
  features: Feature[];
  liveUrl?: string;
  repoUrl?: string;
  image: string;
};

export const projects: Project[] = [
  {
    id: "1",
    title: "msgO - Realtime Chat Application",
    summary:
      "A feature-rich realtime chat application enabling seamless communication through direct messaging, group chats, media sharing, and video calls.",
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
        name: "Clerk Authentication",
        icon: "Lock",
        bgColor: "bg-yellow-600/30",
        textColor: "text-yellow-600",
      },
    ],
    liveUrl: "https://msgo.example.com",
    repoUrl: "https://github.com/ArunKushhhh/msgo",
    image: "/images/work/msgo/cover.avif",
  },
  {
    id: "1",
    title: "msgO - Realtime Chat Application",
    summary:
      "A feature-rich realtime chat application enabling seamless communication through direct messaging, group chats, media sharing, and video calls.",
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
    liveUrl: "https://msgo.example.com",
    repoUrl: "https://github.com/ArunKushhhh/msgo",
    image: "/images/work/msgo/cover.avif",
  },
];
