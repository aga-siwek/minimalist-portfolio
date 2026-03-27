## 🔐 Mood Tracker Backend: Flask REST API & Token Auth

### 📄 Overview & Tech Stack

A RESTful API built to manage user authentication and structured data persistence for the Mood Tracker application. This backend serves as the primary data source, delivering raw JSON logs used by the frontend for real-time analytics and visualization.

- **Language:** Python
- **Framework:** Flask
- **ORM:** SQLAlchemy
- **Database:** SQLite
- **Authentication:** Bearer Token (JWT-based)
- **Testing:** Postman API Suite
- **API Architecture:** REST

### ⚙️ Key Features

- **Full CRUD Operations:** Resource endpoints for creating, reading, and updating user profiles and mood entries.
- **Bearer Token Authentication:** Secure access control using industry-standard tokens for all protected routes.
- **Relational Data Modeling:** One-to-many database schema (User <-> Logs) ensuring data integrity.
- **Raw Data Delivery:** Optimized JSON responses designed for frontend-side processing and charting.
- **Input Validation:** Server-side checks to ensure log consistency (mood scores, sleep hours, timestamps).

### 🚀 Challenges

**1. Implementing Secure Access Control**

- **The Problem:** Preventing unauthorized access to private logs and ensuring data is siloed per user.
- **The Solution:** Integrated **Bearer Token authentication**. I developed custom decorators to validate tokens in the Authorization header and filter database queries by the specific User ID.
- **The Result:** A secure API where users can only interact with their own data.

**2. API Reliability & Testing**

- **The Problem:** Potential for regressions or incorrect status codes during manual development.
- **The Solution:** Built a comprehensive testing suite in **Postman**. Automated flows to verify registration, login (token capture), and every CRUD operation against expected JSON structures.
- **The Result:** 100% endpoint verification with consistent status codes, simplifying the frontend integration process.

**3. Efficient Data Relationships**

- **The Problem:** Linking logs to users while maintaining a clean, queryable database structure.
- **The Solution:** Utilized **SQLAlchemy** to implement a relational schema with foreign keys. This ensures predictable data retrieval and allows the frontend to fetch complete histories for analysis.
- **The Result:** Scalable database logic that serves as a reliable foundation for the application's analytics.

### 🎓 Key Learnings

- **RESTful Standards:** Practical application of HTTP methods and status codes in a production-like environment.
- **ORM Mastery:** Managing database operations and relationships via SQLAlchemy instead of raw SQL.
- **Security Implementation:** Handling password hashing and secure session management via Bearer tokens.
- **API Lifecycle:** Using Postman for systematic debugging and verification of server-side logic.
