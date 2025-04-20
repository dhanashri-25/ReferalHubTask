import React, { useState } from 'react';
import { Eye, Trash2, Plus } from 'lucide-react';

const Campaign = () => {
  const [activeTab, setActiveTab] = useState('past');
  const [campaigns] = useState([
    {
      id: 1,
      name: 'Summer Referral Program',
      status: 'active',
      dateRange: '5/31/2024 - 8/30/2024',
      referrals: 245,
      conversion: 32,
      roi: 287,
      suggestion: 'Increase reward by 10% to boost conversion rates during peak season'
    },
    {
      id: 2,
      name: 'Early Bird Special',
      status: 'inactive',
      dateRange: '8/20/2024 - 9/19/2024',
      referrals: 300,
      conversion: 40,
      roi: 320,
      suggestion: 'Extend your campaign! Strong engagement suggests higher conversions with more time.'
    }
  ]);

  return (
    <div className="bg-gray-50 min-h-screen p-8">
      {/* Tabs */}
      <div className="flex mb-8">
        <button 
          className={`px-8 py-2 rounded-md ${activeTab === 'past' ? 'bg-blue-100 text-blue-600' : 'bg-white text-gray-500'}`}
          onClick={() => setActiveTab('past')}
        >
          Past Promoters
        </button>
        <button 
          className={`px-8 py-2 rounded-md ${activeTab === 'new' ? 'bg-blue-100 text-blue-600' : 'bg-white text-gray-500'} mx-2`}
          onClick={() => setActiveTab('new')}
        >
          New Promoters
        </button>
        <button 
          className={`px-8 py-2 rounded-md ${activeTab === 'leads' ? 'bg-blue-100 text-blue-600' : 'bg-white text-gray-500'}`}
          onClick={() => setActiveTab('leads')}
        >
          New Leads
        </button>
      </div>

      {/* Action buttons */}
      <div className="flex justify-between mb-6">
        <button className="flex items-center bg-blue-500 text-white px-4 py-2 rounded-md">
          <Plus size={18} className="mr-2" />
          Create New Campaign
        </button>
        <div className="flex">
          <div className="relative mr-2">
            <input
              type="text"
              placeholder="Search campaigns..."
              className="pl-4 pr-10 py-2 border border-gray-300 rounded-md w-64"
            />
            <span className="absolute right-3 top-2.5 text-gray-400">
              <svg width="16" height="16" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round">
                <circle cx="11" cy="11" r="8"></circle>
                <line x1="21" y1="21" x2="16.65" y2="16.65"></line>
              </svg>
            </span>
          </div>
          <button className="flex items-center bg-white border border-gray-300 px-4 py-2 rounded-md">
            <svg width="16" height="16" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round">
              <polygon points="22 3 2 3 10 12.46 10 19 14 21 14 12.46 22 3"></polygon>
            </svg>
            <span className="ml-2">Filter</span>
          </button>
        </div>
      </div>

      {/* Campaign stats */}
      <div className="text-sm text-gray-500 mb-4">
        2 Campaigns • 1 Active
      </div>

      {/* Campaign cards */}
      <div className="grid grid-cols-1 md:grid-cols-2 gap-6">
        {campaigns.map(campaign => (
          <div key={campaign.id} className="bg-white rounded-lg p-6 shadow-sm">
            <div className="flex justify-between items-start mb-4">
              <div>
                <h3 className="text-lg font-medium mb-1">{campaign.name}</h3>
                <p className="text-sm text-gray-500">{campaign.dateRange}</p>
              </div>
              <span className={`px-3 py-1 rounded-full text-xs ${campaign.status === 'active' ? 'bg-blue-100 text-blue-600' : 'bg-gray-100 text-gray-500'}`}>
                {campaign.status.charAt(0).toUpperCase() + campaign.status.slice(1)}
              </span>
            </div>

            <div className="grid grid-cols-3 gap-4 mb-6 border-t border-b border-gray-100 py-4">
              <div>
                <p className="text-sm text-gray-500 mb-1">Referrals</p>
                <p className="text-xl font-semibold">{campaign.referrals}</p>
              </div>
              <div>
                <p className="text-sm text-gray-500 mb-1">Conversion</p>
                <p className="text-xl font-semibold">{campaign.conversion}%</p>
              </div>
              <div>
                <p className="text-sm text-gray-500 mb-1">ROI</p>
                <p className="text-xl font-semibold">{campaign.roi}%</p>
              </div>
            </div>

            <div className="bg-blue-50 rounded-md p-4 mb-4 flex items-start">
              <svg className="text-blue-600 mt-1 mr-2" width="16" height="16" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round">
                <circle cx="12" cy="12" r="10"></circle>
                <line x1="12" y1="8" x2="12" y2="12"></line>
                <line x1="12" y1="16" x2="12.01" y2="16"></line>
              </svg>
              <p className="text-sm text-gray-700">{campaign.suggestion}</p>
            </div>

            <div className="flex justify-between">
              <button className="text-red-500 hover:text-red-700">
                <Trash2 size={18} />
              </button>
              <button className="text-gray-500 hover:text-gray-700">
                <Eye size={18} />
              </button>
            </div>
          </div>
        ))}
      </div>

      {/* Campaign settings form (visible when in specific tabs) */}
      {activeTab === 'new' && (
        <div className="bg-white rounded-lg p-6 mt-8 shadow-sm">
          <div className="flex mb-6">
            <button className="px-4 py-2 text-sm border-b-2 border-transparent">Past Promoters</button>
            <button className="px-4 py-2 text-sm border-b-2 border-blue-500 text-blue-600">New Promoters</button>
            <button className="px-4 py-2 text-sm border-b-2 border-transparent">New Leads</button>
          </div>

          <div className="mb-6">
            <h3 className="font-medium mb-4">Promoter Settings</h3>
            
            <div className="mb-4">
              <label className="block text-sm text-gray-600 mb-2">Campaign Name</label>
              <input 
                type="text" 
                value="Summer Referral Special" 
                className="w-full p-2 border border-gray-300 rounded-md"
              />
            </div>

            <div className="grid grid-cols-2 gap-4 mb-4">
              <div>
                <label className="block text-sm text-gray-600 mb-2">Reward Type*</label>
                <div className="flex">
                  <button className="px-3 py-1 bg-blue-100 text-blue-600 rounded-md text-sm">Points</button>
                  <button className="px-3 py-1 text-gray-600 rounded-md text-sm ml-2">Cash</button>
                </div>
              </div>
              <div>
                <label className="block text-sm text-gray-600 mb-2">Reward Value*</label>
                <input 
                  type="number" 
                  value="200"
                  className="w-full p-2 border border-gray-300 rounded-md"
                />
                <span className="text-xs text-gray-500">points</span>
              </div>
            </div>

            <div className="mb-4">
              <label className="block text-sm text-gray-600 mb-2">Promoter Message*</label>
              <textarea 
                className="w-full p-2 border border-gray-300 rounded-md"
                rows="3"
                value="Hey! Share this with your friends and get $20 for each successful signup!"
              ></textarea>
            </div>

            <div className="mb-4">
              <label className="block text-sm text-gray-600 mb-2">Follow-Up Strategy*</label>
              <div className="bg-blue-50 p-4 rounded-md">
                <div className="flex justify-between items-center py-2 border-b border-blue-100">
                  <div className="flex items-center">
                    <span className="w-6 h-6 mr-2 bg-green-100 rounded-md flex items-center justify-center text-green-600">
                      <svg width="14" height="14" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round">
                        <path d="M21 15a2 2 0 0 1-2 2H7l-4 4V5a2 2 0 0 1 2-2h14a2 2 0 0 1 2 2z"></path>
                      </svg>
                    </span>
                    <span>SMS</span>
                  </div>
                  <div className="flex">
                    <button className="w-5 h-5 bg-white rounded border border-gray-300 flex items-center justify-center mr-2">
                      <svg width="12" height="12" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round">
                        <path d="M11 4H4a2 2 0 0 0-2 2v14a2 2 0 0 0 2 2h14a2 2 0 0 0 2-2v-7"></path>
                        <path d="M18.5 2.5a2.121 2.121 0 0 1 3 3L12 15l-4 1 1-4 9.5-9.5z"></path>
                      </svg>
                    </button>
                    <button className="w-5 h-5 bg-white rounded border border-red-300 flex items-center justify-center text-red-500">
                      <svg width="12" height="12" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round">
                        <path d="M18 6L6 18"></path>
                        <path d="M6 6L18 18"></path>
                      </svg>
                    </button>
                  </div>
                </div>
                
                {/* Additional follow-up steps would go here, similar to the first one */}
              </div>
            </div>
          </div>

          <div className="mb-6">
            <h3 className="font-medium mb-4">Landing Page Preview</h3>
            <div className="border border-gray-200 rounded-md p-4">
              <div className="flex justify-between text-sm text-gray-500 mb-4">
                <div className="flex space-x-4">
                  <span className="text-blue-600">Preview</span>
                  <span>No leads</span>
                  <span>No Rewards</span>
                </div>
                <div className="flex space-x-2">
                  <button className="w-6 h-6 rounded-full bg-white border border-gray-200 flex items-center justify-center">
                    <svg width="14" height="14" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round">
                      <rect x="3" y="3" width="18" height="18" rx="2" ry="2"></rect>
                      <line x1="9" y1="3" x2="9" y2="21"></line>
                    </svg>
                  </button>
                  <button className="w-6 h-6 rounded-full bg-white border border-gray-200 flex items-center justify-center">
                    <svg width="14" height="14" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round">
                      <circle cx="12" cy="12" r="10"></circle>
                      <line x1="12" y1="8" x2="12" y2="16"></line>
                      <line x1="8" y1="12" x2="16" y2="12"></line>
                    </svg>
                  </button>
                </div>
              </div>
              
              <div className="bg-gray-100 p-6 rounded-md text-center">
                <h4 className="font-medium mb-2">Welcome back! You're promoting:</h4>
                <h3 className="font-bold mb-4">SnackNation Express</h3>
                <p className="text-sm text-gray-600 mb-4">SnackNation delivers fresh snacks that keep remote workers energized - Everyone appreciates renewed energy</p>
                <p className="text-sm mb-6">Every successful referral earns you 200 points</p>
                <button className="bg-blue-500 text-white px-4 py-2 rounded-md mb-6">Start Promoting 》</button>
              </div>
            </div>
          </div>

          <div className="flex justify-center">
            <button className="bg-blue-500 text-white px-10 py-2 rounded-md">Save</button>
          </div>
        </div>
      )}

      {/* Leads settings */}
      {activeTab === 'leads' && (
        <div className="bg-white rounded-lg p-6 mt-8 shadow-sm">
          <div className="flex mb-6">
            <button className="px-4 py-2 text-sm border-b-2 border-transparent">Past Promoter</button>
            <button className="px-4 py-2 text-sm border-b-2 border-transparent">New Promoter</button>
            <button className="px-4 py-2 text-sm border-b-2 border-blue-500 text-blue-600">New Leads</button>
          </div>

          <div className="mb-6">
            <h3 className="font-medium mb-4">Leads Settings</h3>
            
            <div className="mb-4">
              <label className="block text-sm text-gray-600 mb-2">Follow-Up Strategy*</label>
              <div className="bg-blue-50 p-4 rounded-md">
                {/* First step */}
                <div className="flex justify-between items-center py-2 border-b border-blue-100">
                  <div className="flex items-center">
                    <span className="w-6 h-6 mr-2 bg-green-100 rounded-md flex items-center justify-center text-green-600">
                      <svg width="14" height="14" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round">
                        <path d="M21 15a2 2 0 0 1-2 2H7l-4 4V5a2 2 0 0 1 2-2h14a2 2 0 0 1 2 2z"></path>
                      </svg>
                    </span>
                    <span>SMS</span>
                  </div>
                  <div className="flex">
                    <button className="w-5 h-5 bg-white rounded border border-gray-300 flex items-center justify-center mr-2">
                      <svg width="12" height="12" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round">
                        <path d="M11 4H4a2 2 0 0 0-2 2v14a2 2 0 0 0 2 2h14a2 2 0 0 0 2-2v-7"></path>
                        <path d="M18.5 2.5a2.121 2.121 0 0 1 3 3L12 15l-4 1 1-4 9.5-9.5z"></path>
                      </svg>
                    </button>
                    <button className="w-5 h-5 bg-white rounded border border-red-300 flex items-center justify-center text-red-500">
                      <svg width="12" height="12" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round">
                        <path d="M18 6L6 18"></path>
                        <path d="M6 6L18 18"></path>
                      </svg>
                    </button>
                  </div>
                </div>

                {/* Wait step */}
                <div className="flex justify-between items-center py-2 border-b border-blue-100">
                  <div className="flex items-center">
                    <span className="w-6 h-6 mr-2 bg-blue-100 rounded-md flex items-center justify-center text-blue-600">
                      <svg width="14" height="14" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round">
                        <circle cx="12" cy="12" r="10"></circle>
                        <polyline points="12 6 12 12 16 14"></polyline>
                      </svg>
                    </span>
                    <span>Wait 3 days</span>
                  </div>
                  <div className="flex">
                    <button className="w-5 h-5 bg-white rounded border border-gray-300 flex items-center justify-center mr-2">
                      <svg width="12" height="12" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round">
                        <path d="M11 4H4a2 2 0 0 0-2 2v14a2 2 0 0 0 2 2h14a2 2 0 0 0 2-2v-7"></path>
                        <path d="M18.5 2.5a2.121 2.121 0 0 1 3 3L12 15l-4 1 1-4 9.5-9.5z"></path>
                      </svg>
                    </button>
                    <button className="w-5 h-5 bg-white rounded border border-red-300 flex items-center justify-center text-red-500">
                      <svg width="12" height="12" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round">
                        <path d="M18 6L6 18"></path>
                        <path d="M6 6L18 18"></path>
                      </svg>
                    </button>
                  </div>
                </div>

                {/* Email step */}
                <div className="flex justify-between items-center py-2 border-b border-blue-100">
                  <div className="flex items-center">
                    <span className="w-6 h-6 mr-2 bg-green-100 rounded-md flex items-center justify-center text-green-600">
                      <svg width="14" height="14" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round">
                        <path d="M4 4h16c1.1 0 2 .9 2 2v12c0 1.1-.9 2-2 2H4c-1.1 0-2-.9-2-2V6c0-1.1.9-2 2-2z"></path>
                        <polyline points="22,6 12,13 2,6"></polyline>
                      </svg>
                    </span>
                    <span>Email</span>
                  </div>
                  <div className="flex">
                    <button className="w-5 h-5 bg-white rounded border border-gray-300 flex items-center justify-center mr-2">
                      <svg width="12" height="12" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round">
                        <path d="M11 4H4a2 2 0 0 0-2 2v14a2 2 0 0 0 2 2h14a2 2 0 0 0 2-2v-7"></path>
                        <path d="M18.5 2.5a2.121 2.121 0 0 1 3 3L12 15l-4 1 1-4 9.5-9.5z"></path>
                      </svg>
                    </button>
                    <button className="w-5 h-5 bg-white rounded border border-red-300 flex items-center justify-center text-red-500">
                      <svg width="12" height="12" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round">
                        <path d="M18 6L6 18"></path>
                        <path d="M6 6L18 18"></path>
                      </svg>
                    </button>
                  </div>
                </div>

                {/* Additional follow-up steps would continue here */}
                <div className="flex justify-between items-center py-2 border-b border-blue-100">
                  <div className="flex items-center">
                    <span className="w-6 h-6 mr-2 bg-blue-100 rounded-md flex items-center justify-center text-blue-600">
                      <svg width="14" height="14" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round">
                        <circle cx="12" cy="12" r="10"></circle>
                        <polyline points="12 6 12 12 16 14"></polyline>
                      </svg>
                    </span>
                    <span>Wait 2 days</span>
                  </div>
                  <div className="flex">
                    <button className="w-5 h-5 bg-white rounded border border-gray-300 flex items-center justify-center mr-2">
                      <svg width="12" height="12" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round">
                        <path d="M11 4H4a2 2 0 0 0-2 2v14a2 2 0 0 0 2 2h14a2 2 0 0 0 2-2v-7"></path>
                        <path d="M18.5 2.5a2.121 2.121 0 0 1 3 3L12 15l-4 1 1-4 9.5-9.5z"></path>
                      </svg>
                    </button>
                    <button className="w-5 h-5 bg-white rounded border border-red-300 flex items-center justify-center text-red-500">
                      <svg width="12" height="12" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round">
                        <path d="M18 6L6 18"></path>
                        <path d="M6 6L18 18"></path>
                      </svg>
                    </button>
                  </div>
                </div>
                
                <div className="flex justify-between items-center py-2 border-b border-blue-100">
                  <div className="flex items-center">
                    <span className="w-6 h-6 mr-2 bg-green-100 rounded-md flex items-center justify-center text-green-600">
                      <svg width="14" height="14" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round">
                        <path d="M21 15a2 2 0 0 1-2 2H7l-4 4V5a2 2 0 0 1 2-2h14a2 2 0 0 1 2 2z"></path>
                      </svg>
                    </span>
                    <span>SMS</span>
                  </div>
                  <div className="flex">
                    <button className="w-5 h-5 bg-white rounded border border-gray-300 flex items-center justify-center mr-2">
                      <svg width="12" height="12" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round">
                        <path d="M11 4H4a2 2 0 0 0-2 2v14a2 2 0 0 0 2 2h14a2 2 0 0 0 2-2v-7"></path>
                        <path d="M18.5 2.5a2.121 2.121 0 0 1 3 3L12 15l-4 1 1-4 9.5-9.5z"></path>
                      </svg>
                    </button>
                    <button className="w-5 h-5 bg-white rounded border border-red-300 flex items-center justify-center text-red-500">
                      <svg width="12" height="12" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round">
                        <path d="M18 6L6 18"></path>
                        <path d="M6 6L18 18"></path>
                      </svg>
                    </button>
                  </div>
                </div>
              </div>
            </div>
          </div>
        </div>
      )}
    </div>
  );
};

export default Campaign;