'use client'

import { useState } from 'react';

export default function Module() {
  const [selectedAnswer, setSelectedAnswer] = useState(null);

  const handleAnswerClick = (answer) => {
    setSelectedAnswer(answer);
  };

  return (
    <div className="flex h-screen">
 

      {/* Main Content */}
      <main className="flex-1 bg-gray-100 p-6">
        <div className="bg-white p-8 rounded-lg shadow-lg">
          <div className="mb-4">
            <h2 className="text-xl font-semibold">Module 1</h2>
            <p className="text-yellow-500 font-bold">Question 2</p>
          </div>

          <div className="mb-6">
            <p className="text-lg">How many countries are there in Africa?</p>
          </div>

          {/* Answer Options */}
          <div className="space-y-4">
            {['54', '50', '75', '34'].map((answer, index) => (
              <div
                key={index}
                className={`p-4 border rounded cursor-pointer ${
                  selectedAnswer === answer ? 'bg-yellow-200' : 'bg-white'
                }`}
                onClick={() => handleAnswerClick(answer)}
              >
                {`${String.fromCharCode(65 + index)}) ${answer}`}
              </div>
            ))}
          </div>

          <button className="mt-6 px-6 py-2 bg-blue-600 text-white rounded">
            SUBMIT
          </button>
        </div>
      </main>
    </div>
  );
}
        
      
    

