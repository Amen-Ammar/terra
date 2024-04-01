import { Component } from '@angular/core';

@Component({
  selector: 'app-task-list',
  templateUrl: './task-list.component.html',
  styleUrls: ['./task-list.component.scss']
})
export class TaskListComponent {
  tasks = [
    { id: 1, title: 'Task 1', description: 'Task 1 description', priority: 5, status: 0 },
    { id: 2, title: 'Task 2', description: 'Task 2 description', priority: 5, status: 1 },
    { id: 3, title: 'Task 3', description: 'Task 3 description', priority: 1, status: 2 }
  ];

  onTaskDropped(event: any, newStatus: number): void {
    const task = event.item.data;
    task.status = newStatus;
  }
}
