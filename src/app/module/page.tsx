
import React from 'react';
import Image from 'next/image';
import { FaHome, FaUserTie, FaClipboardList } from 'react-icons/fa';
import { MdPerson } from 'react-icons/md';

const ModulePage = () => {
  return (
    <div id="teacher" className="flex min-h-screen bg-gray-100">
    
      <aside className="w-64 bg-blue-900 text-white flex flex-col">
        <div className="flex   py-8 ml-8">
          <Image
            src="/images/logo.png"
            alt="Ujuzi Logo"
            width={100}
            height={100}
          />
        </div>

        <nav className="flex-grow px-4 space-y-6">
          <a href="#" className="flex items-center text-lg space-x-4 hover:bg-blue-700 p-3 rounded-md">
            <FaHome />
            <span>Home</span>
          </a>
          <a href="#" className="flex items-center text-lg space-x-4 hover:bg-yellow-500 p-3 rounded-md">
            <FaUserTie />
            <span >Teachers</span>
          </a>
          <a href="#assessment" className="flex items-center text-lg space-x-4 hover:bg-blue-700 p-3 rounded-md">
            <FaClipboardList />
            <span>Assessment</span>
          </a>
          <a href="#" className="flex items-center text-lg space-x-4 hover:bg-blue-700 p-3 rounded-md">
            <MdPerson />
            <span>Trainers</span>
          </a>
        </nav>
       
      </aside>

     
      <main className="flex-grow p-10">
        
        <div className="flex justify-between items-center">
          <h1 className="text-xl font-bold">Module 1</h1>
          <div className="flex items-center space-x-4">
            <Image
              src="/images/notification.png" 
              alt="User Avatar"
              width={40}
              height={40}
              className="rounded-full"
            />
            <div className="w-6 h-6 bg-gray-200 rounded-full flex items-center justify-center">
            
            </div>
            
          </div>
          
        </div>

       
        <div className="mt-8 bg-white p-6 rounded-lg shadow-md">
          <div className="mb-4">
            <h2 className="text-yellow-500 text-lg font-bold">Question 2</h2>
          </div>

          <div className="mb-6">
            <p className="text-xl">How many countries are there in Africa?</p>
            <div className="mt-4 space-y-2">
              <label className="block p-4 bg-gray-50 rounded-lg border border-gray-200">
                A) 54
              </label>
              <label className="block p-4 bg-gray-50 rounded-lg border border-gray-200">
                B) 50
              </label>
              <label className="block p-4 bg-gray-50 rounded-lg border border-gray-200">
                C) 75
              </label>
              <label className="block p-4 bg-gray-50 rounded-lg border border-gray-200">
                D) 34
              </label>
            </div>
          </div>

        
          <div className="flex justify-between">
            <button className="bg-white border border-blue-500 text-blue-500 px-6 py-2 rounded-full hover:bg-gray-100">
              Previous
            </button>
            <button className="bg-yellow-500 text-white px-6 py-2 rounded-full hover:bg-yellow-600">
              Next Question
            </button>
          </div>
        </div>
      </main>
    </div>
  );
};

export default ModulePage;
