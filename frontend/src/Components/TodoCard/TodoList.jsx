import TodoCard from "./TodoCard";
import  styles from "../TodoCard/TodoList.module.css";

function TodoList({todos , onUpdate}) {

    const pending = todos.filter(t=> !t.completed);
    const completed = todos.filter( t=> t.completed);


    console.log("TodoList Todos" , todos);

    return (
        <>
            <div className={styles.container}>

                <div className={styles.header}>
                    <h2 className={styles.heading}> Active Tasks </h2>
                    <div className={styles.badges}>
                        <span className={styles.pending}>{pending.length} PENDING </span>
                        <span className={styles.completed}> {completed.length} COMPLETED</span>
                    </div>
                </div>
                
                {/* Pending Todos */}
                {pending.map((todo) => {
                    return <TodoCard key={todo._id} todosss={todo} onUpdate={onUpdate}></TodoCard>
                })}

                {/* Devider */}
                <div className={styles.devider}>
                    <span>COMPLETED</span>
                </div>

                {/* CompletedTodos */}
                {completed.map((todo) => (
                    <TodoCard key={todo._id} todosss={todo} onUpdate={onUpdate} isCompleted={true}></TodoCard>
                ))}
                
            </div>
        </>
    );
}
export default TodoList;