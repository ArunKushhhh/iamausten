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
};

export const experiences: Experience[] = [
  {
    id: "my-ai-mate",
    company: "myAImate",
    role: "Software Developer (Intern)",
    location: "Remote",
    start: "December 2024",
    end: "March 2025",
    type: "Internship",
    logo: "/images/experience/myAImate.svg",
    skills: [
      "React.js",
      "TailwindCSS",
      "Node.js",
      "Express",
      "Redux",
      "Angular",
      "REST APIs",
    ],
    bullets: [
      "Developed an AI-proctured quiz platform with facial recognition and tab-switching monitoring, enabling seamless quiz conduction for 600+ students.",
      "Collaborated with cross-functional teams to integrate REST APIs.",
      "Enhanced the online education portal by integrating video streaming support.",
      "Implemented Redux for state optimization and enhance performance",
    ],
  },
  {
    id: "i&ecell",
    company: "I&E Cell",
    role: "Secretary (Full Time)",
    location: "Pune — On Site",
    start: "July 2025",
    type: "Freelance",
    logo: "/images/experience/ecell.svg",
    skills: ["Next.js", "React.js", "Node.js", "PostgresSQL", "Prisma", "React Native", "Expo", "Figma"],
    bullets: [
      "Designed and developed website for 'Startup Saga 5', a national level hackathon with over 6000+ registrations.",
      "Developer of AIT Entrepreneurship Website.",
      "Collaborated with Startups like FemtoLoop and NGOs like SKRF.",
      "Led a team of 80 in event outreach, technical infrastructure, sponsorship acquisition, and general event management."
    ],
  },
];
