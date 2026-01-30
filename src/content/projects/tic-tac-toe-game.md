## 🎲 Tic Tac Toe Game: State Machine & Orientation-Based Layouts

### 📄 Overview & Tech Stack
A modern, fully interactive version of the classic Tic-Tac-Toe game. I built this project to focus on high-quality user experience and to practice implementing complex decision-making algorithms.

* **Language:** JavaScript
* **Framework:** React
* **State Management:** Redux (my first implementation of this library)
* **Styling:** CSS Modules (fully responsive for mobile and desktop)

### ⚙️ Game Logic & State Structure
To ensure the game is intuitive and bug-free, I designed a clear flow for the user:
* **Setup Stage:** Users can personalize their experience by entering names and choosing their symbol (X or O).
* **Opponent Selection:** A choice between Local Multiplayer (play with a friend) or Single Player (vs. CPU).
* **Gameplay Flow:** Managing turns, pause functionality, and automatic detection of game results.
* **Score Tracking:** The system keeps track of Wins, Losses, and Draws throughout the session.

### 🚀 Challenges

**1. Evolution of the AI logic (Three-stage development)**
* **The Problem:** Creating a CPU opponent that is fun and challenging to play against.
* **The Process:** 1. Initially, I used **random moves** (only checking for empty cells), which was too easy.
    2. Then, I added **logic-based rules** (`if` statements) to react to immediate threats (e.g., blocking a win).
    3. Finally, I implemented the **Minimax algorithm**, allowing the AI to predict future moves.
* **The Result:** This shift from "random" to "predictive" logic created a truly challenging experience for the player and taught me how to evolve a project through different technical stages.

**2. Managing a predictable game state**
* **Problem:** Handling multiple game phases (naming, playing, pausing, and scoring) without bugs.
* **Solution:** I used **Redux** to create a single "source of truth." This ensures the UI always updates correctly, regardless of how the game progresses.

### 🎓 Key Learnings
* **User-Centric Development:** Designing features (like name selection and pause) specifically to improve the player’s experience.
* **Algorithm Mastery:** Deep-diving into the Minimax algorithm and learning how AI evaluates game theory.
* **Predictable State:** Gaining hands-on experience in using Redux to manage application data efficiently.

### 📱 Responsive Design

![game mobile](/projects/tic-tac-toe-game/tic-tac-toe-game-view.png)
