import axios from 'axios';

const getTodos = async () =>{
    const resp =  await axios.get("http://localhost:3000/todos") // retrn Promise alr so yea these is data
    return resp.data;
}

const addTodo = async (todoData) => {
    const resp = await axios.post("http://localhost:3000/todo" , todoData);
    return resp.data;
}

const updateTodo = async (todoId) => {
    const resp = await axios.put("http://localhost:3000/completed/" + todoId);
    return resp.data;
}

const deleteTodo = async (todoId) =>{
    const resp = await axios.delete("http://localhost:3000/delete/" + todoId);
    return resp.data;
}

export  { addTodo , getTodos , updateTodo , deleteTodo} ;
   

