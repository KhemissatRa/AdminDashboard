import React from 'react';
import Product from './product';
import Chart from '../../components/chart';
import Widgets from '../../components/widgets';
import Progres from '../../components/progressCmp';

export default function Dashboard() {
  return (
    <div className="dashboard min-h-full max-w-full bg-gray-100 px-4 sm:px-6 lg:px-8 py-8 space-y-10">
      
      {/* Widgets Section */}
      <div className="grid grid-cols-1 sm:grid-cols-2 md:grid-cols-3 xl:grid-cols-4 gap-6">
        <Widgets type="user" />
        <Widgets type="orders" />
        <Widgets type="earnings" />
        <Widgets type="products" />
      </div>

      {/* Progress + Chart + Product Section */}
      <div className="flex flex-col gap-10">

        {/* Progress Circle */}
        <div className="w-full bg-white rounded-xl shadow-md hover:shadow-lg transition duration-300 p-6">
          <h2 className="text-xl font-semibold text-gray-700 mb-4">Order Fulfillment</h2>
          <div className="flex justify-center">
            <Progres />
          </div>
        </div>

        {/* Sales Analytics Chart */}
        <div className="w-full bg-white rounded-xl shadow-md hover:shadow-lg transition duration-300 p-2">
          <h2 className="text-2xl font-semibold text-center text-gray-700 mb-6">
            Sales Analytics
          </h2>
          <div className="w-full h-[400px]">
            <Chart />
          </div>
        </div>

        {/* Product Analytics Table */}
        <div className=" max-h-screen h-[1400px] bg-white rounded-xl  shadow-md hover:shadow-lg transition duration-300 p-6 ">
          
          <Product />
        </div>

      </div>
    </div>
  );
}
