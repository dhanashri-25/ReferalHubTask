import React, { useState } from 'react';
import SetupProgress from '../components/SetupProgress';
import Button from '../components/Button';
import { ToggleLeft , ToggleRight } from 'lucide-react';

function AIAgentRules({ goToNextStep, goToBckStep }) {
  const [settings, setSettings] = useState({
    toneOfCommunication: '',
    responseStyle: '',
    autoOfferHelp: false,
    userInitiatedOnly: false
  });

  const [left1, setLeft1] = useState(true); 
  const [left2, setLeft2] = useState(true); 

  const steps = [
    { id: 1, name: 'Set Up Business Profile' },
    { id: 2, name: 'Sync Your Customer Data' },
    { id: 3, name: 'Set Up AI Agent Rules' },
    { id: 4, name: 'Set Up First Campaign' },
  ];

 

  const handleInputChange = (e) => {
    const { name, value } = e.target;
    setSettings({ ...settings, [name]: value });
  };

 

  const handleSubmit = (e) => {
    e.preventDefault();
    goToNextStep();
  };

  return (
    <div className="p-6 mx-auto">
      <div className="bg-white p-8 rounded-lg shadow-sm">
        <div className="flex">
          {/* Sidebar Progress */}
          <div className="w-1/3 bg-gray-100 p-8">
            <SetupProgress 
              steps={steps} 
              currentStep={3} 
              completedSteps={[1, 2]} 
            />
          </div>

          <div className="w-2/3 pl-8">
            <h2 className="text-xl text-center font-medium mb-6">Set Up AI Agent Rules</h2>
            <form onSubmit={handleSubmit}>

              {/* Tone of Communication */}
              <div className="mb-6">
                <label className="block text-md font-sm mb-2">Tone of Communication</label>
                <select 
                  name="toneOfCommunication"
                  value={settings.toneOfCommunication}
                  onChange={handleInputChange}
                  className="w-full border text-gray-400 border-gray-300 rounded-md p-2 text-sm"
                >
                  <option value="">Select</option>
                  <option value="friendly">Friendly</option>
                  <option value="professional">Professional</option>
                  <option value="motivational">Motivational</option>
                  <option value="casual">Casual</option>
                </select>
              </div>

              {/* Response Style */}
              <div className="mb-6">
                <label className="block text-md font-sm mb-2">Response Style</label>
                <select 
                  name="responseStyle"
                  value={settings.responseStyle}
                  onChange={handleInputChange}
                  className="w-full border text-gray-400 border-gray-300 rounded-md p-2 text-sm"
                >
                  <option value="">Select</option>
                  <option value="concise">Concise</option>
                  <option value="detailed">Detailed</option>
                  <option value="stepByStep">Step-by-step</option>
                </select>
              </div>

              {/* Auto-offer Help Toggle */}
              <div className="mb-6">
                <div className="flex justify-between items-center">
                  <div>
                    <h3 className="text-md font-medium">Auto-offer help</h3>
                    <p className="text-xs text-gray-500">AI gives suggestions automatically when user lands on a page.</p>
                  </div>
                  {left1 ? (
                      <ToggleLeft color='gray'  size={30} onClick={() => setLeft1(!left1)} />
                  ): (
                      <ToggleRight color='blue' size={30}  onClick={() => setLeft1(!left1)}/>
                  )}
                  
                </div>
              </div>

              <div className="mb-6">
                <div className="flex justify-between items-center">
                  <div>
                    <h3 className="text-md font-medium">User-initiated only</h3>
                    <p className="text-xs text-gray-500">AI only responds when clicked or messaged.</p>
                  </div>
                  {left2 ? (
                      <ToggleLeft color='gray'  size={30} onClick={() => setLeft2(!left2)} />
                  ): (
                      <ToggleRight color='blue' size={30} onClick={() => setLeft2(!left2)} />
                  )}
                  
                
                </div>
              </div>

              <div className="mt-8 flex justify-between items-center">
                <Button onClick={() => goToBckStep()}>Back</Button>
                <button 
                  type="submit"
                  className="bg-gradient-to-r from-blue-500 to-blue-200 text-white text-md font-medium py-2 px-4 rounded-lg w-[30%]"
                >
                  Next
                </button>
              </div>
              
            </form>
          </div>
        </div>
      </div>
    </div>
  );
}

export default AIAgentRules;
