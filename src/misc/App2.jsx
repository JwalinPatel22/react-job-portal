import React from 'react';
import './App.css';
import { useState, useEffect } from 'react';
import TodoForm from './TodoForm.jsx';
import TodoList from './TodoList.jsx';

export default function App () {
    const [todos, setTodos] = useState([]);  
    
    function addTodo(title){
        setTodos((currentTodos) => {
            //array of current todo items + new todo item
            return [...currentTodos,{ id: crypto.randomUUID(), title, completed: false }]
        });
    }

    function toggleTodo(id, completed){
        setTodos(currentTodos => {
            return currentTodos.map(todo => {
                if (todo.id === id) {
                    return {...todo, completed}
                }
                return todo
            })
        })
    }

    function deleteTodo(id){
        setTodos(currentTodos => {
            return currentTodos.filter(todo => todo.id !== id)
        });
    }
    
    return(
        <div>            
            <h1 className='header'>ToDo List</h1>
            <TodoForm onSubmit={addTodo} />
            <TodoList todos={todos} toggleTodo={toggleTodo} deleteTodo={deleteTodo} />
        </div>
    );
}

