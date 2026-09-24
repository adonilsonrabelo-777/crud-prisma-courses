# CRUD de Cursos com Prisma ORM

Projeto desenvolvido por Adonilson Rabelo dos Santos para a atividade prática da disciplina de PROGRAMAÇÃO PARA WEB II, utilizando Node.js, Prisma ORM e SQLite.

O projeto implementa as principais operações de um CRUD (Create, Read, Update e Delete) para gerenciamento de cursos.

## Tecnologias utilizadas

- Node.js
- JavaScript
- Prisma ORM 6.19.1
- SQLite
- Prisma Client
- Git
- GitHub

## Funcionalidades

O sistema possui as seguintes operações:

- Criar um curso
- Listar os cursos cadastrados
- Atualizar um curso
- Excluir um curso

## Estrutura do projeto

```text
crud-prisma-courses/
│
├── prisma/
│   ├── migrations/
│   └── schema.prisma
│
├── src/
│   ├── Courses/
│   │   ├── createCourse.js
│   │   ├── readCourses.js
│   │   ├── updateCourse.js
│   │   └── deleteCourse.js
│   │
│   └── prisma.js
│
├── .gitignore
├── package.json
├── package-lock.json
└── README.md