## 🌤️ Weather App: API Integration & Data Logic
### 📄 Overview & Tech Stack
Build a responsive weather app with search functionality, unit conversion, and detailed forecasts using the Open-Meteo API. The project focuses on handling complex data structures and ensuring a smooth user experience across different time zones.

* **Language:** TypeScript
* **Framework:** React
* **State Management:** React Hooks (useState, useEffect)
* **Styling:** CSS Modules
* **Data Source:** Open-Meteo API (Geocoding & Weather endpoints)

### ⚙️ Key Features
* **Location Search:** Converts city names into coordinates via Geocoding API.
* **Unit Switching:** Toggle between Metric and Imperial systems for all metrics.
* **Detailed Forecasts:** 7-day daily overview and 24-hour breakdown.
* **Timezone Management:** Hourly data starts from the searched city's current local time.
* **Responsive UI:** Adaptive layout for mobile, tablet, and desktop screens.

### 🚀 Challenges

**1. Managing Chained API Requests**
* **The Problem:** The weather data requires latitude and longitude, but the user provides a city name string.
* **The Solution:** I implemented a sequence where the first API call (Geocoding) returns coordinates. These values are then stored and used as parameters for the second API call (Weather Data).
* **The Result:** The application correctly links user input to the specific geographical data needed for the forecast.

**2. Reducing Network Requests for Unit Conversion**
* **The Problem:** Initially, every change from Celsius to Fahrenheit triggered a new API call, which was inefficient.
* **The Solution:** I modified the logic to fetch data once in Metric. I then wrote frontend functions to mathematically convert the values to Imperial only when needed.
* **The Result:** Instant unit switching without extra server load or loading spinners.

**3. Correcting Timezone Offset in Forecasts**
* **The Problem:** The hourly forecast originally used the user's browser time, showing incorrect hours for cities in different timezones.
* **The Solution:** I researched the API documentation and added a `timezone` parameter to the query. I also wrote a sorting function that rearranges the days of the week so that the forecast always begins with "Today" relative to the searched city.
* **The Result:** The forecast always displays the correct local time and date, regardless of where the user is located.

### 🎓 Key Learnings
* **TypeScript:** Successfully implemented TypeScript for the first time in a project, learning to use interfaces for API data and handling types in React.
* **Documentation Research:** Using API docs to find specific parameters to solve logic problems.
* **Performance:** Moving calculations to the client-side to save on API calls.
* **Date Manipulation:** Working with the JavaScript Date object and array reordering.

### 📱 Preview

<div class="image-grid">

![Weather App Desktop](/projects/weather/desktop.png)
![Weather App Mobile View](/projects/weather/mobile-view.png)

</div>