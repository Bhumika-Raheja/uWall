import { Link } from 'react-router-dom';
import './Clubs.css';

const clubs = [
  {
    name: 'Vibiinz',
    type: 'Fest & Cultural',
    description:
      'High-energy cultural club. Photo placeholders here will show DJ nights, dance fests, and stage performances.',
  },
  {
    name: 'Chitkara Meridian',
    type: 'Fest & Cultural',
    description:
      'Standup and open-mic club. This placeholder represents comedy sets, poetry evenings, and open mic photos.',
  },
  {
    name: 'Literature Club',
    type: 'Fest & Cultural',
    description:
      'Campus literature hub. Future photos here can include book clubs, debates, and writing competitions.',
  },
  {
    name: 'IEEE CUIET',
    type: 'Hackathon & Tech',
    description:
      'Technical society. Placeholder for hackathon project photos, coding marathons, and tech talks.',
  },
  {
    name: 'GFG CUIET',
    type: 'Hackathon & Tech',
    description:
      'Coding and DSA club. This block will show photos from coding contests and problem-solving sessions.',
  },
  {
    name: 'ACM Student Chapter',
    type: 'Hackathon & Tech',
    description:
      'Computing community. Placeholder for research hackathons, code sprints, and CS events.',
  },
  {
    name: 'Design Thinking Club',
    type: 'Hackathon & Tech',
    description:
      'Innovation club. This area will hold photos from design sprints, prototypes, and brainstorming sessions.',
  },
  {
    name: 'Coding Ninjas Chapter',
    type: 'Hackathon & Tech',
    description:
      'Programming chapter. Placeholder for bootcamp snapshots, project demos, and coding meetups.',
  },
];

function Clubs() {
  return (
    <section className="uwall-clubs">
      <h2>Campus Clubs on uWall</h2>
      <p className="uwall-section-subtitle">These are key clubs that can host their events and upload photo highlights on uWall. Each card below is a placeholder for the stories and photos that club can share. Click on a club to view its event photos.</p>
      <div className="uwall-clubs-grid">
        {clubs.map((club) => (
          <div key={club.name} className="uwall-club-card">
            <div className="uwall-club-card-header">
              <h3>{club.name}</h3>
              <span className="uwall-club-category">{club.type}</span>
            </div>
            <p>{club.description}</p>
            <Link
              className="uwall-club-photos-link"
              to={`/gallery?club=${encodeURIComponent(club.name)}`}
            >
              View photos
            </Link>
          </div>
        ))}
      </div>
    </section>
  );
}

export default Clubs;
