import React, { useContext, useEffect } from "react";
import { NavLink } from "react-router-dom";
import { AppContext } from "../contextApi/ContextProvider";
import style from "../css/getprofile.module.css";

const GetProfiles = () => {
  const { data, loading, error, getAllData } = useContext(AppContext); // getting data from context api(works as props , but used to avoid props drilling)

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
