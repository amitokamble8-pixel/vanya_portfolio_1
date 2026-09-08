/* ==================================================================
   data.js — every piece of content on the site lives here.
   Edit this file; the components never need to change.
   ================================================================== */

export const PROFILE = {
  first: "Vanya",
  last: "Agarwal",
  fullName: "Vanya Agarwal",
  tagline: "Political Science & Economics • Debate and Public Policy • Social Entrepreneur",
  location: "Noida, Uttar Pradesh, India",
  email: "vanyazir7@gmail.com",
  phone: "", // NOTE: the CV lists +91 89292 55287. Left out deliberately — see the flag in chat. Paste it in if you want it public.
  bio: [
    "I'm a Grade XII student at Mayoor School, Noida, graduating in March 2027, with a thirst for knowledge and a readiness to take on challenges. My interests are in political science, economics, and finance, with a strong focus on public policy and a future pursuit of law.",
    "I co-founded Project Aspasia, a not-for-profit providing economic and financial literacy through research, and I serve as Chief Operating Officer of UnTaboo_It, which raises awareness on menstrual hygiene and sex education. I founded my school's Debate and Moot Court Club, where I have mentored over 200 students, and I represent my zone as a Zonal Interact Representative.",
    "Alongside that I write independent research on urban economics and political psychology, was shortlisted for the John Locke Global Essay Prize, and run Bookopedia, my own literary blogging platform. Across academics, debate, community service and entrepreneurship, I aim to drive meaningful change through research, communication, and service.",
  ],
  socials: {
    github: "",
    scholar: "",
    linkedin: "https://www.linkedin.com/in/vanya-agarwal-a69095280/",
    codeforces: "",
    fide: "",
    imo: "",
    wespa: "",
    twitter: "",
  },
  cv: "/cv.pdf",
  photo: "",
  aboutPhoto: "",
};

export const NAV = [
  { label: "Home", to: "/" },
  { label: "About", to: "/about" },
  {
    label: "Experience",
    children: [
      { label: "Work Experience", to: "/work" },
      { label: "Featured Projects", to: "/projects" },
      { label: "Articles & Publications", to: "/publications" },
    ],
  },

  { label: "Achievements", to: "/awards" },
  {
    /* NOTE: the reference file repeated the `label` key inside this object,
       which is a silent bug — the first one is discarded. Written cleanly here. */
    label: "Leadership & Service", to: "/volunteering",
  },

  { label: "Voice & Diplomacy", to: "/sports" },
];

/* ---- Roles & engagement (renders as "Work Experience" cards) ---- */

export const EXPERIENCE = [
  {
    slug: "project-aspasia",
    role: "Co-founder",
    org: "Project Aspasia",
    logo: "/aspasia.jpg",
    location: "Noida, India",
    dates: "2024 – Present",
    meta: "2024 – Present · Noida, India ·",
    badge: "Not-for-profit",
    desc: "A not-for-profit organisation providing economic and financial literacy through research.",
    bullets: [
      "Founded and leads a team of 20+ members spanning design, research, and outreach",
      "Educated 150+ children within six months through workshops and events",
      "Collaborated with the Interact Club of Mayoor School Noida on notable events",
      "Raised ₹16,000 for organisational initiatives",
    ],
    tags: ["Financial Literacy", "Social Impact", "Research"],
    featured: true,
  },
  {
    slug: "debate-moot-court-club",
    role: "Founder & Mentor",
    org: "Debate & Moot Court Club, Mayoor School Noida",
    logo: "/debate_mayoor.png",
    location: "Noida, India",
    dates: "Aug 2025 – Present",
    meta: "Aug 2025 – Present · Noida, India ·",
    badge: "Founder",
    desc: "Founded the school's Debate and Moot Court Club for the 2025–27 term, creating a forum for structured argument and mock advocacy.",
    bullets: [
      "Mentored 200+ students from Classes VI to XII in debate and moot court",
      "Coached students for the Mayoor Invitational 2026, who went on to win four Best Debater prizes",
    ],
    tags: ["Debate", "Public Speaking", "Mentorship"],
    featured: true,
  },
  {
    slug: "untaboo-it",
    role: "Chief Operating Officer",
    org: "UnTaboo_It",
    logo: "/untaboo.jpg",
    location: "India",
    dates: "2025 – Present",
    meta: "2025 – Present · India ·",
    badge: "Not-for-profit",
    desc: "A not-for-profit raising awareness on menstrual hygiene and sex education, mentioned in the QS Impact Report 2024.",
    bullets: [
      "Oversaw operations and strategic direction of the organisation",
    ],
    tags: ["Operations", "Public Health Awareness", "Social Impact"],
    featured: true,
  },
  {
    slug: "ylac-young-researchers",
    role: "Intern",
    org: "YLAC — Young Researchers for Social Impact",
    logo: "",
    location: "India",
    dates: "Jun – Jul 2026",
    meta: "Jun – Jul 2026 · India ·",
    badge: "Internship",
    desc: "Selected for YLAC's Young Researchers for Social Impact programme, conducting group research on adolescent access to sexual and reproductive health information in schools.",
    bullets: [
      "Contributed to a group research paper on SRH information and infrastructure in schools",
      "Worked within a structured social-impact research methodology",
    ],
    tags: ["Research", "Public Policy", "Social Impact"],
    featured: true,
  },
  {
    slug: "student-council-president",
    role: "President, Student Council",
    org: "Mayoor School, Noida",
    logo: "",
    location: "Noida, India",
    dates: "2026 – 2027",
    meta: "2026 – 2027 · Noida, India ·",
    badge: "Elected",
    desc: "Elected President of the Student Council for the 2026–27 academic year, leading the student body across school-wide initiatives.",
    bullets: [
      "Leads the student council through the 2026–27 term",
      "Previously Cultural Prefect (2019–20) and House Prefect, Amber House (2023–24)",
    ],
    tags: ["Leadership", "Student Governance"],
    featured: false,
  },
  {
    slug: "zonal-interact-representative",
    role: "Zonal Interact Representative",
    org: "Interact District",
    logo: "/zir.jpg",
    location: "India",
    dates: "2025 – 2026",
    meta: "2025 – 2026 · India ·",
    badge: "Elected",
    desc: "Represented the zone at district level for Interact Club activities.",
    bullets: [
      "Represented the zone at the district level for Interact Club activities",
      "Mentored two Interact Club members who secured DIR and ZIR positions on the District Council 2026–27",
    ],
    tags: ["Leadership", "Rotary Interact", "Community Service"],
    featured: false,
  },
  {
    slug: "hpair-vconf",
    role: "Delegate",
    org: "HPAIR — Harvard Project for Asian and International Relations",
    logo: "",
    location: "Remote",
    dates: "Feb 2026",
    meta: "Feb 2026 · Remote ·",
    badge: "Delegate",
    desc: "Delegate at HPAIR VCONF, the virtual conference of the Harvard Project for Asian and International Relations.",
    bullets: [
      "Engaged with international relations and policy programming alongside a global delegate cohort",
    ],
    tags: ["International Relations", "Policy", "Conference"],
    featured: false,
  },
  {
    slug: "mayoor-mun",
    role: "Deputy Secretary General",
    org: "Mayoor MUN",
    logo: "/debate_mayoor.png",
    location: "Noida, India",
    dates: "2023 – 2027",
    meta: "2023 – 2027 · Noida, India ·",
    badge: "Secretariat",
    desc: "Deputy Secretary General for the 2026–27 edition, having previously served on the organising committee.",
    bullets: [
      "Deputy Secretary General, Mayoor MUN 2026–27",
      "Organising Committee member, Mayoor MUN 2023–25",
    ],
    tags: ["Model UN", "Event Management", "Leadership"],
    featured: false,
  },
  {
    slug: "ylf-mun-usg",
    role: "Under-Secretary-General, Management",
    org: "YLF MUN",
    logo: "/ylf.png",
    location: "India",
    dates: "2023 – 2024",
    meta: "2023 – 2024 · India ·",
    badge: "Core Position",
    desc: "Held a core secretariat position with responsibility for the management portfolio of the conference.",
    bullets: [
      "Managed logistics and delegate operations as part of the core team",
    ],
    tags: ["Model UN", "Management", "Leadership"],
    featured: false,
  },
  {
    slug: "mayoor-interact-club",
    role: "Interactor",
    org: "Mayoor Interact Club, in association with Rotary International",
    logo: "/mayoor_ic.jpg",
    location: "Noida, India",
    dates: "2020 – Present",
    meta: "2020 – Present · Noida, India ·",
    badge: "Member",
    desc: "Long-standing member of the school Interact Club, delivering community service projects in association with Rotary International.",
    bullets: [
      "Served as Scribe/Writer for an intellectually disabled Class XII student at NIOS in 2023–24",
      "Taught underprivileged children as part of community outreach",
    ],
    tags: ["Community Service", "Rotary Interact", "Accessibility"],
    featured: false,
  },
];

/* ---- Research & writing (renders as "Projects") ---- */

export const PROJECTS = [
  {
    name: "The Kowloon Walled City and How Hong Kong Economically Depended on It",
    org: "Independent Research",
    meta: "Qualitative paper",
    desc: "An independent qualitative paper examining the economic relationship between the Kowloon Walled City and Hong Kong.",
    tags: ["Economics", "Urban History", "Qualitative Research"],
    featured: true,
  },
  {
    name: "Political Polarization Through Social Media and Its Implications on the Psychology of the Youth",
    org: "Independent Research",
    meta: "Primary research",
    desc: "An independent paper written by conducting primary research among teenagers and adolescents.",
    tags: ["Political Science", "Primary Research", "Media Studies"],
    featured: true,
  },
  {
    name: "Beyond the Syllabus: How Access to SRH Information and Infrastructure Shape Adolescents' Educational Experiences in Schools",
    org: "YLAC — Young Researchers for Social Impact",
    meta: "2026",
    desc: "Group research conducted as a participant of the YLAC Young Researchers for Social Impact programme.",
    tags: ["Public Policy", "Education", "Group Research"],
    featured: true,
  },
  {
    name: "Bookopedia",
    org: "Founder · Personal Project",
    meta: "Jul 2023 – Present",
    desc: "A personal blogging website focused on the works of notable authors including Margaret Atwood and Paulo Coelho, publishing in-depth literary analysis and blog posts for a growing readership.",
    tags: ["Writing", "Literature", "Blogging"],
    featured: true,
  },
];

/* ---- Achievements ---- */

export const AWARDS = [
  {
    icon: "",
    title: "SAT — 1550/1600",
    meta: "99th percentile",
    detail: "Maths 790 · Reading & Writing 760.",
    link: "",
    featured: true,
  },
  {
    icon: "",
    title: "Georgetown Hoya Summer Program 2026",
    meta: "Accepted",
    detail: "Accepted to the Georgetown Hoya Summer Program for 2026.",
    link: "",
    featured: true,
  },
  {
    icon: "",
    title: "Lester B. Pearson International Student Scholarship",
    meta: "University of Toronto, 2026",
    detail: "Nominated for the Lester B. Pearson International Student Scholarships at the University of Toronto.",
    link: "",
    featured: true,
  },
  {
    icon: "",
    title: "John Locke Global Essay Prize — Shortlisted",
    meta: "July 2026",
    detail: "Shortlisted for an essay examining the causal relationship between religiosity and per-capita spending on education.",
    link: "",
    featured: true,
  },
  {
    icon: "",
    title: "6 Years Scholars Award",
    meta: "2020 – 2026",
    detail: "Gold Medallion and Red Blazer for six consecutive years as a Scholars awardee.",
    link: "",
    featured: true,
  },
  {
    icon: "",
    title: "Best Debater — Mayoor Ajmer Invitational",
    meta: "Preliminary 2, 2025–26",
    detail: "Named Best Debater in Preliminary 2 at the Mayoor Ajmer Invitational.",
    link: "",
    featured: true,
  },
  {
    icon: "",
    title: "AP Scholar with Honor",
    meta: "College Board",
    detail: "Awarded the AP Scholar with Honor distinction.",
    link: "",
    featured: true,
  },
  {
    icon: "",
    title: "3 Years Honors Award",
    meta: "2022 – 2025",
    detail: "Red Blazer for three consecutive years as an Honors awardee.",
    link: "",
    featured: false,
  },
  {
    icon: "",
    title: "3 Years Scholars Award",
    meta: "2020 – 2023",
    detail: "Red Blazer for three consecutive years as a Scholars awardee.",
    link: "",
    featured: false,
  },
  {
    icon: "",
    title: "100% Scholarship for Grade XI",
    meta: "Mayoor School, Noida",
    detail: "Awarded a full scholarship for Grade XI.",
    link: "",
    featured: false,
  },
  {
    icon: "",
    title: "Grade X Board Examinations — 98.4%",
    meta: "Grade XI: 88.9%",
    detail: "Scored 98.4% in the Grade X board examinations and 88.9% in Grade XI.",
    link: "",
    featured: false,
  },
  {
    icon: "",
    title: "2nd Position — Bulls, Bears and Bombay (Mock Stock)",
    meta: "Monetary Peacock, Mayo College Ajmer, 2025–26",
    detail: "Placed second in the mock stock competition at Monetary Peacock.",
    link: "",
    featured: false,
  },
  {
    icon: "",
    title: "Felicitated by KIET Group of Institutions",
    meta: "",
    detail: "Recognised and felicitated by the KIET Group of Institutions.",
    link: "",
    featured: false,
  },
  {
    icon: "",
    title: "International Computer Olympiad — School Rank 1",
    meta: "2024 – 2025",
    detail: "Ranked first in school in the International Computer Olympiad.",
    link: "",
    featured: false,
  },
  {
    icon: "",
    title: "National Cyber Olympiad — Gold Medalist",
    meta: "2022 – 2023",
    detail: "Gold Medalist in the National Cyber Olympiad.",
    link: "",
    featured: false,
  },
  {
    icon: "",
    title: "DELF A1 & A2 (French)",
    meta: "Ministry of Education, France",
    detail: "DELF A1: 87/100, including a perfect 25/25 in the speaking test. DELF A2: 72.5/100.",
    link: "",
    featured: false,
  },
  {
    icon: "",
    title: "Science Quiz Competition — 3rd Position",
    meta: "2022 – 2023",
    detail: "Secured third position in the Science Quiz Competition.",
    link: "",
    featured: false,
  },
  {
    icon: "",
    title: "Conferences & Model Events",
    meta: "2023 – 2026",
    detail: "Participated in Mayo G20 (January 2023–24), LCF du Mayo (October 2024–25), Monetary Peacock (August 2025–26) and the District Interact Leadership Assembly (2024–26).",
    link: "",
    featured: false,
  },
];

/* ---- Research interests ---- */

export const ARTICLES = [
  {
    title: "Political Science & Public Policy",
    outlet: "Governance, polarization, and how policy shapes everyday outcomes",
    link: "",
  },
  {
    title: "Economics & Financial Literacy",
    outlet: "Urban and development economics, and making financial concepts accessible to a general audience",
    link: "",
  },
  {
    title: "Law & Advocacy",
    outlet: "Moot court, legal reasoning, and rights-based approaches to social problems",
    link: "",
  },
  {
    title: "Literature & Long-Form Writing",
    outlet: "Literary analysis of Margaret Atwood, Paulo Coelho and others, published through Bookopedia",
    link: "",
  },
];

/* ---- Leadership, service & mentorship ---- */

export const VOLUNTEER = {
  stats: [
    { value: "200+", label: "Students Mentored" },
    { value: "150+", label: "Children Educated" },
    { value: "20+", label: "Team Members Led" },
  ],
  orgs: [
    {
      name: "Project Aspasia",
      role: "Co-founder · Since 2024",
      desc: "A not-for-profit providing economic and financial literacy through research. Founded and leads a team of 20+ members across design, research and outreach, educated 150+ children within six months through workshops and events, collaborated with the Interact Club of Mayoor School Noida, and raised ₹16,000 for organisational initiatives.",
    },
    {
      name: "UnTaboo_It",
      role: "Chief Operating Officer · Since 2025",
      desc: "A not-for-profit raising awareness on menstrual hygiene and sex education, mentioned in the QS Impact Report 2024. Oversaw operations and strategic direction of the organisation.",
    },
    {
      name: "Debate & Moot Court Club, Mayoor School Noida",
      role: "Founder & Mentor · Since Aug 2025",
      desc: "Founded the club for the 2025–27 term and has mentored 200+ students from Classes VI to XII, coaching the cohort that went on to win four Best Debater prizes at the Mayoor Invitational 2026.",
    },
    {
      name: "School Events & Outreach",
      role: "Volunteer & Speaker · 2023–26",
      desc: "Volunteers at the Sports Meet, Synergy and the Interact Installation, and speaks at school seminars on SAT preparation and summer programmes.",
    },
  ],
};

/* ---- Debate, MUN & competitions (renders on the /sports route) ---- */

export const SPORTS = [
  {
    icon: "",
    name: "Declamation & Public Speaking",
    desc: "Competes in declamation and speaking events and speaks at school seminars on SAT preparation and summer programmes, with public speaking, negotiation and conflict resolution as core strengths.",
  },
  {
    icon: "",
    name: "Business & Finance Competitions",
    desc: "Second place in Bulls, Bears and Bombay (Mock Stock) at Monetary Peacock, Mayo College Ajmer, 2025–26.",
  },
  {
    icon: "",
    name: "Olympiads & Quizzing",
    desc: "National Cyber Olympiad Gold Medalist (2022–23), International Computer Olympiad School Rank 1 (2024–25), and third place in the Science Quiz Competition (2022–23).",
  },
];

/* ---- Skills ---- */

export const SKILLS = [
  {
    group: "Core Competencies",
    items: ["Public Speaking", "Leadership", "Management", "Negotiation", "Conflict Resolution", "Research", "Analysis"],
  },
  {
    group: "Research & Writing",
    items: ["Qualitative Research", "Primary Research", "Essay Writing", "Literary Analysis", "Blogging"],
  },
  {
    group: "Specialised Interests",
    items: ["Political Science", "Economics & Finance", "Public Policy", "Law", "International Relations"],
  },
  {
    group: "Languages",
    items: ["English (Native)", "Hindi", "French (7+ years — DELF A1, A2)"],
  },
];

/* ---- Education (additional export — needs a component if you want to render it) ---- */

export const EDUCATION = [
  {
    school: "Mayoor School, Noida",
    location: "Noida, Uttar Pradesh, India",
    level: "Class XII — Senior Secondary",
    dates: "Graduating March 2027",
    gpa: "Grade XI: 88.9%",
    coursework: [
      "Business Studies",
      "Accountancy",
      "Economics",
      "English",
      "Core Mathematics",
    ],
  },
  {
    school: "Mayoor School, Noida",
    location: "Noida, Uttar Pradesh, India",
    level: "Class X — Secondary",
    dates: "",
    gpa: "98.4% (Grade X Boards)",
    coursework: [],
  },
];

export const TEST_SCORES = [
  {
    exam: "SAT",
    date: "",
    breakdown: [
      { label: "Maths", value: "790" },
      { label: "Reading & Writing", value: "760" },
      { label: "Total", value: "1550/1600 (99th percentile)" },
    ],
  },
  {
    exam: "AP Examinations",
    date: "",
    breakdown: [
      { label: "Comparative Government and Politics", value: "5/5" },
      { label: "Microeconomics", value: "4/5" },
      { label: "Macroeconomics", value: "4/5" },
      { label: "Statistics", value: "3/5" },
    ],
  },
  {
    exam: "DELF — French",
    date: "",
    breakdown: [
      { label: "DELF A1", value: "87/100 (Speaking 25/25)" },
      { label: "DELF A2", value: "72.5/100" },
    ],
  },
];

export const FOOTER_NAV = [
  { label: "Home", to: "/" },
  { label: "About", to: "/about" },
  { label: "Work Experience", to: "/work" },
  { label: "Featured Projects", to: "/projects" },
  { label: "Articles & Publications", to: "/publications" },
  { label: "Achievements", to: "/awards" },
  { label: "Leadership & Service", to: "/volunteering" },
  { label: "Voice & Diplomacy", to: "/sports" },
];

export const FOOTER_PROFILES = [
  { label: "LinkedIn", href: PROFILE.socials.linkedin },
];
