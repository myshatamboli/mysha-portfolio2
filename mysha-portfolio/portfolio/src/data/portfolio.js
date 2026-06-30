// ──────────────────────────────────────────────────────────────────────────
// All editable content lives here. Update freely — the rest of the app
// reads from this file, so changes here update the whole site.
// ──────────────────────────────────────────────────────────────────────────

export const profile = {
  name: 'Mysha Tamboli',
  initials: 'MT',
  role: 'Founder · Researcher · Student Leader',
  tagline: "Turning curiosity into action — through ventures, research and people.",
  location: 'London, United Kingdom',
  email: 'myshatamboli2@gmail.com',
  phone: '+44 7440 764111',
  cvFile: '/Mysha-Tamboli-CV.pdf',
  // TODO: replace with your real profile URLs
  socials: {
    linkedin: 'https://linkedin.com/in/myshatamboli',
    github: 'https://github.com/myshatamboli',
    email: 'mailto:myshatamboli2@gmail.com'
  }
}

export const heroStats = [
  { label: '$95,000', sub: 'Tetr Scholarship' },
  { label: '1 of 12', sub: 'Student Leaders, 250+ applicants' },
  { label: '2× 3rd Place', sub: 'Global Innovation Hackathons' },
  { label: '£1,000', sub: 'Grant secured, First Give' }
]

export const about = {
  summary:
    "A proactive, entrepreneurial A-Level graduate with experience spanning project management, research, leadership, coaching, innovation and stakeholder engagement. Selected as one of twelve Student Leadership Team representatives from over 250 applicants, promoted to Deputy Manager at Let's Leap Sports Academy, and awarded a $95,000 Tetr College of Business scholarship — recognised for turning curiosity into action through independent research, venture development and leadership initiatives.",
  facts: [
    { label: 'Based in', value: 'London, UK' },
    { label: 'Studying', value: 'A-Levels — Biology, Chemistry, Psychology' },
    { label: 'Scholarship', value: 'Tetr College of Business — $95,000' },
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
    role: 'Deputy Manager / After School Care Activity Leader / Camp Activity Leader',
    location: 'London',
    period: '2024 — Present',
    points: [
      'Coordinated daily operations across after-school clubs and holiday camps.',
      'Supervised staff, coordinated programme delivery, and supported day-to-day management.',
      'Built relationships with parents, schools and external stakeholders.',
      'Managed safeguarding, behaviour and welfare for children aged 4 to 12.'
    ]
  },
  {
    org: 'Little Kickers',
    role: 'Lead Assistant Football Coach',
    location: 'London',
    period: '2024 — 2025',
    points: [
      'Independently delivered football sessions for children aged 18 months to 10 years.',
      'Built relationships with parents through regular feedback on development and progression.',
      'Mentored newer coaches and supported delivery of large group sessions.',
      'Coordinated tournaments and events with fellow coaches.'
    ]
  },
  {
    org: 'Three Bridges Primary School',
    role: 'Work Experience',
    location: 'London',
    period: 'Jun 2024 — Jul 2024',
    points: [
      'Assisted teachers in classroom management and lesson delivery.',
      'Supported students with learning activities, fostering a positive environment.',
      'Helped organise and execute school events and activities.'
    ]
  }
]

export const projects = [
  {
    name: 'Kangara',
    tag: 'FemTech',
    accent: 'gold',
    role: 'Co-Founder',
    summary:
      'An award-winning maternal wellbeing wearable, designed to improve reassurance and confidence during late pregnancy.',
    points: [
      'Conducted market research, user research, competitor analysis and business validation.',
      'Collaborated with professionals across biotechnology, biomedical engineering, healthcare and maternal wellbeing to validate the concept.',
      'Designed the commercial model, product positioning and venture strategy.',
      'Presented to an international judging panel — 3rd Place in a global venture hackathon spanning 52+ countries.'
    ],
    link: 'https://kangara-55dg.vercel.app/'
  },
  {
    name: 'Echolocation',
    tag: 'Accessibility AI',
    accent: 'violet',
    role: 'Co-Founder',
    summary:
      'An AI-driven accessibility venture focused on improving independence for blind, visually impaired and paraplegic users.',
    points: [
      'Designed Echora — a voice-first AI assistant concept enabling natural-conversation navigation of everyday tasks.',
      'Conducted user, market and competitor research to validate the product concept.',
      'Developed the business model, value proposition, go-to-market strategy and product roadmap.',
      'Presented to international judges — 3rd Place at an AI innovation hackathon.'
    ],
    link: 'https://echolocation.squarefire.com.mx/'
  },
  {
    name: 'AI & Perceived Social Connection',
    tag: 'Psychology Research',
    accent: 'violet',
    role: 'Independent Researcher',
    summary:
      'A repeated-measures psychological study comparing perceived social connection following conversations with humans versus AI chatbots.',
    points: [
      'Designed the research methodology and semi-structured conversation prompts; managed ethics and data collection.',
      'Applied statistical analysis across qualitative and quantitative data.',
      'Reflected critically on methodology, limitations and future applications in digital communication.',
      "Presented conclusions on AI's impact on empathy, responsiveness and perceived social connection."
    ],
    link: null
  }
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
