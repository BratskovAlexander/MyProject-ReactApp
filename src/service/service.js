import axios from "axios";
import qs from "querystring";

const service = {
  getAllCountries: async () => {
    const getAllCountries = await axios.get("http://localhost:3300/countries", {
      headers: {
        "Content-Type": "application/x-www-form-urlencoded"
      }
    });
    return getAllCountries.data;
  },
  addUser: async body => {
    console.log(body);
    const addUser = await axios.post(
      "http://localhost:3300/users/user",
      qs.stringify(body),
      {
        headers: {
          "Content-Type": "application/x-www-form-urlencoded"
        }
      }
    );
    console.log(addUser);
    return addUser;
  }
};

export default service;
