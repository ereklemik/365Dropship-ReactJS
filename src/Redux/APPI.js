import axios from "axios";

const SERVER_URL = "http://18.185.148.165:3000";

const APPI = (query) => {
  return axios.create({
    baseURL: `${SERVER_URL}/${query}`,
    headers: {
      Authorization: "Bearer " + localStorage.getItem("token"),
    },
  });
};

export default APPI;
