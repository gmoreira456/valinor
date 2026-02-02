import { Component, Input, Output, EventEmitter } from '@angular/core';
import { CommonModule } from '@angular/common';
import { Column, Card } from '../../models/task.model';
import { TaskCardComponent } from '../task-card/task-card';

@Component({
  selector: 'app-kanban-column',
  standalone: true,
  imports: [CommonModule, TaskCardComponent],
  templateUrl: './kanban-column.html',
  styleUrl: './kanban-column.css'
})
export class KanbanColumnComponent {
  @Input() column!: Column;
  @Output() addCard = new EventEmitter<string>();
  @Output() cardClicked = new EventEmitter<Card>();
  @Output() cardDropped = new EventEmitter<{cardId: string | number, targetColumnId: string}>();
  @Output() deleteRequested = new EventEmitter<string | number>();

  trackByCardId(index: number, card: Card): string | number {
    return card.id;
  }

  onAddCard() {
    this.addCard.emit(this.column.id);
  }

  onCardClicked(card: Card) {
    this.cardClicked.emit(card);
  }

  onDragOver(event: DragEvent) {
    event.preventDefault();
  }

  onDrop(event: DragEvent) {
    event.preventDefault();
    const cardId = Number(event.dataTransfer?.getData('text/plain'));
    if (cardId) {
      this.cardDropped.emit({ cardId, targetColumnId: this.column.id });
    }
  }
}
