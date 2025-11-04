import axios from "axios";
import { useState } from "react";
const App = () => {
  const [data, setData] = useState([]);
  const getDataAxios = async () => {
    // const { data } = await axios.get(
    //   "https://jsonplaceholder.typicode.com/users"
    // );
    // console.log(data);
    const res = await axios.get("https://picsum.photos/v2/list");
    setData(res.data);
  };

  const getDataFetch = async () => {
    const response = await fetch("https://jsonplaceholder.typicode.com/users");
    const data = await response.json();
    console.log(data);
  };
  return (
    <div>
      <button onClick={getDataFetch}>Get Data Fetch</button>
      <button onClick={getDataAxios}>Get Data Axios</button>
      <div>
        {data.map((ele, idx) => {
          return (
            <h3 key={idx}>
              Hello, {ele.author},{idx + 1}
            </h3>
          );
        })}
      </div>
    </div>
  );
};

export default App;
