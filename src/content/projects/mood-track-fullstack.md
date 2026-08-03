## 📊 Mood Tracker Fullstack: Redux State, Heatmap Analytics & Flask REST API

### 📄 Overview & Tech Stack

A fullstack tracking application that transforms daily emotional logs into actionable insights. The frontend focuses on **real-time data synchronization**, where every user interaction triggers a global update of analytics, charts, and personalized content via a custom API. The backend is a RESTful Flask API responsible for authentication and structured data persistence, serving as the single source of truth for the frontend's analytics and visualization.

**Frontend**
- **Language:** TypeScript
- **Library:** React
- **State Management:** Redux Toolkit (AsyncThunks, ExtraReducers)
- **Styling:** Tailwind CSS

**Backend**
- **Language:** Python
- **Framework:** Flask
- **ORM:** SQLAlchemy
- **Database:** PostgreSQL (hosted on an external server)
- **Authentication:** Bearer Token (JWT-based)
- **Testing:** Postman API Suite
- **API Architecture:** REST

### ⚙️ Key Features

- **Mood Heatmap:** GitHub-style calendar heatmap with a year selector, color-coded mood scale, and a day-detail modal for browsing past logs.
- **Demo Mode:** One-click demo login with pre-generated data and an instant logout that wipes the temporary account in the background — no registration required.
- **Dynamic Analytics:** Real-time calculation of mood averages and sleep duration based on user history.
- **Smart UI Logic:** Component rendering changes dynamically based on whether a daily log has been submitted.
- **Data Visualization:** Interactive charts reflecting emotional patterns and sleep trends over time, with mood colors aligned across charts, heatmap, and icons.
- **Personalized Content:** Quote generation logic based on specific "feels" and user profile data.
- **Secure Access:** Full authentication flow using token-based security and protected routes, backed by a Bearer Token API.
- **Full CRUD Operations:** Resource endpoints for creating, reading, and updating user profiles and mood entries.
- **Relational Data Modeling:** One-to-many database schema (User <-> Logs) ensuring data integrity.
- **Responsive UI:** Adaptive layout optimized for mobile, tablet, and desktop screens.

### 🚀 Challenges

**1. Building a Calendar-Accurate Heatmap**

- **The Problem:** Rendering a GitHub-style yearly heatmap requires aligning logs to the correct week/day grid across year boundaries, while only showing a year selector when there's actually more than one year of data.
- **The Solution:** I computed week-aligned grid boundaries from January 1st and December 31st of the selected year, mapped logs into a lookup by date, and conditionally rendered the year selector based on the number of distinct years present in the data.
- **The Result:** An accurate, GitHub-style calendar view with a day-detail modal, that scales cleanly whether a user has a week or several years of history.

**2. Managing Complex Global State**

- **The Problem:** The dashboard has many dependent elements (charts, heatmap, stats, quotes). Using only `useState` made it difficult to refresh all components simultaneously when a new log was added.
- **The Solution:** I refactored the app to use **Redux Toolkit**. By implementing **extraReducers**, I ensured that a single "fulfilled" API action updates the entire global store.
- **The Result:** All dashboard components (charts, heatmap, and averages) update instantly and stay in sync without requiring a page reload.

**3. Frictionless Demo Access Without Data Leakage**

- **The Problem:** Letting visitors try the app instantly required generating a realistic temporary account, while making sure that account and its data never persist after the session ends.
- **The Solution:** I implemented a one-click demo login that seeds a temporary account with pre-generated mood and sleep history, paired with an instant client-side logout that fires the account-deletion request to the API in the background.
- **The Result:** Visitors get a full, no-signup preview of every feature — charts, heatmap, and analytics — with the demo account and its data automatically cleaned up on logout.

**4. Implementing Secure Access Control**

- **The Problem:** Preventing unauthorized access to private logs and ensuring data is siloed per user.
- **The Solution:** Integrated **Bearer Token authentication** on the API side, with custom decorators to validate tokens in the Authorization header and filter database queries by the specific User ID.
- **The Result:** A secure API where users can only interact with their own data.

**5. Transforming API Data for Visualization**

- **The Problem:** Raw data from the database is not ready for charts, heatmaps, or averages; it requires mathematical processing and date-based aggregation.
- **The Solution:** I wrote helper functions to sort logs chronologically and aggregate averages (mood scores, sleep hours) directly from the Redux store before passing them to the charting and heatmap components.
- **The Result:** Accurate, visual representations of emotional trends that provide immediate value to the user.

### 🎓 Key Learnings

- **Fullstack Integration:** Coordinating a React frontend with a Python Flask backend through secure token-based authentication.
- **Calendar & Date Logic:** Building grid-based date computations for a year-spanning heatmap.
- **Redux Toolkit:** Mastering the lifecycle of asynchronous requests (pending/fulfilled/rejected).
- **ORM Mastery:** Managing database operations and relationships via SQLAlchemy instead of raw SQL.
- **Data Processing:** Learning how to transform raw API responses into meaningful statistics and chart data.
- **API Lifecycle:** Using Postman for systematic debugging and verification of server-side logic.

### 📱 Preview
