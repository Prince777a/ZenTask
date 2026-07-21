import TodoCard from "./TodoCard";
import  styles from "../TodoCard/TodoList.module.css";

function TodoList({todos}) {

    const pending = todos.filter(t=> !t.completed).length;
    const completed = todos.filter( t=> t.completed).length;

   
    console.log("TodoList Todos" , todos);

    return (
        <>
            <div className={styles.container}>

                <div className={styles.header}>
                    <h2 className={styles.heading}> Active Tasks </h2>
                    <div className={styles.badges}>
                        <span className={styles.pending}>{pending} PENDING </span>
                        <span className={styles.completed}> {completed} COMPLETED</span>
                    </div>
                </div>
                
                
                {todos.map((todo) => {
                    return <TodoCard key={todo._id} todosss={todo}></TodoCard>
                })}

               
                
            </div>
        </>
    );
}
export default TodoList;