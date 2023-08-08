import React from "react";

const BestPriceTrade = ({ data }) => {
  const { high, name, at, last, buy, sell } = data;
  const difference = parseInt(last) - parseInt(buy);
  const fiveMin = ((difference / parseInt(buy)) * 100).toFixed(2);
  const oneHour = ((difference / parseInt(buy)) * 100).toFixed(2);
  return (
    <div className="flex justify-between items-center py-5 mt-5">
      <div className="text-center">
        <h1 className="text-p1 text-[2.5rem]"> {fiveMin}%</h1>
        <h4 className="dark:text-dark2 text-xl">5 Min</h4>
      </div>
      <div className="text-center">
        <h1 className="text-p1 text-[2.5rem]">{fiveMin * 2} %</h1>
        <h4 className="dark:text-dark2 text-xl">1 Hour</h4>
      </div>
      <div className="text-center">
        <h4 className="dark:text-dark2 text-3xl">Best Price to Trade</h4>
        <h1 className="dark:text-white text-[5rem]">
          <span>₹ </span>
          {Math.ceil(parseInt(high)).toLocaleString()}
        </h1>
        <h6 className="dark:text-dark2 ">
          Average {name} net price including commission
        </h6>
      </div>
      <div className="text-center">
        <h1 className="text-p1 text-[2.5rem]">{(fiveMin * 12).toFixed(2)}%</h1>
        <h4 className="dark:text-dark2 text-xl">1 Day</h4>
      </div>
      <div className="text-center">
        <h1 className="text-p1 text-[2.5rem]">{(fiveMin * 24).toFixed(2)} %</h1>
        <h4 className="dark:text-dark2 text-xl">7 Days</h4>
      </div>
    </div>
  );
};

export default BestPriceTrade;
