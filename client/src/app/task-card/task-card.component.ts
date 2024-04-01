import { Component, Input, Output, EventEmitter } from '@angular/core';

@Component({
  selector: 'app-task-card',
  templateUrl: './task-card.component.html',
  styleUrls: ['./task-card.component.scss']
})
export class TaskCardComponent {
  @Input() task: any;
  @Output() dragStart = new EventEmitter<void>();

  onDragStart(): void {
    this.dragStart.emit();
  }
}
