import React, { useState } from "react";
import SetupProgress from "../components/SetupProgress";
import Button from "../components/Button";
import { ArrowUpTrayIcon } from "@heroicons/react/24/outline";
import { X } from 'lucide-react'

function SyncCustomerData({ goToNextStep , goToBckStep }) {
  const [file, setFile] = useState(null);
  const [zapierConnected, setZapierConnected] = useState(false);

  const steps = [
    { id: 1, name: "Set Up Business Profile" },
    { id: 2, name: "Sync Your Customer Data" },
    { id: 3, name: "Set Up AI Agent Rules" },
    { id: 4, name: "Set Up First Campaign" },
  ];

  const handleFileChange = (e) => {
    setFile(e.target.files[0]);
  };

  const handleZapierConnect = () => {
    setZapierConnected(true);
    
  };

  const handleUploadSubmit = (e) => {
    e.preventDefault();
    goToNextStep();
  };

  return (
    <div className="text-center mx-auto">
      <div className="bg-white p-8 rounded-lg shadow-sm">
        <div className="flex">
          <div className="w-1/3 bg-gray-100 p-8">
            <SetupProgress steps={steps} currentStep={2} completedSteps={[1]} />
          </div>
          <div className="w-2/3 pl-8">
            <h2 className="text-xl font-medium mb-6">
              Import Customer Data: Sync with Zapier or Upload CSV
            </h2>

            <div className="my-8">
          
              {zapierConnected ? (
                <div className="flex flex-col items-center justify-center">
                <div className="text-sm text-green-500 flex items-center">
                  <span className="mr-2 text-center mt-6 mb-2">
                    Zapier Integration Connected Successfully!
                  </span>
                </div>
                <button 
                  onClick={handleZapierConnect} 
                  className="w-[50%] text-blue-600  border-1 border-blue-600 rounded-md px-4 py-1 mt-4 hover:bg-blue-500 hover:text-white transition-colors">
                     Disconnect with Zapier
                 </button>
                </div>
              ) : (
                <button 
                onClick={handleZapierConnect} 
                className="w-[50%] text-blue-600  border-1 border-blue-600 rounded-md px-4 py-1 mt-4 hover:bg-blue-500 hover:text-white transition-colors">
                Connect with Zapier
               </button>
              )}
                
              <div className="text-center text-sm text-gray-500 my-4">or</div>

              <div className="border-2 border-dashed border-gray-300 rounded-md p-6 text-center">
              {file ? (
        <>
          <div className="flex items-center justify-between">
            <div className="flex items-center gap-2">
              <div className="text-green-500 text-2xl">📁</div>
              <div className="text-left">
                <p className="text-sm font-medium">{file.name}</p>
                <p className="text-xs text-gray-500">{(file.size / 1024).toFixed(0)}KB</p>
              </div>
            </div>

            <div className="flex items-center gap-4">
              <button
                onClick={() => setFile(null)}
                className="text-blue-600 text-sm hover:underline"
              >
                Re-upload
              </button>
              <button
                className="text-red-500 hover:bg-red-100 rounded-full p-1"
              >
                <X size={16} />
              </button>
            </div>
          </div>

          <div className="mt-4 text-green-600 text-sm border border-green-300 bg-green-50 p-2 rounded-md">
            CSV File Uploaded Successfully!
          </div>
        </>
      ) : (
        <>
          <ArrowUpTrayIcon className="h-10 w-10 mx-auto text-blue-600 mb-2" />
          <p className="text-sm text-gray-600 mb-4">Drag and drop files here</p>
          <input
            type="file"
            onChange={handleFileChange}
            className="hidden"
            id="file-upload"
            accept=".csv"
          />
          <label htmlFor="file-upload">
            <button
              onClick={() => document.getElementById("file-upload").click()}
              className="w-[50%] text-blue-600 border border-blue-600 rounded-md px-4 py-1 mt-4 hover:bg-blue-500 hover:text-white transition-colors"
            >
              Click to Upload CSV File
            </button>
          </label>
        </>
      )}
              </div>
            </div>

            <div className="mt-8 flex justify-between items-center">
              <Button onClick={() => goToBckStep()}>Back</Button>
              <button 
              className="bg-gradient-to-r from-blue-500 to-blue-200 text-white text-md font-medium py-2 px-4 rounded-lg  text-center w-[30%]"
              onClick={handleUploadSubmit}>
                Next
              </button>
            </div>
          </div>
        </div>
      </div>
    </div>
  );
}

export default SyncCustomerData;
