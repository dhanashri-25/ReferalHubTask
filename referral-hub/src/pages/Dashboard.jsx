import React, { useState, useEffect } from "react";
import {
  BarChart,
  Line,
  LineChart,
  Pie,
  PieChart,
  Cell,
  XAxis,
  YAxis,
  CartesianGrid,
  Tooltip,
  Legend,
  ResponsiveContainer,
} from "recharts";
import {
  Users,
  MessageCircle,
  DollarSign,
  Award,
  RefreshCw,
  Share2,
  CheckCircle,
  Clock,
  ArrowUp,
} from "lucide-react";

const Dashboard = () => {
  // Dummy data
  const [data, setData] = useState({
    totalPromoters: 1234,
    conversionRate: 23.5,
    revenueGenerated: 12345,
    activesCampaigns: 3,
    repeatReferralRate: 42,
    referralEngagementRate: 67,
    churcRateOfLeads: 38,
    upsellRateOfLeads: 19,
    performanceOverTime: [
      { month: "Jan", value: 30 },
      { month: "Feb", value: 40 },
      { month: "Mar", value: 35 },
      { month: "Apr", value: 50 },
      { month: "May", value: 45 },
      { month: "Jun", value: 55 },
      { month: "Jul", value: 45 },
      { month: "Aug", value: 60 },
      { month: "Sep", value: 55 },
    ],
    conversionSuccessRate: [
      { name: "Converted", value: 65 },
      { name: "Not Converted", value: 35 },
    ],
    topChannels: [
      { name: "Email", value: 78 },
      { name: "Social", value: 45 },
      { name: "Website", value: 23 },
    ],
    recentActivities: [
      { action: "Adam created SRO", date: "28-4-2024", time: "10:30 AM" },
      {
        action: "John Doe signed up from your referral link",
        date: "27-4-2024",
        time: "8:22 AM",
      },
      {
        action: "You reached 100 referral milestones",
        date: "24-3-2024",
        time: "9:30 AM",
      },
      {
        action: "You started your referral campaign",
        date: "21-3-2024",
        time: "7:00 AM",
      },
    ],
    leaderboard: [
      {
        rank: 1,
        name: "Cherry Gordon",
        conversions: 185,
        referrals: 60,
        successRate: 80,
        revenue: "$2,500",
      },
      {
        rank: 2,
        name: "Kathy Laurent",
        conversions: 172,
        referrals: 57,
        successRate: 80,
        revenue: "$2,350",
      },
      {
        rank: 3,
        name: "Maria Chaplin",
        conversions: 170,
        referrals: 60,
        successRate: 80,
        revenue: "$2,200",
      },
      {
        rank: 4,
        name: "James Morgan",
        conversions: 167,
        referrals: 55,
        successRate: 70,
        revenue: "$2,100",
      },
      {
        rank: 5,
        name: "Joseph Klein",
        conversions: 160,
        referrals: 52,
        successRate: 80,
        revenue: "$2,050",
      },
      {
        rank: 6,
        name: "Marry Hopkins",
        conversions: 155,
        referrals: 50,
        successRate: 70,
        revenue: "$1,950",
      },
      {
        rank: 7,
        name: "Hugh Neth",
        conversions: 152,
        referrals: 48,
        successRate: 65,
        revenue: "$1,870",
      },
      {
        rank: 8,
        name: "Kerry Morris",
        conversions: 150,
        referrals: 50,
        successRate: 80,
        revenue: "$1,800",
      },
    ],
  });

  const COLORS = ["#6366F1", "#E5E7EB"];

  return (
    <div className="flex flex-col min-h-screen ">
      {/* Sidebar */}
      <div className="flex flex-1">
        <div className="flex-1 overflow-x-hidden overflow-y-auto">
          <div className="p-6">
            <div className="grid grid-cols-1 md:grid-cols-4 gap-6 mb-6">
              <div className="bg-white rounded-md p-4 flex items-center">
                <div className="w-10 h-10 rounded-full bg-gray-300 flex items-center justify-center mr-4">
                  <Users className="text-gray-600" size={20} />
                </div>
                <div>
                  <p className="text-sm font-medium text-gray-500 ">
                    Total Promoters
                  </p>
                  <div className="flex flex-col items-baseline">
                    <h2 className="text-xl font-bold text-gray-900 mr-2 my-1">
                      {data.totalPromoters.toLocaleString()}
                    </h2>
                    <div className="flex gap-">
                      <span className="text-xs text-green-400">+12%</span>
                      <span className="text-xs text-gray-400">
                        vs last month
                      </span>
                    </div>
                  </div>
                </div>
              </div>

              <div className="bg-white rounded-md p-4 flex items-center">
                <div className="w-10 h-10 rounded-full bg-orange-100 flex items-center justify-center mr-4">
                  <Share2 className="text-orange-500" size={20} />
                </div>
                <div>
                  <p className="text-sm font-medium text-gray-500">
                    Conversion Rate
                  </p>
                  <div className="flex flex-col items-baseline">
                    <h2 className="text-xl font-bold text-gray-900 mr-2 my-1">
                      {data.conversionRate}%
                    </h2>
                    <div className="flex gap-3">
                      <span className="text-xs text-green-400">+15%</span>
                      <span className="text-xs text-gray-400">
                        from last month
                      </span>
                    </div>
                  </div>
                </div>
              </div>

              {/* Revenue Generated */}
              <div className="bg-white rounded-md p-4 flex items-center">
                <div className="w-10 h-10 rounded-full bg-pink-100 flex items-center justify-center mr-4">
                  <DollarSign className="text-pink-500" size={20} />
                </div>
                <div>
                  <p className="text-sm font-medium text-gray-500">
                    Revenue Generated
                  </p>
                  <div className="flex flex-col items-baseline">
                    <h2 className="text-xl font-bold text-gray-900 mr-2 my-1">
                      ${data.revenueGenerated.toLocaleString()}
                    </h2>
                    <div className="flex gap-3">
                      <span className="text-xs text-green-400">+20%</span>
                      <span className="text-xs text-gray-400">
                        from last month
                      </span>
                    </div>
                  </div>
                </div>
              </div>

              {/* Active Campaigns */}
              <div className="bg-white rounded-md p-4 flex items-center">
                <div className="w-10 h-10 rounded-full bg-blue-100 flex items-center justify-center mr-4">
                  <Award className="text-blue-500" size={20} />
                </div>
                <div>
                  <p className="text-sm font-medium text-gray-500">
                    Active Campaigns
                  </p>
                  <div className="flex flex-col items-baseline">
                    <h2 className="text-xl font-bold text-gray-900 mr-2 my-1">
                      {data.activesCampaigns}
                    </h2>
                    <div className="flex gap-3">
                      <span className="text-xs text-gray-400">
                        +0% from last month
                      </span>
                    </div>
                  </div>
                </div>
              </div>
            </div>

            {/* Rates Overview */}
            <div className="grid grid-cols-1 md:grid-cols-4 gap-6 mb-6">
              <div className="bg-white rounded-md p-4">
                <div className="flex items-center justify-between mb-4">
                  <p className="text-sm font-medium text-gray-700">
                    Repeat Referral Rate
                  </p>
                  <div className="text-gray-400">
                    <RefreshCw size={16} />
                  </div>
                </div>
                <div className="flex items-center justify-center">
                  <div className="relative w-28 h-28">
                    <svg viewBox="0 0 36 36" className="w-full h-full">
                      <path
                        d="M18 2.0845
                          a 15.9155 15.9155 0 0 1 0 31.831
                          a 15.9155 15.9155 0 0 1 0 -31.831"
                        fill="none"
                        stroke="#E5E7EB"
                        strokeWidth="3"
                      />
                      <path
                        d="M18 2.0845
                          a 15.9155 15.9155 0 0 1 0 31.831
                          a 15.9155 15.9155 0 0 1 0 -31.831"
                        fill="none"
                        stroke="#4ADE80"
                        strokeWidth="3"
                        strokeDasharray={`${data.repeatReferralRate}, 100`}
                      />
                    </svg>
                    <div className="absolute inset-0 flex items-center justify-center">
                      <span className="text-lg font-semibold text-gray-700">
                        {data.repeatReferralRate}%
                      </span>
                    </div>
                  </div>
                </div>
              </div>

              <div className="bg-white rounded-md p-4">
                <div className="flex items-center justify-between mb-4">
                  <p className="text-sm font-medium text-gray-700">
                    Referral Engagement Rate
                  </p>
                  <div className="text-gray-400">
                    <RefreshCw size={16} />
                  </div>
                </div>
                <div className="flex items-center justify-center">
                  <div className="relative w-28 h-28">
                    <svg viewBox="0 0 36 36" className="w-full h-full">
                      <path
                        d="M18 2.0845
                          a 15.9155 15.9155 0 0 1 0 31.831
                          a 15.9155 15.9155 0 0 1 0 -31.831"
                        fill="none"
                        stroke="#E5E7EB"
                        strokeWidth="3"
                      />
                      <path
                        d="M18 2.0845
                          a 15.9155 15.9155 0 0 1 0 31.831
                          a 15.9155 15.9155 0 0 1 0 -31.831"
                        fill="none"
                        stroke="#FDA4AF"
                        strokeWidth="3"
                        strokeDasharray={`${data.referralEngagementRate}, 100`}
                      />
                    </svg>
                    <div className="absolute inset-0 flex items-center justify-center">
                      <span className="text-lg font-semibold text-gray-700">
                        {data.referralEngagementRate}%
                      </span>
                    </div>
                  </div>
                </div>
              </div>

              <div className="bg-white rounded-md p-4">
                <div className="flex items-center justify-between mb-4">
                  <p className="text-sm font-medium text-gray-700">
                    Churn Rate of Leads
                  </p>
                  <div className="text-gray-400">
                    <RefreshCw size={16} />
                  </div>
                </div>
                <div className="flex items-center justify-center">
                  <div className="relative w-28 h-28">
                    <svg viewBox="0 0 36 36" className="w-full h-full">
                      <path
                        d="M18 2.0845
                          a 15.9155 15.9155 0 0 1 0 31.831
                          a 15.9155 15.9155 0 0 1 0 -31.831"
                        fill="none"
                        stroke="#E5E7EB"
                        strokeWidth="3"
                      />
                      <path
                        d="M18 2.0845
                          a 15.9155 15.9155 0 0 1 0 31.831
                          a 15.9155 15.9155 0 0 1 0 -31.831"
                        fill="none"
                        stroke="#93C5FD"
                        strokeWidth="3"
                        strokeDasharray={`${data.churcRateOfLeads}, 100`}
                      />
                    </svg>
                    <div className="absolute inset-0 flex items-center justify-center">
                      <span className="text-lg font-semibold text-gray-700">
                        {data.churcRateOfLeads}%
                      </span>
                    </div>
                  </div>
                </div>
              </div>

              <div className="bg-white rounded-md p-4">
                <div className="flex items-center justify-between mb-4">
                  <p className="text-sm font-medium text-gray-700">
                    Upsell Rate of Leads
                  </p>
                  <div className="text-gray-400">
                    <RefreshCw size={16} />
                  </div>
                </div>
                <div className="flex items-center justify-center">
                  <div className="relative w-28 h-28">
                    <svg viewBox="0 0 36 36" className="w-full h-full">
                      <path
                        d="M18 2.0845
                          a 15.9155 15.9155 0 0 1 0 31.831
                          a 15.9155 15.9155 0 0 1 0 -31.831"
                        fill="none"
                        stroke="#E5E7EB"
                        strokeWidth="3"
                      />
                      <path
                        d="M18 2.0845
                          a 15.9155 15.9155 0 0 1 0 31.831
                          a 15.9155 15.9155 0 0 1 0 -31.831"
                        fill="none"
                        stroke="#F0ABFC"
                        strokeWidth="3"
                        strokeDasharray={`${data.upsellRateOfLeads}, 100`}
                      />
                    </svg>
                    <div className="absolute inset-0 flex items-center justify-center">
                      <span className="text-lg font-semibold text-gray-700">
                        {data.upsellRateOfLeads}%
                      </span>
                    </div>
                  </div>
                </div>
              </div>
            </div>

            {/* Charts Section */}
            <div className="grid grid-cols-1 md:grid-cols-2 gap-6 mb-6">
              {/* Performance Chart */}
              <div className="bg-white rounded-md p-4">
                <div className="flex items-center justify-between mb-4">
                  <p className="text-sm font-medium text-gray-700">
                    Promoter Performance Over Time
                  </p>
                  <div className="relative">
                    <select className="appearance-none bg-white border border-gray-200 rounded-md pl-3 pr-8 py-1 text-sm font-medium text-gray-500 focus:outline-none focus:ring-0 focus:border-indigo-500">
                      <option>Last 6 months</option>
                    </select>
                    <div className="pointer-events-none absolute inset-y-0 right-0 flex items-center px-2 text-gray-500">
                      <svg
                        className="h-4 w-4"
                        fill="currentColor"
                        viewBox="0 0 20 20"
                      >
                        <path
                          fillRule="evenodd"
                          d="M5.293 7.293a1 1 0 011.414 0L10 10.586l3.293-3.293a1 1 0 111.414 1.414l-4 4a1 1 0 01-1.414 0l-4-4a1 1 0 010-1.414z"
                          clipRule="evenodd"
                        ></path>
                      </svg>
                    </div>
                  </div>
                </div>
                <div className="h-64">
                  <ResponsiveContainer width="100%" height="100%">
                    <LineChart
                      data={data.performanceOverTime}
                      margin={{ top: 5, right: 30, left: 20, bottom: 5 }}
                    >
                      <CartesianGrid strokeDasharray="3 3" stroke="#f3f4f6" />
                      <XAxis
                        dataKey="month"
                        tick={{ fontSize: 12 }}
                        tickLine={false}
                        axisLine={false}
                      />
                      <YAxis
                        tick={{ fontSize: 12 }}
                        tickLine={false}
                        axisLine={false}
                      />
                      <Tooltip />
                      <Line
                        type="monotone"
                        dataKey="value"
                        stroke="#4F46E5"
                        strokeWidth={2}
                        dot={{ r: 4, strokeWidth: 2 }}
                        activeDot={{ r: 6, strokeWidth: 2 }}
                      />
                    </LineChart>
                  </ResponsiveContainer>
                </div>
              </div>

              {/* Conversion Success Rate */}
              <div className="bg-[#FAFAFA] p-4 flex flex-col gap-4">
                <div className="bg-white p-6 rounded-md">
                  <div className="flex items-center justify-between mb-4">
                    <p className="text-sm font-medium text-gray-700">
                      Conversion Success Rate
                    </p>
                  </div>
                  <div className="flex items-center px-2">
                    <div className="w-40 h-40">
                      <ResponsiveContainer width="100%" height="100%">
                        <PieChart>
                          <Pie
                            data={data.conversionSuccessRate}
                            cx="50%"
                            cy="50%"
                            labelLine={false}
                            outerRadius={80}
                            innerRadius={60}
                            fill="#8884d8"
                            dataKey="value"
                          >
                            {data.conversionSuccessRate.map((entry, index) => (
                              <Cell
                                key={`cell-${index}`}
                                fill={COLORS[index % COLORS.length]}
                              />
                            ))}
                          </Pie>
                        </PieChart>
                      </ResponsiveContainer>
                    </div>
                    <div className="ml-10">
                      <div className="flex items-center mb-2">
                        <div className="w-3 h-3 rounded-full bg-indigo-500 mr-2"></div>
                        <span className="text-sm text-gray-600">
                          Converted 65%
                        </span>
                      </div>
                      <div className="flex items-center">
                        <div className="w-3 h-3 rounded-full bg-gray-200 mr-2"></div>
                        <span className="text-sm text-gray-600">
                          Not Converted 35%
                        </span>
                      </div>
                    </div>
                  </div>
                </div>

                <div className="bg-white rounded-md p-4 mb-6 ">
                  <p className="text-sm font-medium text-gray-700 mb-4">
                    Top Performing Channel
                  </p>
                  <div className="flex space-x-4">
                    <div className="flex-1 bg-orange-50 rounded-lg p-3 text-center">
                      <p className="text-sm font-medium text-orange-700">
                        Email
                      </p>
                      <p className="text-xl font-bold text-orange-700 mt-1">
                        {data.topChannels[0].value}%
                      </p>
                    </div>
                    <div className="flex-1 bg-pink-50 rounded-lg p-3 text-center">
                      <p className="text-sm font-medium text-pink-700">
                        Social
                      </p>
                      <p className="text-xl font-bold text-pink-700 mt-1">
                        {data.topChannels[1].value}%
                      </p>
                    </div>
                    <div className="flex-1 bg-blue-50 rounded-lg p-3 text-center">
                      <p className="text-sm font-medium text-blue-700">
                        Website
                      </p>
                      <p className="text-xl font-bold text-blue-700 mt-1">
                        {data.topChannels[2].value}%
                      </p>
                    </div>
                  </div>
                </div>
              </div>
            </div>

            {/* Top Performing Channels */}

            {/* Recent Activities */}
            <div className="bg-white rounded-md p-4 mb-6">
              <p className="text-sm font-medium text-gray-700 mb-4">
                Recent Activities
              </p>
              <table className="min-w-full">
                <thead>
                  <tr>
                    <th className="text-left text-xs font-medium text-gray-500 uppercase tracking-wider py-2">
                      Activities
                    </th>
                    <th className="text-right text-xs font-medium text-gray-500 uppercase tracking-wider py-2">
                      Date
                    </th>
                    <th className="text-right text-xs font-medium text-gray-500 uppercase tracking-wider py-2">
                      Time
                    </th>
                  </tr>
                </thead>
                <tbody className="divide-y divide-gray-100">
                  {data.recentActivities.map((activity, index) => (
                    <tr key={index}>
                      <td className="py-3 text-sm text-gray-700">
                        {activity.action}
                      </td>
                      <td className="py-3 text-sm text-gray-500 text-right">
                        {activity.date}
                      </td>
                      <td className="py-3 text-sm text-gray-500 text-right">
                        {activity.time}
                      </td>
                    </tr>
                  ))}
                </tbody>
              </table>
            </div>

            {/* Leaderboard Table */}
            <div className="bg-white rounded-md p-4">
              <p className="text-sm font-medium text-gray-700 mb-4">
                Leaderboard Table View
              </p>
              <div className="overflow-x-auto">
                <table className="min-w-full">
                  <thead>
                    <tr className="text-left text-xs font-medium text-gray-500 uppercase tracking-wider">
                      <th className="py-3 px-2">Rank</th>
                      <th className="py-3 px-2">Promoter Name</th>
                      <th className="py-3 px-2">Conversion Rate</th>
                      <th className="py-3 px-2">Referrals Sent</th>
                      <th className="py-3 px-2">Successful Conversions</th>
                      <th className="py-3 px-2">Revenue Generated</th>
                    </tr>
                  </thead>
                  <tbody className="divide-y divide-gray-100">
                    {data.leaderboard.map((item) => (
                      <tr key={item.rank} className="text-sm">
                        <td className="py-3 px-2 font-medium text-gray-900">
                          {item.rank}
                        </td>
                        <td className="py-3 px-2 text-gray-700">{item.name}</td>
                        <td className="py-3 px-2 text-gray-700">
                          {item.conversions}
                        </td>
                        <td className="py-3 px-2 text-gray-700">
                          {item.referrals}
                        </td>
                        <td className="py-3 px-2 text-gray-700">
                          {item.successRate}%
                        </td>
                        <td className="py-3 px-2 text-gray-700">
                          {item.revenue}
                        </td>
                      </tr>
                    ))}
                  </tbody>
                </table>
              </div>
            </div>
          </div>
        </div>
      </div>
    </div>
  );
};

export default Dashboard;
