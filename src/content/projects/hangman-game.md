## 🪓 Hangman Game: State Machine & Orientation-Based Layouts

### 📄 Overview & Tech Stack
A singleplayer web-based version of the classic Hangman game. I focused on building a clear logic flow where every user action moves the game into a specific, planned state.

* **Language:** JavaScript
* **Framework:** React
* **State Management:** Redux (Used for centralizing game logic and screen transitions)
* **Styling:** CSS Modules with custom Media Queries for mobile orientation

### ⚙️ Game Logic & State Machine
I used a **State Machine** approach to manage how the application moves between different screens and game phases:
* **Navigation Flow:** Controls transitions between the `Menu`, `Category Selection`, and `Gameplay`.
* **Dynamic Data:** The system imports word sets from a **JSON file** and filters them based on the user's chosen category.
* **Word Processing:** Logic that hides the target word and reveals characters only when a correct match is found.
* **Game Lifecycle:** A clear cycle from `Start Game` to `Pause` or `Summary`, managed by the Redux store.
* **Auto-Detection:** The system monitors lives and matched letters to trigger the `Win` or `Loss` state automatically.

### 🚀 Challenges

**1. Input Validation & Letter Matching**
* **The Problem:** Implementing a way to track guessed letters and handle words with repeating characters without errors.
* **The Solution:** I used **Redux** to keep the game data in one place. I wrote a **validation function** that scans the word whenever a player clicks a letter. If it's a match, the system updates all correct positions; if not, it reduces the lives counter.
* **The Result:** The game logic accurately updates the UI in real-time and correctly identifies when the game is over.

**2. Layout Challenges for Mobile Landscape**
* **The Problem:** Mobile devices in landscape (horizontal) mode have very little vertical space, which often makes the keyboard or game drawing overlap.
* **The Solution:** I used specific **CSS Media Queries** (`@media (orientation: landscape)`) to reorganize the UI. I adjusted the positions of the hangman drawing and the keyboard so they both remain visible on small, horizontal screens.
* **The Result:** The game stays fully playable and easy to navigate even when the user rotates their phone.

### 🎓 Key Learnings
* **Logic Architecture:** Planning the game flow with a State Machine diagram before writing the code.
* **Data Handling:** Learning to load and filter information from local **JSON files**.
* **Responsive Design:** Solving specific layout issues caused by mobile screen rotation.
* **Redux Toolkit:** Organizing state into slices and actions to keep the code manageable.

### 📱 Responsive & Orientation Design
![game mobile](/projects/hangman-game/hangman-game-res.png)