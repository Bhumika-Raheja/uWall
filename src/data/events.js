const events = [
  {
    id: 1,
    title: 'Campus Cultural Fest & DJ Night',
    club: 'Vibiinz',
    type: 'Fest',
    date: 'Coming Soon',
    location: 'Alpha Zone',
    summary:
      'Music, dance and DJ night with live performances from campus artists and a featured singer or guest DJ (to be announced).',
    details:
      'High-energy cultural evening featuring group dances, solo performances, informal games and a late-night DJ set. The fest is meant to bring together students from all branches to relax after midsems and celebrate campus life. Expect a dedicated performance block by campus bands, followed by a featured singer or guest DJ (to be announced) closing the night. The event will also include photo booths, food stalls and a chill sitting area where friends can take a break between performances. The flow of the evening usually moves from an opening welcome and performance round, into a fun interaction and games segment, and finally a long open DJ floor where everyone can dance together. Throughout the evening, Vibiinz coordinators and faculty mentors will manage stage, crowd and lighting so that students can simply enjoy, perform and later revisit the highlights on uWall, where the best crowd shots, backstage moments and performance stills will be put together like a mini aftermovie in photo form.',
    description:
      'Music, dance and DJ night with live performances from campus artists and a featured singer or guest DJ (to be announced).',
  },
  {
    id: 2,
    title: 'Stand-up & Open Mic Night',
    club: 'Chitkara Meridian',
    type: 'Fest',
    date: 'Coming Soon',
    location: 'Exporetorium',
    summary:
      'Stand-up comedy, poetry, and open mic performances headlined by a campus comedian (to be announced).',
    details:
      'A relaxed evening of stand-up comedy, storytelling and poetry curated by Chitkara Meridian. The show will be headlined by a campus comedian (to be announced) with multiple student slots available for open mic performances. Participants can register in advance or on-the-spot, and the best acts will be featured later on uWall as highlight clips and photos. The night is usually structured into warm-up and first-timer slots, a main round with curated performers, and a final headliner plus crowd-favourite recap so that everyone gets a clear stage flow. Between sets there will be short games, crowd interactions and feedback segments where senior performers share what worked on stage and what to improve. Behind the scenes, Meridian volunteers will handle lights, sound and registrations so that performers only focus on their set, while the uWall media team quietly moves around the room capturing reactions, punchline moments and backstage nervousness that will later turn into a cozy, story-like recap of the night.',
    description:
      'Stand-up comedy, poetry, and open mic performances headlined by a campus comedian (to be announced).',
  },
  {
    id: 3,
    title: '24-Hour Hackathon',
    club: 'IEEE CUIET',
    type: 'Hackathon',
    date: '30–31 November',
    location: 'CUIET Block',
    summary:
      'Build innovative solutions with your team and mentors from industry and academia over a 24-hour sprint on 30–31 November.',
    details:
      'Intense 24-hour coding sprint organised by IEEE CUIET where teams build prototypes around real engineering and campus problems. The hackathon will begin with problem statement briefing, team icebreakers and a quick tour of available resources. After that, teams usually move through a loose set of rounds: ideation and rough architecture, an overnight build round focused on shipping a working prototype, and a final demo round where they pitch to judges and answer questions. Through the night you will ship features in focused sprints, get feedback from mentors and capture photos of your journey for uWall. Morning check-ins will help teams refine their pitch before the final demo in front of faculty and invited industry judges. Winning projects and memorable moments from the lab will later be featured as a dedicated uWall story so that your work lives on even after the hackathon is over.',
    prizes: [
      '₹25,000+ total prize pool across innovation, impact and design categories.',
      'Best Innovation: ₹10,000 + feature on the official IEEE CUIET page and uWall highlights.',
      'Best Campus Problem Solver: ₹7,500 for the team that builds the most useful solution for students.',
      'Best Design & UX: ₹5,000 + special mention in the post-event photo story.',
      'All finalists receive certificates, goodies and priority access to upcoming IEEE CUIET workshops.',
    ],
    coordinators: [
      'Faculty Coordinator: Dr. Neha Sharma (Assistant Professor, CSE).',
      'Faculty Co‑Coordinator: Er. Manish Verma (Assistant Professor, CSE).',
      'Student Lead: Ananya Gupta (Chair, IEEE CUIET).',
      'Tech Head: Rahul Mehta (Backend & DevOps).',
      'Design & Media: Simran Kaur (Design Thinking Club).',
      'Operations & Logistics: Aditya Singh (3rd Year CSE).',
    ],
    agenda: [
      '09:00–10:00 — Inauguration, rules briefing and release of final problem statements.',
      '10:00–13:00 — Coding Sprint I with mentor desk open for doubt‑clearing.',
      '13:00–14:00 — Lunch break + quick photo check‑in for uWall gallery.',
      '14:00–20:00 — Coding Sprint II, UI polishing and mid‑evaluation by mentors.',
      '20:00–22:00 — Fun break, games corner and late‑night snacks.',
      '22:00–08:00 — Overnight build marathon, debugging and pitch preparation.',
      '08:00–10:00 — Final presentations, judging and prize distribution.',
    ],
    description:
      'Build innovative solutions with your team and mentors from industry and academia over a 24-hour sprint on 30–31 November.',
  },
  {
    id: 4,
    title: 'Club Hiring & Volunteer Drive',
    club: 'All Clubs', // label shown on card
    clubs: [
      'Vibiinz',
      'Chitkara Meridian',
      'IEEE CUIET',
      'GFG CUIET',
      'ACM Student Chapter',
      'Design Thinking Club',
      'Coding Ninjas Chapter',
    ], // clubs participating in this joint drive, used for filtering
    type: 'Hiring',
    date: 'This Semester',
    location: 'Martin Luther Lecture Hall 5',
    summary:
      'Multiple cultural and technical clubs are hiring coordinators, anchors, mentors and core team volunteers in one combined drive.',
    details:
      'A joint recruitment drive where multiple cultural and technical clubs present what they do and open up positions for first and second-year students. Vibiinz is hiring event coordinators and backstage managers, Chitkara Meridian is looking for anchors and social media leads, IEEE CUIET and GFG CUIET want tech mentors and problem setters, while Design Thinking Club and Coding Ninjas Chapter are building their core organising teams. The flow of the drive generally follows three phases: a common introduction round where all clubs quickly pitch themselves, a free networking and Q&A round where students move to different corners and clarify doubts, and a preference-form round where interested students write down their top choices and basic details. The hall will slowly turn into a networking space where students walk around different club corners, ask questions about workload and events, and fill preference forms with the help of seniors. Selected volunteers will get priority to appear in club photos and behind-the-scenes content that later appears on uWall, so this single drive almost works like a gateway to both responsibility on campus and regular appearances in event stories.',
    description:
      'Multiple cultural and technical clubs are hiring coordinators, anchors, mentors and core team volunteers in one combined drive.',
  },
  {
    id: 5,
    title: 'Google Internship Drive (SDE)',
    club: 'Training & Placement Cell',
    type: 'Placement',
    date: 'Coming Soon',
    location: 'Chitkara University, Rajpura',
    summary:
      'Google Software Development Intern recruitment drive with pre-placement talk and online coding round.',
    details:
      'Official Google internship hiring process for Software Development Intern positions coordinated by the Training & Placement Cell. The drive will include a detailed pre-placement talk, an online coding assessment and subsequent interview shortlisting. Students can use this space on uWall to track timelines, required documents and reminders so they do not miss any important communication from the T&P Cell. Typically, the process starts with registrations and resume checks (Round 0), followed by a company session where Googlers walk through team culture and expectations before the online test window opens. Round 1 is usually an online coding assessment, while Round 2 and Round 3 are technical and HR interviews for shortlisted students. In short, the flow is: registrations, resume checks, company session by Googlers, online test and then interviews. Once results are announced, uWall can capture group photos, quick interviews and short reflections from selected interns so that juniors later have a clear reference for how the drive felt on campus.',
    description:
      'Google Software Development Intern recruitment drive with pre-placement talk and online coding round.',
  },
  {
    id: 6,
    title: 'Amazon Placement Drive (SDE-1)',
    club: 'Training & Placement Cell',
    type: 'Placement',
    date: 'Coming Soon',
    location: 'Chitkara University, Rajpura',
    summary:
      'Amazon SDE-1 on-campus placement drive with coding rounds and technical interviews.',
    details:
      'Comprehensive on-campus recruitment process for Amazon SDE-1 roles with multiple coding rounds and technical interviews. The Training & Placement Cell will share exact dates, eligibility criteria and practice resources before the drive. Through this event page, students can quickly review the process flow, keep track of announcements and later browse photos from the pre-placement talk and final selection ceremony. Seniors who crack the drive can also be featured here, making it easier for juniors to connect and ask guidance questions.\n\nRounds overview:\nRound 0 – Registration and pre-placement talk.\nOnline assessment round filtering candidates based on problem solving.\nMultiple technical and behavioral interview rounds focusing on data structures, algorithms and Amazon leadership principles.\n\nThe process finishes with offer announcements, reactions in the lecture hall and small celebration moments that can be documented on uWall so future batches understand what the Amazon drive on this campus actually feels like.',
    description:
      'Amazon SDE-1 on-campus placement drive with coding rounds and technical interviews.',
  },
];

export default events;
