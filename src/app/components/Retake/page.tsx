
import React from 'react';
import Image from 'next/image';

const Retake = () => {
  return (
    <div className="fixed inset-0 bg-gray-600 bg-opacity-50 overflow-y-auto h-full w-full flex items-center justify-center p-4">
      <div className="relative bg-blue-900 text-white p-8 rounded-lg shadow-xl max-w-md w-full">
        <div className="absolute top-4 right-4 flex space-x-2">
          <div className="w-8 h-8 rounded-full bg-green-500 overflow-hidden">
            <Image src="/profile-pic.jpg" alt="Profile" width={32} height={32} />
          </div>
          <div className="w-8 h-8 rounded-full bg-blue-700 flex items-center justify-center">
            <svg xmlns="http://www.w3.org/2000/svg" fill="none" viewBox="0 0 24 24" stroke="currentColor" className="w-5 h-5">
              <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M15 17h5l-1.405-1.405A2.032 2.032 0 0118 14.158V11a6.002 6.002 0 00-4-5.659V5a2 2 0 10-4 0v.341C7.67 6.165 6 8.388 6 11v3.159c0 .538-.214 1.055-.595 1.436L4 17h5m6 0v1a3 3 0 11-6 0v-1m6 0H9" />
            </svg>
          </div>
        </div>
        
        <h2 className="text-2xl font-bold mb-4 mt-6">You are below the pass mark,</h2>
        <p className="mb-6">please read the instructions below for the next step</p>
        
        <ol className="list-decimal list-inside mb-6 space-y-2">
          <li>Modules performed under the average, will have to be reworked</li>
          <li>Please work on the first and third question</li>
        </ol>
        
        <button className="bg-yellow-500 hover:bg-yellow-600 text-blue-900 font-bold py-2 px-4 rounded transition duration-300">
          RETAKE
        </button>
      </div>
    </div>
  );
};

export default Retake;