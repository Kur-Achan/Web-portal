// pages/signup.tsx
import React from 'react';
import Image from 'next/image';
import Link from 'next/link';

const SignupPage = () => {
  return (
    <div className="min-h-screen flex flex-col lg:flex-row">
    
      <div className="hidden lg:flex lg:w-1/2 items-center justify-center bg-gray-100 p-6">
        <div className="w-full h-full relative">
          <Image
            src="/images/back_picture.png"
            const alt="Welcome to Ujuzi"
            layout="fill"
            objectFit="cover"
            className="rounded-md"
          />
          <div className="absolute inset-0 bg-[#1A315b] bg-opacity-60 flex items-center justify-center">
            <h1 className="text-white text-4xl font-bold">Welcome to Ujuzi</h1>
          </div>
        </div>
      </div>

   
      <div className="w-full lg:w-1/2 flex items-center justify-center p-6 lg:p-12">
        <div className="w-full max-w-md">
          <h2 className="text-2xl font-bold text-center mb-6">SIGN UP</h2>

         
          <form className="space-y-4">
          
            <div>
              <label className="block text-gray-700">Username</label>
              <input
                type="text"
                placeholder="Enter username"
                className="w-full p-3 border border-gray-300 rounded-md focus:outline-none focus:ring-2 focus:ring-blue-500"
              />
            </div>

          
            <div>
              <label className="block text-gray-700">Email</label>
              <input
                type="email"
                placeholder="Enter Email"
                className="w-full p-3 border border-gray-300 rounded-md focus:outline-none focus:ring-2 focus:ring-blue-500"
              />
            </div>

          
            <div>
              <label className="block text-gray-700">TSC Number</label>
              <input
                type="text"
                placeholder="Enter TSC No."
                className="w-full p-3 border border-gray-300 rounded-md focus:outline-none focus:ring-2 focus:ring-blue-500"
              />
            </div>

           
            <div>
              <label className="block text-gray-700">Password</label>
              <input
                type="password"
                placeholder="Enter password"
                className="w-full p-3 border border-gray-300 rounded-md focus:outline-none focus:ring-2 focus:ring-blue-500"
              />
            </div>

            {/* Confirm Password Field */}
            <div>
              <label className="block text-gray-700">Confirm Password</label>
              <input
                type="password"
                placeholder="Confirm password"
                className="w-full p-3 border border-gray-300 rounded-md focus:outline-none focus:ring-2 focus:ring-blue-500"
              />
            </div>

            {/* Sign-up Button */}
            <button
              type="submit"
              className="w-full bg-[#1a315b] text-white p-3 rounded-md font-semibold hover:bg-blue-600"
            >
              SIGN UP
            </button>
          </form>

          {/* OR Divider */}
          <div className="my-6 text-center text-gray-600">OR</div>

          {/* Google Sign-up Button */}
          <button className="w-full flex items-center justify-center border border-gray-300 p-3 rounded-md hover:bg-gray-50">
            <img
              src="/images/google.png" // Replace with Google icon path
              alt="Google"
              className="w-5 h-5 mr-2"
            />
            <span className="text-gray-700 font-medium">Sign up with Google</span>
          </button>

          {/* Already have an account? */}
          <p className="text-center mt-4 text-gray-600">
            Already have an account?{' '}
            <Link href="/login" className="text-blue-500 hover:underline">
              Login
            </Link>
          </p>
        </div>
      </div>
    </div>
  );
};

export default SignupPage;