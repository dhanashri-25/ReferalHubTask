import { Suspense, lazy, useState } from "react";
import {
  BrowserRouter as Router,
  Routes,
  Route,
  Navigate,
} from "react-router-dom";
import { QueryClient, QueryClientProvider } from "@tanstack/react-query";
import { Toaster } from "react-hot-toast";
import LoginPage from "./pages/Login";
import Register from "./pages/Register";
import Sidebar from "./components/Sidebar";
import BusinessProfileSetup from "./pages/BusinessProfileSetup";
import SyncCustomerData from "./pages/SyncCustomerData";
import AIAgentRules from "./pages/AIAgentRules";
import FirstCampaign from "./pages/FirstCampaign";
import Header from "./components/Header";



const queryClient = new QueryClient();

// Loading component
const LoadingSpinner = () => (
  <div className="flex h-screen items-center justify-center">
    <div className="h-12 w-12 animate-spin rounded-full border-4 border-primary border-t-transparent"></div>
  </div>
);

function App() {
  // Mock authentication state
  const [currentStep, setCurrentStep] = useState(1);
  const [completedSteps, setCompletedSteps] = useState([]);
  const isAuthenticated = true;
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
              currentStep={currentStep}
              completedSteps={completedSteps}
            />
            <div className="flex-1 flex flex-col">
              <Header />
              <div className="flex-1 p-6">
                <Routes>
                  <Route
                    path="/"
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
