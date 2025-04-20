import React, { useState } from "react";
import { Eye, Trash2, Plus, Mail, Clock2, MessageSquare } from "lucide-react";
import { PlusIcon } from "@heroicons/react/24/outline";

const Campaign = () => {
  const [activeTab, setActiveTab] = useState("past");
  const [activeTabNew, setActiveTabNew] = useState("promoter");
  const [campaigns] = useState([
    {
      id: 1,
      name: "Summer Referral Program",
      status: "active",
      dateRange: "5/31/2024 - 8/30/2024",
      referrals: 245,
      conversion: 32,
      roi: 287,
      suggestion:
        "Increase reward by 10% to boost conversion rates during peak season",
    },
    {
      id: 2,
      name: "Early Bird Special",
      status: "inactive",
      dateRange: "8/20/2024 - 9/19/2024",
      referrals: 300,
      conversion: 40,
      roi: 320,
      suggestion:
        "Extend your campaign! Strong engagement suggests higher conversions with more time.",
    },
  ]);

  return (
    <div className=" min-h-screen p-8 flex flex-col gap -10">
      <div>
        <div className="flex mb-8">
          <button
            className={`px-18 py-2 cursor-pointer ${
              activeTab === "past"
                ? "bg-blue-100 text-blue-600"
                : "bg-white text-gray-500"
            }`}
            onClick={() => setActiveTab("past")}
          >
            Past Promoters
          </button>
          <button
            className={`px-18 py-2 cursor-pointer  ${
              activeTab === "new"
                ? "bg-blue-100 text-blue-600"
                : "bg-white text-gray-500"
            } `}
            onClick={() => setActiveTab("new")}
          >
            New Promoters
          </button>
          <button
            className={`px-18 py-2 cursor-pointer ${
              activeTab === "leads"
                ? "bg-blue-100 text-blue-600"
                : "bg-white text-gray-500"
            }`}
            onClick={() => setActiveTab("leads")}
          >
            New Leads
          </button>
        </div>
      </div>

      <div className="bg-white rounded-lg p-6 shadow-sm">
        {activeTab === "past" && (
          <>
            <div className="flex justify-between mb-6">
              <button className=" flex bg-gradient-to-r from-blue-500 to-blue-200 text-white pt-1  px-8 rounded-lg text-center ">
                <Plus size={20} className="mr-2 mt-1.5" />
                <p className="mt-1 cursor-pointer">Create New Campaign</p>
              </button>
              <div className="flex">
                <div className="relative mr-2">
                  <input
                    type="text"
                    placeholder="Search campaigns..."
                    className="pl-4 pr-10 py-2 border border-gray-300 rounded-md w-64"
                  />
                  <span className="absolute right-3 top-2.5 text-gray-400">
                    <svg
                      width="16"
                      height="16"
                      viewBox="0 0 24 24"
                      fill="none"
                      stroke="currentColor"
                      strokeWidth="2"
                      strokeLinecap="round"
                      strokeLinejoin="round"
                    >
                      <circle cx="11" cy="11" r="8"></circle>
                      <line x1="21" y1="21" x2="16.65" y2="16.65"></line>
                    </svg>
                  </span>
                </div>
                <button className="flex items-center bg-white border border-gray-300 px-4 py-2 rounded-md">
                  <svg
                    width="16"
                    height="16"
                    viewBox="0 0 24 24"
                    fill="none"
                    stroke="currentColor"
                    strokeWidth="2"
                    strokeLinecap="round"
                    strokeLinejoin="round"
                  >
                    <polygon points="22 3 2 3 10 12.46 10 19 14 21 14 12.46 22 3"></polygon>
                  </svg>
                  <span className="ml-2">Filter</span>
                </button>
              </div>
            </div>

            <div className="text-sm text-blue-500 mb-4">
              2 Campaigns • 1 Active
            </div>

            <div className="grid grid-cols-1 md:grid-cols-3 gap-6">
              {campaigns.map((campaign) => (
                <div
                  key={campaign.id}
                  className="bg-gray-50 rounded-lg p-6 shadow-sm"
                >
                  <div className="flex flex-col justify-between content-center ">
                    <div>
                      <div className="flex justify-between items-start mb-4">
                        <div>
                          <h3 className="text-lg font-medium mb-1">
                            {campaign.name}
                          </h3>
                          <p className="text-sm text-gray-500">
                            {campaign.dateRange}
                          </p>
                        </div>
                        <span
                          className={`px-3 py-1 rounded-full text-xs ${
                            campaign.status === "active"
                              ? "bg-blue-100 text-blue-600"
                              : "bg-gray-100 text-gray-500"
                          }`}
                        >
                          {campaign.status.charAt(0).toUpperCase() +
                            campaign.status.slice(1)}
                        </span>
                      </div>

                      <div className="grid grid-cols-3 gap-4 mb-6 border-t border-b border-gray-100 py-4">
                        <div>
                          <p className="text-sm text-gray-500 mb-1">
                            Referrals
                          </p>
                          <p className="text-xl font-semibold">
                            {campaign.referrals}
                          </p>
                        </div>
                        <div>
                          <p className="text-sm text-gray-500 mb-1">
                            Conversion
                          </p>
                          <p className="text-xl font-semibold">
                            {campaign.conversion}%
                          </p>
                        </div>
                        <div>
                          <p className="text-sm text-gray-500 mb-1">ROI</p>
                          <p className="text-xl font-semibold">
                            {campaign.roi}%
                          </p>
                        </div>
                      </div>

                      <div className="bg-gradient-to-br from-blue-100 to-pink-100 rounded-md p-4 mb-4 flex items-start">
                        <svg
                          className="text-blue-600 mt-1 mr-2"
                          width="16"
                          height="16"
                          viewBox="0 0 24 24"
                          fill="none"
                          stroke="currentColor"
                          strokeWidth="2"
                          strokeLinecap="round"
                          strokeLinejoin="round"
                        >
                          <circle cx="12" cy="12" r="10"></circle>
                          <line x1="12" y1="8" x2="12" y2="12"></line>
                          <line x1="12" y1="16" x2="12.01" y2="16"></line>
                        </svg>
                        <p className="text-sm text-gray-700">
                          {campaign.suggestion}
                        </p>
                      </div>
                    </div>

                    <div className="flex  justify-between">
                      <button className="text-red-500 hover:text-red-700">
                        <Trash2 size={18} />
                      </button>
                      <button className="text-gray-500 hover:text-gray-700">
                        <Eye size={22} />
                      </button>
                    </div>
                  </div>
                </div>
              ))}
            </div>
          </>
        )}

        {activeTab === "new" && (
          <div className=" p-6 mt-8 ">
            <div className="mb-6">
              <div className="flex w-fit rounded-md border-2 border-gray-200">
                <button
                  onClick={() => setActiveTabNew("promoter")}
                  className={`py-3 px-10 rounded-l-md cursor-pointer ${
                    activeTabNew === "promoter"
                      ? "bg-blue-100 text-gray-800"
                      : "bg-white text-gray-500 hover:bg-gray-50"
                  }`}
                >
                  Promoter Settings
                </button>
                <button
                  onClick={() => setActiveTabNew("leads")}
                  className={`py-3 px-10 rounded-r-md cursor-pointer ${
                    activeTabNew === "leads"
                      ? "bg-blue-100 text-gray-800"
                      : "bg-white text-gray-500 hover:bg-gray-50"
                  }`}
                >
                  Leads Settings
                </button>
              </div>

             
                
              <div className="my-4">
                <div className="mb-6 bg-gray-50 rounded-lg my-8">
                  <label className=" flex text-sm bg-gray-100 rounded-t-lg rounded-b-sm font-medium p-4">
                    Campaign Name
                  </label>
                  <div className="p-4">
                    <input
                      type="text"
                      name="name"
                      value="Summer Referal Special"
                      placeholder="e.g., Summer Referral Special"
                      className="w-full border border-gray-300 rounded-md p-4 text-sm "
                    />
                  </div>
                </div>
              </div>


              {activeTabNew ==="promoter"  ? (
              <div>

              <div className="mb-6 border-1 border-gray-200 rounded-lg my-8">
                <div className="p-4">
                  <div className="grid grid-cols-2 gap-4 mb-4">
                    <div>
                      <label className="block text-gray-500  font-medium mb-2">
                        Reward Type{" "}
                        <span className="text-red-500 text-md">*</span>
                      </label>
                      <div className="bg-blue-100 text-blue-600 text-center rounded-md py-2 px-4 text-md font-semibold">
                        Points
                        <br />
                        <span className="text-sm">
                          ( $1 is equivalent to 10 points)
                        </span>
                      </div>
                    </div>
                    <div>
                      <label className="block text-gray-500  font-medium mb-2">
                        Reward Value{" "}
                        <span className="text-red-500 text-md">*</span>
                      </label>
                      <input
                        type="text"
                        name="promoterRewardValue"
                        placeholder="e.g., 200 points"
                        className="w-full border border-gray-300 rounded-md p-5 text-sm"
                      />
                    </div>
                  </div>

                  <div className="my-8">
                    <label className="block text-gray-500  font-medium mb-4">
                      Promoter Message
                      <span className="text-red-500 text-md">*</span>
                    </label>
                    <textarea
                      name="promoterMessage"
                      placeholder='e.g., "Hey! Share this with your friends and get $10 for each successful signup!"'
                      className="w-full border border-gray-300 rounded-md p-2 text-sm"
                      rows="5"
                    />
                  </div>

                  <div className="bg-gray-100 p-4 rounded-md mb-4">
                    <h4 className="text-lg font-semibold mb-2">
                      Follow-Up Strategy
                      <span className="text-red-500 text-md">*</span>
                    </h4>
                    <div className="p-12 px-86 flex flex-col ">
                      <label
                        htmlFor="promoter-sms"
                        className=" items-start flex text-md bg-white rounded-md py-3 px-4"
                      >
                        <p className="bg-green-100  rounded-sm">
                          <MessageSquare color="green" size={20} />{" "}
                        </p>
                        <span className="ml-2">SMS</span>
                      </label>

                      <div className="w-[1px] h-4 bg-gray-400 mx-auto"></div>
                      <div className="relative w-[1px] h-4 bg-gray-400 mx-auto after:content-[''] after:absolute after:top-full after:left-1/2 after:-ml-1 after:border-4 after:border-transparent after:border-t-gray-400"></div>

                      <label
                        htmlFor="promoter-wait"
                        className="mt-1 items-start flex text-md bg-white rounded-md py-3 px-4"
                      >
                        <p className="bg-blue-100 rounded-sm ">
                          <Clock2 color="blue" size={20} />{" "}
                        </p>
                        <span className="ml-2">Wait-5 Days</span>
                      </label>

                      <div className="w-[1px] h-4  bg-gray-400 mx-auto"></div>
                      <div className="relative w-[1px] h-4 bg-gray-400 mx-auto after:content-[''] after:absolute after:top-full after:left-1/2 after:-ml-1 after:border-4 after:border-transparent after:border-t-gray-400"></div>
                      <label
                        htmlFor="promoter-wait"
                        className="mt-1 items-start flex text-md bg-white rounded-md py-3 px-4"
                      >
                        <p className="bg-green-100  rounded-sm">
                          <Mail color="green" size={20} />{" "}
                        </p>
                        <span className="ml-2">Email</span>
                      </label>

                      <div className="w-[1px] h-4  bg-gray-400 mx-auto"></div>
                      <div className="relative w-[1px] h-4 bg-gray-400 mx-auto after:content-[''] after:absolute after:top-full after:left-1/2 after:-ml-1 after:border-4 after:border-transparent after:border-t-gray-400"></div>
                      <label
                        htmlFor="promoter-wait"
                        className="mt-1 items-start flex text-md bg-white rounded-md py-3 px-4"
                      >
                        <p className="bg-blue-100 rounded-sm ">
                          <Clock2 color="blue" size={20} />{" "}
                        </p>
                        <span className="ml-2">Wait-2 Days</span>
                      </label>

                      <div className="w-[1px] h-4  bg-gray-400 mx-auto"></div>
                      <div className="relative w-[1px] h-4 bg-gray-400 mx-auto after:content-[''] after:absolute after:top-full after:left-1/2 after:-ml-1 after:border-4 after:border-transparent after:border-t-gray-400"></div>
                      <label
                        htmlFor="promoter-wait"
                        className="mt-1 items-start flex text-md bg-white rounded-md py-3 px-4"
                      >
                        <p className="bg-green-100  rounded-sm">
                          <MessageSquare color="green" size={20} />{" "}
                        </p>
                        <span className="ml-2">SMS</span>
                      </label>

                      <div className="w-[1px] h-4  bg-gray-400 mx-auto"></div>
                      <div className="relative w-[1px] h-4 bg-gray-400 mx-auto after:content-[''] after:absolute after:top-full after:left-1/2 after:-ml-1 after:border-4 after:border-transparent after:border-t-gray-400"></div>

                      <label
                        htmlFor="promoter-wait"
                        className="mt-1 items-start flex text-md bg-white rounded-md py-3 px-4"
                      >
                        <p className="bg-blue-100 rounded-sm ">
                          <Clock2 color="blue" size={20} />{" "}
                        </p>
                        <span className="ml-2">Wait-3 Days</span>
                      </label>

                      <div className="w-[1px] h-4  bg-gray-400 mx-auto"></div>
                      <div className="relative w-[1px] h-4 bg-gray-400 mx-auto after:content-[''] after:absolute after:top-full after:left-1/2 after:-ml-1 after:border-4 after:border-transparent after:border-t-gray-400"></div>

                      <label
                        htmlFor="promoter-wait"
                        className="mt-1 items-start flex text-md bg-white rounded-md py-3 px-4"
                      >
                        <p className="bg-green-100  rounded-sm">
                          <MessageSquare color="green" size={20} />{" "}
                        </p>
                        <span className="ml-2">SMS</span>
                      </label>
                    </div>
                  </div>
                </div>
              </div>
              <h4 className="text-lg font-semibold mb-2">
                Landing Page Preview
              </h4>
            
               <img src="image1.png"
                className="w-full  object-cover rounded-md mb-4"
               alt="" />
            </div>
              
              ) : (
                <div className="mb-6 border-1 border-gray-200 rounded-lg my-8">
                <h3 className="flex text-lg bg-gray-100 rounded-t-lg rounded-b-sm font-medium p-4">
                  Leads Settings
                </h3>
                <div className="p-4">
                  <div className="grid grid-cols-2 gap-4 mb-4">
                    <div>
                      <label className="block text-gray-500  font-medium mb-2">
                        Reward Type{" "}
                        <span className="text-red-500 text-md">*</span>
                      </label>
                      <div className="bg-blue-100 text-blue-600 text-center rounded-md py-5 px-4 text-md font-semibold">
                        Discount <span className="text-red-500 text-md">*</span>
                      </div>
                    </div>
                    <div>
                      <label className="block text-gray-500  font-medium mb-2">
                        Reward Value{" "}
                        <span className="text-red-500 text-md">*</span>
                      </label>
                      <input
                        type="text"
                        name="promoterRewardValue"
                       
                        placeholder="e.g., 20% "
                        className="w-full border border-gray-300 rounded-md p-5 text-sm"
                      />
                    </div>
                  </div>
      
                  <div className="my-8">
                    <label className="block text-gray-500  font-medium mb-4">
                      Reffered Message
                      <span className="text-red-500 text-md">*</span>
                    </label>
                    <textarea
                      name="promoterMessage"
                     
                      placeholder='e.g., "Hey! Share this with your friends and get $10 for each successful signup!"'
                      className="w-full border border-gray-300 rounded-md p-2 text-sm"
                      rows="5"
                    />
                  </div>
      
                  <div className="mb-4">
                    <label className="text-sm font-medium mb-2 flex items-center">
                      Form Fields<span className="text-red-500 text-md">*</span>
                      <span className="ml-1 text-gray-400 text-xs">
                        <svg
                          xmlns="http://www.w3.org/2000/svg"
                          className="h-4 w-4"
                          fill="none"
                          viewBox="0 0 24 24"
                          stroke="currentColor"
                        >
                          <path
                            strokeLinecap="round"
                            strokeLinejoin="round"
                            strokeWidth={2}
                            d="M13 16h-1v-4h-1m1-4h.01M21 12a9 9 0 11-18 0 9 9 0 0118 0z"
                          />
                        </svg>
                      </span>
                    </label>
      
                    <div className="flex flex-wrap justify-between mx-2">
                      <div className="mr-4 mb-2">
                        <input
                          type="checkbox"
                          id="field-name"
                         
                          className="h-4 w-4 mr-2"
                        />
                        <label htmlFor="field-name" className="text-md">
                          Full Name
                        </label>
                      </div>
                      <div className="mr-4 mb-2">
                        <input
                          type="checkbox"
                          id="field-email"
                         
                          className="h-4 w-4 mr-4"
                        />
                        <label htmlFor="field-email" className="text-md">
                          Email Address
                        </label>
                      </div>
                      <div className="mr-4 mb-2">
                        <input
                          type="checkbox"
                          id="field-phone"
                       
                          className="h-4 w-4 mr-4"
                        />
                        <label htmlFor="field-phone" className="text-md">
                          Phone Number
                        </label>
                      </div>
                      <div className="mb-2">
                        <input
                          type="checkbox"
                          id="field-agree"
                        
                          className="h-4 w-4 mr-4"
                        />
                        <label htmlFor="field-agree" className="text-md">
                          Agree
                        </label>
                      </div>
                    </div>
                  </div>
      
                  <div className="bg-gray-100 p-4 rounded-md mb-4">
                    <h4 className="text-lg font-semibold mb-2">
                      Follow-Up Strategy
                      <span className="text-red-500 text-md">*</span>
                    </h4>
                    <div className="p-12 px-86 flex flex-col ">
                      <label
                        htmlFor="promoter-sms"
                        className=" items-start flex text-md bg-white rounded-md py-3 px-4"
                      >
                        <p className="bg-green-100  rounded-sm">
                          <MessageSquare color="green" size={20} />{" "}
                        </p>
                        <span className="ml-2">SMS</span>
                      </label>

                      <div className="w-[1px] h-4 bg-gray-400 mx-auto"></div>
                      <div className="relative w-[1px] h-4 bg-gray-400 mx-auto after:content-[''] after:absolute after:top-full after:left-1/2 after:-ml-1 after:border-4 after:border-transparent after:border-t-gray-400"></div>

                      <label
                        htmlFor="promoter-wait"
                        className="mt-1 items-start flex text-md bg-white rounded-md py-3 px-4"
                      >
                        <p className="bg-blue-100 rounded-sm ">
                          <Clock2 color="blue" size={20} />{" "}
                        </p>
                        <span className="ml-2">Wait-5 Days</span>
                      </label>

                      <div className="w-[1px] h-4  bg-gray-400 mx-auto"></div>
                      <div className="relative w-[1px] h-4 bg-gray-400 mx-auto after:content-[''] after:absolute after:top-full after:left-1/2 after:-ml-1 after:border-4 after:border-transparent after:border-t-gray-400"></div>
                      <label
                        htmlFor="promoter-wait"
                        className="mt-1 items-start flex text-md bg-white rounded-md py-3 px-4"
                      >
                        <p className="bg-green-100  rounded-sm">
                          <Mail color="green" size={20} />{" "}
                        </p>
                        <span className="ml-2">Email</span>
                      </label>

                      <div className="w-[1px] h-4  bg-gray-400 mx-auto"></div>
                      <div className="relative w-[1px] h-4 bg-gray-400 mx-auto after:content-[''] after:absolute after:top-full after:left-1/2 after:-ml-1 after:border-4 after:border-transparent after:border-t-gray-400"></div>
                      <label
                        htmlFor="promoter-wait"
                        className="mt-1 items-start flex text-md bg-white rounded-md py-3 px-4"
                      >
                        <p className="bg-blue-100 rounded-sm ">
                          <Clock2 color="blue" size={20} />{" "}
                        </p>
                        <span className="ml-2">Wait-2 Days</span>
                      </label>

                      <div className="w-[1px] h-4  bg-gray-400 mx-auto"></div>
                      <div className="relative w-[1px] h-4 bg-gray-400 mx-auto after:content-[''] after:absolute after:top-full after:left-1/2 after:-ml-1 after:border-4 after:border-transparent after:border-t-gray-400"></div>
                      <label
                        htmlFor="promoter-wait"
                        className="mt-1 items-start flex text-md bg-white rounded-md py-3 px-4"
                      >
                        <p className="bg-green-100  rounded-sm">
                          <MessageSquare color="green" size={20} />{" "}
                        </p>
                        <span className="ml-2">SMS</span>
                      </label>

                      <div className="w-[1px] h-4  bg-gray-400 mx-auto"></div>
                      <div className="relative w-[1px] h-4 bg-gray-400 mx-auto after:content-[''] after:absolute after:top-full after:left-1/2 after:-ml-1 after:border-4 after:border-transparent after:border-t-gray-400"></div>

                      <label
                        htmlFor="promoter-wait"
                        className="mt-1 items-start flex text-md bg-white rounded-md py-3 px-4"
                      >
                        <p className="bg-blue-100 rounded-sm ">
                          <Clock2 color="blue" size={20} />{" "}
                        </p>
                        <span className="ml-2">Wait-3 Days</span>
                      </label>

                      <div className="w-[1px] h-4  bg-gray-400 mx-auto"></div>
                      <div className="relative w-[1px] h-4 bg-gray-400 mx-auto after:content-[''] after:absolute after:top-full after:left-1/2 after:-ml-1 after:border-4 after:border-transparent after:border-t-gray-400"></div>

                      <label
                        htmlFor="promoter-wait"
                        className="mt-1 items-start flex text-md bg-white rounded-md py-3 px-4"
                      >
                        <p className="bg-green-100  rounded-sm">
                          <MessageSquare color="green" size={20} />{" "}
                        </p>
                        <span className="ml-2">SMS</span>
                      </label>
                    </div>
                  </div>
                  <h4 className="text-lg font-semibold mb-2">
                Landing Page Preview
              </h4>
            
               <img src="image2.png"
                className="w-full  object-cover rounded-md mb-4"
                 alt="" />
                </div>

               
              </div>
              
              
              )}
               
            </div>

             
            <button  className="bg-gradient-to-r from-blue-500 to-blue-200 text-white text-md font-medium  py-2 px-4 rounded-lg text-center items-center  w-[30%]">
                   Edit
            </button>

           
          </div>
        )}

        {activeTab === "leads" && (
          <div className="mb-6 border-1 border-gray-200 rounded-lg my-8">
          <h3 className="flex text-lg bg-gray-100 rounded-t-lg rounded-b-sm font-medium p-4">
            Leads Settings
          </h3>
        
            <div className="bg-gray-100 p-4 rounded-md m-4">
              <h4 className="text-lg font-semibold mb-2">
                Follow-Up Strategy
                <span className="text-red-500 text-md">*</span>
              </h4>
              <div className="p-12 px-86 flex flex-col ">
                <label
                  htmlFor="promoter-sms"
                  className=" items-start flex text-md bg-white rounded-md py-3 px-4"
                >
                  <p className="bg-green-100  rounded-sm">
                    <MessageSquare color="green" size={20} />{" "}
                  </p>
                  <span className="ml-2">SMS</span>
                </label>

                <div className="w-[1px] h-4 bg-gray-400 mx-auto"></div>
                <div className="relative w-[1px] h-4 bg-gray-400 mx-auto after:content-[''] after:absolute after:top-full after:left-1/2 after:-ml-1 after:border-4 after:border-transparent after:border-t-gray-400"></div>

                <label
                  htmlFor="promoter-wait"
                  className="mt-1 items-start flex text-md bg-white rounded-md py-3 px-4"
                >
                  <p className="bg-blue-100 rounded-sm ">
                    <Clock2 color="blue" size={20} />{" "}
                  </p>
                  <span className="ml-2">Wait-5 Days</span>
                </label>

                <div className="w-[1px] h-4  bg-gray-400 mx-auto"></div>
                <div className="relative w-[1px] h-4 bg-gray-400 mx-auto after:content-[''] after:absolute after:top-full after:left-1/2 after:-ml-1 after:border-4 after:border-transparent after:border-t-gray-400"></div>
                <label
                  htmlFor="promoter-wait"
                  className="mt-1 items-start flex text-md bg-white rounded-md py-3 px-4"
                >
                  <p className="bg-green-100  rounded-sm">
                    <Mail color="green" size={20} />{" "}
                  </p>
                  <span className="ml-2">Email</span>
                </label>

                <div className="w-[1px] h-4  bg-gray-400 mx-auto"></div>
                <div className="relative w-[1px] h-4 bg-gray-400 mx-auto after:content-[''] after:absolute after:top-full after:left-1/2 after:-ml-1 after:border-4 after:border-transparent after:border-t-gray-400"></div>
                <label
                  htmlFor="promoter-wait"
                  className="mt-1 items-start flex text-md bg-white rounded-md py-3 px-4"
                >
                  <p className="bg-blue-100 rounded-sm ">
                    <Clock2 color="blue" size={20} />{" "}
                  </p>
                  <span className="ml-2">Wait-2 Days</span>
                </label>

                <div className="w-[1px] h-4  bg-gray-400 mx-auto"></div>
                <div className="relative w-[1px] h-4 bg-gray-400 mx-auto after:content-[''] after:absolute after:top-full after:left-1/2 after:-ml-1 after:border-4 after:border-transparent after:border-t-gray-400"></div>
                <label
                  htmlFor="promoter-wait"
                  className="mt-1 items-start flex text-md bg-white rounded-md py-3 px-4"
                >
                  <p className="bg-green-100  rounded-sm">
                    <MessageSquare color="green" size={20} />{" "}
                  </p>
                  <span className="ml-2">SMS</span>
                </label>

                <div className="w-[1px] h-4  bg-gray-400 mx-auto"></div>
                <div className="relative w-[1px] h-4 bg-gray-400 mx-auto after:content-[''] after:absolute after:top-full after:left-1/2 after:-ml-1 after:border-4 after:border-transparent after:border-t-gray-400"></div>

                <label
                  htmlFor="promoter-wait"
                  className="mt-1 items-start flex text-md bg-white rounded-md py-3 px-4"
                >
                  <p className="bg-blue-100 rounded-sm ">
                    <Clock2 color="blue" size={20} />{" "}
                  </p>
                  <span className="ml-2">Wait-3 Days</span>
                </label>

                <div className="w-[1px] h-4  bg-gray-400 mx-auto"></div>
                <div className="relative w-[1px] h-4 bg-gray-400 mx-auto after:content-[''] after:absolute after:top-full after:left-1/2 after:-ml-1 after:border-4 after:border-transparent after:border-t-gray-400"></div>

                <label
                  htmlFor="promoter-wait"
                  className="mt-1 items-start flex text-md bg-white rounded-md py-3 px-4"
                >
                  <p className="bg-green-100  rounded-sm">
                    <MessageSquare color="green" size={20} />{" "}
                  </p>
                  <span className="ml-2">SMS</span>
                </label>
              </div>
            </div>
            
          </div>

         
        )}
          
      </div>

    
    </div>
  );
};

export default Campaign;
