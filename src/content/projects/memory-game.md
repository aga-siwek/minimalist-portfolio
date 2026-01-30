### 📄 Overview & Tech Stack
A web-based logic game where players find matching pairs of numbers or icons. I focused on creating a fast and smooth experience that challenges the user's memory across different grid sizes.

* **Language:** JavaScript
* **Framework:** React
* **State Management:** Redux (Managing the entire game flow)
* **Styling:** CSS Modules (Clean and fully responsive design)

### ⚙️ Game Logic & State Structure
The game is highly flexible and changes based on what the user selects at the start:
* **Customizable Setup:** Users can choose the theme (Numbers or Icons), number of players (1-4), and grid size (4x4 or 6x6).
* **Randomized Board:** Each game generates a completely new, shuffled list of items so that no two games are the same.
* **Match Logic:** The system tracks which cards are clicked. If they match, they stay visible. If not, they are hidden again after a short delay.
* **Smart Scoring:** * **Solo Mode:** Tracks the time spent and the number of moves.
    * **Multiplayer:** Tracks points for each player and shows a final winner's table.

### 🚀 Challenges

**1. Managing many game options at once**
* **The Problem:** I had to build a system that generates a board based on many different choices (size of the grid, type of icons, and number of players).
* **The Solution:** I used **Redux** and created special **utility functions**. When the game starts, these functions create a random list based on the user's choice. The system then "watches" every click to check if the two selected items are the same.
* **The Result:** A stable system that handles all game variations without bugs, ensuring that pairs are always matched correctly.

**2. Different rules for Solo and Multiplayer**
* **The Problem:** The game needs to behave differently depending on how many people are playing. In solo mode, you race against time; in multiplayer, you compete for points.
* **The Solution:** I created two separate logic flows. For one player, the system focuses on a timer and move counter. For more players, it switches to a turn-based system where it counts scores for each person.
* **The Result:** Even though the game looks similar, the "under the hood" logic changes perfectly to match the selected mode.

### 🎓 Key Learnings
* **Advanced Redux:** Handling a global state that changes based on many variables.
* **Data Grid Management:** Working with complex board structures (4x4 and 6x6 arrays) and ensuring they randomize correctly.
* **Logical Thinking:** Building a system that can switch between two completely different ways of scoring (Time vs. Points).

### 📱 Responsive Design
![game mobile](/projects/memory-game/memory-game-res.png)