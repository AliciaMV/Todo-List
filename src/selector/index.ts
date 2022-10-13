// function that will return the tasks highest id 
export function findLastTaskId(state: TaskState) { 
    if (state.tasks.length === 0) {
        return 0;
    }

    const tasksId: number[] = state.tasks.map(
        (task) => task.id,
    )
    return Math.max(...tasksId);
}

// function that count the total number of tasks saved
export function setCounterAll(state: TaskState) {
    if (state.tasks.length === 0) {
        return 0;
    }else {
        return state.tasks.length;
    }
}

// to return only the unchecked (ongoing) tasks number
export function setCounter(state: TaskState) {
    const sortedTasks = state.tasks.filter(task => task.check === false);
    if (sortedTasks.length === 0) {
        return 0;
    }else {
        return sortedTasks.length;
    }
}
