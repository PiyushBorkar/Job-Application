import React, { useEffect, useState } from "react";
import Cookie from "js-cookie";
import { useParams } from "react-router-dom";
import "./index.css";

const UniqueJobDetail = () => {
  const [jobDetails, setJobDetails] = useState(null);
  const { id } = useParams();
  const token = Cookie.get("jwtToken");

  useEffect(() => {
    const jobsInDetail = async () => {
      const api = `https://apis.ccbp.in/jobs/${id}`;
      const options = {
        method: "get",
        headers: {
          Authorization: `Bearer ${token}`,
        },
      };
      const response = await fetch(api, options);
      if (response.ok) {
        const data = await response.json();
        setJobDetails(data);
      }
    };

    jobsInDetail();
  }, [id, token]);

  if (!jobDetails) {
    return <div>Loading...</div>;
  }

  const { job_details, similar_jobs } = jobDetails;
  console.log(job_details);
  console.log(similar_jobs);

  const {
    company_logo_url,
    company_website_url,
    employment_type,
    job_description,
    skills,
    life_at_company,
    location,
    package_per_annum,
    rating,
    title,
  } = job_details;

  return (
    <div
      className="job-details-container"
      style={{
        backgroundColor: "#f0f4f8",
        background: "linear-gradient(135deg, #e0eafc, #cfdef3)",
      }}
    >
      <div className="job-card">
        <img
          src={company_logo_url}
          alt="Company Logo"
          className="company-logo"
        />
        <h1 className="job-title">{title}</h1>
        <p className="rating">Rating: {rating}</p>
        <p className="employment-type">Employment Type: {employment_type}</p>
        <p className="location">Location: {location}</p>
        <p className="package">Package: {package_per_annum}</p>
        <a
          href={company_website_url}
          className="website-link"
          target="_blank"
          rel="noopener noreferrer"
        >
          Visit Company Website
        </a>
        <hr />
        <div className="job-description">
          <h3>Description</h3>
          <p>{job_description}</p>
        </div>
        <div className="skills-section">
          <h3>Skills Required</h3>
          <ul className="skills-list">
            {skills.map((skill) => (
              <li key={skill.name}>
                <img
                  src={skill.image_url}
                  alt={skill.name}
                  className="skill-icon"
                />
                <span>{skill.name}</span>
              </li>
            ))}
          </ul>
        </div>
        <hr />
        <div className="life-at-company">
          <h3>Life at Company</h3>
          <p>{life_at_company.description}</p>
          <img
            src={life_at_company.image_url}
            alt="Life at Company"
            className="life-image"
          />
        </div>
      </div>

      <div className="similar-jobs-section">
        <h2>Similar Jobs</h2>
        <ul className="similar-jobs-list">
          {similar_jobs.map((job) => (
            <li key={job.id} className="similar-job-card">
              <img
                src={job.company_logo_url}
                alt="Company Logo"
                className="company-logo"
              />
              <h3>{job.title}</h3>
              <p>Rating: {job.rating}</p>
              <p>Employment Type: {job.employment_type}</p>
              <p>Location: {job.location}</p>
              <p>{job.job_description}</p>
            </li>
          ))}
        </ul>
      </div>
    </div>
  );
};

export default UniqueJobDetail;
