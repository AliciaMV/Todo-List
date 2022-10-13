//== import
import { SET_NEW_INPUT_VALUE, SUBMIT_NEW_TASK, SET_CHECK, UPDATE_COUNTER } from "../actions";
import { findLastTaskId, setCounter } from "../selector";


// state
const initialState = {
    formInput: '',
    tasks: [
        {
            id: 2,
            name: 'buy choucroute',
            check: true
        },
        {
            id: 12,
            name: 'feed pigeons',
            check: false
        },
    ],
    counter: 1,
};


function rootReducer(state: TaskState = initialState, action: TaskAction): TaskState {
    switch (action.type) {
        case SET_NEW_INPUT_VALUE: {
            return {
                ...state,
                formInput: action.newValue,
            }
        }
        case SUBMIT_NEW_TASK: {
            return {
                ...state,
                tasks: [
                    ...state.tasks,
                    {
                        id: findLastTaskId(state)+1,
                        name: state.formInput,
                        check: false
                    },
                ],
                formInput: '',
                counter: setCounter(state)+1,
            };
        }
        case SET_CHECK: {       
            return {
                ...state,
                tasks: state.tasks.map(task => task.id === action.id ?
                    {...task, check: !action.check} :
                    task
                ),
            };
        }
        case UPDATE_COUNTER: {
            return {
                ...state,
                counter: setCounter(state),
            };
        }

        default:
            return state;
    }
}


// export
export default rootReducer; 