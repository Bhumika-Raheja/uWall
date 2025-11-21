import { useParams, Link } from 'react-router-dom';
import events from '../data/events';
import './Events.css';

function EventDetails() {
  const { id } = useParams();
  const eventId = Number(id);
  const event = events.find((e) => e.id === eventId);

  if (!event) {
    return (
      <section className="uwall-events">
        <h2>Event not found</h2>
        <p className="uwall-events-empty">We couldn&apos;t find this event. It may have been removed.</p>
        <p>
          <Link to="/events">Back to all events</Link>
        </p>
      </section>
    );
  }

  return (
    <section className="uwall-events">
      <h2>Event Details</h2>

      <div className="uwall-event-detail">
        <div className="uwall-event-detail-header">
          <h3>{event.title}</h3>
          <Link to="/events">Back to events</Link>
        </div>
        <p className="uwall-event-detail-meta">
          <strong>Organiser:</strong> {event.club} | <strong>Type:</strong> {event.type} | <strong>Date:</strong>{' '}
          {event.date} | <strong>Location:</strong> {event.location}
        </p>
        <p>{event.details ?? event.description}</p>

        {event.type === 'Placement' && (
          <p className="uwall-event-detail-note">
            Placement selections and final results for this drive can be summarised later on the{' '}
            <Link to="/results">Results</Link> page.
          </p>
        )}

        {event.type === 'Hiring' && (
          <p className="uwall-event-detail-note">
            Final lists of selected coordinators and volunteers from this hiring drive can be captured on the{' '}
            <Link to="/results">Results</Link> page.
          </p>
        )}

        {event.type === 'Hackathon' && (
          <p className="uwall-event-detail-note">
            Winning teams, runner-ups and special awards from this hackathon can be highlighted later on the{' '}
            <Link to="/results">Results</Link> page.
          </p>
        )}

        {Array.isArray(event.prizes) && event.prizes.length > 0 && (
          <div className="uwall-event-detail-section">
            <h4>Prizes &amp; Rewards</h4>
            <ul>
              {event.prizes.map((prize, index) => (
                <li key={index}>{prize}</li>
              ))}
            </ul>
          </div>
        )}

        {Array.isArray(event.coordinators) && event.coordinators.length > 0 && (
          <div className="uwall-event-detail-section">
            <h4>Core Coordinators</h4>
            <ul>
              {event.coordinators.map((coordinator, index) => (
                <li key={index}>{coordinator}</li>
              ))}
            </ul>
          </div>
        )}

        {Array.isArray(event.agenda) && event.agenda.length > 0 && (
          <div className="uwall-event-detail-section">
            <h4>Schedule at a Glance</h4>
            <ul>
              {event.agenda.map((item, index) => (
                <li key={index}>{item}</li>
              ))}
            </ul>
          </div>
        )}
      </div>
    </section>
  );
}

export default EventDetails;
