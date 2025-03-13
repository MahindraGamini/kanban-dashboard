import React from 'react';
import { useDraggable } from '@dnd-kit/core';

const TaskCard = ({ task }) => {
  const {attributes, listeners, setNodeRef, transform, isDragging} = useDraggable({
    id: task.id,
    data: {
      task
    }
  });
  
  const style = transform ? {
    transform: `translate3d(${transform.x}px, ${transform.y}px, 0)`,
  } : undefined;

  return (
    <div 
      ref={setNodeRef}
      style={style}
      {...listeners}
      {...attributes}
      className={`bg-white p-4 rounded-md border border-gray-200 shadow-sm hover:shadow-md 
                 transition-shadow duration-200 cursor-move touch-none
                 ${isDragging ? 'opacity-50' : 'opacity-100'}`}
    >
      <h3 className="font-semibold text-gray-800 mb-2 break-words">{task.title}</h3>
      <p className="text-sm text-gray-600 line-clamp-2 break-words">{task.description}</p>
      
      <div className="flex items-center justify-between mt-3 pt-2 border-t border-gray-100">
        <div className="text-xs text-gray-500">ID: {task.id}</div>
        <div className="h-2 w-2 rounded-full bg-blue-500"></div>
      </div>
    </div>
  );
};

export default TaskCard;