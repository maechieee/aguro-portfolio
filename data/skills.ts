export type SkillTier = "applied" | "working" | "familiar";

export const tierInfo: Record<SkillTier, { label: string; hint: string }> = {
  applied: { label: "Applied in Projects", hint: "Used in academic or personal projects" },
  working: { label: "Working Knowledge", hint: "Can use for common development tasks" },
  familiar: { label: "Familiar With", hint: "Explored; foundational understanding" },
};

export interface Skill {
  name: string;
  tier: SkillTier;
}

export interface SkillCategory {
  id: string;
  title: string;
  blurb: string;
  skills: Skill[];
}

// Tiers are deliberately conservative. Adjust here if your résumé/projects say otherwise.
export const skillCategories: SkillCategory[] = [
  {
    id: "languages",
    title: "Programming Languages",
    blurb: "Writing interfaces and application logic",
    skills: [
      { name: "Python", tier: "applied" },
      { name: "JavaScript", tier: "applied" },
      { name: "HTML", tier: "applied" },
      { name: "CSS", tier: "applied" },
    ],
  },
  {
    id: "frameworks",
    title: "Frameworks & Web Development",
    blurb: "Structuring maintainable web projects",
    skills: [
      { name: "Django", tier: "applied" },
      { name: "Responsive Web Design", tier: "working" },
      { name: "Frontend Development", tier: "working" },
      { name: "Backend Development", tier: "working" },
    ],
  },
  {
    id: "databases",
    title: "Database Technologies",
    blurb: "Organizing, querying, and maintaining data",
    skills: [
      { name: "MySQL", tier: "applied" },
      { name: "PostgreSQL", tier: "applied" },
      { name: "Database Design", tier: "working" },
    ],
  },
  {
    id: "tools",
    title: "Development Tools",
    blurb: "Development, collaboration, and automation",
    skills: [
      { name: "Git", tier: "working" },
      { name: "GitHub", tier: "working" },
      { name: "Visual Studio Code", tier: "working" },
      { name: "Google Workspace", tier: "working" },
      { name: "Notion", tier: "familiar" },
      { name: "n8n", tier: "familiar" },
    ],
  },
];

export const otherSkills = [
  "System Testing",
  "Debugging & Troubleshooting",
  "Technical Documentation",
  "Project Leadership",
  "Team Collaboration",
  "Problem-Solving",
];

export const heroSkills = ["Python", "Django", "JavaScript", "HTML", "CSS", "MySQL", "PostgreSQL"];
