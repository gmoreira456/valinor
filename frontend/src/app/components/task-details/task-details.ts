import { Component, Input, Output, EventEmitter } from '@angular/core';
import { CommonModule } from '@angular/common';
import { FormsModule } from '@angular/forms';
import { Card } from '../../models/task.model';

@Component({
  selector: 'app-task-details',
  standalone: true,
  imports: [CommonModule, FormsModule],
  templateUrl: './task-details.html',
  styleUrl: './task-details.css',
})
export class TaskDetails {
    @Output() deleteRequested = new EventEmitter<string | number>();

    onDeleteClick() {
      if (this.card) {
        this.deleteRequested.emit(this.card.id);
      }
    }
  @Input() card: Card | null = null;
  @Input() isOpen = false;
  @Output() closed = new EventEmitter<void>();
  @Output() statusChanged = new EventEmitter<{cardId: string | number, newStatus: 'backlog' | 'todo' | 'in-progress' | 'done'}>();

  statusOptions = [
    { value: 'backlog', label: 'Backlog' },
    { value: 'todo', label: 'To Do' },
    { value: 'in-progress', label: 'In Progress' },
    { value: 'done', label: 'Done' }
  ];

  selectedStatus: 'backlog' | 'todo' | 'in-progress' | 'done' = 'todo';

  ngOnChanges() {
    if (this.card) {
      this.selectedStatus = this.card.status;
    }
  }

  isStatusEditable(): boolean {
    return this.card?.status !== 'done';
  }

  confirmStatusChange() {
    if (this.card && this.selectedStatus !== this.card.status) {
      this.statusChanged.emit({
        cardId: this.card.id,
        newStatus: this.selectedStatus
      });
      this.close();
    }
  }


  getPriorityLabel(priority: string): string {
    switch (priority) {
      case 'high': return 'Alta';
      case 'medium': return 'Média';
      case 'low': return 'Baixa';
      default: return priority;
    }
  }

  getStatusLabel(status: string): string {
    switch (status) {
      case 'backlog': return 'Backlog';
      case 'todo': return 'Para Fazer';
      case 'in-progress': return 'Em Progresso';
      case 'done': return 'Concluído';
      default: return status;
    }
  }

  getPriorityClass(): string {
    if (!this.card) return '';
    switch (this.card.priority) {
      case 'high': return 'priority-high';
      case 'medium': return 'priority-medium';
      case 'low': return 'priority-low';
      default: return '';
    }
  }

  getStatusClass(): string {
    if (!this.card) return '';
    switch (this.card.status) {
      case 'backlog': return 'status-backlog';
      case 'todo': return 'status-todo';
      case 'in-progress': return 'status-in-progress';
      case 'done': return 'status-done';
      default: return '';
    }
  }

  formatDate(date: Date): string {
    return new Date(date).toLocaleDateString('pt-BR', {
      day: '2-digit',
      month: '2-digit',
      year: 'numeric'
    });
  }

  onStatusChange(newStatus: string) {
    if (this.card) {
      this.statusChanged.emit({
        cardId: this.card.id,
        newStatus: newStatus as 'backlog' | 'todo' | 'in-progress' | 'done'
      });
    }
  }

  close() {
    this.closed.emit();
  }
}
