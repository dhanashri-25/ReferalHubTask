import React, { useState, useEffect } from "react";
import { Eye, MessageSquare, ArrowLeft, Send } from "lucide-react";

// This component will be used in your routing system alongside the Promoters component
// It needs access to the same data source/state manager that Promoters uses

const Leads = ({ promoters, setPromoters }) => {
  // If you're not passing state via props, you can use this local state
  // and sync it with your global state or context
  const [leadsData, setLeadsData] = useState(promoters || [
    {
      id: 1,
      name: "Emery Dokidis",
      email: "emerydokidis@gmail.com",
      contact: "+979970174715",
      couponCode: "SAVE10NOW",
      status: "Pending",
    },
    {
      id: 2,
      name: "Kadin Lipshutz",
      email: "kadinlipshutz@gmail.com",
      contact: "+971501948279",
      couponCode: "WELCOME15",
      status: "Pending",
    },
    {
      id: 3,
      name: "Randy Culnane",
      email: "randyculnane@gmail.com",
      contact: "+971501598978",
      couponCode: "EXCLUSIVE20",
      status: "Pending",
    },
    {
      id: 4,
      name: "Jaxson Vaccaro",
      email: "jaxsonvaccaro@gmail.com",
      contact: "+971522503635",
      couponCode: "GETDEAL25",
      status: "Completed",
    },
    {
      id: 5,
      name: "Jocelyn Levin",
      email: "jocelynlevin@gmail.com",
      contact: "+971554315300",
      couponCode: "FIRSTORDER10",
      status: "Pending",
    },
    {
      id: 6,
      name: "Maxim Septimus",
      email: "maximseptimus@gmail.com",
      contact: "+971525620832",
      couponCode: "SPECIALSAVE15",
      status: "Completed",
    },
    {
      id: 7,
      name: "Haylie Saris",
      email: "hayliesaris@gmail.com",
      contact: "+971503328228",
      couponCode: "LIMITED20",
      status: "Completed",
    },
    {
      id: 8,
      name: "Randy Herwitz",
      email: "randyherwitz@gmail.com",
      contact: "+971554231522",
      couponCode: "TRYUS10",
      status: "Pending",
    },
  ]);

  // Sync with promoters prop when it changes
  useEffect(() => {
    if (promoters && promoters.length > 0) {
      setLeadsData(promoters);
    }
  }, [promoters]);

  const [selectedLead, setSelectedLead] = useState(null);
  const [searchQuery, setSearchQuery] = useState("");
  const [selectedLeads, setSelectedLeads] = useState([1, 2]);

  // Function to update lead status - will update both local state and parent state
  const updateLeadStatus = (leadId, newStatus) => {
    const updatedLeads = leadsData.map(lead => 
      lead.id === leadId ? {...lead, status: newStatus} : lead
    );
    
    setLeadsData(updatedLeads);
    
    // If you're using props to manage state
    if (setPromoters) {
      setPromoters(updatedLeads);
    }
  };

  const toggleLeadSelection = (id) => {
    if (selectedLeads.includes(id)) {
      setSelectedLeads(selectedLeads.filter((leadId) => leadId !== id));
    } else {
      setSelectedLeads([...selectedLeads, id]);
    }
  };

  const toggleAllLeads = () => {
    if (selectedLeads.length === leadsData.length) {
      setSelectedLeads([]);
    } else {
      setSelectedLeads(leadsData.map((lead) => lead.id));
    }
  };

  const filteredLeads = leadsData.filter((lead) => {
    return (
      lead.name.toLowerCase().includes(searchQuery.toLowerCase()) ||
      (lead.email && lead.email.toLowerCase().includes(searchQuery.toLowerCase())) ||
      lead.contact.includes(searchQuery)
    );
  });

  const getStatusColor = (status) => {
    switch (status) {
      case "Completed":
        return "bg-green-100 text-green-500";
      case "Pending":
        return "bg-orange-100 text-orange-500";
      default:
        return "bg-gray-100 text-gray-500";
    }
  };

  if (selectedLead) {
    const lead = leadsData.find((l) => l.id === selectedLead);
    
    if (!lead) return null;

    // The lead detail view based exactly on your second screenshot
    return (
      <div className="min-h-screen bg-gray-50">
        <div className="max-w-7xl mx-auto py-6 px-4">
          <div className="flex items-center mb-6">
            <button 
              className="flex items-center text-gray-500 hover:text-gray-700" 
              onClick={() => setSelectedLead(null)}
            >
              <ArrowLeft size={16} className="mr-1" />
              <span>Back</span>
            </button>
          </div>
          
          <div className="bg-white rounded-lg p-6">
            <div className="flex items-start">
              <div className="bg-blue-100 rounded-full p-8 mr-4 flex items-center justify-center">
                <div className="text-2xl text-blue-500 font-medium">
                  {lead.name.split(' ').map(word => word[0]).join('')}
                </div>
              </div>
              
              <div className="flex-1">
                <h2 className="text-xl font-medium">{lead.name}</h2>
                <div className="flex items-center mt-2">
                  <div className="flex items-center mr-4">
                    <svg className="w-4 h-4 text-gray-500 mr-1" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                      <path strokeLinecap="round" strokeLinejoin="round" strokeWidth="2" d="M3 8l7.89 5.26a2 2 0 002.22 0L21 8M5 19h14a2 2 0 002-2V7a2 2 0 00-2-2H5a2 2 0 00-2 2v10a2 2 0 002 2z"></path>
                    </svg>
                    <span className="text-gray-600 text-sm">{lead.email}</span>
                  </div>
                  
                  <div className="flex items-center">
                    <svg className="w-4 h-4 text-gray-500 mr-1" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                      <path strokeLinecap="round" strokeLinejoin="round" strokeWidth="2" d="M3 5a2 2 0 012-2h3.28a1 1 0 01.948.684l1.498 4.493a1 1 0 01-.502 1.21l-2.257 1.13a11.042 11.042 0 005.516 5.516l1.13-2.257a1 1 0 011.21-.502l4.493 1.498a1 1 0 01.684.949V19a2 2 0 01-2 2h-1C9.716 21 3 14.284 3 6V5z"></path>
                    </svg>
                    <span className="text-gray-600 text-sm">{lead.contact}</span>
                  </div>
                </div>
              </div>
              
              <div className="flex ml-auto space-x-2">
                <button className="p-2 rounded-full bg-gray-100 text-gray-500 hover:bg-gray-200">
                  <MessageSquare size={20} />
                </button>
                <button className="p-2 rounded-full bg-gray-100 text-gray-500 hover:bg-gray-200">
                  <svg className="w-5 h-5" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                    <path strokeLinecap="round" strokeLinejoin="round" strokeWidth="2" d="M3 8l7.89 5.26a2 2 0 002.22 0L21 8M5 19h14a2 2 0 002-2V7a2 2 0 00-2-2H5a2 2 0 00-2 2v10a2 2 0 002 2z"></path>
                  </svg>
                </button>
              </div>
            </div>
            
            <div className="mt-8">
              <div className="flex items-center justify-between mb-4">
                <h3 className="text-lg font-medium">Change Status</h3>
              </div>
              
              <div className="w-full">
                <select 
                  className="w-full border border-gray-300 rounded-md p-2"
                  value={lead.status || "Pending"}
                  onChange={(e) => updateLeadStatus(lead.id, e.target.value)}
                >
                  <option value="Completed">Completed</option>
                  <option value="Pending">Pending</option>
                  <option value="Inactive">Inactive</option>
                </select>
              </div>
            </div>
          </div>
        </div>
      </div>
    );
  }

  return (
    <div className="min-h-screen ">
      <div className="max-w-7xl mx-auto py-5">

        <div className="bg-white rounded-lg shadow-sm px-4">
          <div className="flex justify-between items-center p-4 border-b border-gray-100 ">
            <h2 className="text-lg font-medium">Leads</h2>
            <div className="flex items-center ">
              <div className="relative mr-2">
                <input
                  type="text"
                  placeholder="Search"
                  className="bg-gray-100 rounded-md pl-8 pr-4 py-2 w-64"
                  value={searchQuery}
                  onChange={(e) => setSearchQuery(e.target.value)}
                />
                <svg
                  className="w-4 h-4 absolute left-2 top-3 text-gray-400"
                  fill="none"
                  stroke="currentColor"
                  viewBox="0 0 24 24"
                >
                  <path
                    strokeLinecap="round"
                    strokeLinejoin="round"
                    strokeWidth="2"
                    d="M21 21l-6-6m2-5a7 7 0 11-14 0 7 7 0 0114 0z"
                  ></path>
                </svg>
              </div>
              <div className="relative mr-2">
                <button className="bg-white border border-gray-300 rounded-md flex items-center px-4 py-2">
                  Change Status
                  <svg
                    className="w-4 h-4 ml-1"
                    fill="none"
                    stroke="currentColor"
                    viewBox="0 0 24 24"
                  >
                    <path
                      strokeLinecap="round"
                      strokeLinejoin="round"
                      strokeWidth="2"
                      d="M19 9l-7 7-7-7"
                    ></path>
                  </svg>
                </button>
              </div>
              <button className="flex items-center border border-gray-300 bg-white rounded-md px-3 py-2">
                <svg
                  className="w-4 h-4 mr-1"
                  fill="none"
                  stroke="currentColor"
                  viewBox="0 0 24 24"
                >
                  <path
                    strokeLinecap="round"
                    strokeLinejoin="round"
                    strokeWidth="2"
                    d="M3 4a1 1 0 011-1h16a1 1 0 011 1v2.586a1 1 0 01-.293.707l-6.414 6.414a1 1 0 00-.293.707V17l-4 4v-6.586a1 1 0 00-.293-.707L3.293 7.293A1 1 0 013 6.586V4z"
                  ></path>
                </svg>
                Filter
              </button>
            </div>
          </div>

          <div className="overflow-x-auto px-5 border  border-gray-100 bg-gray-50 py-5 mb-10">
            <table className="min-w-full">
              <thead>
                <tr>
                  <th className="py-3 px-4 text-left w-10">
                    <input 
                      type="checkbox" 
                      className="rounded" 
                      checked={selectedLeads.length === leadsData.length}
                      onChange={toggleAllLeads}
                    />
                  </th>
                  <th className="py-3 px-4 text-left text-sm font-medium text-gray-900">
                    Lead Name
                  </th>
                  <th className="py-3 px-4 text-left text-sm font-medium text-gray-900">
                    Email ID
                  </th>
                  <th className="py-3 px-4 text-left text-sm font-medium text-gray-900">
                    Contact No.
                  </th>
                  <th className="py-3 px-4 text-left text-sm font-medium text-gray-900">
                    Coupon Code
                  </th>
                  <th className="py-3 px-4 text-left text-sm font-medium text-gray-900">
                    Status
                  </th>
                  <th className="py-3 px-4 text-left text-sm font-medium text-gray-900">
                    Actions
                  </th>
                </tr>
              </thead>
              <tbody>
                {filteredLeads.map((lead) => (
                  <tr key={lead.id} className="border-b border-gray-100">
                    <td className="py-3 px-4">
                      <input
                        type="checkbox"
                        className="rounded"
                        checked={selectedLeads.includes(lead.id)}
                        onChange={() => toggleLeadSelection(lead.id)}
                      />
                    </td>
                    <td className="py-3 px-4 text-sm">{lead.name}</td>
                    <td className="py-3 px-4 text-sm">{lead.email || `${lead.name.toLowerCase().replace(' ', '')}@gmail.com`}</td>
                    <td className="py-3 px-4 text-sm">{lead.contact}</td>
                    <td className="py-3 px-4 text-sm">{lead.couponCode || (
                      lead.id === 1 ? "SAVE10NOW" :
                      lead.id === 2 ? "WELCOME15" :
                      lead.id === 3 ? "EXCLUSIVE20" :
                      lead.id === 4 ? "GETDEAL25" :
                      lead.id === 5 ? "FIRSTORDER10" :
                      lead.id === 6 ? "SPECIALSAVE15" :
                      lead.id === 7 ? "LIMITED20" :
                      "TRYUS10"
                    )}</td>
                    <td className="py-3 px-4">
                      <span
                        className={`text-xs px-2 py-1 rounded-full ${getStatusColor(
                          lead.status || "Pending"
                        )}`}
                      >
                        {lead.status || "Pending"}
                      </span>
                    </td>
                    <td className="py-3 px-4">
                      <div className="flex space-x-2">
                        <button 
                          className="text-gray-500 hover:text-gray-700"
                          onClick={() => setSelectedLead(lead.id)}
                        >
                          <Eye size={18} />
                        </button>
                        <button className="text-gray-500 hover:text-gray-700">
                          <MessageSquare size={18} />
                        </button>
                        {lead.id === 2 && (
                          <button className="bg-blue-100 text-blue-600 text-xs px-2 py-1 rounded">
                            Send follow-up
                          </button>
                        )}
                        {lead.id !== 2 && lead.status === "Pending" && (
                          <button className="text-blue-600 text-xs hover:underline">
                            View Profile
                          </button>
                        )}
                      </div>
                    </td>
                  </tr>
                ))}
              </tbody>
            </table>
          </div>
        </div>
      </div>
    </div>
  );
};

export default Leads;