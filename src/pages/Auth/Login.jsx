import { useEffect } from "react";
import AOS from "aos";
import "aos/dist/aos.css";
import "./Login.css";

export default function Login() {
  useEffect(() => {
    AOS.init({ duration: 1000, once: true });
  }, []);

  return (
    <div className="container-fluid min-vh-100 d-flex justify-content-center align-items-center">
      <div className="login-card bg-light text-dark p-5 rounded shadow" data-aos="fade-up">
        <h2 className="mb-4 text-center text-primary">Welcome Back</h2>
        <form>
          <div className="mb-3">
            <label htmlFor="email" className="form-label">Email address</label>
            <input type="email" className="form-control" id="email" placeholder="you@example.com" required />
          </div>
          <div className="mb-4">
            <label htmlFor="password" className="form-label">Password</label>
            <input type="password" className="form-control" id="password" placeholder="••••••••" required />
          </div>
          <button type="submit" className="btn btn-warning w-100">Log In</button>
        </form>
        <p className="mt-3 text-center">
          Don't have an account? <a href="/signup" className="text-primary">Sign up</a>
        </p>
      </div>
    </div>
  );
}
