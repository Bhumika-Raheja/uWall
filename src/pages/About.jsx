import './About.css';

function About() {
  return (
    <section className="uwall-about">
      <div className="uwall-about-hero">
        <div>
          <h2>About uWall</h2>
          <p className="uwall-section-subtitle">uWall is a vibrant event and photo sharing wall built for the students of Chitkara University, Rajpura. It lives where fests, hackathons and campus moments meet.</p>
        </div>
      </div>

      <div className="uwall-about-grid">
        <div className="uwall-about-card">
          <h3>Why we built uWall</h3>
          <p>
            Every semester, posters appear on notice boards, WhatsApp groups explode with forwards, and yet people
            still miss the best events. uWall pulls everything into one simple place so you can quickly see what is
            happening next on campus.
          </p>
          <ul>
            <li>One timeline for cultural fests, hackathons and club activities.</li>
            <li>Photo memories that stay even after the event lights go off.</li>
            <li>A friendly space to celebrate student work and talent.</li>
          </ul>
        </div>

        <div className="uwall-about-card">
          <h3>How it works</h3>
          <p>uWall is intentionally lightweight so it can be used as a class or club project as well.</p>
          <ol>
            <li>Clubs announce their fests or hackathons on the Events page.</li>
            <li>Students log in and upload photos from the event to the shared Gallery.</li>
            <li>Each photo is tagged with the club and date, and also appears when you open that club.</li>
          </ol>
          <p>
            Behind the scenes this version stores data in the browser only, making it safe for demos while still
            feeling like a real product.
          </p>
        </div>

        <div className="uwall-about-card uwall-about-team-card">
          <h3>The team behind uWall</h3>
          <ul className="uwall-about-team">
            <li>
              <strong>Bhoomi Garg</strong>
              <span>Experience & flows · Crafted the way students move between events, clubs and gallery.</span>
            </li>
            <li>
              <strong>Bhumika Raheja</strong>
              <span>UI & styling · Shaped the red & white theme and overall look and feel of the app.</span>
            </li>
            <li>
              <strong>Bhavika Mehta</strong>
              <span>Features & logic · Worked on login, signup, validation and gallery behaviour.</span>
            </li>
          </ul>
          <p>
            Together we wanted to design something that feels like it actually belongs to the CUIET campus, not
            just another generic template.
          </p>
        </div>
      </div>
    </section>
  );
}

export default About;
