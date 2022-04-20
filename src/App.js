import React, { useEffect, useState } from 'react';
//import Todo from './Todo';
//import { Button } from '@material-ui/core'
import './App.css';
import Todo from './Todo';
import db from './firebase';

function App() {
  const [todos, setTodos] = useState(['abc', 'def']);
  const [input, setInput] = useState('');

  useEffect(() =>{
    db.collection('todos').onSnapshot(snapshot => {
      console.log(snapshot.docs.map(doc => doc.data()));
      setTodos(snapshot.docs.map(doc => doc.data().todo))
    })

  },[input]);


  const addTodo = (event) =>{
    event.preventDefault();
  console.log('im working !!!');
  setTodos([...todos,input]);
  setInput('');
  }

  return (
    <div className="App">
     <h1>Hello World!!!</h1>
     <form>
     <input value={input} onChange={event => setInput(event.target.value)}/>
     {/*<Button type="submit" onClick={addTodo} variant="contained" color="primary">
       Add Todo
  </Button>*/}
     <button type="submit" onClick={addTodo}>Add Todo</button> 
     </form>

     <ul>
       {todos.map(todo => (
         <Todo text={todo}/>
         //<li>{todo}</li>
       ))}
     </ul>
    </div>
  );
}

export default App;
