import  React, { useEffect, useState } from "react";

import { getNotifications } from "../../services/notificationService";
import { getPriority } from "../../utils/priority";
import { Log } from "../../utils/log";

const PriorityNotifications = () => {
  const [data, setData] = useState([]);

  const token = localStorage.getItem("token");

  useEffect(() => {
    Log("frontend", "info", "page", "Priority page loaded", token);

    fetchData();
  }, []);

  const fetchData = async () => {
    const res = await getNotifications(token);
    const sorted = getPriority(res.notifications, 10);
    setData(sorted);
  };

  return (
    <div>
      <h2>Priority Notifications</h2>

      {data.map((n, i) => (
        <div key={i}>
          <p>{n.Type}</p>
          <p>{n.Message}</p>
          <p>{n.Timestamp}</p>
        </div>
      ))}
    </div>
  );
};

export default PriorityNotifications;