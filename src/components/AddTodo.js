import React from "react";
import {useState} from "react";
import { Form ,Button} from "react-bootstrap";
function AddTodo({addtodo}) {
  const [title,setTitle]=useState("");
  const [desc,setDesc]=useState("");
    let test={
        display:"flex",
        flexDirection:"column",
        width:"80vw",
        margin:"auto"
    }
   
    const test1=()=>{
        if(title==="" || desc===""){
          alert("title or description empty");
        }
        else{
          let obj={
            title:title,
            content:desc
          }
          addtodo(obj);
          setTitle("");
          setDesc("");
        }
    }
  return (
    <div style={test}>
      <Form.Control type="text" value={title} placeholder="add title here"  onChange={(e)=>setTitle(e.target.value)}/>
      <Form.Control as="textarea" rows={3} value={desc} placeholder="your todo" onChange={(e)=>setDesc(e.target.value)}/>
      <Button variant="primary" type="submit" onClick={test1}>
        Submit
      </Button>
    </div>
  );
}

export default AddTodo;
