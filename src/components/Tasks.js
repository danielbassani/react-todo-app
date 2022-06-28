
import '../styling/tasks.css'

import Task from './Task'

const tasks = [
    {id: 1, title: 'Test titleeeeee', day: 'Jan 1, 1970'},
    {id: 2, title: 'Test title', day: 'Jan 1, 1970'},
    {id: 3, title: 'Test title', day: 'Jan 1, 1970'},
    {id: 4, title: 'Test title', day: 'Jan 1, 1970'},
    {id: 5, title: 'Test title', day: 'Jan 1, 1970'},
    {id: 6, title: 'Test title', day: 'Jan 1, 1970'}
]

const Tasks = () => {
    return (
        <div className="col-10 center">
            <h1>My Tasks</h1>
            <table className="table tasks-table">
                <thead>
                    <tr>
                        <th className="col-2" scope="col">#</th>
                        <th className="col-8" scope="col">Task</th>
                        <th className="col-2" scope="col">Action</th>
                    </tr>
                </thead>
                <tbody>
                    {tasks.map((task) => {
                        return <Task key={task.id} task={task}/>
                    })}
                </tbody>
                
            </table>
        </div>
    )
}

export default Tasks
