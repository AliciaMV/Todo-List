//== import
// npm
import { useSelector } from "react-redux";
// style
import './tasksCounter.scss';

//== comp
const TasksCounter = () => {
    const counter = useSelector((state: TaskState) => state.counter)
    // if counter === 0, won't be displayed 
    const style = (!counter ? '--empty' : '');

    return (
        <p className={`counter${style}`}>
            {counter} Ongoing tasks
        </p>
    )
}

//== exp
export default TasksCounter;