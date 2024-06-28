
import './App.css';
import AddTodo from './components/AddTodo';
import Title from './components/Title';
import Todo from './components/Todo';

import {
  collection,
  query,
  onSnapshot,
  doc,
  updateDoc,
  deleteDoc,

}from "firebase/firestore";
import { db } from './Firebase';
import React from 'react';

function App() {

  const [todo,setTodo] = React.useState([]);

  React.useEffect(()=>{
      const q = query(collection(db,"todo"));
      const unsub = onSnapshot(q,(querySnapshot)=>{
        let todoArray = [];
        querySnapshot.forEach((doc)=>{
          todoArray.push({ ...doc.data(), id:doc.id});
        });
        setTodo(todoArray);
      });
      return () => unsub();
  },[]);

  const handleEdit = async (todo,title)=>{
    await updateDoc(doc(db, "todo",todo.id),{title:title});
  };

  const toggleComplete =async (todo) => {
    await updateDoc(doc(db,"todo".todo.id),{
      completed : !todo.completed
    });
  };

  const handleDelete =async (id) => {
    await deleteDoc(doc(db,"todo", id))
  };

  return (
    <div className="App">
        <div>
          <Title/>
        </div>
        <div>
          <AddTodo/>
        </div>

        <div className='todo_container'>
            {todo.map((todos) => (
              <Todo 
                key={todos.id}
                todo={todos}
                toggleComplete={toggleComplete}
                handleDelete={handleDelete}
                handleEdit={handleEdit}
                 />
            ))}
        </div>
    </div>
  );
}

export default App;
