import { all, takeLatest } from 'redux-saga/effects';

import { TasksTypes } from './ducks/tasks/types';
import {fetchTasks, createTask, finishTask, editTask} from "./ducks/tasks/sagas";

export default function* rootSaga(): Generator {
  return yield all([
    takeLatest(TasksTypes.LOAD_REQUEST, fetchTasks),
    takeLatest(TasksTypes.CREATE_TASK, createTask),
    takeLatest(TasksTypes.FINISH_TASK, finishTask),
    takeLatest(TasksTypes.EDIT_TASK, editTask),
  ]);
}
