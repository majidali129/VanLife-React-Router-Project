import {  Routes, Route } from "react-router-dom";

import Home from "./Pages/Home/Home";
import About from "./Pages/About/About";
import Vans from "./Pages/Vans/Van";
import VanDetails from "./Pages/VanDetails/VanDetails";
import GlobalLayout from "./Components/Global-Layout/GlobalLayout";

import HostLayout from "./Components/HostLayout/HostLayout";
import Dashboard from "./Pages/Host/Dashboard/Dashboard";
import Income from "./Pages/Host/Income/Income";
import Reviews from "./Pages/Host/Review/Reviews";

function App() {

  return (
    <div className="app">
      <Routes>

        <Route element={<GlobalLayout/>} >
        <Route path="/" element={<Home/>}/>
        <Route path="/about" element={<About/>}/>
        <Route path="/vans" element={<Vans/>}/>
        <Route path="/vans/:id" element={<VanDetails/>}/>

        <Route  element={<HostLayout/>}>
        <Route path="/host" element={<Dashboard/>}/>
        <Route path="/host/income" element={<Income/>}/>
        <Route path="/host/reviews" element={<Reviews/>}/>
        </Route>

        </Route>
      </Routes>
    </div>
  );
}

export default App;
