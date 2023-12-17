
export enum TasksTypes {
    LOAD_REQUEST = '@tasks/LOAD_REQUEST',
    LOAD_SUCCCES = '@tasks/LOAD_SUCCCES',
    LOAD_FAILURE = '@tasks/LOAD_FAILURE',
    
    CREATE_TASK = '@tasks/CREATE_TASK',
    
    EDIT_TASK = '@tasks/EDIT_TASK',
    EDIT_TASK_SUCCESS = '@tasks/EDIT_TASK_SUCCESS',
    EDIT_TASK_FAILURE = '@tasks/EDIT_TASK_FAILURE',
    
    FINISH_TASK = '@tasks/FINISH_TASK',
    FINISH_TASK_SUCCESS = '@tasks/FINISH_TASK_SUCCESS',
    FINISH_TASK_FAILURE = '@tasks/FINISH_TASK_FAILURE'
}

export interface Task {
    id?: number
    description: string
    isFinish: boolean | string
}

export interface TasksState {
    readonly data: Task[]
    readonly loading: boolean
    readonly error: boolean
}
