import { useState, useEffect } from 'react'
import './App.css'
import CoinInfo from './Components/CoinInfo';
import SideNav from './Components/SideNav';


const API_KEY = import.meta.env.VITE_APP_ACCESS_KEY;

function App() {
  const [list, setList] = useState(null);
  const [filteredResults, setFilteredResults] = useState([]);
  const [searchInput, setSearchInput] = useState("");


  useEffect(() => {
    fetchAllCoinData().catch(console.error);
  }, []);

  const fetchAllCoinData = async () => {
    const response = await fetch("https://min-api.cryptocompare.com/data/all/coinlist?&api_key="
      + API_KEY);

    const json = await response.json();
    setList(json);
  }

  const searchItems = searchValue => {
    setSearchInput(searchValue);
    if (searchValue !== "") {
      const filteredData = Object.keys(list.Data).filter((item) =>
        Object.values(item)
          .join("")
          .toLowerCase()
          .includes(searchValue.toLowerCase())
      )
      setFilteredResults(filteredData);
    } else {
      setFilteredResults(Object.keys(list.Data));
    }
  };


  return (
    <div className="whole-page">
      <SideNav />

      <h1>My Crypto List</h1>
      <input
        type="text"
        placeholder="Search..."
        onChange={(inputString) => searchItems(inputString.target.value)}
      />
      <ul>

        { // step 3
          searchInput.length > 0
            ? filteredResults.map((coin) =>
              list.Data[coin].PlatformType === "blockchain" ?
                <CoinInfo
                  image={list.Data[coin].ImageUrl}
                  name={list.Data[coin].FullName}
                  symbol={list.Data[coin].Symbol}
                />
                : null
            )
            :
            list && Object.entries(list.Data).map(([coin]) =>
              // ([coin]) => only extracts the key 
              // console.log(coin),
              list.Data[coin].PlatformType === "blockchain" ? (
                // step 1
                // <li key={list.Data[coin].FullName}>{list.Data[coin].FullName}</li>
                // step 2
                <CoinInfo
                  image={list.Data[coin].ImageUrl}
                  name={list.Data[coin].FullName}
                  symbol={list.Data[coin].Symbol}
                />
              ) : null
            )}

      </ul>
    </div>

  )
}

export default App



// import { useRoutes } from "react-router-dom";
// import CoinList from "./Components/CoinList";
// import DetailView from "./routes/DetailView";

// function App() {
//   let element = useRoutes([
//     {
//       path: "/",
//       element: <CoinList/>,
//     },
//     {
//       path: "/coinDetails/:symbol",
//       element: <DetailView />,
//     },
//   ]);

//   return (
//     <div className="App">
//       {element}
//     </div>
//   )
// }
// export default App