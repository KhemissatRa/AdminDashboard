import React from 'react';
import SearchIcon from '@mui/icons-material/Search';
import NotificationsNoneIcon from '@mui/icons-material/NotificationsNone';
import AccountCircleIcon from '@mui/icons-material/AccountCircle';

export default function Navbar() {
  return (
    <div className="w-full flex items-center justify-between px-6 py-4 bg-white shadow-md border-b-4 border-blue-900 rounded-md hover:shadow-lg transition-shadow duration-300">
      
      {/* Brand */}
      <div className="text-2xl font-bold italic text-blue-600">
        Dash<span className="text-blue-900">Admin</span>
      </div>

      {/* Search */}
      <div className="flex items-center bg-gray-100 px-3 py-1 rounded-full shadow-inner">
        <SearchIcon className="text-gray-500 mr-2" />
        <input
          type="text"
          placeholder="Search..."
          className="bg-transparent outline-none text-sm"
        />
      </div>

      {/* Right section: Icons & User */}
      <div className="flex items-center gap-6">
        <NotificationsNoneIcon className="text-gray-600 cursor-pointer hover:text-blue-700 transition" />
        <AccountCircleIcon className="text-gray-600 cursor-pointer hover:text-blue-700 transition" />
        <span className="text-gray-700 font-medium hidden sm:block">Admin</span>
      </div>
    </div>
  );
}
