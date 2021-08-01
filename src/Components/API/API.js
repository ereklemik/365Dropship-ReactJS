import axios from "axios";

export const SERVER_URL = "http://18.185.148.165:3000/";
export const SERVER_V1 = SERVER_URL + "api/v1/";
export const SERVER_PRODUCTS = SERVER_V1 + "products";

export const getProducts = async () => {
  try {
    const response = await axios.get(`${SERVER_URL}api/v1/products`);
    localStorage.setItem("products", JSON.stringify(response.data.data));
    return response.data.data;
  } catch (err) {
    alert("Oops");
  }
};
axios.interceptors.request.use((req) => {
  req.headers.Authorization = `Bearer ${localStorage.getItem("token")}`;
  return req;
});

export const signup = async (
  firstName,
  lastName,
  email,
  password,
  passwordConfirmation
) => {
  try {
    const result = await axios.post(SERVER_URL + "register", {
      firstName,
      lastName,
      email,
      password,
      passwordConfirmation,
    });
    localStorage.setItem("user", JSON.stringify(result.data.data));
    localStorage.setItem("token", result.data.data.token);
  } catch (err) {
    alert("Something went wrong");
  }
};
export const login = async (email, password) => {
  try {
    const result = await axios.post(SERVER_URL + "login", { email, password });
    localStorage.setItem("user", JSON.stringify(result.data.data));
    localStorage.setItem("token", result.data.data.token);
  } catch (error) {
    alert("Something went wrong");
  }
};

export const cart = async () => {
  try {
    const result = await axios.get(SERVER_V1 + "cart");
    return result.data.data;
  } catch (err) {
    if (err.response.status === 401) {
      localStorage.removeItem("user");
      localStorage.removeItem("token");
    }
  }
};
export const products = async () => {
  const result = await axios.get(SERVER_V1 + "products");
  return result.data.data;
};

export const removeFromCart = async (productId) => {
  const result = await axios.post(SERVER_V1 + `cart/remove/${productId}`);
  return result.data.data;
};
export const addToCart = async (productId, qty) => {
  const result = await axios.post(SERVER_V1 + "cart/add", { productId, qty });
  return result.data.data;
};

export const creatProduct = async (data) => {
  const result = await axios.post(SERVER_V1 + "products", data);
  return result.data.data;
};

export const updateProduct = async (id, data) => {
  const result = await axios.put(SERVER_V1 + `products/${id}`, data);
  return result.data.data;
};

export const getProduct = async (id) => {
  const result = await axios.get(SERVER_V1 + `products/${id}`);
  return result.data.data;
};

export const addProduct = async (data) => {
  const result = await axios.post(SERVER_URL + "api/v1/products", data);
  return result.data.data;
};

export const deleteProduct = async (id) => {
  await axios.delete(SERVER_URL + `api/v1/products/${id}`);
};
