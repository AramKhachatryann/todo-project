import {useBooleanContext} from "../../contexts/booleanProvider"
import {useTodoContext} from "../../contexts/TodoProvider"
import "./headerStyle.css"

const TodoHeader = () => {

  const {todoList, setTodoList} = useTodoContext()
  const {temp, setTemp} = useBooleanContext()

  const inputValue = (e) => {
    if (e.key === "Enter") {
      if (e.target.value.trim() !== "") {
        const text = e.target.value
        setTodoList((prev) => {
          prev = [
            ...todoList,
            {
              id: Math.random(),
              title: text,
              completed: false,
            },
          ]
          return prev
        })
        e.target.value = ""
      }
    }
  }

  const completeAll = () => {
    for (let i = 0; i < todoList.length; i++) {
      if (!todoList[i].completed) {
        const arr = todoList.map((item) => ({
          ...item,
          completed: true,
        }))

        setTodoList(arr)

        if (temp) {
          setTemp(false)
        }
        break
      }
    }
  }

  const uncheckAll = () => {
    for (let i = 0; i < todoList.length; i++) {
      if (todoList[i].completed) {
        const arr = todoList.map((item) => ({
          ...item,
          completed: false,
        }))

        setTodoList(arr)
        
        if (temp) {
          setTemp(false)
        }
        break
      }
    }
  }



  
  return (
    <div className="todoHeader">
      <button onClick={completeAll}>Complete All</button>
      <button onClick={uncheckAll}>Uncheck All</button>
      <input
        type="text"
        onKeyPress={inputValue}
        placeholder="What needs To Be Done?"
        id="input"
        autoFocus
      ></input>
    </div>
  )
}

export default TodoHeader
