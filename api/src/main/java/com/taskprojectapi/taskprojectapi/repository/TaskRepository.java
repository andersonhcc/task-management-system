package com.taskprojectapi.taskprojectapi.repository;

import org.springframework.data.jpa.repository.JpaRepository;

import com.taskprojectapi.taskprojectapi.entity.Task;

public interface TaskRepository extends JpaRepository<Task, Integer> {
}
