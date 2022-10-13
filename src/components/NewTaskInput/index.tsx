//== import
// npm
import * as React from 'react';
import { useSelector, useDispatch } from 'react-redux';
import { Dispatch } from 'redux';
// actions
import { setNewInputValue, submitNewTask } from '../../actions/index';
//style
import './newTaskInput.scss';


//== comp
const NewTaskInput = () => {
    const formInput: string = useSelector((state: TaskState) => state.formInput);
    const dispatch: Dispatch<any> = useDispatch();
    
    function handleChange(e: React.FormEvent<HTMLInputElement>) {
        e.preventDefault();
        dispatch(setNewInputValue(e.currentTarget.value))
    }

    function handleSubmit(e: React.FormEvent) {
        e.preventDefault();
        dispatch(submitNewTask());
    }

    return (
        <form className="form" onSubmit={handleSubmit}>
            <input type="text" 
                className="form__input" 
                placeholder="Add task" 
                value={formInput} 
                onChange={handleChange}
            />
        </form>
    )
}

//== exp
export default NewTaskInput;