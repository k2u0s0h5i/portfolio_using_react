import React from "react";
import "./Education.css";
import mainimg from './assets/main.jpeg';

function Education() {
  return (
    <section className="education-section">
      <h1 className="education-title">Education</h1>

      <div className="education-container">

        <div className="edu-card">
          <h2>SRM University AP</h2>
          <p className="edu-year">2022 – 2026</p>
          <p className="edu-degree">B.Tech in Computer Science and Engineering</p>
          <p className="edu-desc">
            Pursuing undergraduate studies in Computer Science with a CGPA of <strong>9.09/10</strong>.
            Coursework includes Data Structures, Algorithms, Web Development, Machine Learning,
            and Cybersecurity. Actively engaged in research on groundwater fluoride prediction 
            using ML models, and participated in national-level hackathons.
          </p>
        </div>

        <div className="edu-card">
          <h2>Sarda Educational Institutions</h2>
          <p className="edu-year">2020 – 2022</p>
          <p className="edu-degree">Class XII – MPC Stream</p>
          <p className="edu-desc">
            Completed Intermediate Education with an aggregate of <strong>97%</strong>, 
            focusing on Mathematics, Physics, and Chemistry. Demonstrated academic excellence 
            and consistent top performance throughout the course.
          </p>
        </div>

        <div className="edu-card">
          <h2>Atkinson Senior Secondary School, Vijayawada</h2>
          <p className="edu-year">2020</p>
          <p className="edu-degree">Class X – CBSE</p>
          <p className="edu-desc">
            Secured <strong>83%</strong> in Class X Board Examinations. Actively participated 
            in extracurricular activities including cultural, literary, and technical events, 
            developing strong teamwork and communication skills early on.
          </p>
        </div>

      </div>
    </section>
  );
}

export default Education;
