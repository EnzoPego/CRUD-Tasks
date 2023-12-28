import { Form, Formik } from'formik'
import { useTasks } from '../context/TaskContext'
import { useNavigate, useParams } from 'react-router-dom'
import { useEffect, useState } from 'react'


export const TasksForm = () => {

  const { createTask , getTask, updateTask } = useTasks()
  const [task , setTask] = useState ({
    title:'',
    description:''
  })

  const params = useParams()
  const navigate = useNavigate()

  useEffect(()=>{
    const loadTasks = async () => {
      if(params.id){
        const task = await getTask(params.id)
        console.log(task)
        setTask({
          title: task.title,
          description:task.description
        })
      }
    }
    loadTasks()
  },[])
    
  return (

   <div>

    {params.id ? <h1>Edit task</h1> : <h1>New task</h1> }

    <Formik initialValues={task}
    enableReinitialize={true}
    onSubmit={ async (values,{resetForm}) =>{
      //console.log(values)
      if(params.id){
       await updateTask(params.id,values)
       navigate('/')
      }else{
       await createTask(values)     
      }
      resetForm()
    }}
    >

      {({handleChange , handleSubmit, values, isSubmitting})=>(
          <Form onSubmit={handleSubmit}>
          <label>title</label>
          <input type="text"
          name='title'
          placeholder='Write a title'
          onChange={handleChange}
          value={values.title}
          />
  
          <label>description</label>
          <textarea name="description"
          rows="3"
          placeholder='Write a description'
          onChange={handleChange}
          value={values.description}
          >
          </textarea>
  
          <button type='submit' disabled={isSubmitting} >
          {isSubmitting ? "Saving...": "Save"}                      
          </button>
  
        </Form>
      )}
    
    </Formik>

   </div>
  )
}




