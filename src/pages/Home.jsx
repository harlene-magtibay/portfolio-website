import React from "react";
import { Link } from "react-router-dom";
import "../styles/home.css";
import About from "./About";

const Home = () => {
  return (
    <div className="container home-container py-2">
      <div
        id="home"
        className="row align-items-center flex-column-reverse flex-md-row"
      >
        <div className="col-md-6 text-center text-md-start mt-3 mt-md-0 mb-5 mb-md-0">
          <p className="text-secondary mb-0 greeting">Hello, I'm</p>
          <h1 className="mb-0 myName">Harlene Magtibay</h1>
          <h2 className="fw-normal subtitle" style={{ color: "#0077b6" }}>
            Computer Engineer <span style={{ color: "#5a5a5a" }}>|</span> Web
            Developer
          </h2>
          <p className="fs-5 text-muted mt-3">
            Developing clean, functional, and modern software for real-world
            impact.
          </p>

          <div className="mt-4 d-flex flex-wrap gap-3 justify-content-center justify-content-md-start">
            <Link
              to="/projects"
              style={{ textDecoration: "none", color: "#ffffff" }}
            >
              <button className="fw-bold py-2 downloadButton">
                Download CV
              </button>
            </Link>
            <Link
              to="/contact"
              style={{ textDecoration: "none", color: "#3a4f75" }}
            >
              <button className="fw-bold py-2 contactButton">Contact Me</button>
            </Link>
          </div>
        </div>

        {/* Right side — profile image */}
        <div className="col-md-6 text-center pt-5">
          <img
            src="/images/harlene.png"
            alt="Profile"
            className="profile-image img-fluid"
            style={{ maxWidth: "83.5%", height: "auto", margin: "0 auto" }}
          />
        </div>
      </div>

      <About />
    </div>
  );
};

export default Home;
