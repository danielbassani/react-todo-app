import { toHaveStyle } from '@testing-library/jest-dom/dist/matchers'
import '../styling/task.css'

const Task = ( { task } ) => {
    return (
        <>
        <tr>
            <th>
                {task.id}
            </th>
            <th>
                {task.title}
                <p>{task.day}</p>
            </th>
            <th>
                
            </th>
        </tr>
        </> 
    )
}

export default Task