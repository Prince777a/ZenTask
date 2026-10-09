# ZenTask

A todo app with a built-in focus timer. React + Vite frontend, Express + MongoDB backend.

## Features
- Create todos (title + description)
- View all todos
- Mark todos as done
- Delete todos
- Focus page with timer and ambient audio

## Tech Stack
- **Frontend:** React 19, Vite, React Router, Axios, Framer Motion
- **Backend:** Node.js, Express 5, Mongoose, Zod, CORS, dotenv

## Setup

### Backend
```bash
cd backend
npm install
```
Create `backend/.env`:
```
PORT=3000
MONGO_DB_URL=<your MongoDB connection string>
```
Run: `node index.js`

### Frontend
```bash
cd frontend
npm install
npm run dev
```
Runs at http://localhost:5173 (the only origin allowed by backend CORS).

## API
| Method | Route | Description |
|--------|-------|-------------|
| POST | `/todo` | Create a todo |
| GET | `/todos` | List all todos |
| PUT | `/completed/:id` | Mark a todo as completed |
| DELETE | `/delete/:id` | Delete a todo |

## Project Structure
```
backend/    Express server, Mongoose model, Zod schemas
frontend/   React app (Pages, Components, Services)
```
