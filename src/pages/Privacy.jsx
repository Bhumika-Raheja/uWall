import './Legal.css';

function Privacy() {
  return (
    <section className="uwall-legal">
      <h2>Privacy Policy</h2>

      <div className="uwall-legal-summary uwall-legal-summary-alt">
        <h3>Overview</h3>
        <ul>
          <li>uWall is a student-built event and photo sharing platform for the Chitkara University community.</li>
          <li>We collect only the information needed to let you log in, post events and share photos.</li>
          <li>We do not sell your data or use it for advertising.</li>
        </ul>
      </div>

      <h3>Information we collect</h3>
      <p>
        When you use uWall, we may collect the following categories of information:
      </p>
      <ul>
        <li>
          <strong>Account information:</strong> your name and university email ID (for example, your
          @chitkara.edu.in address) so we can create an account and attribute content to you.
        </li>
        <li>
          <strong>Event information:</strong> details you or clubs provide about events, including titles,
          descriptions, timings, locations and associated clubs.
        </li>
        <li>
          <strong>Photos and media:</strong> images you upload from campus events, along with the selected club,
          event date and optional captions.
        </li>
        <li>
          <strong>Basic usage information:</strong> non-sensitive information about how you move through the app
          (for example which pages are visited) that may be used solely to improve the project experience.
        </li>
      </ul>

      <h3>How we use your information</h3>
      <p>Your information is used to:</p>
      <ul>
        <li>Authenticate you and allow you to log in to uWall.</li>
        <li>Display your events and photos to other authenticated users of the platform.</li>
        <li>Show event history and photo galleries by club and by date.</li>
        <li>Improve the design and functionality of uWall as a student project.</li>
      </ul>

      <h3>Local storage and cookies</h3>
      <p>
        The current version of uWall primarily uses your browser&rsquo;s local storage to keep you signed in and to store
        demo data such as events and photos. This means your data is tied to the device and browser you are using. If
        you clear your browser data, the stored information will be removed.
      </p>

      <h3>Data sharing</h3>
      <p>
        uWall is a small-scale educational project. We do not sell your personal information or share it with third-
        party advertisers. Your content may be visible to:
      </p>
      <ul>
        <li>Other students and faculty who log in to uWall.</li>
        <li>Teachers or evaluators reviewing the project as part of coursework or portfolio assessment.</li>
      </ul>

      <h3>Data retention</h3>
      <p>
        Because this version of uWall stores most data in your browser, it is retained only for as long as it
        remains in your local storage. Future versions that use a real backend may define specific retention periods,
        which will be explained in an updated version of this policy.
      </p>

      <h3>Your choices and rights</h3>
      <ul>
        <li>You can choose what events and photos to upload, and you may avoid uploading sensitive content.</li>
        <li>You can clear your browser data to remove locally stored information from this demo.</li>
        <li>
          In a future backend-connected version, you will be able to request removal or correction of your stored
          data through the project maintainers.
        </li>
      </ul>

      <h3>Security</h3>
      <p>
        As a student project, uWall uses basic security practices appropriate for coursework. No system can be 100%
        secure, but we aim to follow good development standards and avoid collecting more data than necessary.
      </p>

      <h3>Changes to this Privacy Policy</h3>
      <p>
        We may update this Privacy Policy from time to time as uWall evolves. When we make changes, we will update
        the date in the project repository or documentation. Your continued use of uWall after changes are posted
        means that you accept the revised Policy.
      </p>

      <h3>Contact</h3>
      <p>
        If you have questions about this Privacy Policy or how uWall handles information, please contact the student
        creators or the supervising faculty member responsible for this project.
      </p>
    </section>
  );
}

export default Privacy;
