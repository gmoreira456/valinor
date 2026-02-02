import { Component, Input, Output, EventEmitter } from '@angular/core';
import { CommonModule } from '@angular/common';
import { Card } from '../../models/task.model';

@Component({
  selector: 'app-task-card',
  standalone: true,
  imports: [CommonModule],
  templateUrl: './task-card.html',
  styleUrl: './task-card.css'
})
export class TaskCardComponent {
  @Input() card!: Card;
  @Output() cardClicked = new EventEmitter<Card>();
  @Output() dragStarted = new EventEmitter<string | number>();
  @Output() deleteRequested = new EventEmitter<string | number>();

  onDeleteClick(event: MouseEvent) {
    event.stopPropagation();
    this.deleteRequested.emit(this.card.id);
  }
  getPriorityClass(): string {
    switch (this.card.priority) {
      case 'high': return 'priority-high';
      case 'medium': return 'priority-medium';
      case 'low': return 'priority-low';
      default: return '';
    }
  }

  formatDate(date: Date): string {
    return new Date(date).toLocaleDateString('pt-BR');
  }

  onClick() {
    this.cardClicked.emit(this.card);
  }

  onDragStart(event: DragEvent) {
    // Impedir drag & drop de cards finalizados
    if (this.card.status === 'done') {
      event.preventDefault();
      return;
    }
    
    event.dataTransfer?.setData('text/plain', this.card.id.toString());
    this.dragStarted.emit(this.card.id);
  }
}
