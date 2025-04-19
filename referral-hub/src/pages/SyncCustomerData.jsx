import React, { useState } from "react";
import { useNavigate } from "react-router-dom";
import SetupProgress from "../components/SetupProgress";
import Button from "../components/Button";
import { ArrowUpTrayIcon } from "@heroicons/react/24/outline";

function SyncCustomerData({ goToNextStep, markStepComplete }) {
  const navigate = useNavigate();
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
    setTimeout(() => {
      markStepComplete();
      goToNextStep();
      navigate("/ai-agent-rules");
    }, 1000);
  };

  const handleUploadSubmit = (e) => {
    e.preventDefault();
    markStepComplete();
    goToNextStep();
    navigate("/ai-agent-rules");
  };

  return (
    <div className="max-w-4xl mx-auto">
      <div className="bg-white p-8 rounded-lg shadow-sm">
        <div className="flex">
          <div className="w-1/3 border-r border-gray-200 pr-8">
            <SetupProgress steps={steps} currentStep={2} completedSteps={[1]} />
          </div>
          <div className="w-2/3 pl-8">
            <h2 className="text-xl font-medium mb-6">
              Import Customer Data: Sync with Zapier or Upload CSV
            </h2>

            <div className="mb-8">
              <Button onClick={handleZapierConnect} className="w-full mb-4">
                Connect with Zapier
              </Button>

              {zapierConnected && (
                <div className="text-sm text-green-500 flex items-center">
                  <span className="mr-2">
                    Zapier Integration Connected Successfully!
                  </span>
                </div>
              )}

              <div className="text-center text-sm text-gray-500 my-4">or</div>

              <div className="border-2 border-dashed border-gray-300 rounded-md p-6 text-center">
                <ArrowUpTrayIcon className="h-10 w-10 mx-auto text-gray-400 mb-2" />
                <p className="text-sm text-gray-600 mb-4">
                  Drag and drop files here
                </p>
                <input
                  type="file"
                  onChange={handleFileChange}
                  className="hidden"
                  id="file-upload"
                />
                <label htmlFor="file-upload">
                  <Button>Click to Upload CSV File</Button>
                </label>
                {file && (
                  <div className="mt-4 text-sm">Selected file: {file.name}</div>
                )}
              </div>
            </div>

            <div className="mt-8 flex justify-between items-center">
              <Button onClick={() => navigate("/")}>Back</Button>
              <Button primary onClick={handleUploadSubmit}>
                Next
              </Button>
            </div>
          </div>
        </div>
      </div>
    </div>
  );
}

export default SyncCustomerData;
