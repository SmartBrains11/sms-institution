export const IMG = {
  welding: "/images/welding-booths.jpg",
  office: "/images/office.jpg",
  reception: "/images/reception.jpg",
  logo: "/images/sms-logo.png",
  welding2: "/images/welding2.png",
  pipe_fitting: "/images/pipe_fitting.png",
  fabrication: "/images/fabrication.png",
  electrician: "/images/electrician-training.png",
  rigging: "/images/rigger-training.png",
  scaffolding: "/images/scaffolding-training.png",
  steel_fixer: "/images/steel-fixer-training.png",
};

export const CONTACT = {
  phone: "+91 9177988688",
  phone2: "+91 8106746449",
  whatsapp: "919177988688",
  email: "smsabroadrecruitment@gmail.com",
  address: "Flat No.: A3, 'B' Block, Near HI Tech Rubber, Opp. Sarvani Redimix, Autonagar, Visakhapatnam -530 012",
};

export const WHATSAPP_URL = `https://wa.me/${CONTACT.whatsapp}?text=Hi%20SMS%2C%20I%27d%20like%20to%20inquire%20about%20training%20and%20overseas%20placement.`;

export const NAV = [
  { to: "/", label: "Home" },
  { to: "/about", label: "About Us" },
  { to: "/programs", label: "Programs" },
  { to: "/placements", label: "Placements" },
  { to: "/contact", label: "Contact" },
] as const;

export const PROGRAMS = [
  {
    slug: "6g-tig-arc-welder",
    title: "6G TIG & ARC Welder",
    tagline: "Master advanced pipe and structural welding.",
    duration: "Flexible (training based on required duration per candidate)",
    outcomes: ["6G pipe welding", "TIG & ARC combinations", "X-ray quality welds", "Safety standards"],
    countries: ["Saudi Arabia", "Oman", "Dubai (UAE)", "Kuwait", "Russia", "Bahrain"],
    image: IMG.welding2,
  },
  {
    slug: "mig-welder",
    title: "MIG Welder",
    tagline: "High-speed continuous wire welding for manufacturing and construction.",
    duration: "Flexible (training based on required duration per candidate)",
    outcomes: ["GMAW process", "Structural steel welding", "Equipment setup", "Defect identification"],
    countries: ["Saudi Arabia", "Dubai (UAE)", "Russia", "Bahrain"],
    image: IMG.welding2,
  },
  {
    slug: "arc-welder",
    title: "ARC Welder",
    tagline: "Traditional shielded metal arc welding for heavy industries.",
    duration: "Flexible (training based on required duration per candidate)",
    outcomes: ["SMAW process", "Heavy plate welding", "Electrode selection", "All-position welding"],
    countries: ["Oman", "Kuwait", "Saudi Arabia"],
    image: IMG.welding2,
  },
  {
    slug: "ss-full-tig",
    title: "SS Full TIG Welder",
    tagline: "Precision Stainless Steel TIG welding for critical applications.",
    duration: "Flexible (training based on required duration per candidate)",
    outcomes: ["Stainless steel purging", "GTAW process", "Sanitary tubing", "Thin metal welding"],
    countries: ["Saudi Arabia", "Oman", "Russia"],
    image: IMG.welding2,
  },
  {
    slug: "cs-full-tig",
    title: "CS Full TIG Welder",
    tagline: "Carbon Steel TIG welding for high-pressure systems.",
    duration: "Flexible (training based on required duration per candidate)",
    outcomes: ["Carbon steel pipes", "Root pass techniques", "Heat control", "Pipe fit-up"],
    countries: ["Dubai (UAE)", "Kuwait", "Bahrain"],
    image: IMG.welding2,
  },
  {
    slug: "pipe-fitter",
    title: "Pipe Fitter",
    tagline: "Layout, assemble, and install piping systems.",
    duration: "Flexible (training based on required duration per candidate)",
    outcomes: ["Isometric drawing reading", "Pipe threading & cutting", "Valve installation", "System testing"],
    countries: ["Saudi Arabia", "Oman", "Kuwait", "Bahrain"],
    image: IMG.pipe_fitting,
  },
  {
    slug: "fabricator",
    title: "Fabricator",
    tagline: "Cut, shape, and assemble metal structures.",
    duration: "Flexible (training based on required duration per candidate)",
    outcomes: ["Blueprint reading", "Metal cutting & bending", "Assembly alignment", "Tack welding"],
    countries: ["Dubai (UAE)", "Russia", "Bahrain"],
    image: IMG.fabrication,
  },
  {
    slug: "structure-fitter",
    title: "Structure Fitter",
    tagline: "Position and secure structural steel members.",
    duration: "Flexible (training based on required duration per candidate)",
    outcomes: ["Structural drawings", "Steel framing", "Bolting & riveting", "Load distribution"],
    countries: ["Saudi Arabia", "Oman", "Dubai (UAE)"],
    image: IMG.fabrication,
  },
  {
    slug: "electrician",
    title: "Electrician",
    tagline: "Install, maintain, and repair electrical systems.",
    duration: "Flexible (training based on required duration per candidate)",
    outcomes: ["Wiring & conduit installation", "Circuit troubleshooting", "Industrial controls", "Safety codes"],
    countries: ["Kuwait", "Saudi Arabia", "Bahrain"],
    image: IMG.electrician,
  },
  {
    slug: "rigger",
    title: "Rigger",
    tagline: "Safely move heavy loads using ropes, chains, and lifting gear.",
    duration: "Flexible (training based on required duration per candidate)",
    outcomes: ["Load calculation", "Slinging techniques", "Crane signaling", "Rigging safety"],
    countries: ["Oman", "Dubai (UAE)", "Russia"],
    image: IMG.rigging,
  },
  {
    slug: "scaffolding",
    title: "Scaffolding",
    tagline: "Erect and dismantle temporary elevated work platforms.",
    duration: "Flexible (training based on required duration per candidate)",
    outcomes: ["Tube & fitting scaffolding", "System scaffolding", "Load capacities", "Fall protection"],
    countries: ["Saudi Arabia", "Kuwait", "Bahrain"],
    image: IMG.scaffolding,
  },
  {
    slug: "steel-fixer",
    title: "Steel Fixer",
    tagline: "Position and secure steel reinforcement bars in concrete.",
    duration: "Flexible (training based on required duration per candidate)",
    outcomes: ["Rebar reading", "Cutting & bending rebar", "Tying techniques", "Concrete forms"],
    countries: ["Oman", "Dubai (UAE)", "Russia"],
    image: IMG.steel_fixer,
  }
];

export const COUNTRIES = [
  {
    name: "Saudi Arabia",
    flag: "🇸🇦",
    roles: ["Welder", "Fitter", "Electrician"],
    blurb: "Long-term contracts with leading construction and industrial groups.",
  },
  {
    name: "Oman",
    flag: "🇴🇲",
    roles: ["Welder", "Fitter", "Pipe Fitter"],
    blurb: "Opportunities in infrastructure development and oil & gas facilities.",
  },
  {
    name: "Dubai (UAE)",
    flag: "🇦🇪",
    roles: ["Welder", "Fabricator", "Helper"],
    blurb: "High-demand positions in commercial construction and structural engineering.",
  },
  {
    name: "Russia",
    flag: "🇷🇺",
    roles: ["Welder", "Fitter", "Structural Worker"],
    blurb: "Large-scale industrial construction and energy sector projects.",
  },
  {
    name: "Kuwait",
    flag: "🇰🇼",
    roles: ["Welder", "Pipe Fitter", "Rigging Helper"],
    blurb: "Vast recruitment drives for refineries, ports, and petrochemical plants.",
  },
  {
    name: "Bahrain",
    flag: "🇧🇭",
    roles: ["Welder", "Fitter", "Maintenance Tech"],
    blurb: "Steady work contracts in marine repairs, shipyards, and manufacturing.",
  },
];

export const PROCESS = [
  {
    title: "Counseling",
    body: "One-on-one guidance to pick the right trade for your background and goals.",
  },
  {
    title: "Training",
    body: "Hands-on workshop hours on real machinery for the required duration.",
  },
  {
    title: "Documentation",
    body: "Passport, certificates and skill test paperwork handled end to end.",
  },
  { title: "Interview", body: "Employer interviews with mock preparation and technical drills." },
  {
    title: "Visa Processing",
    body: "Work permit and visa coordinated with trusted overseas partners.",
  },
  {
    title: "Departure",
    body: "Airport support and on-arrival guidance in the destination country.",
  },
];

export const TESTIMONIALS = [
  {
    name: "Rajesh K.",
    trade: "Welder",
    country: "Singapore",
    quote:
      "The workshop hours at SMS made the 6G test feel routine. I passed my employer interview on the first try.",
  },
  {
    name: "Suresh M.",
    trade: "Fitter",
    country: "Saudi Arabia",
    quote:
      "They handled every paper — passport, medicals, visa. All I did was focus on training and my interview.",
  },
  {
    name: "Mahesh P.",
    trade: "Electrician",
    country: "Malaysia",
    quote:
      "Trainers here have real site experience. That's what got me through the technical round.",
  },
];

export const STATS = [
  { value: 20, suffix: "+", label: "Years Experience" },
  { value: 5000, suffix: "+", label: "International Placements" },
  { value: 15, suffix: "+", label: "Countries Served" },
];
