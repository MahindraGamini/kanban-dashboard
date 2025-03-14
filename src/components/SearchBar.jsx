import React from 'react';
import { useTasks } from '../context/TaskContext';
import { Search } from 'lucide-react';
//searchbar component 
const SearchBar = () => {
  //imported functionality form the context
  const { searchTerm, setSearchTerm } = useTasks();
  
  return (
    <div className="mb-6 w-full max-w-md mx-auto">
      <div className="relative">
        <div className="absolute inset-y-0 left-0 pl-3 flex items-center pointer-events-none">
          <Search size={18} className="text-gray-400" />
        </div>
        <input
          type="text"
          placeholder="Search tasks..."
          className="w-full pl-10 pr-4 py-2 border border-gray-300 rounded-md focus:outline-none focus:ring-2 focus:ring-blue-500 focus:border-blue-500 transition-all duration-200"
          value={searchTerm}
          onChange={(e) => setSearchTerm(e.target.value)}
        />
        {searchTerm && (
          <button
            className="absolute inset-y-0 right-0 pr-3 flex items-center text-gray-400 hover:text-gray-600"
            onClick={() => setSearchTerm('')}
            aria-label="Clear search"
          >
            <span className="text-xl">&times;</span>
          </button>
        )}
      </div>
      {searchTerm && (
        <div className="mt-2 text-sm text-gray-500 text-center">
          Searching for: "{searchTerm}"
        </div>
      )}
    </div>
  );
};

export default SearchBar;
