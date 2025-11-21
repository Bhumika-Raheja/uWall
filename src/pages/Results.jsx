import { useMemo, useState } from 'react';
import { Link } from 'react-router-dom';
import './Results.css';
import { placementResults, hiringResults, hackathonWinners } from '../data/results';

function Results() {
  const [sortOrder, setSortOrder] = useState('newest');

  const parseDate = (value) => new Date(value);

  const sortedPlacements = useMemo(() => {
    return [...placementResults].sort((a, b) => {
      const da = parseDate(a.announcedOn || `${a.year}-01-01`);
      const db = parseDate(b.announcedOn || `${b.year}-01-01`);
      return sortOrder === 'newest' ? db - da : da - db;
    });
  }, [sortOrder]);

  const sortedHiring = useMemo(() => {
    return [...hiringResults].sort((a, b) => {
      const da = parseDate(a.announcedOn || `${a.year}-01-01`);
      const db = parseDate(b.announcedOn || `${b.year}-01-01`);
      return sortOrder === 'newest' ? db - da : da - db;
    });
  }, [sortOrder]);

  const sortedHackathons = useMemo(() => {
    return [...hackathonWinners].sort((a, b) => {
      const da = parseDate(a.announcedOn || `${a.year}-01-01`);
      const db = parseDate(b.announcedOn || `${b.year}-01-01`);
      return sortOrder === 'newest' ? db - da : da - db;
    });
  }, [sortOrder]);

  return (
    <section className="uwall-results">
      <h2>Results & Highlights</h2>
      <p className="uwall-section-subtitle"></p>
      <div className="uwall-results-toolbar">
        <label>
          Sort by:&nbsp;
          <select value={sortOrder} onChange={(e) => setSortOrder(e.target.value)}>
            <option value="newest">Newest to oldest</option>
            <option value="oldest">Oldest to newest</option>
          </select>
        </label>
      </div>

      <div className="uwall-results-section">
        {sortedPlacements.map((result) => (
          <article key={result.id} className="uwall-results-card">
            <h4>
              {result.company} &mdash; {result.role} ({result.year})
            </h4>
            <p className="uwall-results-meta">
              Drive: {result.driveTitle} &bull; Results announced on {result.announcedOn}
            </p>
            <p>{result.summary}</p>
            <p className="uwall-results-subheading">Selected students:</p>
            <ul>
              {result.selectedStudents.map((student) => (
                <li key={student}>{student}</li>
              ))}
            </ul>
          </article>
        ))}
      </div>

      <div className="uwall-results-section">
        {sortedHiring.map((drive) => (
          <article key={drive.id} className="uwall-results-card">
            <h4>
              {drive.club} &mdash; {drive.driveTitle} ({drive.year})
            </h4>
            <p className="uwall-results-meta">Results announced on {drive.announcedOn}</p>
            <p>{drive.summary}</p>
            <p className="uwall-results-subheading">Selected students:</p>
            <ul>
              {drive.selectedStudents.map((student) => (
                <li key={student}>{student}</li>
              ))}
            </ul>
            <p className="uwall-results-subheading">Roles offered:</p>
            <ul>
              {drive.roles.map((role) => (
                <li key={role}>{role}</li>
              ))}
            </ul>
          </article>
        ))}
      </div>

      <div className="uwall-results-section">
        {sortedHackathons.map((hack) => (
          <article key={hack.id} className="uwall-results-card">
            <h4>
              {hack.eventTitle} &mdash; {hack.year}
            </h4>
            <p className="uwall-results-meta">
              Organiser: {hack.organiser} &bull; Results announced on {hack.announcedOn}
            </p>
            <p>{hack.summary}</p>
            <p className="uwall-results-photos-link">
              <Link to={`/gallery?club=${encodeURIComponent(hack.organiser)}`}>
                View photos of winning teams and demos in the Gallery
              </Link>
            </p>
            <div className="uwall-results-winners">
              {hack.winners.map((winner) => (
                <div key={winner.teamName + winner.position} className="uwall-results-winner">
                  <h5>
                    {winner.position}: {winner.teamName}
                  </h5>
                  <p className="uwall-results-meta">Project: {winner.projectTitle}</p>
                  <p className="uwall-results-subheading">Team members:</p>
                  <ul>
                    {winner.members.map((member) => (
                      <li key={member}>{member}</li>
                    ))}
                  </ul>
                  <p>{winner.highlight}</p>
                </div>
              ))}
            </div>
          </article>
        ))}
      </div>
    </section>
  );
}

export default Results;
