import {  Routes, Route } from "react-router-dom";

import Header from "./Components/Header/Header";
import Home from "./Pages/Home/Home";
import About from "./Pages/About/About";
import Vans from "./Pages/Vans/Van";
import VanDetails from "./Pages/VanDetails/VanDetails";

function App() {


  return (
    <div className="app">
      <Header/>
      <Routes>
        <Route path="/" element={<Home/>}/>
        <Route path="/about" element={<About/>}/>
        <Route path="/availabe-vans" element={<Vans/>}/>
        <Route path="/vans/:id" element={<VanDetails/>}/>
      </Routes>
    </div>
  );
}

export default App;
