import { Card, Column } from '../models/task.model';

export const MOCK_CARDS: Card[] = [
  {
    id: 1,
    title: 'Implementar componente de login',
    description: 'Criar tela de autenticação com validação de usuário e senha',
    assignee: 'João Silva',
    priority: 'high',
    dueDate: new Date('2024-02-15'),
    status: 'todo'
  },
  {
    id: 2,
    title: 'Configurar banco de dados',
    description: 'Definir esquema e configurar conexão com PostgreSQL',
    assignee: 'Maria Santos',
    priority: 'high',
    dueDate: new Date('2024-02-10'),
    status: 'todo'
  },
  {
    id: 3,
    title: 'Desenvolver API de usuários',
    description: 'Criar endpoints para CRUD de usuários',
    assignee: 'Pedro Costa',
    priority: 'medium',
    dueDate: new Date('2024-02-20'),
    status: 'in-progress'
  },
  {
    id: 4,
    title: 'Implementar testes unitários',
    description: 'Criar testes para os componentes principais',
    assignee: 'Ana Oliveira',
    priority: 'medium',
    dueDate: new Date('2024-02-25'),
    status: 'in-progress'
  },
  {
    id: 5,
    title: 'Setup do ambiente de desenvolvimento',
    description: 'Configurar Docker e ambiente local',
    assignee: 'Carlos Lima',
    priority: 'low',
    dueDate: new Date('2024-02-05'),
    status: 'done'
  },
  {
    id: 6,
    title: 'Documentação do projeto',
    description: 'Criar README e documentação da API',
    assignee: 'Luciana Ferreira',
    priority: 'low',
    dueDate: new Date('2024-02-08'),
    status: 'done'
  },
  {
    id: 7,
    title: 'Análise de requisitos',
    description: 'Definir escopo e funcionalidades do sistema',
    assignee: 'Roberto Santos',
    priority: 'high',
    dueDate: new Date('2024-03-01'),
    status: 'backlog'
  },
  {
    id: 8,
    title: 'Design do sistema',
    description: 'Criar arquitetura e diagramas do banco de dados',
    assignee: 'Fernanda Lima',
    priority: 'medium',
    dueDate: new Date('2024-03-05'),
    status: 'backlog'
  },
  {
    id: 9,
    title: 'Configuração de CI/CD',
    description: 'Implementar pipeline de integração contínua',
    assignee: 'Diego Oliveira',
    priority: 'medium',
    dueDate: new Date('2024-03-10'),
    status: 'backlog'
  }
];

export const KANBAN_COLUMNS: Column[] = [
  {
    id: 'backlog',
    title: 'Backlog',
    cards: MOCK_CARDS.filter(card => card.status === 'backlog')
  },
  {
    id: 'todo',
    title: 'To Do',
    cards: MOCK_CARDS.filter(card => card.status === 'todo')
  },
  {
    id: 'in-progress',
    title: 'In Progress',
    cards: MOCK_CARDS.filter(card => card.status === 'in-progress')
  },
  {
    id: 'done',
    title: 'Done',
    cards: MOCK_CARDS.filter(card => card.status === 'done')
  }
];