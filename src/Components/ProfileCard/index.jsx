import React, { useEffect, useState } from "react";
import Cookies from "js-cookie";
import "./index.css";

const ProfileCard = () => {
  const [allValues, setValues] = useState({
    showProfile: null, // Initially set to null to check if data is available
  });
  const token = Cookies.get("jwtToken");

  useEffect(() => {
    const showProfile = async () => {
      const Api = "https://apis.ccbp.in/profile";
      const options = {
        method: "get",
        headers: {
          Authorization: `Bearer ${token}`,
        },
      };
      const response = await fetch(Api, options);
      const data = await response.json();

      if (response.ok === true) {
        setValues({ ...allValues, showProfile: data.profile_details });
      }
    };
    showProfile();
  }, []);

  return (
    <div>
      <div className="showPerson">
        {allValues.showProfile ? (
          <div>
            <img
              src={allValues.showProfile.profile_image_url}
              alt="profile"
              className="profile-image"
            />
            <h2>{allValues.showProfile.name}</h2>
            <p style={{ fontSize: "20px", fontWeight: "500px" }}>
              {allValues.showProfile.short_bio}
            </p>
          </div>
        ) : (
          <div className="spinner-border" role="status">
            <span className="sr-only"></span>
          </div>
        )}
      </div>
    </div>
  );
};

export default ProfileCard;
