// Home.jsx
import React from 'react';
import Navbar from './navbar';
import Sidebar from './sidebar';
import { Outlet } from 'react-router-dom';

export default function Home() {
  return (
    <div className="flex min-h-screen bg-gray-100">
      {/* Sidebar */}
      <Sidebar />

      {/* Main content */}
      <div className="flex-1 flex flex-col">
        {/* Navbar */}
        <div className="w-full bg-white shadow-sm border-b border-gray-200">
          <Navbar />
        </div>

        {/* Page content */}
        <main className="flex-1 p-4 overflow-auto">
          <Outlet />
        </main>
      </div>
    </div>
  );
}
