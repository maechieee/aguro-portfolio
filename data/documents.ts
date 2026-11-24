export interface DocumentItem {
  id: string;
  title: string;
  description: string;
  /** Path under /public. Drop the PDF here; the site detects it at build time. */
  file: string;
  /** Filename used for the download. */
  downloadName: string;
  openLabel: string;
}

export const documents: DocumentItem[] = [
  {
    id: "resume",
    title: "Professional Resume",
    description: "My education, skills, and work-immersion experience in one page.",
    file: "/documents/jeremae-aguro-resume.pdf",
    downloadName: "Jeremae-Aguro-Resume.pdf",
    openLabel: "Open",
  },
  {
    id: "cover-letter",
    title: "Cover Letter",
    description: "The cover letter I prepared for this course.",
    file: "/documents/jeremae-aguro-cover-letter.pdf",
    downloadName: "Jeremae-Aguro-Cover-Letter.pdf",
    openLabel: "Open",
  },
  {
    id: "developer-guide",
    title: "Standard Operating Procedure / Developer Guide",
    description:
      "A technical writing sample documenting a software setup procedure: environment, installation, database configuration, running the app, and troubleshooting.",
    file: "/documents/jeremae-aguro-developer-guide.pdf",
    downloadName: "Jeremae-Aguro-Developer-Guide.pdf",
    openLabel: "Open",
  },
];
