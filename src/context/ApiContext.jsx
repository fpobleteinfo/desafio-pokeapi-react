import { createContext, useState, useEffect } from "react";
export const ApiContext = createContext();

const ApiProvider = ({ children }) => {
const [data, setData] = useState([]);

const url = "https://pokeapi.co/api/v2/pokemon?limit=251&offset=0"

const apiData = async () => {
  try {
    const response = await fetch(url);
    if (!response.ok) {
      throw new Error("Ha habido un error en la API");
    }
    const info = await response.json();
    setData(info.results); //estoy dentro del array de resultados...

  } catch (error) {
    console.error({ message: error });
  }
};

useEffect(() => {
  apiData();
}, []);

    return ( 

    <ApiContext.Provider value={{ data, setData }}>
      {children}
    </ApiContext.Provider>
  );
};
export default ApiProvider;