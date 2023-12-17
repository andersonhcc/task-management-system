import { Reducer } from 'redux';
import { TasksState, TasksTypes } from './types';

const INITIAL_STATE: TasksState = {
  data: [],
  error: false,
  loading: false,
};

const reducer: Reducer<TasksState> = (state = INITIAL_STATE, action: any) => {
  switch (action.type) {

    case TasksTypes.LOAD_REQUEST:
      return { ...state, loading: true };

    case TasksTypes.LOAD_SUCCCES:
      return {
        ...state, loading: false, error: false, data: action.payload.data,
      };

    case TasksTypes.LOAD_FAILURE:
      return {
        ...state, loading: false, error: true, data: [],
      };

    case TasksTypes.CREATE_TASK:
      return {
        ...state,
        data: [...state.data],
      }
    case TasksTypes.FINISH_TASK:
      return {
        ...state,
      }
    case TasksTypes.FINISH_TASK_SUCCESS: {
      return {
        ...state,
        data: state.data.map(task =>
          task.id === action.payload.data.id ? { ...task, isFinish: true } : task
        )
      };
    }
    case TasksTypes.FINISH_TASK_FAILURE: {
      return {
        ...state,
      };
    }
    case TasksTypes.EDIT_TASK: {
      return {
        ...state,
        loading: true,
      }
    }
    case TasksTypes.EDIT_TASK_SUCCESS: {
      return {
        ...state,
        data: [...state.data],
        loading: false,
      }
    }
    case TasksTypes.EDIT_TASK_FAILURE: {
      return {
        ...state,
        loading: false,
        error: true,
      }
    }
    default:
      return state;
  }
};

export default reducer;
