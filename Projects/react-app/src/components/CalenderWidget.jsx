import React from "react";

export default function CalendarWidget() {
  const events = [
    { time: "9:00 AM", title: "Team Meeting" },
    { time: "11:30 AM", title: "Project Work" },
    { time: "2:00 PM", title: "Code Review" },
  ];

  return (
    <div>
      <h2 className="text-xl font-semibold mb-2 text-gray-800">Calendar</h2>
      <ul className="space-y-2 text-sm text-gray-700">
        {events.map((e, i) => (
          <li key={i} className="flex justify-between border-b pb-1">
            <span className="font-medium">{e.time}</span>
            <span>{e.title}</span>
          </li>
        ))}
      </ul>
      <p className="text-gray-400 text-xs mt-2">
        *Static example. Connect Google Calendar later*
      </p>
    </div>
  );
}
