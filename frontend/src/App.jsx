import React from "react";
import Navbar from "./Components/Navbar/Navbar";
import { Route , Routes  } from "react-router-dom";
import Home from "./Pages/Home";
import Focus from "./Pages/Focus";
import Archive from "./Pages/Archieve";
import Tabs from "./Pages/Tabs";

const App = () => {
    return (
      <>
            <Routes>
                <Route path="/" element={<Home></Home>}></Route>
                <Route path="/focus" element={<Focus></Focus>}></Route>
                <Route path="/archive" element={<Archive></Archive>}></Route>

            </Routes>

            {/* NavBAr how it works */}
            {/* <Tabs></Tabs> */}
       
      </>
    )
}
export default App;