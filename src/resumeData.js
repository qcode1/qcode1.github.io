const resumeData = {
  name: "Nii Quateboye Quartey",
  role: "Senior Web Engineer & Engineering Lead",
  headline: ["Leading teams that build", "software people", "rely on every day."],
  headlineAccent: "rely on",
  roleDescription:
    "I lead the engineering of large-scale web platforms for government and enterprise clients, owning the architecture, the delivery and the partnerships that make them work.",
  email: "niiboye@binarybridge.work",
  address: "Accra, Ghana",
  website: "https://qcode1.github.io",
  socialLinks: [
    { name: "linkedin", url: "https://www.linkedin.com/in/niiquateboyequartey/" },
    { name: "github", url: "https://github.com/qcode1" },
  ],

  stats: [
    { value: "6+", label: "years building production software" },
    { value: "33+", label: "countries with systems activated alongside local partners" },
    { value: "4", label: "continents of banking & payment partners" },
    { value: "99.9%", label: "uptime delivered against client SLAs" },
  ],

  aboutTitle: ["Software is the easy part.", "Trust is the product."],
  aboutme: [
    "I build the digital front doors that institutions are judged by. A visa applied for from a living room on the other side of the world. A citizen abroad who can be reached when it matters most. A small shop that keeps selling on WhatsApp long after its owner has gone to bed.",
    "The code was never the hard part. The hard part is the room: public servants, diplomats, bankers and engineers who speak different languages and answer to different people. I translate between them, turn competing priorities into one plan, and carry it through with partners on four continents.",
  ],
  aboutDirection:
    "Where I'm headed: bringing trustworthy AI to the businesses and public services that usually get it last. Grounded in real data. Secured to audit standard. Built for people, not demos.",

  competencies: [
    {
      title: "Engineering Leadership",
      text: "Set technical direction, lead architecture and code reviews, and mentor engineers to raise the bar on quality and pace of delivery.",
    },
    {
      title: "Client & Stakeholder Management",
      text: "Serve as the trusted technical lead for government, diplomatic and enterprise clients, translating priorities and risk into clear decisions.",
    },
    {
      title: "Partnerships & Integrations",
      text: "Coordinate banks, payment providers and technology partners across multiple countries to deliver integrations that meet each market's requirements.",
    },
    {
      title: "Secure, Reliable Delivery",
      text: "Champion secure-by-design practice, automated delivery pipelines and proactive monitoring for platforms that cannot go down.",
    },
  ],

  work: [
    {
      company: "INNOBIZ ICT Solutions",
      role: "IT Manager & Senior Software Engineer",
      period: "2020 – Present",
      location: "Accra · Pretoria",
      impact:
        "Lead engineering of the digital visa and consular platform behind 40+ diplomatic missions in 33+ countries: 400,000+ applications a year and climbing, helping welcome more than 1 million travellers to Ghana since 2020.",
      stack: [],
    },
    {
      company: "BinaryBridge",
      role: "Founder & CTO",
      period: "2024 – Present",
      location: "Accra",
      impact:
        "Founded and lead an AI company helping Ghanaian SMEs automate sales and operations, shipping LLM agents and RAG products as containerised cloud services.",
      stack: ["LLM Agents", "RAG", "MCP", "Docker", "Cloud"],
    },
    {
      company: "Nsano",
      role: "Software Engineer · Fintech",
      period: "2019 – 2020",
      location: "Accra",
      impact:
        "Built payment infrastructure on Ghana's national interbank switch, cut reconciliation effort by 70% and helped win a $250,000 government-backed innovation grant.",
      stack: ["Python", "Flask", "REST APIs", "Payments"],
    },
  ],

  education: [
    { school: "GIMPA", logo: "images/schools/gimpa.webp", detail: "MSc Digital Forensics & Cyber Security", period: "2026 – Present" },
    { school: "ALX / Udacity", logo: "images/schools/udacity.webp", detail: "Cloud Developer Nanodegree", period: "2022" },
    { school: "Ashesi University", logo: "images/schools/ashesi.webp", detail: "BSc Computer Science", period: "2014 – 2019" },
  ],

  certifications: [{ name: "ISO/IEC 27001:2022 Lead Auditor", period: "2025" }],

  leadership: [
    {
      org: "EVOQ Memorial Foundation",
      role: "Volunteer, Digital & Fundraising Lead",
      period: "2016 – Present",
      text: "Lead the Foundation's digital presence and annual Breast Cancer Awareness fundraising campaigns.",
    },
  ],

  // Logos come from simple-icons (see components/About.jsx); names must match there.
  tools: ["React", "TypeScript", "Node.js", "Python", "PostgreSQL", "Docker", "Google Cloud", "GitHub Actions", "Cloudflare", "MongoDB", "MySQL", "Flask", "Linux", "Claude"],

  skillStack: [
    "Engineering Leadership",
    "Client Management",
    "Stakeholder Alignment",
    "Strategic Partnerships",
    "Solution Architecture",
    "Team Mentoring",
    "Delivery Management",
    "Secure SDLC",
    "ISO/IEC 27001",
    "AWS",
    "AI Strategy",
  ],

  portfolio: [
    {
      name: "Online Consular Management System",
      description: "Secure online visa and consular services used by Ghana's diplomatic missions worldwide.",
      imgurl: "images/portfolio/ocms.webp",
    },
    {
      name: "ACRE",
      description: "Property management platform that keeps properties, residents, visits, work and payments in one place.",
      imgurl: "images/portfolio/acre.webp",
      url: "https://acre.binarybridge.work",
    },
    {
      name: "SapAgent",
      description: "AI WhatsApp agent that answers customers and runs orders and payments for small businesses, 24/7.",
      imgurl: "images/portfolio/sapagent.webp",
      url: "https://sap.binarybridge.work",
    },
  ],
};

export default resumeData;
