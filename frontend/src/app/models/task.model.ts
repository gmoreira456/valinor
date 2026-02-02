
export interface Card {
  id: string | number;
  title: string;
  description: string;
  assignee: string;
  priority: 'low' | 'medium' | 'high';
  dueDate: Date;
  status: 'backlog' | 'todo' | 'in-progress' | 'done';
}

export interface Column {
  id: string;
  title: string;
  cards: Card[];
}