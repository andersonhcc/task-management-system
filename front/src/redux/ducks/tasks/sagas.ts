import { call, put } from 'redux-saga/effects';
import tasksAsync from '../../../services';
import { Task } from './types';

import {
  load_task_sucess_action,
  load_task_failure_action,
  finish_task_action_sucess,
  edit_task_action_failure,
  edit_task_action_sucess 
} from './actions';

type Payload = {
  data: Task
}

export function* fetchTasks(): Generator<any, void, any> {
  try {
    const response = yield call(() => tasksAsync.getAllTasks());
    yield put(load_task_sucess_action(response.data));
  } catch (err) {
    yield put(load_task_failure_action());
  }
}

export function* createTask(action: { type: string, payload: { data: any, image: any } }): Generator<any, void, any> {
  try {
    const { payload: { data } } = action;
    yield call(() => tasksAsync.createTask(data));
    const response = yield call(() => tasksAsync.getAllTasks());
    yield put(load_task_sucess_action(response.data));
  } catch (error) {
    console.error('Erro ao criar tarefa:', error);
  }
}

export function* editTask(action: { type: string, payload: Payload }): Generator<any, void, any> {
  try {
    const { payload: task } = action;
    yield call(() => tasksAsync.editTask(task.data));
    yield put(edit_task_action_sucess(task.data));
    const response = yield call(() => tasksAsync.getAllTasks());
    yield put(load_task_sucess_action(response.data));

  } catch (error) {
    console.log('Error ao editar tarefa:', error);
    yield put(edit_task_action_failure());
  }
}

export function* finishTask(action: { type: string, payload: Payload }): Generator<any, void, any> {
  try {
    const { payload: task } = action;
    yield call(() => tasksAsync.finishTask(task.data.id as number));
    yield put(finish_task_action_sucess(task.data));
  } catch (error) {
    console.error('Erro ao finalizar tarefa:', error);
  }
}

