import { useState } from "react"
import "./App.css"


function App() {

  {/* 

  const [age, setAge] = useState(0)

const increaseAge = () => {
  setAge(age+1)
}
const decreaseAge = () => {
  setAge(age-1)
}
const resetAge = () => {
  setAge(0)

}

  const [texts, changeText] = useState("")

  const addText = () => {
changeText(document.getElementById("AD").value)

  }
  */}

 const [todoList, setTodoList] = useState([])
 const [newTask, setNewTask] = useState("")
 

const handleChange = (event) => {
  setNewTask(event.target.value)
}
const addTask = () => {
  const task = {
    id: todoList.length === 0 ? 1 : todoList[todoList.length - 1].id + 1,
    taskName: newTask,
    completed: false,
  }
   setTodoList([...todoList, task])
  
}

const deleteTask = (id) => {
  setTodoList(todoList.filter((task) => task.id !== id))
}

const completeTask = (id) => {
  setTodoList(
    todoList.map((task) => {
      if (task.id === id) {
        return { ...task, completed: true }
      } else {
        return task;
      }
    })
  )
}

  return (
    <div className="App">

    <div>
        <header>
                  <div id="headerFrame">
                  <div className="addTask">
                    <input onChange={handleChange}/>
                    <button onClick={addTask}> Add Task </button>
                  </div>
                  </div>
        </header>
        <br></br>
          <div className="list">
            {todoList.map((task) => {
              return <div> 
                        <h1 style={{color: task.completed ? 'lightgreen' : 'black'}}>{task.taskName} <button onClick={() => completeTask(task.id)}> Complete </button> <button onClick={() => deleteTask(task.id)}>X</button></h1>
                    </div>
            })}
        </div>
        
    </div>

{/*
  PROJETO ANTERIOR, COM BOTOES ALTERANDO UM USESTAGE E COPIANDO
      TUDO DE DENTRO DE UM FORM


       <button onClick={increaseAge}>Increase age</button><br></br>
       <button onClick={decreaseAge}>Decrease age</button><br></br>
       <button onClick={resetAge}>Reset age</button>
       <p>{age}</p>


       <p><input type="text" onChange={addText} id="AD" size="32"></input></p>
      <p>{texts}</p>
*/}



    </div>

    


  );
}

export default App;
