import React from "react";
import { BrowserRouter, Route, Routes } from "react-router-dom";
import ProForm from "./Components/ProForm";
import ProList from "./Components/ProList";
import Navbar from "./Components/Navbar";
import Proitem from "./Components/Proitem";

function App() {
  return (
    <>
      <BrowserRouter>
        <Navbar />
        <Routes>
          <Route path="/" element={<ProForm/>} />
          <Route path="/productlist" element={<ProList/>} />
          <Route path="/productitem" element={<Proitem/>}/>
        </Routes>
      </BrowserRouter>
    </>
  );
}

export default App;
