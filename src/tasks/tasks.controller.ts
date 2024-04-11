import {
  Body,
  Controller,
  Delete,
  Get,
  Patch,
  Post,
  Put,
} from '@nestjs/common';
import { TasksService } from './tasks.service';

@Controller('/tasks')
export class TasksController {
  tasksServices: TasksService;

  constructor(tasksServices: TasksService) {
    this.tasksServices = tasksServices;
  }

  @Get()
  getAllTasks() {
    return this.tasksServices.getTasks();
  }

  @Post()
  createTasks(@Body() task) {
    return this.tasksServices.postTasks(task);
  }

  @Put()
  updateTasks() {
    return this.tasksServices.putTasks();
  }

  @Patch()
  updateTasksStatus() {
    return this.tasksServices.patchTasks();
  }

  @Delete()
  deleteTasks() {
    return this.tasksServices.deleteTasks();
  }
}
