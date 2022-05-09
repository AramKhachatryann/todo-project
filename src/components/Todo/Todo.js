import {useBooleanContext} from "../../contexts/booleanProvider"
import {useTodoContext} from "../../contexts/TodoProvider"
import TodoElement from "../TodoElement/TodoElement"
import {useEffect} from "react"

const Todo = () => {
  const {temp, setTemp} = useBooleanContext()
  const {todoList, setTodoList} = useTodoContext()

  useEffect(() => {
    fetch("https://jsonplaceholder.typicode.com/todos")
      .then((res) => res.json())
      .then((data) => {
        const arr = data.slice(0, 10)
        setTodoList((prev) => {
          prev = [...arr]
          return prev
        })
        return arr
      })
      .then((arr) => {
        for (let i = 0; i < arr.length; i++) {
          if (arr[i].completed) {
              setTemp(true)
            break
          }
        }
      })
      .catch((e) => console.log(e, "oops"))
  }, [])

  

  return (
    <div className="Todo">
      {todoList.map((item) => {
        return <TodoElement key={item.id} todo={item} />
      })}
    </div>
  )
}

export default Todo
