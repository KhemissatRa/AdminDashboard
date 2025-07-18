import React from 'react';
import AccessibilityNewIcon from '@mui/icons-material/AccessibilityNew';
import CarRepairIcon from '@mui/icons-material/CarRepair';
import Inventory2Icon from '@mui/icons-material/Inventory2';
import EuroIcon from '@mui/icons-material/Euro';

export default function Widget({ type }) {
  let data;

  switch (type) {
    case "user":
      data = {
        title: "Users",
        isMoney: false,
        percentage: "10%",
        value: 1200,
        icon: (
          <AccessibilityNewIcon
            style={{
              color: "crimson",
              backgroundColor: "rgba(255, 0, 0, 0.1)",
              borderRadius: "8px",
              padding: "10px",
              fontSize: "2.5rem",
            }}
          />
        ),
      };
      break;

    case "orders":
      data = {
        title: "Orders",
        isMoney: false,
        percentage: "4%",
        value: 321,
        icon: (
          <CarRepairIcon
            style={{
              color: "goldenrod",
              backgroundColor: "rgba(218, 165, 32, 0.1)",
              borderRadius: "8px",
              padding: "10px",
              fontSize: "2.5rem",
            }}
          />
        ),
      };
      break;

    case "products":
      data = {
        title: "Products",
        isMoney: false,
        percentage: "8%",
        value: 498,
        icon: (
          <Inventory2Icon
            style={{
              color: "green",
              backgroundColor: "rgba(0, 128, 0, 0.1)",
              borderRadius: "8px",
              padding: "10px",
              fontSize: "2.5rem",
            }}
          />
        ),
      };
      break;

    case "earnings":
      data = {
        title: "Earnings",
        isMoney: true,
        percentage: "3%",
        value: 10342,
        icon: (
          <EuroIcon
            style={{
              color: "purple",
              backgroundColor: "rgba(128, 0, 128, 0.1)",
              borderRadius: "8px",
              padding: "10px",
              fontSize: "2.5rem",
            }}
          />
        ),
      };
      break;

    default:
      data = {
        title: "Unknown",
        isMoney: false,
        percentage: "0%",
        value: 0,
        icon: (
          <AccessibilityNewIcon
            style={{
              color: "gray",
              backgroundColor: "rgba(128, 128, 128, 0.1)",
              borderRadius: "8px",
              padding: "10px",
              fontSize: "2.5rem",
            }}
          />
        ),
      };
      break;
  }

  return (
    <div className="flex justify-between items-center p-6 bg-white shadow-md rounded-lg hover:shadow-xl transition duration-300 w-full max-w-sm">
      {/* Left Section */}
      <div className="flex flex-col justify-between gap-2">
        <span className="text-sm text-gray-500 font-semibold">{data.title}</span>
        <span className="text-2xl font-bold text-gray-800">
          {data.isMoney && "$"}{data.value}
        </span>
        <span className="text-sm text-green-600 font-medium">
          ↑ {data.percentage} this month
        </span>
      </div>

      {/* Right Section */}
      <div className="flex items-center justify-center">
        {data.icon}
      </div>
    </div>
  );
}
