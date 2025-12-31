import React from "react";
import Dashboard from "./components/Dashboard";

export default function App() {
  return (
    <div className="min-h-screen bg-gray-50 text-gray-900 font-sans">
      {/* Header */}
      <header className="bg-white shadow-md py-4 px-6 flex items-center justify-between sticky top-0 z-50">
        <h1 className="text-2xl font-bold text-blue-600 tracking-wide">
          Personal Dashboard
        </h1>
        <span className="text-sm text-gray-500">Welcome back 👋</span>
      </header>

      {/* Main Content */}
      <main className="max-w-7xl mx-auto px-4 py-8">
        <Dashboard />
      </main>

      {/* Footer */}
      <footer className="text-center text-gray-400 text-sm py-4 border-t bg-white mt-6">
        © {new Date().getFullYear()} My Dashboard • Built with ❤️ using React
      </footer>
    </div>
  );
}
