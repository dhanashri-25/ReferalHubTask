import React, { useState } from "react";
import { FcGoogle } from "react-icons/fc";
import { FaFacebookF, FaLinkedinIn } from "react-icons/fa";
import { SiX } from "react-icons/si";
import { Eye, EyeOff } from "lucide-react";

export default function LoginPage() {
  const [showPassword, setShowPassword] = useState(false);

  return (
    <div className="min-h-screen flex items-center justify-center bg-gray-100 relative overflow-hidden">
      

      <div className="bg-white rounded-2xl shadow-lg p-8 w-full max-w-md z-10">
        <h2 className="text-xl font-semibold text-gray-700 text-center mb-6">
          Login to ReferralHub
        </h2>

        {/* OAuth Button */}
        <button className="flex items-center justify-center w-full mb-4 py-2 px-4 border border-blue-500 text-blue-500 rounded-lg hover:bg-blue-50 transition">
          Continue with Google/Microsoft
        </button>

        {/* Magic Link */}
        <div className="mb-4">
          <label className="block text-gray-600 mb-1">Magic Link Login</label>
          <input
            type="email"
            placeholder="Enter your email"
            className="w-full px-3 py-2 border border-gray-300 rounded-lg placeholder-gray-400 focus:outline-none focus:ring-2 focus:ring-blue-300"
          />
        </div>
        <button className="w-full mb-6 py-2 px-4 bg-gradient-to-r from-blue-500 to-blue-300 text-white rounded-lg hover:opacity-90 transition">
          Send Magic Link
        </button>

        {/* Divider */}
        <div className="flex items-center mb-6">
          <hr className="flex-grow border-gray-300" />
          <span className="mx-2 text-gray-500">or</span>
          <hr className="flex-grow border-gray-300" />
        </div>

        {/* Email & Password */}
        <div className="mb-4">
          <label className="block text-gray-600 mb-1">Email</label>
          <input
            type="email"
            placeholder="robert.fox@myemail.com"
            className="w-full px-3 py-2 border border-gray-300 rounded-lg placeholder-gray-400 focus:outline-none focus:ring-2 focus:ring-blue-300"
          />
        </div>
        <div className="mb-4 relative">
          <label className="block text-gray-600 mb-1">Password</label>
          <input
            type={showPassword ? "text" : "password"}
            placeholder="Enter password"
            className="w-full px-3 py-2 border border-gray-300 rounded-lg placeholder-gray-400 focus:outline-none focus:ring-2 focus:ring-blue-300 pr-10"
          />
          <button
            type="button"
            onClick={() => setShowPassword(!showPassword)}
            className="absolute right-3 top-1/2 transform -translate-y-1/2 text-gray-500"
          >
            {showPassword ? <EyeOff size={20} /> : <Eye size={20} />}
          </button>
        </div>

        {/* Remember & Forgot */}
        <div className="flex items-center justify-between mb-6">
          <label className="flex items-center text-gray-600">
            <input type="checkbox" className="mr-2" />
            Remember Me
          </label>
          <a href="#" className="text-blue-500 hover:underline text-sm">
            Forgot password?
          </a>
        </div>

        {/* Login Button */}
        <button className="w-full mb-6 py-2 px-4 bg-gradient-to-r from-blue-500 to-blue-300 text-white rounded-lg hover:opacity-90 transition">
          Login
        </button>

        {/* Divider */}
        <div className="flex items-center mb-6">
          <hr className="flex-grow border-gray-300" />
          <span className="mx-2 text-gray-500">or</span>
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

        {/* Register link */}
        <p className="text-center text-gray-600">
          Don’t have an account?{" "}
          <a href="#" className="text-blue-500 hover:underline">
            Register now
          </a>
        </p>
      </div>
    </div>
  );
}
