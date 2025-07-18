import React from 'react';
import {
  AreaChart,
  Area,
  XAxis,
  YAxis,
  CartesianGrid,
  Tooltip,
  ResponsiveContainer
} from 'recharts';

const data = [
  { name: 'Month 1', uv: 400, pv: 2400, amt: 2400 },
  { name: 'Month 2', uv: 3000, pv: 1398, amt: 2210 },
  { name: 'Month 3', uv: 2000, pv: 9800, amt: 2290 },
  { name: 'Month 4', uv: 2780, pv: 3908, amt: 2000 },
  { name: 'Month 5', uv: 1890, pv: 4800, amt: 2181 },
  { name: 'Month 6', uv: 2390, pv: 3800, amt: 2500 },
  { name: 'Month 7', uv: 3490, pv: 4300, amt: 2100 },
];

export default function Chart() {
  return (
    <div className="w-full h-[350px] bg-white p-6 rounded-xl shadow-md hover:shadow-lg transition-all duration-300">
      <h2 className="text-xl font-semibold text-gray-700 mb-4">User Activity (UV) Over Months</h2>
      <ResponsiveContainer width="100%" height="100%">
        <AreaChart
          data={data}
          margin={{ top: 10, right: 30, left: 0, bottom: 0 }}
        >
          <defs>
            <linearGradient id="colorUv" x1="0" y1="0" x2="0" y2="1">
              <stop offset="5%" stopColor="#4f46e5" stopOpacity={0.8} />
              <stop offset="95%" stopColor="#4f46e5" stopOpacity={0} />
            </linearGradient>
          </defs>
          <CartesianGrid strokeDasharray="3 3" />
          <XAxis dataKey="name" tick={{ fill: '#64748b' }} />
          <YAxis tick={{ fill: '#64748b' }} />
          <Tooltip
            contentStyle={{
              backgroundColor: '#fff',
              borderRadius: '8px',
              boxShadow: '0 2px 10px rgba(0,0,0,0.1)',
              fontSize: '0.875rem',
            }}
          />
          <Area
            type="monotone"
            dataKey="uv"
            stroke="#4f46e5"
            fillOpacity={1}
            fill="url(#colorUv)"
          />
        </AreaChart>
      </ResponsiveContainer>
    </div>
  );
}
