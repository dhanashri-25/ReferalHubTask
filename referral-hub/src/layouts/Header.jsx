import React from 'react';
import { ArrowPathIcon } from '@heroicons/react/24/outline';

function Header({page}) {
  return (
    <div className="bg-white border-b border-gray-200 p-4 flex justify-between items-center">
      <h1 className="text-xl font-medium">{page}</h1>
      <div className="flex items-center">
        <ArrowPathIcon className="h-5 w-5 text-gray-400 mr-2" />
        <div className="flex items-center">
          <div className="w-8 h-8 rounded-full bg-gray-300 flex items-center justify-center text-white">
            <span>KS</span>
          </div>
          <div className="ml-2">
            <div className="text-sm font-medium">Kadin Stanton</div>
            <div className="text-xs text-gray-500">kadinstanton@gmail.com</div>
          </div>
        </div>
      </div>
    </div>
  );
}

export default Header;