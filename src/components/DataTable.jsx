import React from "react";
import wiser from "../assets/wiszerx.png";
const DataTable = () => {
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
          <td>₹ 24,98,704</td>
          <td>₹ 25,00,000 / ₹ 25,14,900</td>
          <td>-4.78 %</td>
          <td className="rounded-r-xl">▼ ₹ 1,25,406</td>
        </tr>
      </tbody>
    </>
  );
};

export default DataTable;
