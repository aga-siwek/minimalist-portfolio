## 📚 Personal Reading List Fullstack: Shelves, Progress Tracking & a Flask REST API

### 📄 Overview & Tech Stack

A fullstack reading tracker that turns a Frontend Mentor challenge into a deployable product. Users can search for books, organize them into built-in and custom shelves, log reading progress, rate and annotate titles, and set yearly reading goals. The frontend keeps all server data in a query cache for instant, optimistic UI updates, while the backend is a Flask REST API responsible for authentication, persistence, and validating book data against two external book APIs.

**Frontend**
- **Language:** TypeScript
- **Library:** React 19
- **Routing:** React Router v7
- **Server State:** TanStack Query v5 (no global store)
- **Styling:** Tailwind CSS v4, shadcn/ui
- **HTTP Client:** Axios

**Backend**
- **Language:** Python 3.9+
- **Framework:** Flask
- **ORM:** SQLAlchemy
- **Database:** PostgreSQL (hosted on a dedicated external server), SQLite (testing)
- **Authentication:** JWT (Flask-JWT-Extended), Flask-Bcrypt for password hashing
- **Containerization:** Docker Compose
- **Deployment:** Render with Gunicorn
- **Testing:** pytest

### ⚙️ Key Features

- **Book Search:** Search by title, author, or ISBN, with results cross-validated between the Google Books API and Open Library.
- **Custom & Built-in Shelves:** Default shelves (All, Currently Reading, Want to Read, Read, Favorites) alongside user-created shelves.
- **Automatic Status Transitions:** Logging the first page read moves a book to "currently reading"; reaching the final page marks it "finished".
- **Progress Tracking:** Page counts, percentage complete, personal notes, and star ratings per book.
- **Yearly Reading Goals:** Set and visualize progress toward an annual reading target.
- **Optimistic Updates:** Shelf and status changes appear instantly in the UI, with automatic rollback if the request fails.
- **Secure Access:** Stateless JWT authentication with protected routes and per-user data isolation.
- **Responsive UI:** Mobile tab navigation and a desktop sidebar layout.

### 🚀 Challenges

**1. Reconciling Two Book Data Sources**

- **The Problem:** Google Books API is the primary search source but doesn't reliably distinguish audiobooks from print editions, and metadata (covers, titles) is often inconsistent.
- **The Solution:** I validated every Google Books search result against Open Library before returning it to the client, filtering out audiobooks and normalizing cover images and titles.
- **The Result:** Search results are consistently accurate print-edition matches with reliable cover art.

**2. Keeping the UI Instant Without a Global Store**

- **The Problem:** Shelf moves, status changes, and progress updates needed to feel instant, without reaching for a global state manager.
- **The Solution:** I moved all server data into TanStack Query's cache and implemented optimistic updates, mutating the cache immediately and rolling back automatically on error.
- **The Result:** Shelf and progress changes render with no perceptible delay, while staying consistent with the server in the background.

**3. Automating Reading Status from Progress Logs**

- **The Problem:** Manually toggling a book's status (want to read / currently reading / finished) is easy to forget and creates inconsistent data.
- **The Solution:** The API automatically transitions a book's status based on logged page progress — to "currently_reading" on the first entry, and "finished" once the last page is logged.
- **The Result:** Shelf state always reflects actual reading activity without extra user input.

**4. Running a Real, Deployable API**

- **The Problem:** Going beyond a typical challenge submission required production-grade authentication, persistence, and infrastructure rather than a mocked API.
- **The Solution:** I built JWT-based stateless authentication with hashed passwords, containerized the app with Docker Compose for reproducible development, and deployed it on Render with PostgreSQL hosted on a dedicated external server.
- **The Result:** A genuinely deployable API, with the trade-off that free-tier Render instances spin down after 15 minutes of inactivity, adding latency to the first request after idle periods.

**5. Testing Without External Dependencies**

- **The Problem:** Verifying business logic (status transitions, shelf rules, goal calculations) without hitting a live database or external book APIs in every test run.
- **The Solution:** I wrote a pytest suite running against an in-memory SQLite database, isolating tests from PostgreSQL and from Google Books / Open Library.
- **The Result:** Fast, reliable tests that exercise real model and service logic without external network calls.

### 🎓 Key Learnings

- **Fullstack Integration:** Coordinating a React/TypeScript frontend with a Python Flask backend through JWT authentication.
- **Server-State Architecture:** Using TanStack Query as the sole source of server state, including optimistic updates and rollback.
- **External API Reconciliation:** Cross-validating data between two third-party APIs to compensate for gaps in either one.
- **ORM & Testing Discipline:** Modeling relational data (User, Book, Shelf, ReadingGoal, ReadingProgress) with SQLAlchemy and testing it in isolation with pytest.
- **Production Deployment:** Containerizing with Docker Compose and deploying to Render with a managed Postgres instance.

### 📱 Preview
