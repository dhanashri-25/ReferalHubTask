import React, { useState } from 'react';

const Register = ({ setIsLoggedIn }) => {
  const [email, setEmail] = useState('');
  const [password, setPassword] = useState('');
  const [confirmPassword, setConfirmPassword] = useState('');
  const [passwordVisible, setPasswordVisible] = useState(false);
  const [confirmPasswordVisible, setConfirmPasswordVisible] = useState(false);
  const [errors, setErrors] = useState({});

  const handleRegister =  async (e) => {
    e.preventDefault();
    
    const newErrors = {};
    if (!email) newErrors.email = 'Email is required';
    else if (!/\S+@\S+\.\S+/.test(email)) newErrors.email = 'Email is invalid';
    
    if (!password) newErrors.password = 'Password is required';
    else if (password.length < 6) newErrors.password = 'Password must be at least 6 characters';
    
    if (!confirmPassword) newErrors.confirmPassword = 'Please confirm your password';
    else if (password !== confirmPassword) newErrors.confirmPassword = 'Passwords do not match';
    
    if (Object.keys(newErrors).length > 0) {
      setErrors(newErrors);
      return;
    }
     
    // const res = await fetch('https://api.example.com/login', {
    //   method: 'POST',
    //   headers: {
    //     'Content-Type': 'application/json',
    //   },
    //   body: JSON.stringify({ email, password }),
    // });
    // const data = await res.json();
    // if (res.ok) {
    //  alert(data.message || 'Login Success!');
    // setIsLoggedIn(true);
    // console.log('Registration data:', { email, password });
    // }

    setIsLoggedIn(true);
    
    
  };

  const handleSocialRegister = (provider) => {
    console.log(`Registering with ${provider}`);
  };

  return (
    <div className="flex items-center justify-center min-h-screen ">
      <div className="relative w-full max-w-md p-8 bg-white rounded-lg shadow-md">
        <h1 className="text-xl font-medium text-center text-gray-800 mb-6">Register for ReferralHub</h1>
        
        <form onSubmit={handleRegister}>
          <div className="mb-4">
            <label className="block text-sm font-medium text-gray-700 mb-1">Email Id</label>
            <input
              type="email"
              className={`w-full p-2 border ${errors.email ? 'border-red-500' : 'border-gray-300'} rounded-md`}
              placeholder="robert.fox@myemail.com"
              value={email}
              onChange={(e) => setEmail(e.target.value)}
            />
            {errors.email && <p className="mt-1 text-xs text-red-500">{errors.email}</p>}
          </div>
          
          <div className="mb-4">
            <label className="block text-sm font-medium text-gray-700 mb-1">Create Password</label>
            <div className="relative">
              <input
                type={passwordVisible ? "text" : "password"}
                className={`w-full p-2 border ${errors.password ? 'border-red-500' : 'border-gray-300'} rounded-md`}
                placeholder="Enter password"
                value={password}
                onChange={(e) => setPassword(e.target.value)}
              />
              <button 
                type="button"
                className="absolute right-3 top-2 text-xs text-gray-400"
                onClick={() => setPasswordVisible(!passwordVisible)}
              >
                {passwordVisible ? "hide" : "show"}
              </button>
            </div>
            {errors.password && <p className="mt-1 text-xs text-red-500">{errors.password}</p>}
          </div>
          
          <div className="mb-6">
            <label className="block text-sm font-medium text-gray-700 mb-1">Confirm Password</label>
            <div className="relative">
              <input
                type={confirmPasswordVisible ? "text" : "password"}
                className={`w-full p-2 border ${errors.confirmPassword ? 'border-red-500' : 'border-gray-300'} rounded-md`}
                placeholder="Re-enter password"
                value={confirmPassword}
                onChange={(e) => setConfirmPassword(e.target.value)}
              />
              <button 
                type="button"
                className="absolute right-3 top-2 text-xs text-gray-400"
                onClick={() => setConfirmPasswordVisible(!confirmPasswordVisible)}
              >
                {confirmPasswordVisible ? "hide" : "show"}
              </button>
            </div>
            {errors.confirmPassword && <p className="mt-1 text-xs text-red-500">{errors.confirmPassword}</p>}
          </div>
          
          <button
            type="submit"
            className="w-full py-2 bg-gradient-to-r from-blue-500 to-blue-300 text-white rounded-md hover:bg-blue-600"
          >
            Register
          </button>
        </form>
        
        <div className="text-center text-sm text-gray-500 my-4">or</div>
        
        <div className="flex justify-center space-x-4 mb-6">
          <button 
            onClick={() => handleSocialRegister('Google')}
            className="p-2 rounded-full"
          >
            <svg xmlns="http://www.w3.org/2000/svg" width="24" height="24" viewBox="0 0 24 24" fill="#DB4437">
              <path d="M12.24 10.285V14.4h6.806c-.275 1.765-2.056 5.174-6.806 5.174-4.095 0-7.439-3.389-7.439-7.574s3.345-7.574 7.439-7.574c2.33 0 3.891.989 4.785 1.849l3.254-3.138C18.189 1.186 15.479 0 12.24 0c-6.635 0-12 5.365-12 12s5.365 12 12 12c6.926 0 11.52-4.869 11.52-11.726 0-.788-.085-1.39-.189-1.989H12.24z" />
            </svg>
          </button>
          <button 
            onClick={() => handleSocialRegister('Facebook')}
            className="p-2 rounded-full"
          >
            <svg xmlns="http://www.w3.org/2000/svg" width="24" height="24" viewBox="0 0 24 24" fill="#1877F2">
              <path d="M24 12.073c0-6.627-5.373-12-12-12s-12 5.373-12 12c0 5.99 4.388 10.954 10.125 11.854v-8.385H7.078v-3.47h3.047V9.43c0-3.007 1.792-4.669 4.533-4.669 1.312 0 2.686.235 2.686.235v2.953H15.83c-1.491 0-1.956.925-1.956 1.874v2.25h3.328l-.532 3.47h-2.796v8.385C19.612 23.027 24 18.062 24 12.073z" />
            </svg>
          </button>
          <button 
            onClick={() => handleSocialRegister('Twitter')}
            className="p-2 rounded-full"
          >
            <svg xmlns="http://www.w3.org/2000/svg" width="24" height="24" viewBox="0 0 24 24" fill="#1DA1F2">
              <path d="M23.953 4.57a10 10 0 01-2.825.775 4.958 4.958 0 002.163-2.723c-.951.555-2.005.959-3.127 1.184a4.92 4.92 0 00-8.384 4.482C7.69 8.095 4.067 6.13 1.64 3.162a4.822 4.822 0 00-.666 2.475c0 1.71.87 3.213 2.188 4.096a4.904 4.904 0 01-2.228-.616v.06a4.923 4.923 0 003.946 4.827 4.996 4.996 0 01-2.212.085 4.936 4.936 0 004.604 3.417 9.867 9.867 0 01-6.102 2.105c-.39 0-.779-.023-1.17-.067a13.995 13.995 0 007.557 2.209c9.053 0 13.998-7.496 13.998-13.985 0-.21 0-.42-.015-.63A9.935 9.935 0 0024 4.59z" />
            </svg>
          </button>
          <button 
            onClick={() => handleSocialRegister('LinkedIn')}
            className="p-2 rounded-full"
          >
            <svg xmlns="http://www.w3.org/2000/svg" width="24" height="24" viewBox="0 0 24 24" fill="#0A66C2">
              <path d="M20.447 20.452h-3.554v-5.569c0-1.328-.027-3.037-1.852-3.037-1.853 0-2.136 1.445-2.136 2.939v5.667H9.351V9h3.414v1.561h.046c.477-.9 1.637-1.85 3.37-1.85 3.601 0 4.267 2.37 4.267 5.455v6.286zM5.337 7.433c-1.144 0-2.063-.926-2.063-2.065 0-1.138.92-2.063 2.063-2.063 1.14 0 2.064.925 2.064 2.063 0 1.139-.925 2.065-2.064 2.065zm1.782 13.019H3.555V9h3.564v11.452zM22.225 0H1.771C.792 0 0 .774 0 1.729v20.542C0 23.227.792 24 1.771 24h20.451C23.2 24 24 23.227 24 22.271V1.729C24 .774 23.2 0 22.222 0h.003z" />
            </svg>
          </button>
        </div>
        
        <div className="text-center text-sm text-gray-600">
          Already have an account? 
          <a href="/" className="text-blue-500 ml-1 hover:underline">
            Login
          </a>
        </div>
      </div>
    </div>
  );
};

export default Register;