# 📋 Valinor - Sistema Kanban Full-Stack

Uma aplicação Kanban completa construída com **Angular** e **NestJS**, utilizando **GraphQL** para comunicação entre frontend e backend. O projeto oferece uma interface moderna e intuitiva para gerenciamento de tarefas com drag & drop.

## 🚀 Tecnologias Utilizadas

### Backend
- **NestJS** - Framework Node.js robusto para APIs
- **GraphQL** - Query language para APIs flexíveis
- **TypeORM** - ORM para gerenciamento de banco de dados
- **TypeScript** - Tipagem estática e segurança
- **SQLite/PostgreSQL** - Banco de dados

### Frontend  
- **Angular 21** - Framework SPA moderno
- **TypeScript** - Consistência de tipos
- **CSS nativo** - Styling responsivo

### Ferramentas de Desenvolvimento
- **ESLint** - Qualidade e padronização de código
- **Prettier** - Formatação consistente
- **Vitest** - Testes unitários (Frontend)
- **Jest** - Testes unitários (Backend)

## 📁 Estrutura do Projeto

```
valinor/
├── backend/                    # API NestJS com GraphQL
│   ├── src/
│   │   ├── cards/             # Módulo de cards
│   │   │   ├── card.entity.ts # Entidade do banco
│   │   │   ├── card.resolver.ts # Resolver GraphQL
│   │   │   └── dto/           # DTOs para input/output
│   │   ├── app.module.ts      # Módulo principal
│   │   ├── data-source.ts     # Configuração TypeORM
│   │   └── main.ts            # Bootstrap da aplicação
│   └── package.json
└── frontend/                   # Aplicação Angular
    ├── src/
    │   ├── app/
    │   │   ├── components/     # Componentes da interface
    │   │   │   ├── kanban-board/
    │   │   │   ├── kanban-column/
    │   │   │   ├── task-card/
    │   │   │   └── add-task/
    │   │   ├── services/       # Services Angular
    │   │   ├── models/         # Modelos TypeScript
    │   │   └── data/           # Mock data
    │   └── main.ts
    └── package.json
```

## 🔧 Configuração e Instalação

### Pré-requisitos
- **Node.js** (versão 18 ou superior)
- **npm** (versão 9 ou superior)


### 1. Instalação das dependências

**Backend:**
```bash
cd backend
npm install
```

**Frontend:**
```bash
cd frontend  
npm install
```

### 2. Configuração do Banco de Dados

O projeto está configurado para usar SQLite em desenvolvimento. Para executar as migrations:

```bash
cd backend
npm run start:dev  # Isso criará automaticamente as tabelas
```

### 3. Executar a aplicação

**Backend (porta 3000):**
```bash
cd backend
npm run start:dev
```

**Frontend (porta 4200):**
```bash
cd frontend
npm start
```

A aplicação estará disponível em:
- **Frontend:** http://localhost:4200
- **GraphQL Playground:** http://localhost:3000/graphql

## 📖 Como Usar

### Interface do Usuário

1. **Visualizar Tarefas:** O board Kanban exibe colunas com diferentes status
2. **Adicionar Tarefa:** Use o botão "+" para criar novas tarefas  
3. **Editar Tarefa:** Clique em uma tarefa para visualizar/editar detalhes
4. **Mover Tarefas:** Arraste e solte tarefas entre colunas
5. **Prioridades:** Visualize prioridades através de cores (alta/média/baixa)

### GraphQL API

A API GraphQL está disponível em `/graphql` com as seguintes operações:

**Queries:**
```graphql
# Buscar todas as tarefas
query {
  cards {
    id
    title
    description
    status
    priority
    assignee
    dueDate
  }
}
```

**Mutations:**
```graphql
# Criar nova tarefa
mutation {
  createCard(createCardInput: {
    title: "Nova Tarefa"
    description: "Descrição da tarefa"
    priority: "high"
    status: "todo"
  }) {
    id
    title
  }
}

# Atualizar tarefa
mutation {
  updateCard(id: 1, updateCardInput: {
    status: "done"
  }) {
    id
    status
  }
}
```

## 📊 Features Implementadas

### ✅ Funcionalidades Principais
- [x] **CRUD completo** de tarefas
- [x] **Drag & Drop** entre colunas
- [x] **GraphQL API** com TypeScript
- [x] **Interface responsiva** 
- [x] **Validação de dados** no frontend e backend
- [x] **Gerenciamento de estados** com RxJS

### ✅ Funcionalidades Avançadas
- [x] **Prioridades visuais** (cores diferenciadas)
- [x] **Datas de vencimento**
- [x] **Atribuição de responsáveis**
- [x] **Modal de detalhes** da tarefa
- [x] **Feedback visual** (loading, errors)

## 🔧 Scripts Disponíveis

### Backend
```bash
npm run start          # Modo produção
npm run start:dev      # Modo desenvolvimento com watch
npm run build          # Build da aplicação
npm run test           # Testes unitários
npm run lint           # Verificação de código
```

### Frontend
```bash
npm start              # Servidor de desenvolvimento
npm run build          # Build de produção  
npm run test           # Testes unitários
npm run watch          # Build em modo watch
```

## 🚀 Deploy

### Backend
```bash
cd backend
npm run build
npm run start:prod
```

### Frontend
```bash
cd frontend  
npm run build
# Os arquivos estarão na pasta dist/
```

## 📚 Referências

### Documentação
- [Angular Documentation](https://angular.io/docs)
- [NestJS Documentation](https://docs.nestjs.com/)
- [GraphQL Documentation](https://graphql.org/learn/)
- [TypeORM Documentation](https://typeorm.io/)