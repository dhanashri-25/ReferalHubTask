import React, { useState } from "react";
import { useNavigate } from "react-router-dom";
import SetupProgress from "../components/SetupProgress";
import Button from "../components/Button";
import { PlusIcon } from "@heroicons/react/24/outline";

function FirstCampaign({ markStepComplete }) {
  const navigate = useNavigate();
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
    e.preventDefault();
    markStepComplete();
    // Navigate to dashboard or completion screen
    alert("Campaign created successfully!");
  };

  return (
    <div className="max-w-4xl mx-auto">
      <div className="bg-white p-8 rounded-lg shadow-sm">
        <div className="flex">
          <div className="w-1/3 border-r border-gray-200 pr-8">
            <SetupProgress
              steps={steps}
              currentStep={4}
              completedSteps={[1, 2, 3]}
            />
          </div>
          <div className="w-2/3 pl-8">
            <h2 className="text-xl font-medium mb-6">Create New Campaign</h2>
            <p className="text-sm text-gray-600 mb-6">
              Create a new referral campaign in just few steps.
            </p>

            <form onSubmit={handleSubmit}>
              <div className="mb-6">
                <label className="block text-sm font-medium mb-2">
                  Campaign Name
                </label>
                <input
                  type="text"
                  name="name"
                  value={campaign.name}
                  onChange={handleInputChange}
                  placeholder="e.g., Summer Referral Special"
                  className="w-full border border-gray-300 rounded-md p-2 text-sm"
                />
              </div>

              <div className="border-t border-gray-200 pt-6 mb-6">
                <h3 className="text-lg font-medium mb-4">Promoter Settings</h3>

                <div className="grid grid-cols-2 gap-4 mb-4">
                  <div>
                    <label className="block text-sm font-medium mb-2">
                      Reward Type*
                    </label>
                    <div className="bg-blue-100 text-blue-700 rounded-md py-2 px-4 text-sm font-medium">
                      Points
                    </div>
                  </div>
                  <div>
                    <label className="block text-sm font-medium mb-2">
                      Reward Value*
                    </label>
                    <input
                      type="text"
                      name="promoterRewardValue"
                      value={campaign.promoterRewardValue}
                      onChange={handleInputChange}
                      placeholder="e.g., 200 points"
                      className="w-full border border-gray-300 rounded-md p-2 text-sm"
                    />
                  </div>
                </div>

                <div className="mb-4">
                  <label className="block text-sm font-medium mb-2">
                    Promoter Message*
                  </label>
                  <textarea
                    name="promoterMessage"
                    value={campaign.promoterMessage}
                    onChange={handleInputChange}
                    placeholder='e.g., "Hey! Share this with your friends and get $10 for each successful signup!"'
                    className="w-full border border-gray-300 rounded-md p-2 text-sm"
                    rows="3"
                  />
                </div>

                <div className="bg-blue-50 p-4 rounded-md mb-4">
                  <h4 className="text-sm font-medium mb-2">
                    Follow-Up Strategy*
                  </h4>

                  <div className="mb-2 flex items-center">
                    <input
                      type="checkbox"
                      id="promoter-sms"
                      checked={campaign.promoterFollowUp.useSms}
                      onChange={() =>
                        handleCheckboxChange("promoterFollowUp", "useSms")
                      }
                      className="mr-2"
                    />
                    <label htmlFor="promoter-sms" className="text-sm">
                      SMS
                    </label>
                  </div>

                  <div className="mb-2 flex items-center">
                    <input
                      type="checkbox"
                      id="promoter-wait"
                      className="mr-2"
                    />
                    <label htmlFor="promoter-wait" className="text-sm">
                      Wait 3 days
                    </label>
                  </div>

                  <div className="mb-2">
                    <p className="text-xs mb-1">Action Type</p>
                    <div className="flex">
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
                          className="mr-1"
                        />
                        <label htmlFor="promoter-email" className="text-xs">
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
                          className="mr-1"
                        />
                        <label
                          htmlFor="promoter-sms-action"
                          className="text-xs"
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
                          className="mr-1"
                        />
                        <label
                          htmlFor="promoter-notification"
                          className="text-xs"
                        >
                          Web Notification
                        </label>
                      </div>
                    </div>
                  </div>

                  <div className="mb-2">
                    <label className="block text-xs mb-1">Phone Number</label>
                    <select className="border border-gray-300 rounded-md text-xs p-1 w-full">
                      <option value="">Select</option>
                    </select>
                  </div>

                  <div className="mb-2">
                    <label className="block text-xs mb-1">
                      Follow-Up Message
                    </label>
                    <textarea
                      placeholder="Enter message..."
                      className="border border-gray-300 rounded-md text-xs p-1 w-full"
                      rows="2"
                    />
                  </div>

                  <button
                    type="button"
                    className="bg-blue-500 text-white text-xs py-1 px-3 rounded-md flex items-center"
                  >
                    <PlusIcon className="h-3 w-3 mr-1" /> Add Action
                  </button>
                </div>
              </div>

              <div className="border-t border-gray-200 pt-6 mb-6">
                <h3 className="text-lg font-medium mb-4">Leads Settings</h3>

                <div className="grid grid-cols-2 gap-4 mb-4">
                  <div>
                    <label className="block text-sm font-medium mb-2">
                      Reward Type*
                    </label>
                    <div className="bg-blue-100 text-blue-700 rounded-md py-2 px-4 text-sm font-medium">
                      Discount
                    </div>
                  </div>
                  <div>
                    <label className="block text-sm font-medium mb-2">
                      Reward Value*
                    </label>
                    <input
                      type="text"
                      name="leadRewardValue"
                      value={campaign.leadRewardValue}
                      onChange={handleInputChange}
                      placeholder="e.g., 20%"
                      className="w-full border border-gray-300 rounded-md p-2 text-sm"
                    />
                  </div>
                </div>

                <div className="mb-4">
                  <label className="block text-sm font-medium mb-2">
                    Referral Message*
                  </label>
                  <textarea
                    name="leadMessage"
                    value={campaign.leadMessage}
                    onChange={handleInputChange}
                    placeholder=""
                    className="w-full border border-gray-300 rounded-md p-2 text-sm"
                    rows="3"
                  />
                </div>

                <div className="mb-4">
                  <label className="block text-sm font-medium mb-2 flex items-center">
                    Form Fields*
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

                  <div className="flex flex-wrap">
                    <div className="mr-4 mb-2">
                      <input
                        type="checkbox"
                        id="field-name"
                        checked={campaign.formFields.fullName}
                        onChange={() =>
                          handleCheckboxChange("formFields", "fullName")
                        }
                        className="mr-1"
                      />
                      <label htmlFor="field-name" className="text-sm">
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
                        className="mr-1"
                      />
                      <label htmlFor="field-email" className="text-sm">
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
                        className="mr-1"
                      />
                      <label htmlFor="field-phone" className="text-sm">
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
                        className="mr-1"
                      />
                      <label htmlFor="field-agree" className="text-sm">
                        Agree
                      </label>
                    </div>
                  </div>
                </div>

                <div className="bg-blue-50 p-4 rounded-md mb-4">
                  <h4 className="text-sm font-medium mb-2">
                    Follow-Up Strategy*
                  </h4>

                  <div className="mb-2 flex items-center">
                    <input
                      type="checkbox"
                      id="lead-sms"
                      checked={campaign.leadFollowUp.useSms}
                      onChange={() =>
                        handleCheckboxChange("leadFollowUp", "useSms")
                      }
                      className="mr-2"
                    />
                    <label htmlFor="lead-sms" className="text-sm">
                      SMS
                    </label>
                  </div>

                  <div className="mb-2 flex items-center">
                    <input type="checkbox" id="lead-wait" className="mr-2" />
                    <label htmlFor="lead-wait" className="text-sm">
                      Wait 3 days
                    </label>
                  </div>

                  <div className="mb-2">
                    <p className="text-xs mb-1">Action Type</p>
                    <div className="flex">
                      <div className="flex items-center mr-4">
                        <input
                          type="radio"
                          id="lead-email"
                          name="leadActionType"
                          checked={campaign.leadFollowUp.actionType === "Email"}
                          onChange={() =>
                            handleFollowUpChange(
                              "leadFollowUp",
                              "actionType",
                              "Email"
                            )
                          }
                          className="mr-1"
                        />
                        <label htmlFor="lead-email" className="text-xs">
                          Email
                        </label>
                      </div>
                      <div className="flex items-center mr-4">
                        <input
                          type="radio"
                          id="lead-sms-action"
                          name="leadActionType"
                          checked={campaign.leadFollowUp.actionType === "SMS"}
                          onChange={() =>
                            handleFollowUpChange(
                              "leadFollowUp",
                              "actionType",
                              "SMS"
                            )
                          }
                          className="mr-1"
                        />
                        <label htmlFor="lead-sms-action" className="text-xs">
                          SMS
                        </label>
                      </div>
                      <div className="flex items-center">
                        <input
                          type="radio"
                          id="lead-notification"
                          name="leadActionType"
                          checked={
                            campaign.leadFollowUp.actionType === "Notification"
                          }
                          onChange={() =>
                            handleFollowUpChange(
                              "leadFollowUp",
                              "actionType",
                              "Notification"
                            )
                          }
                          className="mr-1"
                        />
                        <label htmlFor="lead-notification" className="text-xs">
                          Web Notification
                        </label>
                      </div>
                    </div>
                  </div>

                  <div className="mb-2">
                    <label className="block text-xs mb-1">Phone Number</label>
                    <select className="border border-gray-300 rounded-md text-xs p-1 w-full">
                      <option value="">Select</option>
                    </select>
                  </div>

                  <div className="mb-2">
                    <label className="block text-xs mb-1">
                      Follow-Up Message
                    </label>
                    <textarea
                      placeholder="Enter message..."
                      className="border border-gray-300 rounded-md text-xs p-1 w-full"
                      rows="2"
                    />
                  </div>

                  <button
                    type="button"
                    className="bg-blue-500 text-white text-xs py-1 px-3 rounded-md flex items-center"
                  >
                    <PlusIcon className="h-3 w-3 mr-1" /> Add Action
                  </button>
                </div>
              </div>

              <div className="mt-8">
                <Button primary type="submit" className="w-full">
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
