# Test Task for Backend Developer Position

## Overview
The objective of this test task is to evaluate your ability to design and implement a simple API using Express.js, Prisma ORM, TypeScript, and SQLite as the database. The API will perform basic CRUD operations on a set of entities. You need to upload your solution to a GitHub repository and provide a README.md file with instructions on how to run the API.

## Requirements

### Technology Stack
- Express.js
- Prisma ORM
- TypeScript
- SQLite

### Entities
- User
  - id (number, auto-increment)
  - name (string)
  - email (string)
  - createdAt (date)
  - updatedAt (date)

- Post
  - id (number, auto-increment)
  - title (string)
  - content (string)
  - authorId (number, foreign key to User)
  - createdAt (date)
  - updatedAt (date)

### API Endpoints
1. `GET /users`: Retrieve all users.
2. `GET /users/:id`: Retrieve a user by id.
3. `POST /users`: Create a new user.
4. `PUT /users/:id`: Update a user by id.
5. `DELETE /users/:id`: Delete a user by id.

6. `GET /posts`: Retrieve all posts.
7. `GET /posts/:id`: Retrieve a post by id.
8. `POST /posts`: Create a new post.
9. `PUT /posts/:id`: Update a post by id.
10. `DELETE /posts/:id`: Delete a post by id.

## Deliverables
- A GitHub repository containing the source code for the API.
- A README.md file with clear instructions on how to run the API.

## Evaluation Criteria
- Proper implementation of the required technology stack.
- Correct implementation of CRUD operations for the specified entities.
- Proper handling of errors and edge cases.
- Code organization, readability, and maintainability.
- Quality and clarity of the provided README.md file.

## Submission Instructions
1. Fork this repository.
2. Complete the test task.
3. Create a Pull Request with your solution.
4. Include a link to your repository in your job application.

Good luck!
