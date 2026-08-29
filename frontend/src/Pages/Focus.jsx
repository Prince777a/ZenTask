// Pages/Focus.jsx

import {  useState } from "react";
import Navbar from "../Components/Navbar/Navbar";
import { useLocation } from "react-router-dom";
import TimerCard from "../Components/FocusComp/TimerCard";
import FocusTools from "../Components/FocusComp/FocusTools";
import Footer from "../Components/Footer/Footer";
import { updateTodo } from "../Services/todoApi";
import { useNavigate } from "react-router-dom";

function Focus() {

      //data from previous page
      const navigate = useNavigate(); // call hook once and get back to a funciton
      const Location = useLocation();
      const todo = Location.state?.todo; // why ? for if not state then it will crashe.
      console.log("TODO" , todo);

      

      if (!todo) {
         return <p> No Task Selected! Please go back and select a task.</p>
      }

      const handleComplete = async(completeTodo) => {

         try {
            await updateTodo(completeTodo._id); 
            alert(`${completeTodo.title} completed!`);
            navigate("/");

         } catch (err) {
            console.error("Failed to complete todo:" , err);
            alert("Something wrong please try again later >.<");
            
         }
      }
   
   return (
    

    <div className="container">
      <Navbar></Navbar>

    <div style={{   minHeight: "75vh" }} className="container">
      <TimerCard data={todo} onComplete={handleComplete}></TimerCard>
      <FocusTools></FocusTools>
    </div>

    <Footer></Footer>
      
    </div>
    
    
  
    
   )
}

export default Focus;