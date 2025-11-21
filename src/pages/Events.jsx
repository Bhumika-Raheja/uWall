import { useState } from 'react';
import { Link } from 'react-router-dom';
import './Events.css';
import events from '../data/events';

function Events() {
  const [search, setSearch] = useState('');
  const [typeFilter, setTypeFilter] = useState('All');
  const [clubFilter, setClubFilter] = useState('All');

  const clubs = [
    'All',
    'Vibiinz',
    'Chitkara Meridian',
    'Literature Club',
    'IEEE CUIET',
    'GFG CUIET',
    'ACM Student Chapter',
    'Design Thinking Club',
    'Coding Ninjas Chapter',
  ];

  const filteredEvents = events.filter((event) => {
    const matchesSearch =
      !search ||
      event.title.toLowerCase().includes(search.toLowerCase()) ||
      event.description.toLowerCase().includes(search.toLowerCase());
    const matchesType = typeFilter === 'All' || event.type === typeFilter;
    const matchesClub =
      clubFilter === 'All' ||
      event.club === clubFilter ||
      (Array.isArray(event.clubs) && event.clubs.includes(clubFilter));
    return matchesSearch && matchesType && matchesClub;
  });

  return (
    <section className="uwall-events">
      <h2>Upcoming Events</h2>
      <p className="uwall-section-subtitle">Explore upcoming fests, hackathons and campus activities. Use search and filters to quickly find what you care about.</p>

      <div className="uwall-events-filters">
        <input
          type="text"
          placeholder="Search events by name or description"
          value={search}
          onChange={(e) => setSearch(e.target.value)}
        />
        <select value={typeFilter} onChange={(e) => setTypeFilter(e.target.value)}>
          <option value="All">All types</option>
          <option value="Fest">Fests</option>
          <option value="Hackathon">Hackathons</option>
          <option value="Hiring">Hiring / Recruitment</option>
          <option value="Placement">Placements / Internships</option>
        </select>
        <select value={clubFilter} onChange={(e) => setClubFilter(e.target.value)}>
          {clubs.map((club) => (
            <option key={club} value={club}>
              {club}
            </option>
          ))}
        </select>
      </div>

      <div className="uwall-events-grid">
        {filteredEvents.length === 0 ? (
          <p className="uwall-events-empty">No events match your filters right now.</p>
        ) : (
          filteredEvents.map((event) => (
            <article key={event.id} className="uwall-event-card">
              <Link to={`/events/${event.id}`} className="uwall-event-link">
                <div className="uwall-event-tag">{event.type}</div>
                <h3>{event.title}</h3>
                <p className="uwall-event-meta">
                  <span>{event.club}</span>
                  <span>{event.date}</span>
                  <span>{event.location}</span>
                </p>
                <p>{event.summary ?? event.description}</p>
              </Link>
            </article>
          ))
        )}
      </div>
    </section>
  );
}

export default Events;
