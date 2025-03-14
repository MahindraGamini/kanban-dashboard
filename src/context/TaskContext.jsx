import React, { createContext, useState, useContext } from 'react';
//creates context for the tasks
const TaskContext = createContext();

export const TaskProvider = ({ children }) => {
  const [tasks, setTasks] = useState([
    { id: '1', title: 'Implement login page', description: 'Create a login page with form validation', status: 'To Do' },
    { id: '2', title: 'Design database schema', description: 'Create database schema for user management', status: 'In Progress' },
    { id: '3', title: 'Write API documentation', description: 'Document all API endpoints and parameters', status: 'Peer Review' },
    { id: '4', title: 'Fix navigation bug', description: 'Fix the bug in the navigation menu', status: 'Done' },
  ]);
  
  const [searchTerm, setSearchTerm] = useState('');

  const addTask = (task) => {
    const newTask = {
      id: Date.now().toString(),
      title: task.title,
      description: task.description,
      status: 'To Do',
    };
    setTasks([...tasks, newTask]);
  };
//updating the tasks status
  const updateTaskStatus = (taskId, newStatus) => {
    setTasks(tasks.map(task => 
      task.id === taskId ? { ...task, status: newStatus } : task
    ));
  };
    //search functionality logic
  const filteredTasks = searchTerm 
    ? tasks.filter(task => 
        task.title.toLowerCase().includes(searchTerm.toLowerCase()) || 
        task.description.toLowerCase().includes(searchTerm.toLowerCase())
      )
    : tasks;

  return (
    <TaskContext.Provider value={{ 
      tasks: filteredTasks, 
      addTask, 
      updateTaskStatus, 
      searchTerm, 
      setSearchTerm 
    }}>
      {children}
    </TaskContext.Provider>
  );
};
//exporting the context
export const useTasks = () => useContext(TaskContext);

export default TaskContext;
