// Pages/Focus.jsx

import {  useState } from "react";
import Navbar from "../Components/Navbar/Navbar";
import { useLocation } from "react-router-dom";
import TimerCard from "../Components/FocusComp/TimerCard";
import FocusTools from "../Components/FocusComp/FocusTools";
import Footer from "../Components/Footer/Footer";

function Focus() {

      //data from previous page
      const Location = useLocation();
      const todo = Location.state?.todo; // why ? for if not state then it will crashe.
      console.log("TODO" , todo);

      

      if (!todo) {
         return <p> No Task Selected! Please go back and select a task.</p>
      }
   
   return (
    <>
    <Navbar></Navbar>

    <div className="container">
      <TimerCard data={todo}></TimerCard>
      <FocusTools></FocusTools>
    </div>

    <Footer></Footer>
    
    </>
    
   )
}

export default Focus;