import axios from "axios";

const BASE_URL =
  "http://4.224.186.213/evaluation-service/logs";

export const Log = async (
  stack,
  level,
  packageName,
  message,
  token
) => {
  try {
    const response = await axios.post(
      BASE_URL,
      {
        stack,
        level,
        package: packageName,
        message
      },
      {
        headers: {
          Authorization: `Bearer ${token}`
        }
      }
    );

    return response.data;
  } catch (error) {
    console.error("Logging failed:", error.message);
  }
};