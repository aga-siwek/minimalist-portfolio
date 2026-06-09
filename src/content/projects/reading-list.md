⏺ # 📚 Personal Reading List: Dual-Source Book Search & Reading Tracker — Full-Stack

  ## 📄 Overview & Tech Stack

  A full-stack reading tracker built from a Frontend Mentor challenge, extended into a production-ready application with a custom API. Users can search for books in any
  language, build a personal library, track reading progress page by page, organise books into shelves, and set yearly reading goals. The project focuses on reliable data
  aggregation from multiple external APIs and seamless synchronisation between UI state and the backend.
  
  **Frontend**
  - Language: TypeScript
  - Framework: React 19 + Vite
  - Data Fetching: TanStack Query (queries, mutations, optimistic updates)
  - API Communication: REST API via Axios
  - Routing: React Router v7
  - Styling: Tailwind CSS v4 + shadcn/ui
  - Loading UX: shadcn Skeleton components used as structural mockups to prevent layout shifts during data fetching

  **Backend**
  - Language: Python
  - Framework: Flask
  - ORM: SQLAlchemy
  - Database: PostgreSQL
  - Authentication: JWT (Flask-JWT-Extended)
  - Testing: pytest
  - Deployment: Docker + Render

  ---

  ## ⚙️ Key Features

  - **Book search** — multilingual search across Open Library and Google Books with automatic result enrichment
  - **Reading list** — add books with status (want to read / currently reading / finished), favourite flag, and filter by shelf or status
  - **Star rating & notes** — rate finished books with a 1–5 star system and attach personal notes or reviews to any book
  - **Reading progress** — manually log current page; progress bar and percentage update automatically, status switches to *finished* when the last page is reached
  - **Shelves** — create custom named collections, assign books to multiple shelves, search and browse shelves; shelf selector opens as a bottom sheet on mobile and a modal on
  desktop
  - **Reading goals** — set a yearly target and track completion based on books marked as finished
  - **Optimistic UI** — rating, favourite, and status changes reflect instantly in the UI before the server responds, with automatic rollback on error
  - **Responsive layout** — sidebar navigation on desktop, bottom nav on mobile
  - **No layout shift** — skeleton screens mirror the exact structure of loaded content, keeping the layout stable during API calls

  ---

  ## 🚀 Challenges

  ### 1. Two APIs that speak different languages
  
  **The Problem:** No single free API reliably covers books in all languages, editions, and scripts. Google Books has rich metadata (descriptions, categories, covers) but its
  search index for non-English titles is inconsistent — the same Polish edition that appears on the Google Books website simply does not show up in the API search results. Open
  Library, on the other hand, has broad multilingual coverage but minimal metadata.
  
  **The Solution:** A dual-source architecture where each API is used for what it does best. Open Library handles the search — its index reliably returns results for Polish,
  French, Japanese, and other non-English titles, and crucially, each result includes a list of *all known ISBNs for that work*, including English-publisher ISBNs (starting
  with `9780`/`9781`). For each search candidate, those English ISBNs are sent to Google Books to retrieve the cover and validate the edition. The Polish title and Open Library
  cover take priority in the final response; Google data fills in descriptions and categories.

  **The Result:** A user searching for "Harry Potter i Kamień Filozoficzny" or "Listy z Afryki" gets results with correct titles, covers, and page counts — data that Google
  Books search alone would not return.

  ---

  ### 2. Slow free APIs — managing latency without degrading UX

  **The Problem:** Both Open Library and Google Books are free, rate-limited APIs with unpredictable response times. A single search triggers an Open Library query, followed by
  a parallel batch of Google Books ISBN lookups (one per search candidate). Each lookup can take 1–3 seconds; together they can block results for several seconds.

  **The Solution:** On the backend, the ISBN validation calls run concurrently using `ThreadPoolExecutor`, so all Google Books lookups happen in parallel instead of
  sequentially. On the frontend, TanStack Query caches every search query by key — repeated searches for the same term return instantly from cache. Skeleton screens matching
  the exact layout of search results and book detail pages are shown immediately on navigation, so the user sees structure instead of a blank screen while the APIs respond.
  
  **The Result:** Parallel execution cuts search time from `n × 1–3s` to roughly `1–3s` regardless of how many candidates are validated. Cache eliminates the wait entirely on
  repeat queries. Skeleton mockups keep the layout stable and give immediate visual feedback.

  ---

  ### 3. Keeping UI and server state in sync

  **The Problem:** The dashboard has many interdependent views — reading list, shelf contents, yearly goal progress. A single action (e.g. marking a book as finished) must
  update the book status, the reading progress bar, the goal counter, and any shelves the book appears in — all without a full page reload.

  **The Solution:** TanStack Query with targeted `invalidateQueries` calls. Each mutation declares exactly which query keys to invalidate on success, triggering background
  refetches for only the affected views. For fast interactions like toggling a favourite or changing a star rating, optimistic updates are applied immediately to the cache and
  rolled back automatically if the server returns an error.
  
  **The Result:** All views stay consistent after any user action. Optimistic updates make rating and status changes feel instant, with silent rollback on failure.

  ---

  ## 🎓 Key Learnings

  - **Dual-source data architecture** — designing a pipeline that combines two imperfect APIs into one reliable data source, using each for its strengths
  - **Concurrency on the backend** — using `ThreadPoolExecutor` to parallelise external API calls and reduce latency
  - **TanStack Query patterns** — query invalidation strategies, optimistic updates with rollback, and cache-key design for nested resources
  - **Skeleton-based loading UX** — using shadcn Skeleton components as structural mockups to eliminate layout shift and provide immediate visual feedback during slow API calls
  - **Responsive component design** — building components (like the shelf selector) that render as a bottom sheet on mobile and a modal on desktop without duplicating markup
  - **Full-stack integration** — coordinating JWT auth, CORS, and API contracts between a React frontend and a Flask backend deployed on separate platforms

✻ Churned for 14s
  
❯ nie bede miec ORM: SQLAlchemy tylko wlasna zewnetrzna baze danych                                                                                                             

⏺ # 📚 Personal Reading List — Full-Stack

  ## 📄 Overview & Tech Stack

  A full-stack reading tracker built from a Frontend Mentor challenge, extended into a production-ready application with a custom API. Users can search for books in any
  language, build a personal library, track reading progress page by page, organise books into shelves, and set yearly reading goals. The project focuses on reliable data
  aggregation from multiple external APIs and seamless synchronisation between UI state and the backend.
  
  **Frontend**
  - Language: TypeScript
  - Framework: React 19 + Vite
  - Data Fetching: TanStack Query (queries, mutations, optimistic updates)
  - API Communication: REST API via Axios
  - Routing: React Router v7
  - Styling: Tailwind CSS v4 + shadcn/ui
  - Loading UX: shadcn Skeleton components used as structural mockups to prevent layout shifts during data fetching

  **Backend**
  - Language: Python
  - Framework: Flask
  - Database: PostgreSQL (external)
  - Authentication: JWT (Flask-JWT-Extended)
  - Testing: pytest
  - Deployment: Docker + Render

  ---

  ## ⚙️ Key Features

  - **Book search** — multilingual search across Open Library and Google Books with automatic result enrichment
  - **Reading list** — add books with status (want to read / currently reading / finished), favourite flag, and filter by shelf or status
  - **Star rating & notes** — rate finished books with a 1–5 star system and attach personal notes or reviews to any book
  - **Reading progress** — manually log current page; progress bar and percentage update automatically, status switches to *finished* when the last page is reached
  - **Shelves** — create custom named collections, assign books to multiple shelves, search and browse shelves; shelf selector opens as a bottom sheet on mobile and a modal on
  desktop
  - **Reading goals** — set a yearly target and track completion based on books marked as finished
  - **Optimistic UI** — rating, favourite, and status changes reflect instantly in the UI before the server responds, with automatic rollback on error
  - **Responsive layout** — sidebar navigation on desktop, bottom nav on mobile
  - **No layout shift** — skeleton screens mirror the exact structure of loaded content, keeping the layout stable during API calls

  ---

  ## 🚀 Challenges

  ### 1. Two APIs that speak different languages
  
  **The Problem:** No single free API reliably covers books in all languages, editions, and scripts. Google Books has rich metadata (descriptions, categories, covers) but its
  search index for non-English titles is inconsistent — the same Polish edition that appears on the Google Books website simply does not show up in the API search results. Open
  Library, on the other hand, has broad multilingual coverage but minimal metadata.
  
  **The Solution:** A dual-source architecture where each API is used for what it does best. Open Library handles the search — its index reliably returns results for Polish,
  French, Japanese, and other non-English titles, and crucially, each result includes a list of *all known ISBNs for that work*, including English-publisher ISBNs (starting
  with `9780`/`9781`). For each search candidate, those English ISBNs are sent to Google Books to retrieve the cover and validate the edition. The Polish title and Open Library
  cover take priority in the final response; Google data fills in descriptions and categories.

  **The Result:** A user searching for "Harry Potter i Kamień Filozoficzny" or "Listy z Afryki" gets results with correct titles, covers, and page counts — data that Google
  Books search alone would not return.

  ---

  ### 2. Slow free APIs — managing latency without degrading UX

  **The Problem:** Both Open Library and Google Books are free, rate-limited APIs with unpredictable response times. A single search triggers an Open Library query, followed by
  a parallel batch of Google Books ISBN lookups (one per search candidate). Each lookup can take 1–3 seconds; together they can block results for several seconds.

  **The Solution:** On the backend, the ISBN validation calls run concurrently using `ThreadPoolExecutor`, so all Google Books lookups happen in parallel instead of
  sequentially. On the frontend, TanStack Query caches every search query by key — repeated searches for the same term return instantly from cache. Skeleton screens matching
  the exact layout of search results and book detail pages are shown immediately on navigation, so the user sees structure instead of a blank screen while the APIs respond.
  
  **The Result:** Parallel execution cuts search time from `n × 1–3s` to roughly `1–3s` regardless of how many candidates are validated. Cache eliminates the wait entirely on
  repeat queries. Skeleton mockups keep the layout stable and give immediate visual feedback.

  ---

  ### 3. Keeping UI and server state in sync

  **The Problem:** The dashboard has many interdependent views — reading list, shelf contents, yearly goal progress. A single action (e.g. marking a book as finished) must
  update the book status, the reading progress bar, the goal counter, and any shelves the book appears in — all without a full page reload.

  **The Solution:** TanStack Query with targeted `invalidateQueries` calls. Each mutation declares exactly which query keys to invalidate on success, triggering background
  refetches for only the affected views. For fast interactions like toggling a favourite or changing a star rating, optimistic updates are applied immediately to the cache and
  rolled back automatically if the server returns an error.
  
  **The Result:** All views stay consistent after any user action. Optimistic updates make rating and status changes feel instant, with silent rollback on failure.

  ---

  ## 🎓 Key Learnings

  - **Dual-source data architecture** — designing a pipeline that combines two imperfect APIs into one reliable data source, using each for its strengths
  - **Concurrency on the backend** — using `ThreadPoolExecutor` to parallelise external API calls and reduce latency
  - **TanStack Query patterns** — query invalidation strategies, optimistic updates with rollback, and cache-key design for nested resources
  - **Skeleton-based loading UX** — using shadcn Skeleton components as structural mockups to eliminate layout shift and provide immediate visual feedback during slow API calls
  - **Responsive component design** — building components (like the shelf selector) that render as a bottom sheet on mobile and a modal on desktop without duplicating markup
  - **Full-stack integration** — coordinating JWT auth, CORS, and API contracts between a React frontend and a Flask backend deployed on separate platforms