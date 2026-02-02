import { Component, OnInit, computed, ChangeDetectorRef } from '@angular/core';
import { CommonModule } from '@angular/common';
import { Column, Card } from '../../models/task.model';
import { Kanban } from '../../services/kanban';
import { KanbanColumnComponent } from '../kanban-column/kanban-column';
import { AddTaskComponent } from '../add-task/add-task';
import { TaskDetails } from '../task-details/task-details';
import { ToastComponent } from '../toast/toast';

@Component({
  selector: 'app-kanban-board',
  standalone: true,
  imports: [CommonModule, KanbanColumnComponent, AddTaskComponent, TaskDetails, ToastComponent],
  templateUrl: './kanban-board.html',
  styleUrl: './kanban-board.css'
})
export class KanbanBoardComponent implements OnInit {
  toastMessage = '';
  toastType: 'success' | 'error' | 'info' = 'success';
  toastVisible = false;
  toastTimeout: any;
  columns = computed(() => this.kanbanService.getColumns());
  isAddCardModalOpen = false;
  isCardDetailsModalOpen = false;
  selectedColumn = 'todo';
  selectedCard: Card | null = null;

  constructor(private kanbanService: Kanban, private cdr: ChangeDetectorRef) { }

  ngOnInit() {
  }

  onDeleteRequested(cardId: string | number) {
    this.kanbanService.deleteCard(cardId);
    this.showToast('Card excluído com sucesso!', 'success');
    if (this.selectedCard?.id === cardId) {
      this.closeCardDetailsModal();
    }
  }

  openAddCardModal(columnId: string = 'todo') {
    this.selectedColumn = columnId;
    this.isAddCardModalOpen = true;
  }

  closeAddCardModal() {
    this.isAddCardModalOpen = false;
  }

  onCardCreated(cardData: Omit<Card, 'id'>) {
    this.kanbanService.addCard(cardData);
    this.showToast('Card criado com sucesso!', 'success');
  }

  onCardClicked(card: Card) {
    this.selectedCard = card;
    this.isCardDetailsModalOpen = true;
  }

  onStatusChanged(event: { cardId: string | number, newStatus: 'backlog' | 'todo' | 'in-progress' | 'done' }) {
    this.kanbanService.updateCardStatus(event.cardId, event.newStatus);
    this.showToast('Tarefa movida para "' + this.getStatusLabel(event.newStatus) + '"!', 'info');
    if (this.selectedCard?.id === event.cardId) {
      this.selectedCard = { ...this.selectedCard, status: event.newStatus };
    }
  }

  showToast(message: string, type: 'success' | 'error' | 'info' = 'success') {
    this.toastMessage = message;
    this.toastType = type;
    this.toastVisible = true;
    this.cdr.detectChanges();
    if (this.toastTimeout) {
      clearTimeout(this.toastTimeout);
    }
    this.toastTimeout = setTimeout(() => {
      this.toastVisible = false;
      this.cdr.detectChanges();
    }, 2500);
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

  onCardDropped(event: { cardId: string | number, targetColumnId: string }) {
    this.kanbanService.updateCardStatus(event.cardId, event.targetColumnId as any);
    this.showToast('Tarefa movida para "' + this.getStatusLabel(event.targetColumnId) + '"!', 'info');
    if (this.selectedCard?.id === event.cardId) {
      this.selectedCard = { ...this.selectedCard, status: event.targetColumnId as any };
    }
  }

  closeCardDetailsModal() {
    this.isCardDetailsModalOpen = false;
    this.selectedCard = null;
  }

  trackByColumnId(index: number, column: Column): string {
    return column.id;
  }
}
