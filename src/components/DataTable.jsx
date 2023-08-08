import React from "react";
import wiser from "../assets/wiszerx.png";
const DataTable = ({ data }) => {
  const { last, sell, buy } = data;
  const buyPrice = Math.ceil(parseInt(buy)).toLocaleString();
  const sellPrice = parseInt(sell).toLocaleString();
  // Calculate difference and savings
  const difference = parseInt(buy) - parseInt(last);
  const percentageDifference = ((difference / parseInt(buy)) * 100).toFixed(2);
  const savings = parseInt(sell) - parseInt(buy);
  return (
    <>
      <thead>
        <tr className="dark:text-dark2 text-2xl">
          <th>#</th>
          <th>Platform</th>
          <th>Last Traded Price</th>
          <th>Buy/Sell Price</th>
          <th>Difference</th>
          <th>Savings</th>
        </tr>
      </thead>
      <tbody className="dark:text-white  text-center text-2xl   ">
        <tr className="dark:bg-black1 ">
          <td className="rounded-l-xl pl-2">1</td>
          <td className="flex justify-center items-center gap-2 py-2">
            <img src={wiser} alt="" className="w-10" />
            WazirX
          </td>
          <td>₹ {parseInt(last).toLocaleString()}</td>
          <td>
            ₹ {buyPrice} / ₹ {sellPrice}
          </td>
          <td
            className={`${
              percentageDifference > 0 ? "text-p1" : "text-red-500"
            }`}
          >
            {percentageDifference}%
          </td>
          <td
            className={`rounded-r-xl  ${
              percentageDifference > 0 ? "text-p1" : "text-red-500"
            }`}
          >
            {percentageDifference > 0 ? "▲" : "▼"} ₹ {savings}
          </td>
        </tr>
      </tbody>
    </>
  );
};

export default DataTable;
