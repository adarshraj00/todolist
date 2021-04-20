import React from "react";
import TodoItem from "./TodoItem.js";

export default function Todos(props) {
  const test={
    display:"flex",
    flexDirection: "column",
    width:"80vw",
    margin:"auto",
  }
  return (
    <div style={test}>

        {
        props.todos.map(todo=>{
           // console.log(todo);
           return  <TodoItem key={todo.sno} title={todo.title}  content={todo.content} ondelete={props.ondelete}/>
        })
      }
    </div>
  );
}
