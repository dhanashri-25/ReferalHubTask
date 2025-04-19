import React from "react";
import { Link } from "react-router-dom";
import {
  Cog6ToothIcon,
  UserIcon,
  ChartBarIcon,
  MegaphoneIcon,
  UsersIcon,
  ClipboardDocumentListIcon,
  CreditCardIcon,
  QuestionMarkCircleIcon,
} from "@heroicons/react/24/outline";

function Sidebar({ currentStep, completedSteps }) {
  const steps = [
    { id: 1, name: "Set Up Business Profile", path: "/" },
    { id: 2, name: "Sync Your Customer Data", path: "/sync-customer-data" },
    { id: 3, name: "Set Up AI Agent Rules", path: "/ai-agent-rules" },
    { id: 4, name: "Set Up First Campaign", path: "/first-campaign" },
  ];

  const getStepStatus = (stepId) => {
    if (completedSteps.includes(stepId)) return "completed";
    if (currentStep === stepId) return "in-progress";
    return "not-started";
  };

  return (
    <div className="w-64 bg-white border-r border-gray-200">
      
      <nav className="mt-18">
        <Link
          to="/"
          className="flex items-center px-4 py-2 text-blue-600 bg-blue-50"
        >
          <Cog6ToothIcon className="h-5 w-5 mr-3" />
          <span>Platform Setup</span>
        </Link>
        <Link
          to="/ai-agent"
          className="flex items-center px-4 py-2 text-gray-600 hover:bg-gray-50"
        >
          <UserIcon className="h-5 w-5 mr-3" />
          <span>AI Agent</span>
        </Link>
        <Link
          to="/dashboard"
          className="flex items-center px-4 py-2 text-gray-600 hover:bg-gray-50"
        >
          <ChartBarIcon className="h-5 w-5 mr-3" />
          <span>Dashboard</span>
        </Link>
        <Link
          to="/campaign"
          className="flex items-center px-4 py-2 text-gray-600 hover:bg-gray-50"
        >
          <MegaphoneIcon className="h-5 w-5 mr-3" />
          <span>Campaign</span>
        </Link>
        <Link
          to="/promoters"
          className="flex items-center px-4 py-2 text-gray-600 hover:bg-gray-50"
        >
          <UsersIcon className="h-5 w-5 mr-3" />
          <span>Promoters</span>
        </Link>
        <Link
          to="/leads"
          className="flex items-center px-4 py-2 text-gray-600 hover:bg-gray-50"
        >
          <ClipboardDocumentListIcon className="h-5 w-5 mr-3" />
          <span>Leads</span>
        </Link>
        <Link
          to="/payouts"
          className="flex items-center px-4 py-2 text-gray-600 hover:bg-gray-50"
        >
          <CreditCardIcon className="h-5 w-5 mr-3" />
          <span>Payouts</span>
        </Link>
      </nav>
      <div className="absolute bottom-0 w-64 border-t border-gray-200">
        <Link
          to="/settings"
          className="flex items-center px-4 py-3 text-gray-600 hover:bg-gray-50"
        >
          <Cog6ToothIcon className="h-5 w-5 mr-3" />
          <span>Settings</span>
        </Link>
        <Link
          to="/help"
          className="flex items-center px-4 py-3 text-gray-600 hover:bg-gray-50"
        >
          <QuestionMarkCircleIcon className="h-5 w-5 mr-3" />
          <span>Help</span>
        </Link>
      </div>
    </div>
  );
}

export default Sidebar;
