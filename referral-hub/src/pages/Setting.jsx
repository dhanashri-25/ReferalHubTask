import React, { useState } from 'react';
import { ChevronDown, Edit, Download, Edit2 } from 'lucide-react';

const Settings = () => {
  const [activeTab, setActiveTab] = useState('User Profile');
  const [paymentMethod, setPaymentMethod] = useState('credit');

  const tabs = [
    'User Profile',
    'Business Profile',
    'All Settings',
    'Email & Phone Setup',
    'Subscription & Usage'
  ];

  // Sample user data
  const userData = {
    name: 'Kapil Stanton',
    phone: '1234567890',
    email: 'kapilstanton@gmail.com',
  };

  // Sample billing history
  const billingHistory = [
    { plan: 'Standard Plan', amount: '$25', date: '15/03/2024', status: 'Pending' },
    { plan: 'Standard Plan', amount: '$25', date: '15/02/2024', status: 'Paid' },
    { plan: 'Standard Plan', amount: '$25', date: '15/01/2024', status: 'Paid' },
    { plan: 'Standard Plan', amount: '$25', date: '15/12/2024', status: 'Paid' },
  ];

  const renderUserProfile = () => (
    <div className="p-6 bg-white rounded-md">
      <div className="flex justify-between items-center mb-6">
        <h2 className="text-lg font-medium">Profile</h2>
        <div className="flex items-center">
          <div className="bg-gray-200 rounded-full w-8 h-8"></div>
          <Edit2 className="ml-2 w-4 h-4 text-blue-500" />
        </div>
      </div>

      <div className="space-y-6">
        <div className="flex justify-between items-center">
          <span className="text-gray-600">User Name</span>
          <div className="flex items-center">
            <span>{userData.name}</span>
            <Edit2 className="ml-2 w-4 h-4 text-blue-500" />
          </div>
        </div>

        <div className="flex justify-between items-center">
          <span className="text-gray-600">User Phone</span>
          <span>{userData.phone}</span>
        </div>

        <div className="flex justify-between items-center">
          <span className="text-gray-600">Email</span>
          <span>{userData.email}</span>
        </div>

        <div className="flex justify-between items-center">
          <span className="text-gray-600">Password</span>
          <div className="flex items-center">
            <span>••••••••</span>
            <button className="ml-2 text-blue-500 text-sm">Change Password</button>
          </div>
        </div>

        <div className="flex space-x-3 mt-8">
          <button className="border border-red-500 text-red-500 px-4 py-2 rounded-md">Delete Account</button>
          <button className="bg-red-500 text-white px-8 py-2 rounded-md">Sign Out</button>
        </div>
      </div>
    </div>
  );

  const renderBusinessProfile = () => (
    <div className="p-6 bg-white rounded-md">
      <h2 className="text-lg font-medium mb-6">Business Logo</h2>
      <button className="text-blue-500 mb-6">Choose Image</button>

      <div className="space-y-6">
        <div>
          <label className="block text-gray-600 mb-2">Business Description</label>
          <textarea className="w-full border rounded-md p-2" placeholder="Enter description..." rows={4}></textarea>
        </div>

        <div className="grid grid-cols-2 gap-4">
          <div>
            <label className="block text-gray-600 mb-2">Business Name</label>
            <input type="text" className="w-full border rounded-md p-2" placeholder="Enter business name" />
          </div>
          <div>
            <label className="block text-gray-600 mb-2">Business Email</label>
            <input type="email" className="w-full border rounded-md p-2" placeholder="e.g. email@business.com" />
          </div>
        </div>

        <div className="grid grid-cols-2 gap-4">
          <div>
            <label className="block text-gray-600 mb-2">Business Phone No.</label>
            <input type="text" className="w-full border rounded-md p-2" placeholder="Enter phone number" />
          </div>
          <div>
            <label className="block text-gray-600 mb-2">Industry</label>
            <div className="relative">
              <select className="w-full border rounded-md p-2 appearance-none">
                <option>Select</option>
              </select>
              <ChevronDown className="absolute right-2 top-3 w-4 h-4" />
            </div>
          </div>
        </div>

        <div className="grid grid-cols-2 gap-4">
          <div>
            <label className="block text-gray-600 mb-2">Services</label>
            <input type="text" className="w-full border rounded-md p-2" placeholder="Enter services..." />
          </div>
          <div>
            <label className="block text-gray-600 mb-2">Products</label>
            <input type="text" className="w-full border rounded-md p-2" placeholder="Enter products..." />
          </div>
        </div>

        <div className="grid grid-cols-2 gap-4">
          <div>
            <label className="block text-gray-600 mb-2">Company Size (Optional)</label>
            <div className="relative">
              <select className="w-full border rounded-md p-2 appearance-none">
                <option>Select</option>
              </select>
              <ChevronDown className="absolute right-2 top-3 w-4 h-4" />
            </div>
          </div>
          <div>
            <label className="block text-gray-600 mb-2">City</label>
            <div className="relative">
              <select className="w-full border rounded-md p-2 appearance-none">
                <option>Select</option>
              </select>
              <ChevronDown className="absolute right-2 top-3 w-4 h-4" />
            </div>
          </div>
        </div>

        <div className="grid grid-cols-2 gap-4">
          <div>
            <label className="block text-gray-600 mb-2">State</label>
            <div className="relative">
              <select className="w-full border rounded-md p-2 appearance-none">
                <option>Select</option>
              </select>
              <ChevronDown className="absolute right-2 top-3 w-4 h-4" />
            </div>
          </div>
          <div>
            <label className="block text-gray-600 mb-2">Zip Code</label>
            <input type="text" className="w-full border rounded-md p-2" placeholder="Enter zip code" />
          </div>
        </div>

        <div className="flex justify-center mt-4">
          <button className="bg-blue-500 text-white px-12 py-2 rounded-md">Save</button>
        </div>
      </div>
    </div>
  );

  const renderEmailPhoneSetup = () => (
    <div className="p-6 bg-white rounded-md">
      <h2 className="text-lg font-medium mb-6">Global Email Sending Address</h2>
      <p className="text-gray-500 mb-4">Choose how your outgoing emails (contact forms, follow-ups, etc.) are sent from the platform.</p>

      <div className="space-y-6">
        <div className="flex items-start space-x-2">
          <input type="radio" id="systemEmail" name="emailSetup" className="mt-1" checked />
          <div>
            <label htmlFor="systemEmail" className="block font-medium">Use System Email</label>
            <p className="text-gray-500 text-sm">Emails will be sent using BatchStack default system address (e.g., no-reply@batchstack.com)</p>
          </div>
        </div>

        <div className="flex items-start space-x-2">
          <input type="radio" id="customDomain" name="emailSetup" className="mt-1" />
          <div>
            <label htmlFor="customDomain" className="block font-medium">Connect Your Custom Email Domain</label>
            <p className="text-gray-500 text-sm">Improve deliverability and brand recognition by sending from your own domain (e.g., you@yourcompany.com)</p>
          </div>
        </div>

        <button className="border border-blue-500 text-blue-500 px-4 py-2 rounded-md">Connect Email Domain</button>

        <h2 className="text-lg font-medium mt-8 mb-6">Global SMS Sending Number</h2>
        <p className="text-gray-500 mb-4">Choose how SMS (reminders, updates, followups) are sent to your customers.</p>

        <div className="flex items-start space-x-2">
          <input type="radio" id="systemPhone" name="phoneSetup" className="mt-1" checked />
          <div>
            <label htmlFor="systemPhone" className="block font-medium">Use System Phone Number</label>
            <p className="text-gray-500 text-sm">Messages will be sent from a shared number owned by BatchStack.</p>
          </div>
        </div>

        <div className="flex items-start space-x-2">
          <input type="radio" id="customPhone" name="phoneSetup" className="mt-1" />
          <div>
            <label htmlFor="customPhone" className="block font-medium">Connect Your Own Phone Number</label>
            <p className="text-gray-500 text-sm">Use a verified number for better brand trust and consistency.</p>
          </div>
        </div>

        <button className="border border-blue-500 text-blue-500 px-4 py-2 rounded-md">Connect Phone Number</button>
      </div>
    </div>
  );

  const renderSubscriptionUsage = () => (
    <div className="p-6 bg-white rounded-md">
      <h2 className="text-lg font-medium mb-6">Current Plan</h2>

      <div className="space-y-6">
        <div className="flex justify-between">
          <div>
            <p>Your Current Plan is Basic</p>
            <p className="text-gray-500">Active until N/A</p>
            <p className="text-gray-500">We will send you a notification upon before/when expiration</p>
            <p className="text-gray-500">$25 Per Month - <span className="text-blue-500">Annual</span></p>
            <p className="text-gray-500">Provides path for small to medium businesses</p>
          </div>
          <div>
            <p className="text-blue-500">Basic</p>
            <p>14 of 30 Days</p>
          </div>
        </div>

        <button className="bg-red-100 text-red-500 px-4 py-2 rounded-md">Cancel Subscription</button>

        <h2 className="text-lg font-medium mt-8 mb-6">Payment Methods</h2>

        <div className="flex space-x-4 mb-6">
          <div className="flex items-center">
            <input 
              type="radio" 
              id="creditCard" 
              name="paymentMethod" 
              checked={paymentMethod === 'credit'} 
              onChange={() => setPaymentMethod('credit')} 
            />
            <label htmlFor="creditCard" className="ml-2">Credit/Debit/ATM Card</label>
          </div>
          <div className="flex items-center">
            <input 
              type="radio" 
              id="paypal" 
              name="paymentMethod" 
              checked={paymentMethod === 'paypal'} 
              onChange={() => setPaymentMethod('paypal')} 
            />
            <label htmlFor="paypal" className="ml-2">Paypal account</label>
          </div>
        </div>

        {paymentMethod === 'credit' && (
          <div className="border p-4 rounded-md mb-6">
            <div className="grid grid-cols-2 gap-4 mb-4">
              <div>
                <label className="block text-gray-600 mb-1 text-sm">Card Number</label>
                <input type="text" className="w-full border rounded-md p-2" placeholder="xxxx xxxx xxxx xxxx" />
              </div>
              <div className="grid grid-cols-2 gap-2">
                <div>
                  <label className="block text-gray-600 mb-1 text-sm">CVV</label>
                  <input type="text" className="w-full border rounded-md p-2" placeholder="xxx" />
                </div>
                <div>
                  <label className="block text-gray-600 mb-1 text-sm">Expiry Date</label>
                  <input type="text" className="w-full border rounded-md p-2" placeholder="MM/YY" />
                </div>
              </div>
            </div>
            <div className="flex space-x-4">
              <button className="bg-blue-500 text-white px-6 py-2 rounded-md">Save Changes</button>
              <button className="border border-gray-300 px-6 py-2 rounded-md">Cancel</button>
            </div>
          </div>
        )}

        <div className="mt-6">
          <div className="flex items-center justify-between mb-2">
            <h3 className="font-medium">My Cards</h3>
            <button className="text-blue-500 text-sm">+ Add</button>
          </div>
          
          <div className="flex space-x-4 mb-6">
            <div className="border rounded-md p-4 w-32 h-16 relative">
              <div className="bg-red-500 w-8 h-5 rounded absolute right-2 top-2"></div>
              <p className="text-xs text-gray-500 absolute bottom-2">**** 4521</p>
            </div>
            <div className="border rounded-md p-4 w-32 h-16 relative">
              <div className="bg-blue-500 w-8 h-5 rounded absolute right-2 top-2"></div>
              <p className="text-xs text-gray-500 absolute bottom-2">**** 8901</p>
            </div>
          </div>
        </div>

        <h2 className="text-lg font-medium mt-8 mb-6">Billing History</h2>
        
        <table className="w-full mb-6">
          <thead>
            <tr className="text-left">
              <th className="pb-2">Plan Name</th>
              <th className="pb-2">Amount</th>
              <th className="pb-2">Invoice Date</th>
              <th className="pb-2">Status</th>
              <th className="pb-2">Actions</th>
            </tr>
          </thead>
          <tbody>
            {billingHistory.map((item, index) => (
              <tr key={index} className="border-t">
                <td className="py-3">{item.plan}</td>
                <td className="py-3">{item.amount}</td>
                <td className="py-3">{item.date}</td>
                <td className="py-3">
                  <span className={`px-2 py-1 rounded text-xs ${
                    item.status === 'Paid' ? 'bg-green-100 text-green-600' : 'bg-yellow-100 text-yellow-600'
                  }`}>
                    {item.status}
                  </span>
                </td>
                <td className="py-3">
                  <Download className="w-4 h-4 cursor-pointer" />
                </td>
              </tr>
            ))}
          </tbody>
        </table>

        <div className="flex justify-center space-x-2">
          <button className="w-8 h-8 bg-blue-500 text-white rounded flex items-center justify-center">1</button>
          <button className="w-8 h-8 bg-white text-gray-700 border rounded flex items-center justify-center">2</button>
          <button className="w-8 h-8 bg-white text-gray-700 border rounded flex items-center justify-center">3</button>
          <button className="w-8 h-8 bg-white text-gray-700 border rounded flex items-center justify-center">4</button>
          <button className="w-8 h-8 bg-white text-gray-700 border rounded flex items-center justify-center">5</button>
        </div>
      </div>
    </div>
  );

  const renderAllSettings = () => (
    <div className="p-6 bg-white rounded-md">
      <h2 className="text-lg font-medium mb-6">All Settings</h2>
      <p>General settings and configurations would go here.</p>
    </div>
  );

  const renderContent = () => {
    switch (activeTab) {
      case 'User Profile':
        return renderUserProfile();
      case 'Business Profile':
        return renderBusinessProfile();
      case 'Email & Phone Setup':
        return renderEmailPhoneSetup();
      case 'Subscription & Usage':
        return renderSubscriptionUsage();
      case 'All Settings':
        return renderAllSettings();
      default:
        return renderUserProfile();
    }
  };

  return (
    <div className=" mx-auto bg-gray-50 min-h-screen">
      <div className="bg-white border-b">
        <div className="flex overflow-x-auto">
          {tabs.map((tab) => (
            <button
              key={tab}
              onClick={() => setActiveTab(tab)}
              className={`px-4 py-3 whitespace-nowrap ${
                activeTab === tab 
                  ? 'border-b-2 border-blue-500 text-blue-500 font-medium' 
                  : 'text-gray-600'
              }`}
            >
              {tab}
            </button>
          ))}
        </div>
      </div>
      
      <div className="p-4">
        {renderContent()}
      </div>
    </div>
  );
};

export default Settings;