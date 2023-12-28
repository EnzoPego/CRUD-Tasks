import { createContext, useContext, useState } from "react"
import { createTaskRequest, deleteTaskRequest, getTasksRequest, getTaskRequest,updateTaskRequest,toggleTaskDoneRequest } from "../api/tasks.api"



export const TaskContext = createContext()

export const useTasks = ()=>{

    const context = useContext(TaskContext)
    if (!context) {
      throw new Error ('useTasks must be used within a TaskContextProvider')
    }else {
        return context
    } 
    
}

export const TaskContextProvider = ({children}) => {

    const [ tasks, setTasks ] = useState([])

    const loadTasks = async() => {
        const response = await getTasksRequest()
        //console.log(response.data)
        setTasks(response.data)
    }

    const deleteTask = async(id) => {
        try {
        const response = await deleteTaskRequest(id)
        setTasks(tasks.filter (task => task.id !== id))
        console.log(response)
        } catch (error) {
        console.log(error)            
        }
    }

    const createTask = async(task) =>{
        try {
            const response = await createTaskRequest(task)
            console.log(response)
        } catch (error) {
            console.log(error)        
        }
    }

    const getTask = async(id)=> {
        try {
           const response = await getTaskRequest(id)
           return response.data
        } catch (error) {
            console.log(error)
        }
    }

    const updateTask = async(id ,newFields) => {
        try {
           const response = await updateTaskRequest(id,newFields)
           console.log(response)
        } catch (error) {
            console.log(error)
        }
    }

    const toggleTaskDone = async(id) => {
        try {
            const taskFound = tasks.filter(task => task.id === id)
            await toggleTaskDoneRequest(id, { done: taskFound.done === 0 ? 1 : 0 })
            tasks.map(task => task.id === id ? task.done = task.done === 0 ? 1 : 0 : task.done )
            setTasks([...tasks])
        } catch (error) {
            console.log(error)            
        }
    }

    return (
        <TaskContext.Provider value={{tasks, loadTasks,deleteTask,createTask,getTask,updateTask,toggleTaskDone}}>
            {children}
        </TaskContext.Provider>
    )
} 


