import axios from "axios";

const BASE_URL =
  "http://4.224.186.213/evaluation-service/notifications";

export const getNotifications = async () => {
  const token = localStorage.getItem("token");

  try {
    const res = await axios.get(BASE_URL, {
      headers: {
        Authorization: `Bearer ${token}`,
      },
    });

    return res.data;
  } catch (err) {
    console.log("Error:", err.response?.data || err.message);
    throw err;
  }
};