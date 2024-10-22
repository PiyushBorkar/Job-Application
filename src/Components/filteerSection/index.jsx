import React from "react";
import ProfileCard from "../ProfileCard";
import "./index.css";

const FilterSection = (props) => {
  const { empTypeFunc, salaryRangeFunc } = props;

  function onChangeEmpType(e) {
    empTypeFunc(e.target.value, e.target.checked);
  }

  function salary(e) {
    salaryRangeFunc(e.target.value);
  }

  return (
    <div>
      <ProfileCard />
      <div className="typeOfEmp">
        <h3>Type of Employee</h3>
        <label className="checkbox-wrapper">
          <input
            onChange={onChangeEmpType}
            type="checkbox"
            value={"FULLTIME"}
          />
          Full-Time
        </label>
        <label className="checkbox-wrapper">
          <input
            onChange={onChangeEmpType}
            type="checkbox"
            value={"PARTTIME"}
          />
          Part-Time
        </label>
        <label className="checkbox-wrapper">
          <input
            onChange={onChangeEmpType}
            type="checkbox"
            value={"FREELANCE"}
          />
          Freelance
        </label>
        <label className="checkbox-wrapper">
          <input
            onChange={onChangeEmpType}
            type="checkbox"
            value={"INTERNSHIP"}
          />
          Internship
        </label>
      </div>
      {/* SALARY SECTION ... */}
      <div className="salaryRange">
        <h3>Salary Range</h3>
        <label className="radio-wrapper">
          <input
            onChange={salary}
            type="radio"
            name="salary"
            value={"1000000"}
          />
          10LPA and above
        </label>
        <label className="radio-wrapper">
          <input
            onChange={salary}
            type="radio"
            name="salary"
            value={"2000000"}
          />
          20LPA and above
        </label>
        <label className="radio-wrapper">
          <input
            onChange={salary}
            type="radio"
            name="salary"
            value={"3000000"}
          />
          30LPA and above
        </label>
        <label className="radio-wrapper">
          <input
            onChange={salary}
            type="radio"
            name="salary"
            value={"4000000"}
          />
          40LPA and above
        </label>
      </div>
    </div>
  );
};

export default FilterSection;
