import React, { useContext, useEffect } from "react";
import { NavLink } from "react-router-dom";
import { AppContest } from "../contestApi/ContestProvider";
import style from "../css/getprofile.module.css";

const GetProfiles = () => {
  const { data, loading, error, getAllData } = useContext(AppContest); // getting data from contest api

  useEffect(() => {
    getAllData();
  // eslint-disable-next-line react-hooks/exhaustive-deps
  }, []);

  // -------- loading ---------
  if (loading) {
    return <h3 style={{ color: "teal" }}>Loading....</h3>;
  }

  // --------- error ---------
  if (error) {
    return <h3 style={{ color: "red" }}>server error....</h3>;
  }

  return (
    <div className={style.card_bottom}>
      {/* --------- Data maping ------ */}
      {data &&
        data.map((el) => (
          <div key={el.id}>
            <NavLink
              to={`/homepage/${el.id}`}
            >
              <div className={style.maping_div}>
                <img src={el.profilepicture} alt="profile" />
                <p>{el.name}</p>
              </div>
            </NavLink>
            <hr style={{opacity: "0.3"}}/>
          </div>
        ))}
    </div>
  );
};

export default GetProfiles;
