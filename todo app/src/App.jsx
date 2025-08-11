import { useState } from 'react'
import Navbar from './components/Navbar'

function App() {
  const [todoCheckup, setTodoCheckup] = useState("")
  const [todoCheckups, setTodoCheckups] = useState([])
  const [isEditing, setIsEditing] = useState(false)
  const [currentTodoIndex, setCurrentTodoIndex] = useState(null)
  const [filter, setFilter] = useState("all")

  const handleChange = (e) => {
    setTodoCheckup(e.target.value)
  }

  const HandleEdit = (index) => {
    setIsEditing(true)
    setCurrentTodoIndex(index)
    setTodoCheckup(todoCheckups[index].todoCheckup)
  }

  const HandleDelete = (index) => {
    setTodoCheckups(todoCheckups.filter((_, i) => i !== index))
  }

  const HandleAdd = () => {
    if (todoCheckup.trim()) {
      if (isEditing) {
        const updatedTodoCheckups = todoCheckups.map((item, index) => 
          index === currentTodoIndex ? { ...item, todoCheckup } : item
        )
        setTodoCheckups(updatedTodoCheckups)
        setIsEditing(false)
        setCurrentTodoIndex(null)
      } else {
        setTodoCheckups([...todoCheckups, { todoCheckup, isCompleted: false }])
      }
      setTodoCheckup("")
    }
  }

  const toggleComplete = (index) => {
    const updatedTodoCheckups = todoCheckups.map((item, i) => 
      i === index ? { ...item, isCompleted: !item.isCompleted } : item
    )
    setTodoCheckups(updatedTodoCheckups)
  }

  const clearCompleted = () => {
    setTodoCheckups(todoCheckups.filter(item => !item.isCompleted))
  }

  const filteredTodoCheckups = todoCheckups.filter(item => {
    if (filter === "completed") return item.isCompleted
    if (filter === "active") return !item.isCompleted
    return true
  })

  return (
    <>
      <Navbar />
      <div className="container mx-auto my-5 rounded-xl p-5 bg-gradient-to-r from-purple-400 via-pink-500 to-red-500 min-h-[80vh] m-10">
        <div className="addToDoCheckup my-5">
          <h2 className='text-lg font-bold '>{isEditing ? "Edit ToDoCheckup" : "Add a ToDoCheckup"}</h2>
          <input type="text" onChange={handleChange} value={todoCheckup} className='w-1/2' />
          <button onClick={HandleAdd} className='bg-blue-500 hover:bg-blue-900 p-2 font-bold text-sm text-white py-1 rounded-lg mx-6'>
            {isEditing ? "Update" : "Add"}
          </button>
        </div>
        <div className="filters my-5">
          <button onClick={() => setFilter("all")} className='bg-gray-500 hover:bg-gray-700 p-2 font-bold text-sm text-white py-1 rounded-lg mx-1'>All</button>
          <button onClick={() => setFilter("active")} className='bg-gray-500 hover:bg-gray-700 p-2 font-bold text-sm text-white py-1 rounded-lg mx-1'>Active</button>
          <button onClick={() => setFilter("completed")} className='bg-gray-500 hover:bg-gray-700 p-2 font-bold text-sm text-white py-1 rounded-lg mx-1'>Completed</button>
          <button onClick={clearCompleted} className='bg-red-500 hover:bg-red-700 p-2 font-bold text-sm text-white py-1 rounded-lg mx-1'>Clear Completed</button>
        </div>
        <h2 className="text-lg font-bold">Your ToDoCheckups</h2>
        <div className="todoCheckups">
          {filteredTodoCheckups.map((item, index) => (
            <div key={index} className={`todoCheckup flex ${item.isCompleted ? 'line-through' : ''}`}>
              <div className="text">{item.todoCheckup}</div>
              <div className="buttons flex">
                <button onClick={() => toggleComplete(index)} className='bg-green-500 hover:bg-green-700 p-2 font-bold text-sm text-white py-1 rounded-lg mx-1'>
                  {item.isCompleted ? "Undo" : "Complete"}
                </button>
                <button onClick={() => HandleEdit(index)} className='bg-blue-500 hover:bg-blue-900 p-2 font-bold text-sm text-white py-1 rounded-lg mx-1'>Edit</button>
                <button onClick={() => HandleDelete(index)} className='bg-blue-500 hover:bg-blue-900 p-2 font-bold text-sm text-white py-1 rounded-lg mx-1'>Delete</button>
              </div>
            </div>
          ))}
        </div>
      </div>
    </>
  )
}

export default App
