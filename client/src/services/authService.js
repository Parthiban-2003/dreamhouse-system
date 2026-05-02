import api from "./api";

export const signupUser = async (data) => {
  const res = await api.post("/auth/signup", data);
  return res.data;
};

export const loginUser = async (data) => {
  try {
    const res = await api.post("/auth/login", data);
    console.log("LOGIN RESPONSE:", res.data);
    return res.data;
  } catch (err) {
    console.error("LOGIN ERROR:", err.message);
    throw err;
  }
};

export const logoutUser = () => {
  localStorage.removeItem("token");
};