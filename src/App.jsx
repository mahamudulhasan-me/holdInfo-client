import { useEffect, useState } from "react";
import logo from "./assets/HODLINFO.8f78fc06.png";
import BestPriceTrade from "./components/BestPriceTrade";
import DataTable from "./components/DataTable";
const App = () => {
  const [data, setData] = useState([]);
  const [cryptoName, setCryptoName] = useState("btc");

  useEffect(() => {
    fetch(`http://localhost:5000/get-data/${cryptoName}`)
      .then((res) => res.json())
      .then((data) => setData(data[0]));
  }, [cryptoName]);

  const { base_unit } = data;
  return (
    <div className="px-10 pt-5 dark:bg-[#191d28] min-h-screen">
      <header className="flex justify-between items-center">
        <div>
          <img src={logo} alt="" className="w-72" />
        </div>
        <div className="flex justify-center items-center gap-4">
          <select
            name="currency"
            id=""
            className="bg-black1 py-1 px-3 text-white rounded-md outline-none "
          >
            <option value="inr">INR</option>
          </select>

          <select
            name="crypto"
            id=""
            onChange={(e) => setCryptoName(e.target.value)}
            className="bg-black1 py-1 px-3 text-white rounded-md outline-none "
          >
            <option value="btc" className="pt-3 w-11">
              BTC
            </option>
            <option value="xrc">XRP</option>
            <option value="eth">ETH</option>
          </select>

          <button className="bg-black1 py-1 px-3 text-white rounded-md uppercase">
            BUY {base_unit}
          </button>
        </div>
        <div>timer</div>
      </header>
      <main>
        <BestPriceTrade />
        <table className="w-full mt-5 ">
          <DataTable />
        </table>
      </main>
    </div>
  );
};

export default App;
