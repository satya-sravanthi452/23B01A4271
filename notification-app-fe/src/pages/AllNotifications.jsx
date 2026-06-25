import React, { useEffect, useState } from "react";
import { getNotifications } from "../../services/notificationService";
import { Log } from "../../utils/log";

const AllNotifications = () => {
  const [data, setData] = useState([]);

  const token = localStorage.getItem("token");

  useEffect(() => {
    Log(
      "frontend",
      "info",
      "page",
      "All Notifications page loaded",
      token
    );

    loadData();
  }, [token]);

  const loadData = async () => {
    try {
      Log(
        "frontend",
        "info",
        "service",
        "Fetching notifications started",
        token
      );

      const res = await getNotifications(token);

      setData(res.notifications || []);

      Log(
        "frontend",
        "info",
        "service",
        "Fetched notifications successfully",
        token
      );
    } catch (err) {
      Log(
        "frontend",
        "error",
        "service",
        "Failed to fetch notifications",
        token
      );
    }
  };

  return (
    <div>
      <h2>All Notifications</h2>

      {data.map((n) => (
        <div key={n.ID}>
          <b>{n.Type}</b> - {n.Message}
        </div>
      ))}
    </div>
  );
};

export default AllNotifications;