import { Component, EventEmitter, Input, Output, OnInit, OnChanges } from '@angular/core';
import { CommonModule } from '@angular/common';
import { FormsModule } from '@angular/forms';
import { Card } from '../../models/task.model';

@Component({
  selector: 'app-add-task',
  standalone: true,
  imports: [CommonModule, FormsModule],
  templateUrl: './add-task.html',
  styleUrl: './add-task.css'
})
export class AddTaskComponent implements OnInit, OnChanges {
  @Input() isOpen = false;
  @Input() columnId: string = 'todo';
  @Output() cardCreated = new EventEmitter<Omit<Card, 'id'>>();
  @Output() closed = new EventEmitter<void>();

  cardForm = {
    title: '',
    description: '',
    assignee: '',
    priority: 'medium' as 'low' | 'medium' | 'high',
    dueDate: '',
    status: 'todo' as 'backlog' | 'todo' | 'in-progress' | 'done'
  };

  ngOnInit() {
    this.updateStatusFromColumnId();
    if (!this.cardForm.dueDate) {
      this.cardForm.dueDate = this.getTodayDate();
    }
  }

  ngOnChanges() {
    this.updateStatusFromColumnId();
  }

  private updateStatusFromColumnId() {
    this.cardForm.status = this.columnId as any;
  }

  getTodayDate(): string {
    const today = new Date();
    return today.toISOString().split('T')[0];
  }

  onSubmit() {
    if (!this.cardForm.title.trim() || !this.cardForm.description.trim()) {
      return;
    }

    const selectedDateParts = this.cardForm.dueDate.split('-');
    const selectedDate = new Date(
      parseInt(selectedDateParts[0]), 
      parseInt(selectedDateParts[1]) - 1, 
      parseInt(selectedDateParts[2])
    );
    
    const today = new Date();
    today.setHours(0, 0, 0, 0);

    if (selectedDate < today) {
      alert('A data de entrega não pode ser no passado!');
      return;
    }

    const newCard: Omit<Card, 'id'> = {
      title: this.cardForm.title.trim(),
      description: this.cardForm.description.trim(),
      assignee: this.cardForm.assignee.trim() || 'Não atribuído',
      priority: this.cardForm.priority,
      dueDate: selectedDate,
      status: this.cardForm.status
    };

    this.cardCreated.emit(newCard);
    this.resetForm();
    this.closed.emit();
  }

  onCancel() {
    this.resetForm();
    this.closed.emit();
  }

  private resetForm() {
    this.cardForm = {
      title: '',
      description: '',
      assignee: '',
      priority: 'medium',
      dueDate: '',
      status: this.columnId as any
    };
  }
}
