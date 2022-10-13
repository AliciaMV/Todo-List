//== import
// npm
import { useSelector } from "react-redux";
// local
import Task from './Task';
//style
import './tasks.scss';

//== comp
const Tasks = () => {
    const tasksArr = useSelector((state: TaskState) => state.tasks);
    return (
        <ul className="list">
            {tasksArr.map((t: ITask) => <Task key={t.id} {...t} />)}
        </ul>
    )
}

//== exp
export default Tasks;