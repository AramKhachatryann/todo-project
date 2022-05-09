import Todo from "./components/Todo/Todo"
import TodoFooter from "./components/TodoFooter/TodoFooter"
import TodoHeader from "./components/TodoHeader/TodoHeader"
import "./App.css"


function App() {
  return (
    <div>
      <h1 id="title">Todos</h1>
      <div className="App">
        <div className="AppChild">
          <TodoHeader />
          <Todo />
          <TodoFooter />
        </div>
      </div>
    </div>
  )
}

export default App
