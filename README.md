# ✅ TaskFlow — Smart Task Management Dashboard

[![Live Demo](https://img.shields.io/badge/🚀_Live_Demo-Vercel-000000?style=for-the-badge&logo=vercel)](https://YOUR-VERCEL-URL.vercel.app)
[![GitHub](https://img.shields.io/badge/📂_Repository-GitHub-181717?style=for-the-badge&logo=github)](https://github.com/YOUR-USERNAME/taskflow-react)
[![React](https://img.shields.io/badge/React-19-61DAFB?style=for-the-badge&logo=react&logoColor=white)](https://react.dev/)
[![Vite](https://img.shields.io/badge/Vite-7-646CFF?style=for-the-badge&logo=vite&logoColor=white)](https://vite.dev/)
[![JavaScript](https://img.shields.io/badge/JavaScript-ES6+-F7DF1E?style=for-the-badge&logo=javascript&logoColor=black)](https://developer.mozilla.org/docs/Web/JavaScript)
[![MIT License](https://img.shields.io/badge/License-MIT-green?style=for-the-badge)](LICENSE)

A modern and responsive task management dashboard built with **React** that helps users organize, prioritize, and track their daily tasks. TaskFlow combines a clean user experience with powerful task organization features, making productivity simple and efficient.

Built as an AI-assisted React project demonstrating modern frontend development practices.

---

## 🌐 Live Demo

🚀 **Vercel:** https://task-flow-react-alpha.vercel.app/
---

## 📂 GitHub Repository

💻 **Repository:** https://github.com/burair-hyder/taskflow-react

---

## ✨ Features

| Feature | Description |
|---------|-------------|
| ✅ **Task Management** | Create, edit, update, delete, and complete tasks effortlessly |
| 🎯 **Priority Levels** | Organize tasks using Low, Medium, and High priority levels |
| 📂 **Categories** | Categorize tasks into Study, Work, Personal, Health, and more |
| 📅 **Due Dates** | Assign deadlines with automatic overdue detection |
| 🔍 **Real-Time Search** | Search tasks instantly by title or description |
| 🎛️ **Filtering & Sorting** | Filter by status, category, and priority or sort by multiple criteria |
| 📊 **Dashboard Analytics** | View live statistics for total, completed, pending, overdue, and due-today tasks |
| 📈 **Progress Charts** | Visualize productivity using interactive charts |
| 🌙 **Dark / Light Mode** | Toggle themes with persistent user preference |
| 💾 **Persistent Storage** | Automatically save tasks using Local Storage |
| 📱 **Responsive Design** | Optimized for desktop, tablet, and mobile devices |
| ⚡ **Fast Performance** | Built with Vite for lightning-fast development and production builds |

---

## 🖥️ Tech Stack

- **Frontend:** React + Vite
- **Language:** JavaScript (ES6+)
- **State Management:** React Context API & Hooks
- **Persistence:** Browser Local Storage
- **Charts:** Recharts
- **Icons:** Lucide React
- **Styling:** CSS3 (Flexbox + CSS Grid)
- **Version Control:** Git & GitHub
- **Deployment:** Vercel

---

## 🏗️ Architecture Highlights

| Concept | Implementation |
|---------|---------------|
| ⚛️ **Component-Based Architecture** | Modular and reusable React components |
| 🪝 **Custom Hooks** | Reusable `useLocalStorage` hook for persistent browser storage |
| 🌍 **Context API** | Centralized task and theme management |
| 🔄 **React Hooks** | Extensive use of `useState`, `useEffect`, `useContext`, and `useMemo` |
| 📊 **Derived State** | Dashboard statistics are calculated dynamically from task data |
| 📱 **Responsive Layout** | Mobile-first UI using Flexbox and CSS Grid |
| ♿ **Accessibility** | Semantic HTML and accessible UI controls |

---

## 📁 Project Structure

```text
taskflow-react/
│
├── public/
│
├── src/
│   ├── assets/
│   │
│   ├── components/
│   │   ├── DashboardStats.jsx
│   │   ├── EmptyState.jsx
│   │   ├── FilterBar.jsx
│   │   ├── ProgressChart.jsx
│   │   ├── TaskCard.jsx
│   │   ├── TaskForm.jsx
│   │   ├── TaskList.jsx
│   │   ├── ThemeToggle.jsx
│   │   └── ConfirmDialog.jsx
│   │
│   ├── context/
│   │   ├── TaskContext.jsx
│   │   └── ThemeContext.jsx
│   │
│   ├── hooks/
│   │   └── useLocalStorage.js
│   │
│   ├── utils/
│   │   ├── constants.js
│   │   ├── helpers.js
│   │   └── taskHelpers.js
│   │
│   ├── App.jsx
│   ├── App.css
│   ├── index.css
│   └── main.jsx
│
├── screenshots/
├── README.md
├── PROMPTS.md
├── AI-USAGE.md
├── LICENSE
├── package.json
└── vite.config.js
```

---

## 🚀 Getting Started

### 1️⃣ Clone the Repository

```bash
git clone https://github.com/burair-hyder/taskflow-react.git
cd taskflow-react
```

### 2️⃣ Install Dependencies

```bash
npm install
```

### 3️⃣ Start the Development Server

```bash
npm run dev
```

### 4️⃣ Open the Application

Visit:

```
http://localhost:5173
```

### 5️⃣ Build for Production

```bash
npm run build
```

---

## 📊 Dashboard Overview

TaskFlow provides an overview of your productivity through:

- 📌 Total Tasks
- ✅ Completed Tasks
- ⏳ Pending Tasks
- 🚧 In Progress Tasks
- ⚠️ Overdue Tasks
- 📅 Tasks Due Today
- 📈 Completion Percentage
- 📊 Interactive Progress Chart

---

## 🔄 Application Workflow

```text
Create Task
      │
      ▼
Assign Priority & Category
      │
      ▼
Set Due Date
      │
      ▼
Track Progress
      │
      ▼
Complete Task
      │
      ▼
Dashboard Updates Automatically
```

---

## 📸 Screenshots

### 🏠 Dashboard

![Dashboard](screenshots/dashboard.png)

---

### ✅ Task Management

![Tasks](screenshots/tasks.png)

---

### ➕ Add Task

![Task Form](screenshots/task-form.png)

---

### 🌙 Dark Mode

![Dark Mode](screenshots/dark-mode.png)

---

### 📱 Mobile View

![Mobile View](screenshots/mobile.png)

---

## 📚 Learning Outcomes

Through this project I gained practical experience with:

- React Fundamentals
- Functional Components
- React Hooks
- Context API
- Custom Hooks
- Local Storage
- State Management
- Responsive UI Design
- Dashboard Development
- Data Visualization
- Git & GitHub Workflow
- Vite
- AI-Assisted Development

---

## 🔮 Future Improvements

- 🔐 User Authentication
- ☁️ Firebase / Supabase Integration
- 🔔 Push Notifications & Reminders
- 📆 Calendar View
- 🔄 Recurring Tasks
- 📎 File Attachments
- 👥 Team Collaboration
- 📤 Export Tasks (PDF / CSV)
- 🤖 AI Task Breakdown Suggestions
- 📱 Progressive Web App (PWA)

---

## 👨‍💻 Author

**Syed Muhammad Burair Hyder**

- **GitHub:** https://github.com/burair-hyder

---

## 📄 License

This project is licensed under the **MIT License**.

---

⭐ If you found this project useful, consider giving it a **star** on GitHub!
