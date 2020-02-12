import React, { useState } from "react";
const Todos = () => {
  const [todos, setTodos] = useState([]);
  const [inputValue, setInputValue] = useState("");
  const deleteTodos = indexToDelete => {
    setTodos(prevTodos => {
      return prevTodos.filter((value, index) => {
        return indexToDelete !== index;
      });
    });
  };
        return (
    <div>
      <div className="input-group mb-3">
          <input type="text"
            className="form-control"
             placeholder="Enter new todo"
            aria-label="Enter new todo"
            aria-describedby="button-addon2"
             name={inputValue}
             value={inputValue}
             onChange={e => setInputValue(e.target.value)} />
            <div className="input-group-append">
             <button
            className="btn btn-outline-secondary"
            type="button"
            onClick={() => {
              setTodos(prevTodos => [...prevTodos, inputValue]);
              setInputValue("");
            }} >Add</button>
       </div>
        </div>
      {todos.map((value, index) => {
        console.log(value,index);
        return (
          <li className="list-group-item d-flex justify-content-between align-items-center"key={index}
          >{" "}{value}{" "}<span type="button"onClick={() => 
           {deleteTodos(index);}} >X</span>{" "}</li>);})}
          <li>{todos.length} Items Left</li>
          </div>
        
          );
        };

            export default Todos;


     