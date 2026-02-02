import { Component, Input } from '@angular/core';
import { CommonModule } from '@angular/common';

@Component({
  selector: 'app-toast',
  standalone: true,
  imports: [CommonModule],
  template: `
    <div class="toast" *ngIf="visible" [ngClass]="type">
      {{ message }}
    </div>
  `,
  styleUrl: './toast.css'
})
export class ToastComponent {
  @Input() message = '';
  @Input() type: 'success' | 'error' | 'info' = 'success';
  @Input() visible = false;
}
