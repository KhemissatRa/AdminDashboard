import React from 'react';
import { Link, useLocation } from 'react-router-dom';
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
    items: [
      { to: '/', label: 'Dashboard', icon: <AnalyticsIcon /> },
    ],
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

  return (
    <aside className="bg-white w-64 min-h-full rounded-xl shadow-md hover:shadow-lg p-4 transition-shadow duration-300 space-y-8">
      {menuSections.map((section, i) => (
        <div key={i}>
          <h2 className="text-blue-900 font-bold text-lg border-b-2 border-blue-600 mb-4">
            {section.title.slice(0, 2)}
            <span className="text-black">{section.title.slice(2)}</span>
          </h2>
          <ul className="space-y-4 text-lg font-medium">
            {section.items.map((item, idx) => {
              const isActive = location.pathname === item.to;
              return (
                <li key={idx}>
                  <Link
                    to={item.to}
                    className={`flex items-center space-x-3 px-3 py-2 rounded-lg transition-all duration-200 ${
                      isActive
                        ? 'bg-blue-100 text-blue-800 font-semibold'
                        : 'text-gray-700 hover:bg-gray-100'
                    }`}
                  >
                    <span className="text-blue-900">{item.icon}</span>
                    <span>{item.label}</span>
                  </Link>
                </li>
              );
            })}
          </ul>
        </div>
      ))}
    </aside>
  );
}
