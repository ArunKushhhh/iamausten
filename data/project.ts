export type Project = {
  id: string;
  title: string;
  summary: string;
  tech: string[];
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
    tech: ["Next.Js", "Typescript", "ShadCn", "ConvexDB", "Clerk"],
    liveUrl: "https://msgo.example.com",
    repoUrl: "https://github.com/ArunKushhhh/msgo",
    image: "/images/work/msgo/cover.avif",
  },
  {
    id: "2",
    title: "msgO - Realtime Chat Application",
    summary:
      "A feature-rich realtime chat application enabling seamless communication through direct messaging, group chats, media sharing, and video calls.",
    tech: ["Next.Js", "Typescript", "ShadCn", "ConvexDB", "Clerk"],
    liveUrl: "",
    repoUrl: "",
    image: "/images/work/msgo/cover.avif",
  },
];
