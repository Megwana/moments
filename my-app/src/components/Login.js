import React, { useState } from 'react';
import { BrowserRouter as Router, Route, Link, Redirect } from 'react-router-dom';
import axios from 'axios';

const Login = () => {
    const [isLoggedIn, setIsLoggedIn] = useState(false);
    const [email, setEmail] = useState('');
    const [password, setPassword] = useState('');
  
    const handleEmailChange = (e) => {
      setEmail(e.target.value);
    };
  
    const handlePasswordChange = (e) => {
      setPassword(e.target.value);
    };
  
    const handleLogin = async (e) => {
      e.preventDefault();
      try {
        const response = await axios.post('http://localhost:5000/login', { email, password });
        if (response.data.token) {
          localStorage.setItem('token', response.data.token);
          setIsLoggedIn(true);
        }
      } catch (error) {
        console.error('Login failed:', error);
      }
    };
  
    const handleLogout = () => {
      localStorage.removeItem('token');
      setIsLoggedIn(false);
    };
  
    return (
      <Router>
        <div>
          <nav>
            <ul>
              <li>
                <Link to="/">Home</Link>
              </li>
              <li>
                {isLoggedIn ? (
                  <button onClick={handleLogout}>Logout</button>
                ) : (
                  <Link to="/login">Login</Link>
                )}
              </li>
            </ul>
          </nav>
  
          <Route exact path="/">
            <h1>Welcome to the Home page</h1>
            {isLoggedIn && <p>You are logged in!</p>}
          </Route>
  
          <Route exact path="/login">
            {isLoggedIn ? (
              <Redirect to="/" />
            ) : (
              <div>
                <h1>Login</h1>
                <form onSubmit={handleLogin}>
                  <div>
                    <label>Email:</label>
                    <input type="email" value={email} onChange={handleEmailChange} required />
                  </div>
                  <div>
                    <label>Password:</label>
                    <input type="password" value={password} onChange={handlePasswordChange} required />
                  </div>
                  <button type="submit">Login</button>
                </form>
              </div>
            )}
          </Route>
        </div>
      </Router>
  );
};

export default Login;
