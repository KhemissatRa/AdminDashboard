import React, { useState } from 'react';
import { Link, useLocation } from 'react-router-dom';
import MenuIcon from '@mui/icons-material/Menu';
import CloseIcon from '@mui/icons-material/Close';
import AnalyticsIcon from '@mui/icons-material/Analytics';
import AccessibilityIcon from '@mui/icons-material/Accessibility';
import AdUnitsIcon from '@mui/icons-material/AdUnits';
import AddAlarmIcon from '@mui/icons-material/AddAlarm';
import AddBoxIcon from '@mui/icons-material/AddBox';
import AttractionsIcon from '@mui/icons-material/Attractions';
import CancelIcon from '@mui/icons-material/Cancel';

const menuSections = [
  {
    title: 'Dashboard',
    items: [{ to: '/', label: 'Dashboard', icon: <AnalyticsIcon /> }],
  },
  {
    title: 'List',
    items: [
      { to: '/user', label: 'Users', icon: <AccessibilityIcon /> },
      { to: '/product', label: 'Products', icon: <AdUnitsIcon /> },
      { to: '/orders', label: 'Orders', icon: <AddAlarmIcon /> },
    ],
  },
  {
    title: 'Useful',
    items: [
      { to: '/stats', label: 'Stats', icon: <AddBoxIcon /> },
      { to: '/settings', label: 'Settings', icon: <AttractionsIcon /> },
      { to: '/logout', label: 'Logout', icon: <CancelIcon /> },
    ],
  },
];

export default function Sidebar() {
  const location = useLocation();
  const [open, setOpen] = useState(false);

  return (
    <>
      {/* Toggle Button for Mobile */}
      <button
        className="sm:hidden fixed top-4 left-4 z-50 text-blue-700 p-2 rounded-md bg-white shadow-md"
        onClick={() => setOpen(true)}
      >
        <MenuIcon />
      </button>

      {/* Sidebar */}
      <div
        className={`fixed top-0 left-0 z-40 h-full w-64 bg-white shadow-xl transform transition-transform duration-300 sm:static sm:translate-x-0 ${
          open ? 'translate-x-0' : '-translate-x-full'
        }`}
      >
        {/* Close button for mobile */}
        <div className="flex sm:hidden justify-end p-4">
          <button onClick={() => setOpen(false)} className="text-gray-700">
            <CloseIcon />
          </button>
        </div>

        <nav className="space-y-8 p-5">
          {menuSections.map((section, index) => (
            <div key={index}>
              <h2 className="text-blue-900 font-bold text-lg border-b border-blue-600 mb-4 pb-1">
                {section.title.slice(0, 2)}
                <span className="text-black">{section.title.slice(2)}</span>
              </h2>
              <ul className="space-y-2">
                {section.items.map((item, idx) => {
                  const isActive = location.pathname === item.to;
                  return (
                    <li key={idx}>
                      <Link
                        to={item.to}
                        onClick={() => setOpen(false)} // Close sidebar on nav
                        className={`flex items-center gap-3 px-4 py-2 rounded-md transition-colors duration-200 ${
                          isActive
                            ? 'bg-blue-100 text-blue-800 font-semibold'
                            : 'text-gray-700 hover:bg-gray-100'
                        }`}
                      >
                        <span className="text-blue-800">{item.icon}</span>
                        <span className="truncate">{item.label}</span>
                      </Link>
                    </li>
                  );
                })}
              </ul>
            </div>
          ))}
        </nav>
      </div>

      {/* Overlay (only on mobile when sidebar is open) */}
      {open && (
        <div
          className="fixed inset-0 bg-black opacity-30 z-30 sm:hidden"
          onClick={() => setOpen(false)}
        />
      )}
    </>
  );
}

