import React from "react";
import "./Achievements.css";

function Achievements() {
  return (
    <section className="achievements-section">
      <h1 className="achievements-title">Achievements</h1>

      <div className="achievements-container">

        <div className="ach-card">
          <h2>SmartCity National Hackathon 2025</h2>
          <p className="ach-year">2025</p>
          <p className="ach-desc">
            Ranked among the <strong>Top 30 Finalists</strong> out of 500+ teams. Developed 
            <strong> SmartRent</strong>, a smart rental platform designed to optimize housing discovery for 
            working professionals, focusing on user experience and real-time data.
          </p>
        </div>

        <div className="ach-card">
          <h2>Gold Medal – Research Day, SRM University</h2>
          <p className="ach-year">2025</p>
          <p className="ach-desc">
            Awarded the <strong>Gold Medal</strong> at SRM University’s Research Day 2025 
            for innovative machine learning-based analysis on groundwater quality and 
            fluoride concentration prediction.
          </p>
        </div>

        <div className="ach-card">
          <h2>SEED Research Grant Awardee</h2>
          <p className="ach-year">2025</p>
          <p className="ach-desc">
            Secured a <strong>SEED Research Grant</strong> of INR 40,000 for a project 
            on predicting coastal groundwater salinity and contaminants using AI-driven 
            environmental modeling techniques.
          </p>
        </div>

        <div className="ach-card">
          <h2>Publication in Water Journal (MDPI)</h2>
          <p className="ach-year">2024</p>
          <p className="ach-desc">
            Co-authored a peer-reviewed research paper titled 
            <em> “Occurrence and Distribution of Fluoride in Groundwater and Drinking Water Vulnerability of a Tropical Dry Region of Andhra Pradesh, India”</em>,
            published in <strong>Water (MDPI)</strong>, DOI: <a href="https://doi.org/10.3390/w16040577" target="_blank" rel="noopener noreferrer">10.3390/w16040577</a>.
          </p>
        </div>

        <div className="ach-card">
          <h2>Water Elixir Meet (WE Meet) 2025</h2>
          <p className="ach-year">2025</p>
          <p className="ach-desc">
            Presented a <strong>Machine Learning-based groundwater fluoride predictability model</strong> 
            under the theme of <em>Smart Farming & Sustainable Water Management</em>.
          </p>
        </div>

        <div className="ach-card">
          <h2>MongoDB Certified Associate Developer</h2>
          <p className="ach-year">2025</p>
          <p className="ach-desc">
            Achieved certification from <strong>MongoDB, Inc.</strong> in April 2025, 
            demonstrating strong skills in database design, CRUD operations, indexing, 
            and performance optimization using MongoDB.
          </p>
        </div>

      </div>
    </section>
  );
}

export default Achievements;
