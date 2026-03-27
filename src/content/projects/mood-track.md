## 📊 Mood Tracker Frontend: Redux State & Data Visualization

### 📄 Overview & Tech Stack
A full-stack tracking application that transforms daily emotional logs into actionable insights. The project focuses on **real-time data synchronization**, where every user interaction triggers a global update of analytics, charts, and personalized content via a custom API.

* **Language:** TypeScript & Python
* **Framework:** React & Flask
* **State Management:** Redux Toolkit (AsyncThunks, ExtraReducers)
* **Styling:** CSS Modules
* **Data Source:** Flask-based RESTful API (Token Auth)

### ⚙️ Key Features
* **Dynamic Analytics:** Real-time calculation of mood averages and sleep duration based on user history.
* **Smart UI Logic:** Component rendering changes dynamically based on whether a daily log has been submitted.
* **Data Visualization:** Interactive charts reflecting emotional patterns and sleep trends over time.
* **Personalized Content:** Quote generation logic based on specific "feels" and user profile data.
* **Secure Access:** Full authentication flow using token-based security and protected routes.
* **Responsive UI:** Adaptive layout optimized for mobile, tablet, and desktop screens.

### 🚀 Challenges

**1. Managing Complex Global State**
* **The Problem:** The dashboard has many dependent elements (charts, stats, quotes). Using only `useState` made it difficult to refresh all components simultaneously when a new log was added.
* **The Solution:** I refactored the app to use **Redux Toolkit**. By implementing **extraReducers**, I ensured that a single "fulfilled" API action updates the entire global store.
* **The Result:** All dashboard components (charts and averages) update instantly and stay in sync without requiring a page reload.

**2. Synchronizing Backend Data with UI States**
* **The Problem:** The app needs to know if a user has already posted today to prevent double entries and to show different UI components.
* **The Solution:** I developed logic that checks the latest entry's timestamp from the API. Based on this, the global state toggles the visibility of the "Add Log" form versus the "Daily Summary" view.
* **The Result:** A personalized user flow that adapts in real-time to the user's activity for that day.

**3. Transforming API Data for Visualization**
* **The Problem:** Raw data from the database is not ready for charts or averages; it requires mathematical processing.
* **The Solution:** I wrote helper functions to aggregate and calculate averages (mood scores, sleep hours) directly from the Redux store before passing them to the charting components.
* **The Result:** Accurate, visual representations of emotional trends that provide immediate value to the user.

### 🎓 Key Learnings
* **Redux Toolkit:** Mastering the lifecycle of asynchronous requests (pending/fulfilled/rejected).
* **Data Processing:** Learning how to transform raw API responses into meaningful statistics and chart data.
* **Conditional Rendering:** Using backend-driven states to manage complex UI transitions.
* **Full-Stack Integration:** Coordinating a React frontend with a Python Flask backend through secure token-based authentication.

### 📱 Preview