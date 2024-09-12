import Gallery from "./component/Gallery"
import TodoList from "./component/todoList"

function App() {
  

  return (
    <div className='p-4'>
      <h1 className='text-7xl font-bold text-center'>Learn React</h1>
      <h2 className='text-2xl mt-4'>Your first Component</h2>
      <h2>TodoList</h2>
    <TodoList/>
      <Gallery />
      
    </div>
      
       
  )
}

export default App
