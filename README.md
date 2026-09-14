# SkillSwap 🤝

### A Community-Driven Skill Exchange Platform

SkillSwap is a **full-stack MERN application** that enables people to connect, exchange knowledge, and learn from each other without relying on traditional paid learning models.

Users can create profiles showcasing the skills they can **teach** and the skills they **want to learn**. Based on these interests, SkillSwap helps users discover relevant learning partners, send connection requests, and communicate through real-time chat.

The project demonstrates practical **full-stack web development**, including authentication, authorization, RESTful APIs, database design, user matching, state management, protected routes, real-time communication, and responsive UI development.

---

## 📌 Table of Contents

* [Overview](#-overview)
* [Problem Statement](#-problem-statement)
* [Solution](#-solution)
* [Key Features](#-key-features)
* [How SkillSwap Works](#-how-skillswap-works)
* [Technology Stack](#-technology-stack)
* [System Architecture](#-system-architecture)
* [Application Modules](#-application-modules)
* [Authentication & Security](#-authentication--security)
* [Database](#-database)
* [Project Structure](#-project-structure)
* [Installation & Setup](#-installation--setup)
* [Environment Variables](#-environment-variables)
* [Running the Application](#-running-the-application)
* [API Overview](#-api-overview)
* [Future Enhancements](#-future-enhancements)
* [Learning Outcomes](#-learning-outcomes)
* [Contributing](#-contributing)
* [License](#-license)

---

## 🚀 Overview

Traditional online learning platforms generally follow a **pay-to-learn** model where users purchase courses or subscriptions.

SkillSwap follows a different approach:

> **"I teach what I know, and I learn what I want to know."**

The platform creates a community where users can exchange knowledge based on complementary skills.

For example:

**User A**

* Can teach: `JavaScript`, `React`
* Wants to learn: `Python`, `Machine Learning`

**User B**

* Can teach: `Python`, `Machine Learning`
* Wants to learn: `React`

SkillSwap can help these users discover each other and establish a connection for collaborative learning.

---

## ❓ Problem Statement

Finding the right person to learn a particular skill from can be difficult, especially when users want **peer-to-peer learning** rather than paid courses.

Existing platforms often focus on:

* Paid courses
* Professional tutoring
* Freelancing
* One-way content consumption

There is a need for a platform where users can:

* Share their own knowledge
* Find people with complementary skills
* Connect with potential learning partners
* Communicate directly
* Exchange knowledge collaboratively

---

## 💡 Solution

SkillSwap provides a centralized platform for **peer-to-peer skill exchange**.

Users create detailed profiles containing:

* Skills they can teach
* Skills they want to learn
* Bio
* Languages
* Profile picture
* Other relevant profile information

The platform then helps users discover suitable people who may be interested in exchanging knowledge.

After discovering a suitable user:

```text
Discover User
      ↓
View Profile
      ↓
Send Connection Request
      ↓
Request Accepted
      ↓
Connection Established
      ↓
Start Real-Time Chat
      ↓
Plan Skill Exchange
```

---

# ✨ Key Features

## 🔐 Secure Authentication

* User registration and login
* JWT-based authentication
* Password hashing using bcrypt
* HTTP-only cookie-based authentication
* Protected routes
* Authentication middleware
* Secure environment variable configuration

---

## 👤 User Onboarding

New users complete an onboarding process to create their profile.

Users can provide:

* Name
* Bio
* Profile picture
* Languages
* Skills they can teach
* Skills they want to learn

This information is used to improve user discovery and skill matching.

---

## 🧑‍💻 Skill-Based Profiles

Every user has a dedicated profile containing their learning and teaching interests.

Example:

```text
Skills I Can Teach
├── Java
├── JavaScript
└── React

Skills I Want to Learn
├── Python
├── Machine Learning
└── Docker
```

This creates a clear representation of what each user can contribute and what they want to learn.

---

## 🎯 User Recommendations

SkillSwap recommends relevant users based on profile and skill information.

The recommendation system helps users discover potential learning partners without manually searching through the entire community.

Already connected users are excluded from recommendations to keep the discovery process relevant.

---

## 🤝 Connection / Friend Request System

Users can:

* Send connection requests
* Receive connection requests
* Accept requests
* Establish connections
* Manage their connections

Connections form the foundation for communication and skill exchange.

---

## 💬 Real-Time Messaging

After establishing a connection, users can communicate through **Stream Chat**.

The chat system allows users to:

* Send messages
* Receive messages in real time
* Discuss learning goals
* Plan skill-exchange sessions
* Coordinate with learning partners

---

## 🌓 Dark & Light Mode

SkillSwap supports both:

* 🌞 Light Mode
* 🌙 Dark Mode

Theme state is managed using **Zustand**.

---

## 📱 Responsive Interface

The frontend is designed to work across different screen sizes, including:

* Desktop
* Laptop
* Tablet
* Mobile

Tailwind CSS is used to create the responsive UI.

---

# 🔄 How SkillSwap Works

The complete user journey can be summarized as:

```text
                    ┌───────────────┐
                    │     User      │
                    └───────┬───────┘
                            ↓
                    ┌───────────────┐
                    │ Register/Login│
                    └───────┬───────┘
                            ↓
                    ┌───────────────┐
                    │   Onboarding  │
                    └───────┬───────┘
                            ↓
                    ┌───────────────┐
                    │ Create Profile│
                    └───────┬───────┘
                            ↓
                    ┌───────────────┐
                    │ Find Matches   │
                    └───────┬───────┘
                            ↓
                    ┌───────────────┐
                    │ Send Request  │
                    └───────┬───────┘
                            ↓
                    ┌───────────────┐
                    │Accept Request │
                    └───────┬───────┘
                            ↓
                    ┌───────────────┐
                    │   Connected   │
                    └───────┬───────┘
                            ↓
                    ┌───────────────┐
                    │ Real-Time Chat│
                    └───────┬───────┘
                            ↓
                    ┌───────────────┐
                    │ Skill Exchange│
                    └───────────────┘
```

---

# 🛠 Technology Stack

## Frontend

| Technology                | Purpose                                |
| ------------------------- | -------------------------------------- |
| **React.js**              | Building the user interface            |
| **Vite**                  | Frontend development and build tooling |
| **Tailwind CSS**          | Responsive UI styling                  |
| **React Router**          | Client-side routing                    |
| **Axios**                 | HTTP/API communication                 |
| **TanStack React Query**  | Server-state and API data management   |
| **Zustand**               | Client-side state and theme management |
| **Stream Chat React SDK** | Real-time chat interface               |

---

## Backend

| Technology          | Purpose                          |
| ------------------- | -------------------------------- |
| **Node.js**         | JavaScript runtime               |
| **Express.js**      | Backend framework                |
| **MongoDB**         | NoSQL database                   |
| **Mongoose**        | MongoDB object modeling          |
| **JWT**             | Authentication and authorization |
| **bcrypt**          | Password hashing                 |
| **Stream Chat API** | Real-time communication          |

---

# 🏗 System Architecture

SkillSwap follows a modular full-stack architecture.

```text
                    CLIENT
                      │
                      ▼
            ┌──────────────────┐
            │  React + Vite    │
            │  Tailwind CSS    │
            │  React Router    │
            └────────┬─────────┘
                     │
                     │ Axios / REST API
                     ▼
            ┌──────────────────┐
            │    Express.js    │
            │      Server      │
            └────────┬─────────┘
                     │
             Middleware Layer
                     │
        ┌────────────┴────────────┐
        │                         │
 Authentication              Route Protection
        │                         │
        └────────────┬────────────┘
                     ▼
              Controllers
                     │
                     ▼
               Mongoose
                     │
                     ▼
                MongoDB
                     
                     │
                     │
                     ▼
              Stream Chat API
                     │
                     ▼
             Real-Time Messaging
```

---

# 🧩 Application Modules

The application is divided into several major modules.

### 1. Authentication Module

Responsible for:

* Registration
* Login
* Logout
* JWT generation
* Password hashing
* Authentication validation

### 2. User Module

Responsible for:

* User profiles
* Profile information
* Skills
* Languages
* Profile updates

### 3. Onboarding Module

Responsible for collecting additional user information after registration.

### 4. Matching Module

Responsible for discovering relevant users based on their skills and learning interests.

### 5. Connection Module

Responsible for:

* Sending requests
* Receiving requests
* Accepting requests
* Managing connections

### 6. Chat Module

Responsible for real-time communication using Stream Chat.

### 7. Theme Module

Responsible for managing:

* Light mode
* Dark mode

using Zustand.

---

# 🔒 Authentication & Security

Security is an important part of the SkillSwap architecture.

### JWT Authentication

JSON Web Tokens are used to authenticate users and authorize access to protected resources.

### bcrypt Password Hashing

Passwords are never stored directly in plain text.

Instead:

```text
User Password
      ↓
    bcrypt
      ↓
Hashed Password
      ↓
    MongoDB
```

### HTTP-Only Cookies

Authentication information is stored using HTTP-only cookies to reduce exposure to client-side JavaScript.

### Protected Routes

Middleware verifies authentication before allowing access to protected backend routes.

```text
Client Request
      ↓
Authentication Middleware
      ↓
Is User Authenticated?
     / \
   Yes   No
   ↓      ↓
Continue  Reject
```

### Environment Variables

Sensitive configuration such as:

* Database credentials
* JWT secrets
* Stream Chat credentials

is managed through environment variables instead of being hardcoded into the application.

---

# 🗄 Database

SkillSwap uses **MongoDB** with **Mongoose** for database management.

The database stores application information such as:

* User accounts
* User profiles
* Skills
* Languages
* Connections
* Requests
* Other application-related data

Mongoose provides schema-based data modeling and simplifies interaction between the Express backend and MongoDB.

---

# 📁 Project Structure

A modular structure is used to keep the application organized and maintainable.

```text
SkillSwap/
│
├── frontend/
│   ├── src/
│   │   ├── components/
│   │   ├── pages/
│   │   ├── hooks/
│   │   ├── lib/
│   │   ├── store/
│   │   ├── api/
│   │   └── App.jsx
│   │
│   ├── public/
│   ├── package.json
│   └── vite.config.js
│
├── backend/
│   ├── controllers/
│   ├── models/
│   ├── routes/
│   ├── middleware/
│   ├── lib/
│   ├── server.js
│   ├── package.json
│   └── .env
│
├── README.md
└── .gitignore
```

> The exact folder structure may vary depending on the implementation.

---

# ⚙️ Installation & Setup

## Prerequisites

Make sure the following are installed:

* Node.js
* npm
* MongoDB / MongoDB Atlas
* Git

You will also need a **Stream Chat** account for the real-time messaging functionality.

---

## 1. Clone the Repository

```bash
git clone https://github.com/your-username/skillswap.git
```

Navigate into the project:

```bash
cd skillswap
```

---

## 2. Install Backend Dependencies

```bash
cd backend
npm install
```

---

## 3. Install Frontend Dependencies

Open another terminal:

```bash
cd frontend
npm install
```

---

# 🔑 Environment Variables

Create a `.env` file inside the backend directory.

Example:

```env
PORT=5000

MONGODB_URI=your_mongodb_connection_string

JWT_SECRET=your_jwt_secret

STREAM_API_KEY=your_stream_api_key
STREAM_API_SECRET=your_stream_api_secret
```

> Never commit your `.env` file to GitHub. Add it to `.gitignore`.

---

# ▶️ Running the Application

## Start the Backend

Inside the `backend` directory:

```bash
npm run dev
```

The backend server will start on the configured port.

---

## Start the Frontend

Inside the `frontend` directory:

```bash
npm run dev
```

Vite will provide a local development URL.

Open the provided URL in your browser.

---

# 🔌 API Overview

The backend exposes RESTful APIs for different application modules.

### Authentication

```text
POST   /api/auth/register
POST   /api/auth/login
POST   /api/auth/logout
GET    /api/auth/me
```

### User / Profile

```text
GET    /api/users/profile
PUT    /api/users/profile
GET    /api/users/recommendations
```

### Connection Requests

```text
POST   /api/users/request/:id
GET    /api/users/requests
POST   /api/users/request/:id/accept
```

> API routes may vary depending on the final backend implementation.

---

# 📈 Future Enhancements

The project can be extended with additional features such as:

* ⭐ User ratings and reviews
* 🏆 Skill verification
* 📅 Skill-exchange session scheduling
* 🔔 Notifications
* 🤖 AI-powered skill recommendations
* 🧠 Advanced matching algorithms
* 📊 Learning progress tracking
* 👥 Group learning
* 📹 Video calling
* 🏅 Gamification and achievement badges
* 🔎 Advanced search and filtering
* 📱 Dedicated mobile application

---

# 🎓 Learning Outcomes

This project provides practical experience in:

* Full-stack MERN development
* React component architecture
* REST API development
* Express.js backend development
* MongoDB database design
* Mongoose ODM
* JWT authentication
* Password hashing with bcrypt
* HTTP-only cookie authentication
* Protected routes
* Middleware implementation
* State management with Zustand
* Server-state management with TanStack React Query
* Real-time communication
* Third-party API integration
* Responsive UI development
* Dark/light theme implementation
* Modular MVC architecture
* Environment variable management
* Git and GitHub workflow

---

# 🤝 Contributing

Contributions are welcome!

If you would like to contribute:

1. Fork the repository
2. Create a new branch

```bash
git checkout -b feature/your-feature
```

3. Make your changes
4. Commit your changes

```bash
git commit -m "Add: your feature"
```

5. Push the branch

```bash
git push origin feature/your-feature
```

6. Open a Pull Request

---

# 📜 License

This project is developed for **educational and academic purposes**.

You may modify and extend the project according to your requirements.

---

# 👨‍💻 Author

**Sudhanshu Kumar Malhotra**

B.Tech — Computer Science & Engineering

---

## ⭐ Support

If you find this project useful or interesting, consider giving the repository a ⭐ on GitHub.

---

### Built with ❤️ using the MERN Stack
