# Task Management App

Welcome to the Task Management App! This project is part of an internship assessment test. It’s a simple and easy-to-use task management tool built with React. It helps you stay organized by letting you add tasks, update their statuses, and quickly find what you’re looking for with a handy search feature.

## Table of Contents
- [Getting Started](#getting-started)
- [What You’ll Need](#what-youll-need)
- [How to Install](#how-to-install)
- [How to Run the App](#how-to-run-the-app)
- [How to Use the App](#how-to-use-the-app)
- [Project Structure](#project-structure)


## Getting Started
Let’s get you up and running! Follow these steps to set up the app on your local machine.

## What You’ll Need
Make sure you’ve got these installed:
- [Node.js](https://nodejs.org/) (v18+ recommended)
- [npm](https://www.npmjs.com/) or [yarn](https://yarnpkg.com/)

## How to Install
1. Clone this repository:
```bash
git clone https://github.com/your-repo/kanban-dashboard.git
```

2. Go into the project folder:
```bash
cd kanban-dashboard
```

3. Install the dependencies:
```bash
npm install
# or
yarn install
```

## How to Run the App
Start the development server with:
```bash
npm start
# or
yarn start
```
Once it’s running, open your browser and go to `http://localhost:1234`.

## How to Use the App
Here’s a quick rundown of the features:
- **Add a Task**: Fill in the task title and description, then hit the add button.
- **Update Task Status**: Change a task’s status with just a click.
- **Search Tasks**: Use the search bar to find tasks by title or description.

## Project Structure
This is how the project is organized:
```
project-root
|-- src
|   |-- components
|   |   |-- Column.jsx            # A single column in the Kanban board
|   |   |-- KanbanDashboard.jsx   # The main dashboard showing task columns
|   |   |-- SearchBar.jsx         # The search bar component
|   |   |-- TaskList.js           # Displays the list of tasks
|   |   |-- TaskForm.js           # Form to add new tasks
|   |-- context
|   |   |-- TaskContext.js        # Context for managing global task state
|   |-- App.js                    # Main app component
|   |-- index.js                  # Entry point for the app
|   |-- index.css                 # Global styles
|-- public
|-- package.json
|-- README.md



