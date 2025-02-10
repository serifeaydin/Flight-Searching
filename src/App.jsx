import { Route, Routes, } from "react-router-dom";

import FlightResults from "./components/FlightResults"; 

import HomePage from "./pages/HomePage"; 

const App = () => {
  return (

  <Routes>
        <Route path="/" element={<HomePage />} />
        <Route path="/results" element={<FlightResults />} />
        </Routes>
   
  );
};

export default App;
