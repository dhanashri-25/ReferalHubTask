import { Suspense, useState } from "react";
import {
  BrowserRouter as Router,
  Routes,
  Route,
} from "react-router-dom";


import { QueryClient, QueryClientProvider } from "@tanstack/react-query";
import { Toaster } from "react-hot-toast";
import LoginPage from "./pages/Login";
import Register from "./pages/Register";
import Sidebar from "./layouts/Sidebar";
import BusinessProfileSetup from "./pages/BusinessProfileSetup";
import SyncCustomerData from "./pages/SyncCustomerData";
import AIAgentRules from "./pages/AIAgentRules";
import FirstCampaign from "./pages/FirstCampaign";
import Header from "./layouts/Header";
import Promoters from "./pages/Promoters";
import Payouts from "./pages/Payouts";
import Setting from "./pages/Setting";
import Help from "./pages/Help";
import Leads from "./pages/Leads";
import Dashboard from "./pages/Dashboard";
import Campaign from "./pages/Campaign";
import AIAgent from "./pages/AIAgent";



const queryClient = new QueryClient();

const LoadingSpinner = () => (
  <div className="flex h-screen items-center justify-center">
    <div className="h-12 w-12 animate-spin rounded-full border-4 border-primary border-t-transparent"></div>
  </div>
);

function App() {


  const [head , setHead] = useState("");
  const [currentStep, setCurrentStep] = useState(1);
  const [completedSteps, setCompletedSteps] = useState([]);

  const handlePageValue = (value) => {
    setHead(value);
  };


  const markStepComplete = (step) => {
    if (!completedSteps.includes(step)) {
      setCompletedSteps([...completedSteps, step]);
    }
  };

  const goToNextStep = () => {
    setCurrentStep(currentStep + 1);
  };

  return (
    <QueryClientProvider client={queryClient}>
      <Router>
        <Suspense fallback={<LoadingSpinner />}>
          <div className="flex h-screen bg-gray-100">
            <Sidebar
              onPageValueChange={handlePageValue}
              currentStep={currentStep}
              completedSteps={completedSteps}
            />
            <div className="flex-1 flex flex-col">
              <Header page={head} />
              <div className="flex-1 p-6">
                <Routes>
                  <Route
                    path="/setup"
                    element={
                      <BusinessProfileSetup
                        goToNextStep={goToNextStep}
                        markStepComplete={() => markStepComplete(1)}
                      />
                    }
                  />
                  <Route
                    path="/sync-customer-data"
                    element={
                      <SyncCustomerData
                        goToNextStep={goToNextStep}
                        markStepComplete={() => markStepComplete(2)}
                      />
                    }
                  />
                  <Route
                    path="/ai-agent-rules"
                    element={
                      <AIAgentRules
                        goToNextStep={goToNextStep}
                        markStepComplete={() => markStepComplete(3)}
                      />
                    }
                  />
                  <Route
                    path="/first-campaign"
                    element={
                      <FirstCampaign
                        markStepComplete={() => markStepComplete(4)}
                      />
                    }
                  />
                  <Route path="/login" element={<LoginPage />} />



                  <Route path="/register" element={<Register />} />
                  <Route path="/promoters" element={< Promoters />} />
                  <Route path="/payouts" element={<Payouts />} />
                  <Route path="/setting" element={<Setting />} />
                  <Route path="/help" element={<Help />} />
                  <Route path="/leads" element={<Leads />} />
                  <Route path="/" element={<Dashboard />} />
                  <Route path="/campaign" element={<Campaign />} />
                  <Route path="/ai-agent" element={<AIAgent />} />

                </Routes>
              </div>
            </div>
          </div>
        </Suspense>
      </Router>

      <Toaster position="top-right" />
    </QueryClientProvider>
  );
}

export default App;
