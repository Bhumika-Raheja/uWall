const placementResults = [
  {
    id: 1,
    year: '2025',
    announcedOn: '15 Feb 2025',
    company: 'Google',
    role: 'Software Development Intern',
    driveTitle: 'Google Internship Drive (SDE)',
    summary:
      'Students selected for Google Software Development Intern roles through the official on-campus internship drive.',
    selectedStudents: [
      'Aarav Sharma (CSE)',
      'Simran Kaur (CSE)',
      'Rohan Mehta (CSE)',
    ],
  },
  {
    id: 2,
    year: '2025',
    announcedOn: '20 Feb 2025',
    company: 'Amazon',
    role: 'SDE-1',
    driveTitle: 'Amazon Placement Drive (SDE-1)',
    summary:
      'Final year students selected for full-time SDE-1 roles at Amazon through the on-campus placement drive.',
    selectedStudents: [
      'Priya Verma (CSE)',
      'Kartik Singh (CSE)',
      'Nisha Gupta (CSE)',
    ],
  },
];

const hiringResults = [
  {
    id: 1,
    year: '2025',
    announcedOn: '10 Mar 2025',
    club: 'Vibiinz',
    driveTitle: 'Vibiinz Hiring 2025',
    summary:
      'Confirmed list of Vibiinz coordinators and core members selected during the club hiring and volunteer drive.',
    selectedStudents: ['Aarav Sharma', 'Muskan Thakur', 'Harshdeep Singh', 'Priya Sharma'],
    roles: ['Event Coordinator', 'Backstage Manager', 'Social Media Volunteer'],
  },
  {
    id: 2,
    year: '2025',
    announcedOn: '10 Mar 2025',
    club: 'Chitkara Meridian',
    driveTitle: 'Chitkara Meridian Hiring 2025',
    summary:
      'Official announcement of anchors, writers and stage managers selected for Chitkara Meridian.',
    selectedStudents: ['Rohan Khurana', 'Aditi Singh', 'Manan Bhatia'],
    roles: ['Anchor', 'Content Writer', 'Stage Manager'],
  },
  {
    id: 3,
    year: '2025',
    announcedOn: '10 Mar 2025',
    club: 'IEEE CUIET',
    driveTitle: 'IEEE CUIET Hiring 2025',
    summary:
      'Technical mentors, problem setters and organisers selected to run IEEE CUIET hackathons and workshops.',
    selectedStudents: ['Ananya Gupta', 'Rahul Mehta', 'Ishaan Verma', 'Sneha Patel'],
    roles: ['Technical Mentor', 'Problem Setter', 'Event Organiser'],
  },
];

const hackathonWinners = [
  {
    id: 1,
    year: '2025',
    announcedOn: '25 Nov 2025',
    eventTitle: '24-Hour Hackathon',
    organiser: 'IEEE CUIET',
    summary:
      'Top teams that built impactful prototypes during the 24-hour hackathon at CUIET block.',
    winners: [
      {
        position: '1st Place',
        teamName: 'Team AlphaBits',
        projectTitle: 'Smart Campus Issue Tracker',
        members: ['Ananya Gupta', 'Rahul Mehta', 'Ishaan Verma', 'Sneha Patel'],
        highlight:
          'Built a full-stack app to report and track campus infrastructure issues with real-time updates for students.',
      },
      {
        position: '2nd Place',
        teamName: 'Night Owls',
        projectTitle: 'StudyBuddy Scheduler',
        members: ['Simran Kaur', 'Karan Singh', 'Tanya Arora'],
        highlight:
          'Created a collaborative scheduler that helps students find common free slots and book study rooms.',
      },
      {
        position: 'Best Design & UX',
        teamName: 'Pixel Pioneers',
        projectTitle: 'EventPulse',
        members: ['Riya Sharma', 'Mohit Jain'],
        highlight:
          'Designed a clean, mobile-first interface for discovering campus events and saving favourites.',
      },
    ],
  },
];

export { placementResults, hiringResults, hackathonWinners };
