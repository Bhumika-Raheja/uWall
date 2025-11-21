import { useEffect, useState } from 'react';
import { Link } from 'react-router-dom';
import './Home.css';

const highlightEvents = [
  {
    id: 1,
    title: 'Vibiinz Cultural Night',
    club: 'Vibiinz',
    date: 'Coming Soon',
    type: 'Fest',
  },
  {
    id: 2,
    title: 'Chitkara Meridian Open Mic',
    club: 'Chitkara Meridian',
    date: 'Coming Soon',
    type: 'Fest',
  },
  {
    id: 3,
    title: 'IEEE 24-Hour Hackathon',
    club: 'IEEE CUIET',
    date: 'Coming Soon',
    type: 'Hackathon',
  },
];

function Home() {
  const [rating, setRating] = useState('');

  useEffect(() => {
    const saved = localStorage.getItem('uwall-site-rating');
    if (saved) {
      setRating(saved);
    }
  }, []);

  const smileyOptions = [
    { value: '1', label: 'Very bad', icon: '😡' },
    { value: '2', label: 'Not good', icon: '😕' },
    { value: '3', label: 'Okay', icon: '🙂' },
    { value: '4', label: 'Good', icon: '😊' },
    { value: '5', label: 'Loved it', icon: '😄' },
  ];

  const handleRatingChange = (value) => {
    setRating(value);
    if (value) {
      localStorage.setItem('uwall-site-rating', value);
    } else {
      localStorage.removeItem('uwall-site-rating');
    }
  };

  return (
    <section className="uwall-home">
      <div className="uwall-hero">
        <div className="uwall-hero-text">
          <h2>Your campus wall for fests, hackathons & memories.</h2>
          <p>
            uWall is your central hub for discovering upcoming events at
            <strong> Chitkara University, Rajpura</strong> and sharing the best photos from campus life.
          </p>
          <p>
            Discover what&apos;s happening next, upload your favourite shots, and relive every DJ night, open mic and
            hackathon with your friends.
          </p>
          <div className="uwall-hero-actions">
            <Link to="/events" className="uwall-hero-button uwall-hero-button-primary">
              Browse Events
            </Link>
            <Link to="/gallery" className="uwall-hero-button uwall-hero-button-secondary">
              Open Gallery
            </Link>
          </div>
        </div>
        <div className="uwall-hero-highlight">
          <div>
            <h3>Why uWall?</h3>
            <ul>
              <li>One place to see all major fests, hackathons and club activities.</li>
              <li>Share event photos with your batch and your favourite clubs.</li>
              <li>Build a stronger, more connected campus community.</li>
            </ul>
          </div>
        </div>
      </div>

      <div className="uwall-home-grid">
        <div className="uwall-home-card">
          <h3>Upcoming Fests</h3>
          <p>Track cultural and literary fests organised by clubs like Vibiinz and Chitkara Meridian.</p>
        </div>
        <div className="uwall-home-card">
          <h3>Hackathons & Tech Events</h3>
          <p>Never miss a hackathon from IEEE CUIET, GFG CUIET, ACM, Design Thinking Club, Coding Ninjas and more.</p>
        </div>
        <div className="uwall-home-card">
          <h3>Photo Wall</h3>
          <p>Upload and browse event photos to capture the energy of campus and celebrate student achievements.</p>
        </div>
      </div>

      <div className="uwall-home-events">
        <h3>Highlighted events</h3>
        <p className="uwall-home-events-subtitle">Sample events to show how clubs can use uWall.</p>
        <div className="uwall-home-events-grid">
          {highlightEvents.map((event) => (
            <article key={event.id} className="uwall-home-event-card">
              <div className="uwall-home-event-tag">{event.type}</div>
              <h4>{event.title}</h4>
              <p className="uwall-home-event-meta">
                <span>{event.club}</span>
                <span>{event.date}</span>
              </p>
            </article>
          ))}
        </div>
      </div>

      <div className="uwall-home-rating">
        <h3>Rate uWall</h3>
        <p className="uwall-home-rating-text">
          How much do you like using uWall? Tap a smiley between 1 (very bad) and 5 (loved it).
        </p>
        <div className="uwall-home-rating-control">
          {smileyOptions.map((opt) => (
            <button
              key={opt.value}
              type="button"
              className={
                rating === opt.value
                  ? 'uwall-home-rating-smiley uwall-home-rating-smiley-active'
                  : 'uwall-home-rating-smiley'
              }
              onClick={() => handleRatingChange(opt.value)}
            >
              <span className="uwall-home-rating-smiley-icon">{opt.icon}</span>
              <span className="uwall-home-rating-smiley-value">{opt.value}</span>
            </button>
          ))}
          {rating && (
            <span className="uwall-home-rating-value">You rated uWall: {rating}/5</span>
          )}
        </div>
      </div>

    </section>
  );
}

export default Home;
