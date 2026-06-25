#Campus Notification System

This project is part of the AffordMed Campus Hiring Evaluation.

---

## Stage 1: Priority Notification System

### Objective
Display top 10 unread notifications based on priority and recency.

Priority order:
- Placement (highest)
- Result
- Event (lowest)

If same type, latest notification comes first.

---

## Features

- Fetch notifications from API using JWT token
- Bearer token authentication
- Priority-based sorting logic
- Displays only top 10 notifications
- Logging middleware used instead of console logs

---

## Priority Logic

- Placement > Result > Event  
- If same type → sort by timestamp (latest first)  
- Final output → top 10 notifications  

---
Campus-Evaluation-FE/
│
├── notification-app-fe/
│
│ ├── src/
│ │
│ │ ├── pages/
│ │ │ ├── AllNotifications.jsx
│ │ │ └── PriorityNotifications.jsx
│ │
│ │ ├── services/
│ │ │ └── notificationService.js
│ │
│ │ ├── utils/
│ │ │ ├── log.js
│ │ │ └── priority.js
│ │
│ │ ├── App.jsx
│ │ ├── index.js
│ │ └── index.css
│ │
│ ├── screenshots/
│ │ ├── all-notifications.png
│ │ └── priority-notifications.png
│ │
│ ├── package.json
│ └── README.md

## 📂 Project Structure

