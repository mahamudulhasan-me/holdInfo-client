import { useEffect, useState } from "react";
import { FaPaperPlane } from "react-icons/fa";
import { Grid } from "react-loader-spinner";
import logo from "./assets/HODLINFO.8f78fc06.png";
import BestPriceTrade from "./components/BestPriceTrade";
import DataTable from "./components/DataTable";
const App = () => {
  const [data, setData] = useState([]);
  const [cryptoName, setCryptoName] = useState("btc");
  const [activeDark, setActiveDark] = useState(true);
  const [countdown, setCountdown] = useState(60);

  useEffect(() => {
    fetch(`http://localhost:5000/get-data/${cryptoName}`)
      .then((res) => res.json())
      .then((data) => setData(data[0]));
  }, [cryptoName]);

  useEffect(() => {
    const countdownInterval = setInterval(() => {
      setCountdown((prevCountdown) =>
        prevCountdown > 0 ? prevCountdown - 1 : 0
      );
    }, 1000);

    return () => clearInterval(countdownInterval);
  }, []);

  useEffect(() => {
    if (countdown === 0) {
      setCountdown(60); // Reset countdown to 60
      // Refetch data after 1 minute
      fetch(`http://localhost:5000/get-data/${cryptoName}`)
        .then((res) => res.json())
        .then((data) => setData(data[0]));
    }
  }, [countdown, cryptoName]);

  const { base_unit } = data;

  return (
    <div className="md:px-10 px-5 pt-5 dark:bg-[#191d28] min-h-screen">
      <header className="flex flex-col lg:flex-row justify-between items-center space-y-4 lg:space-y-0">
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
            <option value="xrp">XRP</option>
            <option value="eth">ETH</option>
            <option value="trx">TRX</option>
            <option value="eos">EOS</option>
            <option value="zil">ZIL</option>
            <option value="bat">BAT</option>
            <option value="zrx">ZRX</option>
            <option value="req">REQ</option>
            <option value="nuls">NULS</option>
          </select>

          <button className="bg-black1 py-1 px-3 text-white rounded-md uppercase">
            BUY {base_unit}
          </button>
        </div>
        <div className="flex items-center gap-3">
          <div className="rounded-full ring ring-p1 w-8 h-8 flex justify-center items-center text-p1">
            {countdown}
          </div>
          <button className="bg-p1 rounded-lg text-white flex items-center px-4 py-1 gap-2 text-lg">
            <FaPaperPlane /> Connect Telegram
          </button>
          <div
            onClick={() => setActiveDark(!activeDark)}
            className={`transition-all duration-300 w-14  h-8 rounded-2xl relative flex items-center px-1 cursor-pointer ${
              activeDark ? "bg-black1" : "bg-white"
            }`}
          >
            <div
              className={`absolute w-6 h-6  bg-p1 rounded-full transition-all duration-300 ${
                activeDark ? " translate-x-6" : " translate-x-0"
              }`}
            ></div>
          </div>
        </div>
      </header>
      {data ? (
        <main>
          <BestPriceTrade data={data} />

          <DataTable data={data} />
        </main>
      ) : (
        // loader
        <div className="flex justify-center items-center h-[calc(100vh-80px)]">
          <Grid
            height="80"
            width="80"
            color="#4fa94d"
            ariaLabel="grid-loading"
            radius="12.5"
            wrapperStyle={{}}
            wrapperClass=""
            visible={true}
          />
        </div>
      )}
    </div>
  );
};

export default App;
