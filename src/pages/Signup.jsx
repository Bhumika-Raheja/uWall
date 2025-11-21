import { useState } from 'react';
import { useNavigate, Link } from 'react-router-dom';
import './Auth.css';

function Signup() {
  const [name, setName] = useState('');
  const [email, setEmail] = useState('');
  const [password, setPassword] = useState('');
  const [error, setError] = useState('');
  const navigate = useNavigate();

  const handleSubmit = (e) => {
    e.preventDefault();
    if (!email.endsWith('@chitkara.edu.in')) {
      setError('Signup is restricted to official university email IDs (example@chitkara.edu.in).');
      return;
    }
    if (!password || password.length < 6) {
      setError('Please choose a password with at least 6 characters.');
      return;
    }

    const storedUsers = JSON.parse(localStorage.getItem('uwall-users') || '[]');
    const existingUser = storedUsers.find((user) => user.email === email);
    if (existingUser) {
      setError('An account with this email already exists. Please log in instead.');
      return;
    }

    const updatedUsers = [...storedUsers, { name, email, password }];
    localStorage.setItem('uwall-users', JSON.stringify(updatedUsers));

    const currentUser = { name, email };
    localStorage.setItem('uwall-current-user', JSON.stringify(currentUser));

    setError('');
    navigate('/home');
  };

  return (
    <section className="uwall-auth">
      <div className="uwall-auth-card">
        <h2>Create your uWall account</h2>
        <p className="uwall-section-subtitle">
          Join the campus wall of events, photos, and memories using your official <strong>email ID</strong>.
        </p>
        <form onSubmit={handleSubmit} className="uwall-auth-form">
          <label>
            Full Name
            <input
              type="text"
              value={name}
              onChange={(e) => setName(e.target.value)}
              placeholder="Your name"
              required
            />
          </label>
          <label>
            Email ID
            <input
              type="email"
              value={email}
              onChange={(e) => setEmail(e.target.value)}
              placeholder="you@chitkara.edu.in"
              required
            />
          </label>
          <label>
            Password
            <input
              type="password"
              value={password}
              onChange={(e) => setPassword(e.target.value)}
              required
            />
          </label>
          {error && <p className="uwall-auth-error">{error}</p>}
          <p className="uwall-auth-hint">
            Already have an account? <Link to="/login">Login</Link>
          </p>
          <button type="submit" className="uwall-primary-button">
            Sign Up
          </button>
        </form>
      </div>
    </section>
  );
}

export default Signup;
