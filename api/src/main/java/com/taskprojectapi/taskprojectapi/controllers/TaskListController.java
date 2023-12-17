package com.taskprojectapi.taskprojectapi.controllers;

import org.springframework.web.bind.annotation.RequestParam;
import org.springframework.web.bind.annotation.RestController;
import org.springframework.web.multipart.MultipartFile;
import org.springframework.web.servlet.mvc.support.RedirectAttributes;

import com.taskprojectapi.taskprojectapi.entity.Task;
import com.taskprojectapi.taskprojectapi.service.TaskService;

import java.io.IOException;
import java.nio.file.Files;
import java.nio.file.Path;
import java.nio.file.Paths;
import java.util.List;
import org.springframework.beans.factory.annotation.Autowired;
import org.springframework.web.bind.annotation.GetMapping;
import org.springframework.web.bind.annotation.ModelAttribute;
import org.springframework.web.bind.annotation.PathVariable;
import org.springframework.web.bind.annotation.PostMapping;
import org.springframework.web.bind.annotation.PutMapping;

@RestController
public class TaskListController {

    @Autowired
    private TaskService service;

    @PostMapping("/addTask")
    public String addTask(@ModelAttribute Task task,
            @RequestParam(value = "file", required = false) MultipartFile file,
            RedirectAttributes redirectAttributes) {

        try {
            if (file != null && !file.isEmpty()) {
                byte[] bytes = file.getBytes();
                Path path = Paths.get("src/main/resources/static/images/" + file.getOriginalFilename());
                Files.write(path, bytes);

                task.setImageUrl("/images/" + file.getOriginalFilename());
            }

            service.saveTask(task);

            if (file != null && !file.isEmpty()) {
                redirectAttributes.addFlashAttribute("message",
                        "You successfully uploaded '" + file.getOriginalFilename() + "' and added a task");
            } else {
                redirectAttributes.addFlashAttribute("message", "Task added successfully without an image");
            }

            return "sucess";

        } catch (IOException e) {
            e.printStackTrace();
            redirectAttributes.addFlashAttribute("error",
                    "An error occurred while uploading the file or adding the task");
            return "error";
        }
    }

    @GetMapping("/tasks")
    public List<Task> findAllTasks() {
        return service.getTasks();
    }

    @PutMapping("/updateTask")
    public String updateTask(@ModelAttribute Task task,
            @RequestParam(value = "file", required = false) MultipartFile file,
            RedirectAttributes redirectAttributes) {

        try {
            if (file != null && !file.isEmpty()) {
                byte[] bytes = file.getBytes();
                Path path = Paths.get("src/main/resources/static/images/" + file.getOriginalFilename());
                Files.write(path, bytes);

                task.setImageUrl("/images/" + file.getOriginalFilename());
            }

            service.updateTask(task);

            if (file != null && !file.isEmpty()) {
                redirectAttributes.addFlashAttribute("message",
                        "You successfully uploaded '" + file.getOriginalFilename() + "' and updated the task");
            } else {
                redirectAttributes.addFlashAttribute("message", "Task updated successfully without an image");
            }

            return "sucess";

        } catch (IOException e) {
            e.printStackTrace();
            redirectAttributes.addFlashAttribute("error",
                    "An error occurred while uploading the file or updating the task");
            return "error";
        }
    }

    @PutMapping("/task/finish/{id}")
    public Task finishTask(@PathVariable int id) {
        return service.finishTask(id);
    }

}
