import {COLORS} from "../../helpers/constants"
import {useTodoContext} from "../../contexts/TodoProvider"
import "./elementStyle.css"
import {useBooleanContext} from "../../contexts/booleanProvider"

const TodoElement = ({todo}) => {

  const {GREEN, RED} = COLORS
  const {todoList, setTodoList} = useTodoContext()
  const {temp, setTemp} = useBooleanContext()

  const deleteTodo = (todo) => {
    const arr = todoList.filter((item) => item.id !== todo.id)
    setTodoList(arr)
  }

  const completeTodo = (e) => {
    const arr = todoList.map((item) => {
      if (item.id === todo.id) {
        return {
          ...todo,
          completed: e.target.checked,
        }
      }
      return item
    })

    setTodoList(arr)

    if (!temp) {
      setTemp(true)
    }
  }





  return (
    <div className="TodoElement">
      <input type="checkbox" checked={todo.completed} onChange={completeTodo} />
      <span style={{color: todo.completed ? GREEN : RED}}>{todo.title}</span>
      <button onClick={() => deleteTodo(todo)} className="deleteBtn">
        X
      </button>
    </div>
  )
}

export default TodoElement
