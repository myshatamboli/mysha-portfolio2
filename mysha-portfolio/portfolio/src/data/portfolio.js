// ──────────────────────────────────────────────────────────────────────────
// All editable content lives here. Update freely — the rest of the app
// reads from this file, so changes here update the whole site.
// ──────────────────────────────────────────────────────────────────────────

export const profile = {
  name: 'Mysha Tamboli',
  initials: 'MT',
  role: 'Founder • Entrepreneur • AI & Human Behaviour Researcher',
  tagline: 'Technology. Psychology. Entrepreneurship.
Building products at the intersection of AI, accessibility and maternal health.',
  location: 'London, UK',
  email: 'myshatamboli2@gmail.com',
  phone: '+44 7440 764111',
  cvFile: 'Mysha-Tamboli-CV.pdf',
  // TODO: replace with your real profile URLs
  socials: {
    linkedin: 'https://www.linkedin.com/in/mysha-tamboli-3b156933a/',
    github: 'https://github.com/myshatamboli',
    email: 'mailto:myshatamboli2@gmail.com'
  }
}

export const herostats = [
  stats: [
  { value: '$95,000', label: 'Tetr College Scholarship' },
  { value: '2× Top 3', label: 'Global Innovation Hackathons' },
  { value: '1 of 12', label: 'Student Leadership Team (250+ applicants)' },
  { value: '£1,000', label: 'Charity Grant Secured' }
]

export const about = {
  summary: "I'm Mysha Tamboli, a London-based founder and researcher building at the intersection of technology, human behaviour and social impact. My work spans Kangara, a FemTech maternal wellbeing venture; Echolocation, an AI accessibility platform; and independent psychology research exploring how AI affects perceived social connection. I care about turning ideas into products that feel useful, human and genuinely impactful.",
 facts: [
  { label: 'Based in', value: 'London, UK' },
  { label: 'Building', value: 'Kangara · Echolocation · AI Research' },
  { label: 'Scholarship', value: '$95,000 Tetr College of Business' },
  { label: 'Languages', value: 'English, Hindi, Urdu, Spanish, Arabic' }
],
  education: [
    {
      school: 'Lampton Academy, London',
      period: 'Aug 2024 — Jun 2026',
      detail: 'A-Levels: Biology, Chemistry, Psychology · AS Level: Mathematics'
    },
    {
      school: 'Lampton Academy, London',
      period: 'Aug 2022 — Sep 2024',
      detail:
        'GCSEs: Maths (5), English Language (6), English Literature (7), Combined Science (6/6), Drama (7), Geography (5), Spanish (7), Religious Studies (6)'
    }
  ],
  skills: {
    Technical: [
      'Research Design',
      'Data Analysis',
      'Figma',
      'Canva',
      'Gamma',
      'Presentation Design',
      'Market Research',
      'Generative AI & Prompt Engineering'
    ],
    Professional: [
      'Project Management',
      'Stakeholder Engagement',
      'Public Speaking',
      'Business Communication',
      'Leadership',
      'Strategic Thinking',
      'Event Planning'
    ]
  }
}

export const experience = [
  {
    org: "Let's Leap Sports Academy",
    role: "Deputy Manager | Activity Leader | Camp Leader",
    location: "London",
    period: "2024 – Present",
    points: [
      "Progressed from Activity Leader to Deputy Manager, trusted to oversee the day-to-day operation of after-school clubs and holiday camps.",
      "Led teams of staff, coordinated daily schedules and ensured safeguarding, health and safety, and operational standards were consistently maintained.",
      "Designed and delivered engaging educational and sports programmes for children aged 4–12, creating safe, inclusive and enjoyable learning environments.",
      "Built strong relationships with parents, schools and colleagues through clear communication, professionalism and leadership.",
      "Managed behaviour confidently while adapting activities to suit different ages, abilities and learning needs.",
      "Supported operational planning, staff coordination and problem solving in fast-paced environments serving hundreds of children."
    ]
  },

  {
    org: "Little Kickers",
    role: "Lead Football Coach | Junior Business Partner",
    location: "London",
    period: "2021 – 2026",
    points: [
      "Promoted from Football Coach to Junior Business Partner after demonstrating leadership, reliability and consistent performance.",
      "Planned and delivered football coaching sessions for children aged 18 months to 8 years, supporting confidence, teamwork and physical development.",
      "Created original coaching games and session plans which were adopted across multiple classes.",
      "Represented the organisation at community events, tournaments and promotional activities while engaging with parents and stakeholders.",
      "Mentored assistant coaches and helped maintain high coaching standards across sessions.",
      "Developed strong communication, public speaking, customer service and leadership skills through weekly delivery."
    ]
  },

  {
    org: "Lampton Academy",
    role: "Student Leadership Team Member",
    location: "London",
    period: "2025 – 2026",
    points: [
      "Selected as one of only 12 Student Leaders from over 250 applicants to represent approximately 1,500 students across the school.",
      "Organised and delivered large-scale school events including Open Evenings, Transition Days, Mock Interview Days and community initiatives.",
      "Worked closely with senior leadership, governors, teachers and external stakeholders to improve the student experience.",
      "Delivered speeches to prospective students and parents while representing the school at major events.",
      "Led mentoring initiatives supporting younger students with organisation, confidence, wellbeing and academic development.",
      "Developed project management, stakeholder engagement and leadership skills through strategic school-wide responsibilities."
    ]
  },

  {
    org: "Lampton Academy",
    role: "Psychology Ambassador & Independent Researcher",
    location: "London",
    period: "2025 – 2026",
    points: [
      "Designed and conducted an independent psychology research project investigating whether AI or humans create stronger feelings of social connection.",
      "Developed the full research methodology including experimental design, participant recruitment, ethics, data collection and statistical analysis.",
      "Presented findings exploring empathy, responsiveness, enjoyment and perceived naturalness in AI-human interaction.",
      "Represented the Psychology Department while supporting younger students with research skills and academic mentoring.",
      "Strengthened research, analytical thinking and scientific communication through an end-to-end investigation."
    ]
  },

  {
    org: "Three Bridges Primary School",
    role: "Work Experience",
    location: "London",
    period: "2023",
    points: [
      "Supported teachers in delivering classroom activities and creating engaging learning experiences for nursery pupils.",
      "Assisted children's early learning, communication and social development through play-based education.",
      "Helped organise school events and daily classroom activities while working collaboratively with teaching staff.",
      "Developed patience, adaptability and communication skills within an educational setting."
    ]
  }
];
export const projects = [
{
  name: 'Kangara',
  tag: 'FemTech',
  accent: 'gold',
  role: 'Co-Founder',

  description:
    'A wearable maternal health platform designed to improve reassurance, confidence and preventative care during late pregnancy through intelligent sensing technology.',

  problem:
    'Millions of expectant mothers experience anxiety due to uncertainty around fetal wellbeing between hospital appointments.',

  solution:
    'Designed a comfortable wearable belt using embedded sensing technology and AI-assisted monitoring to provide reassurance while encouraging appropriate clinical escalation.',

  impact: [
    'Top 3 internationally at the Tetr Global Innovation Hackathon',
    'Presented to international judges',
    'Validated with healthcare and maternal wellbeing research',
    'Developed business model, branding and product roadmap'
  ],

  technologies: [
    'AI',
    'Research',
    'Figma',
    'React',
    'Healthcare Innovation'
  ],

  image: '/images/kangara.jpg',

  website: 'https://kangara-55d.vercel.app/',

  Instagram: 'https://www.instagram.com/kangara.maternal/',

  featured: true
}
  {
  name: 'Echolocation',

  tag: 'Accessibility AI',

  accent: 'violet',

  role: 'Co-Founder',

  description:
    'An AI accessibility platform helping blind and visually impaired users navigate digital products using natural voice conversations.',

  problem:
    'Most digital products still rely heavily on visual interfaces, creating barriers for millions of visually impaired users.',

  solution:
    'Developed Echora, a conversational AI assistant capable of completing digital tasks through voice-first interaction and contextual understanding.',

  impact: [
    'International Top 3 innovation award',
    'Developed complete business strategy',
    'Created interactive prototype',
    'Built product roadmap and market validation'
  ],

  technologies: [
    'AI',
    'Accessibility',
    'Voice UX',
    'React',
    'Figma'
  ],

  image: '/images/echolocation.jpg',

  website: 'https://echolocation.squarefire.com/',

  featured: true
},
  {
  name: 'Human vs AI Social Connection',

  tag: 'Research',

  accent: 'violet',

  role: 'Independent Researcher',

  description:
    'An experimental psychology study investigating whether people experience greater social connection after conversations with humans or AI chatbots.',

  problem:
    'As conversational AI becomes increasingly common, little is understood about how these interactions influence perceived connection and empathy.',

  solution:
    'Designed and conducted a repeated-measures experiment comparing AI and human conversations using quantitative psychological measures.',

  impact: [
    'Independent psychology research project',
    'Experimental repeated-measures design',
    'Counterbalanced methodology',
    'Data analysis and presentation'
  ],

  technologies: [
    'Psychology',
    'Statistics',
    'Research Methods',
    'Data Analysis'
  ],

  image: '/images/research.jpg',

  website: 'https://www.linkedin.com/feed/update/urn:li:activity:7475552640853775360/',

  github: '',

  featured: true
},
]

export const research = {
  title: 'British Biology Olympiad',
  period: '2025',
  points: [
    'Competed in a national competition requiring application of biological knowledge beyond the curriculum.',
    'Developed advanced problem-solving and scientific reasoning under timed conditions.'
  ]
}

export const leadership = [
  {
    title: 'Student Leadership Team',
    org: 'Lampton Academy',
    period: 'Jun 2025 — Jun 2026',
    points: [
      'Selected as 1 of 12 students from 250+ applicants to represent a community of 1,500+.',
      'Planned and delivered major events: Sixth Form Open Evening, Year 12 Taster Day, Mock Interview Day, Primary Transition Day, the Osterley Sponsored Walk.',
      'Acted as a trusted liaison between students, senior leadership, staff, parents and prospective families.',
      'Delivered the keynote student speech at Sixth Form Open Evening to prospective families.'
    ]
  },
  {
    title: 'Psychology Ambassador',
    org: 'Lampton Academy',
    period: 'Ongoing',
    points: [
      'Represented the Psychology Department at school events and open evenings.',
      'Supported younger students through academic mentoring and promoted psychology across the school.'
    ]
  },
  {
    title: 'First Give Programme',
    org: 'First Give × Muslim Hands',
    period: 'Dec 2021 — May 2023',
    points: [
      'Led a student team researching community issues and developing a social action campaign.',
      'Won First Place — securing a £1,000 grant for Muslim Hands.',
      'Organised a sponsored fast involving 500 pupils and teachers, raising £300+.',
      'Invited back as a First Give Judge for 2023.'
    ]
  },
  {
    title: 'Girls Football Team Captain',
    org: 'Lampton Academy',
    period: 'Sep 2019 — Sep 2023',
    points: [
      'Captained the school football team for four years across inter-school and national competitions.',
      'Led training sessions and motivated teammates, promoting teamwork and resilience.'
    ]
  },
  {
    title: 'Future Leader Programme',
    org: 'Independent',
    period: 'Oct 2024 — Jun 2026',
    points: [
      'Completed leadership development in global leadership, cross-cultural intelligence and executive presence.',
      'Strengthened strategic thinking, networking and professional communication with students from diverse backgrounds.'
    ]
  }
]

export const awards = [
  {
    title: 'Tetr College of Business Scholarship',
    detail: '$95,000 — only female recipient from London',
    year: ''
  },
  { title: '3rd Place — International Venture Hackathon', detail: 'For Kangara', year: '' },
  { title: '3rd Place — International AI Innovation Hackathon', detail: 'For Echolocation', year: '' },
  {
    title: 'Student Leadership Team Representative',
    detail: '1 of 12 selected from 250+ applicants',
    year: ''
  },
  { title: 'First Give Winner', detail: '£1,000 grant secured for Muslim Hands', year: '' },
  { title: 'First Give Judge', detail: 'Invited back to judge the programme', year: '2023' },
  { title: 'Deputy Manager', detail: "Let's Leap Sports Academy", year: '' },
  { title: 'Football Captain', detail: '4 consecutive years', year: '' }
]

export const certifications = [
  { title: 'Advanced Safeguarding Children (Level 2)', org: 'High Speed Training', detail: 'Achieved 97%' },
  { title: 'Dentistry Work Experience', org: 'mydentist (UK)', detail: '' },
  { title: 'Healthcare Science Careers — Virtual Work Experience', org: 'NHS', detail: '' },
  { title: 'Heathrow Business Management Programme', org: 'British Airways', detail: '' },
  { title: 'Amazon Prime Video & MGM Studios', org: 'Amazon Prime', detail: 'November 2025' }
]
