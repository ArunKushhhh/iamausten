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
    id: "SecureAuthenticationUsingJWTandRefreshTokens",
    title: "Building a Secure Authentication System with JWT and Refresh Tokens",
    alert:
      "Building a Secure Authentication System with JWT and Refresh Tokens",
    summary:
     "Every app that handles user accounts needs to confirm who's who. That's what authentication is for, making sure the person using an app is the person they claim to be. But doing this securely is hard enough than it sounds!",
    date: "11/12/2025",
    tags: ["Secure Authentication", "JWT Auth", "Refresh Tokens"],
    cover: "/images/blogs/secure-auth-blog.png",
    mediumUrl: "https://medium.com/@arunsarojkushwaha10/why-max-verstappen-didnt-become-the-champion-this-year-b03b9763ed37",
    bgColor:"bg-linear-to-b from-[#8BF7CA] to-[#46BD8C]",
    textColor:"text-[#004227]"
  },
  {
    id: "f1BlogMaxVerstappen",
    title: "Why Max Verstappen didn't become the Champion this year",
    alert:
      "A Case Study on why Max Verstappen didn't win the World Championship.",
    summary:
      "For years, Max Verstappen has been the unstoppable force of F1 — a driver whose dominance seemed almost unmatchable. But, he simply can't become the champion this year. Here's why:",
    date: "10/12/2025",
    tags: ["Formula1", "Max Verstappen", "Abu Dhabi Grand Prix"],
    cover: "/images/blogs/1_B2y31U5J7x4A9aFCV9SQyw.webp",
    mediumUrl: "https://medium.com/@arunsarojkushwaha10/why-max-verstappen-didnt-become-the-champion-this-year-b03b9763ed37",
    bgColor:"bg-linear-to-b from-[#2563EB]/40 to-[#2563EB]",
    textColor:"text-[#002673]"
  },
  {
    id: "MaxVerstappen — Jeddah2021",
    title: "The Almost Perfect Lap",
    alert:
      "Max Verstappen — Jeddah 2021.",
    summary:
      "The very first Saudi Arabian Grand Prix qualifying gave us one of the most breathtaking moments in the history of F1. Max Verstappen was on the lap of his life. Here's what happened:",
    date: "09/12/2025",
    tags: ["Formula1", "Max Verstappen", "Red Bull Racing"],
    cover: "/images/blogs/1_asiL231RlKcfwbPbaPYfzg.webp",
    mediumUrl: "https://medium.com/@arunsarojkushwaha10/the-almost-perfect-lap-a4fee5a20e6d",
    bgColor:"bg-linear-to-b from-[#E4C9FF] to-[#BB7DF9]",
    textColor:"text-[#30005E]"
  },
];
