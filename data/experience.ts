export interface Experience {
  id: string;
  role: string;
  company: string;
  location: string;
  period: string;
  description: string[];
}

export const education = {
  degree: "Bachelor of Science in Information Technology",
  status: "Student",
  interests: ["Web development", "Database management", "System development", "Problem-solving"],
};

export const experiences: Experience[] = [
  {
    id: "pdrrmo-immersion",
    role: "Work Immersion Trainee",
    company: "Provincial Disaster Risk Reduction and Management Office (PDRRMO)",
    location: "Lanot, Roxas City, Capiz, Philippines",
    period: "2023–2024",
    description: [
      "Assisted with administrative and office-related tasks.",
      "Developed workplace communication skills.",
      "Gained experience working in a professional environment.",
    ],
  },
];
