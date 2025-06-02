// src/App.js
import React, { useEffect, useState } from "react";
import axios from "axios";
import TodoForm from "./components/TodoForm";
import TodoList from "./components/TodoList";

import "./App.css";

function App() {
  
const [todos,setTodos]=useState([]);

const fetchTodos=async ()=>{
  try{
    const res=await axios.get("/api/todos");
    setTodos(res.data);
  }catch(err){
    console.log("error fetching todos: ",err);
  }
};

useEffect(()=>{
  fetchTodos();
},[])

const addTodo=async (text)=>{
  try{
      const res=await axios.post("/api/todos",{text});
      setTodos([...todos,res.data]);
  }catch(err){
    console.error("Error adding todo:", err);
  }
};

const deleteTodo=async (id)=>{
  try{
    await axios.delete(`/api/todos/${id}`);
    setTodos(todos.filter(todo=>todo._id!==id));
  }catch(err){
    console.log("error deleting todo ",err);
  }
}


  return (
    <div className="app-container">
      <h1 className="app-title">MERN Todo App</h1>
      <TodoForm addTodo={addTodo} />
      <TodoList todos={todos} deleteTodo={deleteTodo} />
    </div>
  );
}

export default App;
