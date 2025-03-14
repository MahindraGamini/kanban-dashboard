import React from 'react';
import TaskCard from './TaskCard';
import { useTasks } from '../context/TaskContext';
import { useDroppable } from '@dnd-kit/core';


//columns containing status 
const Column = ({ title, status }) => {
  const { tasks } = useTasks();
  const { setNodeRef } = useDroppable({
    id: status,
    data: {
      status
    }
  });
  
  const columnTasks = tasks.filter(task => task.status === status);
  
//color maooing for the ui
  const colorMap = {
    'To Do': 'bg-purple-100 border-purple-200 text-purple-800',
    'In Progress': 'bg-blue-100 border-blue-200 text-blue-800',
    'Peer Review': 'bg-amber-100 border-amber-200 text-amber-800',
    'Done': 'bg-green-100 border-green-200 text-green-800'
  };

  const headerColor = colorMap[title] || 'bg-gray-100 border-gray-200 text-gray-800';
  
  return (
    <div 
      ref={setNodeRef}
      className="bg-white rounded-lg shadow-md border border-gray-200 h-full flex flex-col"
    >
      <div className={`p-3 rounded-t-lg border-b ${headerColor}`}>
        <h2 className="font-bold text-lg">{title}</h2>
        <div className="text-xs mt-1 opacity-75">{columnTasks.length} tasks</div>
      </div>
      
      <div className="p-3 flex-grow overflow-y-auto max-h-96 sm:max-h-[calc(100vh-220px)]">
        {columnTasks.length > 0 ? (
          <div className="task-list space-y-3">
            {columnTasks.map(task => (
              <TaskCard key={task.id} task={task} />
            ))}
          </div>
        ) : (
          <div className="h-full flex items-center justify-center text-gray-400 italic text-sm border-2 border-dashed border-gray-200 rounded-md p-6">
            Drop tasks here
          </div>
        )}
      </div>
    </div>
  );
};

export default Column;
