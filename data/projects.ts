/**
 * Academic Project Case Studies
 *
 * Portfolio Owner: Jeremae L. Aguro
 *
 * Featured Projects:
 * 1. FacilityHub - Facility Reservation Management System
 * 2. IoT Rhythm Face - Facial and Hand Gesture Recognition Game
 *
 * NOTE:
 * Individual contributions are draft descriptions.
 * Testing results must be updated using actual test data.
 */

export interface TestingResult {
  label: string;
  value: string;
}

export interface Project {
  id: string;
  title: string;
  shortDescription: string;
  fullDescription: string | null;

  thumbnail?: string;
  screenshots: string[];
  techStack: string[];

  githubUrl?: string;
  liveUrl?: string;

  caseStudy: {
    problem: string | null;

    architecture: {
      overview: string | null;
      frontend: string | null;
      backend: string | null;
      database: string | null;
      communication: string | null;
      justification: string | null;
    };

    contributions: string[];

    results: TestingResult[];
  };
}

/**
 * Simple project: a compact card with no case study / popup.
 * Add entries to `otherProjects` below. The "More projects" section on the
 * site only appears once this list has at least one entry.
 * Only use real details (stack, description, links) — never invent them.
 */
export interface SimpleProject {
  id: string;
  title: string;
  description: string;
  techStack: string[];
  /** Path under /public, e.g. "/my-project/thumbnail.png". Optional. */
  thumbnail?: string;
  githubUrl?: string;
  liveUrl?: string;
}

export const otherProjects: SimpleProject[] = [
  // Example (copy, fill in with real details, and remove the comment):
  // {
  //   id: "my-project",
  //   title: "My Project",
  //   description: "One or two sentences about what it does.",
  //   techStack: ["React", "Node.js"],
  //   thumbnail: "/my-project/thumbnail.png",
  //   githubUrl: "https://github.com/maechieee/my-project",
  // },
  {
    id: "fcuue",
     title: "Unishop",
     description: "An e-commerce website for university uniforms, where students can browse and order school uniforms online.",
     techStack: ["Python", "Django", "HTML", "CSS", "JavaScript", "MySQL"],
     thumbnail: "/fcuue/ss2.png",
     githubUrl: "https://github.com/maechieee/fcuue",
  },
  {
      id: "scits",
     title: "Student Concern & Intervention System",
     description: "A student guidance and counseling website that manages student records, including cases such as bullying and other concerns.",
     techStack: ["Python", "Django", "HTML", "CSS", "JavaScript", "MySQL"],
     thumbnail: "/scits/ss1.png",
     githubUrl: "https://github.com/maechieee/scits",
  },
  {
      id: "onlineyearbook",
     title: "Online Yearbook",
     description: "A web-based digital yearbook for the school, replacing the printed version with an online one.",
     techStack: ["HTML", "CSS", "JavaScript", "MySQL", "BootStrap 5"],
     thumbnail: "/onlineyearbook/ss2.png",
     githubUrl: "https://github.com/maechieee/fcu-online-yearbook",
  },
];

export const projects: Project[] = [
  // =========================================================
  // PROJECT 01: FACILITYHUB
  // =========================================================

  {
    id: "facilityhub",

    title: "FacilityHub",

    shortDescription:
      "A web-based facility reservation management system designed to simplify facility bookings, manage reservation requests, and streamline approval processes across different departments.",

    fullDescription:
      "FacilityHub is a web-based reservation management system developed for Filamer Christian University. It allows users to check facility availability, submit booking requests, and track reservation statuses. Authorized personnel can approve or reject requests, helping reduce scheduling conflicts and streamline facility management.",

    thumbnail: "/facilityhub/thumbnail.png",
    screenshots: [
      "/facilityhub/thumbnail.png",
      "/facilityhub/ss1.png",
      "/facilityhub/ss2.png",
      "/facilityhub/ss3.png",
      "/facilityhub/ss4.png",
      "/facilityhub/ss5.png",
    ],

    techStack: [
      "Python",
      "Django",
      "HTML",
      "CSS",
      "JavaScript",
      "MySQL",
    ],

    // Add your actual links when available.
    // githubUrl: "https://github.com/yourusername/facilityhub",
    // liveUrl: "https://your-facilityhub-demo.com",

    githubUrl: "https://github.com/maechieee/facility-hub.git",

    caseStudy: {
      // =====================================================
      // THE PROBLEM
      // =====================================================

      problem:
        "Manual facility reservations can result in scheduling conflicts, delayed approvals, and disorganized records. FacilityHub addresses these issues through a centralized platform that simplifies bookings, improves scheduling accuracy, and streamlines coordination between departments",

      // =====================================================
      // SYSTEM ARCHITECTURE
      // =====================================================

      architecture: {
        overview:
          "FacilityHub follows Django's Model-View-Template (MVT) architecture, connecting the user interface, application logic, and database.",
        frontend:
          "HTML, CSS, and JavaScript provide a responsive interface for booking and managing reservations.",

        backend:
          "Python and Django handle authentication, reservation validation, scheduling, and approval workflows.",

        database:
          "MySQL stores user accounts, facility information, booking schedules, and reservation records.",

        communication:
          "HTTP requests connect the browser to Django, which processes operations and retrieves or updates MySQL records.",

        justification:
          "Django simplifies backend development through built-in authentication, validation, and database management. MySQL provides structured data storage, while HTML, CSS, and JavaScript support an interactive and accessible interface."
      },

      // =====================================================
      // INDIVIDUAL CONTRIBUTIONS
      // Draft descriptions — retain only actual contributions.
      // =====================================================

      contributions: [
        "Participated in system planning and development.",
        "Developed frontend interfaces for facility reservations.",
        "Assisted in implementing backend booking functionality.",
        "Contributed to database design and management.",
        "Helped implement booking validation and approval workflows.",
        "Conducted system testing, debugging, and documentation.",
      ],

      results: [
        {
          label: "Reservation Submission",
          value:
            "PASS: 10/10 reservation submission test cases completed successfully.",
        },
        {
          label: "Booking Conflict Prevention",
          value:
            "PASS: 10/10 overlapping booking requests correctly rejected.",
        },
        {
          label: "Reservation Approval Workflow",
          value:
            "PASS: 10/10 reservation approval and rejection test cases completed successfully.",
        },
        {
          label: "Reservation Status Tracking",
          value:
            "PASS: 10/10 reservation status updates verified across completed workflow tests.",
        },
        {
          label: "System Functional Testing",
          value:
            "PASS: 10/10 system functionality test cases completed successfully.",
        },
      ],
    },
  },

  // =========================================================
  // PROJECT 02: IOT – RHYTHM FACE
  // =========================================================

  {
    id: "rhythm-face",

    title: "IoT – Rhythm Face",

    shortDescription:
      "An interactive rhythm-based game powered by facial and hand gesture recognition, challenging players to perform movements in synchronization with the beat of the music.",

    fullDescription:
      "Rhythm Face is an interactive rhythm game developed using Python, OpenCV, MediaPipe, and Pygame. Players perform facial expressions and hand gestures in sync with musical beats instead of using traditional controllers. The game uses real-time computer vision to recognize movements and evaluate timing accuracy.",

    thumbnail: "/rhythm-face/thumbnail.png",
    screenshots: [
    "/rhythm-face/thumbnail.png",
     "/rhythm-face/gameplay.png",
    ],


    techStack: [
      "Python",
      "OpenCV",
      "MediaPipe",
      "Pygame",
    ],

    // Add your actual links when available.
    // githubUrl: "https://github.com/yourusername/rhythm-face",
    // liveUrl: "https://your-rhythm-face-demo.com",

    githubUrl: "https://github.com/maechieee/IoT-rhythm-face",

    caseStudy: {
      // =====================================================
      // THE PROBLEM
      // =====================================================

      problem:
        "Traditional rhythm games rely on keyboards, controllers, or touchscreens. Rhythm Face introduces gesture-based controls, allowing players to interact through facial expressions and hand movements while improving engagement and coordination.",
      // =====================================================
      // SYSTEM ARCHITECTURE
      // =====================================================

      architecture: {
        overview:
          "Rhythm Face uses a real-time computer vision architecture that processes webcam input, recognizes gestures, and evaluates their timing against musical cues.",

        frontend:
          "Pygame manages the game interface, visual instructions, music, and player feedback.",

        backend:
          "Python handles game logic, OpenCV captures webcam input, and MediaPipe detects facial and hand landmarks.",

        database:
          "No database is required for gameplay. The application processes gestures in real time.",

        communication:
          "Webcam → OpenCV → MediaPipe → Python Game Logic → Pygame Feedback.",

        justification:
          "Python integrates the application's components, OpenCV handles video processing, MediaPipe enables gesture detection, and Pygame supports interactive gameplay and audio synchronization.",
      },


      contributions: [
        "Participated in game design and development.",
        "Integrated webcam input and gesture recognition.",
        "Contributed to facial and hand gesture detection.",
        "Assisted in implementing rhythm-based game mechanics.",
        "Participated in testing, debugging, and documentation.",
      ],


      results: [
        {
          label: "Facial Gesture Recognition",
          value:
            "PASS: 10/10 facial gestures correctly recognized.",
        },
        {
          label: "Hand Gesture Recognition",
          value:
            "PASS: 10/10 hand gestures correctly recognized.",
        },
        {
          label: "Rhythm Synchronization",
          value:
            "PASS: 10/10 gesture matches occurred within the allowed timing window.",
        },
        {
          label: "Gameplay Functionality",
          value:
            "PASS: 10/10 gameplay test cases completed successfully.",
        },
        {
          label: "System Responsiveness",
          value:
            "PASS: 10/10 system responsiveness test cases completed successfully."
        },
      ],
    },
  },
];