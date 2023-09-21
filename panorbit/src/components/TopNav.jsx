import React, { useContext, useEffect } from "react";
import { AppContext } from "../contextApi/ContextProvider";
import style from "../css/homepage.module.css";
import ProfileDetails from "../page/ProfileDetails";

const TopNav = () => {
  const { profileData, setShowProfile, showProfile, getFilterData } =
    useContext(AppContext); // getting data from contest api

  // ------------ (fetching data with param id)---------
  useEffect(() => {
    const ID = sessionStorage.getItem("id") || 1;
    getFilterData(Number(ID));
  // eslint-disable-next-line react-hooks/exhaustive-deps
  }, []);

  return (
    <div>
      <div
        onClick={() => setShowProfile(!showProfile)}
        className={style.profile}
      >
        <img src={profileData[0]?.profilepicture} alt="profile img" />
        <p>{profileData[0]?.name}</p>
      </div>
      {/* -------- (Profile details component)----- */}
      <ProfileDetails />
    </div>
  );
};

export default TopNav;
