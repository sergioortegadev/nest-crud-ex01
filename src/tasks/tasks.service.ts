import { Injectable } from '@nestjs/common';

@Injectable()
export class TasksService {
  private tasks = [];

  getTasks() {
    console.log('/tasks  Get');
    return this.tasks;
  }
  postTasks(task) {
    console.log('/tasks  Post', task);
    this.tasks.push(task);
    return task;
  }
  putTasks() {
    console.log('/tasks  Put');
    return 'Actualizando Tareas';
  }
  patchTasks() {
    console.log('/tasks  Patch');
    return 'Actualizando parcialmente Tareas';
  }
  deleteTasks() {
    console.log('/tasks  Delete');
    return 'Borrando Tareas';
  }
}
