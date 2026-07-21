
import styles from "../TodoCard/TodoCard.module.css"
import { CiCircleCheck } from "react-icons/ci";


function TodoCard({todosss}) {
     console.log("HEYY");
    console.log("TodoCard" , todosss);
    return (
        <>
            <div className={styles.card}>

                <div className={styles.complete}>
                    <button className={styles.comp}> Complete? </button>
                </div>
                
                <div className={styles.data}>
                    <div className={styles.rightdata}>
                        <h3> {todosss.title} </h3>
                        <p> {todosss.description}</p>
                    </div>
                

                <button className={styles.checkbtn}>
                    {/* {todosss.completed ? "Completed" : "Complete"} */}
                    <CiCircleCheck></CiCircleCheck>
                </button>
                </div>
                
            </div>
        </>
    );
}
export default TodoCard;