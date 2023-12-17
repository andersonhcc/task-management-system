import { AxiosResponse } from 'axios';
import { api } from '../api';

export class TasksAsync {
  async getAllTasks(): Promise<AxiosResponse> {
    return await api.get(`/tasks`);
  }
  async finishTask(id: number): Promise<AxiosResponse> {
    return await api.put(`/task/finish/${id}`);
  }

  async editTask(data: any): Promise<AxiosResponse> {
    const formData = new FormData();
    formData.append('description', data.description);
    formData.append('isFinish', data.isFinish);
    formData.append('id', data.id);

    if (data.image) {
      formData.append('file', data.image);
    }
    return await api.put(`/updateTask`, formData, {
      headers: {
        'Content-Type': 'multipart/form-data'
      }
    });
  }
  async createTask(data: any): Promise<AxiosResponse> {
    const formData = new FormData();
    formData.append('description', data.description);
    formData.append('isFinish', data.isFinish);

    if (data.image) {
      formData.append('file', data.image);
    }
    return await api.post(`/addTask`, formData, {
      headers: {
        'Content-Type': 'multipart/form-data'
      }
    });
  }
}
