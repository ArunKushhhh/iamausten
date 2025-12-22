export type Prize = {
  name: string;
  icon: string;
  bgColor?: string;
  textColor?: string;
};

export type Hackathon = {
  id: string;
  name: string;
  date: string;
  location: string;
  locationIcon: string;
  prize?: Prize[];
  summary?: string;
  projectUrl: string;
  image: string;
};

export const hackathons: Hackathon[] = [
  {
    id: "Build-on-Aptos-2025",
    name: "Build - on Aptos",
    date: "August 2025",
    location: "Pune",
    locationIcon: "Location",
    prize: [
      {
        name: "Runner-Up",
        icon: "Trophy",
        bgColor: "bg-[#FF5100]/30",
        textColor: "text-[#FF5100]",
      },
      {
        name: "$500 Cash Prize",
        icon: "CircleDollarSign",
        bgColor: "bg-[#009d06]/30",
        textColor: "text-[#009d06]",
      },
    ],
    summary:
      "Developed a Move-based App on Aptos with secure transactions and gas-efficient smart contracts in a weekend sprint.",
    projectUrl: "https://github.com/ArunKushhhh/Aptos-PullQuest-Frontend",
    image: "/images/hacks/aptos.jpeg",
  },
  {
    id: "Algorand",
    name: "Algorand - Blockchain",
    date: "June 2025",
    location: "Bangalore",
    locationIcon: "Location",
    prize: [
      {
        name: "Top 5 teams",
        icon: "Award",
        bgColor: "bg-[#CFC814]/30",
        textColor: "text-[#CFC814]",
      },
    ],
    summary:
      "Shipped an AI-powered developer productivity tool that analyzes code, summarizes changes, and assists with PR reviews.",
    projectUrl: "https://github.com/ArunKushhhh/Aptos-PullQuest-Frontend",
    image: "/images/hacks/algorand.jpeg",
  },
  {
    id: "Hackprix",
    name: "HackPrix - AI & DevTools Hack",
    date: "June 2025",
    location: "Hyderabad",
    locationIcon: "Location",
    prize: [
      {
        name: "Participant",
        icon: "Trophy",
        bgColor: "bg-[#8700F5]/30",
        textColor: "text-[#8700F5]",
      },
    ],
    summary:
      "Shipped an AI-powered developer productivity tool that analyzes code, summarizes changes, and assists with PR reviews.",
    projectUrl: "https://github.com/ArunKushhhh/Aptos-PullQuest-Frontend",
    image: "/images/hacks/hackPrix.webp",
  },
];
