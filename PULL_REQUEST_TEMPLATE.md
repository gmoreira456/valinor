## Envio de solução

Gostariamos de entender como você pensa e as decisões que você tomou durante o desenvolvimento, detalhe um pouco mais sobre:

**Framework, linguagem e ferramentas**

O projeto foi desenvolvido utilizando uma arquitetura full-stack moderna:

**Backend:**
- NestJS - Framework Node.js para construção de APIs robustas
- GraphQL - Para consultas eficientes e flexíveis
- TypeORM - ORM para gerenciamento do banco de dados
- TypeScript - Para tipagem estática e maior segurança no código

**Frontend:**
- Angular 18+ - Framework para aplicações SPA com arquitetura moderna
- TypeScript - Consistência de tipos entre frontend e backend
- CSS nativo - Para styling responsivo e customizado

**Ferramentas de Desenvolvimento:**
- ESLint - Padronização e qualidade de código
- Prettier (implícito) - Formatação consistente
- Angular CLI - Scaffolding e build tools

**Técnologias X e Y**

**Por que Angular ao invés de React/Vue?**
- Optei pelo Angular devido à sua arquitetura robusta, que oferece uma estrutura clara para projetos empresariais
- O sistema de injeção de dependências facilita testes e manutenção

**Por que GraphQL ao invés de REST?**
- Flexibilidade para buscar apenas os dados necessários
- Tipagem forte que se alinha bem com TypeScript
- Schema introspection facilita desenvolvimento
- Redução de over-fetching de dados

**Princípios de software**

- **Single Responsibility Principle (SRP)**: Cada component tem uma responsabilidade específica
- **Component-Based Architecture**: Componentes reutilizáveis e modulares
- **Separation of Concerns**: Separação clara entre apresentação, lógica de negócio e acesso a dados
- **DRY (Don't Repeat Yourself)**: Reutilização de código através de componentes e services

**Desafios e problemas**

1. **Incompatibilidade de tipos entre Frontend e Backend:**
   - **Problema**: Backend retornava IDs como string, mas frontend esperava number
   - **Solução**: Padronizei os tipos para aceitar `string | number` em todas as interfaces e EventEmitters

2. **Reatividade com Drag and Drop:**
   - **Problema**: Mudanças no status via drag and drop não atualizavam a UI
   - **Solução**: Implementei atualização optimistic no frontend seguida de sincronização com backend

3. **Incompatibilidade de dependências:**
   - **Problema**: Versões do Apollo com incompatibilidade
   - **Solução**: Utilizei Antigravity para testar o backend separadamente e ver versões compativeis
 

**Melhorias e próximas implementações**

**Funcionalidades Implementadas:**
- ✅ Modal de confirmação para exclusão de tarefas
- ✅ Criação de tarefas na coluna correta
- ✅ Restrição de criação apenas em Backlog e Todo
- ✅ Indicador visual de tarefas em atraso
- ✅ Validação contra criação de tarefas com data passada
- ✅ Drag and drop funcional
- ✅ Interface responsiva

**Sobre você**

Gabriel - Desenvolvedor Front-end apaixonado por tecnologia e inovação. 

Sou de Mirassol/SP e tenho 2 anos de experiência como desenvolvedor front-end, trabalhando principalmente com NuxtJS. Minha jornada no desenvolvimento começou com curiosidade sobre como as aplicações funcionam "por baixo do capô", o que me levou a me especializar em tecnologias frontend modernas.

Tenho experiência sólida com NuxtJS, Vue.js, e outras tecnologias web modernas. Gosto especialmente de trabalhar com arquiteturas modernas e padrões que promovem código limpo.

Estou sempre em busca de aprender novas tecnologias e melhorar minhas habilidades, acreditando que o desenvolvimento de software é uma área em constante evolução que exige aprendizado contínuo.

**Outros detalhes**

Este projeto demonstra não apenas habilidades técnicas, mas também capacidade de:
- Analisar requisitos e implementar soluções completas
- Resolver problemas complexos de compatibilidade e reatividade
- Implementar UX/UI pensando na experiência do usuário
- Escrever código limpo e bem estruturado
- Documentar decisões técnicas e processo de desenvolvimento

---

Ah, deixe seu e-mail ou telefone para entrarmos em contato com você :) 

Email: gmoreira56452@gmail.com
Telefone: 17981839029



