export const IMG = {
  welding: "/images/welding-booths.jpg",
  office: "/images/office.jpg",
  reception: "/images/reception.jpg",
  logo: "/images/sms-logo.png",
};

export const CONTACT = {
  phone: "+91 9177988688",
  whatsapp: "919177988688",
  email: "smsabroadrecruitment@gmail.com",
  address:
    "Training provided for the required time, followed by interviews and overseas placement support.",
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
    slug: "welder",
    title: "Welder",
    tagline: "Learn skills employers abroad actively hire for.",
    duration: "Flexible (training based on required duration per candidate)",
    outcomes: [
      "6G / 3G welding techniques",
      "Arc, MIG & TIG proficiency",
      "Blueprint reading",
      "Safety & PPE standards",
    ],
    countries: ["Saudi Arabia", "Oman", "Dubai (UAE)", "Russia", "Kuwait", "Bahrain"],
  },
  {
    slug: "fitter",
    title: "Fitter",
    tagline: "Hands-on workshop training for real jobs.",
    duration: "Flexible (training based on required duration per candidate)",
    outcomes: [
      "Pipe & structural fitting",
      "Precision measurement",
      "Rigging fundamentals",
      "On-site safety practice",
    ],
    countries: ["Saudi Arabia", "Oman", "Dubai (UAE)", "Russia", "Kuwait", "Bahrain"],
  },
  {
    slug: "diesel-mechanic",
    title: "Diesel Mechanic",
    tagline: "High demand opportunities across multiple countries.",
    duration: "Flexible (training based on required duration per candidate)",
    outcomes: [
      "Heavy vehicle engines",
      "Hydraulics & electrical systems",
      "Preventive maintenance",
      "Fault diagnostics",
    ],
    countries: ["Saudi Arabia", "Oman", "Dubai (UAE)", "Kuwait"],
  },
  {
    slug: "other-trades",
    title: "Other Trades",
    tagline: "Additional industry-focused programs.",
    duration: "Flexible (training based on required duration per candidate)",
    outcomes: [
      "Electrician basics",
      "Scaffolder training",
      "Helper roles",
      "Skill testing support",
    ],
    countries: ["Multiple GCC countries"],
  },
];

export const COUNTRIES = [
  {
    name: "Saudi Arabia",
    flag: "🇸🇦",
    roles: ["Welder", "Fitter", "Diesel Mechanic"],
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
    trade: "Diesel Mechanic",
    country: "Malaysia",
    quote:
      "Trainers here have real site experience. That's what got me through the technical round.",
  },
];

export const STATS = [
  { value: 20, suffix: "+", label: "Years Experience" },
  { value: 5000, suffix: "+", label: "International Placements" },
  { value: 3, suffix: "+", label: "Countries Served" },
];
