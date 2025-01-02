import React from "react";
import { BrowserRouter, Route, Routes } from "react-router-dom";
import Home from "./pages/Home";
import MovieInfo from "./pages/MovieInfo";
import Error from "./pages/Error";
import { AppProvider } from "./context/Context";
import "./App.css";

const App = () => {
  return (
    <div>
      <AppProvider>
        <BrowserRouter>
          <Routes>
            <Route path="/" element={<Home />} />
            <Route path="movie/:id" element={<MovieInfo />} />
            <Route path="*" element={<Error />} />
          </Routes>
        </BrowserRouter>
      </AppProvider>
    </div>
  );
};

export default App;
