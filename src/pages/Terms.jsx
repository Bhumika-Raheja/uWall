import './Legal.css';

function Terms() {
  return (
    <section className="uwall-legal">
      <h2>Terms & Conditions</h2>

      <div className="uwall-legal-summary">
        <h3>Short version</h3>
        <ul>
          <li>uWall is a student project made for the Chitkara University community.</li>
          <li>Be respectful, only upload content you have rights to, and keep it campus-focused.</li>
          <li>Clubs own their events; uWall is just the digital bulletin board.</li>
        </ul>
      </div>

      <h3>1. Who uWall is for</h3>
      <p>
        uWall is primarily designed for students, faculty, and authorised members of Chitkara University,
        Rajpura. It should be treated as a community space, similar to a digital notice board plus photo wall.
      </p>

      <h3>2. Content you share</h3>
      <ul>
        <li>
          You are responsible for the event details and photos you upload. Please share only content that you have
          the right to use.
        </li>
        <li>
          Keep photos relevant to campus life &mdash; fests, hackathons, club meets, academic and cultural events.
        </li>
        <li>
          Do not upload abusive, hateful, or inappropriate content, or anything that could seriously harm someone&rsquo;s
          reputation.
        </li>
      </ul>

      <h3>3. Event accuracy</h3>
      <p>
        uWall does not replace official university communication. We try to present events clearly, but final
        decisions about timings, venues, passes, and eligibility always belong to the organising clubs or
        departments. Always check with the organisers if something is important for you.
      </p>

      <h3>4. Photos & media usage</h3>
      <ul>
        <li>Upload photos that you are comfortable sharing with other students and faculty.</li>
        <li>Avoid posting close-up photos of someone who would not want to be on a public wall.</li>
        <li>
          Because this is a student project, your photos are only meant to be displayed inside uWall and in demos of
          the project.
        </li>
      </ul>

      <h3>5. Changes to these terms</h3>
      <p>
        As uWall evolves for coursework or future improvements, we may refine these terms. If you continue using the
        site after updates, it means you agree with the latest version.
      </p>
    </section>
  );
}

export default Terms;
