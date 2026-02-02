import { Component, signal } from '@angular/core';
import { RouterOutlet } from '@angular/router';
import { KanbanBoardComponent } from './components/kanban-board/kanban-board';

@Component({
  selector: 'app-root',
  imports: [RouterOutlet, KanbanBoardComponent],
  templateUrl: './app.html',
  styleUrl: './app.css'
})
export class App {
  protected readonly title = signal('Kanban Board');
}
