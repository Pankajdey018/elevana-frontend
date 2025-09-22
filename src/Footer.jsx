import "./Footer.css";
import TwitterIcon from "@mui/icons-material/Twitter";
import LinkedInIcon from "@mui/icons-material/LinkedIn";
import GitHubIcon from "@mui/icons-material/GitHub";
import InstagramIcon from "@mui/icons-material/Instagram";
import EmailIcon from "@mui/icons-material/Email";

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

          <div className="footer-social">
            <h6>Follow Us</h6>
            <div className="social-icons">
              <a href="https://twitter.com" target="_blank" rel="noreferrer">
                <TwitterIcon sx={{ color: "#1DA1F2", fontSize: 28 }} />
              </a>
              <a href="https://linkedin.com" target="_blank" rel="noreferrer">
                <LinkedInIcon sx={{ color: "#0077B5", fontSize: 28 }} />
              </a>
              <a href="https://github.com" target="_blank" rel="noreferrer">
                <GitHubIcon sx={{ color: "#333", fontSize: 28 }} />
              </a>
              <a href="https://instagram.com" target="_blank" rel="noreferrer">
                <InstagramIcon sx={{ color: "#E1306C", fontSize: 28 }} />
              </a>
              <a
                href="mailto:hello@elevana.com"
                target="_blank"
                rel="noreferrer"
              >
                <EmailIcon sx={{ color: "#D44638", fontSize: 28 }} />
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
