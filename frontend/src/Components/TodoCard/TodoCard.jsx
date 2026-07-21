
import styles from "../TodoCard/TodoCard.module.css"
// import { CiCircleCheck } from "react-icons/ci";
// import { IoIosCheckmarkCircleOutline } from "react-icons/io";
import { IoMdCheckmark } from "react-icons/io";
import { updateTodo } from "../../Services/Todoapi";


function TodoCard({todosss , onUpdate , isCompleted}) {
     console.log("HEYY");
    console.log("TodoCard" , todosss);

    async function handleComplete() {
        await updateTodo(todosss._id);
        onUpdate();
    }
    return (
        <>
            <div className={isCompleted ? styles.cardDone : styles.card}>

                <div className={styles.complete}>
                    <button className={styles.comp}> Complete? </button>
                </div>
                
                <div className={styles.data}>
                    <div className={styles.rightdata}>
                        <h3 className={isCompleted ? styles.titleDone : ""}> {todosss.title} </h3>
                        <p> {todosss.description}</p>
                    </div>
                

                {!isCompleted && 
                    <button className={styles.checkbtn} onClick={handleComplete}>
                    <IoMdCheckmark size={20}></IoMdCheckmark>
                </button>
                }
                
                </div>
                
            </div>
        </>
    );
}
export default TodoCard;