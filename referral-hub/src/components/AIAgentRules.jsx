import React, { useState } from 'react';
import SetupProgress from '../components/SetupProgress';
import Button from '../components/Button';

function AIAgentRules({ goToNextStep  , goToBckStep }) {
  const [settings, setSettings] = useState({
    toneOfCommunication: '',
    responseStyle: '',
    autoOfferHelp: false,
    userInitiatedOnly: false
  });

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

  const handleToggleChange = (name) => {
    setSettings({ ...settings, [name]: !settings[name] });
  };

  const handleSubmit = (e) => {
    e.preventDefault();
    goToNextStep();
  };

  return (
    <div className=" mx-auto">
      <div className="bg-white p-8 rounded-lg shadow-sm">
        <div className="flex">
          <div className="w-1/3 bg-gray-100 p-8">
            <SetupProgress 
              steps={steps} 
              currentStep={3} 
              completedSteps={[1, 2]} 
            />
          </div>
          <div className="w-2/3 pl-8">
            <h2 className="text-xl font-medium mb-6">Set Up AI Agent Rules</h2>
            
            <form onSubmit={handleSubmit}>
              <div className="mb-6">
                <label className="block text-sm font-medium mb-2">Tone of Communication</label>
                <select 
                  name="toneOfCommunication"
                  value={settings.toneOfCommunication}
                  onChange={handleInputChange}
                  className="w-full border border-gray-300 rounded-md p-2 text-sm"
                >
                  <option value="">Select</option>
                  <option value="friendly">Friendly</option>
                  <option value="professional">Professional</option>
                  <option value="motivational">Motivational</option>
                  <option value="casual">Casual</option>
                </select>
              </div>
              
              <div className="mb-6">
                <label className="block text-sm font-medium mb-2">Response Style</label>
                <select 
                  name="responseStyle"
                  value={settings.responseStyle}
                  onChange={handleInputChange}
                  className="w-full border border-gray-300 rounded-md p-2 text-sm"
                >
                  <option value="">Select</option>
                  <option value="concise">Concise</option>
                  <option value="detailed">Detailed</option>
                  <option value="stepByStep">Step-by-step</option>
                </select>
              </div>
              
              <div className="mb-6">
                <div className="flex justify-between items-center">
                  <div>
                    <h3 className="text-sm font-medium">Auto-offer help</h3>
                    <p className="text-xs text-gray-500">AI gives suggestions automatically when user lands on a page.</p>
                  </div>
                  <div className="relative inline-block w-10 mr-2 align-middle select-none">
                    <input 
                      type="checkbox"
                      checked={settings.autoOfferHelp}
                      onChange={() => handleToggleChange('autoOfferHelp')}
                      className="hidden"
                      id="toggle-auto-help"
                    />
                    <label 
                      htmlFor="toggle-auto-help"
                      className={`block overflow-hidden h-6 rounded-full bg-gray-300 cursor-pointer ${
                        settings.autoOfferHelp ? 'bg-blue-500' : ''
                      }`}
                    >
                      <span 
                        className={`block h-6 w-6 rounded-full bg-white transform transition-transform ${
                          settings.autoOfferHelp ? 'translate-x-4' : 'translate-x-0'
                        }`}
                      ></span>
                    </label>
                  </div>
                </div>
              </div>
              
              <div className="mb-6">
                <div className="flex justify-between items-center">
                  <div>
                    <h3 className="text-sm font-medium">User-initiated only</h3>
                    <p className="text-xs text-gray-500">AI only responds when clicked or messaged.</p>
                  </div>
                  <div className="relative inline-block w-10 mr-2 align-middle select-none">
                    <input 
                      type="checkbox"
                      checked={settings.userInitiatedOnly}
                      onChange={() => handleToggleChange('userInitiatedOnly')}
                      className="hidden"
                      id="toggle-user-initiated"
                    />
                    <label 
                      htmlFor="toggle-user-initiated"
                      className={`block overflow-hidden h-6 rounded-full bg-gray-300 cursor-pointer ${
                        settings.userInitiatedOnly ? 'bg-blue-500' : ''
                      }`}
                    >
                      <span 
                        className={`block h-6 w-6 rounded-full bg-white transform transition-transform ${
                          settings.userInitiatedOnly ? 'translate-x-4' : 'translate-x-0'
                        }`}
                      ></span>
                    </label>
                  </div>
                </div>
              </div>
              
              <div className="mt-8 flex justify-between items-center">
                <Button onClick={() => goToBckStep()}>Back</Button>
                <Button primary type="submit">Next</Button>
              </div>
            </form>
          </div>
        </div>
      </div>
    </div>
  );
}

export default AIAgentRules;