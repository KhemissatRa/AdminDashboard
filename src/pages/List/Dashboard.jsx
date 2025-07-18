import React from 'react';
import Product from './product';
import Chart from '../../components/chart';
import Widgets from '../../components/widgets';
import Progres from '../../components/progressCmp';

export default function Dashboard() {
  return (
    <div className="dashboard flex flex-col min-h-full bg-gray-100 px-6 py-8">
      
      {/* Widgets Section */}
      <div className="grid grid-cols-1 sm:grid-cols-2 md:grid-cols-3 lg:grid-cols-4 gap-6 mb-10">
        <Widgets type="user" />
        <Widgets type="orders" />
        <Widgets type="earnings" />
        <Widgets type="products" />
      </div>

      {/* Progress and Analytics Section */}
      <div className="flex flex-col items-center min-h-full space-y-10">
        
        {/* Progress Circle */}
        <div className=" max-w-full bg-white rounded-xl  duration-300 ">
          <Progres />
        </div>
        
        {/* Sales Analytics Chart */}
        <div className="w-full max-w-5xl bg-white rounded-xl shadow-md hover:shadow-xl transition-shadow duration-300 p-6">
          <h2 className="text-2xl font-semibold text-center text-gray-700 mb-6">
            Sales Analytics
          </h2>
          <div style={{ width: '100%', height: 400 }}>
            <Chart />
          </div>
        </div>
        <div className=" w-5xl h-[640px] p-4 bg-white   rounded-xl shadow-md hover:shadow-xl transition-shadow duration-300  "
        >       {/* Product Analytics Table */}
         <h2 className="text-2xl font-semibold text-center text-gray-700 ">
            Product Analytics
          </h2>
          <Product />
        </div>
</div>      
    </div>
  );
}
