import React, { Component } from 'react';

const App = () => {
  console.log("App component render");

  const [todo, setTodo] = React.useState([
    { title: "Shop groceries 🛒" },
    { title: "Do yoga 🧘" }
  ]);
 
  const [text, setText] = React.useState("");
 
  const handleText = (e) => {
    setText(e.target.value);
  };
 
  const handleAddTodo = () => {
    setTodo(todo.concat({ title: text }));
  };
 
  return (
    <div>
      <input type="text" value={text} onChange={handleText} />
      <button type="button" onClick={handleAddTodo}>
        <span role="img" aria-label="add emojie">
          ➕
        </span>
        Add todo
      </button>
 
      <Todo list={todo} />
    </div>
  );
 };
 
 const Todo = ({ list }) => {
  console.log("Todo:", list);
   return (
    <ul>
      {list.map((item, key) => (
        <TodoItem item={item} key={key}/>
      ))}
    </ul>
  );
 };
 
 const TodoItem = ({ item }) => {
  console.log("TodoItem:", item);
   return <li>{item.title}</li>;
 };
 
export default App;