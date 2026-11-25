export interface Certification {
  id: string;
  title: string;
  issuer: string;
  /** e.g. "2025" */
  date: string;
  /** Optional verification / credential URL (real URLs only). */
  url?: string;
}

/**
 * Add real certifications here only. Empty list renders an honest placeholder.
 * Example:
 * { id: "x", title: "Certificate name", issuer: "Issuing organization", date: "2025", url: "https://..." }
 */
export interface AwardEntry {
  id: string;
  /** Award or role, e.g. "Academic Awardee" or "Editor-in-Chief". */
  title: string;
  /** Organization / event the award or role belongs to (optional). */
  org?: string;
  /** e.g. "2025-2026" */
  date: string;
}

/** Awards and leadership roles, shown as compact rows. Real entries only. */
export const awards: AwardEntry[] = [
  { id: "a1", title: "Academic Awardee", date: "2024–2026" },
  { id: "a2", title: "Model Student Awardee", date: "2025–2026" },
  { id: "a3", title: "Leadership Awardee", date: "2024–2025" },
  { id: "a4", title: "Service Awardee", org: "SRP, Awana Youth, FCUSR", date: "2024–2025" },
  { id: "a5", title: "Service Award", org: "Mentor's Circle", date: "2025–2026" },
  { id: "a6", title: "Editor-in-Chief", org: "Post Script Publication", date: "2026–2027" },
  { id: "a7", title: "President", org: "Awana Youth Organization", date: "2025–2026" },
  { id: "a8", title: "Finance Officer", org: "FCU Sentinels", date: "2025–2027" },
];

export const certifications: Certification[] = [
  { id: "1", title: "Career Service Eligibility Professional - PPT", issuer: "Civil Service Commission", date: "March 2026", url: "https://exam.csc.gov.ph/detail_examinee?id=482512" },
  { id: "2", title: "Introduction to Data Science", issuer: "Cisco Networking Academy", date: "Aug 2025", url: "https://drive.google.com/file/d/1yZBJy0ZsofjG3li5lSMKSE69NceIqZpR/view?usp=sharing" },
  { id: "3", title: "Networking Basics", issuer: "Cisco Networking Academy", date: "Aug 2025", url: "https://drive.google.com/file/d/145JGG29y93MWvrbD12AA1zw6OXX3XSFi/view?usp=sharing" },
  { id: "4", title: "Digital Mindset", issuer: "IBM SkillsBuild", date: "Dec 2025", url: "https://drive.google.com/file/d/1Dqdg-L9IvXeLGpTX1brZMv-AwpfCjked/view?usp=sharing" },
  { id: "5", title: "Lifelong Professional Skills", issuer: "IBM SkillsBuild", date: "Dec 2025", url: "https://drive.google.com/file/d/1PwoXkN9nxOCAEOTsdfFEqrHJB3UBlem0/view?usp=sharing" },
  { id: "6", title: "Creating Compelling Report", issuer: "Cisco Networking Academy", date: "Oct 2026", url: "https://drive.google.com/file/d/1OyA2AllOKLiVWRXI00psskVZyOMqzX8q/view?usp=sharing" },
  { id: "7", title: "English for IT 1", issuer: "Cisco Networking Academy", date: "Oct 2026", url: "https://drive.google.com/file/d/1dRyy25sLAUAB9awWGIU3nykoj6H2YmaQ/view?usp=sharing" },
  { id: "8", title: "English for IT 2", issuer: "Cisco Networking Academy", date: "Oct 2026", url: "https://drive.google.com/file/d/1wDV8VYIPJnYzjgASqnsvsNqB1n54v_Aa/view?usp=sharing" }
];
