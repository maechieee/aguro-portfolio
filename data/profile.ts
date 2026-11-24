/**
 * Central profile configuration — edit THIS file to update personal info site-wide.
 *
 * Empty string ("") = not provided yet. Components render a clearly-marked
 * "not set" state for empty values instead of linking anywhere.
 */
export const profile = {
  fullName: "Jeremae Aguro",
  shortName: "Jeremae Aguro",
  title: "Aspiring Full-Stack Web Developer",
  education: "Bachelor of Science in Information Technology Student",
  location: "Roxas City, Capiz, Philippines",
  valueProposition:
    "I develop practical, user-friendly web applications that help solve real-world problems through thoughtful design and reliable technology.",
  intro:
    "I'm a BSIT student building web applications with Python, Django, JavaScript, and relational databases like MySQL and PostgreSQL. My academic projects have given me hands-on practice in database design, system testing, and working with a team.",
  summary:
    "I am a Bachelor of Science in Information Technology student with hands-on experience in web development, programming, database management, and academic project development. I have experience developing web-based applications using Python, Django, JavaScript, HTML, CSS, MySQL, and PostgreSQL. I am passionate about creating functional, user-friendly applications that solve real-world problems while continuously improving my technical and problem-solving skills.",

  // ── TO PROVIDE ─────────────────────────────────────────────────────────
  /** Professional email address (used by the "Get in Touch" button). */
  email: "agurojeremae20@gmail.com",
  /** Full GitHub profile URL, e.g. https://github.com/<username> */
  github: "https://github.com/maechieee",
  /** Full LinkedIn profile URL, e.g. https://www.linkedin.com/in/<handle> */
  linkedin: "https://www.linkedin.com/in/jeremae-aguro",
  /** Path to your photo inside /public, e.g. "/jeremae-aguro.jpg". Empty = placeholder. */
  photo: "/jeremae-aguro1.png",
  // ───────────────────────────────────────────────────────────────────────

  /** Résumé PDF. Drop the file at this path in /public; the site detects it automatically. */
  resumeUrl: "/documents/jeremae-aguro-resume.pdf",
} as const;

export const siteConfig = {
  url: process.env.NEXT_PUBLIC_SITE_URL ?? "http://localhost:3000",
  title: "Jeremae Aguro | Full-Stack Web Developer Portfolio",
  description:
    "Explore the portfolio of Jeremae Aguro, an aspiring full-stack web developer specializing in web application development, database management, and academic software projects.",
};

/** Opens a Gmail compose window in a new tab. Works without a desktop mail app configured. */
export const emailComposeUrl = (email: string) =>
  `https://mail.google.com/mail/?view=cm&fs=1&to=${encodeURIComponent(email)}`;
