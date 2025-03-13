import React from 'react';
import KanbanBoard from './components/KanbanDashBoard';
import { TaskProvider } from './context/TaskContext';

function App() {
  return (
    <TaskProvider>
      <div className="min-h-screen bg-gray-50">
        <KanbanBoard />
      </div>
    </TaskProvider>
  );
}

export default App;