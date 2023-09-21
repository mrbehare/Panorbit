import axios from "axios";

export const getProfile = () => {
  return axios.get("https://panorbit.in/api/users.json");
};


