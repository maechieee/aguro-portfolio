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
export const certifications: Certification[] = [
  { id: "1", title: "Career Service Eligibility Professional - PPT", issuer: "Civil Service Commission", date: "March 2026", url: "https://exam.csc.gov.ph/detail_examinee?id=482512" },
  { id: "2", title: "Introduction to Data Science", issuer: "Cisco Networking Academy", date: "Aug 2025", url: "https://drive.google.com/file/d/1yZBJy0ZsofjG3li5lSMKSE69NceIqZpR/view?usp=sharing" },
  { id: "3", title: "Networking Basics", issuer: "Cisco Networking Academy", date: "Aug 2025", url: "https://drive.google.com/file/d/145JGG29y93MWvrbD12AA1zw6OXX3XSFi/view?usp=sharing" }
];
