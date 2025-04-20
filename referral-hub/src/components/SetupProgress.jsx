import React from 'react';
import { CheckCircleIcon } from '@heroicons/react/24/solid';

function SetupProgress({ steps, currentStep, completedSteps }) {
  return (
    <div className="mb-8 ">
      <h2 className="text-blue-600 font-semibold mb-2">Get Started with ReferralHub</h2>
      <p className="text-sm font-normal text-gray-600 mb-6">
        To get started with better referrals & rewards, complete your account setup in a few easy steps.
      </p>
      <div className='h-[1.2px] my-2 bg-gray-300 w-full'></div>
      <div className="space-y-4 my-8">
        {steps.map((step) => {
          const isCompleted = completedSteps.includes(step.id);
          const isInProgress = currentStep === step.id;
          
          return (
            <div key={step.id} className="flex items-center mb-8 ">
              <div className="flex-shrink-0 mr-3 ">
                {isCompleted ? (
                  <div className="w-6 h-6 bg-green-500 rounded-full flex items-center justify-center">
                    <CheckCircleIcon className="h-6 w-6 text-white" />
                  </div>
                ) : (
                  <div className={`w-6 h-6 rounded-full flex items-center justify-center ${
                    isInProgress ? 'bg-blue-500' : 'bg-gray-200'
                  }`}>
                    {isInProgress && <div className="w-2 h-2 bg-white rounded-full"></div>}
                  </div>
                )}
              </div>
              <div>
                <div className="font-medium">{step.name}</div>
                {isCompleted && <div className="text-xs text-green-500">Completed</div>}
                {isInProgress && <div className="text-xs text-blue-500">In Progress</div>}
                {!isCompleted && !isInProgress && <div className="text-xs text-gray-500">Not Started</div>}
              </div>
            </div>
          );
        })}
      </div>
    </div>
  );
}

export default SetupProgress;