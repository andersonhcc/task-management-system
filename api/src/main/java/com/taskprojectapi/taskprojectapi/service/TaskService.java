package com.taskprojectapi.taskprojectapi.service;

import org.springframework.beans.factory.annotation.Autowired;
import org.springframework.stereotype.Service;
import com.taskprojectapi.taskprojectapi.entity.Task;
import com.taskprojectapi.taskprojectapi.repository.TaskRepository;
import java.util.List;

@Service
public class TaskService {
    @Autowired
    private TaskRepository repository;

    public Task saveTask(Task task) {
        return repository.save(task);
    }

    public List<Task> saveTasks(List<Task> tasks) {
        return repository.saveAll(tasks);
    }

    public List<Task> getTasks() {
        return repository.findAll();
    }

    public Task getTaskById(int id) {
        return repository.findById(id).orElse(null);
    }

    public String deleteTask(int id) {
        repository.deleteById(id);
        return "task deleted " + id;
    }

    public Task updateTask(Task task) {
        Task exitingTask = repository.findById(task.getId()).orElse(task);
        exitingTask.setDescription(task.getDescription());
        exitingTask.setIsFinish(task.getIsFinish());
        if (task.getImageUrl() != null && !task.getImageUrl().isEmpty()) {
            exitingTask.setImageUrl(task.getImageUrl());
        }
            return repository.save(exitingTask);
    }

    public Task finishTask(int id) {
        Task exitingTask = repository.findById(id).orElse(null);
        exitingTask.setIsFinish(true);
        return repository.save(exitingTask);
    }

}
