export default function SubmissionSuccess() {
    return (
      <div className="flex h-screen">

  
        {/* Main Content */}
        <main className="flex-1 bg-gray-100 p-6 flex justify-center items-center">
          <div className="bg-white p-8 rounded-lg shadow-lg max-w-xl text-center">
            <h2 className="text-xl font-semibold mb-4">Module One Assessment</h2>
            <p className="text-gray-500 mb-6">Time: 1 hour</p>
           
            {/* Success Message */}
            <div className="border border-gray-300 p-8 rounded-lg mb-8">
              <h3 className="text-lg font-bold text-yellow-500 mb-4">
                Module one assessment submitted successfully
              </h3>
              <div className="flex justify-center">
                <svg
                  xmlns="http://www.w3.org/2000/svg"
                  fill="none"
                  viewBox="0 0 24 24"
                  strokeWidth="2"
                  stroke="currentColor"
                  className="w-12 h-12 text-yellow-500"
                >
                  <path
                    strokeLinecap="round"
                    strokeLinejoin="round"
                    d="M5 13l4 4L19 7"
                  />
                </svg>
              </div>
            </div>
  
            {/* View Results Button */}
            <button className="px-6 py-2 bg-yellow-500 text-white rounded-lg shadow-md hover:bg-yellow-600">
              View Results
            </button>
          </div>
        </main>
      </div>
    );
  }