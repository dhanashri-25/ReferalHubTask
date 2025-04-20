import React, { useState } from "react";
import SetupProgress from "../components/SetupProgress";
import Button from "../components/Button";
import { PlusIcon } from "@heroicons/react/24/outline";
import { Clock2, MessageSquare } from "lucide-react";

function FirstCampaign({ markStepComplete, setFirstTime, setDefaultValue }) {
  const [campaign, setCampaign] = useState({
    name: "",
    promoterRewardType: "Points",
    promoterRewardValue: "",
    promoterMessage: "",
    leadRewardType: "Discount",
    leadRewardValue: "",
    leadMessage: "",
    formFields: {
      fullName: true,
      emailAddress: true,
      phoneNumber: false,
      agree: true,
    },
    promoterFollowUp: {
      useSms: true,
      waitDays: 3,
      actionType: "SMS",
    },
    leadFollowUp: {
      useSms: true,
      waitDays: 3,
      actionType: "SMS",
    },
  });

  const steps = [
    { id: 1, name: "Set Up Business Profile" },
    { id: 2, name: "Sync Your Customer Data" },
    { id: 3, name: "Set Up AI Agent Rules" },
    { id: 4, name: "Set Up First Campaign" },
  ];
  const handleInputChange = (e) => {
    const { name, value } = e.target;
    setCampaign({
      ...campaign,
      [name]: value,
    });
  };

  const handleCheckboxChange = (section, field) => {
    setCampaign({
      ...campaign,
      [section]: {
        ...campaign[section],
        [field]: !campaign[section][field],
      },
    });
  };

  const handleFollowUpChange = (section, field, value) => {
    setCampaign({
      ...campaign,
      [section]: {
        ...campaign[section],
        [field]: value,
      },
    });
  };

  const handleSubmit = (e) => {
    setFirstTime(false);
    setDefaultValue("Dashboard");
    e.preventDefault();
    markStepComplete();
    alert("Campaign created successfully!");
  };

  return (
    <div className="mx-auto">
      <div className="bg-white p-8 rounded-lg shadow-sm">
        <div className="flex">
          <div className="w-1/3 bg-gray-100 p-8 h-screen">
            <SetupProgress
              steps={steps}
              currentStep={4}
              completedSteps={[1, 2, 3]}
            />
          </div>

          <div className="w-2/3 pl-8">
            <h2 className="text-xl font-medium  mb-1">Create New Campaign</h2>
            <p className="text-sm text-gray-400 mb-6">
              Create a new referral campaign in just few steps.
            </p>
            <div className="h-[1.2px] my-4 bg-gray-300 w-full"></div>

            <form onSubmit={handleSubmit}>
              <div className="mb-6 bg-gray-50 rounded-lg my-8">
                <label className=" flex text-sm bg-gray-100 rounded-t-lg rounded-b-sm font-medium p-4">
                  Campaign Name
                </label>
                <div className="p-4">
                  <input
                    type="text"
                    name="name"
                    value={campaign.name}
                    onChange={handleInputChange}
                    placeholder="e.g., Summer Referral Special"
                    className="w-full border border-gray-300 rounded-md p-2 text-sm "
                  />
                </div>
              </div>

              <div className="mb-6 bg-gray-50 rounded-lg my-8">
                <h3 className="flex text-lg bg-gray-100 rounded-t-lg rounded-b-sm font-medium p-4">
                  Promoter Settings
                </h3>
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
                        value={campaign.promoterRewardValue}
                        onChange={handleInputChange}
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
                      value={campaign.promoterMessage}
                      onChange={handleInputChange}
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
                    <div className="p-12 flex flex-col ">
                      <div className=" px-30">
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
                      </div>

                      <div className="w-[1px] h-4  bg-gray-400 mx-auto"></div>
                      <div className="relative w-[1px] h-4 bg-gray-400 mx-auto after:content-[''] after:absolute after:top-full after:left-1/2 after:-ml-1 after:border-4 after:border-transparent after:border-t-gray-400"></div>

                      <div className="mb-2 bg-white p-6 mx-20 mt-1 items-center rounded-lg">
                        <p className="text-sm font-sm mb-1 ">Action Type</p>
                        <div className="h-[.5px] my-4 bg-gray-300 w-full"></div>
                        <div className="flex justify-between mx-2 mr-8 my-4 ">
                          <div className="flex items-center mr-4">
                            <input
                              type="radio"
                              id="promoter-email"
                              name="promoterActionType"
                              checked={
                                campaign.promoterFollowUp.actionType === "Email"
                              }
                              onChange={() =>
                                handleFollowUpChange(
                                  "promoterFollowUp",
                                  "actionType",
                                  "Email"
                                )
                              }
                              className="mr-1 text-sm font-semibold"
                            />
                            <label
                              htmlFor="promoter-email"
                              className="text-sm font-lg"
                            >
                              Email
                            </label>
                          </div>
                          <div className="flex items-center mr-4">
                            <input
                              type="radio"
                              id="promoter-sms-action"
                              name="promoterActionType"
                              checked={
                                campaign.promoterFollowUp.actionType === "SMS"
                              }
                              onChange={() =>
                                handleFollowUpChange(
                                  "promoterFollowUp",
                                  "actionType",
                                  "SMS"
                                )
                              }
                              className="text-sm font-semibold mr-1"
                            />
                            <label
                              htmlFor="promoter-sms-action"
                              className="text-sm font-lg"
                            >
                              SMS
                            </label>
                          </div>
                          <div className="flex items-center">
                            <input
                              type="radio"
                              id="promoter-notification"
                              name="promoterActionType"
                              checked={
                                campaign.promoterFollowUp.actionType ===
                                "Notification"
                              }
                              onChange={() =>
                                handleFollowUpChange(
                                  "promoterFollowUp",
                                  "actionType",
                                  "Notification"
                                )
                              }
                              className="text-sm font-semibold mr-1"
                            />
                            <label
                              htmlFor="promoter-notification"
                              className="text-sm font-lg"
                            >
                              Wait Duration
                            </label>
                          </div>
                        </div>

                        <div className="h-[.5px] my-4 bg-gray-300 w-full"></div>

                        <div className="mb-2">
                          <label className="text-sm my-4">Phone Number</label>
                          <select className="border border-gray-300 rounded-md text-xs text-gray-400  w-full mt-4 p-3">
                            <option value="">Select</option>
                          </select>
                        </div>

                        <div className="h-[.5px] my-4 mt-6 bg-gray-300 w-full"></div>

                        <div className="mb-2">
                          <label className="text-sm my-4">
                            Follow-Up Message
                          </label>
                          <textarea
                            placeholder="Enter message..."
                            className="border border-gray-300 rounded-md text-xs text-gray-400  w-full mt-4 p-3"
                            rows="4"
                          />
                        </div>

                        <button
                          type="button"
                          className="bg-gradient-to-r from-blue-500 to-blue-200 text-white text-md font-medium py-3 px-4 rounded-xl  text-center w-full"
                        >
                          {" "}
                          <div className="flex text-center justify-center rounded-lg">
                            <span>
                              <PlusIcon className="h-6 w-6 mr-1" />
                            </span>
                            Add Action
                          </div>
                        </button>
                      </div>
                    </div>
                  </div>
                </div>
              </div>

              <div className="mb-6 bg-gray-50 rounded-lg my-8">
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
                        value={campaign.promoterRewardValue}
                        onChange={handleInputChange}
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
                      value={campaign.promoterMessage}
                      onChange={handleInputChange}
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
                          checked={campaign.formFields.fullName}
                          onChange={() =>
                            handleCheckboxChange("formFields", "fullName")
                          }
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
                          checked={campaign.formFields.emailAddress}
                          onChange={() =>
                            handleCheckboxChange("formFields", "emailAddress")
                          }
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
                          checked={campaign.formFields.phoneNumber}
                          onChange={() =>
                            handleCheckboxChange("formFields", "phoneNumber")
                          }
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
                          checked={campaign.formFields.agree}
                          onChange={() =>
                            handleCheckboxChange("formFields", "agree")
                          }
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
                    <div className="p-12 flex flex-col ">
                      <div className=" px-30">
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
                      </div>

                      <div className="w-[1px] h-4  bg-gray-400 mx-auto"></div>
                      <div className="relative w-[1px] h-4 bg-gray-400 mx-auto after:content-[''] after:absolute after:top-full after:left-1/2 after:-ml-1 after:border-4 after:border-transparent after:border-t-gray-400"></div>

                      <div className="mb-2 bg-white p-6 mx-20 mt-1 items-center rounded-lg">
                        <p className="text-sm font-sm mb-1 ">Action Type</p>
                        <div className="h-[.5px] my-4 bg-gray-300 w-full"></div>
                        <div className="flex justify-between mx-2 mr-8 my-4 ">
                          <div className="flex items-center mr-4">
                            <input
                              type="radio"
                              id="promoter-email"
                              name="promoterActionType"
                              checked={
                                campaign.promoterFollowUp.actionType === "Email"
                              }
                              onChange={() =>
                                handleFollowUpChange(
                                  "promoterFollowUp",
                                  "actionType",
                                  "Email"
                                )
                              }
                              className="h-4 w-4 mr-4 text-sm font-semibold"
                            />
                            <label
                              htmlFor="promoter-email"
                              className="text-sm font-lg"
                            >
                              Email
                            </label>
                          </div>
                          <div className="flex items-center mr-4">
                            <input
                              type="radio"
                              id="promoter-sms-action"
                              name="promoterActionType"
                              checked={
                                campaign.promoterFollowUp.actionType === "SMS"
                              }
                              onChange={() =>
                                handleFollowUpChange(
                                  "promoterFollowUp",
                                  "actionType",
                                  "SMS"
                                )
                              }
                              className="text-sm font-semibold mr-1"
                            />
                            <label
                              htmlFor="promoter-sms-action"
                              className="text-sm font-lg"
                            >
                              SMS
                            </label>
                          </div>
                          <div className="flex items-center">
                            <input
                              type="radio"
                              id="promoter-notification"
                              name="promoterActionType"
                              checked={
                                campaign.promoterFollowUp.actionType ===
                                "Notification"
                              }
                              onChange={() =>
                                handleFollowUpChange(
                                  "promoterFollowUp",
                                  "actionType",
                                  "Notification"
                                )
                              }
                              className="text-sm font-semibold mr-1"
                            />
                            <label
                              htmlFor="promoter-notification"
                              className="text-sm font-lg"
                            >
                              Wait Duration
                            </label>
                          </div>
                        </div>

                        <div className="h-[.5px] my-4 bg-gray-300 w-full"></div>

                        <div className="mb-2">
                          <label className="text-sm my-4">Phone Number</label>
                          <select className="border border-gray-300 rounded-md text-xs text-gray-400  w-full mt-4 p-3">
                            <option value="">Select</option>
                          </select>
                        </div>

                        <div className="h-[.5px] my-4 mt-6 bg-gray-300 w-full"></div>

                        <div className="mb-2">
                          <label className="text-sm my-4">
                            Follow-Up Message
                          </label>
                          <textarea
                            placeholder="Enter message..."
                            className="border border-gray-300 rounded-md text-xs text-gray-400  w-full mt-4 p-3"
                            rows="4"
                          />
                        </div>

                        <button
                          type="button"
                          className="bg-gradient-to-r from-blue-500 to-blue-200 text-white text-md font-medium py-3 px-4 rounded-xl  text-center w-full"
                        >
                          {" "}
                          <div className="flex text-center justify-center rounded-lg">
                            <span>
                              <PlusIcon className="h-6 w-6 mr-1" />
                            </span>
                            Add Action
                          </div>
                        </button>
                      </div>
                    </div>
                  </div>
                </div>
              </div>

              <div className="mt-8">
                <Button
                  primary
                  type="submit"
                  className="bg-gradient-to-r from-blue-500 to-blue-200 text-white text-lg font-medium py-3 px-4 rounded-xl  text-center w-full"
                >
                  Launch
                </Button>
              </div>
            </form>
          </div>
        </div>
      </div>
    </div>
  );
}

export default FirstCampaign;
