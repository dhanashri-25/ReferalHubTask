import React, { useState } from 'react';

const Payouts = () => {
  const [activeTab, setActiveTab] = useState('allPayouts');
  const [filterOpen, setFilterOpen] = useState(false);

  // Mock data for all payouts
  const payoutsData = [
    { id: "PR-15048", name: "Emery Dobbs", points: 650, date: "28-4-2024", reward: "Spring Boost", status: "Paid" },
    { id: "PR-15047", name: "Kadin Lipshultz", points: 250, date: "27-3-2024", reward: "Summer Referral Program", status: "Paid" },
    { id: "PR-15046", name: "Randy Carboni", points: 300, date: "29-5-2024", reward: "Early Bird Special", status: "Rejected" },
    { id: "PR-15045", name: "Jessok Vaccaro", points: 100, date: "30-5-2024", reward: "Early Bird Special", status: "Paid" },
    { id: "PR-15044", name: "Jocelyn Levin", points: 200, date: "01-7-2024", reward: "Summer Referral Program", status: "Rejected" },
    { id: "PR-15043", name: "Marvin Sentinza", points: 300, date: "03-7-2024", reward: "Summer Referral Program", status: "Paid" },
    { id: "PR-15042", name: "Haylie Saris", points: 220, date: "05-7-2024", reward: "Spring Boost", status: "Paid" },
    { id: "PR-15041", name: "Randy Hertwitz", points: 400, date: "10-7-2024", reward: "Spring Boost", status: "Rejected" },
  ];

  // Mock data for disputes
  const disputesData = [
    { id: "D-1013", name: "Emery Dobbs", points: 650, date: "28-4-2024", reward: "Spring Boost", status: "Resolved" },
    { id: "D-1014", name: "Kadin Lipshultz", points: 250, date: "27-3-2024", reward: "Summer Referral Program", status: "Resolved" },
    { id: "D-1015", name: "Randy Carboni", points: 300, date: "29-5-2024", reward: "Early Bird Special", status: "Under Review" },
    { id: "D-1016", name: "Jessok Vaccaro", points: 100, date: "30-5-2024", reward: "Early Bird Special", status: "Resolved" },
    { id: "D-1017", name: "Jocelyn Levin", points: 200, date: "01-7-2024", reward: "Summer Referral Program", status: "Under Review" },
    { id: "D-1018", name: "Marvin Sentinza", points: 300, date: "03-7-2024", reward: "Summer Referral Program", status: "Resolved" },
    { id: "D-1019", name: "Haylie Saris", points: 220, date: "05-7-2024", reward: "Spring Boost", status: "Resolved" },
    { id: "D-1020", name: "Randy Hertwitz", points: 400, date: "10-7-2024", reward: "Spring Boost", status: "Under Review" },
  ];

  // Helper function for status badge color
  const getStatusColor = (status) => {
    switch (status) {
      case 'Paid':
      case 'Resolved':
        return 'bg-green-100 text-green-800';
      case 'Rejected':
      case 'Under Review':
        return 'bg-yellow-100 text-yellow-800';
      default:
        return 'bg-gray-100 text-gray-800';
    }
  };

  return (
    <div className="max-w-6xl mx-auto p-4 bg-gray-50">
      {/* Header */}
      <div className="flex flex-wrap justify-between items-center mb-6">
        <div className="flex items-center space-x-3 mb-2 md:mb-0">
          <div className="flex items-center bg-gray-100 p-2 rounded-lg">
            <svg className="w-5 h-5 text-gray-500 mr-2" fill="currentColor" viewBox="0 0 20 20">
              <path d="M10 2a8 8 0 100 16 8 8 0 000-16zm0 14a6 6 0 110-12 6 6 0 010 12z" />
            </svg>
            <div>
              <div className="text-xs text-gray-500">Total Points Given</div>
              <div className="font-semibold">12,500</div>
            </div>
          </div>

          <div className="flex items-center bg-red-50 p-2 rounded-lg">
            <svg className="w-5 h-5 text-red-400 mr-2" fill="currentColor" viewBox="0 0 20 20">
              <path d="M10 2a8 8 0 100 16 8 8 0 000-16zm0 14a6 6 0 110-12 6 6 0 010 12z" />
            </svg>
            <div>
              <div className="text-xs text-gray-500">Current Point Balance</div>
              <div className="font-semibold">1,250</div>
            </div>
          </div>

          <div className="flex items-center bg-purple-50 p-2 rounded-lg">
            <svg className="w-5 h-5 text-purple-400 mr-2" fill="currentColor" viewBox="0 0 20 20">
              <path d="M10 2a8 8 0 100 16 8 8 0 000-16zm0 14a6 6 0 110-12 6 6 0 010 12z" />
            </svg>
            <div>
              <div className="text-xs text-gray-500">Last Points Transfer</div>
              <div className="font-semibold">April 9, 2025</div>
            </div>
          </div>
        </div>
      </div>

      {/* Tabs */}
      <div className="flex mb-6 border-b">
        <button 
          className={`px-4 py-2 font-medium ${activeTab === 'allPayouts' ? 'text-blue-600 border-b-2 border-blue-600' : 'text-gray-500'}`}
          onClick={() => setActiveTab('allPayouts')}
        >
          All Payouts
        </button>
        <button 
          className={`px-4 py-2 font-medium ${activeTab === 'disputes' ? 'text-blue-600 border-b-2 border-blue-600' : 'text-gray-500'}`}
          onClick={() => setActiveTab('disputes')}
        >
          Disputes
        </button>
        <button 
          className={`px-4 py-2 font-medium ${activeTab === 'settings' ? 'text-blue-600 border-b-2 border-blue-600' : 'text-gray-500'}`}
          onClick={() => setActiveTab('settings')}
        >
          Payout Settings
        </button>
      </div>

      {/* All Payouts Tab */}
      {activeTab === 'allPayouts' && (
        <div>
          <div className="flex justify-between items-center mb-4">
            <h2 className="text-lg font-medium">All Payouts</h2>
            <button 
              className="flex items-center text-gray-600 bg-white border px-3 py-1 rounded"
              onClick={() => setFilterOpen(!filterOpen)}
            >
              <svg className="w-4 h-4 mr-1" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                <path strokeLinecap="round" strokeLinejoin="round" strokeWidth="2" d="M3 4a1 1 0 011-1h16a1 1 0 011 1v2.586a1 1 0 01-.293.707l-6.414 6.414a1 1 0 00-.293.707V17l-4 4v-6.586a1 1 0 00-.293-.707L3.293 7.293A1 1 0 013 6.586V4z" />
              </svg>
              Filter
            </button>
          </div>

          <div className="bg-white rounded-lg shadow overflow-hidden">
            <table className="min-w-full divide-y divide-gray-200">
              <thead className="bg-gray-50">
                <tr>
                  <th className="px-6 py-3 text-left text-xs font-medium text-gray-500 uppercase tracking-wider">Payout ID</th>
                  <th className="px-6 py-3 text-left text-xs font-medium text-gray-500 uppercase tracking-wider">Promoter Name</th>
                  <th className="px-6 py-3 text-left text-xs font-medium text-gray-500 uppercase tracking-wider">Points</th>
                  <th className="px-6 py-3 text-left text-xs font-medium text-gray-500 uppercase tracking-wider">Reward Date</th>
                  <th className="px-6 py-3 text-left text-xs font-medium text-gray-500 uppercase tracking-wider">Reward Earned For</th>
                  <th className="px-6 py-3 text-left text-xs font-medium text-gray-500 uppercase tracking-wider">Status</th>
                  <th className="px-6 py-3 text-left text-xs font-medium text-gray-500 uppercase tracking-wider">Actions</th>
                </tr>
              </thead>
              <tbody className="bg-white divide-y divide-gray-200">
                {payoutsData.map((payout) => (
                  <tr key={payout.id}>
                    <td className="px-6 py-4 whitespace-nowrap text-sm text-gray-500">{payout.id}</td>
                    <td className="px-6 py-4 whitespace-nowrap text-sm font-medium text-gray-900">{payout.name}</td>
                    <td className="px-6 py-4 whitespace-nowrap text-sm text-gray-500">{payout.points} pts</td>
                    <td className="px-6 py-4 whitespace-nowrap text-sm text-gray-500">{payout.date}</td>
                    <td className="px-6 py-4 whitespace-nowrap text-sm text-gray-500">{payout.reward}</td>
                    <td className="px-6 py-4 whitespace-nowrap">
                      <span className={`px-2 inline-flex text-xs leading-5 font-semibold rounded-full ${getStatusColor(payout.status)}`}>
                        {payout.status}
                      </span>
                    </td>
                    <td className="px-6 py-4 whitespace-nowrap text-sm text-gray-500">
                      <div className="flex items-center">
                        <button className="text-blue-600 hover:text-blue-800 flex items-center">
                          <svg className="w-4 h-4 mr-1" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                            <path strokeLinecap="round" strokeLinejoin="round" strokeWidth="2" d="M15 12a3 3 0 11-6 0 3 3 0 016 0z" />
                            <path strokeLinecap="round" strokeLinejoin="round" strokeWidth="2" d="M2.458 12C3.732 7.943 7.523 5 12 5c4.478 0 8.268 2.943 9.542 7-1.274 4.057-5.064 7-9.542 7-4.477 0-8.268-2.943-9.542-7z" />
                          </svg>
                          {payout.status === 'Rejected' ? 'Track Dispute' : 'Request Dispute'}
                        </button>
                      </div>
                    </td>
                  </tr>
                ))}
              </tbody>
            </table>
          </div>
        </div>
      )}

      {/* Disputes Tab */}
      {activeTab === 'disputes' && (
        <div>
          <div className="flex justify-between items-center mb-4">
            <h2 className="text-lg font-medium">Disputes</h2>
            <button 
              className="flex items-center text-gray-600 bg-white border px-3 py-1 rounded"
              onClick={() => setFilterOpen(!filterOpen)}
            >
              <svg className="w-4 h-4 mr-1" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                <path strokeLinecap="round" strokeLinejoin="round" strokeWidth="2" d="M3 4a1 1 0 011-1h16a1 1 0 011 1v2.586a1 1 0 01-.293.707l-6.414 6.414a1 1 0 00-.293.707V17l-4 4v-6.586a1 1 0 00-.293-.707L3.293 7.293A1 1 0 013 6.586V4z" />
              </svg>
              Filter
            </button>
          </div>

          <div className="bg-white rounded-lg shadow overflow-hidden">
            <table className="min-w-full divide-y divide-gray-200">
              <thead className="bg-gray-50">
                <tr>
                  <th className="px-6 py-3 text-left text-xs font-medium text-gray-500 uppercase tracking-wider">Dispute ID</th>
                  <th className="px-6 py-3 text-left text-xs font-medium text-gray-500 uppercase tracking-wider">Promoter Name</th>
                  <th className="px-6 py-3 text-left text-xs font-medium text-gray-500 uppercase tracking-wider">Points</th>
                  <th className="px-6 py-3 text-left text-xs font-medium text-gray-500 uppercase tracking-wider">Submitted On</th>
                  <th className="px-6 py-3 text-left text-xs font-medium text-gray-500 uppercase tracking-wider">Reward Earned For</th>
                  <th className="px-6 py-3 text-left text-xs font-medium text-gray-500 uppercase tracking-wider">Status</th>
                  <th className="px-6 py-3 text-left text-xs font-medium text-gray-500 uppercase tracking-wider">Actions</th>
                </tr>
              </thead>
              <tbody className="bg-white divide-y divide-gray-200">
                {disputesData.map((dispute) => (
                  <tr key={dispute.id}>
                    <td className="px-6 py-4 whitespace-nowrap text-sm text-gray-500">{dispute.id}</td>
                    <td className="px-6 py-4 whitespace-nowrap text-sm font-medium text-gray-900">{dispute.name}</td>
                    <td className="px-6 py-4 whitespace-nowrap text-sm text-gray-500">{dispute.points} pts</td>
                    <td className="px-6 py-4 whitespace-nowrap text-sm text-gray-500">{dispute.date}</td>
                    <td className="px-6 py-4 whitespace-nowrap text-sm text-gray-500">{dispute.reward}</td>
                    <td className="px-6 py-4 whitespace-nowrap">
                      <span className={`px-2 inline-flex text-xs leading-5 font-semibold rounded-full ${getStatusColor(dispute.status)}`}>
                        {dispute.status}
                      </span>
                    </td>
                    <td className="px-6 py-4 whitespace-nowrap text-sm text-gray-500">
                      <div className="flex items-center">
                        <button className="text-blue-600 hover:text-blue-800 flex items-center">
                          <svg className="w-4 h-4 mr-1" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                            <path strokeLinecap="round" strokeLinejoin="round" strokeWidth="2" d="M15 12a3 3 0 11-6 0 3 3 0 016 0z" />
                            <path strokeLinecap="round" strokeLinejoin="round" strokeWidth="2" d="M2.458 12C3.732 7.943 7.523 5 12 5c4.478 0 8.268 2.943 9.542 7-1.274 4.057-5.064 7-9.542 7-4.477 0-8.268-2.943-9.542-7z" />
                          </svg>
                          {dispute.status === 'Under Review' ? 'Resolve' : 'View'}
                        </button>
                      </div>
                    </td>
                  </tr>
                ))}
              </tbody>
            </table>
          </div>
        </div>
      )}

      {/* Payout Settings Tab */}
      {activeTab === 'settings' && (
        <div>
          <div className="flex justify-between items-center mb-4">
            <h2 className="text-lg font-medium">Payout Settings</h2>
          </div>

          <div className="bg-white rounded-lg shadow p-6">
            <div className="mb-6">
              <div className="flex justify-between items-center mb-2">
                <h3 className="font-medium">Preload Money</h3>
                <div className="relative inline-block w-12 mr-2 align-middle select-none">
                  <input type="checkbox" id="toggle" className="sr-only" checked />
                  <div className="block bg-blue-500 w-12 h-6 rounded-full"></div>
                  <div className="dot absolute left-1 top-1 bg-white w-4 h-4 rounded-full transition transform translate-x-6"></div>
                </div>
              </div>
              <p className="text-sm text-gray-500">Use Points to Reward Promoters Instantly</p>
            </div>

            <div className="mb-6 bg-green-50 p-4 rounded-md">
              <p className="text-sm">Current Point Balance: <span className="font-semibold">1,250 Points</span></p>
            </div>

            <div className="mb-6">
              <label className="block text-sm font-medium text-gray-700 mb-1">Enter Amount</label>
              <input 
                type="text" 
                placeholder="Enter amount..." 
                className="w-full border border-gray-300 rounded-md px-3 py-2 focus:outline-none focus:ring-1 focus:ring-blue-500"
              />
              <p className="text-xs text-gray-500 mt-1">You'll receive 10 points per $1</p>
            </div>

            <div className="mb-6">
              <label className="block text-sm font-medium text-gray-700 mb-2">Payment Methods</label>
              <div className="space-y-2">
                <div className="flex items-center">
                  <input type="radio" id="card" name="payment" className="h-4 w-4 text-blue-600" checked />
                  <label htmlFor="card" className="ml-2 text-sm text-gray-700">Credit/Debit/ATM Card</label>
                </div>
                <div className="flex items-center">
                  <input type="radio" id="payroll" name="payment" className="h-4 w-4 text-blue-600" />
                  <label htmlFor="payroll" className="ml-2 text-sm text-gray-700">Payroll account</label>
                </div>
                <div className="flex items-center">
                  <input type="radio" id="bank" name="payment" className="h-4 w-4 text-blue-600" />
                  <label htmlFor="bank" className="ml-2 text-sm text-gray-700">Bank Transfer</label>
                </div>
                <div className="flex items-center">
                  <input type="radio" id="upi" name="payment" className="h-4 w-4 text-blue-600" />
                  <label htmlFor="upi" className="ml-2 text-sm text-gray-700">UPI</label>
                </div>
              </div>
            </div>

            <button className="bg-blue-600 text-white px-4 py-2 rounded-md hover:bg-blue-700 transition">
              Buy Points
            </button>
          </div>
        </div>
      )}
    </div>
  );
};

export default Payouts;