import {Link} from 'react-router-dom'
import { TasksForm } from '../pages/TasksForm'

export const NavBar = () => {
  return (
    <div className='bg-neutral-700 flex justify-between px-20 py-4'>
      <Link to={'/'} className='text-white font-bold text-xl'>
        <h1>React MySQL</h1>
      </Link>

        <ul className='flex gap-1'>
            <li>
                <Link to='/' className='bg-slate-200 px-2 py-1'>Home</Link>
            </li>
            <li>
                <Link to='/new' className='bg-teal-200 px-2 py-1'>CreateTasks</Link>
            </li>
        </ul>

    </div>
  )
}

