export type ExperienceType = "Internship" | "Freelance" | "Full-time";

export type Experience = {
  id: string;
  company: string;
  role: string;
  location?: string;
  start: string; // "2024-05"
  end?: string; // "2024-09" or "Present"
  type: ExperienceType;
  bullets: string[];
  logo?: string; // path under /public or external url
  skills?: string[]; // short list of tech/impact
  highlight?: string; // one-line impact summary
};

export const experiences: Experience[] = [
  {
    id: "e-apnamart",
    company: "Apna Mart",
    role: "Frontend Engineer (Intern)",
    location: "Remote",
    start: "2024-06",
    end: "2024-09",
    type: "Internship",
    logo: "/images/logos/apna-mart.png",
    highlight: "Improved homepage LCP by 1.2s and reduced JS bundle by 18%.",
    skills: ["Next.js", "TypeScript", "Tailwind", "Perf"],
    bullets: [
      "Built a progressive product listing with image optimization and skeleton loading states.",
      "Refactored client-side caching, reducing redundant API calls by 35%.",
      "Wrote comprehensive unit tests for core UI components and improved CI flow.",
    ],
  },
  {
    id: "e-rn-client",
    company: "Freelance — FoodApp",
    role: "React Native Engineer (Contract)",
    location: "Remote",
    start: "2023-11",
    end: "2024-02",
    type: "Freelance",
    logo: "/images/logos/foodapp.png",
    highlight: "Delivered offline order sync and background sync features.",
    skills: ["React Native", "Expo", "SQLite"],
    bullets: [
      "Implemented offline-first sync using local DB and conflict resolution.",
      "Reduced app startup time by 30% through bundle splitting and image optimizations.",
    ],
  },
];
