import { Injectable } from '@angular/core';
import { signal, computed } from '@angular/core';
import { Card, Column } from '../models/task.model';
import { ApiService } from './api.service';
import { Observable } from 'rxjs';
import { tap } from 'rxjs/operators';

@Injectable({ providedIn: 'root' })
export class Kanban {
  private cards = signal<Card[]>([]);

  constructor(private apiService: ApiService) {
    this.loadCards();
  }

  private loadCards(): void {
    this.apiService.getCards().subscribe((cards) => {
      console.log('Carregando cards do backend:', cards);
      this.cards.set(cards.map(c => ({ ...c, dueDate: new Date(c.dueDate) })));
    });
  }
  
  getCards() {
    return this.cards.asReadonly();
  }

  getColumns(): Column[] {
    const currentCards = this.cards();
    return [
      { 
        id: 'backlog', 
        title: 'Backlog', 
        cards: currentCards.filter(c => c.status === 'backlog') 
      },
      { 
        id: 'todo', 
        title: 'To Do', 
        cards: currentCards.filter(c => c.status === 'todo') 
      },
      { 
        id: 'in-progress', 
        title: 'In Progress', 
        cards: currentCards.filter(c => c.status === 'in-progress') 
      },
      { 
        id: 'done', 
        title: 'Done', 
        cards: currentCards.filter(c => c.status === 'done') 
      },
    ];
  }

  addCard(cardData: Omit<Card, 'id'>): void {
    this.apiService.createCard(cardData).subscribe({
      next: (newCard) => {
        const currentCards = this.cards();
        const updatedCards = [...currentCards, { ...newCard, dueDate: new Date(newCard.dueDate) }];
        this.cards.set(updatedCards);
      },
      error: (error) => {
        console.error('Erro ao criar card:', error);
      }
    });
  }

  updateCardStatus(cardId: string | number, newStatus: 'backlog' | 'todo' | 'in-progress' | 'done'): void {
    this.apiService.updateCard(cardId, { status: newStatus }).subscribe({
      next: () => {
        console.log('Status atualizado com sucesso no backend');
        const currentCards = this.cards();
        console.log('Cards antes da atualização:', currentCards);
        const updatedCards = currentCards.map(c =>
          String(c.id) === String(cardId) ? { ...c, status: newStatus } : c
        );
        console.log('Cards após atualização:', updatedCards);
        this.cards.set([...updatedCards]);
      },
      error: (error) => {
        console.error('Erro ao atualizar status no backend:', error);
      }
    });
  }

  deleteCard(cardId: string | number): void {
    this.apiService.deleteCard(cardId).subscribe(() => {
      this.cards.set(this.cards().filter(c => String(c.id) !== String(cardId)));
    });
  }
}