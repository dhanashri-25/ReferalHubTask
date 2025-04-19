import React, { useState } from "react";
import { FcGoogle } from "react-icons/fc";
import { FaFacebookF, FaLinkedinIn } from "react-icons/fa";
import { SiX } from "react-icons/si";
import { Eye, EyeOff, MessageCircle } from "lucide-react";

export default function Register() {
  const [showPwd, setShowPwd] = useState(false);
  const [showConfirm, setShowConfirm] = useState(false);

  return (
    <div className="min-h-screen bg-gray-100 relative overflow-hidden">
      

      

      <div className="bg-white rounded-2xl shadow-lg p-8 w-full max-w-md mx-auto mt-12 z-10 relative">
        <h2 className="text-xl font-semibold text-gray-700 text-center mb-6">
          Register for ReferralHub
        </h2>

        {/* Email */}
        <div className="mb-4">
          <label className="block text-gray-600 text-sm mb-1">Email Id</label>
          <input
            type="email"
            placeholder="robert.fox@myemail.com"
            className="w-full px-3 py-2 border border-gray-300 rounded-lg placeholder-gray-400 text-sm focus:outline-none focus:ring-2 focus:ring-blue-300"
          />
        </div>

        {/* Create Password */}
        <div className="mb-4 relative">
          <label className="block text-gray-600 text-sm mb-1">
            Create Password
          </label>
          <input
            type={showPwd ? "text" : "password"}
            placeholder="Enter password"
            className="w-full px-3 py-2 border border-gray-300 rounded-lg placeholder-gray-400 text-sm focus:outline-none focus:ring-2 focus:ring-blue-300 pr-10"
          />
          <button
            type="button"
            onClick={() => setShowPwd(!showPwd)}
            className="absolute right-3 top-1/2 transform -translate-y-1/2 text-gray-500"
          >
            {showPwd ? <EyeOff size={18} /> : <Eye size={18} />}
          </button>
        </div>

        {/* Confirm Password */}
        <div className="mb-6 relative">
          <label className="block text-gray-600 text-sm mb-1">
            Confirm Password
          </label>
          <input
            type={showConfirm ? "text" : "password"}
            placeholder="Re-enter password"
            className="w-full px-3 py-2 border border-gray-300 rounded-lg placeholder-gray-400 text-sm focus:outline-none focus:ring-2 focus:ring-blue-300 pr-10"
          />
          <button
            type="button"
            onClick={() => setShowConfirm(!showConfirm)}
            className="absolute right-3 top-1/2 transform -translate-y-1/2 text-gray-500"
          >
            {showConfirm ? <EyeOff size={18} /> : <Eye size={18} />}
          </button>
        </div>

        {/* Register Button */}
        <button className="w-full mb-6 py-2 px-4 bg-gradient-to-r from-blue-500 to-blue-300 text-white rounded-lg hover:opacity-90 transition text-sm">
          Register
        </button>

        {/* Divider */}
        <div className="flex items-center mb-6">
          <hr className="flex-grow border-gray-300" />
          <span className="mx-2 text-gray-500 text-sm">or</span>
          <hr className="flex-grow border-gray-300" />
        </div>

        {/* Social Icons */}
        <div className="flex justify-center space-x-4 mb-6">
          <button className="p-2 bg-white border border-gray-200 rounded-full hover:shadow">
            <FcGoogle size={24} />
          </button>
          <button className="p-2 bg-blue-600 text-white rounded-full hover:opacity-90">
            <FaFacebookF size={20} />
          </button>
          <button className="p-2 bg-black text-white rounded-full hover:opacity-90">
            <SiX size={20} />
          </button>
          <button className="p-2 bg-blue-700 text-white rounded-full hover:opacity-90">
            <FaLinkedinIn size={20} />
          </button>
        </div>

        {/* Login Link */}
        <p className="text-center text-gray-600 text-sm">
          Already have an account?{" "}
          <a href="#" className="text-blue-500 hover:underline">
            Login
          </a>
        </p>
      </div>

      {/* Chat Button */}
      <button className="fixed bottom-6 right-6 p-3 bg-white rounded-full shadow-lg">
        <MessageCircle size={24} className="text-blue-500" />
      </button>
    </div>
  );
}
