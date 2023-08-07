import { useEffect, useState } from "react";

const App = () => {
  const [data, setData] = useState([]);

  useEffect(() => {
    fetch("http://localhost:5000/get-data")
      .then((res) => res.json())
      .then((data) => setData(data));
  }, []);
  return (
    <div>
      <h1>
        Hold Info Coming Soon
        {data.length}
      </h1>
    </div>
  );
};

export default App;
