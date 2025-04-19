import React from 'react';

function Button({ children, onClick, primary, className }) {
  return (
    <button
      onClick={onClick}
      className={`px-6 py-2 rounded-md font-medium transition-colors ${
        primary 
          ? 'bg-blue-500 text-white hover:bg-blue-600' 
          : 'bg-white text-gray-700 border border-gray-300 hover:bg-gray-50'
      } ${className}`}
    >
      {children}
    </button>
  );
}

export default Button;