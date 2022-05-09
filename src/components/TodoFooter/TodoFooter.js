import { useBooleanContext } from "../../contexts/booleanProvider"
import {useTodoContext} from "../../contexts/TodoProvider"
import "./footerStyle.css"

const TodoFooter = () => {

  const {todoList, setTodoList} = useTodoContext()
  const {temp, setTemp} = useBooleanContext()

  const completedArr = todoList.filter((todoList) => todoList.completed)

  const clearCompleted = () => {
    for (let i = 0; i < todoList.length; i++) {
      if (todoList[i].completed) {
        const arr = todoList.filter((item) => !item.completed)
        setTodoList(arr)
        setTemp(false)
        break 
      }
    }
  }

  const sortTodos = () => {
    if(temp){
    let completedTodos = []
    let unCompletedTodos = []
    todoList.forEach((item) => {
      if (item.completed) {
        completedTodos.push(item)
      } else {
        unCompletedTodos.push(item)
      }
    })

    setTodoList((prev) => {
      prev = [ ...unCompletedTodos,...completedTodos]
      return prev
    })

    setTemp(false)
  }
}



  return (
    <div className="todoFooter">
      <span id="activeItemsLeft">
        {completedArr.length}/{todoList.length} completed
      </span>
      <button onClick={sortTodos}>Sort</button>
      <button onClick={clearCompleted}>Clear Completed</button>
    </div>
  )
}

export default TodoFooter
