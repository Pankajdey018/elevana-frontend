import "./Footer.css";

export default function Footer() {
  return (
    <footer className="footer">
      <div className="footer-container container-fluid">
        {/* Top Section */}
        <div className="container mb-5 ">
          <div className="row">
            <div className="footer-brand col-6 p-3 mb-3">
              <h4>Elevana</h4>
              <p>Empowering mentorship through connection and trust.</p>
            </div>
            <div className="col-6">
              <form className="newsletter-form">
                <label htmlFor="email" className="newsLetter">
                  Subscribe to our newsletter
                </label>
                <div className="newsletter-input">
                  <input type="email" id="email" placeholder="Your email" />
                  <button type="submit">Subscribe</button>
                </div>
              </form>
            </div>
          </div>
        </div>
        {/* Middle Section */}
        <div className="footer-links-grid">
          <div>
            <h6>Platform</h6>
            <ul>
              <li>
                <a href="/">Home</a>
              </li>
              <li>
                <a href="/dashboard">Dashboard</a>
              </li>
              <li>
                <a href="/directory">Directory</a>
              </li>
              <li>
                <a href="/events">Events</a>
              </li>
            </ul>
          </div>
          <div>
            <h6>Mentorship</h6>
            <ul>
              <li>
                <a href="/mentorship-tracker">Tracker</a>
              </li>
              <li>
                <a href="/profile">Profile</a>
              </li>
            </ul>
          </div>
          <div>
            <h6>Legal</h6>
            <ul>
              <li>
                <a href="/privacy">Privacy</a>
              </li>
              <li>
                <a href="/terms">Terms</a>
              </li>
              <li>
                <a href="/contact">Contact</a>
              </li>
            </ul>
          </div>
          <div>
            <h6>Follow Us</h6>
            <div className="social-icons">
              <a href="https://twitter.com" target="_blank" rel="noreferrer">
                <i className="bi bi-twitter"></i>
              </a>
              <a href="https://linkedin.com" target="_blank" rel="noreferrer">
                <i className="bi bi-linkedin"></i>
              </a>
              <a href="https://github.com" target="_blank" rel="noreferrer">
                <i className="bi bi-github"></i>
              </a>
            </div>
          </div>
        </div>

        {/* Bottom Section */}
        <div className="footer-bottom">
          <p>© {new Date().getFullYear()} Elevana. All rights reserved.</p>
        </div>
      </div>
    </footer>
  );
}
