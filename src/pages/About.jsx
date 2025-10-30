import React from "react";
import "../styles/about.css";

const About = () => {
  return (
    <section id="about" className="about-section text-light py-5">
      <div className="container">
        {/* Title */}
        <h2 className="text-center mb-4 about-title">About Me</h2>

        {/* Description */}
        <p className="about-description text-center mx-auto mb-5">
          I’m a Computer Engineer and Web Developer dedicated to building clean,
          efficient, and modern software solutions. My work focuses on creating
          responsive and user-friendly applications that combine functionality
          with sleek, minimal design.
          <br />
          <br />
          With experience in both front-end and back-end development, I enjoy
          transforming technical concepts into practical, real-world tools. I
          value performance, reliability, and simplicity in every project I work
          on, aiming to deliver results that are both visually appealing and
          technically sound.
          <br />
          <br />
          I’m continuously exploring new technologies and improving my skills to
          stay current in the fast-paced world of software development.
        </p>

        {/* Cards Section */}
        <div className="row justify-content-center">
          {/* Education */}
          <div className="col-lg-4 col-md-6 mb-4">
            <div className="about-card p-1 text-center h-100">
              <div className="education d-flex justify-content-center align-items-center mb-2">
                <h4 className="mb-0 educationText">Education</h4>
              </div>

              <h5>
                <strong>Bachelor of Science in Computer Engineering</strong>
              </h5>
              <p>
                <strong>Batangas State University</strong>
                <br />
                - The National Engineering University
                <br />
                Aug 2021 - July 2025
              </p>
            </div>
          </div>

          {/* Work Experience */}
          <div className="col-lg-4 col-md-6 mb-4">
            <div className="about-card p-1 text-center h-100">
              <div className="work d-flex justify-content-center align-items-center mb-2">
                <h4 className="mb-0 educationText">Work Experience</h4>
              </div>
              <h5>
                <strong>Web Developer Intern</strong>
              </h5>
              <p>
                <strong>Batangas State University</strong>
                <br />
                - Research Office
                <br />
                Feb 05, 2025 - April 24, 2025
              </p>
            </div>
          </div>

          {/* Certifications & Awards */}
          <div className="col-lg-4 col-md-6 mb-4">
            <div className="about-card p-1 h-100">
              <div className="certifications d-flex justify-content-center align-items-center mb-2">
                <h4 className="mb-0 educationText">Certificates & Awards</h4>
              </div>
              <div className="d-flex align-items-start">
                <img
                  src="./images/cert_icon.png"
                  alt="certificate"
                  style={{ height: "40px" }}
                  className="mx-2"
                />
                <h6>
                  <strong>Full-Stack Web Development Bootcamp:</strong>
                  <br />
                  <span className="fw-light">August 2025</span>
                </h6>
              </div>
              <div className="d-flex align-items-start">
                <img
                  src="./images/cert_icon.png"
                  alt="certificate"
                  style={{ height: "40px" }}
                  className="mx-2"
                />
                <h6>
                  <strong>
                    CCNAv7: Switching, Routing, and Wireless Essentials:
                  </strong>{" "}
                  <span className="fw-light">Jun 2024</span>
                </h6>
              </div>
              <div className="d-flex align-items-start">
                <img
                  src="./images/award_icon.png"
                  alt="certificate"
                  style={{ height: "40px" }}
                  className="mx-2"
                />
                <div>
                  <h6 className="mb-0">
                    <strong>Dean’s Lister:</strong>{" "}
                    <span className="fw-light">2023-2024</span>
                  </h6>
                  <h6>
                    <strong>Top Performing Student:</strong>{" "}
                    <span className="fw-light">2021-2023</span>
                  </h6>
                </div>
              </div>
              <div className="d-flex align-items-start">
                <img
                  src="./images/award_icon.png"
                  alt="certificate"
                  style={{ height: "40px" }}
                  className="mx-2"
                />
                <h6>
                  <strong>1st Place – Design Sprint Competition:</strong> <br />
                  <span className="fw-light">April 2023</span>
                </h6>
              </div>
            </div>
          </div>
        </div>
      </div>
    </section>
  );
};

export default About;
