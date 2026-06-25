import axios from "axios";

const AUTH_URL =
  "http://4.224.186.213/evaluation-service/auth";

export const loginAndGetToken = async (payload) => {
  try {
    const res = await axios.post(AUTH_URL, payload);

    // ✅ STORE TOKEN HERE (THIS IS THE CORRECT PLACE)
    localStorage.setItem("token", res.data.access_token);

    return res.data;
  } catch (err) {
    console.error("Auth failed", err);
    throw err;
  }
};