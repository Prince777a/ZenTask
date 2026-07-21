const bodyParser = require('body-parser');
const express = require('express');
const dotenv = require('dotenv');
const { createTodo, updateTodo, deleteTodo } = require('./types');
const Todo = require('./Models/Todo');
const ConnectTODB = require('./Config/Db');
const cors = require('cors');



// //.env import
// require('dotenv').config();
dotenv.config();
const PORT = process.env.PORT;

// ConnectTODB(); // Connection to DB

ConnectTODB();

const app = express();

// for body parser the data json data --> req.body
app.use(express.json());


//for COrs
app.use(
    cors({
        origin : "http://localhost:5173"
    })
);




// API




// SignIn
// app.get('/signIn' , (req , res) => {
//     // signIn API
// })



// Add Todos or Create todos 
app.post('/todo' , async (req , res) => {
    // Addd todos

    try {
        
    const createPayload = req.body;
    const parsedPayload = createTodo.safeParse(createPayload);

    if (!parsedPayload.success) {
        res.status(411).json({
            msg : "You sent wrong inputs"
        })
        return;
    }
    // put data in DB(MONGO )
    const result = await Todo.create({
        title : parsedPayload.data.title,
        description : parsedPayload.data.description,
        completed : false

    });

    console.log("result" , result);

   if (!result.success) {
        res.status(201).json({
        msg : "Todos Created sucessfully"
    });
   };


    } catch (error) {

        console.error(error)  ;
        res.status(500).json({
            msg  : "Internal server Add Todo error"
        })      
    };


})


// Fetching all Todos at once

app.get('/todos' , async (req , res) => {
    // fetching  all todos
    try {
        const todos = await Todo.find({}).lean(); 

        if (todos) {
            return res.status(201).json({
                todos
            })
        };

    } catch (error) {
        return res.status(500).json({
            msg : "Internal server Error of Fetching todos "
        })
    }


})



// Updating MongoDB Todo completed
app.put('/completed/:id' , async (req , res) => {
    // Zod validation of inputs
    const updatepayload = {
        id : req.params.id
    }
    console.log(updatepayload);
    const parsedPayload = updateTodo.safeParse(updatepayload);
    console.log(parsedPayload);
    if (!parsedPayload.success) {
        return res.status(411).json({
            msg : "Invalid Input"
        })
    };
    
    // puttin in Mongo DB

    console.log(req.params.id);
    try {
        
       const result =  await Todo.updateOne(
        {
            _id : req.params.id
        } , {
            $set : {
                completed : true
            }
        }
    );

    return res.status(200).json({
            success: true,
            message: "Todo marked as completed",
            result

    });

    
    } catch (error) {
        console.log("Error is :")
        console.error(error);
        res.status(500).json({
            msg : "Internal Server Error of Adding todos"
        })
        
    };

});


// APi for deletion of Todos

app.delete('/delete/:id' , async(req , res) => {

    try {
    const deletePayload = {
      id :    req.params.id
    };

    console.log(deletePayload);
    const parsedPayload = deleteTodo.safeParse(deletePayload);
    console.log(parsedPayload);
    if (!parsedPayload.success) {
        res.status(411).json({
            msg : "Invalid Input"
        })
    };

    //delete the todo from MongoDB
    const result = await Todo.deleteOne({
        
        _id : parsedPayload.data.id
        
    });


    if (result.deletedCount == 0) {
        return res.status(404).json({
            msg : "Todo Not found"
        });
    };


    return res.status(200).json({
        msg : "Todo deleted sucessfully"
    });


    } catch (error) {
        console.error(error);
        return res.status(500).json({
            msg : "Internal serever Error" 
        })
    }


})
// listening to PORT
app.listen( PORT , () => {
    console.log(`Server is running on ${PORT}`);
})
