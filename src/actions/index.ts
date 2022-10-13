export const SET_NEW_INPUT_VALUE = "SET_NEW_INPUT_VALUE";
export function setNewInputValue(newValue: string) {
    return { 
        type: "SET_NEW_INPUT_VALUE",
        newValue,
    }
} 

export const SUBMIT_NEW_TASK = "SUBMIT_NEW_TASK";
export function submitNewTask() {
    return {
        type: "SUBMIT_NEW_TASK",
    }
}

export const SET_CHECK = "SET_CHECK";
export function setCheck(id: number, check: boolean) {
    return {
        type: "SET_CHECK",
        check,
        id,
    }
}

export const UPDATE_COUNTER = "UPDATE_COUNTER";
export function updateCounter() {
    return {
        type: "UPDATE_COUNTER",
    }
}