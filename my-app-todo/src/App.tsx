import './App.css';
import Navbar from './components/Navbar'
import TodoForm from './components/TodoForm'
import React,{useState} from 'react'

function App() {
  const[todos, setTodos] = useState([])

  const addHandler = (title:string) => {
    console.log('text =',title)
  }

  return (
    <>
    <Navbar />
    <TodoForm onAdd={addHandler}/>
    </>
  );
}

export default App;
