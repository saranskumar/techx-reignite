export const event = {
  name: "TechX REIGNITE",
  year: "2026",
  tagline: "Powering Minds, One Spark At A Time.",
  dateRange: "13th – 27th September 2026",
  dateShort: "13 — 27 September 2026",
  location: "Sree Chitra Thirunal College of Engineering (SCTCE), Pappanamcode",
  locationShort: "SCT College of Engineering",
  campus: "SCTCE Campus · Trivandrum",
  coords: "8.5241°N 76.9366°E",
  format:
    "Pre-events (13th–19th September) | Main Programme (26th–27th September)",
  organizedBy: "IEEE CS SCT SBC",
  organizedByFull: "IEEE CS SCT Student Branch Chapter",
  email: "ieeesctsb@gmail.com",
  upi: "ieeesctsb@oksbi",
  links: {
    chapter: "https://ieeesctsb.org/",
    instagram: "https://www.instagram.com/ieeesctsb/",
    linkedin: "https://in.linkedin.com/company/ieeesctsb",
    whatsapp: "https://whatsapp.com/channel/0029Vakj3LDKLaHsJxbxMG0K",
  },
} as const;

export const tickets = [
  {
    id: "cs",
    name: "IEEE Computer Society",
    price: 200,
    note: "IEEE CS members",
  },
  {
    id: "ieee",
    name: "IEEE Member",
    price: 300,
    note: "General IEEE members",
  },
  {
    id: "open",
    name: "Non-IEEE",
    price: 400,
    note: "Open delegate pass",
  },
] as const;

export const tracks = [
  {
    id: "workshops",
    index: "01",
    pillar: "Tech",
    status: "Coming soon",
    title: "Hands-on Workshops",
    kicker: "Offline sprints · Two tracks",
    body: "Intensive coding sprints and technical labs. Participants build end-to-end architectures, test microservices, and deploy production-ready systems under mentorship. Parallel tracks: Full-stack Development and Advanced IoT Systems.",
    image: "/art/city-spark.png",
    alt: "Amber energy travelling through a geometric futuristic city",
  },
  {
    id: "talks",
    index: "02",
    pillar: "Tech",
    status: "Coming soon",
    title: "Talk Sessions",
    kicker: "Interdisciplinary keynotes",
    body: "Forward-looking keynotes on technological convergence — Advanced Driver Assistance Systems (ADAS) and AI breakthroughs in healthcare.",
    image: "/art/signal-towers.png",
    alt: "Monumental communication towers across a misty amber plain",
  },
  {
    id: "soft-skills",
    index: "03",
    pillar: "Train",
    status: "Coming soon",
    title: "Soft Skills",
    kicker: "Career placement sessions",
    body: "Master placement communication, resume curation, pitch delivery, and industry-ready soft skills.",
    image: "/art/geometric-detail.png",
    alt: "Quiet geometric courtyard of amber stone and water",
  },
  {
    id: "nano-mentoring",
    index: "04",
    pillar: "Train",
    status: "Coming soon",
    title: "Nano-Mentoring",
    kicker: "1-on-1 guidance",
    body: "Personalized career counseling and portfolio roadmapping with young professionals from top tech firms.",
    image: "/art/robotics-architecture.png",
    alt: "A colossal machine-temple set into a misty hillside",
  },
] as const;

export const preEvents = [
  {
    date: "13th September",
    short: "13 SEP",
    title: "Online Workshop",
    organizer: "IEEE CS CEAL SBC",
    venue: "Google Meet / Discord (Online)",
    description:
      "An introductory online bootcamp to cover prerequisites and setup files for the main offline tracks. Ideal for beginners.",
    requirements: "Stable internet connection and a basic text editor.",
  },
  {
    date: "14th September",
    short: "14 SEP",
    title: "BlindScript",
    organizer: "IEEE CS SCT SBC",
    venue: "HackerRank (Online)",
    description:
      "A programming speed sprint where developers write code with their monitors turned off. Judged on execution accuracy, compile rate, and syntax.",
    requirements: "Fast typing and strong muscle memory.",
  },
  {
    date: "15th September",
    short: "15 SEP",
    title: "AI in HealthCare",
    organizer: "IEEE EMBS SCT SBC",
    venue: "Google Meet (Online)",
    description:
      "A keynote on deep learning applied to diagnosis, CT scan analysis, and biotech engineering — the intersection of computer science and medicine.",
    requirements: null,
  },
  {
    date: "16th September",
    short: "16 SEP",
    title: "Competition",
    organizer: "IEEE CS GECBH SBC",
    venue: "Online platform",
    description:
      "An online coding marathon testing algorithmic solving, from easy arrays to dynamic programming.",
    requirements: null,
  },
  {
    date: "17th September",
    short: "17 SEP",
    title: "CypherX",
    organizer: "IEEE COMSOC SCT SBC",
    venue: "Online (CTF portal)",
    description:
      "A cryptography puzzle hunt. Decrypt logs, solve riddles, and decode files to find the flags first.",
    requirements: null,
  },
  {
    date: "19th September",
    short: "19 SEP",
    title: "ADAS — The Future of Driving",
    organizer: "IEEE IAS SCT SBC",
    venue: "Google Meet (Online)",
    description:
      "How Advanced Driver Assistance Systems work: sensor fusion, lidar vision networks, and autopilot control loops.",
    requirements: null,
  },
] as const;

export const summitDays = [
  {
    id: "26",
    label: "Day 01",
    date: "26 September",
    kicker: "Workshops & talks",
    items: [
      {
        time: "09:30 AM – 10:30 AM",
        place: "Seminar Hall",
        title: "Inauguration Ceremony",
        body: "Welcome address by college leadership and senior IEEE Computer Society dignitaries.",
      },
      {
        time: "10:30 AM – 01:00 PM",
        place: "Computer Labs 2 & 3",
        title: "Workshop Session I (2 Tracks)",
        body: "Parallel hands-on sprints: Full-stack Development and Advanced IoT Systems.",
      },
      {
        time: "01:00 PM – 02:00 PM",
        place: null,
        title: "Lunch Break & Networking",
        body: null,
      },
      {
        time: "02:00 PM – 03:30 PM",
        place: "Lab sprints",
        title: "Workshop Session II",
        body: "Project implementation, debugging labs, and preparation for the next day’s competition.",
      },
      {
        time: "03:30 PM – 04:30 PM",
        place: "Auditorium Annex",
        title: "Soft Skills Talk Session",
        body: "Interview strategies, resume polishing, and placement communication.",
      },
      {
        time: "04:30 PM – 05:00 PM",
        place: null,
        title: "Tea Break & Interaction",
        body: null,
      },
      {
        time: "05:00 PM – 06:30 PM",
        place: "Lobby",
        title: "Tech Games & Icebreakers",
        body: "Interactive quizzes, lightning challenges, and exclusive goodies.",
      },
    ],
  },
  {
    id: "27",
    label: "Day 02",
    date: "27 September",
    kicker: "Sprints & mentoring",
    items: [
      {
        time: "09:30 AM – 01:00 PM",
        place: "Labs",
        title: "Competition (based on workshop)",
        body: "Speed trials and system challenges drawn from the previous day’s tracks.",
      },
      {
        time: "01:00 PM – 02:00 PM",
        place: null,
        title: "Lunch Break",
        body: null,
      },
      {
        time: "02:00 PM – 04:00 PM",
        place: "Parallel",
        title: "Nano Mentoring",
        body: "1-on-1 counseling pods for portfolio reviews and career roadmapping.",
      },
      {
        time: "02:00 PM – 04:00 PM",
        place: "Parallel",
        title: "Vibe Check, CS MD Session",
        body: "IEEE Computer Society membership dialogue running alongside mentoring.",
      },
      {
        time: "04:00 PM – 04:30 PM",
        place: null,
        title: "Break",
        body: null,
      },
      {
        time: "04:30 PM – 05:30 PM",
        place: "Campus",
        title: "Culturals",
        body: null,
      },
      {
        time: "05:30 PM – 06:30 PM",
        place: "Seminar Hall",
        title: "Closing Ceremony",
        body: null,
      },
    ],
  },
] as const;

export const advantages = [
  {
    index: "01",
    title: "Interdisciplinary inclusivity",
    body: "IEEE Computer Society is not only for CS students. With AI spanning healthcare, ADAS, and IoT, TechX welcomes delegates from ECE, Mechanical, Biotechnology, and beyond.",
  },
  {
    index: "02",
    title: "Community belonging",
    body: "Open to beginners and seniors alike. An accessible, ego-free technical culture — collaboration and curiosity over competition.",
  },
  {
    index: "03",
    title: "Industry exposure",
    body: "Immersion in modern DevOps standards, production codebases, and real-world system architecture.",
  },
  {
    index: "04",
    title: "IEEE CS membership value",
    body: "Sessions on global IEEE grants, research publication pathways, student branch leadership, and international networking.",
  },
  {
    index: "05",
    title: "Industrial firm visit",
    body: "A curated corporate visit to real IT work floors, server infrastructure, and developer team rituals.",
  },
  {
    index: "06",
    title: "Direct industry mentors",
    body: "Guidance from young professionals and alumni at top tech firms — portfolio and career counsel, in person.",
  },
] as const;

export const speakers = [
  {
    name: "Speaker 1",
    role: "Industry Professional / Advisor",
    organization: "Tech Organization",
    about:
      "Technology advisor and senior engineer with over 12 years in system architecture, microservices, and cloud deployments. Mentors computer science students and supports IEEE student branch initiatives.",
  },
  {
    name: "Speaker 2",
    role: "Lead Systems Engineer",
    organization: "Research Lab",
    about:
      "Systems engineer specializing in ADAS automation, edge computing, and automotive sensors, leading initiatives at industrial research hubs.",
  },
  {
    name: "Speaker 3",
    role: "Senior ML Developer",
    organization: "AI Solutions",
    about:
      "Deep learning practitioner focused on healthcare informatics, convolutional networks, and computer vision for clinical diagnostics.",
  },
] as const;

export const partners = [
  { name: "IEEE CS CEAL SBC", href: "https://www.computer.org" },
  { name: "IEEE CS SCT SBC", href: "https://ieeesctsb.org/" },
  { name: "IEEE EMBS SCT SBC", href: "https://www.embs.org" },
  { name: "IEEE CS GECBH SBC", href: "https://www.computer.org" },
  { name: "IEEE COMSOC SCT SBC", href: "https://www.comsoc.org" },
  { name: "IEEE IAS SCT SBC", href: "https://ias.ieee.org" },
] as const;

export const faqs = [
  {
    q: "What is TechX REIGNITE?",
    a: "TechX REIGNITE is a premier technical upskilling initiative and flagship event of IEEE CS SCT Student Branch Chapter. It combines online pre-events with a two-day offline summit — workshops, talks, competitions, and mentoring — for builders, developers, and designers.",
  },
  {
    q: "Who is eligible to participate?",
    a: "The event is open to all university students, developers, and tech enthusiasts. Whether you are building your first system or competing in speed trials, there is a track for you.",
  },
  {
    q: "How do teams work?",
    a: "You can register individually or in teams of up to 4 members. If you register individually, team-matching happens on Day 1 of the flagship summit.",
  },
  {
    q: "What hardware or software do I need to bring?",
    a: "Bring a personal laptop. For specialized tracks, testing equipment and prototyping hardware are provided by the organizers.",
  },
  {
    q: "What are the ticket prices?",
    a: "₹200 for IEEE Computer Society members, ₹300 for general IEEE members, and ₹400 for non-IEEE members. Pay via UPI to ieeesctsb@oksbi and include your name in the remarks.",
  },
  {
    q: "Where is the event venue?",
    a: "Pre-events (13th–19th September) are online. The flagship summit (26th–27th September) is offline at Sree Chitra Thirunal College of Engineering (SCTCE), Pappanamcode, Trivandrum.",
  },
  {
    q: "Will I get a certificate?",
    a: "Yes. Active participants who complete the workshop tracks and submit sprint challenges receive official participation certificates from IEEE SCT Student Branch Chapter.",
  },
  {
    q: "Are food and refreshments provided?",
    a: "Yes. Working lunch, high-tea, and refreshments are provided to registered participants on the offline workshop days.",
  },
] as const;
