import { useState } from 'react';
import { useNavigate, Link } from 'react-router-dom';
import './Auth.css';

function Login() {
  const [email, setEmail] = useState('');
  const [password, setPassword] = useState('');
  const [error, setError] = useState('');
  const navigate = useNavigate();

  const handleSubmit = (e) => {
    e.preventDefault();
    if (!email.endsWith('@chitkara.edu.in')) {
      setError('Please use your official university email ID (example@chitkara.edu.in).');
      return;
    }
    if (!password) {
      setError('Please enter your password.');
      return;
    }

    const storedUsers = JSON.parse(localStorage.getItem('uwall-users') || '[]');
    const matchedUser = storedUsers.find(
      (user) => user.email === email && user.password === password,
    );

    if (!matchedUser) {
      setError('No account found for this email. Please sign up first.');
      return;
    }

    const currentUser = { email: matchedUser.email, name: matchedUser.name };
    localStorage.setItem('uwall-current-user', JSON.stringify(currentUser));
    setError('');
    navigate('/home');
  };

  const handleForgotPassword = () => {
    alert('Password reset is not implemented in this prototype.');
  };

  return (
    <section className="uwall-auth">
      <div className="uwall-auth-card">
        <h2>Login to uWall</h2>
        <p className="uwall-section-subtitle">
          Access campus events and your photo wall with your official <strong>email ID</strong>.
        </p>
        <form onSubmit={handleSubmit} className="uwall-auth-form">
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
            Don&apos;t have an account? <Link to="/signup">Sign up</Link>
          </p>
          <button type="submit" className="uwall-primary-button">
            Login
          </button>
          <p className="uwall-auth-forgot">
            Forgot your password?{' '}
            <button type="button" onClick={handleForgotPassword}>
              Click here
            </button>
          </p>
        </form>
      </div>
    </section>
  );
}

export default Login;
