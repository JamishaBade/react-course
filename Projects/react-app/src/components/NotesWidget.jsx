import React, { useState, useEffect } from "react";

export default function NotesWidget() {
  const [notes, setNotes] = useState("");

  useEffect(() => {
    const saved = localStorage.getItem("dashboard-notes");
    if (saved) setNotes(saved);
  }, []);

  useEffect(() => {
    localStorage.setItem("dashboard-notes", notes);
  }, [notes]);

  return (
    <div className="flex flex-col h-full">
      <h2 className="text-xl font-semibold mb-2 text-gray-800">Notes</h2>
      <textarea
        className="flex-1 w-full border rounded px-3 py-2 text-sm resize-none focus:ring-2 focus:ring-blue-400 focus:outline-none"
        placeholder="Write your notes here..."
        value={notes}
        onChange={(e) => setNotes(e.target.value)}
      />
    </div>
  );
}
