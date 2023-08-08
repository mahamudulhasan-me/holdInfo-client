import React from "react";
import wiser from "../assets/wiszerx.png";

const DataTable = ({ data }) => {
  const { last, sell, buy } = data;
  const buyPrice = Math.ceil(parseInt(buy)).toLocaleString();
  const sellPrice = parseInt(sell).toLocaleString();
  const difference = parseInt(buy) - parseInt(last);
  const percentageDifference = ((difference / parseInt(buy)) * 100).toFixed(2);
  const savings = parseInt(sell) - parseInt(buy);

  return (
    <div className="overflow-x-auto">
      <table className="min-w-full divide-y divide-gray-200">
        <thead className="bg-gray-50 dark:bg-gray-900 text-center">
          <tr>
            <th className="px-6 py-3   font-medium text-gray-500 uppercase tracking-wider">
              #
            </th>
            <th className="   font-medium text-gray-500 uppercase tracking-wider">
              Platform
            </th>
            <th className="px-6 py-3   font-medium text-gray-500 uppercase tracking-wider">
              Last Traded Price
            </th>
            <th className="px-6 py-3   font-medium text-gray-500 uppercase tracking-wider">
              Buy/Sell Price
            </th>
            <th className="px-6 py-3   font-medium text-gray-500 uppercase tracking-wider">
              Difference
            </th>
            <th className="px-6 py-3   font-medium text-gray-500 uppercase tracking-wider">
              Savings
            </th>
          </tr>
        </thead>
        <tbody className="bg-white divide-y divide-gray-200 dark:bg-gray-800 dark:text-white text-center text-2xl">
          <tr>
            <td className="px-6 py-4 whitespace-nowrap  text-gray-500">1</td>
            <td className="px-6 py-4 whitespace-nowrap  text-gray-500 flex items-center gap-2">
              <img src={wiser} alt="" className="w-6 h-6" />
              WazirX
            </td>
            <td className="px-6 py-4 whitespace-nowrap  text-gray-500">
              ₹ {parseInt(last).toLocaleString()}
            </td>
            <td className="px-6 py-4 whitespace-nowrap  text-gray-500">
              ₹ {buyPrice} / ₹ {sellPrice}
            </td>
            <td
              className={`px-6 py-4 whitespace-nowrap  ${
                percentageDifference > 0 ? "text-green-600" : "text-red-600"
              }`}
            >
              {percentageDifference}%
            </td>
            <td
              className={`px-6 py-4 whitespace-nowrap  ${
                percentageDifference > 0 ? "text-green-600" : "text-red-600"
              }`}
            >
              {percentageDifference > 0 ? "▲" : "▼"} ₹ {savings}
            </td>
          </tr>
        </tbody>
      </table>
    </div>
  );
};

export default DataTable;
