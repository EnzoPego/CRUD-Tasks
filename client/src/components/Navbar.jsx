import {Link} from 'react-router-dom'
import { TasksForm } from '../pages/TasksForm'

export const NavBar = () => {
  return (
    <div>
        <h1>React MySQL</h1>

        <ul>
            <li>
                <Link to='/'>Home</Link>
            </li>
            <li>
                <Link to='/new'>CreateTasks</Link>
            </li>
        </ul>

    </div>
  )
}

