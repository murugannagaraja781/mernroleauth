import React from "react";
import "./Home.css";

export default function Home() {
  return (
    <div className="home">
      <header className="navbar">
        <div className="logo">MyApp</div>
        <nav>
          <a href="#features">Features</a>
          <a href="#about">About</a>
          <a href="#contact">Contact</a>
        </nav>
      </header>

      <section className="hero">
        <h1>Welcome to MyApp</h1>
        <p>Your trusted platform for modern solutions.</p>
        <button>Get Started</button>
      </section>

      <section id="features" className="features">
        <div className="feature-card">
          <h3>Fast</h3>
          <p>Optimized for speed and efficiency.</p>
        </div>
        <div className="feature-card">
          <h3>Secure</h3>
          <p>Built with top-level security standards.</p>
        </div>
        <div className="feature-card">
          <h3>Reliable</h3>
          <p>Always available when you need it most.</p>
        </div>
      </section>

      <footer>
        <p>© {new Date().getFullYear()} MyApp. All rights reserved.</p>
      </footer>
    </div>
  );
}
