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
    <Formik initialValues={task}
    enableReinitialize={true}
    onSubmit={ async (values,{resetForm}) =>{
      //console.log(values)
      if(params.id){
        await updateTask(params.id,values)
      }else{
        await createTask(values)     
      }
      navigate('/')
      resetForm()
    }}
    >

      {({handleChange , handleSubmit, values, isSubmitting})=>(
        <Form onSubmit={handleSubmit} className='bg-slate-300 max-w-sm rounded-md p-4 mx-auto mt-10'>

          {params.id ? <h1 className='text-xl font-bold uppercase text-center'>Edit task</h1> : <h1 className='text-xl font-bold uppercase text-center'>New task</h1> }

          <label className='block'>Title</label>
          <input className='px-2 py-1 rounded-sm w-full'
          type="text"
          name='title'
          placeholder='Write a title'
          onChange={handleChange}
          value={values.title}
          />
  
          <label className='block'>Description</label>
          <textarea className='px-2 py-1 rounded-sm w-full'
          name="description"
          rows="3"
          placeholder='Write a description'
          onChange={handleChange}
          value={values.description}
          >
          </textarea>
  
          <button className='block bg-indigo-500 px-2 py-1 text-white w-full rounded-md'
          type='submit' disabled={isSubmitting} >
          {isSubmitting ? "Saving...": "Save"}                      
          </button>
  
        </Form>
      )}
    
    </Formik>

   </div>
  )
}




