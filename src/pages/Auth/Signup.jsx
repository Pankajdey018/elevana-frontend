import { useState } from 'react';

export default function Signup() {
  const [role, setRole] = useState('student');

  return (
    <div className="container-fluid min-vh-100 d-flex flex-column justify-content-center align-items-center bg-white">
      <div className="w-100 px-3 px-md-5">
        <form className="bg-light p-4 p-md-5 rounded shadow w-100" style={{ maxWidth: '800px', margin: '0 auto' }}>
          <h2 className="text-center text-primary mb-4">Create Your Account</h2>

          <div className="d-flex justify-content-center mb-4">
            <button
              type="button"
              className={`btn me-2 ${role === 'student' ? 'btn-warning' : 'btn-outline-secondary'}`}
              onClick={() => setRole('student')}
            >
              Student
            </button>
            <button
              type="button"
              className={`btn ${role === 'alumni' ? 'btn-warning' : 'btn-outline-secondary'}`}
              onClick={() => setRole('alumni')}
            >
              Alumni
            </button>
          </div>

          <div className="row mb-3">
            <div className="col-md-6 mb-3 mb-md-0">
              <label className="form-label">Full Name</label>
              <input type="text" className="form-control" placeholder="Enter your name" />
            </div>
            <div className="col-md-6">
              <label className="form-label">Email</label>
              <input type="email" className="form-control" placeholder="Enter your email" />
            </div>
          </div>

          <div className="mb-4">
            <label className="form-label">Password</label>
            <input type="password" className="form-control" placeholder="Create a password" />
          </div>

          <button type="submit" className="btn btn-primary w-100">Sign Up</button>
        </form>
      </div>
    </div>
  );
}
