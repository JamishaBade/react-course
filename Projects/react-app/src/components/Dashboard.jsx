import React from "react";
import WeatherWidget from "./WeatherWidget";
import NotesWidget from "./NotesWidget";
import NewsWidget from "./NewsWidget";
import CalendarWidget from "./CalenderWidget";

export default function Dashboard() {
  return (
    <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-6">
      <div className="bg-white p-6 rounded-2xl shadow-lg hover:shadow-2xl transition duration-300">
        <WeatherWidget />
      </div>

      <div className="bg-white p-6 rounded-2xl shadow-lg hover:shadow-2xl transition duration-300">
        <NotesWidget />
      </div>

      <div className="bg-white p-6 rounded-2xl shadow-lg hover:shadow-2xl transition duration-300">
        <NewsWidget />
      </div>

      <div className="bg-white p-6 rounded-2xl shadow-lg hover:shadow-2xl transition duration-300">
        <CalendarWidget />
      </div>
    </div>
  );
}
