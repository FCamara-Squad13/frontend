import React from "react";
import { BrowserRouter } from "react-router-dom";

import "./App.css";

import Routes from "./routes";

const App: React.FC = () => {
  return (
    <>
      <BrowserRouter>
        <Routes />
      </BrowserRouter>
    </>
  );
};

export default App;
