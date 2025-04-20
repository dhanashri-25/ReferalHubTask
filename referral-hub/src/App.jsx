import { Suspense, useState , useEffect } from "react";
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
import Header from "./layouts/Header";
import Promoters from "./pages/Promoters";
import Payouts from "./pages/Payouts";
import Setting from "./pages/Setting";
import Help from "./pages/Help";
import Leads from "./pages/Leads";
import Dashboard from "./pages/Dashboard";
import Campaign from "./pages/Campaign";
import AIAgent from "./pages/AIAgent";
import Main from "./layouts/Main";



const queryClient = new QueryClient();

const LoadingSpinner = () => (
  <div className="flex h-screen items-center justify-center">
    <div className="h-12 w-12 animate-spin rounded-full border-4 border-primary border-t-transparent"></div>
  </div>
);

function App() {

  const [firstTime, setFirstTime] = useState(true);
  const [head , setHead] = useState("Platform Setup");
  const [isLoggedIn, setIsLoggedIn] = useState(false);
  

  const handlePageValue = (value) => {
    setHead(value);
  };

  useEffect(() => {
    setHead(firstTime ? "Platform Setup" : "Dashboard");
    }, [firstTime]);



  return (
    <QueryClientProvider client={queryClient}>
      <Router>
        <Suspense fallback={<LoadingSpinner />}>


          <div className="flex h-screen bg-gray-100">

            {isLoggedIn && <Sidebar onPageValueChange={handlePageValue} firstTime={firstTime} /> }

            <div className="flex-1 flex flex-col">
             {isLoggedIn && <Header page={head} />} 
              <div className="flex-1 p-6  overflow-y-auto">

                <Routes>


                  <Route path="/" element={  isLoggedIn ? < Main setFirstTime={setFirstTime} firstTime={firstTime}  /> : <LoginPage setIsLoggedIn={setIsLoggedIn} /> }  />
                 
                  <Route path="/register" element={<Register  setIsLoggedIn={setIsLoggedIn}/>} />


                  <Route path="/promoters" element={< Promoters />} />
                  <Route path="/payouts" element={<Payouts />} />
                  <Route path="/settings" element={<Setting />} />
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
