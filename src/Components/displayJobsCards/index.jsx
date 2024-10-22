//  "id": "bb95e51b-b1b2-4d97-bee4-1d5ec2b96751",
// "title": "Devops Engineer",
// "rating": 4,
// "company_logo_url": "https://assets.ccbp.in/frontend/react-js/jobby-app/netflix-img.png",
// "location": "Delhi",
// "job_description": "We are looking for a DevOps Engineer with a minimum of 5 years of industry experience, preferably working in the financial IT community. The position in the team is focused on delivering exceptional services to both BU and Dev partners to minimize/avoid any production outages. The role will focus on production support.",
// "employment_type": "Internship",
// "package_per_annum": "10 LPA"
import { Link } from "react-router-dom";
import React from "react";
import "./index.css";
import { FaStar } from "react-icons/fa";
import { IoBagSharp } from "react-icons/io5";
import { FaLocationDot } from "react-icons/fa6";
const ShowJobs = (props) => {
  const { jobs } = props;

  return (
    <>
      <Link id="link" to={`${jobs.id}`}>
        <li>
          <div className="jobCard">
            <div className="logo-titleCont">
              <img
                className="companyLogo"
                src={jobs.company_logo_url}
                alt="company logo"
              />
              <div>
                <h2>{jobs.title}</h2>
                <FaStar />
                &nbsp;
                <span>{jobs.rating}</span>
              </div>
            </div>
            <div className="locationCont">
              <div className="locationCtc">
                <FaLocationDot />
                &nbsp;&nbsp;
                <span>{jobs.location}</span>
                &nbsp;&nbsp;
                <IoBagSharp />
                &nbsp;&nbsp;
                <span>{jobs.employment_type}</span>
                <span id="ctc">{jobs.package_per_annum}</span>
              </div>
            </div>
            <hr />
            <div className="description">
              <h3>Description :</h3>
              <div>{jobs.job_description}</div>
            </div>
          </div>
        </li>
      </Link>
    </>
  );
};
export default ShowJobs;
