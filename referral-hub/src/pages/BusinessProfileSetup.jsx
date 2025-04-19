import React, { useState } from 'react';
import { useNavigate } from 'react-router-dom';
import SetupProgress from '../components/SetupProgress';
import Button from '../components/Button';

function BusinessProfileSetup({ goToNextStep, markStepComplete }) {
  const navigate = useNavigate();
  const [formData, setFormData] = useState({
    businessName: '',
    businessEmail: '',
    businessPhone: '',
    businessDescription: '',
    services: '',
    products: '',
    industry: '',
    companySize: '',
    city: '',
    state: '',
    zipCode: ''
  });

  const steps = [
    { id: 1, name: 'Set Up Business Profile' },
    { id: 2, name: 'Sync Your Customer Data' },
    { id: 3, name: 'Set Up AI Agent Rules' },
    { id: 4, name: 'Set Up First Campaign' },
  ];

  const handleInputChange = (e) => {
    const { name, value } = e.target;
    setFormData({ ...formData, [name]: value });
  };

  const handleSubmit = (e) => {
    e.preventDefault();
    markStepComplete();
    goToNextStep();
    navigate('/sync-customer-data');
  };

  return (
    <div className="max-w-4xl mx-auto">
      <div className="bg-white p-8 rounded-lg shadow-sm">
        <div className="flex">
          <div className="w-1/3 border-r border-gray-200 pr-8">
            <SetupProgress 
              steps={steps} 
              currentStep={1} 
              completedSteps={[]} 
            />
          </div>
          <div className="w-2/3 pl-8">
            <h2 className="text-xl font-medium mb-6">Build Your Business Identity</h2>
            <p className="text-sm text-gray-600 mb-6">
              Help us tailor the referral experience by adding key details about your business.
            </p>
            
            <form onSubmit={handleSubmit}>
              <div className="mb-4">
                <label className="block text-sm font-medium mb-1">Business Logo</label>
                <button className="px-4 py-2 bg-white border border-gray-300 rounded-md text-sm text-gray-700 hover:bg-gray-50">
                  Choose Image
                </button>
              </div>
              
              <div className="mb-4">
                <label className="block text-sm font-medium mb-1">Business Description</label>
                <textarea 
                  name="businessDescription"
                  value={formData.businessDescription}
                  onChange={handleInputChange}
                  placeholder="Enter business description..."
                  className="w-full border border-gray-300 rounded-md p-2 text-sm"
                  rows="4"
                />
              </div>
              
              <div className="grid grid-cols-2 gap-4 mb-4">
                <div>
                  <label className="block text-sm font-medium mb-1">Business Name</label>
                  <input 
                    type="text" 
                    name="businessName"
                    value={formData.businessName}
                    onChange={handleInputChange}
                    placeholder="Enter business name"
                    className="w-full border border-gray-300 rounded-md p-2 text-sm"
                  />
                </div>
                <div>
                  <label className="block text-sm font-medium mb-1">Business Email</label>
                  <input 
                    type="email" 
                    name="businessEmail"
                    value={formData.businessEmail}
                    onChange={handleInputChange}
                    placeholder="e.g. contact@company.com"
                    className="w-full border border-gray-300 rounded-md p-2 text-sm"
                  />
                </div>
              </div>
              
              <div className="grid grid-cols-2 gap-4 mb-4">
                <div>
                  <label className="block text-sm font-medium mb-1">Business Phone No.</label>
                  <input 
                    type="text" 
                    name="businessPhone"
                    value={formData.businessPhone}
                    onChange={handleInputChange}
                    placeholder="Enter phone no."
                    className="w-full border border-gray-300 rounded-md p-2 text-sm"
                  />
                </div>
                <div>
                  <label className="block text-sm font-medium mb-1">Industry</label>
                  <select 
                    name="industry"
                    value={formData.industry}
                    onChange={handleInputChange}
                    className="w-full border border-gray-300 rounded-md p-2 text-sm"
                  >
                    <option value="">Select</option>
                    <option value="retail">Retail</option>
                    <option value="saas">SaaS / Software</option>
                    <option value="healthcare">Healthcare</option>
                    <option value="fitness">Fitness & Wellness</option>
                  </select>
                </div>
              </div>
              
              <div className="grid grid-cols-2 gap-4 mb-4">
                <div>
                  <label className="block text-sm font-medium mb-1">Services</label>
                  <input 
                    type="text" 
                    name="services"
                    value={formData.services}
                    onChange={handleInputChange}
                    placeholder="Enter services"
                    className="w-full border border-gray-300 rounded-md p-2 text-sm"
                  />
                </div>
                <div>
                  <label className="block text-sm font-medium mb-1">Products</label>
                  <input 
                    type="text" 
                    name="products"
                    value={formData.products}
                    onChange={handleInputChange}
                    placeholder="Enter products"
                    className="w-full border border-gray-300 rounded-md p-2 text-sm"
                  />
                </div>
              </div>
              
              <div className="grid grid-cols-2 gap-4 mb-4">
                <div>
                  <label className="block text-sm font-medium mb-1">Company Size (Optional)</label>
                  <select 
                    name="companySize"
                    value={formData.companySize}
                    onChange={handleInputChange}
                    className="w-full border border-gray-300 rounded-md p-2 text-sm"
                  >
                    <option value="">Select</option>
                    <option value="1-10">1-10</option>
                    <option value="11-50">11-50</option>
                    <option value="51-200">51-200</option>
                    <option value="201+">201+</option>
                  </select>
                </div>
                <div>
                  <label className="block text-sm font-medium mb-1">City</label>
                  <select 
                    name="city"
                    value={formData.city}
                    onChange={handleInputChange}
                    className="w-full border border-gray-300 rounded-md p-2 text-sm"
                  >
                    <option value="">Select</option>
                    <option value="new-york">New York</option>
                    <option value="los-angeles">Los Angeles</option>
                    <option value="chicago">Chicago</option>
                    <option value="houston">Houston</option>
                  </select>
                </div>
              </div>
              
              <div className="grid grid-cols-2 gap-4 mb-4">
                <div>
                  <label className="block text-sm font-medium mb-1">State</label>
                  <select 
                    name="state"
                    value={formData.state}
                    onChange={handleInputChange}
                    className="w-full border border-gray-300 rounded-md p-2 text-sm"
                  >
                    <option value="">Select</option>
                    <option value="ny">New York</option>
                    <option value="ca">California</option>
                    <option value="tx">Texas</option>
                    <option value="fl">Florida</option>
                  </select>
                </div>
                <div>
                  <label className="block text-sm font-medium mb-1">Zip Code</label>
                  <input 
                    type="text" 
                    name="zipCode"
                    value={formData.zipCode}
                    onChange={handleInputChange}
                    placeholder="Enter zip code"
                    className="w-full border border-gray-300 rounded-md p-2 text-sm"
                  />
                </div>
              </div>
              
              <div className="mt-8 flex justify-between items-center">
                <Button primary type="submit">Next</Button>
              </div>
            </form>
          </div>
        </div>
      </div>
    </div>
  );
}

export default BusinessProfileSetup;