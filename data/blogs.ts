export type Blog = {
  id: string;
  title: string;
  summary: string;
  alert?: string;
  date: string;
  tags?: string[];
  cover: string;
  mediumUrl: string;
  bgColor?: string;
  textColor?: string;
};

export const blogs: Blog[] = [
  {
    id: "b1",
    title: "How I Improved LCP in a Next.js App",
    alert:
      "I designed the WhatsApp, SMS, and Email channels that enable businesses to run multi-channel campaigns.",
    summary:
      "A breakdown of the strategies I used to optimize LCP, images, caching and runtime performance.",
    date: "2025-01-12",
    tags: ["Performance", "Next.js", "Web"],
    cover: "/images/blogs/blog1.png",
    mediumUrl: "https://medium.com/@yourusername/post-1-url",
    bgColor:"bg-linear-to-b from-[#8BF7CA] to-[#46BD8C]",
    textColor:"text-[#004227]"
  },
  {
    id: "b2",
    title: "Offline Sync in React Native",
    alert:
      "I designed the WhatsApp, SMS, and Email channels that enable businesses to run multi-channel campaigns.",
    summary:
      "A simple explanation of offline-first architecture, background sync and conflict resolution.",
    date: "2024-12-20",
    tags: ["React Native", "Offline"],
    cover: "/images/blogs/blog1.png",
    mediumUrl: "https://medium.com/@yourusername/post-2-url",
    bgColor:"bg-linear-to-b from-[#2563EB]/40 to-[#2563EB]",
    textColor:"text-[#2563EB]"
  },
];
