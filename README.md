
# Task Manager App

## Description
A full-stack **task management app** built with **React** (frontend) and **Express.js + MongoDB** (backend). Users can create, view, edit, and delete tasks. The app is responsive, easy to use, and ready for deployment.

## Features
- Add, update, and delete tasks  
- Fetch tasks from backend API  
- Modern frontend with React  
- Backend API with Express.js and MongoDB  

## Tech Stack
- **Frontend:** React 
- **Backend:** Node.js, Express.js  
- **Database:** MongoDB  
- **Deployment:** Netlify (frontend), any Node.js hosting (backend)  

## Backend URL
- Development: `http://localhost:5000`  
- Production: `https://your-backend-url.com`  

### API Endpoints
- `GET /tasks` – Fetch all tasks  
- `POST /tasks` – Add a new task  
- `PUT /tasks/:id` – Update a task  
- `DELETE /tasks/:id` – Delete a task  

## Frontend Routes
- `/` – Home page showing all tasks  
- `/add-task` – Page to add a task  
- `/edit-task/:id` – Page to edit a task  

## Installation
### Frontend
```bash
cd front
npm install
npm run start

##Backend
cd backend
npm install
npm run dev
