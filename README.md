# Employee Demo App

This is a full-stack web application built with a React frontend (using Vite) and a Node.js/Express backend, using MongoDB for the database.

## Prerequisites
- Node.js installed
- MongoDB installed (or a MongoDB Atlas connection string)

---

##  How to Run This Project Locally

### 1. Backend Setup
1. Open a terminal and navigate to the `backend` folder:
   ```bash
   cd backend
   ```
2. Install dependencies:
   ```bash
   npm install
   ```
3. Create a `.env` file in the `backend` folder and add your environment variables (e.g., `PORT=3000` and `DB_URL=<your-mongodb-connection-string>`).
4. Start the backend server:
   ```bash
   node server.js
   ```
   *(Server should run on `http://localhost:3000`)*

### 2. Frontend Setup
1. Open a new terminal and navigate to the `frontend` folder:
   ```bash
   cd frontend
   ```
2. Install dependencies:
   ```bash
   npm install
   ```
3. Start the Vite development server:
   ```bash
   npm run dev
   ```
   *(Frontend should run on `http://localhost:5173`)*

---

##  Steps to Create This App from Scratch

If you want to create a similar project from scratch, follow these steps:

### Creating the Backend Server
1. **Initialize the Node project**:
   Create a new folder (e.g., `backend`), navigate into it, and initialize npm.
   ```bash
   mkdir backend
   cd backend
   npm init -y
   ```
2. **Install necessary packages**:
   Install Express, Mongoose (for MongoDB), dotenv (for environment variables), and CORS.
   ```bash
   npm install express mongoose dotenv cors
   ```
3. **Update `package.json`**:
   Add `"type": "module"` if you want to use ES6 imports (`import express from 'express'`).
4. **Create the server file**:
   Create a `server.js` file and set up a basic Express app:
   ```javascript
   import express from "express";
   import cors from "cors";

   const app = express();
   app.use(express.json());
   app.use(cors());

   app.listen(3000, () => console.log("Server running on port 3000"));
   ```

### Creating the Frontend Server
1. **Initialize a React app with Vite**:
   Navigate back to your main project folder and create the frontend using Vite.
   ```bash
   npm create vite@latest frontend -- --template react
   ```
2. **Install frontend dependencies**:
   ```bash
   cd frontend
   npm install
   ```
3. **Install additional tools** (Optional, depending on your needs):
   ```bash
   npm install react-router axios react-hook-form tailwindcss @tailwindcss/vite
   ```
4. **Run the development server**:
   ```bash
   npm run dev
   ```
