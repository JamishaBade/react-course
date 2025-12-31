import React, { useState, useEffect } from "react";

export default function WeatherWidget() {
  const [city, setCity] = useState("New York");
  const [weather, setWeather] = useState(null);
  const [loading, setLoading] = useState(true);
  const apiKey = import.meta.env.VITE_OPENWEATHER_API_KEY;

  useEffect(() => {
    async function fetchWeather() {
      setLoading(true);
      try {
        const res = await fetch(
          `https://api.openweathermap.org/data/2.5/weather?q=${city}&units=metric&appid=${apiKey}`
        );
        const data = await res.json();
        setWeather(data);
      } catch (err) {
        console.error(err);
        setWeather(null);
      } finally {
        setLoading(false);
      }
    }
    if (apiKey) fetchWeather();
  }, [city, apiKey]);

  return (
    <div>
      <div className="flex items-center justify-between mb-4">
        <h2 className="text-xl font-semibold text-gray-800">Weather</h2>
        <span className="text-sm text-gray-400">OpenWeather</span>
      </div>

      <div className="flex gap-2 mb-4">
        <input
          className="flex-1 border rounded px-3 py-2 text-sm focus:ring-2 focus:ring-blue-400 focus:outline-none"
          value={city}
          onChange={(e) => setCity(e.target.value)}
          placeholder="Enter city..."
        />
        <button
          className="px-4 py-2 bg-blue-600 text-white rounded hover:bg-blue-700 transition"
          onClick={() => setCity(city)}
        >
          Refresh
        </button>
      </div>

      {loading ? (
        <p className="text-gray-500">Loading...</p>
      ) : weather && weather.main ? (
        <div className="text-center">
          <p className="text-3xl font-bold">
            {Math.round(weather.main.temp)}°C
          </p>
          <p className="capitalize text-gray-600">
            {weather.weather[0].description}
          </p>
          <p className="text-gray-400 text-sm mt-1">
            Humidity: {weather.main.humidity}% • Wind:{" "}
            {Math.round(weather.wind.speed)} m/s
          </p>
        </div>
      ) : (
        <p className="text-red-500">City not found or API error.</p>
      )}
    </div>
  );
}
