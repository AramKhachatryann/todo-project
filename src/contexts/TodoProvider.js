import {createContext, useContext, useState} from "react"

export const todoContext = createContext(null)

const TodoProvider = ({children}) => {
  const [todoList, setTodoList] = useState([])


  return (
    <todoContext.Provider value={{todoList, setTodoList}}>
      {children}
    </todoContext.Provider>
  )
}

export const useTodoContext = () => useContext(todoContext)

export default TodoProvider
