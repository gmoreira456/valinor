import { Injectable } from '@angular/core';
import { HttpClient } from '@angular/common/http';
import { Observable, map } from 'rxjs';
import { environment } from '../../environments/environment';
import { Card } from '../models/task.model';

@Injectable({ providedIn: 'root' })
export class ApiService {
    constructor(private http: HttpClient) { }

    getCards(): Observable<Card[]> {
        const query = `
            query {
                cards {
                    id
                    title
                    status
                    description
                    priority
                    assignee
                    dueDate
                }
            }
        `;
        return this.http.post<any>(environment.apiUrl, { query })
            .pipe(map(res => res.data.cards as Card[]));
    }

    createCard(card: Omit<Card, 'id'>): Observable<Card> {
        const mutation = `
            mutation {
                createCard(input: {
                    title: "${card.title}",
                    description: "${card.description}",
                    status: "${card.status}",
                    priority: "${card.priority}",
                    assignee: "${card.assignee}",
                    dueDate: "${card.dueDate.toISOString()}"
                }) {
                    id
                    title
                    description
                    status
                    priority
                    assignee
                    dueDate
                }
            }
        `;
        return this.http.post<any>(environment.apiUrl, { query: mutation })
            .pipe(map(res => res.data.createCard as Card));
    }

    updateCard(id: string | number, card: Partial<Card>): Observable<Card> {
        const mutation = `
            mutation {
                updateCard(input: {
                    status: "${card.status}",
                    id: ${id}
                }) {
                    id
                }
            }
        `;
        return this.http.post<any>(`${environment.apiUrl}`, { query: mutation })
            .pipe(map(res => res.data.updateCard as Card));
    }

    deleteCard(id: string | number): Observable<void> {
        const mutation = `
            mutation {
                deleteCard(id: ${id})
            }
        `;
        return this.http.post<any>(environment.apiUrl, { query: mutation })
    }
}