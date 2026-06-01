export const personalInfo = {
  firstName: 'Ahmad',
  lastName: 'Raza',
  name: 'Ahmad raza',
  role: 'Software Engineer & Full Stack Developer',
  tagline: 'Building scalable web experiences with the MERN stack.',
  location: 'Chennai, India',
  email: 'ahmadraza00211@gmail.com',
  linkedin: 'https://linkedin.com/in/ahmadraza1911',
  github: 'https://github.com/ahmadraza20021119',
  cgpa: '7.56',
  profileImage: '/profile.png',
  aboutText: [
    "I'm a <strong>passionate Software Engineer & Full Stack Developer</strong> specializing in the MERN stack, currently pursuing my B.Tech in Computer Science at Dr. MGR Educational & Research Institute, Chennai.",
    "I've presented a <strong>research paper at ICCET 2026</strong> on a Student Security System using RFID & GPS — combining hardware and software for real-world impact.",
    "Certified by <strong>Google/Kaggle, JPMorgan, Deloitte</strong> & Apna College. Always building, always learning."
  ],
  stats: [
    { num: '6', lbl: 'Projects' },
    { num: '6', lbl: 'Certs' },
    { num: '7.56', lbl: 'CGPA' }
  ]
};

export const skills = [
  { icon: '⚛️', title: 'Frontend', sub: 'Responsive UIs', tags: ['React.js', 'HTML5', 'CSS3', 'Bootstrap', 'EJS'] },
  { icon: '🟢', title: 'Backend', sub: 'APIs & server logic', tags: ['Node.js', 'Express.js', 'REST APIs', 'Kafka'] },
  { icon: '🗄️', title: 'Databases', sub: 'Data modeling', tags: ['MongoDB', 'MySQL', 'H2'] },
  { icon: '☕', title: 'Languages', sub: 'Core programming', tags: ['JavaScript', 'Java', 'HTML', 'CSS'] },
  { icon: '🛠️', title: 'Tools', sub: 'Dev workflow', tags: ['Git', 'GitHub', 'Postman', 'Redux'] },
  { icon: '🤖', title: 'AI & Learning', sub: 'Expanding horizons', tags: ['AI Agents', 'TypeScript', 'Docker', 'Next.js'] }
];

export const projects = [
  {
    icon: '🏡', colorClass: 'c1',
    title: 'Wanderlust (Airbnb Clone)',
    desc: 'Dynamic travel accommodation web app with secure user authentication, full CRUD operations, and modular RESTful backend architecture. Deployed live on Render.',
    tags: ['Node.js', 'Express', 'MongoDB', 'EJS'],
    live: 'https://wanderlust-j5f2.onrender.com/listings',
    github: 'https://github.com/ahmadraza20021119/Wanderlust'
  },
  {
    icon: '🥗', colorClass: 'c2',
    title: 'HealthyDiet Food App',
    desc: 'Full-stack food delivery web app using the MERN stack with secure UPI checkout integration. Redux-based cart management and authenticated REST APIs.',
    tags: ['React', 'Redux', 'Node.js', 'MongoDB'],
    github: 'https://github.com/ahmadraza20021119/HealthyDiet-Food-App'
  },
  {
    icon: '⛅', colorClass: 'c3',
    title: 'Apna Mausam — Weather App',
    desc: 'Real-time weather application that fetches live weather data by city. Built with JavaScript, consuming public weather APIs for dynamic data display.',
    tags: ['JavaScript', 'REST API', 'HTML', 'CSS'],
    github: 'https://github.com/ahmadraza20021119/Weather-app',
    live: 'https://apna-mausam-app.onrender.com'
  },
  {
    icon: '🎵', colorClass: 'c4',
    title: 'Spotify Clone',
    desc: 'Pixel-perfect Spotify UI clone with responsive layout, music player controls, and sidebar navigation. Built with pure HTML and CSS.',
    tags: ['HTML5', 'CSS3', 'UI/UX'],
    github: 'https://github.com/ahmadraza20021119/Spotify'
  },
  {
    icon: '🖼️', colorClass: 'c5',
    title: 'WallVibe — Wallpaper App',
    desc: 'A wallpaper browsing and download application built with JavaScript. Integrates with image APIs to serve high-quality wallpapers in various categories.',
    tags: ['JavaScript', 'REST API', 'HTML', 'CSS'],
    github: 'https://github.com/ahmadraza20021119/wallvibe'
  },
  {
    icon: '🔒', colorClass: 'c6',
    title: 'Student Security System — RFID & GPS',
    desc: 'RFID & GPS-based system for real-time attendance monitoring and live location tracking. Research paper presented at ICCET 2026 in Chennai.',
    tags: ['MERN', 'RFID', 'GPS', 'IoT'],
    github: 'https://github.com/ahmadraza20021119/Student-Security-System',
    customLink: { url: '/Research Paper.pdf', text: 'Research 📄' }
  }
];

export const experiences = [
  {
    role: 'Research Paper Presentation', date: 'Mar 2026',
    company: 'ICCET 2026 — 14th International Conference · Chennai, India',
    desc: 'Presented "Student Security System using RFID and GPS" — an IoT + MERN stack system for real-time student tracking. Co-authored with team from Dr. MGR Educational & Research Institute.',
    tags: ['RFID', 'GPS', 'MERN', 'IoT', 'Research']
  },
  {
    role: '5-Day AI Agents Intensive', date: 'Dec 2025',
    company: 'Google & Kaggle · Remote',
    desc: "Earned Kaggle badge for completing Google's intensive AI Agents course — covering LLM-based agent design, tool use, multi-agent systems and prompt engineering.",
    tags: ['AI Agents', 'LLMs', 'Google', 'Kaggle']
  },
  {
    role: 'Software Engineering Virtual Experience', date: 'Oct 2025',
    company: 'JPMorgan Chase & Co. · Remote (Forage)',
    desc: 'Completed job simulation — Project Setup, Kafka Integration, H2 Integration, REST API Integration and REST API Controller. Real-world engineering practices.',
    tags: ['Kafka', 'H2 DB', 'REST APIs', 'Java']
  },
  {
    role: 'Data Analytics Virtual Experience', date: 'Apr 2025',
    company: 'Deloitte Australia · Remote (Forage)',
    desc: 'Completed data analysis and forensic technology simulations. Worked through real-world tasks performed by Deloitte professionals in analytics and enterprise data.',
    tags: ['Data Analytics', 'Forensic Tech', 'Deloitte']
  },
  {
    role: 'B.Tech — Computer Science & Engineering', date: '2022–2026',
    company: 'Dr. MGR Educational & Research Institute · Chennai',
    desc: 'CGPA 7.56. Completed Full Stack Web Development (Apna College Delta) and DSA with Java (Apna College Alpha) alongside academics. NSS National Integration Camp 2025 awardee.',
    tags: ['Full Stack', 'DSA', 'Java', 'NSS']
  }
];

export const PDF_PATHS = {
  deloitte: '/deloitte_completion_certificate.pdf',
  delta: '/certificate-sigma-8.pdf',
  jpmorgan: '/JPMORGAN CHASE CERTIFICATE.pdf',
  aiagents: '/5-Day AI Agents Intensive Course with Google.pdf',
  dsa: '/certificate-DSA with Java.pdf',
  publication: '/conference certificate.pdf',
};

export const certificates = [
  {
    key: 'publication', colorClass: 'c6', logo: '📄',
    issuer: 'ICCET 2026 · OSIET',
    title: 'Certificate of Presentation — Student Security System using RFID & GPS',
    date: '22–23 March 2026 · Chennai, India',
    modalTitle: 'Research Publication — ICCET 2026'
  },
  {
    key: 'jpmorgan', colorClass: 'c1', logo: '🏦',
    issuer: 'JPMorgan Chase & Co. · Forage',
    title: 'Software Engineering Job Simulation',
    date: 'October 29, 2025',
    modalTitle: 'JPMorgan Chase — Software Engineering'
  },
  {
    key: 'aiagents', colorClass: 'c2', logo: '🤖',
    issuer: 'Google & Kaggle',
    title: '5-Day AI Agents Intensive Course with Google',
    date: 'December 18, 2025',
    modalTitle: 'Google AI Agents Intensive — Kaggle Badge'
  },
  {
    key: 'deloitte', colorClass: 'c3', logo: '📊',
    issuer: 'Deloitte Australia · Forage',
    title: 'Data Analytics Job Simulation',
    date: 'April 19, 2025',
    modalTitle: 'Deloitte Australia — Data Analytics'
  },
  {
    key: 'delta', colorClass: 'c4', logo: '🌐',
    issuer: 'Apna College',
    title: 'Delta Batch — Full Stack Web Development (MERN)',
    date: 'Completed 2025',
    modalTitle: 'Apna College — Full Stack Web Development'
  },
  {
    key: 'dsa', colorClass: 'c5', logo: '☕',
    issuer: 'Apna College',
    title: 'Alpha Batch — DSA with Java',
    date: 'Completed 2024',
    modalTitle: 'Apna College — DSA with Java'
  }
];
