import { createContext, useState, useEffect } from "react";

const fetchData = async () => {
  const url = "http://hp-api.herokuapp.com/api/characters";
  const response = await fetch(url);
  const data = response.json();
  return data;
};

const DataContext = createContext([]);

export const DataProvider = ({ children }) => {
  const [data, setData] = useState([]);

  useEffect(() => {
    fetchData()
    .then((apiResults) => {
        console.log(apiResults);
        return setData(apiResults);
    });
  },[]);

  return (
    <DataContext.Provider value={data}>{children}</DataContext.Provider>
  )
};

export default DataContext