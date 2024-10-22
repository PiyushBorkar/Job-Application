import React, { useEffect, useState } from "react";
import Headerss from "../Headerss/index.";
import ShowJobs from "../displayJobsCards";
import FilterJobs from "../filteerSection";
import "./index.css";
import Cookies from "js-cookie";

const Jobs = () => {
  const [allValues, setValues] = useState({
    allJobs: [],
    empTypes: [],
    salaryRange: "",
    userSearch: "",
  });
  const [noJobsFound, setNoJobsFound] = useState(false);
  const token = Cookies.get("jwtToken");

  useEffect(() => {
    const displayJobsCards = async () => {
      console.log(allValues.empTypes);
      const api = `https://apis.ccbp.in/jobs?employment_type=${allValues.empTypes}&minimum_package=${allValues.salaryRange}&search=${allValues.userSearch}`;
      const option = {
        method: "GET",
        headers: {
          Authorization: `Bearer ${token}`,
        },
      };
      const response = await fetch(api, option);
      const data = await response.json();

      if (response.ok && data.jobs.length > 0) {
        setValues({ ...allValues, allJobs: data.jobs });
        setNoJobsFound(false);
      } else {
        setValues({ ...allValues, allJobs: [] });
        setNoJobsFound(true);
      }
    };
    displayJobsCards();
  }, [allValues.userSearch, allValues.empTypes, allValues.salaryRange]);

  const onEnterUserSearch = (e) => {
    if (e.key === "Enter") {
      setValues({ ...allValues, userSearch: e.target.value });
    }
  };

  const onChangeEmpType = (value, check) => {
    if (check === true) {
      setValues({ ...allValues, empTypes: [...allValues.empTypes, value] });
    } else {
      setValues({
        ...allValues,
        empTypes: allValues.empTypes.filter((item) => item !== value),
      });
    }
  };

  const onSalaryRange = (value) => {
    setValues({ ...allValues, salaryRange: value });
  };

  return (
    <div
      style={{
        backgroundColor: "#2C2C2C",
        color: "#FFFFFF",
      }}
    >
      <Headerss />
      <input
        onKeyUp={onEnterUserSearch}
        type="search"
        placeholder="search for jobs"
        style={{
          width: "50vw",
          margin: "15px",
          padding: "10px",
          borderRadius: "4px",
          border: "1px solid #ccc",
          marginBottom: "20px",
        }}
      />
      <div className="jobsFilterCont">
        <FilterJobs
          empTypeFunc={onChangeEmpType}
          salaryRangeFunc={onSalaryRange}
        />

        {noJobsFound ? (
          <h1 style={{ color: "white" }}>OOPS, THERE ARE NO SUCH JOBS ...</h1>
        ) : (
          <ul className="cards">
            {allValues.allJobs.map((e) => (
              <ShowJobs key={e.id} jobs={e} />
            ))}
          </ul>
        )}
      </div>
    </div>
  );
};

export default Jobs;
