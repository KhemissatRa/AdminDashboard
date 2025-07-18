import React from 'react';
import AccountBalanceIcon from '@mui/icons-material/AccountBalance';
import CallReceivedIcon from '@mui/icons-material/CallReceived';
import CallMadeIcon from '@mui/icons-material/CallMade';
import MyCircularProgress from './Bar'; // Your circular bar component

export default function ProgressCard() {
  return (
    <div className="w-full max-w-2xl bg-white rounded-2xl shadow-lg p-6 space-y-6 transition-shadow duration-300">
      
      {/* Header */}
      <div className="flex justify-between items-center">
        <h2 className="text-xl font-semibold text-gray-700">Total Revenue</h2>
        <AccountBalanceIcon style={{ fontSize: 36, color: '#facc15' }} />
      </div>

      {/* Center: Progress & Total */}
      <div className="flex flex-col items-center space-y-4">
        <h3 className="text-lg text-gray-500">Total Revenue This Year</h3>
        <MyCircularProgress />
        <p className="text-3xl font-bold italic text-gray-800">$740K</p>
      </div>

      {/* Bottom Stats */}
      <div className="flex justify-between text-center gap-4">
        
        {/* This Month Up */}
        <div className="flex flex-col items-center bg-gray-50 rounded-xl p-4 flex-1">
          <span className="text-sm text-gray-500">This Month</span>
          <CallMadeIcon className="text-green-500" />
          <span className="text-lg font-medium text-green-600">40.3K</span>
        </div>

        {/* Last Month Up */}
        <div className="flex flex-col items-center bg-gray-50 rounded-xl p-4 flex-1">
          <span className="text-sm text-gray-500">Last Month</span>
          <CallMadeIcon className="text-green-500" />
          <span className="text-lg font-medium text-green-600">12.3K</span>
        </div>

        {/* Decline Month */}
        <div className="flex flex-col items-center bg-gray-50 rounded-xl p-4 flex-1">
          <span className="text-sm text-gray-500">Decline</span>
          <CallReceivedIcon className="text-red-500" />
          <span className="text-lg font-medium text-red-600">30.8K</span>
        </div>
      </div>
    </div>
  );
}
