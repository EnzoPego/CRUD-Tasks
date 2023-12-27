import { Route, Routes } from 'react-router-dom'

import { TasksPage } from './pages/TasksPage'
import { TasksForm } from './pages/TasksForm'
import { NotFound } from './pages/NotFound'

import { NavBar } from './components/NavBar'

export const App = () => {
  return (
    <>
      <NavBar/>
      <Routes>
        <Route path='/' element={<TasksPage/>} />
        <Route path='/new' element={<TasksForm/>} />
        <Route path='*' element={<NotFound/>} />
      </Routes>
    </>
  )
}

