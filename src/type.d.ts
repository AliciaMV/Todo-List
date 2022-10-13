interface ITask {
    id: number
    name: string
    check: boolean
}

type TaskState = {
    formInput: string
    tasks: Tasks[]
    counter: number
}

type TaskAction = {
    type: string
    newValue: string
    check: boolean
    id: number
}