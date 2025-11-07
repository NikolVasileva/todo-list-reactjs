import { useEffect, useState } from "react"
import TodoItem from "./TodoItem";

export default function TodoList() {
    const [todos, setTodos] = useState([]);

    useEffect(() => {
        fetch("http://localhost:3030/jsonstore/todos")
          .then(response => response.json())
          .then(data => {
            setTodos(Object.values(data))
          })
          .catch(err => alert(err.message))
    },[])

    return(
        <ul>{todos.map(todo => <TodoItem 
            title={todo.title}
            key={todo._id}
            />)}
            </ul>
    )
}