import React, { useContext, useEffect, useState } from "react";

// **********explanation of ContextAPI************
// context (warehouse)
// Provider (Delivery boy )
//consumer (useContext)

// *****************************

export const API_URL = `https://www.omdbapi.com/?i=tt3896198&apikey=${process.env.REACT_APP_API_KEY}`;

// create context
const AppContext = React.createContext();

//we need provider   - means it convers all area like delivery-boy
//AppProvider call in App.js
const AppProvider = ({ children }) => {
  // create state set data
  const [isLoading, setIsLoading] = useState(true);
  const [movie, setMovie] = useState([]);
  const [isError, setIsError] = useState({ show: 'false', msg: "" });
  // for search 
  const [query,setQuery] = useState('hacker!');
  // getmovies
  const getMovies = async (url) => {
    setIsLoading(true)
    try {
      const response = await fetch(url);
      const data = await response.json();
      console.log(data);
      if (data.Response === "True") {
        setMovie(data.Search);
        setIsLoading(false);
        setIsError({
          show: false,
          msg: '',
        });
      } else {
        setIsError({
          show: true,
          msg: data.Error,
        });
      }
    } catch (error) {
      console.log("GetMovies" + error);
    }
  };

  useEffect(() => {
   let timeout =  setTimeout(() => {
      getMovies(`${API_URL}&s=${query}`);
    }, 2000);
    return ()=> clearTimeout(timeout)
  }, [query]);

  return (
    <AppContext.Provider value={{ isLoading, isError, movie ,query,setQuery}}>
      {children}
    </AppContext.Provider>
  );
};

// create custom globalContext hook
const useGlobalContext = () => {
  return useContext(AppContext);
};

// consumer
export { AppContext, AppProvider, useGlobalContext };
