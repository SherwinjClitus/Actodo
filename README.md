# Actodo – Activity & Todo Management App

A modern, responsive React-based activity and todo management application built to help users organize daily tasks, manage activities, and stay focused with a clean, simple interface.

---

## Table of Contents

- [Project Title and Introduction](#project-title-and-introduction)
- [Features](#features)
- [UI and Design](#ui-and-design)
- [Tech Stack](#tech-stack)
- [Project Structure](#project-structure)
- [Installation and Setup](#installation-and-setup)
- [Usage Guide](#usage-guide)
- [Available Scripts](#available-scripts)
- [Screenshots](#screenshots)
- [Future Improvements](#future-improvements)
- [Author](#author)

---

## Project Title and Introduction

**Actodo** is a React-based application for managing daily activities and tasks. The app provides a basic dashboard experience where users can log in, create an account, and maintain a list of activities they want to complete. The interface is intentionally simple and easy to navigate, making it suitable as a junior frontend portfolio project.

This project demonstrates core React concepts including reusable components, state management, conditional rendering, and client-side routing with React Router.

---

## Features

### User Authentication
- **Login screen** with username and password inputs
- **Signup screen** with username, password, and confirm password fields
- **In-memory user list** stored in React state
- **Credential-based navigation** to the landing page when a username/password match is found
- **Navigation link** between login and signup pages

### Activity Management
- **Add new activities** through a text input and Add button
- **Display activities** in a numbered list
- **Delete activities** using a trash icon button
- **Default sample activities** loaded when the app opens:
  - Wake up at 7.
  - Go to GYM
  - Eat breakfast at 8
- **Empty-state message** when no activities have been added yet: `You haven't added anything yet...`

### Dashboard and Navigation
- **Landing page** after successful login
- **Personalized greeting** using the logged-in username
- **Top summary cards** showing static information:
  - location/card value
  - current date
  - current time
  - technology used: React
- **Route-based navigation** using `react-router-dom`:
  - `/` → Login
  - `/signup` → Signup
  - `/landing` → Dashboard

---

## UI and Design

The app uses a straightforward, minimal design with strong contrast and simple components.

### Styling
- Tailwind CSS is used through the `@tailwindcss/vite` plugin and the `@import "tailwindcss";` entry in `src/index.css`
- Layouts are built with utility classes such as `flex`, `gap`, `rounded`, `p-10`, `bg-black`, and `text-amber-50`
- The app uses a dark theme for the outer page wrapper and light surfaces for the main content card

### Design Patterns
- **Login and signup pages** use a black background with a cream/amber card panel
- **Landing page** uses a white card on a black background
- **Activity area** is styled with a violet panel to distinguish the task list
- **Info cards** use colored backgrounds with text and labels for quick visual scanning
- **Inputs** are border-based and simple, with hover states on buttons
- **Delete buttons** use red text styling and a Font Awesome trash icon

### Visual Notes
- The interface is compact and practical, suitable for a simple task tracker
- The design is responsive via flex-based wrapping and utility classes
- It relies on a clean portfolio-style aesthetic rather than a heavy dashboard system

---

## Tech Stack

| Technology | Usage |
| --- | --- |
| React | Frontend UI library |
| Vite | Development server and build tool |
| JavaScript | Application logic and component code |
| React Router DOM | Routing between login, signup, and landing pages |
| Tailwind CSS | Styling and layout utilities |
| PostCSS | CSS processing |
| Font Awesome | Trash icon via CDN |
| ESLint | Linting |

---

## Project Structure

```text
Actodo/
├── index.html
├── package.json
├── vite.config.js
├── eslint.config.js
├── public/
├── src/
│   ├── App.jsx
│   ├── App.css
│   ├── index.css
│   ├── main.jsx
│   ├── components/
│   │   ├── Cards.jsx
│   │   ├── Header.jsx
│   │   ├── TodoContainer.jsx
│   │   ├── TodoForm.jsx
│   │   ├── TodoList.jsx
│   │   └── Todoitem.jsx
│   └── pages/
│       ├── Landing.jsx
│       ├── Login.jsx
│       └── Signup.jsx
├── README.md
└── package-lock.json
```

### File Responsibilities
- `src/App.jsx` – Sets up routes and maintains the `users` state
- `src/pages/Login.jsx` – Handles login form and validation workflow
- `src/pages/Signup.jsx` – Creates a new user and adds them to the in-memory list
- `src/pages/Landing.jsx` – Displays the dashboard and summary cards
- `src/components/TodoContainer.jsx` – Holds the activity list state and renders form/list
- `src/components/TodoForm.jsx` – Adds new activities
- `src/components/TodoList.jsx` – Renders the list of current activities
- `src/components/Todoitem.jsx` – Displays each item and handles deletion
- `src/components/Header.jsx` – Page heading for the dashboard
- `src/components/Cards.jsx` – Reusable info card component
- `src/index.css` – Tailwind import
- `vite.config.js` – Vite config with React and Tailwind plugin support

---

## Installation and Setup

### Prerequisites
- Node.js installed on your machine
- npm package manager

### Clone the Repository

```bash
git clone https://github.com/SherwinjClitus/Actodo.git
cd Actodo
```

### Install Dependencies

```bash
npm install
```

### Run the Application

```bash
npm run dev
```

Then open the local URL shown in the terminal, typically:

```text
http://localhost:5173
```

### Production Build

```bash
npm run build
```

### Preview Production Build

```bash
npm run preview
```

---

## Usage Guide

### Login
1. Open the app in your browser.
2. Enter a valid username and password.
3. Click the `Login` button.
4. If the credentials match the in-memory list, the app navigates to the landing/dashboard page.

### Signup
1. Click the `Signup` link from the login page.
2. Enter a username and password.
3. Fill in the confirm password field.
4. Click `Sign up`.
5. The app adds the new user to the current list and redirects back to the login screen.

### Manage Activities
1. On the landing page, use the `Manage Activities` form.
2. Type an activity and click `Add`.
3. The new task appears in the `Today's Activities` section.
4. Use the red trash icon to remove a task.

### Dashboard
The landing page displays a greeting along with quick summary cards for the user and app context.

---

## Available Scripts

In `package.json`, the project defines the following scripts:

| Script | Command | Purpose |
| --- | --- | --- |
| `dev` | `vite` | Starts the Vite development server |
| `build` | `vite build` | Builds the production bundle |
| `lint` | `eslint .` | Runs lint checks |
| `preview` | `vite preview` | Serves the production build locally |

---

## Screenshots

> Placeholder: Add screenshots of the login page, signup page, and dashboard here.

```md
![Login Page](./screenshots/login.png)
![Signup Page](./screenshots/signup.png)
![Dashboard](./screenshots/dashboard.png)
```

---

## Future Improvements

The following are realistic enhancements that could be added in future versions, but are not part of the current implementation:

- Add persistent storage using `localStorage`
- Add edit functionality to update existing tasks
- Add task completion toggles or checkboxes
- Add filtering, prioritization, and sorting
- Implement stronger authentication and secure user storage
- Add backend API integration for user and activity management
- Add test coverage with React Testing Library and Vitest
- Improve accessibility and keyboard navigation
- Add dark mode and themes

---

## Author

- GitHub: https://github.com/SherwinjClitus

Made with heart by Sherwin.
