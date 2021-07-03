import axios from "axios";
const serverURL = "http://18.185.148.165:3000/";


export const getProducts = async () => {
  try {
    const response = await axios.get(`${serverURL}api/v1/products`);
    localStorage.setItem("products", JSON.stringify(response.data.data));
    return response.data.data;
  } catch (err) {
    alert("Oops");
  }
};

export const registration = async (
  firstName,
  lastName,
  email,
  password,
  passwordConfirmation
) => {
  try {
    const result = await axios.post(serverURL + "register", {
      firstName,
      lastName,
      email,
      password,
      passwordConfirmation,
    });
    localStorage.setItem("user", JSON.stringify(result.data.data));
    localStorage.setItem("token", JSON.stringify(result.data.data.token));
    console.log(result);
  } catch (err) {
    alert("WTH");
  }
};

export const login = async (email, password) => {
  try {
    const result = await axios.post(serverURL + "login", { email, password });
    localStorage.setItem("user", JSON.stringify(result.data.data));
    localStorage.setItem("token", JSON.stringify(result.data.data.token));
  } catch (error) {
    alert("Something Went Wrong");
  }
};

export const cart = async () => {
  try {
    const result = await axios.get(serverURL + "cart", {
      headers: {
        " Authorization": ` Bearer ${localStorage.getItem("token")}`,
      },
    });
  } catch (err) {
    console.log(err);
  }
};


