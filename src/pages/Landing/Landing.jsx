import "./Landing.css";
import { useEffect } from "react";
import AOS from "aos";
import "aos/dist/aos.css";
import { Carousel } from "bootstrap";
import Hyperspeed from "../../components/reactBites/HyperSpeed";
import TextType from "../../components/reactBites/TextRevel";

export default function Landing() {
  useEffect(() => {
    AOS.init({ duration: 1000, once: true });

    const carousel = document.querySelector("#testimonialCarousel");
    if (carousel) {
      new Carousel(carousel, {
        interval: 4000,
        ride: "carousel",
      });
    }
  }, []);

  return (
    <div className="landing-wrapper">
      <div className="container-fluid min-vh-100 d-flex flex-column position-relative">
        {/* Hero Section with Hyperspeed background */}
        <main
          className="hero-section position-relative flex-grow-1 d-flex align-items-center px-4 py-3"
          data-aos="fade-up"
        >
          <Hyperspeed />
          <div className="container">
            <div className="row align-items-center">
              {/* Left Column: Animated Text + Buttons */}
              <div className="col-md-6 text-center text-md-start mb-4 mb-md-0 ">
                <h2 className="mb-3 text-white fs-1">Connect. Mentor. Grow.</h2>

                <TextType
                  text="Elevana is a mentorship and networking platform designed to bridge the gap between alumni and students. Elevana empowers every member to share their journey and grow together."
                  as="p"
                  className="lead text-light mb-3"
                  style={{ maxWidth: "700px" }}
                  typingSpeed={40}
                  initialDelay={1000}
                  showCursor={false}
                />

                <div className="d-flex justify-content-center justify-content-md-start gap-3 mb-4">
                  <a href="/signup" className="btn btn-warning">
                    Get Started
                  </a>
                  <a href="/login" className="btn btn-outline-light">
                    Log In
                  </a>
                </div>
                {/* <p className="text-light" style={{ maxWidth: "700px" }}>
                  Whether you're seeking guidance, offering support, or building
                  meaningful connections—Elevana is your space to thrive. From
                  career advice to collaborative events.
                </p> */}
              </div>

              {/* Right Column: Hero Image */}
              <div className="col-md-6 text-center">
                <img
                  src="/big_image_bg-removebg-preview.png"
                  alt="Elevana Hero Visual"
                  className="hero-image img-fluid"
                  style={{
                    width: "85%",
                    background: "transparent",
                  }}
                />
              </div>
            </div>
          </div>
        </main>

        {/* Feature Highlights */}
        <section className="container py-5" data-aos="fade-up">
          <div className="row text-center">
            <div className="col-md-4 mb-4 feature-card" data-aos="zoom-in">
              <h4 className="text-primary">🤝 Alumni Mentorship</h4>
              <p className="text-secondary">
                Connect with experienced alumni for guidance, career advice, and
                personal growth.
              </p>
            </div>
            <div
              className="col-md-4 mb-4 feature-card"
              data-aos="zoom-in"
              data-aos-delay="100"
            >
              <h4 className="text-primary">📚 Student Support</h4>
              <p className="text-secondary">
                Find the resources and mentorship needed to take your academic
                and professional journey further.
              </p>
            </div>
            <div
              className="col-md-4 mb-4 feature-card"
              data-aos="zoom-in"
              data-aos-delay="200"
            >
              <h4 className="text-primary">🌐 Community Events</h4>
              <p className="text-secondary">
                Join webinars, workshops, and meetups that foster real
                connections and learning.
              </p>
            </div>
          </div>
        </section>

        {/* Impact Stats */}
        <section className="container py-5 text-center" data-aos="fade-up">
          <div className="row">
            <div className="col-md-4">
              <h2 className="text-primary">2,500+</h2>
              <p className="text-light">Active Members</p>
            </div>
            <div className="col-md-4">
              <h2 className="text-primary">800+</h2>
              <p className="text-light">Mentorship Matches</p>
            </div>
            <div className="col-md-4">
              <h2 className="text-primary">120+</h2>
              <p className="text-light">Events Hosted</p>
            </div>
          </div>
        </section>

        {/* Trusted Logos */}
        <section className="container py-4 text-center" data-aos="fade-up">
          <p className="text-light mb-3">Trusted by communities across:</p>
          <div className="d-flex justify-content-center gap-4 flex-wrap">
            <img src="/logo1.png" alt="University A" className="logo" />
            <img src="/logo2.png" alt="Company B" className="logo" />
            <img src="/logo3.png" alt="Org C" className="logo" />
          </div>
        </section>

        {/* Testimonials */}
        {/* <section className="container pb-5" data-aos="fade-up">
          <h4 className="text-center text-white mb-4">What Our Members Say</h4>
          <div
            id="testimonialCarousel"
            className="carousel slide position-relative"
            data-bs-ride="carousel"
          >
            <div className="carousel-indicators custom-indicators">
              <button
                type="button"
                data-bs-target="#testimonialCarousel"
                data-bs-slide-to="0"
                className="active"
                aria-current="true"
                aria-label="Slide 1"
              ></button>
              <button
                type="button"
                data-bs-target="#testimonialCarousel"
                data-bs-slide-to="1"
                aria-label="Slide 2"
              ></button>
              <button
                type="button"
                data-bs-target="#testimonialCarousel"
                data-bs-slide-to="2"
                aria-label="Slide 3"
              ></button>
              <button
                type="button"
                data-bs-target="#testimonialCarousel"
                data-bs-slide-to="3"
                aria-label="Slide 4"
              ></button>
            </div>

            <div className="carousel-inner text-center">
              <div className="carousel-item active">
                <blockquote className="blockquote">
                  <p>
                    "Elevana helped me reconnect with my alumni mentor and land
                    my first internship!"
                  </p>
                  <footer className="blockquote-footer">
                    Riya S., Student
                  </footer>
                </blockquote>
              </div>
              <div className="carousel-item">
                <blockquote className="blockquote">
                  <p>
                    "I’ve mentored three students this year—Elevana makes it
                    easy and meaningful."
                  </p>
                  <footer className="blockquote-footer">
                    Sourav M., Alumni
                  </footer>
                </blockquote>
              </div>
              <div className="carousel-item">
                <blockquote className="blockquote">
                  <p>
                    "The events and job board helped me discover opportunities I
                    never knew existed."
                  </p>
                  <footer className="blockquote-footer">
                    Tanvi R., Student
                  </footer>
                </blockquote>
              </div>
              <div className="carousel-item">
                <blockquote className="blockquote">
                  <p>
                    "Elevana is more than a platform—it's a community that truly
                    cares."
                  </p>
                  <footer className="blockquote-footer">
                    Arjun D., Alumni
                  </footer>
                </blockquote>
              </div>
            </div>

            <button
              className="carousel-control-prev"
              type="button"
              data-bs-target="#testimonialCarousel"
              data-bs-slide="prev"
            >
              <span
                className="carousel-control-prev-icon"
                aria-hidden="true"
              ></span>
              <span className="visually-hidden">Previous</span>
            </button>
            <button
              className="carousel-control-next"
              type="button"
              data-bs-target="#testimonialCarousel"
              data-bs-slide="next"
            >
              <span
                className="carousel-control-next-icon"
                aria-hidden="true"
              ></span>
              <span className="visually-hidden">Next</span>
            </button>
          </div>
        </section> */}
        <section
          className="testimonial-section container py-5"
          data-aos="fade-up"
        >
          <h4 className="text-center text-white mb-5 fs-2 fw-bold">
            💬 What Our Members Say
          </h4>

          <div
            id="testimonialCarousel"
            className="carousel slide"
            data-bs-ride="carousel"
          >
            <div className="carousel-inner">
              {[
                {
                  quote:
                    "Elevana helped me reconnect with my alumni mentor and land my first internship!",
                  author: "Riya S., Student",
                },
                {
                  quote:
                    "I’ve mentored three students this year—Elevana makes it easy and meaningful.",
                  author: "Sourav M., Alumni",
                },
                {
                  quote:
                    "The events and job board helped me discover opportunities I never knew existed.",
                  author: "Tanvi R., Student",
                },
                {
                  quote:
                    "Elevana is more than a platform—it's a community that truly cares.",
                  author: "Arjun D., Alumni",
                },
              ].map((testimonial, index) => (
                <div
                  className={`carousel-item ${index === 0 ? "active" : ""}`}
                  key={index}
                >
                  <div className="testimonial-card mx-auto">
                    <blockquote className="blockquote mb-0">
                      <p className="testimonial-quote">“{testimonial.quote}”</p>
                      <footer className="blockquote-footer text-light mt-3">
                        {testimonial.author}
                      </footer>
                    </blockquote>
                  </div>
                </div>
              ))}
            </div>

            <div className="carousel-indicators custom-indicators">
              {[0, 1, 2, 3].map((i) => (
                <button
                  key={i}
                  type="button"
                  data-bs-target="#testimonialCarousel"
                  data-bs-slide-to={i}
                  className={i === 0 ? "active" : ""}
                  aria-current={i === 0 ? "true" : undefined}
                  aria-label={`Slide ${i + 1}`}
                ></button>
              ))}
            </div>

            <button
              className="carousel-control-prev"
              type="button"
              data-bs-target="#testimonialCarousel"
              data-bs-slide="prev"
            >
              <span
                className="carousel-control-prev-icon"
                aria-hidden="true"
              ></span>
              <span className="visually-hidden">Previous</span>
            </button>
            <button
              className="carousel-control-next"
              type="button"
              data-bs-target="#testimonialCarousel"
              data-bs-slide="next"
            >
              <span
                className="carousel-control-next-icon"
                aria-hidden="true"
              ></span>
              <span className="visually-hidden">Next</span>
            </button>
          </div>
        </section>

        {/* CTA Banner */}
        <div className="container my-5" data-aos="fade-up">
          <section className="cta-banner bg-warning text-white text-center p-5 rounded shadow">
            <h4 className="mb-3 fw-semibold">
              Stay in the loop with Elevana updates
            </h4>
            <p className="mb-4 text-light">
              Get notified about new mentorship opportunities, events, and
              platform features.
            </p>
            <a href="/signup" className="btn btn-outline-light btn-lg px-4">
              Join the Community
            </a>
          </section>
        </div>
      </div>
    </div>
  );
}
