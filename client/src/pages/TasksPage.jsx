import { useEffect } from "react"
import { TaskCard } from "../components/TaskCard"
import { useTasks } from "../context/TaskContext"


export const TasksPage = () => {

  const {tasks, loadTasks} = useTasks()

  useEffect(() => {
    loadTasks()
  },[])


  const renderMain = () => {
    
    return (tasks.length === 0)? <h1>No tasks yet</h1> : 
    
    tasks.map(task =>(
      <TaskCard task={task} key={task.id} />
    ))
  }
 
  
  return (
  
    <div>
      <h1>Tasks</h1>
      
      {renderMain()}

    </div>
  )
}
