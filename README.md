# Crypto Hustle Dashboard

Crypto Hustle Dashboard is a React-based web application that provides real-time information about various cryptocurrencies. It allows users to view a list of cryptocurrencies, search for specific coins, see their current prices in USD, and view detailed information including historical price charts.

## Features

- Display a list of cryptocurrencies
- Real-time price updates for each cryptocurrency
- Search functionality to filter cryptocurrencies
- Responsive design with a side navigation bar
- Detailed view for each cryptocurrency
- 30-day historical price chart for each cryptocurrency
- React Router for navigation between views

## Technologies Used

- React
- React Router
- Vite
- CSS
- Recharts (for charts)
- CryptoCompare API

## Getting Started

### Prerequisites

- Node.js (v14 or later)
- npm (v6 or later)

### Installation

1. Clone the repository

2. Install dependencies:
   ```
   npm install
   ```

3. Create a `.env` file in the root directory and add your CryptoCompare API key:
   ```
   VITE_APP_API_KEY=your_api_key_here
   ```

4. Start the development server:
   ```
   npm run dev
   ```

5. Open your browser and navigate to `http://localhost:5173` to view the application.

## Project Structure

- `src/App.jsx`: Main component that fetches and displays cryptocurrency data
- `src/Components/CoinInfo.jsx`: Component for displaying individual cryptocurrency information
- `src/Components/CoinDetail.jsx`: Component for displaying detailed information about a specific cryptocurrency
- `src/Components/CoinChart.jsx`: Component for rendering the 30-day price chart
- `src/Components/SideNav.jsx`: Side navigation component
- `src/routes/Layout.jsx`: Layout component for the application
- `src/routes/DetailView.jsx`: Route component for the detailed cryptocurrency view
- `src/routes/NotFound.jsx`: Component for handling 404 errors
- `src/App.css`: Styles for the application

## Routing

The application uses React Router for navigation. The main routes are:

- `/`: Home page with the list of cryptocurrencies
- `/coinDetails/:symbol`: Detailed view for a specific cryptocurrency

## API Integration

This project uses the CryptoCompare API to fetch cryptocurrency data. The API key is stored in the `.env` file and accessed using `import.meta.env.VITE_APP_API_KEY`.

## Charts

The application uses Recharts to display a 30-day historical price chart for each cryptocurrency. The chart data is fetched from the CryptoCompare API and processed to show the open price for each day.
