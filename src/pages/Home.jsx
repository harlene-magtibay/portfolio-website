import React from "react";
import { Link } from "react-router-dom";
import "../styles/home.css";

const Home = () => {
  return (
    <div className="container py-2">
      <div className="row align-items-center">
        {/* Left side — text */}
        <div className="col-md-6 text-center text-md-start mb-5 mb-md-0 ps-3">
          <p className="fs-2 text-secondary mb-0 greeting">Hello, I'm</p>
          <h1 className="mb-0 myName">Harlene Magtibay</h1>
          <h3 className="fw-normal" style={{ color: "#0077b6" }}>
            Computer Engineer <span style={{ color: "#5a5a5a" }}>|</span> Web
            Developer
          </h3>
          <p className="fs-5 text-muted mt-3">
            Developing clean, functional, and modern software for real-world
            impact.
          </p>

          <div className="mt-4 d-flex gap-3 justify-content-center justify-content-md-start">
            <button className="rounded-pill fw-bold fs-5 py-2 downloadButton">
              <Link
                to="/projects"
                style={{ textDecoration: "none", color: "#ffffff" }}
              >
                Download CV
              </Link>
            </button>
            <button className="rounded-pill fw-bold fs-5 py-2 contactButton">
              <Link
                to="/contact"
                style={{ textDecoration: "none", color: "#ffffff" }}
              >
                Contact Me
              </Link>
            </button>
          </div>
        </div>

        {/* Right side — profile image */}
        <div className="col-lg-6 text-center d-flex justify-content-center pt-5">
          <img
            src="/images/harlene.png"
            alt="Profile"
            className="img-fluid"
            style={{ maxWidth: "510px", height: "auto" }}
          />
        </div>
      </div>

      <div>
        <h1 className="align-center">About Me</h1>
      </div>
    </div>
  );
};

export default Home;
