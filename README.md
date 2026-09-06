# Mini Kanban Board

A full-stack Kanban board application where users can create boards,
manage columns and tasks, and organize tasks using drag-and-drop.

The project contains both the **Frontend** and **Backend** in the same
repository.

## ✨ Features

-   User authentication with JWT
-   HttpOnly cookie-based authentication
-   Create and manage Kanban boards
-   Create, update, and delete columns
-   Create and manage tasks
-   Drag-and-drop task reordering
-   Move tasks between columns
-   Drag-and-drop column reordering
-   Optimistic UI for task movement
-   PostgreSQL database
-   Prisma ORM
-   Responsive UI
-   Modern component-based frontend
-   Server-side and client-side rendering with Next.js

------------------------------------------------------------------------

## 🛠️ Tech Stack

### Frontend

-   Next.js 16
-   React 19
-   TypeScript
-   Tailwind CSS
-   shadcn/ui
-   dnd-kit
-   Axios
-   Zod
-   Sonner
-   Lucide React

### Backend

-   Node.js
-   Express.js
-   TypeScript
-   PostgreSQL
-   Prisma 7
-   JWT
-   bcryptjs
-   CORS
-   pg

------------------------------------------------------------------------

## 📁 Project Structure

``` text
mini-kanban-board/
│
├── frontend/
│   ├── app/
│   ├── components/
│   ├── services/
│   ├── types/
│   ├── public/
│   └── package.json
│
├── backend/
│   ├── src/
│   │   ├── app/
│   │   |  ├── modules/
│   │   |  ├── routes/
│   │   |  ├── middlewares/
│   │   |  └── app.ts
│   │   |  └── server.ts
│   ├── prisma/
│   │   └── schema.prisma
│   └── package.json
│
└── README.md
```

> Folder names may be different in your local clone. If your repository
> uses different names for the frontend/backend folders, use those names
> in the commands below.

------------------------------------------------------------------------

# 🚀 Getting Started

## 1. Prerequisites

Make sure you have installed:

-   Node.js
-   pnpm
-   PostgreSQL

Recommended Node.js version: **Node.js 20+**

Check your versions:

``` bash
node -v
pnpm -v
```

Install pnpm if you do not have it:

``` bash
npm install -g pnpm
```

------------------------------------------------------------------------

# 🔧 Backend Setup

Open a terminal and go to the backend directory:

``` bash
cd backend
```

Install dependencies:

``` bash
pnpm install
```

## Environment Variables

Create a `.env` file inside the `backend` directory:

``` env
DATABASE_URL="postgresql://USERNAME:PASSWORD@HOST:PORT/DATABASE_NAME"

JWT_SECRET="your-super-secret-jwt-key"

PORT=5000

CLIENT_URL="http://localhost:3000"
```

### Environment variable explanation

  Variable         Description
  ---------------- -------------------------------------------
  `DATABASE_URL`   PostgreSQL connection string
  `JWT_SECRET`     Secret used to sign and verify JWT tokens
  `PORT`           Backend server port
  `CLIENT_URL`     Frontend URL used for CORS configuration

Never commit your `.env` file to Git.

------------------------------------------------------------------------

## Database Setup

After configuring `DATABASE_URL`, generate the Prisma client:

``` bash
pnpm generate
```

Run the database migration:

``` bash
pnpm migrate
```

If your project already contains migration files and you are setting up
an existing database, use the migration command appropriate for your
environment.

You can open Prisma Studio with:

``` bash
pnpm studio
```

------------------------------------------------------------------------

## Start Backend

For development:

``` bash
pnpm dev
```

The backend will normally run on:

``` text
http://localhost:5000
```

For production:

``` bash
pnpm build
pnpm start
```

------------------------------------------------------------------------

# 🎨 Frontend Setup

Open another terminal:

``` bash
cd frontend
```

Install dependencies:

``` bash
pnpm install
```

## Environment Variables

Create a `.env.local` file inside the `frontend` directory.

Example:

``` env
NEXT_PUBLIC_API_URL="http://localhost:5000"
```

If your frontend API configuration uses a different environment variable
name, use the name expected by your Axios/service configuration.

------------------------------------------------------------------------

## Start Frontend

Run the development server:

``` bash
pnpm dev
```

Then open:

``` text
http://localhost:3000
```

For production:

``` bash
pnpm build
pnpm start
```

------------------------------------------------------------------------

# ▶️ Run the Full Project

You need **two terminals**.

### Terminal 1 --- Backend

``` bash
cd backend
pnpm install
pnpm generate
pnpm migrate
pnpm dev
```

### Terminal 2 --- Frontend

``` bash
cd frontend
pnpm install
pnpm dev
```

Then visit:

``` text
http://localhost:3000
```

------------------------------------------------------------------------

# 🔐 Authentication

The application uses JWT-based authentication.

The general authentication flow is:

``` text
User
  ↓
Login / Register
  ↓
Backend creates JWT
  ↓
JWT stored in HttpOnly cookie
  ↓
Browser automatically sends cookie
  ↓
Backend verifies JWT
  ↓
Authenticated user
```

Because the authentication token is stored in an HttpOnly cookie,
frontend JavaScript should not directly read the token using
`document.cookie`.

------------------------------------------------------------------------

# 🗄️ Database

The backend uses:

-   PostgreSQL
-   Prisma ORM

Before starting the backend, make sure PostgreSQL is running and your
`DATABASE_URL` is valid.

To inspect your database using Prisma Studio:

``` bash
cd backend
pnpm studio
```

------------------------------------------------------------------------

# 🖱️ Drag and Drop

The Kanban board uses **dnd-kit** for drag-and-drop interactions.

Supported interactions include:

-   Reordering columns
-   Reordering tasks within a column
-   Moving tasks between columns
-   Dropping tasks into empty columns

The UI uses optimistic updates for task movement:

``` text
Drag task
   ↓
Update UI immediately
   ↓
Send API request
   ↓
 ┌───────────────┐
 │ API succeeds  │ → Keep UI
 └───────────────┘

 ┌───────────────┐
 │ API fails     │ → Rollback UI + show error
 └───────────────┘
```

------------------------------------------------------------------------

# 📜 Available Scripts

## Frontend

  Command        Description
  -------------- ------------------------------
  `pnpm dev`     Start development server
  `pnpm build`   Build production application
  `pnpm start`   Start production server
  `pnpm lint`    Run ESLint

## Backend

  Command           Description
  ----------------- ----------------------------------
  `pnpm dev`        Start backend in watch mode
  `pnpm build`      Compile TypeScript
  `pnpm start`      Start compiled backend
  `pnpm generate`   Generate Prisma Client
  `pnpm migrate`    Run Prisma development migration
  `pnpm studio`     Open Prisma Studio
  `pnpm lint`       Run ESLint

------------------------------------------------------------------------

# 🧪 Production Build

Before deploying, create production environment variables for both
applications.

### Backend

``` bash
cd backend
pnpm install
pnpm generate
pnpm build
pnpm start
```

### Frontend

``` bash
cd frontend
pnpm install
pnpm build
pnpm start
```

Make sure:

-   PostgreSQL is accessible from the deployed backend
-   `DATABASE_URL` is configured
-   `JWT_SECRET` is configured
-   Frontend API URL points to the deployed backend
-   Backend CORS allows the deployed frontend domain
-   Cookie settings are configured correctly for your deployment
    environment

------------------------------------------------------------------------

# 🐛 Troubleshooting

### Prisma Client error

Try:

``` bash
pnpm generate
```

Then restart the backend.

### Database connection error

Check:

``` env
DATABASE_URL="..."
```

and make sure PostgreSQL is running.

### CORS error

Make sure the backend `CLIENT_URL` matches the frontend URL.

For local development:

``` env
CLIENT_URL="http://localhost:3000"
```

### Authentication cookie is not being sent

Check that:

-   The frontend request includes credentials when required.
-   Backend CORS allows credentials.
-   Cookie configuration matches your environment.
-   Frontend and backend URLs are configured correctly.

### Port already in use

Change the backend `PORT` or stop the process currently using that port.

------------------------------------------------------------------------

# 🤝 Contributing

Contributions are welcome.

1.  Fork the repository
2.  Create a new branch

``` bash
git checkout -b feature/your-feature
```

3.  Make your changes
4.  Commit your changes

``` bash
git commit -m "feat: add your feature"
```

5.  Push the branch

``` bash
git push origin feature/your-feature
```

6.  Open a Pull Request

------------------------------------------------------------------------

# 📄 License

This project is currently licensed under the license specified in the
repository.

------------------------------------------------------------------------

## 👨‍💻 Author

Built as a full-stack Kanban board project using Next.js, Express.js,
PostgreSQL, Prisma, and TypeScript.
