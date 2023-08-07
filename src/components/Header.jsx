import logo from "../assets/HODLINFO.8f78fc06.png";
const Header = () => {
  return (
    <div className="flex justify-between items-center">
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
          className="bg-black1 py-1 px-3 text-white rounded-md outline-none "
        >
          <option value="btc" className="pt-3 w-11">
            BTC
          </option>
          <option value="xrc">XRP</option>
          <option value="eth">ETH</option>
        </select>

        <button className="bg-black1 py-1 px-3 text-white rounded-md">
          BUY BTC
        </button>
      </div>
      <div></div>
    </div>
  );
};

export default Header;
