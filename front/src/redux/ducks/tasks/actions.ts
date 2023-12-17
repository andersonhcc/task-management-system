import { action } from 'typesafe-actions';
import { TasksTypes, Task } from './types';

interface SaveTask extends Task {
    image: unknown
}

export const load_task_action = () => action(TasksTypes.LOAD_REQUEST);

export const load_task_sucess_action = (data: Task[]) => action(TasksTypes.LOAD_SUCCCES, { data });

export const load_task_failure_action = () => action(TasksTypes.LOAD_FAILURE);

export const create_task_action = (data: SaveTask) => action(TasksTypes.CREATE_TASK, { data });

export const finish_task_action = (data: Task) => action(TasksTypes.FINISH_TASK, { data });

export const finish_task_action_sucess = (data: Task) => action(TasksTypes.FINISH_TASK_SUCCESS, { data });

export const finish_task_action_failure = () => action(TasksTypes.FINISH_TASK_FAILURE);

export const edit_task_action = (data: SaveTask) => action(TasksTypes.EDIT_TASK, { data });

export const edit_task_action_sucess = (data: Task) => action(TasksTypes.EDIT_TASK_SUCCESS, { data });

export const edit_task_action_failure = () => action(TasksTypes.EDIT_TASK_FAILURE);

