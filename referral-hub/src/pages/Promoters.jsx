import React, { useState } from "react";
import { Eye, MessageSquare, X, Upload } from "lucide-react";

const Promoters = () => {
  const [showModal, setShowModal] = useState(false);
  const [modalTab, setModalTab] = useState("manual"); // 'manual', 'csv', or 'zapier'
  const [csvUploadProgress, setCsvUploadProgress] = useState(0);
  const [csvUploaded, setCsvUploaded] = useState(false);

  const [promoters, setPromoters] = useState([
    {
      id: 1,
      name: "Emery Dokidis",
      contact: "+979970174715",
      leads: 12,
      conversionRate: "50%",
      lastFollowUp: "28-4-2024",
      revenue: "$50",
      status: "Active",
    },
    {
      id: 2,
      name: "Kadin Lipshutz",
      contact: "+971501948279",
      leads: 8,
      conversionRate: "30%",
      lastFollowUp: "27-5-2024",
      revenue: "$900",
      status: "Active",
    },
    {
      id: 3,
      name: "Randy Culnane",
      contact: "+971501598978",
      leads: 15,
      conversionRate: "60%",
      lastFollowUp: "29-5-2024",
      revenue: "$1000",
      status: "Inactive",
    },
    {
      id: 4,
      name: "Jaxson Vaccaro",
      contact: "+971522503635",
      leads: 10,
      conversionRate: "45%",
      lastFollowUp: "30-6-2024",
      revenue: "$500",
      status: "Completed",
    },
    {
      id: 5,
      name: "Jocelyn Levin",
      contact: "+971554315300",
      leads: 6,
      conversionRate: "28%",
      lastFollowUp: "01-7-2024",
      revenue: "$1,500",
      status: "Inactive",
    },
    {
      id: 6,
      name: "Maxim Septimus",
      contact: "+971525620832",
      leads: 18,
      conversionRate: "65%",
      lastFollowUp: "03-7-2024",
      revenue: "$2,000",
      status: "Completed",
    },
    {
      id: 7,
      name: "Haylie Saris",
      contact: "+971503328228",
      leads: 13,
      conversionRate: "58%",
      lastFollowUp: "05-7-2024",
      revenue: "$300",
      status: "Active",
    },
    {
      id: 8,
      name: "Randy Herwitz",
      contact: "+971554231522",
      leads: 12,
      conversionRate: "50%",
      lastFollowUp: "10-7-2024",
      revenue: "$600",
      status: "Inactive",
    },
  ]);

  const [newPromoter, setNewPromoter] = useState({
    name: "",
    contact: "",
    email: "",
  });

  const [selectedPromoters, setSelectedPromoters] = useState([1, 2]);

  const handleAddPromoter = () => {
    if (newPromoter.name && newPromoter.contact) {
      const newId = promoters.length + 1;
      setPromoters([
        ...promoters,
        {
          id: newId,
          name: newPromoter.name,
          contact: newPromoter.contact,
          leads: 0,
          conversionRate: "0%",
          lastFollowUp: "-",
          revenue: "$0",
          status: "Active",
        },
      ]);
      setNewPromoter({ name: "", contact: "", email: "" });
      setShowModal(false);
    }
  };

  const simulateCsvUpload = () => {
    setCsvUploaded(true);
    let progress = 0;
    const interval = setInterval(() => {
      progress += 10;
      setCsvUploadProgress(progress);
      if (progress >= 70) {
        clearInterval(interval);
      }
    }, 200);
  };

  const getStatusColor = (status) => {
    switch (status) {
      case "Active":
        return "text-blue-500 bg-blue-100";
      case "Inactive":
        return "text-yellow-500 bg-yellow-100";
      case "Completed":
        return "text-green-500 bg-green-100";
      default:
        return "text-gray-500 bg-gray-100";
    }
  };

  const togglePromoterSelection = (id) => {
    if (selectedPromoters.includes(id)) {
      setSelectedPromoters(
        selectedPromoters.filter((promoterId) => promoterId !== id)
      );
    } else {
      setSelectedPromoters([...selectedPromoters, id]);
    }
  };

  return (
    <div className="min-h-screen">
      <div className="max-w-7xl mx-auto">
        {/* Top buttons */}
        <div className="flex space-x-3 mb-6">
          <button
            className="bg-gradient-to-r from-[#3d7efe] to-[#9dbcff] text-white px-4 py-2 rounded flex items-center"
            onClick={() => {
              setModalTab("manual");
              setShowModal(true);
            }}
          >
            <span className="mr-1">+</span> New Promoter
          </button>
          <button className="border border-blue-500 text-blue-500 px-4 py-2 rounded">
            Ask Past Customers For Referrals
          </button>
        </div>

        {/* Stats cards */}
        <div className="grid grid-cols-4 gap-4 mb-6">
          <div className="bg-white p-4 rounded-lg shadow-sm">
            <div className="flex items-center">
              <div className="bg-gray-100 p-2 rounded-full mr-3">
                <div className="bg-gray-300 p-2 rounded-full">
                  <svg
                    className="w-5 h-5 text-gray-600"
                    fill="none"
                    stroke="currentColor"
                    viewBox="0 0 24 24"
                  >
                    <path
                      strokeLinecap="round"
                      strokeLinejoin="round"
                      strokeWidth="2"
                      d="M16 7a4 4 0 11-8 0 4 4 0 018 0zM12 14a7 7 0 00-7 7h14a7 7 0 00-7-7z"
                    ></path>
                  </svg>
                </div>
              </div>
              <div>
                <div className="text-sm text-gray-500">Total Customers</div>
                <div className="text-xl font-semibold">8</div>
                <div className="text-xs text-green-500">
                  +25% <span className="text-gray-400">vs last month</span>
                </div>
              </div>
            </div>
          </div>

          <div className="bg-white p-4 rounded-lg shadow-sm">
            <div className="flex items-center">
              <div className="bg-orange-100 p-2 rounded-full mr-3">
                <div className="bg-orange-200 p-2 rounded-full">
                  <svg
                    className="w-5 h-5 text-orange-600"
                    fill="none"
                    stroke="currentColor"
                    viewBox="0 0 24 24"
                  >
                    <path
                      strokeLinecap="round"
                      strokeLinejoin="round"
                      strokeWidth="2"
                      d="M16 7a4 4 0 11-8 0 4 4 0 018 0zM12 14a7 7 0 00-7 7h14a7 7 0 00-7-7z"
                    ></path>
                  </svg>
                </div>
              </div>
              <div>
                <div className="text-sm text-gray-500">New Customers</div>
                <div className="text-xl font-semibold">94</div>
                <div className="text-xs text-green-500">
                  +15% <span className="text-gray-400">vs last month</span>
                </div>
              </div>
            </div>
          </div>

          <div className="bg-white p-4 rounded-lg shadow-sm">
            <div className="flex items-center">
              <div className="bg-purple-100 p-2 rounded-full mr-3">
                <div className="bg-purple-200 p-2 rounded-full">
                  <svg
                    className="w-5 h-5 text-purple-600"
                    fill="none"
                    stroke="currentColor"
                    viewBox="0 0 24 24"
                  >
                    <path
                      strokeLinecap="round"
                      strokeLinejoin="round"
                      strokeWidth="2"
                      d="M9 19v-6a2 2 0 00-2-2H5a2 2 0 00-2 2v6a2 2 0 002 2h2a2 2 0 002-2zm0 0V9a2 2 0 012-2h2a2 2 0 012 2v10m-6 0a2 2 0 002 2h2a2 2 0 002-2m0 0V5a2 2 0 012-2h2a2 2 0 012 2v14a2 2 0 01-2 2h-2a2 2 0 01-2-2z"
                    ></path>
                  </svg>
                </div>
              </div>
              <div>
                <div className="text-sm text-gray-500">
                  Average Conversion rate
                </div>
                <div className="text-xl font-semibold">44%</div>
                <div className="text-xs text-red-500">
                  -3% <span className="text-gray-400">vs last month</span>
                </div>
              </div>
            </div>
          </div>

          <div className="bg-white p-4 rounded-lg shadow-sm">
            <div className="flex items-center">
              <div className="bg-blue-100 p-2 rounded-full mr-3">
                <div className="bg-blue-200 p-2 rounded-full">
                  <svg
                    className="w-5 h-5 text-blue-600"
                    fill="none"
                    stroke="currentColor"
                    viewBox="0 0 24 24"
                  >
                    <path
                      strokeLinecap="round"
                      strokeLinejoin="round"
                      strokeWidth="2"
                      d="M12 8c-1.657 0-3 .895-3 2s1.343 2 3 2 3 .895 3 2-1.343 2-3 2m0-8c1.11 0 2.08.402 2.599 1M12 8V7m0 1v8m0 0v1m0-1c-1.11 0-2.08-.402-2.599-1M21 12a9 9 0 11-18 0 9 9 0 0118 0z"
                    ></path>
                  </svg>
                </div>
              </div>
              <div>
                <div className="text-sm text-gray-500">
                  Total Revenue Generated
                </div>
                <div className="text-xl font-semibold">$23,900</div>
                <div className="text-xs text-green-500">
                  +15% <span className="text-gray-400">vs last month</span>
                </div>
              </div>
            </div>
          </div>
        </div>

        {/* Promoters heading and search */}
        <div className="bg-gray-50 p-6">
          <div className="flex justify-between items-center mb-4 bg">
            <h2 className="text-lg font-medium">Promoters</h2>
            <div className="flex items-center">
              <div className="relative mr-2">
                <input
                  type="text"
                  placeholder="Search"
                  className="bg-gray-200 rounded-md pl-8 pr-4 py-2 w-64"
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
              <button className="flex items-center border border-gray-300 rounded-md px-3 py-2">
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

          {/* Promoters table */}
          <div className="bg-white rounded-lg  overflow-hidden mb-6 border border-gray-200">
            <table className="min-w-full ">
              <thead>
                <tr className="bg-gray-50 ">
                  <th className="py-3 px-4 text-left w-10">
                    <input type="checkbox" className="rounded" />
                  </th>
                  <th className="py-3 px-4 text-left text-sm font-medium text-gray-900">
                    Promoter Name
                  </th>
                  <th className="py-3 px-4 text-left text-sm font-medium text-gray-900">
                    Contact No.
                  </th>
                  <th className="py-3 px-4 text-left text-sm font-medium text-gray-900">
                    Leads
                  </th>
                  <th className="py-3 px-4 text-left text-sm font-medium text-gray-900">
                    Conversion Rate
                  </th>
                  <th className="py-3 px-4 text-left text-sm font-medium text-gray-900">
                    Last Follow-Up
                  </th>
                  <th className="py-3 px-4 text-left text-sm font-medium text-gray-900">
                    Revenue Generated
                  </th>
                  <th className="py-3 px-4 text-left text-sm font-medium text-gray-900">
                    Referrer Status
                  </th>
                  <th className="py-3 px-4 text-left text-sm font-medium text-gray-900">
                    Actions
                  </th>
                </tr>
              </thead>
              <tbody>
                {promoters.map((promoter) => (
                  <tr key={promoter.id} className="text-gray-600">
                    <td className="py-3 px-4">
                      <input
                        type="checkbox"
                        className="rounded"
                        checked={selectedPromoters.includes(promoter.id)}
                        onChange={() => togglePromoterSelection(promoter.id)}
                      />
                    </td>
                    <td className="py-3 px-4 text-sm">{promoter.name}</td>
                    <td className="py-3 px-4 text-sm">{promoter.contact}</td>
                    <td className="py-3 px-4 text-sm">{promoter.leads}</td>
                    <td className="py-3 px-4 text-sm">
                      {promoter.conversionRate}
                    </td>
                    <td className="py-3 px-4 text-sm">
                      {promoter.lastFollowUp}
                    </td>
                    <td className="py-3 px-4 text-sm">{promoter.revenue}</td>
                    <td className="py-3 px-4">
                      <span
                        className={`text-xs px-2 py-1 rounded-full ${getStatusColor(
                          promoter.status
                        )}`}
                      >
                        {promoter.status}
                      </span>
                    </td>
                    <td className="py-3 px-4">
                      <div className="flex space-x-2">
                        <button className="text-gray-500 hover:text-gray-700">
                          <Eye size={18} />
                        </button>
                        <button className="text-gray-500 hover:text-gray-700">
                          <MessageSquare size={18} />
                        </button>
                      </div>
                    </td>
                  </tr>
                ))}
              </tbody>
            </table>
          </div>
        </div>
      </div>

      {/* Add Customer Modal */}
      {showModal && (
        <div className="fixed inset-0 z-50 bg-gray-900/30 flex items-center justify-center">
          <div className="relative bg-white rounded-lg shadow-lg w-full h-[600px] max-w-2xl px-10 overflow-hidden ">
            <button
              onClick={() => setShowModal(false)}
              className="text-gray-400 hover:text-gray-600 absolute top-4 right-4"
            >
              <X size={20} />
            </button>

            <div className="px-3 py-5">
              <div className="flex justify-between items-center mb-6 ">
                <h3 className="text-lg font-medium border-b border-gray-600 py-5 w-full">
                  Choose How You Want to Add Customers
                </h3>
              </div>

              {/* Tabs */}
              <div className="flex  mb-6 ">
                <button
                  className={` px-8 py-3 rounded-sm w-50 ${
                    modalTab === "manual"
                      ? " text-gray-600 bg-[#d9dff6]"
                      : "text-gray-600"
                  }`}
                  onClick={() => setModalTab("manual")}
                >
                  Add Manually
                </button>
                <button
                  className={`px-8 py-3 rounded-sm w-50 ${
                    modalTab === "csv"
                      ? "text-gray-600 bg-[#d9dff6]"
                      : "text-gray-600"
                  }`}
                  onClick={() => {
                    setModalTab("csv");
                    setCsvUploaded(false);
                    setCsvUploadProgress(0);
                  }}
                >
                  Upload CSV File
                </button>
                <button
                  className={`px-8 py-3 rounded-sm w-50 ${
                    modalTab === "zapier"
                      ? "text-gray-600 bg-[#d9dff6]"
                      : "text-gray-600"
                  }`}
                  onClick={() => setModalTab("zapier")}
                >
                  Sync with Zapier
                </button>
              </div>

              {/* Tab Content */}
              {modalTab === "manual" && (
                <div className="px-10 border border-gray-200 rounded-md py-5">
                  <div className="mb-4 ">
                    <label className="block text-sm font-medium text-gray-700 mb-1">
                      Full Name
                    </label>
                    <input
                      type="text"
                      placeholder="Enter Full Name"
                      className="w-full border border-gray-400 rounded-md px-3 py-2"
                      value={newPromoter.name}
                      onChange={(e) =>
                        setNewPromoter({ ...newPromoter, name: e.target.value })
                      }
                    />
                  </div>
                  <div className="mb-4">
                    <label className="block text-sm font-medium text-gray-700 mb-1 ">
                      Phone Number
                    </label>
                    <input
                      type="text"
                      placeholder="Enter Phone Number"
                      className="w-full border  border-gray-400 rounded-md px-3 py-2"
                      value={newPromoter.contact}
                      onChange={(e) =>
                        setNewPromoter({
                          ...newPromoter,
                          contact: e.target.value,
                        })
                      }
                    />
                  </div>
                  <div className="mb-6">
                    <label className="block text-sm font-medium text-gray-700 mb-1">
                      Email ID
                    </label>
                    <input
                      type="email"
                      placeholder="Enter Email ID"
                      className="w-full border  border-gray-400 rounded-md px-3 py-2"
                      value={newPromoter.email}
                      onChange={(e) =>
                        setNewPromoter({
                          ...newPromoter,
                          email: e.target.value,
                        })
                      }
                    />
                  </div>
                  <div className="flex justify-end">
                    <button
                      className="bg-gray-200 text-gray-700 px-4 py-2 rounded mr-2"
                      onClick={() => setShowModal(false)}
                    >
                      Cancel
                    </button>
                    <button
                      className="bg-blue-500 text-white px-4 py-2 rounded"
                      onClick={handleAddPromoter}
                    >
                      Save
                    </button>
                  </div>
                </div>
              )}

              {modalTab === "csv" && (
                <div>
                  <div className="border-2 border-dashed border-gray-300 rounded-lg p-6 mb-4 text-center">
                    {!csvUploaded ? (
                      <>
                        <Upload
                          className="mx-auto text-blue-500 mb-2"
                          size={32}
                        />
                        <p className="text-gray-600 mb-2">
                          Drag and drop files here
                        </p>
                        <p className="text-gray-500 text-sm mb-4">or</p>
                        <button
                          className="bg-white border border-gray-300 text-blue-500 px-4 py-2 rounded"
                          onClick={simulateCsvUpload}
                        >
                          Browse Files
                        </button>
                      </>
                    ) : (
                      <div>
                        <div className="flex items-center mb-2">
                          <div className="bg-gray-100 p-2 rounded mr-2">
                            <svg
                              className="w-5 h-5 text-green-500"
                              fill="none"
                              stroke="currentColor"
                              viewBox="0 0 24 24"
                            >
                              <path
                                strokeLinecap="round"
                                strokeLinejoin="round"
                                strokeWidth="2"
                                d="M5 13l4 4L19 7"
                              ></path>
                            </svg>
                          </div>
                          <div className="flex-1">
                            <div className="flex justify-between mb-1">
                              <span className="text-sm font-medium">
                                Leads.csv
                              </span>
                              <span className="text-sm text-gray-500">
                                42KB
                              </span>
                            </div>
                            <div className="w-full bg-gray-200 rounded-full h-2">
                              <div
                                className="bg-blue-500 h-2 rounded-full"
                                style={{ width: `${csvUploadProgress}%` }}
                              ></div>
                            </div>
                          </div>
                          <button className="ml-2 text-red-500">
                            <X size={16} />
                          </button>
                        </div>
                      </div>
                    )}
                  </div>
                  <div className="flex justify-end">
                    <button
                      className="bg-gray-200 text-gray-700 px-4 py-2 rounded mr-2"
                      onClick={() => setShowModal(false)}
                    >
                      Cancel
                    </button>
                    <button
                      className="bg-blue-500 text-white px-4 py-2 rounded"
                      onClick={() => setShowModal(false)}
                    >
                      Save
                    </button>
                  </div>
                </div>
              )}

              {modalTab === "zapier" && (
                <div>
                  <div className="border-2 border-dashed border-gray-300 rounded-lg p-6 mb-4 text-center">
                    <p className="text-gray-600 mb-4">
                      Automatically sync your customer data from your CRM using
                      Zapier
                    </p>
                    <button className="bg-blue-500 text-white px-4 py-2 rounded">
                      Connect with Zapier
                    </button>
                  </div>
                </div>
              )}
            </div>
          </div>
        </div>
      )}
    </div>
  );
};

export default Promoters;
