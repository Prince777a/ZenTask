import { useState } from "react";
import { addTodo } from "../../Services/todoApi";
import styles from "../TodoCard/CreateTodo.module.css";

function CreateTodo({onAdd}) {

    const [title , setTitle] = useState("");
    const [description , setDescription] = useState("");

    async function  handleSubmit() {
        await addTodo({title , description}) // API CALLING 
        setTitle("");  // need to clear that after one submit alright 
        setDescription("");
        onAdd();
        alert("Todo added Bro!")
    }

    return (
        <>
            <div className={styles.card}>
                <input  className={styles.titleInput} type="text" placeholder="What needs to be done?" value={title} onChange={(e) => setTitle(e.target.value)}/>
                <textarea  className={styles.descInput} type="text"  placeholder="Add a short description..." value={description} onChange={(e) => setDescription(e.target.value)}/>


                <div className={styles.footer}> 
                    <button className={styles.btn} onClick={handleSubmit}>
                    +  &nbsp; Create Tasks
                </button>
                </div>
                
            </div>
        </>
    )
}
export default CreateTodo;