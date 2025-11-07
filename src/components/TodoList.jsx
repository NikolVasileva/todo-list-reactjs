import { useEffect } from "react"

export default function TodoList() {
    useEffect(() => {
        fetch("http://localhost:3030/jsonstore/todos")
          .then(response => response.json())
          .then(data => {
            console.log(data)
          })
          .catch(err => alert(err.message))
    })

    return(
        <div></div>
    )
}