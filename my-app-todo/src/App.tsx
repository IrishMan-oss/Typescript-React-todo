import './App.css';
import Navbar from './components/Navbar'
import TodoForm from './components/TodoForm'
import TodoList from './components/TodoList'
import React,{useState, useEffect} from 'react'
import {ITodo} from './interfaces'

const App: React.FC = () => {
  const[todos, setTodos] = useState<ITodo[]>([])

useEffect(() => {
  const saved = JSON.parse(localStorage.getItem('todos') || '[]') as ITodo[]
  setTodos(saved)
}, [])

useEffect(() => {
  localStorage.setItem('todos', JSON.stringify(todos))
}, [todos])

  const addHandler = (title:string) => {
    const newTodo: ITodo = {
      title: title,
      id: Date.now(),
      completed: false
    }
    // setTodos([newTodo, ...todos])
    setTodos(prev => [newTodo, ...todos])
  }

  const toggleHendler = (id: number) => {
    setTodos(prev =>
      prev.map(todo => {
      if (todo.id === id) {
        return {
          ...todo,
          completed: !todo.completed
        }
      }
      return todo
    }))
  }
  // const toggleHendler = (id: number) => {
  //   setTodos(prev => prev.map(todo => {
  //     if(todo.id === id){todo.completed = !todo.completed}
  //     return todo
  //   }))
  // }
  const removeHendler = (id: number) => {
    const shoudRemove = window.confirm('Вы уверены ,что хотите удалить элемент ?')
  if(shoudRemove) { setTodos(prev => prev.filter(todo => todo.id !== id))}
  }
  return (
    <>
    <Navbar />
    <div className='container'>
    <TodoForm onAdd={addHandler}/>
    <TodoList 
      todos={todos} 
      onToggle={toggleHendler} 
      onRemove={removeHendler}
    />
    </div>
    
    </>
  );
}

export default App;
