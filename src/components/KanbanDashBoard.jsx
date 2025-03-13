import React, { useState } from 'react';
import { DndContext, DragOverlay, closestCorners } from '@dnd-kit/core';
import { arrayMove } from '@dnd-kit/sortable';
import Column from './Column';
import TaskCard from './TaskCard';
import SearchBar from './SearchBar';
import TaskForm from './TaskForm';
import { PlusIcon } from 'lucide-react';
import { useTasks } from '../context/TaskContext';
import '../index.css';

const KanbanBoard = () => {
  const [isFormOpen, setIsFormOpen] = useState(false);
  const [activeId, setActiveId] = useState(null);
  const { tasks, updateTaskStatus } = useTasks();
  
  const columns = [
    { title: 'To Do', status: 'To Do' },
    { title: 'In Progress', status: 'In Progress' },
    { title: 'Peer Review', status: 'Peer Review' },
    { title: 'Done', status: 'Done' }
  ];
  
  const activeTask = activeId ? tasks.find(task => task.id === activeId) : null;
  
  const handleDragStart = (event) => {
    const { active } = event;
    setActiveId(active.id);
  };
  
  const handleDragEnd = (event) => {
    const { active, over } = event;
    
    if (over && active.id !== over.id) {
      const newStatus = over.id;
      updateTaskStatus(active.id, newStatus);
    }
    
    setActiveId(null);
  };

  return (
    <div className="p-3 sm:p-6 min-h-screen bg-gradient-to-br from-gray-50 to-gray-100">
      <div className="max-w-7xl mx-auto">
        <h1 className="text-2xl sm:text-3xl font-bold mb-6 text-center text-gray-800">
          Kanban Board
        </h1>
        
        <SearchBar />
        
        <DndContext 
          collisionDetection={closestCorners}
          onDragStart={handleDragStart}
          onDragEnd={handleDragEnd}
        >
          <div className="flex flex-col sm:flex-row gap-4 sm:overflow-x-auto pb-4">
            {columns.map(column => (
              <div key={column.status} className="w-full sm:w-72 md:w-80 flex-shrink-0 mb-4 sm:mb-0">
                <Column 
                  title={column.title} 
                  status={column.status} 
                />
              </div>
            ))}
          </div>
          
          <DragOverlay>
            {activeId ? (
              <div className="bg-white p-4 rounded-md shadow-lg border border-blue-100 mb-3 w-64 md:w-72 opacity-90 rotate-1">
                <h3 className="font-bold text-gray-800 mb-1">{activeTask.title}</h3>
                <p className="text-sm text-gray-600 line-clamp-2">{activeTask.description}</p>
              </div>
            ) : null}
          </DragOverlay>
        </DndContext>
        
        <button
          className="fixed bottom-6 right-6 bg-blue-500 text-white p-3 sm:p-4 rounded-full shadow-lg hover:bg-blue-600 transition-colors duration-200 focus:outline-none focus:ring-2 focus:ring-blue-300 focus:ring-offset-2 z-10"
          onClick={() => setIsFormOpen(true)}
          aria-label="Add new task"
        >
          <PlusIcon size={24} />
        </button>
        <TaskForm isOpen={isFormOpen} onClose={() => setIsFormOpen(false)} />
      </div>
    </div>
  );
};

export default KanbanBoard;