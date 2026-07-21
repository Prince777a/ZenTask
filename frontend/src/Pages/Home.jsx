import { useEffect, useState } from "react";
import { getTodos } from "../Services/Todoapi";
import TodoList from "../Components/TodoCard/TodoList";
import Navbar from "../Components/Navbar/Navbar";
import CreateTodo from "../Components/TodoCard/CreateTodo";
// import { BrowserRouter } from "react-router-dom";
import styles from "../Pages/Home.module.css";


function Home() {
    const [todos, setTodos] = useState([]);

    const fetchTodos = async () => {
            const data = await getTodos();

            console.log("data is" , data);
            console.log("datas it " , data.todos);
            setTodos(data.todos);
            // console.log("todo after updating is" , data.todos);
        };
    
    useEffect(() => {
          
      // eslint-disable-next-line react-hooks/set-state-in-effect
      fetchTodos();
} , []);

    return (
        <>
            <Navbar></Navbar>
            
            <div className={styles.container}>

                
                <div className={styles.heading}>
                <h1> My Daily Flow</h1>
                <p> stay focused , one task at a time</p>
                </div>
             
                <CreateTodo onAdd={fetchTodos}></CreateTodo>

                <div>
                    <TodoList todos ={todos}></TodoList>
                </div>


            </div>
            
 
       
        </>
    );
}
export default Home;