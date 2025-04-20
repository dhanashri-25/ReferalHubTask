import React, { useState , useEffect } from "react";
import {toast} from "react-hot-toast";
import { Link } from "react-router-dom";

function Sidebar({ onPageValueChange, firstTime }) {
  const [activePage, setActivePage] = useState( "Platform Setup" );


  useEffect(() => {
      setActivePage(firstTime ? "Platform Setup" : "Dashboard");
  }, [firstTime]);

  const handleNavClick = (e , pageName) => {
    if (firstTime && pageName !== "Platform Setup") {
      toast.error("Please set up your account first!");
      e.preventDefault(); 
      
    } else {
      setActivePage(pageName);
      onPageValueChange(pageName);
    }
   
  };


  return (
    <div className="w-64 bg-white border-r border-gray-200 h-full overflow-y-auto transition-all duration-300 md:block 
                    max-md:fixed max-md:z-30 max-md:shadow-lg max-md:transform" 
         id="sidebar">
      <div className="flex items-center px-4 py-3 border-b border-gray-200 md:hidden">
        <button 
          onClick={() => document.getElementById('sidebar').classList.add('-translate-x-full')}
          className="text-gray-500 focus:outline-none"
        >
          <svg xmlns="http://www.w3.org/2000/svg" className="h-6 w-6" fill="none" viewBox="0 0 24 24" stroke="currentColor">
            <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M6 18L18 6M6 6l12 12" />
          </svg>
        </button>
      </div>
      
      <nav className="space-y-1 px-2 mt-8 md:mt-20">
        {firstTime && (
          <Link
            to="/"
            onClick={(e) => handleNavClick( e , "Platform Setup")}
            className={`flex items-center px-4 py-2 rounded-md ${
              activePage === "Platform Setup" ? "bg-blue-50  border-l-4 border-blue-500" : "hover:bg-gray-50"
            }`}
          >
            <svg
              className={`h-5 w-5 mr-3 ${activePage === "Platform Setup" ? "text-blue-600" : "text-gray-400"}`}
              viewBox="0 0 24 24"
              fill="none"
              xmlns="http://www.w3.org/2000/svg"
            >
              <path
                d="M3 5C3 3.89543 3.89543 3 5 3H9C10.1046 3 11 3.89543 11 5V9C11 10.1046 10.1046 11 9 11H5C3.89543 11 3 10.1046 3 9V5Z"
                stroke="currentColor"
                strokeWidth="2"
                strokeLinecap="round"
                strokeLinejoin="round"
              />
              <path
                d="M13 5C13 3.89543 13.8954 3 15 3H19C20.1046 3 21 3.89543 21 5V9C21 10.1046 20.1046 11 19 11H15C13.8954 11 13 10.1046 13 9V5Z"
                stroke="currentColor"
                strokeWidth="2"
                strokeLinecap="round"
                strokeLinejoin="round"
              />
              <path
                d="M3 15C3 13.8954 3.89543 13 5 13H9C10.1046 13 11 13.8954 11 15V19C11 20.1046 10.1046 21 9 21H5C3.89543 21 3 20.1046 3 19V15Z"
                stroke="currentColor"
                strokeWidth="2"
                strokeLinecap="round"
                strokeLinejoin="round"
              />
              <path
                d="M13 15C13 13.8954 13.8954 13 15 13H19C20.1046 13 21 13.8954 21 15V19C21 20.1046 20.1046 21 19 21H15C13.8954 21 13 20.1046 13 19V15Z"
                stroke="currentColor"
                strokeWidth="2"
                strokeLinecap="round"
                strokeLinejoin="round"
              />
            </svg>
            <span className={activePage === "Platform Setup" ? "text-blue-600" : "text-gray-600"}>Platform Setup</span>
          </Link>
        )}
        <Link
          to="/ai-agent"
          onClick={(e) => handleNavClick(e,"Ai Agents")}
          className={`flex items-center px-4 py-2 rounded-md ${
            activePage === "Ai Agents" ? "bg-blue-50  border-l-4 border-blue-500" : "hover:bg-gray-50"
          }`}
        >
          <svg
            className={`h-5 w-5 mr-3 ${activePage === "Ai Agents" ? "text-blue-600" : "text-gray-400"}`}
            viewBox="0 0 24 24"
            fill="none"
            xmlns="http://www.w3.org/2000/svg"
          >
            <path
              d="M12 12C14.7614 12 17 9.76142 17 7C17 4.23858 14.7614 2 12 2C9.23858 2 7 4.23858 7 7C7 9.76142 9.23858 12 12 12Z"
              stroke="currentColor"
              strokeWidth="2"
              strokeLinecap="round"
              strokeLinejoin="round"
            />
            <path
              d="M20.5899 22C20.5899 18.13 16.7399 15 11.9999 15C7.25991 15 3.40991 18.13 3.40991 22"
              stroke="currentColor"
              strokeWidth="2"
              strokeLinecap="round"
              strokeLinejoin="round"
            />
          </svg>
          <span className={activePage === "Ai Agents" ? "text-blue-600" : "text-gray-600"}>AI Agent</span>
        </Link>
        <Link
          to="/"
          onClick={(e) => handleNavClick( e ,"Dashboard")}
          className={`flex items-center px-4 py-2 rounded-md ${
            activePage === "Dashboard" ? "bg-blue-50  border-l-4 border-blue-500" : "hover:bg-gray-50"
          }`}
        >
          <svg
            className={`h-5 w-5 mr-3 ${activePage === "Dashboard" ? "text-blue-600" : "text-gray-400"}`}
            viewBox="0 0 24 24"
            fill="none"
            xmlns="http://www.w3.org/2000/svg"
          >
            <path
              d="M8 13V17M16 8V17M12 3V17M3 21H21"
              stroke="currentColor"
              strokeWidth="2"
              strokeLinecap="round"
              strokeLinejoin="round"
            />
          </svg>
          <span className={activePage === "Dashboard" ? "text-blue-600" : "text-gray-600"}>Dashboard</span>
        </Link>
        <Link
          to="/campaign"
          onClick={(e) => handleNavClick(e , "Create & Manage Referral Campaigns")}
          className={`flex items-center px-4 py-2 rounded-md ${
            activePage === "Create & Manage Referral Campaigns" ? "bg-blue-50  border-l-4 border-blue-500" : "hover:bg-gray-50"
          }`}
        >
          <svg
            className={`h-5 w-5 mr-3 ${activePage === "Create & Manage Referral Campaigns" ? "text-blue-600" : "text-gray-400"}`}
            viewBox="0 0 24 24"
            fill="none"
            xmlns="http://www.w3.org/2000/svg"
          >
            <path
              d="M19 11C19 14.866 15.866 18 12 18M12 18C8.13401 18 5 14.866 5 11M12 18V22M12 22H8M12 22H16M12 14C10.3431 14 9 12.6569 9 11V5C9 3.34315 10.3431 2 12 2C13.6569 2 15 3.34315 15 5V11C15 12.6569 13.6569 14 12 14Z"
              stroke="currentColor"
              strokeWidth="2"
              strokeLinecap="round"
              strokeLinejoin="round"
            />
          </svg>
          <span className={activePage === "Create & Manage Referral Campaigns" ? "text-blue-600" : "text-gray-600"}>Campaign</span>
        </Link>
        <Link
          to="/promoters"
          onClick={(e) => handleNavClick(e , "Manage & Monitior Your Promoters Referral Activities")}
          className={`flex items-center px-4 py-2 rounded-md ${
            activePage === "Manage & Monitior Your Promoters Referral Activities" ? "bg-blue-50  border-l-4 border-blue-500" : "hover:bg-gray-50"
          }`}
        >
          <svg
            className={`h-5 w-5 mr-3 ${activePage === "Manage & Monitior Your Promoters Referral Activities" ? "text-blue-600" : "text-gray-400"}`}
            viewBox="0 0 24 24"
            fill="none"
            xmlns="http://www.w3.org/2000/svg"
          >
            <path
              d="M17 20H22V18C22 16.3431 20.6569 15 19 15C18.0444 15 17.1931 15.4468 16.6438 16.1429M17 20H7M17 20V18C17 17.3438 16.8736 16.717 16.6438 16.1429M7 20H2V18C2 16.3431 3.34315 15 5 15C5.95561 15 6.80686 15.4468 7.35625 16.1429M7 20V18C7 17.3438 7.12642 16.717 7.35625 16.1429M7.35625 16.1429C8.0935 14.301 9.89482 13 12 13C14.1052 13 15.9065 14.301 16.6438 16.1429M15 7C15 8.65685 13.6569 10 12 10C10.3431 10 9 8.65685 9 7C9 5.34315 10.3431 4 12 4C13.6569 4 15 5.34315 15 7ZM21 10C21 11.1046 20.1046 12 19 12C17.8954 12 17 11.1046 17 10C17 8.89543 17.8954 8 19 8C20.1046 8 21 8.89543 21 10ZM7 10C7 11.1046 6.10457 12 5 12C3.89543 12 3 11.1046 3 10C3 8.89543 3.89543 8 5 8C6.10457 8 7 8.89543 7 10Z"
              stroke="currentColor"
              strokeWidth="2"
              strokeLinecap="round"
              strokeLinejoin="round"
            />
          </svg>
          <span className={activePage === "Manage & Monitior Your Promoters Referral Activities" ? "text-blue-600" : "text-gray-600"}>Promoters</span>
        </Link>
        <Link
          to="/leads"
          onClick={(e) => handleNavClick(e, "Manage & Monitior Your Leads")}
          className={`flex items-center px-4 py-2 rounded-md ${
            activePage === "Manage & Monitior Your Leads" ? "bg-blue-50  border-l-4 border-blue-500" : "hover:bg-gray-50"
          }`}
        >
          <svg
            className={`h-5 w-5 mr-3 ${activePage === "Manage & Monitior Your Leads" ? "text-blue-600" : "text-gray-400"}`}
            viewBox="0 0 24 24"
            fill="none"
            xmlns="http://www.w3.org/2000/svg"
          >
            <path
              d="M9 5H7C5.89543 5 5 5.89543 5 7V19C5 20.1046 5.89543 21 7 21H17C18.1046 21 19 20.1046 19 19V7C19 5.89543 18.1046 5 17 5H15M9 5C9 6.10457 9.89543 7 11 7H13C14.1046 7 15 6.10457 15 5M9 5C9 3.89543 9.89543 3 11 3H13C14.1046 3 15 3.89543 15 5M12 12H15M12 16H15M9 12H9.01M9 16H9.01"
              stroke="currentColor"
              strokeWidth="2"
              strokeLinecap="round"
              strokeLinejoin="round"
            />
          </svg>
          <span className={activePage === "Manage & Monitior Your Leads" ? "text-blue-600" : "text-gray-600"}>Leads</span>
        </Link>
        <Link
          to="/payouts"
          onClick={(e) => handleNavClick( e  ,"Manage & Monitior Your Payouts")}
          className={`flex items-center px-4 py-2 rounded-md ${
            activePage === "Manage & Monitior Your Payouts" ? "bg-blue-50  border-l-4 border-blue-500" : "hover:bg-gray-50"
          }`}
        >
          <svg
            className={`h-5 w-5 mr-3 ${activePage === "Manage & Monitior Your Payouts" ? "text-blue-600" : "text-gray-400"}`}
            viewBox="0 0 24 24"
            fill="none"
            xmlns="http://www.w3.org/2000/svg"
          >
            <path
              d="M3 10H21M7 15H8M12 15H13M6 19H18C19.6569 19 21 17.6569 21 16V8C21 6.34315 19.6569 5 18 5H6C4.34315 5 3 6.34315 3 8V16C3 17.6569 4.34315 19 6 19Z"
              stroke="currentColor"
              strokeWidth="2"
              strokeLinecap="round"
              strokeLinejoin="round"
            />
          </svg>
          <span className={activePage === "Manage & Monitior Your Payouts" ? "text-blue-600" : "text-gray-600"}>Payouts</span>
        </Link>
      </nav>

      <div className="absolute bottom-0 w-64 border-t border-gray-200 bg-white">
        <Link
          to="/settings"
          onClick={(e) => handleNavClick(e , "Settings")}
          className={`flex items-center px-6 py-3 ${
            activePage === "Settings" ? "bg-blue-50  border-l-4 border-blue-500"  : "hover:bg-gray-50"
          }`}
        >
          <svg
            className={`h-5 w-5 mr-3 ${activePage === "Settings" ? "text-blue-600" : "text-gray-400"}`}
            viewBox="0 0 24 24"
            fill="none"
            xmlns="http://www.w3.org/2000/svg"
          >
            <path
              d="M10.325 4.317C10.751 2.561 13.249 2.561 13.675 4.317C13.7389 4.5808 13.8642 4.82578 14.0407 5.032C14.2172 5.23822 14.4399 5.39985 14.6907 5.50375C14.9414 5.60764 15.2132 5.65085 15.4838 5.62987C15.7544 5.60889 16.0162 5.5243 16.248 5.383C17.791 4.443 19.558 6.209 18.618 7.753C18.4769 7.98466 18.3924 8.24634 18.3715 8.51677C18.3506 8.78721 18.3938 9.05877 18.4975 9.30938C18.6013 9.55999 18.7627 9.78258 18.9687 9.95905C19.1747 10.1355 19.4194 10.2609 19.683 10.325C21.439 10.751 21.439 13.249 19.683 13.675C19.4192 13.7389 19.1742 13.8642 18.968 14.0407C18.7618 14.2172 18.6001 14.4399 18.4963 14.6907C18.3924 14.9414 18.3491 15.2132 18.3701 15.4838C18.3911 15.7544 18.4757 16.0162 18.617 16.248C19.557 17.791 17.791 19.558 16.247 18.618C16.0153 18.4769 15.7537 18.3924 15.4832 18.3715C15.2128 18.3506 14.9412 18.3938 14.6906 18.4975C14.44 18.6013 14.2174 18.7627 14.0409 18.9687C13.8645 19.1747 13.7391 19.4194 13.675 19.683C13.249 21.439 10.751 21.439 10.325 19.683C10.2611 19.4192 10.1358 19.1742 9.95929 18.968C9.7828 18.7618 9.56011 18.6001 9.30935 18.4963C9.05859 18.3924 8.78683 18.3491 8.51621 18.3701C8.24559 18.3911 7.98375 18.4757 7.752 18.617C6.209 19.557 4.442 17.791 5.382 16.247C5.5231 16.0153 5.60755 15.7537 5.62848 15.4832C5.64942 15.2128 5.60624 14.9412 5.50247 14.6906C5.3987 14.44 5.23726 14.2174 5.03127 14.0409C4.82529 13.8645 4.58056 13.7391 4.317 13.675C2.561 13.249 2.561 10.751 4.317 10.325C4.5808 10.2611 4.82578 10.1358 5.032 9.95929C5.23822 9.7828 5.39985 9.56011 5.50375 9.30935C5.60764 9.05859 5.65085 8.78683 5.62987 8.51621C5.60889 8.24559 5.5243 7.98375 5.383 7.752C4.443 6.209 6.209 4.442 7.753 5.382C8.753 5.99 10.049 5.452 10.325 4.317Z"
              stroke="currentColor"
              strokeWidth="2"
              strokeLinecap="round"
              strokeLinejoin="round"
            />
            <path
              d="M12 15C13.6569 15 15 13.6569 15 12C15 10.3431 13.6569 9 12 9C10.3431 9 9 10.3431 9 12C9 13.6569 10.3431 15 12 15Z"
              stroke="currentColor"
              strokeWidth="2"
              strokeLinecap="round"
              strokeLinejoin="round"
            />
          </svg>
          <span className={activePage === "Settings" ? "text-blue-600" : "text-gray-600"}>Settings</span>
        </Link>
        <Link
          to="/help"
          onClick={(e) => handleNavClick(e , "Help")}
          className={`flex items-center px-6 py-3 ${
            activePage === "Help" ? "bg-blue-50  border-l-4 border-blue-500" : "hover:bg-gray-50"
          }`}
        >
          <svg
            className={`h-5 w-5 mr-3 ${activePage === "Help" ? "text-blue-600" : "text-gray-400"}`}
            viewBox="0 0 24 24"
            fill="none"
            xmlns="http://www.w3.org/2000/svg"
          >
            <path
              d="M12 22C17.5228 22 22 17.5228 22 12C22 6.47715 17.5228 2 12 2C6.47715 2 2 6.47715 2 12C2 17.5228 6.47715 22 12 22Z"
              stroke="currentColor"
              strokeWidth="2"
              strokeLinecap="round"
              strokeLinejoin="round"
            />
            <path
              d="M9.09 9.00001C9.3251 8.33167 9.78915 7.76811 10.4 7.40914C11.0108 7.05016 11.7289 6.91894 12.4272 7.03871C13.1255 7.15849 13.7588 7.52153 14.2151 8.06353C14.6713 8.60554 14.9211 9.29153 14.92 10C14.92 12 11.92 13 11.92 13"
              stroke="currentColor"
              strokeWidth="2"
              strokeLinecap="round"
              strokeLinejoin="round"
            />
            <path
              d="M12 17H12.01"
              stroke="currentColor"
              strokeWidth="2"
              strokeLinecap="round"
              strokeLinejoin="round"
            />
          </svg>
          <span className={activePage === "Help" ? "text-blue-600" : "text-gray-600"}>Help</span>
        </Link>
      </div>
    </div>
  );
}

export default Sidebar;